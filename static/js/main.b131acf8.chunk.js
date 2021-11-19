(this["webpackJsonpreact-hook-form-final-form"]=this["webpackJsonpreact-hook-form-final-form"]||[]).push([[0],{135:function(e,t,n){},250:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),o=n(54),s=(n(135),n(7)),l=n(55),j=n(280),b=n(2),u=Object(j.a)((function(e){return{root:{fontFamily:"Permanent Marker",margin:e.spacing(3,0,2),textAlign:"center",fontSize:"40px",color:"deeppink",textShadow:"1px 1px darkmagenta"}}})),h=function(){var e=u();return Object(b.jsx)(l.a,{className:e.root,component:"h1",variant:"h5",children:"Final Form"})},m=n(10),d=n(41),O=n(18),x=n(69),f=n(16),p=Object(a.createContext)(),v=function(e){var t=e.children,n=Object(a.useState)({}),r=Object(f.a)(n,2),c=r[0],i=r[1];return Object(b.jsx)(p.Provider,{value:{data:c,setValues:function(e){i((function(t){return Object(m.a)(Object(m.a)({},t),e)}))}},children:t})},g=function(){return Object(a.useContext)(p)},N=n(70),S=n(284),k=["children"],y=Object(j.a)((function(e){return{root:{marginTop:e.spacing(4),display:"flex",flexDirection:"column",alignItems:"center"}}})),F=function(e){var t=e.children,n=Object(N.a)(e,k),a=y();return Object(b.jsx)(S.a,Object(m.a)(Object(m.a)({className:a.root,container:"main",maxWidth:"xs"},n),{},{children:t}))},P=["children"],V=Object(j.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(1)}}})),w=function(e){var t=e.children,n=Object(N.a)(e,P),a=V();return Object(b.jsx)("form",Object(m.a)(Object(m.a)({className:a.root,noValidate:!0},n),{},{children:t}))},C=n(300),T=Object(a.forwardRef)((function(e,t){return Object(b.jsx)(C.a,Object(m.a)({variant:"outlined",margin:"normal",inputRef:t,fullWidth:!0},e))})),q=n(287),B=Object(j.a)((function(e){return{root:{margin:e.spacing(3,0,2)}}})),E=function(e){var t=e.children,n=e.props,a=e.onClick,r=B();return Object(b.jsx)(q.a,Object(m.a)(Object(m.a)({onClick:a,className:r.root,type:"submit",fullWidth:!0,variant:"contained",color:"primary"},n),{},{children:t}))},D=d.a().shape({firstName:d.b().matches(/^([^0-9]*)$/,"First name should not contain numbers").required("First name is a required field"),lastName:d.b().matches(/^([^0-9]*)$/,"Last name should not contain numbers").required("Last name is a required field")}),z=function(){var e,t,n=Object(s.f)(),a=g(),r=a.data,c=a.setValues,i=Object(O.e)({defaultValues:{firstName:r.firstName,lastName:r.lastName},mode:"onBlur",resolver:Object(x.a)(D)}),o=i.register,j=i.handleSubmit,u=i.formState.errors;return Object(b.jsxs)(F,{children:[Object(b.jsx)(l.a,{component:"h2",variant:"h5",children:"Step 1"}),Object(b.jsxs)(w,{onSubmit:j((function(e){console.log(e),c(e),n("step2")})),children:[Object(b.jsx)(T,Object(m.a)(Object(m.a)({},o("firstName")),{},{id:"firstName",label:"First Name",name:"firstName",error:!!u.firstName,helperText:null===u||void 0===u||null===(e=u.firstName)||void 0===e?void 0:e.message})),Object(b.jsx)(T,Object(m.a)(Object(m.a)({},o("lastName")),{},{id:"lastName",label:"Last Name",name:"lastName",error:!!u.lastName,helperText:null===u||void 0===u||null===(t=u.lastName)||void 0===t?void 0:t.message})),Object(b.jsx)(E,{children:"Next"})]})]})},I=n(288),L=n(302),R=n(301),W=d.a().shape({email:d.b().email("Email should correct format").required("Email is required field")}),A=function(){var e,t=Object(s.f)(),n=g(),a=n.data,r=n.setValues,c=Object(O.e)({defaultValues:{email:a.email,hasPhone:a.hasPhone,phoneNumber:a.phoneNumber},mode:"onBlur",resolver:Object(x.a)(W)}),i=c.register,o=c.handleSubmit,j=c.watch,u=c.formState.errors,h=j("hasPhone");return Object(b.jsxs)(F,{children:[Object(b.jsx)(l.a,{component:"h2",variant:"h5",children:"Step 2"}),Object(b.jsxs)(w,{onSubmit:o((function(e){console.log(e),r(e),t("/step3")})),children:[Object(b.jsx)(T,Object(m.a)(Object(m.a)({},i("email")),{},{type:"email",id:"email",label:"Email",name:"email",error:!!u.email,helperText:null===u||void 0===u||null===(e=u.email)||void 0===e?void 0:e.message})),Object(b.jsx)(I.a,{label:"Do you have a phone",control:Object(b.jsx)(L.a,Object(m.a)(Object(m.a)({defaultValue:a.hasPhone,defaultChecked:a.hasPhone},i("hasPhone")),{},{name:"hasPhone",color:"primary"}))}),h&&Object(b.jsx)(T,Object(m.a)(Object(m.a)({},i("phoneNumber")),{},{id:"phoneNumber",type:"tel",label:"Phone number",name:"phoneNumber",onChange:function(e){return e.target.value=function(e){var t=Object(R.a)(e);return t?t.formatInternational():e}(e.target.value)}})),Object(b.jsx)(E,{children:"Next"})]})]})},J=n(119),M=n(289),$=n(292),G=n(285),Y=n(286),H=n(290),K=n(291),Q=n(293),U=Object(j.a)((function(e){return{root:{padding:"10px",marginTop:"20px",textAlign:"center",color:"#333",backgroundColor:"#eee",cursor:"pointer"},icon:{marginTop:"16px",color:"#888",fontSize:"42px"}}})),X=function(e){var t=e.control,n=e.name,a=U();return Object(b.jsx)(O.a,{control:t,name:n,defaultValue:[],render:function(e){var t=e.field,r=t.onChange,c=t.onBlur,i=t.value;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(J.a,{onDrop:r,children:function(e){var t=e.getRootProps,r=e.getInputProps;return Object(b.jsxs)(G.a,Object(m.a)(Object(m.a)({className:a.root,variant:"outlined"},t()),{},{children:[Object(b.jsx)(M.a,{className:a.icon}),Object(b.jsx)("input",Object(m.a)(Object(m.a)({},r()),{},{name:n,onBlur:c})),Object(b.jsx)("p",{children:"Drag 'n' drop files here, or click to select files"})]}))}}),Object(b.jsx)(Y.a,{children:i.map((function(e,t){return Object(b.jsxs)(H.a,{children:[Object(b.jsx)(K.a,{children:Object(b.jsx)($.a,{})}),Object(b.jsx)(Q.a,{primary:e.name,secondary:e.size})]},t)}))})]})}})},Z=function(){var e=Object(s.f)(),t=g(),n=t.data,a=t.setValues,r=Object(O.e)({defaultValues:{files:n.files}}),c=r.control,i=r.handleSubmit;return Object(b.jsxs)(F,{children:[Object(b.jsx)(l.a,{component:"h2",variant:"h5",children:"Step 3"}),Object(b.jsxs)(w,{onSubmit:i((function(t){console.log(t),a(t),e("/result")})),children:[Object(b.jsx)(X,{name:"files",control:c}),Object(b.jsx)(E,{children:"Next"})]})]})},_=n(13),ee=n.n(_),te=n(22),ne=n(294),ae=n(295),re=n(296),ce=n(297),ie=n(298),oe=n(299),se=n(117),le=n.n(se),je=n(118),be=n.n(je),ue=Object(j.a)({table:{marginBottom:"30px"},list:{width:"100%"}}),he=function(){var e=Object(a.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1],c=ue(),i=g().data,s=Object.entries(i).filter((function(e){return"files"!==e[0]})),j=i.files,u=function(){var e=Object(te.a)(ee.a.mark((function e(){var t;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new FormData,i.files&&i.files.forEach((function(e){t.append("files",e,e.name)})),s.forEach((function(e){t.append(e[0],e[1])})),e.next=5,fetch("http://localhost:3000/",{method:"POST",body:t});case 5:e.sent,r(!0),le.a.fire("Great job!","You send a form! Though there is no bek for it =(","success");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(be.a,{}),Object(b.jsx)(F,{children:Object(b.jsx)(o.b,{to:"/",children:"Start over"})})]}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(F,{children:[Object(b.jsx)(l.a,{component:"h2",variant:"h5",children:"Form Values"}),Object(b.jsx)(ne.a,{className:c.table,component:G.a,children:Object(b.jsxs)(ae.a,{children:[Object(b.jsx)(re.a,{children:Object(b.jsxs)(ce.a,{children:[Object(b.jsx)(ie.a,{children:"Field"}),Object(b.jsx)(ie.a,{align:"right",children:"Value"})]})}),Object(b.jsx)(oe.a,{children:s.map((function(e){return e[1]&&Object(b.jsxs)(ce.a,{children:[Object(b.jsx)(ie.a,{children:e[0]}),Object(b.jsx)(ie.a,{align:"right",children:e[1]})]},e[0])}))})]})}),j&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.a,{component:"h2",variant:"h5",children:"Files"}),Object(b.jsx)(Y.a,{className:c.list,children:j.map((function(e,t){return Object(b.jsxs)(H.a,{children:[Object(b.jsx)(K.a,{children:Object(b.jsx)($.a,{})}),Object(b.jsx)(Q.a,{primary:e.name,secondary:e.size})]},t)}))})]}),Object(b.jsx)(E,{onClick:u,children:"Submit"}),Object(b.jsx)(o.b,{to:"/",children:"Start over"})]})})};var me=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(s.c,{path:"/",children:[Object(b.jsx)(s.a,{index:!0,element:Object(b.jsx)(z,{})}),Object(b.jsx)(s.a,{path:"step2",element:Object(b.jsx)(A,{})}),Object(b.jsx)(s.a,{path:"step3",element:Object(b.jsx)(Z,{})}),Object(b.jsx)(s.a,{path:"result",element:Object(b.jsx)(he,{})})]})]})};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(o.a,{basename:"react-hook-form-final-form",children:Object(b.jsx)(v,{children:Object(b.jsx)(me,{})})})}),document.getElementById("root"))}},[[250,1,2]]]);
//# sourceMappingURL=main.b131acf8.chunk.js.map