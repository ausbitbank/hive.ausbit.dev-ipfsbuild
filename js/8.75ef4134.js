(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1e5b":function(t,e,n){},"2da0":function(t,e,n){"use strict";var a=n("1e5b"),i=n.n(a);i.a},"34cd":function(t,e,n){"use strict";var a=n("b209"),i=n.n(a);i.a},"713b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-header",{attrs:{reveal:"",elevated:""}},[n("q-toolbar",{staticClass:"bg-dark text-primary",attrs:{reveal:"",elevated:""}},[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-toolbar-title",[n("router-link",{attrs:{to:"/"}},[n("q-icon",{staticStyle:{"max-width":"50%"},attrs:{name:"img:statics/hextacular.svg"}})],1),t._v("\n        hive.ausbit.dev\n      ")],1),n("q-form",{staticClass:"q-mr-md",on:{submit:t.onSearchSubmit,reset:t.onSearchReset}},[n("q-input",{staticClass:"q-ml-md",attrs:{dark:"",dense:"",borderless:"","input-class":"text-right",label:"Search Account, Txid or Block"},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.search?n("q-icon",{attrs:{name:"search"},on:{click:t.onSearchSubmit}}):t._e(),""!==t.search?n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(e){t.search=""}}}):t._e()]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("notifications"),n("user-login")],1)],1),n("q-drawer",{attrs:{side:"left",overlay:"",elevated:""},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}}),t._l(t.essentialLinks,(function(e){return n("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2),n("div",{staticClass:"text-center"},[n("q-icon",{attrs:{name:"code",color:"grey",title:"coded"}}),t._v(" with "),n("q-icon",{attrs:{name:"favorite",color:"red",title:"love"}}),t._v(" by "),n("router-link",{attrs:{to:"/@ausbitbank"}},[t._v("ausbitbank")])],1)],1),n("q-page-container",{staticClass:"gradientBg"},[n("router-view")],1)],1)},i=[],o=(n("386d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.icon,color:"secondary"}})],1):t._e(),n("q-item-section",[n("q-item-label",[t._v(t._s(t.title))]),n("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)}),r=[],s={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},c=s,l=n("2877"),u=n("66e5"),d=n("4074"),m=n("0016"),h=n("0170"),g=n("eebe"),f=n.n(g),v=Object(l["a"])(c,o,r,!1,null,null,null),p=v.exports;f()(v,"components",{QItem:u["a"],QItemSection:d["a"],QIcon:m["a"],QItemLabel:h["a"]});var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-btn",{staticClass:"hvr q-ml-md",attrs:{flat:"",dense:"",round:"","aria-label":"Login"}},[n("q-avatar",[n("q-img",{attrs:{src:t.userAvatar}})],1),n("q-popup-proxy",[n("q-card",{attrs:{flat:"",bordered:""}},[t.loggedInUser?n("div",[n("q-list",{staticClass:"rounded-borders text-primary",attrs:{bordered:"",padding:""}},[n("q-item-label",{attrs:{header:""}},[t._v("\n          "+t._s(t.loggedInUser)+"\n        ")]),n("q-item",{attrs:{clickable:"",to:t.getAccountLink(t.loggedInUser)}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"perm_identity"}})],1),n("q-item-section",[t._v("Profile")])],1),n("q-item",{attrs:{to:t.getWalletLink(t.loggedInUser)}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"account_balance"}})],1),n("q-item-section",[t._v("Wallet")])],1),n("q-item",[n("q-btn",{staticClass:"text-center hvr",attrs:{label:"Logout",color:"red",icon:"exit_to_app",push:""},on:{click:function(e){t.loggedInUser=""}}})],1)],1)],1):n("q-list",[n("q-item-label",{staticClass:"text-h5 text-center",attrs:{header:""}},[t._v("\n          Login with Hive Account\n        ")]),n("q-item",[n("q-input",{attrs:{label:"username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),""!==t.username?n("q-item",[n("q-btn",{attrs:{dense:"",push:"",color:"primary",label:"Login with Hive-Keychain",icon:"img:statics/hive-keychain.svg"},on:{click:function(e){return t.checkLogin(t.username)}}})],1):t._e(),n("q-item",[n("q-item-section",[n("q-btn",{attrs:{icon:"img:statics/member.png",push:"",label:"'Member ?",title:"Save your username to the local browser storage for faster future logins"},on:{click:function(e){t.rememberLogin=!t.rememberLogin}}},[n("q-checkbox",{model:{value:t.rememberLogin,callback:function(e){t.rememberLogin=e},expression:"rememberLogin"}})],1)],1)],1),t._l(t.savedUsers,(function(e){return n("q-item",{key:e.index},[n("q-chip",{staticClass:"hvr",attrs:{outline:"",size:"md",removable:"",clickable:""},on:{remove:function(n){return t.removeSavedUser(e)},click:function(n){t.rememberLogin=!0,t.checkLogin(e)}}},[n("q-avatar",[n("q-img",{attrs:{src:t.getHiveAvatarUrl(e)}})],1),t._v(" "+t._s(e))],1)],1)}))],2)],1)],1)],1)},k=[],q=n("a34a"),_=n.n(q),w=(n("6762"),n("2fdb"),n("96cf"),n("c973")),I=n.n(w),U=n("8e27"),y={name:"userLogin",props:[],components:{},data:function(){return{username:"",savedUsers:this.$q.localStorage.getItem("savedUsers")||[],rememberLogin:!1}},computed:{loggedInUser:{get:function(){return this.$store.state.hive.user.username},set:function(t){this.$store.commit("hive/updateLoggedInUser",t),this.rememberLogin&&this.$q.sessionStorage.set("loggedInUser",t)}},userAvatar:function(){return""!==this.loggedInUser?"https://images.hive.blog/u/"+this.loggedInUser+"/avatar":"https://images.hive.blog/u/null/avatar"}},methods:{getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},getAccountLink:function(t){return"/@"+t},getWalletLink:function(t){return"/@"+t+"/wallet"},removeSavedUser:function(t){this.savedUsers.splice(this.savedUsers.indexOf(t),1),this.$q.localStorage.set("savedUsers",this.savedUsers)},checkLogin:function(t){var e=this;return I()(_.a.mark((function n(){var a,i,o,r,s,c;return _.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(U["keychain"])(window,"requestSignBuffer",t,"hive.ausbit.dev login for "+t,"Posting");case 2:a=n.sent,i=a.success,o=a.msg,r=a.cancel,s=a.notInstalled,c=a.notActive,i&&(e.loggedInUser=t,e.$q.sessionStorage.set("loggedInUser",t),e.rememberLogin&&(e.savedUsers.includes(e.loggedInUser)||(e.$q.localStorage.set("savedUsers",e.savedUsers.concat([e.loggedInUser])),e.savedUsers=e.$q.localStorage.getItem("savedUsers")))),r||(c?console.error("Please allow Keychain to access this website"):s?console.error("Keychain not available"):console.info(o));case 10:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.$q.sessionStorage.getItem("loggedInUser")&&(this.loggedInUser=this.$q.sessionStorage.getItem("loggedInUser"))}},x=y,Q=(n("34cd"),n("9c40")),L=n("cb32"),C=n("068f"),S=n("7cbe"),$=n("f09f"),A=n("1c1c"),N=n("27f9"),H=n("8f8e"),D=n("b047"),O=Object(l["a"])(x,b,k,!1,null,null,null),P=O.exports;f()(O,"components",{QBtn:Q["a"],QAvatar:L["a"],QImg:C["a"],QPopupProxy:S["a"],QCard:$["a"],QList:A["a"],QItemLabel:h["a"],QItem:u["a"],QItemSection:d["a"],QIcon:m["a"],QInput:N["a"],QCheckbox:H["a"],QChip:D["a"]});var B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loggedInUser&&this.$store.state.hive.user.unreadNotificationCount>0?n("q-btn",{attrs:{flat:"",icon:"notifications"}},[n("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(this.$store.state.hive.user.unreadNotificationCount))]),n("q-popup-proxy",[n("q-card",{staticClass:"text-center",attrs:{flat:"",bordered:""}},[n("q-card-section",{staticClass:"text-h6"},[t._v("\n      Notifications "),n("q-btn",{attrs:{flat:"",icon:"check_circle",color:"green",title:"Mark all notifications as read"},on:{click:function(e){return t.markNotificationsRead(t.notifications[0].date)}}})],1),n("q-separator"),n("q-card-section",[t.loading?n("q-spinner-pie",{attrs:{color:"secondary",size:"5em"}}):t._e(),null!==this.notifications?n("div",t._l(this.notifications,(function(e){return n("q-item",{key:e.index},[n("q-item-section",{attrs:{avatar:""}},[n("router-link",{attrs:{to:e.url}},[n("q-avatar",[n("q-img",{attrs:{src:t.getHiveAvatarUrl(t.getUserFromMention(e.msg))}})],1)],1)],1),n("q-item-section",[n("q-item-label",[t._v("\n          "+t._s(e.msg.substr(1))+"\n        ")]),n("q-item-label",{attrs:{caption:""}},[n("router-link",{attrs:{to:t.getUrl(e.url)}},[t._v(t._s(e.url.substr(0,40)))]),t._v(" ..\n        ")],1),n("q-item-label",{attrs:{caption:""}},[t._v("\n          "+t._s(t.timeDelta(e.date))+"\n        ")])],1)],1)})),1):t._e()],1),n("q-separator"),t._e()],1)],1)],1):t._e()},E=[],M=(n("28a5"),n("c1df")),T=n.n(M),R={name:"notifications",props:[],data:function(){return{loading:!1,last_id:null,limit:100}},computed:{loggedInUser:{get:function(){return this.$store.state.hive.user.username}},notifications:{get:function(){return this.$store.state.hive.user.notifications},set:function(t){this.$store.commit("hive/updateNotifications",t)}},unreadNotificationCount:{get:function(){return this.$store.state.hive.user.unreadNotificationCount},set:function(t){this.$store.commit("hive/updateUnreadNotificationCount",t)}}},watch:{loggedInUser:function(t,e){""!==t&&this.getUnreadNotificationCount()}},methods:{getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},getAccountLink:function(t){return"/@"+t},getNotifications:function(){var t=this;return I()(_.a.mark((function e(){var n;return _.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,n={account:t.loggedInUser,last_id:t.last_id,limit:Math.min(t.unreadNotificationCount,t.limit)},t.$hive.api.callAsync("bridge.account_notifications",n).then((function(e){t.notifications=e,t.loading=!1}));case 3:case"end":return e.stop()}}),e)})))()},getUnreadNotificationCount:function(){var t=this;return I()(_.a.mark((function e(){var n;return _.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,n={account:t.loggedInUser},t.$hive.api.callAsync("bridge.unread_notifications",n).then((function(e){t.unreadNotificationCount=e.unread,t.loading=!1,t.unreadNotificationCount>0&&t.getNotifications()}));case 3:case"end":return e.stop()}}),e)})))()},markNotificationsRead:function(t){var e=this;return I()(_.a.mark((function n(){var a,i,o,r,s,c,l;return _.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a='{ "date": '+t+"}",n.next=3,Object(U["keychain"])(window,"requestCustomJson",e.loggedInUser,"setLastRead",a,"Mark notifications as read up until "+t,"test");case 3:i=n.sent,o=i.success,r=i.msg,s=i.cancel,c=i.notInstalled,l=i.notActive,o&&(e.notifications=[],e.getUnreadNotificationCount()),s||(l?console.error("Please allow Keychain to access this website"):c?console.error("Keychain not available"):console.info(r));case 11:case"end":return n.stop()}}),n)})))()},filterMentions:function(t){return"mention"===t.type},getRelativeTime:function(t){return T()(t).fromNow()},getUrl:function(t){return"/"+t},getUserFromMention:function(t){return t.split(" ")[0].substr(1)},timeDelta:function(t){var e=T.a.utc(),n=T.a.utc(t),a=n.diff(e,"minutes");return T.a.duration(a,"minutes").humanize(!0)}},mounted:function(){this.getUnreadNotificationCount()}},j=R,z=n("58a8"),F=n("a370"),K=n("eb85"),V=n("163c"),W=n("4b7e"),J=Object(l["a"])(j,B,E,!1,null,null,null),Y=J.exports;f()(J,"components",{QBtn:Q["a"],QBadge:z["a"],QPopupProxy:S["a"],QCard:$["a"],QCardSection:F["a"],QSeparator:K["a"],QSpinnerPie:V["a"],QItem:u["a"],QItemSection:d["a"],QAvatar:L["a"],QImg:C["a"],QItemLabel:h["a"],QCardActions:W["a"]});var G={name:"MainLayout",components:{EssentialLink:p,userLogin:P,Notifications:Y},methods:{onSearchSubmit:function(){isNaN(this.search)?40===this.search.length?this.$router.push("/tx/"+this.search):this.$router.push({path:"/@"+this.search}):this.$router.push("/block/"+this.search)},onSearchReset:function(){this.search=""}},computed:{loggedInUser:{get:function(){return this.$store.state.hive.user.username}}},data:function(){return{search:"",leftDrawerOpen:!1,searchSuggestions:null,essentialLinks:[{title:"Create an Account",caption:"hiveonboard.com",icon:"person_add",link:"https://hiveonboard.com?ref=ausbitbank"},{title:"Developer Docs",caption:"developers.hive.io",icon:"code",link:"https://developers.hive.io"},{title:"Hive Source",caption:"gitlab.syncad.com/hive",icon:"code",link:"https://gitlab.syncad.com/hive/"},{title:"Hive Discord",caption:"myhive.li/discord",icon:"chat",link:"https://myhive.li/discord"},{title:"Hive Telegram",caption:"t.me/hiveblockchain",icon:"chat",link:"https://t.me/hiveblockchain"},{title:"OpenHive.chat",caption:"openhive.chat",icon:"chat",link:"https://openhive.chat"},{title:"Browse with peakD",caption:"peakD.com",icon:"web",link:"https://peakd.com/@ausbitbank"},{title:"Browse with Hive.blog",caption:"Hive.blog/@ausbitbank",icon:"web_asset",link:"https://hive.blog/@ausbitbank"},{title:"Trade HIVE on Binance",caption:"Binance.com affiliate link",icon:"monetization_on",link:"https://www.binance.com/en/register?ref=WOL9Y5F6"},{title:"Trade HIVE on Bittrex",caption:"Bittrex.com affiliate link",icon:"monetization_on",link:"https://bittrex.com/Account/Register?referralCode=PPA-HMA-3VD"},{title:"Trade HIVE on Ionomy",caption:"Ionomy.com affiliate link",icon:"monetization_on",link:"https://ionomy.com/en/aff/c91aa3ae712e0ab1d5eb1cd8c007bc70"},{title:"Anonymous Servers for Crypto",caption:"Privex.io affiliate link",icon:"monetization_on",link:"https://pay.privex.io/order/?r=ausbitbank"},{title:"Project announcement post",caption:"ANN",icon:"help",link:"https://hive.ausbit.dev/@ausbitbank/hive-ausbit-dev-an-open-source-hive-block-explorer-post-viewer-and-more"}]}}},X=G,Z=(n("2da0"),n("4d5a")),tt=n("e359"),et=n("65c6"),nt=n("6ac5"),at=n("0378"),it=n("9404"),ot=n("09e3"),rt=Object(l["a"])(X,a,i,!1,null,null,null);e["default"]=rt.exports;f()(rt,"components",{QLayout:Z["a"],QHeader:tt["a"],QToolbar:et["a"],QBtn:Q["a"],QToolbarTitle:nt["a"],QIcon:m["a"],QForm:at["a"],QInput:N["a"],QDrawer:it["a"],QList:A["a"],QItemLabel:h["a"],QPageContainer:ot["a"]})},b209:function(t,e,n){}}]);