(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"73b7":function(t,e,a){"use strict";var r=a("ebcf"),n=a.n(r);n.a},d23e:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex"},[a("q-dialog",{attrs:{persistent:""},model:{value:t.error,callback:function(e){t.error=e},expression:"error"}},[a("q-icon",{attrs:{size:"lg",name:"error",color:"yellow"}}),a("br"),t._v("\n    "+t._s(t.errorMessage)+"\n  ")],1),null===t.account||void 0===t.account||null===t.globalProps||t.error?t._e():a("div",{staticClass:"fit row wrap justify-center items-start content-start"},[null!==t.globalProps&&null!==t.account?a("account-header",{attrs:{globalProps:t.globalProps,account:t.account,showBalances:!0}}):t._e(),a("div",{staticClass:"col-xs-12 col-sm-12 col-md-4",staticStyle:{"max-width":"500px"}},[a("q-card",{staticClass:"text-center q-pa-sm q-ma-md",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-subtitle"},[t._v("Vote Weight")]),a("div",{staticClass:"text-h6"},[t._v(t._s(t.effectiveHPTidy)+" HP")]),a("div",{staticClass:"text-caption text-grey"},[t._v("\n                  "+t._s(t.vestToHive(parseInt(t.account.vesting_shares.split(" ")[0])))+" + "+t._s(t.vestToHive(parseInt(t.account.received_vesting_shares.split(" ")[0])))+" - "+t._s(t.vestToHive(parseInt(t.account.delegated_vesting_shares.split(" ")[0])))+"\n              ")]),0!==parseInt(t.account.vesting_withdraw_rate.split(" ")[0])?a("div",[a("div",[t._v("Next powerdown: "+t._s(t.tidyNumber(t.vestToHive(parseInt(t.account.vesting_withdraw_rate.split(" ")[0]))))+" HIVE")]),a("div",{staticClass:"text-caption color-grey"},[t._v(t._s(t.timeDelta(t.account.next_vesting_withdrawal)))])]):t._e(),a("div",{staticClass:"text-bold"},[t._v("\n                  Voting Power\n              ")]),a("div",[a("q-linear-progress",{staticClass:"q-mt-sm",attrs:{dark:"",stripe:"",rounded:"",size:"20px",value:t.votePower/100,color:"blue"}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"black","text-color":"primary",label:t.votePower}})],1)])],1),a("div",{staticClass:"text-bold"},[t._v("\n                  Downvote Power\n              ")]),a("div",[a("q-linear-progress",{staticClass:"q-mt-sm",attrs:{dark:"",stripe:"",rounded:"",size:"20px",value:this.downvotePowerPct/100,color:"red"}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"black","text-color":"primary",label:this.downvotePowerPct}})],1)])],1),a("div",{staticClass:"text-bold"},[t._v("\n                  Resource Credits\n              ")]),a("div",[a("rc",{attrs:{username:t.account.name}})],1)]),a("q-card-section",[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",[t._v("\n                        Reputation\n                  ")]),a("div",{staticClass:"text-h5"},[t._v("\n                        "+t._s(t.getReputation(t.account.reputation))+"\n                    ")]),a("div",{staticClass:"text-caption text-grey"},[t._v("\n                        "+t._s(t.account.post_count)+" posts\n                    ")])]),a("div",{staticClass:"col"},[a("div",[t._v("\n                        Created\n                    ")]),a("div",{staticClass:"text-h5"},[t._v("\n                        "+t._s(t.accountAge)+"\n                    ")]),a("div",{staticClass:"text-caption text-grey"},[t._v("\n                        "+t._s(t.accountAgeShort)+"\n                    ")])])]),a("div",[t._v("\n                View "),a("router-link",{attrs:{to:t.linkBlog(t.username)}},[t._v("Blog")]),t._v(" , "),a("router-link",{attrs:{to:t.linkPosts(t.username)}},[t._v("Posts")]),t._v(", "),a("router-link",{attrs:{to:t.linkComments(t.username)}},[t._v("Comments")]),t._v(", "),a("router-link",{attrs:{to:t.linkReplies(t.username)}},[t._v("Replies")])],1),a("div",[t._v("\n                View in : "),a("a",{attrs:{href:t.linkHiveBlog(t.username)}},[t._v("hive.blog")]),t._v(" , "),a("a",{attrs:{href:t.linkPeakd(t.username)}},[t._v("peakd")])])])],1),t.account.post_count>0?a("recent-posts-carousel",{attrs:{account:t.username,type:"posts"}}):t._e(),a("q-card",{staticClass:"q-pa-sm q-ma-md",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("props-list",{attrs:{obj:t.account,ignoreKeys:["owner","active","posting","memo_key","json_metadata","posting_json_metadata","voting_manabar","downvote_manabar","witness_votes"]}})],1)],1),t.account.json_metadata?a("q-card",{staticClass:"q-pa-sm q-ma-md",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("JSON Metadata")]),a("json-viewer",{attrs:{data:JSON.parse(t.account.json_metadata)}})],1)],1):t._e(),t.account.posting_json_metadata?a("q-card",{staticClass:"q-pa-sm q-ma-md",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6",attrs:{id:"posting_meta"}},[t._v("Posting JSON Metadata")]),a("q-btn",{attrs:{icon:"edit",label:"Edit Posting JSON Metadata",color:"primary",dense:"",push:""},on:{click:function(e){t.editPostingJson=!t.editPostingJson}}}),!1===t.editPostingJson?a("json-viewer",{attrs:{data:JSON.parse(t.account.posting_json_metadata)}}):t._e(),t.editPostingJson?a("props-editor",{attrs:{json:t.account.posting_json_metadata,username:t.username,type:"postingMeta"}}):t._e()],1)],1):t._e(),a("q-card",{staticClass:"q-pa-sm q-ma-md",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h5 text-center"},[t._v("Authorities")])]),t.witness?a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Signing")]),a("q-list",{attrs:{bordered:"",seperator:"",dense:""}},[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"lock"}})],1),a("q-item-section",{staticClass:"wrap"},[t._v("\n                          "+t._s(t.witness.signing_key)+"\n                      ")]),a("q-item-section",{attrs:{side:""}},[t._v("\n                        1\n                    ")])],1)],1)],1):t._e(),a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Owner")]),a("q-list",{attrs:{bordered:"",seperator:"",dense:""}},[t._l(t.account.owner.key_auths,(function(e){return a("q-item",{key:e.index},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"lock"}})],1),a("q-item-section",{staticClass:"wrap"},[t._v("\n                        "+t._s(e[0])+"\n                    ")]),a("q-item-section",{attrs:{side:""}},[t._v("\n                        "+t._s(e[1])+"\n                    ")])],1)})),t._l(t.account.owner.account_auths,(function(e){return a("q-item",{key:e.index},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"person"}})],1),a("q-item-section",[a("router-link",{attrs:{to:t.accountLink(e[0])}},[t._v(t._s(e[0]))])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n                        "+t._s(e[1])+"\n                    ")])],1)}))],2)],1),a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Active")]),a("q-list",{staticClass:"wrap",attrs:{bordered:"",seperator:"",dense:""}},[t._l(t.account.active.key_auths,(function(e){return a("q-item",{key:e.index},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"lock"}})],1),a("q-item-section",{staticClass:"wrap"},[t._v("\n                        "+t._s(e[0])+"\n                    ")]),a("q-item-section",{attrs:{side:""}},[t._v("\n                        "+t._s(e[1])+"\n                    ")])],1)})),t._l(t.account.active.account_auths,(function(e){return a("q-item",{key:e.index},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"person"}})],1),a("q-item-section",[a("router-link",{attrs:{to:t.accountLink(e[0])}},[t._v(t._s(e[0]))])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n                        "+t._s(e[1])+"\n                    ")])],1)}))],2)],1),a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Posting")]),a("q-list",{attrs:{bordered:"",seperator:"",dense:""}},[t._l(t.account.posting.key_auths,(function(e){return a("q-item",{key:e.index},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"lock"}})],1),a("q-item-section",{staticClass:"wrap"},[t._v("\n                        "+t._s(e[0])+"\n                    ")]),a("q-item-section",{attrs:{side:""}},[t._v("\n                        "+t._s(e[1])+"\n                    ")])],1)})),t._l(t.account.posting.account_auths,(function(e){return a("q-item",{key:e.index},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"person"}})],1),a("q-item-section",[a("router-link",{attrs:{to:t.accountLink(e[0])}},[t._v(t._s(e[0]))])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n                        "+t._s(e[1])+"\n                    ")])],1)}))],2)],1),a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Memo")]),a("q-list",{attrs:{bordered:"",seperator:"",dense:""}},[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"lock"}})],1),a("q-item-section",{staticClass:"wrap"},[t._v("\n                        "+t._s(t.account.memo_key)+"\n                    ")]),a("q-item-section",{attrs:{side:""}},[t._v("\n                        1\n                    ")])],1)],1)],1)],1),t.witness?a("q-card",{staticClass:"q-pa-sm q-ma-md",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("\n                  Witness\n              ")]),a("props-list",{attrs:{obj:t.witness,ignoreKeys:[]}})],1)],1):t._e(),t.account.witness_votes.length>0?a("q-card",{staticClass:"q-pa-sm q-ma-md text-center",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("@"+t._s(t.username)+" votes for :")]),a("ol",t._l(t.account.witness_votes,(function(e){return a("li",{key:e.index},[a("router-link",{attrs:{to:t.accountLink(e)}},[t._v(t._s(e))])],1)})),0)])],1):t._e()],1),a("div",{staticClass:"col-xs-12 col-sm-12 col-md-8 q-pa-md",staticStyle:{"max-width":"1000px"}},[a("account-operations",{attrs:{accountOperations:t.accountOperations}}),a("q-card",{staticClass:"text-center"},[a("q-card-section",[t.page>2?a("q-btn",{attrs:{icon:"keyboard_backspace",color:"primary",dense:"",push:""},on:{click:function(e){t.page=1,t.accountOperations=[],t.$router.push({path:"@"+t.username,query:{page:t.page}}),t.page=t.getAccountHistory(t.username)}}}):t._e(),t.page>1?a("q-btn",{attrs:{icon:"keyboard_arrow_left",color:"primary",dense:"",push:""},on:{click:function(e){t.page=parseInt(t.page)-1,t.accountOperations=[],t.$router.push({path:"@"+t.username,query:{page:t.page}}),t.page=t.getAccountHistory(t.username)}}}):t._e(),t._v("\n              Page "+t._s(this.page)+" "),t.accountOperations.length<1?a("q-spinner-grid",{attrs:{size:"2em",color:"primary"}}):t._e(),t.page!==(t.accountOperationsMarker/t.accountOperationsLimit+1).toFixed(0)?a("q-btn",{attrs:{icon:"keyboard_arrow_right",color:"primary",dense:"",push:""},on:{click:function(e){t.page=parseInt(t.page)+1,t.accountOperations=[],t.$router.push({path:"@"+t.username,query:{page:t.page}}),t.getAccountHistory(t.username)}}}):t._e(),t.page!==(t.accountOperationsMarker/t.accountOperationsLimit+1).toFixed(0)?a("q-btn",{attrs:{icon:"keyboard_tab",color:"primary",dense:"",push:""},on:{click:function(e){t.page=(t.accountOperationsMarker/t.accountOperationsLimit+1).toFixed(0),t.accountOperations=[],t.$router.push({path:"@"+t.username,query:{page:t.page}}),t.getAccountHistory(t.username)}}}):t._e()],1)],1)],1)],1)],1)},n=[],s=(a("7f7f"),a("a481"),a("6b54"),a("06db"),a("28a5"),a("c1df")),o=a.n(s),i=a("1c16"),c=a("a00c"),u=a("1b95"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",t._l(Object.entries(this.obj),(function(e){return a("span",{key:e.index},[t.ignoreKeys.includes(e[0])?t._e():a("q-list",{attrs:{bordered:"",separator:"",dense:""}},[a("q-item",[a("q-item-section",{staticClass:"text-bold",attrs:{side:""}},[t._v("\n            "+t._s(e[0])+"\n        ")]),a("q-item-section",{staticClass:"text-right wrap"},[t._v("\n            "+t._s(e[1])+"\n        ")])],1)],1)],1)})),0)},d=[],p={name:"propsList",props:["obj","ignoreKeys"],data:function(){return{}}},v=p,m=a("2877"),_=a("1c1c"),g=a("66e5"),h=a("4074"),f=a("eebe"),q=a.n(f),b=Object(m["a"])(v,l,d,!1,null,null,null),k=b.exports;q()(b,"components",{QList:_["a"],QItem:g["a"],QItemSection:h["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-input",{staticStyle:{height:"100%"},attrs:{outlined:"",type:"textarea",label:"Edit your metadata directly here or use the tags below"},model:{value:t.newjson,callback:function(e){t.newjson=e},expression:"newjson"}}),t.newjson===t.json||t.edited?t._e():a("q-btn",{attrs:{label:"Submit changes",color:"orange",icon:"warning"},on:{click:function(e){return t.submitChanges()}}}),t.edited?a("div",{staticClass:"text-caption"},[t._v("\n        Your posting JSON metadata has been edited. Refresh the page in a moment to see the changes\n    ")]):t._e(),""!==t.log?a("div",[t.error?t._e():a("q-icon",{attrs:{name:"info",color:"primary"}}),t.error?a("q-icon",{attrs:{name:"error",color:"red"}}):t._e(),t._v(" "+t._s(t.log))],1):t._e(),a("div",[t._v("\n        Commonly Supported Props:\n        "),t._l(t.commonTags,(function(e){return a("q-chip",{key:e.index,attrs:{outline:"",dense:"",clickable:"",color:"grey",selected:t.doesKeyExist(e),removable:t.doesKeyExist(e)},on:{remove:function(a){return t.removeKey(e)},click:function(a){return t.showKeyPrompt(e)}}},[t._v(t._s(e))])}))],2),a("div",[t._v("\n        Extra Props recognised by this site:\n        "),t._l(t.myTags,(function(e){return a("q-chip",{key:e.index,attrs:{outline:"",dense:"",clickable:"",color:"grey",selected:t.doesKeyExist(e),removable:t.doesKeyExist(e)},on:{remove:function(a){return t.removeKey(e)},click:function(a){return t.showKeyPrompt(e)}}},[t._v(t._s(e))])}))],2),a("json-viewer",{attrs:{data:JSON.parse(t.newjson)}}),a("q-dialog",{attrs:{persistent:""},model:{value:t.keyDialog,callback:function(e){t.keyDialog=e},expression:"keyDialog"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Edit "+t._s(t.keyDialogCurrentKey))])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{attrs:{dense:"",outlined:"",autofocus:"",type:"textarea"},model:{value:t.keyDialogCurrentData,callback:function(e){t.keyDialogCurrentData=e},expression:"keyDialogCurrentData"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Ok"},on:{click:function(e){return t.addKey(t.keyDialogCurrentKey,t.keyDialogCurrentData)}}})],1)],1)],1)],1)},w=[],x={name:"propsEditor",props:["json","username","type"],components:{jsonViewer:c["a"]},data:function(){return{newjson:this.json,edited:!1,error:!1,keyDialog:!1,keyDialogCurrentKey:"",keyDialogCurrentData:"",log:"",myTags:["twitter","twitch","github","discord","telegram","email","protonmail","bitcoin","litecoin","ethereum","ipfs","psn","steam","xbox","flickr","facebook","tumblr","linkedin","instagram","reddit","tiktok","soundcloud","vimeo","spotify","youtube","bandcamp","medium","keybase","vimm","threespeak","mastodon","gab","dbuzz","wordpress","nftshowroom","palnet","leofinance","pgp"],commonTags:["name","about","location","profile_image","cover_image","website","witness_description","dtube_pub","pinned","portfolio","trail","default_page","default_view","post_promotions"]}},methods:{submitChanges:function(){if("postingMeta"===this.type){var t={account:this.username,json_metadata:"",posting_json_metadata:this.newjson},e=["account_update2",t];window.hive_keychain.requestBroadcast(this.username,[e],"Posting",function(t,e){!0===t.success&&(this.error=!1,this.log=t.message,this.edited=!0),!1===t.success&&(this.error=!0,this.log=t.message)}.bind(this))}},doesKeyExist:function(t){return t in JSON.parse(this.newjson).profile},removeKey:function(t){console.log("remove key "+t);var e=JSON.parse(this.newjson);delete e.profile[t],this.newjson=JSON.stringify(e)},addKey:function(t,e){if(void 0!==t&&void 0!==e){console.log("add key: "+t+" with data "+e);var a=JSON.parse(this.newjson);a.profile[t]=e,this.newjson=JSON.stringify(a)}else this.log="Not adding empty key"},showKeyPrompt:function(t){this.keyDialogCurrentKey=t,this.keyDialogCurrentData=JSON.parse(this.newjson).profile[t],this.keyDialog=!0},mounted:function(){}}},C=x,P=a("27f9"),O=a("9c40"),j=a("0016"),H=a("b047"),A=a("24e8"),R=a("f09f"),S=a("a370"),Q=a("4b7e"),D=a("7f67"),B=Object(m["a"])(C,y,w,!1,null,null,null),I=B.exports;q()(B,"components",{QInput:P["a"],QBtn:O["a"],QIcon:j["a"],QChip:H["a"],QDialog:A["a"],QCard:R["a"],QCardSection:S["a"],QCardActions:Q["a"]}),q()(B,"directives",{ClosePopup:D["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",t._l(t.accountOperations,(function(e){return a("q-card",{key:e.index,staticClass:"q-ma-sm",attrs:{flat:"",bordered:"",dense:""}},[t.accountOperations.length>0?a("q-card-section",[a("q-list",{attrs:{dense:""}},[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[e[1].op[1].producer?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].producer)}})],1):t._e(),e[1].op[1].creator?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].creator)}})],1):t._e(),e[1].op[1].curator?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].curator)}})],1):t._e(),e[1].op[1].benefactor?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].benefactor)}})],1):t._e(),e[1].op[1].delegator?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].delegator)}})],1):t._e(),e[1].op[1].account?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].account)}})],1):t._e(),e[1].op[1].voter?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].voter)}})],1):t._e(),e[1].op[1].from_account?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].from_account)}})],1):t._e(),e[1].op[1].publisher?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].publisher)}})],1):t._e(),e[1].op[1].payer?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].payer)}})],1):t._e(),e[1].op[1].owner?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].owner)}})],1):t._e(),["vote","account_witness_vote"].includes(e[1].op[0])?a("q-avatar",[a("q-icon",{attrs:{name:"how_to_vote"}})],1):t._e(),["curation_reward","comment_benefactor_reward","producer_reward","claim_reward_balance","comment_reward","author_reward","fill_vesting_withdraw","proposal_pay"].includes(e[1].op[0])?a("q-avatar",[a("q-icon",{attrs:{name:"monetization_on"}})],1):t._e(),e[1].op[1].comment_author?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].comment_author)}})],1):t._e(),e[1].op[1].author?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].author)}})],1):t._e(),e[1].op[1].from?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].from)}})],1):t._e(),"comment"==e[1].op[0]?a("q-avatar",[a("q-icon",{attrs:{name:"comment"}})],1):t._e(),"delegate_vesting_shares"==e[1].op[0]?a("q-avatar",[a("q-icon",{attrs:{name:"add_circle"}})],1):t._e(),"transfer"==e[1].op[0]?a("q-avatar",[a("q-icon",{attrs:{name:"send"}})],1):t._e(),["comment_options","feed_publish"].includes(e[1].op[0])?a("q-avatar",[a("q-icon",{attrs:{name:"settings"}})],1):t._e(),["custom_json","witness_set_properties"].includes(e[1].op[0])?a("q-avatar",[a("q-icon",{attrs:{name:"notes"}})],1):t._e(),e[1].op[1].to?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].to)}})],1):t._e(),e[1].op[1].parent_author?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].parent_author)}})],1):t._e(),e[1].op[1].delegatee?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].delegatee)}})],1):t._e(),e[1].op[1].to_account?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].to_account)}})],1):t._e(),e[1].op[1].receiver?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].receiver)}})],1):t._e(),e[1].op[1].witness?a("q-avatar",[a("q-img",{attrs:{src:t.getHiveAvatarUrl(e[1].op[1].witness)}})],1):t._e()],1),a("q-item-section",{staticClass:"wrap"},[a("div",{staticClass:"text-bold"},[t._v(t._s(e[1].op[0]))]),a("json-viewer",{attrs:{data:e[1].op[1]}})],1),a("q-item-section",{attrs:{side:""}},[a("span",["0000000000000000000000000000000000000000"===e[1].trx_id?a("div",[t._v("vtx "+t._s(e[1].virtual_op))]):a("div",[t._v("tx "),a("router-link",{attrs:{to:t.linkTx(e[1].trx_id)}},[t._v(t._s(e[1].trx_id.substr(0,8)))])],1),"0000000000000000000000000000000000000000"===e[1].trx_id?a("div",[t._v("block "),a("router-link",{attrs:{to:t.returnBlockLink(e[1].block,e[1].virtual_op)}},[t._v(t._s(t.tidyNumber(e[1].block)))])],1):a("div",[t._v("block "),a("router-link",{attrs:{to:t.returnBlockLink(e[1].block,e[1].trx_id)}},[t._v(t._s(e[1].block))])],1),a("div",{attrs:{title:e[1].timestamp}},[t._v(t._s(t.timeDelta(e[1].timestamp)))])])])],1)],1)],1):t._e()],1)})),1)},$=[],J={name:"accountOperations",props:["accountOperations"],components:{jsonViewer:c["a"]},data:function(){return{}},computed:{},methods:{timeDelta:function(t){var e=o.a.utc(),a=o.a.utc(t),r=a.diff(e,"minutes");return o.a.duration(r,"minutes").humanize(!0)},tidyNumber:function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},returnLink:function(t,e){return"/@"+t+"/"+e},returnBlockLink:function(t,e){return"/b/"+t+"#"+e},linkTx:function(t){return"/tx/"+t}},mounted:function(){}},L=J,M=(a("73b7"),a("cb32")),U=a("068f"),K=Object(m["a"])(L,N,$,!1,null,"4928d06c",null),F=K.exports;q()(K,"components",{QCard:R["a"],QCardSection:S["a"],QList:_["a"],QItem:g["a"],QItemSection:h["a"],QAvatar:M["a"],QImg:U["a"],QIcon:j["a"]});var T=a("6841"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return void 0!==t.RC.rc_manabar?a("div",[a("q-linear-progress",{staticClass:"q-mt-sm",attrs:{dark:"",stripe:"",rounded:"",size:"20px",value:t.rcPercent,color:"green"}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"black","text-color":"primary"}},[t._v(t._s((100*t.rcPercent).toFixed(2))+" %")])],1)]),a("q-card-section",{staticClass:"text-center"},[a("div",{staticClass:"text-bold"},[t._v("Enough credits for approximately:")]),a("div",[t._v(t._s(t.resourceBudgetComments)+" comments")]),a("div",[t._v(t._s(t.resourceBudgetVotes)+" votes")]),a("div",[t._v(t._s(t.resourceBudgetTransfers)+" transfers")])])],1):t._e()},V=[],z={name:"rc",props:["username","display"],data:function(){return{loading:!1,RC:{}}},computed:{rcPercent:function(){if(void 0!==this.RC.max_rc){var t=this.RC.max_rc,e=this.RC.rc_manabar.current_mana;return parseFloat(e/t)}return null},resourceBudgetComments:function(){if(void 0!==this.RC.rc_manabar){var t=866099987,e=this.RC.rc_manabar.current_mana/t;return e>=100?"100+":e.toFixed(0)}return null},resourceBudgetVotes:function(){if(void 0!==this.RC.rc_manabar){var t=98893838,e=this.RC.rc_manabar.current_mana/t;return e>=100?"100+":e.toFixed(0)}return null},resourceBudgetTransfers:function(){if(void 0!==this.RC.rc_manabar){var t=476452196,e=this.RC.rc_manabar.current_mana/t;return e>=100?"100+":e.toFixed(0)}return null}},methods:{getRcForAccount:function(t){var e=this;this.loading=!0;var a={accounts:[t]};this.$hive.api.callAsync("rc_api.find_rc_accounts",a).then((function(t){e.loading=!1,e.RC=t.rc_accounts[0]}))}},mounted:function(){this.getRcForAccount(this.username)}},W=z,Y=a("6b1d"),G=a("58a8"),Z=Object(m["a"])(W,E,V,!1,null,null,null),X=Z.exports;q()(Z,"components",{QLinearProgress:Y["a"],QBadge:G["a"],QCardSection:S["a"]});var tt={name:"accountPage",components:{jsonViewer:c["a"],recentPostsCarousel:u["a"],propsList:k,propsEditor:I,accountOperations:F,accountHeader:T["a"],rc:X},data:function(){return{username:this.$route.params.username,votingPowerPct:.5,downvotingPowerPct:.5,resourceCreditsPct:.5,accountValue:null,RC:{max:null,current:null,percent:null},witness:null,accountOperations:[],accountOperationsLimit:100,accountOperationsMarker:null,page:this.$router.currentRoute.query.page||1,editPostingJson:!1,error:!1,errorMessage:""}},watch:{username:function(){Object(i["a"])((function(){this.accountOperationsMarker=null,this.init()}),200)},$route:function(){this.init()}},computed:{globalProps:{get:function(){return this.$store.state.hive.globalProps}},account:{cache:!1,get:function(){return this.$store.state.hive.accounts[this.username]}},accountAge:function(){return o()(this.account.created).fromNow()},accountAgeShort:function(){return o()(this.account.created).format("MMMM YYYY")},votePower:function(){var t=(new Date-new Date(this.account.last_vote_time+"Z"))/1e3,e=this.account.voting_power+1e4*t/432e3;return Math.min(e/100,100).toFixed(2)},effectiveHPTidy:function(){return this.tidyNumber(this.effectiveHP)},effectiveHP:function(){return this.vestToHive(this.effectiveVests)},effectiveVests:function(){return void 0!==this.account&&null!==this.account?parseInt(this.account.vesting_shares.split(" ")[0])+parseInt(this.account.received_vesting_shares.split(" ")[0])-parseInt(this.account.delegated_vesting_shares.split(" ")[0])-parseInt(this.account.vesting_withdraw_rate.split(" ")[0]):null},downvotePower:function(){return this.account.downvote_manabar.current_mana/(this.effectiveVests/4*1e4)*100},downvotePowerPct:function(){var t=(this.downvotePower/100).toFixed(2);return t>100&&(t=100),t},coverImage:function(){var t="https://files.peakd.com/file/peakd-hive/ausbitbank/8xq5izkP-cover-1.jpg";return null===this.account?t:this.account.posting_json_metadata&&JSON.parse(this.account.posting_json_metadata).profile&&JSON.parse(this.account.posting_json_metadata).profile.cover_image?(console.log(JSON.parse(this.account.posting_json_metadata).profile.cover_image),JSON.parse(this.account.posting_json_metadata).profile.cover_image):t},coverImageStyle:function(){return this.coverImage?{"background-image":"linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 40%, rgba(10, 10, 10, 0.75) 100%), url("+this.coverImage+")","background-position":"center-center","background-repeat":"no-repeat","background-size":"cover","background-clip":"border-box, border-box","background-color":"rgba(0, 0, 0, 0)","background-attachment":"scroll, scroll"}:null},recentVotes:function(){if(this.accountOperations){var t=this.accountOperations.filter(this.filterOpsVotes).slice(0,10),e=[];for(var a in t)e.push({author:t[a][1].op[1].author,permlink:t[a][1].op[1].permlink});return e}return null},resourceBudgetComments:function(){if(this.RC.current){var t=866099987,e=this.RC.current/t;return e>=100?"100+":e.toFixed(0)}return null},resourceBudgetVotes:function(){if(this.RC.current){var t=98893838,e=this.RC.current/t;return e>=100?"100+":e.toFixed(0)}return null},resourceBudgetTransfers:function(){if(this.RC.current){var t=476452196,e=this.RC.current/t;return e>=100?"100+":e.toFixed(0)}return null}},methods:{filterOpsVotes:function(t){return"vote"===t[1].op[0]},getAccountHistory:function(t){var e=this.accountOperationsLimit,a=this.$router.currentRoute.query.page||1,r=this.accountOperationsMarker-e*a;r+=e,r<=e-1&&(r=e-1),null!==a&&1!==a||(r=-1),this.$hive.api.getAccountHistory(this.username,r,this.accountOperationsLimit,function(t,e){t&&console.log(t),this.accountOperations=e.reverse()}.bind(this))},getAccountHistoryMarker:function(t){this.$hive.api.getAccountHistory(t,-1,1,function(e,a){e&&console.log(e),this.accountOperationsMarker=a[0][0],this.getAccountHistory(t)}.bind(this))},accountLink:function(t){return"/@"+t},linkBlog:function(t){return"/@"+t+"/blog"},linkPosts:function(t){return"/@"+t+"/posts"},linkComments:function(t){return"/@"+t+"/comments"},linkReplies:function(t){return"/@"+t+"/replies"},linkFeed:function(t){return"/@"+t+"/feed"},linkHiveBlog:function(t){return"https://hive.blog/@"+t},linkPeakd:function(t){return"https://peakd.com/@"+t},linkHiveWorld:function(t){return"/hiveworld/@"+t},linkTx:function(t){return"/tx/"+t},getReputation:function(t){return this.$hive.formatter.reputation(t)},getAccount:function(t){void 0===this.$store.state.hive.accounts[t]&&(console.log("dispatch sent to get account info for "+this.username),this.$store.dispatch("hive/getAccount",this.username))},getWitness:function(t){var e=this;this.$hive.api.getWitnessByAccountAsync(t).then((function(t){e.witness=t})).catch((function(){return console.log("Failed to load witness data")}))},getHiveAvatarUrl:function(t){return"https://images.hive.blog/u/"+t+"/avatar"},getGlobalProps:function(){console.log(this.globalProps),console.log(this.globalProps.length),this.globalProps.empty&&this.$store.dispatch("hive/getGlobalProps")},vestToHive:function(t){return this.globalProps?this.$hive.formatter.vestToHive(t,this.globalProps.total_vesting_shares,this.globalProps.total_vesting_fund_hive).toFixed(3):null},getRC:function(t){var e=this,a="https://anyx.io/v1/rc_api/find_rc_accounts?accounts="+t;this.$axios.get(a).then((function(t){t=t.data,e.RC.max=t.rc_accounts[0].max_rc,e.RC.current=t.rc_accounts[0].rc_manabar.current_mana;var a=parseFloat(e.RC.current/e.RC.max*100).toFixed(2);a>100&&(a=100),e.RC.percent=a})).catch((function(){console.log("error loading RC from anyx.io")}))},timeDelta:function(t){var e=o.a.utc(),a=o.a.utc(t),r=a.diff(e,"minutes");return o.a.duration(r,"minutes").humanize(!0)},tidyNumber:function(t){if(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e.join(".")}return null},returnLink:function(t,e){return"/@"+t+"/"+e},returnBlockLink:function(t,e){return"/b/"+t+"#"+e},init:function(){this.getGlobalProps(),this.page=this.$router.currentRoute.query.page||1,this.username=this.$route.params.username,document.title=this.username,void 0!==this.account&&this.account.name===this.username||(this.getAccount(this.username),this.getRC(this.username),this.getWitness(this.username)),this.getAccountHistoryMarker(this.username)}},created:function(){this.init()}},et=tt,at=a("9989"),rt=a("981c"),nt=Object(m["a"])(et,r,n,!1,null,null,null);e["default"]=nt.exports;q()(nt,"components",{QPage:at["a"],QDialog:A["a"],QIcon:j["a"],QCard:R["a"],QCardSection:S["a"],QLinearProgress:Y["a"],QBadge:G["a"],QBtn:O["a"],QList:_["a"],QItem:g["a"],QItemSection:h["a"],QSpinnerGrid:rt["a"]})},ebcf:function(t,e,a){}}]);