(this["webpackJsonpreact-ethereum-frontend-001"]=this["webpackJsonpreact-ethereum-frontend-001"]||[]).push([[5],{632:function(e,t,n){},633:function(e){e.exports=JSON.parse('[{"id":"1","url":"https://www.youtube.com/embed/gtJ47-LvX_g","tags":[{"cat":"Genre","key":"Swing"},{"cat":"Genre type","key":"Lindy hop"},{"cat":"Region","key":"Taiwan"},{"cat":"Level","key":"Advanced"}]},{"id":"2","url":"https://www.youtube.com/embed/YKVsH4SjK4M","tags":[{"cat":"Genre","key":"Swing"},{"cat":"Genre type","key":"Lindy hop"}]},{"id":"4","url":"https://www.youtube.com/embed/QJFtQzXIlfA","tags":[{"cat":"Genre","key":"Swing"},{"cat":"Genre type","key":"Lindy hop"},{"cat":"Region","key":"Korean"}]},{"id":"5","url":"https://www.youtube.com/embed/qjb2Y_Vbt84","tags":[{"cat":"Genre","key":"Swing"},{"cat":"Genre type","key":"Lindy hop"},{"cat":"Region","key":"International"}]},{"id":"6","url":"https://www.youtube.com/embed/OyyvEUqKa7Q","tags":[{"cat":"Genre","key":"Swing"},{"cat":"Genre type","key":"Lindy hop"},{"cat":"Region","key":"Taiwan"}]},{"id":"7","url":"https://www.youtube.com/embed/dcYrA0G3yWI","tags":[{"cat":"Genre","key":"Swing"},{"cat":"Genre type","key":"Lindy hop"},{"cat":"Region","key":"Taiwan"}]},{"id":"8","url":"https://www.youtube.com/embed/PcmeGvrf2uY","tags":[{"cat":"Genre","key":"Swing"},{"cat":"Genre type","key":"Lindy hop"},{"cat":"Region","key":"Taiwan"}]},{"id":"9","url":"https://www.youtube.com/embed/nnOoRtieJjc","tags":[{"cat":"Genre","key":"Swing"},{"cat":"Genre type","key":"Solo"},{"cat":"Region","key":"International"}]},{"id":"10","url":"https://www.youtube.com/embed/vBJqsV9e-OI","tags":[{"cat":"Genre","key":"Swing"},{"cat":"Genre type","key":"Lindy hop"},{"cat":"Region","key":"International"}]},{"id":"11","url":"https://www.youtube.com/embed/Ls-nNywjtPg","tags":[{"cat":"Genre","key":"Swing"},{"cat":"Genre type","key":"Lindy hop"},{"cat":"Region","key":"International"}]},{"id":"12","url":"https://www.youtube.com/embed/pyGwN3NNEM0","tags":[{"cat":"Genre","key":"Swing"},{"cat":"Genre type","key":"Lindy hop"},{"cat":"Genre type","key":"Blues"},{"cat":"Region","key":"International"}]}]')},637:function(e,t,n){e.exports={"c-main":"horizontal-video_c-main__3TREU","c-sidebar":"horizontal-video_c-sidebar__1-PNC","c-sidebar-nav-link":"horizontal-video_c-sidebar-nav-link__2Yasf","dropdown-list":"horizontal-video_dropdown-list__2zGT3",highlightOption:"horizontal-video_highlightOption__1g4-s",multiSelectContainer:"horizontal-video_multiSelectContainer__1gO5R",chip:"horizontal-video_chip__3U4hX","progress-bar-container":"horizontal-video_progress-bar-container__22VVq",progress:"horizontal-video_progress__1zwp1",container:"horizontal-video_container__2ptRL",videoScroller:"horizontal-video_videoScroller__3dAdE",scrollingButtons:"horizontal-video_scrollingButtons__3tdRv",button:"horizontal-video_button__3hp3Z"}},638:function(e,t,n){e.exports={auth:"auth_auth__YftEO",logoContainer:"auth_logoContainer__X9iHt"}},639:function(e,t,n){e.exports={button:"metamask-auth_button__150ih",address:"metamask-auth_address__3JgnA"}},642:function(e,t){},653:function(e,t){},668:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(27),s=n(24),i=n(589),o=n(28),d=function(){return Object(o.jsx)(s.a,{to:"/dances/videos"})},u=n(600),l=(n(632),n(633)),b=n(193),j=n(194),p=n(634),h=n.n(p),m=n(636),f=n.n(m),v=function(e){var t=e.itemList,n=e.onSelect,a=e.onRemove,c=e.placeholder,s=void 0===c?"Select":c,i=e.enabledPreviousSelected,d=void 0!==i&&i,u=[],l=Object(r.useRef)();t.forEach((function(e,t){u.push(e)}));var b={options:u};return Object(r.useEffect)((function(){d&&n(l.current.state.selectedValues)})),setTimeout((function(){f()("#search_input").prop("readonly",!0)})),Object(o.jsx)(h.a,{ref:l,placeholder:s,options:b.options,closeOnSelect:!1,onSelect:function(e){return n(e)},onRemove:function(e){return a(e)},groupBy:"cat",displayValue:"key"})},x=n(583),O=n(584),y=function(){function e(){Object(x.a)(this,e)}return Object(O.a)(e,null,[{key:"shuffle",value:function(e){var t=Object(u.a)(e);try{for(var n=t.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),a=[t[r],t[n]];t[n]=a[0],t[r]=a[1]}return t}catch(c){return e}}}]),e}(),g=n(615),w=b.d.actions.setProgress,k=function(e){var t=e.type,n=void 0===t?"":t,a=e.videoUrl,c=void 0===a?"":a,s=e.videoHeight,i=e.videoWidth,d=Object(j.b)();var u=new IntersectionObserver((function(e){if(!e||e.length<=0)return;e[0].isIntersecting&&(h(!0),u.disconnect())}),{rootMargin:"100px 0px",threshold:.25}),l=Object(r.useState)(!1),b=Object(g.a)(l,2),p=b[0],h=b[1],m=Object(r.createRef)();Object(r.useEffect)((function(){window&&"IntersectionObserver"in window?m&&m.current&&u.observe(m.current):h(!0)}),[m]),c+="?rel=0&modestbranding=1&autohide=1&showinfo=0";var f="videos-box ".concat(n);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:f,ref:m,children:p?Object(o.jsx)("iframe",{width:i,height:s,onLoad:function(){d(w({}))},src:c,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):void 0})})},_=n(637),N=n.n(_),S=n(669),C=function(e){var t=e.itemList,n=Object(r.useRef)(null);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:N.a.container+" horizontal-videos",children:Object(o.jsx)("div",{className:N.a.videoScroller,ref:n,children:t&&t.map((function(e){return Object(o.jsx)(k,{type:"horizontal-video",videoUrl:e.url,videoHeight:"100%",videoWidth:"100%"},Object(S.a)())}))})})})},R=b.f.actions,G=R.setSelectedVideos,z=R.setTags,A=b.d.actions.setProgress,L=function(){var e=Object(j.c)((function(e){return e.videosInfo.selectedVideos}));return Object(o.jsx)("div",{className:"all-vedeos-box-container",children:Object(o.jsx)("div",{className:"vedeos-grid",children:e&&e.map((function(e){return Object(o.jsx)(k,{type:"all-video",videoUrl:e.url,videoHeight:"250px",videoWidth:"335px"},Object(S.a)())}))})})},T=function(){var e=Object(j.b)(),t=[],n=[],a=[],c=[],s=c&&c.length;Array.isArray(l)&&l.length&&((n=Object(u.a)(l)).forEach((function(e){e.hasOwnProperty("tags")&&e.tags.forEach((function(e){t.find((function(t){return t.key===e.key}))||t.push(e)}))})),a=Object(u.a)(y.shuffle(n)));var i=Object(r.useMemo)((function(){return e(z(t)),t}),[t,e]);Object(r.useEffect)((function(){return function(){e(G([])),e(A({step:0,fullCount:0}))}})),Object(r.useEffect)((function(){s&&e(A({fullCount:s}))}),[e,s]);var d=function(t){e(A({step:0,fullCount:0})),c=n.filter((function(e){return t.every((function(t){return e.tags.some((function(e){return e.key===t.key}))}))})),e(G(c)),e(A({fullCount:c.length}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(C,{itemList:a}),Object(o.jsxs)("div",{className:"mt-5",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"All videos"})}),Object(o.jsx)("div",{className:"dropdown-list",children:Object(o.jsx)(v,{itemList:i,onSelect:d,onRemove:d,placeholder:"Filter",enabledPreviousSelected:!0})}),Object(o.jsx)("div",{children:n&&n.length&&Object(o.jsx)(L,{})})]})]})},M=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:a.a.lazy((function(){return n.e(6).then(n.bind(null,667))}))},{path:"/dances",name:"Dances",component:d,exact:!0},{path:"/dances/videos",name:"Videos",component:T},{path:"/users",exact:!0,name:"Users",component:a.a.lazy((function(){return n.e(9).then(n.bind(null,670))}))}],I=Object(o.jsx)("div",{className:"pt-3 text-center",children:Object(o.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),F=function(){return Object(o.jsx)("main",{className:"c-main",children:Object(o.jsx)(i.j,{fluid:!0,children:Object(o.jsx)(r.Suspense,{fallback:I,children:Object(o.jsxs)(s.d,{children:[M.map((function(e,t){return e.component&&Object(o.jsx)(s.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(o.jsx)(i.q,{children:Object(o.jsx)(e.component,Object(c.a)({},t))})}},t)})),Object(o.jsx)(s.a,{from:"/",to:"/dashboard"})]})})})})},E=a.a.memo(F),P=function(){return Object(o.jsxs)(i.r,{fixed:!1,children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{className:"mfs-auto",children:Object(o.jsx)("a",{href:"",target:"_blank",rel:"noopener noreferrer",children:"2022"})})]})},H=a.a.memo(P),V=n(659),B=function(){var e=Object(j.b)(),t=b.e.actions,n=t.toggle,r=t.toggleMobile,a=function(e){var t,n=e.step/e.fullCount*100;return(null!==(t=n<10&&e.fullCount>0)&&void 0!==t?t:n)?10:n}(Object(j.c)((function(e){return e.progressBar})));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(i.s,{withSubheader:!0,children:[Object(o.jsx)(i.P,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){e(r())}}),Object(o.jsx)(i.P,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){e(n())}}),Object(o.jsx)(i.t,{className:"mx-auto d-lg-none",to:"/",children:"Homepage"}),Object(o.jsxs)(i.u,{className:"d-md-down-none mr-auto",children:[Object(o.jsx)(i.v,{className:"px-3",children:Object(o.jsx)(i.w,{to:"/dashboard",children:"Dashboard"})}),Object(o.jsx)(i.v,{className:"px-3",children:Object(o.jsx)(i.w,{to:"/users",children:"Users"})}),Object(o.jsx)(i.v,{className:"px-3",children:Object(o.jsx)(i.w,{children:"Settings"})})]}),Object(o.jsx)(i.u,{className:"px-3",children:Object(o.jsx)(ve,{})}),Object(o.jsxs)(i.O,{className:"px-3 justify-content-between",children:[Object(o.jsx)(i.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:M}),Object(o.jsx)("div",{className:"d-md-down-none mfe-2 c-subheader-nav"})]})]}),Object(o.jsx)("div",{className:"progress-bar-container",children:Object(o.jsx)(V.a,{animated:!0,now:a,hidden:a>=100||!a})})]})},D=n(590),U=n(638),J=n.n(U),q=n(586),Y=n(607),K=n(639),W=n.n(K),X=n(614),Q="0x59F6FaB187BD88311cF4335d0d99bA126B150df0",Z=[{inputs:[{internalType:"uint256",name:"initRegistrationFee",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"deactivatedAccountAddr",type:"address"}],name:"accountDeactivatd",type:"event"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"deactivateAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"registeredaccount",type:"address"}],name:"newRegistered",type:"event"},{inputs:[],name:"signup",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"getRegisteredAccount",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],$=b.a.actions.setProvider,ee=b.c.actions.updateAddress;function te(){return ne.apply(this,arguments)}function ne(){return(ne=Object(Y.a)(Object(q.a)().mark((function e(){return Object(q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new X.a.providers.Web3Provider(window.ethereum));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var re=function(){var e=Object(Y.a)(Object(q.a)().mark((function e(t,n){var r,a,c;return Object(q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,te();case 3:return(r=e.sent)&&t($(r)),a=new X.a.Contract(Q,Z,r),e.next=8,a.getRegisteredAccount(n);case 8:if(!(c=e.sent)||!c[1]){e.next=14;break}return t(ee({address:n,isRegistered:!0})),e.abrupt("return",!0);case 14:return t(ee({address:n,isRegistered:!1})),e.abrupt("return",!1);case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(0),e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n){return e.apply(this,arguments)}}(),ae=re,ce=b.c.actions.updateAddress;function se(){return"ontouchstart"in window||"onmsgesturechange"in window}function ie(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(Y.a)(Object(q.a)().mark((function e(t){var n;return Object(q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=4;break}return alert("Get MetaMask!"),t(ce({address:"0x"})),e.abrupt("return");case 4:return e.next=6,window.ethereum.request({method:"eth_requestAccounts"});case 6:return n=e.sent,e.next=9,ae(t,n[0]);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(){return(de=Object(Y.a)(Object(q.a)().mark((function e(t){var n;return Object(q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=16;break}return je(t),e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((n=e.sent).length>0)){e.next=12;break}return e.next=8,ae(t,n[0]);case 8:return je(t),e.abrupt("return");case 12:t(ce({address:"0x"}));case 13:if(!se()){e.next=16;break}return e.next=16,ie(t);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(){return(ue=Object(Y.a)(Object(q.a)().mark((function e(t,n,r){var a,c,s;return Object(q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae(t,r);case 2:if(!e.sent){e.next=6;break}t(ce({address:r,isRegistered:!0})),e.next=22;break;case 6:return a=n.getSigner(),c=new X.a.Contract(Q,Z,a),s={value:20,gasLimit:3e5},e.prev=9,e.next=12,c.signup(s);case 12:e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),alert(e.t0.message);case 18:return e.prev=18,e.next=21,ae(t,r);case 21:return e.finish(18);case 22:case"end":return e.stop()}}),e,null,[[9,15,18,22]])})))).apply(this,arguments)}var le=function(){var e=Object(Y.a)(Object(q.a)().mark((function e(t,n){return Object(q.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>0)){e.next=5;break}return e.next=3,ae(t,n[0]);case 3:e.next=6;break;case 5:t(ce({address:"0x"}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),be=function(e){e(ce({address:"0x"}))};function je(e){window.ethereum&&(window.ethereum.on("accountsChanged",le.bind(null,e)),window.ethereum.on("disconnect",be.bind(null,e)))}var pe=function(e){var t=e.setUserAddress;if(se()){return Object(o.jsx)("a",{href:"https://metamask.app.link/dapp/metamask-auth.ilamanov.repl.co",children:Object(o.jsx)("button",{className:W.a.button,children:"Connect to MetaMask"})})}return Object(o.jsx)("button",{className:W.a.button,onClick:function(){return ie(t)},children:"Connect to MetaMask"})},he=function(e){var t=e.userAddress;return Object(o.jsxs)("span",{id:"short-address",className:W.a.address,children:[t.substring(0,5),"\u2026",t.substring(t.length-4)]})},me=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.loginInfo})),n=Object(j.c)((function(e){return e.ERCProvider}));switch(Object(r.useEffect)((function(){return function(e){de.apply(this,arguments)}(e),function(){window.ethereum}}),[e]),t.address&&"0x"!==t.address){case!0:return!0===t.isRegistered?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"mr-1",children:Object(o.jsx)(he,{userAddress:t.address})})}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{className:W.a.button,onClick:function(){return function(e,t,n){return ue.apply(this,arguments)}(e,n.provider,t.address)},children:"Sign up"})});case!1:return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(pe,{setUserAddress:e})});default:return Object(o.jsx)(o.Fragment,{})}};var fe=function(){return Object(o.jsxs)("div",{className:J.a.auth,children:[Object(o.jsx)("div",{className:J.a.logoContainer}),Object(o.jsx)(me,{})]})},ve=function(){var e=Object(j.c)((function(e){return e.loginInfo}));return Object(o.jsxs)(i.m,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[e.isRegistered&&Object(o.jsx)(i.p,{className:"c-header-nav-link",caret:!1,children:Object(o.jsx)("div",{className:"c-avatar",children:Object(o.jsx)(i.x,{src:"/react-ethereum-frontend-001/avatars/default.jpg",className:"c-avatar-img",alt:""})})}),Object(o.jsx)(fe,{})]}),Object(o.jsxs)(i.o,{className:"pt-0",placement:"bottom-end",children:[Object(o.jsx)(i.n,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(o.jsx)("strong",{children:"Settings"})}),Object(o.jsxs)(i.n,{children:[Object(o.jsx)(D.a,{name:"cil-user",className:"mfe-2"}),"Profile"]}),Object(o.jsx)(i.n,{divider:!0}),Object(o.jsxs)(i.n,{children:[Object(o.jsx)(D.a,{name:"cil-lock-locked",className:"mfe-2"}),"Lock Account"]})]})]})},xe=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(o.jsx)(D.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:""}},{_tag:"CSidebarNavDropdown",name:"Dances",route:"/dances",icon:"cil-puzzle",_children:[{_tag:"CSidebarNavItem",name:"Videos",to:"/dances/videos"}]}],Oe=function(){var e=Object(j.b)(),t=b.e.actions.toggle,n=Object(j.c)((function(e){return e.sidebarShow}));return Object(o.jsxs)(i.G,{show:n,onShowChange:function(){return e(t())},children:[Object(o.jsx)(i.H,{className:"d-md-down-none",to:"/",children:Object(o.jsx)("div",{children:"Homepage"})}),Object(o.jsx)(i.J,{children:Object(o.jsx)(i.k,{items:xe,components:{CSidebarNavDivider:i.K,CSidebarNavDropdown:i.L,CSidebarNavItem:i.M,CSidebarNavTitle:i.N}})}),Object(o.jsx)(i.I,{className:"c-d-md-down-none"})]})},ye=a.a.memo(Oe);t.default=function(){return Object(o.jsxs)("div",{className:"c-app c-default-layout",children:[Object(o.jsx)(ye,{}),Object(o.jsxs)("div",{className:"c-wrapper",children:[Object(o.jsx)(B,{}),Object(o.jsx)("div",{className:"c-body",children:Object(o.jsx)(E,{})}),Object(o.jsx)(H,{})]})]})}}}]);
//# sourceMappingURL=5.74680bc2.chunk.js.map