(this.webpackJsonpkokoro=this.webpackJsonpkokoro||[]).push([[0],{108:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){"use strict";a.r(t);var c=a(3),s=a(2),n=a.n(s),r=a(31),o=a.n(r),i=(a(82),a(26)),u=a(27),j=a(10),d=(a(83),a(36)),b=(a(84),a(67)),l=a.n(b),h=a(68),m=a.n(h),O=a(45),f=a.n(O),p=a(130),x=a(128),v=a(46),g=a.n(v),_=a(29),N=a.n(_),I=a(37),k=(a(86),a(63)),y=a.n(k).a.create({baseURL:"http://localhost:9000"}),S=a(23),w=a(9),C=a(42),M=a.n(C);var R=function(e){var t=e.addNewChat,a=e.findRoom,n=e.roomName,r=e.userID,o=e.id,i=e.finalMessage,u=Object(s.useState)(""),d=Object(j.a)(u,2),b=d[0],l=d[1],h=Object(s.useState)(""),m=Object(j.a)(h,2),O=m[0],f=m[1],x=Object(w.f)(),v=x.userId;x.roomId,Object(s.useEffect)((function(){i&&l(i.message)}),[i]),Object(s.useEffect)((function(){f(Math.floor(500*Math.random()))}),[]);var g=function(){var e=Object(I.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=prompt("Please enter name for chat"))){e.next=4;break}return e.next=4,y.post("/rooms/new",{roomName:t,messages:[]}).then((function(e){var t={roomId:e.data._id};y.post("/users/update/".concat(v),t)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(I.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=prompt("Please enter the Room ID: "))){e.next=4;break}return e.next=4,y.get("/rooms/sync/".concat(t)).then((function(e){var t={roomId:e.data._id};y.post("/users/update/".concat(v),t)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return t?Object(c.jsx)("div",{onClick:g,className:"sidebarChat",children:Object(c.jsx)("h2",{children:" Create room"})}):a?Object(c.jsx)("div",{onClick:_,className:"sidebarChat",children:Object(c.jsx)("h2",{children:" Find room"})}):Object(c.jsx)(S.b,{className:"link",to:"/user/".concat(r,"/room/").concat(o),children:Object(c.jsxs)("div",{className:"sidebarChat",children:[Object(c.jsx)(p.a,{src:"https://avatars.dicebear.com/api/human/".concat(O,".svg")}),Object(c.jsxs)("div",{className:"sidebarChat__info",children:[Object(c.jsx)("h2",{children:n}),Object(c.jsx)("p",{children:b})]})]})})},E=Object(s.createContext)(),D=function(e){var t=e.reducer,a=e.initialState,n=e.children;return Object(c.jsx)(E.Provider,{value:Object(s.useReducer)(t,a),children:n})},U=function(){return Object(s.useContext)(E)};var T=function(e){var t=e.currentUser,a=e.pusher,n=e.newMessage,r=U(),o=Object(j.a)(r,2),b=o[0].user,h=(o[1],Object(s.useState)([])),O=Object(j.a)(h,2),v=O[0],_=O[1],N=Object(s.useState)([]),I=Object(j.a)(N,2),k=I[0],S=I[1],C=Object(w.f)(),M=C.userId,E=(C.roomId,Object(s.useState)(0)),D=Object(j.a)(E,2),T=D[0],L=D[1];return Object(s.useEffect)((function(){if(t&&t.rooms)if(t.rooms.length>0){var e,a=Object(d.a)(t.rooms);try{var c=function(){var t=e.value;if(k.includes(t))return"continue";S((function(e){return[].concat(Object(u.a)(e),[t])})),y.get("/rooms/sync/".concat(t)).then((function(e){_((function(t){return[].concat(Object(u.a)(t),[e.data])}))}))};for(a.s();!(e=a.n()).done;)c()}catch(s){a.e(s)}finally{a.f()}}else 0==t.rooms.length&&0==T&&(y.post("/rooms/new",{roomName:"Paulin Alcoser",messages:[]}).then((function(e){var t={roomId:e.data._id};y.post("/users/update/".concat(M),t),y.post("/users/update/5fe4268653855170a466d7c1",t)})),L(1))}),[v,k,t]),Object(s.useEffect)((function(){var e=v.findIndex((function(e){return e._id===n.roomID})),t=Object(u.a)(v);t[e]&&(t[e]=Object(i.a)(Object(i.a)({},t[e]),{},{messages:[].concat(Object(u.a)(v[e].messages),[n])})),_(t)}),[n]),Object(s.useEffect)((function(){var e=a.subscribe("rooms");return e.bind("updated",(function(e){k.includes(e.roomId)||S((function(t){return[].concat(Object(u.a)(t),[e.roomId])}))})),function(){e.unbind_all(),e.unsubscribe()}}),[k]),Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsxs)("div",{className:"sidebar__header",children:[Object(c.jsx)(p.a,{src:null===b||void 0===b?void 0:b.photoURL}),Object(c.jsxs)("div",{className:"sidebar__headerRight",children:[Object(c.jsxs)(x.a,{children:[" ",Object(c.jsx)(l.a,{className:"headerRight__icon"})," "]}),Object(c.jsxs)(x.a,{children:[Object(c.jsx)(m.a,{className:"headerRight__icon"})," "]}),Object(c.jsx)(x.a,{children:Object(c.jsx)(f.a,{className:"headerRight__icon"})})]})]}),Object(c.jsx)("div",{className:"sidebar__search",children:Object(c.jsxs)("div",{className:"sidebar__searchContainer",children:[Object(c.jsx)(g.a,{}),Object(c.jsx)("input",{placeholder:"Search or start new chat",type:"text"})]})}),Object(c.jsxs)("div",{className:"sidebar__chats",children:[Object(c.jsx)(R,{addNewChat:!0}),Object(c.jsx)(R,{findRoom:!0}),v.length&&v.map((function(e){return Object(c.jsx)(R,{userID:t._id,id:e._id,roomName:e.roomName,finalMessage:e.messages[e.messages.length-1]},e._id)}))]})]})},L=(a(108),a(69)),P=a.n(L),A=a(70),F=a.n(A),H=a(71),z=a.n(H),B=a(40);var G=function(e){var t,a=e.rooms,n=e.userName,r=e.newMessage,o=Object(s.useState)(""),i=Object(j.a)(o,2),u=i[0],b=i[1],l=Object(w.f)(),h=(l.userId,l.roomId),m=Object(s.useState)(""),O=Object(j.a)(m,2),v=O[0],_=O[1],k=Object(s.useState)([]),S=Object(j.a)(k,2),C=S[0],M=S[1];Object(s.useEffect)((function(){if(h){var e,t=Object(d.a)(a);try{for(t.s();!(e=t.n()).done;){var c=e.value;if(c._id===h){_(c.roomName),M(c.messages);break}}}catch(s){t.e(s)}finally{t.f()}}}),[a,h]),Object(s.useEffect)((function(){if(h){var e,t=Object(d.a)(a);try{for(t.s();!(e=t.n()).done;){var c=e.value;if(r._id===h){_(c.roomName),M(c.messages);break}}}catch(s){t.e(s)}finally{t.f()}}}),[r]);var R=function(){var e=Object(I.a)(N.a.mark((function e(t){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new Date,e.next=4,y.post("/rooms/new/".concat(h),{message:u,name:n,timestamp:a});case 4:b("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"chat",children:[Object(c.jsxs)("div",{className:"chat__header",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("div",{className:"chat__headerInfo",children:[Object(c.jsx)("h3",{children:v}),Object(c.jsxs)("p",{children:[" Last seen at"," ",K(null===(t=C[C.length-1])||void 0===t?void 0:t.timestamp)," "]}),Object(c.jsxs)("p",{children:[" Room ID: ",h]})]}),Object(c.jsxs)("div",{className:"chat__headerRight",children:[Object(c.jsxs)(x.a,{children:[" ",Object(c.jsx)(g.a,{})," "]}),Object(c.jsxs)(x.a,{children:[" ",Object(c.jsx)(P.a,{})," "]}),Object(c.jsxs)(x.a,{children:[" ",Object(c.jsx)(f.a,{})," "]})]})]}),Object(c.jsx)("div",{className:"chat__body",children:C&&C.map((function(e){return Object(c.jsxs)("p",{className:"chat__message ".concat(e.name===n&&"chat__delivered"),children:[Object(c.jsx)("span",{className:"chat__name",children:e.name}),e.message,Object(c.jsx)("span",{className:"chat__timestamp",children:K(e.timestamp)})]},e._id)}))}),Object(c.jsxs)("div",{className:"chat__footer",children:[Object(c.jsx)(F.a,{}),Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{value:u,onChange:function(e){return b(e.target.value)},placeholder:"Type a message",type:"text"}),Object(c.jsx)("button",{onClick:R,type:"submit",children:"Send"})]}),Object(c.jsx)(z.a,{})]})]})};function K(e){var t=new Date(e),a=String(t),c=t.getTimezoneOffset();a.includes("GMT-")||(c=-c),t.setMinutes(t.getMinutes()+c);var s=new Date,n=String(s),r=s.getTimezoneOffset();n.includes("GMT-")&&(r=-r),t.setMinutes(t.getMinutes()+r);var o,i=t.getHours();o=i>9?String(i):"0".concat(i);var u,j=t.getMinutes();u=j>9?String(j):"0".concat(j);var d=t.getMonth()+1;return"".concat(o,":").concat(u," - ").concat(d,"/").concat(t.getDate(),"/").concat(t.getFullYear())}a(113);var J=a(129),W=a(72),Y=a.n(W),V=(B.a.initializeApp({apiKey:"AIzaSyAj6CuyL_rmC0I9tVRXhsiNRaBC-ntMpyE",authDomain:"kokoro-a2bf0.firebaseapp.com",databaseURL:"https://kokoro-a2bf0.firebaseio.com",projectId:"kokoro-a2bf0",storageBucket:"kokoro-a2bf0.appspot.com",messagingSenderId:"440779738043",appId:"1:440779738043:web:aa92afdcacf1ad7906929e"}),B.a.auth()),X=new B.a.auth.GoogleAuthProvider,q="SET_USER",Q=function(e,t){switch(console.log(t),t.type){case q:return Object(i.a)(Object(i.a)({},e),{},{user:t.user});default:return e}};var Z=function(){var e=U(),t=Object(j.a)(e,2),a=(t[0].user,t[1]);return Object(c.jsx)("div",{className:"login",children:Object(c.jsxs)("div",{className:"login__container",children:[Object(c.jsxs)("div",{className:"login__logo",children:[Object(c.jsx)("h1",{children:"KOKORO CHATS"}),Object(c.jsx)(Y.a,{className:"login__icon"})]}),Object(c.jsx)(S.b,{class:"link",to:"/",children:Object(c.jsx)(J.a,{class:"login__button",onClick:function(){V.signInWithPopup(X).then((function(e){a({type:q,user:e.user})})).catch((function(e){return alert(e.message)}))},children:"Sign In With Google"})})]})})};a(114);var $=function(e){var t=e.dbUserId,a=U(),s=Object(j.a)(a,2),n=s[0].user;return s[1],Object(c.jsxs)("div",{className:"userHome",children:[Object(c.jsx)("img",{src:null===n||void 0===n?void 0:n.photoURL}),Object(c.jsxs)("h1",{children:[" Hello ",n.displayName,"!"]}),t&&Object(c.jsx)(S.b,{className:"userHome__button",to:"user/".concat(t,"/room"),children:Object(c.jsx)("button",{children:"Unlock Your Chats"})})]})},ee=new M.a("8cc15aed3d6658d11adc",{cluster:"us3"});var te=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)({}),o=Object(j.a)(r,2),d=o[0],b=o[1],l=U(),h=Object(j.a)(l,2),m=h[0].user,O=(h[1],Object(s.useState)({})),f=Object(j.a)(O,2),p=f[0],x=f[1];return Object(s.useEffect)((function(){y.get("/rooms/sync").then((function(e){n(e.data)}))}),[a]),Object(s.useEffect)((function(){m&&y.get("/users/sync",{params:{email:m.email}}).then((function(e){if(""!==e.data)b(e.data);else{var t={userName:m.displayName,email:m.email,rooms:[]};y.post("users/new",t).then((function(e){b(e.data)}))}}))}),[m,d]),Object(s.useEffect)((function(){if(a){var e=ee.subscribe("messages");return e.bind("updated",(function(e){if(e._id!==p._id){x(e);var t=a.findIndex((function(t){return t._id===e.roomID})),c=Object(u.a)(a);a[t]&&(c[t]=Object(i.a)(Object(i.a)({},a[t]),{},{messages:[].concat(Object(u.a)(a[t].messages),[e])}),n(c))}})),function(){e.unbind_all(),e.unsubscribe()}}}),[p,a]),Object(c.jsx)("div",{className:"app",children:Object(c.jsx)(S.a,{children:m?Object(c.jsx)("div",{className:"app__body",children:Object(c.jsxs)(w.c,{children:[Object(c.jsxs)(w.a,{path:"/user/:userId/room/:roomId?",children:[d&&Object(c.jsx)(T,{currentUser:d,pusher:ee,newMessage:p}),Object(c.jsx)(G,{rooms:a,userName:m.displayName,newMessage:p})]}),Object(c.jsx)(w.a,{path:"/",children:d&&Object(c.jsx)($,{dbUserId:d._id})})]})}):Object(c.jsx)(Z,{})})})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,131)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};o.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(D,{initialState:{user:null},reducer:Q,children:Object(c.jsx)(te,{})})}),document.getElementById("root")),ae()},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.e913b6c5.chunk.js.map