(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0fda972f"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"3f58":function(e,t){function n(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n}e.exports={round:n}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5f5b"),a=n("bc3a"),i=n.n(a),s=(n("f9e3"),n("2dd8"),n("6cc5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-column h-100",attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:"/"}},[e._v("NavBar")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[e._v("Home")])],1)],1)],1),n("b-container",{staticClass:"d-flex flex-column flex-grow h-100",attrs:{fluid:""}},[n("router-view")],1)],1)}),c=[],u=(n("034f"),n("2877")),l={},p=Object(u["a"])(l,s,c,!1,null,null,null),f=p.exports,d=(n("d3b7"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"h-100"},[n("b-col",{staticClass:"no-padding"},[n("div",{staticStyle:{height:"100%",width:"100%"},on:{keyup:function(t){return(t.type.indexOf("key")||90===t.keyCode)&&t.ctrlKey?e.removeLastPoint(t):null}}},[e.showMap?n("l-map",{staticStyle:{height:"100%"},attrs:{zoom:e.zoom,center:e.center,options:e.mapOptions},on:{"update:center":e.centerUpdate,"update:zoom":e.zoomUpdate,click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])||"button"in t&&0!==t.button?null:e.handleMapClick(t)},contextmenu:function(t){return e.handleMapRightClick(t)}}},[n("l-control-layers",{attrs:{position:"topright"}}),e.geojson?n("l-heightgraph",{attrs:{data:e.geojson,options:{width:800,position:"bottomleft"},parser:"ors",expand:e.expand,debug:!0}}):e._e(),e._l(e.tileProviders,(function(e){return n("l-tile-layer",{key:e.name,attrs:{name:e.name,visible:e.visible,url:e.url,attribution:e.attribution,"layer-type":"base"}})})),e.geojson?n("l-geo-json",{attrs:{geojson:e.geojson}}):e._e(),n("l-layer-group",{ref:"features"},e._l(e.coordinates,(function(t,r){return n("l-marker",{key:r,attrs:{"lat-lng":[t[1],t[0]],icon:e.getIcon(r)}})})),1),n("l-control",{attrs:{position:"topright"}},[n("b-card",{staticClass:"transparent"},[n("p",[e._v(" Distance: "+e._s(e.distance)+" km"),n("br"),e._v(" Ascent: "+e._s(e.ascent)+" m D+"),n("br"),e._v(" Descent: "+e._s(e.descent)+"m D- ")]),n("b-button",{attrs:{size:"sm"},on:{click:e.toGpx}},[e._v("Export as GPX")]),n("br"),n("b-button",{attrs:{size:"sm"},on:{click:e.toJson}},[e._v("Export as JSON")]),n("br"),n("br"),e._v(" Import from JSON:"),n("br"),n("b-form-file",{attrs:{id:"file-small",size:"sm",accept:".json",placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},on:{input:e.fromJson},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)],1)],2):e._e()],1)])],1)},g=[],m=(n("4de4"),n("7db0"),n("4160"),n("d81d"),n("159b"),n("3835")),A=(n("96cf"),n("1da1")),b=n("e11e"),v=n.n(b),y=n("2699"),x=n("a40a"),w=n("044a"),k=n("9ee8"),C=n("1ebb"),S=n("4e2b"),O=n("2253"),j=n("598e"),R=n.n(j),U=n("a74f"),Q=n.n(U),M=n("9a80"),B=n.n(M),L=n("aba8"),E=n.n(L),P=v.a.latLng,T=n("5904"),N=n("e626"),J=n("21a6"),D=n("3f58"),z="5b3ce3597851110001cf6248859a373add3948c98894f77ce8dbccaa",G={name:"Home",components:{LMap:y["a"],LTileLayer:x["a"],LGeoJson:w["a"],LHeightgraph:E.a,LControlLayers:k["a"],LLayerGroup:C["a"],LMarker:S["a"],LControl:O["a"]},created:function(){},data:function(){return{tileProviders:[{name:"OpenTopoMap",visible:!1,url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",attribution:'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'},{name:"Thunderforest Outdoors",visible:!0,attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=6b982c516ec2414c8add22d504c1ebff"}],zoom:14,center:P(42.941218896491655,-.3136682510375977),currentZoom:14,currentCenter:P(42.941218896491655,-.3136682510375977),mapOptions:{zoomSnap:.5},showMap:!0,geojson:null,clicked:{},waypoints:[],distance:null,ascent:null,descent:null,expand:!0,startIcon:v.a.icon({iconUrl:R.a,iconAnchor:[4,30]}),finishIcon:v.a.icon({iconUrl:Q.a,iconAnchor:[4,32]}),circleIcon:v.a.icon({iconUrl:B.a,iconAnchor:[8,8]}),file:null}},computed:{coordinates:function(){return this.waypoints.map((function(e){return e.coordinates}))},skipSegments:function(){var e=[],t=0;return this.waypoints.forEach((function(n){n.skip&&e.push(t),t+=1})),e}},methods:{zoomUpdate:function(e){this.currentZoom=e},centerUpdate:function(e){this.currentCenter=e},handleMapClick:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.clicked=e.latlng,t.waypoints.push({coordinates:[e.latlng.lng,e.latlng.lat],skip:!1}),n.next=4,t.directions();case 4:case"end":return n.stop()}}),n)})))()},handleMapRightClick:function(e){var t=this;return Object(A["a"])(regeneratorRuntime.mark((function n(){var r,o,a,i,s,c,u,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!==t.waypoints.length){n.next=2;break}return n.abrupt("return",null);case 2:return t.clicked=e.latlng,r=D.round(e.latlng.lng,6),o=D.round(e.latlng.lat,6),n.next=7,t.getLineAltitude([t.coordinates[t.coordinates.length-1],[r,o]]);case 7:return a=n.sent,i=Object(m["a"])(a,2),s=Object(m["a"])(i[0],3),c=s[2],u=Object(m["a"])(i[1],3),l=u[2],t.waypoints.push({coordinates:[r,o],skip:!0,altitude:l,diff:l-c}),t.addPointToGeoJson([r,o,l]),n.abrupt("return",null);case 12:case"end":return n.stop()}}),n)})))()},removeLastPoint:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.waypoints.pop(),!(e.waypoints.length>=2)){t.next=6;break}return t.next=4,e.directions();case 4:t.next=7;break;case 6:e.geojson=null;case 7:case"end":return t.stop()}}),t)})))()},directions:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a,i,s,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.waypoints.length>=2)){t.next=8;break}return n=new T.Directions({api_key:z}),r={coordinates:e.coordinates,profile:"foot-hiking",format:"geojson",elevation:!0,extra_info:["steepness"]},e.skipSegments.length>0&&(r.skip_segments=e.skipSegments),t.next=6,n.calculate(r);case 6:o=t.sent,o&&(o.features&&o.features[0]&&(a=o.features[0],a.geometry&&Array.isArray(a.geometry.coordinates)&&(i=a.geometry.coordinates,s=e.waypoints.filter((function(e){return e.skip&&e.altitude})),s.forEach((function(e){var t=i.find((function(t){return t[0]===e.coordinates[0]&&t[1]===e.coordinates[1]}));t&&(t[2]=e.altitude)}))),a.properties&&(c=a.properties,e.ascent=c.ascent,e.descent=c.descent,c.summary&&(e.distance=Math.round(c.summary.distance/10)/100),u=e.waypoints.filter((function(e){return e.skip&&e.diff})),u.forEach((function(t){t.diff>0?e.ascent+=t.diff:e.descent-=t.diff})))),e.geojson=o);case 8:case"end":return t.stop()}}),t)})))()},getAltitude:function(e){return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new T.Elevation({api_key:z}),t.next=3,n.pointElevation({format_in:"point",format_out:"point",geometry:e});case 3:if(r=t.sent,!r||!r.geometry){t.next=7;break}return o=Object(m["a"])(r.geometry,3),a=o[2],t.abrupt("return",a||0);case 7:return t.abrupt("return",0);case 8:case"end":return t.stop()}}),t)})))()},getLineAltitude:function(e){return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=new T.Elevation({api_key:z}),t.next=3,n.lineElevation({format_in:"polyline",format_out:"polyline",geometry:e});case 3:if(r=t.sent,!r||!r.geometry){t.next=6;break}return t.abrupt("return",r.geometry);case 6:return t.abrupt("return",[]);case 7:case"end":return t.stop()}}),t)})))()},toGpx:function(){var e=N(this.geojson),t=new Blob([e]);J.saveAs(t,"off-planner.gpx")},addPointToGeoJson:function(e){if(this.geojson.features&&this.geojson.features[0]){var t=this.geojson.features[0];if(t.geometry&&Array.isArray(t.geometry.coordinates)){var n=t.geometry.coordinates;n.push(e)}}},getIcon:function(e){return 0===e?this.startIcon:e===this.coordinates.length-1?this.finishIcon:this.circleIcon},toJson:function(){var e=JSON.stringify(this.waypoints),t=new Blob([e]);J.saveAs(t,"off-planner.json")},fromJson:function(){var e=this;return Object(A["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.file.text();case 2:return n=t.sent,r=JSON.parse(n),e.waypoints=r,t.next=7,e.directions();case 7:case"end":return t.stop()}}),t)})))()}}},Z=G,F=(n("cccb"),Object(u["a"])(Z,h,g,!1,null,null,null)),_=F.exports;r["default"].use(d["a"]);var I=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],X=new d["a"]({routes:I}),V=X,W=n("2f62");r["default"].use(W["a"]);var Y=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}});i.a.defaults.baseURL="http://localhost:8000",r["default"].prototype.$axios=i.a,r["default"].use(o["a"]),r["default"].config.productionTip=!1,new r["default"]({router:V,store:Y,render:function(e){return e(f)}}).$mount("#app")},"598e":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARDSURBVFiF7ZdNbFRVFMd/977vmc5MZ6bTKXQQaCCAGLQJIWjEjwhITEATY1hINMYNriSuUDca3SiJGLd+JOCChARxIYQYwWBiGgMuGoyRVgUq03ZKS1vm472Z93Hd1FLoFBqM1AX/5OTd5J6c87vn3vNyr1BKsZCSC5r9/wAgchnj17gjBdDne+KT4pjXC2wAqkDtJqsCNaVUdMugQsSBNiA38xt39E7HlgUhZUcUqZzfiOrCsWTw2XttWnEkZMUSg7IrokPHo0rFjcJqLaDqhsL1QuF6gfS8UG/4kRYpJTUpfcMQdSmlp0k8AD+IUo1GFDNNGbYmTD+TNqNc2pL5nK3nc46dy1haptUim7bItppse/n7hi4kdK+x6F4zvQD5+MaOZCK99Jal8+qhXnUDp+aG1NwAQ5dkWk1SCRMh5ll+IZTebKJWLlGaiFGu6TywKoWhzz4qtqVhWxrZ1rkTFIdrFIddiqUa3WszLCvEZ/k0Bfiup8ZHB3royCfZ+9r9DJZc3t7XS7LFIJU0OLj/EUpXPA4e+ZMdWwpsfrSDTw/9zpdfXWDNihQfvPkQV8bqvPRGDxf/qrBjS4FlhZamAE27oDQaUuiQfP7+fWza0M7O7Us5fXgzQsAX+zayZFGM1985y/p1Wfa8+zOVasDpn0bY/eJKYo7G4W8GWLk8Qc/RreTbbD58q5vutemmVWoK8PzWOKuXmzyxq5feXwYAMHSJrkuWL2kBYGCwxsXLFZSCoREXgGOnihw7OciTD+ebJmumplvQ8BVPbXQYGQs5+UM/q7sSgHODjxDQnrUx9OsnzjQ1DEOSy1rzBmhagXP9DfYfmMCtRzzzWIyJsX6C+ijJFmPax7E1du9ayaK8g6YJDF3yygtdvLqzi+OnBqf9nt1awLG1OQFEzJHB2cOdc3vMUCQStC9egaaZlEY98m02gyWXxXmHqxMN0ikTpRSRAl27fS8u3nC0LixTNp7eFJcdGU1rzwraMxr5rEZ7RqMtraHdhCaExI63EUssQjfs2yYJQsXIqMfwFZehEZfBYde/VKy5A0PV4NvTQzEBrNJ16+NkunOb545HUk32J+O6AJUKI2K2KTQEugBhmkLZpsQyBZYpMA3DBxl6PsprgFsLoqoXRp4XEoYqjJRqNPxICEU5gkmvHpqWk17nxFq1a+PFE0FQ36Mrpc7bscSFdK6LyfHLjA6N7y1X6l/P2ishdCA5ZYkZY4BrU1b+Z6yUCprEeC6ebD+SSheoVkYu+L53XgcIA79hJRLIa9Kbq5RTAa9O2R1LatKzEolYGPgNuN4FSkgJUoT/Jvj8CEQopARQMwHuliIhxA1XsLsNcGLV+u2jCwnw4MBvP6YWEqCzVh4zFxJglu4B3AOYBgh8jygI5nmfvXNFQSAC//ofXwdQkTrzx7lTw0IpH+j7D/P3TY5eGp8YG6ioSJ0BEPcepwsN8DcM1Krl6Xy01wAAAABJRU5ErkJggg=="},"5ced":function(e,t,n){},"85ec":function(e,t,n){},"9a80":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAWwAAAFsB1WNqDwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFFSURBVDiNrZMxagJBFIb/mYWZCYropnIVwVTLNqIXME3IAbRWcgRPEDyBRwim1gMEm+QCCWmWrQyIWausEhR3BoZJE8MmRdg1+er3fcXjPWKMQRLenbq5fHEghKgzzioAoJQM472c77abkZx0guQ8OQQIASn0ZsNq2el7nluzLOtbWGsN3w8Wy1U4fr+9uDYG5itACMjp1f1dq9lo23aJ4ReiaK0en54f3m7OL42BoQBQ6M2GaWQAsO0SazUb7UJvNgQAyrtTt1p2+mnkZKRadvq8O3VpLl8ceJ5bSysf8Dy3lssXB1Sc8LOfC0uDZVkQQtQpY9zJbH/COKvQY+UDVCkZHisrqV5pvJdzrXVmWWuNOI5f6G67Gfl+sMga8P1gsdtuRlROOsFyFY6jaK3SylG0VstVOJaTTvDnU/6fZ0qS9Z0/ANkRt3ElFBCxAAAAAElFTkSuQmCC"},a74f:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACUQAAAlEBGgxkpAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPxSURBVFiF7ZfPaxRnGMc/7zs7uxsmm3Xf3U2UtDjBBaWxTRTUHDxHRdCbJ4V4EAwiCB4s9GAPPXjwkIL/gTcPBSm24E1zSMilpDUVCktGm26yze6su5tNJjOz7/TgZmv6Q6oQe8kXHh54H2aezzwv75d5iZtyEYgADZyOooidDOB0p1cUN+Wi9ANtX78wir0v5QGH2HkdsvelvOsXRvEDbUuAXDpJPBbTH6A5APFYTOfSSQAkwOyzFVqebwBZIYSxU4077862PN+YfbYCQAxgZSNNKNeTQqx/IYT43LKsZcMwylrrVd/3y0EQlAEXqHbCfSMDKCD7Rs4CyjTNgXg8PiClzLfb7QEp5b4oioxQWmJlI/0aCogeP37MgQMHCIKAFy9e4DgOruvy6tUrarUaruu2K5VK4Lpu23Vd0Wg0jFarZbbbbQlgGIa2LCvo6+trK6UipZSRy+VMpZSRyWTYs2cPSils22b//v2YpkmxWGR8fPz1BLZkmiaFQoFCofDX6Rmd2Ka1tTUAent7JZB4n22R/1bQWlMqlSiVSgA0Gg0AarUavu+jtUYIgWVZXZBGo0G5XAag1WoRRVG39s4AT5484dSpU1y+fJmFhQWOHTtGu93mzJkz3Lx5k9nZWW7dusX09DQTExM4jsPZs2e5cuUKDx8+5Nq1a8zNzXHx4kWeP3/+7gBhGHLw4EGmpqbo7+8nDEPCMMTzPIrFIpVKhSAI2NzcxPO8LZNhcnKS4eFhfN9nZmaGWq2G53nvDgDw8uVLHjx48Lf1c+fO8ejRo21rQ0ND3L17lzt37rC8vAzA3Nxcd+veC+DIkSPcvn0bIQRAN58/f57p6WmEEN14+vQp9+7dY2xsjPn5eQCuXr3K4OBg97l/kgF8eenSJZRS2wrJZBKlFIVCgUQiQTKZ5MSJEyQSCU6ePEk+n2d0dJSRkRGUUoyPj1OtVkkmk0xMTJBKpTh69Ch9fX0cP36cRGL7IanVaty/fx8hpYxGPvuUT4YPMzQ0hG3b2LZNLpcjlUq9dXz/Vc1mk0qlguM4OI7D4uIiPy88Y/7Hn4hprdnbU+e7b78JNkPxWxRFvRsbG1lASCm1ZVlBOp3uGkw+n+8aTCaT6X7NlmGtrq52DaterxutVsvUWksg6unpqQoh1hKxaHBseMD8QevXRjR2eC/Fpbr/y6+1r6MomhJCJICs1jrbbDZVs9lUS0tLio7VxuPxftM0B6SUeQCt9WoQBGXf93/nT4t+M6pAdX19fVMIceOjjzNfjR3ea34/42x3wi1FUbQJlDqxo3rrKfgQ2gXYBdgF2AXYBdgFkACVuocfhh8Mxg9DWal3flT/7+v5H5mDR8Z0o+kMAAAAAElFTkSuQmCC"},aba8:function(e,t,n){(function(e){var r,o,a;n("a4d3"),n("e01a"),n("944a"),n("99af"),n("4160"),n("caad"),n("fb6a"),n("0c47"),n("23dc"),n("4fad"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("466d"),n("159b"),n("ddb0");var i=n("ded3"),s=n("6374"),c=n("278c"),u=n("7037");(function(n,i){"object"===u(t)&&"object"===u(e)?e.exports=i():(o=[],r=i,a="function"===typeof r?r.apply(t,o):r,void 0===a||(e.exports=a))})("undefined"!==typeof self&&self,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===u(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({ae28:function(e,t,n){},c765:function(e,t,n){"use strict";var r=n("ae28"),o=n.n(r);o.a},dc65:function(e,t){e.exports=n("722b")},ef37:function(e,t){e.exports=n("ec4d")},fb15:function(e,t,n){"use strict";n.r(t);var r,o={};(n.r(o),n.d(o,"ors",(function(){return l})),n.d(o,"normal",(function(){return p})),"undefined"!==typeof window)&&(n("dc65"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"none"}})},u=[];n("ef37");function l(e){var t=[],n="string"===typeof e?JSON.parse(e):e,r=c(n.features,1),o=r[0],a=o.geometry.coordinates,i=o.properties.extras;return i&&Object.entries(i).forEach((function(e){var n,r=c(e,2),o=r[0],i=r[1],u=[],l=s(i.values);try{for(l.s();!(n=l.n()).done;){var p=n.value,f=c(p,3),d=f[0],h=f[1],g=f[2];u.push({type:"Feature",geometry:{type:"LineString",coordinates:a.slice(d,h+1)},properties:{attributeType:g}})}}catch(m){l.e(m)}finally{l.f()}t.push({type:"FeatureCollection",features:u,properties:{summary:o}})})),t}function p(e){return e}var f={name:"l-control-height-graph",data:function(){return{availableParsers:o,hg:null}},props:{position:{type:String,default:void 0},expand:{type:Boolean,default:void 0},data:{type:[Object,Array],default:function(){return[]}},parser:{type:String,default:"normal"},options:{type:Object,default:function(){}},debug:{type:Boolean,default:!1}},mounted:function(){var e=this;this.debug&&console.log("mounted"),this.$nextTick((function(){e.hg=L.control.heightgraph(i(i({},e.options),i(i({},e.position&&{position:e.position}),e.expand&&{expand:e.expand}))),e.updateGraph()}))},beforeDestroy:function(){this.debug&&console.log("beforeDestroy"),this.hg&&this.hg.remove()},methods:{updateGraph:function(){this.debug&&console.log("updateGraph"),this.hg&&this.hg.remove();var e=this.$parent.mapObject,t=null;try{this.hg.addTo(e);var n=Object.keys(this.availableParsers).includes(this.parser)?this.parser:"normal";t=this.availableParsers[n](this.data),this.hg.addData(t)}catch(r){console.log("Error in updateGraph: "),console.log(r),console.log("data",this.data),console.log("dataCollections",t)}}},watch:{data:function(){this.debug&&console.log("watch.data"),!this.data&&this.hg?this.hg.remove():this.updateGraph()}}},d=f;n("c765");function h(e,t,n,r,o,a,i,s){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:e,options:u}}var g=h(d,a,u,!1,null,null,null),m=g.exports;t["default"]=m}})["default"]}))}).call(this,n("62e4")(e))},cccb:function(e,t,n){"use strict";var r=n("5ced"),o=n.n(r);o.a}});
//# sourceMappingURL=app.ec8ae9b1.js.map