(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[35],{"8f7f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return void 0!==this.$store.state.hive.accounts[this.username]?a("q-card",{staticStyle:{"min-width":"100px","max-width":"95%"},attrs:{flat:"",bordered:""}},[a("q-card-section",{staticClass:"text-h5 text-center text-bold",attrs:{header:""}},[t._v("\n    Stake "+t._s(t.tokenName)+"\n  ")]),a("q-card-section",[a("div",[a("q-input",{attrs:{label:"To"},model:{value:t.toAccount,callback:function(e){t.toAccount=e},expression:"toAccount"}})],1),a("div",[a("q-input",{attrs:{label:"Amount"},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),t.balance?a("div",{staticClass:"text-center text-caption"},[t._v("Available: "),a("span",{staticClass:"cursor-pointer text-bold text-primary",on:{click:function(e){t.amount=parseFloat(t.balance)}}},[t._v(t._s(t.balance))]),t._v(" "+t._s(t.tokenName))]):t.availableBalance?a("div",{staticClass:"text-center text-caption"},[t._v("Available: "),a("span",{staticClass:"cursor-pointer text-primary text-bold",on:{click:function(e){t.amount=parseFloat(t.availableBalance)}}},[t._v(t._s(t.availableBalance))]),t._v(" "+t._s(t.tokenName))]):t._e(),a("div",{staticClass:"text-center q-ma-md"},[""!==t.log?a("div",[t.err?a("q-icon",{attrs:{name:"error",color:"red"}}):t._e(),t._v(t._s(this.log))],1):t._e(),t.sent?t._e():a("q-btn",{attrs:{flat:"",label:"Stake",icon:"account_balance",color:"primary"},on:{click:function(e){return t.stake()}}})],1)])],1):t._e()},i=[],s=(a("c5f6"),a("28a5"),{name:"stakingDialog",data:function(){return{toAccount:this.username,amount:0,memo:"",err:!1,log:"",sent:!1}},props:{tokenName:{type:String,required:!0},network:{type:String,required:!1,default:"hive"},balance:{type:Number,required:!1,default:null},username:{type:String,required:!0},precision:{type:Number,required:!1,default:3},to:{type:String,required:!1,default:""}},components:{},computed:{availableBalance:function(){return"hive"===this.network&&"HIVE"===this.tokenName?this.$store.state.hive.accounts[this.username].balance.split(" ")[0]:"hive"===this.network&&"HBD"===this.tokenName?this.$store.state.hive.accounts[this.username].hbd_balance.split(" ")[0]:null}},methods:{setUsername:function(t){this.toAccount=t},stake:function(){"hive"===this.network?this.stakeHive():"hiveEngine"===this.network&&this.stakeHiveEngine()},stakeHive:function(){this.$store.commit("hive/addToQueue",[this.username,"active",["transfer_to_vesting",{to:this.toAccount,from:this.username,amount:parseFloat(this.amount).toFixed(this.precision)+" "+this.tokenName}]])},stakeHiveEngine:function(){var t='{ "contractName": "tokens", "contractAction": "stake", "contractPayload": { "symbol": "'+this.tokenName+'", "to": "'+this.toAccount+'", "quantity": "'+this.amount+'" } }',e={required_auths:[this.username],required_posting_auths:[],id:"ssc-mainnet-hive",json:t};this.$store.commit("hive/addToQueue",[this.username,"active",["custom_json",e]])}},mounted:function(){void 0===this.$store.state.hive.accounts[this.username]&&this.$store.dispatch("hive/getAccount",this.username)}}),o=s,r=a("2877"),c=a("f09f"),u=a("a370"),l=a("27f9"),m=a("0016"),h=a("9c40"),d=a("eebe"),v=a.n(d),p=Object(r["a"])(o,n,i,!1,null,null,null);e["default"]=p.exports;v()(p,"components",{QCard:c["a"],QCardSection:u["a"],QInput:l["a"],QIcon:m["a"],QBtn:h["a"]})}}]);