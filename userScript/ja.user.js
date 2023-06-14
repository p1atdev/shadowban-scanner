// ==UserScript==
// @name         Shadowban Scanner (ja)
// @namespace    https://github.com/Robot-Inventor/shadowban-scanner/
// @version      1.2.0
// @description  A browser extension that detects shadowbans on Twitter.
// @author       Robot-Inventor (ろぼいん / @keita_roboin)
// @match        https://twitter.com/*
// @match        https://mobile.twitter.com/*
// @match        https://tweetdeck.twitter.com/*
// @icon         https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/src/image/icon128.png
// @downloadURL  https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/./userScript/ja.user.js
// @updateURL    https://raw.githubusercontent.com/Robot-Inventor/shadowban-scanner/main/./userScript/ja.user.js
// @grant        none
// ==/UserScript==

(()=>{"use strict";var e={402:(e,t,s)=>{s.d(t,{Z:()=>i});var n=s(213),a=s.n(n),o=s(645),r=s.n(o)()(a());r.push([e.id,".shadowban-scanner-message {\n    padding: 1em;\n    border-radius: 0.5em;\n    background: rgb(255, 0, 0, 0.2);\n    margin: 1em 0;\n}\n\n.shadowban-scanner-message-no-problem {\n    background: rgb(0, 255, 0, 0.2);\n}\n\n.shadowban-scanner-message button {\n    cursor: pointer;\n    color: inherit;\n    border: none;\n    background: none;\n}\n\n.shadowban-scanner-message pre {\n    font-family: inherit;\n    line-height: inherit;\n    margin: 0.5rem 0 0 0;\n}\n",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",n=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),n&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),n&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,n,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),s&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=s):l[2]=s),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},213:e=>{e.exports=function(e){return e[1]}},962:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var n=s(379),a=s.n(n),o=s(795),r=s.n(o),i=s(569),c=s.n(i),u=s(565),l=s.n(u),d=s(216),h=s.n(d),g=s(589),p=s.n(g),w=s(402),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=c().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=h(),a()(w.Z,m);const y=w.Z&&w.Z.locals?w.Z.locals:void 0},379:e=>{var t=[];function s(e){for(var s=-1,n=0;n<t.length;n++)if(t[n].identifier===e){s=n;break}return s}function n(e,n){for(var o={},r=[],i=0;i<e.length;i++){var c=e[i],u=n.base?c[0]+n.base:c[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var h=s(d),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(g);else{var p=a(g,n);n.byIndex=i,t.splice(i,0,{identifier:d,updater:p,references:1})}r.push(d)}return r}function a(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var i=s(o[r]);t[i].references--}for(var c=n(e,a),u=0;u<o.length;u++){var l=s(o[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,s){var n=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(s)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,s)=>{e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var n="";s.supports&&(n+="@supports (".concat(s.supports,") {")),s.media&&(n+="@media ".concat(s.media," {"));var a=void 0!==s.layer;a&&(n+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),n+=s.css,a&&(n+="}"),s.media&&(n+="}"),s.supports&&(n+="}");var o=s.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},36:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Color=void 0,t.Color=class{constructor(){}get textColor(){const e=document.querySelector("[data-testid='User-Name'] div:first-child span, [data-testid='UserName'] div:first-child span");if(!e)throw new Error("Failed to get user name span of tweet");const{color:t}=getComputedStyle(e);return t}}},564:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Core=void 0;const n=s(296),a=s(915),o=s(338);s(962),t.Core=class{constructor(e){const t=new MutationObserver((()=>{const t=document.querySelectorAll(`[data-testid="tweet"]:not([${a.CHECKED_DATA_ATTRIBUTE}]`);for(const s of t)new o.TweetChecker(s).run().then((()=>e()));const s=document.querySelector(`:not([data-testid="tweet"]) [data-testid="UserName"]:not([${a.CHECKED_DATA_ATTRIBUTE}])`);s&&(new n.ProfileChecker(s).run(),e())})),s=new MutationObserver((()=>{const e=document.querySelector("main");e&&(s.disconnect(),t.observe(e,{subtree:!0,childList:!0}))}));s.observe(document.body,{subtree:!0,childList:!0})}}},907:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.jaDictionary=t.enDictionary=void 0;const a=n(s(533));t.enDictionary=a.default;const o=n(s(481));t.jaDictionary=o.default},552:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageElement=void 0;const n=s(915);t.MessageElement=class{constructor(e,t,s,a){if(this.div=document.createElement("div"),this.div.classList.add(n.MESSAGE_CLASS_NAME),a&&(this.div.dataset[a]=JSON.stringify(s)),this.div.style.color=t,console.log("type",e,"dataset",this.div.dataset),"tweet"===e){const e=document.createElement("pre");e.style.display="none",this.div.appendChild(e);const t=document.createElement("button");t.addEventListener("click",(()=>{e.style.display="block",t.remove()})),this.div.appendChild(t)}}get element(){return this.div}}},531:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileMessageFactory=t.TweetMessageFactory=void 0,t.TweetMessageFactory=class{constructor(e,t){this.tweetStatus=e,this.t=t}compose(e){const{tweet:t,user:s}=this.tweetStatus;switch(e){case"message":{if(this.isNoProblem())return this.t("tweetNoProblemMessage");const e=[];return t.possiblySensitive?s.possiblySensitive?t.possiblySensitiveEditable?e.push("accountShadowbannedAndTweetFlaggedAsSensitiveMessage"):e.push("accountAndTweetShadowbannedMessage"):e.push("accountShadowbannedMessage"):t.possiblySensitiveEditable?e.push("tweetFlaggedAsSensitiveMessage"):e.push("tweetShadowbannedMessage"),s.possiblySuggestBanned&&e.push("accountSuggestBannedMessage"),e.map((e=>this.t(e))).join(this.t("statusMessageSeparator"))}case"info":{const e=[];s.possiblySensitive?e.push("accountPossiblyShadowbanned"):e.push("accountPossiblyNotShadowbanned"),t.possiblySensitiveEditable&&t.possiblySensitive?(e.push("accountHasSensitiveFlag"),e.push("accountHasNoAgeRestriction")):t.possiblySensitive?(e.push("accountHasSensitiveFlag"),e.push("accountHasAgeRestriction")):(e.push("accountHasNoSensitiveFlag"),e.push("accountHasNoAgeRestriction")),s.possiblySensitive?e.push("tweetsPossiblyNotInSearchResults"):e.push("tweetsPossiblyInSearchResults"),s.possiblySuggestBanned?e.push("accountPossiblySuggestBanned"):e.push("accountPossiblyNotSuggestBanned");const n=e.map((e=>this.t(e))).join(this.t("statusInfoSeparator"));return console.log(n),n}}}isNoProblem(){const{tweet:e,user:t}=this.tweetStatus;return!t.possiblySensitive&&!e.possiblySensitive}},t.ProfileMessageFactory=class{constructor(e,t){this.tweetStatus=e,this.t=t}compose(){const{user:e}=this.tweetStatus;if(this.isNoProblem())return this.t("tweetNoProblemMessage");const t=[];return e.possiblySensitive&&t.push("accountShadowbannedMessage"),e.possiblySuggestBanned&&t.push("accountSuggestBannedMessage"),t.map((e=>this.t(e))).join(this.t("statusMessageSeparator"))}isNoProblem(){const{user:e}=this.tweetStatus;return!e.possiblySensitive&&!e.possiblySuggestBanned}}},296:function(e,t,s){var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(a,o){function r(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,i)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileChecker=void 0;const a=s(36),o=s(552),r=s(204),i=s(915),c=s(828),u=s(531);t.ProfileChecker=class{constructor(e){this.userName=e}run(){return n(this,void 0,void 0,(function*(){this.userName.setAttribute(i.CHECKED_DATA_ATTRIBUTE,"true");const e=new r.ProfileReactProps(this.userName).get();if(void 0===this.searchTypeahead){const t=new c.SearchTypeahead(e.user.screen_name);this.searchTypeahead=t}const t=yield this.searchTypeahead.search(),s={user:{possiblySensitive:Boolean(e.user.possibly_sensitive),possiblySuggestBanned:t.possiblySuggestBanned}};if(console.log("profileStatus",s),new u.ProfileMessageFactory(s,(()=>"")).isNoProblem())return;const n=(new a.Color).textColor,l=new o.MessageElement("account",n,s,"profileStatus"),d=document.querySelector("[data-testid='UserDescription']");if(!d)throw new Error("Failed to get user description of profile");d.insertAdjacentElement("afterend",l.element)}))}}},204:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProfileReactProps=t.TweetReactProps=void 0;class s{constructor(e){this.element=e,this.reactPropsName=Object.getOwnPropertyNames(e).filter((e=>e.startsWith("__reactProps$")))[0]}get(){return this.element[this.reactPropsName].children[1].props}}t.TweetReactProps=class{constructor(e){this.tweet=e}get(){return new s(this.tweet).get().retweetWithCommentLink.state.quotedStatus}},t.ProfileReactProps=class{constructor(e){this.userName=e}get(){return new s(this.userName).get()}}},828:function(e,t){var s=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(a,o){function r(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,i)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.SearchTypeahead=void 0;const n="AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";t.SearchTypeahead=class{constructor(e){this.guest_token=void 0,this.usenrame=e}activate(){return s(this,void 0,void 0,(function*(){if(void 0!==this.guest_token)return this.guest_token;const e=new URL("https://api.twitter.com/1.1/guest/activate.json"),t=yield fetch(e.toString(),{method:"POST",headers:{Authorization:`Bearer ${n}`}}),s=yield t.json();return this.guest_token=s.guest_token,s.guest_token}))}search(){return s(this,void 0,void 0,(function*(){const e=yield this.activate(),t=new URL("https://api.twitter.com/1.1/search/typeahead.json"),s=new URLSearchParams;s.set("q",`@${this.usenrame}`),s.set("src","search_box"),s.set("result_type","events,users,topics"),t.search=s.toString();const a=yield fetch(t.toString(),{headers:{Authorization:`Bearer ${n}`,"x-guest-token":e}}),o=yield a.json();return void 0===o.users||0===o.users.length||o.users[0].screen_name.toLowerCase()!==this.usenrame.toLowerCase()?{possiblySuggestBanned:!0}:{possiblySuggestBanned:!1}}))}}},338:function(e,t,s){var n=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(a,o){function r(e){try{c(n.next(e))}catch(e){o(e)}}function i(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,i)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.TweetChecker=void 0;const a=s(36),o=s(552),r=s(531),i=s(204),c=s(915),u=s(828);t.TweetChecker=class{constructor(e){this.tweet=e}run(){return n(this,void 0,void 0,(function*(){this.tweet.setAttribute(c.CHECKED_DATA_ATTRIBUTE,"true");const e=this.tweet.querySelector("div[role='group'][id]");if(!e)throw new Error("Failed to get menu bar of tweet");const t=new i.TweetReactProps(e).get();if(void 0===this.searchTypeahead){const e=new u.SearchTypeahead(t.user.screen_name);this.searchTypeahead=e}console.log(this.searchTypeahead);const s=yield this.searchTypeahead.search(),n={tweet:{possiblySensitive:Boolean(t.possibly_sensitive),possiblySensitiveEditable:!(!1===t.possibly_sensitive_editable),isTweetByCurrentUser:null===t.user.following},user:{possiblySensitive:Boolean(t.user.possibly_sensitive),possiblySuggestBanned:s.possiblySuggestBanned}};console.log("tweetStatus",n);const l=(new a.Color).textColor,d=new o.MessageElement("tweet",l,n,"tweetStatus");n.tweet.isTweetByCurrentUser&&d.element.classList.add(c.CURRENT_USERS_TWEET_CLASS_NAME),new r.TweetMessageFactory(n,(()=>"")).isNoProblem()&&d.element.classList.add("shadowban-scanner-message-no-problem"),e.insertAdjacentElement("beforebegin",d.element)}))}}},294:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_SETTINGS=void 0,t.DEFAULT_SETTINGS={alwaysDetailedView:!1,showMessageInAllTweets:!1,enableOnlyForCurrentUsersTweets:!1}},915:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MESSAGE_CLASS_NAME=t.CURRENT_USERS_TWEET_CLASS_NAME=t.EVENT_GENERATOR_ID=t.CHECKED_DATA_ATTRIBUTE=void 0,t.CHECKED_DATA_ATTRIBUTE="data-shadowban-checked",t.EVENT_GENERATOR_ID="shadowban-scanner-event-generator",t.CURRENT_USERS_TWEET_CLASS_NAME="tweet-by-current-user",t.MESSAGE_CLASS_NAME="shadowban-scanner-message"},34:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TextFlow=void 0;const n=s(531),a=s(915);t.TextFlow=class{constructor(e){if(!e.showMessageInAllTweets){const e=document.createElement("style");e.textContent=".shadowban-scanner-message-no-problem { display: none; }",document.body.appendChild(e)}if(e.enableOnlyForCurrentUsersTweets){const e=document.createElement("style");e.textContent=`.${a.MESSAGE_CLASS_NAME}:not(.${a.CURRENT_USERS_TWEET_CLASS_NAME}) {display: none;}`,document.body.appendChild(e)}this.allWaysDetailedView=e.alwaysDetailedView,this.translator=e.translator}run(){const e=document.querySelector(".shadowban-scanner-message:not(.text-inserted");if(!e)return;e.classList.add("text-inserted");const t=e.dataset.tweetStatus;if(t){const s=JSON.parse(t);return void this.processTweetStatus(e,s,this.translator)}const s=e.dataset.profileStatus;if(s){const t=JSON.parse(s);this.processProfileStatus(e,t,this.translator)}}processTweetStatus(e,t,s){const a=new n.TweetMessageFactory(t,s),o=a.compose("message");e.insertAdjacentText("afterbegin",o);const r=e.querySelector("button");if(!r)return;this.allWaysDetailedView?r.click():r.textContent=this.translator("showMore");const i=e.querySelector("pre");i&&(i.textContent=a.compose("info"))}processProfileStatus(e,t,s){const a=new n.ProfileMessageFactory(t,s).compose();e.insertAdjacentText("afterbegin",a)}}},651:(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UserScriptBase=void 0;const n=s(564),a=s(34),o=s(294);t.UserScriptBase=class{constructor(e){const t=Object.assign(Object.assign({},o.DEFAULT_SETTINGS),{translator:t=>e[t].message}),s=new a.TextFlow(t);new n.Core((()=>{s.run()}))}}},533:e=>{e.exports=JSON.parse('{"manifest_description":{"message":"A browser extension that detects shadowbans on Twitter."},"accountShadowbannedMessage":{"message":"This user may be shadowbanned, so this tweet may not appear in search results."},"accountSuggestBannedMessage":{"message":"This user may be suggest-banned, so this account may not apper in search suggestions."},"statusMessageSeparator":{"message":"\\n"},"statusInfoSeparator":{"message":"\\n"},"accountPossiblyNotShadowbanned":{"message":"✅Account may be not shadowbanned."},"accountPossiblyShadowbanned":{"message":"🚫Account may be shadowbanned."},"accountPossiblyNotSuggestBanned":{"message":"✅Account may be suggest-banned."},"accountPossiblySuggestBanned":{"message":"🚫Account may be suggest-banned."},"accountHasNoSensitiveFlag":{"message":"✅Tweet is not flagged as sensitive."},"accountHasSensitiveFlag":{"message":"🚫Tweet is flagged as sensitive."},"accountHasNoAgeRestriction":{"message":"✅Tweet has no age restriction."},"accountHasAgeRestriction":{"message":"🚫Tweet has age restriction."},"tweetsPossiblyInSearchResults":{"message":"✅Tweet may appear in search results."},"tweetsPossiblyNotInSearchResults":{"message":"🚫Tweet may not appear in search results."},"accountShadowbannedAndTweetFlaggedAsSensitiveMessage":{"message":"This user may be shadowbanned so this tweet may not appear in search results. Also, this tweet is flagged as sensitive."},"accountAndTweetShadowbannedMessage":{"message":"This tweet is age-restricted and cannot be viewed by users under the age of 18 or who are not logged in. This tweet may not appear in search results."},"tweetFlaggedAsSensitiveMessage":{"message":"This tweet is flagged as sensitive and will not appear in search results depending on the viewer\'s preferences."},"tweetShadowbannedMessage":{"message":"This tweet is age-restricted and cannot be viewed by users under the age of 18 or who are not logged in. This tweet may not appear in search results."},"tweetNoProblemMessage":{"message":"No problems was found with this tweet."},"showMore":{"message":"▶show more"},"settingsAlwaysDetailedView":{"message":"Always display detailed information"},"settingsShowMessageInAllTweets":{"message":"Show check results in all tweets"},"settingsEnableOnlyForCurrentUsersTweets":{"message":"Display check results only in your own tweets (beta)"},"settingsPleaseReload":{"message":"Please reload Twitter once you have changed the settings."}}')},481:e=>{e.exports=JSON.parse('{"manifest_description":{"message":"Twitterのシャドウバンを検出する拡張機能です。"},"accountShadowbannedMessage":{"message":"このユーザーはシャドウバンされている可能性があるため、ツイートが検索結果に表示されない可能性があります。"},"accountSuggestBannedMessage":{"message":"このユーザーは検索候補バンされている可能性があるため、アカウントが検索候補に表示されない可能性があります。"},"statusMessageSeparator":{"message":"\\n"},"statusInfoSeparator":{"message":"\\n"},"accountPossiblyNotShadowbanned":{"message":"✅アカウントはシャドウバンされていない可能性が高いです"},"accountPossiblyShadowbanned":{"message":"🚫アカウントがシャドウバンされている可能性があります"},"accountPossiblyNotSuggestBanned":{"message":"✅アカウントは検索候補バンされていない可能性が高いです"},"accountPossiblySuggestBanned":{"message":"🚫アカウントが検索候補バンされている可能性があります"},"accountHasNoSensitiveFlag":{"message":"✅ツイートにセンシティブフラグは付与されていません"},"accountHasSensitiveFlag":{"message":"🚫ツイートにセンシティブフラグが付与されています"},"accountHasNoAgeRestriction":{"message":"✅ツイートに年齢制限はありません"},"accountHasAgeRestriction":{"message":"🚫ツイートに年齢制限があります"},"tweetsPossiblyInSearchResults":{"message":"✅ツイートは検索結果に表示される可能性が高いです"},"tweetsPossiblyNotInSearchResults":{"message":"🚫ツイートが検索結果に表示されない可能性があります"},"accountShadowbannedAndTweetFlaggedAsSensitiveMessage":{"message":"このユーザーはシャドウバンされている可能性があるため、ツイートが検索結果に表示されない可能性があります。また、このツイートにはセンシティブフラグが付与されています。"},"accountAndTweetShadowbannedMessage":{"message":"このツイートには年齢制限があり、18歳未満のユーザーやログインしていないユーザーは閲覧できません。また、検索結果に表示されない可能性があります。"},"tweetFlaggedAsSensitiveMessage":{"message":"このツイートにはセンシティブフラグが付与されており、閲覧者の設定によっては検索結果に表示されません。"},"tweetShadowbannedMessage":{"message":"このツイートには年齢制限があり、18歳未満のユーザーやログインしていないユーザーは閲覧できません。また、検索結果に表示されない可能性があります。"},"tweetNoProblemMessage":{"message":"ツイートに問題は見つかりませんでした。"},"showMore":{"message":"▶さらに表示"},"settingsAlwaysDetailedView":{"message":"常に詳細情報を表示する"},"settingsShowMessageInAllTweets":{"message":"すべてのツイートに検証結果を表示する"},"settingsEnableOnlyForCurrentUsersTweets":{"message":"自分のツイートにのみ検証結果を表示する（ベータ版）"},"settingsPleaseReload":{"message":"設定を変更したらTwitterを再読み込みしてください。"}}')}},t={};function s(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={id:n,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nc=void 0,(()=>{const e=s(907);new(s(651).UserScriptBase)(e.jaDictionary)})()})();