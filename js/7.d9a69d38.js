(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"43d9":function(t,e,o){"use strict";var n=o("de92"),a=o.n(n);a.a},be57:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",{staticClass:"flex"},[void 0!==t.globalProps&&void 0!==t.account?o("account-header",{staticClass:"full-width",staticStyle:{overflow:"hidden"},attrs:{globalProps:this.globalProps,account:this.account,showBalances:!1,showNavBar:!0}}):t._e(),null!==t.error?o("div",{staticStyle:{margin:"auto"}},[o("q-card",{staticClass:"q-pa-md text-center",attrs:{bordered:""}},[o("q-icon",{attrs:{name:"error",size:"lg",color:"orange"}}),o("br"),o("b",[t._v(t._s(t.error.name)+" : "+t._s(t.error.message))]),o("br"),t._v("\n      "+t._s(t.error.data)+"\n      "),-31999===t.error.cause.code&&t.error.cause.data.startsWith("Post ")?o("q-card-section",[o("q-btn",{attrs:{label:"Find the transaction",color:"primary",icon:"search"},on:{click:function(e){return t.findDeletedPost(t.error.data)}}})],1):t._e()],1)],1):t._e(),o("div",{staticClass:"row items-start content-start justify-center",staticStyle:{margin:"auto","max-width":"1000px"}},[t.post?o("div",{staticClass:"col-xs-11 col-md-9 col-lg-9 justify-center items-start"},[o("q-card",{staticClass:"q-pa-xs",staticStyle:{margin:"auto"},attrs:{flat:"",bordered:""}},[t.post.title?o("q-card-section",{staticClass:"text-h5 text-center"},[t._v("\n          "+t._s(t.Sanitize(t.post.title))+"\n        ")]):t._e(),""!==t.post.parent_author?o("q-card-section",[t._v("\n          Reply to "),o("router-link",{attrs:{to:t.linkAccount(t.post.parent_author)}},[t._v(t._s(t.post.parent_author))]),t._v(" / "),o("router-link",{attrs:{to:t.linkPost(t.post.parent_author,t.post.parent_permlink)}},[t._v(t._s(t.post.parent_permlink))])],1):t._e(),t.post.body?o("q-card-section",[o("transition",{attrs:{appear:"","enter-active-class":"animated bounceInUp","leave-active-class":"animated bounceOutDown"}},[o("render",{staticClass:"postbody",attrs:{input:t.post.body}})],1)],1):o("q-card-section",[o("q-skeleton",{attrs:{type:"rect",height:"200px",width:"200"}})],1)],1)],1):o("div",[o("q-skeleton",{attrs:{type:"text",height:"100"}})],1),o("div",{staticClass:"col-sm-11 col-md-3 col-lg-3 text-center justify-center items-start"},[t.post?o("q-card",{staticClass:"q-pa-none q-ma-none",staticStyle:{"min-width":"300px",position:"relative",top:"0"},attrs:{dense:"",flat:"",bordered:""}},[o("q-card-section",[o("q-list",{attrs:{dense:"",separator:""}},[o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-avatar",{attrs:{size:"sm"}},[o("q-img",{attrs:{src:t.GetHiveAvatarUrl(t.author)}})],1),t.postMeta.author&&t.postMeta.author!==t.author?o("q-avatar",{staticClass:"q-pt-xs q-mb-xs",attrs:{size:"sm"}},[o("q-img",{attrs:{src:t.GetHiveAvatarUrl(t.postMeta.author)}})],1):t._e()],1),o("q-item-section",[o("div",[t._v("Posted by "),o("router-link",{attrs:{to:t.linkAccount(t.author)}},[t._v(t._s(t.author))])],1),t.postMeta.author&&t.postMeta.author.toLowerCase()!==t.author.toLowerCase()?o("div",[t._v("Authored by "),o("router-link",{attrs:{to:t.linkAccount(t.postMeta.author)}},[t._v(t._s(t.postMeta.author))])],1):t._e()])],1),t.postDescription?o("q-item",[o("q-item-section",[o("span",[t._v(t._s(t.postDescription))])])],1):t._e(),o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"history",color:"blue-grey"}})],1),o("q-item-section",{staticClass:"text-caption text-grey"},[t._v("\n                "+t._s(t.timeDelta(t.post.created))+"\n              ")])],1),t.post.last_update!==t.post.created?o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"create",color:"red"}})],1),o("q-item-section",{staticClass:"text-caption text-grey"},[o("a",{attrs:{href:t.GetEditHistoryUrl(t.post.author,t.post.permlink),target:"_blank"}},[t._v("Edited "+t._s(t.timeDelta(t.post.last_update)))])])],1):t._e(),o("q-item",{attrs:{title:"Votes"}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{staticClass:"cursor-hand",attrs:{name:"thumbs_up_down",color:"purple",title:"View voter information"},on:{click:function(e){t.showVotes=!0}}})],1),t.loggedInUser&&t.postPastPayout?o("q-item-section",{staticClass:"text-caption"},[o("div",[t._v("This post is past its payout window.")]),o("div",[t._v("You can still vote, but it will not affect rewards.")])]):t._e(),t.loggedInUser?o("q-item-section",[o("vote",{attrs:{author:t.author,permlink:t.permlink,votes:this.post.active_votes},on:{Voted:function(e){return t.init()}}})],1):o("q-item-section",[t._v("\n                Login to vote\n              ")]),o("q-dialog",{model:{value:t.showVotes,callback:function(e){t.showVotes=e},expression:"showVotes"}},[o("votes-dialog",{attrs:{votes:t.post.active_votes}})],1)],1),"0.000 HBD"!==t.post.pending_payout_value||"0.000 HBD"!==t.post.total_payout_value?o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"monetization_on",color:"green"}})],1),"0.000 HBD"!==t.post.pending_payout_value?o("q-item-section",{staticClass:"text-caption",attrs:{title:"Pending payout value"}},[t._v("\n                "+t._s(t.post.pending_payout_value.split(" ")[0])+" Hive Rewards\n              ")]):t._e(),"0.000 HBD"!==t.post.pending_payout_value?o("q-item-section",{attrs:{title:"Cashout time"}},[t._v("\n                "+t._s(t.timeDelta(t.post.cashout_time))+"\n              ")]):t._e(),"0.000 HBD"!==t.post.total_payout_value?o("q-item-section",{staticClass:"text-caption",attrs:{title:"Total payout value"}},[t._v("\n                "+t._s(t.post.total_payout_value)+"\n              ")]):t._e()],1):t._e(),"0.000 HBD"===t.post.max_accepted_payout?o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"money_off",color:"grey"}})],1),o("q-item-section",{staticClass:"text-caption",attrs:{caption:""}},[t._v("\n                Author declined payout on this post\n              ")])],1):t._e(),0===t.post.percent_hbd?o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"offline_bolt",title:"100% Power Up Post",color:"yellow"}})],1),o("q-item-section",{staticClass:"text-caption",attrs:{caption:""}},[t._v("\n                Rewards 100% powered up\n              ")])],1):t._e(),parseInt(t.post.max_accepted_payout.split(" ")[0])<100?o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"money_off",title:"Rewards capped",color:"yellow"}})],1),o("q-item-section",{staticClass:"text-caption",attrs:{caption:""}},[t._v("\n                Author rewards capped at "+t._s(t.post.max_accepted_payout)+"\n              ")])],1):t._e(),t.post.beneficiaries.length>0?o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"alt_route",title:"Sharing payout with",color:"purple"}})],1),t._l(t.post.beneficiaries,(function(e){return o("q-item-section",{key:e.index},[o("router-link",{attrs:{to:t.linkAccount(e.account)}},[t._v(t._s(e.account))]),t._v(t._s(e.weight/100)+" %\n              ")],1)}))],2):t._e(),t.post.community&&t.post.community_title?o("q-item",{attrs:{title:"Community"}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"label_important",color:"amber"}})],1),o("q-item-section",{staticClass:"text-caption text-grey"},[t._v("\n                "+t._s(t.post.community_title)+" Community\n              ")])],1):t.post.category?o("q-item",{attrs:{title:"Category"}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"label_important",color:"orange"}})],1),o("q-item-section",{staticClass:"text-caption text-grey"},[o("router-link",{attrs:{to:t.linkDetect(t.post.category)}},[t._v(t._s(t.post.category))])],1)],1):t._e(),t.postMeta&&t.postMeta.tags&&t.postMeta.tags.length>0?o("q-item",{attrs:{title:"Tags"}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"label",color:"primary"}})],1),o("q-item-section",{staticClass:"text-caption text-grey"},t._l(t.postMeta.tags,(function(e){return o("router-link",{key:e.index,attrs:{to:t.linkTag(e)}},[t._v(t._s(e))])})),1)],1):t._e(),t.postMeta&&t.postMeta.app?o("q-item",{attrs:{title:"App"}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"fingerprint",color:"brown"}})],1),o("q-item-section",[t._v("\n                "+t._s(t.postMeta.app)+"\n              ")])],1):t._e(),t.postMeta&&t.postMeta.countdown?o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"alarm_on",color:"gray"}})],1),o("q-item-section",[t._v("\n                Countdown to "+t._s(t.postMeta.countdown)),o("br"),t._v("\n                ( "+t._s(t.timeDelta(t.postMeta.countdown))+" )\n              ")])],1):t._e(),o("q-item",[o("tip-button",{staticStyle:{width:"100%"},attrs:{account:t.post.author}})],1),t.loggedInUser?o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"share",color:"secondary"}})],1),o("q-item-section",[o("reblog",{attrs:{author:t.post.author,permlink:t.post.permlink}})],1)],1):t._e(),o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"share",color:"orange"}})],1),o("q-item-section",[o("q-btn",{attrs:{rounded:"",flat:""},on:{click:function(e){t.showShareDialog=!t.showShareDialog}}},[t._v("\n                  Share this post:\n                ")]),t.showShareDialog?o("shareButtons",{attrs:{title:t.post.title}}):t._e()],1)],1),o("q-item",[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"code",color:"blue"}})],1),o("q-item-section",[o("q-btn",{attrs:{label:"Full Post Metadata",rounded:"",flat:""}},[o("q-popup-proxy",[o("q-card",{attrs:{dense:"",flat:"",bordered:""}},[o("json-viewer",{attrs:{data:t.post,deep:1,title:"Post json_metadata"}})],1)],1)],1)],1)],1),o("q-item",[this.loggedInUser?o("q-btn",{staticClass:"text-center",staticStyle:{margin:"auto"},attrs:{icon:"comment",label:"Reply",push:"",color:"blue-grey-10"}},[o("q-popup-proxy",{attrs:{persistent:""}},[o("commentBox",{attrs:{parent_author:t.post.author,parent_permlink:t.post.permlink}})],1)],1):t._e()],1)],1)],1),o("q-card-section",[t._v("\n          View on "),o("a",{attrs:{href:t.linkHiveBlogPost(t.author,t.permlink)}},[t._v("Hive.blog")]),t._v(", "),o("a",{attrs:{href:t.linkPeakdPost(t.author,t.permlink)}},[t._v("Peakd")]),t._v(", "),o("a",{attrs:{href:t.linkEcencyPost(t.author,t.permlink)}},[t._v("Ecency")])])],1):o("q-card",[o("q-skeleton",{attrs:{type:"rect",height:"200",width:"200"}})],1)],1),t.post&&t.post.children>0?o("comments",{attrs:{author:t.post.author,permlink:t.post.permlink}}):t._e(),t._e()],1)],1)},a=[],r=(o("f559"),o("28a5"),o("aae0")),s=o("6841"),i=o("1b95"),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[t.viewComments?t._e():o("span",{staticClass:"text-center"},[o("q-btn",{attrs:{icon:"forum",color:"blue-grey-6",dense:"",flat:"",label:"View replies"},on:{click:function(e){t.viewComments=!t.viewComments}}})],1),t.viewComments?o("span",[t.loading?o("span",[o("div",[o("q-skeleton",{attrs:{text:""}}),o("q-skeleton",{attrs:{button:""}}),o("q-skeleton",{attrs:{button:""}})],1),t._l(5,(function(t){return o("q-card",{key:t.index,staticStyle:{width:"400px"},attrs:{dense:"",flat:"",bordered:""}},[o("q-card-section",{attrs:{avatar:""}},[o("q-skeleton",{attrs:{circle:"",width:"40",height:"40"}})],1),o("q-card-section",[o("q-skeleton",{attrs:{text:"",width:"100%",height:"20"}})],1),o("q-card-section",[o("q-skeleton",{attrs:{text:""}}),o("q-skeleton",{attrs:{button:""}}),o("q-skeleton",{attrs:{button:""}})],1)],1)}))],2):t._e(),t.loading?t._e():o("q-card",{attrs:{dense:"",flat:"",bordered:""}},[o("q-card-section",{staticClass:"text-h6 text-center"},[o("div",[t._v("\n          "+t._s(Object.keys(this.comments).length-1)+" Replies\n          "),o("q-btn",{staticClass:"hvr",attrs:{icon:"settings",title:"Comment filtering and sorting options",dense:"",flat:""}},[o("q-popup-proxy",[o("q-card",{staticClass:"q-pa-md shadow-4",attrs:{dense:"",bordered:""}},[o("span",{staticClass:"text-caption"},[t._v("Gray "),o("q-checkbox",{model:{value:t.filter.gray,callback:function(e){t.$set(t.filter,"gray",e)},expression:"filter.gray"}}),t._v(" Hidden "),o("q-checkbox",{model:{value:t.filter.hide,callback:function(e){t.$set(t.filter,"hide",e)},expression:"filter.hide"}})],1),o("q-select",{attrs:{options:t.commentSortMethods,label:"Sort",dense:""},model:{value:t.commentSortMethod,callback:function(e){t.commentSortMethod=e},expression:"commentSortMethod"}}),o("q-select",{attrs:{options:t.commentSortDirections,label:"Direction",dense:""},model:{value:t.commentSortDirection,callback:function(e){t.commentSortDirection=e},expression:"commentSortDirection"}})],1)],1)],1),o("q-btn",{staticClass:"hvr",attrs:{icon:"close",color:"red",title:"Hide comments",dense:"",flat:""},on:{click:function(e){t.viewComments=!t.viewComments}}})],1)]),t._l(t.comments,(function(e){return o("span",{key:e.id},[e.parent_permlink===t.permlink&&t.returnFilterStatus(e)?o("q-card",{attrs:{flat:"",bordered:""}},[o("comment",{attrs:{comment:e,comments:t.comments,parentAuthor:t.author,parentPermlink:t.permlink,parentDepth:e.depth}})],1):t._e()],1)}))],2)],1):t._e()])},l=[],u=o("fa84"),m=o.n(u),p=o("967e"),d=o.n(p),h=(o("d25f"),o("456d"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[this.comment.permlink!==this.parentPermlink?o("q-item",{attrs:{flat:"",separator:"",bordered:""}},[o("q-item-section",[o("q-item-label",[o("render",{attrs:{input:this.comment.body}})],1),o("q-item-label",[o("postFooter",{attrs:{post:this.comment}})],1)],1)],1):t._e(),t._l(t.comment.replies,(function(e){return o("q-item",{key:e.index},[o("comment",{attrs:{comment:t.comments[e],comments:t.comments,parentDepth:t.comment.depth}})],1)}))],2)}),v=[],_=(o("0b21"),o("c1df")),f=o.n(_),q={name:"comment",data:function(){return{}},props:["comment","comments","parentAuthor","parentPermlink","parentDepth"],components:{render:r["default"],comment:P,postFooter:function(){return o.e(1).then(o.bind(null,"13fd"))}},computed:{loggedInUser:{get:function(){return this.$store.state.hive.user.username}},defaultVoteWeight:{get:function(){return this.$store.state.hive.user.settings.voteWeightComment}},myVote:function(){return this.comment.active_votes.filter(this.filterMyVote)[0]},voteIcon:function(){return void 0!==this.myVote&&1===Math.sign(this.myVote.rshares)?"favorite":"favorite_border"}},methods:{returnLink:function(t,e){return"/@"+t+"/"+e},linkAccount:function(t){return"/@"+t},filterMyVote:function(t){return t.voter===this.loggedInUser},GetHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},timeDelta:function(t){var e=f.a.utc(),o=f.a.utc(t),n=o.diff(e,"minutes");return f.a.duration(n,"minutes").humanize(!0)}},mounted:function(){}},g=q,b=o("2877"),k=o("66e5"),y=o("4074"),w=o("0170"),x=o("eebe"),C=o.n(x),S=Object(b["a"])(g,h,v,!1,null,null,null),P=S.exports;C()(S,"components",{QItem:k["a"],QItemSection:y["a"],QItemLabel:w["a"]});var D={name:"comments",data:function(){return{comments:[],viewComments:!0,loading:!1,filter:{gray:!0,hide:!0},commentSortMethod:"net_rshares",commentSortMethods:[{label:"Votes (rshares)",value:"net_rshares"},{label:"Age",value:"post_id"},{label:"Author Reputation",value:"author_reputation"},{label:"Replies",value:"children"}],commentSortDirection:"desc",commentSortDirections:[{label:"Ascending",value:"asc"},{label:"Descending",value:"desc"}]}},watch:{viewComments:function(){this.viewComments&&this.getReplies()},commentSortMethod:{deep:!0,handler:"resortComments"},commentSortDirection:{deep:!0,handler:"resortComments"}},props:["author","permlink"],components:{comment:P},computed:{},methods:{resortComments:function(){var t=this.comments;this.comments=this.sortData(this.commentSortMethod.value,t,this.commentSortDirection.value)},returnFilterStatus:function(t){return(!this.filter.gray||!t.stats.gray)&&(!this.filter.hide||!t.stats.hide)},getReplies:function(){var t=this;return m()(d.a.mark((function e(){var o;return d.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,o={author:t.author,permlink:t.permlink},t.loggedInUser&&(o.observer=t.loggedInUser),t.$hive.api.callAsync("bridge.get_discussion",o).then((function(e){t.loading=!1,t.comments=e,t.resortComments()})).catch((function(e){t.loading=!1,console.error(e)}));case 4:case"end":return e.stop()}}),e)})))()},sortData:function(t,e,o){var n={},a=function(o,n){return e[n][t]-e[o][t]};return"asc"===o&&(a=function(o,n){return e[o][t]-e[n][t]}),Object.keys(e).sort(a).forEach((function(t){n[t]=e[t]})),n}},mounted:function(){this.getReplies()}},M=D,U=o("9c40"),I=o("293e"),R=o("f09f"),Q=o("a370"),A=o("7cbe"),$=o("8f8e"),B=o("ddd8"),z=Object(b["a"])(M,c,l,!1,null,null,null),H=z.exports;C()(z,"components",{QBtn:U["a"],QSkeleton:I["a"],QCard:R["a"],QCardSection:Q["a"],QPopupProxy:A["a"],QCheckbox:$["a"],QSelect:B["a"]});var V=o("0be6"),j=o("4975"),E=o("a00c"),F=o("6a43"),O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",[t._l(t.services,(function(e){return o("q-btn",{key:e.index,staticClass:"hvr",attrs:{dense:"",push:"",size:"md",icon:t.returnServiceIcon(e),label:e},on:{click:function(o){return t.share(e)}}})})),o("q-btn",{staticClass:"hvr",attrs:{size:"md","@click":t.copy(),dense:"",push:"",icon:"content_copy",label:"Copy URL"}})],2)},G=[],L=o("cdde"),T={name:"shareButtons",data:function(){return{services:["dbuzz","twitter","facebook","reddit"]}},props:["title"],methods:{returnServiceIcon:function(t){return"img:statics/"+t+".svg"},returnCurrentUrl:function(){return"https://hive.ausbit.dev"+this.$router.currentRoute.path},copy:function(){var t=this.returnCurrentUrl();Object(L["a"])(t),this.$q.notify("Copied to clipboard: "+t)},returnServiceUrl:function(t){var e=this.returnCurrentUrl();switch(t){case"twitter":return'https://twitter.com/intent/tweet?text="'+encodeURI(this.title)+'"&url='+encodeURI(e);case"facebook":return"https://www.facebook.com/sharer/sharer.php?u="+encodeURI(e)+"title=&description=&quote="+encodeURI(this.title)+"&hashtag=";case"dbuzz":return"https://d.buzz/#/intent/buzz?text="+encodeURI(this.title)+"&url="+encodeURI(e)+"&tags=#hive";case"reddit":return'https://www.reddit.com/submit?url="'+encodeURI(e)+'"&title="'+encodeURI(this.title)+'"'}},share:function(t){window.open(this.returnServiceUrl(t),"_blank")}}},W=T,J=Object(b["a"])(W,O,G,!1,null,null,null),N=J.exports;C()(J,"components",{QBtn:U["a"]});var Y=o("5e22"),K=o.n(Y),X=o("e1ce"),Z=o("d34e"),tt={name:"postView",components:{render:r["default"],recentPostsCarousel:i["a"],comments:H,vote:j["default"],jsonViewer:E["default"],tipButton:F["a"],accountHeader:s["default"],commentBox:V["default"],shareButtons:N,reblog:X["default"],votesDialog:Z["default"]},data:function(){return{post:null,author:this.$router.currentRoute.params.author,permlink:this.$router.currentRoute.params.permlink,showVotes:!1,showShareDialog:!1,postBody:null,postDescription:null,showFullPostMetadata:!1,error:null}},watch:{$route:function(t,e){this.init()}},computed:{errorShown:function(){return null!==this.error},globalProps:function(){return this.$store.state.hive.globalProps},account:{get:function(){return this.$store.state.hive.accounts[this.author]}},loggedInUser:{get:function(){return this.$store.state.hive.user.username}},postPastPayout:function(){var t=f.a.utc(),e=f.a.utc(this.post.cashout_time);return t>e},postMeta:function(){return this.post.json_metadata?JSON.parse(this.post.json_metadata):null}},methods:{getPost:function(t,e){var o=this;this.$hive.api.getContentAsync(t,e).then((function(t){o.error=null,o.setPost(t)})).catch((function(t){o.error=t,console.error(t)}))},setPost:function(t){this.post=t,document.title=t.title,t.description&&(this.postDescription=this.Sanitize(t.description))},linkHiveBlogPost:function(t,e){return"https://hive.blog/@"+t+"/"+e},linkPeakdPost:function(t,e){return"https://peakd.com/@"+t+"/"+e+"?ref=ausbitbank"},linkEcencyPost:function(t,e){return"https://ecency.com/@"+t+"/"+e},linkAccount:function(t){return"/@"+t},linkPost:function(t,e){return"/@"+t+"/"+e},linkCommunity:function(t){return"/c/"+t+"/trending"},linkTag:function(t){return"/trending/"+t},linkDetect:function(t){return t.startsWith("hive-")?this.linkCommunity(t):this.linkTag(t)},timeDelta:function(t){var e=f.a.utc(),o=f.a.utc(t),n=o.diff(e,"minutes");return f.a.duration(n,"minutes").humanize(!0)},GetHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},GetEditHistoryUrl:function(t,e){return"https://scribe.hivekings.com/?url=https%3A%2F%2Fhive.blog%2F%40"+t+"%2F"+e},Sanitize:function(t){return K()(t)},init:function(){this.post=null,this.author=this.$router.currentRoute.params.author,this.permlink=this.$router.currentRoute.params.permlink,this.getPost(this.author,this.permlink)},delayedInit:function(){setTimeout(this.init(),6e3)},findDeletedPost:function(t){var e=t.split(" ")[1].split("/")[0],o="/@"+e+"?filter=comment,delete_comment";this.$router.push({path:o})}},mounted:function(){this.init()}},et=tt,ot=(o("43d9"),o("9989")),nt=o("0016"),at=o("1c1c"),rt=o("cb32"),st=o("068f"),it=o("24e8"),ct=Object(b["a"])(et,n,a,!1,null,"5f894e85",null);e["default"]=ct.exports;C()(ct,"components",{QPage:ot["a"],QCard:R["a"],QIcon:nt["a"],QCardSection:Q["a"],QBtn:U["a"],QSkeleton:I["a"],QList:at["a"],QItem:k["a"],QItemSection:y["a"],QAvatar:rt["a"],QImg:st["a"],QDialog:it["a"],QPopupProxy:A["a"]})},de92:function(t,e,o){}}]);