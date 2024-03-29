(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{4731:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[r("q-item",{staticClass:"text-h6"},[r("router-link",{attrs:{to:t.returnPostLink(t.p.creator,t.p.permlink)}},[t._v(t._s(t.p.subject))]),r("span",{staticClass:"text-grey text-caption"},[t._v(t._s(t.p.id))])],1),r("q-item",{attrs:{dense:""}},[r("q-item-section",{attrs:{avatar:""}},[r("q-avatar",{attrs:{size:"sm"}},[r("q-img",{attrs:{src:t.getHiveAvatarUrl(t.p.creator)}})],1)],1),r("q-item-section",[t._v("\n      Creator: "),r("router-link",{attrs:{to:t.returnUserLink(t.p.creator)}},[t._v(t._s(t.p.creator))])],1),t.p.creator!==t.p.receiver?r("q-item-section",{attrs:{avatar:""}},[r("q-avatar",{attrs:{size:"sm"}},[r("q-img",{attrs:{src:t.getHiveAvatarUrl(t.p.receiver)}})],1)],1):t._e(),t.p.creator!==t.p.receiver?r("q-item-section",{staticClass:"q-ma-sm"},[t._v("\n      Receiver: "),r("router-link",{attrs:{to:t.returnUserLink(t.p.receiver)}},[t._v(t._s(t.p.receiver))])],1):t._e()],1),r("q-item",{attrs:{dense:""}},[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:"date_range",color:"grey"}})],1),r("q-item-section",[t._v("\n      "+t._s(t.returnNiceDate(t.p.start_date))+" - "+t._s(t.returnNiceDate(t.p.end_date))+"\n      "),"active"===t.p.status?r("span",[t._v("(Expires "+t._s(t.timeDelta(t.p.end_date))+")")]):"expired"===t.p.status?r("span",[t._v("(Expired "+t._s(t.timeDelta(t.p.end_date))+")")]):"inactive"===t.p.status?r("span",[t._v("(Starts "+t._s(t.timeDelta(t.p.start_date))+")")]):t._e()])],1),r("q-item",[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:"monetization_on",color:"green"}})],1),t.p.daily_pay?r("q-item-section",[t._v("\n      Daily Pay: "+t._s(t.tidyNumber(t.p.daily_pay.amount/1e3))+" HBD\n    ")]):t._e()],1),r("q-item",[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:"favorite",color:"red"}})],1),r("q-item-section",[t._v("\n      Vote Value: "+t._s(t.tidyNumber((t.vestToHive(t.p.total_votes)/1e6).toFixed()))+" HP\n    ")])],1),r("q-item",[r("q-item-section",{attrs:{avatar:""}},[0===t.p.id?r("q-icon",{attrs:{name:"star",color:"orange",title:"return p"}}):"active"===t.p.status&&parseInt(t.p.total_votes)<t.returnProposalVotes?r("q-icon",{attrs:{name:"circle",color:"orange",title:"active, unfunded"}}):"active"===t.p.status?r("q-icon",{attrs:{name:"circle",color:"green",title:"active, funded"}}):"expired"===t.p.status?r("q-icon",{attrs:{name:"cancel",color:"grey",title:"expired"}}):"inactive"===t.p.status?r("q-icon",{attrs:{name:"circle",color:"red",title:"inactive"}}):t._e()],1),r("q-item-section",[t._v("\n      Status:\n      "),"active"===t.p.status&&parseInt(t.p.total_votes)<t.returnProposalVotes?r("span",[t._v("Active, Unfunded")]):"active"===t.p.status?r("span",[t._v("Active, Funded")]):"expired"===t.p.status?r("span",[t._v("Expired")]):"inactive"===t.p.status?r("span",[t._v("Inactive")]):r("span",[t._v(t._s(t.p.status))])])],1),t.p.voted?r("q-item",[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:"check",color:"green"}})],1),r("q-item-section",[t._v("\n      Voted by "+t._s(t.loggedInUser)+" "),r("a",{attrs:{href:t.returnHiveSignerDeny(t.p.id),target:"blank"}},[t._v("Unvote")])])],1):"active"===t.p.status?r("q-item",[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:"check_box_outline_blank"}})],1),r("q-item-section",[r("a",{attrs:{href:t.returnHiveSignerApprove(t.p.id),target:"_blank"}},[t._v("Vote for proposal")])])],1):t._e(),r("q-item",[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:"open_in_new"}})],1),r("q-item-section",[r("a",{attrs:{href:t.returnPeakdProposalLink(t.p.id),target:"_blank"}},[t._v("View proposal in PeakD")])])],1)],1)},n=[],i=(r("28a5"),r("06db"),r("6b54"),r("a481"),r("c1df")),s=r.n(i),o={name:"proposal",data:function(){return{votes:null}},props:["p","returnProposalVotes"],computed:{loggedInUser:function(){return this.$store.state.hive.user.username},globalProps:function(){return this.$store.state.hive.globalProps}},methods:{returnPostLink:function(t,e){return"/@"+t+"/"+e},returnUserLink:function(t){return"/@"+t},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},returnNiceDate:function(t){return s()(t).format("Do MMMM YYYY")},returnHiveSignerApprove:function(t){return"https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B"+t+"%5D&approve=true"},returnHiveSignerDeny:function(t){return"https://hivesigner.com/sign/update-proposal-votes?proposal_ids=%5B"+t+"%5D&approve=false"},returnPeakdProposalLink:function(t){return"https://peakd.com/me/proposals/"+t},vestToHive:function(t){return this.globalProps?this.$hive.formatter.vestToHive(t,this.globalProps.total_vesting_shares,this.globalProps.total_vesting_fund_hive):null},tidyNumber:function(t){if(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}return null},timeDelta:function(t){var e=s.a.utc(),r=s.a.utc(t),a=r.diff(e,"minutes");return s.a.duration(a,"minutes").humanize(!0)}},mounted:function(){}},c=o,p=r("2877"),u=r("1c1c"),v=r("66e5"),l=r("4074"),m=r("cb32"),_=r("068f"),d=r("0016"),q=r("eebe"),g=r.n(q),f=Object(p["a"])(c,a,n,!1,null,null,null);e["default"]=f.exports;g()(f,"components",{QList:u["a"],QItem:v["a"],QItemSection:l["a"],QAvatar:m["a"],QImg:_["a"],QIcon:d["a"]})}}]);