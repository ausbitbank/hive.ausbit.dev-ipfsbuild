(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{5542:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._l(t.currentPage,(function(t){return o("user-card",{key:t,attrs:{username:t}})})),t.maxPages>1?o("div",{staticClass:"q-pa-lg flex flex-center"},[o("q-pagination",{staticStyle:{margin:"auto"},attrs:{max:t.maxPages,"max-pages":3,"direction-links":"",input:"",unelevated:""},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e(),o("div",{staticClass:"text-center",staticStyle:{margin:"auto"}},[t.loadMoreEnabled?t._e():o("q-btn",{attrs:{flat:"",icon:"search",color:"primary"},on:{click:function(e){return t.getConnections()}}},[t._v("\n            Load more ("+t._s(t.people.length)+" so far)\n        ")])],1)],2)},i=[],l=(o("23bf"),{name:"connections",props:["type","username"],data:function(){return{people:[],loading:!1,limit:100,page:1}},components:{userCard:function(){return Promise.all([o.e(0),o.e(1),o.e(37)]).then(o.bind(null,"ab28"))}},watch:{currentPage:function(t){0===t.length&&this.getConnections(),this.getAccounts(t)}},methods:{getConnections:function(){var t=this;this.loading=!0;var e="";this.people.length>0&&(e=this.people[this.people.length-1]);var o=["follow_api","get_"+this.type,[this.username,e,"blog",this.limit]];this.$hive.api.callAsync("call",o).then((function(e){var o=[];e.forEach((function(e){"following"===t.type&&o.push(e.following),"followers"===t.type&&o.push(e.follower)})),t.people.push.apply(t.people,o),t.loading=!1}))},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},getAccountLink:function(t){return"/@"+t},getAccounts:function(t){var e=this,o=[];t.forEach((function(t){void 0===e.$store.state.hive.accounts[t]&&o.push(t)})),o.length>0&&this.$store.dispatch("hive/getAccounts",o)}},computed:{globalProps:function(){return this.$store.state.hive.globalProps},followCount:function(){return this.$store.state.hive.followCounts[this.username]},loadMoreEnabled:function(){return this.followCount?"following"===this.type?this.followCount.following_count<=this.people.length:this.followCount.follower_count<=this.people.length:!(this.people.length<this.limit)},currentPage:function(){return this.people.slice(this.page*this.limit-this.limit,this.page*this.limit)},maxPages:function(){return"following"===this.type&&this.followCount?Math.ceil(this.followCount.following_count/this.limit):"followers"===this.type&&this.followCount?Math.ceil(this.followCount.follower_count/this.limit):Math.ceil(this.people/this.limit)}},mounted:function(){this.getConnections(),this.globalProps.empty&&this.$store.dispatch("hive/getGlobalProps"),void 0===this.followCount&&this.$store.dispatch("hive/getFollowCount",this.username),this.page=1}}),s=l,a=o("2877"),r=o("3b166"),h=o("9c40"),c=o("eebe"),u=o.n(c),p=Object(a["a"])(s,n,i,!1,null,null,null);e["default"]=p.exports;u()(p,"components",{QPagination:r["a"],QBtn:h["a"]})}}]);