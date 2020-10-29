!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){const o=n(1).prepareData,a=n(1).prepareDataSimple;var l=document.getElementById("volume").value,i=document.getElementById("activity").value,r=document.getElementById("mode").value,u=document.getElementById("air").value,d=document.getElementById("people").value;const s=document.getElementById("chart");function c(){console.log("The graph must be updated!"),console.log(`Volume: ${l}, activity: ${i}, air: ${u}`),"simple"===r?(data=a(l,i,u,d),function(e){e[0].mode="lines",e[0].name="PIRA (in %)",e[0].yaxis="y",e[1].type="bar",e[1].yaxis="y2",e[1].name="Potentiell Angesteckte",console.log(e);var t={shareX:!0,xaxis:{title:{text:"Zeit in Stunden"}},yaxis:{title:"PIRA (in %)",overlaying:"y2",tickvals:[10,20,30,40,50,60,70,80,90,100],range:[0,100]},yaxis2:{tickmode:"auto",title:"Anzahl sich potentiell angesteckter Personen (gerundet)",side:"right",range:[0,d]},legend:{y:1,x:0}};Plotly.newPlot(s,e,t,{responsive:!0})}(data)):"expert"===r&&(data=o(l,i,u,d),function(e){e.type="contour",e.colorbar={title:"PIRA",ticksuffix:"%"},e.hovertemplate="PIRA: %{z:.2f}%<extra></extra>";console.log(e),Plotly.newPlot(s,[e],{showaxeslabels:!0,xaxis_title:"Zeit in Stunden",xaxis:{title:{text:"Zeit in Stunden"}},yaxis:{title:{text:"Volumenstrom in m³/h"}}},{responsive:!0})}(data))}e.exports={modeUpdated:function(e){r=e,c()},volumeUpdated:function(e){l=e,c()},activityUpdated:function(e){i=e,c()},airUpdated:function(e){u=e,c()},vistypeUpdated:function(e){vistype=e,c()},peopleUpdated:function(e){d=e,c()}}},function(e,t){const n={low_activity_lying:.45,low_activity:.54,singing:.65,mid_activity:.9,sports:1.2,test_1:.54,test_2:.65};function o(e){return"singing"==e?3500:"test_2"==e?2500:100}function a(e){const t=2.7618*(Math.exp(1.1761*3.35)-1),a=o("low_activity");return t*(o(e)/a)*(n[e]/n.low_activity)}function l(e,t,n,o){let a=390625*t+225625;return a*=Math.exp(t*o),a-=225625,a*=Math.exp(-t*o-.5776*o),a=390625*t-a,a*=e,a/(n*(225625*t+130321))}function i(e,t,o,i){0==t&&(t+=.01),console.log(`Calculating pira for: t=${e}, Q=${t}, activity=${o}, V=${i}`);const r=function(e,t){return e/t}(i,t),u=a(o),d=function(e,t){return e*Math.exp(-.5776*t)}(u,r),s=function(e,t){return t/e}(i,t);if(e>r){const a=l(u,s,t,r),i=function(e,t,n,o,a){return e*Math.exp(-t*(a+n))*(t*(a-n)*Math.exp(t*(a+n))-Math.exp(t*a)+Math.exp(t*n))/(o*t)}(d,s,r,t,e);return 1-Math.exp(-(a+i)*n[o])}{const a=l(u,s,t,e);return 1-Math.exp(-a*n[o])}}e.exports={prepareData:function(e,t,n,o){const a=e;let l=[],r=[],u=[],d=3e3;300*o>d&&(d=300*o);for(let e=50;e<=d;e+=50){l=[];let n=[];for(let o=0;o<=6;o+=.1)p=i(o,e,t,a),p=Math.round(1e4*p)/100,(isNaN(p)||p>=100)&&(p=0),n.push(p),l.push(o);r.push(e),u.push(n)}return{test:l,x:l,y:r,z:u}},prepareDataSimple:function(e,t,n,o){const a=e,l=function(e){return"very_bad"==e?10:"bad"==e?20:"ok"==e?30:"good"==e?40:"very_good"==e?60:void 0}(n)*o;console.log("Total airflow for all people in the room is (Q) is "+l);let r=[],u=[],d=[],s=[];for(let e=0;e<=6;e+=1){p=i(e,l,t,a),p=Math.round(1e4*p)/100,u.push(p),r.push(e),d.push(e),s.push(Math.round(p*o/100));for(let n=.1;n<1;n+=.1)p=i(e+n,l,t,a),p=Math.round(1e4*p)/100,u.push(p),r.push(e+n)}return[{x:r,y:u},{x:d,y:s}]},pira:i,f_qa:a}},function(e,t,n){n(3);const o=n(0);document.getElementById("mode").addEventListener("input",(function(e){if("expert"==e.target.value){for(el of(simpelElements=document.getElementsByClassName("simple"),simpelElements))el.style.display="none";for(el of(expertElements=document.getElementsByClassName("expert"),expertElements))el.style.display="block"}else if("simple"==e.target.value){for(el of(expertElements=document.getElementsByClassName("simple"),expertElements))el.style.display="block";for(el of(expertElements=document.getElementsByClassName("expert"),expertElements))el.style.display="none"}o.modeUpdated(e.target.value)})),document.getElementById("activity").addEventListener("input",(function(e){o.activityUpdated(e.target.value)})),document.getElementById("people").addEventListener("input",(function(e){""!=e.target.value&&(amount=e.target.value,(1>amount||amount>100)&&(amount=3,e.target.value=amount),o.peopleUpdated(amount))})),document.getElementById("air").addEventListener("change",(function(e){o.airUpdated(e.target.value)}))},function(e,t,n){const o=n(0);function a(e,t){this.data=t,this.element=e,e.value=t,e.addEventListener("change",this,!1)}function l(){i.data>10&&i.change(10),i.data<1&&i.change(1),r.data>10&&i.change(10),r.data<1&&i.change(1),u.data>5&&i.change(5),u.data<1&&i.change(1);const e=i.data*r.data*u.data;return console.log(e),document.getElementById("volume").value=e,o.volumeUpdated(e),e}a.prototype.handleEvent=function(e){switch(e.type){case"change":this.change(this.element.value),l()}},a.prototype.change=function(e){this.data=e,this.element.value=e};var i=new a(document.getElementById("length"),document.getElementById("length").value),r=new a(document.getElementById("width"),document.getElementById("width").value),u=new a(document.getElementById("height"),document.getElementById("height").value);l(),e.exports={get:l,init:l}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdm9sdW1lLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZGF0YUYiLCJwcmVwYXJlRGF0YSIsImRhdGFGU2ltcGxlIiwicHJlcGFyZURhdGFTaW1wbGUiLCJ2b2x1bWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWN0aXZpdHkiLCJhaXIiLCJwZW9wbGUiLCJjaGFydERpdiIsInVwZGF0ZUdyYXBoIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ5YXhpcyIsInR5cGUiLCJsYXlvdXQiLCJzaGFyZVgiLCJ4YXhpcyIsInRpdGxlIiwidGV4dCIsIm92ZXJsYXlpbmciLCJ0aWNrdmFscyIsInJhbmdlIiwieWF4aXMyIiwidGlja21vZGUiLCJzaWRlIiwibGVnZW5kIiwieSIsIngiLCJQbG90bHkiLCJuZXdQbG90IiwicmVzcG9uc2l2ZSIsImRyYXdTaW1wbGVQbG90IiwiY29sb3JiYXIiLCJ0aWNrc3VmZml4IiwiaG92ZXJ0ZW1wbGF0ZSIsInNob3dheGVzbGFiZWxzIiwieGF4aXNfdGl0bGUiLCJkcmF3Q29udG91clBsb3QiLCJtb2RlVXBkYXRlZCIsIm5ld01vZGUiLCJ2b2x1bWVVcGRhdGVkIiwibmV3Vm9sdW1lIiwiYWN0aXZpdHlVcGRhdGVkIiwibmV3QWN0aXZpdHkiLCJhaXJVcGRhdGVkIiwibmV3QWlyIiwidmlzdHlwZVVwZGF0ZWQiLCJuZXdWaXNUeXBlIiwidmlzdHlwZSIsInBlb3BsZVVwZGF0ZWQiLCJuZXdQZW9wbGUiLCJRYiIsImxvd19hY3Rpdml0eV9seWluZyIsImxvd19hY3Rpdml0eSIsInNpbmdpbmciLCJtaWRfYWN0aXZpdHkiLCJzcG9ydHMiLCJ0ZXN0XzEiLCJ0ZXN0XzIiLCJmX0UiLCJmX3FhIiwicV8wIiwiTWF0aCIsImV4cCIsIkVfMCIsImZfQyIsInFhIiwiQUNIIiwiUSIsInBpcmEiLCJWIiwidGF1IiwiZl90YXUiLCJxYXRhdSIsImZfcWF0YXUiLCJmX0FDSCIsIkMiLCJDdGF1IiwiZl9DdGF1IiwieEEiLCJ5QSIsInJvd3MiLCJtYXgiLCJyb3ciLCJyb3VuZCIsImlzTmFOIiwicHVzaCIsInRlc3QiLCJ6IiwiZl9RIiwieDIiLCJ5MiIsInN0IiwiZ3JhcGgiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJlbCIsInNpbXBlbEVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsImV4cGVydEVsZW1lbnRzIiwiYW1vdW50IiwiSW5wdXRFbGVtZW50IiwiZWxlbWVudCIsInRoaXMiLCJ1cGRhdGVWb2x1bWUiLCJsZW5ndGhFbGVtZW50IiwiY2hhbmdlIiwid2lkdGhFbGVtZW50IiwiaGVpZ2h0RWxlbWVudCIsImhhbmRsZUV2ZW50IiwiaW5pdCJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FD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QUFPLElBQ3RCaUcsRUFBY0MsT0FBTyxJQUVuQkMsRUFBYW5HLEtBQU8sR0FDdEJpRyxFQUFjQyxPQUFPLEdBR25CRSxFQUFjcEcsS0FBTyxHQUN2QmlHLEVBQWNDLE9BQU8sR0FFbkJFLEVBQWNwRyxLQUFPLEdBQ3ZCaUcsRUFBY0MsT0FBTyxHQUd2QixNQUFNNUcsRUFBUzJHLEVBQWNqRyxLQUFPbUcsRUFBYW5HLEtBQU9vRyxFQUFjcEcsS0FJdEUsT0FIQUYsUUFBUUMsSUFBSVQsR0FDWkMsU0FBU0MsZUFBZSxVQUFVckIsTUFBUW1CLEVBQzFDNEYsRUFBTXJELGNBQWN2QyxHQUNiQSxFQTFDVHVHLEVBQWEvRyxVQUFVdUgsWUFBYyxTQUFVakIsR0FDN0MsT0FBUUEsRUFBTWxGLE1BQ1osSUFBSyxTQUNINkYsS0FBS0csT0FBT0gsS0FBS0QsUUFBUTNILE9BQ3pCNkgsTUFPTkgsRUFBYS9HLFVBQVVvSCxPQUFTLFNBQVUvSCxHQUN4QzRILEtBQUsvRixLQUFPN0IsRUFDWjRILEtBQUtELFFBQVEzSCxNQUFRQSxHQWlDdkIsSUFBSThILEVBQWdCLElBQUlKLEVBQ3RCdEcsU0FBU0MsZUFBZSxVQUN4QkQsU0FBU0MsZUFBZSxVQUFVckIsT0FFaENnSSxFQUFlLElBQUlOLEVBQ3JCdEcsU0FBU0MsZUFBZSxTQUN4QkQsU0FBU0MsZUFBZSxTQUFTckIsT0FFL0JpSSxFQUFnQixJQUFJUCxFQUN0QnRHLFNBQVNDLGVBQWUsVUFDeEJELFNBQVNDLGVBQWUsVUFBVXJCLE9BRXBDNkgsSUFFQS9JLEVBQU9ELFFBQVUsQ0FDZmUsSUFBS2lJLEVBQ0xNLEtBQU1OIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsImNvbnN0IGRhdGFGID0gcmVxdWlyZShcIi4vZGF0YS5qc1wiKS5wcmVwYXJlRGF0YTtcbmNvbnN0IGRhdGFGU2ltcGxlID0gcmVxdWlyZShcIi4vZGF0YS5qc1wiKS5wcmVwYXJlRGF0YVNpbXBsZTtcbi8vIGNvbnN0IFBsb3RseSA9IHJlcXVpcmUoXCJwbG90bHkuanMtZ2wzZC1kaXN0LW1pblwiKSAvLyBub3QgaW5zdGFsbGVkIHZpYSBucG0gdG8gcmVkdWNlIGJ1bmRsZSBzaXplXG5cbnZhciB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZVwiKS52YWx1ZTtcbnZhciBhY3Rpdml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZpdHlcIikudmFsdWU7XG4vLyB2YXIgdmlzdHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzdHlwZVwiKS52YWx1ZTtcbnZhciBtb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RlXCIpLnZhbHVlOyAvLyBzaW1wbGUgb3IgZXhwZXJ0XG52YXIgYWlyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhaXJcIikudmFsdWU7IC8vIGluIHRoZSBmb3JtdWxhLCB0aGlzIGlzIFFcbnZhciBwZW9wbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlb3BsZVwiKS52YWx1ZTtcblxuY29uc3QgY2hhcnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXJ0XCIpO1xuXG5mdW5jdGlvbiBtb2RlVXBkYXRlZChuZXdNb2RlKSB7XG4gIG1vZGUgPSBuZXdNb2RlO1xuICB1cGRhdGVHcmFwaCgpO1xufVxuXG5mdW5jdGlvbiB2b2x1bWVVcGRhdGVkKG5ld1ZvbHVtZSkge1xuICB2b2x1bWUgPSBuZXdWb2x1bWU7XG4gIHVwZGF0ZUdyYXBoKCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2aXR5VXBkYXRlZChuZXdBY3Rpdml0eSkge1xuICBhY3Rpdml0eSA9IG5ld0FjdGl2aXR5O1xuICB1cGRhdGVHcmFwaCgpO1xufVxuXG5mdW5jdGlvbiBhaXJVcGRhdGVkKG5ld0Fpcikge1xuICBhaXIgPSBuZXdBaXI7XG4gIHVwZGF0ZUdyYXBoKCk7XG59XG5cbmZ1bmN0aW9uIHBlb3BsZVVwZGF0ZWQobmV3UGVvcGxlKSB7XG4gIHBlb3BsZSA9IG5ld1Blb3BsZTtcbiAgdXBkYXRlR3JhcGgoKTtcbn1cblxuZnVuY3Rpb24gdmlzdHlwZVVwZGF0ZWQobmV3VmlzVHlwZSkge1xuICB2aXN0eXBlID0gbmV3VmlzVHlwZTtcbiAgdXBkYXRlR3JhcGgoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlR3JhcGgoKSB7XG4gIGNvbnNvbGUubG9nKFwiVGhlIGdyYXBoIG11c3QgYmUgdXBkYXRlZCFcIik7XG4gIGNvbnNvbGUubG9nKGBWb2x1bWU6ICR7dm9sdW1lfSwgYWN0aXZpdHk6ICR7YWN0aXZpdHl9LCBhaXI6ICR7YWlyfWApO1xuXG4gIGlmIChtb2RlID09PSBcInNpbXBsZVwiKSB7XG4gICAgZGF0YSA9IGRhdGFGU2ltcGxlKHZvbHVtZSwgYWN0aXZpdHksIGFpciwgcGVvcGxlKVxuXG4gICAgZHJhd1NpbXBsZVBsb3QoZGF0YSlcbiAgfSBlbHNlIGlmIChtb2RlID09PSBcImV4cGVydFwiKSB7XG4gICAgZGF0YSA9IGRhdGFGKHZvbHVtZSwgYWN0aXZpdHksIGFpciwgcGVvcGxlKTtcblxuICAgIC8vIGlmICh2aXN0eXBlID09PSBcInN1cmZhY2VcIikge1xuICAgIC8vICAgZHJhd1N1cmZhY2VQbG90KGRhdGEpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBkcmF3Q29udG91clBsb3QoZGF0YSk7XG4gICAgLy8gfVxuXG4gICAgZHJhd0NvbnRvdXJQbG90KGRhdGEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdTaW1wbGVQbG90KGRhdGEpIHtcbiAgZGF0YVswXS5tb2RlID0gXCJsaW5lc1wiO1xuICBkYXRhWzBdLm5hbWUgPSBcIlBJUkEgKGluICUpXCJcbiAgZGF0YVswXS55YXhpcyA9IFwieVwiXG5cbiAgZGF0YVsxXS50eXBlID0gXCJiYXJcIjtcbiAgZGF0YVsxXS55YXhpcyA9IFwieTJcIjtcbiAgZGF0YVsxXS5uYW1lID0gXCJQb3RlbnRpZWxsIEFuZ2VzdGVja3RlXCJcblxuICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gIHZhciBsYXlvdXQgPSB7XG4gICAgc2hhcmVYOiB0cnVlLFxuICAgIHhheGlzOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgdGV4dDogXCJaZWl0IGluIFN0dW5kZW5cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgeWF4aXM6IHtcbiAgICAgIHRpdGxlOiAnUElSQSAoaW4gJSknLFxuICAgICAgb3ZlcmxheWluZzogJ3kyJyxcbiAgICAgIHRpY2t2YWxzOiBbMTAsIDIwLCAzMCwgNDAsIDUwLCA2MCwgNzAsIDgwLCA5MCwgMTAwXSxcbiAgICAgIHJhbmdlOiBbMCwgMTAwXVxuICAgIH0sXG4gICAgeWF4aXMyOiB7XG4gICAgICB0aWNrbW9kZTogXCJhdXRvXCIsXG4gICAgICB0aXRsZTogJ0FuemFobCBzaWNoIHBvdGVudGllbGwgYW5nZXN0ZWNrdGVyIFBlcnNvbmVuIChnZXJ1bmRldCknLFxuICAgICAgc2lkZTogJ3JpZ2h0JyxcbiAgICAgIHJhbmdlOiBbMCwgcGVvcGxlXVxuICAgIH0sXG4gICAgbGVnZW5kOiB7XG4gICAgICAgIHk6IDEsXG4gICAgICAgIHg6IDAsXG4gICAgICB9XG4gIH07XG5cbiAgUGxvdGx5Lm5ld1Bsb3QoY2hhcnREaXYsIGRhdGEsIGxheW91dCwgeyByZXNwb25zaXZlOiB0cnVlIH0pO1xufVxuXG5mdW5jdGlvbiBkcmF3U3VyZmFjZVBsb3QoZGF0YSkge1xuICBkYXRhLnR5cGUgPSBcInN1cmZhY2VcIjtcbiAgZGF0YS5jb250b3VycyA9IHtcbiAgICB6OiB7XG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgdXNlY29sb3JtYXA6IHRydWUsXG4gICAgICBoaWdobGlnaHRjb2xvcjogXCIjNDJmNDYyXCIsXG4gICAgICBwcm9qZWN0OiB7IHo6IHRydWUgfSxcbiAgICB9LFxuICB9O1xuICBjb25zdCBsYXlvdXQgPSB7XG4gICAgeGF4aXM6IHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHRleHQ6IFwiWmVpdCBpbiBTdHVuZGVuXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgeWF4aXM6IHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHRleHQ6IFwiVm9sdW1lbnN0cm9tIGluIG1eMy9oXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIFBsb3RseS5uZXdQbG90KGNoYXJ0RGl2LCBbZGF0YV0sIGxheW91dCwgeyByZXNwb25zaXZlOiB0cnVlIH0pO1xufVxuXG5mdW5jdGlvbiBkcmF3Q29udG91clBsb3QoZGF0YSkge1xuICBkYXRhLnR5cGUgPSBcImNvbnRvdXJcIjtcblxuICBkYXRhLmNvbG9yYmFyID0ge1xuICAgIHRpdGxlOiBcIlBJUkFcIixcbiAgICB0aWNrc3VmZml4OiBcIiVcIixcbiAgfTtcblxuICBkYXRhLmhvdmVydGVtcGxhdGUgPSBcIlBJUkE6ICV7ejouMmZ9JTxleHRyYT48L2V4dHJhPlwiO1xuXG4gIGNvbnN0IGxheW91dCA9IHtcbiAgICBzaG93YXhlc2xhYmVsczogdHJ1ZSxcbiAgICB4YXhpc190aXRsZTogXCJaZWl0IGluIFN0dW5kZW5cIixcbiAgICB4YXhpczoge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dDogXCJaZWl0IGluIFN0dW5kZW5cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB5YXhpczoge1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdGV4dDogXCJWb2x1bWVuc3Ryb20gaW4gbcKzL2hcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgUGxvdGx5Lm5ld1Bsb3QoY2hhcnREaXYsIFtkYXRhXSwgbGF5b3V0LCB7IHJlc3BvbnNpdmU6IHRydWUgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtb2RlVXBkYXRlZDogbW9kZVVwZGF0ZWQsXG4gIHZvbHVtZVVwZGF0ZWQ6IHZvbHVtZVVwZGF0ZWQsXG4gIGFjdGl2aXR5VXBkYXRlZDogYWN0aXZpdHlVcGRhdGVkLFxuICBhaXJVcGRhdGVkOiBhaXJVcGRhdGVkLFxuICB2aXN0eXBlVXBkYXRlZDogdmlzdHlwZVVwZGF0ZWQsXG4gIHBlb3BsZVVwZGF0ZWQ6IHBlb3BsZVVwZGF0ZWRcbn07XG4iLCJjb25zdCBRYiA9IHtcbiAgbG93X2FjdGl2aXR5X2x5aW5nOiAwLjQ1LFxuICBsb3dfYWN0aXZpdHk6IDAuNTQsXG4gIHNpbmdpbmc6IDAuNjUsXG4gIG1pZF9hY3Rpdml0eTogMC45LFxuICBzcG9ydHM6IDEuMixcbiAgdGVzdF8xOiAwLjU0LCAvLyB2YWx1ZSB1c2VkIGluIHRlc3RfZGF0YS9QSVJfTW9kZWxsLmpwZ1xuICB0ZXN0XzI6IDAuNjUsIC8vIHZhbHVlIHVzZWQgaW4gdGVzdF9kYXRhL1BJUl9Nb2RlbGxfYWt0LmpwZyBhcyBpbnN0cnVjdGVkIGJ5IG1haWxcbn07XG5cbmZ1bmN0aW9uIGZfdGF1KFYsIFEpIHtcbiAgcmV0dXJuIFYgLyBRO1xufVxuXG5mdW5jdGlvbiBmX0UoYWN0aXZpdHkpIHtcbiAgaWYgKGFjdGl2aXR5ID09IFwic2luZ2luZ1wiKSB7XG4gICAgcmV0dXJuIDM1MDA7XG4gIH0gZWxzZSBpZiAoYWN0aXZpdHkgPT1cInRlc3RfMlwiKSB7XG4gICAgcmV0dXJuIDI1MDA7IC8vIHZhbHVlIHJlY2VpdmVkIHZpYSBtYWlsIGZyb20ga3JpZWdlbFxuICB9IGVsc2UgcmV0dXJuIDEwMDtcbn1cblxuZnVuY3Rpb24gZl9RKGFpcikge1xuICBpZiAoYWlyID09IFwidmVyeV9iYWRcIikge1xuICAgIHJldHVybiAxMDtcbiAgfSBlbHNlIGlmIChhaXIgPT0gXCJiYWRcIikge1xuICAgIHJldHVybiAyMDtcbiAgfSBlbHNlIGlmIChhaXIgPT0gXCJva1wiKSB7XG4gICAgcmV0dXJuIDMwO1xuICB9IGVsc2UgaWYgKGFpciA9PSBcImdvb2RcIikge1xuICAgIHJldHVybiA0MDtcbiAgfSBlbHNlIGlmIChhaXIgPT0gXCJ2ZXJ5X2dvb2RcIikge1xuICAgIHJldHVybiA2MDtcbiAgfVxufVxuXG5mdW5jdGlvbiBmX3FhKGFjdGl2aXR5KSB7XG4gIGNvbnN0IFJfMCA9IDMuMzU7XG4gIGNvbnN0IHFfMCA9IDIuNzYxOCAqIChNYXRoLmV4cCgxLjE3NjEgKiBSXzApIC0gMSk7XG5cbiAgY29uc3QgRV8wID0gZl9FKFwibG93X2FjdGl2aXR5XCIpO1xuICBjb25zdCBFID0gZl9FKGFjdGl2aXR5KTtcblxuICByZXR1cm4gcV8wICogKEUgLyBFXzApICogKFFiW2FjdGl2aXR5XSAvIFFiLmxvd19hY3Rpdml0eSk7XG59XG5cbmZ1bmN0aW9uIGZfcWF0YXUocWEsIHRhdSkge1xuICByZXR1cm4gcWEgKiBNYXRoLmV4cCgtMC41Nzc2ICogdGF1KTtcbn1cblxuZnVuY3Rpb24gZl9BQ0goViwgUSkge1xuICByZXR1cm4gUSAvIFY7XG59XG5cbmZ1bmN0aW9uIGZfQyhxYSwgQUNILCBRLCB0KSB7XG4gIC8vIG51bWVyYXRvclxuXG4gIGxldCBuID0gMzkwNjI1ICogQUNIICsgMjI1NjI1O1xuICAvLyBjb25zb2xlLmxvZyhuKTtcbiAgbiA9IG4gKiBNYXRoLmV4cChBQ0ggKiB0KTtcbiAgLy8gY29uc29sZS5sb2cobik7XG4gIG4gPSBuIC0gMjI1NjI1O1xuICAvLyBjb25zb2xlLmxvZyhuKTtcbiAgbiA9IG4gKiBNYXRoLmV4cCgtQUNIICogdCAtICgzNjEgLyA2MjUpICogdCk7XG4gIC8vIGNvbnNvbGUubG9nKG4pO1xuICBuID0gMzkwNjI1ICogQUNIIC0gbjtcbiAgLy8gY29uc29sZS5sb2cobik7XG4gIG4gPSBxYSAqIG47XG5cbiAgLy8gY29uc29sZS5sb2cobik7XG4gIC8vIGNvbnNvbGUubG9nKHFhKTtcbiAgLy8gY29uc29sZS5sb2coQUNIKTtcbiAgLy8gY29uc29sZS5sb2coUSk7XG4gIC8vIGNvbnNvbGUubG9nKFwidDogXCIgKyB0KTtcblxuICAvLyBjb25zb2xlLmxvZyhuKTtcbiAgLy8gZGVub21pbmF0b3JcbiAgbGV0IGQgPSBRICogKDIyNTYyNSAqIEFDSCArIDEzMDMyMSk7XG4gIC8vIGNvbnNvbGUubG9nKGQpO1xuXG4gIHJldHVybiBuIC8gZDtcbn1cblxuZnVuY3Rpb24gZl9DdGF1KHFhdGF1LCBBQ0gsIHRhdSwgUSwgdCkge1xuICAvLyBudW1lcmF0b3JcbiAgbGV0IG4gPVxuICAgIHFhdGF1ICpcbiAgICBNYXRoLmV4cCgtQUNIICogKHQgKyB0YXUpKSAqXG4gICAgKEFDSCAqICh0IC0gdGF1KSAqIE1hdGguZXhwKEFDSCAqICh0ICsgdGF1KSkgLVxuICAgICAgTWF0aC5leHAoQUNIICogdCkgK1xuICAgICAgTWF0aC5leHAoQUNIICogdGF1KSk7XG5cbiAgLy8gZGVub21pbmF0b3JcbiAgbGV0IGQgPSBRICogQUNIO1xuXG4gIHJldHVybiBuIC8gZDtcbn1cblxuZnVuY3Rpb24gcGlyYSh0LCBRLCBhY3Rpdml0eSwgVikge1xuICBpZiAoUSA9PSAwKSBRICs9IDAuMDE7XG4gIGNvbnNvbGUubG9nKGBDYWxjdWxhdGluZyBwaXJhIGZvcjogdD0ke3R9LCBRPSR7UX0sIGFjdGl2aXR5PSR7YWN0aXZpdHl9LCBWPSR7Vn1gKTtcbiAgY29uc3QgdGF1ID0gZl90YXUoViwgUSk7XG4gIC8vIGNvbnNvbGUubG9nKFwidGF1OiBcIiArIHRhdSk7XG4gIGNvbnN0IHFhID0gZl9xYShhY3Rpdml0eSk7XG4gIC8vIGNvbnNvbGUubG9nKFwicWE6IFwiICsgcWEpO1xuICBjb25zdCBxYXRhdSA9IGZfcWF0YXUocWEsIHRhdSk7XG4gIC8vIGNvbnNvbGUubG9nKFwicWF0YXU6IFwiICsgcWF0YXUpO1xuICBjb25zdCBBQ0ggPSBmX0FDSChWLCBRKTtcbiAgLy8gY29uc29sZS5sb2coXCJBQ0g6IFwiICsgQUNIKTtcbiAgLy8gY29uc29sZS5sb2coXCJRYjogXCIgKyBRYlthY3Rpdml0eV0pO1xuXG4gIGlmICh0ID4gdGF1KSB7XG4gICAgY29uc3QgQyA9IGZfQyhxYSwgQUNILCBRLCB0YXUpO1xuICAgIC8vIGNvbnNvbGUubG9nKEMpO1xuICAgIGNvbnN0IEN0YXUgPSBmX0N0YXUocWF0YXUsIEFDSCwgdGF1LCBRLCB0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhDdGF1KTtcbiAgICByZXR1cm4gMSAtIE1hdGguZXhwKC0oQyArIEN0YXUpICogUWJbYWN0aXZpdHldKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBDID0gZl9DKHFhLCBBQ0gsIFEsIHQpO1xuICAgIC8vIGNvbnNvbGUubG9nKEMpO1xuICAgIHJldHVybiAxIC0gTWF0aC5leHAoLUMgKiBRYlthY3Rpdml0eV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVEYXRhKHZvbHVtZSwgYWN0aXZpdHksIGFpciwgcGVvcGxlKSB7XG4gIGNvbnN0IFYgPSB2b2x1bWU7XG5cbiAgbGV0IHhBID0gW107XG4gIGxldCB5QSA9IFtdO1xuICBsZXQgcm93cyA9IFtdO1xuXG4gIGxldCBtaW4gPSA1MFxuICBsZXQgbWF4ID0gMzAwMFxuICBcbiAgaWYgKDMwMCAqIHBlb3BsZSA+IG1heCkge1xuICAgICAgbWF4ID0gMzAwICogcGVvcGxlXG4gIH1cblxuICBmb3IgKGxldCBRID0gbWluOyBRIDw9IG1heDsgUSArPSA1MCkge1xuICAgIHhBID0gW107XG4gICAgbGV0IHJvdyA9IFtdO1xuXG4gICAgZm9yIChsZXQgdCA9IDAuMDsgdCA8PSA2LjA7IHQgKz0gMC4xKSB7XG4gICAgICAvLyBob3VycywrIGluY3JlbWVudHMgaW4gaG91cnNcbiAgICAgIHAgPSBwaXJhKHQsIFEsIGFjdGl2aXR5LCBWKTtcbiAgICAgIC8vY29uc29sZS5sb2coXCJQaXJhIGZvciB0PVwiICsgdCArIFwiLCBRPVwiICsgUSArIFwiOiBcIiArIHApO1xuICAgICAgcCA9IE1hdGgucm91bmQocCAqIDEwMDAwKSAvIDEwMDtcbiAgICAgIC8vaWYgKHQgPT0gNiAmJiBRID09IDUwMCkgcCA9IDEwMDtcbiAgICAgIGlmIChpc05hTihwKSB8fCBwID49IDEwMCkge1xuICAgICAgICAgIHAgPSAwXG4gICAgICB9XG4gICAgICByb3cucHVzaChwKTtcbiAgICAgIHhBLnB1c2godCk7XG4gICAgfVxuICAgIHlBLnB1c2goUSk7XG4gICAgcm93cy5wdXNoKHJvdyk7XG4gIH1cblxuICAvLyBmb3IgKGxldCBtaW51dGUgPSAwOyBtaW51dGUgPD0gMzYwOyBtaW51dGUgKz0gMzApIHtcbiAgLy8gICAgIGxldCB0ID0gbWludXRlIC8gNjA7XG4gIC8vICAgICBsZXQgbSA9IG1pbnV0ZSAlIDYwO1xuICAvLyAgICAgbGV0IGggPSAobWludXRlIC0gbSkgLyA2MDtcbiAgLy8gICAgIGxldCB0aW1lID0gaCArIFwiOlwiICsgbSArIFwiaFwiO1xuICAvLyB9XG5cbiAgcmV0dXJuIHtcbiAgICB0ZXN0OiB4QSxcbiAgICB4OiB4QSxcbiAgICB5OiB5QSxcbiAgICB6OiByb3dzLFxuICB9O1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlRGF0YVNpbXBsZSh2b2x1bWUsIGFjdGl2aXR5LCBhaXIsIHBlb3BsZSkge1xuICBjb25zdCBWID0gdm9sdW1lO1xuICBjb25zdCBRID0gZl9RKGFpcikgKiBwZW9wbGVcbiBcbiAgY29uc29sZS5sb2coYFRvdGFsIGFpcmZsb3cgZm9yIGFsbCBwZW9wbGUgaW4gdGhlIHJvb20gaXMgKFEpIGlzICR7UX1gKVxuXG4gIGxldCB4ID0gW107XG4gIGxldCB5ID0gW107IC8vIHBpcmFcbiAgbGV0IHgyID0gW107IC8vIG9ubHkgdGltZXN0YW1wcyBmb3IgdGhlIGZ1bGwgaG91clxuICBsZXQgeTIgPSBbXTsgLy8gaW5mZWN0ZWQgcGVvcGxlXG5cbiAgZm9yIChsZXQgdCA9IDA7IHQgPD0gNjsgdCArPSAxKSB7XG4gICAgcCA9IHBpcmEodCwgUSwgYWN0aXZpdHksIFYpO1xuICAgIHAgPSBNYXRoLnJvdW5kKHAgKiAxMDAwMCkgLyAxMDA7XG4gICAgeS5wdXNoKHApO1xuICAgIHgucHVzaCh0KTtcbiAgICB4Mi5wdXNoKHQpXG4gICAgeTIucHVzaChNYXRoLnJvdW5kKHAgKiBwZW9wbGUgLyAxMDApKTtcbiAgICAvLyBpbnRlcm1lZGlhdGUgc3RlcHMgZm9yIHBpcmEgb25seSwgbm90IGZvciBuby4gaW5mZWN0ZWQgcGVvcGxlXG4gICAgZm9yIChsZXQgc3QgPSAwLjE7IHN0IDwgMTsgc3QgKz0gMC4xKSB7XG4gICAgICAgIHAgPSBwaXJhKHQgKyBzdCwgUSwgYWN0aXZpdHksIFYpO1xuICAgICAgICBwID0gTWF0aC5yb3VuZChwICogMTAwMDApIC8gMTAwO1xuICAgICAgICB5LnB1c2gocCk7XG4gICAgICAgIHgucHVzaCh0ICsgc3QpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IHgyLFxuICAgICAgeTogeTJcbiAgICB9XG4gIF07XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcHJlcGFyZURhdGE6IHByZXBhcmVEYXRhLFxuICAgIHByZXBhcmVEYXRhU2ltcGxlOiBwcmVwYXJlRGF0YVNpbXBsZSxcbiAgICBwaXJhOiBwaXJhLFxuICAgIGZfcWE6IGZfcWFcbn1cbiIsImNvbnN0IHZvbHVtZSA9IHJlcXVpcmUoXCIuL3ZvbHVtZS5qc1wiKTtcbmNvbnN0IGdyYXBoID0gcmVxdWlyZShcIi4vZ3JhcGguanNcIik7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIC8vIGlmIGV4cGVydCwgaGlkZSBzaW1wbGUgaHRtbCBlbGVtZW50c1xuICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwiZXhwZXJ0XCIpIHtcbiAgICBzaW1wZWxFbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzaW1wbGVcIilcbiAgICBmb3IgKGVsIG9mIHNpbXBlbEVsZW1lbnRzKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH1cbiAgICBleHBlcnRFbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJleHBlcnRcIilcbiAgICBmb3IgKGVsIG9mIGV4cGVydEVsZW1lbnRzKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICB9XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09IFwic2ltcGxlXCIpIHtcbiAgICBleHBlcnRFbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzaW1wbGVcIilcbiAgICBmb3IgKGVsIG9mIGV4cGVydEVsZW1lbnRzKSB7XG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgICB9XG4gICAgZXhwZXJ0RWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXhwZXJ0XCIpXG4gICAgZm9yIChlbCBvZiBleHBlcnRFbGVtZW50cykge1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9XG4gIH1cbiAgZ3JhcGgubW9kZVVwZGF0ZWQoZXZlbnQudGFyZ2V0LnZhbHVlKVxufSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aXZpdHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBncmFwaC5hY3Rpdml0eVVwZGF0ZWQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbn0pO1xuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpc3R5cGVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuLy8gICBncmFwaC52aXN0eXBlVXBkYXRlZChldmVudC50YXJnZXQudmFsdWUpO1xuLy8gfSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVvcGxlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgYW1vdW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICBpZiAoMSA+IGFtb3VudCB8fCBhbW91bnQgPiAxMDApIHtcbiAgICAgICAgICAgIGFtb3VudCA9IDNcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGFtb3VudFxuICAgICAgICB9XG4gICAgICAgIGdyYXBoLnBlb3BsZVVwZGF0ZWQoYW1vdW50KTtcbiAgICB9XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhaXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGdyYXBoLmFpclVwZGF0ZWQoZXZlbnQudGFyZ2V0LnZhbHVlKVxufSk7XG4iLCJjb25zdCBncmFwaCA9IHJlcXVpcmUoXCIuL2dyYXBoLmpzXCIpO1xuXG5mdW5jdGlvbiBJbnB1dEVsZW1lbnQoZWxlbWVudCwgZGF0YSkge1xuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICBlbGVtZW50LnZhbHVlID0gZGF0YTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMsIGZhbHNlKTtcbn1cblxuLyoqXG4gKiBDYWxsZWQgd2hlbiB0aGUgaW5wdXQgZWxlbWVudCBpcyB1cGRhdGVkLCBlLmcuLCBieSB1c2luZyBhcnJvd3Mgd2hlbiB0eXBlPW51bWJlciBvciBieSBwcmVzc2luZyBlbnRlclxuICovXG5JbnB1dEVsZW1lbnQucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgIGNhc2UgXCJjaGFuZ2VcIjpcbiAgICAgIHRoaXMuY2hhbmdlKHRoaXMuZWxlbWVudC52YWx1ZSk7XG4gICAgICB1cGRhdGVWb2x1bWUoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBVcGRhdGUgdGhlIGVsZW1lbnQ7IHRoaXMgbWV0aG9kIHVwZGF0ZXMgdGhlIERPTSByZXByZXNlbnRhdGlvbiBhbmQgdGhlIGludGVybmFsIHJlcHJlc2VudGF0aW9uXG4gKi9cbklucHV0RWxlbWVudC5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHRoaXMuZGF0YSA9IHZhbHVlO1xuICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZVZvbHVtZSgpIHtcbiAgaWYgKGxlbmd0aEVsZW1lbnQuZGF0YSA+IDEwKSB7XG4gICAgbGVuZ3RoRWxlbWVudC5jaGFuZ2UoMTApXG4gIH1cbiAgaWYgKGxlbmd0aEVsZW1lbnQuZGF0YSA8IDEpIHtcbiAgICBsZW5ndGhFbGVtZW50LmNoYW5nZSgxKVxuICB9XG5cbiAgaWYgKHdpZHRoRWxlbWVudC5kYXRhID4gMTApIHtcbiAgICBsZW5ndGhFbGVtZW50LmNoYW5nZSgxMClcbiAgfVxuICBpZiAod2lkdGhFbGVtZW50LmRhdGEgPCAxKSB7XG4gICAgbGVuZ3RoRWxlbWVudC5jaGFuZ2UoMSlcbiAgfVxuXG4gIGlmIChoZWlnaHRFbGVtZW50LmRhdGEgPiA1KSB7XG4gICAgbGVuZ3RoRWxlbWVudC5jaGFuZ2UoNSlcbiAgfVxuICBpZiAoaGVpZ2h0RWxlbWVudC5kYXRhIDwgMSkge1xuICAgIGxlbmd0aEVsZW1lbnQuY2hhbmdlKDEpXG4gIH1cblxuICBjb25zdCB2b2x1bWUgPSBsZW5ndGhFbGVtZW50LmRhdGEgKiB3aWR0aEVsZW1lbnQuZGF0YSAqIGhlaWdodEVsZW1lbnQuZGF0YTtcbiAgY29uc29sZS5sb2codm9sdW1lKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2b2x1bWVcIikudmFsdWUgPSB2b2x1bWU7XG4gIGdyYXBoLnZvbHVtZVVwZGF0ZWQodm9sdW1lKTtcbiAgcmV0dXJuIHZvbHVtZTtcbn1cblxuLy8gaXQgaXMgcG9zc2libGUgdG8gdXBkYXRlIHRoZXNlIGVsZW1lbnRzLCBlLmcuLCB3aXRoIGxlbmd0aEVsZW1lbnQuY2hhbmdlKDEwKVxudmFyIGxlbmd0aEVsZW1lbnQgPSBuZXcgSW5wdXRFbGVtZW50KFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlbmd0aFwiKSxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZW5ndGhcIikudmFsdWVcbik7XG52YXIgd2lkdGhFbGVtZW50ID0gbmV3IElucHV0RWxlbWVudChcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aWR0aFwiKSxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aWR0aFwiKS52YWx1ZVxuKTtcbnZhciBoZWlnaHRFbGVtZW50ID0gbmV3IElucHV0RWxlbWVudChcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWlnaHRcIiksXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVpZ2h0XCIpLnZhbHVlXG4pO1xudXBkYXRlVm9sdW1lKCk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQ6IHVwZGF0ZVZvbHVtZSxcbiAgaW5pdDogdXBkYXRlVm9sdW1lLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=