/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(R,W,u){'use strict';function S(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.20/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Ta(b){if(null==b||Ua(b))return!1;var a="length"in Object(b)&&b.length;
    return b.nodeType===qa&&a?!0:x(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(z(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(H(b)||Ta(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function lc(b){return function(a,c){b(c,a)}}function Fd(){return++rb}function mc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}mc(b,a);return b}function aa(b){return parseInt(b,10)}function Ob(b,a){return w(Object.create(b),a)}function A(){}function ra(b){return b}function ea(b){return function(){return b}}
    function D(b){return"undefined"===typeof b}function y(b){return"undefined"!==typeof b}function L(b){return null!==b&&"object"===typeof b}function x(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function ha(b){return"[object Date]"===Ca.call(b)}function z(b){return"function"===typeof b}function Va(b){return"[object RegExp]"===Ca.call(b)}function Ua(b){return b&&b.window===b}function Wa(b){return b&&b.$evalAsync&&b.$watch}function Xa(b){return"boolean"===typeof b}function nc(b){return!(!b||
    !(b.nodeName||b.prop&&b.attr&&b.find))}function Gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function wa(b){return K(b.nodeName||b[0]&&b[0].nodeName)}function Ya(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Ua(b)||Wa(b))throw Ja("cpws");if(a){if(b===a)throw Ja("cpi");c=c||[];d=d||[];if(L(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),L(b[f])&&(c.push(b[f]),
        d.push(e)),a.push(e);else{var g=a.$$hashKey;H(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),L(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);mc(a,g)}}else if(a=b)H(b)?a=Da(b,[],c,d):ha(b)?a=new Date(b.getTime()):Va(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):L(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function sa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(L(b))for(c in a=
        a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ia(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ia(b[d],a[d]))return!1;return!0}}else{if(ha(b))return ha(a)?ia(b.getTime(),a.getTime()):!1;if(Va(b))return Va(a)?b.toString()==a.toString():!1;if(Wa(b)||Wa(a)||Ua(b)||Ua(a)||H(a)||ha(a)||Va(a))return!1;c={};for(d in b)if("$"!==
        d.charAt(0)&&!z(b[d])){if(!ia(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!z(a[d]))return!1;return!0}return!1}function Za(b,a,c){return b.concat($a.call(a,c))}function oc(b,a){var c=2<arguments.length?$a.call(arguments,2):[];return!z(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Za(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&
    "$"===b.charAt(0)&&"$"===b.charAt(1)?c=u:Ua(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Wa(a)&&(c="$SCOPE");return c}function ab(b,a){if("undefined"===typeof b)return u;Y(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function pc(b){return x(b)?JSON.parse(b):b}function xa(b){b=B(b).clone();try{b.empty()}catch(a){}var c=B("<div>").append(b).html();try{return b[0].nodeType===bb?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function qc(b){try{return decodeURIComponent(b)}catch(a){}}
    function rc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=qc(c[0]),y(d)&&(b=y(c[1])?qc(c[1]):!0,sc.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Pb(b){var a=[];r(b,function(b,d){H(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function sb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,
        "@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=tb.length;b=B(b);for(d=0;d<e;++d)if(c=tb[d]+a,x(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};r(tb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(tb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),
        a(c,d?[d]:[],e))}function tc(b,a,c){L(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=B(b);if(b.injector()){var d=b[0]===W?"document":xa(b);throw Ja("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=cb(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
        d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;R&&e.test(R.name)&&(c.debugInfoEnabled=!0,R.name=R.name.replace(e,""));if(R&&!f.test(R.name))return d();R.name=R.name.replace(f,"");ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});return d()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function Kd(){R.name="NG_ENABLE_DEBUG_INFO!"+R.name;R.location.reload()}function Ld(b){b=ca.element(b).injector();if(!b)throw Ja("test");return b.get("$$testability")}
    function uc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}function Nd(){var b;vc||((ta=R.jQuery)&&ta.fn.on?(B=ta,w(ta.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ta.cleanData,ta.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ta._data(e,"events"))&&c.$destroy&&ta(e).triggerHandler("$destroy");b(a)}):B=T,ca.element=B,vc=!0)}function Rb(b,a,c){if(!b)throw Ja("areq",
        a||"?",c||"required");return b}function La(b,a,c){c&&H(b)&&(b=b[b.length-1]);Rb(z(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ma(b,a){if("hasOwnProperty"===b)throw Ja("badname",a);}function wc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&z(b)?oc(e,b):b}function ub(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return B(c)}function ja(){return Object.create(null)}
    function Od(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=S("$injector"),d=S("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||S;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return t}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),t={_invokeQueue:b,_configBlocks:d,
        _runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return t})}})}function Pd(b){w(b,{bootstrap:tc,copy:Da,extend:w,equals:ia,
        element:B,forEach:r,injector:cb,noop:A,bind:oc,toJson:ab,fromJson:pc,identity:ra,isUndefined:D,isDefined:y,isString:x,isFunction:z,isObject:L,isNumber:Y,isElement:nc,isArray:H,version:Qd,isDate:ha,lowercase:K,uppercase:vb,callbacks:{counter:0},getTestability:Ld,$$minErr:S,$$csp:db,reloadWithDebugInfo:Kd});eb=Od(R);try{eb("ngLocale")}catch(a){eb("ngLocale",[]).provider("$locale",Rd)}eb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",xc).directive({a:Td,
        input:yc,textarea:yc,form:Ud,script:Vd,select:Wd,style:Xd,option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:zc,ngPattern:zc,required:Ac,ngRequired:Ac,minlength:Bc,ngMinlength:Bc,maxlength:Cc,ngMaxlength:Cc,
        ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(wb).directive(Dc);a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Ec,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function fb(b){return b.replace(cf,
        function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}function Fc(b){b=b.nodeType;return b===qa||!b||9===b}function Gc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ka[d]||ka._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Za(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
        return e}function T(b){if(b instanceof T)return b;var a;x(b)&&(b=N(b),a=!0);if(!(this instanceof T)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new T(b)}if(a){a=W;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Gc(b,a))?c.childNodes:[]}Hc(this,b)}function Ub(b){return b.cloneNode(!0)}function xb(b,a){a||yb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)yb(c[d])}function Ic(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=zb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),
        function(a){if(y(c)){var d=e[a];Ya(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function yb(b,a){var c=b.ng339,d=c&&Ab[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Ic(b)),delete Ab[c],b.ng339=u))}function zb(b,a){var c=b.ng339,c=c&&Ab[c];a&&!c&&(b.ng339=c=++hf,c=Ab[c]={events:{},data:{},handle:u});return c}function Vb(b,a,c){if(Fc(b)){var d=y(c),e=!d&&a&&!L(a),
        f=!a;b=(b=zb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];w(b,a)}}}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",N((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+N(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
        r(a.split(" "),function(a){a=N(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",N(c))}}function Hc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Jc(b,a){return Eb(b,"$"+(a||"ngController")+"Controller")}function Eb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=B.data(b,a[d]))!==u)return c;b=b.parentNode||
        11===b.nodeType&&b.host}}function Kc(b){for(xb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Lc(b,a){a||xb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||R;if("complete"===a.document.readyState)a.setTimeout(b);else B(a).on("load",b)}function Mc(b,a){var c=Fb[a.toLowerCase()];return c&&Nc[wa(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Oc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
        a[e||c.type],g=f?f.length:0;if(g){if(D(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=sa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return w(T,{hasClass:function(b,a){b.attr&&(b=b[0]);
        return Bb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Db(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)}})}}function Na(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function gb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function mf(b){return(b=b.toString().replace(Pc,"").match(Qc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
        " ")+")":"fn"}function cb(b,a){function c(a){return function(b,c){if(L(b))r(b,lc(a));else return a(b,c)}}function d(a,b){Ma(a,"service");if(z(b)||H(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this);if(D(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,
        e[2])}}if(!n.get(a)){n.put(a,!0);try{x(a)?(c=eb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(q.invoke(a)):H(a)?b.push(q.invoke(a)):La(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Fa("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
        b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],l=cb.$$annotate(b,a,g),h,q,p;q=0;for(h=l.length;q<h;q++){p=l[q];if("string"!==typeof p)throw Fa("itkn",p);k.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}H(b)&&(b=b[h]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((H(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return L(a)||z(a)?a:d},get:d,annotate:cb.$$annotate,has:function(a){return p.hasOwnProperty(a+
            "Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new gb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ea(b),!1)}),constant:c(function(a,b){Ma(a,"constant");p[a]=b;t[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ca.isString(b)&&k.push(b);
        throw Fa("unpr",k.join(" <- "));}),t={},s=t.$injector=h(t,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,u,a)});r(g(b),function(a){s.invoke(a||A)});return s}function Be(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():nc(c)?(c=c[0],c="fixed"!==
    a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
        function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,$a.call(arguments,1))}finally{if(m--,0===m)for(;C.length;)try{C.pop()()}catch(b){c.error(b)}}}function f(a,b){(function da(){r($,function(a){a()});I=b(da,a)})()}function g(){h();l()}function h(){a:{try{M=t.state;break a}catch(a){}M=void 0}M=D(M)?null:M;ia(M,P)&&(M=P);P=M}function l(){if(G!==n.url()||E!==M)G=n.url(),E=M,r(X,function(a){a(n.url(),M)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}
        var n=this,p=a[0],q=b.location,t=b.history,s=b.setTimeout,F=b.clearTimeout,v={};n.isMock=!1;var m=0,C=[];n.$$completeOutstandingRequest=e;n.$$incOutstandingRequestCount=function(){m++};n.notifyWhenNoOutstandingRequests=function(a){r($,function(a){a()});0===m?a():C.push(a)};var $=[],I;n.addPollFn=function(a){D(I)&&f(100,s);$.push(a);return a};var M,E,G=q.href,O=a.find("base"),Q=null;h();E=M;n.url=function(a,c,e){D(e)&&(e=null);q!==b.location&&(q=b.location);t!==b.history&&(t=b.history);if(a){var f=
            E===e;if(G===a&&(!d.history||f))return n;var g=G&&Ga(G)===Ga(a);G=a;E=e;if(!d.history||g&&f){if(!g||Q)Q=a;c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e),c.hash=a):q.href=a}else t[c?"replaceState":"pushState"](e,"",a),h(),E=M;return n}return Q||q.href.replace(/%27/g,"'")};n.state=function(){return M};var X=[],ba=!1,P=null;n.onUrlChange=function(a){if(!ba){if(d.history)B(b).on("popstate",g);B(b).on("hashchange",g);ba=!0}X.push(a);return a};n.$$checkUrlChange=l;n.baseHref=function(){var a=
            O.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var fa={},y="",la=n.baseHref();n.cookies=function(a,b){var d,e,f,g;if(a)b===u?p.cookie=encodeURIComponent(a)+"=;path="+la+";expires=Thu, 01 Jan 1970 00:00:00 GMT":x(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+la).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),fa={},f=0;f<d.length;f++)e=
            d[f],g=e.indexOf("="),0<g&&(a=k(e.substring(0,g)),fa[a]===u&&(fa[a]=k(e.substring(g+1))));return fa}};n.defer=function(a,b){var c;m++;c=s(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};n.defer.cancel=function(a){return v[a]?(delete v[a],F(a),e(A),!0):!1}}function De(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw S("$cacheFactory")("iid",b);var g=0,h=w({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!D(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete n[a]}delete l[a];
        g--},removeAll:function(){l={};g=0;n={};p=q=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function xc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw ma("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===
    f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){Ma(a,"directive");x(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);z(h)?h={compile:ea(h)}:!h.compile&&h.link&&
    (h.compile=ea(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";L(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(l){e(l)}});return f}])),d[a].push(e)):r(a,lc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
        var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,F,v,m,C,$,I,M){function E(a,b){try{a.addClass(b)}catch(c){}}function G(a,b,c,d,e){a instanceof B||(a=B(a));r(a,function(b,c){b.nodeType==bb&&b.nodeValue.match(/\S+/)&&(a[c]=B(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);G.$$addScopeClass(a);
            var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==wa(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?B(Xb(g,B("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);G.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function O(a,b,c,d,e,f){function g(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               c,d,e){var f,l,k,q,p,s,t;if(m)for(t=Array(c.length),q=0;q<h.length;q+=3)f=h[q],t[f]=c[f];else t=c;q=0;for(p=h.length;q<p;)l=t[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(k=a.$new(),G.$$addScopeInfo(B(l),k)):k=a,s=c.transcludeOnThisElement?Q(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?Q(a,b):null,c(f,k,l,d,s)):f&&f(a,l.childNodes,u,e)}for(var h=[],l,k,q,p,m,s=0;s<a.length;s++){l=new Yb;k=X(a[s],[],l,0===s?d:u,e);(f=k.length?fa(k,a[s],l,b,c,null,[],[],f):null)&&
        f.scope&&G.$$addScopeClass(l.$$element);l=f&&f.terminal||!(q=a[s].childNodes)||!q.length?null:O(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(s,f,l),p=!0,m=m||f;f=null}return p?g:null}function Q(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function X(a,b,c,d,g){var h=c.$attr,l;switch(a.nodeType){case qa:la(b,ya(wa(a)),"E",d,g);for(var k,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            q,p,m=a.attributes,s=0,t=m&&m.length;s<t;s++){var M=!1,I=!1;k=m[s];l=k.name;q=N(k.value);k=ya(l);if(p=U.test(k))l=l.replace(Rc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var F=k.replace(/(Start|End)$/,"");D(F)&&k===F+"Start"&&(M=l,I=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=ya(l.toLowerCase());h[k]=l;if(p||!c.hasOwnProperty(k))c[k]=q,Mc(a,k)&&(c[k]=!0);Pa(a,b,q,k,p);la(b,k,"A",d,g,M,I)}a=a.className;L(a)&&(a=a.animVal);if(x(a)&&""!==a)for(;l=f.exec(a);)k=ya(l[2]),
        la(b,k,"C",d,g)&&(c[k]=N(l[3])),a=a.substr(l.index+l[0].length);break;case bb:za(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))k=ya(l[1]),la(b,k,"M",d,g)&&(c[k]=N(l[2]))}catch(v){}}b.sort(da);return b}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ma("uterdir",b,c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function P(a,b,c){return function(d,e,f,g,h){e=ba(e[0],
            b,c);return a(d,e,f,g,h)}}function fa(a,d,e,f,g,l,k,p,m){function s(a,b,c,d){if(a){c&&(a=P(a,c,d));a.require=J.require;a.directiveName=da;if(Q===J||J.$$isolateScope)a=Y(a,{isolateScope:!0});k.push(a)}if(b){c&&(b=P(b,c,d));b.require=J.require;b.directiveName=da;if(Q===J||J.$$isolateScope)b=Y(b,{isolateScope:!0});p.push(b)}}function M(a,b,c,d){var e,f="data",g=!1,l=c,k;if(x(b)){k=b.match(h);b=b.substring(k[0].length);k[3]&&(k[1]?k[3]=null:k[1]=k[3]);"^"===k[1]?f="inheritedData":"^^"===k[1]&&(f="inheritedData",
            l=c.parent());"?"===k[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||l[f]("$"+b+"Controller");if(!e&&!g)throw ma("ctreq",b,a);return e||null}H(b)&&(e=[],r(b,function(b){e.push(M(a,b,c,d))}));return e}function I(a,c,f,g,l){function h(a,b,c){var d;Wa(a)||(c=b,b=a,a=u);A&&(d=C);c||(c=A?X.parent():X);return l(a,b,d,c,Wb)}var m,s,t,E,C,ib,X,P;d===f?(P=e,X=e.$$element):(X=B(f),P=new Yb(X,e));Q&&(E=c.$new(!0));l&&(ib=h,ib.$$boundTransclude=l);O&&($={},C={},r(O,function(a){var b={$scope:a===
        Q||a.$$isolateScope?E:c,$element:X,$attrs:P,$transclude:ib};t=a.controller;"@"==t&&(t=P[a.name]);b=v(t,b,!0,a.controllerAs);C[a.name]=b;A||X.data("$"+a.name+"Controller",b.instance);$[a.name]=b}));if(Q){G.$$addScopeInfo(X,E,!0,!(na&&(na===Q||na===Q.$$originalDirective)));G.$$addScopeClass(X,!0);g=$&&$[Q.name];var ba=E;g&&g.identifier&&!0===Q.bindToController&&(ba=g.instance);r(E.$$isolateBindings=Q.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,l,h,k;switch(a.mode){case "@":P.$observe(e,
            function(a){ba[d]=a});P.$$observers[e].$$scope=c;P[e]&&(ba[d]=b(P[e])(c));break;case "=":if(f&&!P[e])break;l=F(P[e]);k=l.literal?ia:function(a,b){return a===b||a!==a&&b!==b};h=l.assign||function(){g=ba[d]=l(c);throw ma("nonassign",P[e],Q.name);};g=ba[d]=l(c);f=function(a){k(a,ba[d])||(k(a,g)?h(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(P[e],f):c.$watch(F(P[e],f),null,l.literal);E.$on("$destroy",f);break;case "&":l=F(P[e]),ba[d]=function(a){return l(c,a)}}})}$&&
        (r($,function(a){a()}),$=null);g=0;for(m=k.length;g<m;g++)s=k[g],Z(s,s.isolateScope?E:c,X,P,s.require&&M(s.directiveName,s.require,X,C),ib);var Wb=c;Q&&(Q.template||null===Q.templateUrl)&&(Wb=E);a&&a(Wb,f.childNodes,u,l);for(g=p.length-1;0<=g;g--)s=p[g],Z(s,s.isolateScope?E:c,X,P,s.require&&M(s.directiveName,s.require,X,C),ib)}m=m||{};for(var E=-Number.MAX_VALUE,C,O=m.controllerDirectives,$,Q=m.newIsolateScopeDirective,na=m.templateDirective,fa=m.nonTlbTranscludeDirective,la=!1,D=!1,A=m.hasElementTranscludeDirective,
                                                                                                                                                                                                                                                                                                                                                                 w=e.$$element=B(d),J,da,V,hb=f,za,K=0,R=a.length;K<R;K++){J=a[K];var Pa=J.$$start,U=J.$$end;Pa&&(w=ba(d,Pa,U));V=u;if(E>J.priority)break;if(V=J.scope)J.templateUrl||(L(V)?(Oa("new/isolated scope",Q||C,J,w),Q=J):Oa("new/isolated scope",Q,J,w)),C=C||J;da=J.name;!J.templateUrl&&J.controller&&(V=J.controller,O=O||{},Oa("'"+da+"' controller",O[da],J,w),O[da]=J);if(V=J.transclude)la=!0,J.$$tlb||(Oa("transclusion",fa,J,w),fa=J),"element"==V?(A=!0,E=J.priority,V=w,w=e.$$element=B(W.createComment(" "+da+": "+
            e[da]+" ")),d=w[0],T(g,$a.call(V,0),d),hb=G(V,f,E,l&&l.name,{nonTlbTranscludeDirective:fa})):(V=B(Ub(d)).contents(),w.empty(),hb=G(V,f));if(J.template)if(D=!0,Oa("template",na,J,w),na=J,V=z(J.template)?J.template(w,e):J.template,V=Sc(V),J.replace){l=J;V=Sb.test(V)?Tc(Xb(J.templateNamespace,N(V))):[];d=V[0];if(1!=V.length||d.nodeType!==qa)throw ma("tplrt",da,"");T(g,w,d);R={$attr:{}};V=X(d,[],R);var aa=a.splice(K+1,a.length-(K+1));Q&&y(V);a=a.concat(V).concat(aa);S(e,R);R=a.length}else w.html(V);if(J.templateUrl)D=
            !0,Oa("template",na,J,w),na=J,J.replace&&(l=J),I=of(a.splice(K,a.length-K),w,e,g,la&&hb,k,p,{controllerDirectives:O,newIsolateScopeDirective:Q,templateDirective:na,nonTlbTranscludeDirective:fa}),R=a.length;else if(J.compile)try{za=J.compile(w,e,hb),z(za)?s(null,za,Pa,U):za&&s(za.pre,za.post,Pa,U)}catch(pf){c(pf,xa(w))}J.terminal&&(I.terminal=!0,E=Math.max(E,J.priority))}I.scope=C&&!0===C.scope;I.transcludeOnThisElement=la;I.elementTranscludeOnThisElement=A;I.templateOnThisElement=D;I.transclude=hb;
            m.hasElementTranscludeDirective=A;return I}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function la(b,e,f,g,l,h,k){if(e===l)return null;l=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var m=0,s=e.length;m<s;m++)try{q=e[m],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(h&&(q=Ob(q,{$$start:h,$$end:k})),b.push(q),l=q)}catch(I){c(I)}}return l}function D(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;
            return!1}function S(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(E(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,l){var h=[],k,q,p=b[0],m=a.shift(),t=Ob(m,{templateUrl:null,transclude:null,
            replace:null,$$originalDirective:m}),I=z(m.templateUrl)?m.templateUrl(b,c):m.templateUrl,M=m.templateNamespace;b.empty();s(I).then(function(s){var F,v;s=Sc(s);if(m.replace){s=Sb.test(s)?Tc(Xb(M,N(s))):[];F=s[0];if(1!=s.length||F.nodeType!==qa)throw ma("tplrt",m.name,I);s={$attr:{}};T(d,b,F);var C=X(F,[],s);L(m.scope)&&y(C);a=C.concat(a);S(c,s)}else F=p,b.html(s);a.unshift(t);k=fa(a,F,c,e,b,m,f,g,l);r(d,function(a,c){a==F&&(d[c]=b[0])});for(q=O(b[0].childNodes,e);h.length;){s=h.shift();v=h.shift();
            var G=h.shift(),P=h.shift(),C=b[0];if(!s.$$destroyed){if(v!==p){var $=v.className;l.hasElementTranscludeDirective&&m.replace||(C=Ub(F));T(G,B(v),C);E(B(C),$)}v=k.transcludeOnThisElement?Q(s,k.transclude,P):P;k(q,s,C,d,v)}}h=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(h?h.push(b,c,d,a):(k.transcludeOnThisElement&&(a=Q(b,k.transclude,e)),k(q,b,c,d,a)))}}function da(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Oa(a,b,c,d){if(b)throw ma("multidir",
            b.name,c.name,a,xa(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&G.$$addBindingClass(a);return function(a,c){var e=c.parent();b||G.$$addBindingClass(e);G.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==
            b)return $.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return $.RESOURCE_URL}function Pa(a,c,d,e,f){var h=R(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===wa(a))throw ma("selmulti",xa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw ma("nodomevents");var p=g[e];p!==d&&(k=p&&b(p,!0,h,f),d=p);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||
        a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,l;if(a)for(g=0,l=a.length;g<l;g++)if(a[g]==d){a[g++]=c;l=g+e-1;for(var h=a.length;g<h;g++,l++)l<h?a[g]=a[l]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);B(c).data(B(d).data());ta?(Qb=!0,ta.cleanData([d])):delete B.cache[d[B.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],B(f).remove(),
            a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return w(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(l){c(l,xa(d))}}var Yb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Yb.prototype={$normalize:ya,$addClass:function(a){a&&0<a.length&&I.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&I.removeClass(this.$$element,a)},$updateClass:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          b){var c=Uc(a,b);c&&c.length&&I.addClass(this.$$element,c);(c=Uc(b,a))&&c.length&&I.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Mc(f,a),l=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):l&&(this[l]=b,f=l);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=uc(a,"-"));g=wa(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",l=N(b),h=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,h=/\s/.test(l)?
            h:/(,)/,l=l.split(h),h=Math.floor(l.length/2),k=0;k<h;k++)var q=2*k,g=g+M(N(l[q]),!0),g=g+(" "+N(l[q+1]));l=N(l[2*k]).split(/\s/);g+=M(N(l[0]),!0);2===l.length&&(g+=" "+N(l[1]));this[a]=b=g}!1!==d&&(null===b||b===u?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ja()),e=d[a]||(d[a]=[]);e.push(b);m.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});
            return function(){Ya(e,b)}}};var V=b.startSymbol(),na=b.endSymbol(),Sc="{{"==V||"}}"==na?ra:function(a){return a.replace(/\{\{/g,V).replace(/}}/g,na)},U=/^ngAttr[A-Z]/;G.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;G.$$addBindingClass=k?function(a){E(a,"ng-binding")}:A;G.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;G.$$addScopeClass=k?function(a,b){E(a,b?"ng-isolate-scope":
            "ng-scope")}:A;return G}]}function ya(b){return fb(b.replace(Rc,""))}function Uc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Tc(b){b=B(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&qf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){Ma(a,"controller");L(a)?w(b,a):b[a]=c};this.allowGlobals=function(){a=
        !0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!L(a.$scope))throw S("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var n,p,q;l=!0===l;k&&x(k)&&(q=k);if(x(g)){k=g.match(c);if(!k)throw rf("ctrlfmt",g);p=k[1];q=q||k[3];g=b.hasOwnProperty(p)?b[p]:wc(h.$scope,p,!0)||(a?wc(e,p,!0):u);La(g,p,!0)}if(l)return l=(H(g)?g[g.length-1]:g).prototype,n=Object.create(l||null),q&&f(h,q,n,p||g.name),w(function(){d.invoke(g,n,h,p);return n},{instance:n,identifier:q});
        n=d.instantiate(g,h,p);q&&f(h,q,n,p||g.name);return n}}]}function Ge(){this.$get=["$window",function(b){return B(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b,a){if(x(b)){var c=b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Vc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=pc(c))}}return b}function Wc(b){var a=ja(),c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=K(N(b.substr(0,
        e)));d=N(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Xc(b){var a=L(b)?b:u;return function(c){a||(a=Wc(b));return c?(c=a[K(c)],void 0===c&&(c=null),c):a}}function Yc(b,a,c,d){if(z(d))return d(b,a,c);r(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return L(a)&&"[object File]"!==Ca.call(a)&&"[object Blob]"!==Ca.call(a)&&"[object FormData]"!==Ca.call(a)?ab(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
        post:sa($b),put:sa($b),patch:sa($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=w({},a);b.data=a.data?Yc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a){var b,c={};r(a,function(a,d){z(a)?(b=
        a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ca.isObject(a))throw S("$http")("badreq",a);var e=w({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=w({},a.headers),f,g,c=w({},c.common,c[K(a.method)]);a:for(f in c){a=K(f);for(g in e)if(K(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=vb(e.method);var f=[function(a){var d=a.headers,e=Yc(a.data,Xc(d),u,a.transformRequest);D(e)&&r(d,function(a,b){"content-type"===K(b)&&
    delete d[b]});D(a.withCredentials)&&!D(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},u],g=h.when(e);for(r(t,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var l=f.shift(),g=g.then(a,l)}g.success=function(a){La(a,"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){La(a,"fn");g.then(null,function(b){a(b.data,
        b.status,b.headers,e)});return g};return g}function n(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}E&&(200<=b&&300>b?E.put(Q,[b,c,Wc(d),e]):E.remove(Q));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?I.resolve:I.reject)({data:a,status:b,headers:Xc(d),config:c,statusText:e})}function n(a){m(a.data,a.status,sa(a.headers()),a.statusText)}function t(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var I=h.defer(),M=I.promise,
        E,G,O=c.headers,Q=p(c.url,c.params);k.pendingRequests.push(c);M.then(t,t);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(E=L(c.cache)?c.cache:L(b.cache)?b.cache:q);E&&(G=E.get(Q),y(G)?G&&z(G.then)?G.then(n,n):H(G)?m(G[1],G[0],sa(G[2]),G[3]):m(G,200,{},"OK"):E.put(Q,M));D(G)&&((G=Zc(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:u)&&(O[c.xsrfHeaderName||b.xsrfHeaderName]=G),d(c.method,Q,f,l,O,c.timeout,c.withCredentials,c.responseType));return M}function p(a,b){if(!b)return a;
        var c=[];Ed(b,function(a,b){null===a||D(a)||(H(a)||(a=[a]),r(a,function(a){L(a)&&(a=ha(a)?a.toISOString():ab(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),t=[];r(c,function(a){t.unshift(x(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){r(arguments,function(a){k[a]=function(b,c){return k(w(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){k[a]=function(b,c,d){return k(w(d||
        {},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new R.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,t="unknown";
        a&&("load"!==a.type||d[b].called||(a={type:"error"}),t=a.type,g="error"===a.type?404:200);c&&c(g,t)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,p,q,t){function s(){m&&m();C&&C.abort()}function F(a,d,e,f,g){I!==u&&c.cancel(I);m=C=null;a(d,e,f,g);b.$$completeOutstandingRequest(A)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==K(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=a;d[v].called=!0};
        var m=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){F(k,a,d[v].data,"",b);d[v]=A})}else{var C=a();C.open(e,h,!0);r(n,function(a,b){y(a)&&C.setRequestHeader(b,a)});C.onload=function(){var a=C.statusText||"",b="response"in C?C.response:C.responseText,c=1223===C.status?204:C.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);F(k,c,b,C.getAllResponseHeaders(),a)};e=function(){F(k,-1,null,null,"")};C.onerror=e;C.onabort=e;q&&(C.withCredentials=!0);if(t)try{C.responseType=t}catch($){if("json"!==
        t)throw $;}C.send(l||null)}if(0<p)var I=c(s,p);else p&&z(p.then)&&p.then(s)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,t,s){function F(c){return c.replace(k,b).replace(n,a)}function v(a){try{var b=a;a=t?e.getTrusted(t,b):e.valueOf(b);var c;if(s&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;
        case "number":a=""+a;break;default:a=ab(a)}c=a}return c}catch(g){c=ac("interr",f,g.toString()),d(c)}}s=!!s;for(var m,C,r=0,I=[],M=[],E=f.length,G=[],O=[];r<E;)if(-1!=(m=f.indexOf(b,r))&&-1!=(C=f.indexOf(a,m+h)))r!==m&&G.push(F(f.substring(r,m))),r=f.substring(m+h,C),I.push(r),M.push(c(r,v)),r=C+l,O.push(G.length),G.push("");else{r!==E&&G.push(F(f.substring(r)));break}if(t&&1<G.length)throw ac("noconcat",f);if(!g||I.length){var Q=function(a){for(var b=0,c=I.length;b<c;b++){if(s&&D(a[b]))return;G[O[b]]=
        a[b]}return G.join("")};return w(function(a){var b=0,c=I.length,e=Array(c);try{for(;b<c;b++)e[b]=M[b](a);return Q(e)}catch(g){a=ac("interr",f,g.toString()),d(a)}},{exp:f,expressions:I,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(M,function(c,e){var f=Q(c);z(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Je(){this.$get=
        ["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=a.setInterval,p=a.clearInterval,q=0,t=y(k)&&!k,s=(t?d:c).defer(),F=s.promise;l=y(l)?l:0;F.then(null,null,e);F.$$intervalId=n(function(){s.notify(q++);0<l&&q>=l&&(s.resolve(q),p(F.$$intervalId),delete f[F.$$intervalId]);t||b.$apply()},h);f[F.$$intervalId]=s;return F}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):
            !1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);
        return b.join("/")}function $c(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||xf[c.protocol]||null}function ad(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=rc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ua(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");
        return-1==a?b:b.substr(0,a)}function Gb(b){return b.replace(/(#.+)|#$/,"$1")}function cc(b,a,c){this.$$html5=!0;c=c||"";$c(b,this);this.$$parse=function(b){var c=ua(a,b);if(!x(c))throw Hb("ipthprfx",b,a);ad(c,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var b=Pb(this.$$search),c=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=bc(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=a+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
        !0;var f,g;(f=ua(b,d))!==u?(g=f,g=(f=ua(c,f))!==u?a+(ua("/",f)||f):b+g):(f=ua(a,d))!==u?g=a+f:a==d+"/"&&(g=a);g&&this.$$parse(g);return!!g}}function dc(b,a,c){$c(b,this);this.$$parse=function(d){var e=ua(b,d)||ua(a,d),f;D(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",D(e)&&(b=d,this.replace())):(f=ua(c,e),D(f)&&(f=e));ad(f,this);d=this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(d=(f=g.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var a=
        Pb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+(this.$$url?c+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function bd(b,a,c){this.$$html5=!0;dc.apply(this,arguments);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=ua(a,d))?f=b+c+g:a===d+"/"&&(f=a);f&&this.$$parse(f);return!!f};this.$$compose=function(){var a=Pb(this.$$search),
        e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+c+this.$$url}}function Ib(b){return function(){return this[b]}}function cd(b,a){return function(c){if(D(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Xa(b)?(a.enabled=b,this):L(b)?(Xa(b.enabled)&&(a.enabled=b.enabled),Xa(b.requireBase)&&
    (a.requireBase=b.requireBase),Xa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),q;if(a.enabled){if(!n&&a.requireBase)throw Hb("nobase");q=p.substring(0,p.indexOf("/",
            p.indexOf("//")+2))+(n||"/");n=e.history?cc:bd}else q=Ga(p),n=dc;var t=q.substr(0,Ga(q).lastIndexOf("/")+1);k=new n(q,t,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var s=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=B(b.target);"a"!==wa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var l=e.prop("href"),h=e.attr("href")||e.attr("xlink:href");L(l)&&"[object SVGAnimatedString]"===l.toString()&&(l=
        Aa(l.animVal).href);s.test(l)||!l||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(l,h)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Gb(k.absUrl())!=Gb(p)&&d.url(k.absUrl(),!0);var F=!0;d.onUrlChange(function(a,b){D(ua(t,a))?g.location.href=a:(c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,
        !1,e)):(F=!1,l(d,e)))}),c.$$phase||c.$digest())});c.$watch(function(){var a=Gb(d.url()),b=Gb(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(F||q)F=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=
        a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
        debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function va(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ga("isecfld",a);return b}function dd(b,a){b+="";if(!x(b))throw ga("iseccst",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw ga("isecfn",a);if(b.window===b)throw ga("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ga("isecdom",a);if(b===Object)throw ga("isecobj",
        a);}return b}function ec(b){return b.constant}function jb(b,a,c,d,e){oa(b,e);oa(a,e);c=c.split(".");for(var f,g=0;1<c.length;g++){f=va(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=oa(h,e)}f=va(c.shift(),e);oa(b[f],e);return b[f]=d}function Qa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){va(b,f);va(a,f);va(c,f);va(d,f);va(e,f);var h=function(a){return oa(a,f)},l=g||Qa(b)?h:ra,k=g||Qa(a)?h:ra,n=g||Qa(c)?h:ra,p=g||Qa(d)?h:ra,q=g||Qa(e)?h:ra;return function(f,g){var h=g&&g.hasOwnProperty(b)?
        g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return u;h=k(h[a]);if(!c)return h;if(null==h)return u;h=n(h[c]);if(!d)return h;if(null==h)return u;h=p(h[d]);return e?null==h?u:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,oa,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=u,a=f;while(e<
    h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;r(g,function(a,b){va(a,c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Qa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=ea(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return jb(a,d,b,c,b)};return e[b]=f}function fc(b){return z(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ja(),
        a=ja();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,
            [])),l;if(1===e.length){var h=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,h)||(l=d(a),h=b&&fc(b));return l},b,c)}for(var k=[],q=0,p=e.length;q<p;q++)k[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var h=e[c](a);if(b||(b=!g(h,k[c])))k[c]=h&&fc(h)}b&&(l=d(a));return l},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=
        !0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function n(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){z(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==
    h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=[a]);return c}var q={csp:d.csp,expensiveChecks:!1},t={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var m,r,u;switch(typeof d){case "string":u=d=d.trim();var I=g?a:b;m=I[u];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(r=!0,d=d.substring(2)),g=g?t:q,m=new gc(g),m=(new kb(m,c,g)).parse(d),m.constant?m.$$watchDelegate=n:r?(m=e(m),m.$$watchDelegate=m.literal?k:l):m.inputs&&(m.$$watchDelegate=h),I[u]=m);return p(m,f);
        case "function":return p(d,f);default:return p(A,f)}}}]}function Qe(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
    c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=u;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{z(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(l){d.reject(l),a(l)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=S("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
        [];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(L(b)||z(b))d=b&&b.then;z(d)?(this.promise.$$state.status=
        -1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(z(b)?
        b(c):c)}catch(l){a(l)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return l(e,!1)}return d&&z(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function t(a){if(!z(a))throw h("norslvr",a);if(!(this instanceof t))return new t(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
        p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=0;a<n.length;a++){var b=n[a];b&&(n[a]=null,b())}k=n.length=0}function d(a){var b=
        n.length;k++;n.push(a);0===b&&(l=h(c));return function(){0<=b&&(b=n[b]=null,0===--k&&l&&(l(),l=null,n.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,n=[];return d}]}function Pe(){function b(a){function b(){this.$$watchers=this.$$nextSibling=
        this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=++rb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=S("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++rb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=
        null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function p(a){if(v.$$phase)throw c("inprog",v.$$phase);v.$$phase=a}function q(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function t(){}function s(){for(;u.length;)try{u.shift()()}catch(a){g(a)}e=null}function F(){null===e&&(e=l.defer(function(){v.$apply(s)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?
        (d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c){var e=h(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e);var f=this.$$watchers,g={fn:b,last:t,get:e,exp:a,eq:!!c};d=null;z(b)||(g.fn=A);f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ya(f,
        g);d=null}},$watchGroup:function(a,b){function c(){l=!1;h?(h=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,l=!1,h=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var h=g.$watch(a,function(a,f){e[b]=a;d[b]=f;l||(l=!0,g.$evalAsync(c))});f.push(h)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=
        a;var b,d,g,l;if(!D(e)){if(L(e))if(Ta(e))for(f!==p&&(f=p,t=f.length=0,k++),a=e.length,t!==a&&(k++,f.length=t=a),b=0;b<a;b++)l=f[b],g=e[b],d=l!==l&&g!==g,d||l===g||(k++,f[b]=g);else{f!==n&&(f=n={},t=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],l=f[b],b in f?(d=l!==l&&g!==g,d||l===g||(k++,f[b]=g)):(t++,f[b]=g,k++));if(t>a)for(b in k++,f)e.hasOwnProperty(b)||(t--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<b.length,k=0,q=h(a,c),p=[],n={},m=!0,t=0;return this.$watch(q,
        function(){m?(m=!1,b(e,e,d)):b(e,g,d);if(l)if(L(e))if(Ta(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)sc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,q,n,r=a,F,P=[],u,y;p("$digest");l.$$checkUrlChange();this===v&&null!==e&&(l.defer.cancel(e),s());d=null;do{n=!1;for(F=this;m.length;){try{y=m.shift(),y.scope.$eval(y.expression,y.locals)}catch(w){g(w)}d=null}a:do{if(k=F.$$watchers)for(q=k.length;q--;)try{if(b=k[q])if((f=b.get(F))!==(h=b.last)&&
        !(b.eq?ia(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))n=!0,d=b,b.last=b.eq?Da(f,null):f,b.fn(f,h===t?f:h,F),5>r&&(u=4-r,P[u]||(P[u]=[]),P[u].push({msg:z(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){n=!1;break a}}catch(D){g(D)}if(!(k=F.$$childHead||F!==this&&F.$$nextSibling))for(;F!==this&&!(k=F.$$nextSibling);)F=F.$parent}while(F=k);if((n||m.length)&&!r--)throw v.$$phase=null,c("infdig",a,P);}while(n||m.length);for(v.$$phase=null;C.length;)try{C.shift()()}catch(B){g(B)}},
        $destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==v){for(var b in this.$$listenerCount)q(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=
            this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){v.$$phase||m.length||l.defer(function(){m.length&&v.$digest()});m.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){C.push(a)},$apply:function(a){try{return p("$apply"),this.$eval(a)}catch(b){g(b)}finally{v.$$phase=
            null;try{v.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&u.push(b);F()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,q(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,l={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){l.defaultPrevented=
            !0},defaultPrevented:!1},h=Za([l],arguments,1),k,q;do{d=e.$$listeners[a]||c;l.currentScope=e;k=0;for(q=d.length;k<q;k++)if(d[k])try{d[k].apply(null,h)}catch(p){g(p)}else d.splice(k,1),k--,q--;if(f)return l.currentScope=null,l;e=e.$parent}while(e);l.currentScope=null;return l},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Za([e],arguments,1),l,h;c=d;){e.currentScope=
            c;d=c.$$listeners[a]||[];l=0;for(h=d.length;l<h;l++)if(d[l])try{d[l].apply(null,f)}catch(k){g(k)}else d.splice(l,1),l--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new n,m=v.$$asyncQueue=[],C=v.$$postDigestQueue=[],u=v.$$applyAsyncQueue=[];return v}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=
        function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Df(b){if("self"===b)return b;if(x(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Va(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function hd(b){var a=[];y(b)&&r(b,function(b){a.push(Df(b))});
        return a}function Te(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?Zc(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
        return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===u||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof
        g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Aa(e.toString()),p,q,t=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){t=!0;break}if(t)for(p=0,q=a.length;p<q;p++)if(d(a[p],g)){t=!1;break}if(t)return e;throw Ba("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
        8>Ra)throw Ba("iequirks");var d=sa(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=ra);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(pa,function(a,b){var c=K(b);d[fb("parse_as_"+c)]=function(b){return e(a,b)};d[fb("get_trusted_"+c)]=function(b){return f(a,b)};d[fb("trust_as_"+
        c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in
    l);!d||k&&n||(k=x(f.body.style.webkitTransition),n=x(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ra)return!1;if(D(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:db(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function We(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;x(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=
        a.defaults&&a.defaults.transformResponse;H(h)?h=h.filter(function(a){return a!==Zb}):h===Zb&&(h=null);return a.get(f,{cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(a){return a.data},function(a){if(!g)throw ma("tpload",f);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=
        ca.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=
        ["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var n=y(k)&&!k,p=(n?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}n||b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Ra&&(Z.setAttribute("href",b),b=Z.href);
        Z.setAttribute("href",b);return{href:Z.href,protocol:Z.protocol?Z.protocol.replace(/:$/,""):"",host:Z.host,search:Z.search?Z.search.replace(/^\?/,""):"",hash:Z.hash?Z.hash.replace(/^#/,""):"",hostname:Z.hostname,port:Z.port,pathname:"/"===Z.pathname.charAt(0)?Z.pathname:"/"+Z.pathname}}function Zc(b){b=x(b)?Aa(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=ea(R)}function Ec(b){function a(c,d){if(L(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+
        "Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",ld);a("orderBy",md);a("uppercase",If)}function Ef(){return function(b,a,c){if(!H(b))return b;var d;switch(null!==a?typeof a:"null"){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    a,c){var d=L(b)&&"$"in b;!0===a?a=ia:z(a)||(a=function(a,b){if(D(a))return!1;if(null===a||null===b)return a===b;if(L(a)||L(b))return!1;a=K(""+a);b=K(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!L(e)?Ha(e,b.$,a,!1):Ha(e,b,a,c)}}function Ha(b,a,c,d,e){var f=null!==b?typeof b:"null",g=null!==a?typeof a:"null";if("string"===g&&"!"===a.charAt(0))return!Ha(b,a.substring(1),c,d);if(H(b))return b.some(function(b){return Ha(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==
        h.charAt(0)&&Ha(b[h],a,c,!0))return!0;return e?!1:Ha(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!z(e)&&!D(e)&&(f="$"===h,!Ha(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){D(d)&&(d=a.CURRENCY_SYM);D(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==
    b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||L(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||"").length;D(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,
        t=a.gSize;if(k.length>=q+t)for(p=k.length-q,n=0;n<p;n++)0===(p-n)%t&&0!==n&&(h+=c),h+=k.charAt(n);for(n=p;n<k.length;n++)0===(k.length-n)%q&&0!==n&&(h+=c),h+=k.charAt(n);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Jb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function U(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=
        c;0===e&&-12==c&&(e=12);return Jb(e,a,d)}}function Kb(b,a){return function(c,d){var e=c["get"+b](),f=vb(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Jb(a,b)}}function hc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function kd(b){function a(a){var b;if(b=a.match(c)){a=
        new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;x(c)&&(c=Kf.test(c)?
        aa(c):a(c));Y(c)&&(c=new Date(c));if(!ha(c))return c;for(;e;)(k=Lf.exec(e))?(h=Za(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){D(a)&&(a=2);return ab(b,a)}}function Gf(){return function(b,a){Y(b)&&(b=b.toString());return H(b)||x(b)?(a=Infinity===Math.abs(Number(a))?Number(a):
        aa(a))?0<a?b.slice(0,a):b.slice(a):x(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=
        a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Ta(a))return a;c=H(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||ra;if(x(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return $a.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},
        d))}}function Ia(b){z(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ea(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Lb;f.$error={};f.$$success={};f.$pending=u;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ma(a.$name,
        "input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});Ya(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];
        d&&(Ya(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Sa);d.addClass(b,Mb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Sa,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function ic(b){b.$formatters.push(function(a){return b.$isEmpty(a)?
        a:a.toString()})}function lb(b,a,c,d,e,f){var g=K(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=N(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};
        a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Nb(b,a){return function(c,d){var e,f;if(ha(c))return c;if(x(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,
        dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(b,a,c,d){return function(e,f,g,h,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?ha(a)?a:c(a):u}td(e,f,g,h);lb(e,f,g,h,l,k);var t=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;
        h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===t&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):u});h.$formatters.push(function(a){if(a&&!ha(a))throw nb("datefmt",a);if(p(a)){if((s=a)&&"UTC"===t){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return n("date")(a,d,t)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||D(r)||c(a)>=r};g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var v;
            h.$validators.max=function(a){return!p(a)||D(v)||c(a)<=v};g.$observe("max",function(a){v=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=L(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?u:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw nb("constexpr",c,d);return b(a)}return e}function jc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(x(a))return a.split(" ");if(L(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var t=l(k,1);h.$addClass(t)}else if(!ia(b,
            n)){var s=e(n),t=d(k,s),k=d(s,k),t=l(t,1),k=l(k,-1);t&&t.length&&c.addClass(g,t);k&&k.length&&c.removeClass(g,k)}}n=sa(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+uc(b,"-"):"";
        a(ob+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[ob]=e.hasClass(ob));d.$setValidity=function(b,e,f){e===u?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=u));Xa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,!0),d.$valid=d.$invalid=u,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=
        !d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?u:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Of=/^\/(.+)\/([a-z]*)$/,K=function(b){return x(b)?b.toLowerCase():b},sc=Object.prototype.hasOwnProperty,vb=function(b){return x(b)?b.toUpperCase():b},Ra,B,ta,$a=[].slice,qf=[].splice,Pf=[].push,Ca=Object.prototype.toString,Ja=S("ng"),ca=R.angular||(R.angular={}),eb,rb=0;Ra=W.documentMode;A.$inject=[];ra.$inject=[];var H=
        Array.isArray,N=function(b){return x(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},db=function(){if(y(db.isActive_))return db.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return db.isActive_=b},tb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,vc=!1,Qb,qa=1,bb=3,Qd={full:"1.3.20",major:1,minor:3,dot:20,codeName:"shallow-translucence"};T.expando="ng339";var Ab=
        T.cache={},hf=1;T._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=S("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ka={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],
        td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option;ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead;ka.th=ka.td;var Ka=T.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),T(R).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?B(this[b]):B(this[this.length+b])},length:0,push:Pf,sort:[].sort,
        splice:[].splice},Fb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Fb[K(b)]=b});var Nc={};r("input select option textarea button form details".split(" "),function(b){Nc[b]=!0});var Oc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Vb,removeData:yb},function(b,a){T[a]=b});r({data:Vb,inheritedData:Eb,scope:function(b){return B.data(b,"$scope")||Eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return B.data(b,
            "$isolateScope")||B.data(b,"$isolateScopeNoTemplate")},controller:Jc,injector:function(b){return Eb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=fb(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==bb&&2!==d&&8!==d)if(d=K(a),Fb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||A).specified?d:u;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=
        b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(D(b)){var d=a.nodeType;return d===qa||d===bb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(D(a)){if(b.multiple&&"select"===wa(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(D(a))return b.innerHTML;xb(b,!0);b.innerHTML=a},empty:Kc},function(b,a){T.prototype[a]=
        function(a,d){var e,f,g=this.length;if(b!==Kc&&(2==b.length&&b!==Bb&&b!==Jc?a:d)===u){if(L(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:yb,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Fc(c)){var g=zb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Ic,one:function(a,c,d){a=B(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;xb(a);r(new T(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,
        function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new T(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;r(new T(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=B(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Lc,detach:function(a){Lc(a,!0)},after:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              c){var d=a,e=a.parentNode;c=new T(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Db,removeClass:Cb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;D(f)&&(f=!Bb(a,c));(f?Db:Cb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=
        zb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:g,target:a},c.type&&(e=w(e,c)),c=sa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){T.prototype[c]=function(c,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             e,f){for(var g,h=0,l=this.length;h<l;h++)D(g)?(g=a(this[h],c,e,f),y(g)&&(g=B(g))):Hc(g,a(this[h],c,e,f));return y(g)?g:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});gb.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var Qc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Rf=/,/,Sf=/^\s*(_?)(\S+?)\1\s*$/,Pc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=S("$injector");
    cb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw x(d)&&d||(d=a.name||mf(a)),Fa("strictdi",d);c=a.toString().replace(Pc,"");c=c.match(Qc);r(c[1].split(Rf),function(a){a.replace(Sf,function(a,c,d){e.push(d)})})}a.$inject=e}}else H(a)?(c=a.length-1,La(a[c],"fn"),e=a.slice(0,c)):La(a,"fn",!0);return e};var Tf=S("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Tf("notcsel",
        c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ja();r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){n||(n=a.defer(),d(function(){n.resolve();n=null}));return n.promise}function k(a,c){if(ca.isObject(c)){var d=w(c.from||{},c.to||{});a.css(d)}}var n;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){k(a,c);a.remove();
        return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=B(a);c=x(c)?c:H(c)?c.join(" "):"";r(a,function(a){Db(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=B(a);c=x(c)?c:H(c)?c.join(" "):"";r(a,function(a){Cb(a,c)});k(a,d);return l()},setClass:function(a,c,d,e){var k=this,l=!1;a=B(a);var m=a.data("$$animateClasses");
        m?e&&m.options&&(m.options=ca.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=H(c)?c:c.split(" ");d=H(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,c);d&&this.$$removeClassImmediately(a,d);
        k(a,e);return l()},enabled:A,cancel:A}}]}],ma=S("$compile");xc.$inject=["$provide","$$sanitizeUriProvider"];var Rc=/^((?:x|data)[\:\-_])/i,rf=S("$controller"),Vc="application/json",$b={"Content-Type":Vc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,ac=S("$interpolate"),Uf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Hb=S("$location"),Vf={$$html5:!1,$$replace:!1,absUrl:Ib("$$absUrl"),url:function(a){if(D(a))return this.$$url;var c=Uf.exec(a);(c[1]||
    ""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Ib("$$protocol"),host:Ib("$$host"),port:Ib("$$port"),path:cd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(x(a)||Y(a))a=a.toString(),this.$$search=rc(a);else if(L(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Hb("isrcharg");
        break;default:D(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:cd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([bd,dc,cc],function(a){a.prototype=Object.create(Vf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==cc||!this.$$html5)throw Hb("nostate");this.$$state=D(c)?null:c;return this}});var ga=S("$parse"),Wf=Function.prototype.call,Xf=Function.prototype.apply,
        Yf=Function.prototype.bind,pb=ja();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;pb[c]=a});pb["this"]=function(a){return a};pb["this"].sharedGetter=!0;var qb=w(ja(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,
            c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,
            c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Zf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,
        text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=qb[c],f=qb[d];qb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===
        typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ga("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));
        if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&
        !this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Zf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===
        a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var kb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};kb.ZERO=w(function(){return 0},{sharedGetter:!0,constant:!0});kb.prototype={constructor:kb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;
        return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in pb?a=pb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):
        "."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ga("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ga("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw ga("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=qb[a];return w(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=qb[c];return w(function(c,e){return f(c,e,a,d)},{constant:a.constant&&d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=
        this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return w(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},
        filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return w(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(u,e)}return c(l)},{constant:!c.$stateful&&f.every(ec),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},assignment:function(){var a=
            this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),w(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return w(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},logicalOR:function(){for(var a=
            this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,this.additive());return a},
        additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(kb.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=this.identifier();
            return w(function(d,e,f){d=f||a(d,e);return null==d?u:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return w(function(e,f){var g=a(e,f),h=dd(d(e,f),c);va(h,c);return g?oa(g[h],c):u},{assign:function(e,f,g){var h=va(dd(d(e,g),c),c),l=oa(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
        while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?u:g,k=a(g,h,l)||A;if(f)for(var n=d.length;n--;)f[n]=oa(d[n](g,h),e);oa(l,e);if(k){if(k.constructor===k)throw ga("isecfn",e);if(k===Wf||k===Xf||k===Yf)throw ga("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return oa(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))
        }this.consume("]");return w(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(ec),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return w(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=
            c[h](d,f);return g},{literal:!0,constant:c.every(ec),inputs:c})}};var Bf=ja(),Af=ja(),Cf=Object.prototype.valueOf,Ba=S("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ma=S("$compile"),Z=W.createElement("a"),id=Aa(R.location.href);Ec.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:U("FullYear",4),yy:U("FullYear",2,0,!0),y:U("FullYear",1),MMMM:Kb("Month"),MMM:Kb("Month",!0),MM:U("Month",2,1),M:U("Month",1,1),dd:U("Date",2),d:U("Date",
        1),HH:U("Hours",2),H:U("Hours",1),hh:U("Hours",2,-12),h:U("Hours",1,-12),mm:U("Minutes",2),m:U("Minutes",1),ss:U("Seconds",2),s:U("Seconds",1),sss:U("Milliseconds",3),EEEE:Kb("Day"),EEE:Kb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Jb(Math[0<a?"floor":"ceil"](a/60),2)+Jb(Math.abs(a%60),2))},ww:qd(2),w:qd(1),G:hc,GG:hc,GGG:hc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},Lf=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=ea(K),If=ea(vb);md.$inject=["$parse"];var Td=ea({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Ca.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),wb={};r(Fb,function(a,c){if("multiple"!=a){var d=ya("ng-"+c);wb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],
        function(a){g.$set(c,!!a)})}}}}});r(Oc,function(a,c){wb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=ya("ng-"+a);wb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ca.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
        g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ra&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,c){a.$name=c},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(d,e){d.addClass(Sa).addClass(ob);var f=e.name?"name":a&&e.ngForm?"ngForm":
            !1;return{pre:function(a,d,e,k){if(!("action"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var p=k.$$parentForm;f&&(jb(a,null,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(jb(a,null,k.$name,u,k.$name),p.$$renameControl(k,c),jb(a,null,k.$name,k,k.$name))}));d.on("$destroy",function(){p.$removeControl(k);
            f&&jb(a,null,e[f],u,k.$name);w(k,Lb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,$f=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ag=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,bg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,kc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,
        Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd={text:function(a,c,d,e,f,g){lb(a,c,d,e,f,g);ic(e)},date:mb("date",zd,Nb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ad,Nb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Cd,Nb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",kc,function(a,c){if(ha(a))return a;if(x(a)){kc.lastIndex=0;var d=kc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=
            c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:mb("month",Bd,Nb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);lb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:bg.test(a)?parseFloat(a):u});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw nb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||
            D(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:u;e.$validate()})}if(y(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||D(l)||a<=l};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));l=Y(a)&&!isNaN(a)?a:u;e.$validate()})}},url:function(a,c,d,e,f,g){lb(a,c,d,e,f,g);ic(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||$f.test(d)}},email:function(a,c,d,e,f,g){lb(a,c,d,e,f,g);ic(e);
            e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||ag.test(d)}},radio:function(a,c,d,e){D(d.name)&&c.attr("name",++rb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),n=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&
            a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ia(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:A,button:A,submit:A,reset:A,file:A},yc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[K(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],cg=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===u?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
            c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===u?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=ea({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
        be=jc("",!0),de=jc("Odd",0),ce=jc("Even",1),ee=Ia({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Dc={},dg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ya("ng-"+a);Dc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
        d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
            ub(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate",function(a,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",l=f.autoscroll;return function(e,f,p,q,r){var s=0,u,v,m,C=function(){v&&(v.remove(),v=null);u&&(u.$destroy(),u=null);m&&(d.leave(m).then(function(){v=null}),v=m,m=null)};e.$watch(g,function(g){var p=function(){!y(l)||l&&!e.$eval(l)||
        c()},M=++s;g?(a(g,!0).then(function(a){if(M===s){var c=e.$new();q.template=a;a=r(c,function(a){C();d.enter(a,null,f).then(p)});u=c;m=a;u.$emit("$includeContentLoaded",g);e.$eval(h)}},function(){M===s&&(C(),e.$emit("$includeContentError",g))}),e.$emit("$includeContentRequested",g)):(C(),q.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Gc(f.template,W).childNodes)(c,function(a){d.append(a)},
        {futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?N(f):f;e.$parsers.push(function(a){if(!D(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?N(a):a)});return c}});e.$formatters.push(function(a){return H(a)?a.join(f):u});e.$isEmpty=function(a){return!a||
            !a.length}}}},ob="ng-valid",vd="ng-invalid",Sa="ng-pristine",Mb="ng-dirty",xd="ng-pending",nb=S("ngModel"),eg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=u;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;
            this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=u;this.$name=n(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,t=p,s=q,F=null,v,m=this;this.$$setOptions=function(a){if((m.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");t=function(a){var d=p(a);z(d)&&(d=c(a));return d};s=function(a,c){z(p(a))?g(a,{$$$p:m.$modelValue}):q(a,m.$modelValue)}}else if(!p.assign)throw nb("nonassign",d.ngModel,xa(e));};this.$render=A;this.$isEmpty=function(a){return D(a)||
                ""===a||null===a||a!==a};var C=e.inheritedData("$formController")||Lb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:C,$animate:g});this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;g.removeClass(e,Mb);g.addClass(e,Sa)};this.$setDirty=function(){m.$dirty=!0;m.$pristine=!1;g.removeClass(e,Sa);g.addClass(e,Mb);C.$setDirty()};this.$setUntouched=function(){m.$touched=!1;m.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=
                function(){m.$touched=!0;m.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(F);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$validate=function(){if(!Y(m.$modelValue)||!isNaN(m.$modelValue)){var a=m.$$rawModelValue,c=m.$valid,d=m.$modelValue,e=m.$options&&m.$options.allowInvalid;m.$$runValidators(a,m.$$lastCommittedViewValue,function(f){e||c===f||(m.$modelValue=f?a:u,m.$modelValue!==d&&m.$$writeModelToScope())})}};this.$$runValidators=
                function(a,c,d){function e(){var d=!0;r(m.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(r(m.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;r(m.$asyncValidators,function(f,h){var l=f(a,c);if(!l||!z(l.then))throw nb("$asyncValidators",l);g(h,u);d.push(l.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},A):h(!0)}function g(a,c){l===w&&m.$setValidity(a,c)}function h(a){l===w&&d(a)}w++;var l=w;(function(){var a=
                    m.$$parserName||"parse";if(v===u)g(a,null);else return v||(r(m.$validators,function(a,c){g(c,null)}),r(m.$asyncValidators,function(a,c){g(c,null)})),g(a,v),v;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=m.$viewValue;h.cancel(F);if(m.$$lastCommittedViewValue!==a||""===a&&m.$$hasNativeValidators)m.$$lastCommittedViewValue=a,m.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=m.$$lastCommittedViewValue;if(v=D(c)?u:!0)for(var d=
                0;d<m.$parsers.length;d++)if(c=m.$parsers[d](c),D(c)){v=!1;break}Y(m.$modelValue)&&isNaN(m.$modelValue)&&(m.$modelValue=t(a));var e=m.$modelValue,f=m.$options&&m.$options.allowInvalid;m.$$rawModelValue=c;f&&(m.$modelValue=c,m.$modelValue!==e&&m.$$writeModelToScope());m.$$runValidators(c,m.$$lastCommittedViewValue,function(a){f||(m.$modelValue=a?c:u,m.$modelValue!==e&&m.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,m.$modelValue);r(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
            this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=m.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(F);d?F=h(function(){m.$commitViewValue()},d):l.$$phase?m.$commitViewValue():a.$apply(function(){m.$commitViewValue()})};a.$watch(function(){var c=t(a);if(c!==m.$modelValue&&(m.$modelValue===m.$modelValue||c===c)){m.$modelValue=
                m.$$rawModelValue=c;v=u;for(var d=m.$formatters,e=d.length,f=c;e--;)f=d[e](f);m.$viewValue!==f&&(m.$viewValue=m.$$lastCommittedViewValue=f,m.$render(),m.$$runValidators(c,f,A))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:eg,priority:1,compile:function(c){c.addClass(Sa).addClass("ng-untouched").addClass(ob);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Lb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",
        function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],fg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);
            this.$options.updateOn!==u?(this.$options.updateOnDefault=!1,this.$options.updateOn=N(this.$options.updateOn.replace(fg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ia({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,n=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(n)||{},t={},n=c.startSymbol(),s=
            c.endSymbol(),u=n+k+"-"+p+s,v=ca.noop,m;r(h,function(a,c){var d=e.exec(c);d&&(d=(d[1]?"-":"")+K(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){t[e]=c(a.replace(d,u))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===m||d&&isNaN(m)||(v(),v=f.$watch(t[c],l),m=c)})}}}],ne=["$parse","$animate",function(a,c){var d=S("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=
            0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],q=k[3],t=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var s=k[3]||k[1],F=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||
            /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",q);var v,m,C,y,w={$id:Na};t?v=a(t):(C=function(a,c){return Na(c)},y=function(a){return a});return function(a,f,g,k,n){v&&(m=function(c,d,e){F&&(w[F]=c);w[s]=d;w.$index=e;return v(a,w)});var t=ja();a.$watchCollection(p,function(g){var k,p,v=f[0],G,w=ja(),D,I,A,z,H,O,x;q&&(a[q]=g);if(Ta(g))H=g,p=m||C;else{p=m||y;H=[];for(x in g)g.hasOwnProperty(x)&&"$"!=x.charAt(0)&&H.push(x);H.sort()}D=
            H.length;x=Array(D);for(k=0;k<D;k++)if(I=g===H?k:H[k],A=g[I],z=p(I,A,k),t[z])O=t[z],delete t[z],w[z]=O,x[k]=O;else{if(w[z])throw r(x,function(a){a&&a.scope&&(t[a.id]=a)}),d("dupes",h,z,A);x[k]={id:z,scope:u,clone:u};w[z]=!0}for(G in t){O=t[G];z=ub(O.clone);c.leave(z);if(z[0].parentNode)for(k=0,p=z.length;k<p;k++)z[k].$$NG_REMOVED=!0;O.scope.$destroy()}for(k=0;k<D;k++)if(I=g===H?k:H[k],A=g[I],O=x[k],O.scope){G=v;do G=G.nextSibling;while(G&&G.$$NG_REMOVED);O.clone[0]!=G&&c.move(ub(O.clone),null,B(v));
            v=O.clone[O.clone.length-1];e(O.scope,k,s,A,F,I,D)}else n(function(a,d){O.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,B(v));v=f;O.clone=a;w[O.id]=O;e(O.scope,k,s,A,F,I,D)});t=w})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?
            "addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ia(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=
            0;for(e=k.length;d<e;++d){var s=ub(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,
            element:c})}}),se=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw S("ngTransclude")("orphan",xa(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],gg=S("ngOptions"),te=ea({restrict:"A",
            terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:A};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},n=e,p;l.databound=d.ngModel;l.init=function(a,c,d){n=a;p=d};l.addOption=function(c,d){Ma(c,'"option value"');
            k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Na(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=A})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=
            d.$viewValue;e.hasOption(a)?(z.parent()&&z.remove(),c.val(a),""===a&&v.prop("selected",!0)):null==a&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){z.parent()&&z.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;d.$render=function(){var a=new gb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ia(e,d.$viewValue)||(e=sa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),
        function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[A]=d;I&&(T[I]=c);return a(e,T)}function l(a){var c;if(t)if(K&&H(a)){c=new gb([]);for(var d=0;d<a.length;d++)c.put(h(K,null,a[d]),!0)}else c=new gb(a);else K&&(a=h(K,null,a));return function(d,e){var f;f=K?K:x?x:E;return t?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function k(){m||(e.$$postDigest(p),m=!0)}function n(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){m=!1;var a={"":[]},c=[""],d,k,s,u,v;s=g.$viewValue;
            u=L(e)||[];var A=I?Object.keys(u).sort():u,x,B,H,E,P={};v=l(s);var N=!1,U,W;R={};for(E=0;H=A.length,E<H;E++){x=E;if(I&&(x=A[E],"$"===x.charAt(0)))continue;B=u[x];d=h(M,x,B)||"";(k=a[d])||(k=a[d]=[],c.push(d));d=v(x,B);N=N||d;B=h(z,x,B);B=y(B)?B:"";W=K?K(e,T):I?A[E]:E;K&&(R[W]=x);k.push({id:W,label:B,selected:d})}t||(w||null===s?a[""].unshift({id:"",label:"",selected:!N}):N||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(A=c.length;x<A;x++){d=c[x];k=a[d];S.length<=x?(s={element:D.clone().attr("label",
            d),label:k.label},u=[s],S.push(u),f.append(s.element)):(u=S[x],s=u[0],s.label!=d&&s.element.attr("label",s.label=d));N=null;E=0;for(H=k.length;E<H;E++)d=k[E],(v=u[E+1])?(N=v.element,v.label!==d.label&&(n(P,v.label,!1),n(P,d.label,!0),N.text(v.label=d.label),N.prop("label",v.label)),v.id!==d.id&&N.val(v.id=d.id),N[0].selected!==d.selected&&(N.prop("selected",v.selected=d.selected),Ra&&N.prop("selected",v.selected))):(""===d.id&&w?U=w:(U=C.clone()).val(d.id).prop("selected",d.selected).attr("selected",
            d.selected).prop("label",d.label).text(d.label),u.push(v={element:U,label:d.label,id:d.id,selected:d.selected}),n(P,d.label,!0),N?N.after(U):s.element.append(U),N=U);for(E++;u.length>E;)d=u.pop(),n(P,d.label,!1),d.element.remove()}for(;S.length>x;){k=S.pop();for(E=1;E<k.length;++E)n(P,k[E].label,!1);k[0].element.remove()}r(P,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var v;if(!(v=s.match(d)))throw gg("iexp",s,xa(f));var z=c(v[2]||v[1]),A=v[4]||v[6],B=/ as /.test(v[0])&&v[1],x=B?c(B):
            null,I=v[5],M=c(v[3]||""),E=c(v[2]?v[1]:A),L=c(v[7]),K=v[8]?c(v[8]):null,R={},S=[[{element:f,label:""}]],T={};w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=L(e)||[],c;if(t)c=[],r(f.val(),function(d){d=K?R[d]:d;c.push("?"===d?u:""===d?null:h(x?x:E,d,a[d]))});else{var d=K?R[f.val()]:f.val();c="?"===d?u:""===d?null:h(x?x:E,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(L,k);e.$watchCollection(function(){var a=L(e),c;
            if(a&&H(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(z,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(z,d,a[d]));return c},k);t&&e.$watchCollection(function(){return g.$modelValue},k)}if(l[1]){var q=l[0];l=l[1];var t=h.multiple,s=h.ngOptions,w=!1,v,m=!1,C=B(W.createElement("option")),D=B(W.createElement("optgroup")),z=C.clone();h=0;for(var A=g.children(),x=A.length;h<x;h++)if(""===A[h].value){v=w=A.eq(h);break}q.init(l,w,z);t&&(l.$isEmpty=function(a){return!a||0===a.length});
            s?p(e,g,l):t?n(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:A,removeOption:A};return{restrict:"E",priority:100,compile:function(d,e){if(D(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound||(n=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],
        Xd=ea({restrict:"E",terminal:!1}),Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},zc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){x(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw S("ngPattern")("noregexp",g,a,xa(c));f=
            a||u;e.$validate()});e.$validators.pattern=function(a,c){return e.$isEmpty(c)||D(f)||f.test(c)}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=
            function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};R.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ca),B(W).ready(function(){Jd(W,tc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map


/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(N,f,W){'use strict';f.module("ngAnimate",["ng"]).directive("ngAnimateChildren",function(){return function(X,r,g){g=g.ngAnimateChildren;f.isString(g)&&0===g.length?r.data("$$ngAnimateChildren",!0):X.$watch(g,function(f){r.data("$$ngAnimateChildren",!!f)})}}).factory("$$animateReflow",["$$rAF","$document",function(f,r){var g=r[0].body;return function(r){return f(function(){r(g.offsetWidth)})}}]).config(["$provide","$animateProvider",function(X,r){function g(f){for(var n=0;n<f.length;n++){var g=
    f[n];if(1==g.nodeType)return g}}function ba(f,n){return g(f)==g(n)}var t=f.noop,n=f.forEach,ca=r.$$selectors,aa=f.isArray,da=f.isString,ga=f.isObject,w={running:!0},u;X.decorator("$animate",["$delegate","$$q","$injector","$sniffer","$rootElement","$$asyncCallback","$rootScope","$document","$templateRequest","$$jqLite",function(O,N,M,Y,y,I,P,W,Z,Q){function R(a,c){var b=a.data("$$ngAnimateState")||{};c&&(b.running=!0,b.structural=!0,a.data("$$ngAnimateState",b));return b.disabled||b.running&&b.structural}
    function D(a){var c,b=N.defer();b.promise.$$cancelFn=function(){c&&c()};P.$$postDigest(function(){c=a(function(){b.resolve()})});return b.promise}function J(a){if(ga(a))return a.tempClasses&&da(a.tempClasses)&&(a.tempClasses=a.tempClasses.split(/\s+/)),a}function S(a,c,b){b=b||{};var d={};n(b,function(e,a){n(a.split(" "),function(a){d[a]=e})});var h=Object.create(null);n((a.attr("class")||"").split(/\s+/),function(e){h[e]=!0});var f=[],k=[];n(c&&c.classes||[],function(e,a){var b=h[a],c=d[a]||{};!1===
    e?(b||"addClass"==c.event)&&k.push(a):!0===e&&(b&&"removeClass"!=c.event||f.push(a))});return 0<f.length+k.length&&[f.join(" "),k.join(" ")]}function T(a){if(a){var c=[],b={};a=a.substr(1).split(".");(Y.transitions||Y.animations)&&c.push(M.get(ca[""]));for(var d=0;d<a.length;d++){var f=a[d],l=ca[f];l&&!b[f]&&(c.push(M.get(l)),b[f]=!0)}return c}}function U(a,c,b,d){function h(e,a){var b=e[a],c=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];if(b||c)return"leave"==a&&(c=b,b=null),u.push({event:a,
        fn:b}),fa.push({event:a,fn:c}),!0}function l(c,k,x){var E=[];n(c,function(a){a.fn&&E.push(a)});var m=0;n(E,function(c,f){var p=function(){a:{if(k){(k[f]||t)();if(++m<E.length)break a;k=null}x()}};switch(c.event){case "setClass":k.push(c.fn(a,e,A,p,d));break;case "animate":k.push(c.fn(a,b,d.from,d.to,p));break;case "addClass":k.push(c.fn(a,e||b,p,d));break;case "removeClass":k.push(c.fn(a,A||b,p,d));break;default:k.push(c.fn(a,p,d))}});k&&0===k.length&&x()}var k=a[0];if(k){d&&(d.to=d.to||{},d.from=
        d.from||{});var e,A;aa(b)&&(e=b[0],A=b[1],e?A?b=e+" "+A:(b=e,c="addClass"):(b=A,c="removeClass"));var x="setClass"==c,E=x||"addClass"==c||"removeClass"==c||"animate"==c,p=a.attr("class")+" "+b;if(B(p)){var G=t,m=[],fa=[],g=t,s=[],u=[],p=(" "+p).replace(/\s+/g,".");n(T(p),function(a){!h(a,c)&&x&&(h(a,"addClass"),h(a,"removeClass"))});return{node:k,event:c,className:b,isClassBased:E,isSetClassOperation:x,applyStyles:function(){d&&a.css(f.extend(d.from||{},d.to||{}))},before:function(a){G=a;l(fa,m,function(){G=
        t;a()})},after:function(a){g=a;l(u,s,function(){g=t;a()})},cancel:function(){m&&(n(m,function(a){(a||t)(!0)}),G(!0));s&&(n(s,function(a){(a||t)(!0)}),g(!0))}}}}}function H(a,c,b,d,h,l,k,e){function A(e){var k="$animate:"+e;g&&g[k]&&0<g[k].length&&I(function(){b.triggerHandler(k,{event:a,className:c})})}function x(){A("before")}function E(){A("after")}function p(){p.hasBeenRun||(p.hasBeenRun=!0,l())}function G(){if(!G.hasBeenRun){m&&m.applyStyles();G.hasBeenRun=!0;k&&k.tempClasses&&n(k.tempClasses,
        function(a){u.removeClass(b,a)});var x=b.data("$$ngAnimateState");x&&(m&&m.isClassBased?C(b,c):(I(function(){var e=b.data("$$ngAnimateState")||{};ea==e.index&&C(b,c,a)}),b.data("$$ngAnimateState",x)));A("close");e()}}var m=U(b,a,c,k);if(!m)return p(),x(),E(),G(),t;a=m.event;c=m.className;var g=f.element._data(m.node),g=g&&g.events;d||(d=h?h.parent():b.parent());if(z(b,d))return p(),x(),E(),G(),t;d=b.data("$$ngAnimateState")||{};var L=d.active||{},s=d.totalActive||0,q=d.last;h=!1;if(0<s){s=[];if(m.isClassBased)"setClass"==
    q.event?(s.push(q),C(b,c)):L[c]&&(v=L[c],v.event==a?h=!0:(s.push(v),C(b,c)));else if("leave"==a&&L["ng-leave"])h=!0;else{for(var v in L)s.push(L[v]);d={};C(b,!0)}0<s.length&&n(s,function(a){a.cancel()})}!m.isClassBased||m.isSetClassOperation||"animate"==a||h||(h="addClass"==a==b.hasClass(c));if(h)return p(),x(),E(),A("close"),e(),t;L=d.active||{};s=d.totalActive||0;if("leave"==a)b.one("$destroy",function(a){a=f.element(this);var e=a.data("$$ngAnimateState");e&&(e=e.active["ng-leave"])&&(e.cancel(),
        C(a,"ng-leave"))});u.addClass(b,"ng-animate");k&&k.tempClasses&&n(k.tempClasses,function(a){u.addClass(b,a)});var ea=K++;s++;L[c]=m;b.data("$$ngAnimateState",{last:m,active:L,index:ea,totalActive:s});x();m.before(function(e){var k=b.data("$$ngAnimateState");e=e||!k||!k.active[c]||m.isClassBased&&k.active[c].event!=a;p();!0===e?G():(E(),m.after(G))});return m.cancel}function q(a){if(a=g(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName("ng-animate"):a.querySelectorAll(".ng-animate"),
        n(a,function(a){a=f.element(a);(a=a.data("$$ngAnimateState"))&&a.active&&n(a.active,function(a){a.cancel()})})}function C(a,c){if(ba(a,y))w.disabled||(w.running=!1,w.structural=!1);else if(c){var b=a.data("$$ngAnimateState")||{},d=!0===c;!d&&b.active&&b.active[c]&&(b.totalActive--,delete b.active[c]);if(d||!b.totalActive)u.removeClass(a,"ng-animate"),a.removeData("$$ngAnimateState")}}function z(a,c){if(w.disabled)return!0;if(ba(a,y))return w.running;var b,d,g;do{if(0===c.length)break;var l=ba(c,y),
        k=l?w:c.data("$$ngAnimateState")||{};if(k.disabled)return!0;l&&(g=!0);!1!==b&&(l=c.data("$$ngAnimateChildren"),f.isDefined(l)&&(b=l));d=d||k.running||k.last&&!k.last.isClassBased}while(c=c.parent());return!g||!b&&d}u=Q;y.data("$$ngAnimateState",w);var $=P.$watch(function(){return Z.totalPendingRequests},function(a,c){0===a&&($(),P.$$postDigest(function(){P.$$postDigest(function(){w.running=!1})}))}),K=0,V=r.classNameFilter(),B=V?function(a){return V.test(a)}:function(){return!0};return{animate:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    c,b,d,h){d=d||"ng-inline-animate";h=J(h)||{};h.from=b?c:null;h.to=b?b:c;return D(function(b){return H("animate",d,f.element(g(a)),null,null,t,h,b)})},enter:function(a,c,b,d){d=J(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);R(a,!0);O.enter(a,c,b);return D(function(h){return H("enter","ng-enter",f.element(g(a)),c,b,t,d,h)})},leave:function(a,c){c=J(c);a=f.element(a);q(a);R(a,!0);return D(function(b){return H("leave","ng-leave",f.element(g(a)),null,null,function(){O.leave(a)},c,b)})},move:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 c,b,d){d=J(d);a=f.element(a);c=c&&f.element(c);b=b&&f.element(b);q(a);R(a,!0);O.move(a,c,b);return D(function(h){return H("move","ng-move",f.element(g(a)),c,b,t,d,h)})},addClass:function(a,c,b){return this.setClass(a,c,[],b)},removeClass:function(a,c,b){return this.setClass(a,[],c,b)},setClass:function(a,c,b,d){d=J(d);a=f.element(a);a=f.element(g(a));if(R(a))return O.$$setClassImmediately(a,c,b,d);var h,l=a.data("$$animateClasses"),k=!!l;l||(l={classes:{}});h=l.classes;c=aa(c)?c:c.split(" ");n(c,
        function(a){a&&a.length&&(h[a]=!0)});b=aa(b)?b:b.split(" ");n(b,function(a){a&&a.length&&(h[a]=!1)});if(k)return d&&l.options&&(l.options=f.extend(l.options||{},d)),l.promise;a.data("$$animateClasses",l={classes:h,options:d});return l.promise=D(function(e){var k,b,c,d=g(a);d&&(k=a.data("$$animateClasses"),a.removeData("$$animateClasses"),c=a.parent(),b=d.parentNode);if(!b||b.$$NG_REMOVED||d.$$NG_REMOVED)e();else{b=a.data("$$ngAnimateState")||{};var f=S(a,k,b.active);return f?H("setClass",f,a,c,null,
        function(){f[0]&&O.$$addClassImmediately(a,f[0]);f[1]&&O.$$removeClassImmediately(a,f[1])},k.options,e):e()}})},cancel:function(a){a.$$cancelFn()},enabled:function(a,c){switch(arguments.length){case 2:if(a)C(c);else{var b=c.data("$$ngAnimateState")||{};b.disabled=!0;c.data("$$ngAnimateState",b)}break;case 1:w.disabled=!a;break;default:a=!w.disabled}return!!a}}}]);r.register("",["$window","$sniffer","$timeout","$$animateReflow",function(r,w,M,Y){function y(){b||(b=Y(function(){c=[];b=null;B={}}))}
    function I(a,e){b&&b();c.push(e);b=Y(function(){n(c,function(a){a()});c=[];b=null;B={}})}function P(a,e){var b=g(a);a=f.element(b);l.push(a);b=Date.now()+e;b<=h||(M.cancel(d),h=b,d=M(function(){X(l);l=[]},e,!1))}function X(a){n(a,function(a){(a=a.data("$$ngAnimateCSS3Data"))&&n(a.closeAnimationFns,function(a){a()})})}function Z(a,e){var b=e?B[e]:null;if(!b){var c=0,d=0,f=0,g=0;n(a,function(a){if(1==a.nodeType){a=r.getComputedStyle(a)||{};c=Math.max(Q(a[z+"Duration"]),c);d=Math.max(Q(a[z+"Delay"]),
        d);g=Math.max(Q(a[K+"Delay"]),g);var e=Q(a[K+"Duration"]);0<e&&(e*=parseInt(a[K+"IterationCount"],10)||1);f=Math.max(e,f)}});b={total:0,transitionDelay:d,transitionDuration:c,animationDelay:g,animationDuration:f};e&&(B[e]=b)}return b}function Q(a){var e=0;a=da(a)?a.split(/\s*,\s*/):[];n(a,function(a){e=Math.max(parseFloat(a)||0,e)});return e}function R(b,e,c,d){b=0<=["ng-enter","ng-leave","ng-move"].indexOf(c);var f,p=e.parent(),h=p.data("$$ngAnimateKey");h||(p.data("$$ngAnimateKey",++a),h=a);f=h+
        "-"+g(e).getAttribute("class");var p=f+" "+c,h=B[p]?++B[p].total:0,m={};if(0<h){var n=c+"-stagger",m=f+" "+n;(f=!B[m])&&u.addClass(e,n);m=Z(e,m);f&&u.removeClass(e,n)}u.addClass(e,c);var n=e.data("$$ngAnimateCSS3Data")||{},l=Z(e,p);f=l.transitionDuration;l=l.animationDuration;if(b&&0===f&&0===l)return u.removeClass(e,c),!1;c=d||b&&0<f;b=0<l&&0<m.animationDelay&&0===m.animationDuration;e.data("$$ngAnimateCSS3Data",{stagger:m,cacheKey:p,running:n.running||0,itemIndex:h,blockTransition:c,closeAnimationFns:n.closeAnimationFns||
    []});p=g(e);c&&(J(p,!0),d&&e.css(d));b&&(p.style[K+"PlayState"]="paused");return!0}function D(a,e,b,c,d){function f(){e.off(D,h);u.removeClass(e,l);u.removeClass(e,t);z&&M.cancel(z);H(e,b);var a=g(e),c;for(c in s)a.style.removeProperty(s[c])}function h(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-I,0)>=B&&b>=y&&c()}var m=g(e);a=e.data("$$ngAnimateCSS3Data");if(-1!=m.getAttribute("class").indexOf(b)&&
        a){var l="",t="";n(b.split(" "),function(a,b){var e=(0<b?" ":"")+a;l+=e+"-active";t+=e+"-pending"});var s=[],q=a.itemIndex,v=a.stagger,r=0;if(0<q){r=0;0<v.transitionDelay&&0===v.transitionDuration&&(r=v.transitionDelay*q);var w=0;0<v.animationDelay&&0===v.animationDuration&&(w=v.animationDelay*q,s.push(C+"animation-play-state"));r=Math.round(100*Math.max(r,w))/100}r||(u.addClass(e,l),a.blockTransition&&J(m,!1));var F=Z(e,a.cacheKey+" "+l),y=Math.max(F.transitionDuration,F.animationDuration);if(0===
        y)u.removeClass(e,l),H(e,b),c();else{!r&&d&&0<Object.keys(d).length&&(F.transitionDuration||(e.css("transition",F.animationDuration+"s linear all"),s.push("transition")),e.css(d));var q=Math.max(F.transitionDelay,F.animationDelay),B=1E3*q;0<s.length&&(v=m.getAttribute("style")||"",";"!==v.charAt(v.length-1)&&(v+=";"),m.setAttribute("style",v+" "));var I=Date.now(),D=V+" "+$,q=1E3*(r+1.5*(q+y)),z;0<r&&(u.addClass(e,t),z=M(function(){z=null;0<F.transitionDuration&&J(m,!1);0<F.animationDuration&&(m.style[K+
    "PlayState"]="");u.addClass(e,l);u.removeClass(e,t);d&&(0===F.transitionDuration&&e.css("transition",F.animationDuration+"s linear all"),e.css(d),s.push("transition"))},1E3*r,!1));e.on(D,h);a.closeAnimationFns.push(function(){f();c()});a.running++;P(e,q);return f}}else c()}function J(a,b){a.style[z+"Property"]=b?"none":""}function S(a,b,c,d){if(R(a,b,c,d))return function(a){a&&H(b,c)}}function T(a,b,c,d,f){if(b.data("$$ngAnimateCSS3Data"))return D(a,b,c,d,f);H(b,c);d()}function U(a,b,c,d,f){var g=
        S(a,b,c,f.from);if(g){var h=g;I(b,function(){h=T(a,b,c,d,f.to)});return function(a){(h||t)(a)}}y();d()}function H(a,b){u.removeClass(a,b);var c=a.data("$$ngAnimateCSS3Data");c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData("$$ngAnimateCSS3Data"))}function q(a,b){var c="";a=aa(a)?a:a.split(/\s+/);n(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var C="",z,$,K,V;N.ontransitionend===W&&N.onwebkittransitionend!==W?(C="-webkit-",z="WebkitTransition",$="webkitTransitionEnd transitionend"):
        (z="transition",$="transitionend");N.onanimationend===W&&N.onwebkitanimationend!==W?(C="-webkit-",K="WebkitAnimation",V="webkitAnimationEnd animationend"):(K="animation",V="animationend");var B={},a=0,c=[],b,d=null,h=0,l=[];return{animate:function(a,b,c,d,f,g){g=g||{};g.from=c;g.to=d;return U("animate",a,b,f,g)},enter:function(a,b,c){c=c||{};return U("enter",a,"ng-enter",b,c)},leave:function(a,b,c){c=c||{};return U("leave",a,"ng-leave",b,c)},move:function(a,b,c){c=c||{};return U("move",a,"ng-move",
        b,c)},beforeSetClass:function(a,b,c,d,f){f=f||{};b=q(c,"-remove")+" "+q(b,"-add");if(f=S("setClass",a,b,f.from))return I(a,d),f;y();d()},beforeAddClass:function(a,b,c,d){d=d||{};if(b=S("addClass",a,q(b,"-add"),d.from))return I(a,c),b;y();c()},beforeRemoveClass:function(a,b,c,d){d=d||{};if(b=S("removeClass",a,q(b,"-remove"),d.from))return I(a,c),b;y();c()},setClass:function(a,b,c,d,f){f=f||{};c=q(c,"-remove");b=q(b,"-add");return T("setClass",a,c+" "+b,d,f.to)},addClass:function(a,b,c,d){d=d||{};return T("addClass",
        a,q(b,"-add"),c,d.to)},removeClass:function(a,b,c,d){d=d||{};return T("removeClass",a,q(b,"-remove"),c,d.to)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map


/**
 * @license AngularJS v1.3.20
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

    /**
     * @ngdoc module
     * @name ngRoute
     * @description
     *
     * # ngRoute
     *
     * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
     *
     * ## Example
     * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
     *
     *
     * <div doc-module-components="ngRoute"></div>
     */
    /* global -ngRouteModule */
    var ngRouteModule = angular.module('ngRoute', ['ng']).
        provider('$route', $RouteProvider),
        $routeMinErr = angular.$$minErr('ngRoute');

    /**
     * @ngdoc provider
     * @name $routeProvider
     *
     * @description
     *
     * Used for configuring routes.
     *
     * ## Example
     * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
     *
     * ## Dependencies
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     */
    function $RouteProvider() {
        function inherit(parent, extra) {
            return angular.extend(Object.create(parent), extra);
        }

        var routes = {};

        /**
         * @ngdoc method
         * @name $routeProvider#when
         *
         * @param {string} path Route path (matched against `$location.path`). If `$location.path`
         *    contains redundant trailing slash or is missing one, the route will still match and the
         *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
         *    route definition.
         *
         *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
         *        to the next slash are matched and stored in `$routeParams` under the given `name`
         *        when the route matches.
         *    * `path` can contain named groups starting with a colon and ending with a star:
         *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
         *        when the route matches.
         *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
         *
         *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
         *    `/color/brown/largecode/code/with/slashes/edit` and extract:
         *
         *    * `color: brown`
         *    * `largecode: code/with/slashes`.
         *
         *
         * @param {Object} route Mapping information to be assigned to `$route.current` on route
         *    match.
         *
         *    Object properties:
         *
         *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
         *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
         *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
         *      published to scope under the `controllerAs` name.
         *    - `template` – `{string=|function()=}` – html template as a string or a function that
         *      returns an html template as a string which should be used by {@link
            *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
         *      This property takes precedence over `templateUrl`.
         *
         *      If `template` is a function, it will be called with the following parameters:
         *
         *      - `{Array.<Object>}` - route parameters extracted from the current
         *        `$location.path()` by applying the current route
         *
         *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
         *      template that should be used by {@link ngRoute.directive:ngView ngView}.
         *
         *      If `templateUrl` is a function, it will be called with the following parameters:
         *
         *      - `{Array.<Object>}` - route parameters extracted from the current
         *        `$location.path()` by applying the current route
         *
         *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
         *      be injected into the controller. If any of these dependencies are promises, the router
         *      will wait for them all to be resolved or one to be rejected before the controller is
         *      instantiated.
         *      If all the promises are resolved successfully, the values of the resolved promises are
         *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
         *      fired. If any of the promises are rejected the
         *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
         *      is:
         *
         *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
         *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
         *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
         *        and the return value is treated as the dependency. If the result is a promise, it is
         *        resolved before its value is injected into the controller. Be aware that
         *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
         *        functions.  Use `$route.current.params` to access the new route parameters, instead.
         *
         *    - `redirectTo` – {(string|function())=} – value to update
         *      {@link ng.$location $location} path with and trigger route redirection.
         *
         *      If `redirectTo` is a function, it will be called with the following parameters:
         *
         *      - `{Object.<string>}` - route parameters extracted from the current
         *        `$location.path()` by applying the current route templateUrl.
         *      - `{string}` - current `$location.path()`
         *      - `{Object}` - current `$location.search()`
         *
         *      The custom `redirectTo` function is expected to return a string which will be used
         *      to update `$location.path()` and `$location.search()`.
         *
         *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
         *      or `$location.hash()` changes.
         *
         *      If the option is set to `false` and url in the browser changes, then
         *      `$routeUpdate` event is broadcasted on the root scope.
         *
         *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
         *
         *      If the option is set to `true`, then the particular route can be matched without being
         *      case sensitive
         *
         * @returns {Object} self
         *
         * @description
         * Adds a new route definition to the `$route` service.
         */
        this.when = function(path, route) {
            //copy original route object to preserve params inherited from proto chain
            var routeCopy = angular.copy(route);
            if (angular.isUndefined(routeCopy.reloadOnSearch)) {
                routeCopy.reloadOnSearch = true;
            }
            if (angular.isUndefined(routeCopy.caseInsensitiveMatch)) {
                routeCopy.caseInsensitiveMatch = this.caseInsensitiveMatch;
            }
            routes[path] = angular.extend(
                routeCopy,
                path && pathRegExp(path, routeCopy)
            );

            // create redirection for trailing slashes
            if (path) {
                var redirectPath = (path[path.length - 1] == '/')
                    ? path.substr(0, path.length - 1)
                    : path + '/';

                routes[redirectPath] = angular.extend(
                    {redirectTo: path},
                    pathRegExp(redirectPath, routeCopy)
                );
            }

            return this;
        };

        /**
         * @ngdoc property
         * @name $routeProvider#caseInsensitiveMatch
         * @description
         *
         * A boolean property indicating if routes defined
         * using this provider should be matched using a case insensitive
         * algorithm. Defaults to `false`.
         */
        this.caseInsensitiveMatch = false;

        /**
         * @param path {string} path
         * @param opts {Object} options
         * @return {?Object}
         *
         * @description
         * Normalizes the given path, returning a regular expression
         * and the original path.
         *
         * Inspired by pathRexp in visionmedia/express/lib/utils.js.
         */
        function pathRegExp(path, opts) {
            var insensitive = opts.caseInsensitiveMatch,
                ret = {
                    originalPath: path,
                    regexp: path
                },
                keys = ret.keys = [];

            path = path
                .replace(/([().])/g, '\\$1')
                .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option) {
                    var optional = option === '?' ? option : null;
                    var star = option === '*' ? option : null;
                    keys.push({ name: key, optional: !!optional });
                    slash = slash || '';
                    return ''
                        + (optional ? '' : slash)
                        + '(?:'
                        + (optional ? slash : '')
                        + (star && '(.+?)' || '([^/]+)')
                        + (optional || '')
                        + ')'
                        + (optional || '');
                })
                .replace(/([\/$\*])/g, '\\$1');

            ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
            return ret;
        }

        /**
         * @ngdoc method
         * @name $routeProvider#otherwise
         *
         * @description
         * Sets route definition that will be used on route change when no other route definition
         * is matched.
         *
         * @param {Object|string} params Mapping information to be assigned to `$route.current`.
         * If called with a string, the value maps to `redirectTo`.
         * @returns {Object} self
         */
        this.otherwise = function(params) {
            if (typeof params === 'string') {
                params = {redirectTo: params};
            }
            this.when(null, params);
            return this;
        };


        this.$get = ['$rootScope',
            '$location',
            '$routeParams',
            '$q',
            '$injector',
            '$templateRequest',
            '$sce',
            function($rootScope, $location, $routeParams, $q, $injector, $templateRequest, $sce) {

                /**
                 * @ngdoc service
                 * @name $route
                 * @requires $location
                 * @requires $routeParams
                 *
                 * @property {Object} current Reference to the current route definition.
                 * The route definition contains:
                 *
                 *   - `controller`: The controller constructor as define in route definition.
                 *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
                 *     controller instantiation. The `locals` contain
                 *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
                 *
                 *     - `$scope` - The current route scope.
                 *     - `$template` - The current route template HTML.
                 *
                 * @property {Object} routes Object with all route configuration Objects as its properties.
                 *
                 * @description
                 * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
                 * It watches `$location.url()` and tries to map the path to an existing route definition.
                 *
                 * Requires the {@link ngRoute `ngRoute`} module to be installed.
                 *
                 * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
                 *
                 * The `$route` service is typically used in conjunction with the
                 * {@link ngRoute.directive:ngView `ngView`} directive and the
                 * {@link ngRoute.$routeParams `$routeParams`} service.
                 *
                 * @example
                 * This example shows how changing the URL hash causes the `$route` to match a route against the
                 * URL, and the `ngView` pulls in the partial.
                 *
                 * <example name="$route-service" module="ngRouteExample"
                 *          deps="angular-route.js" fixBase="true">
                 *   <file name="index.html">
                 *     <div ng-controller="MainController">
                 *       Choose:
                 *       <a href="Book/Moby">Moby</a> |
                 *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
                 *       <a href="Book/Gatsby">Gatsby</a> |
                 *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
                 *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
                 *
                 *       <div ng-view></div>
                 *
                 *       <hr />
                 *
                 *       <pre>$location.path() = {{$location.path()}}</pre>
                 *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
                 *       <pre>$route.current.params = {{$route.current.params}}</pre>
                 *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
                 *       <pre>$routeParams = {{$routeParams}}</pre>
                 *     </div>
                 *   </file>
                 *
                 *   <file name="book.html">
                 *     controller: {{name}}<br />
                 *     Book Id: {{params.bookId}}<br />
                 *   </file>
                 *
                 *   <file name="chapter.html">
                 *     controller: {{name}}<br />
                 *     Book Id: {{params.bookId}}<br />
                 *     Chapter Id: {{params.chapterId}}
                 *   </file>
                 *
                 *   <file name="script.js">
                 *     angular.module('ngRouteExample', ['ngRoute'])
                 *
                 *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
                 *
                 *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
                 *
                 *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
                 *
                 *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
                 *
                 *   </file>
                 *
                 *   <file name="protractor.js" type="protractor">
                 *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
                 *   </file>
                 * </example>
                 */

                /**
                 * @ngdoc event
                 * @name $route#$routeChangeStart
                 * @eventType broadcast on root scope
                 * @description
                 * Broadcasted before a route change. At this  point the route services starts
                 * resolving all of the dependencies needed for the route change to occur.
                 * Typically this involves fetching the view template as well as any dependencies
                 * defined in `resolve` route property. Once  all of the dependencies are resolved
                 * `$routeChangeSuccess` is fired.
                 *
                 * The route change (and the `$location` change that triggered it) can be prevented
                 * by calling `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on}
                 * for more details about event object.
                 *
                 * @param {Object} angularEvent Synthetic event object.
                 * @param {Route} next Future route information.
                 * @param {Route} current Current route information.
                 */

                /**
                 * @ngdoc event
                 * @name $route#$routeChangeSuccess
                 * @eventType broadcast on root scope
                 * @description
                 * Broadcasted after a route change has happened successfully.
                 * The `resolve` dependencies are now available in the `current.locals` property.
                 *
                 * {@link ngRoute.directive:ngView ngView} listens for the directive
                 * to instantiate the controller and render the view.
                 *
                 * @param {Object} angularEvent Synthetic event object.
                 * @param {Route} current Current route information.
                 * @param {Route|Undefined} previous Previous route information, or undefined if current is
                 * first route entered.
                 */

                /**
                 * @ngdoc event
                 * @name $route#$routeChangeError
                 * @eventType broadcast on root scope
                 * @description
                 * Broadcasted if any of the resolve promises are rejected.
                 *
                 * @param {Object} angularEvent Synthetic event object
                 * @param {Route} current Current route information.
                 * @param {Route} previous Previous route information.
                 * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
                 */

                /**
                 * @ngdoc event
                 * @name $route#$routeUpdate
                 * @eventType broadcast on root scope
                 * @description
                 * The `reloadOnSearch` property has been set to false, and we are reusing the same
                 * instance of the Controller.
                 *
                 * @param {Object} angularEvent Synthetic event object
                 * @param {Route} current Current/previous route information.
                 */

                var forceReload = false,
                    preparedRoute,
                    preparedRouteIsUpdateOnly,
                    $route = {
                        routes: routes,

                        /**
                         * @ngdoc method
                         * @name $route#reload
                         *
                         * @description
                         * Causes `$route` service to reload the current route even if
                         * {@link ng.$location $location} hasn't changed.
                         *
                         * As a result of that, {@link ngRoute.directive:ngView ngView}
                         * creates new scope and reinstantiates the controller.
                         */
                        reload: function() {
                            forceReload = true;
                            $rootScope.$evalAsync(function() {
                                // Don't support cancellation of a reload for now...
                                prepareRoute();
                                commitRoute();
                            });
                        },

                        /**
                         * @ngdoc method
                         * @name $route#updateParams
                         *
                         * @description
                         * Causes `$route` service to update the current URL, replacing
                         * current route parameters with those specified in `newParams`.
                         * Provided property names that match the route's path segment
                         * definitions will be interpolated into the location's path, while
                         * remaining properties will be treated as query params.
                         *
                         * @param {!Object<string, string>} newParams mapping of URL parameter names to values
                         */
                        updateParams: function(newParams) {
                            if (this.current && this.current.$$route) {
                                newParams = angular.extend({}, this.current.params, newParams);
                                $location.path(interpolate(this.current.$$route.originalPath, newParams));
                                // interpolate modifies newParams, only query params are left
                                $location.search(newParams);
                            } else {
                                throw $routeMinErr('norout', 'Tried updating route when with no current route');
                            }
                        }
                    };

                $rootScope.$on('$locationChangeStart', prepareRoute);
                $rootScope.$on('$locationChangeSuccess', commitRoute);

                return $route;

                /////////////////////////////////////////////////////

                /**
                 * @param on {string} current url
                 * @param route {Object} route regexp to match the url against
                 * @return {?Object}
                 *
                 * @description
                 * Check if the route matches the current url.
                 *
                 * Inspired by match in
                 * visionmedia/express/lib/router/router.js.
                 */
                function switchRouteMatcher(on, route) {
                    var keys = route.keys,
                        params = {};

                    if (!route.regexp) return null;

                    var m = route.regexp.exec(on);
                    if (!m) return null;

                    for (var i = 1, len = m.length; i < len; ++i) {
                        var key = keys[i - 1];

                        var val = m[i];

                        if (key && val) {
                            params[key.name] = val;
                        }
                    }
                    return params;
                }

                function prepareRoute($locationEvent) {
                    var lastRoute = $route.current;

                    preparedRoute = parseRoute();
                    preparedRouteIsUpdateOnly = preparedRoute && lastRoute && preparedRoute.$$route === lastRoute.$$route
                        && angular.equals(preparedRoute.pathParams, lastRoute.pathParams)
                        && !preparedRoute.reloadOnSearch && !forceReload;

                    if (!preparedRouteIsUpdateOnly && (lastRoute || preparedRoute)) {
                        if ($rootScope.$broadcast('$routeChangeStart', preparedRoute, lastRoute).defaultPrevented) {
                            if ($locationEvent) {
                                $locationEvent.preventDefault();
                            }
                        }
                    }
                }

                function commitRoute() {
                    var lastRoute = $route.current;
                    var nextRoute = preparedRoute;

                    if (preparedRouteIsUpdateOnly) {
                        lastRoute.params = nextRoute.params;
                        angular.copy(lastRoute.params, $routeParams);
                        $rootScope.$broadcast('$routeUpdate', lastRoute);
                    } else if (nextRoute || lastRoute) {
                        forceReload = false;
                        $route.current = nextRoute;
                        if (nextRoute) {
                            if (nextRoute.redirectTo) {
                                if (angular.isString(nextRoute.redirectTo)) {
                                    $location.path(interpolate(nextRoute.redirectTo, nextRoute.params)).search(nextRoute.params)
                                        .replace();
                                } else {
                                    $location.url(nextRoute.redirectTo(nextRoute.pathParams, $location.path(), $location.search()))
                                        .replace();
                                }
                            }
                        }

                        $q.when(nextRoute).
                        then(function() {
                            if (nextRoute) {
                                var locals = angular.extend({}, nextRoute.resolve),
                                    template, templateUrl;

                                angular.forEach(locals, function(value, key) {
                                    locals[key] = angular.isString(value) ?
                                        $injector.get(value) : $injector.invoke(value, null, null, key);
                                });

                                if (angular.isDefined(template = nextRoute.template)) {
                                    if (angular.isFunction(template)) {
                                        template = template(nextRoute.params);
                                    }
                                } else if (angular.isDefined(templateUrl = nextRoute.templateUrl)) {
                                    if (angular.isFunction(templateUrl)) {
                                        templateUrl = templateUrl(nextRoute.params);
                                    }
                                    if (angular.isDefined(templateUrl)) {
                                        nextRoute.loadedTemplateUrl = $sce.valueOf(templateUrl);
                                        template = $templateRequest(templateUrl);
                                    }
                                }
                                if (angular.isDefined(template)) {
                                    locals['$template'] = template;
                                }
                                return $q.all(locals);
                            }
                        }).
                        // after route change
                        then(function(locals) {
                            if (nextRoute == $route.current) {
                                if (nextRoute) {
                                    nextRoute.locals = locals;
                                    angular.copy(nextRoute.params, $routeParams);
                                }
                                $rootScope.$broadcast('$routeChangeSuccess', nextRoute, lastRoute);
                            }
                        }, function(error) {
                            if (nextRoute == $route.current) {
                                $rootScope.$broadcast('$routeChangeError', nextRoute, lastRoute, error);
                            }
                        });
                    }
                }


                /**
                 * @returns {Object} the current active route, by matching it against the URL
                 */
                function parseRoute() {
                    // Match a route
                    var params, match;
                    angular.forEach(routes, function(route, path) {
                        if (!match && (params = switchRouteMatcher($location.path(), route))) {
                            match = inherit(route, {
                                params: angular.extend({}, $location.search(), params),
                                pathParams: params});
                            match.$$route = route;
                        }
                    });
                    // No route matched; fallback to "otherwise" route
                    return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
                }

                /**
                 * @returns {string} interpolation of the redirect path with the parameters
                 */
                function interpolate(string, params) {
                    var result = [];
                    angular.forEach((string || '').split(':'), function(segment, i) {
                        if (i === 0) {
                            result.push(segment);
                        } else {
                            var segmentMatch = segment.match(/(\w+)(?:[?*])?(.*)/);
                            var key = segmentMatch[1];
                            result.push(params[key]);
                            result.push(segmentMatch[2] || '');
                            delete params[key];
                        }
                    });
                    return result.join('');
                }
            }];
    }

    ngRouteModule.provider('$routeParams', $RouteParamsProvider);


    /**
     * @ngdoc service
     * @name $routeParams
     * @requires $route
     *
     * @description
     * The `$routeParams` service allows you to retrieve the current set of route parameters.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * The route parameters are a combination of {@link ng.$location `$location`}'s
     * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
     * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
     *
     * In case of parameter name collision, `path` params take precedence over `search` params.
     *
     * The service guarantees that the identity of the `$routeParams` object will remain unchanged
     * (but its properties will likely change) even when a route change occurs.
     *
     * Note that the `$routeParams` are only updated *after* a route change completes successfully.
     * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
     * Instead you can use `$route.current.params` to access the new route's parameters.
     *
     * @example
     * ```js
     *  // Given:
     *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
     *  // Route: /Chapter/:chapterId/Section/:sectionId
     *  //
     *  // Then
     *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
     * ```
     */
    function $RouteParamsProvider() {
        this.$get = function() { return {}; };
    }

    ngRouteModule.directive('ngView', ngViewFactory);
    ngRouteModule.directive('ngView', ngViewFillContentFactory);


    /**
     * @ngdoc directive
     * @name ngView
     * @restrict ECA
     *
     * @description
     * # Overview
     * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
     * including the rendered template of the current route into the main layout (`index.html`) file.
     * Every time the current route changes, the included view changes with it according to the
     * configuration of the `$route` service.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * @animations
     * enter - animation is used to bring new content into the browser.
     * leave - animation is used to animate existing content away.
     *
     * The enter and leave animation occur concurrently.
     *
     * @scope
     * @priority 400
     * @param {string=} onload Expression to evaluate whenever the view updates.
     *
     * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
     *
     *                  - If the attribute is not set, disable scrolling.
     *                  - If the attribute is set without value, enable scrolling.
     *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
     *                    as an expression yields a truthy value.
     * @example
     <example name="ngView-directive" module="ngViewExample"
     deps="angular-route.js;angular-animate.js"
     animations="true" fixBase="true">
     <file name="index.html">
     <div ng-controller="MainCtrl as main">
     Choose:
     <a href="Book/Moby">Moby</a> |
     <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     <a href="Book/Gatsby">Gatsby</a> |
     <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     <a href="Book/Scarlet">Scarlet Letter</a><br/>

     <div class="view-animate-container">
     <div ng-view class="view-animate"></div>
     </div>
     <hr />

     <pre>$location.path() = {{main.$location.path()}}</pre>
     <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
     <pre>$route.current.params = {{main.$route.current.params}}</pre>
     <pre>$routeParams = {{main.$routeParams}}</pre>
     </div>
     </file>

     <file name="book.html">
     <div>
     controller: {{book.name}}<br />
     Book Id: {{book.params.bookId}}<br />
     </div>
     </file>

     <file name="chapter.html">
     <div>
     controller: {{chapter.name}}<br />
     Book Id: {{chapter.params.bookId}}<br />
     Chapter Id: {{chapter.params.chapterId}}
     </div>
     </file>

     <file name="animations.css">
     .view-animate-container {
          position:relative;
          height:100px!important;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

     .view-animate {
          padding:10px;
        }

     .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

     .view-animate.ng-enter {
          left:100%;
        }
     .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
     .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
     </file>

     <file name="script.js">
     angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
     .config(['$routeProvider', '$locationProvider',
     function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              $locationProvider.html5Mode(true);
          }])
     .controller('MainCtrl', ['$route', '$routeParams', '$location',
     function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
     .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
     .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

     </file>

     <file name="protractor.js" type="protractor">
     it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
     </file>
     </example>
     */


    /**
     * @ngdoc event
     * @name ngView#$viewContentLoaded
     * @eventType emit on the current ngView scope
     * @description
     * Emitted every time the ngView content is reloaded.
     */
    ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
    function ngViewFactory($route, $anchorScroll, $animate) {
        return {
            restrict: 'ECA',
            terminal: true,
            priority: 400,
            transclude: 'element',
            link: function(scope, $element, attr, ctrl, $transclude) {
                var currentScope,
                    currentElement,
                    previousLeaveAnimation,
                    autoScrollExp = attr.autoscroll,
                    onloadExp = attr.onload || '';

                scope.$on('$routeChangeSuccess', update);
                update();

                function cleanupLastView() {
                    if (previousLeaveAnimation) {
                        $animate.cancel(previousLeaveAnimation);
                        previousLeaveAnimation = null;
                    }

                    if (currentScope) {
                        currentScope.$destroy();
                        currentScope = null;
                    }
                    if (currentElement) {
                        previousLeaveAnimation = $animate.leave(currentElement);
                        previousLeaveAnimation.then(function() {
                            previousLeaveAnimation = null;
                        });
                        currentElement = null;
                    }
                }

                function update() {
                    var locals = $route.current && $route.current.locals,
                        template = locals && locals.$template;

                    if (angular.isDefined(template)) {
                        var newScope = scope.$new();
                        var current = $route.current;

                        // Note: This will also link all children of ng-view that were contained in the original
                        // html. If that content contains controllers, ... they could pollute/change the scope.
                        // However, using ng-view on an element with additional content does not make sense...
                        // Note: We can't remove them in the cloneAttchFn of $transclude as that
                        // function is called before linking the content, which would apply child
                        // directives to non existing elements.
                        var clone = $transclude(newScope, function(clone) {
                            $animate.enter(clone, null, currentElement || $element).then(function onNgViewEnter() {
                                if (angular.isDefined(autoScrollExp)
                                    && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                                    $anchorScroll();
                                }
                            });
                            cleanupLastView();
                        });

                        currentElement = clone;
                        currentScope = current.scope = newScope;
                        currentScope.$emit('$viewContentLoaded');
                        currentScope.$eval(onloadExp);
                    } else {
                        cleanupLastView();
                    }
                }
            }
        };
    }

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
    ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
    function ngViewFillContentFactory($compile, $controller, $route) {
        return {
            restrict: 'ECA',
            priority: -400,
            link: function(scope, $element) {
                var current = $route.current,
                    locals = current.locals;

                $element.html(locals.$template);

                var link = $compile($element.contents());

                if (current.controller) {
                    locals.$scope = scope;
                    var controller = $controller(current.controller, locals);
                    if (current.controllerAs) {
                        scope[current.controllerAs] = controller;
                    }
                    $element.data('$ngControllerController', controller);
                    $element.children().data('$ngControllerController', controller);
                }

                link(scope);
            }
        };
    }


})(window, window.angular);

/*
 AngularJS v1.3.20
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function(y,s,z){'use strict';function t(f,k,p){n.directive(f,["$parse","$swipe",function(d,e){return function(l,m,g){function h(a){if(!b)return!1;var c=Math.abs(a.y-b.y);a=(a.x-b.x)*k;return q&&75>c&&0<a&&30<a&&.3>c/a}var c=d(g[f]),b,q,a=["touch"];s.isDefined(g.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,c){b=a;q=!0},cancel:function(a){q=!1},end:function(a,b){h(a)&&l.$apply(function(){m.triggerHandler(p);c(l,{$event:b})})}},a)}}])}var n=s.module("ngTouch",[]);n.factory("$swipe",
    [function(){function f(d){d=d.originalEvent||d;var e=d.touches&&d.touches.length?d.touches:[d];d=d.changedTouches&&d.changedTouches[0]||e[0];return{x:d.clientX,y:d.clientY}}function k(d,e){var l=[];s.forEach(d,function(d){(d=p[d][e])&&l.push(d)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(d,e,l){var m,g,h,c,b=!1;l=l||["mouse","touch"];d.on(k(l,"start"),function(a){h=
        f(a);b=!0;g=m=0;c=h;e.start&&e.start(h,a)});var q=k(l,"cancel");if(q)d.on(q,function(a){b=!1;e.cancel&&e.cancel(a)});d.on(k(l,"move"),function(a){if(b&&h){var d=f(a);m+=Math.abs(d.x-c.x);g+=Math.abs(d.y-c.y);c=d;10>m&&10>g||(g>m?(b=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(d,a)))}});d.on(k(l,"end"),function(a){b&&(b=!1,e.end&&e.end(f(a),a))})}}}]);n.config(["$provide",function(f){f.decorator("ngClickDirective",["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",
    ["$parse","$timeout","$rootElement",function(f,k,p){function d(c,b,d){for(var a=0;a<c.length;a+=2){var e=c[a+1],g=d;if(25>Math.abs(c[a]-b)&&25>Math.abs(e-g))return c.splice(a,a+2),!0}return!1}function e(c){if(!(2500<Date.now()-m)){var b=c.touches&&c.touches.length?c.touches:[c],e=b[0].clientX,b=b[0].clientY;if(!(1>e&&1>b||h&&h[0]===e&&h[1]===b)){h&&(h=null);var a=c.target;"label"===s.lowercase(a.nodeName||a[0]&&a[0].nodeName)&&(h=[e,b]);d(g,e,b)||(c.stopPropagation(),c.preventDefault(),c.target&&
    c.target.blur&&c.target.blur())}}}function l(c){c=c.touches&&c.touches.length?c.touches:[c];var b=c[0].clientX,d=c[0].clientY;g.push(b,d);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==d){g.splice(a,a+2);break}},2500,!1)}var m,g,h;return function(c,b,h){function a(){n=!1;b.removeClass("ng-click-active")}var k=f(h.ngClick),n=!1,r,t,v,w;b.on("touchstart",function(a){n=!0;r=a.target?a.target:a.srcElement;3==r.nodeType&&(r=r.parentNode);b.addClass("ng-click-active");t=Date.now();a=a.originalEvent||
        a;a=(a.touches&&a.touches.length?a.touches:[a])[0];v=a.clientX;w=a.clientY});b.on("touchmove",function(b){a()});b.on("touchcancel",function(b){a()});b.on("touchend",function(c){var k=Date.now()-t,f=c.originalEvent||c,u=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=u.clientX,u=u.clientY,x=Math.sqrt(Math.pow(f-v,2)+Math.pow(u-w,2));n&&750>k&&12>x&&(g||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",l,!0),g=[]),m=Date.now(),
        d(g,f,u),r&&r.blur(),s.isDefined(h.disabled)&&!1!==h.disabled||b.triggerHandler("click",[c]));a()});b.onclick=function(a){};b.on("click",function(a,b){c.$apply(function(){k(c,{$event:b||a})})});b.on("mousedown",function(a){b.addClass("ng-click-active")});b.on("mousemove mouseup",function(a){b.removeClass("ng-click-active")})}}]);t("ngSwipeLeft",-1,"swipeleft");t("ngSwipeRight",1,"swiperight")})(window,window.angular);
//# sourceMappingURL=angular-touch.min.js.map


//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map

