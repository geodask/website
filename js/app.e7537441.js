(function(t){function e(e){for(var a,r,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,s=1;s<o.length;s++){var l=o[s];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=o[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=a,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;n.push(["02bb","chunk-vendors"]),o()})({"02bb":function(t,e,o){"use strict";o.r(e);var a=o("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{staticClass:"d-flex",attrs:{variant:"light",type:"light"}},[a("b-navbar-brand",{attrs:{href:"#"}},[a("img",{attrs:{src:o("8e02")}})]),a("VueBootstrapTypeahead",{staticClass:"flex-grow-1",staticStyle:{"z-index":"1000"},attrs:{data:t.locations,serializer:function(t){return t.name},placeholder:"Ricerca per comune",size:"lg"},on:{hit:function(e){return t.select()}},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}}),a("b-navbar-nav",{staticClass:"ml-auto",attrs:{pills:""}},[a("b-nav-item",{directives:[{name:"b-modal",rawName:"v-b-modal.info-modal",modifiers:{"info-modal":!0}}]},[t._v("Chi siamo")]),a("b-modal",{attrs:{"ok-only":"",title:"Chi siamo",id:"info-modal"}},[a("p",[t._v(" In Italia e nel Mondo abbiamo di fronte un futuro incerto. Perché questo futuro possa essere indirizzato in senso positivo, è necessario che si prendano ora decisioni basate sulla analisi di dati completi, verificati e che siano stati raccolti in modo omogeneo relativamente alla diffusione delle infezioni, ospedalizzazioni e decessi causati dal virus SARS-Cov-2. IoConto vuole fornire, a tutti gli enti e anche a singoli individui, un sistema semplice da usare, efficiente, pubblico per raccogliere i dati, normalizzarli e distribuirli a chiunque ne abbia bisogno al fine di disegnare scenari, prendere decisioni oculate e informare. "),a("a",{attrs:{target:"_blank",href:"https://github.com/ioconto/covid19"}},[t._v("Uniti ce la faremo.")])])]),a("b-nav-item",{attrs:{target:"_blank",href:"https://medium.com/ioconto"}},[t._v("Blog")])],1)],1),t._m(0),a("Map",{attrs:{flyTo:t.loc.coordinates}})],1)},n=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"nav-buttons"},[o("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSe_gJ1vM_2WXYkCNoyGwWRjLJcSlvEf9DwZAfpwR3IXLqbwSw/viewform"}},[o("button",{staticClass:"btn btn-primary m-2"},[t._v("Segnala Dati Comunali")])]),o("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSfbs90muj6Fe30pb2fi12kZDznBrvYhPSnB8nmSWjWP58jKuA/viewform"}},[o("button",{staticClass:"btn btn-primary m-2"},[t._v("Segnala Dati Ospedalieri")])]),o("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSd6_80C6IPNAyyMrIM5Z6MoUMtmTiEi56Ex9H_4rFvkgp9CvQ/viewform"}},[o("button",{staticClass:"btn btn-primary m-2"},[t._v("Voglio Partecipare")])])])}],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{height:"85vh",width:"100%",position:"relative"}},[o("l-map",{ref:"map",staticStyle:{height:"100%"},attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions},on:{"update:center":t.centerUpdate,"update:zoom":t.zoomUpdate}},[o("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),o("l-control",{staticClass:"leaflet-bar leaflet-control",attrs:{title:"Center map on your location",disableClickPropagation:"",position:"topleft"}},[o("a",{staticClass:"map-control location-control",on:{click:function(e){return t.goToCurrentLocation()}}},[o("i",{staticClass:"material-icons"},[t._v(t._s(t.locationIcon))])])]),o("l-control",{staticClass:"leaflet-bar leaflet-control",attrs:{title:"Data",disableClickPropagation:"",position:"topleft"}},[o("a",{staticClass:"map-control data-control",attrs:{href:"https://github.com/ioconto/covid19"}},[o("i",{staticClass:"material-icons"},[t._v("storage")])])]),o("transition",{attrs:{name:"slide"}},[o("l-control",{directives:[{name:"show",rawName:"v-show",value:t.showLegend,expression:"showLegend"}],staticClass:"leaflet-bar leaflet-control",attrs:{title:"Legenda",disableClickPropagation:"",position:"bottomleft"}},[o("a",{staticClass:"legend-container"},[o("map-legend")],1)])],1),o("l-control",{staticClass:"leaflet-bar leaflet-control",class:t.showLegend?"rotate-0":"rotate-180",attrs:{title:"Legenda",disableClickPropagation:"",position:"bottomleft"}},[o("a",{staticClass:"map-control data-control",on:{click:function(e){return t.toggleLegend()}}},[o("i",{staticClass:"material-icons"},[t._v("keyboard_arrow_down")])])])],1)],1)},s=[],l=o("e11e"),c=o.n(l),p=o("2699"),u=o("a40a"),d=o("2253"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",[o("b-row",{attrs:{"align-v":"center"}},[o("b-col",{attrs:{cols:"auto"}},[o("div",{staticClass:"circle red"})]),o("b-col",[o("div",{staticClass:"text"},[t._v("Decessi più del doppio degli anni precedenti")])])],1),o("b-row",{attrs:{"align-v":"center"}},[o("b-col",{attrs:{cols:"auto"}},[o("div",{staticClass:"circle yellow"})]),o("b-col",[o("div",{staticClass:"text"},[t._v("Incremento significativo rispetto agli anni precedenti")])])],1),o("b-row",{attrs:{"align-v":"center"}},[o("b-col",{attrs:{cols:"auto"}},[o("div",{staticClass:"circle green"})]),o("b-col",[o("div",{staticClass:"text"},[t._v("Incremento minore del 25% rispetto agli anni precedenti")])])],1)],1)},m=[],h={},b=h,g=(o("b4c2"),o("2877")),v=Object(g["a"])(b,f,m,!1,null,"b493c03e",null),y=v.exports,_={props:{flyTo:{type:Array,default:()=>[]}},components:{LMap:p["a"],LTileLayer:u["a"],LControl:d["a"],MapLegend:y},data(){return{geoJson:null,zoom:7,center:[45.75151263,9.90631523],url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',mapOptions:{zoomSnap:.5},showMap:!0,showLegend:!0,locationIcon:"gps_not_fixed"}},async created(){const t=await fetch("https://raw.githubusercontent.com/ioconto/covid19/master/opendata/current/it-total-deaths.json");this.geoJson=await t.json(),this.addGeoJson()},watch:{flyTo(){0!==this.flyTo.length&&this.$refs.map.mapObject.flyTo({lat:this.flyTo[1],lng:this.flyTo[0]},12)}},methods:{zoomUpdate(t){this.currentZoom=t},centerUpdate(t){this.currentCenter=t},showLongText(){this.showParagraph=!this.showParagraph},innerClick(){alert("Click!")},addGeoJson(){c.a.geoJSON(this.geoJson,{pointToLayer:(t,e)=>c.a.circleMarker(e,this.customCircleMarker(t.properties)),onEachFeature:this.onEachFeature}).addTo(this.$refs.map.mapObject)},onEachFeature(t,e){if(t.properties&&t.properties.name){let o='<a href="http://chart.ioconto.org/IoContoCompChart/drawCityChart.htm?city='+t.properties.istatId+'" target="_blank"><i class="material-icons">insert_chart_outlined</i><strong>'+t.properties.name+"</strong></a><br />";o+="Decessi Marzo 2020: "+t.properties.deaths+" (+"+100*t.properties.ratio+"%)<br />",o+="Decessi Marzo 2015-19: "+t.properties.avgDeaths+"<br />",o+="Differenza: "+t.properties.delta+"<br />",o+="Popolazione: "+t.properties.population+"<br />",o+="Pecentuale decessi su popolazione: "+t.properties.mortality+"%<br />",e.bindPopup(o)}},customCircleMarker(t){var e={radius:7,color:"#fff",weight:1,opacity:1,fillOpacity:.8,fillColor:t._umap_options.color};return e},goToCurrentLocation(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(t=>{this.$refs.map.mapObject.flyTo({lat:t.coords.latitude,lng:t.coords.longitude},12)}),this.locationIcon="gps_fixed"},toggleLegend(){this.showLegend=!this.showLegend}}},C=_,w=(o("91a5"),Object(g["a"])(C,r,s,!1,null,"4d872ae0",null)),O=w.exports,L=o("d45f"),j={name:"App",components:{Map:O,VueBootstrapTypeahead:L["a"]},data(){return{geoJson:{},locations:[],selection:"",names:[],loc:{}}},async beforeCreate(){const t=await fetch("https://raw.githubusercontent.com/ioconto/covid19/master/opendata/current/it-total-deaths.json");this.geoJson=await t.json(),this.locations=this.geoJson.features.map(t=>({name:t.properties.name,coordinates:t.geometry.coordinates}))},methods:{select(){this.loc=this.locations.find(t=>t.name===this.selection)}}},k=j,z=(o("d18b"),Object(g["a"])(k,i,n,!1,null,null,null)),P=z.exports,S=o("a584"),x=o("5f5b"),E=o("b1e0"),M=o("a925");function I(){const t=o("511f"),e={};return t.keys().forEach(o=>{const a=o.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){const i=a[1];e[i]=t(o)}}),e}a["default"].use(M["a"]);var T=new M["a"]({locale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_LOCALE||"en",fallbackLocale:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_I18N_FALLBACK_LOCALE||"en",messages:I()});o("6cc5"),o("f9e3"),o("2dd8");delete l["Icon"].Default.prototype._getIconUrl,l["Icon"].Default.mergeOptions({iconRetinaUrl:o("584d"),iconUrl:o("6397"),shadowUrl:o("e2b9")}),a["default"].use(x["a"]),a["default"].use(E["a"]),a["default"].use(S["a"],{config:{id:"UA-164557154-1"}}),a["default"].config.productionTip=!1,new a["default"]({i18n:T,render:t=>t(P)}).$mount("#app")},"147a":function(t){t.exports=JSON.parse('{"message":"Hello World"}')},"48fc":function(t,e,o){},"511f":function(t,e,o){var a={"./en.json":"147a"};function i(t){var e=n(t);return o(e)}function n(t){if(!o.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="511f"},"7f06":function(t,e,o){},"8e02":function(t,e,o){t.exports=o.p+"img/logo-ioconto-64.da6ea740.png"},"91a5":function(t,e,o){"use strict";var a=o("7f06"),i=o.n(a);i.a},9307:function(t,e,o){},b4c2:function(t,e,o){"use strict";var a=o("9307"),i=o.n(a);i.a},d18b:function(t,e,o){"use strict";var a=o("48fc"),i=o.n(a);i.a}});
//# sourceMappingURL=app.e7537441.js.map