(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17],{"06f7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex q-pa-md flex-center"},[void 0!==t.globalProps&&null!==t.globalProps?a("q-card",{staticClass:"text-center q-pa-sm q-ma-sm",attrs:{bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h5"},[a("q-icon",{attrs:{name:"img:statics/hbd.svg",title:"HBD",size:"md"}}),t._v("  HBD Stabilizer")],1),a("p",[a("router-link",{attrs:{to:"@hbdstabilizer"}},[t._v("@hbdstabilizer")]),t._v(" is a project by "),a("router-link",{attrs:{to:"@smooth"}},[t._v("@smooth")]),t._v(" that uses HBD from "),a("router-link",{attrs:{to:"@hive.fund"}},[t._v("@hive.fund")]),t._v(" to purchase Hive & return it back to "),a("router-link",{attrs:{to:"@hive.fund"}},[t._v("@hive.fund")]),t._v(" whenever HBD is above its fair-value ($1 USD).")],1),a("div",{staticClass:"text-subtitle"},[a("router-link",{attrs:{to:"@smooth/posts"}},[a("q-icon",{attrs:{name:"info",color:"blue"}}),t._v("  Learn more from @smooth's posts")],1)],1)]),null!==t.dao?a("q-card-section",[a("div",{staticClass:"text-h6"},[a("q-icon",{attrs:{name:"account_balance_wallet",color:"blue-grey"}}),t._v("  "),a("router-link",{attrs:{to:"@hive.fund"}},[t._v("hive.fund")])],1),a("div",{staticClass:"text-subtitle"},[t._v(t._s(t.tidyNumber(t.dao.balance.split(" ")[0]))+" HIVE"),a("br"),t._v("\n      "+t._s(t.tidyNumber(t.dao.hbd_balance.split(" ")[0]))+" HBD")])]):t._e(),a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Funding Proposals")]),t._l(t.proposals,(function(e){return a("div",{key:e.index},[t._v("\n        #"+t._s(e.proposal_id)+" - "),a("router-link",{attrs:{to:t.returnPostLink(e.creator,e.permlink)}},[t._v(t._s(e.subject))]),"active"===e.status?a("q-icon",{attrs:{name:"check",color:"green",title:"Proposal funding is active"}}):a("q-icon",{attrs:{name:"clear",color:"red",title:"Proposal funding is inactive"}}),t._v("\n        "+t._s(t.tidyNumber(e.daily_pay.amount/1e3))+" HBD per day"),a("br")],1)})),a("div",[t._v("Daily: "),a("strong",[t._v(t._s(t.tidyNumber(t.fundingBudgetDaoDaily)))]),t._v(" HBD")]),a("div",[t._v("Hourly: "),a("strong",[t._v(t._s(t.tidyNumber(t.fundingBudgetDaoDaily/24)))]),t._v(" HBD")])],2),t.openOrders.length>0?a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Open Market Orders")]),t._l(t.openOrders,(function(e){return a("div",{key:e.index},[t._v("\n        "+t._s(e)+"\n      ")])}))],2):a("q-card-section",{staticClass:"text-subtitle"},[a("q-icon",{attrs:{name:"clear",color:"red"}}),t._v("  hbdstabilizer has no outstanding market orders\n    ")],1),t.hiveTransactions.length>0?a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Recent transactions from "),a("router-link",{attrs:{to:"@hbdstabilizer"}},[t._v("hbdstabilizer")])],1),a("div",{staticClass:"subtitle"},[t._v("Only show: "),t._l(["transfer","fill_order","limit_order_create","interest","fill_convert_request"],(function(e){return a("q-badge",{key:e.index,staticClass:"q-mr-sm",attrs:{color:"blue-grey"}},[t._v(t._s(e))])})),a("router-link",{attrs:{to:"@hbdstabilizer?filter=transfer,fill_order,limit_order_create,interest,fill_convert_request"}},[a("q-icon",{attrs:{name:"external_link"}})],1)],2),a("q-scroll-area",{staticStyle:{height:"400px","max-width":"100%"}},[a("q-list",{attrs:{separator:""}},[a("account-operations",{attrs:{"account-operations":t.hiveTransactions}})],1)],1)],1):t._e()],1):t._e()],1)},n=[],r=a("967e"),s=a.n(r),o=(a("6762"),a("2fdb"),a("4db1")),c=a.n(o),l=(a("96cf"),a("fa84")),d=a.n(l),u=(a("a481"),a("6b54"),a("06db"),a("28a5"),a("1c16")),v=a("be48"),h=a("d1f4"),p=h["ChainTypes"].operations,_=Object(h["makeBitMaskFilter"])([p.transfer,p.withdraw_vesting,p.interest,p.fill_convert_request,p.fill_order,p.limit_order_create]),b={name:"hbd",data:function(){return{medianPrice:null,daoHbdBalance:0,hbdStabilizer:null,dao:null,openOrders:[],accountHistoryPointer:-1,accountHistoryLimit:100,hiveTransactions:[],bitmask:_,proposals:[]}},components:{accountOperations:v["a"]},computed:{globalProps:{get:function(){return this.$store.state.hive.globalProps}},fundingBudgetDaoDaily:function(){var t=0;return this.proposals.length>0?(this.proposals.forEach((function(e){"active"===e.status&&(t+=e.daily_pay.amount/1e3)})),t):0}},methods:{tidyNumber:function(t){if(null==t)return null;var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")},getHbdStabilizerAccount:function(){var t=this;this.$hive.api.getAccountsAsync(["hive.fund"]).then((function(e){t.dao=e[0]})).catch((function(){return console.log("Failed to load @hbdstabilizer profile")}))},getOpenOrders:function(){var t=this;this.$hive.api.getOpenOrdersAsync("hbdstabilizer").then((function(e){t.openOrders=e}))},findProposals:function(t){var e=this,a={proposal_ids:t};this.$hive.api.callAsync("database_api.find_proposals",a).then((function(t){e.proposals=t.proposals}))},returnPostLink:function(t,e){return"@"+t+"/"+e},getHiveWalletTransactions:function(){var t=this;return d()(s.a.mark((function e(){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$hive.api.callAsync("call",["database_api","get_account_history",["hbdstabilizer",t.accountHistoryPointer,t.accountHistoryLimit].concat(c()(t.bitmask))]).then((function(e){t.accountHistoryPointer=parseInt(e[0][0])-1,0===t.hiveTransactions.length?t.hiveTransactions=e.reverse():t.hiveTransactions=t.hiveTransactions.concat(e.reverse())})).catch((function(e){console.log(e),e.data.stack[0].data.sequence&&e.cause.message.includes("Could not find filtered operation in")&&(t.accountHistoryPointer=e.data.stack[0].data.sequence,Object(u["a"])(t.getHiveWalletTransactions(),100))}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){document.title="HBDStabilizer Monitor",this.getHbdStabilizerAccount(),this.getOpenOrders(),this.getHiveWalletTransactions(),this.findProposals([158,159,166,169])},created:function(){this.$store.dispatch("hive/getGlobalProps")}},f=b,m=(a("e87e"),a("2877")),g=a("9989"),y=a("f09f"),k=a("a370"),q=a("0016"),H=a("58a8"),x=a("4983"),P=a("1c1c"),D=a("eebe"),O=a.n(D),B=Object(m["a"])(f,i,n,!1,null,"5ee0ab28",null);e["default"]=B.exports;O()(B,"components",{QPage:g["a"],QCard:y["a"],QCardSection:k["a"],QIcon:q["a"],QBadge:H["a"],QScrollArea:x["a"],QList:P["a"]})},9901:function(t,e,a){},e87e:function(t,e,a){"use strict";var i=a("9901"),n=a.n(i);n.a}}]);