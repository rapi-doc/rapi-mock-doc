/*! Mock UI of @rapidoc/mock (MIT). Includes Lit, Copyright Google LLC, BSD-3-Clause, and TanStack Table, Copyright Tanner Linsley, MIT: see mock-ui.LICENSE.txt */
// ../../node_modules/@lit/reactive-element/css-tag.js
var e = globalThis, t = e.ShadowRoot && (e.ShadyCSS === void 0 || e.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, n = Symbol(), r = /* @__PURE__ */ new WeakMap(), i = class {
	constructor(e, t, r) {
		if (this._$cssResult$ = !0, r !== n) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = e, this.t = t;
	}
	get styleSheet() {
		let e = this.o, n = this.t;
		if (t && e === void 0) {
			let t = n !== void 0 && n.length === 1;
			t && (e = r.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), t && r.set(n, e));
		}
		return e;
	}
	toString() {
		return this.cssText;
	}
}, a = (e) => new i(typeof e == "string" ? e : e + "", void 0, n), o = (e, ...t) => new i(e.length === 1 ? e[0] : t.reduce((t, n, r) => t + ((e) => {
	if (!0 === e._$cssResult$) return e.cssText;
	if (typeof e == "number") return e;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(n) + e[r + 1], e[0]), e, n), s = (n, r) => {
	if (t) n.adoptedStyleSheets = r.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
	else for (let t of r) {
		let r = document.createElement("style"), i = e.litNonce;
		i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, n.appendChild(r);
	}
}, c = t ? (e) => e : (e) => e instanceof CSSStyleSheet ? ((e) => {
	let t = "";
	for (let n of e.cssRules) t += n.cssText;
	return a(t);
})(e) : e, { is: l, defineProperty: u, getOwnPropertyDescriptor: d, getOwnPropertyNames: f, getOwnPropertySymbols: p, getPrototypeOf: m } = Object, ee = globalThis, te = ee.trustedTypes, ne = te ? te.emptyScript : "", h = ee.reactiveElementPolyfillSupport, g = (e, t) => e, _ = {
	toAttribute(e, t) {
		switch (t) {
			case Boolean:
				e = e ? ne : null;
				break;
			case Object:
			case Array: e = e == null ? e : JSON.stringify(e);
		}
		return e;
	},
	fromAttribute(e, t) {
		let n = e;
		switch (t) {
			case Boolean:
				n = e !== null;
				break;
			case Number:
				n = e === null ? null : Number(e);
				break;
			case Object:
			case Array: try {
				n = JSON.parse(e);
			} catch {
				n = null;
			}
		}
		return n;
	}
}, v = (e, t) => !l(e, t), re = {
	attribute: !0,
	type: String,
	converter: _,
	reflect: !1,
	useDefault: !1,
	hasChanged: v
};
Symbol.metadata ??= Symbol("metadata"), ee.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y = class extends HTMLElement {
	static addInitializer(e) {
		this._$Ei(), (this.l ??= []).push(e);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(e, t = re) {
		if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
			let n = Symbol(), r = this.getPropertyDescriptor(e, n, t);
			r !== void 0 && u(this.prototype, e, r);
		}
	}
	static getPropertyDescriptor(e, t, n) {
		let { get: r, set: i } = d(this.prototype, e) ?? {
			get() {
				return this[t];
			},
			set(e) {
				this[t] = e;
			}
		};
		return {
			get: r,
			set(t) {
				let a = r?.call(this);
				i?.call(this, t), this.requestUpdate(e, a, n);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(e) {
		return this.elementProperties.get(e) ?? re;
	}
	static _$Ei() {
		if (this.hasOwnProperty(g("elementProperties"))) return;
		let e = m(this);
		e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(g("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(g("properties"))) {
			let e = this.properties, t = [...f(e), ...p(e)];
			for (let n of t) this.createProperty(n, e[n]);
		}
		let e = this[Symbol.metadata];
		if (e !== null) {
			let t = litPropertyMetadata.get(e);
			if (t !== void 0) for (let [e, n] of t) this.elementProperties.set(e, n);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [e, t] of this.elementProperties) {
			let n = this._$Eu(e, t);
			n !== void 0 && this._$Eh.set(n, e);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(e) {
		let t = [];
		if (Array.isArray(e)) {
			let n = new Set(e.flat(1 / 0).reverse());
			for (let e of n) t.unshift(c(e));
		} else e !== void 0 && t.push(c(e));
		return t;
	}
	static _$Eu(e, t) {
		let n = t.attribute;
		return !1 === n ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((e) => e(this));
	}
	addController(e) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(e), this.renderRoot !== void 0 && this.isConnected && e.hostConnected?.();
	}
	removeController(e) {
		this._$EO?.delete(e);
	}
	_$E_() {
		let e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
		for (let n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
		e.size > 0 && (this._$Ep = e);
	}
	createRenderRoot() {
		let e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return s(e, this.constructor.elementStyles), e;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((e) => e.hostConnected?.());
	}
	enableUpdating(e) {}
	disconnectedCallback() {
		this._$EO?.forEach((e) => e.hostDisconnected?.());
	}
	attributeChangedCallback(e, t, n) {
		this._$AK(e, n);
	}
	_$ET(e, t) {
		let n = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, n);
		if (r !== void 0 && !0 === n.reflect) {
			let i = (n.converter?.toAttribute === void 0 ? _ : n.converter).toAttribute(t, n.type);
			this._$Em = e, i == null ? this.removeAttribute(r) : this.setAttribute(r, i), this._$Em = null;
		}
	}
	_$AK(e, t) {
		let n = this.constructor, r = n._$Eh.get(e);
		if (r !== void 0 && this._$Em !== r) {
			let e = n.getPropertyOptions(r), i = typeof e.converter == "function" ? { fromAttribute: e.converter } : e.converter?.fromAttribute === void 0 ? _ : e.converter;
			this._$Em = r;
			let a = i.fromAttribute(t, e.type);
			this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
		}
	}
	requestUpdate(e, t, n, r = !1, i) {
		if (e !== void 0) {
			let a = this.constructor;
			if (!1 === r && (i = this[e]), n ??= a.getPropertyOptions(e), !((n.hasChanged ?? v)(i, t) || n.useDefault && n.reflect && i === this._$Ej?.get(e) && !this.hasAttribute(a._$Eu(e, n)))) return;
			this.C(e, t, n);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(e, t, { useDefault: n, reflect: r, wrapped: i }, a) {
		n && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(e) && (this._$Ej.set(e, a ?? t ?? this[e]), !0 !== i || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), !0 === r && this._$Em !== e && (this._$Eq ??= /* @__PURE__ */ new Set()).add(e));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (e) {
			Promise.reject(e);
		}
		let e = this.scheduleUpdate();
		return e != null && await e, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [e, t] of this._$Ep) this[e] = t;
				this._$Ep = void 0;
			}
			let e = this.constructor.elementProperties;
			if (e.size > 0) for (let [t, n] of e) {
				let { wrapped: e } = n, r = this[t];
				!0 !== e || this._$AL.has(t) || r === void 0 || this.C(t, void 0, n, r);
			}
		}
		let e = !1, t = this._$AL;
		try {
			e = this.shouldUpdate(t), e ? (this.willUpdate(t), this._$EO?.forEach((e) => e.hostUpdate?.()), this.update(t)) : this._$EM();
		} catch (t) {
			throw e = !1, this._$EM(), t;
		}
		e && this._$AE(t);
	}
	willUpdate(e) {}
	_$AE(e) {
		this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(e) {
		return !0;
	}
	update(e) {
		this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
	}
	updated(e) {}
	firstUpdated(e) {}
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[g("elementProperties")] = /* @__PURE__ */ new Map(), y[g("finalized")] = /* @__PURE__ */ new Map(), h?.({ ReactiveElement: y }), (ee.reactiveElementVersions ??= []).push("2.1.2");
// ../../node_modules/lit-html/lit-html.js
var ie = globalThis, ae = (e) => e, oe = ie.trustedTypes, se = oe ? oe.createPolicy("lit-html", { createHTML: (e) => e }) : void 0, ce = "$lit$", b = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + b, ue = `<${le}>`, x = document, de = () => x.createComment(""), fe = (e) => e === null || typeof e != "object" && typeof e != "function", pe = Array.isArray, me = (e) => pe(e) || typeof e?.[Symbol.iterator] == "function", he = "[ 	\n\f\r]", ge = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _e = /-->/g, ve = />/g, S = RegExp(`>|${he}(?:([^\\s"'>=/]+)(${he}*=${he}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), ye = /'/g, be = /"/g, xe = /^(?:script|style|textarea|title)$/i, Se = (e) => (t, ...n) => ({
	_$litType$: e,
	strings: t,
	values: n
}), C = Se(1), Ce = Se(2), w = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), we = /* @__PURE__ */ new WeakMap(), E = x.createTreeWalker(x, 129);
function Te(e, t) {
	if (!pe(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return se === void 0 ? t : se.createHTML(t);
}
var Ee = (e, t) => {
	let n = e.length - 1, r = [], i, a = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = ge;
	for (let t = 0; t < n; t++) {
		let n = e[t], s, c, l = -1, u = 0;
		for (; u < n.length && (o.lastIndex = u, c = o.exec(n), c !== null);) u = o.lastIndex, o === ge ? c[1] === "!--" ? o = _e : c[1] === void 0 ? c[2] === void 0 ? c[3] !== void 0 && (o = S) : (xe.test(c[2]) && (i = RegExp("</" + c[2], "g")), o = S) : o = ve : o === S ? c[0] === ">" ? (o = i ?? ge, l = -1) : c[1] === void 0 ? l = -2 : (l = o.lastIndex - c[2].length, s = c[1], o = c[3] === void 0 ? S : c[3] === "\"" ? be : ye) : o === be || o === ye ? o = S : o === _e || o === ve ? o = ge : (o = S, i = void 0);
		let d = o === S && e[t + 1].startsWith("/>") ? " " : "";
		a += o === ge ? n + ue : l >= 0 ? (r.push(s), n.slice(0, l) + ce + n.slice(l) + b + d) : n + b + (l === -2 ? t : d);
	}
	return [Te(e, a + (e[n] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
}, De = class e {
	constructor({ strings: t, _$litType$: n }, r) {
		let i;
		this.parts = [];
		let a = 0, o = 0, s = t.length - 1, c = this.parts, [l, u] = Ee(t, n);
		if (this.el = e.createElement(l, r), E.currentNode = this.el.content, n === 2 || n === 3) {
			let e = this.el.content.firstChild;
			e.replaceWith(...e.childNodes);
		}
		for (; (i = E.nextNode()) !== null && c.length < s;) {
			if (i.nodeType === 1) {
				if (i.hasAttributes()) for (let e of i.getAttributeNames()) if (e.endsWith(ce)) {
					let t = u[o++], n = i.getAttribute(e).split(b), r = /([.?@])?(.*)/.exec(t);
					c.push({
						type: 1,
						index: a,
						name: r[2],
						strings: n,
						ctor: r[1] === "." ? je : r[1] === "?" ? Me : r[1] === "@" ? Ne : Ae
					}), i.removeAttribute(e);
				} else e.startsWith(b) && (c.push({
					type: 6,
					index: a
				}), i.removeAttribute(e));
				if (xe.test(i.tagName)) {
					let e = i.textContent.split(b), t = e.length - 1;
					if (t > 0) {
						i.textContent = oe ? oe.emptyScript : "";
						for (let n = 0; n < t; n++) i.append(e[n], de()), E.nextNode(), c.push({
							type: 2,
							index: ++a
						});
						i.append(e[t], de());
					}
				}
			} else if (i.nodeType === 8) {
				if (i.data === le) c.push({
					type: 2,
					index: a
				});
				else {
					let e = -1;
					for (; (e = i.data.indexOf(b, e + 1)) !== -1;) c.push({
						type: 7,
						index: a
					}), e += b.length - 1;
				}
			}
			a++;
		}
	}
	static createElement(e, t) {
		let n = x.createElement("template");
		return n.innerHTML = e, n;
	}
};
function D(e, t, n = e, r) {
	if (t === w) return t;
	let i = r === void 0 ? n._$Cl : n._$Co?.[r], a = fe(t) ? void 0 : t._$litDirective$;
	return i?.constructor !== a && (i?._$AO?.(!1), a === void 0 ? i = void 0 : (i = new a(e), i._$AT(e, n, r)), r === void 0 ? n._$Cl = i : (n._$Co ??= [])[r] = i), i !== void 0 && (t = D(e, i._$AS(e, t.values), i, r)), t;
}
var Oe = class {
	constructor(e, t) {
		this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(e) {
		let { el: { content: t }, parts: n } = this._$AD, r = (e?.creationScope ?? x).importNode(t, !0);
		E.currentNode = r;
		let i = E.nextNode(), a = 0, o = 0, s = n[0];
		for (; s !== void 0;) {
			if (a === s.index) {
				let t;
				s.type === 2 ? t = new ke(i, i.nextSibling, this, e) : s.type === 1 ? t = new s.ctor(i, s.name, s.strings, this, e) : s.type === 6 && (t = new Pe(i, this, e)), this._$AV.push(t), s = n[++o];
			}
			a !== s?.index && (i = E.nextNode(), a++);
		}
		return E.currentNode = x, r;
	}
	p(e) {
		let t = 0;
		for (let n of this._$AV) n !== void 0 && (n.strings === void 0 ? n._$AI(e[t]) : (n._$AI(e, n, t), t += n.strings.length - 2)), t++;
	}
}, ke = class e {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(e, t, n, r) {
		this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = r, this._$Cv = r?.isConnected ?? !0;
	}
	get parentNode() {
		let e = this._$AA.parentNode, t = this._$AM;
		return t !== void 0 && e?.nodeType === 11 && (e = t.parentNode), e;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(e, t = this) {
		e = D(this, e, t), fe(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== w && this._(e) : e._$litType$ === void 0 ? e.nodeType === void 0 ? me(e) ? this.k(e) : this._(e) : this.T(e) : this.$(e);
	}
	O(e) {
		return this._$AA.parentNode.insertBefore(e, this._$AB);
	}
	T(e) {
		this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
	}
	_(e) {
		this._$AH !== T && fe(this._$AH) ? this._$AA.nextSibling.data = e : this.T(x.createTextNode(e)), this._$AH = e;
	}
	$(e) {
		let { values: t, _$litType$: n } = e, r = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = De.createElement(Te(n.h, n.h[0]), this.options)), n);
		if (this._$AH?._$AD === r) this._$AH.p(t);
		else {
			let e = new Oe(r, this), n = e.u(this.options);
			e.p(t), this.T(n), this._$AH = e;
		}
	}
	_$AC(e) {
		let t = we.get(e.strings);
		return t === void 0 && we.set(e.strings, t = new De(e)), t;
	}
	k(t) {
		pe(this._$AH) || (this._$AH = [], this._$AR());
		let n = this._$AH, r, i = 0;
		for (let a of t) i === n.length ? n.push(r = new e(this.O(de()), this.O(de()), this, this.options)) : r = n[i], r._$AI(a), i++;
		i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
	}
	_$AR(e = this._$AA.nextSibling, t) {
		for (this._$AP?.(!1, !0, t); e !== this._$AB;) {
			let t = ae(e).nextSibling;
			ae(e).remove(), e = t;
		}
	}
	setConnected(e) {
		this._$AM === void 0 && (this._$Cv = e, this._$AP?.(e));
	}
}, Ae = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(e, t, n, r, i) {
		this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = i, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(/* @__PURE__ */ new String()), this.strings = n) : this._$AH = T;
	}
	_$AI(e, t = this, n, r) {
		let i = this.strings, a = !1;
		if (i === void 0) e = D(this, e, t, 0), a = !fe(e) || e !== this._$AH && e !== w, a && (this._$AH = e);
		else {
			let r = e, o, s;
			for (e = i[0], o = 0; o < i.length - 1; o++) s = D(this, r[n + o], t, o), s === w && (s = this._$AH[o]), a ||= !fe(s) || s !== this._$AH[o], s === T ? e = T : e !== T && (e += (s ?? "") + i[o + 1]), this._$AH[o] = s;
		}
		a && !r && this.j(e);
	}
	j(e) {
		e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
	}
}, je = class extends Ae {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(e) {
		this.element[this.name] = e === T ? void 0 : e;
	}
}, Me = class extends Ae {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(e) {
		this.element.toggleAttribute(this.name, !!e && e !== T);
	}
}, Ne = class extends Ae {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i), this.type = 5;
	}
	_$AI(e, t = this) {
		if ((e = D(this, e, t, 0) ?? T) === w) return;
		let n = this._$AH, r = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, i = e !== T && (n === T || r);
		r && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e;
	}
	handleEvent(e) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, e) : this._$AH.handleEvent(e);
	}
}, Pe = class {
	constructor(e, t, n) {
		this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(e) {
		D(this, e);
	}
}, Fe = {
	M: ce,
	P: b,
	A: le,
	C: 1,
	L: Ee,
	R: Oe,
	D: me,
	V: D,
	I: ke,
	H: Ae,
	N: Me,
	U: Ne,
	B: je,
	F: Pe
}, Ie = ie.litHtmlPolyfillSupport;
Ie?.(De, ke), (ie.litHtmlVersions ??= []).push("3.3.3");
var Le = (e, t, n) => {
	let r = n?.renderBefore ?? t, i = r._$litPart$;
	if (i === void 0) {
		let e = n?.renderBefore ?? null;
		r._$litPart$ = i = new ke(t.insertBefore(de(), e), e, void 0, n ?? {});
	}
	return i._$AI(e), i;
}, Re = globalThis, O = class extends y {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let e = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= e.firstChild, e;
	}
	update(e) {
		let t = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Le(t, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return w;
	}
};
O._$litElement$ = !0, O.finalized = !0, Re.litElementHydrateSupport?.({ LitElement: O });
var ze = Re.litElementPolyfillSupport;
ze?.({ LitElement: O }), (Re.litElementVersions ??= []).push("4.2.2");
// ../../node_modules/lit-html/directive.js
var Be = {
	ATTRIBUTE: 1,
	CHILD: 2,
	PROPERTY: 3,
	BOOLEAN_ATTRIBUTE: 4,
	EVENT: 5,
	ELEMENT: 6
}, Ve = (e) => (...t) => ({
	_$litDirective$: e,
	values: t
}), He = class {
	constructor(e) {}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AT(e, t, n) {
		this._$Ct = e, this._$AM = t, this._$Ci = n;
	}
	_$AS(e, t) {
		return this.update(e, t);
	}
	update(e, t) {
		return this.render(...t);
	}
}, Ue = class extends He {
	constructor(e) {
		if (super(e), this.it = T, e.type !== Be.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
	}
	render(e) {
		if (e === T || e == null) return this._t = void 0, this.it = e;
		if (e === w) return e;
		if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
		if (e === this.it) return this._t;
		this.it = e;
		let t = [e];
		return t.raw = t, this._t = {
			_$litType$: this.constructor.resultType,
			strings: t,
			values: []
		};
	}
};
Ue.directiveName = "unsafeHTML", Ue.resultType = 1;
// ../../node_modules/lit-html/directives/unsafe-svg.js
var We = class extends Ue {};
We.directiveName = "unsafeSVG", We.resultType = 2;
var Ge = Ve(We), Ke = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M213.66,181.66l-32,32a8,8,0,0,1-11.32-11.32L188.69,184H48a8,8,0,0,1,0-16H188.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64a8,8,0,0,0,11.32-11.32L67.31,88H208a8,8,0,0,0,0-16H67.31L85.66,53.66A8,8,0,0,0,74.34,42.34l-32,32a8,8,0,0,0,0,11.32Z\"/></svg>", qe = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM122.34,101.66a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32L136,76.69V16a8,8,0,0,0-16,0V76.69L101.66,58.34A8,8,0,0,0,90.34,69.66Zm11.32,52.68a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L120,179.31V240a8,8,0,0,0,16,0V179.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z\"/></svg>", Je = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM101.66,53.66,120,35.31V96a8,8,0,0,0,16,0V35.31l18.34,18.35a8,8,0,0,0,11.32-11.32l-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32Zm52.68,148.68L136,220.69V160a8,8,0,0,0-16,0v60.69l-18.34-18.35a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z\"/></svg>", Ye = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-77.66a8,8,0,0,1-11.32,11.32L136,139.31V184a8,8,0,0,1-16,0V139.31l-10.34,10.35a8,8,0,0,1-11.32-11.32l24-24a8,8,0,0,1,11.32,0Z\"/></svg>", Xe = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z\"/></svg>", Ze = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z\"/></svg>", Qe = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z\"/></svg>", $e = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64ZM69.61,53.08C85.07,44.65,105.81,40,128,40s42.93,4.65,58.39,13.08C200.12,60.57,208,70.38,208,80s-7.88,19.43-21.61,26.92C170.93,115.35,150.19,120,128,120s-42.93-4.65-58.39-13.08C55.88,99.43,48,89.62,48,80S55.88,60.57,69.61,53.08ZM186.39,202.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z\"/></svg>", et = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z\"/></svg>", tt = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M224,128a8,8,0,0,1-8,8H128a8,8,0,0,1,0-16h88A8,8,0,0,1,224,128ZM128,72h88a8,8,0,0,0,0-16H128a8,8,0,0,0,0,16Zm88,112H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM82.34,42.34,56,68.69,45.66,58.34A8,8,0,0,0,34.34,69.66l16,16a8,8,0,0,0,11.32,0l32-32A8,8,0,0,0,82.34,42.34Zm0,64L56,132.69,45.66,122.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Zm0,64L56,196.69,45.66,186.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z\"/></svg>", nt = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M208,136H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm0,56H48V152H208v40Zm0-144H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Zm0,56H48V64H208v40Z\"/></svg>", rt = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z\"/></svg>", it = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z\"/></svg>", at = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z\"/></svg>", ot = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M212.24,171.76a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48L193.51,182H48a6,6,0,0,1,0-12H193.51l-21.75-21.76a6,6,0,0,1,8.48-8.48ZM75.76,116.24a6,6,0,0,0,8.48-8.48L62.49,86H208a6,6,0,0,0,0-12H62.49L84.24,52.24a6,6,0,0,0-8.48-8.48l-32,32a6,6,0,0,0,0,8.48Z\"/></svg>", st = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-43.76-78.24a6,6,0,1,1-8.48,8.48L134,134.49V184a6,6,0,0,1-12,0V134.49l-13.76,13.75a6,6,0,0,1-8.48-8.48l24-24a6,6,0,0,1,8.48,0Z\"/></svg>", ct = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M128,26C75.29,26,34,49.72,34,80v96c0,30.28,41.29,54,94,54s94-23.72,94-54V80C222,49.72,180.71,26,128,26Zm0,12c44.45,0,82,19.23,82,42s-37.55,42-82,42S46,102.77,46,80,83.55,38,128,38Zm82,138c0,22.77-37.55,42-82,42s-82-19.23-82-42V154.79C62,171.16,92.37,182,128,182s66-10.84,82-27.21Zm0-48c0,22.77-37.55,42-82,42s-82-19.23-82-42V106.79C62,123.16,92.37,134,128,134s66-10.84,82-27.21Z\"/></svg>", lt = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M222,128a6,6,0,0,1-6,6H128a6,6,0,0,1,0-12h88A6,6,0,0,1,222,128ZM128,70h88a6,6,0,0,0,0-12H128a6,6,0,0,0,0,12Zm88,116H128a6,6,0,0,0,0,12h88a6,6,0,0,0,0-12ZM83.76,43.76,56,71.51,44.24,59.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48,0l32-32a6,6,0,0,0-8.48-8.48Zm0,64L56,135.51,44.24,123.76a6,6,0,1,0-8.48,8.48l16,16a6,6,0,0,0,8.48,0l32-32a6,6,0,0,0-8.48-8.48Zm0,64L56,199.51,44.24,187.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48,0l32-32a6,6,0,0,0-8.48-8.48Z\"/></svg>", ut = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M208,138H48a14,14,0,0,0-14,14v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V152A14,14,0,0,0,208,138Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM208,50H48A14,14,0,0,0,34,64v40a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V64A14,14,0,0,0,208,50Zm2,54a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V64a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Z\"/></svg>", dt = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M40,86H74.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12H133.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12Zm64-24A18,18,0,1,1,86,80,18,18,0,0,1,104,62ZM216,170H197.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12h98.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12Zm-48,24a18,18,0,1,1,18-18A18,18,0,0,1,168,194Z\"/></svg>", ft = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\" fill=\"currentColor\"><path d=\"M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z\"/></svg>", k = (e) => e.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, ""), pt = {
	dashboard: k(it),
	operations: k(Ke),
	resources: k($e),
	records: k(nt),
	lint: k(tt),
	settings: k(rt),
	import: k(Ye),
	menu: k(et),
	chevron: k(Ze),
	ascending: k(Qe),
	descending: k(Xe),
	close: k(at),
	expand: k(Je),
	collapse: k(qe)
}, mt = {
	dashboard: k(ft),
	operations: k(ot),
	resources: k(ct),
	records: k(ut),
	lint: k(lt),
	settings: k(dt),
	import: k(st)
}, ht = 32, A = (e, t = 16) => C`
  <svg class="icon" viewBox="0 0 256 256" width=${t} height=${t} fill="currentColor" aria-hidden="true">
    ${Ge(t >= ht && mt[e] || pt[e] || "")}
  </svg>
`, gt = [
	o`
  :host {
    ${a("\n    /*\n     * The surfaces: one base, the page, and every other shade mixed from it, so they move together and keep\n     * their steps. Darker is further back (the sidebar, a well of raw content such as code), lighter is raised\n     * (a card, a row under the pointer). Change --surface, not the shades.\n     */\n    --surface: #2a2c34;\n    --bg: var(--surface);\n    --sidebar: color-mix(in oklab, var(--surface), black 15%);\n    /* a link of the sidebar under the pointer is lighter, the page you are on darker, with the amber bar */\n    --sidebar-hover: color-mix(in oklab, var(--surface), white 3%);\n    --sidebar-current: color-mix(in oklab, var(--surface), black 23%);\n    --inset: color-mix(in oklab, var(--surface), black 10%);\n    /* a panel on the page; opaque, so a sticky cell can use it */\n    --card: color-mix(in oklab, var(--surface), white 6%);\n    --hover: color-mix(in oklab, var(--surface), white 12%);\n    /* a table's heading row: a step under the card it is on, so it reads as a band over the rows */\n    --table-head: color-mix(in oklab, var(--surface), white 1%);\n    --line: color-mix(in oklab, var(--surface), white 13%);\n    --border: color-mix(in oklab, var(--surface), white 16%);\n    /* the edge of a pinned column: brighter than any line, so it reads as an edge, not a row's border */\n    --key-edge: color-mix(in oklab, var(--surface), white 35%);\n    --fg: #c0c4c8;\n    --strong: #ffffff;\n    --muted: #949ba2;\n    --primary: #f6a821;\n    --primary-fg: #24262d;\n    --accent-text: #f6a821;\n    /* the three labels: green, a light red (amber is the accent, so it can't mark a warning), grey. --warn\n       (Needs review) is 4.8:1 on a card */\n    --ok: #68cc97;\n    --ok-bg: #24463a;\n    --warn: #ff8080;\n    --plain: #b4b9c4;\n    --error: #f98080;\n    /* a warning: orange, apart from the amber of the accent (the place you are, the main action) */\n    --warning: #ff8a4c;\n    /*\n     * Series colors for a chart that splits a whole: the first three of the dataviz categorical palette's dark\n     * steps, which tell apart in any pair, also with colorblind eyes, on --card. More parts than three fold into\n     * an \"Other\" in --series-other. A chart's key names every part, so color is never the only label.\n     */\n    --series-1: #3987e5;\n    --series-2: #d95926;\n    --series-3: #199e70;\n    --series-other: #6b7079;\n    /* an HTTP method as colored text: RapiDoc's hues, lightened to 4.5:1 or more on a card */\n    --method-get: #8ab4ff;\n    --method-post: #7dd8a8;\n    --method-put: #f7b03c;\n    --method-patch: #c4b5fd;\n    --method-delete: #ff9696;\n    --method-head: #eab308;\n    --method-options: #22d3ee;\n    --method-query: #a5b4fc;\n    /* a control's border (stronger than a panel's), the main action under the pointer, a field's placeholder */\n    --border-strong: #616779;\n    --primary-hover: #ffb93a;\n    --placeholder: #7b828b;\n    /* type: the monospace stack, and the small size of hints, code and counts */\n    --mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\n    --small: 12.5px;\n    /* spacing: one scale for the room inside and between things; hairlines (1, 2, 3, 6px) are written as is */\n    --space-1: 4px;\n    --space-2: 8px;\n    --space-3: 12px;\n    --space-4: 16px;\n    --space-5: 24px;\n    /* shadows: of a drawer and of a menu over the page, and at an edge content scrolls under */\n    --shadow-drawer: -10px 0 24px rgb(0 0 0 / 45%);\n    --shadow-menu: 0 8px 24px rgb(0 0 0 / 45%);\n    --shade: rgb(0 0 0 / 40%);\n")}
    color-scheme: dark;
    accent-color: var(--primary);
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    background: var(--bg);
    color: var(--fg);
    font:
      14px/1.5 Roboto,
      system-ui,
      -apple-system,
      "Segoe UI",
      sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  h1,
  h2,
  h3 {
    margin: 0;
    font-weight: 500;
    color: var(--strong);
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 16px;
  }
  h3 {
    font-size: 15px;
  }
  /* the heading of a section of a page, as <rapi-doc>'s Request and Response: compact semibold caps. A name
     from the spec inside one (a resource, a rule) keeps its case (.keep-case). */
  main h2,
  main h3,
  main h4 {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  main h2 code,
  main h3 code,
  .keep-case {
    letter-spacing: 0;
    text-transform: none;
  }
  p {
    margin: 0;
  }
  a {
    color: var(--accent-text);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  code,
  pre,
  td.json,
  td.path {
    font-family: var(--mono);
    font-size: var(--small);
  }
  button,
  input {
    font: inherit;
    color: inherit;
  }
  /* Controls in the manner of <rapi-doc>: buttons and tabs in semibold small caps, joined buttons with an
     amber current one, a select drawn by the app (components/select.js), a checkbox as a switch that turns green */
  button {
    cursor: pointer;
    padding: var(--space-1) var(--space-3);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border: 1px solid var(--border-strong);
    border-radius: 3px;
    background: transparent;
    white-space: nowrap;
    transition:
      border-color 0.15s,
      color 0.15s,
      background 0.15s;
  }
  button:hover:not(:disabled) {
    border-color: var(--muted);
    color: var(--strong);
  }
  button:disabled {
    cursor: default;
    opacity: 0.55;
  }
  /* the main action keeps a little weight: it is dark text on amber */
  button.primary {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--primary-fg);
    font-weight: 500;
  }
  /* a button that is a column's name, an arrow or a close mark is not a labelled action: its own type */
  th button,
  button.expander,
  button.close,
  button.icon-button {
    font-size: inherit;
    letter-spacing: 0;
    text-transform: none;
  }
  button.primary:hover:not(:disabled) {
    background: var(--primary-hover);
    border-color: var(--primary-hover);
    color: var(--primary-fg);
  }
  /* A select: a button that names the choice, and its list under it, over the page */
  .select {
    position: relative;
    display: inline-block;
    min-width: 0;
  }
  .select-button {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    width: 100%;
    padding: var(--space-1) var(--space-2);
    border-color: var(--border);
    background: var(--inset);
    color: var(--strong);
    font-size: inherit;
    line-height: 18px;
    letter-spacing: 0;
    text-transform: none;
    text-align: left;
  }
  .select-button[aria-expanded="true"] {
    border-color: var(--primary);
  }
  .select-value {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .select-button .icon {
    flex: none;
    color: var(--muted);
  }
  .select-list {
    position: absolute;
    top: calc(100% + var(--space-1));
    left: 0;
    z-index: 30;
    min-width: 100%;
    max-height: min(60vh, 420px);
    margin: 0;
    padding: var(--space-1);
    overflow-y: auto;
    list-style: none;
    border: 1px solid var(--border-strong);
    border-radius: 4px;
    background: var(--card);
    box-shadow: var(--shadow-menu);
  }
  .select-list li {
    display: flex;
    align-items: baseline;
    gap: var(--space-4);
    padding: 6px var(--space-3);
    border-radius: 3px;
    white-space: nowrap;
    cursor: pointer;
  }
  .select-list li.active {
    background: var(--hover);
    color: var(--strong);
  }
  .select-list li[aria-selected="true"] .select-label {
    color: var(--accent-text);
  }
  .select-hint {
    margin-left: auto;
    color: var(--muted);
    font-family: var(--mono);
    font-size: var(--small);
  }
  :focus-visible {
    outline: 2px solid var(--accent-text);
    outline-offset: 2px;
  }
  /* a field is as tall as a button (28px), so the two line up side by side */
  input[type="text"],
  input[type="search"],
  input[type="number"],
  input[type="url"] {
    padding: var(--space-1) var(--space-2);
    border: 1px solid var(--border);
    border-radius: 3px;
    background: var(--inset);
    line-height: 18px;
    min-width: 0;
  }
  /* a checkbox is a switch: off grey, on green, its knob sliding across */
  input[type="checkbox"] {
    appearance: none;
    position: relative;
    flex: none;
    width: 30px;
    height: 16px;
    margin: 0;
    vertical-align: middle;
    background: var(--inset);
    border: 1px solid var(--border-strong);
    border-radius: 999px;
    cursor: pointer;
    transition:
      background 0.2s,
      border-color 0.2s;
  }
  input[type="checkbox"]::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--fg);
    transition: transform 0.2s;
  }
  input[type="checkbox"]:checked {
    background: var(--ok);
    border-color: var(--ok);
  }
  input[type="checkbox"]:checked::after {
    transform: translateX(14px);
    background: var(--primary-fg);
  }
  @media (prefers-reduced-motion: reduce) {
    input[type="checkbox"],
    input[type="checkbox"]::after {
      transition: none;
    }
  }
  input:focus {
    border-color: var(--primary);
    outline: none;
  }
  ::placeholder {
    color: var(--placeholder);
  }
  .grow {
    flex: 1;
  }
  .hint {
    color: var(--muted);
    font-size: var(--small);
  }
  .count {
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }
  /* a resource's count once requests changed it from the seed data */
  .count.changed {
    color: var(--accent-text);
    font-weight: 600;
  }
  .count small {
    font-size: 11.5px;
    font-weight: 400;
  }
  .icon {
    flex: none;
    vertical-align: -3px;
  }
`,
	o`
  /* The shell: a header across the top, a sidebar, and the content beside it */
  header {
    flex: none;
    display: flex;
    /* one row on any screen wider than a phone's: the API picker and the session field give up their room
       first, the brand block and the buttons never (narrow.js lets it wrap on a phone) */
    flex-wrap: nowrap;
    align-items: center;
    gap: var(--space-2) var(--space-3);
    padding-right: var(--space-4);
    min-height: 56px;
    background: var(--sidebar);
    position: relative;
    z-index: 3;
  }
  /* the brand block: as wide as the sidebar under it */
  .brand {
    align-self: stretch;
    display: flex;
    align-items: center;
    flex: none;
    width: 210px;
    padding: 0 var(--space-5);
    margin-right: var(--space-2);
    background: var(--primary);
    color: var(--primary-fg);
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    white-space: nowrap;
  }
  .brand b {
    font-weight: 300;
    margin-left: 0.45em;
  }
  .brand:hover {
    text-decoration: none;
  }
  .select.api {
    flex: 0 1 280px;
    min-width: 140px;
  }
  header > button {
    flex: none;
  }
  header .session span {
    color: var(--muted);
  }
  .session {
    flex: 0 1 auto;
    display: flex;
    align-items: center;
    gap: var(--space-2);
    min-width: 0;
  }
  .session input {
    flex: 0 1 140px;
    width: 140px;
    min-width: 96px;
  }
  /* Where the row is short, the word "Session" goes from sight: the field's placeholder and title say what it
     is, and the word stays its name for a screen reader */
  @media (max-width: 1100px) {
    header .session span {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
    }
  }
  .icon-button {
    padding: 6px var(--space-2);
    line-height: 0;
  }
  .menu {
    display: none;
  }
  .shell {
    position: relative;
    flex: 1;
    display: flex;
    min-height: 0;
  }
  /*
   * The sidebar in three steps of contrast: a group's name bright, its sections muted, the section you are on
   * bright again with the amber bar. Space above each group sets the groups apart.
   */
  .sidebar {
    flex: 0 0 210px;
    display: flex;
    flex-direction: column;
    padding: 6px 0 var(--space-4);
    background: var(--sidebar);
    overflow-y: auto;
  }
  .sidebar h2 {
    margin: 0;
    padding: var(--space-5) var(--space-4) var(--space-2) var(--space-5);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--strong);
  }
  .sidebar a {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4) var(--space-2) var(--space-5);
    border-left: 3px solid transparent;
    color: var(--muted);
    transition:
      color 0.15s,
      background 0.15s;
  }
  .sidebar a:hover {
    color: var(--fg);
    text-decoration: none;
    background: var(--sidebar-hover);
  }
  .sidebar a.current {
    color: var(--accent-text);
    border-left-color: var(--primary);
    background: var(--sidebar-current);
  }
  .sidebar a.current .icon {
    color: var(--primary);
  }
  main {
    /* what is placed out of the flow inside it (a label only a screen reader reads) scrolls with it, and
       never makes the page itself scroll */
    position: relative;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: var(--space-5);
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }
  /* the content scrolls as a whole: nothing in it gives up height to fit */
  main > *,
  .pane > *,
  .screen > * {
    flex-shrink: 0;
  }
  /* A section or a part of one (components/screen.js): no box of its own, its content is laid out in its place */
  .screen {
    display: contents;
  }
  /* a page's heading: its name, a line about it, and a rule under both */
  .title {
    padding-bottom: var(--space-4);
    border-bottom: 1px solid var(--line);
  }
  /* how many there are, beside a page's title: a figure in the muted color, not a badge (a badge asks for a look) */
  .title-count {
    margin-left: var(--space-1);
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    font-variant-numeric: tabular-nums;
  }
  .title p {
    color: var(--muted);
    margin-top: var(--space-1);
  }
  /* a page's mark: its section's icon, large and in the accent, at the right of the title */
  .title.with-icon {
    display: flex;
    align-items: center;
    gap: var(--space-4);
  }
  .title.with-icon > .icon {
    flex: none;
    order: 1;
    margin-left: auto;
    color: var(--accent-text);
  }
  .title.with-icon > div {
    min-width: 0;
  }
  /* a figure with its thing's icon on the right, muted: it fills the card's empty side, not the eye */
  .stat.with-icon {
    position: relative;
    padding-right: 72px;
  }
  .stat.with-icon > .icon {
    position: absolute;
    top: 50%;
    right: 22px;
    transform: translateY(-50%);
    color: var(--accent-text);
  }
  .banner {
    padding: var(--space-2) var(--space-3);
    border-radius: 3px;
    background: var(--ok-bg);
    color: var(--ok);
  }
  .banner.error {
    background: transparent;
    color: var(--error);
    border: 1px solid var(--error);
  }
  .empty {
    color: var(--muted);
    padding: var(--space-5) 0;
  }
`,
	o`
  /* Building blocks of the views */
  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-2) var(--space-3);
  }
  /* Labelled fields with their button: each field is a name, the field and a note under it, in columns, and the
     button sits on the fields' row whatever is over or under them */
  .field-row {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: auto auto auto;
    justify-content: start;
    align-items: center;
    gap: var(--space-1) var(--space-3);
  }
  .field-row > .stack {
    display: contents;
  }
  .field-row > button {
    grid-row: 2;
  }
  .row input[type="search"] {
    width: 260px;
    max-width: 100%;
  }
  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }
  .stack input {
    width: 170px;
  }
  .stack code {
    color: var(--muted);
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    padding: var(--space-4) var(--space-5) var(--space-4);
    border-radius: 3px;
    background: var(--card);
  }
  .card h2,
  .card h3 {
    font-size: 16px;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: var(--space-4);
  }
  .stat {
    gap: 0;
    color: var(--fg);
    transition: background 0.15s;
  }
  .stat:hover {
    background: var(--hover);
    text-decoration: none;
  }
  .stat b {
    font-size: 32px;
    font-weight: 500;
    line-height: 1.2;
    color: var(--strong);
    font-variant-numeric: tabular-nums;
  }
  .stat span {
    color: var(--muted);
  }
  /* a figure that leads nowhere */
  div.stat:hover {
    background: var(--card);
  }
  .badge {
    display: inline-block;
    padding: 0 var(--space-2);
    border: 1px solid currentColor;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
  }
  /* a label is its color as text and outline, with no fill (its part of a bar is filled with it: labels.js) */
  .badge.confident {
    color: var(--ok);
  }
  .badge.needsReview {
    color: var(--warn);
  }
  .badge.plainMock {
    color: var(--plain);
  }
  /*
   * A bar split into parts (components/parts.js): each part as wide as its share, 2px apart, square ends. As a
   * meter it is measured against a whole: the rest of the bar is its track.
   */
  .bars {
    display: flex;
    gap: 2px;
    height: var(--bar-height, 8px);
    overflow: hidden;
  }
  .bars > span {
    flex-basis: 0;
    min-width: 3px;
  }
  .bars.meter {
    gap: 0;
    background: var(--inset);
  }
  .bars.meter > span {
    min-width: 0;
  }
  .legend {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-3) var(--space-5);
    margin: 0;
  }
  /* a label of the legend: its badge, count and share, and what it means; a link to its operations, which
     lights up under the pointer as a card that leads somewhere does */
  .legend-item {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
    margin: calc(-1 * var(--space-2));
    padding: var(--space-2);
    border-radius: 3px;
    color: var(--fg);
    transition: background 0.15s;
  }
  a.legend-item:hover {
    background: var(--hover);
    text-decoration: none;
  }
  .legend-head {
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }
  .legend-head b {
    color: var(--strong);
  }
  .legend-help {
    color: var(--muted);
    font-size: var(--small);
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  .chips a {
    display: inline-flex;
    gap: var(--space-2);
    padding: 3px var(--space-2);
    border: 1px solid var(--border-strong);
    border-radius: 3px;
    color: var(--fg);
  }
  .chips a:hover {
    border-color: var(--muted);
    color: var(--strong);
    text-decoration: none;
  }
  .tabs {
    display: flex;
    gap: var(--space-1);
    border-bottom: 1px solid var(--line);
  }
  .tabs a {
    padding: 6px var(--space-3);
    color: var(--muted);
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    margin-bottom: -1px;
  }
  .tabs a:hover {
    text-decoration: none;
    color: var(--fg);
  }
  .tabs a.current {
    color: var(--accent-text);
    border-bottom-color: var(--accent-text);
  }
  .tag {
    display: inline-block;
    padding: 0 6px;
    border: 1px solid var(--border);
    border-radius: 4px;
    font-size: 11.5px;
    color: var(--muted);
    white-space: nowrap;
  }
  .facts {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  /* a note that names something to type (a header, a command): that part stands out of the sentence, on a
     darker chip */
  .note code,
  code.name {
    padding: 1px 6px;
    border-radius: 3px;
    background: var(--inset);
    color: var(--fg);
    white-space: nowrap;
  }
  /* a name from the spec inside a sentence the mock wrote (format.js, marked): set apart the same way; in the
     Needs review column it keeps that column's color */
  td.to-review code.name {
    color: inherit;
  }
  .wrap {
    overflow-wrap: anywhere;
  }
  h1 code {
    font-size: 0.85em;
  }
  pre.sample {
    max-height: 360px;
    overflow: auto;
    padding: var(--space-3);
    border-radius: 3px;
    background: var(--inset);
  }
  .segmented {
    display: inline-flex;
  }
  .segmented button {
    border-radius: 0;
    margin-left: -1px;
  }
  .segmented button:first-child {
    border-radius: 3px 0 0 3px;
    margin-left: 0;
  }
  .segmented button:last-child {
    border-radius: 0 3px 3px 0;
  }
  .segmented button.current {
    position: relative;
    border-color: var(--primary);
    background: color-mix(in oklab, var(--primary) 14%, transparent);
    color: var(--accent-text);
  }

  .list {
    flex: 0 0 210px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-self: flex-start;
    padding: 6px 0;
    border-radius: 3px;
    background: var(--sidebar);
  }
  .list a {
    display: flex;
    justify-content: space-between;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    border-left: 3px solid transparent;
    color: var(--fg);
  }
  .list a:hover {
    color: var(--strong);
    text-decoration: none;
  }
  .list a.current {
    background: var(--card);
    color: var(--accent-text);
    border-left-color: var(--primary);
  }
  /* a resource that needs review: a dot beside its name, the reason on hover */
  /* Import spec: a box to paste a spec in, and one to drop a file on */
  textarea {
    width: 100%;
    padding: var(--space-2) var(--space-3);
    border: 1px solid var(--border);
    border-radius: 3px;
    background: var(--inset);
    color: var(--fg);
    font: var(--small) / 1.5 var(--mono);
    resize: vertical;
  }
  textarea:focus {
    border-color: var(--primary);
    outline: none;
  }
  .drop {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-5);
    border: 1px dashed var(--border-strong);
    border-radius: 3px;
    background: var(--inset);
    color: var(--muted);
  }
  .drop.over {
    border-color: var(--primary);
    color: var(--strong);
  }
  /* a thing the mock assumed: a dot in the Needs review color and the word, in a tag */
  .review-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--warn);
  }
  .review-tag .dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--warn);
  }
  /* the dot alone, beside a name in a table, and what was assumed, in that table's Needs review column */
  .review-mark {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-left: var(--space-1);
    border-radius: 50%;
    background: var(--warn);
    vertical-align: 1px;
  }
  td.to-review {
    color: var(--warn);
  }
  /* an action written as a link: it does something on the page, so it is a button */
  button.link {
    padding: 0;
    border: 0;
    background: none;
    color: var(--accent-text);
    font-size: inherit;
    letter-spacing: 0;
    text-transform: none;
  }
  button.link:hover:not(:disabled) {
    color: var(--primary-hover);
    text-decoration: underline;
  }
  .list .review-dot {
    position: relative;
    flex: none;
    width: 7px;
    height: 7px;
    margin-left: auto;
    border-radius: 50%;
    background: var(--warn);
    align-self: center;
  }
  .list .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .pane {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }
`,
	o`
  /*
   * Resources: one panel below the title, like a small app of its own. The list of resources on the left (the
   * darker side, as the app's sidebar), the tabs and the filter on one row, the records under them; each part
   * scrolls on its own, so the records stay in view. A selected record opens in a drawer over the table.
   */
  .resources-panel {
    display: flex;
    flex: 1 1 0;
    min-height: 360px;
    gap: 0;
    border-radius: 3px;
    overflow: hidden;
    background: var(--card);
  }
  .resources-panel > .list {
    /* positioned, so what is placed inside it (a visually hidden label) scrolls and clips with it, and never
       makes the page taller than the window */
    position: relative;
    align-self: stretch;
    overflow-y: auto;
    border-radius: 0;
    box-shadow: inset -1px 0 0 var(--line);
  }
  .resources-panel > .pane {
    min-height: 0;
    gap: 0;
  }
  .resources-panel .toolbar {
    flex: none;
    gap: var(--space-2) var(--space-4);
    padding: 0 var(--space-4);
    min-height: 52px;
    border-bottom: 1px solid var(--line);
  }
  .toolbar .tabs {
    align-self: stretch;
    border-bottom: 0;
  }
  .toolbar .tabs a {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
  .toolbar input[type="search"] {
    width: 240px;
  }
  .resources-panel .pager,
  .resources-panel .pane > .empty {
    padding: 0 var(--space-4) var(--space-3);
  }
  .records-body,
  .pane-body {
    flex: 1 1 0;
    min-height: 0;
  }
  .pane > .records-body,
  .pane > .pane-body {
    flex-shrink: 1;
  }
  /* not positioned: a record's drawer is placed by the app shell, over the page's whole height */
  .records-body {
    display: flex;
  }
  .scroll-frame {
    position: relative;
    flex: 1 1 0;
    min-width: 0;
    display: flex;
  }
  .scroll-frame > .scroll.records {
    flex: 1 1 0;
    min-width: 0;
    max-height: none;
    border-radius: 0;
  }
  /* columns scrolled under the pinned key column: a shadow along its edge, the whole height of the table */
  .scroll-frame::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: var(--key-width, 0);
    width: 12px;
    pointer-events: none;
    background: linear-gradient(to right, var(--shade), transparent);
    opacity: 0;
    transition: opacity 0.15s;
    z-index: 4;
  }
  .scroll-frame.scrolled-x::before {
    opacity: 1;
  }
  /* columns hidden on the right: a shadow at that edge says the table goes on */
  .scroll-frame::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 16px;
    pointer-events: none;
    background: linear-gradient(to left, var(--shade), transparent);
    opacity: 0;
    transition: opacity 0.15s;
    z-index: 4;
  }
  .scroll-frame.more-x::after {
    opacity: 1;
  }
  /*
   * A drawer (components/parts.js) over the right of the positioned box it is in: one surface with a shadow. Its
   * content scrolls under a close button that floats in the top-right corner.
   */
  .drawer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 6;
    width: min(var(--drawer-width, 420px), 92%);
    background: var(--card);
    box-shadow: var(--shadow-drawer);
  }
  /* an operation's response sample: wider, over the right of the page below the header */
  .drawer.response {
    --drawer-width: 520px;
  }
  .drawer h3 {
    margin: var(--space-1) 48px var(--space-2) 0;
  }
  .drawer-body {
    height: 100%;
    overflow: auto;
    padding: var(--space-4) var(--space-5);
  }
  /* what a drawer shows is on its surface: no panel inside the panel */
  .drawer .drawer-body pre {
    margin: 0;
    padding: 0;
    border-radius: 0;
    background: none;
  }
  /* a sample in a drawer is as long as it is: the drawer scrolls, to its bottom */
  .drawer .drawer-body pre.sample {
    max-height: none;
    overflow: visible;
    margin-top: var(--space-3);
  }
  .drawer .close {
    position: absolute;
    top: 10px;
    right: 14px;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 50%;
    background: var(--hover);
    border-color: var(--border);
    box-shadow: 0 2px 8px rgb(0 0 0 / 35%);
  }
  .drawer .close .icon {
    width: 14px;
    height: 14px;
  }
  .pane-body {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    padding: var(--space-4);
    overflow-y: auto;
  }
  .pane-body > * {
    flex-shrink: 0;
  }
  /* what a resource with no fields is instead */
  .empty-shape {
    max-width: 760px;
  }
  .empty-shape p {
    margin: 0 0 var(--space-2);
  }
  /* inside the panel a card is a part of it: a step darker, so it still reads as a group */
  .pane-body .card {
    background: color-mix(in oklab, var(--surface), white 3%);
  }
`,
	o`
  /* Lint: the summary's rows (a category or a rule, the share that passed, what was found) and the findings */
  /* a section's count: a small outlined badge at the end of its line */
  .sidebar a .count {
    margin-left: auto;
    padding: 0 6px;
    border: 1px solid var(--border);
    border-radius: 4px;
    font-size: 12px;
    line-height: 18px;
  }
  .errors,
  .sidebar a .count.errors,
  .severity.error {
    color: var(--error);
  }
  .warnings,
  .severity.warning {
    color: var(--warning);
  }
  .clean {
    color: var(--ok);
  }
  /* The Dashboard's Lint card: the ring and the counts on the left, one aligned table of categories beside them */
  .lint-card-body {
    display: grid;
    grid-template-columns: 200px minmax(0, 1fr);
    gap: var(--space-5);
    align-items: start;
  }
  .lint-card-total {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding-top: 6px;
    text-align: center;
  }
  .lint-card-total .hint {
    margin: 0;
  }
  .ring-share {
    fill: var(--strong);
    font-size: 14px;
    font-weight: 600;
    text-anchor: middle;
    dominant-baseline: central;
  }
  .lint-card-counts {
    display: flex;
    gap: var(--space-4);
    margin-top: 6px;
    color: var(--muted);
  }
  .lint-card-counts b {
    font-size: 20px;
    font-weight: 600;
    color: var(--strong);
  }
  .lint-card-counts b.errors {
    color: var(--error);
  }
  .lint-card-counts b.warnings {
    color: var(--warning);
  }
  table.lint-categories td,
  table.lint-categories th {
    padding-top: var(--space-2);
    padding-bottom: var(--space-2);
    vertical-align: middle;
  }
  table.lint-categories th.number,
  table.lint-categories td.number {
    text-align: right;
    white-space: nowrap;
  }
  table.lint-categories .meter-cell {
    width: 30%;
  }
  table.lint-categories a {
    color: var(--strong);
  }
  @media (max-width: 760px) {
    /* no room for a page's mark beside its title */
    .title.with-icon > .icon {
      display: none;
    }
    .lint-card-body {
      grid-template-columns: minmax(0, 1fr);
    }
  }
  .lint-rows {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .lint-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 70px 38px minmax(84px, auto);
    align-items: center;
    gap: var(--space-2);
    padding: 6px var(--space-3) 6px var(--space-2);
    border-left: 3px solid transparent;
    color: var(--strong);
  }
  .lint-row:hover {
    background: var(--hover);
    text-decoration: none;
  }
  .lint-row.current {
    background: var(--hover);
    border-left-color: var(--primary);
  }
  /* the row you are on: its name in the accent, as the sidebar's */
  .lint-row.current .label {
    color: var(--accent-text);
  }
  .lint-row.rule {
    font-size: var(--small);
    color: var(--fg);
  }
  /* a rule you are on is told by its name's color alone: a band would read as another category */
  .lint-row.rule.current:not(:hover) {
    background: none;
  }
  .lint-row.rule.current {
    border-left-color: transparent;
  }
  .lint-row.rule .label {
    font-family: var(--mono);
    overflow-wrap: anywhere;
  }
  /* The Lint section's list: one set of columns for every row, so the meters line up, rules included */
  .side.lint-rows {
    display: grid;
    grid-template-columns: 14px minmax(0, 1fr) 70px 38px auto;
    gap: 2px var(--space-2);
  }
  .side.lint-rows .lint-row,
  .lint-rules {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
  }
  .lint-rules {
    row-gap: 2px;
    padding: var(--space-1) 0;
    background: var(--inset);
  }
  .lint-rules .label {
    padding-left: var(--space-2);
  }
  /* a rule's meter, under its category's: a dimmer green on a lighter track */
  .lint-rules {
    --meter: color-mix(in srgb, var(--ok) 60%, var(--inset));
  }
  .lint-rules .bars.meter {
    background: var(--line);
  }
  .arrow {
    display: flex;
    margin-left: -4px;
    color: var(--muted);
  }
  .lint-row:hover .arrow {
    color: var(--strong);
  }
  /* the arrow of something that opens (components/parts.js): it points right, and down while open */
  .twist {
    display: inline-flex;
  }
  .twist .icon {
    width: 14px;
    height: 14px;
    transition: transform 0.12s;
  }
  .twist.open .icon {
    transform: rotate(90deg);
  }
  .share,
  .found {
    text-align: right;
    font-size: var(--small);
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }
  .share {
    color: var(--fg);
  }
  /* at least a screen tall: picking a row with few findings must not shorten the page and move the list */
  /*
   * Lint below the cards, on a grid: what is in view and what it checks over the list of categories; what it
   * found and the filters over the findings. Wide, the two parts sit side by side and both lists start on one
   * line; narrow, each part stays with its list: check, list, found and filters, findings.
   */
  .lint-layout {
    display: grid;
    grid-template-columns: 400px minmax(0, 1fr);
    /* the top row keeps one height whatever is picked, so the lists below never move */
    grid-template-rows: 84px auto;
    grid-template-areas:
      "head controls"
      "side pane";
    align-items: stretch;
    gap: var(--space-3) var(--space-5);
    min-height: calc(100vh - 80px);
    align-content: start;
  }
  .lint-layout > .lint-head {
    grid-area: head;
    min-height: 0;
    overflow: hidden;
  }
  /* what is checked: two lines at most, the whole of it on hover */
  .lint-head .checks {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
  }
  .lint-layout > .lint-controls {
    grid-area: controls;
  }
  .lint-layout > .side {
    grid-area: side;
    align-self: start;
    padding: var(--space-2) 0;
  }
  .lint-layout > .pane {
    grid-area: pane;
    align-self: start;
  }
  /* what was found, level with the name; the filters at the bottom, level with the top of the lists */
  .lint-controls {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-2);
  }
  .lint-controls .row {
    flex-wrap: nowrap;
    gap: var(--space-2);
  }
  .lint-controls input[type="search"] {
    flex: 1 1 140px;
    min-width: 0;
    width: auto;
  }
  .lint-controls .segmented button {
    padding-left: var(--space-2);
    padding-right: var(--space-2);
  }
  .lint-controls .hint {
    flex: none;
    white-space: nowrap;
  }
  /* Lint's figures: the share passed beside a ring; errors and warnings beside where they are */
  .lint-cards {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  .lint-stat {
    flex-direction: row;
    align-items: center;
    gap: var(--space-5);
  }
  /* the figure and its label; what charts it takes the rest of the card */
  .lint-stat > .figure {
    display: flex;
    flex-direction: column;
    flex: none;
  }
  .ring {
    flex: none;
  }
  .ring circle {
    fill: none;
  }
  .ring .fill {
    stroke: var(--ok);
    stroke-linecap: butt;
  }
  /* how errors or warnings split by category: one bar of blocks, 2px apart, over a key */
  .split-by {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  .lint-stat .key {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: var(--space-1) var(--space-3);
    font-size: var(--small);
  }
  .lint-stat .key li {
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
  }
  .lint-stat .key .swatch {
    flex: none;
    width: 8px;
    height: 8px;
    border-radius: 0;
  }
  .lint-stat .key .name {
    color: var(--fg);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .lint-stat .key .value {
    margin-left: auto;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }
  .lint-stat .none {
    margin: 0;
    color: var(--ok);
  }
  .lint-head {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }
  .lint-head h2 {
    margin-bottom: 2px;
  }
  .lint-head p {
    margin: 0;
  }
  .found-line {
    font-weight: 500;
  }
  ol.findings {
    margin: 0;
    padding: 0;
    gap: 0;
    list-style: none;
  }
  .findings li {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: var(--space-2) var(--space-5);
    border-bottom: 1px solid var(--line);
  }
  .findings li:last-child {
    border-bottom: 0;
  }
  .findings .meta {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-1) var(--space-2);
    font-size: var(--small);
    color: var(--muted);
  }
  .severity {
    font-weight: 500;
  }
  .findings .where {
    color: var(--muted);
    overflow-wrap: anywhere;
  }
  @media (max-width: 1100px) {
    .lint-layout {
      grid-template-columns: minmax(0, 1fr);
      grid-template-rows: none;
      grid-template-areas: "head" "side" "controls" "pane";
    }
  }
`,
	o`
  /* Tables */
  .scroll {
    overflow-x: auto;
    border-radius: 3px;
    background: var(--card);
  }
  /* a table inside a panel is part of it */
  .card .scroll {
    margin: 0 -8px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th,
  td {
    padding: var(--space-2) var(--space-3);
    text-align: left;
    border-bottom: 1px solid var(--line);
    vertical-align: top;
  }
  table > :last-child > tr:last-child > * {
    border-bottom: 0;
  }
  /* a column's heading: quiet, so the rows are what is read. Muted small caps in a regular weight; a heading
     that is a field's name from the spec (the records table's, which sort) keeps its case. */
  thead th {
    background: var(--table-head);
    color: var(--muted);
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    white-space: nowrap;
    border-bottom-color: var(--border);
  }
  th button {
    border: 0;
    background: none;
    padding: 0;
    font-size: var(--small);
    font-weight: 400;
    letter-spacing: 0;
    text-transform: none;
    color: var(--muted);
  }
  th button:hover:not(:disabled) {
    color: var(--strong);
  }
  td {
    max-width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  td.number {
    font-variant-numeric: tabular-nums;
  }
  /* Records: the header row stays at the top and the key column at the left while the rest scrolls */
  .scroll.records {
    overflow: auto;
  }
  /* A table that fills the rest of the page and scrolls on its own: the page's title, its filters and the
     table's header stay in view */
  .scroll.fill {
    flex: 1 1 0;
    min-height: 260px;
    overflow: auto;
  }
  /* a table that scrolls in its own box keeps its header row at the top */
  .fill thead th,
  .records thead th {
    position: sticky;
    top: 0;
    z-index: 2;
  }
  .records .key {
    position: sticky;
    left: 0;
    z-index: 1;
    background: var(--card);
    box-shadow: inset -1px 0 0 var(--line);
  }
  /* a key is an identifier: in the monospace font at the small size, as a cell of JSON is */
  .records tbody .key {
    font-family: var(--mono);
    font-size: var(--small);
  }
  /* a column's sort mark: a caret after its name */
  th button .icon {
    margin-left: 2px;
    vertical-align: -2px;
  }
  .records thead .key {
    z-index: 3;
    background: var(--table-head);
    color: var(--muted);
  }
  .records tbody tr:hover .key,
  .records tbody tr.current .key {
    background: var(--hover);
  }
  /* the pinned key column: a bright edge down its rows (its heading has none: the key tag marks it), and a
     shadow on the columns under it once they scroll */
  .records tbody .key {
    box-shadow: inset -2px 0 0 var(--key-edge);
  }
  .records thead .key {
    box-shadow: none;
  }
  .records tbody tr.current .key {
    box-shadow:
      inset 3px 0 0 var(--primary),
      inset -2px 0 0 var(--key-edge);
  }
  /* the record in the drawer: its row in the accent color, with a bar at its left edge, key column or not */
  .records tbody tr.current td {
    color: var(--accent-text);
  }
  .records tbody tr.current td:first-child:not(.key) {
    box-shadow: inset 3px 0 0 var(--primary);
  }
  .records thead .tag {
    margin-left: var(--space-1);
    font-weight: 400;
  }
  td.none,
  td.json {
    color: var(--muted);
  }
  /* a row that opens something (components/parts.js) or can be picked: the pointer, and a highlight under it;
     the row that is picked keeps the highlight */
  tbody tr[tabindex],
  tbody tr.opens > td {
    cursor: pointer;
  }
  tbody tr[tabindex]:hover,
  tbody tr.opens:hover > td,
  tbody tr.current {
    background: var(--hover);
  }
  table.operations td,
  table.plain td {
    white-space: normal;
    max-width: none;
  }
  table.plain td.path {
    overflow-wrap: anywhere;
    min-width: 220px;
  }
  table.operations td.path {
    overflow-wrap: break-word;
    min-width: 220px;
  }
`,
	o`
  /* Which labels are listed: each a name with its color as a dot and its count, without a frame, so the bar
     has one framed control (the filter) and one group of buttons. One that is off is dimmed, its dot hollow. */
  .label-filters {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-1);
  }
  .label-filter {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: var(--space-1) var(--space-2);
    border-radius: 3px;
    color: var(--fg);
    font-size: var(--small);
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
  }
  /* the checkbox is there for the keyboard and a screen reader; the dot shows its state */
  .label-filter input[type="checkbox"] {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: 0;
    opacity: 0;
  }
  .label-filter:hover {
    background: var(--hover);
    color: var(--strong);
  }
  .label-filter:has(:focus-visible) {
    outline: 2px solid var(--accent-text);
    outline-offset: 1px;
  }
  .label-filter .dot {
    width: 8px;
    height: 8px;
    border: 1px solid var(--dot);
    border-radius: 50%;
    background: var(--dot);
  }
  .label-filter .count {
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }
  /* a label no operation has: still named, with its 0, but nothing to turn on or off */
  .label-filter.none {
    color: var(--muted);
    cursor: default;
  }
  .label-filter.none:hover {
    background: none;
    color: var(--muted);
  }
  .label-filter.none .dot {
    opacity: 0.5;
  }
  .label-filter:has(input:not(:checked)) {
    color: var(--muted);
    text-decoration: line-through;
  }
  .label-filter:has(input:not(:checked)) .dot {
    background: none;
  }
  /* Operations: the path (or resource) once, beside the rows of its methods; a line between groups */
  .nowrap {
    white-space: nowrap;
  }
  /* the path gets the room to stay on one line where it can; why wraps */
  table.operations .col-path {
    width: 34%;
  }
  table.operations .col-why {
    width: 36%;
  }
  /* a row opens its operation's page: anywhere on it, or its method (the link a keyboard reaches) */
  table.operations tr.opens th.group {
    cursor: pointer;
  }
  /* the path stands for all its operations: hovering it lights them all */
  table.operations tbody:has(th.group:hover) td,
  table.operations tbody:has(th.group:hover) th.group {
    background: var(--hover);
  }
  table.operations .path-link {
    color: var(--fg);
  }
  table.operations .path-link:hover {
    color: var(--accent-text);
    text-decoration: none;
  }
  table.operations th.group {
    vertical-align: top;
    min-width: 220px;
    color: var(--fg);
    font-weight: 400;
    text-align: left;
    overflow-wrap: break-word;
    white-space: normal;
    border-right: 1px solid var(--line);
  }
  table.operations tbody + tbody {
    border-top: 1px solid var(--border);
  }
  .op-title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  .op-title .method {
    min-width: 0;
    font-size: inherit;
  }
  /* a method as a tab: as wide as its name, with the padding every tab has (its badge's column width is for
     tables, where methods line up) */
  .tabs.methods a .method {
    min-width: 0;
  }
  .status {
    font-family: var(--mono);
    font-weight: 600;
  }
  .status.s2 {
    color: var(--ok);
  }
  .status.s4,
  .status.s5 {
    color: var(--error);
  }
  .status.s3,
  .status.sd {
    color: var(--plain);
  }
  /* the response whose sample is shown, as the records table marks the record shown */
  table.responses tr.current td:first-child {
    box-shadow: inset 3px 0 0 var(--primary);
  }
  .method-link:hover {
    text-decoration: none;
  }
  .method-link:hover .method {
    text-decoration: underline;
  }
  td.example {
    font-family: var(--mono);
    font-size: var(--small);
    overflow-wrap: anywhere;
    max-width: 220px;
    color: var(--muted);
  }
`,
	o`
  /* The Schema tab's fields: an object field opens to its own fields, indented on a darker band per level */
  table.fields td.field {
    padding-left: calc(8px + var(--depth, 0) * 22px);
    white-space: nowrap;
  }
  .expander,
  .expander-space {
    display: inline-flex;
    width: 20px;
    height: 20px;
    margin-right: var(--space-1);
    vertical-align: middle;
  }
  .expander {
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    background: none;
    color: var(--muted);
  }
  .expander:hover {
    color: var(--strong);
  }
  /* what opens under a row sits on a darker band (the fields of an object here, a category's rules in Lint) */
  table.fields tr.nested td {
    background: var(--inset);
  }
  table.fields tr.depth-2 td,
  table.fields tr.depth-3 td {
    background: color-mix(in oklab, var(--inset), black 12%);
  }
  /* an action beside a heading: an icon and its name, without a button's frame */
  button.quiet {
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    padding: var(--space-1) var(--space-2);
    border-color: transparent;
    background: none;
    color: var(--muted);
  }
  button.quiet:hover:not(:disabled) {
    background: var(--hover);
    color: var(--strong);
  }
  td.seeded {
    min-width: 200px;
  }
  td.why {
    color: var(--muted);
    min-width: 180px;
  }
  /* an HTTP method as colored text: RapiDoc's hues, lightened to 4.5:1 or more on a card; the name is always written */
  .method {
    --m: var(--plain);
    display: inline-block;
    min-width: 52px;
    color: var(--m);
    font-family: var(--mono);
    font-size: var(--small);
    font-weight: 700;
    letter-spacing: 0.02em;
  }
  /* beside a path in running text ("GET /pets/{id}") a method takes its own width: the fixed one is for a
     column of methods */
  td.path .method {
    min-width: 0;
  }
  .method.get {
    --m: var(--method-get);
  }
  .method.post {
    --m: var(--method-post);
  }
  .method.put {
    --m: var(--method-put);
  }
  .method.patch {
    --m: var(--method-patch);
  }
  .method.delete {
    --m: var(--method-delete);
  }
  .method.head {
    --m: var(--method-head);
  }
  .method.options {
    --m: var(--method-options);
  }
  .method.query {
    --m: var(--method-query);
  }
  pre {
    margin: 0;
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
  }
`,
	o`
  @media (max-width: 760px) {
    /* Lint's filter takes a line of its own over the severity buttons */
    .lint-controls .row {
      flex-wrap: wrap;
    }
    .lint-controls input[type="search"] {
      flex-basis: 100%;
    }
    .menu {
      display: inline-block;
      margin-left: var(--space-3);
    }
    .brand {
      width: auto;
      min-height: 48px;
      padding: 0 var(--space-4);
      order: -1;
    }
    header {
      flex-wrap: wrap;
      padding-bottom: var(--space-2);
    }
    .sidebar {
      display: none;
    }
    .sidebar.open {
      display: flex;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      bottom: 0;
      box-shadow: 4px 0 16px rgb(0 0 0 / 45%);
    }
    .shell {
      position: relative;
    }
    main {
      padding: var(--space-4);
    }
    .resources-panel {
      flex-direction: column;
    }
    .list {
      flex: none;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: stretch;
    }
    /* one page that scrolls as a whole: the boxes of the wide layout would be too small */
    .resources-panel {
      flex: none;
    }
    .resources-panel > .list {
      overflow: visible;
    }
    .records-body {
      flex-direction: column;
    }
    .scroll-frame {
      flex: none;
    }
    .scroll-frame > .scroll.records {
      flex: none;
      max-height: 70vh;
    }
    .records-body > .drawer {
      position: relative;
      width: auto;
      box-shadow: none;
      border-top: 1px solid var(--line);
    }
    /* a record's drawer is as tall as the record here, under the table; a response's still covers the page
       and scrolls inside */
    .records-body > .drawer .drawer-body {
      height: auto;
    }
    .pane-body {
      overflow: visible;
    }
    .session input {
      flex-basis: 110px;
      width: 110px;
    }
    .select.api {
      flex-basis: 160px;
    }
  }
`
], _t = 0, vt = class extends O {
	static properties = {
		options: { attribute: !1 },
		value: { type: String },
		label: { type: String },
		open: { state: !0 },
		active: { state: !0 }
	};
	constructor() {
		super(), this.options = [], this.value = "", this.label = "", this.open = !1, this.active = 0, this.uid = `select-${++_t}`, this.onOutside = (e) => {
			this.open && !e.composedPath().includes(this) && (this.open = !1);
		};
	}
	createRenderRoot() {
		return this;
	}
	connectedCallback() {
		super.connectedCallback(), this.classList.add("select"), document.addEventListener("pointerdown", this.onOutside);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), document.removeEventListener("pointerdown", this.onOutside);
	}
	updated(e) {
		this.open && (e.has("active") || e.has("open")) && this.querySelector(`#${this.uid}-${this.active}`)?.scrollIntoView({ block: "nearest" });
	}
	get chosen() {
		return Math.max(0, this.options.findIndex((e) => e.value === this.value));
	}
	show() {
		this.active = this.chosen, this.open = !0;
	}
	pick(e) {
		let t = this.options[e];
		this.open = !1, t && t.value !== this.value && this.dispatchEvent(new CustomEvent("change", { detail: t.value }));
	}
	onKey(e) {
		let t = this.options.length - 1, { key: n } = e;
		if (!this.open) {
			[
				"ArrowDown",
				"ArrowUp",
				"Enter",
				" "
			].includes(n) && (e.preventDefault(), this.show());
			return;
		}
		if (n === "Escape" || n === "Tab") {
			this.open = !1, n === "Escape" && e.stopPropagation();
			return;
		}
		let r = {
			ArrowDown: Math.min(t, this.active + 1),
			ArrowUp: Math.max(0, this.active - 1),
			Home: 0,
			End: t
		}[n];
		if (r !== void 0) e.preventDefault(), this.active = r;
		else if (n === "Enter" || n === " ") e.preventDefault(), this.pick(this.active);
		else if (n.length === 1) {
			let e = n.toLowerCase(), t = this.options.map((e, t) => (this.active + 1 + t) % this.options.length).find((t) => this.options[t].label.toLowerCase().startsWith(e));
			t !== void 0 && (this.active = t);
		}
	}
	render() {
		let e = this.options[this.chosen];
		return C`
      <button
        class="select-button"
        role="combobox"
        aria-haspopup="listbox"
        aria-label=${this.label}
        aria-expanded=${String(this.open)}
        aria-controls="${this.uid}-list"
        aria-activedescendant=${this.open ? `${this.uid}-${this.active}` : T}
        @click=${() => this.open ? this.open = !1 : this.show()}
        @keydown=${this.onKey}
      >
        <span class="select-value">${e?.label ?? ""}</span>
        ${A("descending", 14)}
      </button>
      <ul class="select-list" id="${this.uid}-list" role="listbox" aria-label=${this.label} ?hidden=${!this.open}>
        ${this.options.map((e, t) => C`
            <li
              id="${this.uid}-${t}"
              role="option"
              class=${t === this.active ? "active" : ""}
              aria-selected=${String(e.value === this.value)}
              @pointermove=${() => this.active = t}
              @click=${() => this.pick(t)}
            >
              <span class="select-label">${e.label}</span>
              ${e.hint ? C`<span class="select-hint">${e.hint}</span>` : T}
            </li>
          `)}
      </ul>
    `;
	}
};
customElements.define("rapidoc-mock-select", vt);
// ui/format.js
var j = (e) => e.toLocaleString("en"), M = (e, t, n = `${t}s`) => e === 1 ? t : n, N = (e, t, n) => `${j(e)} ${M(e, t, n)}`, yt = (e) => e === "createMany" ? "create many" : e, P = (e) => e === null ? "null" : e === void 0 ? "" : typeof e == "object" ? JSON.stringify(e) : String(e), bt = (e) => {
	if (e == null) return "";
	try {
		return JSON.stringify(JSON.parse(e), null, 2);
	} catch {
		return String(e);
	}
}, xt = (e) => e ? e[0].toUpperCase() + e.slice(1) : "", F = (e) => e ? String(e).split("`").map((e, t) => t % 2 ? C`<code class="name">${e}</code>` : e) : "", St = (e) => String(e ?? "").replaceAll("`", ""), I = (e, t, n, r) => C`
  <div class="title with-icon">
    ${A(e, 44)}
    <div>
      <h1>
        ${t}${r === void 0 ? T : C` <span class="title-count">${j(r)}</span>`}
      </h1>
      ${n ? C`<p>${n}</p>` : T}
    </div>
  </div>
`, Ct = (e, t, n, r) => C`
  <div class="segmented" role="group" aria-label=${e}>
    ${t.map(([e, t]) => C`
        <button
          class=${n === e ? "current" : ""}
          aria-pressed=${n === e ? "true" : "false"}
          @click=${() => r(e)}
        >
          ${t}
        </button>
      `)}
  </div>
`, wt = ({ label: e, onClose: t, kind: n = "" }, r) => C`
  <aside class="drawer ${n}" aria-label=${e} @keydown=${(e) => e.key === "Escape" && t()}>
    <button class="close" aria-label="Close" title="Close (Esc)" @click=${t}>
      ${A("close")}
    </button>
    <div class="drawer-body">${r}</div>
  </aside>
`, Tt = (e) => C`<span class="twist${e ? " open" : ""}">${A("chevron")}</span>`, Et = (e) => ({
	click: (t) => {
		!t.target.closest("a, button") && !getSelection()?.toString() && e();
	},
	key: (t) => {
		t.target !== t.currentTarget || t.key !== "Enter" && t.key !== " " || (t.preventDefault(), e());
	}
}), Dt = (e, { label: t, of: n, height: r } = {}) => {
	let i = e.filter((e) => e.value > 0), a = n === void 0 ? 0 : Math.max(0, n - i.reduce((e, t) => e + t.value, 0));
	return C`<span
    class="bars${n === void 0 ? "" : " meter"}"
    style=${r ? `--bar-height: ${r}px` : T}
    role=${t ? "img" : T}
    aria-label=${t || T}
    aria-hidden=${t ? T : "true"}
  >
    ${i.map((e) => C`<span
          style="flex-grow: ${e.value}; background: ${e.color}"
          title=${e.title || T}
        ></span>`)}
    ${a ? C`<span class="rest" style="flex-grow: ${a}"></span>` : T}
  </span>`;
}, L = class extends O {
	createRenderRoot() {
		return this;
	}
	connectedCallback() {
		super.connectedCallback(), this.classList.add("screen");
	}
	read(e, t, n) {
		this.reads ??= {};
		let r = this.reads[e] = Symbol(t);
		return this.app.run(async () => {
			let i = await this.app.call(t);
			this.reads[e] === r && n(i);
		});
	}
}, R = {
	confident: "Stateful",
	needsReview: "Needs review",
	plainMock: "Static"
}, Ot = {
	confident: "var(--ok)",
	needsReview: "var(--warn)",
	plainMock: "var(--plain)"
}, kt = {
	confident: "Reads and changes stored records; nothing was assumed.",
	needsReview: "Reads and changes stored records, with a best guess where the spec left a gap.",
	plainMock: "Keeps no data; returns the same example or generated answer every time."
}, At = {
	confident: "Reads and changes stored records. The spec says clearly which resource this operation works on, so what you create shows up in later calls.",
	needsReview: C`Reads and changes stored records too, but the spec left a gap and RapiMock filled it
    with a best guess, such as which field is the key. Check each guess, and correct it in
    <code>mock.config.yaml</code> if it's wrong.`,
	plainMock: "Keeps no data. No resource fits this operation, so it returns the spec's example, or generated data, the same on every call. Nothing you send is stored."
}, jt = (e) => `for its resource: ${e}`, Mt = (e, t = kt[e]) => C`<span class="badge ${e}" title=${St(t)}>${R[e]}</span>`, Nt = (e) => C`<span class="review-mark" role="img" aria-label="Needs review" title="Needs review: ${St(e)}"></span>`, Pt = (e) => C`<span class="method ${String(e).toLowerCase()}">${String(e).toUpperCase()}</span>`, z = (e) => e?.checked > 0, B = ({ checked: e, passed: t }) => `${t === e ? 100 : Math.min(99, Math.floor(100 * t / e))}%`, Ft = (e) => Dt([{
	value: e.passed,
	color: "var(--meter, var(--ok))"
}], {
	of: e.checked,
	height: 6
});
function It(e) {
	let t = e.problems.filter((e) => e.severity === "error").length;
	return {
		errors: t,
		warnings: e.problems.length - t
	};
}
var Lt = (e) => e.errors || e.warnings ? C`${e.errors ? C`<span class="errors">${N(e.errors, "error")}</span>` : ""}${e.errors && e.warnings ? ", " : ""}${e.warnings ? C`<span class="warnings">${N(e.warnings, "warning")}</span>` : ""}` : C`<span class="clean">clean</span>`, Rt = (e, { label: t, href: n, title: r = "", current: i = !1, rule: a = !1, expanded: o }) => C`
  <a
    class="lint-row${a ? " rule" : ""}${i ? " current" : ""}${o ? " open" : ""}"
    href=${n}
    title=${r}
    aria-current=${i ? "true" : "false"}
    aria-expanded=${typeof o == "boolean" ? String(o) : T}
  >
    ${o === void 0 ? T : C`<span class="arrow">${o === null ? T : Tt(o)}</span>`}
    <span class="label">${t}</span>
    ${z(e) ? C`${Ft(e)}<span class="share">${B(e)}</span>` : C`<span></span><span></span>`}
    <span class="found">${Lt(e)}</span>
  </a>
`;
function zt(e = "") {
	let t = e.replace(/\s*Needs @rapidoc\/mock[^.]*\.\s*/g, " ").trim().split(": ")[0].split(", so ")[0].replace(/\.$/, "");
	return /^[A-Z](?![A-Z])/.test(t) ? t[0].toLowerCase() + t.slice(1) : t;
}
function Bt(e) {
	let t = [e.errors ? N(e.errors, "error") : "", e.warnings ? N(e.warnings, "warning") : ""].filter(Boolean).join(" and ");
	if (!z(e)) return t ? `Found ${t}.` : "Found nothing.";
	let n = N(e.checked, "check");
	return t ? `Found ${t} in ${n}; ${B(e)} passed.` : `Found nothing: all ${n} passed.`;
}
var Vt = (e, { size: t = 64, inside: n = !1 } = {}) => {
	let r = 2 * Math.PI * 26;
	return C`<svg
    class="ring"
    viewBox="0 0 64 64"
    width=${t}
    height=${t}
    role="img"
    aria-label="${B(e)} of ${j(e.checked)} checks passed"
  >
    <title>${j(e.passed)} of ${j(e.checked)} checks passed</title>
    <circle
      class="fill"
      cx="32"
      cy="32"
      r=${26}
      stroke-width="8"
      stroke-dasharray="${r * e.passed / e.checked} ${r}"
      transform="rotate(-90 32 32)"
    ></circle>
    ${n ? Ce`<text class="ring-share" x="32" y="32">${B(e)}</text>` : T}
  </svg>`;
}, Ht = class extends L {
	static properties = {
		app: { attribute: !1 },
		api: { attribute: !1 },
		lint: { attribute: !1 },
		allAssumptions: { state: !0 }
	};
	constructor() {
		super(), this.allAssumptions = !1;
	}
	lintCard() {
		let { app: e, lint: t } = this;
		if (!t || t.error) return C`<section class="card">
        <h2>Lint</h2>
        <p class="hint">${t ? `Lint failed: ${t.error}` : "Linting the spec…"}</p>
      </section>`;
		let n = t.summary, r = (t) => e.href("lint", "", void 0, t), { errors: i, warnings: a } = It(t);
		return C`
      <section class="card lint-card">
        <div class="row">
          <h2>${t.linted ? "Lint" : "Not valid OpenAPI"}</h2>
          <span class="grow"></span>
          <a href=${r()}>
            ${t.problems.length ? `See all ${N(t.problems.length, "finding")} →` : "See the rules that ran →"}
          </a>
        </div>
        <div class="lint-card-body">
          <div class="lint-card-total">
            ${z(n) ? Vt(n, {
			size: 112,
			inside: !0
		}) : T}
            ${z(n) ? C`<p class="hint">of ${j(n.checked)} checks passed</p>` : T}
            <ul class="lint-card-counts">
              <li><b class=${i ? "errors" : ""}>${j(i)}</b> ${M(i, "error")}</li>
              <li><b class=${a ? "warnings" : ""}>${j(a)}</b> ${M(a, "warning")}</li>
            </ul>
          </div>
          ${n?.categories.length ? C`<table class="plain lint-categories">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th><span class="visually-hidden">Share passed</span></th>
                      <th class="number">Passed</th>
                      <th class="number">Found</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${n.categories.map((e) => C`
                        <tr
                          class="opens"
                          title=${e.about}
                          @click=${Et(() => location.hash = r({ category: e.id })).click}
                        >
                          <td><a href=${r({ category: e.id })}>${e.title}</a></td>
                          <td class="meter-cell">
                            ${z(e) ? Ft(e) : T}
                          </td>
                          <td class="number">
                            ${z(e) ? B(e) : C`<span class="hint">—</span>`}
                          </td>
                          <td class="number">${Lt(e)}</td>
                        </tr>
                      `)}
                  </tbody>
                </table>` : T}
        </div>
      </section>
    `;
	}
	render() {
		let { app: e, api: t } = this, n = t.operations.length || 1, r = t.resources.reduce((e, t) => e + t.records, 0), i = t.resources.filter((e) => e.review), a = t.operations.filter((e) => e.label === "needsReview" && e.why), o = [...i.map((t) => ({
			kind: "Resource",
			what: C`<code>${t.name}</code>`,
			why: t.review,
			href: e.href("resources", t.name)
		})), ...a.map((t) => ({
			kind: "Operation",
			what: C`${Pt(t.method)} <code>${t.path}</code>`,
			why: t.why,
			href: e.href("operations", t.id)
		}))], s = this.allAssumptions ? o : o.slice(0, 8), c = t.labels.needsReview - a.length;
		return C`
    ${I("dashboard", t.title || t.id, C`Served at <code>/${t.id}</code>. What the mock worked out from this spec.`)}
    <div class="cards">
      <a class="card stat with-icon" href=${e.href("operations")}>
        <b>${t.operations.length}</b><span>Operations</span>${A("operations", 40)}
      </a>
      <a class="card stat with-icon" href=${e.href("resources")}>
        <b>${t.resources.length}</b><span>Resources</span>${A("resources", 40)}
      </a>
      <a class="card stat with-icon" href=${e.href("resources")}>
        <b>${r}</b><span>Records</span>${A("records", 40)}
      </a>
    </div>

    ${this.lint === void 0 ? T : this.lintCard()}

    <section class="card">
      <h2>Operations by label</h2>
      <div class="legend">
        ${Object.keys(R).map((r) => {
			let i = C`
            <span class="legend-head">
              ${Mt(r)}
              <b>${t.labels[r]}</b>
              <span class="hint">${Math.round(100 * t.labels[r] / n)}%</span>
            </span>
            <span class="legend-help">${At[r]}</span>
          `;
			return t.labels[r] ? C`<a
                class="legend-item"
                href=${e.href("operations", "", void 0, { label: r })}
                title="See the ${t.labels[r]} ${R[r]} operations"
                >${i}</a
              >` : C`<div class="legend-item">${i}</div>`;
		})}
      </div>
      ${Dt(Object.keys(R).map((e) => ({
			value: t.labels[e],
			color: Ot[e],
			title: `${t.labels[e]} ${R[e]}`
		})), {
			label: "Share of operations per label",
			height: 10
		})}
    </section>

    <section class="card">
      <h2>Assumptions RapiMock made that need your review (${o.length})</h2>
      ${o.length ? C`
            <p class="hint">
              Where the spec left something open, the mock guessed. These are its guesses: about
              ${N(i.length, "resource")} (a key, a path) and
              ${N(a.length, "operation")}. Check each one, and state the right answer in
              <code>mock.config.yaml</code> where it guessed wrong.
            </p>
            <div class="scroll">
              <table class="plain">
                <thead>
                  <tr>
                    <th>Kind</th>
                    <th>Resource or operation</th>
                    <th>What was assumed</th>
                  </tr>
                </thead>
                <tbody>
                  ${s.map((e) => C`
                      <tr>
                        <td class="hint">${e.kind}</td>
                        <td class="path"><a href=${e.href}>${e.what}</a></td>
                        <td>${F(e.why)}</td>
                      </tr>
                    `)}
                </tbody>
              </table>
            </div>
            <div class="row">
              ${o.length > 8 ? C`<button @click=${() => this.allAssumptions = !this.allAssumptions}>
                      ${this.allAssumptions ? "Show the first 8" : `Show all ${o.length}`}
                    </button>` : T}
              <span class="hint">
                ${N(t.labels.needsReview, "operation")} ${M(t.labels.needsReview, "is", "are")}
                labelled Needs review:
                ${a.length} for an assumption of ${M(a.length, "its", "their")}
                own${c > 0 ? `, ${c} for one about ${M(c, "its", "their")} resource` : ""}.
              </span>
              <a href=${e.href("operations", "", void 0, { label: "needsReview" })}>See them all</a>
            </div>
          ` : C`<p class="hint">The mock made no assumption that needs a look.</p>`}
    </section>

    <section class="card">
      <h2>Resources</h2>
      ${t.resources.length ? C`
            <ul class="chips">
              ${t.resources.map((t) => C`
                  <li>
                    <a href=${e.href("resources", t.name)}>
                      ${t.name} <span class="count">${t.records}</span>
                    </a>
                  </li>
                `)}
            </ul>
          ` : C`<p class="hint">
            The mock found no resource in this spec: every operation is static, answered from examples or generated data.
          </p>`}
    </section>
  `;
	}
};
customElements.define("rapidoc-mock-dashboard", Ht);
// ui/views/import.js
var Ut = class extends L {
	static properties = {
		app: { attribute: !1 },
		server: { attribute: !1 },
		problem: { state: !0 },
		working: { state: !0 },
		over: { state: !0 }
	};
	constructor() {
		super(), this.problem = "", this.working = "", this.over = !1;
	}
	async send(e, t) {
		this.problem = "", this.working = e;
		try {
			let e = await this.app.call("/apis", {
				method: "POST",
				body: t
			});
			await this.app.load();
			let n = new Promise((e) => addEventListener("hashchange", e, { once: !0 }));
			location.hash = this.app.href("dashboard", "", e.id), await n, this.app.notice = `${e.title || e.id} is served under /${e.id}.`;
		} catch (e) {
			this.problem = e.message;
		} finally {
			this.working = "";
		}
	}
	async sendFile(e) {
		e && await this.send("file", {
			text: await e.text(),
			name: e.name
		});
	}
	async removeImported(e) {
		this.problem = "";
		try {
			await this.app.call(`/apis/${encodeURIComponent(e.id)}`, { method: "DELETE" }), await this.app.load(), this.app.notice = `${e.title || e.id} is no longer served.`;
		} catch (e) {
			this.problem = e.message;
		}
	}
	render() {
		let e = (this.server?.apis || []).filter((e) => e.imported), t = !!this.working;
		return C`
      ${I("import", "Import spec", "Add a spec to this mock while it runs. It is served under its own path, with state, until the mock stops.")}

      <section class="card">
        <h2>From an address</h2>
        <form
          class="row"
          @submit=${(e) => {
			e.preventDefault();
			let t = new FormData(e.target).get("url").trim();
			t && this.send("address", { url: t });
		}}
        >
          <input
            class="grow"
            name="url"
            type="url"
            required
            spellcheck="false"
            aria-label="The spec's address"
            placeholder="https://example.com/openapi.yaml or http://localhost:8000/openapi.json"
          />
          <button class="primary" type="submit" ?disabled=${t}>
            ${this.working === "address" ? "Loading…" : "Load"}
          </button>
        </form>
        <p class="hint">
          The mock reads it once. Relative <code>$ref</code>s are read from the same server.
        </p>
      </section>

      <section class="card">
        <h2>From a file</h2>
        <div
          class=${this.over ? "drop over" : "drop"}
          @dragover=${(e) => {
			e.preventDefault(), this.over = !0;
		}}
          @dragleave=${() => this.over = !1}
          @drop=${(e) => {
			e.preventDefault(), this.over = !1, this.sendFile(e.dataTransfer.files[0]);
		}}
        >
          <span>Drop a YAML or JSON file here, or</span>
          <button ?disabled=${t} @click=${() => this.querySelector("#import-file").click()}>
            ${this.working === "file" ? "Importing…" : "Choose a file"}
          </button>
          <input
            id="import-file"
            type="file"
            accept=".yaml,.yml,.json,application/json,text/yaml"
            hidden
            @change=${(e) => {
			this.sendFile(e.target.files[0]), e.target.value = "";
		}}
          />
        </div>
        <p class="hint">One file: a <code>$ref</code> to another file is not followed.</p>
      </section>

      <section class="card">
        <h2>Paste a spec</h2>
        <form
          class="stack"
          @submit=${(e) => {
			e.preventDefault();
			let t = new FormData(e.target).get("text");
			t.trim() && this.send("text", { text: t });
		}}
        >
          <textarea
            name="text"
            rows="8"
            spellcheck="false"
            aria-label="An OpenAPI spec, as YAML or JSON"
            placeholder="An OpenAPI 3.0, 3.1 or 3.2 spec, as YAML or JSON"
          ></textarea>
          <div class="row">
            <button class="primary" type="submit" ?disabled=${t}>
              ${this.working === "text" ? "Importing…" : "Import"}
            </button>
          </div>
        </form>
      </section>

      ${this.problem ? C`<p class="banner error" role="alert">${this.problem}</p>` : T}

      <section class="card">
        <h2>Imported specs (${e.length})</h2>
        ${e.length ? C`<table class="plain">
                <thead>
                  <tr>
                    <th>API</th>
                    <th>Served at</th>
                    <th class="number">Operations</th>
                    <th><span class="visually-hidden">Remove</span></th>
                  </tr>
                </thead>
                <tbody>
                  ${e.map((e) => C`
                      <tr>
                        <td>
                          <a href=${this.app.href("dashboard", "", e.id)}>${e.title || e.id}</a>
                        </td>
                        <td class="path">/${e.id}</td>
                        <td class="number">${e.operations}</td>
                        <td class="number">
                          <button @click=${() => this.removeImported(e)}>Remove</button>
                        </td>
                      </tr>
                    `)}
                </tbody>
              </table>` : C`<p class="hint">
                None yet. The specs the mock was started with stay, and can't be removed here.
              </p>`}
      </section>
    `;
	}
};
customElements.define("rapidoc-mock-import", Ut);
// ui/views/lint.js
function Wt(e) {
	return C`<div class="card stat lint-stat">
    ${Vt(e)}
    <div class="figure">
      <b>${B(e)}</b>
      <span>of ${j(e.checked)} checks passed</span>
    </div>
  </div>`;
}
var Gt = 3;
function Kt(e) {
	let t = new Set([...e].filter((e) => e.errors + e.warnings > 0).sort((e, t) => t.errors + t.warnings - (e.errors + e.warnings)).slice(0, Gt).map((e) => e.id)), n = /* @__PURE__ */ new Map();
	for (let r of e) t.has(r.id) && n.set(r.id, `var(--series-${n.size + 1})`);
	return n;
}
function qt(e, t, n, r) {
	let i = t === "error" ? "errors" : "warnings", a = t === "error" ? "Errors" : "Warnings", o = n.filter((e) => e[i] > 0), s = o.filter((e) => !r.has(e.id)), c = [...o.filter((e) => r.has(e.id)).map((e) => ({
		name: e.title,
		value: e[i],
		color: r.get(e.id)
	})), ...s.length ? [{
		name: s.length === 1 ? s[0].title : "Other",
		about: s.map((e) => `${e.title} ${j(e[i])}`).join(", "),
		value: s.reduce((e, t) => e + t[i], 0),
		color: "var(--series-other)"
	}] : []], l = c.map((e) => `${e.name} ${j(e.value)}`).join(", ");
	return C`<div class="card stat lint-stat">
    <div class="figure">
      <b>${j(e)}</b>
      <span>${a}</span>
    </div>
    ${c.length ? C`<div class="split-by">
            <ul class="key">
              ${c.map((e) => C`<li title=${e.about || T}>
                  <span class="swatch" style="background: ${e.color}"></span>
                  <span class="name">${e.name}</span>
                  <span class="value">${j(e.value)}</span>
                </li>`)}
            </ul>
            ${Dt(c.map((n) => ({
		value: n.value,
		color: n.color,
		title: `${n.about || n.name}: ${N(n.value, t)}, ${Math.round(100 * n.value / e)}%`
	})), { label: `${a} by category: ${l}` })}
          </div>` : C`<p class="none">None found.</p>`}
  </div>`;
}
var Jt = 100, Yt = class extends L {
	static properties = {
		app: { attribute: !1 },
		lint: { attribute: !1 },
		category: { type: String },
		rule: { type: String },
		filter: { state: !0 },
		severity: { state: !0 },
		limit: { state: !0 }
	};
	constructor() {
		super(), this.category = "", this.rule = "", this.filter = "", this.severity = "", this.limit = Jt;
	}
	willUpdate(e) {
		[
			"lint",
			"category",
			"rule",
			"filter",
			"severity"
		].some((t) => e.has(t)) && (this.limit = Jt);
	}
	about(e, t) {
		if (e) {
			let t = `Checks that ${zt(e.description)}.`;
			return C`<p class="checks" title=${t}>${t}</p>`;
		}
		if (t) {
			let e = `Checks ${t.about.split(", which ")[0]}.`;
			return C`<p class="checks" title=${e}>${e}</p>`;
		}
		return C`<p class="checks hint">Every finding of every rule. Pick a category or a rule to narrow it.</p>`;
	}
	found(e) {
		return e ? C`<p class="found-line ${e.errors ? "errors" : e.warnings ? "warnings" : "clean"}">
      ${Bt(e)}
    </p>` : T;
	}
	render() {
		let { app: e, lint: t } = this;
		if (!t || t.error) return C`
        ${I("lint", "Lint", "What the spec could say more clearly.")}
        ${t ? C`<p class="banner error" role="alert">Lint failed: ${t.error}</p>` : C`<p class="empty">Linting the spec…</p>`}
      `;
		let n = t.summary, r = n?.categories || [], { errors: i, warnings: a } = It(t), o = Kt(r), s = r.find((e) => this.rule ? e.rules.some((e) => e.name === this.rule) : e.id === this.category), c = this.rule ? s?.rules.find((e) => e.name === this.rule) : null, l = c ? [c.name] : s ? s.rules.map((e) => e.name) : null, u = l ? t.problems.filter((e) => l.includes(e.rule)) : t.problems, d = this.filter.trim().toLowerCase(), f = u.filter((e) => (!this.severity || e.severity === this.severity) && (!d || `${e.rule} ${e.message} ${e.pointer.join(" ")}`.toLowerCase().includes(d))), p = f.slice(0, this.limit), m = (t) => e.href("lint", "", void 0, t);
		return C`
      ${I("lint", t.linted ? "Lint" : "Not valid OpenAPI", t.linted ? C`What the spec could say more clearly, by the rules of <code>rapidoc lint --stateful</code>.` : "The spec is not valid OpenAPI, so it was not linted. Fix these errors first.")}
      ${t.mockError ? C`<p class="banner error">The mock can't start on this spec: ${t.mockError}</p>` : T}
      <div class="cards lint-cards">
        ${z(n) ? Wt(n) : T}
        ${qt(i, "error", r, o)}
        ${qt(a, "warning", r, o)}
      </div>
      <div class="lint-layout">
        <div class="lint-head">
          <div class="row">
            <h2>
              ${c ? C`<code>${c.name}</code>` : s?.title || "All findings"}
            </h2>
            ${l ? C`<a href=${m()}>All findings</a>` : T}
          </div>
          ${this.about(c, s)}
        </div>
        ${r.length ? C`
                <nav class="card side lint-rows" aria-label="Categories and rules">
                  ${r.map((e) => {
			let t = e === s;
			return C`
                      ${Rt(e, {
				label: e.title,
				title: e.about,
				href: t && !c ? m() : m({ category: e.id }),
				current: t && !c,
				expanded: t
			})}
                      ${t ? C`<div class="lint-rules">
                              ${e.rules.map((e) => Rt(e, {
				label: e.name,
				title: `Checks that ${zt(e.description)}.`,
				href: m({ rule: e.name }),
				current: e === c,
				rule: !0,
				expanded: null
			}))}
                            </div>` : T}
                    `;
		})}
                </nav>
              ` : T}
        <div class="lint-controls">
          ${this.found(c || s || n)}
          <div class="row">
          <input
            type="search"
            placeholder="Filter findings"
            aria-label="Filter findings"
            .value=${this.filter}
            @input=${(e) => this.filter = e.target.value}
          />
          ${Ct("Severity", [
			["", "All"],
			["error", "Errors"],
			["warning", "Warnings"]
		], this.severity, (e) => this.severity = e)}
          <span class="hint">
            ${f.length === t.problems.length ? N(f.length, "finding") : `${j(f.length)} of ${N(t.problems.length, "finding")}`}
          </span>
        </div>
        </div>
        <div class="pane">
          ${f.length ? C`
                  <ol class="card findings">
                    ${p.map((e) => C`
                        <li>
                          <div class="meta">
                            <span class="severity ${e.severity}">${e.severity}</span>
                            ${r.length ? C`<a href=${m({ rule: e.rule })}><code>${e.rule}</code></a>` : C`<code>${e.rule}</code>`}
                            <span>${e.file ? `${e.file}:${e.line}` : `line ${e.line}`}</span>
                          </div>
                          <div>${e.message}</div>
                          ${e.pointer.length ? C`<code class="where">${e.pointer.join(" › ")}</code>` : T}
                        </li>
                      `)}
                  </ol>
                  ${f.length > p.length ? C`<div class="row">
                          <button @click=${() => this.limit += Jt}>
                            Show ${Math.min(Jt, f.length - p.length)} more
                          </button>
                          <button @click=${() => this.limit = f.length}>
                            Show all ${j(f.length)}
                          </button>
                          <span class="hint">${j(p.length)} shown</span>
                        </div>` : T}
                ` : C`<p class="empty">
                  ${u.length ? "No finding matches." : "Nothing found here."}
                </p>`}
        </div>
      </div>
    `;
	}
};
customElements.define("rapidoc-mock-lint", Yt);
// ui/views/operation-detail.js
var Xt = (e) => {
	if (!e?.contentTypes) return "no body";
	let t = e.schema ? e.schema : "an unnamed schema";
	return `${e.many ? "a list of " : ""}${t}${e.inside ? `, inside ${e.inside}` : ""}`;
}, Zt = (e) => e.body === "example" ? "Spec example" : e.body === "examples" ? e.examples.length === 1 ? C`Named example <code>${e.examples[0]}</code>` : C`Named example <code>${e.examples[0]}</code>
            <span class="hint">(${e.examples.length - 1} more)</span>` : e.body === "generated" ? "Schema (generated)" : C`<span class="hint">No body</span>`, Qt = (e) => C`<span class="status s${/^[1-5]/.test(e) ? e[0] : "d"}">${e}</span>`, $t = class extends L {
	static properties = {
		app: { attribute: !1 },
		api: { type: String },
		operation: { type: String },
		operations: { attribute: !1 },
		resources: { attribute: !1 },
		version: { type: Number },
		detail: { state: !0 },
		picked: { state: !0 },
		samples: { state: !0 },
		open: { state: !0 }
	};
	constructor() {
		super(), this.detail = null, this.picked = "", this.samples = {}, this.open = !1;
	}
	get address() {
		return `/model/${encodeURIComponent(this.api)}/operations/${encodeURIComponent(this.operation)}`;
	}
	updated(e) {
		e.has("open") && this.open && this.querySelector(".drawer.response .close")?.focus(), [
			"api",
			"operation",
			"version"
		].some((t) => e.has(t)) && (this.picked = "", this.samples = {}, this.open = !1, this.reads = {}, this.read("detail", this.address, (e) => this.detail = e));
	}
	pick(e) {
		if (this.open = !0, e.returned) {
			this.picked = "";
			return;
		}
		if (this.picked = e.code, this.samples[e.code]) return;
		let { operation: t } = this;
		this.read(`sample ${e.code}`, `${this.address}?code=${encodeURIComponent(e.code)}`, ({ sample: n }) => {
			t === this.operation && (this.samples = {
				...this.samples,
				[e.code]: n
			});
		});
	}
	render() {
		let { app: e } = this, t = this.detail;
		if (!t) return C`<p class="empty">Loading…</p>`;
		let n = (this.operations || []).filter((e) => e.path === t.path), r = new Set((this.resources || []).map((e) => e.name)), i = (this.resources || []).find((e) => e.name === t.resource)?.review, a = /key|matches no field/.test(i || ""), o = (e) => e.review || (a && t.keyFrom === `${e.in}.${e.name}` ? i : void 0), s = t.parameters.some(o), c = (t) => t.schema ? C`${t.many ? "list of " : ""}${r.has(t.schema) ? C`<a href=${e.href("resources", `${t.schema}/schema`)}>${t.schema}</a>` : C`<code>${t.schema}</code>`}${t.inside ? C` <span class="hint">in ${t.inside}</span>` : T}` : t.contentTypes ? C`<span class="hint">unnamed schema</span>` : C`<span class="hint">—</span>`, l = this.picked || t.responses.find((e) => e.returned)?.code || "", u = this.picked ? this.samples[this.picked] : t.sample, d = (e) => e.returned || /^[1-5]\d\d$/.test(e.code), f = (e) => Et(() => this.pick(e));
		return C`
    <p><a href=${e.href("operations")}>← Operations</a></p>
    <div class="title">
      <h1 class="wrap op-title">${Pt(t.method)} <code>${t.path}</code></h1>
      <p>${t.summary || t.id}</p>
    </div>
    ${n.length > 1 ? C`<nav class="tabs methods" aria-label="Methods of ${t.path}">
            ${n.map((n) => C`
                <a
                  href=${e.href("operations", n.id)}
                  class=${n.id === t.id ? "current" : ""}
                  aria-current=${n.id === t.id ? "page" : "false"}
                  title=${n.summary || n.id}
                  >${Pt(n.method)}</a
                >
              `)}
          </nav>` : T}

    <section class="card">
      <h2>What the mock does</h2>
      <p>${F(t.does)}</p>
      <div class="row">
        ${Mt(t.label)}
        ${t.review ? C`${t.review.other ? C`<span class="hint">${F(t.review.other)}.</span>` : T}
              <button
                class="link"
                @click=${() => this.querySelector("#parameters")?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})}
              >
                ${N(t.review.parameters, "parameter")} to review
              </button>` : t.why ? C`<span class="hint">${F(t.why)}</span>` : i ? C`<span class="hint">${F(jt(i))}</span>` : C`<span class="hint">${kt[t.label]}</span>`}
      </div>
      ${t.resource ? C`
            <ul class="facts">
              <li>
                Resource:
                <a href=${e.href("resources", `${t.resource}/schema`)}>${t.resource}</a>
                (<a href=${e.href("resources", t.resource)}>records</a>)
              </li>
            </ul>
          ` : T}
      <p class="hint note">
        To get a particular documented response instead, send the request header
        <code>Prefer: code=404</code> (any status the spec documents), or
        <code>Prefer: example=&lt;name&gt;</code> for one of the spec's named examples. The mock then
        answers exactly as the spec writes that response, and stores nothing.
      </p>
    </section>

    ${t.parameters.length ? C`
          <section class="card" id="parameters">
            <h2>Parameters</h2>
            <div class="scroll">
              <table class="plain">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>In</th>
                    <th>Type</th>
                    <th>Used by the mock for</th>
                    ${s ? C`<th>Needs review</th>` : T}
                  </tr>
                </thead>
                <tbody>
                  ${t.parameters.map((e) => C`
                      <tr title=${e.description || ""}>
                        <td>
                          <code>${e.name}</code>
                          ${e.required ? C`<span class="tag">required</span>` : T}
                          ${o(e) ? Nt(o(e)) : T}
                        </td>
                        <td>${e.in}</td>
                        <td>${e.type}</td>
                        <td>${F(e.role) || C`<span class="hint">validated only</span>`}</td>
                        ${s ? C`<td class="to-review">${F(o(e))}</td>` : T}
                      </tr>
                    `)}
                </tbody>
              </table>
            </div>
          </section>
        ` : T}

    <section class="card">
      <h2>Request body</h2>
      ${t.request ? C`<p>
            ${t.request.required ? "Required" : "Optional"}: ${Xt(t.request)}
            <span class="hint">${(t.request.contentTypes || []).join(", ")}</span>
          </p>` : C`<p class="hint">None.</p>`}
    </section>

    <section class="card">
      <h2>Responses</h2>
      <p class="hint">Select a response to see its sample.</p>
      <div class="scroll">
        <table
          class="plain responses"
          @keydown=${(e) => e.key === "Escape" && this.open && (this.open = !1)}
        >
          <thead>
            <tr>
              <th>Status</th>
              <th>Schema</th>
              <th>Data source</th>
              <th>Returned when</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            ${t.responses.map((e) => C`
                <tr
                  class=${this.open && e.code === l ? "current" : ""}
                  tabindex=${d(e) ? "0" : T}
                  aria-selected=${d(e) ? String(this.open && e.code === l) : T}
                  @click=${d(e) ? f(e).click : T}
                  @keydown=${d(e) ? f(e).key : T}
                >
                  <td>${Qt(e.code)}</td>
                  <td>
                    ${c(e)}
                    ${e.contentTypes ? C`<div class="hint">${e.contentTypes.join(", ")}</div>` : T}
                  </td>
                  <td>${Zt(e)}</td>
                  <td>
                    ${e.returned ? C`<span class="clean">by default</span>` : /^[1-5]\d\d$/.test(e.code) ? C`<span class="hint">header</span> <code>Prefer: code=${e.code}</code>` : C`<span class="hint">for an undocumented code</span>`}
                  </td>
                  <td>${e.description || ""}</td>
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    </section>

    ${this.open ? wt({
			label: `Sample response ${l}`,
			onClose: () => this.open = !1,
			kind: "response"
		}, C`
              <h3>Sample response ${l ? Qt(l) : T}</h3>
              ${u ? u.error ? C`<p class="hint">The mock could not make one: ${u.error}</p>` : C`
                        <p class="hint">
                          Status ${u.status},
                          ${u.source === "generated" ? "generated from the schema" : u.source === "empty" ? "with no body" : `from the spec's ${u.source}`}.
                          ${this.picked ? C`A request with the header
                                  <code>Prefer: code=${this.picked}</code> gets it; nothing is stored.` : t.action === "none" ? "This is what a call returns." : "It shows the shape: a call returns stored records in its place."}
                        </p>
                        <pre class="sample">${bt(u.body) || "(no body)"}</pre>
                      ` : C`<p class="empty">Loading…</p>`}
            `) : T}
  `;
	}
};
customElements.define("rapidoc-mock-operation-detail", $t);
// ui/views/operations.js
var en = (e) => e.split("/").map((e, t) => t ? C`/<wbr /><span class="nowrap">${e}</span>` : C`<span class="nowrap">${e}</span>`), tn = {
	POST: "create",
	PUT: "update",
	PATCH: "patch",
	DELETE: "delete"
}, nn = (e) => e.method === "GET" || tn[e.method] !== e.action ? yt(e.action) : "", rn = "path";
function an(e, t) {
	let n = /* @__PURE__ */ new Map();
	for (let r of e) {
		let e = t === "resource" ? r.resource || "" : r.path;
		n.has(e) || n.set(e, []), n.get(e).push(r);
	}
	let r = [...n].map(([e, t]) => ({
		title: e,
		operations: t
	}));
	return t === "resource" && r.sort((e, t) => (e.title === "") - (t.title === "") || e.title.localeCompare(t.title)), r;
}
var on = class extends L {
	static properties = {
		app: { attribute: !1 },
		api: { attribute: !1 },
		operation: { type: String },
		only: { type: String },
		version: { type: Number },
		filter: { state: !0 },
		labels: { state: !0 },
		groupBy: { state: !0 }
	};
	constructor() {
		super(), this.operation = "", this.only = "", this.filter = "", this.labels = new Set(Object.keys(R)), this.groupBy = rn;
	}
	willUpdate(e) {
		e.has("only") && R[this.only] && (this.labels = /* @__PURE__ */ new Set([this.only])), e.has("groupBy") && (rn = this.groupBy);
	}
	render() {
		let { app: e, api: t } = this;
		if (this.operation) return C`<rapidoc-mock-operation-detail
      .app=${e}
      .api=${t.id}
      .operations=${t.operations}
      .resources=${t.resources}
      .operation=${this.operation}
      .version=${this.version}
    ></rapidoc-mock-operation-detail>`;
		let n = this.filter.trim().toLowerCase(), r = t.operations.filter((e) => this.labels.has(e.label) && (!n || `${e.method} ${e.path} ${e.id} ${e.resource || ""} ${e.why || ""}`.toLowerCase().includes(n))), i = this.groupBy === "resource", a = new Map(t.resources.map((e) => [e.name, e.review])), o = an(r, this.groupBy), s = (e) => {
			let t = new Set(this.labels);
			t.has(e) ? t.delete(e) : t.add(e), this.labels = t;
		};
		return C`
    ${I("operations", "Operations", "Every operation of the spec, with what the mock does for it.", t.operations.length)}
    <div class="row">
      <input
        type="search"
        placeholder="Filter operations"
        aria-label="Filter operations"
        .value=${this.filter}
        @input=${(e) => this.filter = e.target.value}
      />
      ${Ct("Group by", [["path", "By path"], ["resource", "By resource"]], this.groupBy, (e) => this.groupBy = e)}
      <div class="label-filters" role="group" aria-label="Labels shown">
        ${Object.keys(R).map((e) => C`
            <label class=${t.labels[e] ? "label-filter" : "label-filter none"} title=${kt[e]}>
              <input
                type="checkbox"
                ?disabled=${!t.labels[e]}
                .checked=${this.labels.has(e)}
                @change=${() => s(e)}
              />
              <span class="dot" style="--dot: ${Ot[e]}"></span>
              ${R[e]}
              <span class="count">${t.labels[e]}</span>
            </label>
          `)}
      </div>
      <span class="grow"></span>
      <span class="hint">${r.length} of ${t.operations.length} operations</span>
    </div>
    ${r.length ? C`
          <div class="scroll fill">
            <table class="operations">
              <thead>
                <tr>
                  <th class=${i ? "" : "col-path"}>${i ? "Resource" : "Path"}</th>
                  <th>Method</th>
                  ${i ? C`<th class="col-path">Path</th>` : ""}
                  <th>${i ? "Does" : "Resource"}</th>
                  <th>Label</th>
                  <th class="col-why">Why</th>
                </tr>
              </thead>
              ${o.map((t) => C`
                  <tbody>
                    ${t.operations.map((n, r) => C`
                        <tr
                          class="opens"
                          title=${n.summary || n.id}
                          @click=${Et(() => location.hash = e.href("operations", n.id)).click}
                        >
                          ${r === 0 ? C`<th
                                  class="group"
                                  scope="rowgroup"
                                  rowspan=${t.operations.length}
                                >
                                  ${i ? t.title ? C`<a href=${e.href("resources", t.title)}
                                            >${t.title}</a
                                          >` : C`<span class="hint">No state</span>` : C`<a
                                          class="path-link"
                                          href=${e.href("operations", n.id)}
                                          title="Open ${t.title}: its methods are tabs there"
                                          ><code>${en(t.title)}</code></a
                                        >`}
                                </th>` : T}
                          <td>
                            <a
                              class="method-link"
                              href=${e.href("operations", n.id)}
                              aria-label="Details of ${n.method} ${n.path}"
                              >${Pt(n.method)}</a
                            >
                          </td>
                          ${i ? C`<td class="path"><code>${en(n.path)}</code></td>` : ""}
                          <td>
                            ${n.action === "none" ? C`<span class="hint">no state</span>` : i ? yt(n.action) : C`<a href=${e.href("resources", n.resource)}>${n.resource}</a>
                                    ${nn(n) ? C`<span class="hint">${nn(n)}</span>` : T}`}
                          </td>
                          <td>${Mt(n.label)}</td>
                          <td class="why">
                            ${F(n.why || (n.label === "needsReview" && a.get(n.resource) ? jt(a.get(n.resource)) : ""))}
                          </td>
                        </tr>
                      `)}
                  </tbody>
                `)}
            </table>
          </div>
        ` : C`<p class="empty">No operation matches.</p>`}
  `;
	}
};
customElements.define("rapidoc-mock-operations", on);
// ../../node_modules/lit-html/directive-helpers.js
var { I: sn } = Fe, cn = {}, ln = (e, t = cn) => e._$AH = t, un = Ve(class extends He {
	constructor() {
		super(...arguments), this.key = T;
	}
	render(e, t) {
		return this.key = e, t;
	}
	update(e, [t, n]) {
		return t !== this.key && (ln(e), this.key = t), n;
	}
});
// ../../node_modules/@tanstack/table-core/dist/utils.js
function V(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function H(e) {
	if (Array.isArray(e)) return e.map(H);
	if (e && typeof e == "object") {
		let t = Object.getPrototypeOf(e);
		if (t !== Object.prototype && t !== null) return e;
		let n = t === null ? U() : {}, r = Object.keys(e);
		for (let t = 0; t < r.length; t++) {
			let i = r[t];
			Object.defineProperty(n, i, {
				configurable: !0,
				enumerable: !0,
				value: H(e[i]),
				writable: !0
			});
		}
		return n;
	}
	return e;
}
function dn(e, t) {
	let n = Object.keys(t), r = e;
	for (let e = 0; e < n.length; e++) {
		let i = n[e];
		!i.startsWith("_memo_") && i !== "_cellsCache" && (r[i] = t[i]);
	}
	return e;
}
function U() {
	return Object.create(null);
}
function fn(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function pn(e, t) {
	return (n) => {
		(t.options.atoms?.[e] ?? t.baseAtoms[e]).set((e) => V(n, e));
	};
}
function mn(e) {
	if (typeof e != "object" || !e) return !1;
	if (Array.isArray(e)) return !0;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null;
}
function hn(e) {
	return Reflect.ownKeys(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
var gn = 3;
function _n(e, t) {
	return vn(e, t, gn);
}
function vn(e, t, n) {
	if (Object.is(e, t)) return !0;
	if (n <= 0 || !mn(e) || !mn(t) || (Array.isArray(e) || Array.isArray(t)) && (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length)) return !1;
	let r = hn(e), i = hn(t);
	if (r.length !== i.length) return !1;
	let a = e, o = t;
	for (let e = 0; e < r.length; e++) {
		let i = r[e];
		if (!Object.prototype.propertyIsEnumerable.call(t, i) || !vn(a[i], o[i], n - 1)) return !1;
	}
	return !0;
}
function yn(e, t, n, r = _n) {
	let i = `on${t.charAt(0).toUpperCase()}${t.slice(1)}Change`, a = e.options[i];
	a && a((e) => {
		let t = V(n, e);
		return r(e, t) ? e : t;
	});
}
function bn(e) {
	return e instanceof Function;
}
function xn(e, t) {
	let n = [], r = (e) => {
		e.forEach((e) => {
			n.push(e);
			let i = t(e);
			i.length && r(i);
		});
	};
	return r(e), n;
}
var Sn = ({ fn: e, memoDeps: t, onAfterCompare: n, onAfterUpdate: r, onBeforeCompare: i, onBeforeUpdate: a }) => {
	let o = [], s;
	return (c) => {
		i?.();
		let l = t?.(c), u = !l || l.length !== o?.length;
		if (!u && l) {
			for (let e = 0; e < l.length; e++) if (l[e] !== o[e]) {
				u = !0;
				break;
			}
		}
		return n?.(u), u && (o = l, a?.(), s = e(...l ?? []), r?.(s)), s;
	};
};
function Cn(e) {
	let t = !1;
	return () => {
		t ? e() : t = !0;
	};
}
function W({ feature: e, fnName: t, objectId: n, onAfterUpdate: r, table: i, ...a }) {
	let o = { onAfterUpdate: r ? () => {
		let { schedule: e, untrack: t } = i._reactivity;
		e(() => t(() => r()));
	} : void 0 };
	return Sn({
		...a,
		...o
	});
}
function wn(e, t = "_") {
	let [n, r] = e.replace(t, " ").split(" ");
	return {
		fnKey: r,
		fnName: `${n}.${r}`,
		parentName: n
	};
}
function G(e, t, n) {
	for (let [r, { fn: i, memoDeps: a }] of Object.entries(n)) {
		let { fnKey: n, fnName: o } = wn(r);
		t[n] = a ? W({
			memoDeps: a,
			fn: i,
			fnName: o,
			table: t,
			feature: e
		}) : i;
	}
}
function K(e, t, n, r) {
	for (let [i, { fn: a, memoDeps: o }] of Object.entries(r)) {
		let { fnKey: r, fnName: s } = wn(i);
		if (o) {
			let i = `_memo_${r}`;
			t[r] = function(...t) {
				if (!this[i]) {
					let t = this;
					this[i] = W({
						memoDeps: (e) => o(t, e),
						fn: (...e) => a(t, ...e),
						fnName: s,
						objectId: t.id,
						table: n,
						feature: e
					});
				}
				return this[i](...t);
			};
		} else t[r] = function(...e) {
			return a(this, ...e);
		};
	}
}
function q(e, t, n, ...r) {
	return e[t]?.(...r) ?? n(e, ...r);
}
// ../../node_modules/@tanstack/table-core/dist/core/cells/coreCellsFeature.utils.js
function Tn(e) {
	return e.row.getValue(e.column.id);
}
function En(e) {
	return e.getValue() ?? e.table.options.renderFallbackValue;
}
function Dn(e) {
	return {
		table: e.table,
		column: e.column,
		row: e.row,
		cell: e,
		getValue: () => e.getValue(),
		renderValue: () => e.renderValue()
	};
}
// ../../node_modules/@tanstack/table-core/dist/core/cells/coreCellsFeature.js
var On = { assignCellPrototype: (e, t) => {
	K("coreCellsFeature", e, t, {
		cell_getValue: { fn: (e) => Tn(e) },
		cell_renderValue: { fn: (e) => En(e) },
		cell_getContext: {
			fn: (e) => Dn(e),
			memoDeps: (e) => [e]
		}
	});
} };
// ../../node_modules/@tanstack/table-core/dist/core/columns/constructColumn.js
function kn(e) {
	if (!e._columnPrototype) {
		e._columnPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignColumnPrototype?.(e._columnPrototype, e);
	}
	return e._columnPrototype;
}
function An(e, t, n, r) {
	let i = {
		...e.getDefaultColumnDef(),
		...t
	}, a = i.accessorKey, o = a === void 0 ? void 0 : String(a), s = i.id ?? o?.replaceAll(".", "_") ?? (typeof i.header == "string" ? i.header : void 0), c;
	if (i.accessorFn) c = i.accessorFn;
	else if (a !== void 0) {
		if (typeof a == "string" && a.includes(".")) {
			let e = a.split(".");
			c = (t) => {
				let n = t;
				for (let t = 0; t < e.length; t++) {
					let r = e[t];
					n = n?.[r];
				}
				return n;
			};
		} else c = (e) => e[i.accessorKey];
	}
	if (!s) throw Error();
	let l = kn(e), u = Object.create(l);
	u.accessorFn = c, u.columnDef = i, u.columns = [], u.depth = n, u.id = `${String(s)}`, u.parent = r;
	let d = e._columnInstanceInitFns;
	for (let e = 0; e < d.length; e++) d[e](u);
	return u;
}
// ../../node_modules/@tanstack/table-core/dist/core/featureStubs.js
function jn(e) {
	return e.getIsVisible?.() ?? !0;
}
function Mn(e) {
	return e.getVisibleLeafColumns?.() ?? e.getAllLeafColumns();
}
function Nn(e, t) {
	let n = e, r = t;
	return n.getOrderColumnsFn?.()(r) ?? n._orderGroupedColumns?.(r) ?? t;
}
function Pn(e, t, n, r) {
	return e._orderByColumnPinning?.(t, n, r) ?? t;
}
function Fn(e) {
	return e.getGlobalFilterFn?.();
}
function In(e) {
	return e.getCanGlobalFilter?.() ?? !1;
}
function Ln(e, t) {
	return e._expandRows?.(t) ?? t;
}
function Rn(e) {
	e.autoResetExpanded?.();
}
function zn(e) {
	e.autoResetPageIndex?.();
}
function Bn(e) {
	e.autoResetSorting?.();
}
function Vn(e) {
	e.autoResetCellSelection?.();
}
// ../../node_modules/@tanstack/table-core/dist/core/columns/coreColumnsFeature.utils.js
function Hn(e) {
	return [e, ...e.columns.flatMap((e) => e.getFlatColumns())];
}
function Un(e) {
	if (e.columns.length) {
		let t = e.columns.flatMap((e) => e.getLeafColumns());
		return Nn(e.table, t);
	}
	return [e];
}
function Wn(e) {
	return {
		header: (e) => {
			let t = e.header.column.columnDef;
			return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
		},
		cell: (e) => e.renderValue()?.toString?.() ?? null,
		...Object.values(e._features).reduce((e, t) => Object.assign(e, t.getDefaultColumnDef?.()), {}),
		...e.options.defaultColumn
	};
}
function Gn(e, t, n, r = 0) {
	let i = Array(t.length);
	for (let a = 0; a < t.length; a++) {
		if (!(a in t)) continue;
		let o = t[a], s = An(e, o, r, n), c = o;
		s.columns = c.columns ? Gn(e, c.columns, s, r + 1) : [], i[a] = s;
	}
	return i;
}
function Kn(e) {
	return Gn(e, e.options.columns);
}
function qn(e) {
	return e.getAllColumns().flatMap((e) => e.getFlatColumns());
}
function Jn(e) {
	let t = U(), n = e.getAllFlatColumns();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.id] = r;
	}
	return t;
}
function Yn(e) {
	return Nn(e, e.getAllColumns().flatMap((e) => e.getLeafColumns()));
}
function Xn(e) {
	let t = U(), n = e.getAllLeafColumns();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.id] = r;
	}
	return t;
}
function Zn(e, t) {
	return e.getAllFlatColumnsById()[t];
}
// ../../node_modules/@tanstack/table-core/dist/core/columns/coreColumnsFeature.js
var Qn = {
	assignColumnPrototype: (e, t) => {
		K("coreColumnsFeature", e, t, {
			column_getFlatColumns: {
				fn: (e) => Hn(e),
				memoDeps: (e) => [e.table.options.columns]
			},
			column_getLeafColumns: {
				fn: (e) => Un(e),
				memoDeps: (e) => [
					e.table.atoms.columnOrder?.get(),
					e.table.atoms.grouping?.get(),
					e.table.options.columns,
					e.table.options.groupedColumnMode
				]
			}
		});
	},
	constructTableAPIs: (e) => {
		G("coreColumnsFeature", e, {
			table_getDefaultColumnDef: {
				fn: () => Wn(e),
				memoDeps: () => [e.options.defaultColumn]
			},
			table_getAllColumns: {
				fn: () => Kn(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllFlatColumns: {
				fn: () => qn(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllFlatColumnsById: {
				fn: () => Jn(e),
				memoDeps: () => [e.options.columns]
			},
			table_getAllLeafColumns: {
				fn: () => Yn(e),
				memoDeps: () => [
					e.atoms.columnOrder?.get(),
					e.atoms.grouping?.get(),
					e.options.columns,
					e.options.groupedColumnMode
				]
			},
			table_getAllLeafColumnsById: {
				fn: () => Xn(e),
				memoDeps: () => [e.getAllLeafColumns()]
			},
			table_getColumn: { fn: (t) => Zn(e, t) }
		});
	}
};
// ../../node_modules/@tanstack/table-core/dist/core/headers/constructHeader.js
function $n(e) {
	if (!e._headerPrototype) {
		e._headerPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignHeaderPrototype?.(e._headerPrototype, e);
	}
	return e._headerPrototype;
}
function er(e, t, n) {
	let r = $n(e), i = Object.create(r);
	i.colSpan = 0, i.column = t, i.depth = n.depth, i.headerGroup = null, i.id = n.id ?? t.id, i.index = n.index, i.isPlaceholder = !!n.isPlaceholder, i.placeholderId = n.placeholderId, i.rowSpan = 0, i.subHeaders = [];
	let a = e._headerInstanceInitFns;
	for (let e = 0; e < a.length; e++) a[e](i);
	return i;
}
// ../../node_modules/@tanstack/table-core/dist/core/headers/buildHeaderGroups.js
function tr(e, t = 1) {
	let n = t;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		jn(i) && i.columns.length && (n = Math.max(n, tr(i.columns, t + 1)));
	}
	return n;
}
function nr(e, t) {
	return e ? `${e}_${t}` : String(t);
}
function rr(e, t, n, r) {
	let i = e ?? "";
	return t && (i = i ? `${i}_${t}` : String(t)), n && (i = i ? `${i}_${n}` : n), r && (i = i ? `${i}_${r}` : r), i;
}
function ir(e, t) {
	let n = 0;
	for (let r = 0; r < e.length; r++) e[r].column === t && n++;
	return n;
}
function ar(e, t, n, r, i, a) {
	let o = {
		depth: t,
		id: nr(r, t),
		headers: []
	}, s = [];
	for (let i = 0; i < e.length; i++) {
		if (!(i in e)) continue;
		let a = e[i], c = s[s.length - 1], l = a.column.depth === o.depth, u, d = !1;
		if (l && a.column.parent ? u = a.column.parent : (u = a.column, d = !0), c && c.column === u) c.subHeaders.push(a);
		else {
			let e = er(n, u, {
				id: rr(r, t, u.id, a.id),
				isPlaceholder: d,
				placeholderId: d ? String(ir(s, u)) : void 0,
				depth: t,
				index: s.length
			});
			e.subHeaders.push(a), s.push(e);
		}
		o.headers.push(a), a.headerGroup = o;
	}
	for (let e = 0; e < a.length; e++) a[e](o);
	i.push(o), t > 0 && ar(s, t - 1, n, r, i, a);
}
function or(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		if (!jn(n.column)) continue;
		let r = 0;
		if (n.subHeaders.length) {
			or(n.subHeaders);
			for (let e = 0; e < n.subHeaders.length; e++) {
				let t = n.subHeaders[e];
				jn(t.column) && (r += t.colSpan);
			}
		} else r = 1;
		if (n.colSpan = r, n.isPlaceholder && n.subHeaders.length === 1 && n.subHeaders[0].column === n.column) {
			let e = 1, t = n.subHeaders[0];
			for (; t;) t.rowSpan = 0, e++, t = t.subHeaders.length === 1 && t.subHeaders[0].column === n.column ? t.subHeaders[0] : void 0;
			n.rowSpan = e;
		} else n.rowSpan = 1;
	}
}
function sr(e, t, n, r) {
	let i = tr(e), a = [], o = n._headerGroupInstanceInitFns, s = Array(t.length);
	for (let e = 0; e < t.length; e++) e in t && (s[e] = er(n, t[e], {
		depth: i,
		index: e
	}));
	return ar(s, i - 1, n, r, a, o), a.reverse(), or(a[0]?.headers ?? []), a;
}
// ../../node_modules/@tanstack/table-core/dist/core/headers/coreHeadersFeature.utils.js
function cr(e, t) {
	for (let n = 0; n < e.subHeaders.length; n++) cr(e.subHeaders[n], t);
	t.push(e);
}
function lr(e) {
	let t = [];
	return cr(e, t), t;
}
function ur(e) {
	return {
		column: e.column,
		header: e,
		table: e.column.table
	};
}
function dr(e) {
	return sr(e.getAllColumns(), Pn(e, Mn(e), (e) => e.id), e);
}
function fr(e) {
	return [...e.getHeaderGroups()].reverse();
}
function pr(e) {
	let t = e.getHeaderGroups(), n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e].headers;
		for (let e = 0; e < r.length; e++) n.push(r[e]);
	}
	return n;
}
function mr(e) {
	let t = e.getHeaderGroups()[0]?.headers ?? [], n = [];
	for (let e = 0; e < t.length; e++) {
		let r = t[e].getLeafHeaders();
		for (let e = 0; e < r.length; e++) n.push(r[e]);
	}
	return n;
}
// ../../node_modules/@tanstack/table-core/dist/core/headers/coreHeadersFeature.js
var hr = {
	assignHeaderPrototype: (e, t) => {
		K("coreHeadersFeature", e, t, {
			header_getLeafHeaders: {
				fn: (e) => lr(e),
				memoDeps: (e) => [e.column.table.options.columns]
			},
			header_getContext: {
				fn: (e) => ur(e),
				memoDeps: (e) => [e.column.table.options.columns]
			}
		});
	},
	constructTableAPIs: (e) => {
		G("coreHeadersFeature", e, {
			table_getHeaderGroups: {
				fn: () => dr(e),
				memoDeps: () => [
					e.options.columns,
					e.atoms.columnOrder?.get(),
					e.atoms.grouping?.get(),
					e.atoms.columnPinning?.get(),
					e.atoms.columnVisibility?.get(),
					e.options.groupedColumnMode
				]
			},
			table_getFooterGroups: {
				fn: () => fr(e),
				memoDeps: () => [e.getHeaderGroups()]
			},
			table_getFlatHeaders: {
				fn: () => pr(e),
				memoDeps: () => [e.getHeaderGroups()]
			},
			table_getLeafHeaders: {
				fn: () => mr(e),
				memoDeps: () => [e.getHeaderGroups()]
			}
		});
	}
};
// ../../node_modules/@tanstack/table-core/dist/core/rows/constructRow.js
function gr(e) {
	if (!e._rowPrototype) {
		e._rowPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignRowPrototype?.(e._rowPrototype, e);
	}
	return e._rowPrototype;
}
var _r = (e, t, n, r, i, a, o) => {
	let s = gr(e), c = Object.create(s);
	c._displayIndexCache = -1, c._uniqueValuesCache = U(), c._valuesCache = U(), c.depth = i, c.id = t, c.index = r, c.original = n, c.parentId = o, c.subRows = a ?? [];
	let l = e._rowInstanceInitFns;
	for (let e = 0; e < l.length; e++) l[e](c);
	return c;
};
// ../../node_modules/@tanstack/table-core/dist/core/row-models/createCoreRowModel.js
function vr() {
	return (e) => W({
		feature: "coreRowModelsFeature",
		table: e,
		fnName: "table.getCoreRowModel",
		memoDeps: () => [e.options.data],
		fn: () => br(e, e.options.data),
		onAfterUpdate: Cn(() => {
			Rn(e), zn(e), Bn(e), Vn(e);
		})
	});
}
function yr(e, t, n, r = 0, i) {
	let a = [];
	for (let o = 0; o < n.length; o++) {
		let s = n[o], c = _r(e, e.getRowId(s, o, i), s, o, r, void 0, i?.id);
		t.flatRows.push(c), t.rowsById[c.id] = c, a.push(c), e.options.getSubRows && (c.originalSubRows = e.options.getSubRows(s, o), c.originalSubRows?.length && (c.subRows = yr(e, t, c.originalSubRows, r + 1, c)));
	}
	return a;
}
function br(e, t) {
	let n = {
		rows: [],
		flatRows: [],
		rowsById: U()
	};
	return n.rows = yr(e, n, t), n;
}
// ../../node_modules/@tanstack/table-core/dist/core/row-models/coreRowModelsFeature.utils.js
function xr(e) {
	return e._rowModels.coreRowModel || (e._rowModels.coreRowModel = e.options.features.coreRowModel?.(e) ?? vr()(e)), e._rowModels.coreRowModel();
}
function Sr(e) {
	return e.getCoreRowModel();
}
function Cr(e) {
	return e._rowModels.filteredRowModel || (e._rowModels.filteredRowModel = e.options.features.filteredRowModel?.(e)), e.options.manualFiltering || !e._rowModels.filteredRowModel ? e.getPreFilteredRowModel() : e._rowModels.filteredRowModel();
}
function wr(e) {
	return e.getFilteredRowModel();
}
function Tr(e) {
	return e._rowModels.groupedRowModel || (e._rowModels.groupedRowModel = e.options.features.groupedRowModel?.(e)), e.options.manualGrouping || !e._rowModels.groupedRowModel ? e.getPreGroupedRowModel() : e._rowModels.groupedRowModel();
}
function Er(e) {
	return e.getGroupedRowModel();
}
function Dr(e) {
	return e._rowModels.sortedRowModel || (e._rowModels.sortedRowModel = e.options.features.sortedRowModel?.(e)), e.options.manualSorting || !e._rowModels.sortedRowModel ? e.getPreSortedRowModel() : e._rowModels.sortedRowModel();
}
function Or(e) {
	return e.getSortedRowModel();
}
function kr(e) {
	return e._rowModels.expandedRowModel || (e._rowModels.expandedRowModel = e.options.features.expandedRowModel?.(e)), e.options.manualExpanding || !e._rowModels.expandedRowModel ? e.getPreExpandedRowModel() : e._rowModels.expandedRowModel();
}
function Ar(e) {
	return e.getExpandedRowModel();
}
function jr(e) {
	return e._rowModels.paginatedRowModel || (e._rowModels.paginatedRowModel = e.options.features.paginatedRowModel?.(e)), e.options.manualPagination || !e._rowModels.paginatedRowModel ? e.getPrePaginatedRowModel() : e._rowModels.paginatedRowModel();
}
function Mr(e) {
	return e.getPaginatedRowModel();
}
// ../../node_modules/@tanstack/table-core/dist/core/row-models/coreRowModelsFeature.js
var Nr = { constructTableAPIs: (e) => {
	G("coreRowModelsFeature", e, {
		table_getCoreRowModel: { fn: () => xr(e) },
		table_getPreFilteredRowModel: { fn: () => Sr(e) },
		table_getFilteredRowModel: { fn: () => Cr(e) },
		table_getPreGroupedRowModel: { fn: () => wr(e) },
		table_getGroupedRowModel: { fn: () => Tr(e) },
		table_getPreSortedRowModel: { fn: () => Er(e) },
		table_getSortedRowModel: { fn: () => Dr(e) },
		table_getPreExpandedRowModel: { fn: () => Or(e) },
		table_getExpandedRowModel: { fn: () => kr(e) },
		table_getPrePaginatedRowModel: { fn: () => Ar(e) },
		table_getPaginatedRowModel: { fn: () => jr(e) },
		table_getRowModel: { fn: () => Mr(e) }
	});
} };
// ../../node_modules/@tanstack/table-core/dist/core/cells/constructCell.js
function Pr(e) {
	if (!e._cellPrototype) {
		e._cellPrototype = { table: e };
		let t = Object.values(e._features);
		for (let n = 0; n < t.length; n++) t[n].assignCellPrototype?.(e._cellPrototype, e);
	}
	return e._cellPrototype;
}
function Fr(e, t, n) {
	let r = Pr(n), i = Object.create(r);
	i.column = e, i.id = `${t.id}_${e.id}`, i.row = t;
	let a = n._cellInstanceInitFns;
	for (let e = 0; e < a.length; e++) a[e](i);
	return i;
}
// ../../node_modules/@tanstack/table-core/dist/core/rows/coreRowsFeature.utils.js
function Ir(e) {
	let t = e.table.getRowsInDisplayOrder(), n = e._displayIndexCache;
	return t[n] === e ? n : -1;
}
function Lr(e) {
	let t = e.getPrePaginatedRowModel(), n = e.options.paginateExpandedRows === !1 ? Ln(e, t).rows : t.rows;
	for (let e = 0; e < n.length; e++) n[e]._displayIndexCache = e;
	return n;
}
function Rr(e, t) {
	if (fn(e._valuesCache, t)) return e._valuesCache[t];
	let n = e.table.getColumn(t);
	if (n?.accessorFn) return e._valuesCache[t] = n.accessorFn(e.original, e.index), e._valuesCache[t];
}
function zr(e, t) {
	if (fn(e._uniqueValuesCache, t)) return e._uniqueValuesCache[t];
	let n = e.table.getColumn(t);
	if (n?.accessorFn) return n.columnDef.getUniqueValues ? (e._uniqueValuesCache[t] = n.columnDef.getUniqueValues(e.original, e.index), e._uniqueValuesCache[t]) : (e._uniqueValuesCache[t] = [e.getValue(t)], e._uniqueValuesCache[t]);
}
function Br(e, t) {
	return e.getValue(t) ?? e.table.options.renderFallbackValue;
}
function Vr(e) {
	return xn(e.subRows, (e) => e.subRows);
}
function Hr(e) {
	let t = e.getCoreRowModel().flatRows, n = 0;
	for (let e = 0; e < t.length; e++) n = Math.max(n, t[e].depth);
	return n;
}
function Ur(e) {
	if (e.parentId) return e.table.getCoreRowModel().rowsById[e.parentId] ?? e.table.getRow(e.parentId, !0);
}
function Wr(e) {
	let t = [], n = e;
	for (;;) {
		let e = n.getParentRow();
		if (!e) break;
		t.push(e), n = e;
	}
	return t.reverse();
}
function Gr(e) {
	let t = e.table.getAllLeafColumns(), n = e._cellsCache;
	n ||= e._cellsCache = /* @__PURE__ */ new WeakMap();
	let r = Array(t.length);
	for (let i = 0; i < t.length; i++) {
		let a = t[i], o = n.get(a);
		o || (o = Fr(a, e, e.table), n.set(a, o)), r[i] = o;
	}
	return r;
}
function Kr(e) {
	let t = U(), n = e.getAllCells();
	for (let e = 0; e < n.length; e++) {
		let r = n[e];
		t[r.column.id] = r;
	}
	return t;
}
function qr(e, t, n, r) {
	return t.options.getRowId?.(e, n, r) ?? (r ? `${r.id}.${n}` : String(n));
}
function Jr(e, t, n) {
	let r = (n ? e.getPrePaginatedRowModel() : e.getRowModel()).rowsById[t];
	if (!r && (r = e.getCoreRowModel().rowsById[t], !r)) throw Error();
	return r;
}
// ../../node_modules/@tanstack/table-core/dist/core/rows/coreRowsFeature.js
var Yr = {
	assignRowPrototype: (e, t) => {
		K("coreRowsFeature", e, t, {
			row_getDisplayIndex: { fn: (e) => Ir(e) },
			row_getAllCellsByColumnId: {
				fn: (e) => Kr(e),
				memoDeps: (e) => [e.getAllCells()]
			},
			row_getAllCells: {
				fn: (e) => Gr(e),
				memoDeps: (e) => [e.table.getAllLeafColumns()]
			},
			row_getLeafRows: {
				fn: (e) => Vr(e),
				memoDeps: (e) => [e.subRows]
			},
			row_getParentRow: { fn: (e) => Ur(e) },
			row_getParentRows: { fn: (e) => Wr(e) },
			row_getUniqueValues: { fn: (e, t) => zr(e, t) },
			row_getValue: { fn: (e, t) => Rr(e, t) },
			row_renderValue: { fn: (e, t) => Br(e, t) }
		});
	},
	constructTableAPIs: (e) => {
		G("coreRowsFeature", e, {
			table_getRowsInDisplayOrder: {
				fn: () => Lr(e),
				memoDeps: () => [
					e.getPrePaginatedRowModel().rows,
					e.options.paginateExpandedRows,
					e.options.paginateExpandedRows === !1 ? e.atoms.expanded?.get() : void 0
				]
			},
			table_getRowId: { fn: (t, n, r) => qr(t, e, n, r) },
			table_getRow: { fn: (t, n) => Jr(e, t, n) },
			table_getMaxSubRowDepth: {
				fn: () => Hr(e),
				memoDeps: () => [e.getCoreRowModel()]
			}
		});
	}
};
// ../../node_modules/@tanstack/table-core/dist/core/table/coreTablesFeature.utils.js
function Xr(e, t, n = (e, t) => e === t) {
	let r = t === void 0 ? e.options.state : t;
	e._reactivity.batch(() => {
		if (r) for (let t in r) {
			let i = e.baseAtoms[t];
			if (!i) continue;
			let a = r[t], o = a === void 0 ? e.initialState[t] : a;
			n(e._reactivity.untrack(() => i.get()), o) || i.set(() => o);
		}
	});
}
function Zr(e, t, n = (e, t) => e === t) {
	e._reactivity.batch(() => {
		Xr(e, t, n), e._reactivity.commit?.();
	});
}
function Qr(e) {
	let t = H(e.initialState);
	e._reactivity.batch(() => {
		let n = Object.keys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r];
			e.baseAtoms[i].set(t[i]);
		}
	});
	let n = Object.values(e._features);
	for (let t = 0; t < n.length; t++) n[t].resetTableInstanceData?.(e);
}
function $r(e, t) {
	let { features: n, atoms: r, initialState: i } = e.options;
	if (!e.options.mergeOptions) return {
		...e.options,
		...t,
		features: n,
		atoms: r,
		initialState: i
	};
	let a = e.options.mergeOptions(e.options, t), o = { ...Object.getOwnPropertyDescriptors(a) };
	return Object.defineProperties(Object.create(Object.getPrototypeOf(a)), {
		...o,
		features: {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		},
		atoms: {
			value: r,
			enumerable: !0,
			configurable: !0,
			writable: !0
		},
		initialState: {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}
	});
}
function ei(e, t, n) {
	let r = $r(e, V(t, e.options));
	e.optionsStore ? e.optionsStore.set(() => r) : e.options = r, n?.syncExternalState !== !1 && Zr(e, r.state ?? null);
}
// ../../node_modules/@tanstack/table-core/dist/core/coreFeatures.js
var ti = {
	coreCellsFeature: On,
	coreColumnsFeature: Qn,
	coreHeadersFeature: hr,
	coreRowModelsFeature: Nr,
	coreRowsFeature: Yr,
	coreTablesFeature: { constructTableAPIs: (e) => {
		G("coreTablesFeature", e, {
			table_reset: { fn: () => Qr(e) },
			table_setOptions: { fn: (t) => ei(e, t) }
		});
	} }
};
// ../../node_modules/@tanstack/table-core/dist/helpers/tableFeatures.js
function ni(e) {
	return e;
}
// ../../node_modules/@tanstack/table-core/dist/core/reactivity/coreReactivityFeature.utils.js
function ri(e) {
	let t = e;
	return Object.defineProperty(e, "state", { get() {
		return e.get();
	} }), "set" in e && (t.setState = e.set.bind(e)), t;
}
// ../../node_modules/@tanstack/store/dist/alien.js
/* @__NO_SIDE_EFFECTS__ */
function ii({ update: e, notify: t, unwatched: n }) {
	return {
		link: r,
		unlink: i,
		propagate: a,
		checkDirty: o,
		shallowPropagate: s
	};
	function r(e, t, n) {
		let r = t.depsTail;
		if (r !== void 0 && r.dep === e) return;
		let i = r === void 0 ? t.deps : r.nextDep;
		if (i !== void 0 && i.dep === e) {
			i.version = n, t.depsTail = i;
			return;
		}
		let a = e.subsTail;
		if (a !== void 0 && a.version === n && a.sub === t) return;
		let o = t.depsTail = e.subsTail = {
			version: n,
			dep: e,
			sub: t,
			prevDep: r,
			nextDep: i,
			prevSub: a,
			nextSub: void 0
		};
		i !== void 0 && (i.prevDep = o), r === void 0 ? t.deps = o : r.nextDep = o, a === void 0 ? e.subs = o : a.nextSub = o;
	}
	function i(e, t = e.sub) {
		let r = e.dep, i = e.prevDep, a = e.nextDep, o = e.nextSub, s = e.prevSub;
		return a === void 0 ? t.depsTail = i : a.prevDep = i, i === void 0 ? t.deps = a : i.nextDep = a, o === void 0 ? r.subsTail = s : o.prevSub = s, s === void 0 ? (r.subs = o) === void 0 && n(r) : s.nextSub = o, a;
	}
	function a(e) {
		let n = e.nextSub, r;
		top: do {
			let i = e.sub, a = i.flags;
			if (a & 60 ? a & 12 ? a & 4 ? !(a & 48) && c(e, i) ? (i.flags = a | 40, a &= 1) : a = 0 : i.flags = a & -9 | 32 : a = 0 : i.flags = a | 32, a & 2 && t(i), a & 1) {
				let t = i.subs;
				if (t !== void 0) {
					let i = (e = t).nextSub;
					i !== void 0 && (r = {
						value: n,
						prev: r
					}, n = i);
					continue;
				}
			}
			if ((e = n) !== void 0) n = e.nextSub;
			else {
				for (; r !== void 0;) if (e = r.value, r = r.prev, e !== void 0) {
					n = e.nextSub;
					continue top;
				}
				break;
			}
		} while (1);
	}
	function o(t, n) {
		let r, i = 0, a = !1;
		top: do {
			let o = t.dep, c = o.flags;
			if (n.flags & 16) a = !0;
			else if ((c & 17) == 17) {
				if (e(o)) {
					let e = o.subs;
					e.nextSub !== void 0 && s(e), a = !0;
				}
			} else if ((c & 33) == 33) {
				(t.nextSub !== void 0 || t.prevSub !== void 0) && (r = {
					value: t,
					prev: r
				}), t = o.deps, n = o, ++i;
				continue;
			}
			if (!a) {
				let e = t.nextDep;
				if (e !== void 0) {
					t = e;
					continue;
				}
			}
			for (; i--;) {
				let i = n.subs, o = i.nextSub !== void 0;
				if (o ? (t = r.value, r = r.prev) : t = i, a) {
					if (e(n)) {
						o && s(i), n = t.sub;
						continue;
					}
					a = !1;
				} else n.flags &= -33;
				n = t.sub;
				let c = t.nextDep;
				if (c !== void 0) {
					t = c;
					continue top;
				}
			}
			return a;
		} while (1);
	}
	function s(e) {
		do {
			let n = e.sub, r = n.flags;
			(r & 48) == 32 && (n.flags = r | 16, (r & 6) == 2 && t(n));
		} while ((e = e.nextSub) !== void 0);
	}
	function c(e, t) {
		let n = t.depsTail;
		for (; n !== void 0;) {
			if (n === e) return !0;
			n = n.prevDep;
		}
		return !1;
	}
}
// ../../node_modules/@tanstack/store/dist/atom.js
function ai(e, t, n) {
	let r = typeof e == "object", i = r ? e : void 0;
	return {
		next: (r ? e.next : e)?.bind(i),
		error: (r ? e.error : t)?.bind(i),
		complete: (r ? e.complete : n)?.bind(i)
	};
}
var oi = [], si = 0, { link: ci, unlink: li, propagate: ui, checkDirty: di, shallowPropagate: fi } = /* @__PURE__ */ ii({
	update(e) {
		return e._update();
	},
	notify(e) {
		oi[mi++] = e, e.flags &= -3;
	},
	unwatched(e) {
		e.depsTail !== void 0 && (e.depsTail = void 0, e.flags = 17, _i(e));
	}
}), pi = 0, mi = 0, J, hi = 0;
function gi(e) {
	try {
		++hi, e();
	} finally {
		--hi || vi();
	}
}
function _i(e) {
	let t = e.depsTail, n = t === void 0 ? e.deps : t.nextDep;
	for (; n !== void 0;) n = li(n, e);
}
function vi() {
	if (!(hi > 0)) {
		for (; pi < mi;) {
			let e = oi[pi];
			oi[pi++] = void 0, e.notify();
		}
		pi = 0, mi = 0;
	}
}
function yi(e, t) {
	let n = typeof e == "function", r = e, i = {
		_snapshot: n ? void 0 : e,
		subs: void 0,
		subsTail: void 0,
		deps: void 0,
		depsTail: void 0,
		flags: +!n,
		get() {
			return J !== void 0 && ci(i, J, si), i._snapshot;
		},
		subscribe(e) {
			let t = ai(e), n = { current: !1 }, r = bi(() => {
				i.get(), n.current ? (J = void 0, t.next?.(i._snapshot)) : n.current = !0;
			});
			return { unsubscribe: () => {
				r.stop();
			} };
		},
		_update(e) {
			let a = J, o = t?.compare ?? Object.is;
			if (n) J = i, ++si, i.depsTail = void 0;
			else if (e === void 0) return !1;
			n && (i.flags = 5);
			try {
				let t = i._snapshot, a = typeof e == "function" ? e(t) : e === void 0 && n ? r(t) : e;
				return t === void 0 || !o(t, a) ? (i._snapshot = a, !0) : !1;
			} finally {
				J = a, n && (i.flags &= -5), _i(i);
			}
		}
	};
	return n ? (i.flags = 17, i.get = function() {
		let e = i.flags;
		if (e & 16 || e & 32 && di(i.deps, i)) {
			if (i._update()) {
				let e = i.subs;
				e !== void 0 && fi(e);
			}
		} else e & 32 && (i.flags = e & -33);
		return J !== void 0 && ci(i, J, si), i._snapshot;
	}) : i.set = function(e) {
		if (i._update(e)) {
			let e = i.subs;
			e !== void 0 && (ui(e), fi(e), vi());
		}
	}, i;
}
function bi(e) {
	let t = () => {
		let t = J;
		J = n, ++si, n.depsTail = void 0, n.flags = 6;
		try {
			return e();
		} finally {
			J = t, n.flags &= -5, _i(n);
		}
	}, n = {
		deps: void 0,
		depsTail: void 0,
		subs: void 0,
		subsTail: void 0,
		flags: 6,
		notify() {
			let e = this.flags;
			e & 16 || e & 32 && di(this.deps, this) ? t() : this.flags = 2;
		},
		stop() {
			this.flags = 0, this.depsTail = void 0, _i(this);
		}
	};
	return t(), n;
}
// ../../node_modules/@tanstack/store/dist/shallow.js
function xi(e, t) {
	if (Object.is(e, t)) return !0;
	if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
	if (e instanceof Map && t instanceof Map) {
		if (e.size !== t.size) return !1;
		for (let [n, r] of e) if (!t.has(n) || !Object.is(r, t.get(n))) return !1;
		return !0;
	}
	if (e instanceof Set && t instanceof Set) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
	if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
	let n = Si(e);
	if (n.length !== Si(t).length) return !1;
	for (let r = 0; r < n.length; r++) if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
	return !0;
}
function Si(e) {
	return Object.keys(e).concat(Object.getOwnPropertySymbols(e));
}
// ../../node_modules/@tanstack/table-core/dist/core/table/constructTable.js
function Ci(e, t = {}) {
	return Object.values(e).forEach((e) => {
		t = e.getInitialState?.(t) ?? t;
	}), H(t);
}
function wi(e) {
	let t = e.features.coreReactivityFeature, { aggregationFns: n, columnMeta: r, coreRowModel: i, expandedRowModel: a, facetedMinMaxValues: o, facetedRowModel: s, facetedUniqueValues: c, filterFns: l, filterMeta: u, filteredRowModel: d, groupedRowModel: f, paginatedRowModel: p, sortFns: m, sortedRowModel: ee, tableMeta: te, ...ne } = e.features, h = {
		_cellInstanceInitFns: [],
		_columnInstanceInitFns: [],
		_features: {
			...ti,
			...ne
		},
		_headerGroupInstanceInitFns: [],
		_headerInstanceInitFns: [],
		_reactivity: t,
		_rowInstanceInitFns: [],
		_rowModelFns: {
			aggregationFns: n,
			filterFns: l,
			sortFns: m
		},
		_rowModels: {},
		atoms: {},
		baseAtoms: {}
	}, g = Object.values(h._features), _ = {
		...g.reduce((e, t) => Object.assign(e, t.getDefaultTableOptions?.(h)), {}),
		...e
	};
	if (t.wrapExternalAtoms && _.atoms) for (let [e, n] of Object.entries(_.atoms)) {
		let r = n, i = t.createWritableAtom(r.get(), { debugName: `externalAtom/${e}` });
		_.atoms[e] = i;
		let a = !1, o = r.subscribe((e) => {
			a || i.set(e);
		}), s = i.subscribe((e) => {
			a = !0, r.set(e), a = !1;
		});
		t.addSubscription(o), t.addSubscription(s);
	}
	t.createOptionsStore ? (h.optionsStore = t.createWritableAtom(_, { debugName: "table/optionsStore" }), Object.defineProperty(h, "options", {
		configurable: !0,
		enumerable: !0,
		get() {
			return h.optionsStore.get();
		},
		set(e) {
			h.optionsStore.set(() => e);
		}
	})) : h.options = _, h.initialState = Ci(h._features, h.options.initialState);
	let v = Object.keys(h.initialState);
	for (let e = 0; e < v.length; e++) {
		let n = v[e];
		h.baseAtoms[n] = t.createWritableAtom(h.initialState[n], { debugName: `table/baseAtoms/${n}` }), h.atoms[n] = t.createReadonlyAtom(() => {
			let e = h.options, t = e.atoms?.[n], r = t ? t.get() : h.baseAtoms[n].get();
			if (t) return r;
			let i = e.state;
			if (i && fn(i, n)) {
				let e = i[n];
				return e === void 0 ? h.initialState[n] : e;
			}
			return r;
		}, { debugName: `table/atoms/${n}` });
	}
	Xr(h), h.store = ri(t.createReadonlyAtom(() => {
		let e = {};
		for (let t = 0; t < v.length; t++) {
			let n = v[t];
			e[n] = h.atoms[n].get();
		}
		return e;
	}, {
		compare: xi,
		debugName: "table/store"
	}));
	for (let e = 0; e < g.length; e++) {
		let t = g[e];
		t.initTableInstanceData?.(h), t.initCellInstanceData && h._cellInstanceInitFns.push(t.initCellInstanceData.bind(t)), t.initColumnInstanceData && h._columnInstanceInitFns.push(t.initColumnInstanceData.bind(t)), t.initHeaderGroupInstanceData && h._headerGroupInstanceInitFns.push(t.initHeaderGroupInstanceData.bind(t)), t.initHeaderInstanceData && h._headerInstanceInitFns.push(t.initHeaderInstanceData.bind(t)), t.initRowInstanceData && h._rowInstanceInitFns.push(t.initRowInstanceData.bind(t)), t.constructTableAPIs?.(h);
	}
	return h;
}
// ../../node_modules/@tanstack/table-core/dist/features/column-filtering/columnFilteringFeature.utils.js
function Ti() {
	return [];
}
function Ei(e) {
	let t = e.table._rowModelFns.filterFns, n = e.table.getCoreRowModel().flatRows, r;
	for (let t = 0; t < n.length; t++) {
		let i = n[t].getValue(e.id);
		if (i != null) {
			r = i;
			break;
		}
	}
	let i;
	return i = typeof r == "string" ? "includesString" : typeof r == "number" ? "inNumberRange" : typeof r == "boolean" ? "equals" : Array.isArray(r) ? "arrIncludes" : Object.prototype.toString.call(r) === "[object Date]" ? "inDateRange" : typeof r == "object" && r ? "equals" : "weakEquals", t?.[i];
}
function Di(e) {
	let t = null, n = e.table._rowModelFns.filterFns;
	return t = bn(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? Ei(e) : n?.[e.columnDef.filterFn], t ?? void 0;
}
function Oi(e) {
	return (e.columnDef.enableColumnFilter ?? !0) && (e.table.options.enableColumnFilters ?? !0) && (e.table.options.enableFilters ?? !0) && !!e.accessorFn;
}
function ki(e) {
	return ji(e) > -1;
}
function Ai(e) {
	return e.table.atoms.columnFilters?.get()?.find((t) => t.id === e.id)?.value;
}
function ji(e) {
	return e.table.atoms.columnFilters?.get()?.findIndex((t) => t.id === e.id) ?? -1;
}
function Mi(e, t) {
	Ni(e.table, (n) => {
		let r = Di(e), i = n.find((t) => t.id === e.id), a = V(t, i ? i.value : void 0);
		if (Fi(r, a, e)) return n.filter((t) => t.id !== e.id);
		let o = {
			id: e.id,
			value: a
		};
		return i ? n.map((t) => t.id === e.id ? o : t) : n.length ? [...n, o] : [o];
	});
}
function Ni(e, t) {
	let n = e.getAllLeafColumnsById();
	yn(e, "columnFilters", (e) => V(t, e).filter((e) => {
		let t = n[e.id];
		return !(t && Fi(Di(t), e.value, t));
	}));
}
function Pi(e, t) {
	Ni(e, t ? [] : H(e.initialState.columnFilters ?? []));
}
function Fi(e, t, n) {
	return t === void 0 ? !0 : e?.autoRemove ? !!e.autoRemove(t, n) : typeof t == "string" && !t;
}
// ../../node_modules/@tanstack/table-core/dist/features/column-filtering/columnFilteringFeature.js
var Ii = {
	getInitialState: (e) => ({
		columnFilters: Ti(),
		...e
	}),
	getDefaultColumnDef: () => ({ filterFn: "auto" }),
	getDefaultTableOptions: (e) => ({
		onColumnFiltersChange: pn("columnFilters", e),
		filterFromLeafRows: !1,
		maxLeafRowFilterDepth: 100
	}),
	assignColumnPrototype: (e, t) => {
		K("columnFilteringFeature", e, t, {
			column_getAutoFilterFn: { fn: (e) => Ei(e) },
			column_getFilterFn: { fn: (e) => Di(e) },
			column_getCanFilter: { fn: (e) => Oi(e) },
			column_getIsFiltered: { fn: (e) => ki(e) },
			column_getFilterValue: { fn: (e) => Ai(e) },
			column_getFilterIndex: { fn: (e) => ji(e) },
			column_setFilterValue: { fn: (e, t) => Mi(e, t) }
		});
	},
	initRowInstanceData: (e) => {
		e.columnFilters = U(), e.columnFiltersMeta = U();
	},
	constructTableAPIs: (e) => {
		G("columnFilteringFeature", e, {
			table_setColumnFilters: { fn: (t) => Ni(e, t) },
			table_resetColumnFilters: { fn: (t) => Pi(e, t) }
		});
	}
};
// ../../node_modules/@tanstack/table-core/dist/features/column-filtering/filterFns.js
/* @__NO_SIDE_EFFECTS__ */
function Li(e) {
	let t = Object.assign((e, n, r, i) => {
		let a = e.getValue(n), o = t.resolveDataValue ? t.resolveDataValue(a) : a;
		return t.filter(o, r, e, n, i);
	}, e);
	return t;
}
var Ri = /* @__PURE__ */ Li({
	filter: (e, t) => !!e?.includes(t),
	autoRemove: (e) => zi(e),
	resolveFilterValue: (e) => String(e).toLowerCase(),
	resolveDataValue: (e) => e == null ? void 0 : String(e).toLowerCase()
});
function zi(e) {
	return e == null || e === "";
}
// ../../node_modules/@tanstack/table-core/dist/features/global-filtering/globalFilteringFeature.utils.js
function Bi(e) {
	return (e.columnDef.enableGlobalFilter ?? !0) && (e.table.options.enableGlobalFilter ?? !0) && (e.table.options.enableFilters ?? !0) && (e.table.options.getColumnCanGlobalFilter?.(e) ?? !0) && !!e.accessorFn;
}
function Vi() {
	return Ri;
}
function Hi(e) {
	let { globalFilterFn: t } = e.options, n = e._rowModelFns.filterFns;
	return bn(t) ? t : t === "auto" ? Vi() : n?.[t];
}
function Ui(e, t) {
	e.options.onGlobalFilterChange?.(t);
}
function Wi(e, t) {
	Ui(e, t ? void 0 : H(e.initialState.globalFilter));
}
// ../../node_modules/@tanstack/table-core/dist/features/global-filtering/globalFilteringFeature.js
var Gi = {
	getInitialState: (e) => ({
		globalFilter: void 0,
		...e
	}),
	getDefaultTableOptions: (e) => ({
		onGlobalFilterChange: pn("globalFilter", e),
		globalFilterFn: "auto",
		getColumnCanGlobalFilter: (t) => {
			if ("enableGlobalFilter" in t.columnDef && t.columnDef.enableGlobalFilter === !0) return !0;
			let n = e.getCoreRowModel().flatRows.find((e) => e.getAllCellsByColumnId()[t.id]?.getValue() != null)?.getAllCellsByColumnId()[t.id]?.getValue();
			return typeof n == "string" || typeof n == "number";
		}
	}),
	assignColumnPrototype: (e, t) => {
		K("globalFilteringFeature", e, t, { column_getCanGlobalFilter: { fn: (e) => Bi(e) } });
	},
	constructTableAPIs: (e) => {
		G("globalFilteringFeature", e, {
			table_getGlobalAutoFilterFn: { fn: () => Vi() },
			table_getGlobalFilterFn: { fn: () => Hi(e) },
			table_setGlobalFilter: { fn: (t) => Ui(e, t) },
			table_resetGlobalFilter: { fn: (t) => Wi(e, t) }
		});
	}
}, Y = 0, Ki = 10;
function qi() {
	return {
		pageIndex: Y,
		pageSize: Ki
	};
}
function Ji(e) {
	if (e.options.autoResetAll ?? e.options.autoResetPageIndex ?? !e.options.manualPagination) {
		if ((e.atoms.pagination?.get()?.pageIndex ?? Y) === Y) return;
		Zi(e, !0);
	}
}
function Yi(e, t) {
	yn(e, "pagination", t);
}
function Xi(e, t) {
	Yi(e, t ? qi() : H(e.initialState.pagination ?? qi()));
}
function X(e, t) {
	Yi(e, (n) => {
		let r = V(t, n.pageIndex), i = e.options.pageCount === void 0 || e.options.pageCount === -1 ? 2 ** 53 - 1 : e.options.pageCount - 1;
		return r = Math.max(0, Math.min(r, i)), {
			...n,
			pageIndex: r
		};
	});
}
function Zi(e, t) {
	X(e, t ? Y : e.initialState.pagination?.pageIndex ?? Y);
}
function Qi(e, t) {
	$i(e, t ? Ki : e.initialState.pagination?.pageSize ?? Ki);
}
function $i(e, t) {
	Yi(e, (e) => {
		let n = Math.max(1, V(t, e.pageSize)), r = e.pageSize === Infinity ? 0 : e.pageSize * e.pageIndex, i = n === Infinity ? 0 : Math.floor(r / n);
		return {
			...e,
			pageIndex: i,
			pageSize: n
		};
	});
}
function ea(e) {
	let t = ca(e), n = [];
	return t && t > 0 && (n = [...Array(t)].fill(null).map((e, t) => t)), n;
}
function ta(e) {
	return (e.atoms.pagination?.get()?.pageIndex ?? 0) > 0;
}
function na(e) {
	let t = e.atoms.pagination?.get()?.pageIndex ?? Y, n = ca(e);
	return n === -1 || n !== 0 && t < n - 1;
}
function ra(e) {
	let t = e.atoms.pagination?.get()?.pageIndex ?? Y, n = ca(e);
	return Number.isFinite(n) && n > 0 && t < n - 1;
}
function ia(e) {
	return X(e, (e) => e - 1);
}
function aa(e) {
	return X(e, (e) => e + 1);
}
function oa(e) {
	return X(e, 0);
}
function sa(e) {
	let t = ca(e);
	if (!(!Number.isFinite(t) || t <= 0)) return X(e, t - 1);
}
function ca(e) {
	let t = e.options.pageCount;
	if (t != null) return t;
	let n = la(e), r = e.atoms.pagination?.get()?.pageSize ?? Ki;
	return r === Infinity && Number.isFinite(n) && n > 0 ? 1 : Math.ceil(n / r);
}
function la(e) {
	return e.options.rowCount ?? e.getPrePaginatedRowModel().rows.length;
}
// ../../node_modules/@tanstack/table-core/dist/features/row-pagination/rowPaginationFeature.js
var ua = {
	getInitialState: (e) => ({
		...e,
		pagination: {
			...qi(),
			...e.pagination
		}
	}),
	getDefaultTableOptions: (e) => ({ onPaginationChange: pn("pagination", e) }),
	constructTableAPIs: (e) => {
		G("rowPaginationFeature", e, {
			table_autoResetPageIndex: { fn: () => Ji(e) },
			table_setPagination: { fn: (t) => Yi(e, t) },
			table_resetPagination: { fn: (t) => Xi(e, t) },
			table_setPageIndex: { fn: (t) => X(e, t) },
			table_resetPageIndex: { fn: (t) => Zi(e, t) },
			table_setPageSize: { fn: (t) => $i(e, t) },
			table_getPageCount: { fn: () => ca(e) },
			table_resetPageSize: { fn: (t) => Qi(e, t) },
			table_getPageOptions: { fn: () => ea(e) },
			table_getCanPreviousPage: { fn: () => ta(e) },
			table_getCanNextPage: { fn: () => na(e) },
			table_getCanLastPage: { fn: () => ra(e) },
			table_previousPage: { fn: () => ia(e) },
			table_nextPage: { fn: () => aa(e) },
			table_firstPage: { fn: () => oa(e) },
			table_lastPage: { fn: () => sa(e) },
			table_getRowCount: { fn: () => la(e) }
		});
	}
};
// ../../node_modules/@tanstack/table-core/dist/features/row-selection/rowSelectionFeature.utils.js
function da() {
	return U();
}
function Z(e, t) {
	e.options.onRowSelectionChange?.(t);
}
function fa(e, t) {
	e._lastSelectedRowId = null, Z(e, t ? U() : Object.assign(U(), H(e.initialState.rowSelection ?? {})));
}
function pa(e, t, n) {
	e._lastSelectedRowId = null, Z(e, (r) => {
		if (t = t === void 0 ? !q(e, "getIsAllRowsSelected", ba) : t, n?.deselectAll && !t) return U();
		let i = Object.assign(U(), r), a = e.getPreGroupedRowModel().flatRows;
		if (t) {
			let e = /* @__PURE__ */ new Map();
			a.forEach((t) => {
				Pa(t, e) && (i[t.id] = !0);
			});
		} else a.forEach((e) => {
			Q(e) && delete i[e.id];
		});
		return i;
	});
}
function ma(e, t, n) {
	e._lastSelectedRowId = null, Z(e, (r) => {
		let i = t === void 0 ? !q(e, "getIsAllPageRowsSelected", xa) : t;
		if (n?.deselectAll && !i) return U();
		let a = Object.assign(U(), r);
		return e.getRowModel().rows.forEach((t) => {
			Na(a, t.id, i, !0, e, !0);
		}), a;
	});
}
function ha(e) {
	return e.getCoreRowModel();
}
function ga(e) {
	let t = e.getCoreRowModel();
	return q(e, "getIsSomeRowsSelected", Sa) ? La(t, e) : {
		rows: [],
		flatRows: [],
		rowsById: U()
	};
}
function _a(e) {
	let t = e.getFilteredRowModel();
	return q(e, "getIsSomeRowsSelected", Sa) ? La(t, e) : {
		rows: [],
		flatRows: [],
		rowsById: U()
	};
}
function va(e) {
	let t = e.getSortedRowModel();
	return q(e, "getIsSomeRowsSelected", Sa) ? La(t, e) : {
		rows: [],
		flatRows: [],
		rowsById: U()
	};
}
function ya(e) {
	return Object.keys(e.atoms.rowSelection?.get() ?? {});
}
function ba(e) {
	let t = e.getFilteredRowModel().flatRows, n = e.atoms.rowSelection?.get() ?? {}, r = !!(t.length && Object.keys(n).length);
	if (r) {
		let e = /* @__PURE__ */ new Map();
		t.some((t) => !Ra(t, n) && Pa(t, e)) && (r = !1);
	}
	return r;
}
function xa(e) {
	let t = e.getPaginatedRowModel().flatRows, n = e.atoms.rowSelection?.get() ?? {}, r = /* @__PURE__ */ new Map(), i = !1;
	for (let e = 0; e < t.length; e++) {
		let a = t[e];
		if (Ra(a, n)) !i && Pa(a, r) && (i = !0);
		else if (Pa(a, r)) return !1;
	}
	return i;
}
function Sa(e) {
	return q(e, "getSelectedRowIds", ya).length > 0;
}
function Ca(e) {
	return e.getPaginatedRowModel().flatRows.filter((e) => Q(e)).some((e) => Da(e) || q(e, "getIsSomeSelected", Oa));
}
function wa(e) {
	return (t) => {
		pa(e, t.target.checked);
	};
}
function Ta(e) {
	return (t) => {
		ma(e, t.target.checked);
	};
}
function Ea(e, t, n) {
	let r = Da(e);
	Z(e.table, (i) => {
		t = t === void 0 ? !r : t;
		let a = Object.assign(U(), i);
		return Na(a, e.id, t, (n?.selectChildren ?? !0) && $(e), e.table), !t && n?.deselectParents && Fa(a, e), a;
	});
}
function Da(e) {
	return Ra(e, e.table.atoms.rowSelection?.get() ?? {});
}
function Oa(e) {
	return za(e) === "some";
}
function ka(e) {
	return za(e) === "all";
}
function Q(e) {
	let t = e.table.options;
	return typeof t.enableRowSelection == "function" ? t.enableRowSelection(e) : t.enableRowSelection ?? !0;
}
function Aa(e) {
	let t = e.table.options;
	return typeof t.enableSubRowSelection == "function" ? t.enableSubRowSelection(e) : t.enableSubRowSelection ?? !0;
}
function $(e) {
	let t = e.table.options;
	return typeof t.enableMultiRowSelection == "function" ? t.enableMultiRowSelection(e) : t.enableMultiRowSelection ?? !0;
}
function ja(e, t) {
	let n = Q(e);
	return (r) => {
		if (!n) return;
		let i = r, a = e.table, o = i.target.checked, s = a._lastSelectedRowId;
		a.options.enableRowRangeSelection !== !1 && s !== null && $(e) && (a.options.isRowRangeSelectionEvent?.(r) ?? !1) && Ma(e, s, o, t) || Ea(e, o, t), a._lastSelectedRowId = e.id;
	};
}
function Ma(e, t, n, r) {
	let i = r?.selectChildren ?? !0, a = e.table, o = a.getRowsInDisplayOrder(), s = a.getPrePaginatedRowModel().rowsById[t] ?? a.getCoreRowModel().rowsById[t];
	if (!s) return !1;
	let c = s.getDisplayIndex(), l = e.getDisplayIndex(), u = o[c], d = o[l];
	if (c < 0 || l < 0 || c >= o.length || l >= o.length || u?.id !== s.id || d?.id !== e.id || !$(s) || !$(e)) return !1;
	let f = Math.min(c, l), p = Math.max(c, l);
	return Z(a, (e) => {
		let t = Object.assign(U(), e);
		for (let e = f; e <= p; e++) {
			let s = o[e];
			Q(s) && $(s) && (Na(t, s.id, n, i, a), !n && r?.deselectParents && Fa(t, s));
		}
		return t;
	}), !0;
}
function Na(e, t, n, r, i, a) {
	let o = i.getRow(t, !0);
	n ? ($(o) || Object.keys(e).forEach((t) => delete e[t]), Q(o) && (e[t] = !0)) : (!a || Q(o)) && delete e[t], r && o.subRows.length && Aa(o) && o.subRows.forEach((t) => Na(e, t.id, n, r, i, a));
}
function Pa(e, t) {
	if (!Q(e)) return !1;
	let n = e.table;
	if (n.options.enableSubRowSelection === !0) return !0;
	let r = e.parentId;
	if (r === void 0) return !0;
	let i = t.get(r);
	if (i !== void 0) return i;
	let a = n.getCoreRowModel().rowsById, o = [], s = !0, c = r;
	for (; c !== void 0;) {
		let e = t.get(c);
		if (e !== void 0) {
			s = e;
			break;
		}
		o.push(c);
		let r = a[c] ?? n.getRow(c, !0);
		if (!Aa(r)) {
			s = !1;
			break;
		}
		c = r.parentId;
	}
	return o.forEach((e) => t.set(e, s)), s;
}
function Fa(e, t) {
	let n = t.table.getCoreRowModel().rowsById, r = t.parentId;
	for (; r !== void 0;) delete e[r], r = (n[r] ?? t.table.getRow(r, !0)).parentId;
}
function Ia(e, t, n, r) {
	let i = [];
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = Ra(o, t);
		if (s && (n.push(o), r[o.id] = o), o.subRows.length) {
			let e = Ia(o.subRows, t, n, r);
			if (s) {
				let t = Object.create(Object.getPrototypeOf(o));
				dn(t, o), t.subRows = e, i.push(t);
			}
		} else s && i.push(o);
	}
	return i;
}
function La(e, t) {
	let n = [], r = U(), i = t.atoms.rowSelection?.get() ?? {};
	return {
		rows: Ia(e.rows, i, n, r),
		flatRows: n,
		rowsById: r
	};
}
function Ra(e, t) {
	return !!(fn(t, e.id) && t[e.id]);
}
function za(e) {
	if (!e.subRows.length) return !1;
	let t = e.table.atoms.rowSelection?.get() ?? {}, n = !1, r = !0, i = !1;
	for (let a = 0; a < e.subRows.length; a++) {
		let o = e.subRows[a];
		if (n && !r) break;
		if (Q(o) && (i = !0, Ra(o, t) ? n = !0 : r = !1), o.subRows.length) {
			let e = za(o);
			e === "all" ? (n = !0, i = !0) : e === "some" ? (n = !0, r = !1, i = !0) : r = !1;
		}
	}
	return i ? r ? "all" : n ? "some" : !1 : !1;
}
// ../../node_modules/@tanstack/table-core/dist/features/row-selection/rowSelectionFeature.js
var Ba = {
	initTableInstanceData: (e) => {
		e._lastSelectedRowId = null;
	},
	resetTableInstanceData: (e) => {
		e._lastSelectedRowId = null;
	},
	getInitialState: (e) => ({
		rowSelection: da(),
		...e
	}),
	getDefaultTableOptions: (e) => ({
		onRowSelectionChange: pn("rowSelection", e),
		enableRowSelection: !0,
		enableMultiRowSelection: !0,
		enableRowRangeSelection: !0,
		enableSubRowSelection: !0,
		isRowRangeSelectionEvent: (e) => {
			let t = e;
			return !!(t.shiftKey || t.nativeEvent?.shiftKey);
		}
	}),
	assignRowPrototype: (e, t) => {
		K("rowSelectionFeature", e, t, {
			row_toggleSelected: { fn: (e, t, n) => Ea(e, t, n) },
			row_getIsSelected: { fn: (e) => Da(e) },
			row_getIsSomeSelected: {
				fn: (e) => Oa(e),
				memoDeps: (e) => [
					e.subRows,
					e.table.atoms.rowSelection?.get(),
					e.table.options.enableRowSelection
				]
			},
			row_getIsAllSubRowsSelected: {
				fn: (e) => ka(e),
				memoDeps: (e) => [
					e.subRows,
					e.table.atoms.rowSelection?.get(),
					e.table.options.enableRowSelection
				]
			},
			row_getCanSelect: { fn: (e) => Q(e) },
			row_getCanSelectSubRows: { fn: (e) => Aa(e) },
			row_getCanMultiSelect: { fn: (e) => $(e) },
			row_getToggleSelectedHandler: { fn: (e, t) => ja(e, t) }
		});
	},
	constructTableAPIs: (e) => {
		G("rowSelectionFeature", e, {
			table_setRowSelection: { fn: (t) => Z(e, t) },
			table_resetRowSelection: { fn: (t) => fa(e, t) },
			table_toggleAllRowsSelected: { fn: (t, n) => pa(e, t, n) },
			table_toggleAllPageRowsSelected: { fn: (t, n) => ma(e, t, n) },
			table_getPreSelectedRowModel: { fn: () => ha(e) },
			table_getSelectedRowModel: {
				fn: () => ga(e),
				memoDeps: () => [e.atoms.rowSelection?.get(), e.getCoreRowModel()]
			},
			table_getFilteredSelectedRowModel: {
				fn: () => _a(e),
				memoDeps: () => [e.atoms.rowSelection?.get(), e.getFilteredRowModel()]
			},
			table_getGroupedSelectedRowModel: {
				fn: () => va(e),
				memoDeps: () => [e.atoms.rowSelection?.get(), e.getSortedRowModel()]
			},
			table_getSelectedRowIds: {
				fn: () => ya(e),
				memoDeps: () => [e.atoms.rowSelection?.get()]
			},
			table_getIsAllRowsSelected: {
				fn: () => ba(e),
				memoDeps: () => [
					e.atoms.rowSelection?.get(),
					e.getFilteredRowModel(),
					e.options.enableRowSelection,
					e.options.enableSubRowSelection
				]
			},
			table_getIsAllPageRowsSelected: {
				fn: () => xa(e),
				memoDeps: () => [
					e.atoms.rowSelection?.get(),
					e.getPaginatedRowModel(),
					e.options.enableRowSelection,
					e.options.enableSubRowSelection
				]
			},
			table_getIsSomeRowsSelected: {
				fn: () => Sa(e),
				memoDeps: () => [e.atoms.rowSelection?.get()]
			},
			table_getIsSomePageRowsSelected: {
				fn: () => Ca(e),
				memoDeps: () => [
					e.atoms.rowSelection?.get(),
					e.getPaginatedRowModel(),
					e.options.enableRowSelection
				]
			},
			table_getToggleAllRowsSelectedHandler: { fn: () => wa(e) },
			table_getToggleAllPageRowsSelectedHandler: { fn: () => Ta(e) }
		});
	}
}, Va = /([0-9]+)/gm;
/* @__NO_SIDE_EFFECTS__ */
function Ha(e) {
	let t = Object.assign((e, n, r) => {
		let i = e.getValue(r), a = n.getValue(r), o = t.resolveDataValue;
		return o && (i = o(i), a = o(a)), t.sort(i, a, e, n, r);
	}, e);
	return t;
}
var Ua = /* @__PURE__ */ Ha({ sort: (e, t) => Wa(e, t) });
function Wa(e, t) {
	return e === t ? 0 : e > t ? 1 : -1;
}
// ../../node_modules/@tanstack/table-core/dist/features/row-sorting/rowSortingFeature.utils.js
function Ga() {
	return [];
}
function Ka(e, t) {
	yn(e, "sorting", t);
}
function qa(e, t) {
	Ka(e, t ? [] : H(e.initialState.sorting ?? []));
}
function Ja(e) {
	e.atoms.sorting && (e.options.autoResetAll ?? e.options.autoResetSorting ?? !1) && qa(e);
}
function Ya(e) {
	let t = e.table._rowModelFns.sortFns, n = e.table.getFilteredRowModel().flatRows.slice(0, 10), r, i = !1;
	for (let t = 0; t < n.length; t++) {
		let a = n[t].getValue(e.id);
		if (Object.prototype.toString.call(a) === "[object Date]") {
			r = "datetime";
			break;
		}
		if (typeof a == "string" && (i = !0, a.split(Va).length > 1)) {
			r = "alphanumeric";
			break;
		}
	}
	if (!r && i && (r = "text"), r) {
		let e = t?.[r];
		if (e || r === "alphanumeric" && (e = t?.text), e) return e;
	}
	return Ua;
}
function Xa(e) {
	let t = e.table.getFilteredRowModel().flatRows.slice(0, 10);
	for (let n = 0; n < t.length; n++) {
		let r = t[n].getValue(e.id);
		if (r != null) return typeof r == "string" ? "asc" : "desc";
	}
	return "desc";
}
function Za(e) {
	let t = e.table._rowModelFns.sortFns;
	return bn(e.columnDef.sortFn) ? e.columnDef.sortFn : e.columnDef.sortFn === "auto" ? Ya(e) : t?.[e.columnDef.sortFn] ?? Ua;
}
function Qa(e, t, n) {
	let r = eo(e, n && no(e)), i = t !== void 0;
	Ka(e.table, (a) => {
		let o = a.findIndex((t) => t.id === e.id), s = o === -1 ? void 0 : a[o], c = [], l, u = i ? t : r === "desc", d = !!(a.length && no(e) && n);
		return l = d ? s ? "toggle" : "add" : s ? "toggle" : "replace", l === "toggle" && (i || r || (l = "remove")), l === "add" ? (c = [...a, {
			id: e.id,
			desc: u
		}], c.splice(0, c.length - (e.table.options.maxMultiSortColCount ?? 2 ** 53 - 1))) : c = l === "toggle" ? d ? a.map((t) => t.id === e.id ? {
			...t,
			desc: u
		} : t) : [{
			id: e.id,
			desc: u
		}] : l === "remove" ? d ? a.filter((t) => t.id !== e.id) : [] : [{
			id: e.id,
			desc: u
		}], c;
	});
}
function $a(e) {
	return e.columnDef.sortDescFirst ?? e.table.options.sortDescFirst ?? Xa(e) === "desc" ? "desc" : "asc";
}
function eo(e, t) {
	let n = $a(e), r = ro(e);
	return r ? r !== n && (e.table.options.enableSortingRemoval ?? !0) && (!t || (e.table.options.enableMultiRemove ?? !0)) ? !1 : r === "desc" ? "asc" : "desc" : n;
}
function to(e) {
	return (e.columnDef.enableSorting ?? !0) && (e.table.options.enableSorting ?? !0) && !!e.accessorFn;
}
function no(e) {
	return e.columnDef.enableMultiSort ?? e.table.options.enableMultiSort ?? !!e.accessorFn;
}
function ro(e) {
	let t = e.table.atoms.sorting?.get()?.find((t) => t.id === e.id);
	return t ? t.desc ? "desc" : "asc" : !1;
}
function io(e) {
	return e.table.atoms.sorting?.get()?.findIndex((t) => t.id === e.id) ?? -1;
}
function ao(e) {
	Ka(e.table, (t) => t.length ? t.filter((t) => t.id !== e.id) : []);
}
function oo(e) {
	let t = to(e);
	return (n) => {
		t && Qa(e, void 0, no(e) ? e.table.options.isMultiSortEvent?.(n) : !1);
	};
}
// ../../node_modules/@tanstack/table-core/dist/features/row-sorting/rowSortingFeature.js
var so = {
	getInitialState(e) {
		return {
			sorting: Ga(),
			...e
		};
	},
	getDefaultColumnDef() {
		return {
			sortFn: "auto",
			sortUndefined: 1
		};
	},
	getDefaultTableOptions(e) {
		return {
			autoResetSorting: !1,
			onSortingChange: pn("sorting", e),
			isMultiSortEvent: (e) => e.shiftKey
		};
	},
	assignColumnPrototype(e, t) {
		K("rowSortingFeature", e, t, {
			column_getAutoSortFn: { fn: (e) => Ya(e) },
			column_getAutoSortDir: { fn: (e) => Xa(e) },
			column_getSortFn: { fn: (e) => Za(e) },
			column_toggleSorting: { fn: (e, t, n) => Qa(e, t, n) },
			column_getFirstSortDir: { fn: (e) => $a(e) },
			column_getNextSortingOrder: { fn: (e, t) => eo(e, t) },
			column_getCanSort: { fn: (e) => to(e) },
			column_getCanMultiSort: { fn: (e) => no(e) },
			column_getIsSorted: { fn: (e) => ro(e) },
			column_getSortIndex: { fn: (e) => io(e) },
			column_clearSorting: { fn: (e) => ao(e) },
			column_getToggleSortingHandler: { fn: (e) => oo(e) }
		});
	},
	constructTableAPIs(e) {
		G("rowSortingFeature", e, {
			table_autoResetSorting: { fn: () => Ja(e) },
			table_setSorting: { fn: (t) => Ka(e, t) },
			table_resetSorting: { fn: (t) => qa(e, t) }
		});
	}
};
// ../../node_modules/@tanstack/table-core/dist/features/column-filtering/filterRowsUtils.js
function co(e, t, n) {
	return n.options.filterFromLeafRows ? lo(e, t, n) : uo(e, t, n);
}
function lo(e, t, n) {
	let r = [], i = U(), a = n.options.maxLeafRowFilterDepth ?? 100, o = (e, r = 0) => {
		let i = [];
		for (let s of e) {
			let e = _r(n, s.id, s.original, s.index, s.depth, void 0, s.parentId);
			e.columnFilters = s.columnFilters, e.columnFiltersMeta = s.columnFiltersMeta, s.subRows.length && r < a ? (e.subRows = o(s.subRows, r + 1), (e.subRows.length || t(e)) && i.push(e)) : t(e) && (e.subRows = s.subRows, i.push(e));
		}
		return i;
	}, s = o(e);
	return fo(s, r, i), {
		rows: s,
		flatRows: r,
		rowsById: i
	};
}
function uo(e, t, n) {
	let r = [], i = U(), a = n.options.maxLeafRowFilterDepth ?? 100, o = (e, s = 0) => {
		let c = [];
		for (let l of e) if (t(l)) {
			if (l.subRows.length && s < a) {
				let e = _r(n, l.id, l.original, l.index, l.depth, void 0, l.parentId), t = l;
				e.columnFilters = t.columnFilters, e.columnFiltersMeta = t.columnFiltersMeta, c.push(e), r.push(e), i[e.id] = e, e.subRows = o(l.subRows, s + 1);
			} else c.push(l), r.push(l), i[l.id] = l, l.subRows.length && s >= a && fo(l.subRows, r, i);
		}
		return c;
	};
	return {
		rows: o(e),
		flatRows: r,
		rowsById: i
	};
}
function fo(e, t, n) {
	for (let r of e) t.push(r), n[r.id] = r, r.subRows.length && fo(r.subRows, t, n);
}
// ../../node_modules/@tanstack/table-core/dist/features/column-filtering/createFilteredRowModel.js
function po() {
	return (e) => {
		let t = e;
		return W({
			feature: "columnFilteringFeature",
			table: t,
			fnName: "table.getFilteredRowModel",
			memoDeps: () => [
				t.getPreFilteredRowModel(),
				t.atoms.columnFilters?.get(),
				t.atoms.globalFilter?.get()
			],
			fn: () => mo(t),
			onAfterUpdate: Cn(() => zn(t))
		});
	};
}
function mo(e) {
	let t = e.getPreFilteredRowModel(), n = e.atoms.columnFilters?.get(), r = e.atoms.globalFilter?.get(), i = r != null && r !== "";
	if (!t.rows.length || !n?.length && !i) {
		let e = t.flatRows;
		for (let t = 0; t < e.length; t++) {
			let n = e[t];
			n.columnFilters = U(), n.columnFiltersMeta = U();
		}
		return t;
	}
	let a = [], o = [];
	n?.forEach((t) => {
		let n = Zn(e, t.id);
		if (!n) return;
		let r = Di(n);
		r && a.push({
			id: t.id,
			filterFn: r,
			resolvedValue: r.resolveFilterValue?.(t.value) ?? t.value
		});
	});
	let s = n?.map((e) => e.id) ?? [];
	if (i) {
		let t = Fn(e), n = t ? e.getAllLeafColumns().filter(In) : [];
		t && n.length && (s.push("__global__"), n.forEach((e) => {
			o.push({
				id: e.id,
				filterFn: t,
				resolvedValue: t.resolveFilterValue?.(r) ?? r
			});
		}));
	}
	let c = t.flatRows;
	for (let e = 0; e < c.length; e++) {
		let t = c[e];
		if (t.columnFilters = U(), t.columnFiltersMeta = U(), a.length) for (let e = 0; e < a.length; e++) {
			let n = a[e], r = n.id;
			t.columnFilters[r] = n.filterFn(t, r, n.resolvedValue, (e) => {
				t.columnFiltersMeta ||= U(), t.columnFiltersMeta[r] = e;
			});
		}
		if (o.length) {
			for (let e = 0; e < o.length; e++) {
				let n = o[e], r = n.id;
				if (n.filterFn(t, r, n.resolvedValue, (e) => {
					t.columnFiltersMeta ||= U(), t.columnFiltersMeta[r] = e;
				})) {
					t.columnFilters.__global__ = !0;
					break;
				}
			}
			t.columnFilters.__global__ !== !0 && (t.columnFilters.__global__ = !1);
		}
	}
	return co(t.rows, (e) => {
		for (let t = 0; t < s.length; t++) if (e.columnFilters[s[t]] === !1) return !1;
		return !0;
	}, e);
}
// ../../node_modules/@tanstack/table-core/dist/features/row-pagination/createPaginatedRowModel.js
function ho() {
	return (e) => {
		let t = e;
		return W({
			feature: "rowPaginationFeature",
			table: t,
			fnName: "table.getPaginatedRowModel",
			memoDeps: () => [
				t.getPrePaginatedRowModel(),
				t.atoms.pagination?.get(),
				t.options.paginateExpandedRows ? void 0 : t.atoms.expanded?.get()
			],
			fn: () => go(t)
		});
	};
}
function go(e) {
	let t = e.getPrePaginatedRowModel(), n = e.atoms.pagination?.get();
	if (!t.rows.length) return t;
	let { pageSize: r, pageIndex: i } = n ?? qi(), { rows: a, flatRows: o, rowsById: s } = t, c = a;
	if (r !== Infinity || i !== 0) {
		let e = r * i, t = e + r;
		c = a.slice(e, t);
	}
	let l;
	l = e.options.paginateExpandedRows ? {
		rows: c,
		flatRows: o,
		rowsById: s
	} : Ln(e, {
		rows: c,
		flatRows: o,
		rowsById: s
	}), l.flatRows = [];
	let u = /* @__PURE__ */ new Set(), d = (e) => {
		u.has(e.id) || (u.add(e.id), l.flatRows.push(e), e.subRows.length && e.subRows.forEach(d));
	};
	return l.rows.forEach(d), l;
}
// ../../node_modules/@tanstack/table-core/dist/features/row-sorting/createSortedRowModel.js
function _o() {
	return (e) => {
		let t = e;
		return W({
			feature: "rowSortingFeature",
			table: t,
			fnName: "table.getSortedRowModel",
			memoDeps: () => [t.atoms.sorting?.get(), t.getPreSortedRowModel()],
			fn: () => vo(t),
			onAfterUpdate: Cn(() => zn(t))
		});
	};
}
function vo(e) {
	let t = e.getPreSortedRowModel(), n = e.atoms.sorting?.get();
	if (!t.rows.length || !n?.length) return t;
	let r = [], i = n.filter((t) => {
		let n = e.getColumn(t.id);
		return n ? to(n) : !1;
	});
	if (!i.length) return t;
	let a = [];
	for (let t = 0; t < i.length; t++) {
		let n = i[t], r = e.getColumn(n.id);
		r && a.push({
			id: n.id,
			desc: n.desc,
			sortUndefined: r.columnDef.sortUndefined,
			invertSorting: r.columnDef.invertSorting,
			sortFn: Za(r)
		});
	}
	let o = (e, t) => {
		for (let n = 0; n < a.length; n++) {
			let r = a[n], i = r.sortUndefined, o = r.desc, s = 0;
			if (i) {
				let n = e.getValue(r.id), a = t.getValue(r.id), o = n === void 0, c = a === void 0;
				if (o && c) continue;
				if (o || c) {
					if (i === "first") return o ? -1 : 1;
					if (i === "last") return o ? 1 : -1;
					s = o ? i : -i;
				}
			}
			if (s === 0 && (s = r.sortFn(e, t, r.id)), s !== 0) return o && (s *= -1), r.invertSorting && (s *= -1), s;
		}
		return e.index - t.index;
	}, s = (e) => {
		let t = e.slice();
		t.sort(o);
		let n = !1;
		for (let i = 0; i < t.length; i++) {
			let a = t[i];
			a !== e[i] && (n = !0);
			let o = r.length;
			if (r.push(a), a.subRows.length) {
				let e = s(a.subRows);
				if (e.changed) {
					let s = Object.create(Object.getPrototypeOf(a));
					dn(s, a), s.subRows = e.rows, t[i] = s, r[o] = s, n = !0;
				}
			}
		}
		return {
			rows: t,
			changed: n
		};
	};
	return {
		rows: s(t.rows).rows,
		flatRows: r,
		rowsById: t.rowsById
	};
}
// ../../node_modules/@tanstack/table-core/dist/store-reactivity-bindings.js
function yo() {
	return {
		createOptionsStore: !0,
		wrapExternalAtoms: !1,
		addSubscription: () => {
			throw Error("Feature not supported in current reactivity implementation");
		},
		unmount: () => {
			throw Error("Feature not supported in current reactivity implementation");
		},
		batch: gi,
		schedule: (e) => queueMicrotask(e),
		untrack: (e) => e(),
		createReadonlyAtom: (e, t) => yi(() => e(), { compare: t?.compare }),
		createWritableAtom: (e, t) => yi(e, { compare: t?.compare })
	};
}
// ui/components/table.js
var bo = (e, t) => e === t ? 0 : e == null ? 1 : t == null ? -1 : typeof e == "number" && typeof t == "number" ? e - t : P(e).localeCompare(P(t), void 0, { numeric: !0 }), xo = ni({
	coreReactivityFeature: yo(),
	rowSortingFeature: so,
	sortedRowModel: _o(),
	columnFilteringFeature: Ii,
	globalFilteringFeature: Gi,
	filteredRowModel: po(),
	rowPaginationFeature: ua,
	paginatedRowModel: ho(),
	rowSelectionFeature: Ba
}), So = (e) => e.map((e) => ({
	id: e.id,
	accessorFn: (t) => t[e.id],
	meta: e,
	sortFn: (e, t, n) => bo(e.getValue(n), t.getValue(n)),
	sortDescFirst: !1
})), Co = class extends L {
	static properties = {
		rows: { attribute: !1 },
		columns: { attribute: !1 },
		noun: { type: String },
		pageSize: {
			type: Number,
			attribute: "page-size"
		},
		detail: { attribute: !1 },
		lead: { attribute: !1 }
	};
	constructor() {
		super(), this.rows = [], this.columns = [], this.noun = "records", this.pageSize = 25, this.detail = null, this.lead = T;
	}
	updated() {
		let e = this.querySelector(".scroll.records");
		e && this.markEdges(e);
		let t = this.table?.getSelectedRowModel().rows[0]?.id;
		t !== void 0 && t !== this.shownRow && this.querySelector(".records-body > .drawer")?.scrollIntoView({ block: "nearest" }), this.shownRow = t;
	}
	markEdges(e) {
		let t = e.parentElement, n = e.querySelector("thead th.key");
		t.style.setProperty("--key-width", `${n ? n.offsetWidth : 0}px`), t.classList.toggle("scrolled-x", !!n && e.scrollLeft > 0), t.classList.toggle("more-x", e.scrollLeft + e.clientWidth < e.scrollWidth - 1);
	}
	onScroll(e) {
		this.markEdges(e.currentTarget);
	}
	connectedCallback() {
		super.connectedCallback(), this.onResize ??= () => {
			let e = this.querySelector(".scroll.records");
			e && this.markEdges(e);
		}, window.addEventListener("resize", this.onResize);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), window.removeEventListener("resize", this.onResize), this.subscription?.unsubscribe(), this.subscription = null;
	}
	willUpdate(e) {
		this.table ? (e.has("rows") || e.has("columns")) && (this.table.setOptions((t) => ({
			...t,
			data: this.rows,
			columns: e.has("columns") ? So(this.columns) : t.columns
		})), this.table.resetRowSelection(!0)) : this.table = wi({
			features: xo,
			data: this.rows,
			columns: So(this.columns),
			getRowId: (e, t) => String(t),
			enableMultiRowSelection: !1,
			getColumnCanGlobalFilter: () => !0,
			globalFilterFn: (e, t, n) => {
				let r = String(n).trim().toLowerCase();
				return !r || P(e.getValue(t)).toLowerCase().includes(r);
			},
			initialState: { pagination: {
				pageIndex: 0,
				pageSize: this.pageSize
			} }
		}), this.subscription ??= this.table.store.subscribe(() => this.requestUpdate());
	}
	render() {
		let e = this.table, t = e.getPrePaginatedRowModel().rows.length, n = Math.max(1, e.getPageCount()), r = Math.min(e.store.state.pagination.pageIndex, n - 1), i = e.getHeaderGroups()[0]?.headers || [], a = e.getSelectedRowModel().rows[0], o = (e) => e.toggleSelected(!0);
		return C`
      <div class="row toolbar">
        ${this.lead}
        <span class="grow"></span>
        <input
          type="search"
          placeholder="Filter ${this.noun}"
          aria-label="Filter ${this.noun}"
          .value=${e.store.state.globalFilter || ""}
          @input=${(t) => e.setGlobalFilter(t.target.value)}
        />
        <span class="hint">${t} of ${this.rows.length} ${this.noun}</span>
      </div>
      ${t ? C`
            <div
              class="records-body"
              @keydown=${(t) => t.key === "Escape" && a && e.resetRowSelection(!0)}
            >
            <div class="scroll-frame">
            <div class="scroll records" @scroll=${this.onScroll}>
              <table>
                <thead>
                  <tr>
                    ${i.map(({ column: e }) => {
			let t = e.getIsSorted(), { header: n, key: r } = e.columnDef.meta;
			return C`
                        <th
                          class=${r ? "key" : ""}
                          aria-sort=${t ? `${t}ending` : "none"}
                        >
                          <button @click=${() => e.toggleSorting()}>
                            ${n ?? e.id}${r ? C` <span class="tag" title="The key: a record is found by it">key</span>` : T}
                            ${t ? A(t === "desc" ? "descending" : "ascending", 12) : T}
                          </button>
                        </th>
                      `;
		})}
                  </tr>
                </thead>
                <tbody>
                  ${e.getRowModel().rows.map((e) => C`
                      <tr
                        tabindex="0"
                        class=${e.getIsSelected() ? "current" : ""}
                        @click=${() => o(e)}
                        @keydown=${(t) => {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), o(e));
		}}
                      >
                        ${e.getAllCells().map((e) => {
			let t = e.getValue();
			return C`<td class=${(t == null ? "none" : typeof t == "object" ? "json" : typeof t) + (e.column.columnDef.meta.key ? " key" : "")}>${P(t)}</td>`;
		})}
                      </tr>
                    `)}
                </tbody>
              </table>
            </div>
            </div>
            ${a && this.detail ? this.detail(a.original, () => e.resetRowSelection(!0)) : T}
            </div>
            ${n > 1 ? C`
                  <div class="row pager">
                    <button
                      ?disabled=${!e.getCanPreviousPage()}
                      @click=${() => e.previousPage()}
                    >
                      Previous
                    </button>
                    <span>Page ${r + 1} of ${n}</span>
                    <button ?disabled=${!e.getCanNextPage()} @click=${() => e.nextPage()}>
                      Next
                    </button>
                  </div>
                ` : T}
          ` : C`<p class="empty">
            ${this.rows.length ? `No ${this.noun} match the filter.` : `No ${this.noun}.`}
          </p>`}
    `;
	}
};
customElements.define("rapidoc-mock-table", Co);
// ui/views/resource-schema.js
var wo = (e) => {
	let t = e.shape;
	return C`<code>${e.schema}</code> is ${t.kind === "oneOf" ? "a" : "an"}
    <code>${t.kind}</code>: a record has one of ${t.options.length}
    shapes${t.by ? C`, chosen by its <code>${t.by}</code> field` : ""}:
    ${t.options.map((e, t) => C`${t ? ", " : ""}<code>${e}</code>`)}.`;
}, To = (e) => e.shape?.options ? C`${wo(e)} None of them describes fields of its own, so there is nothing to list here.` : C`<code>${e.schema}</code> describes no fields of its own, so there is nothing to list here.`, Eo = (e, t = "") => e.flatMap((e) => {
	let n = t ? `${t}.${e.name}` : e.name;
	return e.fields ? [n, ...Eo(e.fields, n)] : [];
}), Do = class extends L {
	static properties = {
		app: { attribute: !1 },
		api: { type: String },
		name: { type: String },
		version: { type: Number },
		detail: { state: !0 },
		open: { state: !0 }
	};
	constructor() {
		super(), this.detail = null, this.open = /* @__PURE__ */ new Set();
	}
	toggle(e) {
		let t = new Set(this.open);
		t.has(e) ? t.delete(e) : t.add(e), this.open = t;
	}
	get address() {
		return `/model/${encodeURIComponent(this.api)}/resources/${encodeURIComponent(this.name)}`;
	}
	updated(e) {
		[
			"api",
			"name",
			"version"
		].some((t) => e.has(t)) && this.read("detail", this.address, (e) => this.detail = e);
	}
	render() {
		let { app: e } = this, t = this.detail;
		if (!t) return C`<p class="empty">Loading…</p>`;
		let n = (e) => [
			e.key && "key",
			e.required && "required",
			e.readOnly && "read only"
		].filter(Boolean), r = Eo(t.fields), i = [...t.fields.filter((e) => e.key), ...t.fields.filter((e) => !e.key)], a = (e, r = "", i = 0) => e.flatMap((e) => {
			let o = r ? `${r}.${e.name}` : e.name, s = this.open.has(o), c = C`
          <tr class=${i ? `nested depth-${Math.min(i, 3)}` : ""}>
            <td class="field" style="--depth: ${i}">
              ${e.fields ? C`<button
                      class="expander"
                      aria-expanded=${String(s)}
                      aria-label="${s ? "Hide" : "Show"} the fields of ${o}"
                      @click=${() => this.toggle(o)}
                    >
                      ${Tt(s)}
                    </button>` : C`<span class="expander-space"></span>`}<code>${e.name}</code>
            </td>
            <td>
              ${e.type}${e.format ? C` <span class="hint">${e.format}</span>` : T}
              ${e.enum ? C`<div class="hint">${e.enum.map(P).join(", ")}</div>` : T}
            </td>
            <td>
              ${n(e).map((e) => C`<span class="tag">${e}</span> `)}
              ${e.onlyIn ? C`<div class="hint" title=${e.onlyIn.join(", ")}>
                      only in ${e.onlyIn.length} of ${t.shape.options.length} shapes
                    </div>` : T}
            </td>
            <td class="example">${e.example === void 0 ? "" : P(e.example)}</td>
            <td class="seeded">${e.seededAs ?? ""}</td>
          </tr>
        `;
			return s && e.fields ? [c, ...a(e.fields, o, i + 1)] : [c];
		});
		return C`
    <section class="card">
      <div class="row">
        <h3>Fields</h3>
        <span class="grow"></span>
        ${r.length ? C`<button
                class="quiet"
                title="An object field lists its own fields under it"
                @click=${() => this.open = new Set(this.open.size ? [] : r)}
              >
                ${A(this.open.size ? "collapse" : "expand")}
                ${this.open.size ? "Collapse all" : "Expand all"}
              </button>` : T}
      </div>
      ${t.schema === t.name ? T : C`<p class="hint">From the schema <code>${t.schema}</code>.</p>`}
      ${t.fields.length ? T : C`<div class="empty-shape">
              <p>${To(t)}</p>
              <p class="hint">
                Its records are stored and counted, but they are empty, and no field could be its key.
                Requests to its operations are still answered from the spec's examples.
              </p>
            </div>`}
      ${t.fields.length && t.shape?.options ? C`<p class="hint">
              ${wo(t)} The table lists the fields of all ${t.shape.options.length}; a field
              that not every shape has says "only in" under its flags. The seeded records take the shapes in turn.
            </p>` : T}
      ${t.fields.length ? C`
      <div class="scroll">
        <table class="plain fields">
          <thead>
            <tr>
              <th>Field</th>
              <th>Type</th>
              <th>Flags</th>
              <th>Example</th>
              <th>Seeded as</th>
            </tr>
          </thead>
          <tbody>
            ${a(i)}
          </tbody>
        </table>
      </div>
      <p class="hint">
        The first seeded record shows the spec's examples; the others are made as SEEDED AS says. A field
        that copies another resource's records takes their values, so its nested fields say nothing here.
      </p>
      ` : T}
    </section>

    <section class="card">
      <h3>Operations on <span class="keep-case">${t.name}</span> (${t.operations.length})</h3>
      <div class="scroll">
        <table class="plain">
          <thead>
            <tr>
              <th>Method</th>
              <th>Path</th>
              <th>Does</th>
              <th>Label</th>
            </tr>
          </thead>
          <tbody>
            ${t.operations.map((t) => C`
                <tr>
                  <td>${Pt(t.method)}</td>
                  <td class="path"><a href=${e.href("operations", t.id)}>${t.path}</a></td>
                  <td>${t.action}</td>
                  <td>${Mt(t.label)}</td>
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    </section>

    <section class="card">
      <h3>Links to other resources</h3>
      ${t.relations.length ? C`<div class="scroll">
              <table class="plain">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Points at</th>
                    <th>How it was matched</th>
                  </tr>
                </thead>
                <tbody>
                  ${t.relations.map((t) => {
			let n = t.to?.split(".")[0];
			return C`
                      <tr>
                        <td><code>${t.field}</code></td>
                        <td>
                          ${n ? C`<a href=${e.href("resources", `${n}/schema`)}>${t.to}</a>` : C`<span class="hint">nothing</span>`}
                        </td>
                        <td>
                          ${n ? F(xt(t.why)) || "by the field's name" : C`${F(xt(t.why)) || "No resource fits its name"}. The mock fills it
                                with generated values.`}
                        </td>
                      </tr>
                    `;
		})}
                </tbody>
              </table>
            </div>` : C`<p class="hint">No field of ${t.name} points at another resource.</p>`}
      ${t.referencedBy.length ? C`<h4>Fields of other resources that point here</h4>
              <div class="scroll">
                <table class="plain">
                  <thead>
                    <tr>
                      <th>Resource</th>
                      <th>Field</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${t.referencedBy.map((t) => {
			let n = t.split(".")[0];
			return C`
                        <tr>
                          <td><a href=${e.href("resources", `${n}/schema`)}>${n}</a></td>
                          <td><code>${t.slice(n.length + 1)}</code></td>
                        </tr>
                      `;
		})}
                  </tbody>
                </table>
              </div>` : T}
    </section>
  `;
	}
};
customElements.define("rapidoc-mock-resource-schema", Do);
// ui/views/resources.js
function Oo(e, t) {
	let n = /* @__PURE__ */ new Set();
	for (let t of e) for (let e of Object.keys(t)) n.add(e);
	let r = [...n];
	return (t && n.has(t) ? [t, ...r.filter((e) => e !== t)] : r).map((e) => ({
		id: e,
		header: e === "$parents" ? "under" : e,
		key: e === t
	}));
}
var ko = [];
function Ao({ records: e, seeded: t }) {
	let n = t !== void 0 && e !== t, r = e - t;
	return C`<span
    class="count${n ? " changed" : ""}"
    title=${n ? `${e} now, ${t} in the seed data` : `${N(e, "record")}, as seeded`}
    >${e}${n ? C` <small>(${r > 0 ? "+" : ""}${r})</small>` : T}</span
  >`;
}
var jo = class extends L {
	static properties = {
		app: { attribute: !1 },
		api: { attribute: !1 },
		name: { type: String },
		tab: { type: String },
		version: { type: Number },
		records: { state: !0 },
		columns: { state: !0 }
	};
	constructor() {
		super(), this.records = [], this.columns = [];
	}
	get resource() {
		return this.api?.resources.find((e) => e.name === this.name);
	}
	updated(e) {
		[
			"api",
			"name",
			"tab",
			"version"
		].some((t) => e.has(t)) && this.tab !== "schema" && this.loadRecords();
	}
	loadRecords() {
		let { api: e, name: t } = this;
		if (!e || !t) return;
		let n = `${e.id}/${t}`;
		this.read("records", `/state/${encodeURIComponent(e.id)}/${encodeURIComponent(t)}`, (e) => {
			this.records = e, this.columns = Oo(e, this.resource?.key), this.loaded = n;
		});
	}
	render() {
		let { api: e, app: t, resource: n } = this, r = this.loaded === `${e.id}/${this.name}`;
		if (!e.resources.length) return C`
        ${I("resources", "Resources")}
        <p class="empty">
          The mock found no resource in this spec: every operation is static, answered from examples or generated data.
        </p>
      `;
		let i = C`
      <nav class="tabs" role="tablist" aria-label=${n?.name || "Resource"}>
        ${[[
			"records",
			"Records",
			n?.name
		], [
			"schema",
			"Schema",
			`${n?.name}/schema`
		]].map(([e, n, r]) => C`
            <a
              role="tab"
              href=${t.href("resources", r)}
              class=${this.tab === e ? "current" : ""}
              aria-selected=${this.tab === e ? "true" : "false"}
              >${n}</a
            >
          `)}
      </nav>
      ${n?.review ? Mt("needsReview", n.review) : T}
    `;
		return C`
      ${I("resources", "Resources", "The records this mock stores, worked out from the spec's schemas and paths.", e.resources.length)}
      <div class="resources-panel">
        <nav class="list" aria-label="Resources">
          ${e.resources.map((e) => C`
              <a
                href=${t.href("resources", e.name)}
                class=${e.name === n?.name ? "current" : ""}
                aria-current=${e.name === n?.name ? "true" : "false"}
              >
                <span class="name">${e.name}</span>
                ${e.review ? C`<span class="review-dot" title="Needs review: ${St(e.review)}"
                        ><span class="visually-hidden">needs review</span></span
                      >` : T}
                ${Ao(e)}
              </a>
            `)}
        </nav>
        <div class="pane">
          ${un(`${e.id}/${this.name}/${this.tab}`, this.tab === "schema" ? C`<div class="row toolbar">${i}</div>
                    <div class="pane-body">
                      <rapidoc-mock-resource-schema
                        .app=${t}
                        .api=${e.id}
                        .name=${this.name}
                        .version=${this.version}
                      ></rapidoc-mock-resource-schema>
                    </div>` : r && this.records.length && !this.columns.length ? C`<div class="row toolbar">${i}</div>
                      <div class="pane-body">
                        <div class="empty-shape">
                          <p>
                            The mock holds ${this.records.length} ${n?.name} records, and every one is
                            empty: it found no fields in the resource's schema.
                          </p>
                          <p class="hint">
                            The <a href=${t.href("resources", `${n?.name}/schema`)}>Schema</a> tab says
                            what the schema is instead.
                          </p>
                        </div>
                      </div>` : C`<rapidoc-mock-table
                    .lead=${i}
                    .rows=${r ? this.records : ko}
                    .columns=${r ? this.columns : ko}
                    .detail=${(e, t) => wt({
			label: `${n?.name} ${n?.key ? P(e[n.key]) : "record"}`,
			onClose: t,
			kind: "record"
		}, C`<pre>${JSON.stringify(e, null, 2)}</pre>`)}
                  ></rapidoc-mock-table>`)}
        </div>
      </div>
    `;
	}
};
customElements.define("rapidoc-mock-resources", jo);
// ui/views/settings.js
var Mo = (e, t, n) => {
	let r = Number(new FormData(e).get(t));
	return Number.isInteger(r) && r >= 0 && r <= n ? r : void 0;
}, No = class extends L {
	static properties = {
		app: { attribute: !1 },
		server: { attribute: !1 },
		busy: { type: Boolean }
	};
	render() {
		let { app: e, server: t } = this, n = [
			[
				"State",
				t.stateful ? "kept (--stateful)" : "not kept",
				"--stateful"
			],
			[
				"Seed",
				t.seed,
				`--seed ${t.seed}`
			],
			[
				"Records per resource",
				t.rows,
				`--rows ${t.rows}`
			],
			[
				"Response delay",
				`${t.delay} ms`,
				`--delay ${t.delay}`
			],
			[
				"Gap between stream items",
				`${t.streamInterval} ms`,
				"--stream-interval"
			],
			[
				"Tokens",
				t.issuer ? `verified against ${t.issuer}${t.audience ? ` for ${t.audience}` : ""}` : "accepted unchecked",
				"--issuer, --audience"
			]
		];
		return C`
    ${I("settings", "Settings", "What you change here lasts until the mock stops. To keep a setting, start the mock with the option shown beside it.")}

    <section class="card">
      <h2>Seed data</h2>
      <p class="hint">
        The records every resource starts with. New seed data replaces all stored records, in every
        session and every API.
      </p>
      <form
        class="field-row"
        @submit=${(t) => {
			t.preventDefault();
			let n = Mo(t.target, "rows", 1e3), r = Mo(t.target, "seed", 2 ** 31);
			n === void 0 || r === void 0 ? e.error = "Rows is a whole number from 0 to 1000, and seed a whole number from 0." : e.reseed(n, r);
		}}
      >
        <label class="stack">
          <span>Records per resource</span>
          <input name="rows" type="number" min="0" max="1000" step="1" .value=${String(t.rows)} />
          <code>--rows</code>
        </label>
        <label class="stack">
          <span>Seed</span>
          <input name="seed" type="number" min="0" step="1" .value=${String(t.seed)} />
          <code>--seed</code>
        </label>
        <button class="primary" ?disabled=${this.busy || !t.stateful}>Reseed</button>
      </form>
      ${t.stateful ? T : C`<p class="hint">The mock keeps no state: start it with <code>--stateful</code>.</p>`}
    </section>

    <section class="card">
      <h2>Response delay</h2>
      <p class="hint">
        Every API response waits this long before it is sent, to see loading states in a client. The
        mock's own endpoints are not delayed.
      </p>
      <form
        class="field-row"
        @submit=${(t) => {
			t.preventDefault();
			let n = Mo(t.target, "delay", 6e4);
			n === void 0 ? e.error = "Delay is a whole number of milliseconds, 0 to 60000." : e.setDelay(n);
		}}
      >
        <label class="stack">
          <span>Delay (ms)</span>
          <input
            name="delay"
            type="number"
            min="0"
            max="60000"
            step="1"
            .value=${String(t.delay)}
          />
          <code>--delay</code>
        </label>
        <button class="primary" ?disabled=${this.busy}>Apply</button>
      </form>
    </section>

    <section class="card">
      <h2>This server</h2>
      <div class="scroll">
        <table class="plain">
          <thead>
            <tr>
              <th>Setting</th>
              <th>Now</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            ${n.map(([e, t, n]) => C`
                <tr>
                  <td>${e}</td>
                  <td>${t}</td>
                  <td><code>${n}</code></td>
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    </section>

    <section class="card">
      <h2>APIs</h2>
      <div class="scroll">
        <table class="plain">
          <thead>
            <tr>
              <th>Served at</th>
              <th>Title</th>
              <th>Operations</th>
              <th>State</th>
              <th>Spec</th>
            </tr>
          </thead>
          <tbody>
            ${t.apis.map((e) => C`
                <tr>
                  <td><code>/${e.id}</code></td>
                  <td>${e.title || ""}</td>
                  <td>${e.operations}</td>
                  <td>${e.stateful ? "kept" : "not kept"}</td>
                  <td class="path">${e.file || ""}</td>
                </tr>
              `)}
          </tbody>
        </table>
      </div>
    </section>
  `;
	}
};
customElements.define("rapidoc-mock-settings", No);
// ui/mock-ui.js
var Po = [
	{
		group: "Overview",
		items: [{
			id: "dashboard",
			title: "Dashboard",
			view: (e) => C`<rapidoc-mock-dashboard
            .app=${e}
            .api=${e.api}
            .lint=${e.hasLint ? e.lint ?? null : void 0}
          ></rapidoc-mock-dashboard>`
		}]
	},
	{
		group: "API",
		items: [
			{
				id: "operations",
				title: "Operations",
				view: (e) => C`<rapidoc-mock-operations
            .app=${e}
            .api=${e.api}
            .operation=${e.route.item}
            .only=${e.route.query.get("label") || ""}
            .version=${e.version}
          ></rapidoc-mock-operations>`
			},
			{
				id: "resources",
				title: "Resources",
				view: (e) => C`<rapidoc-mock-resources
            .app=${e}
            .api=${e.api}
            .name=${e.route.item}
            .tab=${e.route.tab}
            .version=${e.version}
          ></rapidoc-mock-resources>`
			},
			{
				id: "lint",
				title: "Lint",
				when: (e) => e.hasLint,
				ready: (e) => e.hasLint,
				view: (e) => C`<rapidoc-mock-lint
            .app=${e}
            .lint=${e.lint ?? null}
            .category=${e.route.query.get("category") || ""}
            .rule=${e.route.query.get("rule") || ""}
          ></rapidoc-mock-lint>`
			}
		]
	},
	{
		group: "Server",
		items: [{
			id: "settings",
			title: "Settings",
			ready: (e) => !!e.server?.apis,
			view: (e) => C`<rapidoc-mock-settings
            .app=${e}
            .server=${e.server}
            .busy=${e.busy}
          ></rapidoc-mock-settings>`
		}, {
			id: "import",
			title: "Import spec",
			when: (e) => !!e.server?.import,
			ready: (e) => !!e.server?.apis,
			view: (e) => C`<rapidoc-mock-import
            .app=${e}
            .server=${e.server}
          ></rapidoc-mock-import>`
		}]
	}
], Fo = Object.fromEntries(Po.flatMap((e) => e.items.map((e) => [e.id, e]))), Io = "rapidoc-mock-session", Lo = (e) => async ({ method: t, path: n, body: r, session: i }) => {
	let a = {};
	i && (a["X-Mock-Session"] = i), r !== void 0 && (a["Content-Type"] = "application/json");
	let o = await fetch(`${e}${n}`, {
		method: t,
		headers: a,
		body: r === void 0 ? void 0 : JSON.stringify(r)
	}), s = o.status === 204 ? null : await o.json().catch(() => null);
	return !o.ok && !s?.detail ? {
		status: o.status,
		data: { detail: `${o.status} ${o.statusText}` }
	} : {
		status: o.status,
		data: s
	};
}, Ro = class extends O {
	static styles = gt;
	static properties = {
		base: { type: String },
		source: { attribute: !1 },
		lints: { state: !0 },
		apis: { state: !0 },
		server: { state: !0 },
		route: { state: !0 },
		version: { state: !0 },
		session: { state: !0 },
		error: { state: !0 },
		notice: { state: !0 },
		busy: { state: !0 },
		menuOpen: { state: !0 }
	};
	constructor() {
		super(), this.base = "", this.source = null, this.lints = {}, this.apis = null, this.server = null, this.route = {
			api: "",
			view: "dashboard",
			item: "",
			query: new URLSearchParams()
		}, this.version = 0, this.session = "", this.error = "", this.notice = "", this.busy = !1, this.menuOpen = !1, this.onHashChange = () => this.readAddress();
	}
	connectedCallback() {
		super.connectedCallback(), this.base ||= location.pathname.replace(/\/ui\/?$/, "");
		try {
			this.session = sessionStorage.getItem(Io) || "";
		} catch {}
		window.addEventListener("hashchange", this.onHashChange), this.load();
	}
	disconnectedCallback() {
		super.disconnectedCallback(), window.removeEventListener("hashchange", this.onHashChange);
	}
	async call(e, { method: t = "GET", body: n } = {}) {
		let { status: r, data: i } = await (this.source || Lo(this.base))({
			method: t,
			path: e,
			body: n,
			session: this.session
		});
		if (r >= 400) throw Error(i?.detail || `The mock answered ${r}.`);
		return i ?? null;
	}
	updated() {
		this.source !== this.loadedFrom && this.load();
	}
	get hasLint() {
		return !!this.server?.lint;
	}
	get lint() {
		return this.lints[this.route.api];
	}
	loadLint() {
		let e = this.route.api;
		!this.hasLint || e in this.lints || (this.lints = {
			...this.lints,
			[e]: null
		}, this.call(e ? `/lint/${encodeURIComponent(e)}` : "/lint").catch((e) => ({ error: e.message })).then((t) => {
			this.lints[e] === null && (this.lints = {
				...this.lints,
				[e]: t
			});
		}));
	}
	async run(e) {
		this.running = (this.running || 0) + 1, this.busy = !0;
		try {
			await e(), this.error = "";
		} catch (e) {
			this.error = e.message;
		}
		--this.running, this.busy = this.running > 0;
	}
	load() {
		return this.loadedFrom = this.source, this.run(async () => {
			try {
				this.server = await this.call("/settings"), this.lints = {};
				let { apis: e } = await this.call("/model");
				this.apis = e;
			} catch (e) {
				throw this.apis = this.apis || [], this.readAddress(), e;
			}
			this.readAddress(), this.version += 1;
		});
	}
	readAddress() {
		let [e, t = ""] = location.hash.replace(/^#\/?/, "").split("?"), n = e.split("/").filter(Boolean).map(decodeURIComponent);
		this.apis && !this.apis.length && n.unshift("");
		let [r, i, ...a] = n, o = this.apis?.find((e) => e.id === r) || this.apis?.[0], s = {
			api: o?.id || "",
			view: ((e) => e && (!e.when || e.when(this)))(Fo[i]) ? i : !o && this.hasLint ? "lint" : "dashboard",
			item: a.join("/"),
			query: new URLSearchParams(t)
		};
		if (this.menuOpen = !1, s.view !== this.route.view && (this.notice = ""), s.view === "resources") {
			s.tab = /\/(schema|about)$/.test(s.item) ? "schema" : "records";
			let e = s.item.replace(/\/(schema|about)$/, ""), t = o?.resources || [];
			s.item = (t.find((t) => t.name === e) || t[0])?.name || "";
		}
		this.route = s, this.loadLint();
	}
	href(e, t = "", n = this.route.api, r) {
		return `#/${[
			n,
			e,
			t
		].filter(Boolean).map(encodeURIComponent).join("/")}${r ? `?${new URLSearchParams(r)}` : ""}`;
	}
	get api() {
		return this.apis?.find((e) => e.id === this.route.api);
	}
	reset() {
		return this.run(async () => {
			await this.call(`/reset?api=${encodeURIComponent(this.route.api)}`, { method: "POST" }), await this.load(), this.notice = `${this.route.api} is back to its seed data${this.session ? ` for session ${this.session}` : ""}.`;
		});
	}
	reseed(e, t) {
		return this.run(async () => {
			await this.call("/reset", {
				method: "POST",
				body: {
					rows: e,
					seed: t
				}
			}), await this.load(), this.notice = `New seed data: ${e} records per resource, seed ${t}.`;
		});
	}
	setDelay(e) {
		return this.run(async () => {
			this.server = await this.call("/settings", {
				method: "PATCH",
				body: { delay: e }
			}), this.notice = e ? `Every API response now waits ${e} ms.` : "API responses are sent without delay.";
		});
	}
	setSession(e) {
		this.session = e.trim();
		try {
			sessionStorage.setItem(Io, this.session);
		} catch {}
		this.notice = "", this.load();
	}
	lintCount() {
		let e = this.lint?.problems;
		return e?.length ? C`<span class="count${e.some((e) => e.severity === "error") ? " errors" : ""}" title="Findings"
      >${e.length.toLocaleString("en")}</span
    >` : T;
	}
	render() {
		if (this.apis === null) return C`<p class="empty">Loading…</p>`;
		let e = this.api, t = Fo[this.route.view];
		return C`
      <header>
        <button
          class="menu icon-button"
          aria-label="Sections"
          aria-expanded=${this.menuOpen ? "true" : "false"}
          @click=${() => this.menuOpen = !this.menuOpen}
        >
          ${A("menu")}
        </button>
        <a class="brand" href=${this.href("dashboard")}>Rapi<b>Mock</b></a>
        ${this.apis.length ? C`
              <rapidoc-mock-select
                class="api"
                label="API"
                .options=${this.apis.map((e) => ({
			value: e.id,
			label: e.title || e.id,
			hint: `/${e.id}`
		}))}
                .value=${e?.id ?? ""}
                @change=${(e) => location.hash = this.href(this.route.view, "", e.detail)}
              ></rapidoc-mock-select>
            ` : T}
        <span class="grow"></span>
        <label class="session">
          <span>Session</span>
          <input
            type="text"
            placeholder="default data"
            title="The X-Mock-Session value whose data is shown"
            .value=${this.session}
            @change=${(e) => this.setSession(e.target.value)}
          />
        </label>
        <button
          title="Reads the mock's data again, as it is now: after a client changed records, or another tab did"
          @click=${() => this.load()}
          ?disabled=${this.busy}
        >
          Reload data
        </button>
        <button class="primary" @click=${() => this.reset()} ?disabled=${this.busy || !e}>
          Reset data
        </button>
      </header>
      <div class="shell">
        <nav class=${this.menuOpen ? "sidebar open" : "sidebar"} aria-label="Sections">
          ${Po.map((e) => C`
              <h2>${e.group}</h2>
              ${e.items.filter((e) => !e.when || e.when(this)).map((e) => C`
                    <a
                      href=${this.href(e.id)}
                      class=${e.id === this.route.view ? "current" : ""}
                      aria-current=${e.id === this.route.view ? "page" : "false"}
                    >
                      ${A(e.id)} ${e.title}
                      ${e.id === "lint" ? this.lintCount() : T}
                    </a>
                  `)}
            `)}
        </nav>
        <main>
          ${this.error ? C`<p class="banner error" role="alert">${this.error}</p>` : T}
          ${this.notice ? C`<p class="banner" role="status">${this.notice}</p>` : T}
          ${(t.ready ? t.ready(this) : e) ? t.view(this) : this.error ? T : this.lint?.mockError ? C`<p class="empty">
                    The mock can't start on this spec: ${this.lint.mockError}
                    <a href=${this.href("lint")}>See what the check found</a>.
                  </p>` : C`<p class="empty">
                    No API keeps state. Start the mock with <code>--stateful</code>.
                  </p>`}
        </main>
      </div>
    `;
	}
};
customElements.define("rapidoc-mock-ui", Ro);
export { Ro as RapidocMockUi };
