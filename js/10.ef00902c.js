(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{c8dd:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("q-page",[void 0!==t.username&&void 0!==this.account?e("account-header",{attrs:{globalProps:this.globalProps,account:this.account,showBalances:!1}}):t._e(),e("q-tabs",{attrs:{dense:""},model:{value:t.tab,callback:function(o){t.tab=o},expression:"tab"}},[e("q-route-tab",{attrs:{name:"following",to:t.linkFollowing}},[t._v("Following "),void 0!==t.followCount?e("q-badge",{attrs:{color:"primary"}},[t._v(t._s(t.tidyNumber(t.followCount.following_count)))]):t._e()],1),e("q-route-tab",{attrs:{name:"followers",to:t.linkFollowers}},[t._v("Followers "),void 0!==t.followCount?e("q-badge",{attrs:{color:"primary"}},[t._v(t._s(t.tidyNumber(t.followCount.follower_count)))]):t._e()],1)],1),e("q-tab-panels",{staticStyle:{margin:"auto","max-width":"1000px"},attrs:{animated:""},model:{value:t.tab,callback:function(o){t.tab=o},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"following"}},[e("div",{staticClass:"text-h5 text-center"},[t._v("\n        "+t._s(t.username)+" is following "+t._s(t.followCount.following_count)+" accounts:\n      ")]),e("connections",{attrs:{type:"following",username:this.username}})],1),e("q-tab-panel",{attrs:{name:"followers"}},[e("div",{staticClass:"text-h5 text-center"},[t._v(t._s(t.username)+" is followed by "+t._s(t.followCount.follower_count)+" accounts:")]),e("connections",{attrs:{type:"followers",username:this.username}})],1)],1)],1)},a=[],s=(e("28a5"),e("06db"),e("6b54"),e("a481"),{name:"followers",components:{accountHeader:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"6841"))},connections:function(){return Promise.all([e.e(0),e.e(27)]).then(e.bind(null,"5542"))}},computed:{globalProps:{get:function(){return this.$store.state.hive.globalProps}},account:{get:function(){return this.$store.state.hive.accounts[this.username]}},linkFollowers:{get:function(){return"/@"+this.username+"/followers"}},linkFollowing:{get:function(){return"/@"+this.username+"/following"}},followCount:{get:function(){return this.$store.state.hive.followCounts[this.username]}}},methods:{tidyNumber:function(t){if(t){var o=t.toString().split(".");return o[0]=o[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),o.join(".")}return null}},data:function(){return{username:this.$route.params.username||this.$route.params.account,tab:"following"}},mounted:function(){this.globalProps.empty&&this.$store.dispatch("hive/getGlobalProps"),void 0===this.account&&this.$store.dispatch("hive/getAccount",this.username)}}),l=s,r=e("2877"),i=e("9989"),u=e("429bb"),c=e("7867"),b=e("58a8"),f=e("adad"),m=e("823b7"),d=e("eebe"),w=e.n(d),h=Object(r["a"])(l,n,a,!1,null,null,null);o["default"]=h.exports;w()(h,"components",{QPage:i["a"],QTabs:u["a"],QRouteTab:c["a"],QBadge:b["a"],QTabPanels:f["a"],QTabPanel:m["a"]})}}]);