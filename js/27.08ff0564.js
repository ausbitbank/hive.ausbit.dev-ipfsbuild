(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{b7e4:function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.conversions.length>0||e.collateralized_conversions.length>0?t("q-expansion-item",{attrs:{dense:"","dense-toggle":"","expand-separator":"","header-class":"text-primary",icon:"transform",label:e.headingLabel}},[t("q-list",{attrs:{dense:""}},e._l(e.conversions,(function(n){return t("q-item",{key:n.id,attrs:{label:"Conversions"}},[t("q-item-section",[e._v("\n      "+e._s(n.amount)+" to be converted to HIVE "+e._s(e.timeDelta(n.conversion_date))+"\n    ")])],1)})),1),t("q-list",{attrs:{dense:""}},e._l(e.collateralized_conversions,(function(n){return t("q-item",{key:n.id,attrs:{label:"Conversions"}},[t("q-item-section",[e._v("\n      "+e._s(n.converted_amount)+" converted already, the rest of the "+e._s(n.collateral_amount)+" collateral will be converted to HBD "+e._s(e.timeDelta(n.conversion_date))+"\n    ")])],1)})),1)],1):e._e()},o=[],r=t("c1df"),i=t.n(r),a={name:"convertRequests",props:["username"],data:function(){return{conversions:[],collateralized_conversions:[],error:null}},components:{},computed:{globalProps:function(){return this.$store.state.hive.globalProps},loggedInUser:function(){return this.$store.state.hive.user.username},account:function(){return this.$store.state.hive.accounts[this.username]},headingLabel:function(){return this.conversions.length+this.collateralized_conversions.length+" pending conversions requests"}},methods:{getConversions:function(){var e=this;this.$hive.api.callAsync("condenser_api.get_collateralized_conversion_requests",[this.username]).then((function(n){e.collateralized_conversions=n})).error((function(n){e.error=n.cause.data})),this.$hive.api.getConversionRequestsAsync(this.username).then((function(n){e.conversions=n})).error((function(n){e.error=n.cause.data}))},timeDelta:function(e){var n=i.a.utc(),t=i.a.utc(e),s=t.diff(n,"minutes");return i.a.duration(s,"minutes").humanize(!0)}},mounted:function(){this.getConversions()}},c=a,l=t("2877"),u=t("3b73"),d=t("1c1c"),v=t("66e5"),h=t("4074"),m=t("eebe"),_=t.n(m),f=Object(l["a"])(c,s,o,!1,null,null,null);n["default"]=f.exports;_()(f,"components",{QExpansionItem:u["a"],QList:d["a"],QItem:v["a"],QItemSection:h["a"]})}}]);