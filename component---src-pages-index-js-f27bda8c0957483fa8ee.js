(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/eHF":function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e,t){var n=t.distance,a=t.left,i=t.right,r=t.up,o=t.down,s=t.top,c=t.bottom,u=t.big,d=t.mirror,p=t.opposite,f=(n?n.toString():0)+((a?1:0)|(i?2:0)|(s||o?4:0)|(c||r?8:0)|(d?16:0)|(p?32:0)|(e?64:0)|(u?128:0));if(m.hasOwnProperty(f))return m[f];var h=a||i||r||o||s||c,v=void 0,b=void 0;if(h){if(!d!=!(e&&p)){var g=[i,a,c,s,o,r];a=g[0],i=g[1],s=g[2],c=g[3],r=g[4],o=g[5]}var y=n||(u?"2000px":"100%");v=a?"-"+y:i?y:"0",b=o||s?"-"+y:r||c?y:"0"}return m[f]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(h?" transform: translate3d("+v+", "+b+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),m[f]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,r=(e.out,e.forever),o=e.timeout,s=e.duration,c=void 0===s?l.defaults.duration:s,d=e.delay,m=void 0===d?l.defaults.delay:d,p=e.count,f=void 0===p?l.defaults.count:p,h=a(e,["children","out","forever","timeout","duration","delay","count"]),v={make:i,duration:void 0===o?c:o,delay:m,forever:r,count:f,style:{animationFillMode:"both"},reverse:h.left};return t?(0,u.default)(h,v,v,n):v}Object.defineProperty(t,"__esModule",{value:!0});var o,s=n("17x9"),l=n("ar19"),c=n("eH+L"),u=(o=c)&&o.__esModule?o:{default:o},d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},m={};r.propTypes=d,t.default=r,e.exports=t.default},"28nh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n("q1tI"),c=(a=l)&&a.__esModule?a:{default:a},u=n("17x9"),d=n("ar19"),m=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),p={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:m.isRequired,outEffect:(0,u.oneOfType)([m,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},f={transitionGroup:u.object},h=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.isOn=void 0===e.when||!!e.when,a.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:a.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},a.savedChild=!1,a.isShown=!1,d.observerMode?a.handleObserve=a.handleObserve.bind(a):(a.revealHandler=a.makeHandler(a.reveal),a.resizeHandler=a.makeHandler(a.resize)),a.saveRef=a.saveRef.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?o({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var a=this,i=n.forever,r=n.count,o=n.delay,s=n.duration;if(!i){this.animationEndTimeout=window.setTimeout((function(){a&&a.el&&(a.animationEndTimeout=void 0,e.call(a))}),o+(s+(t?s:0)*r))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var a=n.duration+(t.cascade?n.duration:0),i=this.isOn?this.getDimensionValue():0,r=void 0,o=void 0;if(t.collapseOnly)r=n.duration/3,o=n.delay;else{var s=a>>2,l=s>>1;r=s,o=n.delay+(this.isOn?0:a-s-l),e.style.animationDuration=a-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:i,transition:"height "+r+"ms ease "+o+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],a="style"in n&&n.style.animationName||void 0,i=void 0;e.collapseOnly?i={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(a=n.make),i={hasAppeared:!0,hasExited:!1,collapse:void 0,style:o({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:a}),className:n.className}),this.setState(e.collapse?this.collapse(i,e,n):i),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){r(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,a=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!a||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var a=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],r=a.duration,s=a.reverse,l=n.length,u=2*r;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),r=u/2);var m=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":i(e))&&e?c.default.cloneElement(e,{style:o({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(s?m--:m++,0,l,r,u))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===i(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,a=t.props,i=a.style,r=a.className,s=a.children,l=this.props.disabled?r:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(r?" "+r:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),u=o({},i,{opacity:1})):u=this.props.disabled?i:o({},i,this.state.style);var m=o({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:u},this.props.refProp,this.saveRef)),p=c.default.cloneElement(t,m,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:o({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,a=window.pageYOffset-t.getTop(this.el),i=Math.min(n,window.innerHeight)*(d.globalHide?e.fraction:0);return a>i-window.innerHeight&&a<n-i}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);h.propTypes=p,h.defaultProps={fraction:.2,refProp:"ref"},h.contextTypes=f,h.displayName="RevealBase",t.default=h,e.exports=t.default},"2TCc":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("T8Hb"),o=n.n(r),s=n("np49"),l=n.n(s),c=n("Wbzz");t.a=function(e){var t=e.external,n=Object(a.useState)(!1),r=n[0],s=n[1],u=Object(a.useState)(t||!1),d=u[0],m=u[1];Object(a.useEffect)((function(){var e=function(){window.pageYOffset>300||t?d||m(!0):d&&m(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[d,t]);return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top "+o.a.mainNav+" "+(d?o.a.navbarShrink:""),id:"mainNav"},i.a.createElement("div",{className:"container",id:"hem"},i.a.createElement(c.a,{to:"/#medlemskap"},i.a.createElement("img",{src:l.a,alt:"Logotype - All The Way Gym",className:o.a.logo})),i.a.createElement("button",{onClick:function(e){s(!r)},className:"navbar-toggler "+o.a.navbarToggler+" navbar-toggler-right "+(r?"":"collapsed"),type:"button","aria-controls":"navbarResponsive","aria-expanded":r,"aria-label":"Toggle navigation"},i.a.createElement("i",{className:"fas fa-bars"})),i.a.createElement("div",{className:"collapse navbar-collapse "+(r?"show":""),id:"navbarResponsive"},i.a.createElement("ul",{className:"navbar-nav "+o.a.navbarNav+" ml-auto"},i.a.createElement("li",{className:o.a.navItem},i.a.createElement(c.a,{className:o.a.navLink,to:"/#medlemskap"},"Medlemskap")),i.a.createElement("li",{className:o.a.navItem},i.a.createElement(c.a,{className:o.a.navLink,to:"/#upplev-oss"},"Upplev oss")),i.a.createElement("li",{className:o.a.navItem},i.a.createElement(c.a,{className:o.a.navLink,to:"/#utbud"},"Utbud"))))))}},"62Fw":function(e,t,n){e.exports=n.p+"static/atw-9c9bfb03da596da90a10748a84fd2ceb.jpg"},"6MAG":function(e,t,n){e.exports={container:"membership-module--container--5aoZS",center:"membership-module--center--16ODh",message:"membership-module--message--2SyiT",form:"membership-module--form--2fJ6F",light:"membership-module--light--a2_Pk"}},"BA+R":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("OGX/"),o=n.n(r),s=n("OL/o"),l=n.n(s),c=n("Ecih"),u=n.n(c);t.a=function(e){var t=e.children;return i.a.createElement("header",{className:o.a.masthead,id:"start"},i.a.createElement("div",{className:o.a.videoContainer},i.a.createElement("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,poster:u.a,className:o.a.video},i.a.createElement("source",{src:l.a,type:"video/mp4"}))),i.a.createElement("div",{className:o.a.content},t))}},Ecih:function(e,t,n){e.exports=n.p+"static/hero-272869b7e11c3ef1c4225f03c59cc7e2.jpg"},Fzi1:function(e,t,n){"use strict";var a=n("Wbzz"),i=n("q1tI"),r=n.n(i);t.a=function(){return r.a.createElement("footer",{className:"bg-primary small text-center text-white-50"},r.a.createElement("div",{className:"container"},"Copyright © All The Way 2021 •"," ",r.a.createElement(a.a,{to:"/cookies",className:"text-white-50",title:"Cookie Policy",target:"_blank"},"Cookiepolicy")," ","•"," ",r.a.createElement(a.a,{to:"/gdpr",className:"text-white-50",title:"GDPR",target:"_blank"},"GDPR")))}},HFqa:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("JpX0"),o=n("K/LY"),s=n.n(o),l=function(e){var t=e.type,n=e.label,a=e.name,r=e.value,o=e.onChange;return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{className:s.a.label,htmlFor:a},n),i.a.createElement("input",{type:t,className:s.a.input,id:a,name:a,value:r,onChange:function(e){return o(e)}}))},c=n("U+K5"),u=n.n(c),d=function(e){var t=e.name,n=e.onChange,a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{className:u.a.container},a,i.a.createElement("input",{type:"checkbox",name:t,onChange:function(e){return n(e)}}),i.a.createElement("span",{className:u.a.checkmark})))},m=n("6MAG"),p=n.n(m);t.a=function(e){var t=e.membershipRef,n=e.center,o=Object(a.useState)(""),s=o[0],c=o[1],u=Object(a.useState)(""),m=u[0],f=u[1],h=Object(a.useState)(""),v=h[0],b=h[1],g=Object(a.useState)(!1),y=g[0],E=g[1],w=Object(a.useState)(""),k=w[0],N=w[1],O={firstName:c,lastName:f,phoneNumber:b},x=function(e){N(""),O[e.target.name](e.target.value)};return i.a.createElement("div",{className:p.a.container+" "+(n?p.a.center:"")+" container",ref:t,id:"medlemskap"},i.a.createElement("div",{className:p.a.form},i.a.createElement("h1",null,"Anmäl dig till en"," ",i.a.createElement("span",{className:p.a.light},"PHP - Personlig Hälsoplan")),i.a.createElement("form",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"form-group col-md-6"},i.a.createElement(l,{label:"Förnamn",type:"text",value:s,name:"firstName",onChange:x})),i.a.createElement("div",{className:"form-group col-md-6"},i.a.createElement(l,{label:"Efternamn",type:"text",name:"lastName",value:m,onChange:x}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"form-group col-md-12"},i.a.createElement(l,{label:"Telefonnummer",type:"phone",name:"phoneNumber",value:v,onChange:x}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"form-group col-md-12 text-left"},i.a.createElement(d,{name:"acceptTerms",onChange:function(e){E(e.target.checked)},value:y,checked:y},"Jag godkänner att mina personuppgifter hanteras enligt GDPR.")))),i.a.createElement(r.a,{light:!0,text:"Anmäl intresse",onClick:function(){if(console.log(y),s&&m&&v)if(y){var e=new FormData;e.append("entry.17082701",s),e.append("entry.1001144049",m),e.append("entry.2090741493",v),fetch("https://docs.google.com/forms/u/6/d/e/1FAIpQLSc0L1No6dkhY5XdPvx28SEY3ZSIVGrqN027FJT72fZRYY6QUg/formResponse",{method:"POST",body:e,mode:"no-cors"}).then((function(){})),fetch("https://all-the-way-backend.azurewebsites.net/api/leads",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstName:s,lastName:m,phoneNumber:v})}).then((function(e){e.ok?(c(""),f(""),b(""),N("Tack för din anmälan")):console.error(e.error)}))}else N("Vänligen acceptera våra villkor");else N("Vänligen fyll i alla fält")}}),k&&i.a.createElement("div",{className:p.a.message},k)))}},"Jly+":function(e,t,n){e.exports={referencesSection:"references-module--referencesSection--s7VfA",container:"references-module--container--7w2DY",info:"references-module--info--15ey-",testimonial:"references-module--testimonial--2VXsv",testimonialContent:"references-module--testimonialContent--14nHE"}},"K/LY":function(e,t,n){e.exports={input:"input-module--input--1n0cd",label:"input-module--label--3xZLK"}},"OGX/":function(e,t,n){e.exports={masthead:"hero-module--masthead--3sXNk",videoContainer:"hero-module--videoContainer--2YRwf",video:"hero-module--video--y0wfN",content:"hero-module--content--1pOtd"}},"OL/o":function(e,t,n){e.exports=n.p+"static/hero-ab0dd7d81f152a296887ffac7f5bde9a.mp4"},Pxj1:function(e,t,n){},RXBc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("Zttt"),o=n("Fzi1"),s=n("rmMi"),l=n("/eHF"),c=n.n(l),u=n("62Fw"),d=n.n(u),m=n("hnzE"),p=n.n(m),f=n("JpX0"),h=function(e){var t=e.onClickMembership;return i.a.createElement("section",{id:"upplev-oss",className:p.a.container},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5 d-flex flex-column justify-center"},i.a.createElement("div",{className:"col-lg-8"},i.a.createElement("img",{className:p.a.aboutImage+" img-fluid mb-3 mb-lg-0",src:d.a,alt:"Bild på Oscar och Zakarias"}))),i.a.createElement("div",{className:"row align-items-center no-gutters mb-4 mb-lg-5 d-flex flex-column justify-center"},i.a.createElement("div",{className:"col-lg-8"},i.a.createElement("div",{className:p.a.featuredText+" text-center text-lg-left"},i.a.createElement(c.a,{top:!0},i.a.createElement("h2",{className:"heading"},"Träningsklubb i Malmö med unik service och miljö")),i.a.createElement(c.a,{top:!0,delay:650},i.a.createElement("p",{className:"text-black mb-3"},"Vi vill att du skall lyckas med din träning! Därför bjuder vi in dig på en personlig hälsoplan där ni, tillsammans med en av våra rådgivare, går igenom var du befinner dig just nu i din träningsresa. Utöver detta får du även en personlig rundtur av gymmet och får möjlighet att ställa frågor om oss på ATW i Malmö. Allt för att du skall känna dig så trygg som möjligt inför starten, eller fortsättningen, på din träningsresa!"))))),i.a.createElement("div",{className:"row no-gutters d-flex justify-content-center mb-4 mb-lg-5"},i.a.createElement(f.a,{onClick:t,text:"Boka visning"}))))},v=n("p32R"),b=n.n(v),g=function(e){var t=e.heading,n=e.icon,a=e.children;return i.a.createElement("div",{className:b.a.card+" card"},i.a.createElement("div",{className:"card-body text-center"},i.a.createElement("i",{className:b.a.icon+" "+n+" fas text-primary mb-2"}),i.a.createElement("h3",{className:"text-uppercase m-b2"},t),i.a.createElement("p",null,a)))},y=function(e){var t=e.onClickMembership;return i.a.createElement("section",{id:"utbud",className:b.a.offeringsSection},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row text-center"},i.a.createElement("div",{className:"col-lg-8 mx-auto"},i.a.createElement("p",{className:b.a.sub},"Platserna är begränsade"),i.a.createElement("h2",{className:"heading"},"Vi erbjuder dig"))),i.a.createElement("div",{className:"row",style:{marginTop:20}},i.a.createElement(c.a,{top:!0},i.a.createElement("div",{className:"col-md-4 mb-4 mb-md-0"},i.a.createElement(g,{heading:"Gym",icon:"fa-building"},"Vi erbjuder en välutrustad maskinpark med den senaste teknologin, varierade redskap i toppkvalité och generösa utrymmen. Gymmet är utrustat för att du ska kunna känna dig trygg och utveckla dig själv över tid. ATW – ett gym som måste upplevas."))),i.a.createElement(c.a,{top:!0,delay:500},i.a.createElement("div",{className:"col-md-4 mb-4 mb-md-0"},i.a.createElement(g,{heading:"PT",icon:"fa-dumbbell"},"För oss är det viktigt att du når din målsättning. Tillsammans med en PT så får du individanpassad hjälp för att göra träningen rolig och utmanade. Våra PTs utbildas regelbundet för att kunna förse dig med den senaste kunskapen inom hälsa, träning och kost för att du ska lyckas med ditt hälsomål."))),i.a.createElement(c.a,{top:!0,delay:1e3},i.a.createElement("div",{className:"col-md-4 mb-4 mb-md-0"},i.a.createElement(g,{heading:"Team",icon:"fa-users"},"TEAM – Together Everyone Achieves More. Träna tillsammans med fyra till sex deltagare i ett TEAM. Vi peppar varandra, har roligt tillsammans och uppnår ett gemensamt träningsmål. Allt under ledning utav en personlig tränare! Fråga oss för mer information."))))),i.a.createElement("div",{className:"row d-flex justify-content-center no-gutters mb-4 mb-lg-5",style:{marginTop:60}},i.a.createElement(f.a,{onClick:t,text:"Upplev All The Way"})))},E=n("rgEr"),w=n.n(E),k=n("oBNZ"),N=n.n(k),O=n("Jly+"),x=n.n(O),T=(n("Pxj1"),function(){var e=w()((function(e){var t=e.children;return i.a.createElement("div",{className:x.a.container},t)}));return i.a.createElement("section",{className:x.a.referencesSection+" text-center"},i.a.createElement(e,{defaultWait:7e3,maxTurns:1e3},i.a.createElement(N.a,{left:!0},i.a.createElement("div",{className:x.a.testimonial},i.a.createElement("div",{className:x.a.testimonialContent},i.a.createElement("p",null,"Jag trodde nog aldrig att det skulle vara så pass lätt att gå ner i vikt! 15kg bort och jag har inte varit hungrig en enda gång!")))),i.a.createElement(N.a,{left:!0},i.a.createElement("div",{className:x.a.testimonial},i.a.createElement("div",{className:x.a.testimonialContent},i.a.createElement("p",null,"För ett halvår sedan kunde jag inte springa 1km utan smärta. Idag springer jag över 5km utan problem.")))),i.a.createElement(N.a,{left:!0},i.a.createElement("div",{className:x.a.testimonial},i.a.createElement("div",{className:x.a.testimonialContent},i.a.createElement("p",null,"Jag har lärt mig ofantligt mycket om mig själv och hur min kropp fungerar! Att träna med PT är verkligen utbildande!")))),i.a.createElement(N.a,{left:!0},i.a.createElement("div",{className:x.a.testimonial},i.a.createElement("div",{className:x.a.testimonialContent},i.a.createElement("p",null,"Jag gick ner ca 20kg! Från att ha haft ont i knä och blivit andfådd av att gå i trappor är jag nu som en helt annan person.")))),i.a.createElement(N.a,{left:!0},i.a.createElement("div",{className:x.a.testimonial},i.a.createElement("div",{className:x.a.testimonialContent},i.a.createElement("p",null,"Jag har alltid ogillat träning, nu älskar jag det!"))))),i.a.createElement("div",{className:x.a.info},i.a.createElement("h2",null,"Vårt rykte"),i.a.createElement("p",null,"Så här tycker tidigare kunder till anställda på All The Way")))}),S=n("2TCc"),R=n("BA+R"),j=n("HFqa");t.default=function(){var e=Object(a.useRef)(null),t=function(){console.log("click"),e.current.scrollIntoView()};return i.a.createElement(r.a,null,i.a.createElement(S.a,null),i.a.createElement(R.a,null,i.a.createElement(j.a,{membershipRef:e})),i.a.createElement(h,{onClickMembership:t}),i.a.createElement(y,{onClickMembership:t}),i.a.createElement(T,null),i.a.createElement(s.a,null),i.a.createElement(o.a,null))}},T8Hb:function(e,t,n){e.exports={logo:"menu-module--logo--3ysX3",navbarToggler:"menu-module--navbarToggler--3Cjy6",navbarNav:"menu-module--navbarNav--11DnU",navItem:"menu-module--navItem--1Cs-R",navLink:"menu-module--navLink--3KiuV",mainNav:"menu-module--mainNav--1vUnL",navbarShrink:"menu-module--navbarShrink--23Vo7"}},"U+K5":function(e,t,n){e.exports={container:"checkbox-module--container--3CwlY",checkmark:"checkbox-module--checkmark--9wElG"}},WxbS:function(e,t,n){e.exports={contactSection:"socialLinks-module--contactSection--1xP21",card:"socialLinks-module--card--2d3t-",social:"socialLinks-module--social--2TStT"}},ar19:function(e,t,n){"use strict";function a(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function i(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",i,!0),a("."+r+" { opacity: 0; }"),window.removeEventListener("orientationchange",i,!0),window.document.removeEventListener("visibilitychange",i))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=a,t.cascade=function(e,t,n,a,i){var r=Math.log(a),o=(Math.log(i)-r)/(n-t);return Math.exp(r+o*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(h+m)+"{"+e+"}",n=p[e];return n?""+h+n:(f.insertRule(t,f.cssRules.length),p[e]=m,""+h+m++)},t.hideAll=i,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var r=t.namespace="react-reveal",o=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),s=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=o=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),m=1,p={},f=!1,h=r+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=s="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=o=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),o&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=o=!1),o&&window.setTimeout(c,1500),s||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",i,!0),window.addEventListener("orientationchange",i,!0),window.document.addEventListener("visibilitychange",i))}},"eH+L":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=function(e,t,n,a){return"in"in e&&(e.when=e.in),r.default.Children.count(a)<2?r.default.createElement(o.default,i({},e,{inEffect:t,outEffect:n,children:a})):(a=r.default.Children.map(a,(function(a){return r.default.createElement(o.default,i({},e,{inEffect:t,outEffect:n,children:a}))})),"Fragment"in r.default?r.default.createElement(r.default.Fragment,null,a):r.default.createElement("span",null,a))};var r=a(n("q1tI")),o=a(n("28nh"));e.exports=t.default},hnzE:function(e,t,n){e.exports={container:"about-module--container--3LFKY",featuredText:"about-module--featuredText--1cNGF",aboutImage:"about-module--aboutImage--1BPZj"}},oBNZ:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e,t){var n=t.left,a=t.right,i=t.up,r=t.down,o=t.top,s=t.bottom,l=t.big,c=t.mirror,d=t.opposite,p=(n?1:0)|(a?2:0)|(o||r?4:0)|(s||i?8:0)|(c?16:0)|(d?32:0)|(e?64:0)|(l?128:0);if(m.hasOwnProperty(p))return m[p];var f=n||a||i||r||o||s,h=void 0,v=void 0;if(f){if(!c!=!(e&&d)){var b=[a,n,s,o,r,i];n=b[0],a=b[1],o=b[2],s=b[3],i=b[4],r=b[5]}var g=l?"2000px":"100%";h=n?"-"+g:a?g:"0",v=r||o?"-"+g:i||s?g:"0"}return m[p]=(0,u.animation)((e?"to":"from")+" {"+(f?" transform: translate3d("+h+", "+v+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),m[p]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,n=(e.out,e.forever),r=e.timeout,o=e.duration,s=void 0===o?u.defaults.duration:o,l=e.delay,d=void 0===l?u.defaults.delay:l,m=e.count,p=void 0===m?u.defaults.count:m,f=a(e,["children","out","forever","timeout","duration","delay","count"]),h={make:i,duration:void 0===r?s:r,delay:d,forever:n,count:p,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,h,h,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,s=n("17x9"),l=n("eH+L"),c=(o=l)&&o.__esModule?o:{default:o},u=n("ar19"),d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},m={};r.propTypes=d,t.default=r,e.exports=t.default},obyI:function(e,t){e.exports={siteTitle:"Gym i Malmö - All The Way",pathPrefix:"",heading:"All The Way",subHeading:"Din personliga tränare",socialLinks:[{icon:"fa-instagram",name:"Instagram",url:"https://instagram.com/allthewaygym"},{icon:"fa-facebook-f",name:"Facebook",url:"https://www.facebook.com/AllTheWayGym"}],email:"oscar.throedsson@gmail.com",phone:"000-00000",address:"305 Del Sol, Sunnyvale, CA"}},p32R:function(e,t,n){e.exports={offeringsSection:"offering-module--offeringsSection--1ccrD",card:"offering-module--card--35f38",icon:"offering-module--icon--27Sqi",sub:"offering-module--sub--1tWSx"}},rgEr:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=a(n("q1tI")),d=n("17x9"),m=a(n("tP/9"));t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function a(e){i(this,a);var t=r(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={current:0,next:1,backwards:!1,swap:!1,appear:!1},t.turn=0,t.stop=!1,t.handleReveal=t.handleReveal.bind(t),t.handleSwipe=t.handleSwipe.bind(t),t.target=t.target.bind(t),t}return o(a,n),c(a,null,[{key:"propTypes",get:function(){return{children:d.node.isRequired,defaultWait:d.number,maxTurns:d.number,swipe:d.bool}}},{key:"defaultProps",get:function(){return{defaultWait:t.defaultWait||5e3,maxTurns:t.maxTurns||5,swipe:t.swipe||!0}}}]),c(a,[{key:"target",value:function(e){var t=e.currentTarget;this.move(+t.getAttribute("data-position"))}},{key:"handleReveal",value:function(){this.turn>=this.props.maxTurns||this.move(this.state.current+1)}},{key:"componentWillUnmount",value:function(){this.turn=-1}},{key:"move",value:function(e){if(!(this.turn<0||e===this.state.current)){var t=e,n=u.default.Children.count(this.props.children);e>=n?(this.turn++,t=0):e<0&&(t=n-1),this.setState({current:t,next:this.state.current,backwards:e<this.state.current,swap:!this.state.swap,appear:!0})}}},{key:"handleSwipe",value:function(e){this.props.swipe&&("left"===e?this.move(this.state.current+1):"right"===e&&this.move(this.state.current-1))}},{key:"componentDidMount",value:function(){this.beforeNode&&this.afterNode&&((0,m.default)(this.beforeNode,this.handleSwipe),(0,m.default)(this.afterNode,this.handleSwipe))}},{key:"render",value:function(){var t=this,n=this.props.children,a=u.default.Children.toArray(n),i=a.length,r=this.state,o=r.swap,c=r.next,d=r.current,m=r.backwards;d%=i,c%=i;var p=void 0,f=void 0;switch(i){case 0:p=u.default.createElement("div",null),f=u.default.createElement("div",null);case 1:p=a[0],f=a[0];default:p=a[o?c:d],f=a[o?d:c]}return"object"!==(void 0===p?"undefined":l(p))&&(p=u.default.createElement("div",null,p)),"object"!==(void 0===f?"undefined":l(f))&&(f=u.default.createElement("div",null,f)),u.default.createElement(e,s({},this.props,{position:d,handleClick:this.target,total:i,children:[u.default.createElement("div",{ref:function(e){return t.beforeNode=e},key:1,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:o?1:2}},u.default.createElement(p.type,s({mountOnEnter:!0,unmountOnExit:!0,appear:this.state.appear,wait:this.props.defaultWait},p.props,{opposite:!0,when:!o,mirror:m,onReveal:o?void 0:this.handleReveal}))),u.default.createElement("div",{key:2,ref:function(e){return t.afterNode=e},style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:o?2:1}},u.default.createElement(f.type,s({mountOnEnter:!0,unmountOnExit:!0,appear:this.state.appear,wait:this.props.defaultWait},f.props,{opposite:!0,when:o,mirror:m,onReveal:o?this.handleReveal:void 0})))]}))}}]),a}(u.default.Component)},e.exports=t.default},rmMi:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("obyI"),o=n.n(r),s=n("WxbS"),l=n.n(s);t.a=function(){return i.a.createElement("section",{className:l.a.contactSection+" bg-primary"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:l.a.social+" d-flex justify-content-center"},o.a.socialLinks.map((function(e){var t=e.icon,n=e.url,a=e.name;return i.a.createElement("a",{key:n,href:n,className:"mx-2",title:a},i.a.createElement("i",{className:"fab "+t}))})))))}},"tP/9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n,a,i,r,o,s,l=e,c=t||function(e){};l.addEventListener("touchstart",(function(e){var t=e.changedTouches[0];n="none",a=t.pageX,i=t.pageY,s=(new Date).getTime()}),{passive:!0}),l.addEventListener("touchend",(function(e){var t=e.changedTouches[0];r=t.pageX-a,o=t.pageY-i,(new Date).getTime()-s<=300&&(Math.abs(r)>=150&&Math.abs(o)<=100?n=r<0?"left":"right":Math.abs(o)>=150&&Math.abs(r)<=100&&(n=o<0?"up":"down")),c(n)}),{passive:!0})},e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-f27bda8c0957483fa8ee.js.map