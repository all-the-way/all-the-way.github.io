(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"6MAG":function(e,t,r){e.exports={container:"membership-module--container--5aoZS",center:"membership-module--center--16ODh",button:"membership-module--button--ihxgX",message:"membership-module--message--2SyiT",form:"membership-module--form--2fJ6F",light:"membership-module--light--a2_Pk"}},Ecih:function(e,t,r){e.exports=r.p+"static/hero-272869b7e11c3ef1c4225f03c59cc7e2.jpg"},HFqa:function(e,t,r){"use strict";var n=r("o0o1"),a=r.n(n);r("ls82");function o(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(u){return void r(u)}c.done?t(l):Promise.resolve(l).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function c(e){o(i,n,a,c,l,"next",e)}function l(e){o(i,n,a,c,l,"throw",e)}c(void 0)}))}}var c=r("q1tI"),l=r.n(c),u=r("JpX0"),s=r("K/LY"),f=r.n(s),h=function(e){var t=e.type,r=e.label,n=e.name,a=e.value,o=e.onChange;return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:f.a.label,htmlFor:n},r),l.a.createElement("input",{type:t,className:f.a.input,id:n,name:n,value:a,onChange:function(e){return o(e)}}))},m=r("U+K5"),p=r.n(m),d=function(e){var t=e.name,r=e.onChange,n=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:p.a.container},n,l.a.createElement("input",{type:"checkbox",name:t,onChange:function(e){return r(e)}}),l.a.createElement("span",{className:p.a.checkmark})))},v=r("6MAG"),g=r.n(v);t.a=function(e){var t=e.membershipRef,r=e.center,n=Object(c.useState)(""),o=n[0],s=n[1],f=Object(c.useState)(""),m=f[0],p=f[1],v=Object(c.useState)(""),y=v[0],b=v[1],w=Object(c.useState)(!1),E=w[0],x=w[1],k=Object(c.useState)(""),N=k[0],L=k[1],O=Object(c.useState)(!1),j=O[0],S=O[1],_={firstName:s,lastName:p,phoneNumber:b},F=function(e){L(""),_[e.target.name](e.target.value)},P=function(){var e=i(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("entry.17082701",o),t.append("entry.1001144049",m),t.append("entry.2090741493",y),e.next=6,fetch("https://docs.google.com/forms/u/6/d/e/1FAIpQLSc0L1No6dkhY5XdPvx28SEY3ZSIVGrqN027FJT72fZRYY6QUg/formResponse",{method:"POST",body:t,mode:"no-cors"});case 6:return e.prev=6,e.next=9,fetch("https://all-the-way-backend.azurewebsites.net/api/leads",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({firstName:o,lastName:m,phoneNumber:y})});case 9:if(e.sent.ok){e.next=12;break}throw new Error;case 12:s(""),p(""),b(""),L("Tack för din anmälan"),S(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(6),console.log("err"),L("Ett fel uppstod. Vänligen försök igen eller kontakta info@allthewaygym.se om problemet kvarstår."),S(!1);case 24:case"end":return e.stop()}}),e,null,[[6,19]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=i(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o&&m&&y){e.next=3;break}return L("Vänligen fyll i alla fält"),e.abrupt("return");case 3:if(E){e.next=6;break}return L("Vänligen acceptera våra villkor"),e.abrupt("return");case 6:return S(!0),e.next=9,P();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:g.a.container+" "+(r?g.a.center:"")+" container",ref:t,id:"medlemskap"},l.a.createElement("div",{className:g.a.form},l.a.createElement("h1",null,"Anmäl dig till en"," ",l.a.createElement("span",{className:g.a.light},"PHP - Personlig Hälsoplan")),l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement(h,{label:"Förnamn",type:"text",value:o,name:"firstName",onChange:F})),l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement(h,{label:"Efternamn",type:"text",name:"lastName",value:m,onChange:F}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-12"},l.a.createElement(h,{label:"Telefonnummer",type:"phone",name:"phoneNumber",value:y,onChange:F}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-12 text-left"},l.a.createElement(d,{name:"acceptTerms",onChange:function(e){x(e.target.checked)},value:E,checked:E},"Jag godkänner att mina personuppgifter hanteras enligt GDPR.")))),l.a.createElement(u.a,{light:!0,text:j?l.a.createElement("i",{className:"fas fa-spinner spinning"}):"Anmäl intresse",onClick:G,disabled:j,className:g.a.button}),N&&l.a.createElement("div",{className:g.a.message},N)))}},"K/LY":function(e,t,r){e.exports={input:"input-module--input--1n0cd",label:"input-module--label--3xZLK"}},"OL/o":function(e,t,r){e.exports=r.p+"static/hero-ab0dd7d81f152a296887ffac7f5bde9a.mp4"},"U+K5":function(e,t,r){e.exports={container:"checkbox-module--container--3CwlY",checkmark:"checkbox-module--checkmark--9wElG"}},ls82:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new k(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var s={};function f(){}function h(){}function m(){}var p={};p[a]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(N([])));v&&v!==t&&r.call(v,a)&&(p=v);var g=m.prototype=f.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=g.constructor=m,m.constructor=h,h.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(b.prototype),b.prototype[o]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),c(g,i,"Generator"),g[a]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")}}]);
//# sourceMappingURL=7a355955a7a64319b719ac1b6574b4139f4bb037-7a5210db7eb5fbe2225a.js.map