(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{102:function(e,t,i){"use strict";i.r(t);var n={name:"select-timeselected",props:{rows:{type:Array,default:function(){return Array.from({length:25}).map((function(e,t){var i=t.toString().padStart(2,"0")+":00";return 24===t&&(i=(t-1).toString().padStart(2,"0")+":59"),{value:i,label:i}}))}},columns:{type:Array,default:function(){return[{value:"mon",label:"星期一"},{value:"tue",label:"星期二"},{value:"wed",label:"星期三"},{value:"thu",label:"星期四"},{value:"fri",label:"星期五"},{value:"sat",label:"星期六"},{value:"sun",label:"星期日"}]}},selections:{type:[Array,Object],default:function(){return[]}},title:{type:String,default:"PickerComponentTitle"},legend:{type:String,default:"PickerComponentLegend"},itemHeight:{type:Number,default:20},headerHeight:{type:Number,default:32},yaxisWidth:{type:Number,default:50},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},rowEnable:{type:Boolean,default:!0},colEnable:{type:Boolean,default:!0},enable:{type:Boolean,default:!0},sortDirective:{type:String,validator:function(e){return["x","y"].indexOf(e)>-1},default:"x"}},data:function(){return{begin:{x:0,y:0},end:{x:0,y:0},isRangeActive:!1,datas:[],isMobile:!this.$isServer&&navigator.userAgent.match(/AppleWebKit.*Mobile.*/)}},computed:{timeItemStyl:function(){return{height:this.itemHeight-1+"px","line-height":this.itemHeight-1+"px"}},yaxisItemStyl:function(){return{height:this.itemHeight+"px","line-height":this.itemHeight+"px"}},yaxisStyl:function(){return{width:this.yaxisWidth+"px","margin-top":this.headerHeight-this.itemHeight/2+"px"}}},watch:{selections:{handler:function(){this._setIndexSelected()},deep:!0,immediate:!0}},mounted:function(){this.enable&&(this.isMobile?(document.addEventListener("touchstart",this._onMousedown,!1),document.addEventListener("touchmove",this._onMousemove,!1),document.addEventListener("touchend",this._onMouseup,!1)):(document.addEventListener("mousedown",this._onMousedown,!1),document.addEventListener("mousemove",this._onMousemove,!1),document.addEventListener("mouseup",this._onMouseup,!1)))},beforeDestroy:function(){this.enable&&(this.isMobile?(document.removeEventListener("touchstart",this._onMousedown),document.removeEventListener("touchmove",this._onMousemove),document.removeEventListener("touchend",this._onMouseup)):(document.removeEventListener("mousedown",this._onMousedown),document.removeEventListener("mousemove",this._onMousemove),document.removeEventListener("mouseup",this._onMouseup)))},methods:{_hasActive:function(e,t){return this.datas.includes(e+"-"+t)},_contains:function(e,t){if("function"==typeof e.contains)return e.contains(t);if("function"==typeof e.compareDocumentPosition)return!!(16&e.compareDocumentPosition(t));var i=t.parentNode;do{if(i===e)return!0;i=i.parentNode}while(null!==i);return!1},_getScrollContainerDistance:function(){for(var e=this.$parent,t=e.$el||e,i=0,n=0;t;)i+=t.scrollTop||0,n+=t.scrollLeft||0,t=t.parentNode;return{_scrollTop:i,_scrollLeft:n}},_getScrollDistance:function(e){var t=this._getScrollContainerDistance(),i=t._scrollTop;return{x:t._scrollLeft+(e.clientX||e.touches[0].clientX),y:i+(e.clientY||e.touches[0].clientY)}},_onTableAxisBetweenClick:function(e,t,i){if(this.enable&&this[t+"Enable"]){var n="row"===t?1:0,s=this[t+"s"].length-1-n,o=i.target.getBoundingClientRect(),a=null;"row"===t&&(a=i.clientY-o.top-o.height/2>0?"after":"before"),"before"===a&&(e=Math.max(e-1,0)),"after"===a&&(e=Math.min(e,s)),this._onTableAxisClick(e,t,i)}},_onTableAxisClick:function(e,t,i){if(this.enable&&this[t+"Enable"]){var n=this.$refs.timeSelectionArea.querySelectorAll("[data-"+t+'="'+e+'"]');this._selectAllByTds(n,i)}},_selectAllByTds:function(e,t){var i=this._getScrollContainerDistance(),n=i._scrollTop,s=i._scrollLeft,o=e[0].getBoundingClientRect(),a=o.left+s+Math.random()*o.width,r=o.top+n+Math.random()*o.height;this.begin={x:a,y:r};var l=e[e.length-1].getBoundingClientRect(),c=l.left+s+Math.random()*l.width,u=l.top+n+Math.random()*l.height;this.end={x:c,y:u},this._setSelectedItem(t),this.begin=this.end={x:0,y:0}},_resetRangeState:function(){this.isRangeActive=!1,this.$refs.timeSelectionRange.style.display="none",this.begin=this.end={x:0,y:0}},_onMousedown:function(e){(this.isMobile||e.preventDefault(),this._hasInWrap(e))&&(this.isRangeActive=!0,this.$refs.timeSelectionRange.style.display="block",this.begin=this.end=this._getScrollDistance(e),this._setRangePosition(e))},_onMousemove:function(e){e.preventDefault(),this.isRangeActive&&(this._hasInWrap(e)?(this.end=this._getScrollDistance(e),this._setRangePosition(e)):this._resetRangeState())},_onMouseup:function(e){this.isMobile||e.preventDefault(),this._hasInWrap(e)&&this._setSelectedItem(e),this._resetRangeState()},_setSelectedItem:function(e){var t,i,n=this.$refs.timeSelectionArea.querySelectorAll("td"),s=this._getScrollContainerDistance(),o=s._scrollTop,a=s._scrollLeft,r=this.begin.x,l=this.end.x,c=this.begin.y,u=this.end.y;r>l&&(r=(t=[l,r])[0],l=t[1]),c>u&&(c=(i=[u,c])[0],u=i[1]);var h=Array.from(n).filter((function(e){var t=e.getBoundingClientRect(),i=t.left+a,n=i+t.width,s=t.top+o,h=s+t.height;return!(n<r||i>l||h<c||s>u)})),d=h.every((function(e){return e.querySelector("div").getAttribute("class").split(" ").includes("is-active")})),f=[].concat(this.datas);d?h.forEach((function(e){var t=e.getAttribute("data-row")+"-"+e.getAttribute("data-col"),i=f.findIndex((function(e){return e===t}));i>=0&&f.splice(i,1)})):h.forEach((function(e){var t=e.getAttribute("data-row")+"-"+e.getAttribute("data-col");f.includes(t)||f.push(e.getAttribute("data-row")+"-"+e.getAttribute("data-col"))})),this.datas=f.sort()},_hasInWrap:function(e){var t=this.$refs.timeSelectionWrap,i=this.$refs.timeSelectionYaxis,n=this.$refs.timeSelectionPickerHeader,s=e.target;return this._contains(t,s)&&!this._contains(i,s)&&!this._contains(n,s)},_setRangePosition:function(e){var t=this.$refs.timeSelectionRange,i=this.$refs.timeSelectionArea.getBoundingClientRect(),n=this._getScrollContainerDistance(),s=n._scrollTop,o=n._scrollLeft,a=0,r=0;a=this.end.x<this.begin.x?this.end.x-i.left-o:this.begin.x-i.left-o,r=this.end.y<this.begin.y?this.end.y-i.top-s:this.begin.y-i.top-s,t.style.left=a+this.yaxisWidth+"px",t.style.top=r+this.headerHeight+"px",t.style.width=Math.abs(this.end.x-this.begin.x)+"px",t.style.height=Math.abs(this.end.y-this.begin.y)+"px"},_onTimePickerClick:function(e){var t=e.row,i=e.col,n=e.value;this.$emit("time-picker",{row:t,col:i,value:n})},_setIndexSelected:function(e){var t=this,i=[],n=this.selections;if(e&&(n=e),Array.isArray(n))i=[].concat(n);else{var s=function(e){var s=t.columns.findIndex((function(t){return t.value===e}));if(void 0!==s)for(var o=n[e],a=function(e){for(var n=o[e],a=n[0],r=n[1],l=t.rows.findIndex((function(e){return e.value===a||e.value===a+":00"}))||0,c=t.rows.findIndex((function(e){return e.value===r||e.value===r+":00"}))||0;l<c;)i.push(l+"-"+s),l++},r=0;r<o.length;r++)a(r)};for(var o in n)s(o)}this.datas=i},setAllSelected:function(){var e=this.$refs.timeSelectionArea.querySelectorAll("td");this._selectAllByTds(e)},getIndexSelected:function(){return this.datas},getSelected:function(){var e=this,t={};return this.datas.forEach((function(i){var n=i.split("-"),s=n[0],o=n[1],a=e.columns[+o].value;t[a]||(t[a]=[]),t[a].push([e.rows[+s].value,e.rows[+s+1].value])})),t},getMergeSelected:function(){var e=this,t=this.getSelected(),i=function(i){var n=t[i];t[i]=[];var s=Array.prototype.concat.apply([],n).sort((function(t,i){return(e.rows.findIndex((function(e){return e.value===t}))||0)-(e.rows.findIndex((function(e){return e.value===i}))||0)})),o=[];s.forEach((function(e,t,i){i.indexOf(e)===i.lastIndexOf(e)&&o.push(e)}));for(var a=0,r=o.length;a<r;a++)(a+1)%2==0&&t[i].push([o[a-1],o[a]])};for(var n in t)i(n);return t},_clearData:function(){this.datas=[]},_testData:function(){this._setIndexSelected({tue:[["00:00","01:00"]],mon:[["00:00","15:00"]],wed:[["12:00","15:00"],["18:00","20:00"]],thu:[["12:00","15:00"],["18:00","20:00"]],fri:[["12:00","15:00"],["18:00","20:00"]],sat:[["18:00","20:00"]],sun:[["18:00","20:00"]]})},_getData:function(){this.$isServer||alert(JSON.stringify(this.getMergeSelected()))}}},s=(i(89),i(0)),o=Object(s.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"time-selection"},[e.showHeader?i("div",{staticClass:"time-selection--header"},[e._t("timeSelection_title",[i("h2",[e._v(e._s(e.title))])])],2):e._e(),i("div",{ref:"timeSelectionWrap",staticClass:"time-selection-wrap"},[i("div",{ref:"timeSelectionYaxis",staticClass:"time-selection--yaxis",style:e.yaxisStyl},e._l(e.rows,(function(t,n){return i("div",{key:t.value,class:["yaxis-picker","time-selection--yaxis_item_"+n],style:e.yaxisItemStyl,on:{click:function(t){return e._onTableAxisBetweenClick(n,"row",t)}}},[e._v(e._s(t.label))])})),0),i("div",{staticClass:"time-selection--main",style:{"margin-left":e.yaxisWidth+"px"}},[i("table",{staticClass:"time-selection-picker"},[i("thead",{ref:"timeSelectionPickerHeader"},[e.columns.length?i("tr",e._l(e.columns,(function(t,n){return i("th",{key:t.value,class:["header-picker","time-selection-picker--header_item_"+n],style:{height:e.headerHeight+"px"},on:{click:function(t){return e._onTableAxisClick(n,"col",t)}}},[e._v(e._s(t.label))])})),0):e._e()]),i("tbody",{ref:"timeSelectionArea"},e._l(e.rows,(function(t,n){return n<e.rows.length-1?i("tr",{key:t.value+"-"+e.rows[n+1].value},e._l(e.columns,(function(s,o){return i("td",{key:s.value,staticClass:"time-selection-picker--bordered",class:{begin:e.enable},attrs:{"data-col":o,"data-row":n},on:{click:function(i){return e._onTimePickerClick({row:n,col:o,value:[t.value+"-"+e.rows[n+1].value,s.value]})}}},[i("div",{class:["time-picker","time-selection-picker--body_item_"+o,{"is-active":e._hasActive(n,o)}],style:e.timeItemStyl})])})),0):e._e()})),0)])]),i("div",{ref:"timeSelectionRange",staticClass:"time-selection--range"})]),e.showFooter?i("div",{staticClass:"time-selection--footer"},[i("button",{staticClass:"mr10 btn active",staticStyle:{padding:"10px","margin-left":"10px"},on:{click:e._clearData}},[e._v("Clear Data")]),i("button",{staticClass:"mr10 btn active",staticStyle:{padding:"10px","margin-left":"10px"},on:{click:e._testData}},[e._v("Test Data")]),i("button",{staticClass:"mr10 btn active",staticStyle:{padding:"10px","margin-left":"10px"},on:{click:e._getData}},[e._v("Get Data")])]):e._e()])}),[],!1,null,null,null);t.default=o.exports},78:function(e,t,i){},89:function(e,t,i){"use strict";var n=i(78);i.n(n).a}}]);