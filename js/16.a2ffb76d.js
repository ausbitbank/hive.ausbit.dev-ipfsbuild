(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"18a4":function(e,t,a){"use strict";var i=a("7c25"),r=a.n(i);r.a},"42df":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex q-pa-md flex-center"},[void 0!==e.globalProps&&null!==e.globalProps?a("q-card",{staticClass:"text-center q-pa-sm q-ma-sm",attrs:{bordered:""}},[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"img:statics/hbd.svg",title:"HBD",size:"lg"}})],1),a("q-item-section",{staticClass:"text-h4"},[e._v("\n          Hive Backed Dollars\n        ")])],1),e._v('\n      Hive Backed Dollars are a stablecoin on the Hive network. They are "backed" by the networks ability to convert them into $1 USD worth of Hive.'),a("br"),e._v("\n      There are constraints on HBD creation within the blockchain rules to help keep the Hive economy healthy."),a("br"),e._v("\n      This page helps track relevant statistics about HBD\n    ")],1),a("q-separator"),a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("HBD Marketcap cannot be more then 10% total HIVE marketcap")]),a("div",{staticClass:"text-subtitle2"},[e._v("(The Debt Limit)")]),a("div",[e._v("HBD Marketcap = $"+e._s(e.tidyNumber(e.hbdCap)))]),a("div",[e._v("Hive Marketcap = $"+e._s(e.tidyNumber(e.hiveCap)))]),a("div",[a("q-linear-progress",{attrs:{stripe:"",size:"10px",value:e.percentCap/10,color:e.percentColor}})],1),a("div",[e._v("HBD Marketcap is currently "),a("span",{staticClass:"text-bold"},[e._v(e._s(e.percentCap))]),e._v(" % of Hive Marketcap")]),null!==e.medianPrice?a("div",[e._v("HIVE median price must stay above "),a("span",{staticClass:"text-bold"},[e._v("$"+e._s(e.haircutPrice))]),e._v(" to avoid haircut (currently $"+e._s(e.medianPrice.base.split(" ")[0]/parseFloat(e.medianPrice.quote.split(" ")[0]))+")")]):e._e()]),a("q-separator"),e.hbdApr>0?a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"text-h6"},[e._v("Held HBD now earn interest")]),a("div",{staticClass:"text-subtitle2"},[e._v("(applies to HBD unmoved for 1 month)")]),a("div",[e._v("The current interest rate is "),a("q-badge",{attrs:{color:e.hbdAprColor}},[e._v(e._s(e.hbdApr)+" %")]),e._v(", as determined by "),a("router-link",{attrs:{to:"/witnesses"}},[e._v("consensus witnesses")])],1),a("div",{staticClass:"text-center"},[a("q-btn",{attrs:{dense:"",outline:"",glossy:"",type:"a",to:"/@ats-david/hive-dollar-interest-distributions-begin-on-the-hive-blockchain",label:"More info",icon:"info",color:"primary"}})],1)]):e._e(),a("q-separator"),e.percentCap>=9&&e.percentCap<10&&1e4!==e.globalProps.hbd_print_rate?a("q-card-section",[a("div",{staticClass:"text-bold"},[a("q-icon",{attrs:{name:"warning",color:"orange"}}),e._v("Print Rate slowed to "+e._s(e.globalProps.hbd_print_rate/100)+" %")],1)]):e._e(),e.percentCap<10?a("q-card-section",[a("div",{staticClass:"text-bold"},[a("q-icon",{attrs:{name:"info",color:"primary"}}),e._v("Normal Conditions Apply:")],1),a("div",{staticClass:"text-subtitle"},[e._v("Redeem each HBD for $1 of Hive at 3.5 day avg market price ($"+e._s(e.medianPrice.base.split(" ")[0]/parseFloat(e.medianPrice.quote.split(" ")[0]))+")")])]):e._e(),e.percentCap>10&&null!==e.medianPrice?a("q-card-section",[a("div",{staticClass:"text-bold"},[a("q-icon",{attrs:{name:"warning",color:"red"}}),e._v("Haircut Conditions Apply:")],1),a("div",[e._v("Formula for redemption price during a haircut :")]),a("div",[a("code",[e._v("(TOTAL ISSUED HIVE x INTERNAL MARKET PRICE) /  (10 x TOTAL ISSUED HBD)")])]),a("div",[a("code",[e._v("("+e._s(parseFloat(e.globalProps.current_supply.split(" ")[0]))+" * "+e._s(parseFloat(e.medianPrice.base.split(" ")[0])/parseFloat(e.medianPrice.quote.split(" ")[0]))+") / (10 x "+e._s(e.globalProps.current_hbd_supply)+")")])]),a("div",[e._v("Redemption price during haircut : "+e._s(parseFloat(e.globalProps.current_supply.split(" ")[0])*parseFloat(e.medianPrice.base.split(" ")[0])/parseFloat(e.medianPrice.quote.split(" ")[0])/(10*parseFloat(e.globalProps.current_hbd_supply.split(" ")[0]))))])]):e._e()],1):e._e(),a("coingecko",{attrs:{coins:["hive_dollar"]}})],1)},r=[],s=(a("a481"),a("6b54"),a("06db"),a("28a5"),a("1c16")),n=a("da6c"),o={name:"hbd",data:function(){return{medianPrice:null,daoHbdBalance:0}},components:{coingecko:n["a"]},computed:{globalProps:{get:function(){return this.$store.state.hive.globalProps}},percentColor:function(){return this.percentCap>=9?"red":this.percentCap>=8?"orange":"green"},hbdAprColor:function(){return 0===this.hbdApr?"red":1===this.hbdApr?"orange":"green"},hbdApr:function(){return void 0!==this.globalProps?this.globalProps.hbd_interest_rate/100:null},hiveCap:function(){return void 0!==this.globalProps&&null!==this.medianPrice?parseFloat(parseFloat(this.globalProps.current_supply.split(" ")[0])*parseFloat(this.medianPrice.base.split(" ")[0]).toFixed(3)/parseFloat(this.medianPrice.quote.split(" ")[0])).toFixed(3):null},hbdCap:function(){return void 0!==this.globalProps.current_hbd_supply?(parseFloat(this.globalProps.current_hbd_supply.split(" ")[0])-parseFloat(this.daoHbdBalance)).toFixed(3):null},percentCap:function(){return parseFloat(this.hbdCap/this.hiveCap*100).toFixed(3)},haircutPrice:function(){return parseFloat(10*this.hbdCap/parseFloat(this.globalProps.current_supply.split(" ")[0])).toFixed(3)}},methods:{tidyNumber:function(e){if(null==e)return null;var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t.join(".")},getMedianPrice:function(){var e=this;this.$hive.api.getCurrentMedianHistoryPriceAsync().then((function(t){e.medianPrice=t})).catch((function(){console.log("Failed to get median price - retrying"),Object(s["a"])(e.getMedianPrice(),50)}))},getDaoBalance:function(){var e=this;this.$hive.api.getAccountsAsync(["hive.fund"]).then((function(t){e.daoHbdBalance=t[0].hbd_balance.split(" ")[0]})).catch((function(){return console.log("Failed to load @hive.fund profile")}))}},mounted:function(){document.title="Hive Dollar Monitor",this.getDaoBalance(),this.getMedianPrice()},created:function(){this.$store.dispatch("hive/getGlobalProps")}},l=o,c=(a("18a4"),a("2877")),p=a("9989"),d=a("f09f"),u=a("a370"),h=a("66e5"),v=a("4074"),b=a("0016"),_=a("eb85"),m=a("6b1d"),g=a("58a8"),P=a("9c40"),f=a("eebe"),C=a.n(f),y=Object(c["a"])(l,i,r,!1,null,"7a9e178e",null);t["default"]=y.exports;C()(y,"components",{QPage:p["a"],QCard:d["a"],QCardSection:u["a"],QItem:h["a"],QItemSection:v["a"],QIcon:b["a"],QSeparator:_["a"],QLinearProgress:m["a"],QBadge:g["a"],QBtn:P["a"]})},"7c25":function(e,t,a){}}]);