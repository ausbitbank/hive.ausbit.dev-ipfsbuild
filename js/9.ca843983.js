(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"223d":function(t,e,s){"use strict";var a=s("8ad5"),n=s.n(a);n.a},"8ad5":function(t,e,s){},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex flex-center"},[s("div",{staticClass:"q-pa-md row items-start q-gutter-md content-start content-stretch self-stretch col-grow justify-center"},[s("div",{staticClass:"justify-center",staticStyle:{width:"400px"}},[s("block",{attrs:{blockNum:0,view:"simple"}}),s("recent-posts-carousel",{attrs:{account:"ausbitbank",type:"blog"}}),s("ranked-posts-carousel",{attrs:{sortMethod:"trending"}}),s("ranked-posts-carousel",{attrs:{sortMethod:"hot"}})],1),s("nodes"),s("witnesses"),s("coingecko")],1)])},n=[],r=s("1cd2"),o=s("2a91"),i=s("da6c"),l=s("1b95"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0===t.posts.length?s("q-spinner-grid",{attrs:{size:"2em",color:"primary"}}):t._e(),t.posts.length>0?s("div",[s("q-card",{attrs:{flat:"",bordered:""}},[s("div",{staticClass:"text-h6 text-center"},["trending"===this.sortMethod?s("q-icon",{attrs:{name:"trending_up"}}):t._e(),"hot"===this.sortMethod?s("q-icon",{attrs:{name:"whatshot"}}):t._e(),t._v("\n      "+t._s(this.sortMethod.charAt(0).toUpperCase()+this.sortMethod.slice(1))+" "),t._e()],1),s("q-carousel",{staticClass:"bg-dark text-white shadow-2 rounded-borders",attrs:{"transition-prev":"jump-left","transition-next":"jump-right",swipeable:"",animated:"","control-color":"primary",padding:"",arrows:"",infinite:"",autoplay:t.autoplay,height:"250px",width:"400px"},on:{mouseenter:function(e){t.autoplay=!1},mouseleave:function(e){t.autoplay=!0}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.posts,(function(e){return s("q-carousel-slide",{key:e.index,staticClass:"column no-wrap flex-center",attrs:{name:e.permlink,"img-src":t.returnPostImage(e)}},[s("div",{staticClass:"custom-caption"},[s("router-link",{attrs:{to:t.returnPostPath(e.author,e.permlink)}},[t._v(t._s(e.title.substr(0,100)))]),s("br"),t._v("\n          by "),s("span",{staticClass:"text-bold"},[s("router-link",{attrs:{to:t.linkAccount(e.author)}},[t._v("@"+t._s(e.author))])],1),s("br"),s("span",{staticClass:"text-caption"},[t._v(t._s(t.timeDelta(e.created)))]),s("br"),e.json_metadata.description?s("span",{staticClass:"text-caption wrap"},[t._v(t._s(t.s(e.json_metadata.description).substr(0,150)))]):s("span",{staticClass:"text-caption wrap"},[t._v(t._s(t.s(e.body).substr(0,150))+"..")])],1),s("div",{staticClass:"absolute-bottom text-center"},[s("q-avatar",{attrs:{size:"3em"}},[s("q-img",{attrs:{src:t.getHiveAvatarUrl(e.author)}})],1)],1)])})),1)],1)],1):t._e(),s("q-dialog",{model:{value:t.settings,callback:function(e){t.settings=e},expression:"settings"}},[s("q-card",{staticClass:"q-pa-md q-ma-md"},[s("q-input",{attrs:{label:"Sort method"},model:{value:t.newSort,callback:function(e){t.newSort=e},expression:"newSort"}}),s("q-btn",{attrs:{label:"update",color:"primary"},on:{click:function(e){t.settings=!1,t.sortMethod=t.newSort,t.getRankedPosts()}}})],1)],1)],1)},u=[],d=s("c1df"),p=s.n(d),m=s("5e22"),h=s.n(m),f=s("24d4"),g={name:"trendingPostsCarousel",data:function(){return{posts:[],api:"https://rpc.ausbit.dev",slide:null,autoplay:!0,settings:!1,newSort:null,autoplaySlides:this.autoplay,renderer:new f["DefaultRenderer"]({baseUrl:"https://hive.ausbit.dev/",breaks:!1,skipSanitization:!1,allowInsecureScriptTags:!1,addNofollowToLinks:!0,doNotShowImages:!0,ipfsPrefix:"",assetsWidth:640,assetsHeight:480,imageProxyFn:function(t){return t},usertagUrlFn:function(t){return"/@"+t},hashtagUrlFn:function(t){return"/trending/"+t},isLinkSafeFn:function(t){return!0}})}},props:{sortMethod:String},computed:{firstPermlink:function(){return this.posts.length>0?this.posts[0].permlink:null}},methods:{returnPostImage:function(t){return t.json_metadata.image?t.json_metadata.image[0]:null},returnPostPath:function(t,e){return"/@"+t+"/"+e},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},timeDelta:function(t){var e=p.a.utc(),s=p.a.utc(t),a=s.diff(e,"minutes");return p.a.duration(a,"minutes").humanize(!0)},linkAccount:function(t){return"/@"+t},getRankedPosts:function(){var t=this;this.posts=[],this.$axios.post(this.api,{id:1,jsonrpc:"2.0",method:"bridge.get_ranked_posts",params:{observer:null,limit:10,sort:this.sortMethod,start_author:null,start_permlink:null}}).then((function(e){t.posts=e.data.result,t.slide=t.firstPermlink}))},s:function(t){var e={allowedTags:[],allowedAttributes:[],disallowedTagsMode:"discard"};return h()(t,e)}},mounted:function(){this.newSort=this.sortMethod,this.getRankedPosts()}},b=g,v=(s("223d"),s("2877")),k=s("981c"),w=s("f09f"),_=s("0016"),x=s("9c40"),C=s("880c"),y=s("62cd"),q=s("cb32"),P=s("068f"),S=s("24e8"),j=s("27f9"),M=s("eebe"),Q=s.n(M),A=Object(v["a"])(b,c,u,!1,null,"3976e82d",null),I=A.exports;Q()(A,"components",{QSpinnerGrid:k["a"],QCard:w["a"],QIcon:_["a"],QBtn:x["a"],QCarousel:C["a"],QCarouselSlide:y["a"],QAvatar:q["a"],QImg:P["a"],QDialog:S["a"],QInput:j["a"]});var U=s("d899"),z={name:"Home",data:function(){return{}},components:{nodes:r["a"],witnesses:o["a"],coingecko:i["a"],recentPostsCarousel:l["a"],rankedPostsCarousel:I,block:U["a"]},computed:{},methods:{},mounted:function(){document.title="hive.ausbit.dev"}},D=z,F=(s("958d"),s("9989")),H=Object(v["a"])(D,a,n,!1,null,"19618039",null);e["default"]=H.exports;Q()(H,"components",{QPage:F["a"]})},"958d":function(t,e,s){"use strict";var a=s("f6cd"),n=s.n(a);n.a},f6cd:function(t,e,s){}}]);