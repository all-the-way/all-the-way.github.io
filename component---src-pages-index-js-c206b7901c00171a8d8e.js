(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/eHF":function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e,t){var n=t.distance,a=t.left,i=t.right,o=t.up,r=t.down,s=t.top,c=t.bottom,u=t.big,d=t.mirror,p=t.opposite,f=(n?n.toString():0)+((a?1:0)|(i?2:0)|(s||r?4:0)|(c||o?8:0)|(d?16:0)|(p?32:0)|(e?64:0)|(u?128:0));if(m.hasOwnProperty(f))return m[f];var h=a||i||o||r||s||c,v=void 0,b=void 0;if(h){if(!d!=!(e&&p)){var y=[i,a,c,s,r,o];a=y[0],i=y[1],s=y[2],c=y[3],o=y[4],r=y[5]}var g=n||(u?"2000px":"100%");v=a?"-"+g:i?g:"0",b=r||s?"-"+g:o||c?g:"0"}return m[f]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(h?" transform: translate3d("+v+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),m[f]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,o=(e.out,e.forever),r=e.timeout,s=e.duration,c=void 0===s?l.defaults.duration:s,d=e.delay,m=void 0===d?l.defaults.delay:d,p=e.count,f=void 0===p?l.defaults.count:p,h=a(e,["children","out","forever","timeout","duration","delay","count"]),v={make:i,duration:void 0===r?c:r,delay:m,forever:o,count:f,style:{animationFillMode:"both"},reverse:h.left};return t?(0,u.default)(h,v,v,n):v}Object.defineProperty(t,"__esModule",{value:!0});var r,s=n("17x9"),l=n("ar19"),c=n("eH+L"),u=(r=c)&&r.__esModule?r:{default:r},d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},m={};o.propTypes=d,t.default=o,e.exports=t.default},"28nh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,i=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(a=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n("q1tI"),c=(a=l)&&a.__esModule?a:{default:a},u=n("17x9"),d=n("ar19"),m=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),p={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:m.isRequired,outEffect:(0,u.oneOfType)([m,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},f={transitionGroup:u.object},h=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.isOn=void 0===e.when||!!e.when,a.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:a.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},a.savedChild=!1,a.isShown=!1,d.observerMode?a.handleObserve=a.handleObserve.bind(a):(a.revealHandler=a.makeHandler(a.reveal),a.resizeHandler=a.makeHandler(a.resize)),a.saveRef=a.saveRef.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var a=this,i=n.forever,o=n.count,r=n.delay,s=n.duration;if(!i){this.animationEndTimeout=window.setTimeout((function(){a&&a.el&&(a.animationEndTimeout=void 0,e.call(a))}),r+(s+(t?s:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var a=n.duration+(t.cascade?n.duration:0),i=this.isOn?this.getDimensionValue():0,o=void 0,r=void 0;if(t.collapseOnly)o=n.duration/3,r=n.delay;else{var s=a>>2,l=s>>1;o=s,r=n.delay+(this.isOn?0:a-s-l),e.style.animationDuration=a-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:i,transition:"height "+o+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],a="style"in n&&n.style.animationName||void 0,i=void 0;e.collapseOnly?i={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(a=n.make),i={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:a}),className:n.className}),this.setState(e.collapse?this.collapse(i,e,n):i),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,a=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!a||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var a=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=a.duration,s=a.reverse,l=n.length,u=2*o;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),o=u/2);var m=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":i(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(s?m--:m++,0,l,o,u))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===i(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,a=t.props,i=a.style,o=a.className,s=a.children,l=this.props.disabled?o:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),u=r({},i,{opacity:1})):u=this.props.disabled?i:r({},i,this.state.style);var m=r({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:u},this.props.refProp,this.saveRef)),p=c.default.cloneElement(t,m,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,a=window.pageYOffset-t.getTop(this.el),i=Math.min(n,window.innerHeight)*(d.globalHide?e.fraction:0);return a>i-window.innerHeight&&a<n-i}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);h.propTypes=p,h.defaultProps={fraction:.2,refProp:"ref"},h.contextTypes=f,h.displayName="RevealBase",t.default=h,e.exports=t.default},"2TCc":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("T8Hb"),r=n.n(o),s=n("np49"),l=n.n(s),c=n("Wbzz");t.a=function(e){var t=e.external,n=Object(a.useState)(!1),o=n[0],s=n[1],u=Object(a.useState)(t||!1),d=u[0],m=u[1];Object(a.useEffect)((function(){var e=function(){window.pageYOffset>300||t?d||m(!0):d&&m(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[d,t]);return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top "+r.a.mainNav+" "+(d?r.a.navbarShrink:""),id:"mainNav"},i.a.createElement("div",{className:"container",id:"hem"},i.a.createElement(c.Link,{to:"/#medlemskap"},i.a.createElement("img",{src:l.a,alt:"Logotype - All The Way Gym",className:r.a.logo})),i.a.createElement("button",{onClick:function(e){s(!o)},className:"navbar-toggler "+r.a.navbarToggler+" navbar-toggler-right "+(o?"":"collapsed"),type:"button","aria-controls":"navbarResponsive","aria-expanded":o,"aria-label":"Toggle navigation"},i.a.createElement("i",{className:"fas fa-bars"})),i.a.createElement("div",{className:"collapse navbar-collapse "+(o?"show":""),id:"navbarResponsive"},i.a.createElement("ul",{className:"navbar-nav "+r.a.navbarNav+" ml-auto"},i.a.createElement("li",{className:r.a.navItem},i.a.createElement(c.Link,{className:r.a.navLink,to:"/#medlemskap"},"Medlemskap")),i.a.createElement("li",{className:r.a.navItem},i.a.createElement(c.Link,{className:r.a.navLink,to:"/#upplev-oss"},"Upplev oss")),i.a.createElement("li",{className:r.a.navItem},i.a.createElement(c.Link,{className:r.a.navLink,to:"/#utbud"},"Utbud"))))))}},"62Fw":function(e,t,n){e.exports=n.p+"static/atw-3a0782f92581cafae28d56a7f8e5b9aa.jpg"},"6MAG":function(e,t,n){e.exports={container:"membership-module--container--5aoZS",center:"membership-module--center--16ODh",message:"membership-module--message--2SyiT",form:"membership-module--form--2fJ6F",light:"membership-module--light--a2_Pk"}},"BA+R":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("OGX/"),r=n.n(o),s=n("OL/o"),l=n.n(s),c=n("Ecih"),u=n.n(c);t.a=function(e){var t=e.children;return i.a.createElement("header",{className:r.a.masthead,id:"start"},i.a.createElement("div",{className:r.a.videoContainer},i.a.createElement("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,poster:u.a,className:r.a.video},i.a.createElement("source",{src:l.a,type:"video/mp4"}))),i.a.createElement("div",{className:r.a.content},t))}},Ecih:function(e,t,n){e.exports=n.p+"static/hero-d4626d106b56d5e36b5858b92b028036.jpg"},Fzi1:function(e,t,n){"use strict";var a=n("Wbzz"),i=n("q1tI"),o=n.n(i);t.a=function(){return o.a.createElement("footer",{className:"bg-primary small text-center text-white-50"},o.a.createElement("div",{className:"container"},"Copyright © All The Way 2021 •"," ",o.a.createElement(a.Link,{to:"/cookies",className:"text-white-50",title:"Cookie Policy",target:"_blank"},"Cookiepolicy")," ","•"," ",o.a.createElement(a.Link,{to:"/gdpr",className:"text-white-50",title:"GDPR",target:"_blank"},"GDPR")))}},HFqa:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=(n("JpX0"),n("K/LY"),n("U+K5"),n("6MAG")),r=n.n(o),s=new Date,l=new Date(2021,4,3),c=Math.ceil((l.getTime()-s.getTime())/864e5);t.a=function(e){var t=e.membershipRef,n=(e.center,Object(a.useState)("")),o=(n[0],n[1],Object(a.useState)("")),s=(o[0],o[1],Object(a.useState)("")),l=(s[0],s[1],Object(a.useState)(!1)),u=(l[0],l[1],Object(a.useState)(""));u[0],u[1];return i.a.createElement("div",{className:r.a.container+" "+r.a.center+" container",ref:t,id:"medlemskap"},i.a.createElement("div",{className:r.a.form},i.a.createElement("h1",null,"Ansökan öppnar om"," ",i.a.createElement("span",{style:{color:"#f4b92b"}},c)," dagar")))}},"Jly+":function(e,t,n){e.exports={referencesSection:"references-module--referencesSection--s7VfA",container:"references-module--container--7w2DY",info:"references-module--info--15ey-",testimonial:"references-module--testimonial--2VXsv",testimonialContent:"references-module--testimonialContent--14nHE"}},JpX0:function(e,t,n){"use strict";var a=n("Wbzz"),i=n("q1tI"),o=n.n(i),r=n("rPLL"),s=n.n(r);t.a=function(e){var t=e.text,n=e.onClick,i=e.name,r=e.id,l=e.light,c=e.className,u=e.submit,d=e.link;return d?o.a.createElement(a.Link,{to:d,className:s.a.button+" "+(c||"")},t):u?o.a.createElement("input",{type:"submit",value:t,name:i,id:r,className:s.a.button+" "+(l?s.a.light:""),onClick:n}):o.a.createElement("button",{className:s.a.button+" "+(l?s.a.light:""),onClick:n},t)}},"K/LY":function(e,t,n){e.exports={input:"input-module--input--1n0cd",label:"input-module--label--3xZLK"}},"OGX/":function(e,t,n){e.exports={masthead:"hero-module--masthead--3sXNk",videoContainer:"hero-module--videoContainer--2YRwf",video:"hero-module--video--y0wfN",content:"hero-module--content--1pOtd"}},"OL/o":function(e,t,n){e.exports=n.p+"static/hero-3a2cbff67e8ce7323053d5c5d6817679.mp4"},Pxj1:function(e,t,n){},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),o=n("Zttt"),r=n("Fzi1"),s=n("rmMi"),l=n("/eHF"),c=n.n(l),u=n("62Fw"),d=n.n(u),m=n("hnzE"),p=n.n(m),f=n("JpX0"),h=function(e){var t=e.onClickMembership;return i.a.createElement("section",{id:"upplev-oss",className:p.a.container},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5 d-flex flex-column justify-center"},i.a.createElement("div",{className:"col-lg-8"},i.a.createElement("img",{className:p.a.aboutImage+" img-fluid mb-3 mb-lg-0",src:d.a,alt:"Bild på Oscar och Zakarias"}))),i.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5 d-flex flex-column justify-center"},i.a.createElement("div",{className:"col-lg-8"},i.a.createElement("div",{className:p.a.featuredText+" text-center text-lg-left"},i.a.createElement(c.a,{top:!0},i.a.createElement("h2",{className:"heading"},"Träningsklubb i Malmö med unik service och miljö")),i.a.createElement(c.a,{top:!0,delay:650},i.a.createElement("p",{className:"text-black mb-3"},"Vi vill att du skall lyckas med din träning! Därför bjuder vi in dig på en personlig hälsoplan där ni, tillsammans med en av våra rådgivare, går igenom var du befinner dig just nu i din träningsresa. Utöver detta får du även en personlig rundtur av gymmet och får möjlighet att ställa frågor om oss på ATW i Malmö. Allt för att du skall känna dig så trygg som möjligt inför starten, eller fortsättningen, på din träningsresa!"))))),i.a.createElement("div",{className:"row no-gutters d-flex justify-content-center mb-4 mb-lg-5"},i.a.createElement(f.a,{onClick:t,text:"Boka visning"}))))},v=n("p32R"),b=n.n(v),y=function(e){var t=e.heading,n=e.icon,a=e.children;return i.a.createElement("div",{className:b.a.card+" card"},i.a.createElement("div",{className:"card-body text-center"},i.a.createElement("i",{className:b.a.icon+" "+n+" fas text-primary mb-2"}),i.a.createElement("h3",{className:"text-uppercase m-b2"},t),i.a.createElement("p",null,a)))},g=function(e){var t=e.onClickMembership;return i.a.createElement("section",{id:"utbud",className:b.a.offeringsSection},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row text-center"},i.a.createElement("div",{className:"col-lg-8 mx-auto"},i.a.createElement("p",{className:b.a.sub},"Platserna är begränsade"),i.a.createElement("h2",{className:"heading"},"Vi erbjuder dig"))),i.a.createElement("div",{className:"row",style:{marginTop:20}},i.a.createElement(c.a,{top:!0},i.a.createElement("div",{className:"col-md-4 mb-4 mb-md-0"},i.a.createElement(y,{heading:"Gym",icon:"fa-building"},"Vi erbjuder en välutrustad maskinpark med den senaste teknologin, varierade redskap i toppkvalité och generösa utrymmen. Gymmet är utrustat för att du ska kunna känna dig trygg och utveckla dig själv över tid. ATW – ett gym som måste upplevas."))),i.a.createElement(c.a,{top:!0,delay:500},i.a.createElement("div",{className:"col-md-4 mb-4 mb-md-0"},i.a.createElement(y,{heading:"PT",icon:"fa-dumbbell"},"För oss är det viktigt att du når din målsättning. Tillsammans med en PT så får du individanpassad hjälp för att göra träningen rolig och utmanade. Våra PTs utbildas regelbundet för att kunna förse dig med den senaste kunskapen inom hälsa, träning och kost för att du ska lyckas med ditt hälsomål."))),i.a.createElement(c.a,{top:!0,delay:1e3},i.a.createElement("div",{className:"col-md-4 mb-4 mb-md-0"},i.a.createElement(y,{heading:"Team",icon:"fa-users"},"TEAM – Together Everyone Achieves More. Träna tillsammans med fyra till sex deltagare i ett TEAM. Vi peppar varandra, har roligt tillsammans och uppnår ett gemensamt träningsmål. Allt under ledning utav en personlig tränare! Fråga oss för mer information."))))),i.a.createElement("div",{className:"row d-flex justify-content-center no-gutters mb-4 mb-lg-5",style:{marginTop:60}},i.a.createElement(f.a,{onClick:t,text:"Upplev All The Way"})))},E=n("rgEr"),w=n.n(E),k=n("oBNZ"),O=n.n(k),N=n("Jly+"),x=n.n(N),T=(n("Pxj1"),function(){var e=w()((function(e){var t=e.children;return i.a.createElement("div",{className:x.a.container},t)}));return i.a.createElement("section",{className:x.a.referencesSection+" text-center"},i.a.createElement(e,{defaultWait:7e3,maxTurns:1e3},i.a.createElement(O.a,{left:!0},i.a.createElement("div",{className:x.a.testimonial},i.a.createElement("div",{className:x.a.testimonialContent},i.a.createElement("p",null,"Jag trodde nog aldrig att det skulle vara så pass lätt att gå ner i vikt! 15kg bort och jag har inte varit hungrig en enda gång!")))),i.a.createElement(O.a,{left:!0},i.a.createElement("div",{className:x.a.testimonial},i.a.createElement("div",{className:x.a.testimonialContent},i.a.createElement("p",null,"För ett halvår sedan kunde jag inte springa 1km utan smärta. Idag springer jag över 5km utan problem.")))),i.a.createElement(O.a,{left:!0},i.a.createElement("div",{className:x.a.testimonial},i.a.createElement("div",{className:x.a.testimonialContent},i.a.createElement("p",null,"Jag har lärt mig ofantligt mycket om mig själv och hur min kropp fungerar! Att träna med PT är verkligen utbildande!")))),i.a.createElement(O.a,{left:!0},i.a.createElement("div",{className:x.a.testimonial},i.a.createElement("div",{className:x.a.testimonialContent},i.a.createElement("p",null,"Jag gick ner ca 20kg! Från att ha haft ont i knä och blivit andfådd av att gå i trappor är jag nu som en helt annan person.")))),i.a.createElement(O.a,{left:!0},i.a.createElement("div",{className:x.a.testimonial},i.a.createElement("div",{className:x.a.testimonialContent},i.a.createElement("p",null,"Jag har alltid ogillat träning, nu älskar jag det!"))))),i.a.createElement("div",{className:x.a.info},i.a.createElement("h2",null,"Vårt rykte"),i.a.createElement("p",null,"Så här tycker tidigare kunder till anställda på All The Way")))}),S=n("2TCc"),R=n("BA+R"),j=n("HFqa");t.default=function(){var e=Object(a.useRef)(null),t=function(){console.log("click"),e.current.scrollIntoView()};return i.a.createElement(o.a,null,i.a.createElement(S.a,null),i.a.createElement(R.a,null,i.a.createElement(j.a,{membershipRef:e})),i.a.createElement(h,{onClickMembership:t}),i.a.createElement(g,{onClickMembership:t}),i.a.createElement(T,null),i.a.createElement(s.a,null),i.a.createElement(r.a,null))}},T8Hb:function(e,t,n){e.exports={logo:"menu-module--logo--3ysX3",navbarToggler:"menu-module--navbarToggler--3Cjy6",navbarNav:"menu-module--navbarNav--11DnU",navItem:"menu-module--navItem--1Cs-R",navLink:"menu-module--navLink--3KiuV",mainNav:"menu-module--mainNav--1vUnL",navbarShrink:"menu-module--navbarShrink--23Vo7"}},"U+K5":function(e,t,n){e.exports={container:"checkbox-module--container--3CwlY",checkmark:"checkbox-module--checkmark--9wElG"}},WxbS:function(e,t,n){e.exports={contactSection:"socialLinks-module--contactSection--1xP21",card:"socialLinks-module--card--2d3t-",social:"socialLinks-module--social--2TStT"}},ar19:function(e,t,n){"use strict";function a(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function i(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",i,!0),a("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",i,!0),window.document.removeEventListener("visibilitychange",i))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=a,t.cascade=function(e,t,n,a,i){var o=Math.log(a),r=(Math.log(i)-o)/(n-t);return Math.exp(o+r*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(h+m)+"{"+e+"}",n=p[e];return n?""+h+n:(f.insertRule(t,f.cssRules.length),p[e]=m,""+h+m++)},t.hideAll=i,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var o=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=r=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),m=1,p={},f=!1,h=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(c,1500),s||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",i,!0),window.addEventListener("orientationchange",i,!0),window.document.addEventListener("visibilitychange",i))}},"eH+L":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=function(e,t,n,a){return"in"in e&&(e.when=e.in),o.default.Children.count(a)<2?o.default.createElement(r.default,i({},e,{inEffect:t,outEffect:n,children:a})):(a=o.default.Children.map(a,(function(a){return o.default.createElement(r.default,i({},e,{inEffect:t,outEffect:n,children:a}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,a):o.default.createElement("span",null,a))};var o=a(n("q1tI")),r=a(n("28nh"));e.exports=t.default},hnzE:function(e,t,n){e.exports={container:"about-module--container--3LFKY",featuredText:"about-module--featuredText--1cNGF",aboutImage:"about-module--aboutImage--1BPZj"}},oBNZ:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e,t){var n=t.left,a=t.right,i=t.up,o=t.down,r=t.top,s=t.bottom,l=t.big,c=t.mirror,d=t.opposite,p=(n?1:0)|(a?2:0)|(r||o?4:0)|(s||i?8:0)|(c?16:0)|(d?32:0)|(e?64:0)|(l?128:0);if(m.hasOwnProperty(p))return m[p];var f=n||a||i||o||r||s,h=void 0,v=void 0;if(f){if(!c!=!(e&&d)){var b=[a,n,s,r,o,i];n=b[0],a=b[1],r=b[2],s=b[3],i=b[4],o=b[5]}var y=l?"2000px":"100%";h=n?"-"+y:a?y:"0",v=o||r?"-"+y:i||s?y:"0"}return m[p]=(0,u.animation)((e?"to":"from")+" {"+(f?" transform: translate3d("+h+", "+v+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),m[p]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,n=(e.out,e.forever),o=e.timeout,r=e.duration,s=void 0===r?u.defaults.duration:r,l=e.delay,d=void 0===l?u.defaults.delay:l,m=e.count,p=void 0===m?u.defaults.count:m,f=a(e,["children","out","forever","timeout","duration","delay","count"]),h={make:i,duration:void 0===o?s:o,delay:d,forever:n,count:p,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,h,h,t)}Object.defineProperty(t,"__esModule",{value:!0});var r,s=n("17x9"),l=n("eH+L"),c=(r=l)&&r.__esModule?r:{default:r},u=n("ar19"),d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},m={};o.propTypes=d,t.default=o,e.exports=t.default},obyI:function(e,t){e.exports={siteTitle:"Gym i Malmö - All The Way",manifestName:"All The Way",manifestShortName:"All The Way",manifestStartUrl:"/",manifestBackgroundColor:"#00587c",manifestThemeColor:"#00587c",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"",heading:"All The Way",subHeading:"Din personliga tränare",socialLinks:[{icon:"fa-instagram",name:"Instagram",url:"https://instagram.com/allthewaygym"},{icon:"fa-facebook-f",name:"Facebook",url:"https://www.facebook.com/AllTheWayGym"}],email:"oscar.throedsson@gmail.com",phone:"000-00000",address:"305 Del Sol, Sunnyvale, CA"}},p32R:function(e,t,n){e.exports={offeringsSection:"offering-module--offeringsSection--1ccrD",card:"offering-module--card--35f38",icon:"offering-module--icon--27Sqi",sub:"offering-module--sub--1tWSx"}},rPLL:function(e,t,n){e.exports={button:"button-module--button--2P_RA",light:"button-module--light--Ep-Ur"}},rgEr:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=a(n("q1tI")),d=n("17x9"),m=a(n("tP/9"));t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function a(e){i(this,a);var t=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={current:0,next:1,backwards:!1,swap:!1,appear:!1},t.turn=0,t.stop=!1,t.handleReveal=t.handleReveal.bind(t),t.handleSwipe=t.handleSwipe.bind(t),t.target=t.target.bind(t),t}return r(a,n),c(a,null,[{key:"propTypes",get:function(){return{children:d.node.isRequired,defaultWait:d.number,maxTurns:d.number,swipe:d.bool}}},{key:"defaultProps",get:function(){return{defaultWait:t.defaultWait||5e3,maxTurns:t.maxTurns||5,swipe:t.swipe||!0}}}]),c(a,[{key:"target",value:function(e){var t=e.currentTarget;this.move(+t.getAttribute("data-position"))}},{key:"handleReveal",value:function(){this.turn>=this.props.maxTurns||this.move(this.state.current+1)}},{key:"componentWillUnmount",value:function(){this.turn=-1}},{key:"move",value:function(e){if(!(this.turn<0||e===this.state.current)){var t=e,n=u.default.Children.count(this.props.children);e>=n?(this.turn++,t=0):e<0&&(t=n-1),this.setState({current:t,next:this.state.current,backwards:e<this.state.current,swap:!this.state.swap,appear:!0})}}},{key:"handleSwipe",value:function(e){this.props.swipe&&("left"===e?this.move(this.state.current+1):"right"===e&&this.move(this.state.current-1))}},{key:"componentDidMount",value:function(){this.beforeNode&&this.afterNode&&((0,m.default)(this.beforeNode,this.handleSwipe),(0,m.default)(this.afterNode,this.handleSwipe))}},{key:"render",value:function(){var t=this,n=this.props.children,a=u.default.Children.toArray(n),i=a.length,o=this.state,r=o.swap,c=o.next,d=o.current,m=o.backwards;d%=i,c%=i;var p=void 0,f=void 0;switch(i){case 0:p=u.default.createElement("div",null),f=u.default.createElement("div",null);case 1:p=a[0],f=a[0];default:p=a[r?c:d],f=a[r?d:c]}return"object"!==(void 0===p?"undefined":l(p))&&(p=u.default.createElement("div",null,p)),"object"!==(void 0===f?"undefined":l(f))&&(f=u.default.createElement("div",null,f)),u.default.createElement(e,s({},this.props,{position:d,handleClick:this.target,total:i,children:[u.default.createElement("div",{ref:function(e){return t.beforeNode=e},key:1,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:r?1:2}},u.default.createElement(p.type,s({mountOnEnter:!0,unmountOnExit:!0,appear:this.state.appear,wait:this.props.defaultWait},p.props,{opposite:!0,when:!r,mirror:m,onReveal:r?void 0:this.handleReveal}))),u.default.createElement("div",{key:2,ref:function(e){return t.afterNode=e},style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:r?2:1}},u.default.createElement(f.type,s({mountOnEnter:!0,unmountOnExit:!0,appear:this.state.appear,wait:this.props.defaultWait},f.props,{opposite:!0,when:r,mirror:m,onReveal:r?this.handleReveal:void 0})))]}))}}]),a}(u.default.Component)},e.exports=t.default},rmMi:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),o=n("obyI"),r=n.n(o),s=n("WxbS"),l=n.n(s);t.a=function(){return i.a.createElement("section",{className:l.a.contactSection+" bg-primary"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:l.a.social+" d-flex justify-content-center"},r.a.socialLinks.map((function(e){var t=e.icon,n=e.url,a=e.name;return i.a.createElement("a",{key:n,href:n,className:"mx-2",title:a},i.a.createElement("i",{className:"fab "+t}))})))))}},"tP/9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n,a,i,o,r,s,l=e,c=t||function(e){};l.addEventListener("touchstart",(function(e){var t=e.changedTouches[0];n="none",a=t.pageX,i=t.pageY,s=(new Date).getTime()}),{passive:!0}),l.addEventListener("touchend",(function(e){var t=e.changedTouches[0];o=t.pageX-a,r=t.pageY-i,(new Date).getTime()-s<=300&&(Math.abs(o)>=150&&Math.abs(r)<=100?n=o<0?"left":"right":Math.abs(r)>=150&&Math.abs(o)<=100&&(n=r<0?"up":"down")),c(n)}),{passive:!0})},e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-c206b7901c00171a8d8e.js.map