!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["react-app-main"]=t():e["react-app-main"]=t()}(window,(function(){return(window["webpackJsonp_react-app"]=window["webpackJsonp_react-app"]||[]).push([[0],{145:function(e,t,n){},146:function(e,t,n){},216:function(e,t,n){},227:function(e,t){},254:function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return Ue})),n.d(t,"mount",(function(){return Ve})),n.d(t,"unmount",(function(){return Je}));var c=n(29),r=n.n(c),o=n(43),i=n(0),a=n.n(i),s=n(30),u=n.n(s);window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);n(145);var l=n(10),j=(n(146),n(135)),d=n(27),h=n(28),b=n(34),p=n(33),O=n(1),f=i.createContext({name:"wmh",theme:"dark"}),x=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(O.jsx)(f.Provider,{value:{theme:"dark",name:"cpp"},children:this.props.children})}}]),n}(i.Component);var m=n(258),v=n(259),g=n(262),y={labelCol:{span:8},wrapperCol:{span:16}},k={wrapperCol:{offset:8,span:16}};var C=n(50),w=n.n(C),E=function(){return Object(O.jsxs)("div",{children:["this is publish",Object(O.jsx)("button",{onClick:function(){w.a.publish("hardWork",{name:"from header"})},children:"publish topic"})]})},S=n(23),I=function(){var e=Object(i.useState)(""),t=Object(S.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){var e=w.a.subscribe("hardWork",(function(e,t){var n=t.name;c(void 0===n?"":n)}));return function(){w.a.unsubscribe(e),c("")}}),[]),Object(O.jsxs)("div",{children:["this is subScribe",Object(O.jsxs)("div",{children:["this is ",n]})]})};n(216);var N,L=(N={color:"green"},function(e){return function(t){return Object(O.jsx)("div",{style:{backgroundColor:"".concat(N.color)},children:Object(O.jsx)(e,Object(l.a)({},t))})}})((function(){return Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)("header",{className:"header",children:Object(O.jsx)(E,{})}),Object(O.jsx)("div",{className:"cont",children:Object(O.jsx)(I,{})})]})})),D=function(e){var t=e.name,n=Object(i.useState)(0),c=Object(S.a)(n,2),r=c[0],o=c[1],a=Object(i.useState)(0),s=Object(S.a)(a,2),u=s[0],l=s[1],j=Object(i.useCallback)((function(){o((function(e){return e+1}))}),[]),d=Object(i.useCallback)((function(){l((function(e){return e+1}))}),[]);return Object(O.jsxs)("div",{children:[" this is CorrectUse ",t,Object(O.jsx)(A,{onCheap:j,name:"\u7ec4\u4ef6cheap\uff1a".concat(r)}),Object(O.jsx)(_,{onExpensive:d,name:"\u7ec4\u4ef6Expensive\uff1a".concat(u)})]})},R=function(e){var t=e.name,n=e.onCheap;return console.log("this is cheap"),Object(O.jsx)("div",{children:Object(O.jsxs)("section",{onClick:n,children:["this is ",t," comp"]})})},T=function(e){var t=e.name,n=e.onExpensive;return console.log("this is expensive"),Object(O.jsx)("div",{children:Object(O.jsxs)("section",{onClick:n,children:["this is ",t," com"]})})},_=Object(i.memo)(T),A=Object(i.memo)(R);var P=n(260),M=function(){var e=Object(i.useRef)(),t=Object(P.a)(e),n=Object(S.a)(t,1)[0];return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{onClick:function(){console.log("publish"),w.a.publish("hardWork",{name:"from lazyLoader"})},style:{width:300,height:300,overflow:"scroll",border:"1px solid"},children:["scroll here",Object(O.jsx)("div",{style:{height:800},children:Object(O.jsx)("div",{ref:e,style:{border:"1px solid",height:100,width:100,textAlign:"center",marginTop:80},children:"observer dom Cpp"})})]}),Object(O.jsxs)("div",{style:{marginTop:16,color:n?"#87d068":"#f50"},children:["inViewport: ",n?"visible":"hidden"]})]})};var H=function(e){var t=i.useContext(f);return Object(O.jsxs)("h1",{children:[t.name,"---",e.children]})},F=function(e){var t=e.param,n=e.setParam,c=e.users;return Object(O.jsxs)("div",{children:["\u8fd9\u91cc\u662f\u67e5\u8be2",Object(O.jsx)("input",{value:t.name,onChange:function(e){return n(Object(l.a)(Object(l.a)({},t),{},{name:e.target.value}))}}),Object(O.jsx)("select",{value:t.personId,onChange:function(e){return n(Object(l.a)(Object(l.a)({},t),{},{personId:e.target.value}))},children:c.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.name},e.id)}))})]})},q=function(e){var t=e.users,n=e.list;return Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u540d\u79f0"}),Object(O.jsx)("th",{children:"\u8d1f\u8d23\u4eba"})]})}),Object(O.jsx)("tbody",{children:n.map((function(e){var n;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.id}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:null===(n=t.find((function(t){return t.id===e.personId})))||void 0===n?void 0:n.name})]},e.id)}))})]})},W=n(134),K="http://localhost:3001",U=function(e){var t=i.useState({name:"",personId:""}),n=Object(S.a)(t,2),c=n[0],a=n[1],s=i.useState([]),u=Object(S.a)(s,2),j=u[0],d=u[1];i.useEffect((function(){try{fetch("".concat(K,"/projects?").concat(W.stringify(function(e){if(!e)return{};var t=Object(l.a)({},e);return Object.keys(t).forEach((function(e){var n;(void 0===(n=t[e])||null===n||""===n)&&delete t[e]})),t}(c)))).then(function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=6;break}return e.t0=d,e.next=4,t.json();case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e,"e")}))}catch(e){console.log(e)}}),[c]);var h=i.useState([]),b=Object(S.a)(h,2),p=b[0],f=b[1];return i.useEffect((function(){try{fetch("".concat(K,"/users")).then(function(){var e=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=6;break}return e.next=3,t.json();case 3:n=e.sent,console.log(n,"data"),f(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))}catch(e){console.log(e)}}),[c]),Object(O.jsxs)("div",{children:[Object(O.jsx)(F,{param:c,setParam:a,users:p}),Object(O.jsx)(q,{list:j,users:p})]})},B=n(87),V=n.n(B),Y=V.a.create({baseURL:"/api",timeout:6e3,headers:{"content-type":"XMLHttpRequest"}});Y.interceptors.request.use((function(e){return e}),(function(e){console.log("request error\u2014\u2014\u2014\u2014\u2014\u2014",e)})),Y.interceptors.request.use((function(e){return e}),(function(e){console.log("request error\u2014\u2014\u2014\u2014\u2014\u2014",e)})),Y.interceptors.response.use((function(e){var t=Object(l.a)(Object(l.a)({},e),{},{data:Object(l.a)(Object(l.a)({},e.data),{},{name:"CPP interceptors"})});return t&&t.data}),(function(e){return Promise.reject(e)})),Y.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var J=Y,Q=V.a.CancelToken.source();var z=function(){var e=Object(i.useState)({data:[],name:""}),t=Object(S.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),s=Object(S.a)(a,2),u=s[0],l=s[1],j=Object(i.useCallback)((function(){Promise.resolve(J({url:"http://localhost:6060/api/album/data",method:"GET",params:{name:"cpp"}})).then((function(e){e&&c({data:e.data,name:e.name})})).catch((function(e){console.log("getFetchData1",e)}))}),[]);Object(i.useEffect)((function(){j()}),[j]);return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:j,children:"\u4e13\u8f91\u6570\u636e\u8bf7\u6c421"}),Object(O.jsx)("button",{onClick:function(){try{var e=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("http://localhost:6060/api/track/data",{cancelToken:Q.token});case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={data:[]};case 5:t=e.t0,l(null===t||void 0===t?void 0:t.data);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log("err",t)}},children:"\u58f0\u97f3\u6570\u636e\u8bf7\u6c422"}),Object(O.jsxs)("h1",{children:["\u4e13\u8f91- ",n.data.length," - ",n.name]}),Object(O.jsxs)("h1",{children:["\u58f0\u97f3- ",u.length]}),Object(O.jsx)("button",{onClick:function(){Q.cancel("CPp need cancel"),console.log("Abort",Q)},children:"\u7ec8\u6b62\u63a7\u5236\u5668"})]})},G=n(64),X=function(e){var t=e.value,n=e.decrement,c=e.increment;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h1",{children:["this is Test redux ",t]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:c,children:"++"}),Object(O.jsx)("button",{onClick:n,children:"--"})]})]})};var Z=Object(G.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}),0,Object(G.a)(Object(G.b)((function(e){var t=e.getState;return function(e){return function(n){console.log("Cpp1 will dispatch",n);var c=e(n);return console.log("Cpp1 End ---- state after dispatch",t()),c}}}),(function(e){var t=e.getState;return function(e){return function(n){console.log("Cpp2 will dispatch",new Date,n);var c=e(n);return console.log("Cpp2 End ---- state after dispatch",new Date,t()),c}}})))),$=function(){var e=Object(i.useState)(0),t=Object(S.a)(e,2),n=t[0],c=t[1];return Z.subscribe((function(){c(Z.getState())})),Object(O.jsx)("div",{children:Object(O.jsx)(X,{value:n,increment:function(){return Z.dispatch({type:"INCREMENT"})},decrement:function(){return Z.dispatch({type:"DECREMENT"})}})})},ee=function(e){var t=e.info,n=(e.onChangeNameInfo,Object(i.useState)(0)),c=Object(S.a)(n,2),r=c[0],o=c[1],s=a.a.useRef({hasRender:!1}),u=Object(i.useState)(!1),l=Object(S.a)(u,2),j=l[0],d=l[1];a.a.useEffect((function(){s.current.hasRender||(s.current.hasRender=!0,console.log("perform action only once"))}),[]),a.a.useEffect((function(){console.log("1111222"),j||console.log("mockRefmockRef")}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:r}),Object(O.jsx)("button",{onClick:function(){o((function(e){return e+1})),o((function(e){return e+1})),d(!0)},children:" + \u52a01 "}),Object(O.jsxs)("section",{children:[Object(O.jsxs)("h3",{children:["\u76ee\u524d\u7684\u59d3\u540d\uff1a",t.name]}),Object(O.jsx)("input",{onChange:function(e){console.log("e",e)}}),Object(O.jsxs)("h4",{children:["\u5e74\u9f84\uff1a ",t.age," "]}),Object(O.jsxs)("h4",{children:["\u6700\u5927\u7684\u7231\u597d\uff1a",t.hobby]})]})]})},te=n(61),ne={value:0,data:{list:[{name:""}],name:"xxx"}};var ce,re,oe={addList:function(){return{type:"ADD"}},decList:function(){return{type:"DEC"}},reset:function(){return{type:"RESET"}}},ie=Object(te.b)((function(e){var t=e.data,n=t.list,c=void 0===n?[]:n,r=t.name;return{list:c,name:void 0===r?"":r}}),oe)((function(e){var t=e.list,n=void 0===t?[]:t,c=e.name,r=void 0===c?"":c,o=e.addList,i=e.decList,a=e.reset;return console.log("list",n),console.log("name",r),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{children:["name: ",r," ",Object(O.jsx)("br",{}),"List:",n.map((function(e){return Object(O.jsx)("div",{children:e.name},e.name)})),Object(O.jsx)("button",{onClick:o,children:"add\u6570\u636e + "}),Object(O.jsx)("button",{onClick:i,children:"dec\u6570\u636e - "}),Object(O.jsx)("button",{onClick:a,children:"Reset "})]})})})),ae=function(e){var t=e.active,n=e.children,c=e.onClick;return t?Object(O.jsx)("span",{children:n}):Object(O.jsx)("a",{href:"/#",onClick:function(e){e.preventDefault(),c()},children:n})},se=Object(te.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(ae),ue=function(){return Object(O.jsxs)("p",{children:["Show:"," ",Object(O.jsx)(se,{filter:"SHOW_ALL",children:"All"}),", ",Object(O.jsx)(se,{filter:"SHOW_ACTIVE",children:"Active"}),", ",Object(O.jsx)(se,{filter:"SHOW_COMPLETED",children:"Completed"})]})},le=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).hide=function(){c.setState({isDisplayed:!1})},c.show=function(){c.setState({isDisplayed:!0})},c.state={isDisplayed:e.initialState||!1},c}return Object(h.a)(n,[{key:"render",value:function(){return this.props.render(Object(l.a)(Object(l.a)({},this.state),{},{hide:this.hide,show:this.show}))}}]),n}(i.Component);function je(){return Object(O.jsx)(le,{initialState:!0,render:function(e){var t=e.isDisplayed,n=e.hide,c=e.show;return Object(O.jsx)("div",{children:t?Object(O.jsx)("button",{onClick:n,children:"Click to hide"}):Object(O.jsx)("button",{onClick:c,children:"Click to display"})})}})}var de,he,be=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={count:0},c}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({count:1})}},{key:"render",value:function(){var e=this.state.count;return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:["This is TestInstance ",e]}),Object(O.jsx)(je,{})]})}}]),n}(i.Component),pe=(de=be,he=[99,88],function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){console.log("IIHoc \u88c5\u9970\u5668 didMount")}},{key:"render",value:function(){return Object(O.jsxs)("div",{style:{backgroundColor:"red"},children:[Object(O.jsxs)("h1",{children:["Inner Title - ",he[0]]}),Object(O.jsx)(de,Object(l.a)({},this.props))]})}}]),n}(i.Component)),Oe=(ce=function(e){return function(t){return function(n){Object(b.a)(r,n);var c=Object(p.a)(r);function r(){return Object(d.a)(this,r),c.apply(this,arguments)}return Object(h.a)(r,[{key:"componentDidMount",value:function(){console.log("\u88c5\u9970\u5668 didMount ")}},{key:"render",value:function(){return Object(O.jsx)("div",{style:{backgroundColor:"".concat(e.color)},children:Object(O.jsx)(t,Object(l.a)({},this.props))})}}]),r}(i.Component)}}({color:"red"}),ce(re=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){console.log("\u4e1a\u52a1\u7ec4\u4ef6 did Page DidMount")}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(pe,{}),Object(O.jsx)(ue,{})]})}}]),n}(i.Component))||re),fe=(i.Component,[{name:"\u9996\u9875",path:"/",component:function(e){var t=e.history;return Object(O.jsxs)(x,{children:[Object(O.jsx)("div",{style:{textAlign:"right"},children:Object(O.jsx)(j.a,{onClick:function(){t.push("/login")},children:"\u9000\u51fa"})}),Object(O.jsx)("div",{style:{textAlign:"center",paddingTop:30,fontSize:24},children:"\u6b22\u8fce\u4f7f\u7528\u7cfb\u7edf"})]})},isNeedLogin:!0},{name:"\u767b\u9646\u9875",path:"/login",component:function(e){var t=e.history;return Object(O.jsx)("div",{style:{width:300,margin:"100px auto"},children:Object(O.jsxs)(m.a,Object(l.a)(Object(l.a)({},y),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){t.push("/")},onFinishFailed:function(e){console.log(e)},children:[Object(O.jsx)(m.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"please enter your name"}],children:Object(O.jsx)(v.a,{})}),Object(O.jsx)(m.a.Item,Object(l.a)(Object(l.a)({},k),{},{name:"remember",valuePropName:"checked",children:Object(O.jsx)(g.a,{children:"\u8bb0\u4f4f\u767b\u5f55"})})),Object(O.jsx)(m.a.Item,Object(l.a)(Object(l.a)({},k),{},{children:Object(O.jsx)(j.a,{type:"primary",htmlType:"submit",children:"\u767b\u5f55"})}))]}))})},isNeedLogin:!1},{name:"Hook",path:"/hook",component:L,isNeedLogin:!0},{name:"Hook2",path:"/hook2",component:function(){var e=i.useState({name:"cpp",age:30}),t=Object(S.a)(e,2),n=t[0],c=t[1],r=i.useCallback((function(e){return"my Name is ".concat(e.name,", age is ").concat(e.age)}),[]),o=i.useRef(null);i.useEffect((function(){console.log("useEffect"),c({name:"wmh",age:22})}),[]);var a=i.useMemo((function(){return 2}),[]);return console.log(typeof o,typeof n),Object(O.jsxs)("div",{children:["this is hook2",Object(O.jsx)("div",{children:r(n)}),Object(O.jsx)("h1",{children:a}),Object(O.jsx)(D,{name:"cpp"})]})},isNeedLogin:!0},{name:"Hook3",path:"/hook3",component:M,isNeedLogin:!0},{name:"class",path:"/class",component:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"class--"})})},isNeedLogin:!0},{name:"createContext",path:"/context",component:H,isNeedLogin:!0},{name:"table",path:"/table",component:U,isNeedLogin:!0},{name:"redux1",path:"/redux1",component:z,isNeedLogin:!0},{name:"redux2",path:"/redux2",component:Oe,isNeedLogin:!0},{name:"redux3",path:"/redux3",component:$,isNeedLogin:!0},{name:"freeCode",path:"/freeCode",component:ee,isNeedLogin:!0},{name:"counter",path:"/counter",component:ie,isNeedLogin:!0}]),xe=fe,me=n(257),ve=n(261),ge=n(263),ye=n(264),ke=n(265),Ce=n(266),we=me.a.Header,Ee=me.a.Content,Se=me.a.Sider,Ie=me.a.Footer,Ne=ve.a.SubMenu,Le=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).onCollapse=function(e){console.log(e),c.setState({collapsed:e})},c.state={collapsed:!1,defaultSelectedKeys:"1"},c}return Object(h.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,n=t.collapsed,c=t.defaultSelectedKeys;return Object(O.jsxs)(me.a,{style:{minHeight:"100vh"},children:[Object(O.jsxs)(Se,{collapsible:!0,collapsed:n,onCollapse:this.onCollapse,children:[Object(O.jsx)("div",{className:"logo"}),Object(O.jsxs)(ve.a,{theme:"dark",defaultSelectedKeys:[c],mode:"inline",children:[Object(O.jsx)(ve.a.Item,{icon:Object(O.jsx)(ge.a,{}),onClick:function(){e.props.history.push("/class")},children:"TS Study"},"2"),Object(O.jsxs)(Ne,{icon:Object(O.jsx)(ye.a,{}),title:"HOOK",children:[Object(O.jsx)(ve.a.Item,{onClick:function(){e.props.history.push("/hook")},children:"Hook1"},"3"),Object(O.jsx)(ve.a.Item,{onClick:function(){e.props.history.push("/hook2")},children:"Hook2"},"4"),Object(O.jsx)(ve.a.Item,{onClick:function(){e.props.history.push("/hook3")},children:"Hooks"},"5")]},"sub1"),Object(O.jsxs)(Ne,{icon:Object(O.jsx)(ke.a,{}),title:"Redux",children:[Object(O.jsx)(ve.a.Item,{onClick:function(){e.props.history.push("/redux1")},children:"Redux one"},"6"),Object(O.jsx)(ve.a.Item,{onClick:function(){e.props.history.push("/redux2")},children:"Redux counter"},"8"),Object(O.jsx)(ve.a.Item,{onClick:function(){e.props.history.push("/redux3")},children:"Mock Redux counter"},"7")]},"sub2"),Object(O.jsx)(ve.a.Item,{icon:Object(O.jsx)(Ce.a,{}),onClick:function(){e.props.history.push("/table")},children:"Files\u8868\u683c"},"9"),Object(O.jsx)(Ne,{icon:Object(O.jsx)(ke.a,{}),title:"FreeCode",children:Object(O.jsx)(ve.a.Item,{onClick:function(){e.props.history.push("/freeCode")},children:"Free Code"},"10")},"12")]})]}),Object(O.jsxs)(me.a,{children:[Object(O.jsxs)(we,{style:{backgroundColor:"white",display:"flex",flexFlow:"row nowrap",justifyContent:"space-between"},children:[Object(O.jsx)("div",{style:{textAlign:"left"},children:"\u83dc\u5355"}),Object(O.jsx)(j.a,{style:{transform:"translate(25px, 14px)"},onClick:function(){e.props.history.push("/login")},children:"\u9000\u51fa"})]}),Object(O.jsx)(Ee,{id:"mainContent",children:this.props.children}),Object(O.jsx)(Ie,{style:{textAlign:"center"},children:"Ant Design \xa92018 Created by Ant UED"})]})]})}}]),n}(i.Component),De=n(67),Re=n(22);var Te,_e=function(){var e=Object(Re.g)().path;return Object(O.jsxs)("div",{children:["this is React Router: ",e]})},Ae=void((Te=Object(h.a)((function e(t){Object(d.a)(this,e),this.language=void 0,this.language=t}))).prototype.speak=function(){console.log("I can speak ",this.language)})||Te,Pe=new Ae("Chinese"),Me=new Ae("English"),He=function(){return console.log(Pe,Pe.speak()),console.log(Me,Me.speak()),Object(O.jsxs)(De.a,{children:[Object(O.jsxs)("ul",{style:{padding:"10px 20px"},children:[Object(O.jsx)("li",{children:Object(O.jsx)(De.b,{to:"/",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(De.b,{to:"/react-router",children:"Router"})})]}),Object(O.jsx)(Re.d,{children:Object(O.jsx)(Re.b,{path:"/:path",children:Object(O.jsx)(_e,{})})}),Object(O.jsx)(Re.d,{children:xe.map((function(e,t){return Object(O.jsx)(Re.b,{exact:!0,path:e.path,render:function(t){return e.isNeedLogin,e.isNeedLogin?Object(O.jsx)(Le,Object(l.a)(Object(l.a)({},t),{},{children:Object(O.jsx)(e.component,Object(l.a)({},t))})):Object(O.jsx)(e.component,Object(l.a)({},t))}},t)}))})]})},Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,267)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};var qe={name:"cpp",age:30,hobby:"shufa"};(function(e,t){e[t]})(qe,"age"),function(e,t){t.map((function(t){return e[t]}))}(qe,["age","name"]);[1,2,3].includes(1);var We=Object(G.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return Object(l.a)(Object(l.a)({},e),{},{data:{list:[{name:"cpp"},{name:"wmh"}],name:"cpp + wmh"}});case"DEC":return Object(l.a)(Object(l.a)({},e),{},{data:{list:[{name:"cpp"}],name:"cpp"}});case"RESET":return Object(l.a)(Object(l.a)({},e),{},{data:{name:"",list:[]}});default:return Object(l.a)({},e)}}));function Ke(e){var t=e.container,n=t?t.querySelector("#root"):document.querySelector("#root");u.a.render(Object(O.jsxs)(te.a,{store:We,children:[Object(O.jsx)(He,{}),","]}),n)}function Ue(){return Be.apply(this,arguments)}function Be(){return(Be=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[react16] react app bootstraped");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ve(e){return Ye.apply(this,arguments)}function Ye(){return(Ye=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[react16] props from main framework",t),Ke(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Je(e){return Qe.apply(this,arguments)}function Qe(){return(Qe=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.container,u.a.unmountComponentAtNode(n?n.querySelector("#root"):document.querySelector("#root"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.__POWERED_BY_QIANKUN__||Ke({}),Fe()}},[[254,1,2]]])}));
//# sourceMappingURL=main.7be99d00.chunk.js.map