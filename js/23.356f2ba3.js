(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{1899:function(t,n,e){},7305:function(t,n,e){"use strict";var i=e("1899"),r=e.n(i);r.a},cb4d:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("q-page",{staticClass:"flex q-pa-md flex-center"},[e("q-card",{staticClass:"q-ma-md",attrs:{flat:"",bordered:""}},[e("q-card-section",{staticClass:"text-h6"},[t._v("\n      Twitter Giveaway Tools\n    ")]),e("q-card-section",[t._v("\n      Entries (usernames)\n      "),e("form",{on:{submit:function(n){return n.preventDefault(),t.submitEntrant(n)}}},[e("div",[e("q-input",{ref:"newEntry",attrs:{label:"username",dense:""},model:{value:t.entrant,callback:function(n){t.entrant=n},expression:"entrant"}}),e("q-btn",{attrs:{dense:"",icon:"add",color:"primary",type:"submit",size:"sm",rounded:""},on:{click:function(n){return t.submitEntrant()}}})],1)])])],1),e("q-card",{staticClass:"q-ma-md",attrs:{flat:"",bordered:""}},[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"text-bold"},[t._v(t._s(t.entries.length)+" usernames submitted")]),t._l(t.entries,(function(n){return e("div",{key:n.index},[t._v("\n        "+t._s(n)+" "),e("q-btn",{attrs:{dense:"",icon:"remove",color:"red",size:"sm",rounded:""},on:{click:function(e){t.entries=t.entries.filter((function(t){return t!==n}))}}})],1)})),e("div",[t.entries.length>0?e("q-btn",{attrs:{dense:"",icon:"person_search",label:"validate entries",color:"primary"},on:{click:function(n){return t.validateEntries()}}}):t._e(),t.entries.length>0?e("q-btn",{attrs:{dense:"",icon:"clear",color:"red",label:"Clear All"},on:{click:function(n){t.entries=[],t.entry="",t.validEntries=[]}}}):t._e()],1)],2)],1),this.loading?e("q-spinner-grid",{attrs:{size:"2em",color:"primary"}}):t._e(),e("q-card",{staticClass:"q-ma-md",attrs:{flat:"",bordered:""}},[t.validEntries.length>0?e("q-card-section",[e("div",[t._v(" "+t._s(t.validEntries.length)+" valid usernames")]),t._l(t.validEntries,(function(n){return e("div",{key:n.index},[e("router-link",{attrs:{to:t.accountLink(n.name)}},[e("q-avatar",[e("q-img",{attrs:{src:t.GetHiveAvatarUrl(n.name)}})],1),t._v(" "+t._s(n.name))],1),t._v(" | "+t._s(t.timeDelta(n.created))+" |  "+t._s(n.balance)+" | "+t._s(n.hbd_balance)+" | "+t._s(t.vestToHive(n.vesting_shares.split(" ")[0]))+" HP\n      ")],1)})),e("q-btn",{attrs:{label:"Pick Random Winner",color:"green"},on:{click:function(n){t.winner=t.randomItem(t.validEntries).name}}}),t.winner?e("div",{staticClass:"text-h6"},[t._v("\n        Random Winner : "+t._s(t.winner)+"\n        "),e("div")]):t._e()],2):t._e()],1)],1)},r=[],a=(e("06db"),e("cadf"),e("ac6a"),e("d25f"),e("c1df")),s=e.n(a),o=e("1c16"),l={name:"twitterGiveaway",data:function(){return{entrant:"",entries:[],validEntries:[],winner:null,globalProps:null,loading:!1}},components:{},watch:{},props:{},computed:{},methods:{submitEntrant:function(){var t=this;this.entries=this.entries.filter((function(n){return n!==t.entrant})),this.entries.push(this.entrant),this.entries=this.entries.filter((function(t){return""!==t})),this.entrant="",this.$refs.newEntry.focus()},timeDelta:function(t){var n=s.a.utc(),e=s.a.utc(t),i=e.diff(n,"minutes");return s.a.duration(i,"minutes").humanize(!0)},validateEntries:function(){var t=this;this.loading=!0,this.$hive.api.getAccountsAsync(this.entries).then((function(n){t.loading=!1,t.validEntries=n}))},accountLink:function(t){return"/@"+t},randomItem:function(t){return t[Math.floor(Math.random()*t.length)]},getGlobalProps:function(){var t=this;this.$hive.api.getDynamicGlobalPropertiesAsync().then((function(n){t.globalProps=n})).catch((function(){console.log("Failed to load global properties .. Retrying"),Object(o["a"])(t.getGlobalProps(),50)}))},vestToHive:function(t){return null===this.globalProps?t:this.$hive.formatter.vestToHive(t,this.globalProps.total_vesting_shares,this.globalProps.total_vesting_fund_hive).toFixed(3)},GetHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"}},mounted:function(){this.getGlobalProps(),this.$refs.newEntry.focus()}},c=l,d=(e("7305"),e("2877")),u=e("9989"),f=e("f09f"),v=e("a370"),m=e("27f9"),h=e("9c40"),b=e("981c"),p=e("cb32"),g=e("068f"),_=e("eebe"),q=e.n(_),w=Object(d["a"])(c,i,r,!1,null,"194ffbf8",null);n["default"]=w.exports;q()(w,"components",{QPage:u["a"],QCard:f["a"],QCardSection:v["a"],QInput:m["a"],QBtn:h["a"],QSpinnerGrid:b["a"],QAvatar:p["a"],QImg:g["a"]})}}]);