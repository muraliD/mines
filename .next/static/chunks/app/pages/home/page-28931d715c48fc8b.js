(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{5027:function(e,t,a){Promise.resolve().then(a.bind(a,2416))},6895:function(e,t,a){"use strict";function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a,s,i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n=[],r=!0,l=!1;try{for(i=i.call(e);!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){l=!0,s=e}finally{try{r||null==i.return||i.return()}finally{if(l)throw s}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,s=Array(t);a<t;a++)s[a]=e[a];return s}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach(function(t){var s;s=a[t],t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o,c,d,u,h,m,p,g,A=a(2265),x=A&&"object"===l(A)&&"default"in A?A:{default:A},f=(c={},d=[],(u=function(){"function"==typeof Image&&(o=[,,,].fill(0).map(function(){return new Image}))})(),{load:function(e){if(!o){u();return}if(e&&!c[e]){if(0===o.length)d.push(e);else{var t=o.shift();t.src=e,t.onload=function(){c[e]=!0,d.length>0?t.src=d.shift():o.push(t)}}}}});(h=p||(p={}))[h.NORMAL=1]="NORMAL",h[h.BOLD=2]="BOLD",(m=g||(g={})).LEFT="left",m.RIGHT="right";var v=function(e){return x.default.createElement(x.default.Fragment,null,e.visible&&x.default.createElement("button",{type:"button",style:E.getNavStyle(e.direction,e.size,e.margin),onClick:e.onClickNav(e.direction)},x.default.createElement("img",{src:e.type===p.NORMAL?"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='8utpkffr2a' width='171.8%25' height='232.4%25' x='-35.9%25' y='-66.2%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'/%3e %3c/filter%3e %3cpath id='6inzdknobb' d='M20 6.999L20.707 7.706 12.354 16.06 4 7.706 4.707 6.999 12.354 14.646z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-67 -27) translate(67 27) rotate(90 12.354 11.53)'%3e %3cuse fill='black' filter='url(%238utpkffr2a)' xlink:href='%236inzdknobb'/%3e %3cuse fill='white' xlink:href='%236inzdknobb'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e":"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e %3cdefs%3e %3cfilter id='0ls8o9a99a' width='168.9%25' height='218.6%25' x='-34.5%25' y='-59.3%25' filterUnits='objectBoundingBox'%3e %3cfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3e %3cfeGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='2'/%3e %3cfeColorMatrix in='shadowBlurOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0'/%3e %3c/filter%3e %3cpath id='rs87bry78b' d='M19 7L20.413 8.414 11.707 17.12 2.999 8.414 4.413 7 11.707 14.291z'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg%3e %3cg%3e %3cg transform='translate(-24 -27) translate(24 27) rotate(90 11.707 12.06)'%3e %3cuse fill='black' filter='url(%230ls8o9a99a)' xlink:href='%23rs87bry78b'/%3e %3cuse fill='white' xlink:href='%23rs87bry78b'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e",style:r({width:"100%"},e.direction===g.RIGHT&&{transform:"rotate(180deg)"}),alt:e.direction===g.LEFT?"slide to left":"slide to right"})))},j={display:"block",margin:"0",padding:"0",border:"0"},b={position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"cover"},N={position:"absolute",top:"50%",cursor:"pointer",outline:"none",background:"none"},y={position:"absolute",left:"50%",bottom:"15px"},w={display:"inline-block",cursor:"pointer",outline:"none",background:"none",boxShadow:"1px 1px 1px 0px #1a1a1a",borderRadius:"50%",border:"1px solid #FFFFFF",width:"".concat(15,"px"),height:"".concat(15,"px"),marginLeft:"".concat(3,"px"),marginRight:"".concat(3,"px")},E={ImageSlider:r(r({},j),{position:"absolute",left:0,top:0,width:"100%",height:"100%"}),ImageSlideCurrent:r(r({},b),{},{overflow:"hidden"}),ImageSlideNext:r(r({},b),{},{overflow:"hidden"}),NavLeft:r(r(r({},j),N),{},{left:"30px",marginTop:"-25px"}),NavRight:r(r(r({},j),N),{},{right:"30px",marginTop:"-25px"}),BulletNormal:r(r({},j),w),BulletActive:r(r(r({},j),w),{},{background:"#FFF"}),getRootContainer:function(e,t,a){return r(r({},j),{},{overflow:"hidden",width:e,height:t,backgroundColor:a})},getSubContainer:function(e,t){return r(r({},j),{},{position:"absolute",overflow:"hidden",width:e,height:t})},getBulletContainer:function(e){return r(r(r({},j),y),{},{marginLeft:"-".concat(21*e/2,"px")})},getImageSlide:function(e,t,a,s){return r(r({},b),{},{overflow:"hidden",transition:"".concat(t,"s"),backgroundImage:"url(".concat(e,")"),transform:s?"translate3d(".concat(100*a,"%, 0px, 0px)"):"translate(".concat(100*a,"%, 0px)")})},getNavStyle:function(e,t,a){return r(r(r(r({},j),N),e===g.LEFT?{left:"".concat(a,"px")}:{right:"".concat(a,"px")}),{},{marginTop:"-".concat(Math.floor(t/2),"px"),width:"".concat(t,"px")})}},O=function(e){var t=e.visible,a=e.length,s=e.currentIdx,i=e.onClickBullets;return x.default.createElement(x.default.Fragment,null,t&&a>0&&x.default.createElement("div",{style:E.getBulletContainer(a)},Array.from(Array(a).keys()).map(function(e){return x.default.createElement("button",{key:"bullet-".concat(e),type:"button","data-id":"bullet-".concat(e),style:e===s?E.BulletActive:E.BulletNormal,onClick:function(){return i(e)}})})))},C=function(e){var t=e.startIndex,a=e.imageCount,i=e.autoPlay,n=e.autoPlayDelay,r=s(A.useState(t<a?t:0),2),l=r[0],o=r[1],c=A.useRef(!0),d=A.useRef(l),u=A.useRef(null),h=function(e){i&&!u.current&&(u.current=setTimeout(function(){g(e)},1e3*n))},m=function(){null!==u.current&&(clearTimeout(u.current),u.current=null)},p=function(e){return e>=a?0:e<0?a-1:e},g=function(e){c.current=e>l,d.current=l,o(p(e))};return A.useEffect(function(){return m(),h(l+1),m},[l]),{slideIdx:l,updateSlideIdx:g,getNextLoopingIdx:p,isRightDirection:c.current,previousSlideIdx:d.current}},S=function(e,t){var a;return(null===(a=e[t])||void 0===a?void 0:a.url)||e[t]};e.exports=function(e){var t=e.width,a=e.height,i=e.images,n=e.showNavs,l=e.showBullets,o=e.loop,c=void 0===o||o,d=e.autoPlay,u=e.autoPlayDelay,h=e.startIndex,m=void 0===h?0:h,j=e.style,b=e.slideDuration,N=void 0===b?.5:b,y=e.bgColor,w=void 0===y?"#000":y,I=e.useGPURender,k=void 0===I||I,B=e.navSize,D=void 0===B?50:B,T=e.navMargin,L=void 0===T?30:T,P=e.navStyle,R=void 0===P?p.NORMAL:P,Q=e.onClick,z=void 0===Q?void 0:Q,M=e.onClickNav,Z=void 0===M?void 0:M,G=e.onClickBullets,U=void 0===G?void 0:G,F=e.onStartSlide,H=void 0===F?void 0:F,q=e.onCompleteSlide,J=void 0===q?void 0:q,W=A.useMemo(function(){return E.getRootContainer(t,a,w)},[t,a,w]),_=C({imageCount:i.length,startIndex:m,autoPlay:void 0!==d&&d,autoPlayDelay:(void 0===u?2:u)+N}),K=_.slideIdx,V=_.updateSlideIdx,X=_.isRightDirection,Y=_.getNextLoopingIdx,$=_.previousSlideIdx,ee=s(A.useState(E.getImageSlide(S(i,m),N,0,k)),2),et=ee[0],ea=ee[1],es=s(A.useState(E.getImageSlide(S(i,m+1),N,1,k)),2),ei=es[0],en=es[1],er=A.useRef(!1),el=A.useCallback(function(e){null==z||z(K,e)},[K]),eo=A.useCallback(function(e){return function(){if(!er.current){var t=e===g.RIGHT;null==Z||Z(t),V(t?K+1:K-1)}}},[Z,K,V]),ec=A.useCallback(function(e){e===K||er.current||(null==U||U(e),V(e))},[U,K,V]);A.useEffect(function(){if(K!==$){var e=S(i,Y(X?K-1:K+1)),t=S(i,K),a=X?-1:1;null==H||H(K+1,i.length),en(E.getImageSlide(t,0,X?1:-1,k)),setTimeout(function(){er.current=!0,ea(E.getImageSlide(e,N,a,k)),en(E.getImageSlide(t,N,0,k))},50)}},[H,K,X]);var ed=A.useCallback(function(){er.current=!1,f.load(S(i,K+2)),ea(E.getImageSlide(S(i,K),0,0,k)),null==J||J(K+1,i.length)},[J,K]);return x.default.createElement("div",{style:r(r({},W),void 0===j?void 0:j)},x.default.createElement("div",{style:E.getSubContainer(t,a)},x.default.createElement("div",{style:E.ImageSlider,onClick:el,className:"rsis-container"},x.default.createElement("div",{style:et,onTransitionEnd:ed,className:"rsis-image"}),i.length>1&&x.default.createElement("div",{style:ei})),(c||K>0)&&x.default.createElement(v,{direction:g.LEFT,visible:n&&i.length>0,type:R,size:D,margin:L,onClickNav:eo}),(c||K<i.length-1)&&x.default.createElement(v,{direction:g.RIGHT,visible:n&&i.length>0,type:R,size:D,margin:L,onClickNav:eo}),x.default.createElement(O,{visible:l,length:i.length,currentIdx:K,onClickBullets:ec})))}},2416:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var s=a(7437),i=a(2265),n=a(703),r=a(828),l=a(3977),o={src:"/_next/static/media/dummy.2e657ff7.jpg",height:270,width:400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGmB//EABQQAQAAAAAAAAAAAAAAAAAAAEH/2gAIAQEAAQUCf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABgQAAIDAAAAAAAAAAAAAAAAABEhAAFR/9oACAEBAAE/IRbFZP/aAAwDAQACAAMAAAAQA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Qf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABgQAAIDAAAAAAAAAAAAAAAAAAAhEUGh/9oACAEBAAE/ELmkJp//2Q==",blurWidth:8,blurHeight:5},c={src:"/_next/static/media/h-partner.7bc86e8f.png",height:140,width:180,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAGFBMVEUlJAtMaXEhIQsiIw0qIw1LOwsuLgAfHw4OsMh8AAAACHRSTlMWAAcxJHQLWHabM2sAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAoSURBVHicJcSxAQAgDMMwO2nh/48Z0CDUJEoC/G0FznT3EqSdIhqIPghlAFPz5bVhAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6},d=a(7907);a(4575),a(4123);var u=a(4232),h=a(697),m=a(2508),p=a(6115);a(5686);var g=a(6895),A=a.n(g);let x=[{url:"../images/slider-1.jpg"},{url:"../images/slider-2.jpg"},{url:"../images/slider-3.jpg"}];(0,u.default)(()=>Promise.all([a.e(38),a.e(973)]).then(a.t.bind(a,5973,23)),{loadableGenerated:{webpack:()=>[5973]},ssr:!1});let f=(0,u.default)(()=>Promise.all([a.e(38),a.e(973)]).then(a.t.bind(a,5973,23)),{loadableGenerated:{webpack:()=>[5973]},ssr:!1}),v={loop:!0,autoPlay:!0,margin:14,padding:5,nav:!0,items:4,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!0},1200:{items:4,nav:!0,loop:!1}}},j=(0,u.default)(()=>Promise.all([a.e(38),a.e(973)]).then(a.t.bind(a,5973,23)),{loadableGenerated:{webpack:()=>[5973]},ssr:!1}),b={loop:!0,autoPlay:!0,margin:14,padding:5,nav:!0,items:7,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:2,nav:!0},800:{items:4,nav:!0},1200:{items:7,nav:!0,loop:!1}}};function N(){let e=(0,r.I0)(),t=(0,d.useRouter)(),[a,u]=(0,i.useState)(null),[g,N]=i.useState(!1),{dashBoardData:y,dashBoadLoading:w}=(0,r.v9)(e=>e.jobsReducer),[E,O]=i.useState(!1);return(0,i.useEffect)(()=>{u(window),e((0,l.nM)({}))},["object"]),(0,s.jsx)("div",{className:"main-container",children:a&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"home-banner",children:[(0,s.jsxs)("div",{className:"header",children:[(0,s.jsx)("div",{className:"menu-icon"}),(0,s.jsx)("a",{href:"#",className:"logo"}),(0,s.jsx)("div",{className:"menu",children:(0,s.jsxs)("menu",{children:[(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/home")},className:"active",children:"Home1"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/about")},children:"About"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/products")},children:"Our Products"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/machinery")},children:"Machinery"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/productivity")},children:"Productivity"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/gallery")},children:"Gallery"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/contact")},children:"Contact Us"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/careers")},children:"Careers"})]})})]}),(0,s.jsxs)("div",{className:"static-banner-pic",children:[(0,s.jsx)("div",{className:"caption",children:"Welcome to"}),(0,s.jsxs)("h2",{children:["Manasa Sharon ",(0,s.jsx)("br",{})," ",(0,s.jsx)("span",{children:"Mines & Minerals"})]}),"Unearthing the treasures of the Earth, cultivating a sustainable future.",(0,s.jsx)("div",{children:(0,s.jsx)("a",{onClick:()=>{t.push("/pages/quote")},className:"enquire-button",children:" Request a Quote"})})]}),(0,s.jsx)(A(),{width:"100%",height:"100%",images:x,showBullets:!0,showNavs:!0,autoPlay:!0,autoPlayDelay:4,slideDuration:2})]}),(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"home-about",children:[(0,s.jsxs)("h1",{children:["Our ",(0,s.jsxs)("span",{children:["Exploration",(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:"Who we are"})]})]}),(0,s.jsx)("p",{children:"Driven by a passion for discovery and a commitment to responsible resource development, our exploration activities at Manasa Sharon Mines and Minerals Pvt Ltd are at the forefront of technological innovation. Our experienced teams of geologists, engineers, and environmental experts employ cutting-edge techniques to identify and assess potential mining sites. We prioritize the thorough evaluation of geological data to ensure the viability and sustainability of our operations."}),(0,s.jsx)("p",{children:"Community engagement is a cornerstone of our exploration efforts. We understand the importance of involving local stakeholders from the outset, seeking to build collaborative relationships based on open communication and shared benefits. Our exploration endeavors not only aim to uncover valuable mineral resources but also to contribute to the economic and social development of the communities where we operate."}),(0,s.jsx)("p",{children:"At Manasa Sharon Mines and Minerals Pvt Ltd, our explorations are more than a search for minerals; they represent our commitment to shaping a future where responsible mining practices and environmental stewardship coexist seamlessly, ensuring a sustainable legacy for generations to come."})]})}),(0,s.jsxs)(m.ZP,{container:!0,spacing:2,rowSpacing:2,columnSpacing:4,className:"home-products-block",children:[(0,s.jsx)("div",{className:"container cener-text",children:(0,s.jsxs)("h1",{children:["Our",(0,s.jsxs)("span",{children:["Products",(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:"Mines and Minerals"})]})]})}),(0,s.jsxs)(m.ZP,{md:12,sm:12,xs:12,columnSpacing:2,children:[(0,s.jsx)(m.ZP,{md:6,sm:6,xs:6,columnSpacing:2,spacing:2,className:"home-products-img",children:(0,s.jsx)("div",{className:"home-prod-img"})}),(0,s.jsx)(m.ZP,{md:6,className:"home-products",children:(0,s.jsxs)(m.ZP,{container:!0,spacing:2,rowSpacing:2,columnSpacing:2,children:[(0,s.jsx)(m.ZP,{md:6,sm:6,xs:12,columnSpacing:2,children:(0,s.jsxs)("div",{className:"home-products-item h-prod-borders",children:[(0,s.jsx)("div",{className:"h-product-img",children:(0,s.jsx)("img",{src:"../images/h-prod-1.jpg"})}),(0,s.jsx)("div",{className:"h-product-title",children:"WHITE QUARTZ"}),(0,s.jsx)("div",{className:"h-product-content",children:"In the realm of geology, White Quartz stands as a timeless testament to the beauty and diversity of minerals our planet offers. Revered for its pristine appearance and unique properties..."})]})}),(0,s.jsx)(m.ZP,{md:6,sm:6,xs:12,columnSpacing:2,children:(0,s.jsxs)("div",{className:"home-products-item h-prod-borders",children:[(0,s.jsx)("div",{className:"h-product-img",children:(0,s.jsx)("img",{src:"../images/h-prod-9.jpg"})}),(0,s.jsx)("div",{className:"h-product-title",children:"MICA QUARTZ"}),(0,s.jsx)("div",{className:"h-product-content",children:"Our geological journey unfolds to reveal Mica Quartz, a captivating mineral where the elegance of quartz seamlessly intertwines with the intriguing allure of mica. This enchanting fusion creates a...."})]})}),(0,s.jsx)(m.ZP,{md:6,sm:6,xs:12,columnSpacing:2,children:(0,s.jsxs)("div",{className:"home-products-item h-prod-borders",children:[(0,s.jsx)("div",{className:"h-product-img",children:(0,s.jsx)("img",{src:"../images/h-prod-10.jpg"})}),(0,s.jsx)("div",{className:"h-product-title",children:"PINK QUARTZ"}),(0,s.jsx)("div",{className:"h-product-content",children:"Our exploration of the captivating world of quartz delves into the depths of Pink Quartz, a mineral that graces the Earth with its delicate and rosy hues. As we unveil its unique characteristics and....."})]})}),(0,s.jsx)(m.ZP,{md:6,sm:12,xs:12,children:(0,s.jsxs)("div",{className:"home-products-item h-prod-borders",children:[(0,s.jsx)("div",{className:"h-product-img",children:(0,s.jsx)("img",{src:"../images/h-prod-3.jpg"})}),(0,s.jsx)("div",{className:"h-product-title",children:"Rose QUARTZ"}),(0,s.jsx)("div",{className:"h-product-content",children:"Quartz rose, also known as rose quartz, is a popular variety of quartz crystal that is prized for its delicate pink to rose-red coloration. It's commonly used in various spiritual, healing, and decorative \x03practices....."})]})}),(0,s.jsx)(m.ZP,{md:6,sm:12,xs:12,children:(0,s.jsxs)("div",{className:"home-products-item h-prod-borders",children:[(0,s.jsx)("div",{className:"h-product-img",children:(0,s.jsx)("img",{src:"../images/h-prod-11.jpg"})}),(0,s.jsx)("div",{className:"h-product-title",children:"Glassy QUARTZ"}),(0,s.jsx)("div",{className:"h-product-content",children:"In our continued exploration of the captivating quartz family, we now set our sights on the dazzling beauty of Glassy Quartz. Characterized by its exceptional transparency and crystalline clarity, this...."})]})}),(0,s.jsx)(m.ZP,{md:6,sm:12,xs:12,children:(0,s.jsxs)("div",{className:"home-products-item h-prod-borders",children:[(0,s.jsx)("div",{className:"h-product-img",children:(0,s.jsx)("img",{src:"../images/h-prod-12.jpg"})}),(0,s.jsx)("div",{className:"h-product-title",children:"Semi Glassy QUARTZ"}),(0,s.jsx)("div",{className:"h-product-content",children:"Our captivating exploration of the quartz family reaches another intriguing chapter with the mesmerizing allure of Semi-Glassy Quartz. This exquisite mineral, characterized by a harmonious blend of crystalline transparency..."})]})})]})})]})]}),(0,s.jsxs)("div",{className:"bot-mar",children:[(0,s.jsx)(m.ZP,{md:6,className:"text-center",children:(0,s.jsxs)("h1",{children:["Our ",(0,s.jsxs)("span",{children:["Projects",(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:"Locations"})]})]})}),(0,s.jsx)(m.ZP,{md:6,className:"carousel-2",children:(0,s.jsxs)(f,{className:"react-owl-carousel owl-theme",...v,children:[(0,s.jsxs)("div",{className:"item ",children:[(0,s.jsx)("div",{className:"h-location-img",children:(0,s.jsx)(n.default,{src:o,alt:"Location-1"})}),(0,s.jsxs)("div",{className:"h-location-img-content",children:[(0,s.jsxs)("div",{className:"h-location-title",children:["LOCATION 1 TITLE GOES HERE ",(0,s.jsx)("span",{children:"Nam at mattis libero, et laoreet leo. "})]}),(0,s.jsx)("div",{className:"h-location-arr"})]})]}),(0,s.jsxs)("div",{className:"item",children:[(0,s.jsx)("div",{className:"h-location-img",children:(0,s.jsx)(n.default,{src:o,alt:"Location-2"})}),(0,s.jsxs)("div",{className:"h-location-img-content",children:[(0,s.jsxs)("div",{className:"h-location-title",children:["LOCATION 2 TITLE GOES HERE ",(0,s.jsx)("span",{children:"Nam at mattis libero, et laoreet leo. "})]}),(0,s.jsx)("div",{className:"h-location-arr"})]})]}),(0,s.jsxs)("div",{className:"item",children:[(0,s.jsx)("div",{className:"h-location-img",children:(0,s.jsx)(n.default,{src:o,alt:"Location-3"})}),(0,s.jsxs)("div",{className:"h-location-img-content",children:[(0,s.jsxs)("div",{className:"h-location-title",children:["LOCATION 3 TITLE GOES HERE ",(0,s.jsx)("span",{children:"Nam at mattis libero, et laoreet leo. "})]}),(0,s.jsx)("div",{className:"h-location-arr"})]})]}),(0,s.jsxs)("div",{className:"item",children:[(0,s.jsx)("div",{className:"h-location-img",children:(0,s.jsx)(n.default,{src:o,alt:"Location-4"})}),(0,s.jsxs)("div",{className:"h-location-img-content",children:[(0,s.jsxs)("div",{className:"h-location-title",children:["LOCATION 4 TITLE GOES HERE ",(0,s.jsx)("span",{children:"Nam at mattis libero, et laoreet leo. "})]}),(0,s.jsx)("div",{className:"h-location-arr"})]})]}),(0,s.jsxs)("div",{className:"item ",children:[(0,s.jsx)("div",{className:"h-location-img",children:(0,s.jsx)(n.default,{src:o,alt:"Location-1"})}),(0,s.jsxs)("div",{className:"h-location-img-content",children:[(0,s.jsxs)("div",{className:"h-location-title",children:["LOCATION 1 TITLE GOES HERE ",(0,s.jsx)("span",{children:"Nam at mattis libero, et laoreet leo. "})]}),(0,s.jsx)("div",{className:"h-location-arr"})]})]}),(0,s.jsxs)("div",{className:"item",children:[(0,s.jsx)("div",{className:"h-location-img",children:(0,s.jsx)(n.default,{src:o,alt:"Location-2"})}),(0,s.jsxs)("div",{className:"h-location-img-content",children:[(0,s.jsxs)("div",{className:"h-location-title",children:["LOCATION 2 TITLE GOES HERE ",(0,s.jsx)("span",{children:"Nam at mattis libero, et laoreet leo. "})]}),(0,s.jsx)("div",{className:"h-location-arr"})]})]}),(0,s.jsxs)("div",{className:"item",children:[(0,s.jsx)("div",{className:"h-location-img",children:(0,s.jsx)(n.default,{src:o,alt:"Location-3"})}),(0,s.jsxs)("div",{className:"h-location-img-content",children:[(0,s.jsxs)("div",{className:"h-location-title",children:["LOCATION 3 TITLE GOES HERE ",(0,s.jsx)("span",{children:"Nam at mattis libero, et laoreet leo. "})]}),(0,s.jsx)("div",{className:"h-location-arr"})]})]}),(0,s.jsxs)("div",{className:"item",children:[(0,s.jsx)("div",{className:"h-location-img",children:(0,s.jsx)(n.default,{src:o,alt:"Location-4"})}),(0,s.jsxs)("div",{className:"h-location-img-content",children:[(0,s.jsxs)("div",{className:"h-location-title",children:["LOCATION 4 TITLE GOES HERE ",(0,s.jsx)("span",{children:"Nam at mattis libero, et laoreet leo. "})]}),(0,s.jsx)("div",{className:"h-location-arr"})]})]})]})})]}),(0,s.jsxs)("div",{className:"row margin-none",children:[(0,s.jsx)(m.ZP,{md:12,className:"text-center",children:(0,s.jsxs)("h1",{children:["Our ",(0,s.jsxs)("span",{children:["Partners",(0,s.jsx)("br",{}),(0,s.jsx)("span",{children:"Making Business With us"})]})]})}),(0,s.jsx)(m.ZP,{md:12,className:"carousel-3",children:(0,s.jsxs)(j,{className:"react-owl-carousel owl-theme",...b,children:[(0,s.jsx)("div",{className:"item",children:(0,s.jsx)("div",{className:"item h-partner-img",children:(0,s.jsx)(n.default,{src:c,alt:"h-partner-1"})})}),(0,s.jsx)("div",{className:"item",children:(0,s.jsx)("div",{className:"item h-partner-img",children:(0,s.jsx)(n.default,{src:c,alt:"h-partner-2"})})}),(0,s.jsx)("div",{className:"item",children:(0,s.jsx)("div",{className:"item h-partner-img",children:(0,s.jsx)(n.default,{src:c,alt:"h-partner-3"})})}),(0,s.jsx)("div",{className:"item",children:(0,s.jsx)("div",{className:"item h-partner-img",children:(0,s.jsx)(n.default,{src:c,alt:"h-partner-4"})})}),(0,s.jsx)("div",{className:"item",children:(0,s.jsx)("div",{className:"item h-partner-img",children:(0,s.jsx)(n.default,{src:c,alt:"h-partner-5"})})}),(0,s.jsx)("div",{className:"item",children:(0,s.jsx)("div",{className:"item h-partner-img",children:(0,s.jsx)(n.default,{src:c,alt:"h-partner-6"})})}),(0,s.jsx)("div",{className:"item",children:(0,s.jsx)("div",{className:"item h-partner-img",children:(0,s.jsx)(n.default,{src:c,alt:"h-partner-7"})})})]})})]}),(0,s.jsx)("div",{className:"footer",children:(0,s.jsxs)(p.Z,{container:!0,spacing:2,rowSpacing:2,columnSpacing:4,children:[(0,s.jsxs)(p.Z,{md:3,sm:6,xs:12,columnSpacing:2,spacing:2,children:[(0,s.jsx)("div",{className:"footer-logo",children:(0,s.jsx)("img",{src:"../images/logo.png"})}),(0,s.jsxs)("div",{className:"terms",children:["Terms & Conditions 2024",(0,s.jsx)("br",{}),"msminesandminerals.com"]})]}),(0,s.jsx)(p.Z,{md:6,sm:6,xs:12,columnSpacing:2,spacing:2,children:(0,s.jsxs)("ul",{className:"footer-menu",children:[(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/home")},children:"Home"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/about")},children:"About"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/products")},children:"Our Products"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/machinery")},children:"Machinery"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/productivity")},children:"Productivity"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/gallery")},children:"Gallery"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/contact")},children:"Contact Us"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/quote")},children:"Request a Quote"}),(0,s.jsx)(h.Z,{onClick:()=>{t.push("/pages/careers")},children:"Careers"})]})}),(0,s.jsx)(p.Z,{md:3,sm:6,xs:12,columnSpacing:2,spacing:2,children:(0,s.jsx)("div",{className:"social-icons",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{src:"../images/social-icon-1.png"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{src:"../images/social-icon-2.png"})})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:(0,s.jsx)("img",{src:"../images/social-icon-3.png"})})})]})})})]})})]})})}},3977:function(e,t,a){"use strict";a.d(t,{ZP:function(){return p},nM:function(){return u}});var s=a(5972),i=a(7908);let n=e=>{let{body:t,method:a,url:s,headers:i,bodyparams:n,responseType:r}=e,l=t instanceof FormData?"multipart/form-data":"application/json";var o={data:t,headers:{"Content-Type":l},method:a,url:s};return r&&(o.responseType=r),n&&(o.params=n),o},r=async e=>{let t=n(e);return new Promise((e,a)=>{(0,i.Z)(t).then(t=>{e(t)}).catch(async e=>{a(o(e))})})},l={status:500,data:{error:"Server error"}},o=async e=>{var t="Server Error";try{var a=JSON.parse(await e.response.data.text()).message;a&&a.length>0&&(t=a)}catch(e){}let s=e.response||l,i=s.data&&(s.data.errors||s.data.error||s.data.message);return{code:s.status,message:i||t}},c={get:(e,t,a,s)=>r({method:"get",url:e,body:t,headers:a,bodyparams:s}),getfile:(e,t,a,s,i)=>r({method:"get",url:e,body:t,headers:a,bodyparams:s,responseType:i}),post:(e,t,a,s)=>r({method:"post",url:e,body:t,headers:a,bodyparams:s}),postFile:(e,t,a,s,i)=>r({method:"post",url:e,body:t,headers:a,bodyparams:s,responseType:i}),patch:(e,t)=>r({method:"patch",body:t,url:e}),put:(e,t)=>r({method:"put",body:t,url:e}),delete:e=>r({method:"delete",url:e})},d={services:{dashboard:"/api/getdashboardData",updateDashboard:"/api/getdashboardData",fileupload:"/api/createMedia",clients:"/api/clients",jobs:"/salvoeBridge/api/r1/getstatusData",jobsCount:"/salvoeBridge/api/r1/getjobCounts",settings:"/api/settings",updateSettings:"/api/updatesettings",website:"/api/create",jobDetails:"/salvoeBridge/api/r1/getjobDataDetails?jobid",createJob:"/salvoeBridge/api/r1/requeststatus",manageJob:"/api/managejob",fileData:"/api/fileData",files:"/api/files",jobsData:"/salvoeBridge/api/r1/getstatusData",outputData:"/salvoeBridge/api/r1/getOutputData",submit:"/salvoeBridge/api/r1/submit"}},u=(0,s.hg)("jobs/getDashBoardData",async(e,t)=>{let a=encodeURI(d.services.dashboard);return c.post(a,{},null,null)});(0,s.hg)("jobs/updateDashBoardData",async(e,t)=>{let a=encodeURI(d.services.updateDashboard);return c.post(a,e,null,null)}),(0,s.hg)("cmrecon/uploadMatterFiles",async(e,t)=>{let a=encodeURI(d.services.fileupload);return c.post(a,e,null,null)});let h=(0,s.oM)({name:"jobs",initialState:{dashBoardData:null,dashBoadLoading:!1,dashBoadUpdateLoading:!1},reducers:{refreshEmptyTabData:(e,t)=>{e.dashBoardData={}}},extraReducers:e=>{e.addCase(u.pending,e=>{e.dashBoadLoading=!0}).addCase(u.fulfilled,(e,t)=>{e.dashBoadLoading=!1,e.dashBoardData=t.payload.data||null}).addCase(u.rejected,(e,t)=>{throw e.dashBoadLoading=!1,Error(t.error.message)})}}),{refreshEmptyTabData:m}=h.actions;var p=h.reducer}},function(e){e.O(0,[741,544,235,560,617,971,655,744],function(){return e(e.s=5027)}),_N_E=e.O()}]);