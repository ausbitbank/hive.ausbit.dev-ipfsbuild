(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{13041:function(t,e,a){"use strict";var s=a("59cb"),n=a.n(s);n.a},"15e2":function(t,e,a){"use strict";var s=a("7388"),n=a.n(s);n.a},"59cb":function(t,e,a){},7388:function(t,e,a){},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md row items-start q-gutter-md content-start content-stretch self-stretch col-grow justify-center"},[a("div",{staticStyle:{width:"400px"}},[a("block",{staticClass:"q-mb-lg",attrs:{blockNum:0,view:"simple"}}),a("recent-posts-carousel",{staticStyle:{width:"400px"},attrs:{account:"ausbitbank",type:"blog"}}),a("ranked-posts-carousel",{staticStyle:{width:"400px"},attrs:{sortMethod:"trending"}}),a("coingeckoCarousel")],1),a("nodes"),a("witnesses")],1)])},n=[],i=a("1cd2"),o=a("2a91"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("q-card",{attrs:{bordered:""}},[a("div",{staticClass:"text-h6 text-center"},[a("router-link",{staticClass:"text-primary",attrs:{to:"markets"}},[a("q-icon",{attrs:{name:"monetization_on",color:"green"}}),t._v("  Coin Prices")],1)],1),null===t.coinGecko?a("q-skeleton",{attrs:{height:"250px",width:"400",rect:""}}):t._e(),null!==t.coinGecko?a("q-carousel",{staticClass:"bg-dark text-white shadow-2 rounded-borders",attrs:{"transition-prev":"jump-left","transition-next":"jump-right",swipeable:"",animated:"","control-color":"primary",padding:"",arrows:"",infinite:"",autoplay:t.autoplaySlides,height:"260px",width:"450px"},on:{mouseenter:function(e){t.autoplaySlides=!1}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.coinGecko,(function(e){return a("q-carousel-slide",{key:e.name,staticClass:"column no-wrap flex-center",attrs:{name:e.name,"img-src":e.image}},[a("div",{staticClass:"custom-caption"},[a("div",{staticClass:"text-bold"},[a("q-avatar",{attrs:{size:"sm"}},[a("q-img",{attrs:{src:e.image}})],1),a("a",{attrs:{href:t.returnCoinGeckoLink(e.id),target:"_blank"}},[t._v(t._s(e.name))]),e.market_cap_rank?a("span",{staticClass:"caption text-grey"},[t._v("#"+t._s(e.market_cap_rank))]):t._e()],1),e.sparkline_in_7d?a("sparkline",{attrs:{width:"250",height:"60"}},[a("sparklineCurve",{attrs:{data:e.sparkline_in_7d.price,limit:e.sparkline_in_7d.price.length,styles:t.sparklineStyle,spotStyles:t.spotStyle,spotProps:t.spotProps,refLineType:"avg"}})],1):t._e(),a("div",[a("span",{staticClass:"text-bold"},[t._v("Current Price: ")]),a("span",{class:t.getCoinColorClass(e)},[t._v("$"+t._s(t.tidyNumber(e.current_price.toFixed(3))))])]),e.market_cap&&e.market_cap>0?a("div",[a("span",{staticClass:"text-bold"},[t._v("Market Cap: ")]),t._v(" $"+t._s(t.tidyNumber(e.market_cap)))]):t._e(),a("div",[a("span",{staticClass:"text-bold"},[t._v("Total Volume: ")]),t._v(" $"+t._s(t.tidyNumber(e.total_volume)))]),e.low_24h&&e.high_24h?a("div",[a("span",{staticClass:"text-bold"},[t._v("24hr Range: ")]),a("span",[t._v("$"+t._s(t.tidyNumber(e.low_24h.toFixed(3)))+" - $"+t._s(t.tidyNumber(e.high_24h.toFixed(3))))])]):t._e(),e.price_change_24h&&e.price_change_percentage_24h?a("div",[a("span",{staticClass:"text-bold"},[t._v("24Hr Change: ")]),a("span",{class:t.getCoinColorClass(e)},[t._v("$"+t._s(t.tidyNumber(e.price_change_24h.toFixed(3)))+" ("+t._s(e.price_change_percentage_24h.toFixed(3))+"%)")])]):t._e(),a("div",[a("span",{staticClass:"text-bold"},[t._v("All Time High: ")]),t._v(" $ "),a("span",[t._v(t._s(t.tidyNumber(e.ath.toFixed(3))))]),a("span",{staticClass:"text-red"},[t._v(" ("+t._s(e.ath_change_percentage.toFixed(3))+" %)")])]),a("div",[a("span",{staticClass:"text-bold"},[t._v("All Time Low: ")]),t._v(" $ "),a("span",[t._v(t._s(t.tidyNumber(e.atl.toFixed(3))))]),a("span",{staticClass:"text-green"},[t._v(" ("+t._s(e.atl_change_percentage.toFixed(3))+" %)")])])],1)])})),1):t._e(),a("div",{staticClass:"text-center"},[a("div",{staticClass:"text-caption"},[t._v("Priced in "),a("span",{staticClass:"text-bold text-primary",on:{click:function(e){t.settingsDialog=!0}}},[t._v(t._s(t.currency))]),t._v(" via "),a("router-link",{attrs:{to:"/@coingecko"}},[t._v("coingecko")])],1),a("q-btn",{attrs:{push:"",icon:"settings",title:"Settings",color:"primary",flat:"",bordered:"",dense:""},on:{click:function(e){t.settingsDialog=!0}}}),a("q-dialog",{model:{value:t.settingsDialog,callback:function(e){t.settingsDialog=e},expression:"settingsDialog"}},[a("q-card",{attrs:{flat:"",bordered:""}},[a("q-card-section",[a("q-select",{attrs:{filled:"",multiple:"",options:t.coinList,"use-chips":"","stack-label":"",label:"Coins"},model:{value:t.coins,callback:function(e){t.coins=e},expression:"coins"}}),a("q-input",{attrs:{label:"Currency"},model:{value:t.currency,callback:function(e){t.currency=e},expression:"currency"}}),a("q-input",{attrs:{label:"Sort Order"},model:{value:t.sortOrder,callback:function(e){t.sortOrder=e},expression:"sortOrder"}}),a("q-toggle",{attrs:{"left-label":"",label:"Sparkline Chart"},model:{value:t.sparklineEnabled,callback:function(e){t.sparklineEnabled=e},expression:"sparklineEnabled"}}),a("div",[a("q-btn",{attrs:{push:"",label:"Update",icon:"save",color:"primary"},on:{click:function(e){t.getCoinGecko(),t.settingsDialog=!1}}})],1)],1)],1)],1)],1)],1)],1)},l=[],c=(a("0b21"),a("28a5"),a("06db"),a("6b54"),a("a481"),a("e286")),d={name:"Home",data:function(){return{coinGecko:null,sparklineIndicatorStyle:!1,sparklineStyle:{stroke:"#54a5ff",fill:"#aaaaaa"},spotStyle:{fill:"#54a5ff"},spotProps:{size:2},sparklineEnabled:!0,coinList:["hive","hive_dollar","bitcoin","ethereum","link","litecoin","eos","monero","dash","cub-finance","wrapped-leo","uniswap","yearn.finance","dogecoin","steem","steem_dollar","tron"],currency:"usd",sortOrder:"market_cap_asc",settingsDialog:!1,autoplaySlides:!0,slide:null}},components:{sparkline:c["default"]},props:{coins:{type:Array,required:!1,default:function(){return["hive","hive_dollar","bitcoin","ethereum","eos","cub-finance"]}}},computed:{apiUrl:function(){var t="https://api.coingecko.com/api/v3/coins/markets?",e=this.coins.join("%2C%20"),a="vs_currency="+this.currency+"&ids="+e+"&order="+this.sortOrder+"&per_page="+this.coins.length+"&page=1&sparkline="+this.sparklineEnabled,s=t+a;return s}},methods:{getCoinColorClass:function(t){return-1===Math.sign(t.price_change_24h)?"text-red":1===Math.sign(t.price_change_24h)?"text-green":"text-black"},getCoinGecko:function(){var t=this;this.coinGecko=null,this.$axios.get(this.apiUrl).then((function(e){t.slide=e.data[0].id,t.coinGecko=e.data})).catch((function(){console.log("Failed to load data from coingecko api")}))},tidyNumber:function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")},returnCoinGeckoLink:function(t){return"https://coingecko.com/en/coins/"+t.toLowerCase()}},mounted:function(){this.getCoinGecko()}},u=d,p=(a("13041"),a("2877")),h=a("f09f"),m=a("0016"),g=a("293e"),_=a("880c"),v=a("62cd"),b=a("cb32"),k=a("068f"),f=a("9c40"),x=a("24e8"),C=a("a370"),y=a("ddd8"),w=a("27f9"),q=a("9564"),S=a("eebe"),P=a.n(S),Q=Object(p["a"])(u,r,l,!1,null,"0adb3993",null),j=Q.exports;P()(Q,"components",{QCard:h["a"],QIcon:m["a"],QSkeleton:g["a"],QCarousel:_["a"],QCarouselSlide:v["a"],QAvatar:b["a"],QImg:k["a"],QBtn:f["a"],QDialog:x["a"],QCardSection:C["a"],QSelect:y["a"],QInput:w["a"],QToggle:q["a"]});var $=a("1b95"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("q-card",{attrs:{flat:"",bordered:""}},[a("div",{staticClass:"text-h6 text-center"},["trending"===this.sortMethod?a("router-link",{attrs:{to:"/trending"}},[a("q-icon",{attrs:{name:"trending_up",color:"green"}}),t._v(" Trending")],1):t._e(),"hot"===this.sortMethod?a("router-link",{attrs:{to:"/hot"}},["hot"===this.sortMethod?a("q-icon",{attrs:{name:"whatshot",color:"red"}}):t._e(),t._v(" Hot")],1):t._e(),t._e()],1),t.loading?a("q-skeleton",{attrs:{height:"250px",width:"400",animation:"fade",rect:""}}):t._e(),t.posts.length>0?a("q-carousel",{staticClass:"bg-dark text-white shadow-2 rounded-borders",attrs:{"transition-prev":"jump-left","transition-next":"jump-right",swipeable:"",animated:"","control-color":"primary",padding:"",arrows:"",infinite:"",autoplay:t.autoplay,height:"250px",width:"400px"},on:{mouseenter:function(e){t.autoplay=!1},mouseleave:function(e){t.autoplay=!0}},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.posts,(function(e){return a("q-carousel-slide",{key:e.index,staticClass:"column no-wrap flex-center",attrs:{name:e.permlink,"img-src":t.returnPostImage(e)}},[a("div",{staticClass:"custom-caption"},[a("router-link",{attrs:{to:t.returnPostPath(e.author,e.permlink)}},[t._v(t._s(e.title.substr(0,100)))]),a("br"),t._v("\n          by "),a("span",{staticClass:"text-bold"},[a("router-link",{attrs:{to:t.linkAccount(e.author)}},[t._v("@"+t._s(e.author))])],1),a("br"),a("span",{staticClass:"text-caption"},[t._v(t._s(t.timeDelta(e.created)))]),a("br"),e.json_metadata.description?a("span",{staticClass:"text-caption wrap"},[t._v(t._s(t.s(e.json_metadata.description).substr(0,150)))]):a("span",{staticClass:"text-caption wrap"},[t._v(t._s(t.returnPostSummary(e)))])],1),a("div",{staticClass:"absolute-bottom text-center"},[a("q-avatar",{attrs:{size:"3em"}},[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e.author)}})],1)],1)])})),1):t._e()],1)],1),a("q-dialog",{model:{value:t.settings,callback:function(e){t.settings=e},expression:"settings"}},[a("q-card",{staticClass:"q-pa-md q-ma-md"},[a("q-input",{attrs:{label:"Sort method"},model:{value:t.newSort,callback:function(e){t.newSort=e},expression:"newSort"}}),a("q-btn",{attrs:{label:"update",color:"primary"},on:{click:function(e){t.settings=!1,t.sortMethod=t.newSort,t.getRankedPosts()}}})],1)],1)],1)},D=[],G=a("c1df"),N=a.n(G),O=a("5e22"),A=a.n(O),F=a("0879"),I={name:"trendingPostsCarousel",data:function(){return{posts:[],api:this.$store.state.hive.user.settings.apiNode||"https://api.hive.blog",slide:null,autoplay:!0,settings:!1,newSort:null,autoplaySlides:this.autoplay,loading:!1}},props:{sortMethod:String},computed:{firstPermlink:function(){return this.posts.length>0?this.posts[0].permlink:null}},methods:{returnPostImage:function(t){return Object(F["catchPostImage"])(t)},returnPostSummary:function(t){return Object(F["postBodySummary"])(t,150)},returnPostPath:function(t,e){return"/@"+t+"/"+e},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},timeDelta:function(t){var e=N.a.utc(),a=N.a.utc(t),s=a.diff(e,"minutes");return N.a.duration(s,"minutes").humanize(!0)},linkAccount:function(t){return"/@"+t},getRankedPosts:function(){var t=this;this.posts=[],this.loading=!0,this.$axios.post(this.api,{id:1,jsonrpc:"2.0",method:"bridge.get_ranked_posts",params:{observer:null,limit:15,sort:this.sortMethod,start_author:null,start_permlink:null}}).then((function(e){t.loading=!1,t.posts=e.data.result,t.slide=t.firstPermlink}))},s:function(t){var e={allowedTags:[],allowedAttributes:[],disallowedTagsMode:"discard"};return A()(t,e)}},mounted:function(){this.newSort=this.sortMethod,this.getRankedPosts()}},E=I,T=(a("c77f"),Object(p["a"])(E,M,D,!1,null,"6b79d54c",null)),H=T.exports;P()(T,"components",{QCard:h["a"],QIcon:m["a"],QBtn:f["a"],QSkeleton:g["a"],QCarousel:_["a"],QCarouselSlide:v["a"],QAvatar:b["a"],QImg:k["a"],QDialog:x["a"],QInput:w["a"]});var L=a("d899"),z={name:"Home",data:function(){return{}},components:{nodes:i["a"],witnesses:o["a"],coingeckoCarousel:j,recentPostsCarousel:$["a"],rankedPostsCarousel:H,block:L["a"]},computed:{},methods:{},mounted:function(){document.title="hive.ausbit.dev"}},U=z,B=(a("15e2"),a("9989")),R=Object(p["a"])(U,s,n,!1,null,"3618eb50",null);e["default"]=R.exports;P()(R,"components",{QPage:B["a"]})},"92cc":function(t,e,a){},c77f:function(t,e,a){"use strict";var s=a("92cc"),n=a.n(s);n.a}}]);