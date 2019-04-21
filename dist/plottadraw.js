!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./dist/",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n={DrawTitle:function(e,t,o){var n=o.text,r=o.color,a=o.position;e.save(),e.font="20px ".concat(t),e.textAlign="center",e.textBaseline="middle",r&&(e.fillStyle=r),e.fillText(n,a.x,a.y),e.restore()},DrawLegends:function(e,t,o,n){e.save(),e.font="14px ".concat(t),e.textAlign="left",e.textBaseline="top";n.forEach(function(t){var n=t.color,r=t.legend,a=t.point;e.save(),e.fillText(r,o.x+a.x+15+5,o.y+a.y),n&&(e.fillStyle=n),e.fillRect(o.x+a.x,o.y+a.y,15,15),e.restore()}),e.restore()},DrawAxis:function(e,t,o){var n=o.xLabel,r=o.yLabel;e.save(),e.font="14px ".concat(t),e.textAlign="center",e.textBaseline="middle",n.visible&&(n.color&&(e.fillStyle=n.color),e.fillText(n.text,n.position.x,n.position.y)),r.visible&&(e.translate(r.position.x,r.position.y),e.rotate(-.5*Math.PI),r.color&&(e.fillStyle=r.color),e.fillText(r.text,0,0)),e.restore()},DrawBorder:function(e,t,o){var n=o.visible,r=(o.type,o.color),a=o.width;n&&(e.save(),r&&(e.strokeStyle=r),a&&(e.lineWidth=a),e.strokeRect(t.x,t.y,t.w,t.h),e.restore())},DrawGrid:function(e,t,o,n,r){var a=r.xTics,i=r.yTics,l=n.visible,s=(n.type,n.color);l&&(e.save(),e.strokeStyle=s,e.lineWidth=.3,a.forEach(function(t,n,r){0!==n&&n!==r.length-1&&(e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x,t.y-o),e.stroke())}),i.forEach(function(o,n,r){0!==n&&n!==r.length-1&&(e.beginPath(),e.moveTo(o.x,o.y),e.lineTo(o.x+t,o.y),e.stroke())}),e.restore())},DrawTics:function(e,t,o,n){var r=n.visible,a=n.color,i=n.xTics,l=n.yTics;if(r){e.save(),a&&(e.strokeStyle=a,e.fillStyle=a),e.lineWidth=.3,e.textAlign="center",e.textBaseline="middle",i.forEach(function(t,n,r){var a,i=t.y+10;a=0===n?t.y-o:t.y,e.beginPath(),e.moveTo(t.x,i),e.lineTo(t.x,a),e.stroke(),e.fillText(t.value,t.x,t.y+10+15)}),l.forEach(function(o,n,r){var a,i=o.x-10;a=0===n?o.x+t:o.x,e.beginPath(),e.moveTo(i,o.y),e.lineTo(a,o.y),e.stroke(),e.fillText(o.value,o.x-10-15,o.y)}),e.restore()}},DrawLines:function(e,t,o){e.save(),e.lineWidth=3;var n=new Path2D;n.rect(t.x,t.y,t.w,t.h),e.clip(n,"evenodd"),o.forEach(function(o){var n=o.points,r=o.color;e.strokeStyle=r;var a=!0,i=n[0].y;n.forEach(function(o,n){o.y<t.y?i=t.y-5:o.y>t.y+t.h&&(i=t.y+t.h+5),!0===a?(e.beginPath(),e.moveTo(o.x,i||o.y),a=!1):e.lineTo(o.x,i||o.y),i=NaN}),e.stroke()}),e.restore()},DrawTable:function(e,t,o,n){var r=n.visible,a=n.selectedTic,i=n.colors,l=n.legends,s=n.legendWidth,c=n.datas;if(r&&!isNaN(a)&&i&&l&&s&&c){e.save(),e.font="14px ".concat(t),e.textAlign="left",e.textBaseline="top";var f=c[a];if(f&&f.canvasPos){var x=[];x[0]=f.canvasPos.y-23;for(var v=1;v<=f.length+1;v++)x[v]=x[v-1]+23;var y=[];y[0]=f.canvasPos.x+20,y[1]=y[0]+16+15+s,y[2]=y[1]+8+f.width;var u=(o.x+o.w)/2,d=y[2]-y[0];f.canvasPos.x>u?{x:(y=y.map(function(e){return e-d-40}))[2],y:x[0]}:{x:y[0],y:x[0]},e.save(),e.globalAlpha=.5,e.fillStyle="white",e.fillRect(y[0],x[0],y[2]-y[0],x[f.length+1]-x[0]),e.strokeStyle="#999999",e.strokeRect(y[0],x[0],y[2]-y[0],x[f.length+1]-x[0]);for(var h=1;h<=f.length;h++)e.beginPath(),e.moveTo(y[0],x[h]),e.lineTo(y[2],x[h]),e.stroke();e.beginPath(),e.moveTo(y[1],x[1]),e.lineTo(y[1],x[f.length+1]),e.stroke(),e.restore(),e.fillText("".concat(a),y[0]+4,x[0]+4);for(var g=0;g<f.length;g++)e.save(),e.fillText("".concat(l[g]),y[0]+15+12,x[g+1]+4),e.fillText("".concat(f[g].dataPos.toFixed(3)),y[1]+4,x[g+1]+4),e.fillStyle=i[g],e.fillRect(y[0]+4,x[g+1]+4,15,15),f[g].canvasPos>=o.y&&f[g].canvasPos<=o.y+o.h&&(e.beginPath(),e.arc(f.canvasPos.x,f[g].canvasPos,4,0,2*Math.PI),e.fill()),e.restore();e.restore()}}},Draw:function(e,t){var o=t.font,r=t.title,a=(t.legend,t.border),i=t.axis,l=t.grid,s=t.tics,c=t.lineDatas,f=t.legendDatas,x=t.tableData,v=t.canvasWidth,y=t.canvasHeight,u=t.graphRect,d=t.legendRect;e.font="12px ".concat(o),e.clearRect(0,0,v,y),n.DrawTitle(e,o,r),n.DrawBorder(e,u,a),n.DrawTics(e,u.w,u.h,s),n.DrawGrid(e,u.w,u.h,l,s),n.DrawAxis(e,o,i),n.DrawLines(e,u,c),n.DrawLegends(e,o,d,f),n.DrawTable(e,o,u,x)}},r=n;self.onmessage=(e=>{const{canvas:t,dpr:o,drawData:n}=e.data;t&&(self.canvas=t,self.ctx=t.getContext("2d")),o&&self.ctx.scale(o,o),n&&r.Draw(self.ctx,n)})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvZHJhd0hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9vc1dvcmtlci5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkRyYXdIZWxwZXIiLCJjdHgiLCJmb250IiwidGl0bGUiLCJ0ZXh0IiwiY29sb3IiLCJwb3NpdGlvbiIsInNhdmUiLCJjb25jYXQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsU3R5bGUiLCJmaWxsVGV4dCIsIngiLCJ5IiwicmVzdG9yZSIsImxlZ2VuZFJlY3QiLCJsZWdlbmREYXRhcyIsImZvckVhY2giLCJsZWdlbmREYXRhIiwibGVnZW5kIiwicG9pbnQiLCJmaWxsUmVjdCIsImF4aXMiLCJ4TGFiZWwiLCJ5TGFiZWwiLCJ2aXNpYmxlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiTWF0aCIsIlBJIiwicmVjdCIsImJvcmRlciIsInR5cGUiLCJ3aWR0aCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlUmVjdCIsInciLCJoIiwiaGVpZ2h0IiwiZ3JpZCIsInRpY3MiLCJ4VGljcyIsInlUaWNzIiwidGljIiwiaW5kZXgiLCJhcnJheSIsImxlbmd0aCIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInlFbmQiLCJ5U3RhcnQiLCJ4RW5kIiwieFN0YXJ0IiwiZ3JhcGhSZWN0IiwibGluZURhdGFzIiwicmVnaW9uIiwiUGF0aDJEIiwiY2xpcCIsImxpbmVEYXRhIiwicG9pbnRzIiwiaXNTdGFydCIsInlDcml0aWNhbFBvaW50IiwiTmFOIiwidGFibGVEYXRhIiwic2VsZWN0ZWRUaWMiLCJjb2xvcnMiLCJsZWdlbmRzIiwibGVnZW5kV2lkdGgiLCJkYXRhcyIsImlzTmFOIiwic2VsZWN0ZWRUaWNEYXRhIiwiY2FudmFzUG9zIiwidGFibGVSb3dQb3MiLCJ0YWJsZUNvbHVtblBvcyIsIm1hcmdpbiIsImNlbnRlclBvc1giLCJ0YWJsZVdpZHRoIiwibWFwIiwicG9zIiwiZ2xvYmFsQWxwaGEiLCJkYXRhUG9zIiwidG9GaXhlZCIsImFyYyIsImZpbGwiLCJkcmF3RGF0YSIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0IiwiY2xlYXJSZWN0IiwiRHJhd1RpdGxlIiwiRHJhd0JvcmRlciIsIkRyYXdUaWNzIiwiRHJhd0dyaWQiLCJEcmF3QXhpcyIsIkRyYXdMaW5lcyIsIkRyYXdMZWdlbmRzIiwiRHJhd1RhYmxlIiwic2VsZiIsIm9ubWVzc2FnZSIsImV2ZW50IiwiY2FudmFzIiwiZHByIiwiZGF0YSIsImdldENvbnRleHQiLCJzY2FsZSIsImRyYXdIZWxwZXIiLCJEcmF3Il0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsWUFBQSxDQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIsRUFBQSxjQUFpRG1CLE9BQUEsS0FRakRyQixFQUFBc0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFBQXJCLEVBQUFxQixJQUNBLEVBQUFFLEVBQUEsT0FBQUYsRUFDQSxLQUFBRSxHQUFBLGlCQUFBRixRQUFBRyxXQUFBLE9BQUFILEVBQ0EsSUFBQUksRUFBQVgsT0FBQVksT0FBQSxNQUdBLEdBRkExQixFQUFBa0IsRUFBQU8sR0FDQVgsT0FBQUMsZUFBQVUsRUFBQSxXQUF5Q1QsWUFBQSxFQUFBSyxVQUN6QyxFQUFBRSxHQUFBLGlCQUFBRixFQUFBLFFBQUFNLEtBQUFOLEVBQUFyQixFQUFBVSxFQUFBZSxFQUFBRSxFQUFBLFNBQUFBLEdBQWdILE9BQUFOLEVBQUFNLElBQXFCQyxLQUFBLEtBQUFELElBQ3JJLE9BQUFGLEdBSUF6QixFQUFBNkIsRUFBQSxTQUFBMUIsR0FDQSxJQUFBUyxFQUFBVCxLQUFBcUIsV0FDQSxXQUEyQixPQUFBckIsRUFBQSxTQUMzQixXQUFpQyxPQUFBQSxHQUVqQyxPQURBSCxFQUFBVSxFQUFBRSxFQUFBLElBQUFBLEdBQ0FBLEdBSUFaLEVBQUFhLEVBQUEsU0FBQWlCLEVBQUFDLEdBQXNELE9BQUFqQixPQUFBa0IsVUFBQUMsZUFBQTFCLEtBQUF1QixFQUFBQyxJQUd0RC9CLEVBQUFrQyxFQUFBLFVBSUFsQyxJQUFBbUMsRUFBQSx5Q0NwRUEsSUFBTUMsRUFBYSxDQVNuQkEsVUFBdUIsU0FBVUMsRUFBS0MsRUFBTUMsR0FBTyxJQUN6Q0MsRUFBMEJELEVBQTFCQyxLQUFNQyxFQUFvQkYsRUFBcEJFLE1BQU9DLEVBQWFILEVBQWJHLFNBQ3JCTCxFQUFJTSxPQUNKTixFQUFJQyxLQUFKLFFBQUFNLE9BQW1CTixHQUNuQkQsRUFBSVEsVUFBWSxTQUNoQlIsRUFBSVMsYUFBZSxTQUNmTCxJQUFPSixFQUFJVSxVQUFZTixHQUMzQkosRUFBSVcsU0FBU1IsRUFBTUUsRUFBU08sRUFBR1AsRUFBU1EsR0FDeENiLEVBQUljLFdBVU5mLFlBQXlCLFNBQVVDLEVBQUtDLEVBQU1jLEVBQVlDLEdBQ3hEaEIsRUFBSU0sT0FDSk4sRUFBSUMsS0FBSixRQUFBTSxPQUFtQk4sR0FDbkJELEVBQUlRLFVBQVksT0FDaEJSLEVBQUlTLGFBQWUsTUFHbkJPLEVBQVlDLFFBQVEsU0FBQ0MsR0FBZSxJQUMxQmQsRUFBeUJjLEVBQXpCZCxNQUFPZSxFQUFrQkQsRUFBbEJDLE9BQVFDLEVBQVVGLEVBQVZFLE1BQ3ZCcEIsRUFBSU0sT0FDSk4sRUFBSVcsU0FBU1EsRUFBUUosRUFBV0gsRUFBSVEsRUFBTVIsRUFMM0IsR0FDRixFQUlvREcsRUFBV0YsRUFBSU8sRUFBTVAsR0FDbEZULElBQU9KLEVBQUlVLFVBQVlOLEdBQzNCSixFQUFJcUIsU0FBU04sRUFBV0gsRUFBSVEsRUFBTVIsRUFBR0csRUFBV0YsRUFBSU8sRUFBTVAsRUFQM0MsT0FRZmIsRUFBSWMsWUFFTmQsRUFBSWMsV0FVTmYsU0FBc0IsU0FBVUMsRUFBS0MsRUFBTXFCLEdBQU0sSUFDdkNDLEVBQW1CRCxFQUFuQkMsT0FBUUMsRUFBV0YsRUFBWEUsT0FFaEJ4QixFQUFJTSxPQUNKTixFQUFJQyxLQUFKLFFBQUFNLE9BQW1CTixHQUNuQkQsRUFBSVEsVUFBWSxTQUNoQlIsRUFBSVMsYUFBZSxTQUNmYyxFQUFPRSxVQUNMRixFQUFPbkIsUUFBT0osRUFBSVUsVUFBWWEsRUFBT25CLE9BQ3pDSixFQUFJVyxTQUFTWSxFQUFPcEIsS0FBTW9CLEVBQU9sQixTQUFTTyxFQUFHVyxFQUFPbEIsU0FBU1EsSUFHM0RXLEVBQU9DLFVBQ1R6QixFQUFJMEIsVUFBVUYsRUFBT25CLFNBQVNPLEVBQUdZLEVBQU9uQixTQUFTUSxHQUNqRGIsRUFBSTJCLFFBQVEsR0FBTUMsS0FBS0MsSUFDbkJMLEVBQU9wQixRQUFPSixFQUFJVSxVQUFZYyxFQUFPcEIsT0FDekNKLEVBQUlXLFNBQVNhLEVBQU9yQixLQUFNLEVBQUcsSUFFL0JILEVBQUljLFdBT05mLFdBQXdCLFNBQVVDLEVBQUs4QixFQUFNQyxHQUFRLElBRWpETixFQUNFTSxFQURGTixRQUFlckIsR0FDYjJCLEVBRE9DLEtBQ1BELEVBRGEzQixPQUFPNkIsRUFDcEJGLEVBRG9CRSxNQUduQlIsSUFFTHpCLEVBQUlNLE9BQ0FGLElBQU9KLEVBQUlrQyxZQUFjOUIsR0FDekI2QixJQUFPakMsRUFBSW1DLFVBQVlGLEdBQzNCakMsRUFBSW9DLFdBQVdOLEVBQUtsQixFQUFHa0IsRUFBS2pCLEVBQUdpQixFQUFLTyxFQUFHUCxFQUFLUSxHQUM1Q3RDLEVBQUljLFlBVU5mLFNBQXNCLFNBQVVDLEVBQUtpQyxFQUFPTSxFQUFRQyxFQUFNQyxHQUFNLElBQ3REQyxFQUFpQkQsRUFBakJDLE1BQU9DLEVBQVVGLEVBQVZFLE1BQ1BsQixFQUF5QmUsRUFBekJmLFFBQWVyQixHQUFVb0MsRUFBaEJSLEtBQWdCUSxFQUFWcEMsT0FDbEJxQixJQUVMekIsRUFBSU0sT0FDSk4sRUFBSWtDLFlBQWM5QixFQUNsQkosRUFBSW1DLFVBQVksR0FFaEJPLEVBQU16QixRQUFRLFNBQUMyQixFQUFLQyxFQUFPQyxHQUNYLElBQVZELEdBQWVBLElBQVVDLEVBQU1DLE9BQVMsSUFDNUMvQyxFQUFJZ0QsWUFDSmhELEVBQUlpRCxPQUFPTCxFQUFJaEMsRUFBR2dDLEVBQUkvQixHQUN0QmIsRUFBSWtELE9BQU9OLEVBQUloQyxFQUFHZ0MsRUFBSS9CLEVBQUkwQixHQUMxQnZDLEVBQUltRCxZQUVOUixFQUFNMUIsUUFBUSxTQUFDMkIsRUFBS0MsRUFBT0MsR0FDWCxJQUFWRCxHQUFlQSxJQUFVQyxFQUFNQyxPQUFTLElBQzVDL0MsRUFBSWdELFlBQ0poRCxFQUFJaUQsT0FBT0wsRUFBSWhDLEVBQUdnQyxFQUFJL0IsR0FDdEJiLEVBQUlrRCxPQUFPTixFQUFJaEMsRUFBSXFCLEVBQU9XLEVBQUkvQixHQUM5QmIsRUFBSW1ELFlBRU5uRCxFQUFJYyxZQVVOZixTQUFzQixTQUFVQyxFQUFLaUMsRUFBT00sRUFBUUUsR0FBTSxJQUV0RGhCLEVBQ0VnQixFQURGaEIsUUFBU3JCLEVBQ1BxQyxFQURPckMsTUFBT3NDLEVBQ2RELEVBRGNDLE1BQU9DLEVBQ3JCRixFQURxQkUsTUFHekIsR0FBS2xCLEVBQUwsQ0FLQXpCLEVBQUlNLE9BQ0FGLElBQ0ZKLEVBQUlrQyxZQUFjOUIsRUFDbEJKLEVBQUlVLFVBQVlOLEdBRWxCSixFQUFJbUMsVUFBWSxHQUNoQm5DLEVBQUlRLFVBQVksU0FDaEJSLEVBQUlTLGFBQWUsU0FFbkJpQyxFQUFNekIsUUFBUSxTQUFDMkIsRUFBS0MsRUFBT0MsR0FDekIsSUFDSU0sRUFERUMsRUFBU1QsRUFBSS9CLEVBYkwsR0FnQlp1QyxFQURZLElBQVZQLEVBQ0tELEVBQUkvQixFQUFJMEIsRUFFUkssRUFBSS9CLEVBRWJiLEVBQUlnRCxZQUNKaEQsRUFBSWlELE9BQU9MLEVBQUloQyxFQUFHeUMsR0FDbEJyRCxFQUFJa0QsT0FBT04sRUFBSWhDLEVBQUd3QyxHQUNsQnBELEVBQUltRCxTQUNKbkQsRUFBSVcsU0FBU2lDLEVBQUk1RCxNQUFPNEQsRUFBSWhDLEVBQUdnQyxFQUFJL0IsRUF4QnJCLEdBQ08sTUF5QnZCOEIsRUFBTTFCLFFBQVEsU0FBQzJCLEVBQUtDLEVBQU9DLEdBQ3pCLElBQ0lRLEVBREVDLEVBQVNYLEVBQUloQyxFQTNCTCxHQThCWjBDLEVBRFksSUFBVlQsRUFDS0QsRUFBSWhDLEVBQUlxQixFQUVSVyxFQUFJaEMsRUFFYlosRUFBSWdELFlBQ0poRCxFQUFJaUQsT0FBT00sRUFBUVgsRUFBSS9CLEdBQ3ZCYixFQUFJa0QsT0FBT0ksRUFBTVYsRUFBSS9CLEdBQ3JCYixFQUFJbUQsU0FDSm5ELEVBQUlXLFNBQVNpQyxFQUFJNUQsTUFBTzRELEVBQUloQyxFQXRDZCxHQUNPLEdBcUNxQ2dDLEVBQUkvQixLQUVoRWIsRUFBSWMsWUFXTmYsVUFBdUIsU0FBVUMsRUFBS3dELEVBQVdDLEdBQy9DekQsRUFBSU0sT0FDSk4sRUFBSW1DLFVBQVksRUFDaEIsSUFBTXVCLEVBQVMsSUFBSUMsT0FDbkJELEVBQU81QixLQUFLMEIsRUFBVTVDLEVBQUc0QyxFQUFVM0MsRUFBRzJDLEVBQVVuQixFQUFHbUIsRUFBVWxCLEdBQzdEdEMsRUFBSTRELEtBQUtGLEVBQVEsV0FDakJELEVBQVV4QyxRQUFRLFNBQUM0QyxHQUFhLElBQ3RCQyxFQUFrQkQsRUFBbEJDLE9BQVExRCxFQUFVeUQsRUFBVnpELE1BQ2hCSixFQUFJa0MsWUFBYzlCLEVBQ2xCLElBQUkyRCxHQUFVLEVBQ1ZDLEVBQWlCRixFQUFPLEdBQUdqRCxFQUMvQmlELEVBQU83QyxRQUFRLFNBQUNHLEVBQU95QixHQUNqQnpCLEVBQU1QLEVBQUkyQyxFQUFVM0MsRUFDdEJtRCxFQUFpQlIsRUFBVTNDLEVBQUksRUFDdEJPLEVBQU1QLEVBQUkyQyxFQUFVM0MsRUFBSTJDLEVBQVVsQixJQUMzQzBCLEVBQWlCUixFQUFVM0MsRUFBSTJDLEVBQVVsQixFQUFJLElBRy9CLElBQVp5QixHQUNGL0QsRUFBSWdELFlBQ0poRCxFQUFJaUQsT0FBTzdCLEVBQU1SLEVBQUdvRCxHQUFrQjVDLEVBQU1QLEdBQzVDa0QsR0FBVSxHQUVWL0QsRUFBSWtELE9BQU85QixFQUFNUixFQUFHb0QsR0FBa0I1QyxFQUFNUCxHQUU5Q21ELEVBQWlCQyxNQUVuQmpFLEVBQUltRCxXQUVObkQsRUFBSWMsV0FXTmYsVUFBdUIsU0FBVUMsRUFBS0MsRUFBTXVELEVBQVdVLEdBQVcsSUFFOUR6QyxFQUNFeUMsRUFERnpDLFFBQVMwQyxFQUNQRCxFQURPQyxZQUFhQyxFQUNwQkYsRUFEb0JFLE9BQVFDLEVBQzVCSCxFQUQ0QkcsUUFBU0MsRUFDckNKLEVBRHFDSSxZQUFhQyxFQUNsREwsRUFEa0RLLE1BR3RELEdBQUs5QyxJQUFXK0MsTUFBTUwsSUFBaUJDLEdBQVdDLEdBQVlDLEdBQWdCQyxFQUE5RSxDQUtBdkUsRUFBSU0sT0FDSk4sRUFBSUMsS0FBSixRQUFBTSxPQUFtQk4sR0FDbkJELEVBQUlRLFVBQVksT0FDaEJSLEVBQUlTLGFBQWUsTUFFbkIsSUFBTWdFLEVBQWtCRixFQUFNSixHQUM5QixHQUFLTSxHQUFvQkEsRUFBZ0JDLFVBQXpDLENBRUEsSUFBTUMsRUFBYyxHQUNwQkEsRUFBWSxHQUFLRixFQUFnQkMsVUFBVTdELEVBQTFCLEdBQ2pCLElBQUssSUFBSTlDLEVBQUksRUFBR0EsR0FBSzBHLEVBQWdCMUIsT0FBUyxFQUFHaEYsSUFDL0M0RyxFQUFZNUcsR0FBSzRHLEVBQVk1RyxFQUFJLEdBQWhCLEdBRW5CLElBQUk2RyxFQUFpQixHQUNyQkEsRUFBZSxHQUFLSCxFQUFnQkMsVUFBVTlELEVBQUksR0FDbERnRSxFQUFlLEdBQUtBLEVBQWUsR0FBS0MsR0FsQnZCLEdBa0IrQ1AsRUFDaEVNLEVBQWUsR0FBS0EsRUFBZSxHQUFLQyxFQUFhSixFQUFnQnhDLE1BRXJFLElBQU02QyxHQUFjdEIsRUFBVTVDLEVBQUk0QyxFQUFVbkIsR0FBSyxFQUMzQzBDLEVBQWFILEVBQWUsR0FBS0EsRUFBZSxHQUVsREgsRUFBZ0JDLFVBQVU5RCxFQUFJa0UsRUFFbkIsQ0FBRWxFLEdBRGZnRSxFQUFpQkEsRUFBZUksSUFBSSxTQUFBQyxHQUFHLE9BQUlBLEVBQU1GLEVBQWEsTUFDN0IsR0FBSWxFLEVBQUc4RCxFQUFZLElBRXZDLENBQUUvRCxFQUFHZ0UsRUFBZSxHQUFJL0QsRUFBRzhELEVBQVksSUFHdEQzRSxFQUFJTSxPQUNKTixFQUFJa0YsWUFBYyxHQUNsQmxGLEVBQUlVLFVBQVksUUFDaEJWLEVBQUlxQixTQUNGdUQsRUFBZSxHQUNmRCxFQUFZLEdBQ1pDLEVBQWUsR0FBS0EsRUFBZSxHQUNuQ0QsRUFBWUYsRUFBZ0IxQixPQUFTLEdBQUs0QixFQUFZLElBRXhEM0UsRUFBSWtDLFlBQWMsVUFDbEJsQyxFQUFJb0MsV0FDRndDLEVBQWUsR0FDZkQsRUFBWSxHQUNaQyxFQUFlLEdBQUtBLEVBQWUsR0FDbkNELEVBQVlGLEVBQWdCMUIsT0FBUyxHQUFLNEIsRUFBWSxJQUV4RCxJQUFLLElBQUk1RyxFQUFJLEVBQUdBLEdBQUswRyxFQUFnQjFCLE9BQVFoRixJQUMzQ2lDLEVBQUlnRCxZQUNKaEQsRUFBSWlELE9BQU8yQixFQUFlLEdBQUlELEVBQVk1RyxJQUMxQ2lDLEVBQUlrRCxPQUFPMEIsRUFBZSxHQUFJRCxFQUFZNUcsSUFDMUNpQyxFQUFJbUQsU0FFTm5ELEVBQUlnRCxZQUNKaEQsRUFBSWlELE9BQU8yQixFQUFlLEdBQUlELEVBQVksSUFDMUMzRSxFQUFJa0QsT0FBTzBCLEVBQWUsR0FBSUQsRUFBWUYsRUFBZ0IxQixPQUFTLElBQ25FL0MsRUFBSW1ELFNBQ0puRCxFQUFJYyxVQUVKZCxFQUFJVyxTQUFKLEdBQUFKLE9BQWdCNEQsR0FBZVMsRUFBZSxHQTFEL0IsRUEwRDRDRCxFQUFZLEdBMUR4RCxHQTJEZixJQUFLLElBQUk1RyxFQUFJLEVBQUdBLEVBQUkwRyxFQUFnQjFCLE9BQVFoRixJQUMxQ2lDLEVBQUlNLE9BQ0pOLEVBQUlXLFNBQUosR0FBQUosT0FDSzhELEVBQVF0RyxJQUNYNkcsRUFBZSxHQWhFRixHQWdFa0JDLEdBQy9CRixFQUFZNUcsRUFBSSxHQWhFTCxHQWtFYmlDLEVBQUlXLFNBQUosR0FBQUosT0FDS2tFLEVBQWdCMUcsR0FBR29ILFFBQVFDLFFBQVEsSUFDdENSLEVBQWUsR0FwRUosRUFxRVhELEVBQVk1RyxFQUFJLEdBckVMLEdBdUViaUMsRUFBSVUsVUFBWTBELEVBQU9yRyxHQUN2QmlDLEVBQUlxQixTQUFTdUQsRUFBZSxHQXhFZixFQXdFNEJELEVBQVk1RyxFQUFJLEdBeEU1QyxFQURFLE9BNEViMEcsRUFBZ0IxRyxHQUFHMkcsV0FBYWxCLEVBQVUzQyxHQUN2QzRELEVBQWdCMUcsR0FBRzJHLFdBQWFsQixFQUFVM0MsRUFBSTJDLEVBQVVsQixJQUUzRHRDLEVBQUlnRCxZQUNKaEQsRUFBSXFGLElBQUlaLEVBQWdCQyxVQUFVOUQsRUFBRzZELEVBQWdCMUcsR0FBRzJHLFVBQVcsRUFBRyxFQUFhLEVBQVY5QyxLQUFLQyxJQUM5RTdCLEVBQUlzRixRQUVOdEYsRUFBSWMsVUFFTmQsRUFBSWMsYUFTTmYsS0FBa0IsU0FBVUMsRUFBS3VGLEdBQVUsSUFFdkN0RixFQWNFc0YsRUFkRnRGLEtBQ0FDLEVBYUVxRixFQWJGckYsTUFFQTZCLEdBV0V3RCxFQVpGcEUsT0FZRW9FLEVBWEZ4RCxRQUNBVCxFQVVFaUUsRUFWRmpFLEtBQ0FrQixFQVNFK0MsRUFURi9DLEtBQ0FDLEVBUUU4QyxFQVJGOUMsS0FDQWdCLEVBT0U4QixFQVBGOUIsVUFDQXpDLEVBTUV1RSxFQU5GdkUsWUFDQWtELEVBS0VxQixFQUxGckIsVUFDQXNCLEVBSUVELEVBSkZDLFlBQ0FDLEVBR0VGLEVBSEZFLGFBQ0FqQyxFQUVFK0IsRUFGRi9CLFVBQ0F6QyxFQUNFd0UsRUFERnhFLFdBRUZmLEVBQUlDLEtBQUosUUFBQU0sT0FBbUJOLEdBQ25CRCxFQUFJMEYsVUFBVSxFQUFHLEVBQUdGLEVBQWFDLEdBQ2pDMUYsRUFBVzRGLFVBQVUzRixFQUFLQyxFQUFNQyxHQUNoQ0gsRUFBVzZGLFdBQVc1RixFQUFLd0QsRUFBV3pCLEdBQ3RDaEMsRUFBVzhGLFNBQVM3RixFQUFLd0QsRUFBVW5CLEVBQUdtQixFQUFVbEIsRUFBR0csR0FDbkQxQyxFQUFXK0YsU0FBUzlGLEVBQUt3RCxFQUFVbkIsRUFBR21CLEVBQVVsQixFQUFHRSxFQUFNQyxHQUN6RDFDLEVBQVdnRyxTQUFTL0YsRUFBS0MsRUFBTXFCLEdBQy9CdkIsRUFBV2lHLFVBQVVoRyxFQUFLd0QsRUFBV0MsR0FDckMxRCxFQUFXa0csWUFBWWpHLEVBQUtDLEVBQU1jLEVBQVlDLEdBQzlDakIsRUFBV21HLFVBQVVsRyxFQUFLQyxFQUFNdUQsRUFBV1UsS0FHOUJuRSxJQ25YZm9HLEtBQUFDLFVBQUEsQ0FBQUMsSUFDQSxNQUFBQyxPQUFTQSxFQUFBQyxNQUFBaEIsWUFBd0JjLEVBQUFHLEtBQ2pDRixJQUNBSCxLQUFBRyxTQUNBSCxLQUFBbkcsSUFBQXNHLEVBQUFHLFdBQUEsT0FHQUYsR0FDQUosS0FBQW5HLElBQUEwRyxNQUFBSCxLQUdBaEIsR0FDSW9CLEVBQVVDLEtBQUFULEtBQUFuRyxJQUFBdUYiLCJmaWxlIjoicGxvdHRhZHJhdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKipcbiAqIEBuYW1lIERyYXdIZWxwZXJcbiAqIEB0eXBlIE9iamVjdFxuICogQG1ldGhvZCBEcmF3XG4gKiBAbWV0aG9kIERyYXdUaXRsZVxuICogQG1ldGhvZCBEcmF3TGVnZW5kc1xuICogQG1ldGhvZCBEcmF3QXhpc1xuICogQG1ldGhvZCBEcmF3Qm9yZGVyXG4gKiBAbWV0aG9kIERyYXdHcmlkXG4gKiBAbWV0aG9kIERyYXdUaWNzXG4gKiBAbWV0aG9kIERyYXdMaW5lc1xuICogQG1ldGhvZCBEcmF3VGFibGVcbiAqL1xuXG5jb25zdCBEcmF3SGVscGVyID0ge307XG5cbi8qKlxuICogQG5hbWUgRHJhd1RpdGxlXG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEcmF3IFRpdGxlLFxuICogRGVmYXVsdCBmb250U2l6ZSA6IDIwcHgsIHRleHRBbGlnbiA6IENlbnRlciwgdGV4dEJhc2VsaW5lIDogbWlkZGxlXG4gKi9cbkRyYXdIZWxwZXIuRHJhd1RpdGxlID0gZnVuY3Rpb24gKGN0eCwgZm9udCwgdGl0bGUpIHtcbiAgY29uc3QgeyB0ZXh0LCBjb2xvciwgcG9zaXRpb24gfSA9IHRpdGxlO1xuICBjdHguc2F2ZSgpO1xuICBjdHguZm9udCA9IGAyMHB4ICR7Zm9udH1gO1xuICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgaWYgKGNvbG9yKSBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIGN0eC5maWxsVGV4dCh0ZXh0LCBwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgRHJhd0xlZ2VuZHNcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBARGVzY3JpcHRpb25cbiAqIERyYXcgTGVnZW5kcyxcbiAqIERlZmF1bHQgZm9udFNpemUgOiAxNHB4LCB0ZXh0QWxpZ24gOiBMZWZ0LCB0ZXh0QmFzZWxpbmUgOiB0b3AsIHJlY3RTaXplIDogMTVweFxuICovXG5EcmF3SGVscGVyLkRyYXdMZWdlbmRzID0gZnVuY3Rpb24gKGN0eCwgZm9udCwgbGVnZW5kUmVjdCwgbGVnZW5kRGF0YXMpIHtcbiAgY3R4LnNhdmUoKTtcbiAgY3R4LmZvbnQgPSBgMTRweCAke2ZvbnR9YDtcbiAgY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgY3R4LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICBjb25zdCByZWN0U2l6ZSA9IDE1O1xuICBjb25zdCBtYXJnaW4gPSA1O1xuICBsZWdlbmREYXRhcy5mb3JFYWNoKChsZWdlbmREYXRhKSA9PiB7XG4gICAgY29uc3QgeyBjb2xvciwgbGVnZW5kLCBwb2ludCB9ID0gbGVnZW5kRGF0YTtcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC5maWxsVGV4dChsZWdlbmQsIGxlZ2VuZFJlY3QueCArIHBvaW50LnggKyByZWN0U2l6ZSArIG1hcmdpbiwgbGVnZW5kUmVjdC55ICsgcG9pbnQueSk7XG4gICAgaWYgKGNvbG9yKSBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgY3R4LmZpbGxSZWN0KGxlZ2VuZFJlY3QueCArIHBvaW50LngsIGxlZ2VuZFJlY3QueSArIHBvaW50LnksIHJlY3RTaXplLCByZWN0U2l6ZSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfSk7XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdBeGlzXG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEcmF3IEF4aXMsXG4gKiBEZWZhdWx0IGZvbnRTaXplIDogMTRweCwgdGV4dEFsaWduIDogQ2VudGVyLCB0ZXh0QmFzZWxpbmUgOiBtaWRkbGVcbiAqL1xuRHJhd0hlbHBlci5EcmF3QXhpcyA9IGZ1bmN0aW9uIChjdHgsIGZvbnQsIGF4aXMpIHtcbiAgY29uc3QgeyB4TGFiZWwsIHlMYWJlbCB9ID0gYXhpcztcblxuICBjdHguc2F2ZSgpO1xuICBjdHguZm9udCA9IGAxNHB4ICR7Zm9udH1gO1xuICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgaWYgKHhMYWJlbC52aXNpYmxlKSB7XG4gICAgaWYgKHhMYWJlbC5jb2xvcikgY3R4LmZpbGxTdHlsZSA9IHhMYWJlbC5jb2xvcjtcbiAgICBjdHguZmlsbFRleHQoeExhYmVsLnRleHQsIHhMYWJlbC5wb3NpdGlvbi54LCB4TGFiZWwucG9zaXRpb24ueSk7XG4gIH1cblxuICBpZiAoeUxhYmVsLnZpc2libGUpIHtcbiAgICBjdHgudHJhbnNsYXRlKHlMYWJlbC5wb3NpdGlvbi54LCB5TGFiZWwucG9zaXRpb24ueSk7XG4gICAgY3R4LnJvdGF0ZSgtMC41ICogTWF0aC5QSSk7XG4gICAgaWYgKHlMYWJlbC5jb2xvcikgY3R4LmZpbGxTdHlsZSA9IHlMYWJlbC5jb2xvcjtcbiAgICBjdHguZmlsbFRleHQoeUxhYmVsLnRleHQsIDAsIDApO1xuICB9XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdCb3JkZXJcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKi9cbkRyYXdIZWxwZXIuRHJhd0JvcmRlciA9IGZ1bmN0aW9uIChjdHgsIHJlY3QsIGJvcmRlcikge1xuICBjb25zdCB7XG4gICAgdmlzaWJsZSwgdHlwZSwgY29sb3IsIHdpZHRoXG4gIH0gPSBib3JkZXI7XG5cbiAgaWYgKCF2aXNpYmxlKSByZXR1cm47XG5cbiAgY3R4LnNhdmUoKTtcbiAgaWYgKGNvbG9yKSBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgaWYgKHdpZHRoKSBjdHgubGluZVdpZHRoID0gd2lkdGg7XG4gIGN0eC5zdHJva2VSZWN0KHJlY3QueCwgcmVjdC55LCByZWN0LncsIHJlY3QuaCk7XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdHcmlkXG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEcmF3IEdyaWQsXG4gKiBEZWZhdWx0IGxpbmVXaWR0aCA6IDAuM3B4XG4gKi9cbkRyYXdIZWxwZXIuRHJhd0dyaWQgPSBmdW5jdGlvbiAoY3R4LCB3aWR0aCwgaGVpZ2h0LCBncmlkLCB0aWNzKSB7XG4gIGNvbnN0IHsgeFRpY3MsIHlUaWNzIH0gPSB0aWNzO1xuICBjb25zdCB7IHZpc2libGUsIHR5cGUsIGNvbG9yIH0gPSBncmlkO1xuICBpZiAoIXZpc2libGUpIHJldHVybjtcblxuICBjdHguc2F2ZSgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmxpbmVXaWR0aCA9IDAuMztcblxuICB4VGljcy5mb3JFYWNoKCh0aWMsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gMCB8fCBpbmRleCA9PT0gYXJyYXkubGVuZ3RoIC0gMSkgcmV0dXJuO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHRpYy54LCB0aWMueSk7XG4gICAgY3R4LmxpbmVUbyh0aWMueCwgdGljLnkgLSBoZWlnaHQpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfSk7XG4gIHlUaWNzLmZvckVhY2goKHRpYywgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgaWYgKGluZGV4ID09PSAwIHx8IGluZGV4ID09PSBhcnJheS5sZW5ndGggLSAxKSByZXR1cm47XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGljLngsIHRpYy55KTtcbiAgICBjdHgubGluZVRvKHRpYy54ICsgd2lkdGgsIHRpYy55KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0pO1xuICBjdHgucmVzdG9yZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBEcmF3VGljc1xuICogQHR5cGUgZnVuY3Rpb25cbiAqIEBEZXNjcmlwdGlvblxuICogRHJhdyBUaWNzLFxuICogRGVmYXVsdCBsaW5lV2lkdGggOiAwLjNweCwgdGV4dEFsaWduIDogY2VudGVyLCB0ZXh0QmFzZWxpbmUgOiBtaWRkbGUsIHRpY1NpemUgOiAxMHB4XG4gKi9cbkRyYXdIZWxwZXIuRHJhd1RpY3MgPSBmdW5jdGlvbiAoY3R4LCB3aWR0aCwgaGVpZ2h0LCB0aWNzKSB7XG4gIGNvbnN0IHtcbiAgICB2aXNpYmxlLCBjb2xvciwgeFRpY3MsIHlUaWNzXG4gIH0gPSB0aWNzO1xuXG4gIGlmICghdmlzaWJsZSkgcmV0dXJuO1xuXG4gIGNvbnN0IHRpY1NpemUgPSAxMDtcbiAgY29uc3QgdGljVmFsdWVNYXJnaW4gPSAxNTtcblxuICBjdHguc2F2ZSgpO1xuICBpZiAoY29sb3IpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIH1cbiAgY3R4LmxpbmVXaWR0aCA9IDAuMztcbiAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG5cbiAgeFRpY3MuZm9yRWFjaCgodGljLCBpbmRleCwgYXJyYXkpID0+IHtcbiAgICBjb25zdCB5U3RhcnQgPSB0aWMueSArIHRpY1NpemU7XG4gICAgbGV0IHlFbmQ7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB5RW5kID0gdGljLnkgLSBoZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlFbmQgPSB0aWMueTtcbiAgICB9XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGljLngsIHlTdGFydCk7XG4gICAgY3R4LmxpbmVUbyh0aWMueCwgeUVuZCk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGN0eC5maWxsVGV4dCh0aWMudmFsdWUsIHRpYy54LCB0aWMueSArIHRpY1NpemUgKyB0aWNWYWx1ZU1hcmdpbik7XG4gIH0pO1xuICB5VGljcy5mb3JFYWNoKCh0aWMsIGluZGV4LCBhcnJheSkgPT4ge1xuICAgIGNvbnN0IHhTdGFydCA9IHRpYy54IC0gdGljU2l6ZTtcbiAgICBsZXQgeEVuZDtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHhFbmQgPSB0aWMueCArIHdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB4RW5kID0gdGljLng7XG4gICAgfVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHhTdGFydCwgdGljLnkpO1xuICAgIGN0eC5saW5lVG8oeEVuZCwgdGljLnkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguZmlsbFRleHQodGljLnZhbHVlLCB0aWMueCAtIHRpY1NpemUgLSB0aWNWYWx1ZU1hcmdpbiwgdGljLnkpO1xuICB9KTtcbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbi8qKlxuICogQG5hbWUgRHJhd0xpbmVzXG4gKiBAdHlwZSBmdW5jdGlvblxuICogQERlc2NyaXB0aW9uXG4gKiBEcmF3IFRpY3MsXG4gKiBEZWZhdWx0IGxpbmVXaWR0aCA6IDNweFxuICogQFRvZG8gQWRkIExpbmVTdHlsZVxuICovXG5EcmF3SGVscGVyLkRyYXdMaW5lcyA9IGZ1bmN0aW9uIChjdHgsIGdyYXBoUmVjdCwgbGluZURhdGFzKSB7XG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5saW5lV2lkdGggPSAzO1xuICBjb25zdCByZWdpb24gPSBuZXcgUGF0aDJEKCk7XG4gIHJlZ2lvbi5yZWN0KGdyYXBoUmVjdC54LCBncmFwaFJlY3QueSwgZ3JhcGhSZWN0LncsIGdyYXBoUmVjdC5oKTtcbiAgY3R4LmNsaXAocmVnaW9uLCAnZXZlbm9kZCcpO1xuICBsaW5lRGF0YXMuZm9yRWFjaCgobGluZURhdGEpID0+IHtcbiAgICBjb25zdCB7IHBvaW50cywgY29sb3IgfSA9IGxpbmVEYXRhO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIGxldCBpc1N0YXJ0ID0gdHJ1ZTtcbiAgICBsZXQgeUNyaXRpY2FsUG9pbnQgPSBwb2ludHNbMF0ueTtcbiAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAocG9pbnQueSA8IGdyYXBoUmVjdC55KSB7XG4gICAgICAgIHlDcml0aWNhbFBvaW50ID0gZ3JhcGhSZWN0LnkgLSA1O1xuICAgICAgfSBlbHNlIGlmIChwb2ludC55ID4gZ3JhcGhSZWN0LnkgKyBncmFwaFJlY3QuaCkge1xuICAgICAgICB5Q3JpdGljYWxQb2ludCA9IGdyYXBoUmVjdC55ICsgZ3JhcGhSZWN0LmggKyA1O1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNTdGFydCA9PT0gdHJ1ZSkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8ocG9pbnQueCwgeUNyaXRpY2FsUG9pbnQgfHwgcG9pbnQueSk7XG4gICAgICAgIGlzU3RhcnQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5saW5lVG8ocG9pbnQueCwgeUNyaXRpY2FsUG9pbnQgfHwgcG9pbnQueSk7XG4gICAgICB9XG4gICAgICB5Q3JpdGljYWxQb2ludCA9IE5hTjtcbiAgICB9KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0pO1xuICBjdHgucmVzdG9yZSgpO1xufTtcblxuLyoqXG4gKiBAbmFtZSBEcmF3VGFibGVcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBARGVzY3JpcHRpb25cbiAqIERyYXcgVGljcyxcbiAqIERlZmF1bHQgZm9udFNpemUgOiAxNHB4LCB0ZXh0QWxpZ24gOiBsZWZ0LCB0ZXh0QmFzZWxpbmUgOiB0b3AsXG4gKiBEZWZhdWx0IGZpbGxBbHBoYSA6IDAuNSwgZmlsbENvbG9yIDogd2hpdGUsIExpbmVDb2xvciA6ICM5OTk5OTlcbiAqL1xuRHJhd0hlbHBlci5EcmF3VGFibGUgPSBmdW5jdGlvbiAoY3R4LCBmb250LCBncmFwaFJlY3QsIHRhYmxlRGF0YSkge1xuICBjb25zdCB7XG4gICAgdmlzaWJsZSwgc2VsZWN0ZWRUaWMsIGNvbG9ycywgbGVnZW5kcywgbGVnZW5kV2lkdGgsIGRhdGFzXG4gIH0gPSB0YWJsZURhdGE7XG5cbiAgaWYgKCF2aXNpYmxlIHx8IGlzTmFOKHNlbGVjdGVkVGljKSB8fCAhY29sb3JzIHx8ICFsZWdlbmRzIHx8ICFsZWdlbmRXaWR0aCB8fCAhZGF0YXMpIHJldHVybjtcblxuICBjb25zdCByZWN0U2l6ZSA9IDE1O1xuICBjb25zdCBtYXJnaW4gPSA0O1xuXG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5mb250ID0gYDE0cHggJHtmb250fWA7XG4gIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSAndG9wJztcblxuICBjb25zdCBzZWxlY3RlZFRpY0RhdGEgPSBkYXRhc1tzZWxlY3RlZFRpY107XG4gIGlmICghc2VsZWN0ZWRUaWNEYXRhIHx8ICFzZWxlY3RlZFRpY0RhdGEuY2FudmFzUG9zKSByZXR1cm47XG5cbiAgY29uc3QgdGFibGVSb3dQb3MgPSBbXTtcbiAgdGFibGVSb3dQb3NbMF0gPSBzZWxlY3RlZFRpY0RhdGEuY2FudmFzUG9zLnkgLSAocmVjdFNpemUgKyBtYXJnaW4gKiAyKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2VsZWN0ZWRUaWNEYXRhLmxlbmd0aCArIDE7IGkrKykge1xuICAgIHRhYmxlUm93UG9zW2ldID0gdGFibGVSb3dQb3NbaSAtIDFdICsgKHJlY3RTaXplICsgbWFyZ2luICogMik7XG4gIH1cbiAgbGV0IHRhYmxlQ29sdW1uUG9zID0gW107XG4gIHRhYmxlQ29sdW1uUG9zWzBdID0gc2VsZWN0ZWRUaWNEYXRhLmNhbnZhc1Bvcy54ICsgMjA7XG4gIHRhYmxlQ29sdW1uUG9zWzFdID0gdGFibGVDb2x1bW5Qb3NbMF0gKyBtYXJnaW4gKiA0ICsgcmVjdFNpemUgKyBsZWdlbmRXaWR0aDtcbiAgdGFibGVDb2x1bW5Qb3NbMl0gPSB0YWJsZUNvbHVtblBvc1sxXSArIG1hcmdpbiAqIDIgKyBzZWxlY3RlZFRpY0RhdGEud2lkdGg7XG5cbiAgY29uc3QgY2VudGVyUG9zWCA9IChncmFwaFJlY3QueCArIGdyYXBoUmVjdC53KSAvIDI7XG4gIGNvbnN0IHRhYmxlV2lkdGggPSB0YWJsZUNvbHVtblBvc1syXSAtIHRhYmxlQ29sdW1uUG9zWzBdO1xuICBsZXQgdGFibGVQb2ludCA9IG51bGw7XG4gIGlmIChzZWxlY3RlZFRpY0RhdGEuY2FudmFzUG9zLnggPiBjZW50ZXJQb3NYKSB7XG4gICAgdGFibGVDb2x1bW5Qb3MgPSB0YWJsZUNvbHVtblBvcy5tYXAocG9zID0+IHBvcyAtIHRhYmxlV2lkdGggLSA0MCk7XG4gICAgdGFibGVQb2ludCA9IHsgeDogdGFibGVDb2x1bW5Qb3NbMl0sIHk6IHRhYmxlUm93UG9zWzBdIH07XG4gIH0gZWxzZSB7XG4gICAgdGFibGVQb2ludCA9IHsgeDogdGFibGVDb2x1bW5Qb3NbMF0sIHk6IHRhYmxlUm93UG9zWzBdIH07XG4gIH1cblxuICBjdHguc2F2ZSgpO1xuICBjdHguZ2xvYmFsQWxwaGEgPSAwLjU7XG4gIGN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICBjdHguZmlsbFJlY3QoXG4gICAgdGFibGVDb2x1bW5Qb3NbMF0sXG4gICAgdGFibGVSb3dQb3NbMF0sXG4gICAgdGFibGVDb2x1bW5Qb3NbMl0gLSB0YWJsZUNvbHVtblBvc1swXSxcbiAgICB0YWJsZVJvd1Bvc1tzZWxlY3RlZFRpY0RhdGEubGVuZ3RoICsgMV0gLSB0YWJsZVJvd1Bvc1swXVxuICApO1xuICBjdHguc3Ryb2tlU3R5bGUgPSAnIzk5OTk5OSc7XG4gIGN0eC5zdHJva2VSZWN0KFxuICAgIHRhYmxlQ29sdW1uUG9zWzBdLFxuICAgIHRhYmxlUm93UG9zWzBdLFxuICAgIHRhYmxlQ29sdW1uUG9zWzJdIC0gdGFibGVDb2x1bW5Qb3NbMF0sXG4gICAgdGFibGVSb3dQb3Nbc2VsZWN0ZWRUaWNEYXRhLmxlbmd0aCArIDFdIC0gdGFibGVSb3dQb3NbMF1cbiAgKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2VsZWN0ZWRUaWNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8odGFibGVDb2x1bW5Qb3NbMF0sIHRhYmxlUm93UG9zW2ldKTtcbiAgICBjdHgubGluZVRvKHRhYmxlQ29sdW1uUG9zWzJdLCB0YWJsZVJvd1Bvc1tpXSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyh0YWJsZUNvbHVtblBvc1sxXSwgdGFibGVSb3dQb3NbMV0pO1xuICBjdHgubGluZVRvKHRhYmxlQ29sdW1uUG9zWzFdLCB0YWJsZVJvd1Bvc1tzZWxlY3RlZFRpY0RhdGEubGVuZ3RoICsgMV0pO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5yZXN0b3JlKCk7XG5cbiAgY3R4LmZpbGxUZXh0KGAke3NlbGVjdGVkVGljfWAsIHRhYmxlQ29sdW1uUG9zWzBdICsgbWFyZ2luLCB0YWJsZVJvd1Bvc1swXSArIG1hcmdpbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRUaWNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBgJHtsZWdlbmRzW2ldfWAsXG4gICAgICB0YWJsZUNvbHVtblBvc1swXSArIHJlY3RTaXplICsgbWFyZ2luICogMyxcbiAgICAgIHRhYmxlUm93UG9zW2kgKyAxXSArIG1hcmdpblxuICAgICk7XG4gICAgY3R4LmZpbGxUZXh0KFxuICAgICAgYCR7c2VsZWN0ZWRUaWNEYXRhW2ldLmRhdGFQb3MudG9GaXhlZCgzKX1gLFxuICAgICAgdGFibGVDb2x1bW5Qb3NbMV0gKyBtYXJnaW4sXG4gICAgICB0YWJsZVJvd1Bvc1tpICsgMV0gKyBtYXJnaW5cbiAgICApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbaV07XG4gICAgY3R4LmZpbGxSZWN0KHRhYmxlQ29sdW1uUG9zWzBdICsgbWFyZ2luLCB0YWJsZVJvd1Bvc1tpICsgMV0gKyBtYXJnaW4sIHJlY3RTaXplLCByZWN0U2l6ZSk7XG5cbiAgICBpZiAoXG4gICAgICBzZWxlY3RlZFRpY0RhdGFbaV0uY2FudmFzUG9zID49IGdyYXBoUmVjdC55XG4gICAgICAmJiBzZWxlY3RlZFRpY0RhdGFbaV0uY2FudmFzUG9zIDw9IGdyYXBoUmVjdC55ICsgZ3JhcGhSZWN0LmhcbiAgICApIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMoc2VsZWN0ZWRUaWNEYXRhLmNhbnZhc1Bvcy54LCBzZWxlY3RlZFRpY0RhdGFbaV0uY2FudmFzUG9zLCA0LCAwLCBNYXRoLlBJICogMik7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH1cbiAgICBjdHgucmVzdG9yZSgpO1xuICB9XG4gIGN0eC5yZXN0b3JlKCk7XG59O1xuXG4vKipcbiAqIEBuYW1lIERyYXdcbiAqIEB0eXBlIGZ1bmN0aW9uXG4gKiBARGVzY3JpcHRpb25cbiAqIERlZmF1bHQgZm9udFNpemUgOiAxMnB4XG4gKi9cbkRyYXdIZWxwZXIuRHJhdyA9IGZ1bmN0aW9uIChjdHgsIGRyYXdEYXRhKSB7XG4gIGNvbnN0IHtcbiAgICBmb250LFxuICAgIHRpdGxlLFxuICAgIGxlZ2VuZCxcbiAgICBib3JkZXIsXG4gICAgYXhpcyxcbiAgICBncmlkLFxuICAgIHRpY3MsXG4gICAgbGluZURhdGFzLFxuICAgIGxlZ2VuZERhdGFzLFxuICAgIHRhYmxlRGF0YSxcbiAgICBjYW52YXNXaWR0aCxcbiAgICBjYW52YXNIZWlnaHQsXG4gICAgZ3JhcGhSZWN0LFxuICAgIGxlZ2VuZFJlY3RcbiAgfSA9IGRyYXdEYXRhO1xuICBjdHguZm9udCA9IGAxMnB4ICR7Zm9udH1gO1xuICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xuICBEcmF3SGVscGVyLkRyYXdUaXRsZShjdHgsIGZvbnQsIHRpdGxlKTtcbiAgRHJhd0hlbHBlci5EcmF3Qm9yZGVyKGN0eCwgZ3JhcGhSZWN0LCBib3JkZXIpO1xuICBEcmF3SGVscGVyLkRyYXdUaWNzKGN0eCwgZ3JhcGhSZWN0LncsIGdyYXBoUmVjdC5oLCB0aWNzKTtcbiAgRHJhd0hlbHBlci5EcmF3R3JpZChjdHgsIGdyYXBoUmVjdC53LCBncmFwaFJlY3QuaCwgZ3JpZCwgdGljcyk7XG4gIERyYXdIZWxwZXIuRHJhd0F4aXMoY3R4LCBmb250LCBheGlzKTtcbiAgRHJhd0hlbHBlci5EcmF3TGluZXMoY3R4LCBncmFwaFJlY3QsIGxpbmVEYXRhcyk7XG4gIERyYXdIZWxwZXIuRHJhd0xlZ2VuZHMoY3R4LCBmb250LCBsZWdlbmRSZWN0LCBsZWdlbmREYXRhcyk7XG4gIERyYXdIZWxwZXIuRHJhd1RhYmxlKGN0eCwgZm9udCwgZ3JhcGhSZWN0LCB0YWJsZURhdGEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhd0hlbHBlcjtcbiIsImltcG9ydCBEcmF3SGVscGVyIGZyb20gJy4vZHJhd0hlbHBlcic7XG5cbnNlbGYub25tZXNzYWdlID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHsgY2FudmFzLCBkcHIsIGRyYXdEYXRhIH0gPSBldmVudC5kYXRhO1xuICBpZiAoY2FudmFzKSB7XG4gICAgc2VsZi5jYW52YXMgPSBjYW52YXM7XG4gICAgc2VsZi5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuXG4gIGlmIChkcHIpIHtcbiAgICBzZWxmLmN0eC5zY2FsZShkcHIsIGRwcik7XG4gIH1cblxuICBpZiAoZHJhd0RhdGEpIHtcbiAgICBEcmF3SGVscGVyLkRyYXcoc2VsZi5jdHgsIGRyYXdEYXRhKTtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=