<p align="left"><img src="./doc/img/plottajs_logo.png" width="80%"/></a></p>

![npm version](https://img.shields.io/npm/v/plotta.js.svg) ![license](https://img.shields.io/npm/l/plotta.js.svg)
<a href="https://www.npmjs.com/package/plotta.js"><img src="https://img.shields.io/npm/dt/plotta.js.svg" alt="Downloads"></a>

`plotta.js` is a Open Source JavaScript library that plot mathematical functions And Datas.
`plotta.js` Renders using an HTML5 Canvas.

<p align="left"><img src="./doc/img/plotta_demo1.gif" /></a></p>

## Features

#### HTML5 Canvas

plotta.js uses HTML5 Canvas without library dependency.

#### User Interections

plotta.js supports Zoom In/Zoom Out, Data table.

#### Custom

You can customize various properties such as axis, grid, font, title, tics, lineDatas, and colors.

<p align="left"><img src="./doc/img/plotta_demo2.gif" /></a></p>

## Demo

https://iamsjy17.github.io/plotta.js-page/

## Version

1.1.1

## Browser Support

| Chrome | Interner Exploer |  Edge  | Safari | FireFox | Whale  |
| :----: | :--------------: | :----: | :----: | :-----: | :----: |
| Latest |        9+        | Latest | Latest | Latest  | Latest |

## Download

#### Development

Uncompressed file for development

- https://iamsjy17.github.io/plotta.js-page/release/latest/plotta.js
- https://iamsjy17.github.io/plotta.js-page/release/[VERSION]/plotta.js

#### Production

Compressed file for Production

- https://iamsjy17.github.io/plotta.js-page/release/latest/plotta.min.js
- https://iamsjy17.github.io/plotta.js-page/release/[VERSION]/plotta.min.js

## Install

```bash
$ npm install plotta.js
```

## Usage

### HTML

```html
<canvas id="canvas" width="700px" height="700px" style="width:700px; height:700px; border:1px solid #d3d3d3;"></canvas>
```

### Javascript

```js
const canvas = document.getElementById('canvas');
const plotta = new Plotta(canvas, {
  linedatas: [
    {
      id: 'line1',
      type: 'func',
      legend: 'cos',
      color: '#55A8DE',
      visible: true,
      func: Math.cos,
      dotNum: 1000,
    },
  ],
  graphConfig: {
    legendVisible: true,
    title: {
      visible: true,
      location: 'center',
      color: '#666666',
      text: 'plotta.ts',
    },
    grid: {
      visible: true,
      type: 'solid',
      color: '#888888',
    },
    border: {
      visible: true,
      type: 'solid',
      color: '#DDDDDD',
      width: 1,
    },
  },
});
```

## API Documentation

Provides APIs to control various properties.

- Graph
  - [UpdateGraph](#updategraph)
- Line
  - [AddLine](#addline)
  - [DeleteLine](#deleteline)
- Font
  - [SetFont](#setfont)
- Title
  - [ShowTitle](#showtitle)
  - [SetTitle](#settitle)
  - [SetTitleColor](#settitlecolor)
  - [SetTitleLocation](#settitlelocation)
- Grid
  - [ShowGrid](#showaxisxlabel)
  - [SetGridColor](#setgridcolor)
- Border
  - [ShowBorder](#showborder)
  - [SetBorderColor](#setbordercolor)
  - [SetBorderWidth](#setborderwidth)
- Tics
  - [ShowTics](#showtics)
  - [SetTicsColor](#setticscolor)
  - [SetTicsValue](#setticsvalue)
- Axis
  - [ShowAxisXLabel](#showaxisxlabel)
  - [SetAxisXLabel](#setaxisxlabel)
  - [SetAxisXLabelColor](#setaxisxlabelcolor)
  - [SetAxisXLabelLocation](#setaxisxlabellocation)
  - [ShowAxisYLabel](#showaxisylabel)
  - [SetAxisYLabel](#setaxisylabel)
  - [SetAxisYLabelColor](#setaxisylabelcolor)
  - [SetAxisYLabelLocation](#setaxisylabellocation)
- Table
  - [ShowTable](#showtable)
- Legend
  - [ShowLegend](#showlegend)

### UpdateGraph

##### Description

Update all graph data And only the properties of the dataSet object with the properties of the graph.

> plotta.UpdateGraph(lineData, graphConfig);

##### Parameters

|    Name     | Type        | Description |
| :---------: | ----------- | ----------- |
|  lineDatas  | LineData[]  |             |
| graphConfig | GraphConfig |             |

##### Example

Update `line1`, gridVisible, gridColor, borderVisible, borderColor, borderWidth.

```js
plotta.UpdateGraph(
  [
    {
      id: 'line1',
      type: 'func',
      legend: 'cos',
      color: '#55A8DE',
      visible: true,
      func: Math.cos,
      dotNum: 1000,
    },
  ],
  {
    legendVisible: true,
    title: {
      visible: true,
      location: 'center',
      color: '#666666',
      text: 'plotta.ts',
    },
    grid: {
      visible: true,
      type: 'solid',
      color: '#888888',
    },
    border: {
      visible: true,
      type: 'solid',
      color: '#DDDDDD',
      width: 1,
    },
  }
);
```

### AddLine

##### Description

Add New Line. If it is an existing id, it is not added.

> plotta.AddLine(lineData);

##### Parameters

|   Name   | Type     | Description         |
| :------: | -------- | ------------------- |
| lineData | LineData | LineData set to Add |

##### Example

```js
plotta.AddLine({
  id: 'line1',
  type: 'func',
  legend: 'cos',
  color: '#55A8DE',
  visible: true,
  func: Math.cos,
  dotNum: 1000,
});
```

### DeleteLine

##### Description

Delete the line that matches the id you entered.

> plotta.DeleteLine(id);

##### Parameters

| Name | Type   | Description              |
| :--: | ------ | ------------------------ |
|  id  | String | Id of the line to delete |

##### Example

```js
plotta.DeleteLine('line1');
```

### SetFont

##### Description

Set the font.

> plotta.SetFont(font);

##### Parameters

| Name | Type   | Description |
| :--: | ------ | ----------- |
| font | String | font        |

##### Example

```js
plotta.SetFont(`Helvetica Neue', Helvetica, Arial, sans-serif`);
```

### ShowTitle

##### Description

Set the visibility value of the title.

> plotta.ShowTitle(show);

##### Parameters

| Name | Type    | Description                    |
| :--: | ------- | ------------------------------ |
| show | boolean | visibility value of the title. |

##### Example

```js
plotta.ShowTitle(true);
```

### SetTitle

##### Description

Set the graph title.

> plotta.SetTitle(title);

##### Parameters

| Name  | Type   | Description |
| :---: | ------ | ----------- |
| title | String | Graph Title |

##### Example

```js
plotta.SetTitle('Hello Graph');
```

### SetTitleColor

##### Description

set color of graph title.

> plotta.SetTitleColor(color);

##### Parameters

| Name  | Type   | Description                            |
| :---: | ------ | -------------------------------------- |
| color | String | it is parsed as a CSS `<color>` value. |

##### Example

```js
plotta.SetTitleColor(`#FFA500`);
```

### SetTitleLocation

##### Description

Set the location of the title.

> plotta.SetTitleLocation(location);

##### Parameters

The default value is center.

|   Name   | Type   | Description                          |
| :------: | ------ | ------------------------------------ |
| location | String | Enter either left, center, or right. |

##### Example

```js
plotta.SetTitleLocation('left');
```

### ShowGrid

##### Description

Set the visibility value of the grid.

> plotta.ShowGrid(show);

##### Parameters

| Name | Type    | Description                   |
| :--: | ------- | ----------------------------- |
| show | boolean | visibility value of the grid. |

##### Example

```js
plotta.ShowGrid(true);
```

### SetGridColor

##### Description

set color of grid.

> plotta.SetGridColor(color);

##### Parameters

| Name  | Type   | Description                            |
| :---: | ------ | -------------------------------------- |
| color | String | it is parsed as a CSS `<color>` value. |

##### Example

```js
plotta.SetGridColor(`orange`);
```

### ShowBorder

##### Description

Set the visibility value of the border.

> plotta.ShowBorder(show);

##### Parameters

| Name | Type    | Description                     |
| :--: | ------- | ------------------------------- |
| show | boolean | visibility value of the border. |

##### Example

```js
plotta.ShowBorder(false);
```

### SetBorderColor

##### Description

set color of border.

> plotta.SetBorderColor(color);

##### Parameters

| Name  | Type   | Description                            |
| :---: | ------ | -------------------------------------- |
| color | String | it is parsed as a CSS `<color>` value. |

##### Example

```js
plotta.SetGridColor(`black`);
```

### SetBorderWidth

##### Description

set width of border.

> plotta.SetBorderWidth(width);

##### Parameters

| Name  | Type   | Description     |
| :---: | ------ | --------------- |
| width | Number | width of border |

##### Example

```js
plotta.SetBorderWidth(1);
```

### ShowTics

##### Description

Set the visibility value of the ticks.

> plotta.ShowTics(show);

##### Parameters

| Name | Type    | Description                    |
| :--: | ------- | ------------------------------ |
| show | boolean | visibility value of the ticks. |

##### Example

```js
plotta.ShowTics(true);
```

### SetTicsColor

##### Description

set color of ticks.

> plotta.SetTicsColor(color);

##### Parameters

| Name  | Type   | Description                            |
| :---: | ------ | -------------------------------------- |
| color | String | it is parsed as a CSS `<color>` value. |

##### Example

```js
plotta.SetTicsColor(`#888888`);
```

### SetTicsValue

##### Description

Set the tick value object.
The `tick value` is the unit size of a tick on the x and y axes.

> plotta.SetTicsValue(value);

##### Parameters

| Name  | Type   | Description                             |
| :---: | ------ | --------------------------------------- |
| value | Object | An Object with x, y ticks as properties |

##### Example

```js
plotta.SetTicsValue({x: 2, y: 2});
```

### ShowAxisXLabel

##### Description

Set the visibility value of the X axis label.

> plotta.ShowAxisXLabel(show);

##### Parameters

| Name | Type    | Description                           |
| :--: | ------- | ------------------------------------- |
| show | boolean | visibility value of the X axis label. |

##### Example

```js
plotta.ShowAxisXLabel(true);
```

### SetAxisXLabel

##### Description

Set the X axis label.

> plotta.SetAxisXLabel(lebel);

##### Parameters

| Name  | Type   | Description   |
| :---: | ------ | ------------- |
| lebel | String | X axis label. |

##### Example

```js
plotta.SetAxisXLabel('X label');
```

### SetAxisXLabelColor

##### Description

set color of X axis label.

> plotta.SetAxisXLabelColor(color);

##### Parameters

| Name  | Type   | Description                            |
| :---: | ------ | -------------------------------------- |
| color | String | it is parsed as a CSS `<color>` value. |

##### Example

```js
plotta.SetAxisXLabelColor(`#888888`);
```

### SetAxisXLabelLocation

##### Description

Set the location of the X axis label.

> plotta.SetAxisXLabelLocation(location);

##### Parameters

The default value is center.

|   Name   | Type   | Description                          |
| :------: | ------ | ------------------------------------ |
| location | String | Enter either left, center, or right. |

##### Example

```js
plotta.SetAxisXLabelLocation('center');
```

### ShowAxisYLabel

##### Description

Set the visibility value of the Y axis label.

> plotta.ShowAxisYLabel(show);

##### Parameters

| Name | Type    | Description                           |
| :--: | ------- | ------------------------------------- |
| show | boolean | visibility value of the X axis label. |

##### Example

```js
plotta.ShowAxisYLabel(true);
```

### SetAxisYLabel

##### Description

Set the Y axis label.

> plotta.SetAxisYLabel(lebel);

##### Parameters

| Name  | Type   | Description   |
| :---: | ------ | ------------- |
| lebel | String | X axis label. |

##### Example

```js
plotta.SetAxisXLabel('Y label');
```

### SetAxisYLabelColor

##### Description

set color of Y axis label.

> plotta.SetAxisYLabelColor(color);

##### Parameters

| Name  | Type   | Description                            |
| :---: | ------ | -------------------------------------- |
| color | String | it is parsed as a CSS `<color>` value. |

##### Example

```js
plotta.SetAxisYLabelColor(`#888888`);
```

### SetAxisYLabelLocation

##### Description

Set the location of the Y axis label.

> plotta.SetAxisYLabelLocation(location);

##### Parameters

The default value is center.

|   Name   | Type   | Description                          |
| :------: | ------ | ------------------------------------ |
| location | String | Enter either top, middle, or bottom. |

##### Example

```js
plotta.SetAxisYLabelLocation('middle');
```

### ShowTable

##### Description

Set the visibility value of the Table.

> plotta.ShowTable(show);

##### Parameters

| Name | Type    | Description                    |
| :--: | ------- | ------------------------------ |
| show | boolean | visibility value of the Table. |

##### Example

```js
plotta.ShowTable(true);
```

### ShowLegend

##### Description

Set the visibility value of the Legend.

> plotta.ShowLegend(show);

##### Parameters

| Name | Type    | Description                     |
| :--: | ------- | ------------------------------- |
| show | boolean | visibility value of the Legend. |

##### Example

```js
plotta.ShowLegend(true);
```

## Commit Message Convention

- https://www.conventionalcommits.org/en/v1.0.0/

## CopyLight & License

Copyright (c) 2019 Song Jewoo. plotta.js, plotta.js is released under the [MIT license](https://opensource.org/licenses/MIT).
