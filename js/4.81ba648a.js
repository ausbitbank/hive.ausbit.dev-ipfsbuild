(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{4408:function(t,e,n){"use strict";var a=n("66c2"),o=n.n(a);o.a},"66c2":function(t,e,n){},be57:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex flex-center q-pa-sm"},[n("div",{staticClass:"row items-start content-start justify-center"},[t.post?t._e():n("q-spinner-grid",{staticClass:"q-ma-lg",attrs:{size:"2em",color:"primary"}}),n("div",{staticClass:"col-xs-12 col-md-8 justify-center"},[t.post?n("q-card",{staticClass:"q-pa-sm",staticStyle:{"max-width":"1000px"},attrs:{flat:"",bordered:""}},[t.post.title?n("q-card-section",{staticClass:"text-h4 text-center"},[t._v("\n          "+t._s(t.post.title)+"\n        ")]):t._e(),""!==t.post.parent_author?n("q-card-section",[t._v("\n          Reply to "),n("router-link",{attrs:{to:t.linkAccount(t.post.parent_author)}},[t._v(t._s(t.post.parent_author))]),t._v(" / "),n("router-link",{attrs:{to:t.linkPost(t.post.parent_author,t.post.parent_permlink)}},[t._v(t._s(t.post.parent_permlink))])],1):t._e(),n("q-card-section",[n("Card3PostsContent",{attrs:{post:t.post}})],1),t.post.children>0?n("comments",{attrs:{author:t.post.author,permlink:t.post.permlink}}):t._e()],1):t._e()],1),n("div",{staticClass:"col-sm-12 col-md-4 text-center justify-center"},[t.post?n("q-card",{staticClass:"q-pa-none q-ma-none",attrs:{dense:"",flat:"",bordered:""}},[n("q-card-section",[n("q-list",{attrs:{dense:"",separator:""}},[n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",[n("q-img",{attrs:{src:t.GetHiveAvatarUrl(t.author)}})],1)],1),n("q-item-section",[n("router-link",{attrs:{to:t.linkAccount(t.author)}},[t._v(t._s(t.author))])],1)],1),t.postMeta.description?n("q-item",[t.postMeta.description?n("q-item-section",[n("span",{domProps:{innerHTML:t._s(this.renderer.render(t.postMeta.description))}})]):t._e()],1):t._e(),n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"history",color:"blue-grey"}})],1),n("q-item-section",{staticClass:"text-caption text-grey"},[t._v("\n                Posted "+t._s(t.timeDelta(t.post.created))+"\n              ")])],1),t.post.last_update!==t.post.created?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"create",color:"red"}})],1),n("q-item-section",{staticClass:"text-caption text-grey"},[n("a",{attrs:{href:t.GetEditHistoryUrl(t.post.author,t.post.permlink),target:"_blank"}},[t._v("Edited "+t._s(t.timeDelta(t.post.last_update)))])])],1):t._e(),"0.000 HBD"!==t.post.pending_payout_value||"0.000 HBD"!==t.post.total_payout_value?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"monetization_on",color:"green"}})],1),"0.000 HBD"!==t.post.pending_payout_value?n("q-item-section",{staticClass:"text-caption",attrs:{title:"Pending payout value"}},[t._v("\n                "+t._s(t.post.pending_payout_value.split(" ")[0])+" Hive Rewards\n              ")]):t._e(),"0.000 HBD"!==t.post.pending_payout_value?n("q-item-section",{attrs:{title:"Cashout time"}},[t._v("\n                "+t._s(t.timeDelta(t.post.cashout_time))+"\n              ")]):t._e(),"0.000 HBD"!==t.post.total_payout_value?n("q-item-section",{staticClass:"text-caption",attrs:{title:"Total payout value"}},[t._v("\n                "+t._s(t.post.total_payout_value)+"\n              ")]):t._e()],1):t._e(),"0.000 HBD"===t.post.max_accepted_payout?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"money_off",color:"grey"}})],1),n("q-item-section",{staticClass:"text-caption",attrs:{caption:""}},[t._v("\n                Author declined payout on this post\n              ")])],1):t._e(),0===t.post.percent_hbd?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"offline_bolt",title:"100% Power Up Post",color:"yellow"}})],1),n("q-item-section",{staticClass:"text-caption",attrs:{caption:""}},[t._v("\n                Rewards 100% powered up\n              ")])],1):t._e(),t.post.beneficiaries.length>0?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"alt_route",title:"Sharing payout with",color:"purple"}})],1),t._l(t.post.beneficiaries,(function(e){return n("q-item-section",{key:e.index},[n("router-link",{attrs:{to:t.linkAccount(e.account)}},[t._v(t._s(e.account))]),t._v(t._s(e.weight/100)+" %\n              ")],1)}))],2):t._e(),t.post.community&&t.post.community_title?n("q-item",{attrs:{title:"Community"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"label_important",color:"amber"}})],1),n("q-item-section",{staticClass:"text-caption text-grey"},[t._v("\n                "+t._s(t.post.community_title)+" Community\n              ")])],1):t.post.category?n("q-item",{attrs:{title:"Category"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"label_important",color:"orange"}})],1),n("q-item-section",{staticClass:"text-caption text-grey"},[t._v("\n                "+t._s(t.post.category)+"\n              ")])],1):t._e(),t.postMeta&&t.postMeta.tags?n("q-item",{attrs:{title:"Tags"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"label",color:"primary"}})],1),n("q-item-section",{staticClass:"text-caption text-grey"},t._l(t.postMeta.tags,(function(e){return n("span",{key:e.index},[t._v(t._s(e))])})),0)],1):t._e(),t.postMeta&&t.postMeta.app?n("q-item",{attrs:{title:"App"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"fingerprint",color:"brown"}})],1),n("q-item-section",[t._v("\n                "+t._s(t.postMeta.app)+"\n              ")])],1):t._e(),t.post.active_votes.length>0?n("q-item",{attrs:{title:"Votes"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"how_to_vote",color:"purple"}})],1),n("q-item-section",[n("span",{staticClass:"text-blue text-bold cursor-pointer",on:{click:function(e){t.showVotes=!0}}},[t._v(t._s(t.post.active_votes.length)+" votes")])]),n("q-dialog",{model:{value:t.showVotes,callback:function(e){t.showVotes=e},expression:"showVotes"}},[n("q-card",{staticStyle:{"max-width":"95%"},attrs:{flat:"",bordered:""}},[n("q-table",{attrs:{title:"Votes",data:t.post.active_votes,columns:t.voteColumns,pagination:{sortBy:"weight",descending:!0,rowsPerPage:50},dense:"",bordered:"",separator:"cell"}})],1)],1)],1):t._e(),n("q-item",[n("tip-button",{staticStyle:{width:"100%"},attrs:{account:t.post.author}})],1),t.postMeta?n("q-item",{staticClass:"text-left"},[t._e(),n("q-item-section",[n("json-viewer",{attrs:{data:t.postMeta,deep:0,title:"Post json_metadata"}})],1)],1):t._e()],1)],1),t.loggedInUser&&t.postPastPayout?n("q-card-section",{staticClass:"text-caption"},[n("div",[t._v("This post is past its payout window.")]),n("div",[t._v("You can still vote, but it will not affect rewards.")])]):t._e(),t.loggedInUser?n("q-card-section",[n("vote",{attrs:{author:t.author,permlink:t.permlink,active_votes:this.post.active_votes}})],1):t._e(),n("q-card-section",[t._v("\n          View this post on "),n("a",{attrs:{href:t.linkHiveBlogPost(t.author,t.permlink)}},[t._v("Hive.blog")]),t._v(", "),n("a",{attrs:{href:t.linkPeakdPost(t.author,t.permlink)}},[t._v("Peakd")])])],1):t._e(),n("recent-posts-carousel",{attrs:{account:t.author,autoplay:!1}})],1)],1)])},o=[],s=n("099c"),i=n("1b95"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.viewComments?t._e():n("span",{staticClass:"text-center"},[n("div",{staticClass:"cursor-pointer",on:{click:function(e){t.viewComments=!t.viewComments}}},[n("q-icon",{attrs:{name:"comment"}}),t._v("  View replies")],1)]),t.viewComments?n("span",[n("center",[t.loading?n("q-spinner-grid",{staticClass:"text-center",attrs:{size:"2em",color:"primary"}}):t._e()],1),t.loading?t._e():n("q-card",{attrs:{dense:"",flat:"",bordered:""}},[n("q-card-section",{staticClass:"text-h6 text-center"},[n("q-icon",{attrs:{name:"comment"}}),t._v("Replies\n    ")],1),t._l(t.comments,(function(e){return n("span",{key:e.index},[1===e.depth?n("comment",{attrs:{comment:e,comments:t.comments,parentAuthor:t.author,parentPermlink:t.permlink,parentDepth:e.depth}}):t._e()],1)}))],2)],1):t._e()])},c=[],l=(n("ac6a"),n("cadf"),n("06db"),n("456d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.comment.permlink!==this.parentPermlink?n("q-card-section",[n("q-list",{attrs:{bordered:"",separator:""}},[n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("center",[n("router-link",{attrs:{to:t.linkAccount(this.comment.author)}},[n("q-avatar",[n("q-img",{attrs:{src:t.GetHiveAvatarUrl(this.comment.author)}})],1),n("div",{staticClass:"text-bold"},[t._v("\n            "+t._s(this.comment.author)+"\n          ")])],1)],1)],1),n("q-item-section",[n("comment-body",{attrs:{post:t.comment}})],1),n("q-item-section",{staticClass:"text-grey text-subtitle",attrs:{side:""}},[n("router-link",{attrs:{to:t.returnLink(this.comment.author,this.comment.permlink)}},[t._v(t._s(t.timeDelta(this.comment.created)))])],1)],1)],1),t._l(t.comment.replies,(function(e){return n("span",{key:e.index},[n("comment",{attrs:{comment:t.comments[e],comments:t.comments,parentDepth:t.comment.depth}})],1)}))],2):t._e()}),u=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"postview",domProps:{innerHTML:t._s(t.postContent)}})},p=[],h=n("24d4"),d={name:"commentBody",props:["post"],data:function(){return{renderer:new h["DefaultRenderer"]({baseUrl:"https://hive.ausbit.dev/",breaks:!0,skipSanitization:!1,allowInsecureScriptTags:!1,addNofollowToLinks:!0,doNotShowImages:!1,ipfsPrefix:"",assetsWidth:640,assetsHeight:480,imageProxyFn:function(t){return t},usertagUrlFn:function(t){return"/@"+t},hashtagUrlFn:function(t){return"/trending/"+t},isLinkSafeFn:function(t){return!0}})}},computed:{postContent:function(){return this.renderer.render(this.post.body)}},methods:{}},v=d,f=n("2877"),_=Object(f["a"])(v,m,p,!1,null,null,null),g=_.exports,q=n("c1df"),b=n.n(q),k={name:"comment",data:function(){return{}},props:["comment","comments","parentAuthor","parentPermlink","parentDepth"],components:{commentBody:g,comment:$},methods:{returnLink:function(t,e){return"/@"+t+"/"+e},linkAccount:function(t){return"/@"+t},GetHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},timeDelta:function(t){var e=b.a.utc(),n=b.a.utc(t),a=n.diff(e,"minutes");return b.a.duration(a,"minutes").humanize(!0)}},mounted:function(){}},y=k,w=n("a370"),C=n("1c1c"),x=n("66e5"),P=n("4074"),Q=n("cb32"),D=n("068f"),S=n("eebe"),M=n.n(S),I=Object(f["a"])(y,l,u,!1,null,null,null),$=I.exports;M()(I,"components",{QCardSection:w["a"],QList:C["a"],QItem:x["a"],QItemSection:P["a"],QAvatar:Q["a"],QImg:D["a"]});var H={name:"comments",data:function(){return{comments:[],api:"https://rpc.ausbit.dev",viewComments:!1,loading:!1}},watch:{viewComments:function(){this.viewComments&&this.getReplies()}},props:["author","permlink"],components:{comment:$},computed:{},methods:{getReplies:function(){var t=this;this.loading=!0,this.$axios.post(this.api,{jsonrpc:"2.0",method:"bridge.get_discussion",params:{author:this.author,permlink:this.permlink}}).then((function(e){t.loading=!1,t.comments=e.data.result,t.comments=t.sortData("net_rshares",t.comments,"desc")})).catch((function(e){t.loading=!1,console.log(e)}))},sortData:function(t,e,n){var a={},o=function(n,a){return e[a][t]-e[n][t]};return"asc"===n&&(o=function(n,a){return e[n][t]-e[a][t]}),Object.keys(e).sort(o).forEach((function(t){a[t]=e[t]})),a}},mounted:function(){this.getReplies()}},j=H,A=n("0016"),L=n("981c"),V=n("f09f"),U=Object(f["a"])(j,r,c,!1,null,null,null),B=U.exports;M()(U,"components",{QIcon:A["a"],QSpinnerGrid:L["a"],QCard:V["a"],QCardSection:w["a"]});var O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.myVote&&!t.voteSent?n("span",[n("div",[t._v("Already voted on this post at "+t._s(t.myVote.percent/100)+"%")]),n("div",{staticClass:"q-pa-md"},[n("q-list",{attrs:{dense:""}},[n("q-item",[n("q-item-section",[n("q-slider",{attrs:{min:-100,max:100,label:"",color:t.voteColor},model:{value:t.weight,callback:function(e){t.weight=e},expression:"weight"}})],1)],1),n("q-item",[n("q-item-section",[t.myVote.percent!==100*t.weight?n("q-btn",{attrs:{push:"",icon:t.voteIcon,color:t.voteColor,label:t.voteLabel},on:{click:function(e){return t.vote(t.permlink,t.author,t.weight)}}}):t._e()],1)],1)],1)],1)]):t.voteSent?n("span",[t._v("\n    Voted at "+t._s(t.weight)+" %\n  ")]):n("span",[n("div",{staticClass:"q-pa-md"},[n("q-list",{attrs:{dense:""}},[n("q-item",[n("q-item-section",[n("q-slider",{attrs:{min:-100,max:100,label:"",color:t.voteColor},model:{value:t.weight,callback:function(e){t.weight=e},expression:"weight"}})],1)],1),n("q-item",[n("q-item-section",[n("q-btn",{attrs:{push:"",icon:t.voteIcon,color:t.voteColor,label:t.voteLabel},on:{click:function(e){return t.vote(t.permlink,t.author,t.weight)}}})],1)],1)],1)],1)])])},E=[],R=n("a34a"),F=n.n(R),T=(n("96cf"),n("c973")),z=n.n(T),N=(n("0b21"),n("8e27")),G={name:"vote",props:["votes","active_votes","author","permlink"],data:function(){return{weight:100,voteSent:!1}},computed:{loggedInUser:{get:function(){return this.$store.state.hive.user.username}},myVote:function(){return this.active_votes.filter(this.filterMyVote)[0]},voteColor:function(){return-1!==Math.sign(this.weight)?0===Math.sign(this.weight)?"grey":"green":"red"},voteIcon:function(){return-1!==Math.sign(this.weight)?0===Math.sign(this.weight)?"cancel":"thumb_up":"thumb_down"},voteLabel:function(){return-1!==Math.sign(this.weight)?0===Math.sign(this.weight)?"Cancel vote on this post":this.weight+"% upvote this post":this.weight+"% downvote this post"}},methods:{getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},getAccountLink:function(t){return"/@"+t},getWalletLink:function(t){return"/@"+t+"/wallet"},vote:function(t,e,n){var a=this;return z()(F.a.mark((function o(){var s,i,r,c,l,u;return F.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,Object(N["keychain"])(window,"requestVote",a.loggedInUser,t,e,100*n);case 2:s=o.sent,i=s.success,r=s.msg,c=s.cancel,l=s.notInstalled,u=s.notActive,i&&(a.voteSent=!0),c||(u?console.error("Please allow Keychain to access this website"):l?console.error("Keychain not available"):console.info(r));case 10:case"end":return o.stop()}}),o)})))()},filterMyVote:function(t){return t.voter===this.loggedInUser}},mounted:function(){}},J=G,W=n("c1d0"),K=n("9c40"),Y=Object(f["a"])(J,O,E,!1,null,null,null),X=Y.exports;M()(Y,"components",{QList:C["a"],QItem:x["a"],QItemSection:P["a"],QSlider:W["a"],QBtn:K["a"]});var Z=n("a00c"),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("q-btn",{staticClass:"q-ma-none q-pa-none",attrs:{outline:"",rounded:"",color:"primary"}},[t._l(t.coins,(function(e){return n("q-icon",{key:e.index,attrs:{name:t.returnCoinSvg(e)}})})),n("q-icon",{staticClass:"q-mr-md",attrs:{name:"img:statics/hextacular.svg"}}),t._v(" Send "+t._s(t.account)+" a tip\n    "),n("q-popup-proxy",[n("tip-dialog",{attrs:{account:t.account,accountData:t.accountData,accountMeta:t.accountMeta,coins:t.coins}})],1)],2)],1)},et=[],nt=(n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-list",{attrs:{bordered:"",separator:"",dense:""}},[n("q-item",{attrs:{clickable:""}},[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",[n("q-icon",{attrs:{name:"img:statics/hextacular.svg",title:"Hive"}})],1)],1),n("q-item-section",[n("q-item-label",[t._v("\n        Hive\n      ")]),n("q-item-label",{attrs:{caption:""}},[t._v("\n        "+t._s(t.account)+"\n      ")])],1),n("q-item-section",{attrs:{side:""}},[n("q-btn",{staticClass:"hvr",attrs:{dense:"",round:"",icon:"send",title:"Transfer",color:"primary",disabled:!this.$store.state.hive.user.username},on:{click:function(e){t.hivetransfer=!0}}})],1),n("q-item-section",{attrs:{side:""}},[n("q-btn",{staticClass:"hvr",attrs:{dense:"",round:"",icon:"content_copy",title:"Copy address to clipboard",color:"blue-grey"},on:{click:function(e){return t.copy(t.account)}}})],1),n("q-dialog",{model:{value:t.hivetransfer,callback:function(e){t.hivetransfer=e},expression:"hivetransfer"}},[n("transfer-dialog",{attrs:{tokenName:"HIVE",network:"hive",to:t.account,username:this.$store.state.hive.user.username}})],1)],1),n("q-item",{attrs:{clickable:""}},[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",[n("q-icon",{attrs:{name:"img:statics/hextacular.svg",title:"Hive"}})],1)],1),n("q-item-section",[n("q-item-label",[t._v("\n        Hive Dollars\n      ")]),n("q-item-label",{attrs:{caption:""}},[t._v("\n        "+t._s(t.account)+"\n      ")])],1),n("q-item-section",{attrs:{side:""}},[n("q-btn",{staticClass:"hvr",attrs:{dense:"",round:"",icon:"send",title:"Transfer",color:"primary",disabled:!this.$store.state.hive.user.username},on:{click:function(e){t.hivedollartransfer=!0}}})],1),n("q-item-section",{attrs:{side:""}},[n("q-btn",{staticClass:"hvr",attrs:{dense:"",round:"",icon:"content_copy",color:"blue-grey",title:"Copy address to clipboard"},on:{click:function(e){return t.copy(t.account)}}})],1),n("q-dialog",{model:{value:t.hivedollartransfer,callback:function(e){t.hivedollartransfer=e},expression:"hivedollartransfer"}},[n("transfer-dialog",{attrs:{tokenName:"HBD",network:"hive",to:t.account,username:this.$store.state.hive.user.username}})],1)],1),t.accountData?t._e():n("q-item",[n("q-spinner-pie",{attrs:{color:"primary",size:"sm"}})],1),t._l(t.coins,(function(e){return n("q-item",{key:e.index,attrs:{clickable:""}},[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",{attrs:{size:"lg"}},[n("q-icon",{attrs:{name:t.returnCoinSvg(e),title:e}})],1)],1),n("q-item-section",[n("q-item-label",[t._v("\n        "+t._s(e)+"\n      ")]),n("q-item-label",{attrs:{caption:""}},[n("a",{attrs:{href:t.returnCoinLink(e),title:t.accountMeta.profile[e]}},[t._v(t._s(t.accountMeta.profile[e].substr(0,20)))]),t._v("..\n      ")])],1),n("q-item-section",{attrs:{side:""}},[n("q-btn",{staticClass:"hvr",attrs:{dense:"",round:"",type:"a",href:t.returnCoinLink(e),icon:"send",title:"Open Wallet Client",color:"primary"}})],1),n("q-item-section",{attrs:{side:""}},[n("q-btn",{staticClass:"hvr",attrs:{dense:"",round:"",icon:"content_copy",color:"blue-grey",title:"Copy address to clipboard"},on:{click:function(n){return t.copy(t.accountMeta.profile[e])}}})],1)],1)}))],2)}),at=[],ot=n("0547"),st=n("cdde"),it={name:"tipDialog",components:{transferDialog:ot["a"]},data:function(){return{supportedCoins:["bitcoin","litecoin","ethereum"],hivetransfer:!1,hivedollartransfer:!1}},props:["account"],computed:{accountData:function(){return void 0!==this.$store.state.hive.accounts[this.account]?this.$store.state.hive.accounts[this.account]:null},accountMeta:function(){return this.accountData&&this.accountData.posting_json_metadata?JSON.parse(this.accountData.posting_json_metadata):null},coins:function(){var t=this,e=[];return this.accountMeta?(Object.keys(this.accountMeta.profile).forEach((function(n){return t.supportedCoins.includes(n)?e.push(n):console.log()})),e):[]}},methods:{returnCoinSvg:function(t){return"img:statics/"+t+".svg"},returnCoinLink:function(t){return t+":"+this.accountMeta.profile[t]},copy:function(t){Object(st["a"])(t),this.$q.notify("Copied to clipboard: "+t)}},mounted:function(){void 0===this.$store.state.hive.accounts[this.account]&&(console.log("dispatch sent to get account info for "+this.account),this.$store.dispatch("hive/getAccount",this.account))}},rt=it,ct=n("0170"),lt=n("24e8"),ut=n("163c"),mt=Object(f["a"])(rt,nt,at,!1,null,null,null),pt=mt.exports;M()(mt,"components",{QList:C["a"],QItem:x["a"],QItemSection:P["a"],QAvatar:Q["a"],QIcon:A["a"],QItemLabel:ct["a"],QBtn:K["a"],QDialog:lt["a"],QSpinnerPie:ut["a"]});var ht={name:"tipButton",components:{tipDialog:pt},data:function(){return{supportedCoins:["bitcoin","litecoin","ethereum"]}},props:["account"],computed:{accountData:function(){return void 0!==this.$store.state.hive.accounts[this.account]?this.$store.state.hive.accounts[this.account]:null},accountMeta:function(){return this.accountData&&this.accountData.posting_json_metadata?JSON.parse(this.accountData.posting_json_metadata):null},coins:function(){var t=this,e=[];return this.accountMeta?(Object.keys(this.accountMeta.profile).forEach((function(n){return t.supportedCoins.includes(n)?e.push(n):console.log()})),e):[]}},methods:{returnCoinSvg:function(t){return"img:statics/"+t+".svg"}},mounted:function(){void 0===this.$store.state.hive.accounts[this.account]&&(console.log("dispatch sent to get account info for "+this.account),this.$store.dispatch("hive/getAccount",this.account))}},dt=ht,vt=n("7cbe"),ft=Object(f["a"])(dt,tt,et,!1,null,null,null),_t=ft.exports;M()(ft,"components",{QBtn:K["a"],QIcon:A["a"],QPopupProxy:vt["a"]});var gt={name:"postView",components:{Card3PostsContent:s["a"],recentPostsCarousel:i["a"],comments:B,vote:X,jsonViewer:Z["a"],tipButton:_t},data:function(){return{post:null,author:this.$router.currentRoute.params.author,permlink:this.$router.currentRoute.params.permlink,showVotes:!1,voteColumns:[{name:"voter",label:"Voter",field:"voter",sortable:!0},{name:"percent",label:"Percent",field:"percent",sortable:!0},{name:"rshares",label:"rshares",field:"rshares",sortable:!0},{name:"weight",label:"weight",field:"weight",sortable:!0},{name:"reputation",label:"reputation",field:"reputation",sortable:!0},{name:"time",label:"time",field:"time",sortable:!0}],renderer:new h["DefaultRenderer"]({baseUrl:"https://hive.ausbit.dev/",breaks:!0,skipSanitization:!1,allowInsecureScriptTags:!1,addNofollowToLinks:!0,doNotShowImages:!1,ipfsPrefix:"",assetsWidth:640,assetsHeight:480,imageProxyFn:function(t){return t},usertagUrlFn:function(t){return"/@"+t},hashtagUrlFn:function(t){return"/trending/"+t},isLinkSafeFn:function(t){return!0}})}},watch:{$route:function(){this.init()}},computed:{loggedInUser:{get:function(){return this.$store.state.hive.user.username}},postPastPayout:function(){var t=b.a.utc(),e=b.a.utc(this.post.cashout_time);return t>e},postMeta:function(){return this.post.json_metadata?JSON.parse(this.post.json_metadata):null}},methods:{getPost:function(t,e){var n=this;this.$hive.api.getContentAsync(t,e).then((function(t){return n.setPost(t)})).catch((function(t){return console.log(t)}))},setPost:function(t){this.post=t,document.title=t.title},linkHiveBlogPost:function(t,e){return"https://hive.blog/@"+t+"/"+e},linkPeakdPost:function(t,e){return"https://peakd.com/@"+t+"/"+e},linkAccount:function(t){return"/@"+t},linkPost:function(t,e){return"/@"+t+"/"+e},timeDelta:function(t){var e=b.a.utc(),n=b.a.utc(t),a=n.diff(e,"minutes");return b.a.duration(a,"minutes").humanize(!0)},GetHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},GetEditHistoryUrl:function(t,e){return"https://scribe.hivekings.com/?url=https%3A%2F%2Fhive.blog%2F%40"+t+"%2F"+e},init:function(){this.post=null,this.author=this.$router.currentRoute.params.author,this.permlink=this.$router.currentRoute.params.permlink,this.getPost(this.author,this.permlink)}},mounted:function(){this.init()}},qt=gt,bt=(n("4408"),n("9989")),kt=n("eaac"),yt=Object(f["a"])(qt,a,o,!1,null,"783ec31f",null);e["default"]=yt.exports;M()(yt,"components",{QPage:bt["a"],QSpinnerGrid:L["a"],QCard:V["a"],QCardSection:w["a"],QList:C["a"],QItem:x["a"],QItemSection:P["a"],QAvatar:Q["a"],QImg:D["a"],QIcon:A["a"],QDialog:lt["a"],QTable:kt["a"]})}}]);