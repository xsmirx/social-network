(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[6],{137:function(t,e,n){"use strict";n.r(e),n.d(e,"capitalize",(function(){return r.a})),n.d(e,"createChainedFunction",(function(){return o.a})),n.d(e,"createSvgIcon",(function(){return s.a})),n.d(e,"debounce",(function(){return a.a})),n.d(e,"deprecatedPropType",(function(){return i})),n.d(e,"isMuiElement",(function(){return u.a})),n.d(e,"ownerDocument",(function(){return c.a})),n.d(e,"ownerWindow",(function(){return f.a})),n.d(e,"requirePropFactory",(function(){return p})),n.d(e,"setRef",(function(){return l.a})),n.d(e,"unsupportedProp",(function(){return d})),n.d(e,"useControlled",(function(){return j.a})),n.d(e,"useEventCallback",(function(){return b.a})),n.d(e,"useForkRef",(function(){return _.a})),n.d(e,"unstable_useId",(function(){return v})),n.d(e,"useIsFocusVisible",(function(){return x.a}));var r=n(21),o=n(148),s=n(141),a=n(145);function i(t,e){return function(){return null}}var u=n(149),c=n(138),f=n(147);function p(t){return function(){return null}}var l=n(45);function d(t,e,n,r,o){return null}var j=n(143),b=n(25),_=n(38),h=n(0);function v(t){var e=h.useState(t),n=e[0],r=e[1],o=t||n;return h.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),o}var x=n(53)},164:function(t,e,n){"use strict";var r=n(165),o=n(166);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=o(n(0)),a=(0,r(n(168)).default)(s.createElement("path",{d:"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"}),"Send");e.default=a},165:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},166:function(t,e,n){var r=n(167);function o(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return o=function(){return t},t}t.exports=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!==typeof t)return{default:t};var e=o();if(e&&e.has(t))return e.get(t);var n={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var i=s?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=t[a]}return n.default=t,e&&e.set(t,n),n}},167:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},168:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(137)},212:function(t,e,n){t.exports={profile:"Profile_profile__3dzvr"}},213:function(t,e,n){t.exports={profileinfo:"ProfileInfo_profileinfo__oR5xr",profileinfo__background:"ProfileInfo_profileinfo__background__3ohqQ",profileinfo__description:"ProfileInfo_profileinfo__description__1cQ3-",profileinfo__about:"ProfileInfo_profileinfo__about__1w9uT"}},214:function(t,e,n){t.exports={myposts:"MyPosts_myposts__2WVXa"}},215:function(t,e,n){t.exports={post:"Post_post__K0jg0",post__username:"Post_post__username___WJLN",post__body:"Post_post__body__1azKY",post__avatar:"Post_post__avatar__2cjkV",post__text:"Post_post__text__24ja7"}},219:function(t,e,n){t.exports={addpost:"Textarea_addpost__2nRTD"}},357:function(t,e,n){"use strict";n.r(e);var r=n(36),o=n(37),s=n(39),a=n(40),i=n(0),u=n.n(i),c=n(212),f=n.n(c),p=n(213),l=n.n(p),d=n(48),j=n(356),b=n(2),_=function(t){Object(s.a)(n,t);var e=Object(a.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).activeteEditMode=function(){o.setState({editMode:!0})},o.deactivteEditMode=function(){o.setState({editMode:!1}),o.props.setStatus(o.state.status)},o.onCahgeStatus=function(t){o.setState({status:t.target.value})},o.state={editMode:!1,status:o.props.status},o}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(t,e,n){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){var t=this.state.editMode?Object(b.jsx)(j.a,{type:"text",autoFocus:!0,value:this.state.status,onChange:this.onCahgeStatus,onBlur:this.deactivteEditMode}):Object(b.jsx)("p",{onDoubleClick:this.activeteEditMode,children:this.props.status||"enter status"});return Object(b.jsx)("div",{children:t})}}]),n}(u.a.Component),h=function(t){return t.profile?Object(b.jsx)("div",{className:l.a.profileinfo,children:Object(b.jsxs)("div",{className:l.a.profileinfo__description,children:[Object(b.jsx)("img",{src:t.profile.photos.large,alt:"avatar"}),Object(b.jsxs)("div",{className:l.a.profileinfo__about,children:[Object(b.jsx)("p",{children:Object(b.jsx)("b",{children:t.profile.fullName})}),Object(b.jsx)(_,{status:t.status,setStatus:t.setStatus}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet."})]})]})}):Object(b.jsx)(d.a,{})},v=n(214),x=n.n(v),O=n(23),m=n(215),y=n.n(m),P=n(54);function g(t){return Object(b.jsxs)("div",{className:y.a.post,children:[Object(b.jsx)("div",{className:y.a.post__username,children:"Ivan"}),Object(b.jsxs)("div",{className:y.a.post__body,children:[Object(b.jsx)("div",{className:y.a.post__avatar,children:Object(b.jsx)("img",{src:P.a,alt:""})}),Object(b.jsx)("div",{className:y.a.post__text,children:Object(b.jsx)("p",{children:t.text})})]}),Object(b.jsx)("div",{className:y.a.post__likes,children:Object(b.jsxs)("p",{children:["Likes: ",t.likesCount]})})]})}var S=Object(O.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{}}))((function(t){var e=t.posts.map((function(t){return Object(b.jsx)(g,{text:t.message,likesCount:t.likesCount},t.id)}));return Object(b.jsx)("div",{children:e})})),k=n(59),M=n(5),w=n.n(M),C=n(12),N=n(351),I=n(164),E=n.n(I),D=n(177),A=n(219),V=n.n(A);var W=Object(O.b)((function(t){return{textAreaValue:t.profilePage.textAreaValue}}),(function(t){return{addPost:function(e){var n=Object(k.a)(e);t(n)}}}))((function(t){var e=Object(D.a)({initialValues:{textArea:""},onSubmit:function(){var e=Object(C.a)(w.a.mark((function e(n){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.addPost(n.textArea);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});return Object(b.jsxs)("form",{className:V.a.addpost,onSubmit:e.handleSubmit,children:[Object(b.jsx)(j.a,{label:"new post text",fullWidth:!0,multiline:!0,rows:3,variant:"outlined",name:"textArea",onChange:e.handleChange,value:e.values.textArea}),Object(b.jsx)("div",{children:Object(b.jsx)(N.a,{type:"submit",children:Object(b.jsx)(E.a,{})})})]})})),F=u.a.memo((function(){return Object(b.jsxs)("div",{className:x.a.myposts,children:[Object(b.jsx)(W,{}),Object(b.jsx)(S,{})]})})),z=function(t){return Object(b.jsxs)("div",{className:f.a.profile,children:[Object(b.jsx)(h,{profile:t.profile,status:t.status,setStatus:t.setStatus}),Object(b.jsx)(F,{})]})},L=n(6),R=n(35),T=function(t){Object(s.a)(n,t);var e=Object(a.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId||this.props.auth.id;t&&(this.props.getProfile(t),this.props.getStatus(t))}},{key:"render",value:function(){return this.props.match.params.userId||this.props.auth.id?Object(b.jsx)(z,{profile:this.props.profile,status:this.props.status,setStatus:this.props.setStatus}):Object(b.jsx)(L.a,{to:"/login"})}}]),n}(u.a.Component);e.default=Object(R.c)(L.f,Object(O.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,auth:t.auth}}),{getProfile:k.c,getStatus:k.d,setStatus:k.e}))(T)}}]);
//# sourceMappingURL=6.88ca0869.chunk.js.map