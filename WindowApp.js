(ns => {});
var v = eval("(function (e) {let t = e;for (; !t.parentElement.classList.contains(\"react-resizable\"); ) t = t.parentElement;return t;});");
var h = eval("(function (e, t) {let o = new MutationObserver(function (r) {r.forEach(function (n) {n.type === \"childList\" && n.removedNodes.forEach(s => {E(s, e) && (t(), o.disconnect());});});});return (o.observe(document.body, {childList: !0,subtree: !0}), {cleanup: () => o.disconnect()});});");
var E = eval("(function (e, t) {return (\"children\" in e) ? [...e.children].reduce((o, r) => o || r == t || E(r, t), !1) : !1;});");
var y = eval("(function ({contexts: e, children: t}) {return e.reduce((o, {context: {Provider: r}, value: n}) => T.default.createElement(r, {value: n}, o), t);});");
var F = eval("(function (e) {let t = [];return {cleanup: () => {(t.forEach(o => o()), e.tprint(\"Terminated\"), e.closeTail());},async mount(o) {return new Promise(async r => {(e.tail(), e.disableLog(\"ALL\"), e.printRaw(i.default.createElement(\"span\", {\"data-pid\": e.pid})), await e.sleep(0));let n = v(document.querySelector(`span[data-pid=\"${e.pid}\"]`)), s = () => {let d = e.ui.getTheme();return (Object.entries(d).forEach(([M, R]) => {n.style.setProperty(`--${M}`, R);}), n.style.flexDirection = \"unset\", i.default.createElement(\"div\", {style: {position: \"relative\",color: \"var(--primarylight)\",width: \"100%\",height: \"100%\",fontFamily: '\"Lucida Console\", \"Lucida Sans Unicode\", \"Fira Mono\", Consolas, \"Courier New\", Courier, monospace, \"Times New Roman\"'}}, o));}, N = [{context: p,value: e}, {context: m,value: r}, {context: u,value: d => t.push(d)}];(t.push(() => x.default.unmountComponentAtNode(n)), x.default.render(i.default.createElement(y, {contexts: N}, i.default.createElement(s, null)), n), h(n, () => r()));});}};});");
var P = eval("Object.create;");
var f = eval("Object.defineProperty;");
var S = eval("Object.getOwnPropertyDescriptor;");
var D = eval("Object.getOwnPropertyNames;");
var O = eval("Object.getPrototypeOf;"), W = eval("Object.prototype.hasOwnProperty;");
var C = eval("((e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports));");
var g = eval("((e, t, o, r) => {if (t && typeof t == \"object\" || typeof t == \"function\") for (let n of D(t)) !W.call(e, n) && n !== o && f(e, n, {get: () => t[n],enumerable: !(r = S(t, n)) || r.enumerable});return e;});");
var c = eval("((e, t, o) => (o = e != null ? P(O(e)) : {}, g(t || !e || !e.__esModule ? f(o, \"default\", {value: e,enumerable: !0}) : o, e)));");
var a = eval("C((q, w) => {w.exports = window.React;});");
var L = eval("C((j, b) => {b.exports = window.ReactDOM;});");
var T = eval("c(a());"), l = eval("c(a());"), p = eval("(0, l.createContext)(null);"), u = eval("(0, l.createContext)(null);"), m = eval("(0, l.createContext)(null);");
var i = eval("c(a());"), x = eval("c(L());");
export {u as CleanupContext, p as NetscriptContext, m as TerminateContext, F as createWindowApp};