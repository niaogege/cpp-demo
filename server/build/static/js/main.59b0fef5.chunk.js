!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["react-app-main"]=t():e["react-app-main"]=t()}(window,(function(){return(window["webpackJsonp_react-app"]=window["webpackJsonp_react-app"]||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){},214:function(e,t){},219:function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return Ne})),n.d(t,"mount",(function(){return Ee})),n.d(t,"unmount",(function(){return Le}));var c=n(35),o=n.n(c),r=n(48),i=n(0),a=n.n(i),s=n(25),u=n.n(s);window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);n(133);var l=n(9),j=(n(134),n(124)),d=n(31),b=n(32),h=n(34),p=n(33),O=n(3),f=i.createContext({name:"wmh",theme:"dark"}),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(O.jsx)(f.Provider,{value:{theme:"dark",name:"cpp"},children:this.props.children})}}]),n}(i.Component),m=function(e){return Object(O.jsx)(f.Consumer,{children:function(t){return Object(O.jsxs)("h1",{children:[t.name,"---",e.children]})}})};var v=n(222),y=n(223),g=n(225),C={labelCol:{span:8},wrapperCol:{span:16}},k={wrapperCol:{offset:8,span:16}};var S,_=(S={color:"green"},function(e){return function(t){return Object(O.jsx)("div",{style:{backgroundColor:"".concat(S.color)},children:Object(O.jsx)(e,Object(l.a)({},t))})}})((function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"TTTT"})})})),w=n(27),I=function(e){var t=e.name,n=Object(i.useState)(0),c=Object(w.a)(n,2),o=c[0],r=c[1],a=Object(i.useState)(0),s=Object(w.a)(a,2),u=s[0],l=s[1],j=Object(i.useCallback)((function(){r((function(e){return e+1}))}),[]),d=Object(i.useCallback)((function(){l((function(e){return e+1}))}),[]);return Object(O.jsxs)("div",{children:[" this is CorrectUse ",t,Object(O.jsx)(D,{onCheap:j,name:"\u7ec4\u4ef6cheap\uff1a".concat(o)}),Object(O.jsx)(E,{onExpensive:d,name:"\u7ec4\u4ef6Expensive\uff1a".concat(u)})]})},N=function(e){var t=e.name,n=e.onCheap;return console.log("this is cheap"),Object(O.jsx)("div",{children:Object(O.jsxs)("section",{onClick:n,children:["this is ",t," comp"]})})},T=function(e){var t=e.name,n=e.onExpensive;return console.log("this is expensive"),Object(O.jsx)("div",{children:Object(O.jsxs)("section",{onClick:n,children:["this is ",t," com"]})})},E=Object(i.memo)(T),D=Object(i.memo)(N);var L=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).isSum=!1,c.localName="",c.localName=e.className,c}return Object(b.a)(n,[{key:"render",value:function(){var e=this.isSum,t=this.localName;return Object(O.jsxs)("div",{children:["this is diuv ",e,", localName is ",t]})}}]),n}(a.a.Component);var A,R,H,F=function(e){var t=e.param,n=e.setParam,c=e.users;return Object(O.jsxs)("div",{children:["\u8fd9\u91cc\u662f\u67e5\u8be2",Object(O.jsx)("input",{value:t.name,onChange:function(e){return n(Object(l.a)(Object(l.a)({},t),{},{name:e.target.value}))}}),Object(O.jsx)("select",{value:t.personId,onChange:function(e){return n(Object(l.a)(Object(l.a)({},t),{},{personId:e.target.value}))},children:c.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.name},e.id)}))})]})},P=function(e){var t=e.users,n=e.list;return Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"\u540d\u79f0"}),Object(O.jsx)("th",{children:"\u8d1f\u8d23\u4eba"})]})}),Object(O.jsx)("tbody",{children:n.map((function(e){var n;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.id}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:null===(n=t.find((function(t){return t.id===e.personId})))||void 0===n?void 0:n.name})]},e.id)}))})]})},M=n(121),W="http://localhost:3001",K=function(e){var t=i.useState({name:"",personId:""}),n=Object(w.a)(t,2),c=n[0],a=n[1],s=i.useState([]),u=Object(w.a)(s,2),j=u[0],d=u[1];i.useEffect((function(){fetch("".concat(W,"/projects?").concat(M.stringify(function(e){if(!e)return{};var t=Object(l.a)({},e);return Object.keys(t).forEach((function(e){var n;(void 0===(n=t[e])||null===n||""===n)&&delete t[e]})),t}(c)))).then(function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=6;break}return e.t0=d,e.next=4,t.json();case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c]);var b=i.useState([]),h=Object(w.a)(b,2),p=h[0],f=h[1];return i.useEffect((function(){fetch("".concat(W,"/users")).then(function(){var e=Object(r.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=6;break}return e.next=3,t.json();case 3:n=e.sent,console.log(n,"data"),f(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[c]),Object(O.jsxs)("div",{children:[Object(O.jsx)(F,{param:c,setParam:a,users:p}),Object(O.jsx)(P,{list:j,users:p})]})},U={count:0},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONST":return console.log("add"),{count:e.count+1};case"MINUS_CONST":return console.log("minus"),{count:e.count-1};case"OTHER":return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},Y=n(56),q=Object(Y.b)(B),V=function(){var e=a.a.useState(0),t=Object(w.a)(e,2),n=t[0],c=t[1],o=q.subscribe((function(){console.log("store",q.getState()),c(q.getState().count)}));return Object(O.jsxs)("div",{children:["this is RRRRedux",Object(O.jsx)("h1",{children:n}),Object(O.jsx)("button",{onClick:function(){q.dispatch({type:"ADD_CONST"}),o()},children:" + \u52a0"}),Object(O.jsx)("button",{onClick:function(){q.dispatch({type:"MINUS_CONST"}),o()},children:" - \u51cf"}),Object(O.jsx)("button",{onClick:function(){q.dispatch({type:"OTHER",payload:{name:"cpp"}})},children:" \u5176\u4ed6\u4fe1\u606f "})]})},G=function(e){var t=e.info,n=(e.onChangeNameInfo,Object(i.useState)(0)),c=Object(w.a)(n,2),o=c[0],r=c[1],s=a.a.useRef({hasRender:!1}),u=Object(i.useState)(!1),l=Object(w.a)(u,2),j=l[0],d=l[1];a.a.useEffect((function(){s.current.hasRender||(s.current.hasRender=!0,console.log("perform action only once"))}),[]),a.a.useEffect((function(){console.log("1111222"),j||console.log("mockRefmockRef")}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:o}),Object(O.jsx)("button",{onClick:function(){r((function(e){return e+1})),r((function(e){return e+1})),d(!0)},children:" + \u52a01 "}),Object(O.jsxs)("section",{children:[Object(O.jsxs)("h3",{children:["\u76ee\u524d\u7684\u59d3\u540d\uff1a",t.name]}),Object(O.jsx)("input",{onChange:function(e){console.log("e",e)}}),Object(O.jsxs)("h4",{children:["\u5e74\u9f84\uff1a ",t.age," "]}),Object(O.jsxs)("h4",{children:["\u6700\u5927\u7684\u7231\u597d\uff1a",t.hobby]})]})]})},Q=n(46),J=0,z=function(e){var t=e.active,n=e.children,c=e.onClick;return t?Object(O.jsx)("span",{children:n}):Object(O.jsx)("a",{href:"/#",onClick:function(e){e.preventDefault(),c()},children:n})},X=Object(Q.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(z),Z=function(){return Object(O.jsxs)("p",{children:["Show:"," ",Object(O.jsx)(X,{filter:"SHOW_ALL",children:"All"}),", ",Object(O.jsx)(X,{filter:"SHOW_ACTIVE",children:"Active"}),", ",Object(O.jsx)(X,{filter:"SHOW_COMPLETED",children:"Completed"})]})},$=Object(Q.b)()((function(e){var t,n=e.dispatch;return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:function(e){var c;(e.preventDefault(),t.value.trim())&&(n((c=t.value,{type:"ADD_TODO",id:J++,text:c})),t.value="")},children:[Object(O.jsx)("input",{ref:function(e){t=e}}),Object(O.jsx)("button",{type:"submit",children:"Add Todo"})]})})})),ee=function(e){var t=e.onClick,n=e.completed,c=e.text;return Object(O.jsx)("li",{onClick:t,style:{textDecoration:n?"line-through":"none"},children:c})},te=function(e){var t=e.todos,n=e.onTodoClick;return console.log("todos",t),Object(O.jsx)("ul",{children:t.map((function(e){return Object(O.jsx)(ee,Object(l.a)(Object(l.a)({},e),{},{onClick:function(){return n(e.id)}}),e.id)}))})},ne=function(e,t){switch(t){case"SHOW_COMPLETED":return e.filter((function(e){return e.completed}));case"SHOW_ACTIVE":return e.filter((function(e){return!e.completed}));case"SHOW_ALL":default:return e}},ce=Object(Q.b)((function(e){return{todos:ne(e.todos,e.visibilityFilter)}}),(function(e){return{onTodoClick:function(t){e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}}))(te),oe=(function(e){return function(t){return function(n){Object(h.a)(o,n);var c=Object(p.a)(o);function o(){return Object(d.a)(this,o),c.apply(this,arguments)}return Object(b.a)(o,[{key:"componentDidMount",value:function(){console.log("\u88c5\u9970\u5668 didMount")}},{key:"render",value:function(){return Object(O.jsx)("div",{style:{backgroundColor:"".concat(e.color)},children:Object(O.jsx)(t,Object(l.a)({},this.props))})}}]),o}(i.Component)}}({color:"red"})(A=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){console.log("\u4e1a\u52a1\u7ec4\u4ef6 did Page")}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)($,{}),Object(O.jsx)(ce,{}),Object(O.jsx)(Z,{}),"this i s Test"]})}}]),n}(i.Component)),H=R=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){console.log("\u4e1a\u52a1\u7ec4\u4ef6 did Page")}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)($,{}),Object(O.jsx)(ce,{}),Object(O.jsx)(Z,{}),"this i s Test"]})}}]),n}(i.Component),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){console.log("IIHoc \u88c5\u9970\u5668 didMount")}},{key:"render",value:function(){return Object(O.jsx)("div",{style:{backgroundColor:"red"},children:Object(O.jsx)(H,Object(l.a)({},this.props))})}}]),n}(i.Component)||R),re=[{name:"\u9996\u9875",path:"/",component:function(e){var t=e.history;return Object(O.jsxs)(x,{children:[Object(O.jsx)("div",{style:{textAlign:"right"},children:Object(O.jsx)(j.a,{onClick:function(){t.push("/login")},children:"\u9000\u51fa"})}),Object(O.jsx)("div",{style:{textAlign:"center",paddingTop:30,fontSize:24},children:"\u6b22\u8fce\u4f7f\u7528\u7cfb\u7edf111"}),Object(O.jsx)(m,{children:Object(O.jsx)("div",{children:"\u8fd9\u91cc\u662f\u5728provider\u91cc\u9762"})})]})},isNeedLogin:!0},{name:"\u767b\u9646\u9875",path:"/login",component:function(e){var t=e.history;return Object(O.jsx)("div",{style:{width:300,margin:"100px auto"},children:Object(O.jsxs)(v.a,Object(l.a)(Object(l.a)({},C),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){t.push("/")},onFinishFailed:function(e){console.log(e)},children:[Object(O.jsx)(v.a.Item,{label:"\u7528\u6237\u540d",name:"username",rules:[{required:!0,message:"please enter your name"}],children:Object(O.jsx)(y.a,{})}),Object(O.jsx)(v.a.Item,Object(l.a)(Object(l.a)({},k),{},{name:"remember",valuePropName:"checked",children:Object(O.jsx)(g.a,{children:"\u8bb0\u4f4f\u767b\u5f55"})})),Object(O.jsx)(v.a.Item,Object(l.a)(Object(l.a)({},k),{},{children:Object(O.jsx)(j.a,{type:"primary",htmlType:"submit",children:"\u767b\u5f55"})}))]}))})},isNeedLogin:!1},{name:"Hook",path:"/hook",component:_,isNeedLogin:!0},{name:"Hook2",path:"/hook2",component:function(){var e=i.useState({name:"cpp",age:30}),t=Object(w.a)(e,2),n=t[0],c=t[1],o=i.useCallback((function(e){return"my Name is ".concat(e.name,", age is ").concat(e.age)}),[]),r=i.useRef(null);i.useEffect((function(){console.log("useEffect"),c({name:"wmh",age:22})}),[]);var a=i.useMemo((function(){return 2}),[]);return console.log(typeof r,typeof n),Object(O.jsxs)("div",{children:["this is hook2",Object(O.jsx)("div",{children:o(n)}),Object(O.jsx)("h1",{children:a}),Object(O.jsx)(I,{name:"cpp"})]})},isNeedLogin:!0},{name:"class",path:"/class",component:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"class--"}),Object(O.jsx)(L,{className:"202206"})]})},isNeedLogin:!0},{name:"createContext",path:"/context",component:m,isNeedLogin:!0},{name:"table",path:"/table",component:K,isNeedLogin:!0},{name:"redux1",path:"/redux1",component:V,isNeedLogin:!0},{name:"redux2",path:"/redux2",component:oe,isNeedLogin:!0},{name:"freeCode",path:"/freeCode",component:G,isNeedLogin:!0}],ie=n(221),ae=n(224),se=n(226),ue=n(227),le=n(228),je=n(229),de=ie.a.Header,be=ie.a.Content,he=ie.a.Sider,pe=ie.a.Footer,Oe=ae.a.SubMenu,fe=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).onCollapse=function(e){console.log(e),c.setState({collapsed:e})},c.state={collapsed:!1,defaultSelectedKeys:"1"},c}return Object(b.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,n=t.collapsed,c=t.defaultSelectedKeys;return console.log(c,"defaultSelectedKeys"),Object(O.jsxs)(ie.a,{style:{minHeight:"100vh"},children:[Object(O.jsxs)(he,{collapsible:!0,collapsed:n,onCollapse:this.onCollapse,children:[Object(O.jsx)("div",{className:"logo"}),Object(O.jsxs)(ae.a,{theme:"dark",defaultSelectedKeys:[c],mode:"inline",children:[Object(O.jsx)(ae.a.Item,{icon:Object(O.jsx)(se.a,{}),onClick:function(){e.props.history.push("/class")},children:"TS Study"},"2"),Object(O.jsxs)(Oe,{icon:Object(O.jsx)(ue.a,{}),title:"HOOK",children:[Object(O.jsx)(ae.a.Item,{onClick:function(){e.props.history.push("/hook")},children:"Hook1"},"3"),Object(O.jsx)(ae.a.Item,{onClick:function(){e.props.history.push("/hook2")},children:"Hook2"},"4"),Object(O.jsx)(ae.a.Item,{children:"Alex"},"5")]},"sub1"),Object(O.jsxs)(Oe,{icon:Object(O.jsx)(le.a,{}),title:"Redux",children:[Object(O.jsx)(ae.a.Item,{onClick:function(){e.props.history.push("/redux1")},children:"Redux one"},"6"),Object(O.jsx)(ae.a.Item,{onClick:function(){e.props.history.push("/redux2")},children:"Redux counter"},"8")]},"sub2"),Object(O.jsx)(ae.a.Item,{icon:Object(O.jsx)(je.a,{}),onClick:function(){e.props.history.push("/table")},children:"Files\u8868\u683c"},"9"),Object(O.jsx)(Oe,{icon:Object(O.jsx)(le.a,{}),title:"FreeCode",children:Object(O.jsx)(ae.a.Item,{onClick:function(){e.props.history.push("/freeCode")},children:"Free Code"},"10")},"12")]})]}),Object(O.jsxs)(ie.a,{children:[Object(O.jsxs)(de,{style:{backgroundColor:"white",display:"flex",flexFlow:"row nowrap",justifyContent:"space-between"},children:[Object(O.jsx)("div",{style:{textAlign:"left"},children:"\u83dc\u5355"}),Object(O.jsx)(j.a,{style:{transform:"translate(25px, 14px)"},onClick:function(){e.props.history.push("/login")},children:"\u9000\u51fa"})]}),Object(O.jsx)(be,{id:"mainContent",children:this.props.children}),Object(O.jsx)(pe,{style:{textAlign:"center"},children:"Ant Design \xa92018 Created by Ant UED"})]})]})}}]),n}(i.Component),xe=n(122),me=n(22),ve=function(){return Object(O.jsx)(xe.a,{basename:window.__POWERED_BY_QIANKUN__?"/app-react":"/",children:Object(O.jsx)(me.d,{children:re.map((function(e,t){return Object(O.jsx)(me.b,{exact:!0,path:e.path,render:function(t){return e.isNeedLogin,e.isNeedLogin?Object(O.jsx)(fe,Object(l.a)(Object(l.a)({},t),{},{children:Object(O.jsx)(e.component,Object(l.a)({},t))})):Object(O.jsx)(e.component,Object(l.a)({},t))}},t)}))})})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,230)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};var ge={name:"cpp",age:30,hobby:"shufa"};(function(e,t){e[t]})(ge,"age"),function(e,t){t.map((function(t){return e[t]}))}(ge,["age","name"]);[1,2,3].includes(1);var Ce=n(125),ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(Ce.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{completed:!e.completed}):e}));default:return e}},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SHOW_ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},_e=Object(Y.a)({visibilityFilter:Se,todos:ke}),we=Object(Y.b)(_e);function Ie(e){var t=e.container,n=t?t.querySelector("#root"):document.querySelector("#root");u.a.render(Object(O.jsxs)(Q.a,{store:we,children:[Object(O.jsx)(ve,{}),","]}),n)}function Ne(){return Te.apply(this,arguments)}function Te(){return(Te=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[react16] react app bootstraped");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ee(e){return De.apply(this,arguments)}function De(){return(De=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[react16] props from main framework",t),Ie(t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Le(e){return Ae.apply(this,arguments)}function Ae(){return(Ae=Object(r.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.container,u.a.unmountComponentAtNode(n?n.querySelector("#root"):document.querySelector("#root"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.__POWERED_BY_QIANKUN__||Ie({}),ye()}},[[219,1,2]]])}));
//# sourceMappingURL=main.59b0fef5.chunk.js.map