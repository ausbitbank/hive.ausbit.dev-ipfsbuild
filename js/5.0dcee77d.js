(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"9c66":function(t,e,n){},a69a:function(t,e,n){"use strict";var a=n("9c66"),o=n.n(a);o.a},be57:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex flex-center"},[void 0!==t.globalProps&&void 0!==t.account?n("account-header",{staticClass:"full-width",attrs:{globalProps:this.globalProps,account:this.account,showBalances:!1,showNavBar:!1}}):t._e(),null!==t.post?n("div",{staticClass:"row items-start content-start justify-center q-pa-sm",staticStyle:{"max-width":"1000px"}},[n("div",{staticClass:"col-xs-11 col-md-9 col-lg-9 justify-center"},[n("q-card",{staticClass:"q-pa-sm",staticStyle:{margin:"auto"},attrs:{flat:"",bordered:""}},[t.post.title?n("q-card-section",{staticClass:"text-h5 text-center"},[t._v("\n          "+t._s(t.Sanitize(t.post.title))+"\n        ")]):t._e(),""!==t.post.parent_author?n("q-card-section",[t._v("\n          Reply to "),n("router-link",{attrs:{to:t.linkAccount(t.post.parent_author)}},[t._v(t._s(t.post.parent_author))]),t._v(" / "),n("router-link",{attrs:{to:t.linkPost(t.post.parent_author,t.post.parent_permlink)}},[t._v(t._s(t.post.parent_permlink))])],1):t._e(),t.post.body?n("q-card-section",[n("transition",{attrs:{appear:"","enter-active-class":"animated bounceInUp","leave-active-class":"animated bounceOutDown"}},[n("render",{staticClass:"postbody",attrs:{input:t.post.body}})],1)],1):t._e()],1)],1),t.post?n("div",{staticClass:"col-sm-11 col-md-3 col-lg-3 text-center justify-center"},[n("transition",{attrs:{appear:"","enter-active-class":"animated bounceInRight","leave-active-class":"animated bounceOutRight"}},[n("q-card",{staticClass:"q-pa-none q-ma-none",staticStyle:{"min-width":"300px"},attrs:{dense:"",flat:"",bordered:""}},[n("q-card-section",[n("q-list",{attrs:{dense:"",separator:""}},[n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-avatar",[n("q-img",{attrs:{src:t.GetHiveAvatarUrl(t.author)}})],1),t.postMeta.author&&t.postMeta.author!==t.author?n("q-avatar",[n("q-img",{attrs:{src:t.GetHiveAvatarUrl(t.postMeta.author)}})],1):t._e()],1),n("q-item-section",[n("div",[t._v("Posted by "),n("router-link",{attrs:{to:t.linkAccount(t.author)}},[t._v(t._s(t.author))])],1),t.postMeta.author&&t.postMeta.author!==t.author?n("div",[t._v("Authored by "),n("router-link",{attrs:{to:t.linkAccount(t.postMeta.author)}},[t._v(t._s(t.postMeta.author))])],1):t._e()])],1),t.postDescription?n("q-item",[n("q-item-section",[n("span",[t._v(t._s(t.postDescription))])])],1):t._e(),n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"history",color:"blue-grey"}})],1),n("q-item-section",{staticClass:"text-caption text-grey"},[t._v("\n                Posted "+t._s(t.timeDelta(t.post.created))+"\n              ")])],1),t.post.last_update!==t.post.created?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"create",color:"red"}})],1),n("q-item-section",{staticClass:"text-caption text-grey"},[n("a",{attrs:{href:t.GetEditHistoryUrl(t.post.author,t.post.permlink),target:"_blank"}},[t._v("Edited "+t._s(t.timeDelta(t.post.last_update)))])])],1):t._e(),n("q-item",{attrs:{title:"Votes"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{staticClass:"cursor-hand",attrs:{name:"thumbs_up_down",color:"purple",title:"View voter information"},on:{click:function(e){t.showVotes=!0}}})],1),t.loggedInUser&&t.postPastPayout?n("q-item-section",{staticClass:"text-caption"},[n("div",[t._v("This post is past its payout window.")]),n("div",[t._v("You can still vote, but it will not affect rewards.")])]):t._e(),t.loggedInUser?n("q-item-section",[n("vote",{attrs:{author:t.author,permlink:t.permlink,votes:this.post.active_votes},on:{Voted:function(e){return t.init()}}})],1):n("q-item-section",[t._v("\n                Login to vote\n              ")]),n("q-dialog",{model:{value:t.showVotes,callback:function(e){t.showVotes=e},expression:"showVotes"}},[n("votes-dialog",{attrs:{votes:t.post.active_votes}})],1)],1),"0.000 HBD"!==t.post.pending_payout_value||"0.000 HBD"!==t.post.total_payout_value?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"monetization_on",color:"green"}})],1),"0.000 HBD"!==t.post.pending_payout_value?n("q-item-section",{staticClass:"text-caption",attrs:{title:"Pending payout value"}},[t._v("\n                "+t._s(t.post.pending_payout_value.split(" ")[0])+" Hive Rewards\n              ")]):t._e(),"0.000 HBD"!==t.post.pending_payout_value?n("q-item-section",{attrs:{title:"Cashout time"}},[t._v("\n                "+t._s(t.timeDelta(t.post.cashout_time))+"\n              ")]):t._e(),"0.000 HBD"!==t.post.total_payout_value?n("q-item-section",{staticClass:"text-caption",attrs:{title:"Total payout value"}},[t._v("\n                "+t._s(t.post.total_payout_value)+"\n              ")]):t._e()],1):t._e(),"0.000 HBD"===t.post.max_accepted_payout?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"money_off",color:"grey"}})],1),n("q-item-section",{staticClass:"text-caption",attrs:{caption:""}},[t._v("\n                Author declined payout on this post\n              ")])],1):t._e(),0===t.post.percent_hbd?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"offline_bolt",title:"100% Power Up Post",color:"yellow"}})],1),n("q-item-section",{staticClass:"text-caption",attrs:{caption:""}},[t._v("\n                Rewards 100% powered up\n              ")])],1):t._e(),parseInt(t.post.max_accepted_payout.split(" ")[0])<100?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"money_off",title:"Rewards capped",color:"yellow"}})],1),n("q-item-section",{staticClass:"text-caption",attrs:{caption:""}},[t._v("\n                Author rewards capped at "+t._s(t.post.max_accepted_payout)+"\n              ")])],1):t._e(),t.post.beneficiaries.length>0?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"alt_route",title:"Sharing payout with",color:"purple"}})],1),t._l(t.post.beneficiaries,(function(e){return n("q-item-section",{key:e.index},[n("router-link",{attrs:{to:t.linkAccount(e.account)}},[t._v(t._s(e.account))]),t._v(t._s(e.weight/100)+" %\n              ")],1)}))],2):t._e(),t.post.community&&t.post.community_title?n("q-item",{attrs:{title:"Community"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"label_important",color:"amber"}})],1),n("q-item-section",{staticClass:"text-caption text-grey"},[t._v("\n                "+t._s(t.post.community_title)+" Community\n              ")])],1):t.post.category?n("q-item",{attrs:{title:"Category"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"label_important",color:"orange"}})],1),n("q-item-section",{staticClass:"text-caption text-grey"},[n("router-link",{attrs:{to:t.linkDetect(t.post.category)}},[t._v(t._s(t.post.category))])],1)],1):t._e(),t.postMeta&&t.postMeta.tags&&t.postMeta.tags.length>0?n("q-item",{attrs:{title:"Tags"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"label",color:"primary"}})],1),n("q-item-section",{staticClass:"text-caption text-grey"},t._l(t.postMeta.tags,(function(e){return n("router-link",{key:e.index,attrs:{to:t.linkTag(e)}},[t._v(t._s(e))])})),1)],1):t._e(),t.postMeta&&t.postMeta.app?n("q-item",{attrs:{title:"App"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"fingerprint",color:"brown"}})],1),n("q-item-section",[t._v("\n                "+t._s(t.postMeta.app)+"\n              ")])],1):t._e(),t.postMeta&&t.postMeta.countdown?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"alarm_on",color:"gray"}})],1),n("q-item-section",[t._v("\n                Countdown to "+t._s(t.postMeta.countdown)),n("br"),t._v("\n                ( "+t._s(t.timeDelta(t.postMeta.countdown))+" )\n              ")])],1):t._e(),n("q-item",[n("tip-button",{staticStyle:{width:"100%"},attrs:{account:t.post.author}})],1),t.loggedInUser?n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"share",color:"secondary"}})],1),n("q-item-section",[n("reblog",{attrs:{author:t.post.author,permlink:t.post.permlink}})],1)],1):t._e(),n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"share",color:"orange"}})],1),n("q-item-section",[n("q-btn",{attrs:{rounded:"",flat:""},on:{click:function(e){t.showShareDialog=!t.showShareDialog}}},[t._v("\n                  Share this post:\n                ")]),t.showShareDialog?n("shareButtons",{attrs:{title:t.post.title}}):t._e()],1)],1),n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"code",color:"blue"}})],1),n("q-item-section",[n("q-btn",{attrs:{label:"Full Post Metadata",rounded:"",flat:""},on:{click:function(e){t.showFullPostMetadata=!t.showFullPostMetadata}}}),n("q-dialog",{model:{value:t.showFullPostMetadata,callback:function(e){t.showFullPostMetadata=e},expression:"showFullPostMetadata"}},[n("div",{staticClass:"bg-dark"},[n("json-viewer",{attrs:{data:t.post,deep:1,title:"Post json_metadata"}})],1)])],1)],1),n("q-item",[this.loggedInUser?n("q-btn",{staticClass:"text-center",staticStyle:{margin:"auto"},attrs:{icon:"comment",label:"Reply",push:"",color:"blue-grey-10"}},[n("q-popup-proxy",{attrs:{persistent:""}},[n("commentBox",{attrs:{parent_author:t.post.author,parent_permlink:t.post.permlink}})],1)],1):t._e()],1)],1)],1),n("q-card-section",[t._v("\n          View on "),n("a",{attrs:{href:t.linkHiveBlogPost(t.author,t.permlink)}},[t._v("Hive.blog")]),t._v(", "),n("a",{attrs:{href:t.linkPeakdPost(t.author,t.permlink)}},[t._v("Peakd")]),t._v(", "),n("a",{attrs:{href:t.linkEcencyPost(t.author,t.permlink)}},[t._v("Ecency")])])],1)],1)],1):t._e(),n("div",{staticClass:"q-md-md",staticStyle:{margin:"auto"}},[t.post.children>0?n("comments",{attrs:{author:t.post.author,permlink:t.post.permlink}}):t._e()],1),n("transition",{attrs:{appear:"","enter-active-class":"animated bounceInDown","leave-active-class":"animated bounceOutDown"}},[n("recent-posts-carousel",{attrs:{account:t.author,autoplay:!0}})],1)],1):t._e()],1)},o=[],s=(n("f559"),n("aae0")),r=n("6841"),i=n("1b95"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t.viewComments?t._e():n("span",{staticClass:"text-center"},[n("q-btn",{attrs:{icon:"forum",color:"blue-grey-6",dense:"",push:"",label:"View replies"},on:{click:function(e){t.viewComments=!t.viewComments}}})],1),t.viewComments?n("span",[t.loading?t._e():n("q-card",{attrs:{dense:"",flat:"",bordered:""}},[n("q-card-section",{staticClass:"text-h6 text-center"},[t._v("\n        "+t._s(Object.keys(this.comments).length-1)+" Replies\n        "),n("div",[n("q-btn",{staticClass:"hvr",attrs:{icon:"settings",title:"Comment filtering and sorting options",dense:"",glossy:"",rounded:"",push:""}},[n("q-popup-proxy",[n("q-card",{staticClass:"q-pa-md shadow-4",attrs:{bordered:""}},[n("span",{staticClass:"text-caption"},[t._v("Gray "),n("q-checkbox",{model:{value:t.filter.gray,callback:function(e){t.$set(t.filter,"gray",e)},expression:"filter.gray"}}),t._v(" Hidden "),n("q-checkbox",{model:{value:t.filter.hide,callback:function(e){t.$set(t.filter,"hide",e)},expression:"filter.hide"}})],1),n("q-select",{attrs:{options:t.commentSortMethods,label:"Sort",dense:""},model:{value:t.commentSortMethod,callback:function(e){t.commentSortMethod=e},expression:"commentSortMethod"}}),n("q-select",{attrs:{options:t.commentSortDirections,label:"Direction",dense:""},model:{value:t.commentSortDirection,callback:function(e){t.commentSortDirection=e},expression:"commentSortDirection"}})],1)],1)],1)],1)]),t._l(t.comments,(function(e){return n("q-card",{key:e.url,staticClass:"text-justify",attrs:{flat:"",bordered:""}},[e.parent_permlink===t.permlink&&t.returnFilterStatus(e)?n("comment",{attrs:{comment:e,comments:t.comments,parentAuthor:t.author,parentPermlink:t.permlink,parentDepth:e.depth}}):t._e()],1)}))],2)],1):t._e()])},l=[],u=(n("ac6a"),n("cadf"),n("06db"),n("456d"),n("967e")),m=n.n(u),p=(n("96cf"),n("fa84")),h=n.n(p),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.comment.permlink!==this.parentPermlink?n("q-card-section",[n("q-list",{attrs:{bordered:"",separator:""}},[n("q-item",[n("q-item-section",{attrs:{avatar:""}},[n("center",[n("router-link",{attrs:{to:t.linkAccount(this.comment.author)}},[n("q-avatar",[n("q-img",{attrs:{src:t.GetHiveAvatarUrl(this.comment.author)}})],1),n("div",{staticClass:"text-bold"},[t._v("\n            "+t._s(this.comment.author)+"\n          ")])],1)],1)],1),n("q-item-section",[n("render",{attrs:{input:this.comment.body}})],1),n("q-item-section",{staticClass:"text-grey text-center text-subtitle",attrs:{side:""}},[n("router-link",{attrs:{to:t.returnLink(this.comment.author,this.comment.permlink)}},[t._v(t._s(t.timeDelta(this.comment.created)))]),this.loggedInUser?n("q-btn",{attrs:{icon:"comment",dense:"",flat:""}},[n("q-popup-proxy",{attrs:{persistent:""}},[n("commentBox",{attrs:{parent_author:this.comment.author,parent_permlink:this.comment.permlink}})],1)],1):t._e(),n("vote",{attrs:{votes:t.comment.active_votes,author:t.comment.author,permlink:t.comment.permlink}})],1)],1)],1),t._l(t.comment.replies,(function(e){return n("span",{key:e.index},[n("comment",{attrs:{comment:t.comments[e],comments:t.comments,parentDepth:t.comment.depth}})],1)}))],2):t._e()},v=[],_=(n("0b21"),n("0be6")),f=n("4975"),g=n("c1df"),b=n.n(g),q={name:"comment",data:function(){return{}},props:["comment","comments","parentAuthor","parentPermlink","parentDepth"],components:{render:s["default"],comment:R,commentBox:_["default"],vote:f["default"]},computed:{loggedInUser:{get:function(){return this.$store.state.hive.user.username}},defaultVoteWeight:{get:function(){return this.$store.state.hive.user.settings.voteWeightComment}},myVote:function(){return this.comment.active_votes.filter(this.filterMyVote)[0]},voteIcon:function(){return void 0!==this.myVote&&1===Math.sign(this.myVote.rshares)?"favorite":"favorite_border"}},methods:{returnLink:function(t,e){return"/@"+t+"/"+e},linkAccount:function(t){return"/@"+t},filterMyVote:function(t){return t.voter===this.loggedInUser},GetHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},timeDelta:function(t){var e=b.a.utc(),n=b.a.utc(t),a=n.diff(e,"minutes");return b.a.duration(a,"minutes").humanize(!0)}},mounted:function(){}},y=q,k=n("2877"),w=n("a370"),x=n("1c1c"),C=n("66e5"),D=n("4074"),P=n("cb32"),S=n("068f"),M=n("9c40"),U=n("7cbe"),I=n("eebe"),A=n.n(I),Q=Object(k["a"])(y,d,v,!1,null,null,null),R=Q.exports;A()(Q,"components",{QCardSection:w["a"],QList:x["a"],QItem:C["a"],QItemSection:D["a"],QAvatar:P["a"],QImg:S["a"],QBtn:M["a"],QPopupProxy:U["a"]});var B={name:"comments",data:function(){return{comments:[],viewComments:!0,loading:!1,filter:{gray:!0,hide:!0},commentSortMethod:"net_rshares",commentSortMethods:[{label:"Votes (rshares)",value:"net_rshares"},{label:"Age",value:"post_id"},{label:"Author Reputation",value:"author_reputation"},{label:"Replies",value:"children"}],commentSortDirection:"desc",commentSortDirections:[{label:"Ascending",value:"asc"},{label:"Descending",value:"desc"}]}},watch:{viewComments:function(){this.viewComments&&this.getReplies()},commentSortMethod:{deep:!0,handler:"resortComments"},commentSortDirection:{deep:!0,handler:"resortComments"}},props:["author","permlink"],components:{comment:R},computed:{},methods:{resortComments:function(){var t=this.comments;this.comments=null,this.comments=this.sortData(this.commentSortMethod.value,t,this.commentSortDirection.value)},returnFilterStatus:function(t){return(!this.filter.gray||!t.stats.gray)&&(!this.filter.hide||!t.stats.hide)},getReplies:function(){var t=this;return h()(m.a.mark((function e(){var n;return m.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,n={author:t.author,permlink:t.permlink},t.loggedInUser&&(n.observer=t.loggedInUser),t.$hive.api.callAsync("bridge.get_discussion",n).then((function(e){t.loading=!1,t.comments=e,t.comments=t.sortData(t.commentSortMethod.value,t.comments,t.commentSortDirection.value)})).catch((function(e){t.loading=!1,console.error(e)}));case 4:case"end":return e.stop()}}),e)})))()},sortData:function(t,e,n){var a={},o=function(n,a){return e[a][t]-e[n][t]};return"asc"===n&&(o=function(n,a){return e[n][t]-e[a][t]}),Object.keys(e).sort(o).forEach((function(t){a[t]=e[t]})),a}},mounted:function(){this.getReplies()}},H=B,O=n("f09f"),V=n("8f8e"),$=n("ddd8"),j=Object(k["a"])(H,c,l,!1,null,null,null),z=j.exports;A()(j,"components",{QBtn:M["a"],QCard:O["a"],QCardSection:w["a"],QPopupProxy:U["a"],QCheckbox:V["a"],QSelect:$["a"]});var F=n("a00c"),E=n("6a43"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._l(t.services,(function(e){return n("q-btn",{key:e.index,staticClass:"hvr",attrs:{dense:"",push:"",size:"md",icon:t.returnServiceIcon(e),label:e},on:{click:function(n){return t.share(e)}}})})),n("q-btn",{staticClass:"hvr",attrs:{size:"md","@click":t.copy(),dense:"",push:"",icon:"content_copy",label:"Copy URL"}})],2)},G=[],L=n("cdde"),J={name:"shareButtons",data:function(){return{services:["dbuzz","twitter","facebook","reddit"]}},props:["title"],methods:{returnServiceIcon:function(t){return"img:statics/"+t+".svg"},returnCurrentUrl:function(){return"https://hive.ausbit.dev"+this.$router.currentRoute.path},copy:function(){var t=this.returnCurrentUrl();Object(L["a"])(t),this.$q.notify("Copied to clipboard: "+t)},returnServiceUrl:function(t){var e=this.returnCurrentUrl();switch(t){case"twitter":return'https://twitter.com/intent/tweet?text="'+encodeURI(this.title)+'"&url='+encodeURI(e);case"facebook":return"https://www.facebook.com/sharer/sharer.php?u="+encodeURI(e)+"title=&description=&quote="+encodeURI(this.title)+"&hashtag=";case"dbuzz":return"https://d.buzz/#/intent/buzz?text="+encodeURI(this.title)+"&url="+encodeURI(e)+"&tags=#hive";case"reddit":return'https://www.reddit.com/submit?url="'+encodeURI(e)+'"&title="'+encodeURI(this.title)+'"'}},share:function(t){window.open(this.returnServiceUrl(t),"_blank")}}},W=J,N=Object(k["a"])(W,T,G,!1,null,null,null),Y=N.exports;A()(N,"components",{QBtn:M["a"]});var K=n("5e22"),X=n.n(K),Z=n("e1ce"),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-card",{staticStyle:{"max-width":"95%"},attrs:{flat:"",bordered:""}},[n("q-card-section",{staticClass:"text-center text-h5",attrs:{header:""}},[t._v("\n        Votes on this post : "+t._s(t.upvotesOnly.length)+" upvotes"),t.downvotesOnly.length>0?n("span",[t._v(", "+t._s(t.downvotesOnly.length)+" down")]):t._e(),n("br")]),n("q-tabs",{attrs:{dense:"","inline-label":""},model:{value:t.view,callback:function(e){t.view=e},expression:"view"}},[n("q-tab",{staticClass:"text-primary",attrs:{name:"influencers",icon:"analytics",label:"Influencers"}}),n("q-tab",{staticClass:"text-primary",attrs:{name:"table",icon:"table_view",label:"Full vote data table"}})],1),"table"===t.view?n("q-table",{attrs:{data:t.votes,columns:t.voteColumns,pagination:{sortBy:"weight",descending:!0,rowsPerPage:25},dense:"",bordered:"",separator:"cell"}}):t._e(),"influencers"===t.view?n("q-card-section",{staticClass:"text-center"},[n("div",{staticClass:"text-h5"},[t._v("The "+t._s(t.biggestUpvotes.length)+" largest upvotes came from")]),t._l(t.biggestUpvotes,(function(e){return n("span",{key:e.voter,staticClass:"q-ma-sm"},[n("router-link",{attrs:{to:t.linkAccount(e.voter)}},[n("q-avatar",[n("q-img",{attrs:{src:t.getHiveAvatarUrl(e.voter),title:e.voter}})],1),t._v("\n            "+t._s(e.voter)+"\n            ")],1)],1)})),t.downvotesOnly.length>0?n("span",[n("div",{staticClass:"text-h5"},[t._v("The "+t._s(t.biggestDownvotes.length)+" largest downvotes came from")]),t._l(t.biggestDownvotes,(function(e){return n("span",{key:e.voter,staticClass:"q-ma-sm"},[n("router-link",{attrs:{to:t.linkAccount(e.voter)}},[n("q-avatar",[n("q-img",{attrs:{src:t.getHiveAvatarUrl(e.voter),title:e.voter}})],1),t._v("\n                "+t._s(e.voter)+"\n                ")],1)],1)}))],2):t._e()],2):t._e()],1)},et=[],nt={name:"votesDialog",components:{},data:function(){return{view:"influencers",viewOptions:["table","influencers"],voteColumns:[{name:"voter",label:"Voter",field:"voter",sortable:!0},{name:"percent",label:"Percent",field:"percent",sortable:!0,format:function(t,e){return"".concat(t/100," %")}},{name:"rshares",label:"rshares",field:"rshares",sortable:!0},{name:"weight",label:"weight",field:"weight",sortable:!0},{name:"reputation",label:"reputation",field:"reputation",sortable:!0},{name:"time",label:"time",field:"time",sortable:!0}]}},props:{votes:{type:Array,required:!0}},computed:{upvotesOnly:function(){return this.votes.filter((function(t){return 1===Math.sign(t.rshares)}))},downvotesOnly:function(){return this.votes.filter((function(t){return-1===Math.sign(t.rshares)}))},biggestUpvotes:function(){var t=this.upvotesOnly;return t.sort(this.sortByRshares),t.length>10?t.slice(0,10):t},biggestDownvotes:function(){if(this.downvotesOnly.length>0){var t=this.downvotesOnly;return t.sort(this.sortByRshares),t.length>10?t.slice(t.length-10,t.length-1):t}return[]}},methods:{sortByRshares:function(t,e){return parseFloat(t.rshares)<parseFloat(e.rshares)?1:-1},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},linkAccount:function(t){return"/@"+t}},mounted:function(){}},at=nt,ot=n("429bb"),st=n("7460"),rt=n("eaac"),it=Object(k["a"])(at,tt,et,!1,null,null,null),ct=it.exports;A()(it,"components",{QCard:O["a"],QCardSection:w["a"],QTabs:ot["a"],QTab:st["a"],QTable:rt["a"],QAvatar:P["a"],QImg:S["a"]});var lt={name:"postView",components:{render:s["default"],recentPostsCarousel:i["a"],comments:z,vote:f["default"],jsonViewer:F["a"],tipButton:E["a"],accountHeader:r["default"],commentBox:_["default"],shareButtons:Y,reblog:Z["default"],votesDialog:ct},data:function(){return{post:null,author:this.$router.currentRoute.params.author,permlink:this.$router.currentRoute.params.permlink,showVotes:!1,showShareDialog:!1,postBody:null,postDescription:null,showFullPostMetadata:!1}},watch:{$route:function(t,e){this.init()}},computed:{account:{get:function(){return this.$store.state.hive.accounts[this.author]}},loggedInUser:{get:function(){return this.$store.state.hive.user.username}},postPastPayout:function(){var t=b.a.utc(),e=b.a.utc(this.post.cashout_time);return t>e},postMeta:function(){return this.post.json_metadata?JSON.parse(this.post.json_metadata):null}},methods:{getPost:function(t,e){var n=this;this.$hive.api.getContentAsync(t,e).then((function(t){return n.setPost(t)})).catch((function(t){return console.log(t)}))},setPost:function(t){this.post=t,document.title=t.title,t.description&&(this.postDescription=this.Sanitize(t.description))},linkHiveBlogPost:function(t,e){return"https://hive.blog/@"+t+"/"+e},linkPeakdPost:function(t,e){return"https://peakd.com/@"+t+"/"+e+"?ref=ausbitbank"},linkEcencyPost:function(t,e){return"https://ecency.com/@"+t+"/"+e},linkAccount:function(t){return"/@"+t},linkPost:function(t,e){return"/@"+t+"/"+e},linkCommunity:function(t){return"/c/"+t+"/trending"},linkTag:function(t){return"/trending/"+t},linkDetect:function(t){return t.startsWith("hive-")?this.linkCommunity(t):this.linkTag(t)},timeDelta:function(t){var e=b.a.utc(),n=b.a.utc(t),a=n.diff(e,"minutes");return b.a.duration(a,"minutes").humanize(!0)},GetHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},GetEditHistoryUrl:function(t,e){return"https://scribe.hivekings.com/?url=https%3A%2F%2Fhive.blog%2F%40"+t+"%2F"+e},Sanitize:function(t){return X()(t)},init:function(){this.post=null,this.author=this.$router.currentRoute.params.author,this.permlink=this.$router.currentRoute.params.permlink,this.getPost(this.author,this.permlink)},delayedInit:function(){setTimeout(this.init(),6e3)}},mounted:function(){this.init()}},ut=lt,mt=(n("a69a"),n("9989")),pt=n("0016"),ht=n("24e8"),dt=Object(k["a"])(ut,a,o,!1,null,"42a29770",null);e["default"]=dt.exports;A()(dt,"components",{QPage:mt["a"],QCard:O["a"],QCardSection:w["a"],QList:x["a"],QItem:C["a"],QItemSection:D["a"],QAvatar:P["a"],QImg:S["a"],QIcon:pt["a"],QDialog:ht["a"],QBtn:M["a"],QPopupProxy:U["a"]})}}]);