(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"1d6c":function(t,e,a){},"47fc":function(t,e,a){},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md row items-start q-gutter-md content-start content-stretch self-stretch col-grow justify-center"},[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeInLeft","leave-active-class":"animated fadeOutLeft"}},[a("div",{staticClass:"justify-center",staticStyle:{width:"400px"}},[a("block",{staticClass:"q-mb-lg",attrs:{blockNum:0,view:"simple"}}),a("recent-posts-carousel",{attrs:{account:"ausbitbank",type:"blog"}}),a("ranked-posts-carousel",{attrs:{sortMethod:"trending"}}),a("ranked-posts-carousel",{attrs:{sortMethod:"hot"}})],1)]),a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("nodes")],1),a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("witnesses")],1),a("transition",{attrs:{appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight"}},[a("coingecko")],1)],1)])},n=[],r=a("1cd2"),o=a("2a91"),i=a("da6c"),c=a("1b95"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("q-card",{attrs:{flat:"",bordered:""}},[a("div",{staticClass:"text-h6 text-center"},["trending"===this.sortMethod?a("router-link",{attrs:{to:"/trending"}},[a("q-icon",{attrs:{name:"trending_up",color:"green"}}),t._v(" Trending")],1):t._e(),"hot"===this.sortMethod?a("router-link",{attrs:{to:"/hot"}},["hot"===this.sortMethod?a("q-icon",{attrs:{name:"whatshot",color:"red"}}):t._e(),t._v(" Hot")],1):t._e(),t._e()],1),t.loading?a("q-skeleton",{staticClass:"bg-primary",attrs:{height:"250px",width:"400",animation:"fade",rect:""}}):t._e(),t.posts.length>0?a("q-carousel",{staticClass:"bg-dark text-white shadow-2 rounded-borders",attrs:{"transition-prev":"jump-left","transition-next":"jump-right",swipeable:"",animated:"","control-color":"primary",padding:"",arrows:"",infinite:"",autoplay:t.autoplay,height:"250px",width:"400px"},on:{mouseenter:function(e){t.autoplay=!1},mouseleave:function(e){t.autoplay=!0}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.posts,(function(e){return a("q-carousel-slide",{key:e.index,staticClass:"column no-wrap flex-center",attrs:{name:e.permlink,"img-src":t.returnPostImage(e)}},[a("div",{staticClass:"custom-caption"},[a("router-link",{attrs:{to:t.returnPostPath(e.author,e.permlink)}},[t._v(t._s(e.title.substr(0,100)))]),a("br"),t._v("\n          by "),a("span",{staticClass:"text-bold"},[a("router-link",{attrs:{to:t.linkAccount(e.author)}},[t._v("@"+t._s(e.author))])],1),a("br"),a("span",{staticClass:"text-caption"},[t._v(t._s(t.timeDelta(e.created)))]),a("br"),e.json_metadata.description?a("span",{staticClass:"text-caption wrap"},[t._v(t._s(t.s(e.json_metadata.description).substr(0,150)))]):a("span",{staticClass:"text-caption wrap"},[t._v(t._s(t.returnPostSummary(e)))])],1),a("div",{staticClass:"absolute-bottom text-center"},[a("q-avatar",{attrs:{size:"3em"}},[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e.author)}})],1)],1)])})),1):t._e()],1)],1),a("q-dialog",{model:{value:t.settings,callback:function(e){t.settings=e},expression:"settings"}},[a("q-card",{staticClass:"q-pa-md q-ma-md"},[a("q-input",{attrs:{label:"Sort method"},model:{value:t.newSort,callback:function(e){t.newSort=e},expression:"newSort"}}),a("q-btn",{attrs:{label:"update",color:"primary"},on:{click:function(e){t.settings=!1,t.sortMethod=t.newSort,t.getRankedPosts()}}})],1)],1)],1)},u=[],d=a("c1df"),p=a.n(d),m=a("5e22"),h=a.n(m),f=a("0879"),g={name:"trendingPostsCarousel",data:function(){return{posts:[],api:"https://rpc.ausbit.dev",slide:null,autoplay:!0,settings:!1,newSort:null,autoplaySlides:this.autoplay,loading:!1}},props:{sortMethod:String},computed:{firstPermlink:function(){return this.posts.length>0?this.posts[0].permlink:null}},methods:{returnPostImage:function(t){return Object(f["catchPostImage"])(t)},returnPostSummary:function(t){return Object(f["postBodySummary"])(t,150)},returnPostPath:function(t,e){return"/@"+t+"/"+e},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},timeDelta:function(t){var e=p.a.utc(),a=p.a.utc(t),s=a.diff(e,"minutes");return p.a.duration(s,"minutes").humanize(!0)},linkAccount:function(t){return"/@"+t},getRankedPosts:function(){var t=this;this.posts=[],this.loading=!0,this.$axios.post(this.api,{id:1,jsonrpc:"2.0",method:"bridge.get_ranked_posts",params:{observer:null,limit:10,sort:this.sortMethod,start_author:null,start_permlink:null}}).then((function(e){t.loading=!1,t.posts=e.data.result,t.slide=t.firstPermlink}))},s:function(t){var e={allowedTags:[],allowedAttributes:[],disallowedTagsMode:"discard"};return h()(t,e)}},mounted:function(){this.newSort=this.sortMethod,this.getRankedPosts()}},v=g,b=(a("e2ad"),a("2877")),k=a("f09f"),w=a("0016"),_=a("9c40"),x=a("293e"),C=a("880c"),y=a("62cd"),q=a("cb32"),P=a("068f"),S=a("24e8"),j=a("27f9"),Q=a("eebe"),I=a.n(Q),M=Object(b["a"])(v,l,u,!1,null,"5e805fcc",null),O=M.exports;I()(M,"components",{QCard:k["a"],QIcon:w["a"],QBtn:_["a"],QSkeleton:x["a"],QCarousel:C["a"],QCarouselSlide:y["a"],QAvatar:q["a"],QImg:P["a"],QDialog:S["a"],QInput:j["a"]});var A=a("d899"),R={name:"Home",data:function(){return{}},components:{nodes:r["a"],witnesses:o["a"],coingecko:i["a"],recentPostsCarousel:c["a"],rankedPostsCarousel:O,block:A["a"]},computed:{},methods:{},mounted:function(){document.title="hive.ausbit.dev"}},H=R,D=(a("a09b"),a("9989")),T=Object(b["a"])(H,s,n,!1,null,"477ca646",null);e["default"]=T.exports;I()(T,"components",{QPage:D["a"]})},a09b:function(t,e,a){"use strict";var s=a("47fc"),n=a.n(s);n.a},e2ad:function(t,e,a){"use strict";var s=a("1d6c"),n=a.n(s);n.a}}]);