(()=>{var e={};e.id=290,e.ids=[290],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},2181:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},9563:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},3325:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},8801:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>i.a,__next_app__:()=>h,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var r=n(482),a=n(9108),s=n(2563),i=n.n(s),o=n(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);n.d(t,l);let d=["",{children:["pages",{children:["careers",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,4458)),"D:\\8000\\testyyyy\\minesgit\\mines\\src\\app\\pages\\careers\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(n.bind(n,3483)),"D:\\8000\\testyyyy\\minesgit\\mines\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(n.bind(n,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\8000\\testyyyy\\minesgit\\mines\\src\\app\\pages\\careers\\page.tsx"],p="/pages/careers/page",h={require:n,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/pages/careers/page",pathname:"/pages/careers",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4947:(e,t,n)=>{Promise.resolve().then(n.bind(n,623)),Promise.resolve().then(n.bind(n,2628)),Promise.resolve().then(n.bind(n,8173)),Promise.resolve().then(n.bind(n,1415))},6878:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,2583,23)),Promise.resolve().then(n.t.bind(n,6840,23)),Promise.resolve().then(n.t.bind(n,8771,23)),Promise.resolve().then(n.t.bind(n,3225,23)),Promise.resolve().then(n.t.bind(n,9295,23)),Promise.resolve().then(n.t.bind(n,3982,23))},3402:(e,t,n)=>{Promise.resolve().then(n.bind(n,3983))},5442:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var r=n(1848),a=n(5651),s=n(3729),i=n(6815),o=n(2037),l=n(5599),d=n(9448),c=n(3139),p=n(5866),h=n(9927),u=n(7895);function m(e){return(0,u.ZP)("MuiTypography",e)}(0,h.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=n(5344);let x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=e=>{let{align:t,gutterBottom:n,noWrap:r,paragraph:a,variant:s,classes:i}=e,o={root:["root",s,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,l.Z)(o,m,i)},y=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,p.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,a.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=e=>b[e]||e,Z=s.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiTypography"}),s=j(n.color),l=(0,o.Z)((0,a.Z)({},n,{color:s})),{align:d="inherit",className:p,component:h,gutterBottom:u=!1,noWrap:m=!1,paragraph:b=!1,variant:Z="body1",variantMapping:w=v}=l,C=(0,r.Z)(l,x),P=(0,a.Z)({},l,{align:d,color:s,className:p,component:h,gutterBottom:u,noWrap:m,paragraph:b,variant:Z,variantMapping:w}),k=h||(b?"p":w[Z]||v[Z])||"span",S=f(P);return(0,g.jsx)(y,(0,a.Z)({as:k,ref:t,ownerState:P,className:(0,i.Z)(S.root,p)},C))})},7273:(e,t,n)=>{"use strict";n.d(t,{default:()=>a.a});var r=n(3267),a=n.n(r)},3267:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let r=n(9694);n(5344),n(3729);let a=r._(n(546));function s(e,t){let n={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};return"function"==typeof e&&(n.loader=e),(0,a.default)({...n,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8354:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let r=n(3689);function a(e){let{reason:t,children:n}=e;throw new r.BailoutToCSRError(t)}},546:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(5344),a=n(3729),s=n(8354);function i(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let o={loader:()=>Promise.resolve(i(()=>null)),loading:null,ssr:!0},l=function(e){let t={...o,...e},n=(0,a.lazy)(()=>t.loader().then(i)),l=t.loading;function d(e){let i=l?(0,r.jsx)(l,{isLoading:!0,pastDelay:!0,error:null}):null,o=t.ssr?(0,r.jsx)(n,{...e}):(0,r.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,r.jsx)(n,{...e})});return(0,r.jsx)(a.Suspense,{fallback:i,children:o})}return d.displayName="LoadableComponent",d}},3983:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>eZ});var r=n(5344),a=n(3729),s=n.n(a),i=n(8428);n(9396),n(2849);var o=n(7273),l=n(502),d=n(8782),c=n(5183),p=n(5442),h=n(5651),u=n(1848),m=n(6815),g=n(3685),x=n(1330),f=n(2037),y=n(6761);let v=["className","component"];var b=n(591),j=n(4400),Z=n(1466),w=n(9927);let C=(0,w.Z)("MuiBox",["root"]),P=(0,j.Z)(),k=function(e={}){let{themeId:t,defaultTheme:n,defaultClassName:s="MuiBox-root",generateClassName:i}=e,o=(0,g.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(x.Z);return a.forwardRef(function(e,a){let l=(0,y.Z)(n),d=(0,f.Z)(e),{className:c,component:p="div"}=d,g=(0,u.Z)(d,v);return(0,r.jsx)(o,(0,h.Z)({as:p,ref:a,className:(0,m.Z)(c,i?i(s):s),theme:t&&l[t]||l},g))})}({themeId:Z.Z,defaultTheme:P,defaultClassName:C.root,generateClassName:b.Z.generate});var S=n(2279);n(9102);var N=n(5599),R=n(9448),O=n(3139),M=n(269),T=n(6314),E=n(1925),D=n(5926),B=n(6854),q=n(3722),A=n(7895);function _(e){return(0,A.ZP)("MuiCollapse",e)}(0,w.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);let $=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],G=e=>{let{orientation:t,classes:n}=e,r={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,N.Z)(r,_,n)},z=(0,R.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})(({theme:e,ownerState:t})=>(0,h.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,h.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"})),F=(0,R.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})(({ownerState:e})=>(0,h.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),I=(0,R.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})(({ownerState:e})=>(0,h.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"})),L=a.forwardRef(function(e,t){let n=(0,O.Z)({props:e,name:"MuiCollapse"}),{addEndListener:s,children:i,className:o,collapsedSize:l="0px",component:d,easing:c,in:p,onEnter:g,onEntered:x,onEntering:f,onExit:y,onExited:v,onExiting:b,orientation:j="vertical",style:Z,timeout:w=E.x9.standard,TransitionComponent:C=M.ZP}=n,P=(0,u.Z)(n,$),k=(0,h.Z)({},n,{orientation:j,collapsedSize:l}),S=G(k),N=(0,B.Z)(),R=(0,T.Z)(),A=a.useRef(null),_=a.useRef(),L="number"==typeof l?`${l}px`:l,W="horizontal"===j,H=W?"width":"height",V=a.useRef(null),U=(0,q.Z)(t,V),J=e=>t=>{if(e){let n=V.current;void 0===t?e(n):e(n,t)}},Q=()=>A.current?A.current[W?"clientWidth":"clientHeight"]:0,X=J((e,t)=>{A.current&&W&&(A.current.style.position="absolute"),e.style[H]=L,g&&g(e,t)}),K=J((e,t)=>{let n=Q();A.current&&W&&(A.current.style.position="");let{duration:r,easing:a}=(0,D.C)({style:Z,timeout:w,easing:c},{mode:"enter"});if("auto"===w){let t=N.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${t}ms`,_.current=t}else e.style.transitionDuration="string"==typeof r?r:`${r}ms`;e.style[H]=`${n}px`,e.style.transitionTimingFunction=a,f&&f(e,t)}),Y=J((e,t)=>{e.style[H]="auto",x&&x(e,t)}),ee=J(e=>{e.style[H]=`${Q()}px`,y&&y(e)}),et=J(v),en=J(e=>{let t=Q(),{duration:n,easing:r}=(0,D.C)({style:Z,timeout:w,easing:c},{mode:"exit"});if("auto"===w){let n=N.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${n}ms`,_.current=n}else e.style.transitionDuration="string"==typeof n?n:`${n}ms`;e.style[H]=L,e.style.transitionTimingFunction=r,b&&b(e)});return(0,r.jsx)(C,(0,h.Z)({in:p,onEnter:X,onEntered:Y,onEntering:K,onExit:ee,onExited:et,onExiting:en,addEndListener:e=>{"auto"===w&&R.start(_.current||0,e),s&&s(V.current,e)},nodeRef:V,timeout:"auto"===w?null:w},P,{children:(e,t)=>(0,r.jsx)(z,(0,h.Z)({as:d,className:(0,m.Z)(S.root,o,{entered:S.entered,exited:!p&&"0px"===L&&S.hidden}[e]),style:(0,h.Z)({[W?"minWidth":"minHeight"]:L},Z),ref:U},t,{ownerState:(0,h.Z)({},k,{state:e}),children:(0,r.jsx)(F,{ownerState:(0,h.Z)({},k,{state:e}),className:S.wrapper,ref:A,children:(0,r.jsx)(I,{ownerState:(0,h.Z)({},k,{state:e}),className:S.wrapperInner,children:i})})}))}))});L.muiSupportAuto=!0;var W=n(2850);let H=a.createContext({});var V=n(885),U=n(6212),J=n(9992),Q=n(4814),X=n(7369);let K=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],Y=["component","slots","slotProps"],ee=["component"];function et(e){return(0,A.ZP)("MuiAccordion",e)}let en=(0,w.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),er=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],ea=e=>{let{classes:t,square:n,expanded:r,disabled:a,disableGutters:s}=e;return(0,N.Z)({root:["root",!n&&"rounded",r&&"expanded",a&&"disabled",!s&&"gutters"],region:["region"]},et,t)},es=(0,R.ZP)(W.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[{[`& .${en.region}`]:t.region},t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})(({theme:e})=>{let t={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],t),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${en.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${en.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:t})=>(0,h.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&{[`&.${en.expanded}`]:{margin:"16px 0"}})),ei=a.forwardRef(function(e,t){let n=(0,O.Z)({props:e,name:"MuiAccordion"}),{children:s,className:i,defaultExpanded:o=!1,disabled:l=!1,disableGutters:d=!1,expanded:c,onChange:p,square:g=!1,slots:x={},slotProps:f={},TransitionComponent:y,TransitionProps:v}=n,b=(0,u.Z)(n,er),[j,Z]=(0,V.Z)({controlled:c,default:o,name:"Accordion",state:"expanded"}),w=a.useCallback(e=>{Z(!j),p&&p(e,!j)},[j,p,Z]),[C,...P]=a.Children.toArray(s),k=a.useMemo(()=>({expanded:j,disabled:l,disableGutters:d,toggle:w}),[j,l,d,w]),S=(0,h.Z)({},n,{square:g,disabled:l,disableGutters:d,expanded:j}),N=ea(S),[R,M]=function(e,t){let{className:n,elementType:r,ownerState:a,externalForwardedProps:s,getSlotOwnerState:i,internalForwardedProps:o}=t,l=(0,u.Z)(t,K),{component:d,slots:c={[e]:void 0},slotProps:p={[e]:void 0}}=s,m=(0,u.Z)(s,Y),g=c[e]||r,x=(0,J.x)(p[e],a),f=(0,Q.L)((0,h.Z)({className:n},l,{externalForwardedProps:"root"===e?m:void 0,externalSlotProps:x})),{props:{component:y},internalRef:v}=f,b=(0,u.Z)(f.props,ee),j=(0,U.Z)(v,null==x?void 0:x.ref,t.ref),Z=i?i(b):{},w=(0,h.Z)({},a,Z),C="root"===e?y||d:y,P=(0,X.$)(g,(0,h.Z)({},"root"===e&&!d&&!c[e]&&o,"root"!==e&&!c[e]&&o,b,C&&{as:C},{ref:j}),w);return Object.keys(Z).forEach(e=>{delete P[e]}),[g,P]}("transition",{elementType:L,externalForwardedProps:{slots:(0,h.Z)({transition:y},x),slotProps:(0,h.Z)({transition:v},f)},ownerState:S});return(0,r.jsxs)(es,(0,h.Z)({className:(0,m.Z)(N.root,i),ref:t,ownerState:S,square:g},b,{children:[(0,r.jsx)(H.Provider,{value:k,children:C}),(0,r.jsx)(R,(0,h.Z)({in:j,timeout:"auto"},M,{children:(0,r.jsx)("div",{"aria-labelledby":C.props.id,id:C.props["aria-controls"],role:"region",className:N.region,children:P})}))]}))});function eo(e){return(0,A.ZP)("MuiAccordionDetails",e)}(0,w.Z)("MuiAccordionDetails",["root"]);let el=["className"],ed=e=>{let{classes:t}=e;return(0,N.Z)({root:["root"]},eo,t)},ec=(0,R.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),ep=a.forwardRef(function(e,t){let n=(0,O.Z)({props:e,name:"MuiAccordionDetails"}),{className:a}=n,s=(0,u.Z)(n,el),i=ed(n);return(0,r.jsx)(ec,(0,h.Z)({className:(0,m.Z)(i.root,a),ref:t,ownerState:n},s))});var eh=n(973);function eu(e){return(0,A.ZP)("MuiAccordionSummary",e)}let em=(0,w.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),eg=["children","className","expandIcon","focusVisibleClassName","onClick"],ex=e=>{let{classes:t,expanded:n,disabled:r,disableGutters:a}=e;return(0,N.Z)({root:["root",n&&"expanded",r&&"disabled",!a&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!a&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},eu,t)},ef=(0,R.ZP)(eh.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>{let n={duration:e.transitions.duration.shortest};return(0,h.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${em.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${em.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${em.disabled})`]:{cursor:"pointer"}},!t.disableGutters&&{[`&.${em.expanded}`]:{minHeight:64}})}),ey=(0,R.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,t)=>t.content})(({theme:e,ownerState:t})=>(0,h.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${em.expanded}`]:{margin:"20px 0"}})),ev=(0,R.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,t)=>t.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${em.expanded}`]:{transform:"rotate(180deg)"}})),eb=a.forwardRef(function(e,t){let n=(0,O.Z)({props:e,name:"MuiAccordionSummary"}),{children:s,className:i,expandIcon:o,focusVisibleClassName:l,onClick:d}=n,c=(0,u.Z)(n,eg),{disabled:p=!1,disableGutters:g,expanded:x,toggle:f}=a.useContext(H),y=(0,h.Z)({},n,{expanded:x,disabled:p,disableGutters:g}),v=ex(y);return(0,r.jsxs)(ef,(0,h.Z)({focusRipple:!1,disableRipple:!0,disabled:p,component:"div","aria-expanded":x,className:(0,m.Z)(v.root,i),focusVisibleClassName:(0,m.Z)(v.focusVisible,l),onClick:e=>{f&&f(e),d&&d(e)},ref:t,ownerState:y},c,{children:[(0,r.jsx)(ey,{className:v.content,ownerState:y,children:s}),o&&(0,r.jsx)(ev,{className:v.expandIconWrapper,ownerState:y,children:o})]}))});n(7231);let ej={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function eZ(){let e=(0,i.useRouter)(),[t,n]=(0,a.useState)(null),[o,h]=s().useState(!1),u=()=>h(!0),[m,g]=s().useState(!1),x=e=>(t,n)=>{g(!!n&&e)};return(0,a.useEffect)(()=>{},["undefined"]),r.jsx("div",{className:"main-container",children:t&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"banner",children:[(0,r.jsxs)("div",{className:"header bgwhite",children:[r.jsx("div",{className:"menu-icon"}),r.jsx("a",{onClick:()=>{e.push("/pages/home")},className:"logo-2",children:r.jsx("img",{src:"../images/logo-2.png"})}),r.jsx("div",{className:"menu",children:(0,r.jsxs)("menu",{children:[r.jsx(l.Z,{onClick:()=>{e.push("/pages/home")},children:"Home"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/about")},children:"About"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/products")},children:"Our Products"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/machinery")},children:"Machinery"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/productivity")},children:"Productivity"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/gallery")},children:"Gallery"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/contact")},children:"Contact Us"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/careers")},className:"active",children:"Careers"})]})})]}),(0,r.jsxs)("div",{className:"careers-banner",children:[r.jsx("a",{onClick:()=>{e.push("/pages/quote")},className:"request-button",children:"Request a Quote"}),r.jsx("img",{src:"../images/careers-banner.jpg"}),r.jsx("div",{className:"title-blk-bar",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("h1",{children:["Open ",(0,r.jsxs)("span",{children:["Positions",r.jsx("br",{}),r.jsx("span",{children:"Employment"})]})]}),r.jsx("div",{className:"tagline",children:"Join us in shaping a future where every career is a contribution to sustainable mining"})]})})]})]}),r.jsx("div",{className:"container bot-mar emp",children:(0,r.jsxs)(d.Z,{container:!0,spacing:2,rowSpacing:2,columnSpacing:4,className:"bot-mar",children:[(0,r.jsxs)(d.Z,{md:6,sm:6,xs:12,columnSpacing:2,spacing:2,children:[r.jsx("h3",{children:"Positions:"}),r.jsx("strong",{children:"Executive Management:"}),(0,r.jsxs)("p",{children:[r.jsx(c.Z,{onClick:u,className:"text-but",children:"Chief Executive Officer (CEO):"}),"The top executive responsible for overall strategic direction and management of the company."]}),(0,r.jsxs)("p",{children:[r.jsx(c.Z,{onClick:u,className:"text-but",children:"Chief Operating Officer (COO):"}),"Oversees daily operations and ensures the company's operational strategies align with its overall goals"]}),(0,r.jsxs)("p",{children:[r.jsx(c.Z,{onClick:u,className:"text-but",children:"Chief Financial Officer (CFO)::"}),"Responsible for financial planning, reporting, and management."]}),(0,r.jsxs)("p",{children:[r.jsx(c.Z,{onClick:u,className:"text-but",children:"Chief Technical Officer (CTO):"}),"Oversees technological aspects of mining operations, including exploration, extraction, and processing."]}),(0,r.jsxs)("p",{children:[r.jsx(c.Z,{onClick:u,className:"text-but",children:"Chief Sustainability Officer (CSO):"}),"Responsible for ensuring environmental and social sustainability practices are integrated into operations."]}),(0,r.jsxs)("p",{children:[r.jsx(c.Z,{onClick:u,className:"text-but",children:"Chief Safety Officer (CSO):"}),"Oversees safety protocols and regulations to ensure a safe working environment for all employees."]}),r.jsx("strong",{children:"Middle Management:"}),(0,r.jsxs)("p",{children:[r.jsx(c.Z,{onClick:u,className:"text-but",children:"Chief Executive Officer (CEO):"}),"The top executive responsible for overall strategic direction and management of the company."]}),(0,r.jsxs)("p",{children:[r.jsx(c.Z,{onClick:u,className:"text-but",children:"General Managers:"}),"Oversee specific operations or divisions within the company, such as underground mining, surface mining, exploration, or processing plants."]}),(0,r.jsxs)("p",{children:[r.jsx(c.Z,{onClick:u,className:"text-but",children:"Mine Managers:"}),"Responsible for the day-to-day operations of a specific mine or mining site."]}),(0,r.jsxs)("p",{children:[r.jsx(c.Z,{onClick:u,className:"text-but",children:"Department Heads:"}),"Manage specific departments within the company, such as geology, engineering, health and safety, environmental compliance, human resources, or finance."]})]}),(0,r.jsxs)(d.Z,{md:6,sm:6,xs:12,columnSpacing:2,spacing:2,className:"accord",children:[r.jsx("h3",{children:"Employee Benefits"}),r.jsx("div",{className:"bot-mar",children:"Employee benefits are non-wage compensations provided to employees in addition to their regular salary or wages. These benefits are offered by employers as a way to attract and retain talent, enhance job satisfaction, and promote overall employee well-being. Common employee benefits include:"}),(0,r.jsxs)(ei,{expanded:"panel1"===m,onChange:x("panel1"),children:[r.jsx(eb,{"aria-controls":"panel1bh-content",id:"panel1bh-header",children:r.jsx(p.Z,{sx:{width:"100%",flexShrink:0},children:"Health insurance:"})}),r.jsx(ep,{children:r.jsx(p.Z,{children:"Employers may offer health insurance coverage to help employees pay for medical expenses, including doctor visits, hospital stays, prescription medications, and preventive care."})})]}),(0,r.jsxs)(ei,{expanded:"panel2"===m,onChange:x("panel2"),children:[r.jsx(eb,{"aria-controls":"panel2bh-content",id:"panel2bh-header",children:r.jsx(p.Z,{sx:{width:"100%",flexShrink:0},children:"Retirement plans: "})}),r.jsx(ep,{children:r.jsx(p.Z,{children:"These include employer-sponsored retirement savings plans such as 401(k) or pension plans, where employers contribute funds to help employees save for retirement."})})]}),(0,r.jsxs)(ei,{expanded:"panel3"===m,onChange:x("panel3"),children:[r.jsx(eb,{"aria-controls":"panel3bh-content",id:"panel3bh-header",children:r.jsx(p.Z,{sx:{width:"100%",flexShrink:0},children:"Paid time off (PTO):"})}),r.jsx(ep,{children:r.jsx(p.Z,{children:"This includes vacation days, sick leave, and holidays during which employees are paid while not working."})})]}),(0,r.jsxs)(ei,{expanded:"panel4"===m,onChange:x("panel4"),children:[r.jsx(eb,{"aria-controls":"panel4bh-content",id:"panel4bh-header",children:r.jsx(p.Z,{sx:{width:"100%",flexShrink:0},className:"acc-head",children:" Flexible work arrangements:"})}),r.jsx(ep,{children:r.jsx(p.Z,{children:"Employers may offer options such as telecommuting, flexible scheduling, or part-time work to accommodate employees' personal needs and preferences."})})]}),(0,r.jsxs)(ei,{expanded:"panel5"===m,onChange:x("panel5"),children:[r.jsx(eb,{"aria-controls":"panel5bh-content",id:"panel5bh-header",children:r.jsx(p.Z,{sx:{width:"100%",flexShrink:0},className:"acc-head",children:" Life insurance:"})}),r.jsx(ep,{children:r.jsx(p.Z,{children:"Some employers provide life insurance coverage to employees, offering financial protection to their families in the event of the employee's death."})})]}),(0,r.jsxs)(ei,{expanded:"panel6"===m,onChange:x("panel6"),children:[r.jsx(eb,{"aria-controls":"panel5bh-content",id:"panel5bh-header",children:r.jsx(p.Z,{sx:{width:"100%",flexShrink:0},className:"acc-head",children:" Disability insurance:"})}),r.jsx(ep,{children:r.jsx(p.Z,{children:"This benefit provides income replacement for employees who are unable to work due to a disability or illness."})})]}),(0,r.jsxs)(ei,{expanded:"panel7"===m,onChange:x("panel7"),children:[r.jsx(eb,{"aria-controls":"panel5bh-content",id:"panel5bh-header",children:r.jsx(p.Z,{sx:{width:"100%",flexShrink:0},className:"acc-head",children:" Dental and vision insurance:"})}),r.jsx(ep,{children:r.jsx(p.Z,{children:"Coverage for dental care and vision-related expenses, such as eye exams, glasses, and contact lenses."})})]})]})]})}),r.jsx("div",{style:{margin:"0%"},children:r.jsx(S.Z,{open:o,onClose:()=>h(!1),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(k,{sx:ej,children:[r.jsx(p.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:r.jsx(d.Z,{container:!0,spacing:2,rowSpacing:4,columnSpacing:4,className:"bot-mar pophead",children:"Position: Chief Executive Officer (CEO):"})}),r.jsx(p.Z,{id:"modal-modal-description",sx:{mt:2},children:(0,r.jsxs)("div",{className:"row margin-none career-content",children:[(0,r.jsxs)("p",{className:"bot-mar emp-content",children:[(0,r.jsxs)("p",{children:[" ",r.jsx("strong",{children:"Overview:"}),"The CEO (Chief Executive Officer) is the highest-ranking executive in a company, responsible for making major corporate decisions, managing the overall operations and resources of the company, and acting as the main point of communication between the board of directors and corporate operations. "]}),r.jsx("strong",{children:"Here's a more detailed job description for a CEO:"}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Setting Strategy and Vision:"})," The CEO is responsible for developing and communicating the company's vision, mission, and overall direction. They set strategic goals and objectives in alignment with the company's mission and ensure that all employees understand and work towards achieving these goals."]}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Leadership and Management:"})," The CEO provides leadership to the executive team and other employees, motivating them to perform at their best and achieve company objectives. They establish a positive organizational culture that fosters innovation, collaboration, and high performance."]}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Financial Management:"})," The CEO oversees the financial health of the company, including budgeting, financial planning, and ensuring profitability and sustainability. They work closely with the CFO (Chief Financial Officer) to develop financial strategies and monitor financial performance."]}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Stakeholder Relations:"})," The CEO represents the company to stakeholders including investors, customers, employees, and the public. They build and maintain relationships with key stakeholders, ensuring transparency, trust, and alignment of interests."]}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Board Relations:"})," The CEO works closely with the board of directors, providing regular updates on company performance, seeking guidance and approval for major decisions, and implementing board directives."]}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Risk Management:"})," The CEO identifies and mitigates risks that could affect the company's reputation, financial stability, or operations. They develop strategies to address potential challenges and ensure business continuity."]}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Strategic Partnerships and M&A:"})," The CEO identifies opportunities for strategic partnerships, alliances, and acquisitions that align with the company's growth objectives. They negotiate and oversee partnerships and M&A deals to maximize value for the company."]}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Talent Management:"})," The CEO is responsible for attracting, retaining, and developing top talent within the organization. They create a culture of continuous learning and development, provide opportunities for career growth, and ensure diversity and inclusion in the workforce."]}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Compliance and Ethics:"})," The CEO ensures that the company operates in compliance with relevant laws, regulations, and industry standards. They promote ethical behavior and integrity throughout the organization, setting an example for employees at all levels."]}),(0,r.jsxs)("p",{children:[r.jsx("strong",{children:"Public Relations and Brand Management:"})," The CEO plays a key role in shaping the company's public image and managing its brand reputation. They engage with the media, participate in public events, and communicate the company's values and initiatives to the public."]}),r.jsx("p",{children:"Overall, the CEO is responsible for driving the company's success and ensuring its long-term growth and sustainability through effective leadership, strategic planning, and sound decision-making."})]}),r.jsx(c.Z,{onClick:()=>{e.push("/pages/quote")},variant:"contained",children:"Apply"})]})})]})})}),r.jsx("div",{className:"footer",children:(0,r.jsxs)(d.Z,{container:!0,spacing:2,rowSpacing:2,columnSpacing:4,children:[(0,r.jsxs)(d.Z,{md:3,sm:6,xs:12,columnSpacing:2,spacing:2,children:[r.jsx("div",{className:"footer-logo",children:r.jsx("img",{src:"../images/logo.png"})}),(0,r.jsxs)("div",{className:"terms",children:["Terms & Conditions 2024",r.jsx("br",{}),"msminesandminerals.com"]})]}),r.jsx(d.Z,{md:6,sm:6,xs:12,columnSpacing:2,spacing:2,children:(0,r.jsxs)("ul",{className:"footer-menu",children:[r.jsx(l.Z,{onClick:()=>{e.push("/pages/home")},children:"Home"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/about")},children:"About"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/products")},children:"Our Products"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/machinery")},children:"Machinery"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/productivity")},children:"Productivity"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/gallery")},children:"Gallery"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/contact")},children:"Contact Us"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/quote")},children:"Request a Quote"}),r.jsx(l.Z,{onClick:()=>{e.push("/pages/careers")},children:"Careers"})]})}),r.jsx(d.Z,{md:3,sm:6,xs:12,columnSpacing:2,spacing:2,children:r.jsx("div",{className:"social-icons",children:(0,r.jsxs)("ul",{children:[r.jsx("li",{children:r.jsx("a",{href:"#",children:r.jsx("img",{src:"../images/social-icon-1.png"})})}),r.jsx("li",{children:r.jsx("a",{href:"#",children:r.jsx("img",{src:"../images/social-icon-2.png"})})}),r.jsx("li",{children:r.jsx("a",{href:"#",children:r.jsx("img",{src:"../images/social-icon-3.png"})})})]})})})]})})]})})}(0,o.default)(async()=>{},{loadableGenerated:{modules:["..\\app\\pages\\careers\\page.tsx -> react-owl-carousel"]},ssr:!1}),(0,o.default)(async()=>{},{loadableGenerated:{modules:["..\\app\\pages\\careers\\page.tsx -> react-owl-carousel"]},ssr:!1}),(0,o.default)(async()=>{},{loadableGenerated:{modules:["..\\app\\pages\\careers\\page.tsx -> react-owl-carousel"]},ssr:!1}),(0,o.default)(async()=>{},{loadableGenerated:{modules:["..\\app\\pages\\careers\\page.tsx -> react-owl-carousel"]},ssr:!1}),(0,o.default)(async()=>{},{loadableGenerated:{modules:["..\\app\\pages\\careers\\page.tsx -> react-owl-carousel"]},ssr:!1}),(0,o.default)(async()=>{},{loadableGenerated:{modules:["..\\app\\pages\\careers\\page.tsx -> react-owl-carousel"]},ssr:!1})},2933:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>x,RD:()=>h,oG:()=>u});var r=n(448),a=n(3608);let s=e=>{let{body:t,method:n,url:r,headers:a,bodyparams:s,responseType:i}=e,o=t instanceof FormData?"multipart/form-data":"application/json";var l={data:t,headers:{"Content-Type":o},method:n,url:r};return i&&(l.responseType=i),s&&(l.params=s),l},i=async e=>{let t=s(e);return new Promise((e,n)=>{(0,a.Z)(t).then(t=>{e(t)}).catch(async e=>{n(l(e))})})},o={status:500,data:{error:"Server error"}},l=async e=>{var t="Server Error";try{var n=JSON.parse(await e.response.data.text()).message;n&&n.length>0&&(t=n)}catch(e){}let r=e.response||o,a=r.data&&(r.data.errors||r.data.error||r.data.message);return{code:r.status,message:a||t}},d={get:(e,t,n,r)=>i({method:"get",url:e,body:t,headers:n,bodyparams:r}),getfile:(e,t,n,r,a)=>i({method:"get",url:e,body:t,headers:n,bodyparams:r,responseType:a}),post:(e,t,n,r)=>i({method:"post",url:e,body:t,headers:n,bodyparams:r}),postFile:(e,t,n,r,a)=>i({method:"post",url:e,body:t,headers:n,bodyparams:r,responseType:a}),patch:(e,t)=>i({method:"patch",body:t,url:e}),put:(e,t)=>i({method:"put",body:t,url:e}),delete:e=>i({method:"delete",url:e})},c={services:{dashboard:"/api/getdashboardData",updateDashboard:"/api/updatedashboardData",fileupload:"/api/createMedia",clients:"/api/clients",jobs:"/salvoeBridge/api/r1/getstatusData",jobsCount:"/salvoeBridge/api/r1/getjobCounts",settings:"/api/settings",updateSettings:"/api/updatesettings",website:"/api/create",jobDetails:"/salvoeBridge/api/r1/getjobDataDetails?jobid",createJob:"/salvoeBridge/api/r1/requeststatus",manageJob:"/api/managejob",fileData:"/api/fileData",files:"/api/files",jobsData:"/salvoeBridge/api/r1/getstatusData",outputData:"/salvoeBridge/api/r1/getOutputData",submit:"/salvoeBridge/api/r1/submit"}},p=(0,r.hg)("jobs/getDashBoardData",async(e,t)=>{let n=encodeURI(c.services.dashboard);return d.post(n,{},null,null)}),h=(0,r.hg)("jobs/updateDashBoardData",async(e,t)=>{let n=encodeURI(c.services.updateDashboard);return d.post(n,e,null,null)}),u=(0,r.hg)("cmrecon/uploadMatterFiles",async(e,t)=>{let n=encodeURI(c.services.fileupload);return d.post(n,e,null,null)}),m=(0,r.oM)({name:"jobs",initialState:{dashBoardData:null,dashBoadLoading:!1,dashBoadUpdateLoading:!1},reducers:{refreshEmptyTabData:(e,t)=>{e.dashBoardData={}}},extraReducers:e=>{e.addCase(p.pending,e=>{e.dashBoadLoading=!0}).addCase(p.fulfilled,(e,t)=>{e.dashBoadLoading=!1,e.dashBoardData=t.payload.data||null}).addCase(p.rejected,(e,t)=>{throw e.dashBoadLoading=!1,Error(t.error.message)})}}),{refreshEmptyTabData:g}=m.actions,x=m.reducer},8173:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(5344),a=n(6013),s=n(448),i=n(2933);let o=(0,s.xC)({reducer:{jobsReducer:i.ZP},middleware:e=>e({serializableCheck:!1})}),l=function({children:e}){return r.jsx(a.zt,{store:o,children:e})}},1415:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>s});var r=n(815),a=n.n(r);let s=(0,n(4400).Z)({typography:{fontFamily:a().style.fontFamily}})},3483:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>y,metadata:()=>f});var r=n(5036),a=n(3640),s=n.n(a);n(5023);var i=n(4346),o=n(6016),l=n(6843);let d=(0,l.createProxy)(String.raw`D:\8000\testyyyy\minesgit\mines\src\theme.ts`),{__esModule:c,$$typeof:p}=d,h=d.default,u=(0,l.createProxy)(String.raw`D:\8000\testyyyy\minesgit\mines\src\app\store\StoreProvider.tsx`),{__esModule:m,$$typeof:g}=u,x=u.default,f={title:"Create Next App",description:"Generated by create next app"};function y({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:s().className,children:r.jsx(x,{children:r.jsx(i.ZP,{children:r.jsx(o.ThemeProvider,{theme:h,children:e})})})})})}},4458:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$typeof:()=>s,__esModule:()=>a,default:()=>i});let r=(0,n(6843).createProxy)(String.raw`D:\8000\testyyyy\minesgit\mines\src\app\pages\careers\page.tsx`),{__esModule:a,$$typeof:s}=r,i=r.default},3881:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7231:()=>{},5023:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[638,412,337,726,11],()=>n(8801));module.exports=r})();