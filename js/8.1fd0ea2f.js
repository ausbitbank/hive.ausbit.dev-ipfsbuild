(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1e5b":function(e,t,n){},"2da0":function(e,t,n){"use strict";var a=n("1e5b"),i=n.n(a);i.a},"34cd":function(e,t,n){"use strict";var a=n("b209"),i=n.n(a);i.a},"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"hHh lpR fFf"}},[n("q-header",{attrs:{reveal:"",elevated:""}},[n("q-toolbar",{staticClass:"bg-dark text-primary",attrs:{reveal:"",elevated:""}},[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[n("router-link",{attrs:{to:"/"}},[n("q-icon",{staticStyle:{"max-width":"50%"},attrs:{name:"img:statics/hextacular.svg"}})],1),e._v("\n        hive.ausbit.dev\n      ")],1),n("q-form",{staticClass:"q-mr-md",on:{submit:e.onSearchSubmit,reset:e.onSearchReset}},[n("q-input",{staticClass:"q-ml-md",attrs:{dark:"",dense:"",borderless:"","input-class":"text-right",label:"Search Account, Txid or Block"},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.search?n("q-icon",{attrs:{name:"search"},on:{click:e.onSearchSubmit}}):e._e(),""!==e.search?n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"clear"},on:{click:function(t){e.search=""}}}):e._e()]},proxy:!0}]),model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),n("notifications"),n("user-login")],1)],1),n("q-drawer",{attrs:{side:"left",overlay:"",elevated:""},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}}),e._l(e.essentialLinks,(function(t){return n("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2),n("div",{staticClass:"text-center"},[n("q-icon",{attrs:{name:"code",color:"grey",title:"coded"}}),e._v(" with "),n("q-icon",{attrs:{name:"favorite",color:"red",title:"love"}}),e._v(" by "),n("router-link",{attrs:{to:"/@ausbitbank"}},[e._v("ausbitbank")])],1)],1),n("q-page-container",{staticClass:"gradientBg"},[n("router-view")],1),n("user-login",{attrs:{drawerState:e.rightDrawerOpen}}),n("q-drawer",{attrs:{overlay:"",elevated:"",side:"right"},model:{value:e.notificationDrawerOpen,callback:function(t){e.notificationDrawerOpen=t},expression:"notificationDrawerOpen"}},[n("notifications")],1)],1)},i=[],r=(n("386d"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:e.link}},[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon,color:"secondary"}})],1):e._e(),n("q-item-section",[n("q-item-label",[e._v(e._s(e.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)}),o=[],s={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},c=s,l=n("2877"),u=n("66e5"),d=n("4074"),m=n("0016"),h=n("0170"),g=n("eebe"),f=n.n(g),p=Object(l["a"])(c,r,o,!1,null,null,null),v=p.exports;f()(p,"components",{QItem:u["a"],QItemSection:d["a"],QIcon:m["a"],QItemLabel:h["a"]});var b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-btn",{staticClass:"hvr q-ml-md",attrs:{flat:"",dense:"",round:"","aria-label":"Login"}},[n("q-avatar",[n("q-img",{attrs:{src:e.userAvatar}})],1),n("q-popup-proxy",[n("q-card",{attrs:{flat:"",bordered:""}},[e.loggedInUser?n("div",[n("q-list",{staticClass:"rounded-borders text-primary",attrs:{bordered:"",padding:""}},[n("q-item-label",{attrs:{header:""}},[e._v("\n          "+e._s(e.loggedInUser)+"\n        ")]),n("q-item",{attrs:{clickable:"",to:e.getAccountLink(e.loggedInUser)}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"perm_identity"}})],1),n("q-item-section",[e._v("Profile")])],1),n("q-item",{attrs:{to:e.getWalletLink(e.loggedInUser)}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"account_balance"}})],1),n("q-item-section",[e._v("Wallet")])],1),n("q-item",[n("q-btn",{staticClass:"text-center hvr",attrs:{label:"Logout",color:"red",icon:"exit_to_app",push:""},on:{click:function(t){e.loggedInUser=""}}})],1)],1)],1):n("q-list",[n("q-item-label",{staticClass:"text-h5 text-center",attrs:{header:""}},[e._v("\n          Login with Hive Account\n        ")]),n("q-item",[n("q-input",{attrs:{label:"username"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),""!==e.username?n("q-item",[n("q-btn",{attrs:{dense:"",push:"",color:"primary",label:"Login with Hive-Keychain",icon:"img:statics/hive-keychain.svg"},on:{click:function(t){return e.checkLogin(e.username)}}})],1):e._e(),n("q-item",[n("q-item-section",[n("q-btn",{attrs:{icon:"img:statics/member.png",push:"",label:"'Member ?",title:"Save your username to the local browser storage for faster future logins"},on:{click:function(t){e.rememberLogin=!e.rememberLogin}}},[n("q-checkbox",{model:{value:e.rememberLogin,callback:function(t){e.rememberLogin=t},expression:"rememberLogin"}})],1)],1)],1),e._l(e.savedUsers,(function(t){return n("q-item",{key:t.index},[n("q-chip",{staticClass:"hvr",attrs:{outline:"",size:"md",removable:"",clickable:""},on:{remove:function(n){return e.removeSavedUser(t)},click:function(n){e.rememberLogin=!0,e.checkLogin(t)}}},[n("q-avatar",[n("q-img",{attrs:{src:e.getHiveAvatarUrl(t)}})],1),e._v(" "+e._s(t))],1)],1)}))],2)],1)],1)],1)},k=[],q=n("a34a"),_=n.n(q),w=(n("6762"),n("2fdb"),n("96cf"),n("c973")),I=n.n(w),U=n("8e27"),y={name:"userLogin",props:[],components:{},data:function(){return{username:"",savedUsers:this.$q.localStorage.getItem("savedUsers")||[],rememberLogin:!1}},computed:{loggedInUser:{get:function(){return this.$store.state.hive.user.username},set:function(e){this.$store.commit("hive/updateLoggedInUser",e),this.rememberLogin&&this.$q.sessionStorage.set("loggedInUser",e)}},userAvatar:function(){return""!==this.loggedInUser?"https://images.hive.blog/u/"+this.loggedInUser+"/avatar":"https://images.hive.blog/u/null/avatar"}},methods:{getHiveAvatarUrl:function(e){return"https://images.hive.blog/u/"+e+"/avatar"},getAccountLink:function(e){return"/@"+e},getWalletLink:function(e){return"/@"+e+"/wallet"},removeSavedUser:function(e){this.savedUsers.splice(this.savedUsers.indexOf(e),1),this.$q.localStorage.set("savedUsers",this.savedUsers)},checkLogin:function(e){var t=this;return I()(_.a.mark((function n(){var a,i,r,o,s,c;return _.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(U["keychain"])(window,"requestSignBuffer",e,"hive.ausbit.dev login for "+e,"Posting");case 2:a=n.sent,i=a.success,r=a.msg,o=a.cancel,s=a.notInstalled,c=a.notActive,i&&(t.loggedInUser=e,t.$q.sessionStorage.set("loggedInUser",e),t.rememberLogin&&(t.savedUsers.includes(t.loggedInUser)||(t.$q.localStorage.set("savedUsers",t.savedUsers.concat([t.loggedInUser])),t.savedUsers=t.$q.localStorage.getItem("savedUsers")))),o||(c?console.error("Please allow Keychain to access this website"):s?console.error("Keychain not available"):console.info(r));case 10:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.$q.sessionStorage.getItem("loggedInUser")&&(this.loggedInUser=this.$q.sessionStorage.getItem("loggedInUser"))}},x=y,Q=(n("34cd"),n("9c40")),L=n("cb32"),S=n("068f"),C=n("7cbe"),$=n("f09f"),A=n("1c1c"),N=n("27f9"),D=n("8f8e"),O=n("b047"),H=Object(l["a"])(x,b,k,!1,null,null,null),P=H.exports;f()(H,"components",{QBtn:Q["a"],QAvatar:L["a"],QImg:S["a"],QPopupProxy:C["a"],QCard:$["a"],QList:A["a"],QItemLabel:h["a"],QItem:u["a"],QItemSection:d["a"],QIcon:m["a"],QInput:N["a"],QCheckbox:D["a"],QChip:O["a"]});var B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loggedInUser&&this.$store.state.hive.user.unreadNotificationCount>0?n("q-btn",{attrs:{flat:"",icon:"notifications"}},[n("q-badge",{attrs:{color:"red",floating:""}},[e._v(e._s(this.$store.state.hive.user.unreadNotificationCount))]),n("q-popup-proxy",[n("q-card",{staticClass:"text-center",attrs:{flat:"",bordered:""}},[n("q-card-section",{staticClass:"text-h6"},[e._v("\n      Notifications "),n("q-btn",{attrs:{flat:"",icon:"check_circle",color:"green",title:"Mark all notifications as read"},on:{click:function(t){return e.markNotificationsRead(e.notifications[0].date)}}})],1),n("q-separator"),n("q-card-section",[e.loading?n("q-spinner-pie",{attrs:{color:"secondary",size:"5em"}}):e._e(),null!==this.notifications?n("div",e._l(this.notifications,(function(t){return n("q-item",{key:t.index},[n("q-item-section",{attrs:{avatar:""}},[n("router-link",{attrs:{to:t.url}},[n("q-avatar",[n("q-img",{attrs:{src:e.getHiveAvatarUrl(e.getUserFromMention(t.msg))}})],1)],1)],1),n("q-item-section",[n("q-item-label",[e._v("\n          "+e._s(t.msg.substr(1))+"\n        ")]),n("q-item-label",{attrs:{caption:""}},[n("router-link",{attrs:{to:e.getUrl(t.url)}},[e._v(e._s(t.url.substr(0,40)))]),e._v(" ..\n        ")],1),n("q-item-label",{attrs:{caption:""}},[e._v("\n          "+e._s(e.timeDelta(t.date))+"\n        ")])],1)],1)})),1):e._e()],1),n("q-separator"),e._e()],1)],1)],1):e._e()},E=[],M=(n("28a5"),n("c1df")),T=n.n(M),R={name:"notifications",props:[],data:function(){return{loading:!1,last_id:null,limit:100}},computed:{loggedInUser:{get:function(){return this.$store.state.hive.user.username}},notifications:{get:function(){return this.$store.state.hive.user.notifications},set:function(e){this.$store.commit("hive/updateNotifications",e)}},unreadNotificationCount:{get:function(){return this.$store.state.hive.user.unreadNotificationCount},set:function(e){this.$store.commit("hive/updateUnreadNotificationCount",e)}}},watch:{loggedInUser:function(e,t){""!==e&&this.getUnreadNotificationCount()}},methods:{getHiveAvatarUrl:function(e){return"https://images.hive.blog/u/"+e+"/avatar"},getAccountLink:function(e){return"/@"+e},getNotifications:function(){var e=this;return I()(_.a.mark((function t(){var n;return _.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!0,n={account:e.loggedInUser,last_id:e.last_id,limit:Math.min(e.unreadNotificationCount,e.limit)},e.$hive.api.callAsync("bridge.account_notifications",n).then((function(t){e.notifications=t,e.loading=!1}));case 3:case"end":return t.stop()}}),t)})))()},getUnreadNotificationCount:function(){var e=this;return I()(_.a.mark((function t(){var n;return _.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!0,n={account:e.loggedInUser},e.$hive.api.callAsync("bridge.unread_notifications",n).then((function(t){e.unreadNotificationCount=t.unread,e.loading=!1,e.unreadNotificationCount>0&&e.getNotifications()}));case 3:case"end":return t.stop()}}),t)})))()},markNotificationsRead:function(e){var t=this;return I()(_.a.mark((function n(){var a,i,r,o,s,c,l;return _.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a='{ "date": '+e+"}",n.next=3,Object(U["keychain"])(window,"requestCustomJson",t.loggedInUser,"setLastRead",a,"Mark notifications as read up until "+e,"test");case 3:i=n.sent,r=i.success,o=i.msg,s=i.cancel,c=i.notInstalled,l=i.notActive,r&&(t.notifications=[],t.getUnreadNotificationCount()),s||(l?console.error("Please allow Keychain to access this website"):c?console.error("Keychain not available"):console.info(o));case 11:case"end":return n.stop()}}),n)})))()},filterMentions:function(e){return"mention"===e.type},getRelativeTime:function(e){return T()(e).fromNow()},getUrl:function(e){return"/"+e},getUserFromMention:function(e){return e.split(" ")[0].substr(1)},timeDelta:function(e){var t=T.a.utc(),n=T.a.utc(e),a=n.diff(t,"minutes");return T.a.duration(a,"minutes").humanize(!0)}},mounted:function(){this.getUnreadNotificationCount()}},j=R,z=n("58a8"),F=n("a370"),K=n("eb85"),V=n("163c"),W=n("4b7e"),J=Object(l["a"])(j,B,E,!1,null,null,null),Y=J.exports;f()(J,"components",{QBtn:Q["a"],QBadge:z["a"],QPopupProxy:C["a"],QCard:$["a"],QCardSection:F["a"],QSeparator:K["a"],QSpinnerPie:V["a"],QItem:u["a"],QItemSection:d["a"],QAvatar:L["a"],QImg:S["a"],QItemLabel:h["a"],QCardActions:W["a"]});var G={name:"MainLayout",components:{EssentialLink:v,userLogin:P,Notifications:Y},methods:{onSearchSubmit:function(){isNaN(this.search)?40===this.search.length?this.$router.push("/tx/"+this.search):this.$router.push({path:"/@"+this.search}):this.$router.push("/block/"+this.search)},onSearchReset:function(){this.search=""}},computed:{loggedInUser:{get:function(){return this.$store.state.hive.user.username}}},data:function(){return{search:"",leftDrawerOpen:!1,rightDrawerOpen:!1,searchSuggestions:null,notificationDrawerOpen:!1,essentialLinks:[{title:"Create an Account",caption:"hiveonboard.com",icon:"person_add",link:"https://hiveonboard.com?ref=ausbitbank"},{title:"Developer Docs",caption:"developers.hive.io",icon:"code",link:"https://developers.hive.io"},{title:"Hive Source",caption:"gitlab.syncad.com/hive",icon:"code",link:"https://gitlab.syncad.com/hive/"},{title:"Hive Discord",caption:"myhive.li/discord",icon:"chat",link:"https://myhive.li/discord"},{title:"Hive Telegram",caption:"t.me/hiveblockchain",icon:"chat",link:"https://t.me/hiveblockchain"},{title:"OpenHive.chat",caption:"openhive.chat",icon:"chat",link:"https://openhive.chat"},{title:"Browse with peakD",caption:"peakD.com",icon:"web",link:"https://peakd.com/@ausbitbank"},{title:"Browse with Hive.blog",caption:"Hive.blog/@ausbitbank",icon:"web_asset",link:"https://hive.blog/@ausbitbank"},{title:"Trade HIVE on Binance",caption:"Binance.com affiliate link",icon:"monetization_on",link:"https://www.binance.com/en/register?ref=WOL9Y5F6"},{title:"Trade HIVE on Bittrex",caption:"Bittrex.com affiliate link",icon:"monetization_on",link:"https://bittrex.com/Account/Register?referralCode=PPA-HMA-3VD"},{title:"Trade HIVE on Ionomy",caption:"Ionomy.com affiliate link",icon:"monetization_on",link:"https://ionomy.com/en/aff/c91aa3ae712e0ab1d5eb1cd8c007bc70"},{title:"Anonymous Servers for Crypto",caption:"Privex.io affiliate link",icon:"monetization_on",link:"https://pay.privex.io/order/?r=ausbitbank"},{title:"Project announcement post",caption:"ANN",icon:"help",link:"https://hive.ausbit.dev/@ausbitbank/hive-ausbit-dev-an-open-source-hive-block-explorer-post-viewer-and-more"}]}}},X=G,Z=(n("2da0"),n("4d5a")),ee=n("e359"),te=n("65c6"),ne=n("6ac5"),ae=n("0378"),ie=n("9404"),re=n("09e3"),oe=Object(l["a"])(X,a,i,!1,null,null,null);t["default"]=oe.exports;f()(oe,"components",{QLayout:Z["a"],QHeader:ee["a"],QToolbar:te["a"],QBtn:Q["a"],QToolbarTitle:ne["a"],QIcon:m["a"],QForm:ae["a"],QInput:N["a"],QDrawer:ie["a"],QList:A["a"],QItemLabel:h["a"],QPageContainer:re["a"]})},b209:function(e,t,n){}}]);