(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"26af":function(t,e,n){"use strict";n.r(e);var i=n("e626"),a=n("c772");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("58d0");var s=n("2877"),o=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},"58d0":function(t,e,n){"use strict";var i=n("cd12"),a=n.n(i);a.a},"9f94":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("5067"),a=n("5029"),r=n("f0ee"),s=[{title:"可回收物",image:"/static/images/recyclable.png",definition:"适宜回收利用和资源化 利用的，如：玻、金、 塑、纸、衣",include:"酱油瓶、玻璃杯、平板玻璃、易拉罐、饮料瓶、洗发水瓶、塑料玩具、书本、报纸、广告单、纸板箱、衣服、床上用品等",demandList:["轻投轻放","清洁干燥，避免污染","废纸尽量平整","立体包装物请清空内容物，清洁后压扁投放","有尖锐边角的，应包裹后投放"],color:"rgb(0, 0, 102)"},{title:"有害垃圾",image:"/static/images/hazardous.png",definition:"对人体健康或者自然环 境造成直接或潜在危害 的废弃物",include:"废电池、油漆桶、荧光灯管、废药品及其包装物等",demandList:["投放时请注意轻放","易破损的请连带包装或包裹后轻放","如易挥发，请密封后投放"],color:"rgb(229, 52, 34)"},{title:"湿垃圾",image:"/static/images/household.png",definition:"日常生活垃圾产生的容 易腐烂的生物质废弃物",include:"剩菜剩饭、瓜皮果核、花卉绿植、过期食品等",demandList:["纯流质的食物垃圾，如牛奶等，应直接倒进下水口","有包装物的湿垃圾应将包装物去除","后分类投放，包装物请投放到对应的可回收物或干垃圾容器"],color:"rgb(100, 64, 50)"},{title:"干垃圾",image:"/static/images/residual.png",definition:"除有害垃圾、可回收 物、湿垃圾以外的其他 生活废弃物",include:"餐盒、餐巾纸、湿纸巾、卫生间用纸、塑料袋、 食品包装袋、污染严重的纸、烟蒂、纸尿裤、 一次性杯子、大骨头、贝壳、花盆、陶瓷等",demandList:["尽量沥干水分","难以辨识类别的生活垃圾投入干垃圾容器内"],color:"rgb(44, 43, 41)"}],o={components:{},onLoad:function(e){console.log(e.key);var n=e.key;if(n)(0,r.setHistory)(n),this.getDetail(n);else{var i=t.getStorageSync("garlist");JSON.parse(i).data&&(this.setSwiperCurrent(JSON.parse(i).data[0].type),this.result=JSON.parse(i).data,this.isLoading=!1)}},data:function(){return{contentList:s,result:[],isLoading:!0,swiperCurrent:0}},methods:{getDetail:function(e){var n=this;t.showLoading({title:"识别中"}),(0,a.get)({url:i.queryGarbagUrl,params:{name:e}}).then(function(i){if(i.data&&0!==i.data.length){var a=i.data.findIndex(function(t){return t.name===e}),r=i.data[a].type;t.hideLoading(),n.setSwiperCurrent(r),n.result=i.data,n.isLoading=!1}else t.showToast({title:"识别失败，请重试"})})},setSwiperCurrent:function(t){var e=0;switch(t){case 2:e=1;break;case 4:e=2;break;case 8:e=3;break}this.swiperCurrent=e},chooseType:function(t){this.setSwiperCurrent(t)}}};e.default=o}).call(this,n("543d")["default"])},c772:function(t,e,n){"use strict";n.r(e);var i=n("9f94"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},cd12:function(t,e,n){},e626:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})}},[["5162","common/runtime","common/vendor"]]]);