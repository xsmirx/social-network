(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[1],{115:function(e,t,n){},116:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(22),c=n.n(s),i=n(15),u=function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,349)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},o=n(36),l=n(37),d=n(39),f=n(40),b=n(6),j=n(23),p=(n(92),n(93),n(3)),h=n(30),m="INITIALIZED_SUCCESS",g={initialized:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}},v=n(131),x=n(44),_=n.n(x),w=n.p+"static/media/logo.2d41f3bf.png",y=n(2);function k(e){return Object(y.jsxs)("header",{className:_.a.header,children:[Object(y.jsx)("div",{className:_.a.header__icon,children:Object(y.jsx)("img",{src:w,alt:"logo"})}),Object(y.jsx)("div",{className:_.a.loginBlock,children:e.isAuth?Object(y.jsxs)(y.Fragment,{children:[e.login," ",Object(y.jsx)(v.a,{color:"primary",variant:"outlined",size:"small",onClick:e.logout,children:"logout"})]}):Object(y.jsx)(i.b,{to:"/login",children:"Login"})})]})}var S=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(y.jsx)(k,Object(p.a)({},this.props))}}]),n}(a.a.Component),C=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:h.d})(S),E=n(24),N=n.n(E),L=function(){return Object(y.jsxs)("nav",{className:N.a.navbar,children:[Object(y.jsx)(i.b,{to:"/profile",activeClassName:N.a.active,children:"Profile"}),Object(y.jsx)(i.b,{to:"/dialogs",activeClassName:N.a.active,children:"Message"}),Object(y.jsx)(i.b,{to:"/users",activeClassName:N.a.active,children:"Users"}),Object(y.jsx)(i.b,{to:"/news",activeClassName:N.a.active,children:"News"}),Object(y.jsx)(i.b,{to:"/music",activeClassName:N.a.active,children:"Music"}),Object(y.jsx)(i.b,{to:"/settings",activeClassName:N.a.active,children:"Settings"})]})},M=n(52),P=n.n(M),I=n(78),T=n.n(I),A=n(54),F=function(e){return Object(y.jsxs)("div",{className:T.a.block,children:[Object(y.jsx)("img",{src:A.a,alt:"userAvatar"}),Object(y.jsx)("p",{children:e.name})]})},U=Object(j.b)((function(e){return{friends:e.sidebar.friends}}),(function(e){return{}}))((function(e){var t=e.friends.map((function(e){return Object(y.jsx)(F,{name:e.name},e.id)}));return Object(y.jsxs)("div",{className:P.a.block,children:[Object(y.jsx)("h2",{children:"Friends"}),Object(y.jsx)("div",{className:P.a.block__friends,children:t})]})})),z=n(48),R=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,357))})),D=a.a.lazy((function(){return Promise.all([n.e(8),n.e(7)]).then(n.bind(null,362))})),H=a.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(9)]).then(n.bind(null,363))})),G=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,358))})),B=a.a.lazy((function(){return n.e(11).then(n.bind(null,353))})),W=a.a.lazy((function(){return n.e(10).then(n.bind(null,354))})),J=a.a.lazy((function(){return n.e(12).then(n.bind(null,355))})),K=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("div",{className:"App-block Header",children:Object(y.jsx)(C,{})}),Object(y.jsx)("div",{className:"App-block Navbar",children:Object(y.jsx)(L,{})}),Object(y.jsx)("div",{className:"App-block Sidebar",children:Object(y.jsx)(U,{})}),Object(y.jsx)("div",{className:"App-block Main",children:Object(y.jsxs)(a.a.Suspense,{fallback:Object(y.jsx)(z.a,{}),children:[Object(y.jsx)(b.b,{path:"/login",render:function(){return Object(y.jsx)(H,{})}}),Object(y.jsx)(b.b,{path:"/profile/:userId?",render:function(){return Object(y.jsx)(R,{})}}),Object(y.jsx)(b.b,{path:"/dialogs",render:function(){return Object(y.jsx)(G,{})}}),Object(y.jsx)(b.b,{path:"/users",render:function(){return Object(y.jsx)(D,{})}}),Object(y.jsx)(b.b,{path:"/news",render:function(){return Object(y.jsx)(B,{})}}),Object(y.jsx)(b.b,{path:"/music",render:function(){return Object(y.jsx)(W,{})}}),Object(y.jsx)(b.b,{path:"/settings",render:function(){return Object(y.jsx)(J,{})}})]})})]}):Object(y.jsx)(z.a,{})}}]),n}(a.a.Component),V=Object(j.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(h.a)());Promise.all([t]).then((function(){return e({type:m})}))}}})(K),X=n(35),Y=n(59),q=n(71),Q={friends:[{id:1,name:"Inna"},{id:2,name:"Ira"},{id:3,name:"Mira"},{id:4,name:"Lisa"},{id:5,name:"Nastya"},{id:6,name:"Lena"}]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q;return e},$=n(72),ee=n(80),te=Object(X.b)({profilePage:Y.b,dialogsPage:q.a,sidebar:Z,usersPage:$.a,auth:h.b,app:O}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.c,re=Object(X.d)(te,ne(Object(X.a)(ee.a)));window.store=re;var ae=re;n(115);c.a.render(Object(y.jsx)(j.a,{store:ae,children:Object(y.jsx)(i.a,{children:Object(y.jsx)(V,{})})}),document.getElementById("root")),u()},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(73),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"7972be0e-bbb0-4c06-8150-e10a23a2565b"}})},24:function(e,t,n){e.exports={navbar:"Navbar_navbar__CLYHD",active:"Navbar_active__3mbhk"}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return m}));var r=n(5),a=n.n(r),s=n(12),c=n(3),i=n(17),u=function(){return i.a.get("auth/me").then((function(e){return e.data}))},o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},l=function(){return i.a.delete("auth/login").then((function(e){return e.data}))},d="samurai-network/auth/SET_USER_DATA",f="samurai-network/auth/SET_MESSAGES",b={id:null,email:null,login:null,isAuth:!1,messages:[]},j=function(e,t,n,r){return{type:d,payload:{id:e,email:t,login:n,isAuth:r}}},p=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:0===(n=e.sent).resultCode&&t(j(n.data.id,n.data.email,n.data.login,!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e,t,n){return function(){var r=Object(s.a)(a.a.mark((function r(s){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o(e,t,n);case 2:0===(c=r.sent).resultCode?s(p()):s((a=c.messages,{type:f,arrayMessages:a}));case 4:case"end":return r.stop()}var a}),r)})));return function(e){return r.apply(this,arguments)}}()},m=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:0===e.sent.resultCode&&t(j(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(c.a)(Object(c.a)({},e),t.payload);case f:return Object(c.a)(Object(c.a)({},e),{},{messages:t.arrayMessages});default:return e}}},44:function(e,t,n){e.exports={header:"Header_header__1VCKf",header__icon:"Header_header__icon__bqQrV",loginBlock:"Header_loginBlock__6mma5"}},48:function(e,t,n){"use strict";n(0);var r=n(117),a=n(79),s=n.n(a),c=n(2);t.a=function(e){return Object(c.jsx)("div",{className:s.a.block,children:Object(c.jsx)(r.a,{})})}},52:function(e,t,n){e.exports={block:"Friends_block__20hKt",block__friends:"Friends_block__friends__29yH6"}},54:function(e,t,n){"use strict";t.a=n.p+"static/media/user.2e56bb2b.png"},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return v}));var r=n(5),a=n.n(r),s=n(12),c=n(28),i=n(3),u=n(17),o=function(e){return u.a.get("profile/".concat(e)).then((function(e){return e.data}))},l=function(e){return u.a.get("profile/status/".concat(e)).then((function(e){return e.data}))},d=function(e){return u.a.put("profile/status",{status:e}).then((function(e){return e.data}))},f="ADD-POST",b="SET_USER_PROFILE",j="SET_USER_STATUS",p={profile:null,status:"default value",posts:[{id:1,message:"Lorem",likesCount:12},{id:2,message:"Hello, best of the best social network!",likesCount:87},{id:3,message:"wow!",likesCount:4}]},h=function(e){return{type:f,post:e}},m=function(e){return{type:j,status:e}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o(e);case 2:r=t.sent,n({type:b,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(m(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:0===t.sent.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:e.posts.length+1,message:t.post,likesCount:8}])});case b:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}},71:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(28),a=n(3),s="SEND-MESSAGE",c={dialogs:[{id:1,name:"Inna",lastMessege:"Lorem ipsum dolor sit amet.",timeLastMessege:"10:50"},{id:2,name:"Ira",lastMessege:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",timeLastMessege:"09:45"},{id:3,name:"Sonya",lastMessege:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima...",timeLastMessege:"yesterday"},{id:4,name:"Nastya",lastMessege:"Lorem ipsum dolor.",timeLastMessege:"yesterday"},{id:5,name:"Tasya",lastMessege:"Lorem ipsum.",timeLastMessege:"21.05.2021 21:56"}],chat:[{id:1,message:"Hi",fromMe:!0},{id:2,message:"How are you?",fromMe:!1},{id:3,message:"I'm learning English now)) dhkgj jshhdg jashg jhgajsdh jhgasdvjh dgslf hgsdljhf gljhgdljhf gjlsdhgflj hsgdlfhg hgdjgfjhdgfjl hdjfh jhdj lfhgjl f!!!",fromMe:!1},{id:4,message:"\u041a\u0430\u043a \u0442\u044b \u043f\u043e\u0436\u0438\u0432\u0430\u0435\u0448\u044c? \u0414\u0430\u0432\u043d\u043e \u0442\u0435\u0431\u044f \u043d\u0435 \u0441\u043b\u044b\u0448\u043d\u043e \u0438 \u043d\u0435 \u0432\u0438\u0434\u043d\u043e! \u0423 \u0442\u0435\u0431\u044f \u0432\u0441\u0435 \u043e\u043a?",fromMe:!0},{id:5,message:"\u0423\u0436\u0435 \u0441\u043a\u0443\u0447\u0430\u044e!",fromMe:!0},{id:6,message:"\u041a\u043e\u0433\u0434\u0430 \u0441\u043c\u043e\u0436\u0435\u043c \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044c\u0441\u044f?",fromMe:!0},{id:7,message:"\u0412\u0441\u0435 \u0445\u043e\u0440\u043e\u0448\u043e, \u043f\u0440\u0438 \u0432\u0441\u0442\u0440\u0435\u0447\u0435 \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0443))",fromMe:!1},{id:8,message:"\u0414\u0430\u0432\u0430\u0439 \u0432 \u0441\u0443\u0431\u0431\u043e\u0442\u0443 \u0432 \u044d\u0442\u0443? \u0421\u043c\u043e\u0436\u0435\u0448\u044c?",fromMe:!1},{id:9,message:"\u0414\u0430, \u0441\u0443\u043f\u0435\u0440! \u0414\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u043b\u0438\u0441\u044c. \u0414\u043e \u0441\u0443\u0431\u0431\u043e\u0442\u044b!",fromMe:!0}]},i=function(e){return{type:s,message:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(a.a)(Object(a.a)({},e),{},{chat:[].concat(Object(r.a)(e.chat),[{id:e.chat.length+1,message:t.message,fromMe:!0}])});default:return e}}},72:function(e,t,n){"use strict";n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return S})),n.d(t,"d",(function(){return C}));var r=n(5),a=n.n(r),s=n(12),c=n(28),i=n(3),u=n(17),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return u.a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return u.a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return u.a.delete("follow/".concat(e)).then((function(e){return e.data}))}},l=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},d="FOLLOW",f="UNFOLLOW",b="SET_USERS",j="SET_TOTAL_USERS_COUNT",p="SET_CURRENT_PAGE",h="TOGLE_IS_FETCHING",m="TOGGLE_FOLLOW_PROGRESS",g={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowProgress:[]},O=function(e){return{type:d,userId:e}},v=function(e){return{type:f,userId:e}},x=function(e){return{type:p,currentPage:e}},_=function(e){return{type:h,isFetching:e}},w=function(e){return{type:m,userId:e}},y=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(_(!0)),r(x(e)),n.next=4,o.getUsers(e,t);case 4:s=n.sent,r((c=s.items,{type:b,users:c})),r((a=s.totalCount,{type:j,totalCount:a})),r(_(!1));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(w(n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&(t(s(n)),t(w(n)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k(n,e,o.follow.bind(o),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},C=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k(n,e,o.unfollow.bind(o),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(i.a)(Object(i.a)({},e),{},{users:l(e.users,t.userId,"id",{followed:!0})});case f:return Object(i.a)(Object(i.a)({},e),{},{users:l(e.users,t.userId,"id",{followed:!1})});case b:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case j:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalCount});case p:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case h:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case m:return Object(i.a)(Object(i.a)({},e),{},{isFollowProgress:e.isFollowProgress.some((function(e){return e===t.userId}))?e.isFollowProgress.filter((function(e){return e!==t.userId})):[].concat(Object(c.a)(e.isFollowProgress),[t.userId])});default:return e}}},78:function(e,t,n){e.exports={block:"User_block__2WT5L"}},79:function(e,t,n){e.exports={block:"Preloader_block__1JS0c"}},93:function(e,t,n){}},[[116,2,4]]]);
//# sourceMappingURL=main.197c6feb.chunk.js.map