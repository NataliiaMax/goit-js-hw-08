var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=a||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,m=function(){return u.Date.now()};function d(e,t,n){var o,r,i,a,f,u,c=0,d=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(T,t),d?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||p&&e-c>=i}function T(){var e=m();if(S(e))return O(e);f=setTimeout(T,function(e){var n=t-(e-u);return p?s(n,i-(e-c)):n}(e))}function O(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function h(){var e=m(),n=S(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(p)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=v(t)||0,g(n)&&(d=!!n.leading,i=(p="maxWait"in n)?l(v(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},h.flush=function(){return void 0===f?a:O(m())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=g(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||r.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const p={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),message:document.querySelector("textarea")};console.log(p),p.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),p.email.addEventListener("input",y),p.message.addEventListener("input",y);const b={};function y(e){b[e.target.name]=e.currentTarget.value,localStorage.setItem("feedback-form-state",JSON.stringify(b))}!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(e.email),console.log(e.message),console.log(e),e&&(p.message.textContent=e.message,p.email.textContent=e.email)}();
//# sourceMappingURL=03-feedback.81fdd079.js.map
