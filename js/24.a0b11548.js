(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"1db6":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex q-pa-md flex"},[s("div",{staticClass:"column",staticStyle:{"margin-left":"auto","margin-right":"auto"}},[s("q-card",{staticClass:"q-pa-md q-ma-md"},[t.loggedInUser?t._e():s("q-card-section",[t._v("\n        Login (top right) to update witness properties\n      ")]),t.loggedInUser&&!t.witness?s("q-card-section",[t._v("\n        The currently logged in user ("+t._s(t.loggedInUser)+") is not a witness."),s("br"),t._v("\n        Login to a witness account to update or "),s("br"),s("q-btn",{attrs:{color:"primary",icon:"refresh",label:"Click to refresh witness properties"},on:{click:function(e){t.getAccount(t.loggedInUser),t.getWitness(t.loggedInUser)}}})],1):t._e(),t.loggedInUser&&t.witness?s("q-card-section",[s("div",{staticClass:"text-center text-title text-h6"},[t._v("Update Witness Properties for "+t._s(t.loggedInUser))]),s("q-list",{attrs:{dense:""}},[t._l(["account_creation_fee","maximum_block_size","hbd_interest_rate","account_subsidy_budget","account_subsidy_decay"],(function(e){return s("q-item",{key:e.index},[s("q-item-section",{staticClass:"text-bold",attrs:{side:""}},[t._v(t._s(e))]),s("q-item-section",{staticClass:"text-right wrap"},[s("q-input",{attrs:{outlined:""},model:{value:t.witness.props[e],callback:function(s){t.$set(t.witness.props,e,s)},expression:"witness.props[prop]"}})],1)],1)})),t._l(["signing_key","url"],(function(e){return s("q-item",{key:e.index},[s("q-item-section",{staticClass:"text-bold",attrs:{side:""}},[t._v(t._s(e))]),s("q-item-section",{staticClass:"text-right wrap"},[s("q-input",{attrs:{outlined:""},model:{value:t.witness[e],callback:function(s){t.$set(t.witness,e,s)},expression:"witness[prop]"}})],1)],1)}))],2),s("div",{staticClass:"text-center q-ma-md"},[s("q-btn",{attrs:{icon:"refresh",label:"refresh witness properties",color:"primary"}})],1),s("q-separator"),s("div",[s("div",{staticClass:"text-h6 text-center"},[t._v("Update properties with cli_wallet:")]),s("p",[t._v("You can update your witness properties using cli_wallet with the following command")]),s("q-input",{attrs:{readonly:"",outlined:"",autogrow:"",type:"text"},model:{value:t.cliWalletLine,callback:function(e){t.cliWalletLine=e},expression:"cliWalletLine"}}),s("div",{staticClass:"text-center q-ma-md"},[s("q-btn",{staticClass:"hvr",attrs:{dense:"",label:"Copy cli_wallet command to clipboard",icon:"content_copy",color:"blue-grey",glossy:""},on:{click:function(e){return t.copy(t.cliWalletLine)}}})],1)],1),s("q-separator"),s("div",[s("div",{staticClass:"text-h6 text-center"},[t._v("Broadcast update with this site:")]),s("p",[t._v("You'll need your active key to send this transaction. Be sure you have the right settings below - especially your signing key")]),s("jsonViewer",{attrs:{data:t.witnessUpdateJson}}),s("div",{staticClass:"text-center q-ma-md"},[s("q-btn",{attrs:{label:"Update witness properties",color:"red",icon:"dangerous"},on:{click:function(e){return t.witnessUpdate()}}})],1)],1)],1):t._e()],1)],1),s("witnesses")],1)},n=[],o=s("2a91"),a=s("cdde"),c=s("a00c"),r={name:"witness",components:{witnesses:o["a"],jsonViewer:c["a"]},data:function(){return{witness:null}},computed:{loggedInUser:{get:function(){return this.$store.state.hive.user.username}},account:{cache:!1,get:function(){return this.loggedInUser?this.$store.state.hive.accounts[this.loggedInUser]:null}},cliWalletLine:{get:function(){var t='update_witness "'+this.loggedInUser+'" "'+this.witness.url+'" "'+this.witness.signing_key+'" {"account_creation_fee": "'+this.witness.props.account_creation_fee+'","maximum_block_size":'+this.witness.props.maximum_block_size+', "hbd_interest_rate":'+this.witness.props.hbd_interest_rate+',"account_subsidy_budget":'+this.witness.props.account_subsidy_budget+',"account_subsidy_decay":'+this.witness.props.account_subsidy_decay+"} true";return t}},witnessUpdateJson:{get:function(){var t={owner:this.loggedInUser,url:this.witness.url,block_signing_key:this.witness.signing_key,props:{account_creation_fee:this.witness.props.account_creation_fee,maximum_block_size:this.witness.props.maximum_block_size,hbd_interest_rate:this.witness.props.hbd_interest_rate,account_subsidy_budget:this.witness.props.account_subsidy_budget,account_subsidy_decay:this.witness.props.account_subsidy_decay},fee:"0.000 HIVE"};return t}}},methods:{getAccount:function(t){void 0===this.$store.state.hive.accounts[t]&&this.$store.dispatch("hive/getAccount",this.username)},getWitness:function(t){var e=this;this.$hive.api.getWitnessByAccountAsync(t).then((function(t){e.witness=t})).catch((function(){return console.log("Failed to load witness data")}))},copy:function(t){Object(a["a"])(t),this.$q.notify("Copied to clipboard: "+t)},witnessUpdate:function(){this.$store.commit("hive/addToQueue",[this.loggedInUser,"active",["witness_update",this.witnessUpdateJson]])}},mounted:function(){document.title="Witness Tools",this.loggedInUser&&(this.getAccount(this.loggedInUser),this.getWitness(this.loggedInUser))}},l=r,u=s("2877"),d=s("9989"),p=s("f09f"),_=s("a370"),g=s("9c40"),h=s("1c1c"),w=s("66e5"),m=s("4074"),b=s("27f9"),f=s("eb85"),y=s("eebe"),v=s.n(y),q=Object(u["a"])(l,i,n,!1,null,null,null);e["default"]=q.exports;v()(q,"components",{QPage:d["a"],QCard:p["a"],QCardSection:_["a"],QBtn:g["a"],QList:h["a"],QItem:w["a"],QItemSection:m["a"],QInput:b["a"],QSeparator:f["a"]})}}]);