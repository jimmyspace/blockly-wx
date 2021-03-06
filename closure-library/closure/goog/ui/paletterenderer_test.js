// Copyright 2012 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('goog.ui.PaletteRendererTest');
goog.setTestOnly('goog.ui.PaletteRendererTest');

goog.require('goog.a11y.aria');
goog.require('goog.a11y.aria.Role');
goog.require('goog.a11y.aria.State');
goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.html.testing');
goog.require('goog.testing.jsunit');
goog.require('goog.ui.Palette');
goog.require('goog.ui.PaletteRenderer');

let sandbox;
const items = [
  '<div aria-label="label-0"></div>', '<div title="title-1"></div>',
  '<div aria-label="label-2" title="title-2"></div>',
  '<div><span title="child-title-3"></span></div>'
];
let itemEls;
let renderer;
let palette;

function setUp() {}

function tearDown() {
  palette.dispose();
}

/** @param {!Array<string>} items */
function createPalette(items) {
  sandbox = goog.dom.getElement('sandbox');
  itemEls = goog.array.map(items, function(item, index, a) {
    return goog.dom.safeHtmlToNode(goog.html.testing.newSafeHtmlForTest(item));
  });
  renderer = new goog.ui.PaletteRenderer();
  palette = new goog.ui.Palette(itemEls, renderer);
  palette.setSize(4, 1);
}

function testGridA11yRoles() {
  createPalette(items);
  const grid = renderer.createDom(palette);
  assertEquals(goog.a11y.aria.Role.GRID, goog.a11y.aria.getRole(grid));
  const table = goog.dom.getElementsByTagName(goog.dom.TagName.TABLE, grid)[0];
  const row = goog.dom.getElementsByTagName(goog.dom.TagName.TR, table)[0];
  assertEquals(goog.a11y.aria.Role.ROW, goog.a11y.aria.getRole(row));
  const cell = goog.dom.getElementsByTagName(goog.dom.TagName.TD, row)[0];
  assertEquals(goog.a11y.aria.Role.GRIDCELL, goog.a11y.aria.getRole(cell));
}

function testCellA11yLabels() {
  createPalette(items);
  const grid = renderer.createDom(palette);
  const cells = goog.dom.getElementsByTagName(goog.dom.TagName.TD, grid);

  assertEquals(
      'An aria-label is used as a label', 'label-0',
      goog.a11y.aria.getLabel(cells[0]));
  assertEquals(
      'A title is used as a label', 'title-1',
      goog.a11y.aria.getLabel(cells[1]));
  assertEquals(
      'An aria-label takes precedence over a title', 'label-2',
      goog.a11y.aria.getLabel(cells[2]));
  assertEquals(
      'Children are traversed to find labels', 'child-title-3',
      goog.a11y.aria.getLabel(cells[3]));
}

function testA11yActiveDescendant() {
  createPalette(items);
  palette.render();
  const cells = goog.dom.getElementsByTagName(
      goog.dom.TagName.TD, palette.getElementStrict());

  renderer.highlightCell(palette, cells[1].firstChild, true);
  assertEquals(
      cells[1].id,
      goog.a11y.aria.getState(
          palette.getElementStrict(), goog.a11y.aria.State.ACTIVEDESCENDANT));

  renderer.highlightCell(palette, cells[0].firstChild, false);
  assertEquals(
      cells[1].id,
      goog.a11y.aria.getState(
          palette.getElementStrict(), goog.a11y.aria.State.ACTIVEDESCENDANT));

  renderer.highlightCell(palette, cells[1].firstChild, false);
  assertNotEquals(
      cells[1].id,
      goog.a11y.aria.getState(
          palette.getElementStrict(), goog.a11y.aria.State.ACTIVEDESCENDANT));
}

function testSetContentIncremental() {
  const items = goog.array.repeat('<div class="item">item</div>', 6);
  const itemEls = goog.array.map(items, function(item) {
    return goog.dom.safeHtmlToNode(goog.html.testing.newSafeHtmlForTest(item));
  });

  createPalette([]);
  palette.render();
  const paletteEl = palette.getElementStrict();

  let rows = goog.dom.getElementsByTagName(goog.dom.TagName.TR, paletteEl);
  assertEquals(1, rows.length);
  assertEquals(0, goog.dom.getElementsByClass('item', rows[0]).length);

  palette.setContent(itemEls.slice(0, 1));
  rows = goog.dom.getElementsByTagName(goog.dom.TagName.TR, paletteEl);
  assertEquals(1, rows.length);
  assertEquals(1, goog.dom.getElementsByClass('item', rows[0]).length);

  palette.setContent(itemEls.slice(0, 3));
  rows = goog.dom.getElementsByTagName(goog.dom.TagName.TR, paletteEl);
  assertEquals(1, rows.length);
  assertEquals(3, goog.dom.getElementsByClass('item', rows[0]).length);

  palette.setContent(itemEls);
  rows = goog.dom.getElementsByTagName(goog.dom.TagName.TR, paletteEl);
  assertEquals(2, rows.length);
  assertEquals(4, goog.dom.getElementsByClass('item', rows[0]).length);
  assertEquals(2, goog.dom.getElementsByClass('item', rows[1]).length);
}

function testA11yLabelsSetContentIncremental() {
  const itemEls = goog.array.map(items, function(item, index, a) {
    return goog.dom.safeHtmlToNode(goog.html.testing.newSafeHtmlForTest(item));
  });

  createPalette([]);
  palette.render();
  const paletteEl = palette.getElementStrict();

  palette.setContent(itemEls.slice(0, 1));
  let cells = goog.dom.getElementsByTagName(goog.dom.TagName.TD, paletteEl);
  assertEquals(4, cells.length);
  assertEquals('label-0', goog.a11y.aria.getLabel(cells[0]));
  assertEquals('', goog.a11y.aria.getLabel(cells[1]));
  assertEquals('', goog.a11y.aria.getLabel(cells[2]));
  assertEquals('', goog.a11y.aria.getLabel(cells[3]));

  palette.setContent(itemEls);
  cells = goog.dom.getElementsByTagName(goog.dom.TagName.TD, paletteEl);
  assertEquals('label-0', goog.a11y.aria.getLabel(cells[0]));
  assertEquals('title-1', goog.a11y.aria.getLabel(cells[1]));
  assertEquals('label-2', goog.a11y.aria.getLabel(cells[2]));
  assertEquals('child-title-3', goog.a11y.aria.getLabel(cells[3]));
}

function testA11yLabelsSetContentIncremental_ariaLabelUpdated() {
  createPalette(items);
  palette.render();
  const paletteEl = palette.getElementStrict();
  cells = goog.dom.getElementsByTagName(goog.dom.TagName.TD, paletteEl);
  assertEquals('label-0', goog.a11y.aria.getLabel(cells[0]));
  assertEquals('title-1', goog.a11y.aria.getLabel(cells[1]));
  assertEquals('label-2', goog.a11y.aria.getLabel(cells[2]));
  assertEquals('child-title-3', goog.a11y.aria.getLabel(cells[3]));

  const newItems = [
    '<div aria-label="newlabel-0"></div>', '<div title="newtitle-1"></div>',
    '<div aria-label="newlabel-2" title="title-2"></div>',
    '<div><span></span></div>'
  ];
  const newItemEls = goog.array.map(newItems, function(item, index, a) {
    return goog.dom.safeHtmlToNode(goog.html.testing.newSafeHtmlForTest(item));
  });

  palette.setContent(newItemEls);

  assertEquals('newlabel-0', goog.a11y.aria.getLabel(cells[0]));
  assertEquals('newtitle-1', goog.a11y.aria.getLabel(cells[1]));
  assertEquals('newlabel-2', goog.a11y.aria.getLabel(cells[2]));
  assertEquals('', goog.a11y.aria.getLabel(cells[3]));
}
