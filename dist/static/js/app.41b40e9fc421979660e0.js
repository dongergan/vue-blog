webpackJsonp([1],{"5maC":function(t,e){},"7B1U":function(t,e){},F2uI:function(t,e){},GXw4:function(t,e){},"J+NF":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s=n("Dd8w"),r=n.n(s),o=n("//Fk"),i=n.n(o),u=n("mtWM"),c=n.n(u),l=n("zL8q"),d=n.n(l);function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new i.a(function(a,s){var r={url:t,method:e};"get"===e.toLowerCase()?r.params=n:r.data=n,c()(r).then(function(t){console.log(t.data),"ok"===t.data.status?a(t.data):(l.Message.error(t.data.msg),s(t.data))}).catch(function(t){l.Message.error("网络异常"),s({msg:"网络异常"})})})}c.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",c.a.defaults.baseURL="http://blog-server.hunger-valley.com",c.a.defaults.withCredentials=!0;var g="/auth/register",v="/auth/login",h="/auth/logout",f="/auth",_={register:function(t){var e=t.username,n=t.password;return p(g,"POST",{username:e,password:n})},login:function(t){var e=t.username,n=t.password;return p(v,"POST",{username:e,password:n})},logout:function(){return p(h)},getInfo:function(){return p(f)}},m=n("NYxO");window.auth=_;var b={data:function(){return{}},computed:r()({},Object(m.c)(["isLogin","user"])),created:function(){this.checkLogin()},methods:r()({},Object(m.b)(["checkLogin","logout"]),{onLogout:function(){this.logout()}})},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{class:{login:t.isLogin,"no-login":!t.isLogin}},[t.isLogin?t._e():[n("h1",[t._v("Create&Share")]),t._v(" "),n("p",[t._v("精品博客汇聚")]),t._v(" "),n("div",{staticClass:"btns"},[n("router-link",{attrs:{to:"/login"}},[n("el-button",[t._v("立即登录")])],1),t._v(" "),n("router-link",{attrs:{to:"/register"}},[n("el-button",[t._v("注册账号")])],1)],1)],t._v(" "),t.isLogin?[n("h1",[n("router-link",{attrs:{to:"/"}},[t._v("Let's share")])],1),t._v(" "),n("router-link",{attrs:{to:"/create"}},[n("i",{staticClass:"edit el-icon-plus"})]),t._v(" "),n("div",{staticClass:"user"},[n("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:t.user.username,title:t.user.username}}),t._v(" "),n("ul",{staticClass:"drop"},[n("li",[n("router-link",{attrs:{to:"/my"}},[t._v("我的")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"#"},on:{click:t.onLogout}},[t._v("注销")])])])])]:t._e()],2)},staticRenderFns:[]};var I={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("@ 董二千 2019")])])}]};var w={name:"App",components:{Header:n("VU/8")(b,x,!1,function(t){n("wRXT")},null,null).exports,Footer:n("VU/8")(null,I,!1,function(t){n("z6gE")},"data-v-1b52d178",null).exports}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{id:"header"}}),this._v(" "),e("main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var C=n("VU/8")(w,k,!1,function(t){n("J+NF")},null,null).exports,y=n("/ocq"),E={GET_LIST:"/blog",GET_DETAIL:"/blog/:blogId",CREATE:"/blog",UPDATE:"/blog/:blogId",DELETE:"/blog/:blogId"},L={getBlogs:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1},e=t.page,n=void 0===e?1:e,a=t.userId,s=t.atIndex;return p(E.GET_LIST,"GET",{page:n,userId:a,atIndex:s})},getIndexBlogs:function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{page:1}).page,e=void 0===t?1:t;return this.getBlogs({page:e,atIndex:!0})},getBlogsByUserId:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{page:1},n=e.page,a=void 0===n?1:n,s=e.atIndex;return this.getBlogs({userId:t,page:a,atIndex:s})},getDetail:function(t){var e=t.blogId;return p(E.GET_DETAIL.replace(":blogId",e))},updateBlog:function(t,e){var n=t.blogId,a=e.title,s=e.content,r=e.description,o=e.atIndex;return p(E.UPDATE.replace(":blogId",n),"PATCH",{title:a,content:s,description:r,atIndex:o})},deleteBlog:function(t){var e=t.blogId;return p(E.DELETE.replace(":blogId",e),"DELETE")},createBlog:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"",content:"",description:"",atIndex:!1},e=t.title,n=void 0===e?"":e,a=t.content,s=void 0===a?"":a,r=t.description,o=void 0===r?"":r,i=t.atIndex,u=void 0!==i&&i;return p(E.CREATE,"POST",{title:n,content:s,description:o,atIndex:u})}},D={data:function(){return{blogs:[],total:0,page:1}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,L.getIndexBlogs({page:this.page}).then(function(e){console.log(e),t.blogs=e.data,t.total=e.total,t.page=e.page})},methods:{onPageChange:function(t){var e=this;console.log(t),L.getIndexBlogs({page:t}).then(function(n){console.log(n),e.blogs=n.data,e.total=n.total,e.page=n.page,e.$router.push({path:"/",query:{page:t}})})}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[n("section",{staticClass:"blog-posts"},t._l(t.blogs,function(e){return n("router-link",{key:t.blogId,staticClass:"item",attrs:{to:"/detail/"+e.id}},[n("figure",{staticClass:"avatar"},[n("img",{attrs:{src:e.user.avatar,alt:e.user.username}}),t._v(" "),n("figcaption",[t._v(t._s(e.user.username))])]),t._v(" "),n("h3",[t._v(t._s(e.title)),n("span",[t._v(" "+t._s(t.friendlyDate(e.createdAt)))])]),t._v(" "),n("p",[t._v(t._s(e.description))])])}),1),t._v(" "),n("section",{staticClass:"pagination"},[n("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var R=n("VU/8")(D,$,!1,function(t){n("kA1U")},"data-v-b27a7004",null).exports,T={data:function(){return{username:"",password:""}},methods:r()({},Object(m.b)(["login"]),{onLogin:function(){var t=this;this.login({username:this.username,password:this.password}).then(function(){t.$router.push({path:t.$route.query.redirect||"/"})})}})},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"login"}},[n("h4",[t._v("用户名")]),t._v(" "),n("el-input",{attrs:{placeholder:"用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("h4",[t._v("密码")]),t._v(" "),n("el-input",{attrs:{type:"password",placeholder:"密码"},on:{keyup:t.onLogin},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("el-button",{attrs:{size:"medium"},on:{click:t.onLogin}},[t._v("立即登录")]),t._v(" "),n("p",{staticClass:"notice"},[t._v("没有账号？"),n("router-link",{attrs:{to:"/register"}},[t._v("注册新用户")])],1)],1)},staticRenderFns:[]};var U=n("VU/8")(T,A,!1,function(t){n("SvpE")},null,null).exports,B=n("oOoA"),F=n.n(B),q={data:function(){return{title:"",rawContent:"",user:{},createdAt:""}},created:function(){var t=this;this.blogId=this.$route.params.blogId,L.getDetail({blogId:this.blogId}).then(function(e){console.log(e),t.title=e.data.title,t.rawContent=e.data.content,t.createdAt=e.data.createdAt,t.user=e.data.user})},computed:{markdown:function(){return F()(this.rawContent)}}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"detail"}},[n("section",{staticClass:"user-info"},[n("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:t.user.username,title:t.user.username}}),t._v(" "),n("h3",[t._v(t._s(t.title))]),t._v(" "),n("p",[n("router-link",{attrs:{to:"/user/"+t.user.id}},[t._v(t._s(t.user.username))]),t._v(" 发布于"+t._s(t.friendlyDate(t.createdAt)))],1)]),t._v(" "),n("section",{staticClass:"article",domProps:{innerHTML:t._s(t.markdown)}})])},staticRenderFns:[]};var O=n("VU/8")(q,P,!1,function(t){n("GXw4")},null,null).exports,z={data:function(){return{blogId:null,title:"",description:"",content:"",atIndex:!1}},created:function(){var t=this;this.blogId=this.$route.params.blogId,L.getDetail({blogId:this.blogId}).then(function(e){t.title=e.data.title,t.description=e.data.description,t.content=e.data.content,t.atIndex=e.data.atIndex})},methods:{onEdit:function(){var t=this;L.updateBlog({blogId:this.blogId},{title:this.title,content:this.content,description:this.description,atIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit"}},[n("h1",[t._v("编辑文章")]),t._v(" "),n("h3",[t._v("文章标题")]),t._v(" "),n("el-input",{model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),n("h3",[t._v("内容简介")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:6}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),n("h3",[t._v("文章内容")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:30}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),n("el-button",{on:{click:t.onEdit}},[t._v("确定")])],1)},staticRenderFns:[]};var M=n("VU/8")(z,V,!1,function(t){n("7B1U")},null,null).exports,j={data:function(){return{title:"",description:"",content:"",atIndex:!1}},methods:{onCreate:function(){var t=this;L.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit"}},[n("h1",[t._v("创建文章")]),t._v(" "),n("h3",[t._v("文章标题")]),t._v(" "),n("el-input",{model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),n("h3",[t._v("内容简介")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:6}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),n("h3",[t._v("文章内容")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:30}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),n("p",[n("label",[t._v("是否展示到首页")]),t._v(" "),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),n("el-button",{on:{click:t.onCreate}},[t._v("确定")])],1)},staticRenderFns:[]};var S=n("VU/8")(j,G,!1,function(t){n("uqwr")},null,null).exports,H={data:function(){return{username:"",password:""}},methods:r()({},Object(m.b)(["register"]),{onRegister:function(){var t=this;this.register({username:this.username,password:this.password}).then(function(){t.$router.push({path:"/"})})}})},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"register"}},[n("h4",[t._v("用户名")]),t._v(" "),n("el-input",{attrs:{placeholder:"用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),n("h4",[t._v("密码")]),t._v(" "),n("el-input",{attrs:{type:"password",placeholder:"密码"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onRegister(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("el-button",{attrs:{size:"medium"},on:{click:t.onRegister}},[t._v("立即注册")]),t._v(" "),n("p",{staticClass:"notice"},[t._v("已有账号？"),n("router-link",{attrs:{to:"/login"}},[t._v("立即登录")])],1)],1)},staticRenderFns:[]};var X=n("VU/8")(H,N,!1,function(t){n("5maC")},null,null).exports,Y=n("pFYg"),J=n.n(Y),W={data:function(){return{blogs:[],user:{},page:1,total:0}},created:function(){var t=this;this.userId=this.$route.params.userId,this.page=this.$route.query.page||1,L.getBlogsByUserId(this.userId,{page:this.page}).then(function(e){console.log(e),t.page=e.page,t.total=e.total,t.blogs=e.data,e.data.length>0&&(t.user=e.data[0].user)})},methods:{onPageChange:function(t){var e=this;L.getBlogsByUserId(this.userId,{page:t}).then(function(n){console.log(n),e.blogs=n.data,e.total=n.total,e.page=n.page,e.$router.push({path:"/user/"+e.userId,query:{page:t}})})},splitDate:function(t){var e="object"===(void 0===t?"undefined":J()(t))?t:new Date(t);return{date:e.getDate(),month:e.getMonth()+1,year:e.getFullYear()}}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user"}},[n("section",{staticClass:"user-info"},[n("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:t.user.username}}),t._v(" "),n("h3",[t._v(t._s(t.user.username))])]),t._v(" "),n("section",t._l(t.blogs,function(e){return n("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[n("div",{staticClass:"date"},[n("span",{staticClass:"day"},[t._v(t._s(t.splitDate(e.createdAt).date))]),t._v(" "),n("span",{staticClass:"month"},[t._v(t._s(t.splitDate(e.createdAt).month)+"月")]),t._v(" "),n("span",{staticClass:"year"},[t._v(t._s(t.splitDate(e.createdAt).year))])]),t._v(" "),n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.description))])])}),1),t._v(" "),n("section",{staticClass:"pagination"},[n("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var Q=n("VU/8")(W,K,!1,function(t){n("zc/7")},null,null).exports,Z=n("Xxa5"),tt=n.n(Z),et=n("exGp"),nt=n.n(et),at={data:function(){return{blogs:[],page:1,total:0}},computed:r()({},Object(m.c)(["user"])),created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,L.getBlogsByUserId(this.user.id,{page:this.page}).then(function(e){console.log(e),t.page=e.page,t.total=e.total,t.blogs=e.data})},methods:{onPageChange:function(t){var e=this;L.getBlogsByUserId(this.user.id,{page:t}).then(function(n){console.log(n),e.blogs=n.data,e.total=n.total,e.page=n.page,e.$router.push({path:"/my",query:{page:t}})})},onDelete:function(t){var e=this;return nt()(tt.a.mark(function n(){return tt.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 2:return n.next=4,L.deleteBlog({blogId:t});case 4:e.$message.success("删除成功"),e.blogs=e.blogs.filter(function(e){return e.id!=t});case 6:case"end":return n.stop()}},n,e)}))()},splitDate:function(t){var e="object"===(void 0===t?"undefined":J()(t))?t:new Date(t);return{date:e.getDate(),month:e.getMonth()+1,year:e.getFullYear()}}}},st={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user"}},[n("section",{staticClass:"user-info"},[n("img",{staticClass:"avatar",attrs:{src:t.user.avatar,alt:t.user.username}}),t._v(" "),n("h3",[t._v(t._s(t.user.username))])]),t._v(" "),n("section",t._l(t.blogs,function(e){return n("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[n("div",{staticClass:"date"},[n("span",{staticClass:"day"},[t._v(t._s(t.splitDate(e.createdAt).date))]),t._v(" "),n("span",{staticClass:"month"},[t._v(t._s(t.splitDate(e.createdAt).month)+"月")]),t._v(" "),n("span",{staticClass:"year"},[t._v(t._s(t.splitDate(e.createdAt).year))])]),t._v(" "),n("h3",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.description))]),t._v(" "),n("div",{staticClass:"actions"},[n("router-link",{attrs:{to:"/edit/"+e.id}},[t._v("编辑")]),t._v(" "),n("a",{attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.onDelete(e.id)}}},[t._v("删除")])],1)])}),1),t._v(" "),n("section",{staticClass:"pagination"},[n("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var rt=n("VU/8")(at,st,!1,function(t){n("F2uI")},null,null).exports,ot={state:{user:null,isLogin:!1},getters:{user:function(t){return t.user},isLogin:function(t){return t.isLogin}},mutations:{setUser:function(t,e){t.user=e.user},setLogin:function(t,e){t.isLogin=e.isLogin}},actions:{login:function(t,e){var n=t.commit,a=e.username,s=e.password;return _.login({username:a,password:s}).then(function(t){n("setUser",{user:t.data}),n("setLogin",{isLogin:!0})})},register:function(t,e){var n=this,a=t.commit,s=e.username,r=e.password;return nt()(tt.a.mark(function t(){var e;return tt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.register({username:s,password:r});case 2:return e=t.sent,a("setUser",{user:e.data}),a("setLogin",{isLogin:!0}),t.abrupt("return",e.data);case 6:case"end":return t.stop()}},t,n)}))()},logout:function(t){var e=this,n=t.commit;return nt()(tt.a.mark(function t(){return tt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.logout();case 2:n("setUser",{user:null}),n("setLogin",{isLogin:!1});case 4:case"end":return t.stop()}},t,e)}))()},checkLogin:function(t){var e=this,n=t.commit,a=t.state;return nt()(tt.a.mark(function t(){var s;return tt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.isLogin){t.next=2;break}return t.abrupt("return",!0);case 2:return t.next=4,_.getInfo();case 4:if(s=t.sent,n("setLogin",{isLogin:s.isLogin}),s.isLogin){t.next=8;break}return t.abrupt("return",!1);case 8:return n("setUser",{user:s.data}),t.abrupt("return",!0);case 10:case"end":return t.stop()}},t,e)}))()}}};a.default.use(m.a);var it=new m.a.Store({modules:{auth:ot,blog:{state:{},getters:{},mutations:{},actions:{}}}});a.default.use(y.a);var ut=new y.a({routes:[{path:"/",component:R},{path:"/login",component:U},{path:"/register",component:X},{path:"/detail/:blogId",component:O},{path:"/edit/:blogId",component:M,meta:{requiresAuth:!0}},{path:"/create",component:S,meta:{requiresAuth:!0}},{path:"/user/:userId",component:Q},{path:"/my",component:rt,meta:{requiresAuth:!0}}]});ut.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})?it.dispatch("checkLogin").then(function(e){e?n():n({path:"/login",query:{redirect:t.fullPath}})}):n()});var ct=ut;n("tvR6");function lt(t){var e=("object"===(void 0===t?"undefined":J()(t))?t:new Date(t)).getTime(),n=Date.now()-e,a="";switch(!0){case n<6e4:a="刚刚";break;case n<36e5:a=Math.floor(n/6e4)+"分钟前";break;case n<864e5:a=Math.floor(n/36e5)+"小时前";break;default:a=Math.floor(n/864e5)+"天前"}return a}var dt={install:function(t,e){t.prototype.friendlyDate=lt}};a.default.config.productionTip=!1,a.default.use(d.a),a.default.use(dt),new a.default({el:"#app",router:ct,store:it,components:{App:C},template:"<App/>"})},SvpE:function(t,e){},kA1U:function(t,e){},tvR6:function(t,e){},uqwr:function(t,e){},wRXT:function(t,e){},z6gE:function(t,e){},"zc/7":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.41b40e9fc421979660e0.js.map