(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[5],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return a.a})),n.d(t,"createChainedFunction",(function(){return r.a})),n.d(t,"createSvgIcon",(function(){return o.a})),n.d(t,"debounce",(function(){return c.a})),n.d(t,"deprecatedPropType",(function(){return i})),n.d(t,"isMuiElement",(function(){return s.a})),n.d(t,"ownerDocument",(function(){return u.a})),n.d(t,"ownerWindow",(function(){return l.a})),n.d(t,"requirePropFactory",(function(){return _})),n.d(t,"setRef",(function(){return d.a})),n.d(t,"unsupportedProp",(function(){return f})),n.d(t,"useControlled",(function(){return b.a})),n.d(t,"useEventCallback",(function(){return g.a})),n.d(t,"useForkRef",(function(){return m.a})),n.d(t,"unstable_useId",(function(){return p})),n.d(t,"useIsFocusVisible",(function(){return v.a}));var a=n(21),r=n(148),o=n(141),c=n(145);function i(e,t){return function(){return null}}var s=n(149),u=n(138),l=n(147);function _(e){return function(){return null}}var d=n(45);function f(e,t,n,a,r){return null}var b=n(143),g=n(25),m=n(38),j=n(0);function p(e){var t=j.useState(e),n=t[0],a=t[1],r=e||n;return j.useEffect((function(){null==n&&a("mui-".concat(Math.round(1e5*Math.random())))}),[n]),r}var v=n(53)},164:function(e,t,n){"use strict";var a=n(165),r=n(166);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),c=(0,a(n(168)).default)(o.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=c},165:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},166:function(e,t,n){var a=n(167);function r(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return r=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var t=r();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var i=o?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(n,c,i):n[c]=e[c]}return n.default=e,t&&t.set(e,n),n}},167:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n(137)},325:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA"}},326:function(e,t,n){e.exports={block:"Chat_block__2SyYK",block__message:"Chat_block__message__1H5Uq",block__input:"Chat_block__input__3_O8V",block__textarea:"Chat_block__textarea__3Wui8",block__send:"Chat_block__send__3tcjo"}},327:function(e,t,n){e.exports={block:"Message_block__Sq-gH",block__me:"Message_block__me__3bkXb",block__from:"Message_block__from__3K8m2"}},328:function(e,t,n){e.exports={dialogs:"DialogsName_dialogs__2kZZ6"}},329:function(e,t,n){e.exports={dialog:"DialogName_dialog__1hmot",dialog_active:"DialogName_dialog_active__6CCYB",dialog__description:"DialogName_dialog__description__3bzmP",dialog__avatar:"DialogName_dialog__avatar__3vYWA",dialog__title:"DialogName_dialog__title__1Hu-W",dialog__name:"DialogName_dialog__name__3yStT",dialog__time:"DialogName_dialog__time__lH1Ym",dialog__lastMessege:"DialogName_dialog__lastMessege__1GMSy"}},358:function(e,t,n){"use strict";n.r(t);var a,r=n(3),o=(n(0),n(23)),c=n(6),i=n(2),s=function(e){return{isAuth:e.auth.isAuth}},u=n(325),l=n.n(u),_=n(71),d=n(5),f=n.n(d),b=n(12),g=n(356),m=n(351),j=n(164),p=n.n(j),v=n(177),h=n(326),x=n.n(h),O=n(327),M=n.n(O),y=n(54),k=function(e){if(e.fromMe){var t="".concat(M.a.block," ").concat(M.a.block__me);return Object(i.jsx)("div",{className:t,children:Object(i.jsx)("p",{children:e.message})})}var n="".concat(M.a.block," ").concat(M.a.block__from);return Object(i.jsxs)("div",{className:n,children:[Object(i.jsx)("img",{src:y.a,alt:"userAvatar"}),Object(i.jsx)("p",{children:e.message})]})},N=Object(o.b)((function(e){return{newMessageBody:e.dialogsPage.newMessageBody,chat:e.dialogsPage.chat}}),(function(e){return{sendMessage:function(t){var n=Object(_.b)(t);e(n)}}}))((function(e){var t=e.chat.map((function(e){return Object(i.jsx)(k,{message:e.message,fromMe:e.fromMe},e.id)})),n=Object(v.a)({initialValues:{textMessage:""},onSubmit:function(){var t=Object(b.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.sendMessage(n.textMessage);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),a=n.values,r=n.handleSubmit,o=n.handleChange;return Object(i.jsxs)("div",{className:x.a.block,children:[Object(i.jsx)("div",{className:x.a.block__message,children:t}),Object(i.jsxs)("form",{onSubmit:r,className:x.a.block__input,children:[Object(i.jsx)(g.a,{name:"textMessage",fullWidth:!0,variant:"outlined",multiline:!0,rows:2,onChange:o,value:a.textMessage}),Object(i.jsx)("div",{children:Object(i.jsx)(m.a,{type:"submit",children:Object(i.jsx)(p.a,{})})})]})]})})),S=n(328),P=n.n(S),w=n(15),C=n(329),D=n.n(C),A=function(e){return Object(i.jsxs)(w.b,{to:"/dialogs/".concat(e.id),className:D.a.dialog,activeClassName:D.a.dialog_active,children:[Object(i.jsx)("div",{className:D.a.dialog__avatar,children:Object(i.jsx)("img",{src:y.a,alt:"userAvatar"})}),Object(i.jsxs)("div",{className:D.a.dialog__description,children:[Object(i.jsxs)("div",{className:D.a.dialog__title,children:[Object(i.jsx)("p",{className:D.a.dialog__name,children:e.name}),Object(i.jsx)("p",{className:D.a.dialog__time,children:e.timeLastMessege})]}),Object(i.jsx)("div",{className:D.a.dialog__lastMessege,children:Object(i.jsx)("p",{children:e.lastMessege})})]})]})},W=Object(o.b)((function(e){return{dialogs:e.dialogsPage.dialogs}}),(function(e){return{}}))((function(e){var t=e.dialogs.map((function(e){return Object(i.jsx)(A,{id:e.id,name:e.name,lastMessege:e.lastMessege,timeLastMessege:e.timeLastMessege},e.id)}));return Object(i.jsx)("div",{className:P.a.dialogs,children:t})})),E=(a=function(e){return Object(i.jsxs)("div",{className:l.a.dialogs,children:[Object(i.jsx)(W,{}),Object(i.jsx)("div",{className:l.a.dialogs__messeges,children:Object(i.jsx)(N,{})})]})},Object(o.b)(s)((function(e){return e.isAuth?Object(i.jsx)(a,Object(r.a)({},e)):Object(i.jsx)(c.a,{to:"/login"})})));t.default=E}}]);
//# sourceMappingURL=5.7708516b.chunk.js.map