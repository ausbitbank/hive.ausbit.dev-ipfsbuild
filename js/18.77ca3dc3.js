(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{5920:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("q-page",{staticClass:"flex-center q-pa-md",staticStyle:{"overflow-wrap":"break-word"}},[i("span",{staticClass:"column items-center"},[t.tx?i("q-card",{staticClass:"col",staticStyle:{"max-width":"100%"},attrs:{bordered:"",flat:""}},[i("q-card-section",[i("div",{staticClass:"text-h6"},[t._v("Transaction "+t._s(t.txId))]),i("div",{staticClass:"text-subtitle"},[t._v(" Included in\n        "),t.tx.block?i("span",[i("router-link",{attrs:{to:t.returnBlockLink(t.tx.block)}},[t._v(" Block "+t._s(t.tidyNumber(t.tx.block)))])],1):t._e(),t.tx.block_num?i("span",[i("router-link",{attrs:{to:t.returnBlockLink(t.tx.block_num)}},[t._v(" Block "+t._s(t.tidyNumber(t.tx.block_num)))])],1):t._e()])]),i("q-card-section",[i("div",[i("json-viewer",{attrs:{data:t.tx}})],1)])],1):t._e()],1)])},a=[],o=(i("a481"),i("6b54"),i("06db"),i("28a5"),i("c1df")),s=i.n(o),c=i("a00c"),r={name:"blockView",components:{jsonViewer:c["a"]},data:function(){return{txId:this.$route.params.txId,tx:null,blockNum:null,blockOps:null,api:null,txLookupApiNode:"https://api.hive.blog"}},computed:{},methods:{getTx2:function(t){var n=this;this.api=this.$hive.config.get("url"),this.$hive.api.setOptions({url:"https://api.hive.blog"}),this.$hive.api.getTransactionAsync(t).then((function(t){return n.setTx(t)})).catch((function(t){return console.log(t)}))},getTx:function(t){var n=this,i={transaction_id:t};this.$hive.api.callAsync("transaction_status_api.find_transaction",i).then((function(i){i.block_num?(console.log("Tx found in block "+i.block_num),n.getBlockOps(i.block_num)):(console.log("Unable to find tx with transaction status api, attempting getTransaction api"),n.getTx2(t))}))},getTxFromBlockOps:function(t){var n=this;this.blockOps=t,this.tx=this.blockOps.filter((function(t){return t.trx_id===n.txId}))[0]},getBlockOps:function(t){var n=this;this.$hive.api.getOpsInBlockAsync(t,!1).then((function(t){return n.getTxFromBlockOps(t)})).catch((function(t){return console.log(t)}))},setTx:function(t){this.api!==this.$hive.config.get("url")&&null!==this.api&&this.$hive.api.setOptions({url:this.api}),this.tx=t},timeDelta:function(t){var n=s.a.utc(),i=s.a.utc(t),e=i.diff(n,"minutes");return s.a.duration(e,"minutes").humanize(!0)},tidyNumber:function(t){var n=t.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),n.join(".")},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},returnLink:function(t,n){return"/@"+t+"/"+n},returnBlockLink:function(t){return"/b/"+t+"#"+this.txId}},mounted:function(){this.getTx(this.$route.params.txId),document.title="Transaction "+this.$route.params.txId}},u=r,l=(i("6431"),i("2877")),p=i("9989"),h=i("f09f"),d=i("a370"),f=i("eebe"),k=i.n(f),x=Object(l["a"])(u,e,a,!1,null,null,null);n["default"]=x.exports;k()(x,"components",{QPage:p["a"],QCard:h["a"],QCardSection:d["a"]})},6431:function(t,n,i){"use strict";var e=i("e63a"),a=i.n(e);a.a},e63a:function(t,n,i){}}]);