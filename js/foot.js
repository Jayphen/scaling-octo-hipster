!function e(t,n,o){function i(r,s){if(!n[r]){if(!t[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+r+"'")}var l=n[r]={exports:{}};t[r][0].call(l.exports,function(e){var n=t[r][1][e];return i(n?n:e)},l,l.exports,e,t,n,o)}return n[r].exports}for(var a="function"==typeof require&&require,r=0;r<o.length;r++)i(o[r]);return i}({1:[function(e){var t,n,o,i;e("froogaloop"),t=document.getElementById("hiw-vid"),i=$f(t),o=function(){return i.api("play")},n=function(){return i.api("pause")},$(document).on("cssmodal:show",o),$(document).on("cssmodal:hide",n)},{froogaloop:4}],2:[function(e){var t;e("./autoplayVideo"),t=e("modal"),t.init()},{"./autoplayVideo":1,modal:3}],3:[function(e,t){!function(e){"use strict";var n={activeElement:void 0,lastActive:void 0,stackedElements:[],tabbableElements:"a[href], area[href], input:not([disabled]),select:not([disabled]), textarea:not([disabled]),button:not([disabled]), iframe, object, embed, *[tabindex],*[contenteditable]",on:function(e,t,n){if("string"!=typeof e)throw new Error("Type error: `error` has to be a string");if("function"!=typeof n)throw new Error("Type error: `callback` has to be a function");t&&("addEventListener"in t?t.addEventListener(e,n,!1):"hashchange"===e&&t.attachEvent?t.attachEvent("on"+e,n):bean.on(t,e,n))},trigger:function(t,n){var o,i={detail:{modal:n}};e.bean?bean.fire(document,t,i):document.createEvent?(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,!1,!1,{modal:n}),document.dispatchEvent(o)):(o=new CustomEvent(t,i),document.dispatchEvent(o))},addClass:function(e,t){e&&!e.className.match(t)&&(e.className+=" "+t)},removeClass:function(e,t){e.className=e.className.replace(t,"").replace("  "," ")},hasClass:function(e,t){return!!e.className.match(t)},setFocus:function(){n.activeElement&&(n.lastActive=document.activeElement,n.activeElement.focus(),n.keepFocus(n.activeElement))},removeFocus:function(){n.lastActive&&n.lastActive.focus()},keepFocus:function(e){var t=[];try{t=e.querySelectorAll(n.tabbableElements)}catch(o){return}var i=t[0],a=t[t.length-1],r=function(e){var t=e.which||e.keyCode;9===t&&(e.preventDefault=e.preventDefault||function(){e.returnValue=!1},e.target!==a||e.shiftKey?e.target===i&&e.shiftKey&&(e.preventDefault(),a.focus()):(e.preventDefault(),i.focus()))};n.on("keydown",e,r)},setActive:function(e){n.addClass(e,"is-active"),n.activeElement=e,n.activeElement.setAttribute("aria-hidden","false"),n.setFocus(e.id),n.trigger("cssmodal:show",n.activeElement)},unsetActive:function(e){n.activeElement&&(n.removeClass(n.activeElement,"is-active"),n.trigger("cssmodal:hide",n.activeElement),n.activeElement.setAttribute("aria-hidden","true"),n.removeFocus(),e&&n.stackModal(n.activeElement),!e&&n.stackedElements.length>0&&n.unstackModal(),n.activeElement=null)},stackModal:function(e){n.addClass(e,"is-stacked"),n.stackedElements.push(n.activeElement)},unstackModal:function(){var e=n.stackedElements.length,t=n.stackedElements[e-1];n.removeClass(t,"is-stacked"),window.location.hash=t.id,n.stackedElements.splice(e-1,1)},mainHandler:function(e){var t,o=window.location.hash.replace("#",""),i=0,a=[],r=document.getElementById(o);if(-1!==o.indexOf("/")){if(a=o.split("/"),i=a.pop(),o=a.join("/"),r=document.getElementById(o),!r)throw new Error('ReferenceError: element "'+o+'" does not exist!');r.index=1*i}return r?(e.preventDefault=e.preventDefault||function(){e.returnValue=!1},e.preventDefault(),t=r.children[0],t&&t.className.match(/modal-inner/)&&(n.addClass(document.documentElement,"has-overlay"),n.unsetActive(!n.hasClass(r,"is-active")),n.setActive(r))):(n.removeClass(document.documentElement,"has-overlay"),n.unsetActive()),!0},init:function(){this.on("keyup",document,function(e){var t=window.location.hash.replace("#","");if(""!==t&&"!"!==t&&27===e.keyCode){if(window.location.hash="!",n.lastActive)return!1;n.removeFocus()}},!1),this.on("hashchange",window,n.mainHandler),this.on("load",window,n.mainHandler)}};"object"==typeof t&&t&&"object"==typeof t.exports?t.exports=n:"function"==typeof define&&define.amd?define("CSSModal",[],function(){if(!e.CustomEvent&&!e.bean)throw new Error("This browser doesn't support CustomEvent - please include bean: https://github.com/fat/bean");return n.init(),n}):"object"==typeof e&&"object"==typeof e.document&&(e.CSSModal=n,n.init())}(window)},{}],4:[function(e,t){(function(n){__browserify_shim_require__=e,function(e,t,n,o,i){!function(){function e(t){return new e.fn.init(t)}function t(e,t,n){if(!n.contentWindow.postMessage)return!1;var o=n.getAttribute("src").split("?")[0],i=JSON.stringify({method:e,value:t});"//"===o.substr(0,2)&&(o=window.location.protocol+o),n.contentWindow.postMessage(i,o)}function n(e){var t,n;try{t=JSON.parse(e.data),n=t.event||t.method}catch(o){}if("ready"!=n||l||(l=!0),e.origin!=u)return!1;var a=t.value,r=t.data,s=""===s?null:t.player_id,c=i(n,s),d=[];return c?(void 0!==a&&d.push(a),r&&d.push(r),s&&d.push(s),d.length>0?c.apply(null,d):c.call()):!1}function o(e,t,n){n?(c[n]||(c[n]={}),c[n][e]=t):c[e]=t}function i(e,t){return t?c[t][e]:c[e]}function a(e,t){if(t&&c[t]){if(!c[t][e])return!1;c[t][e]=null}else{if(!c[e])return!1;c[e]=null}return!0}function r(e){"//"===e.substr(0,2)&&(e=window.location.protocol+e);for(var t=e.split("/"),n="",o=0,i=t.length;i>o&&3>o;o++)n+=t[o],2>o&&(n+="/");return n}function s(e){return!!(e&&e.constructor&&e.call&&e.apply)}var c={},l=!1,u=(Array.prototype.slice,"");return e.fn=e.prototype={element:null,init:function(e){return"string"==typeof e&&(e=document.getElementById(e)),this.element=e,u=r(this.element.getAttribute("src")),this},api:function(e,n){if(!this.element||!e)return!1;var i=this,a=i.element,r=""!==a.id?a.id:null,c=s(n)?null:n,l=s(n)?n:null;return l&&o(e,l,r),t(e,c,a),i},addEvent:function(e,n){if(!this.element)return!1;var i=this,a=i.element,r=""!==a.id?a.id:null;return o(e,n,r),"ready"!=e?t("addEventListener",e,a):"ready"==e&&l&&n.call(null,r),i},removeEvent:function(e){if(!this.element)return!1;var n=this,o=n.element,i=""!==o.id?o.id:null,r=a(e,i);"ready"!=e&&r&&t("removeEventListener",e,o)}},e.fn.init.prototype=e.fn,window.addEventListener?window.addEventListener("message",n,!1):window.attachEvent("onmessage",n),window.Froogaloop=window.$f=e}();i("undefined"!=typeof $f?$f:window.$f)}.call(n,void 0,void 0,void 0,void 0,function(e){t.exports=e})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[2]);