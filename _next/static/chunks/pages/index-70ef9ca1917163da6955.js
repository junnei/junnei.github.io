(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7316:function(e){e.exports=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}},1964:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(5893);function r(e){var t=e.children;return(0,i.jsx)("div",{className:"container mx-auto px-5",children:t})}},6074:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(5893),r=n(3855),o=n(4790);function a(e){var t=e.dateString,n=(0,r.Z)(t);return(0,i.jsx)("time",{dateTime:t,children:(0,o.Z)(n,"LLLL d, yyyy")})}},5483:function(e,t,n){"use strict";n.d(t,{Z:function(){return c},y:function(){return s}});var i=n(5893),r=n(1964);function o(){return(0,i.jsx)("footer",{className:"bg-accent-1 border-t border-accent-2",children:(0,i.jsx)(r.Z,{children:(0,i.jsxs)("div",{className:"py-28 flex flex-col lg:flex-row items-center",children:[(0,i.jsx)("h3",{className:"text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",children:"Statically Generated with Next.js."}),(0,i.jsxs)("div",{className:"flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",children:[(0,i.jsx)("a",{href:"https://nextjs.org/docs/basic-features/pages",className:"mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",children:"Read Documentation"}),(0,i.jsx)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples/",className:"mx-3 font-bold hover:underline",children:"View on GitHub"})]})]})})})}var a=n(9008);function l(){return(0,i.jsxs)(a.default,{children:[(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,i.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,i.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,i.jsx)("meta",{name:"theme-color",content:"#000"}),(0,i.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,i.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js"}),(0,i.jsx)("meta",{property:"og:image",content:"/images/profile.js"})]})}var s="Junnei Website";function c(e){e.preview;var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{}),(0,i.jsx)("div",{className:"min-h-screen",children:(0,i.jsx)("main",{children:t})}),(0,i.jsx)(o,{})]})}},6255:function(e,t,n){"use strict";var i=n(3038),r=n(319),o=n(5318);t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,o=void 0!==r&&r,u=e.priority,h=void 0!==u&&u,m=e.loading,g=e.className,x=e.quality,p=e.width,v=e.height,y=e.objectFit,k=e.objectPosition,N=e.loader,z=void 0===N?_:N,A=e.placeholder,S=void 0===A?"empty":A,E=e.blurDataURL,L=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader","placeholder","blurDataURL"]),C=n?"responsive":"intrinsic",I=!1;"unsized"in L?(I=Boolean(L.unsized),delete L.unsized):"layout"in L&&(L.layout&&(C=L.layout),delete L.layout);b||(S="empty");0;var M=!h&&("lazy"===m||"undefined"===typeof m);t&&t.startsWith("data:")&&(o=!0,M=!1);var D,R,q,B=(0,f.useIntersection)({rootMargin:"200px",disabled:!M}),O=i(B,2),P=O[0],T=O[1],U=!M||T,F=j(p),Z=j(v),G=j(x),J=F&&Z&&F*Z<5e3,H="blur"===S&&!J,W=(0,l.default)({position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:y,objectPosition:k},H?{backgroundSize:"cover",backgroundImage:'url("'.concat(E,'")')}:void 0);if("undefined"!==typeof F&&"undefined"!==typeof Z&&"fill"!==C){var X=Z/F,K=isNaN(X)?"100%":"".concat(100*X,"%");"responsive"===C?(D={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},R={display:"block",boxSizing:"border-box",paddingTop:K}):"intrinsic"===C?(D={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},R={boxSizing:"border-box",display:"block",maxWidth:"100%"},q='<svg width="'.concat(F,'" height="').concat(Z,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===C&&(D={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:F,height:Z})}else"undefined"===typeof F&&"undefined"===typeof Z&&"fill"===C&&(D={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var V={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};U&&(V=w({src:t,unoptimized:o,layout:C,width:F,quality:G,sizes:n,loader:z}));I&&(D=void 0,R=void 0,W=void 0);return s.default.createElement("div",{style:D},R?s.default.createElement("div",{style:R},q?s.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,d.toBase64)(q))}):null):null,!U&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},L,w({src:t,unoptimized:o,layout:C,width:F,quality:G,sizes:n,loader:z}),{src:t,decoding:"async",sizes:n,style:W,className:g}))),s.default.createElement("img",Object.assign({},L,V,{decoding:"async",className:g,ref:function(e){P(e),function(e,t){"blur"===t&&e&&(e.complete?e.style.backgroundImage="none":e.onload=function(){e.style.backgroundImage="none"})}(e,S)},style:W})),h?s.default.createElement(c.default,null,s.default.createElement("link",{key:"__nimg-"+V.src+V.srcSet+V.sizes,rel:"preload",as:"image",href:V.srcSet?void 0:V.src,imagesrcset:V.srcSet,imagesizes:V.sizes})):null)};var a=o(n(7316)),l=o(n(7154)),s=o(n(7294)),c=o(n(7947)),d=n(7239),u=n(5655),f=n(5749);var h=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["auto=format","fit=max","w="+i],a="";r&&o.push("q="+r);o.length&&(a="?"+o.join("&"));return"".concat(t).concat(k(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,o=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(k(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(k(n),"?imwidth=").concat(i)}],["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}]]),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"cloudinary",enableBlurryPlaceholder:!1}||u.imageConfigDefault,g=m.deviceSizes,x=m.imageSizes,p=m.loader,v=m.path,b=(m.domains,m.enableBlurryPlaceholder),y=[].concat(r(g),r(x));function w(e){var t=e.src,n=e.unoptimized,i=e.layout,o=e.width,a=e.quality,l=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var c=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var i,o=/(^|\s)(1?\d?\d)vw/g,a=[];i=o.exec(n);i)a.push(parseInt(i[2]));if(a.length){var l=.01*Math.min.apply(Math,a);return{widths:y.filter((function(e){return e>=g[0]*l})),kind:"w"}}return{widths:y,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:g,kind:"w"}:{widths:r(new Set([e,2*e].map((function(e){return y.find((function(t){return t>=e}))||y[y.length-1]})))),kind:"x"}}(o,i,l),d=c.widths,u=c.kind,f=d.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:d.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===u?e:n+1).concat(u)})).join(", "),src:s({src:t,quality:a,width:d[f]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t=h.get(p);if(t)return t((0,l.default)({root:v},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(p))}function k(e){return"/"===e[0]?e.slice(1):e}g.sort((function(e,t){return e-t})),y.sort((function(e,t){return e-t}))},6071:function(e,t,n){"use strict";var i=n(3038),r=n(862);t.default=void 0;var o=r(n(7294)),a=n(1689),l=n(2441),s=n(5749),c={};function d(e,t,n,i){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;c[t+"%"+n+(r?"%"+r:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,l.useRouter)(),r=n&&n.asPath||"/",u=o.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=i(t,2),o=n[0],l=n[1];return{href:o,as:e.as?(0,a.resolveHref)(r,e.as):l||o}}),[r,e.href,e.as]),f=u.href,h=u.as,m=e.children,g=e.replace,x=e.shallow,p=e.scroll,v=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var b=o.Children.only(m),y=b&&"object"===typeof b&&b.ref,w=(0,s.useIntersection)({rootMargin:"200px"}),j=i(w,2),_=j[0],k=j[1],N=o.default.useCallback((function(e){_(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,_]);(0,o.useEffect)((function(){var e=k&&t&&(0,a.isLocalURL)(f),i="undefined"!==typeof v?v:n&&n.locale,r=c[f+"%"+h+(i?"%"+i:"")];e&&!r&&d(n,f,h,{locale:i})}),[h,f,k,v,t,n]);var z={ref:N,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,i,r,o,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==l&&(l=i.indexOf("#")<0),t[r?"replace":"push"](n,i,{shallow:o,locale:s,scroll:l}))}(e,n,f,h,g,x,p,v)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),d(n,f,h,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var A="undefined"!==typeof v?v:n&&n.locale,S=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(h,A,n&&n.locales,n&&n.domainLocales);z.href=S||(0,a.addBasePath)((0,a.addLocale)(h,A,n&&n.defaultLocale))}return o.default.cloneElement(b,z)};t.default=u},5749:function(e,t,n){"use strict";var i=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=(0,r.useRef)(),c=(0,r.useState)(!1),d=i(c,2),u=d[0],f=d[1],h=(0,r.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||u||e&&e.tagName&&(s.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:r,elements:i}),n}(n),r=i.id,o=i.observer,a=i.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),l.delete(r))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return(0,r.useEffect)((function(){if(!a&&!u){var e=(0,o.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[u]),[h,u]};var r=n(7294),o=n(8391),a="undefined"!==typeof IntersectionObserver;var l=new Map},7239:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},2409:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return w},default:function(){return j}});var i=n(5893),r=n(9008),o=n(1964),a=n(5483),l=n(367),s=n.n(l),c=n(1664),d=n(6074),u=n(5675);function f(e){var t=e.title,n=e.src,r=e.width;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:"flex-col md:flex-row flex items-center md:justify-between mb-12",children:[(0,i.jsxs)("h1",{className:"intro-hover text-6xl lg:text-8xl font-bold tracking-tighter leading-tight md:pr-2",children:[t,"."]}),(0,i.jsx)("div",{className:"flex text-center md:text-right text-lg mr-10vw",children:(0,i.jsx)("div",{className:"sm:mx-0 hidden md:flex",children:(0,i.jsx)(u.default,{title:t,src:n,height:80,width:r,objectFit:"cover"})})})]})})}function h(e){var t=e.children;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"pt-10vh"}),(0,i.jsxs)("div",{className:"px-5vw mb-10vh py-10vh mx-10vw md:mx-0 h-30vh md:w-50vh bg-gradient-to-br from-yellow-400 via-green-500 to-indigo-500",children:[(0,i.jsx)("h1",{className:"intro-hero-hover z-10 absolute text-gray-100 md:bg-gradient-to-r md:from-red-500 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight transform lg:-translate-y-4 md:pr-4",children:"SEONG JUN"}),(0,i.jsx)("h1",{className:"intro-sub-hover absolute pt-10vh text-gray-50 text-6xl lg:text-6xl font-bold",children:"JANG"})]}),(0,i.jsx)("div",{className:"h-50vh",children:t})]})}function m(){return(0,i.jsx)("div",{className:"ml-45vw mr-15vw w-40vw h-40vh absolute transform translate-y-45vh -translate-x-24 bg-gradient-to-br from-white to-gray-400"})}function g(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{}),(0,i.jsxs)(h,{children:[(0,i.jsx)("a",{href:"/blog",children:(0,i.jsx)(f,{title:"Blog",src:"/images/profile.jpg",width:200})}),(0,i.jsx)(f,{title:"Music",src:"/images/profile.jpg",width:300}),(0,i.jsx)("a",{href:"/JavaScript30",children:(0,i.jsx)(f,{title:"Project",src:"/images/profile.jpg",width:400})})]})]})}var x=function(){return(0,i.jsx)("nav",{className:"horizontal md:vertical shadow-sm right-0 top-0 fixed flex items-center flex-wrap bg-gradient-to-br md:bg-gradient-to-b from-green-300 to-indigo-400 p-3 sm:w-100vw md:w-16 sm:h-20 md:h-100vh sm:flex-row md:flex-col sm:justify-end md:justify-center",children:(0,i.jsx)(c.default,{href:"/",children:(0,i.jsxs)("a",{className:"text-shadow inline-flex items-center p-2 mr-4 ",children:[(0,i.jsx)("svg",{viewBox:"-6 -4 31 31",xmlns:"http://www.w3.org/2000/svg",className:"fill-current text-black h-8 w-8 mr-2",children:(0,i.jsx)("path",{d:"M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"})}),(0,i.jsx)("span",{className:"text-xl text-black font-bold uppercase tracking-wide",children:"Junnei"})]})})})},p=new Date,v=p.getUTCMonth()+1,b=p.getUTCDate(),y=p.getUTCFullYear()+"-"+(v>=10?v:"0"+v)+"-"+(b>=10?b:"0"+b),w=!0;function j(e){e.allPostsData;return(0,i.jsxs)(a.Z,{home:!0,children:[(0,i.jsx)(r.default,{children:(0,i.jsx)("title",{children:a.y})}),(0,i.jsx)(x,{}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(g,{})}),(0,i.jsx)("section",{className:"mx-5vw my-5vh text-4xl font-bold",children:(0,i.jsx)("p",{children:"Blog."})}),(0,i.jsx)("section",{className:"mx-5vw my-5vh",children:(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{className:s().listItem,children:[(0,i.jsx)(c.default,{href:"/blog",children:(0,i.jsx)("a",{children:"blog"})}),(0,i.jsx)("br",{}),(0,i.jsx)("small",{className:s().lightText,children:(0,i.jsx)(d.Z,{dateString:y})})]})})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2409)}])},367:function(e){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm"}},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],enableBlurryPlaceholder:!1}},5675:function(e,t,n){e.exports=n(6255)},1664:function(e,t,n){e.exports=n(6071)}},function(e){e.O(0,[476,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);