(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{5920:function(t,n,i){"use strict";i.r(n);var o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("q-page",{staticClass:"flex-center q-pa-md",staticStyle:{"overflow-wrap":"break-word"}},[i("span",{staticClass:"column items-center"},[t.tx?i("q-card",{staticClass:"col",staticStyle:{"max-width":"100%"},attrs:{bordered:"",flat:""}},[i("q-card-section",[i("div",{staticClass:"text-h6"},[t._v("Transaction "+t._s(t.txId))]),i("div",{staticClass:"text-subtitle"},[t._v(" Included in\n        "),t.tx.block_num?i("span",[i("router-link",{attrs:{to:t.returnBlockLink(t.tx.block_num)}},[t._v(" Block "+t._s(t.tidyNumber(t.tx.block_num)))])],1):i("span",[i("router-link",{attrs:{to:t.returnBlockLink(t.tx[0].block)}},[t._v(" Block "+t._s(t.tidyNumber(t.tx[0].block)))])],1)])]),i("q-card-section",[i("div",[i("json-viewer",{attrs:{data:t.operations}})],1)])],1):t._e()],1)])},e=[],s=(i("d25f"),i("28a5"),i("06db"),i("6b54"),i("a481"),i("c1df")),a=i.n(s),r=i("a00c"),c={name:"blockView",components:{jsonViewer:r["default"]},data:function(){return{txId:this.$route.params.txId,tx:null,blockNum:null,blockOps:null,api:null,txLookupApiNode:"https://rpc.ausbit.dev"}},computed:{operations:function(){if(null!==this.tx){var t={};return"block_num"in this.tx?(t={ref_block_num:this.tx.ref_block_num,ref_block_prefix:this.tx.ref_block_prefix,expiration:this.tx.expiration,operations:[],extensions:this.tx.extensions,signatures:this.tx.signatures,transaction_id:this.tx.transaction_id,block_num:this.tx.block_num,transaction_num:this.tx.transaction_num},this.tx.operations.forEach((function(n){t.operations.push(n)}))):(t={operations:[]},this.tx.forEach((function(n){t.operations.push(n.op)}))),t}return{}}},methods:{getTx2:function(t){var n=this;this.api=this.$hive.config.get("url"),this.$hive.api.setOptions({url:this.txLookupApiNode}),this.$hive.api.getTransactionAsync(t).then((function(t){return n.setTx(t)})).catch((function(t){return console.log(t)}))},getTx:function(t){var n=this,i={transaction_id:t};this.$hive.api.callAsync("transaction_status_api.find_transaction",i).then((function(i){i.block_num?(console.log("Tx found in block "+i.block_num),n.getBlockOps(i.block_num)):(console.log("Unable to find tx with transaction status api, attempting getTransaction api"),n.getTx2(t))}))},getTxFromBlockOps:function(t){var n=this;this.blockOps=t,this.tx=this.blockOps.filter((function(t){return t.trx_id===n.txId}))},getBlockOps:function(t){var n=this;this.$hive.api.getOpsInBlockAsync(t,!1).then((function(t){return n.getTxFromBlockOps(t)})).catch((function(t){return console.log(t)}))},setTx:function(t){this.api!==this.$hive.config.get("url")&&null!==this.api&&this.$hive.api.setOptions({url:this.api}),this.tx=t},timeDelta:function(t){var n=a.a.utc(),i=a.a.utc(t),o=i.diff(n,"minutes");return a.a.duration(o,"minutes").humanize(!0)},tidyNumber:function(t){var n=t.toString().split(".");return n[0]=n[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),n.join(".")},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},returnLink:function(t,n){return"/@"+t+"/"+n},returnBlockLink:function(t){return"/b/"+t+"#"+this.txId}},mounted:function(){this.getTx(this.$route.params.txId),document.title="Transaction "+this.$route.params.txId}},u=c,l=(i("6431"),i("2877")),p=i("9989"),h=i("f09f"),d=i("a370"),f=i("eebe"),x=i.n(f),k=Object(l["a"])(u,o,e,!1,null,null,null);n["default"]=k.exports;x()(k,"components",{QPage:p["a"],QCard:h["a"],QCardSection:d["a"]})},6431:function(t,n,i){"use strict";var o=i("e63a"),e=i.n(o);e.a},e63a:function(t,n,i){}}]);