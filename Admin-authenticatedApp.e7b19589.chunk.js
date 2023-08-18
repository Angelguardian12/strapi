"use strict";(self.webpackChunknoticias=self.webpackChunknoticias||[]).push([[801],{13282:(z,C,n)=>{n.r(C),n.d(C,{default:()=>jt});var e=n(67294),s=n(57993),b=n(27361),W=n.n(b),y=n(88767);const M={i8:"4.12.5"};var P=n(92807),L=n(35209),S=n(99168),D=n(61080),k=n(86706),E=n(16550),V=n(38914),te=n.n(V),Ie=n(99571),m=n(11047),ne=n(44034),ae=n(25896),Le=n(12028),v=n(41580),H=n(29728),oe=n(70968),Oe=n(45697),i=n.n(Oe),Z=n(86896),T=n(88972);const xe=(0,T.ZP)(m.k)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,se=({onClose:t,onSkip:a,children:o,hideSkip:r})=>{const{formatMessage:d}=(0,Z.Z)();return e.createElement(ne.h,null,e.createElement(xe,{onClick:t,padding:8,justifyContent:"center"},e.createElement(ae.i,{onEscape:t},e.createElement(m.k,{direction:"column",alignItems:"stretch",background:"neutral0",width:(0,s.Q1)(660),shadow:"popupShadow",hasRadius:!0,padding:4,gap:8,role:"dialog","aria-modal":!0,onClick:u=>u.stopPropagation()},e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(Le.h,{onClick:t,"aria-label":d({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(oe.Z,null)})),e.createElement(v.x,{paddingLeft:7,paddingRight:7,paddingBottom:r?8:0},o),!r&&e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(H.z,{variant:"tertiary",onClick:a},d({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};se.propTypes={children:i().node.isRequired,onClose:i().func.isRequired,onSkip:i().func.isRequired,hideSkip:i().bool.isRequired};const be=se;var f=n(75515),ie=n(37323),G=n(16334),Y=n(43234);const De=T.ZP.li`
  list-style: disc;
  &::marker {
    color: ${({theme:t})=>t.colors.neutral800};
  }
`,re=({id:t,defaultMessage:a})=>{const{formatMessage:o}=(0,Z.Z)();return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4,paddingBottom:6},o({id:t,defaultMessage:a},{documentationLink:Be,b:We,p:ke,light:Ze,ul:Ge,li:Ue}))},Be=t=>e.createElement(f.Z,{as:"a",textColor:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},t),We=t=>e.createElement(f.Z,{fontWeight:"semiBold"},t),ke=t=>e.createElement(f.Z,null,t),Ze=t=>e.createElement(f.Z,{textColor:"neutral600"},t),Ge=t=>e.createElement(v.x,{paddingLeft:6},e.createElement("ul",null,t)),Ue=t=>e.createElement(De,null,t);re.propTypes={id:i().string.isRequired,defaultMessage:i().string.isRequired};const Ne=re;var Fe=n(2364);const J=({number:t,last:a,type:o})=>e.createElement(v.x,{paddingTop:3,paddingBottom:a?0:3},e.createElement(Fe.Z,{number:t,type:o}));J.defaultProps={number:void 0,last:!1,type:""},J.propTypes={number:i().number,last:i().bool,type:i().string};const le=J,w=({title:t,content:a,cta:o,onCtaClick:r,sectionIndex:d,stepIndex:u,hasSectionAfter:h})=>{const{formatMessage:p}=(0,Z.Z)(),g=d>0,l=u>0,A=d+1;return e.createElement(e.Fragment,null,e.createElement(m.k,{alignItems:"stretch"},e.createElement(m.k,{marginRight:8,justifyContent:"center",minWidth:(0,s.Q1)(30)},g&&e.createElement(Y.Z,{type:G.hx,minHeight:(0,s.Q1)(24)})),e.createElement(f.Z,{variant:"sigma",textColor:"primary600"},p({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(m.k,null,e.createElement(m.k,{marginRight:8,minWidth:(0,s.Q1)(30)},e.createElement(le,{number:d+1,type:l?G.hx:G.lW})),e.createElement(f.Z,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},p(t))),e.createElement(m.k,{alignItems:"stretch"},e.createElement(m.k,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,s.Q1)(30)},h&&e.createElement(e.Fragment,null,e.createElement(Y.Z,{type:G.hx}),l&&e.createElement(le,{number:A+1,type:G.lW,last:!0}))),e.createElement(v.x,null,e.createElement(Ne,{...a}),o&&(o.target?e.createElement(s.Qj,{endIcon:e.createElement(ie.Z,null),onClick:r,to:o.target},p(o.title)):e.createElement(H.z,{endIcon:e.createElement(ie.Z,null),onClick:r},p(o.title))))),l&&h&&e.createElement(v.x,{paddingTop:3},e.createElement(m.k,{marginRight:8,justifyContent:"center",width:(0,s.Q1)(30)},e.createElement(Y.Z,{type:G.hx,minHeight:(0,s.Q1)(24)}))))};w.defaultProps={currentStep:null,cta:void 0},w.propTypes={sectionIndex:i().number.isRequired,stepIndex:i().number.isRequired,hasSectionAfter:i().bool.isRequired,content:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired}).isRequired,cta:i().shape({target:i().string,title:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired})}),currentStep:i().string,onCtaClick:i().func.isRequired,title:i().shape({id:i().string.isRequired,defaultMessage:i().string.isRequired}).isRequired};const je=w;var ce=n(18172);const de={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},Ke=(t=de,a)=>(0,ce.ZP)(t,o=>{switch(a.type){case"UPDATE_MODAL":{o.stepContent=a.content,o.sectionIndex=a.newSectionIndex,o.stepIndex=a.newStepIndex,o.hasSectionAfter=a.newHasSectionAfter,o.hasStepAfter=a.newHasStepAfter;break}default:return o}}),$e=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:o,setStepState:r,isGuidedTourVisible:d,setSkipped:u}=(0,s.c1)(),[h,p]=(0,e.useState)(t),[{stepContent:g,sectionIndex:l,stepIndex:A,hasSectionAfter:B,hasStepAfter:K},$]=(0,e.useReducer)(Ke,de),{trackUsage:U}=(0,s.rS)();(0,e.useEffect)(()=>{if(!t){p(!1);return}const[I]=te()(a,t);p(!I&&d)},[t,a,d]),(0,e.useEffect)(()=>{if(t){const[I]=te()(Ie.Z,t),O=Object.keys(a),[N,c]=t.split("."),x=O.indexOf(N),F=Object.keys(a[N]).indexOf(c),Kt=x<O.length-1,$t=F<Object.keys(a[N]).length-1;$({type:"UPDATE_MODAL",content:I,newSectionIndex:x,newStepIndex:F,newHasSectionAfter:Kt,newHasStepAfter:$t})}},[t,a]);const R=()=>{r(t,!0),U(g.trackingEvent),o(null)},Q=()=>{u(!0),o(null),U("didSkipGuidedtour")};return h&&g?e.createElement(be,{hideSkip:!K&&!B,onSkip:Q,onClose:R},e.createElement(je,{...g,onCtaClick:R,currentStep:t,sectionIndex:l,stepIndex:A,hasSectionAfter:B})):null};var ue=n(70004),Qe=n(64330),ze=n(37907),Ve=n(98994),X=n(38040),pe=n(51974),He=n(45842),Ye=n(37227),Je=n(56691),we=n(42384),Xe=n(90690),j=n(73727);const qe=(0,T.ZP)(v.x)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,me=(0,T.ZP)(j.OL)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,ge=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const o=(0,e.useRef)(),[r,d]=(0,e.useState)(!1),{logos:{menu:u}}=(0,P.um)(),[h,p]=(0,s.Yw)("navbar-condensed",!1),{userDisplayName:g}=(0,s.L7)(),{formatMessage:l}=(0,Z.Z)(),{trackUsage:A}=(0,s.rS)(),{pathname:B}=(0,E.TH)(),K=(0,E.k6)(),{post:$}=(0,s.tg)(),U=g.split(" ").map(c=>c.substring(0,1)).join("").substring(0,2),R=()=>d(c=>!c),Q=async()=>{await $("/admin/logout"),s.I8.clearAppStorage(),R(),K.push("/auth/login")},I=c=>{!c.currentTarget.contains(c.relatedTarget)&&c.relatedTarget?.parentElement?.id!=="main-nav-user-button"&&d(!1)},O=(c=null)=>{A("willNavigate",{from:B,to:c})},N=l({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(Qe.$,{condensed:h},e.createElement(ze.D,{as:j.OL,workplace:l({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:N,icon:e.createElement("img",{src:u.custom||u.default,alt:l({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(ue.i,null),e.createElement(Ve._,null,e.createElement(X.O,{as:j.OL,to:"/content-manager",icon:e.createElement(we.Z,null),onClick:()=>O("/content-manager")},l({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(pe.y,{label:l({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(c=>{const x=c.icon;return e.createElement(X.O,{as:j.OL,to:c.to,key:c.to,icon:e.createElement(x,null),onClick:()=>O(c.to)},l(c.intlLabel))})):null,t.length>0?e.createElement(pe.y,{label:l({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(c=>{const x=c.icon;return e.createElement(X.O,{as:j.OL,badgeContent:c.notificationsCount>0&&c.notificationsCount.toString()||void 0,to:c.to,key:c.to,icon:e.createElement(x,null),onClick:()=>O(c.to)},l(c.intlLabel))})):null),e.createElement(He.q,null,e.createElement(Ye.r,{id:"main-nav-user-button",ref:o,onClick:R,initials:U},g),r&&e.createElement(qe,{onBlur:I,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(ae.i,{onEscape:R},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:0},e.createElement(me,{tabIndex:0,onClick:R,to:"/me"},e.createElement(f.Z,null,l({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(me,{tabIndex:0,onClick:Q,to:"/auth/login"},e.createElement(f.Z,{textColor:"danger600"},l({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(Xe.Z,null))))),e.createElement(Je.w,{onClick:()=>p(c=>!c)},l(h?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"}))))};ge.propTypes={generalSectionLinks:i().array.isRequired,pluginsSectionLinks:i().array.isRequired};const _e=ge;var et=n(727);const tt=(0,T.ZP)(v.x)`
  flex: 1;
`,he=({children:t,sideNav:a})=>{const{formatMessage:o}=(0,Z.Z)();return e.createElement(v.x,{background:"neutral100"},e.createElement(et.z,null,o({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(m.k,{alignItems:"flex-start"},a,e.createElement(tt,null,t)))};he.propTypes={children:i().node.isRequired,sideNav:i().node.isRequired};const nt=he;var at=n(63128),q=n(52624),ot=n(37108),st=n(63237),it=n(90296),rt=n(87801),lt=n(90321);const ct=n.p+"19eb2dfcf2603eb55733.png";var dt=n(78976),ut=n(9474);const pt=[{label:{id:"app.components.Onboarding.link.build-content",defaultMessage:"Build a content architecture"},href:"https://www.youtube.com/watch?v=G9GjN0RxhkE",duration:"5:48"},{label:{id:"app.components.Onboarding.link.manage-content",defaultMessage:"Add & manage content"},href:"https://www.youtube.com/watch?v=DEZw4KbybAI",duration:"3:18"},{label:{id:"app.components.Onboarding.link.manage-media",defaultMessage:"Manage media"},href:"https://www.youtube.com/watch?v=-61MuiMQb38",duration:"3:41"}],Ee={href:"https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",label:{id:"app.components.Onboarding.link.more-videos",defaultMessage:"Watch more videos"}},mt=[{label:{id:"global.documentation",defaultMessage:"documentation"},href:"https://docs.strapi.io",icon:dt.Z},{label:{id:"app.static.links.cheatsheet",defaultMessage:"cheatsheet"},href:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",icon:ut.Z}],gt=(0,T.ZP)(H.z)`
  border-radius: 50%;
  padding: ${({theme:t})=>t.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`,ht=(0,T.ZP)(m.k)`
  transform: translate(-50%, -50%);
`,Et=(0,T.ZP)(m.k)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({theme:t})=>`-${t.spaces[1]}`};
  }

  :hover {
    background: ${({theme:t})=>t.colors.primary100};

    /* Hover style for the number displayed */
    ${f.Z}:first-child {
      color: ${({theme:t})=>t.colors.primary500};
    }

    /* Hover style for the label */
    ${f.Z}:nth-child(1) {
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,ft=T.ZP.img`
  width: ${({theme:t})=>t.spaces[10]};
  height: ${({theme:t})=>t.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
  border-radius: ${({theme:t})=>t.borderRadius};
`,fe=(0,T.ZP)(f.Z)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`,ye=(0,T.ZP)(fe)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,yt=()=>{const t=(0,e.useRef)(),[a,o]=(0,e.useState)(!1),{formatMessage:r}=(0,Z.Z)(),{communityEdition:d}=(0,s.L7)(),u=()=>{o(p=>!p)},h=[...mt,{label:{id:"Settings.application.get-help",defaultMessage:"Get help"},icon:it.Z,href:d?"https://discord.strapi.io":"https://support.strapi.io/support/home"}];return e.createElement(v.x,{as:"aside",position:"fixed",bottom:2,right:2},e.createElement(gt,{"aria-label":r(a?{id:"app.components.Onboarding.help.button-close",defaultMessage:"Close help menu"}:{id:"app.components.Onboarding.help.button",defaultMessage:"Open help menu"}),onClick:u,ref:t},e.createElement(q.J,{as:a?oe.Z:rt.Z,color:"buttonNeutral0"})),a&&e.createElement(ne.h,null,e.createElement(ot.VY,{padding:0,onDimiss:u,source:t,placement:"top-end",spacing:12},e.createElement(m.k,{justifyContent:"space-between",paddingBottom:5,paddingRight:6,paddingLeft:6,paddingTop:6},e.createElement(fe,{fontWeight:"bold"},r({id:"app.components.Onboarding.title",defaultMessage:"Get started videos"})),e.createElement(ye,{as:"a",href:Ee.href,target:"_blank",rel:"noreferrer noopener",variant:"pi",textColor:"primary600"},r(Ee.label))),e.createElement(ue.i,null),pt.map(({href:p,duration:g,label:l},A)=>e.createElement(Et,{as:"a",href:p,target:"_blank",rel:"noreferrer noopener",key:p,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:11},e.createElement(v.x,{paddingRight:5},e.createElement(f.Z,{textColor:"neutral200",variant:"alpha"},A+1)),e.createElement(v.x,{position:"relative"},e.createElement(ft,{src:ct,alt:""}),e.createElement(ht,{position:"absolute",top:"50%",left:"50%",background:"primary600",borderRadius:"50%",justifyContent:"center",width:6,height:6},e.createElement(q.J,{as:lt.Z,color:"buttonNeutral0",width:3,height:3}))),e.createElement(m.k,{direction:"column",alignItems:"start",paddingLeft:4},e.createElement(f.Z,{fontWeight:"bold"},r(l)),e.createElement(st.T,null,":"),e.createElement(f.Z,{textColor:"neutral600",variant:"pi"},g)))),e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:2,paddingLeft:5,paddingTop:2,paddingBottom:5},h.map(({label:p,href:g,icon:l})=>e.createElement(m.k,{gap:3,key:g},e.createElement(q.J,{as:l,color:"primary600"}),e.createElement(ye,{as:"a",href:g,target:"_blank",rel:"noreferrer noopener",variant:"sigma",textColor:"primary700"},r(p))))))))},vt=(0,e.lazy)(()=>Promise.all([n.e(1392),n.e(5317),n.e(8385),n.e(994)]).then(n.bind(n,7755))),Tt=(0,e.lazy)(()=>n.e(3981).then(n.bind(n,89687))),Ct=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,4186))),Mt=(0,e.lazy)(()=>n.e(5516).then(n.bind(n,19872))),ve=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,23337))),Pt=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,50068))),St=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,3549))),Te=(0,e.lazy)(()=>n.e(5895).then(n.bind(n,6966))),At=()=>{const{trackUsage:t}=(0,s.rS)(),a=(0,k.I0)(),o=(0,k.v9)(r=>r.admin_app.status);(0,e.useEffect)(()=>{o==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:at.eb}))},[o])},Rt=()=>{At();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:o}=(0,P.H9)(),{menu:r}=(0,s.j1)(),{showTutorials:d}=(0,P.um)(),u=(0,e.useMemo)(()=>r.filter(h=>h.Component).map(({to:h,Component:p,exact:g})=>(0,L.ot)(p,h,g)),[r]);return t?e.createElement(s.dO,null):e.createElement(S.DndProvider,{backend:D.PD},e.createElement(nt,{sideNav:e.createElement(_e,{generalSectionLinks:a,pluginsSectionLinks:o})},e.createElement(e.Suspense,{fallback:e.createElement(s.dO,null)},e.createElement(E.rs,null,e.createElement(E.AW,{path:"/",component:Tt,exact:!0}),e.createElement(E.AW,{path:"/me",component:St,exact:!0}),e.createElement(E.AW,{path:"/content-manager",component:vt}),u,e.createElement(E.AW,{path:"/settings/:settingId",component:Te}),e.createElement(E.AW,{path:"/settings",component:Te,exact:!0}),e.createElement(E.AW,{path:"/marketplace"},e.createElement(Mt,null)),e.createElement(E.AW,{path:"/list-plugins",exact:!0},e.createElement(Ct,null)),e.createElement(E.AW,{path:"/404",component:ve}),e.createElement(E.AW,{path:"/500",component:Pt}),e.createElement(E.AW,{path:"",component:ve}))),e.createElement($e,null),d&&e.createElement(yt,null)))},It=t=>({plugins:Object.keys(t).reduce((a,o)=>(a[o]={...t[o]},a),{})});var Lt=n(36968),Ot=n.n(Lt);const Ce={plugins:null},xt=(t=Ce,a)=>(0,ce.ZP)(t,o=>{switch(a.type){case"SET_PLUGIN_READY":{Ot()(o,["plugins",a.pluginId,"isReady"],!0);break}default:return o}}),bt=()=>{const{plugins:t}=(0,s.j1)(),[{plugins:a},o]=(0,e.useReducer)(xt,Ce,()=>It(t)),r=(0,e.useRef)(u=>{o({type:"SET_PLUGIN_READY",pluginId:u})});if(Object.keys(a).some(u=>a[u].isReady===!1)){const u=Object.keys(a).reduce((h,p)=>{const g=a[p].initializer;if(g){const l=a[p].pluginId;h.push(e.createElement(g,{key:l,setPlugin:r.current}))}return h},[]);return e.createElement(e.Fragment,null,u,e.createElement(s.dO,null))}return e.createElement(Rt,null)};var Me=n(58633);const Dt=()=>({type:Me.l}),Bt=t=>({type:Me.m,permissions:t}),Pe=({children:t,permissions:a,refetchPermissions:o})=>{const{allPermissions:r}=(0,k.v9)(u=>u.rbacProvider),d=(0,k.I0)();return(0,e.useEffect)(()=>(d(Bt(a)),()=>{d(Dt())}),[a,d]),r?e.createElement(s.oL.Provider,{value:{allPermissions:r,refetchPermissions:o}},t):e.createElement(s.dO,null)};Pe.propTypes={children:i().element.isRequired,permissions:i().array.isRequired,refetchPermissions:i().func.isRequired};const Wt=Pe;var kt=n(81249),_=n.n(kt);const Se=(t,a)=>!_().valid(t)||!_().valid(a)?!1:_().lt(t,a),Ae=M.i8,Zt=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),{get:ee}=(0,s.tg)(),Gt=async t=>{try{const a=await fetch("https://api.github.com/repos/strapi/strapi/releases/latest");if(!a.ok)throw new Error("Failed to fetch latest Strapi version.");const{tag_name:o}=await a.json();return Se(Ae,o)&&Zt&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${o}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),o}catch{return Ae}},Ut=async()=>{try{const{data:t,headers:a}=await ee("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},Nt=async()=>{try{const{data:t,headers:a}=await ee("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},Ft=async()=>{try{const{data:{data:{roles:t}}}=await ee("/admin/users/me");return t}catch(t){throw new Error(t)}},Re=M.i8,jt=()=>{const{setGuidedTourVisibility:t}=(0,s.c1)(),a=(0,s.lm)(),o=s.I8.getUserInfo(),r=W()(o,"username")||(0,L.Pp)(o.firstname,o.lastname),[d,u]=(0,e.useState)(r),[h,p]=(0,e.useState)(null),{showReleaseNotification:g}=(0,P.um)(),[{data:l,status:A},{data:B,isLoading:K},{data:$,status:U,refetch:R,isFetching:Q},{data:I}]=(0,y.useQueries)([{queryKey:"app-infos",queryFn:Ut},{queryKey:"strapi-release",queryFn:()=>Gt(a),enabled:g,initialData:Re},{queryKey:"admin-users-permission",queryFn:Nt,initialData:[]},{queryKey:"user-roles",queryFn:Ft}]),O=Se(Re,B);return(0,e.useEffect)(()=>{I&&I.find(({code:F})=>F==="strapi-super-admin")&&l?.autoReload&&t(!0)},[I,l,t]),(0,e.useEffect)(()=>{(async()=>{const F=await(0,L.Qy)(o);p(F)})()},[o]),K||(Q||A==="loading"||U==="loading")?e.createElement(s.dO,null):A==="error"?e.createElement("div",null,"error..."):e.createElement(s.iq,{...l,userId:h,latestStrapiReleaseTag:B,setUserDisplayName:u,shouldUpdateStrapi:O,userDisplayName:d},e.createElement(Wt,{permissions:$,refetchPermissions:R},e.createElement(bt,null)))}},43234:(z,C,n)=>{n.d(C,{Z:()=>L});var e=n(67294),s=n(41580),b=n(57993),W=n(45697),y=n.n(W),M=n(16334);const P=({type:S,...D})=>e.createElement(s.x,{width:(0,b.Q1)(2),height:"100%",background:S===M.VM?"neutral300":"primary500",hasRadius:!0,...D});P.defaultProps={type:M.VM},P.propTypes={type:y().oneOf([M.lW,M.hx,M.VM])};const L=P},2364:(z,C,n)=>{n.d(C,{Z:()=>k});var e=n(67294),s=n(11047),b=n(52624),W=n(75515),y=n(57993),M=n(85018),P=n(45697),L=n.n(P),S=n(16334);const D=({type:E,number:V})=>E===S.hx?e.createElement(s.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,y.Q1)(30),height:(0,y.Q1)(30),justifyContent:"center"},e.createElement(b.J,{as:M.Z,"aria-hidden":!0,width:(0,y.Q1)(16),color:"neutral0"})):E===S.lW?e.createElement(s.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,y.Q1)(30),height:(0,y.Q1)(30),justifyContent:"center"},e.createElement(W.Z,{fontWeight:"semiBold",textColor:"neutral0"},V)):e.createElement(s.k,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,y.Q1)(30),height:(0,y.Q1)(30),justifyContent:"center"},e.createElement(W.Z,{fontWeight:"semiBold",textColor:"neutral600"},V));D.defaultProps={number:void 0,type:S.VM},D.propTypes={number:L().number,type:L().oneOf([S.lW,S.hx,S.VM])};const k=D},16334:(z,C,n)=>{n.d(C,{VM:()=>b,hx:()=>s,lW:()=>e});const e="isActive",s="isDone",b="isNotDone"},99571:(z,C,n)=>{n.d(C,{Z:()=>s});const s={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);
