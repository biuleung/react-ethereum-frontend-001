(this["webpackJsonpreact-ethereum-frontend-001"]=this["webpackJsonpreact-ethereum-frontend-001"]||[]).push([[5],{746:function(e,t,n){},747:function(e){e.exports=JSON.parse('[{"id":"1","url":"https://www.youtube.com/embed/gtJ47-LvX_g","tags":["Swing","Lindy hop","Taiwanese","Advanced"]},{"id":"2","url":"https://www.youtube.com/embed/YKVsH4SjK4M","tags":["Swing","Lindy hop"]},{"id":"4","url":"https://www.youtube.com/embed/QJFtQzXIlfA","tags":["Swing","Lindy hop","Korean"]},{"id":"5","url":"https://www.youtube.com/embed/qjb2Y_Vbt84","tags":["Swing","Lindy hop","International"]},{"id":"6","url":"https://www.youtube.com/embed/OyyvEUqKa7Q","tags":["Swing","Lindy hop","Taiwanese"]},{"id":"7","url":"https://www.youtube.com/embed/dcYrA0G3yWI","tags":["Swing","Lindy hop","Taiwanese"]},{"id":"8","url":"https://www.youtube.com/embed/PcmeGvrf2uY","tags":["Swing","Lindy hop","Taiwanese"]},{"id":"9","url":"https://www.youtube.com/embed/nnOoRtieJjc","tags":["Swing","Lindy hop","Solo"]},{"id":"10","url":"https://www.youtube.com/embed/vBJqsV9e-OI","tags":["Swing","Lindy hop","International"]},{"id":"11","url":"https://www.youtube.com/embed/Ls-nNywjtPg","tags":["Swing","Lindy hop","International"]},{"id":"12","url":"https://www.youtube.com/embed/pyGwN3NNEM0","tags":["Swing","Lindy hop","Blues","Advanced"]}]')},750:function(e,t,n){e.exports={auth:"auth_auth__YftEO",logoContainer:"auth_logoContainer__X9iHt"}},751:function(e,t,n){e.exports={button:"metamask-auth_button__150ih",address:"metamask-auth_address__3JgnA"}},754:function(e,t){},778:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(24),c=n(23),i=n(706),o=n(27),u=function(){return Object(o.jsx)(c.a,{to:"/dances/videos"})},d=n(717),l=(n(746),n(747)),b=n(189),p=n(190),j=n(748),m=n.n(j),h=function(e){var t=e.itemList,n=e.onSelect,r=e.onRemove,s=e.placeholder,c=void 0===s?"Select":s,i=e.enabledPreviousSelected,u=void 0!==i&&i,d=[],l=Object(a.useRef)();t.forEach((function(e,t){d.push({name:e,id:t})}));var b={options:d};return Object(a.useEffect)((function(){u&&n(l.current.state.selectedValues)})),Object(o.jsx)(m.a,{ref:l,placeholder:c,options:b.options,closeOnSelect:!1,onSelect:function(e){return n(e)},onRemove:function(e){return r(e)},displayValue:"name"})},f=n(700),x=n(701),O=function(){function e(){Object(f.a)(this,e)}return Object(x.a)(e,null,[{key:"shuffle",value:function(e){var t=Object(d.a)(e);try{for(var n=t.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),r=[t[a],t[n]];t[n]=r[0],t[a]=r[1]}return t}catch(s){return e}}}]),e}(),w=n(780),v=b.d.actions.setProgress,g=function(e){var t=e.videoUrl,n=Object(p.b)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"videos-box",children:Object(o.jsx)("iframe",{width:"335px",height:"250px",onLoad:function(){n(v())},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})},y=b.f.actions,N=y.setSelectedVideos,k=y.setTags,S=b.d.actions.setProgress,C=function(){var e=Object(p.c)((function(e){return e.videosInfo.selectedVideos}));return Object(o.jsx)("div",{className:"vedeos-box-container",children:Object(o.jsx)("div",{className:"vedeos-grid",children:e&&e.map((function(e){return Object(o.jsx)(g,{videoUrl:e.url},Object(w.a)())}))})})},A=function(){var e,t=Object(p.b)(),n=[],r=[],s=r&&r.length;Array.isArray(l)&&l.length&&((e=Object(d.a)(l)).forEach((function(e){e.hasOwnProperty("tags")&&e.tags.forEach((function(e){n.find((function(t){return t===e}))||n.push(e)}))})),e=Object(d.a)(O.shuffle(e))),Object(a.useEffect)((function(){return t(k(n)),function(){t(k([]))}}),[t,n]),Object(a.useEffect)((function(){return function(){t(N([])),t(S({step:0,fullCount:0}))}}),[t,e,r.length]),Object(a.useEffect)((function(){s&&t(S({fullCount:s}))}),[t,s]);var c=function(n){t(S({step:0,fullCount:0})),r=e.filter((function(e){return n.every((function(t){return e.tags.includes(t.name)}))})),t(N(r)),t(S({fullCount:r.length}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"dropdown-list",children:Object(o.jsx)(h,{itemList:n,onSelect:c,onRemove:c,placeholder:"Filter",enabledPreviousSelected:!0})}),e&&e.length&&Object(o.jsx)(C,{})]})},_=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:r.a.lazy((function(){return n.e(6).then(n.bind(null,777))}))},{path:"/dances",name:"Dances",component:u,exact:!0},{path:"/dances/videos",name:"Videos",component:A},{path:"/users",exact:!0,name:"Users",component:r.a.lazy((function(){return n.e(9).then(n.bind(null,779))}))}],L=Object(o.jsx)("div",{className:"pt-3 text-center",children:Object(o.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),T=function(){return Object(o.jsx)("main",{className:"c-main",children:Object(o.jsx)(i.j,{fluid:!0,children:Object(o.jsx)(a.Suspense,{fallback:L,children:Object(o.jsxs)(c.d,{children:[_.map((function(e,t){return e.component&&Object(o.jsx)(c.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(o.jsx)(i.q,{children:Object(o.jsx)(e.component,Object(s.a)({},t))})}},t)})),Object(o.jsx)(c.a,{from:"/",to:"/dashboard"})]})})})})},M=r.a.memo(T),R=function(){return Object(o.jsxs)(i.r,{fixed:!1,children:[Object(o.jsx)("div",{}),Object(o.jsx)("div",{className:"mfs-auto",children:Object(o.jsx)("a",{href:"",target:"_blank",rel:"noopener noreferrer",children:"2022"})})]})},I=r.a.memo(R),P=n(769),E=function(){var e=Object(p.b)(),t=b.e.actions,n=t.toggle,a=t.toggleMobile,r=function(e){var t,n=e.step/e.fullCount*100;return(null!==(t=n<10&&e.fullCount>0)&&void 0!==t?t:n)?10:n}(Object(p.c)((function(e){return e.progressBar})));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(i.s,{withSubheader:!0,children:[Object(o.jsx)(i.P,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){e(a())}}),Object(o.jsx)(i.P,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){e(n())}}),Object(o.jsx)(i.t,{className:"mx-auto d-lg-none",to:"/",children:"Homepage"}),Object(o.jsxs)(i.u,{className:"d-md-down-none mr-auto",children:[Object(o.jsx)(i.v,{className:"px-3",children:Object(o.jsx)(i.w,{to:"/dashboard",children:"Dashboard"})}),Object(o.jsx)(i.v,{className:"px-3",children:Object(o.jsx)(i.w,{to:"/users",children:"Users"})}),Object(o.jsx)(i.v,{className:"px-3",children:Object(o.jsx)(i.w,{children:"Settings"})})]}),Object(o.jsx)(i.u,{className:"px-3",children:Object(o.jsx)(pe,{})}),Object(o.jsxs)(i.O,{className:"px-3 justify-content-between",children:[Object(o.jsx)(i.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:_}),Object(o.jsx)("div",{className:"d-md-down-none mfe-2 c-subheader-nav"})]})]}),Object(o.jsx)("div",{className:"progress-bar-container",children:Object(o.jsx)(P.a,{animated:!0,now:r,hidden:r>=100||!r})})]})},D=n(707),F=n(750),J=n.n(F),V=n(723),H=n(703),q=n.n(H),B=n(751),U=n.n(B),Y=n(730),G="0x59F6FaB187BD88311cF4335d0d99bA126B150df0",K=[{inputs:[{internalType:"uint256",name:"initRegistrationFee",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"deactivatedAccountAddr",type:"address"}],name:"accountDeactivatd",type:"event"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"deactivateAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"registeredaccount",type:"address"}],name:"newRegistered",type:"event"},{inputs:[],name:"signup",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"getRegisteredAccount",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],z=b.a.actions.setProvider,Q=b.c.actions.updateAddress;function X(){return W.apply(this,arguments)}function W(){return(W=Object(V.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Y.a.providers.Web3Provider(window.ethereum));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function(){var e=Object(V.a)(q.a.mark((function e(t,n){var a,r,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X();case 3:return(a=e.sent)&&t(z(a)),r=new Y.a.Contract(G,K,a),e.next=8,r.getRegisteredAccount(n);case 8:if(!(s=e.sent)||!s[1]){e.next=14;break}return t(Q({address:n,isRegistered:!0})),e.abrupt("return",!0);case 14:return t(Q({address:n,isRegistered:!1})),e.abrupt("return",!1);case 16:e.next=21;break;case 18:return e.prev=18,e.t0=e.catch(0),e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n){return e.apply(this,arguments)}}(),$=Z,ee=b.c.actions.updateAddress;function te(){return"ontouchstart"in window||"onmsgesturechange"in window}function ne(e){return ae.apply(this,arguments)}function ae(){return(ae=Object(V.a)(q.a.mark((function e(t){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethereum){e.next=4;break}return alert("Get MetaMask!"),t(ee({address:"0x"})),e.abrupt("return");case 4:return e.next=6,window.ethereum.request({method:"eth_requestAccounts"});case 6:return n=e.sent,e.next=9,$(t,n[0]);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){return(re=Object(V.a)(q.a.mark((function e(t){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=16;break}return oe(t),e.next=4,window.ethereum.request({method:"eth_accounts"});case 4:if(!((n=e.sent).length>0)){e.next=12;break}return e.next=8,$(t,n[0]);case 8:return oe(t),e.abrupt("return");case 12:t(ee({address:"0x"}));case 13:if(!te()){e.next=16;break}return e.next=16,ne(t);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(){return(se=Object(V.a)(q.a.mark((function e(t,n,a){var r,s,c;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$(t,a);case 2:if(!e.sent){e.next=6;break}t(ee({address:a,isRegistered:!0})),e.next=22;break;case 6:return r=n.getSigner(),s=new Y.a.Contract(G,K,r),c={value:20,gasLimit:3e5},e.prev=9,e.next=12,s.signup(c);case 12:e.sent,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(9),alert(e.t0.message);case 18:return e.prev=18,e.next=21,$(t,a);case 21:return e.finish(18);case 22:case"end":return e.stop()}}),e,null,[[9,15,18,22]])})))).apply(this,arguments)}var ce=function(){var e=Object(V.a)(q.a.mark((function e(t,n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>0)){e.next=5;break}return e.next=3,$(t,n[0]);case 3:e.next=6;break;case 5:t(ee({address:"0x"}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ie=function(e){e(ee({address:"0x"}))};function oe(e){window.ethereum&&(window.ethereum.on("accountsChanged",ce.bind(null,e)),window.ethereum.on("disconnect",ie.bind(null,e)))}function ue(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.loginInfo})),n=Object(p.c)((function(e){return e.ERCProvider}));switch(Object(a.useEffect)((function(){return function(e){re.apply(this,arguments)}(e),function(){window.ethereum}}),[e]),t.address&&"0x"!==t.address){case!0:return!0===t.isRegistered?Object(o.jsx)("div",{className:"mr-1",children:Object(o.jsx)(le,{userAddress:t.address})}):Object(o.jsx)("button",{className:U.a.button,onClick:function(){return function(e,t,n){return se.apply(this,arguments)}(e,n.provider,t.address)},children:"Sign up"});case!1:return Object(o.jsx)(de,{setUserAddress:e})}}function de(e){var t=e.setUserAddress;if(te()){return Object(o.jsx)("a",{href:"https://metamask.app.link/dapp/metamask-auth.ilamanov.repl.co",children:Object(o.jsx)("button",{className:U.a.button,children:"Connect to MetaMask"})})}return Object(o.jsx)("button",{className:U.a.button,onClick:function(){return ne(t)},children:"Connect to MetaMask"})}function le(e){var t=e.userAddress;return Object(o.jsxs)("span",{className:U.a.address,children:[t.substring(0,5),"\u2026",t.substring(t.length-4)]})}var be=function(){return Object(o.jsxs)("div",{className:J.a.auth,children:[Object(o.jsx)("div",{className:J.a.logoContainer}),Object(o.jsx)(ue,{})]})},pe=function(){var e=Object(p.c)((function(e){return e.loginInfo}));return Object(o.jsxs)(i.m,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(o.jsxs)("div",{className:"d-flex align-items-center",children:[e.isRegistered&&Object(o.jsx)(i.p,{className:"c-header-nav-link",caret:!1,children:Object(o.jsx)("div",{className:"c-avatar",children:Object(o.jsx)(i.x,{src:"avatars/default.jpg",className:"c-avatar-img",alt:""})})}),Object(o.jsx)(be,{})]}),Object(o.jsxs)(i.o,{className:"pt-0",placement:"bottom-end",children:[Object(o.jsx)(i.n,{header:!0,tag:"div",color:"light",className:"text-center",children:Object(o.jsx)("strong",{children:"Settings"})}),Object(o.jsxs)(i.n,{children:[Object(o.jsx)(D.a,{name:"cil-user",className:"mfe-2"}),"Profile"]}),Object(o.jsx)(i.n,{divider:!0}),Object(o.jsxs)(i.n,{children:[Object(o.jsx)(D.a,{name:"cil-lock-locked",className:"mfe-2"}),"Lock Account"]})]})]})},je=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",badge:{color:"info",text:""}},{_tag:"CSidebarNavDropdown",name:"Dances",route:"/dances",icon:"",_children:[{_tag:"CSidebarNavItem",name:"Videos",to:"/dances/videos"}]}],me=function(){var e=Object(p.b)(),t=b.e.actions.toggle,n=Object(p.c)((function(e){return e.sidebarShow}));return Object(o.jsxs)(i.G,{show:n,onShowChange:function(){return e(t())},children:[Object(o.jsx)(i.H,{className:"d-md-down-none",to:"/",children:Object(o.jsx)("div",{children:"Homepage"})}),Object(o.jsx)(i.J,{children:Object(o.jsx)(i.k,{items:je,components:{CSidebarNavDivider:i.K,CSidebarNavDropdown:i.L,CSidebarNavItem:i.M,CSidebarNavTitle:i.N}})}),Object(o.jsx)(i.I,{className:"c-d-md-down-none"})]})},he=r.a.memo(me);t.default=function(){return Object(o.jsxs)("div",{className:"c-app c-default-layout",children:[Object(o.jsx)(he,{}),Object(o.jsxs)("div",{className:"c-wrapper",children:[Object(o.jsx)(E,{}),Object(o.jsx)("div",{className:"c-body",children:Object(o.jsx)(M,{})}),Object(o.jsx)(I,{})]})]})}}}]);
//# sourceMappingURL=5.7413b0ff.chunk.js.map