(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{"821f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex q-pa-none flex-center"},[n("exchange")],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("q-dialog",{staticClass:"text-bold",attrs:{persistent:""},model:{value:t.showErrorDialog,callback:function(e){t.showErrorDialog=e},expression:"showErrorDialog"}},[n("q-card",{staticClass:"q-pa-sm",attrs:{flat:"",bordered:""}},[n("q-icon",{attrs:{name:"warning",color:"orange",size:"md"}}),t._v("\n        "+t._s(t.error)+"\n        "),n("q-btn",{attrs:{label:"Dismiss","q-close-dialog":""},on:{click:function(e){t.error=null}}})],1)],1),t.showTransactionDialog?t._e():n("q-card",{staticClass:"text-center",staticStyle:{"max-width":"600px"},attrs:{flat:"",bordered:""}},[n("q-card-section",{attrs:{header:""}},[n("div",{staticClass:"text-center text-title text-h5"},[t._v("Exchange "),t.currencies.length>0?n("q-badge",{attrs:{color:"primary"}},[t._v(t._s(t.currencies.length))]):t._e(),t._v(" tokens")],1),n("div",{staticClass:"text-caption"},[t._v("Use this form to swap between cryptocurrencies")])]),n("q-card-section",[n("q-list",{attrs:{separator:""}},[n("q-item",{staticClass:"q-mb-md"},[n("q-item-section",[n("q-select",{attrs:{label:"I have",options:t.optionsFrom,clearable:"","options-selected-class":"text-primary","use-input":"","input-debounce":"0",loading:t.loading.currencies,hint:t.getTokenChainHint(t.tradeFrom),"transition-show":"scale","transition-hide":"scale","option-value":function(t){return Object(t)===t&&"ticker"in t?t.ticker:null},"option-label":function(t){return Object(t)===t&&"fullName"in t?t.fullName:null},"option-disable":function(t){return!t.enabled},"emit-value":"","map-options":"","display-value":t.tradeFrom},on:{filter:t.filterFrom,input:t.updateToken},scopedSlots:t._u([t.tradeFrom?{key:"prepend",fn:function(){return[n("q-avatar",[n("q-img",{attrs:{src:t.getTokenImage(t.tradeFrom),title:t.tradeFrom}})],1)]},proxy:!0}:null,t.tradeFrom&&t.tradeTo?{key:"after",fn:function(){return[n("q-input",{staticClass:"q-pt-md",attrs:{label:"Amount",type:"number",rules:[function(e){return e>t.minAmount||"Minimum trade is "+t.minAmount+" "+t.tradeFrom},null!==t.error||t.error],loading:t.loading.minAmount,debounce:2e3,readonly:t.loading.minAmount},on:{input:function(e){return t.updateTradeFromAmount()}},model:{value:t.tradeFromAmount,callback:function(e){t.tradeFromAmount=t._n(e)},expression:"tradeFromAmount"}})]},proxy:!0}:null,{key:"option",fn:function(e){return[n("q-item",t._g(t._b({},"q-item",e.itemProps,!1),e.itemEvents),[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",{attrs:{size:"sm"}},[n("q-img",{attrs:{src:e.opt.image}})],1)],1),n("q-item-section",[n("q-item-label",[t._v(t._s(e.opt.ticker))]),n("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.opt.fullName))])],1)],1)]}}],null,!0),model:{value:t.tradeFrom,callback:function(e){t.tradeFrom=e},expression:"tradeFrom"}})],1)],1),t.tradeFromWarning?n("q-item",[t._v(t._s(t.tradeFromWarning))]):t._e(),n("q-item",{staticClass:"text-center"},[n("q-separator"),t.tradeFrom||t.tradeTo?n("q-btn",{attrs:{"no-caps":"",flat:"",icon:"swap_vert",size:"md",color:"primary",label:"Swap positions"},on:{click:function(e){return t.swapTokens()}}}):t._e(),"hive"!==t.tradeTo?n("q-btn",{attrs:{"no-caps":"",flat:"",icon:"trending_up",label:"Buy Hive",color:"green"},on:{click:function(e){t.tradeTo="hive",t.tradeFrom=null}}}):t._e(),"hive"!==t.tradeFrom?n("q-btn",{attrs:{"no-caps":"",flat:"",icon:"trending_down",label:"Sell Hive",color:"red"},on:{click:function(e){t.tradeFrom="hive",t.tradeTo=null}}}):t._e(),t.loggedInUser&&"hive"===t.tradeFrom?n("q-btn",{attrs:{"no-caps":"",flat:"",color:"orange"},on:{click:function(e){t.tradeFromAmount=t.hiveBalance,t.tradeTo&&t.tradeFrom&&t.updateTradeFromAmount()}},scopedSlots:t._u([{key:"default",fn:function(){return[n("q-avatar",{staticClass:"q-mr-sm",attrs:{size:"md"}},[n("img",{attrs:{src:t.getHiveAvatarUrl(t.loggedInUser)}})]),t._v(" "+t._s(t.hiveBalance)+" HIVE")]},proxy:!0}],null,!1,2253286656)}):t._e(),n("q-separator")],1),n("q-item",[n("q-item-section",[n("q-select",{attrs:{label:"I want",options:t.optionsTo,clearable:"","options-selected-class":"text-primary","use-input":"","input-debounce":"0",loading:t.loading.currencies,hint:t.getTokenChainHint(t.tradeTo),"transition-show":"scale","transition-hide":"scale","option-value":function(t){return Object(t)===t&&"ticker"in t?t.ticker:null},"option-label":function(t){return Object(t)===t&&"fullName"in t?t.fullName:null},"option-disable":function(t){return!t.enabled},"emit-value":"","map-options":"","display-value":t.tradeTo},on:{filter:t.filterTo,input:t.updateToken},scopedSlots:t._u([t.tradeTo?{key:"prepend",fn:function(){return[n("q-avatar",[n("q-img",{attrs:{src:t.getTokenImage(t.tradeTo),title:t.tradeTo}})],1)]},proxy:!0}:null,t.tradeFrom&&t.tradeTo?{key:"after",fn:function(){return[n("q-input",{staticClass:"q-pt-md",attrs:{label:"Amount",readonly:"",type:"number"},on:{input:function(e){return t.updateTradeToAmount()}},model:{value:t.tradeToAmount,callback:function(e){t.tradeToAmount=t._n(e)},expression:"tradeToAmount"}})]},proxy:!0}:null,{key:"option",fn:function(e){return[n("q-item",t._g(t._b({},"q-item",e.itemProps,!1),e.itemEvents),[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",{attrs:{size:"sm"}},[n("img",{attrs:{src:e.opt.image}})])],1),n("q-item-section",[n("q-item-label",[t._v(t._s(e.opt.ticker))]),n("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.opt.fullName))])],1)],1)]}}],null,!0),model:{value:t.tradeTo,callback:function(e){t.tradeTo=e},expression:"tradeTo"}})],1)],1),t.tradeToWarning?n("q-item",[t._v(t._s(t.tradeToWarning))]):t._e()],1)],1),this.for&&t.userMetaTokens!==[]?n("q-card-section",{staticClass:"q-ma-sm"},[n("div",{staticClass:"text-title text-bold"},[n("router-link",{attrs:{to:t.getUserLink(this.for)}},[n("q-avatar",{attrs:{size:"sm"}},[n("img",{attrs:{src:t.getHiveAvatarUrl(this.for)}})]),t._v(" "+t._s(this.for))],1),t._v("'s token addresses")],1),n("q-card",{attrs:{flat:""}},[n("q-list",{attrs:{dense:"",separator:""}},t._l(Object.keys(t.userMetaTokens),(function(e){return n("q-list",{key:e.index,attrs:{dense:""}},[n("q-item",[n("q-list",{attrs:{dense:"",separator:"",bordered:""}},t._l(t.userMetaTokens[e],(function(a){return n("q-item",{key:a.index,staticClass:"text-center text-weight-light",attrs:{clickable:""},on:{click:function(n){t.tradeTo=e,t.tradeToAddress=a,t.copy(a),t.updateToken()}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",{attrs:{size:"sm"}},[n("q-img",{attrs:{src:t.getTokenImage(e),title:e}})],1)],1),n("q-item-section",[t._v(t._s(a))])],1)})),1)],1)],1)})),1)],1)],1):t._e(),!t.error&&t.tradeFromAmount>=t.minAmount&&t.tradeToAmount&&t.tradeFrom&&t.tradeTo?n("q-card-section",[n("div",{staticClass:"text-center text-title text-h5"},[n("q-input",{attrs:{label:"Receiving Address",rules:[function(t){return!!t||"Receiving address is required"},function(t){return""!==t.trim()||"Receiving address is required"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-avatar",[n("img",{attrs:{src:t.getTokenImage(t.tradeTo)}})])]},proxy:!0}],null,!1,3518397393),model:{value:t.tradeToAddress,callback:function(e){t.tradeToAddress=e},expression:"tradeToAddress"}}),["xrp","xlm","eos","ignis","bnb","xmr","ardor","dct","xem","hive"].includes(t.tradeTo)&&null!==t.getTokenInfo(t.tradeTo).extraIdName?n("q-input",{attrs:{label:t.getTokenInfo(t.tradeTo).extraIdName},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-avatar",[n("img",{attrs:{src:t.getTokenImage(t.tradeTo)}})])]},proxy:!0}],null,!1,3518397393),model:{value:t.tradeToExtraId,callback:function(e){t.tradeToExtraId=e},expression:"tradeToExtraId"}}):t._e(),n("q-input",{attrs:{label:"Refund Address (optional)"},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("q-avatar",[n("img",{attrs:{src:t.getTokenImage(t.tradeFrom)}})])]},proxy:!0}],null,!1,1904799644),model:{value:t.refundAddress,callback:function(e){t.refundAddress=e},expression:"refundAddress"}})],1),t.quote?n("div",{staticClass:"text-center text-title text-h5"},[t._v("Trade confirmation")]):t._e(),t._v("\n      Swap "),n("q-badge",{staticClass:"text-bold",attrs:{color:"primary"}},[t._v(t._s(t.tidyNumber(t.tradeFromAmount)))]),n("q-avatar",{attrs:{size:"sm"}},[n("img",{attrs:{src:t.getTokenImage(t.tradeFrom)}})]),n("b",[t._v(t._s(t.tradeFrom))]),t._v("\n      for ~"),n("q-badge",{attrs:{color:"primary"}},[t._v(t._s(t.tidyNumber(t.tradeToAmount)))]),n("q-avatar",{attrs:{size:"sm"}},[n("img",{attrs:{src:t.getTokenImage(t.tradeTo)}})]),n("b",[t._v(t._s(t.tradeTo))]),n("br"),""!==t.tradeToAddress&&null!==t.tradeToAddress?n("div",[t._v("Send that "),n("q-avatar",{attrs:{size:"sm"}},[n("img",{attrs:{src:t.getTokenImage(t.tradeTo)}})]),n("b",[t._v(t._s(t.tradeTo))]),t._v(" to "),n("i",[t._v(t._s(t.tradeToAddress))])],1):t._e(),t.quote?n("q-expansion-item",{attrs:{dense:"",icon:"data_object",label:"Full quote"}},[n("json-viewer",{attrs:{data:t.quote}})],1):t._e(),n("q-separator",{attrs:{dark:""}})],1):t._e(),t.tradeFrom&&t.tradeTo?n("q-card",{staticClass:"q-pa-sm q-ma-sm",attrs:{flat:"",bordered:""}},[n("q-checkbox",{staticClass:"text-caption",model:{value:t.termsAndConditions,callback:function(e){t.termsAndConditions=e},expression:"termsAndConditions"}},[t._v("I have read and I agreed to the Changelly "),n("a",{attrs:{href:"https://changelly.com/terms-of-use",target:"_blank"}},[t._v("terms of use")]),t._v(" and "),n("a",{attrs:{href:"https://changelly.com/privacy-policy"}},[t._v("privacy policy")]),t._v("."),n("br"),t._v("By checking this box, I acknowledge and understand that my transaction may trigger AML/KYC verification according to Changelly "),n("a",{attrs:{href:"https://changelly.com/aml-kyc"}},[t._v("AML/KYC")])])],1):t._e(),n("q-card-actions",{attrs:{align:"around"}},[t.tradeFrom||t.tradeTo?n("q-btn",{attrs:{flat:"",label:"Go Back",color:"red",icon:"arrow_back"},on:{click:function(e){return t.reset()}}}):t._e(),t.tradeFrom||t.tradeTo?n("q-btn",{attrs:{flat:"",label:"Continue",color:"primary","icon-right":"arrow_forward",disable:!t.termsAndConditions||null!==t.error||null===t.tradeToAddress||""===t.tradeToAddress.trim()},on:{click:function(e){t.createTransaction(t.tradeFrom,t.tradeTo,t.tradeToAddress,t.tradeFromAmount)}}}):t._e()],1)],1),t.showTransactionDialog?n("div",[n("q-card",{attrs:{flat:"",bordered:""}},[n("q-card-section",{staticClass:"text-heading text-h5 text-center",attrs:{header:""}},[t._v("\n          "+t._s("finished"===t.transaction.status?"Exchange Complete!":"Payment Request")+"\n      ")]),["finished","sending","exchanging","confirming"].includes(t.transaction.status)?t._e():n("q-card-section",[t._v("\n          Please transfer:\n          "),n("q-input",{attrs:{readonly:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-btn",{attrs:{flat:"",icon:"content_copy"},on:{click:function(e){return t.copy(t.transaction.amountExpectedFrom)}}})]},proxy:!0},{key:"after",fn:function(){return[n("q-avatar",[n("q-img",{attrs:{src:t.getTokenImage(t.transaction.currencyFrom)}})],1),t._v(" "+t._s(t.transaction.currencyFrom))]},proxy:!0}],null,!1,3755824813),model:{value:t.transaction.amountExpectedFrom,callback:function(e){t.$set(t.transaction,"amountExpectedFrom",e)},expression:"transaction.amountExpectedFrom"}}),n("div",{staticClass:"text-center"},[n("q-icon",{attrs:{name:"info",color:"blue"}}),t._v(" "+t._s(t.getTokenChainHint(t.transaction.currencyFrom)))],1),t._v("\n          To this "+t._s(t.transaction.currencyFrom)+" address:\n          "),n("q-input",{attrs:{readonly:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-btn",{attrs:{flat:"",icon:"content_copy"},on:{click:function(e){return t.copy(t.transaction.payinAddress)}}})]},proxy:!0}],null,!1,2245376714),model:{value:t.transaction.payinAddress,callback:function(e){t.$set(t.transaction,"payinAddress",e)},expression:"transaction.payinAddress"}}),t.transaction.payinExtraId?n("div",[n("q-input",{attrs:{readonly:"",label:"Payment Address Extra ID / MEMO"},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-btn",{attrs:{flat:"",icon:"content_copy"},on:{click:function(e){return t.copy(t.transaction.payinExtraId)}}})]},proxy:!0}],null,!1,3180938795),model:{value:t.transaction.payinExtraId,callback:function(e){t.$set(t.transaction,"payinExtraId",e)},expression:"transaction.payinExtraId"}})],1):t._e()],1),n("q-separator"),t.loggedInUser&&"hive"===t.transaction.currencyFrom&&!1!==t.detectedPayment&&!["finished","sending"].includes(t.transaction.status)?n("q-card-section",{staticClass:"text-center text-bold"},[n("div",[t._v(t._s(t.loggedInUser)+"'s balance "),n("q-badge",{attrs:{color:"primary"}},[t._v(t._s(t.account.balance.split(" ")[0]))]),n("q-avatar",{attrs:{size:"sm"}},[n("q-img",{attrs:{src:"/statics/hive.svg",title:"HIVE"}})],1)],1),!["finished","sending"].includes(t.transaction.status)&&0===t.transaction.moneyReceived&&parseFloat(t.account.balance.split(" ")[0])>=t.transaction.amountExpectedFrom&&!t.disableTransferButton?n("q-btn",{attrs:{push:"",icon:"send",dense:"","no-caps":"",color:"primary"},on:{click:function(e){return t.transferNeededHive()}}},[t._v("Transfer "+t._s(t.transaction.amountExpectedFrom)+" HIVE to "+t._s(t.transaction.payinAddress)+" with memo "+t._s(t.transaction.payinExtraId))]):t._e()],1):t._e(),t.loggedInUser&&"hive"===t.tradeFrom?n("q-separator"):t._e(),n("q-card-section",[n("q-input",{attrs:{readonly:"",outlined:"",label:"Exchange Id (For support purposes)"},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-btn",{attrs:{flat:"",icon:"content_copy"},on:{click:function(e){return t.copy(t.transaction.id)}}}),n("q-btn",{attrs:{flat:"",icon:"open_in_new",title:"Open exchange status in new window"},on:{click:function(e){t.openNewWindow(t.getExchangeIdUrl(t.transaction.id))}}})]},proxy:!0}],null,!1,4152033104),model:{value:t.transaction.id,callback:function(e){t.$set(t.transaction,"id",e)},expression:"transaction.id"}}),n("q-input",{attrs:{readonly:"",outlined:"",label:"Exchange Status",color:"green"},scopedSlots:t._u(["finished"!==t.transaction.status?{key:"append",fn:function(){return[n("q-btn",{attrs:{flat:"",icon:"refresh",title:"Refresh transaction status",color:"primary"},on:{click:function(e){return t.getStatus()}}})]},proxy:!0}:{key:"append",fn:function(){return[n("q-btn",{attrs:{flat:"","no-caps":"",title:"More Confetti",color:"primary",icon:"celebration"},on:{click:function(e){return t.confetti()}}})]},proxy:!0}],null,!0),model:{value:t.transaction.status,callback:function(e){t.$set(t.transaction,"status",e)},expression:"transaction.status"}}),n("span",{staticClass:"q-ma-sm text-bold text-title text-center"},["waiting"===t.transaction.status?n("q-card",{attrs:{flat:""}},[t._v("Transaction is waiting for an incoming payment.")]):t._e(),"confirming"===t.transaction.status?n("q-card",{attrs:{flat:""}},[t._v("We have received payin and are waiting for certain amount of confirmations depending of incoming currency.")]):t._e(),"exchanging"===t.transaction.status?n("q-card",{attrs:{flat:""}},[t._v("Payment was confirmed and is being exchanged.")]):t._e(),"sending"===t.transaction.status?n("q-card",{attrs:{flat:""}},[t._v("Coins are being sent to the recipient address.")]):t._e(),"finished"===t.transaction.status?n("q-card",{attrs:{flat:""}},[t._v("Coins were successfully sent to the recipient address")]):t._e(),"failed"===t.transaction.status?n("q-card",{attrs:{flat:""}},[t._v("Transaction has failed. In most cases, the amount was less than the minimum. Please contact support and provide a transaction id. "),n("a",{attrs:{href:"https://support.changelly.com",target:"_blank"}},[t._v("support.changechangelly.com")])]):t._e(),"refunded"===t.transaction.status?n("q-card",{attrs:{flat:""}},[t._v("Exchange failed and coins were refunded to your wallet.")]):t._e(),"hold"===t.transaction.status?n("q-card",{attrs:{flat:""}},[t._v("Due to AML/KYC procedure, exchange may be delayed. Contact support "),n("a",{attrs:{href:"https://support.changelly.com",target:"_blank"}},[t._v("support.changechangelly.com")])]):t._e(),"expired"===t.transaction.status?n("q-card",{attrs:{flat:""}},[t._v("Payin for fixed-rate transaction was not sent within the indicated timeframe")]):t._e()],1),n("q-card-section",[n("q-input",{attrs:{label:"Payout Address",readonly:"",outlined:""},scopedSlots:t._u([{key:"append",fn:function(){return[t.getAddressUrl(t.transaction.currencyTo)?n("q-btn",{attrs:{dense:"",title:"Open address in block explorer",icon:"open_in_new"},on:{click:function(e){t.openNewWindow(t.getAddressUrl(t.transaction.currencyTo,t.transaction.payoutAddress))}}}):t._e(),t._v(" "+t._s(t.transaction.currencyTo)+" "),n("q-avatar",[n("q-img",{attrs:{src:t.getTokenImage(t.transaction.currencyTo),title:t.transaction.currencyTo}})],1)]},proxy:!0}],null,!1,3276688533),model:{value:t.transaction.payoutAddress,callback:function(e){t.$set(t.transaction,"payoutAddress",e)},expression:"transaction.payoutAddress"}}),t.transaction.payoutHash?n("q-input",{attrs:{label:"Finished Transaction Hash",readonly:"",outlined:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("q-btn",{attrs:{icon:"open_in_new"},on:{click:function(e){return t.openNewWindow(t.transaction.payoutHashLink)}}})]},proxy:!0}],null,!1,3460082323),model:{value:t.transaction.payoutHash,callback:function(e){t.$set(t.transaction,"payoutHash",e)},expression:"transaction.payoutHash"}}):t._e()],1)],1),n("q-card-section",[n("q-expansion-item",{attrs:{dense:"",label:"Full Transaction Metadata",icon:"data_object"}},[n("json-viewer",{attrs:{data:t.transaction}})],1)],1),n("q-card-actions",{attrs:{align:"around"}},[n("q-btn",{attrs:{flat:"","no-caps":"",label:"Close",color:"finished"===t.transaction.status?"primary":"red",icon:"logout",to:"/exchange"},on:{click:function(e){t.transaction=null}}})],1)],1)],1):t._e()],1)},s=[],i=n("4db1"),c=n.n(i),l=n("fa84"),u=n.n(l),d=n("967e"),m=n.n(d),p=(n("d25f"),n("a481"),n("6762"),n("28a5"),n("06db"),n("6b54"),n("7514"),n("cdde")),h=n("7129"),f=n("4f22"),g=n("d1f4"),v=g["ChainTypes"].operations,y=Object(g["makeBitMaskFilter"])([v.transfer]),_={name:"exchange",data:function(){return{api:"https://exchange-api.ausbit.dev",tradeFrom:this.$route.query.from||null,tradeTo:this.$route.query.to||null,tradeFromAmount:null,tradeToAmount:null,tradeToAddress:this.$route.query.address||null,refundAddress:null,tradeToExtraId:null,optionsFrom:[],optionsTo:[],currencies:[],currenciesFull:[],for:this.$route.query.for||this.loggedInUser||null,minAmount:null,quote:null,termsAndConditions:!1,loading:{minAmount:!1,quote:!1,currencies:!1,transaction:!1},transaction:null,lastStatus:null,error:null,exchangeId:this.$route.query.id||null,disableTransferButton:!1,completedTradeSound:"https://files.ausbit.dev/zoot.mp3",bitmask:y,hiveTransactions:[],detectedPayment:!1}},mixins:[f["a"]],timers:{getStatus:{time:15e3,autostart:!1,repeat:!1,immediate:!1,isSwitchTab:!0}},components:{jsonViewer:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"a00c"))}},methods:{getCurrencies:function(){var t=this;this.$axios.get(this.api+"/getCurrencies").then((function(e){t.currencies=e.data.result,t.loading.currencies=!1}))},getCurrenciesFull:function(){var t=this;this.loading.currencies=!0,this.$axios.get(this.api+"/getCurrenciesFull").then((function(e){t.currenciesFull=e.data.result.filter((function(t){return!0===t.enabled})),t.loading.currencies=!1}))},getMinAmount:function(t,e){var n=this;this.minAmount=null,this.loading.minAmount=!0,this.tradeToAmount=null,this.$axios.post(this.api+"/getMinAmount",{from:t,to:e}).then((function(t){n.minAmount=t.data.result,n.tradeFromAmount<n.minAmount&&(n.tradeFromAmount=n.minAmount),n.getExchangeAmount(n.tradeFrom,n.tradeTo,n.tradeFromAmount),n.loading.minAmount=!1}))},filterFrom:function(t,e){var n=this;e(""!==t?function(){var e=t.toLowerCase();n.optionsFrom=n.currenciesFull.filter((function(t){return t.ticker.toLowerCase().indexOf(e)>-1})).filter((function(t){return t.ticker!==n.tradeTo}))}:function(){n.optionsFrom=n.currenciesFull.filter((function(t){return t.ticker!==n.tradeTo}))})},filterTo:function(t,e){var n=this;e(""!==t?function(){var e=t.toLowerCase();n.optionsTo=n.currenciesFull.filter((function(t){return t.ticker.toLowerCase().indexOf(e)>-1})).filter((function(t){return t.ticker!==n.tradeFrom}))}:function(){n.optionsTo=n.currenciesFull.filter((function(t){return t.ticker!==n.tradeFrom}))})},reset:function(){this.tradeFrom=null,this.tradeTo=null,this.minAmount=null,this.tradeFromAmount=null,this.tradeToAmount=null,this.quote=null,this.termsAndConditions=!1},getTokenImage:function(t){return"https://web-api.changelly.com/api/coins/"+t.toLowerCase()+".png"},getExchangeAmount:function(t,e,n){var a=this;this.loading.quote=!0,this.tradeToAmount=null,this.$axios.post(this.api+"/getExchangeAmount",{from:t,to:e,amount:n}).then((function(t){t.data.error?a.error=t.data.error.message:(a.quote=t.data.result[0],a.tradeToAmount=a.quote.result),a.loading.quote=!1}))},createTransaction:function(t,e,n,a){var r=this;this.transaction=null,this.loading.transaction=!0;var o={from:t,to:e,address:n,amount:a};this.refundAddress&&(o.refundAddress=this.refundAddress,this.refundAddress=null),this.tradeToExtraId&&(o.extraId=this.tradeToExtraId,this.tradeToExtraId=null),this.$axios.post(this.api+"/createTransaction",o).then((function(t){t.data.error?(r.error=t.data.error.message,"Invalid address"===r.error&&(r.tradeToAddress=""),"Invalid currency pair"===r.error&&(r.tradeFrom=null)):(r.transaction=t.data.result,r.$router.replace("/exchange?id="+r.transaction.id),r.exchangeId=r.transaction.id,r.getStatus()),r.loading.transaction=!1}))},getStatus:function(){var t=this;this.exchangeId?(console.log("Get exchange status for id "+this.exchangeId),this.$axios.post(this.api+"/getStatus",{id:this.exchangeId}).then((function(e){e.data.error?t.error=e.data.error.message:(t.transaction.status=e.data.result,t.lastStatus!==t.transaction.status?(t.lastStatus=t.transaction.status,t.getTransaction()):(console.log("Still '"+t.transaction.status+"'"),t.$timer.start("getStatus")))}))):console.log("no exchange id")},getTransaction:function(){var t=this,e=this.exchangeId;this.exchangeId&&(console.log("get transaction "+e),this.$axios.post(this.api+"/getTransaction",{id:e}).then((function(e){e.data.error?t.error=e.data.error.message:(t.transaction=e.data.result[0],t.lastStatus!==t.transaction.status&&(t.lastStatus=t.transaction.status),"waiting"===t.transaction.status&&"hive"===t.transaction.currencyFrom&&t.loggedInUser&&!1===t.detectedPayment&&t.getHiveWalletTransactions(),"finished"===t.transaction.status?(t.confetti(),t.playSound()):["overdue","expired","error"].includes(t.transaction.status)||t.$timer.start("getStatus"))})))},updateToken:function(){this.error=null,this.tradeToAmount=null,this.tradeFrom&&this.tradeTo&&this.tradeFrom!==this.tradeTo&&(this.minAmount=null,this.getMinAmount(this.tradeFrom,this.tradeTo)),this.tradeFrom===this.tradeTo&&(this.tradeTo=null)},updateTradeFromAmount:function(){this.error=null,this.tradeFromAmount>this.minAmount&&this.getExchangeAmount(this.tradeFrom,this.tradeTo,this.tradeFromAmount)},tidyNumber:function(t){if(null!==t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}return null},swapTokens:function(){var t=this.tradeFrom;this.tradeFrom=this.tradeTo,this.tradeTo=t,this.updateToken()},copy:function(t){Object(p["a"])(t),this.$q.notify("Copied to clipboard: "+t)},getExchangeIdUrl:function(t){return"https://hive.ausbit.dev/exchange?id="+t},openNewWindow:function(t){window.open(t,"_blank")},transferNeededHive:function(){this.$store.commit("hive/addToQueue",[this.loggedInUser,"active",["transfer",{to:this.transaction.payinAddress,from:this.loggedInUser,amount:parseInt(this.transaction.amountExpectedFrom).toFixed(3)+" HIVE",memo:this.transaction.payinExtraId}]]),this.disableTransferButton=!0},getUserLink:function(t){return"/@"+t},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},getTokenInfo:function(t){return this.currenciesFull.length>0?this.currenciesFull.filter((function(e){return e.ticker===t}))[0]:null},getTokenChainHint:function(t){var e=this.getTokenInfo(t);if(void 0!==e&&null!==e){var n=e.fullName+" on "+e.blockchain+" blockchain ("+e.protocol+")";return n}return null},getAddressUrl:function(t,e){var n=this.getTokenInfo(t);return void 0!==n&&null!==n?n.addressUrl.replace("%1$s",e):null},confetti:function(){var t=3e3,e=Date.now()+t;(function t(){Object(h["a"])({particleCount:6,angle:60,spread:55,origin:{x:0}}),Object(h["a"])({particleCount:6,angle:120,spread:55,origin:{x:1}}),Date.now()<e&&requestAnimationFrame(t)})()},playSound:function(){var t=new Audio(this.completedTradeSound);t.play()},getHiveWalletTransactions:function(){var t=this;return u()(m.a.mark((function e(){return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$hive.api.callAsync("call",["database_api","get_account_history",[t.loggedInUser,-1,1e3].concat(c()(t.bitmask))]).then((function(e){0===t.hiveTransactions.length?t.hiveTransactions=e.reverse():t.hiveTransactions=t.hiveTransactions.concat(e.reverse());var n=t.hiveTransactions.find((function(e){return"transfer"===e[1].op[0]&&e[1].op[1].to===t.transaction.payinAddress&&e[1].op[1].memo===t.transaction.payinExtraId}));void 0!==n&&n.length>0?(t.detectedPayment=!0,console.log("hive payment found")):(t.detectedPayment=!1,console.log("hive payment not found"))})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()}},computed:{loggedInUser:function(){return this.$store.state.hive.user.username},showTransactionDialog:function(){return null!==this.transaction},showErrorDialog:function(){return null!==this.error},account:{cache:!1,get:function(){return this.loggedInUser?this.$store.state.hive.accounts[this.loggedInUser]:null}},userMetaTokens:function(){if(this.for){var t=this.$store.state.hive.accounts[this.for];if(void 0!==t&&t.posting_json_metadata){var e=JSON.parse(t.posting_json_metadata);return e.profile&&e.profile.tokens?(e.profile.tokens.hive=[this.for],e.profile.tokens):{hive:[this.for]}}return{hive:[this.for]}}return{}},hiveBalance:function(){return this.loggedInUser&&void 0!==this.account?parseFloat(this.account.balance.split(" ")[0]):null},tradeFromWarning:function(){var t=this.getTokenInfo(this.tradeFrom);return this.tradeFrom&&this.currenciesFull&&this.ti&&t.notifications&&t.notifications.payin?t.notifications.payin:null},tradeToWarning:function(){var t=this.getTokenInfo(this.tradeTo);return this.tradeTo&&this.currenciesFull&&this.ti&&t.notifications&&t.notifications.payout?t.notifications.payout:null}},watch:{loggedInUser:function(){void 0===this.account&&this.loggedInUser&&this.$store.dispatch("hive/getAccount",this.loggedInUser)}},mounted:function(){this.getCurrenciesFull(),this.exchangeId&&this.getTransaction(),this.tradeFrom&&this.tradeTo&&this.updateToken(),void 0===this.account&&this.loggedInUser&&this.$store.dispatch("hive/getAccount",this.loggedInUser),this.for&&this.$store.dispatch("hive/getAccount",this.for)}},q=_,T=n("2877"),b=n("24e8"),x=n("f09f"),k=n("0016"),A=n("9c40"),F=n("a370"),I=n("58a8"),w=n("1c1c"),C=n("66e5"),E=n("4074"),S=n("ddd8"),$=n("cb32"),U=n("068f"),H=n("27f9"),Q=n("0170"),j=n("eb85"),N=n("3b73"),D=n("8f8e"),O=n("4b7e"),P=n("eebe"),M=n.n(P),B=Object(T["a"])(q,o,s,!1,null,null,null),L=B.exports;M()(B,"components",{QDialog:b["a"],QCard:x["a"],QIcon:k["a"],QBtn:A["a"],QCardSection:F["a"],QBadge:I["a"],QList:w["a"],QItem:C["a"],QItemSection:E["a"],QSelect:S["a"],QAvatar:$["a"],QImg:U["a"],QInput:H["a"],QItemLabel:Q["a"],QSeparator:j["a"],QExpansionItem:N["a"],QCheckbox:D["a"],QCardActions:O["a"]});var W={name:"exchangePage",components:{exchange:L},data:function(){return{fromDefault:this.$route.query.fromDefault,toDefault:this.$route.query.toDefault,from:this.$route.query.from,memo:this.$route.query.memo,to:this.$route.query.to,defaultAmount:this.$route.query.defaultAmount,address:this.$route.query.address}},watch:{},computed:{},methods:{},mounted:function(){document.title="Exchange tokens"}},z=W,R=n("9989"),V=Object(T["a"])(z,a,r,!1,null,null,null);e["default"]=V.exports;M()(V,"components",{QPage:R["a"]})}}]);