(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{5920:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{staticClass:"flex-center q-pa-md",staticStyle:{"overflow-wrap":"break-word"}},[e("span",{staticClass:"column items-center"},[t.tx?e("q-card",{staticClass:"col",staticStyle:{"max-width":"100%"},attrs:{bordered:"",flat:""}},[e("q-card-section",[e("div",{staticClass:"text-h6"},[t._v("Transaction "+t._s(t.txId))]),e("div",{staticClass:"text-subtitle"},[t._v(" Included in\n        "),e("span",[e("router-link",{attrs:{to:t.returnBlockLink(t.tx.block)}},[t._v(" Block "+t._s(t.tidyNumber(t.tx.block)))])],1)])]),e("q-card-section",[e("div",[e("json-viewer",{attrs:{data:t.tx}})],1)])],1):t._e()],1)])},i=[],s=(e("a481"),e("6b54"),e("06db"),e("28a5"),e("c1df")),o=e.n(s),c=e("a00c"),r={name:"blockView",components:{jsonViewer:c["a"]},data:function(){return{txId:this.$route.params.txId,tx:null,blockNum:null,blockOps:null}},computed:{},methods:{getTx:function(t){var n=this,e={transaction_id:t};this.$hive.api.callAsync("transaction_status_api.find_transaction",e).then((function(t){console.log("Tx found in block "+t.block_num),n.getBlockOps(t.block_num)}))},getTxFromBlockOps:function(t){var n=this;this.blockOps=t,this.tx=this.blockOps.filter((function(t){return t.trx_id===n.txId}))[0]},getBlockOps:function(t){var n=this;this.$hive.api.getOpsInBlockAsync(t,!1).then((function(t){return n.getTxFromBlockOps(t)})).catch((function(t){return console.log(t)}))},setTx:function(t){this.tx=t},timeDelta:function(t){var n=o.a.utc(),e=o.a.utc(t),a=e.diff(n,"minutes");return o.a.duration(a,"minutes").humanize(!0)},tidyNumber:function(t){var n=t.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),n.join(".")},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},returnLink:function(t,n){return"/@"+t+"/"+n},returnBlockLink:function(t){return"/b/"+t+"#"+this.txId}},mounted:function(){this.getTx(this.$route.params.txId),document.title="Transaction "+this.$route.params.txId}},u=r,l=(e("6431"),e("2877")),d=e("9989"),f=e("f09f"),p=e("a370"),h=e("eebe"),m=e.n(h),x=Object(l["a"])(u,a,i,!1,null,null,null);n["default"]=x.exports;m()(x,"components",{QPage:d["a"],QCard:f["a"],QCardSection:p["a"]})},6431:function(t,n,e){"use strict";var a=e("e63a"),i=e.n(a);i.a},e63a:function(t,n,e){}}]);