(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"93d1":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{staticClass:"flex q-pa-md flex-center",attrs:{flat:"",bordered:""}},[r("q-card",[r("q-card-section",{staticClass:"text-h5 text-center"},[t._v("\n      Decentralized Hive Fund\n    ")]),r("q-card-section",[void 0!==t.daoAccount?r("q-list",[r("q-item",[r("q-item-section",[t._v("\n            Maximum Daily Budget "),r("q-badge",{attrs:{color:"primary"}},[t._v(t._s(t.tidyNumber(parseInt(t.daoAccount.hbd_balance.split(" ")[0])/10))+" HBD")])],1),r("q-item-section",[t._v("\n            Total Budget "),r("q-badge",{attrs:{color:"primary"}},[t._v(t._s(t.tidyNumber(t.daoAccount.hbd_balance)))])],1)],1)],1):t._e()],1),r("q-card-section",{staticClass:"text-center"},[r("q-checkbox",{attrs:{label:"Hide Expired"},model:{value:t.filterExpired,callback:function(e){t.filterExpired=e},expression:"filterExpired"}}),r("q-checkbox",{attrs:{label:"Hide Funded"},model:{value:t.filterFunded,callback:function(e){t.filterFunded=e},expression:"filterFunded"}}),r("q-checkbox",{attrs:{label:"Hide Unfunded"},model:{value:t.filterUnfunded,callback:function(e){t.filterUnfunded=e},expression:"filterUnfunded"}}),r("q-checkbox",{attrs:{label:"Hide Active"},model:{value:t.filterActive,callback:function(e){t.filterActive=e},expression:"filterActive"}}),r("br"),t.loggedInUser?r("q-checkbox",{attrs:{label:"Hide Already Voted"},model:{value:t.filterVoted,callback:function(e){t.filterVoted=e},expression:"filterVoted"}}):t._e(),r("br"),r("div",{staticClass:"text-center"},[t._v(t._s(t.filteredProposals.length)+" proposals displayed, "+t._s(t.proposals.length)+" loaded")]),r("div",{staticClass:"text-center"},[t._v("Votes needed for funding: ~"+t._s(t.tidyNumber((t.vestToHive(t.returnProposalVotes)/1e6).toFixed()))+" HP")])],1),r("q-card-section",{staticClass:"text-center q-gutter-y-md"},[r("div",{staticStyle:{"text-align":"center"}},[r("q-input",{attrs:{label:"Search proposals"},scopedSlots:t._u([t.search?{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(e){e.stopPropagation(),t.search=""}}})]},proxy:!0}:null],null,!0),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]),r("q-card-section",[r("q-list",{attrs:{bordered:"",separator:""}},t._l(t.filteredProposals,(function(e){return r("q-item",{key:e.index},[r("proposal",{attrs:{p:e,returnProposalVotes:t.returnProposalVotes}})],1)})),1),t._e()],1)],1)],1)},o=[],i=(r("386d"),r("28a5"),r("06db"),r("6b54"),r("a481"),r("7514"),r("d25f"),r("2fdb"),r("6762"),r("7f7f"),r("c1df")),n=r.n(i),a={name:"Proposals",components:{proposal:function(){return Promise.all([r.e(0),r.e(32)]).then(r.bind(null,"4731"))}},data:function(){return{proposals:[],filterExpired:!0,filterFunded:!1,filterUnfunded:!1,filterActive:!1,filterVoted:!1,search:this.$route.params.proposal||this.$route.query.search||"",votes:null}},methods:{getAccount:function(t){void 0===this.$store.state.hive.accounts[t]&&this.$store.dispatch("hive/getAccount",t)},listProposals:function(){var t=this,e=[-1];this.proposals.length>0&&(e=[this.proposals[this.proposals.length-10].proposal_id]);var r={limit:200,order:"by_total_votes",order_direction:"descending",start:e};this.$hive.api.callAsync("database_api.list_proposals",r).then((function(e){t.proposals.length>0?t.proposals.concat(e.proposals):t.proposals=e.proposals,t.loggedInUser&&t.getUserVotes()}))},tidyNumber:function(t){if(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}return null},timeDelta:function(t){var e=n.a.utc(),r=n.a.utc(t),s=r.diff(e,"minutes");return n.a.duration(s,"minutes").humanize(!0)},vestToHive:function(t){return this.globalProps?this.$hive.formatter.vestToHive(t,this.globalProps.total_vesting_shares,this.globalProps.total_vesting_fund_hive):null},getUserVotes:function(){var t=this,e={limit:100,order:"by_voter_proposal",order_direction:"ascending",start:[this.loggedInUser]};this.$hive.api.callAsync("database_api.list_proposal_votes",e).then((function(e){t.votes=e.proposal_votes,t.votes.forEach((function(e){if(e.voter===t.loggedInUser){var r=t.proposals.find((function(t){return t.id===e.proposal.id}));r&&(r.voted=!0)}}))}))}},computed:{loggedInUser:function(){return this.$store.state.hive.user.username},globalProps:function(){return this.$store.state.hive.globalProps},daoAccount:{cache:!1,get:function(){return this.$store.state.hive.accounts["hive.fund"]}},filteredProposals:function(){var t=this,e=this.proposals;return this.proposals.length>0?(this.filterExpired&&(e=e.filter((function(t){return"expired"!==t.status}))),this.filterActive&&(e=e.filter((function(t){return"active"!==t.status}))),this.filterVoted&&(e=e.filter((function(t){return!0!==t.voted}))),this.filterFunded&&(e=e.filter((function(e){return e.total_votes<t.returnProposalVotes}))),this.filterUnfunded&&(e=e.filter((function(e){return e.total_votes>=t.returnProposalVotes}))),""!==this.search&&(e=e.filter((function(e){return e.subject.includes(t.search)||e.receiver.includes(t.search)||e.creator.includes(t.search)||parseInt(e.id)===parseInt(t.search)}))),e):[]},returnProposalVotes:function(){var t=this.proposals.find((function(t){return 0===t.id}));return t?parseInt(t.total_votes):0}},mounted:function(){document.title="Hive Proposal System",void 0!==this.daoAccount&&this.daoAccount.name===this.username||this.getAccount("hive.fund"),this.listProposals(),this.globalProps.empty&&this.$store.dispatch("hive/getGlobalProps")}},l=a,c=r("2877"),d=r("9989"),u=r("f09f"),p=r("a370"),f=r("1c1c"),h=r("66e5"),v=r("4074"),b=r("58a8"),g=r("8f8e"),m=r("27f9"),_=r("0016"),x=r("9c40"),q=r("eebe"),P=r.n(q),y=Object(c["a"])(l,s,o,!1,null,null,null);e["default"]=y.exports;P()(y,"components",{QPage:d["a"],QCard:u["a"],QCardSection:p["a"],QList:f["a"],QItem:h["a"],QItemSection:v["a"],QBadge:b["a"],QCheckbox:g["a"],QInput:m["a"],QIcon:_["a"],QBtn:x["a"]})}}]);