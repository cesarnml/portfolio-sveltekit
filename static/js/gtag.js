/* eslint-disable */
// @ts-nocheck
// Copyright 2012 Google Inc. All rights reserved.
;(function () {
	var data = {
		resource: {
			version: '1',

			macros: [],
			tags: [],
			predicates: [],
			rules: [],
		},
		runtime: [],
	}

	/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
	var aa,
		ba = function (a) {
			var b = 0
			return function () {
				return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
			}
		},
		ca =
			'function' == typeof Object.create
				? Object.create
				: function (a) {
						var b = function () {}
						b.prototype = a
						return new b()
				  },
		ea
	if ('function' == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf
	else {
		var ha
		a: {
			var ia = { a: !0 },
				ja = {}
			try {
				ja.__proto__ = ia
				ha = ja.a
				break a
			} catch (a) {}
			ha = !1
		}
		ea = ha
			? function (a, b) {
					a.__proto__ = b
					if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible')
					return a
			  }
			: null
	}
	var ka = ea,
		la = function (a, b) {
			a.prototype = ca(b.prototype)
			a.prototype.constructor = a
			if (ka) ka(a, b)
			else
				for (var c in b)
					if ('prototype' != c)
						if (Object.defineProperties) {
							var d = Object.getOwnPropertyDescriptor(b, c)
							d && Object.defineProperty(a, c, d)
						} else a[c] = b[c]
			a.Wk = b.prototype
		},
		ma = this || self,
		na = function (a) {
			return a
		}
	var oa = function () {},
		pa = function (a) {
			return 'function' === typeof a
		},
		h = function (a) {
			return 'string' === typeof a
		},
		qa = function (a) {
			return 'number' === typeof a && !isNaN(a)
		},
		ra = Array.isArray,
		sa = function (a, b) {
			if (a && ra(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
		},
		ta = function (a, b) {
			if (!qa(a) || !qa(b) || a > b) (a = 0), (b = 2147483647)
			return Math.floor(Math.random() * (b - a + 1) + a)
		},
		va = function (a, b) {
			for (var c = new ua(), d = 0; d < a.length; d++) c.set(a[d], !0)
			for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0
			return !1
		},
		l = function (a, b) {
			for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
		},
		ya = function (a) {
			return (
				!!a &&
				('[object Arguments]' === Object.prototype.toString.call(a) ||
					Object.prototype.hasOwnProperty.call(a, 'callee'))
			)
		},
		Aa = function (a) {
			return Math.round(Number(a)) || 0
		},
		Ba = function (a) {
			return 'false' === String(a).toLowerCase() ? !1 : !!a
		},
		Ca = function (a) {
			var b = []
			if (ra(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]))
			return b
		},
		Da = function (a) {
			return a ? a.replace(/^\s+|\s+$/g, '') : ''
		},
		Ea = function () {
			return new Date(Date.now())
		},
		Fa = function () {
			return Ea().getTime()
		},
		ua = function () {
			this.prefix = 'gtm.'
			this.values = {}
		}
	ua.prototype.set = function (a, b) {
		this.values[this.prefix + a] = b
	}
	ua.prototype.get = function (a) {
		return this.values[this.prefix + a]
	}
	var Ga = function (a, b, c) {
			return a && a.hasOwnProperty(b) ? a[b] : c
		},
		Ha = function (a) {
			var b = a
			return function () {
				if (b) {
					var c = b
					b = void 0
					try {
						c()
					} catch (d) {}
				}
			}
		},
		Ia = function (a, b) {
			for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
		},
		Ja = function (a) {
			for (var b in a) if (a.hasOwnProperty(b)) return !0
			return !1
		},
		Ka = function (a, b) {
			for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || [])
			return c
		},
		La = function (a, b) {
			for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++) d = d[e[f]] = {}
			d[e[e.length - 1]] = b
			return c
		},
		Ma = /^\w{1,9}$/,
		Oa = function (a, b) {
			a = a || {}
			b = b || ','
			var c = []
			l(a, function (d, e) {
				Ma.test(d) && e && c.push(d)
			})
			return c.join(b)
		},
		Qa = function (a, b) {
			function c() {
				++d === b && (e(), (e = null), (c.done = !0))
			}
			var d = 0,
				e = a
			c.done = !1
			return c
		}
	function Ra() {
		for (var a = Sa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c
		return b
	}
	function Ta() {
		var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		a += a.toLowerCase() + '0123456789-_'
		return a + '.'
	}
	var Sa, Ua
	function Va(a) {
		Sa = Sa || Ta()
		Ua = Ua || Ra()
		for (var b = [], c = 0; c < a.length; c += 3) {
			var d = c + 1 < a.length,
				e = c + 2 < a.length,
				f = a.charCodeAt(c),
				g = d ? a.charCodeAt(c + 1) : 0,
				k = e ? a.charCodeAt(c + 2) : 0,
				m = f >> 2,
				n = ((f & 3) << 4) | (g >> 4),
				p = ((g & 15) << 2) | (k >> 6),
				q = k & 63
			e || ((q = 64), d || (p = 64))
			b.push(Sa[m], Sa[n], Sa[p], Sa[q])
		}
		return b.join('')
	}
	function Wa(a) {
		function b(m) {
			for (; d < a.length; ) {
				var n = a.charAt(d++),
					p = Ua[n]
				if (null != p) return p
				if (!/^[\s\xa0]*$/.test(n)) throw Error('Unknown base64 encoding at char: ' + n)
			}
			return m
		}
		Sa = Sa || Ta()
		Ua = Ua || Ra()
		for (var c = '', d = 0; ; ) {
			var e = b(-1),
				f = b(0),
				g = b(64),
				k = b(64)
			if (64 === k && -1 === e) return c
			c += String.fromCharCode((e << 2) | (f >> 4))
			64 != g &&
				((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
				64 != k && (c += String.fromCharCode(((g << 6) & 192) | k)))
		}
	}
	var Xa = {},
		Ya = function (a, b) {
			Xa[a] = Xa[a] || []
			Xa[a][b] = !0
		},
		Za = function () {
			delete Xa.GA4_EVENT
		},
		$a = function (a) {
			var b = Xa[a]
			if (!b || 0 === b.length) return ''
			for (var c = [], d = 0, e = 0; e < b.length; e++)
				0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)), b[e] && (d |= 1 << e % 8)
			0 < d && c.push(String.fromCharCode(d))
			return Va(c.join('')).replace(/\.+$/, '')
		}
	var ab = Array.prototype.indexOf
		? function (a, b) {
				return Array.prototype.indexOf.call(a, b, void 0)
		  }
		: function (a, b) {
				if ('string' === typeof a)
					return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0)
				for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c
				return -1
		  }
	var bb,
		cb = function () {
			if (void 0 === bb) {
				var a = null,
					b = ma.trustedTypes
				if (b && b.createPolicy) {
					try {
						a = b.createPolicy('goog#html', {
							createHTML: na,
							createScript: na,
							createScriptURL: na,
						})
					} catch (c) {
						ma.console && ma.console.error(c.message)
					}
					bb = a
				} else bb = a
			}
			return bb
		}
	var eb = function (a, b) {
		this.h = b === db ? a : ''
	}
	eb.prototype.toString = function () {
		return this.h + ''
	}
	var db = {}
	var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
	function gb() {
		var a = ma.navigator
		if (a) {
			var b = a.userAgent
			if (b) return b
		}
		return ''
	}
	function hb(a) {
		return -1 != gb().indexOf(a)
	}
	function ib() {
		return hb('Firefox') || hb('FxiOS')
	}
	function jb() {
		return ((hb('Chrome') || hb('CriOS')) && !hb('Edge')) || hb('Silk')
	}
	var kb = {},
		lb = function (a, b) {
			this.h = b === kb ? a : ''
		}
	lb.prototype.toString = function () {
		return this.h.toString()
	} /*

 SPDX-License-Identifier: Apache-2.0
*/
	function mb(a, b) {
		if (void 0 !== a.tagName) {
			if ('script' === a.tagName.toLowerCase()) throw Error('')
			if ('style' === a.tagName.toLowerCase()) throw Error('')
		}
		a.innerHTML = b instanceof lb && b.constructor === lb ? b.h : 'type_error:SafeHtml'
	}
	function nb(a) {
		var b = (a = ob(a)),
			c = cb(),
			d = c ? c.createHTML(b) : b
		return new lb(d, kb)
	}
	function ob(a) {
		return null === a ? 'null' : void 0 === a ? 'undefined' : a
	}
	var pb = {},
		A = window,
		D = document,
		qb = navigator,
		rb = D.currentScript && D.currentScript.src,
		sb = function (a, b) {
			var c = A[a]
			A[a] = void 0 === c ? b : c
			return A[a]
		},
		tb = function (a, b) {
			b &&
				(a.addEventListener
					? (a.onload = b)
					: (a.onreadystatechange = function () {
							a.readyState in { loaded: 1, complete: 1 } && ((a.onreadystatechange = null), b())
					  }))
		},
		ub = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
		vb = { onload: 1, src: 1, width: 1, height: 1, style: 1 }
	function wb(a, b, c) {
		b &&
			l(b, function (d, e) {
				d = d.toLowerCase()
				c.hasOwnProperty(d) || a.setAttribute(d, e)
			})
	}
	var xb = function (a, b, c, d, e) {
			var f = D.createElement('script')
			wb(f, d, ub)
			f.type = 'text/javascript'
			f.async = !0
			var g,
				k = ob(a),
				m = cb(),
				n = m ? m.createScriptURL(k) : k
			g = new eb(n, db)
			f.src = g instanceof eb && g.constructor === eb ? g.h : 'type_error:TrustedResourceUrl'
			var p,
				q,
				t,
				u =
					null ==
					(t = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window).document)
						.querySelector)
						? void 0
						: t.call(q, 'script[nonce]')
			;(p = u ? u.nonce || u.getAttribute('nonce') || '' : '') && f.setAttribute('nonce', p)
			tb(f, b)
			c && (f.onerror = c)
			if (e) e.appendChild(f)
			else {
				var r = D.getElementsByTagName('script')[0] || D.body || D.head
				r.parentNode.insertBefore(f, r)
			}
			return f
		},
		yb = function () {
			if (rb) {
				var a = rb.toLowerCase()
				if (0 === a.indexOf('https://')) return 2
				if (0 === a.indexOf('http://')) return 3
			}
			return 1
		},
		zb = function (a, b, c, d, e) {
			var f
			f = void 0 === f ? !0 : f
			var g = e,
				k = !1
			g || ((g = D.createElement('iframe')), (k = !0))
			wb(g, c, vb)
			d &&
				l(d, function (n, p) {
					g.dataset[n] = p
				})
			f &&
				((g.height = '0'),
				(g.width = '0'),
				(g.style.display = 'none'),
				(g.style.visibility = 'hidden'))
			if (k) {
				var m = (D.body && D.body.lastChild) || D.body || D.head
				m.parentNode.insertBefore(g, m)
			}
			tb(g, b)
			void 0 !== a && (g.src = a)
			return g
		},
		Ab = function (a, b, c) {
			var d = new Image(1, 1)
			d.onload = function () {
				d.onload = null
				b && b()
			}
			d.onerror = function () {
				d.onerror = null
				c && c()
			}
			d.src = a
		},
		Bb = function (a, b, c, d) {
			a.addEventListener
				? a.addEventListener(b, c, !!d)
				: a.attachEvent && a.attachEvent('on' + b, c)
		},
		Cb = function (a, b, c) {
			a.removeEventListener
				? a.removeEventListener(b, c, !1)
				: a.detachEvent && a.detachEvent('on' + b, c)
		},
		F = function (a) {
			A.setTimeout(a, 0)
		},
		Db = function (a, b) {
			return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
		},
		Eb = function (a) {
			var b = a.innerText || a.textContent || ''
			b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''))
			b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '))
			return b
		},
		Fb = function (a) {
			var b = D.createElement('div')
			mb(b, nb('A<div>' + a + '</div>'))
			b = b.lastChild
			for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild))
			return c
		},
		Gb = function (a, b, c) {
			c = c || 100
			for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0
			for (var f = a, g = 0; f && g <= c; g++) {
				if (d[String(f.tagName).toLowerCase()]) return f
				f = f.parentElement
			}
			return null
		},
		Hb = function (a) {
			var b
			try {
				b = qb.sendBeacon && qb.sendBeacon(a)
			} catch (c) {
				Ya('TAGGING', 15)
			}
			b || Ab(a)
		},
		Ib = function (a, b) {
			var c = a[b]
			c && 'string' === typeof c.animVal && (c = c.animVal)
			return c
		},
		Jb = function () {
			var a = A.performance
			if (a && pa(a.now)) return a.now()
		},
		Kb = function () {
			return A.performance || void 0
		} /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
	var Lb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
		Mb = function (a) {
			if (null == a) return String(a)
			var b = Lb.exec(Object.prototype.toString.call(Object(a)))
			return b ? b[1].toLowerCase() : 'object'
		},
		Nb = function (a, b) {
			return Object.prototype.hasOwnProperty.call(Object(a), b)
		},
		Ob = function (a) {
			if (!a || 'object' != Mb(a) || a.nodeType || a == a.window) return !1
			try {
				if (a.constructor && !Nb(a, 'constructor') && !Nb(a.constructor.prototype, 'isPrototypeOf'))
					return !1
			} catch (c) {
				return !1
			}
			for (var b in a);
			return void 0 === b || Nb(a, b)
		},
		G = function (a, b) {
			var c = b || ('array' == Mb(a) ? [] : {}),
				d
			for (d in a)
				if (Nb(a, d)) {
					var e = a[d]
					'array' == Mb(e)
						? ('array' != Mb(c[d]) && (c[d] = []), (c[d] = G(e, c[d])))
						: Ob(e)
						? (Ob(c[d]) || (c[d] = {}), (c[d] = G(e, c[d])))
						: (c[d] = e)
				}
			return c
		}
	var Pb = function (a) {
		if (void 0 === a || ra(a) || Ob(a)) return !0
		switch (typeof a) {
			case 'boolean':
			case 'number':
			case 'string':
			case 'function':
				return !0
		}
		return !1
	}
	var Qb = (function () {
		var a = function (b) {
			return {
				toString: function () {
					return b
				},
			}
		}
		return {
			ai: a('consent'),
			Sf: a('convert_case_to'),
			Tf: a('convert_false_to'),
			Uf: a('convert_null_to'),
			Vf: a('convert_true_to'),
			Wf: a('convert_undefined_to'),
			Hk: a('debug_mode_metadata'),
			Na: a('function'),
			Ye: a('instance_name'),
			Ri: a('live_only'),
			Si: a('malware_disabled'),
			Ti: a('metadata'),
			Wi: a('original_activity_id'),
			Lk: a('original_vendor_template_id'),
			Kk: a('once_on_load'),
			Vi: a('once_per_event'),
			Yg: a('once_per_load'),
			Nk: a('priority_override'),
			Ok: a('respected_consent_types'),
			dh: a('setup_tags'),
			ob: a('tag_id'),
			ih: a('teardown_tags'),
		}
	})()
	var mc
	var nc = [],
		oc = [],
		pc = [],
		qc = [],
		rc = [],
		sc = {},
		tc,
		uc,
		wc = function () {
			var a = vc
			uc = uc || a
		},
		xc,
		yc = function (a, b) {
			var c = a['function'],
				d = b && b.event
			if (!c) throw Error('Error: No function name given for function call.')
			var e = sc[c],
				f = {},
				g
			for (g in a)
				a.hasOwnProperty(g) &&
					0 === g.indexOf('vtp_') &&
					(e && d && d.nh && d.nh(a[g]), (f[void 0 !== e ? g : g.substr(4)] = a[g]))
			e && d && d.mh && (f.vtp_gtmCachedValues = d.mh)
			if (b) {
				if (null == b.name) {
					var k
					a: {
						var m = b.index
						if (null == m) k = ''
						else {
							var n
							switch (b.type) {
								case 2:
									n = nc[m]
									break
								case 1:
									n = qc[m]
									break
								default:
									k = ''
									break a
							}
							var p = n && n[Qb.Ye]
							k = p ? String(p) : ''
						}
					}
					b.name = k
				}
				e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name))
			}
			return void 0 !== e ? e(f) : mc(c, f, b)
		},
		Ac = function (a, b, c) {
			c = c || []
			var d = {},
				e
			for (e in a) a.hasOwnProperty(e) && (d[e] = zc(a[e], b, c))
			return d
		},
		zc = function (a, b, c) {
			if (ra(a)) {
				var d
				switch (a[0]) {
					case 'function_id':
						return a[1]
					case 'list':
						d = []
						for (var e = 1; e < a.length; e++) d.push(zc(a[e], b, c))
						return d
					case 'macro':
						var f = a[1]
						if (c[f]) return
						var g = nc[f]
						if (!g || b.tf(g)) return
						c[f] = !0
						var k = String(g[Qb.Ye])
						try {
							var m = Ac(g, b, c)
							m.vtp_gtmEventId = b.id
							b.priorityId && (m.vtp_gtmPriorityId = b.priorityId)
							d = yc(m, { event: b, index: f, type: 2, name: k })
							xc && (d = xc.mj(d, m))
						} catch (x) {
							b.Ah && b.Ah(x, Number(f), k), (d = !1)
						}
						c[f] = !1
						return d
					case 'map':
						d = {}
						for (var n = 1; n < a.length; n += 2) d[zc(a[n], b, c)] = zc(a[n + 1], b, c)
						return d
					case 'template':
						d = []
						for (var p = !1, q = 1; q < a.length; q++) {
							var t = zc(a[q], b, c)
							uc && (p = p || t === uc.Rd)
							d.push(t)
						}
						return uc && p ? uc.oj(d) : d.join('')
					case 'escape':
						d = zc(a[1], b, c)
						if (uc && ra(a[1]) && 'macro' === a[1][0] && uc.Mj(a)) return uc.fk(d)
						d = String(d)
						for (var u = 2; u < a.length; u++) Rb[a[u]] && (d = Rb[a[u]](d))
						return d
					case 'tag':
						var r = a[1]
						if (!qc[r]) throw Error('Unable to resolve tag reference ' + r + '.')
						return (d = { th: a[2], index: r })
					case 'zb':
						var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] }
						v['function'] = a[1]
						var w = Bc(v, b, c),
							y = !!a[4]
						return y || 2 !== w ? y !== (1 === w) : null
					default:
						throw Error('Attempting to expand unknown Value type: ' + a[0] + '.')
				}
			}
			return a
		},
		Bc = function (a, b, c) {
			try {
				return tc(Ac(a, b, c))
			} catch (d) {
				JSON.stringify(a)
			}
			return 2
		}
	var Ec = function (a) {
			function b(t) {
				for (var u = 0; u < t.length; u++) d[t[u]] = !0
			}
			for (var c = [], d = [], e = Cc(a), f = 0; f < oc.length; f++) {
				var g = oc[f],
					k = Dc(g, e)
				if (k) {
					for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0
					b(g.block || [])
				} else null === k && b(g.block || [])
			}
			for (var p = [], q = 0; q < qc.length; q++) c[q] && !d[q] && (p[q] = !0)
			return p
		},
		Dc = function (a, b) {
			for (var c = a['if'] || [], d = 0; d < c.length; d++) {
				var e = b(c[d])
				if (0 === e) return !1
				if (2 === e) return null
			}
			for (var f = a.unless || [], g = 0; g < f.length; g++) {
				var k = b(f[g])
				if (2 === k) return null
				if (1 === k) return !1
			}
			return !0
		},
		Cc = function (a) {
			var b = []
			return function (c) {
				void 0 === b[c] && (b[c] = Bc(pc[c], a))
				return b[c]
			}
		}
	var Fc = {
		mj: function (a, b) {
			b[Qb.Sf] && 'string' === typeof a && (a = 1 == b[Qb.Sf] ? a.toLowerCase() : a.toUpperCase())
			b.hasOwnProperty(Qb.Uf) && null === a && (a = b[Qb.Uf])
			b.hasOwnProperty(Qb.Wf) && void 0 === a && (a = b[Qb.Wf])
			b.hasOwnProperty(Qb.Vf) && !0 === a && (a = b[Qb.Vf])
			b.hasOwnProperty(Qb.Tf) && !1 === a && (a = b[Qb.Tf])
			return a
		},
	}
	var Wc = /:[0-9]+$/,
		Xc = /^\d+\.fls\.doubleclick\.net$/,
		Yc = function (a, b, c) {
			for (var d = a.split('&'), e = 0; e < d.length; e++) {
				var f = d[e].split('=')
				if (decodeURIComponent(f[0]).replace(/\+/g, ' ') === b) {
					var g = f.slice(1).join('=')
					return c ? g : decodeURIComponent(g).replace(/\+/g, ' ')
				}
			}
		},
		ad = function (a, b, c, d, e) {
			b && (b = String(b).toLowerCase())
			if ('protocol' === b || 'port' === b) a.protocol = Zc(a.protocol) || Zc(A.location.protocol)
			'port' === b
				? (a.port = String(
						Number(a.hostname ? a.port : A.location.port) ||
							('http' === a.protocol ? 80 : 'https' === a.protocol ? 443 : ''),
				  ))
				: 'host' === b &&
				  (a.hostname = (a.hostname || A.location.hostname).replace(Wc, '').toLowerCase())
			return $c(a, b, c, d, e)
		},
		$c = function (a, b, c, d, e) {
			var f,
				g = Zc(a.protocol)
			b && (b = String(b).toLowerCase())
			switch (b) {
				case 'url_no_fragment':
					f = bd(a)
					break
				case 'protocol':
					f = g
					break
				case 'host':
					f = a.hostname.replace(Wc, '').toLowerCase()
					if (c) {
						var k = /^www\d*\./.exec(f)
						k && k[0] && (f = f.substr(k[0].length))
					}
					break
				case 'port':
					f = String(Number(a.port) || ('http' === g ? 80 : 'https' === g ? 443 : ''))
					break
				case 'path':
					a.pathname || a.hostname || Ya('TAGGING', 1)
					f = '/' === a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname
					var m = f.split('/')
					0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = '')
					f = m.join('/')
					break
				case 'query':
					f = a.search.replace('?', '')
					e && (f = Yc(f, e))
					break
				case 'extension':
					var n = a.pathname.split('.')
					f = 1 < n.length ? n[n.length - 1] : ''
					f = f.split('/')[0]
					break
				case 'fragment':
					f = a.hash.replace('#', '')
					break
				default:
					f = a && a.href
			}
			return f
		},
		Zc = function (a) {
			return a ? a.replace(':', '').toLowerCase() : ''
		},
		bd = function (a) {
			var b = ''
			if (a && a.href) {
				var c = a.href.indexOf('#')
				b = 0 > c ? a.href : a.href.substr(0, c)
			}
			return b
		},
		cd = function (a) {
			var b = D.createElement('a')
			a && (b.href = a)
			var c = b.pathname
			'/' !== c[0] && (a || Ya('TAGGING', 1), (c = '/' + c))
			var d = b.hostname.replace(Wc, '')
			return {
				href: b.href,
				protocol: b.protocol,
				host: b.host,
				hostname: d,
				pathname: c,
				search: b.search,
				hash: b.hash,
				port: b.port,
			}
		},
		dd = function (a) {
			function b(n) {
				var p = n.split('=')[0]
				return 0 > d.indexOf(p) ? n : p + '=0'
			}
			function c(n) {
				return n
					.split('&')
					.map(b)
					.filter(function (p) {
						return void 0 !== p
					})
					.join('&')
			}
			var d = 'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split(' '),
				e = cd(a),
				f = a.split(/[?#]/)[0],
				g = e.search,
				k = e.hash
			'?' === g[0] && (g = g.substring(1))
			'#' === k[0] && (k = k.substring(1))
			g = c(g)
			k = c(k)
			'' !== g && (g = '?' + g)
			'' !== k && (k = '#' + k)
			var m = '' + f + g + k
			'/' === m[m.length - 1] && (m = m.substring(0, m.length - 1))
			return m
		},
		ed = function (a) {
			var b = cd(A.location.href),
				c = ad(b, 'host', !1)
			if (c && c.match(Xc)) {
				var d = ad(b, 'path').split(a + '=')
				if (1 < d.length) return d[1].split(';')[0].split('?')[0]
			}
		}
	var fd = [
		'matches',
		'webkitMatchesSelector',
		'mozMatchesSelector',
		'msMatchesSelector',
		'oMatchesSelector',
	]
	function gd(a, b) {
		a = String(a)
		b = String(b)
		var c = a.length - b.length
		return 0 <= c && a.indexOf(b, c) === c
	}
	var kd = new ua()
	function ld(a, b, c) {
		var d = c ? 'i' : void 0
		try {
			var e = String(b) + d,
				f = kd.get(e)
			f || ((f = new RegExp(b, d)), kd.set(e, f))
			return f.test(a)
		} catch (g) {
			return !1
		}
	}
	function md(a, b) {
		function c(g) {
			var k = cd(g),
				m = ad(k, 'protocol'),
				n = ad(k, 'host', !0),
				p = ad(k, 'port'),
				q = ad(k, 'path').toLowerCase().replace(/\/$/, '')
			if (void 0 === m || ('http' === m && '80' === p) || ('https' === m && '443' === p))
				(m = 'web'), (p = 'default')
			return [m, n, p, q]
		}
		for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
			if (d[f] !== e[f]) return !1
		return !0
	}
	var td = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/
	function ud(a, b) {
		return '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[(a << 2) | b]
	}
	var wd = function (a) {
			return vd ? D.querySelectorAll(a) : null
		},
		xd = function (a, b) {
			if (!vd) return null
			if (Element.prototype.closest)
				try {
					return a.closest(b)
				} catch (e) {
					return null
				}
			var c =
					Element.prototype.matches ||
					Element.prototype.webkitMatchesSelector ||
					Element.prototype.mozMatchesSelector ||
					Element.prototype.msMatchesSelector ||
					Element.prototype.oMatchesSelector,
				d = a
			if (!D.documentElement.contains(d)) return null
			do {
				try {
					if (c.call(d, b)) return d
				} catch (e) {
					break
				}
				d = d.parentElement || d.parentNode
			} while (null !== d && 1 === d.nodeType)
			return null
		},
		yd = !1
	if (D.querySelectorAll)
		try {
			var zd = D.querySelectorAll(':root')
			zd && 1 == zd.length && zd[0] == D.documentElement && (yd = !0)
		} catch (a) {}
	var vd = yd
	var J = function (a) {
		Ya('GTM', a)
	}
	var N = {
			g: {
				H: 'ad_storage',
				O: 'analytics_storage',
				Mf: 'region',
				Nf: 'consent_updated',
				Of: 'wait_for_update',
				ei: 'app_remove',
				fi: 'app_store_refund',
				gi: 'app_store_subscription_cancel',
				hi: 'app_store_subscription_convert',
				ii: 'app_store_subscription_renew',
				Xf: 'add_payment_info',
				Yf: 'add_shipping_info',
				mc: 'add_to_cart',
				nc: 'remove_from_cart',
				Zf: 'view_cart',
				Kb: 'begin_checkout',
				oc: 'select_item',
				tb: 'view_item_list',
				Lb: 'select_promotion',
				ub: 'view_promotion',
				Aa: 'purchase',
				qc: 'refund',
				Ba: 'view_item',
				ag: 'add_to_wishlist',
				ji: 'first_open',
				ki: 'first_visit',
				xa: 'gtag.config',
				Ca: 'gtag.get',
				li: 'in_app_purchase',
				sc: 'page_view',
				mi: 'session_start',
				xe: 'user_engagement',
				Mb: 'gclid',
				ia: 'ads_data_redaction',
				X: 'allow_ad_personalization_signals',
				ye: 'allow_custom_scripts',
				ni: 'allow_display_features',
				od: 'allow_enhanced_conversions',
				vb: 'allow_google_signals',
				ya: 'allow_interest_groups',
				pd: 'auid',
				oi: 'auto_detection_enabled',
				wb: 'aw_remarketing',
				ze: 'aw_remarketing_only',
				qd: 'discount',
				rd: 'aw_feed_country',
				sd: 'aw_feed_language',
				ba: 'items',
				ud: 'aw_merchant_id',
				cg: 'aw_basket_type',
				vd: 'campaign_content',
				wd: 'campaign_id',
				xd: 'campaign_medium',
				yd: 'campaign_name',
				uc: 'campaign',
				zd: 'campaign_source',
				Ad: 'campaign_term',
				fb: 'client_id',
				ri: 'content_group',
				si: 'content_type',
				Da: 'conversion_cookie_prefix',
				vc: 'conversion_id',
				oa: 'conversion_linker',
				wc: 'conversion_api',
				hb: 'cookie_domain',
				Ja: 'cookie_expires',
				ib: 'cookie_flags',
				xc: 'cookie_name',
				Ae: 'cookie_path',
				Sa: 'cookie_prefix',
				Nb: 'cookie_update',
				yc: 'country',
				la: 'currency',
				Bd: 'customer_lifetime_value',
				zc: 'custom_map',
				ui: 'debug_mode',
				Z: 'developer_id',
				vi: 'disable_merchant_reported_purchases',
				wi: 'dc_custom_params',
				xi: 'dc_natural_search',
				Be: 'dynamic_event_settings',
				yi: 'affiliation',
				dg: 'checkout_option',
				eg: 'checkout_step',
				zi: 'coupon',
				Ce: 'item_list_name',
				De: 'list_name',
				Ai: 'promotions',
				Cd: 'shipping',
				fg: 'tax',
				Dd: 'engagement_time_msec',
				Ac: 'enhanced_client_id',
				Bc: 'enhanced_conversions',
				gg: 'enhanced_conversions_automatic_settings',
				Ed: 'estimated_delivery_date',
				Ee: 'euid_logged_in_state',
				Ob: 'event_callback',
				Pb: 'event_developer_id_string',
				hg: 'event',
				Fd: 'event_settings',
				Gd: 'event_timeout',
				Bi: 'experiments',
				Fe: 'firebase_id',
				Hd: 'first_party_collection',
				Id: '_x_20',
				xb: '_x_19',
				ig: 'fledge',
				jg: 'flight_error_code',
				kg: 'flight_error_message',
				lg: 'gac_gclid',
				Jd: 'gac_wbraid',
				mg: 'gac_wbraid_multiple_conversions',
				Ge: 'ga_restrict_domain',
				He: 'ga_temp_client_id',
				ng: 'gdpr_applies',
				og: 'geo_granularity',
				jb: 'value_callback',
				Ta: 'value_key',
				Ik: 'google_ono',
				Ua: 'google_signals',
				Cc: 'google_tld',
				Kd: 'groups',
				pg: 'gsa_experiment_id',
				qg: 'iframe_state',
				Ld: 'ignore_referrer',
				Ie: 'internal_traffic_results',
				Md: 'is_legacy_loaded',
				rg: 'is_passthrough',
				Ka: 'language',
				Je: 'legacy_developer_id_string',
				qa: 'linker',
				Rb: 'accept_incoming',
				yb: 'decorate_forms',
				N: 'domains',
				Sb: 'url_position',
				sg: 'method',
				Dc: 'new_customer',
				ug: 'non_interaction',
				Ci: 'optimize_id',
				vg: 'page_hostname',
				Ec: 'page_path',
				La: 'page_referrer',
				Tb: 'page_title',
				wg: 'passengers',
				xg: 'phone_conversion_callback',
				Di: 'phone_conversion_country_code',
				yg: 'phone_conversion_css_class',
				Ei: 'phone_conversion_ids',
				zg: 'phone_conversion_number',
				Ag: 'phone_conversion_options',
				Bg: 'quantity',
				Fc: 'redact_device_info',
				Ke: 'redact_enhanced_user_id',
				Fi: 'redact_ga_client_id',
				Gi: 'redact_user_id',
				Nd: 'referral_exclusion_definition',
				zb: 'restricted_data_processing',
				Hi: 'retoken',
				Cg: 'screen_name',
				Ab: 'screen_resolution',
				Ii: 'search_term',
				Fa: 'send_page_view',
				Bb: 'send_to',
				Gc: 'session_duration',
				Od: 'session_engaged',
				Le: 'session_engaged_time',
				kb: 'session_id',
				Pd: 'session_number',
				Hc: 'delivery_postal_code',
				Eg: 'temporary_client_id',
				Ji: 'tracking_id',
				Me: 'traffic_type',
				Ma: 'transaction_id',
				ma: 'transport_url',
				Fg: 'trip_type',
				Ic: 'update',
				lb: 'url_passthrough',
				Ne: '_user_agent_architecture',
				Oe: '_user_agent_bitness',
				Pe: '_user_agent_full_version_list',
				Qe: '_user_agent_mobile',
				Re: '_user_agent_model',
				Se: '_user_agent_platform',
				Te: '_user_agent_platform_version',
				Gg: '_user_agent_wait',
				Ue: '_user_agent_wow64',
				na: 'user_data',
				Hg: 'user_data_auto_latency',
				Ig: 'user_data_auto_meta',
				Jg: 'user_data_auto_multi',
				Kg: 'user_data_auto_selectors',
				Lg: 'user_data_auto_status',
				Mg: 'user_data_mode',
				Ve: 'user_data_settings',
				ra: 'user_id',
				Ga: 'user_properties',
				Ng: 'us_privacy_string',
				ja: 'value',
				Qd: 'wbraid',
				Og: 'wbraid_multiple_conversions',
				Ug: '_host_name',
				Vg: '_in_page_command',
				Wg: '_is_passthrough_cid',
				Xg: 'non_personalized_ads',
				Nc: '_sst_parameters',
				Ra: 'conversion_label',
				Ea: 'page_location',
				Qb: 'global_developer_id_string',
				Dg: 'tc_privacy_string',
			},
		},
		Yd = {},
		Zd = Object.freeze(
			((Yd[N.g.X] = 1),
			(Yd[N.g.od] = 1),
			(Yd[N.g.vb] = 1),
			(Yd[N.g.ba] = 1),
			(Yd[N.g.hb] = 1),
			(Yd[N.g.Ja] = 1),
			(Yd[N.g.ib] = 1),
			(Yd[N.g.xc] = 1),
			(Yd[N.g.Ae] = 1),
			(Yd[N.g.Sa] = 1),
			(Yd[N.g.Nb] = 1),
			(Yd[N.g.zc] = 1),
			(Yd[N.g.Z] = 1),
			(Yd[N.g.Be] = 1),
			(Yd[N.g.Ob] = 1),
			(Yd[N.g.Fd] = 1),
			(Yd[N.g.Gd] = 1),
			(Yd[N.g.Hd] = 1),
			(Yd[N.g.Ge] = 1),
			(Yd[N.g.Ua] = 1),
			(Yd[N.g.Cc] = 1),
			(Yd[N.g.Kd] = 1),
			(Yd[N.g.Ie] = 1),
			(Yd[N.g.Md] = 1),
			(Yd[N.g.qa] = 1),
			(Yd[N.g.Ke] = 1),
			(Yd[N.g.Nd] = 1),
			(Yd[N.g.zb] = 1),
			(Yd[N.g.Fa] = 1),
			(Yd[N.g.Bb] = 1),
			(Yd[N.g.Gc] = 1),
			(Yd[N.g.Le] = 1),
			(Yd[N.g.Hc] = 1),
			(Yd[N.g.ma] = 1),
			(Yd[N.g.Ic] = 1),
			(Yd[N.g.Ve] = 1),
			(Yd[N.g.Ga] = 1),
			(Yd[N.g.Nc] = 1),
			Yd),
		)
	Object.freeze([N.g.Ea, N.g.La, N.g.Tb, N.g.Ka, N.g.Cg, N.g.ra, N.g.Fe, N.g.ri])
	var $d = {},
		ae = Object.freeze(
			(($d[N.g.ei] = 1),
			($d[N.g.fi] = 1),
			($d[N.g.gi] = 1),
			($d[N.g.hi] = 1),
			($d[N.g.ii] = 1),
			($d[N.g.ji] = 1),
			($d[N.g.ki] = 1),
			($d[N.g.li] = 1),
			($d[N.g.mi] = 1),
			($d[N.g.xe] = 1),
			$d),
		),
		be = {},
		ce = Object.freeze(
			((be[N.g.Xf] = 1),
			(be[N.g.Yf] = 1),
			(be[N.g.mc] = 1),
			(be[N.g.nc] = 1),
			(be[N.g.Zf] = 1),
			(be[N.g.Kb] = 1),
			(be[N.g.oc] = 1),
			(be[N.g.tb] = 1),
			(be[N.g.Lb] = 1),
			(be[N.g.ub] = 1),
			(be[N.g.Aa] = 1),
			(be[N.g.qc] = 1),
			(be[N.g.Ba] = 1),
			(be[N.g.ag] = 1),
			be),
		),
		de = Object.freeze([N.g.X, N.g.vb, N.g.Nb]),
		ee = Object.freeze([].concat(de)),
		fe = Object.freeze([N.g.Ja, N.g.Gd, N.g.Gc, N.g.Le, N.g.Dd]),
		ge = Object.freeze([].concat(fe)),
		he = {},
		ie = ((he[N.g.H] = '1'), (he[N.g.O] = '2'), he),
		je = {},
		ke = Object.freeze(
			((je[N.g.X] = 1),
			(je[N.g.od] = 1),
			(je[N.g.ya] = 1),
			(je[N.g.wb] = 1),
			(je[N.g.ze] = 1),
			(je[N.g.qd] = 1),
			(je[N.g.rd] = 1),
			(je[N.g.sd] = 1),
			(je[N.g.ba] = 1),
			(je[N.g.ud] = 1),
			(je[N.g.Da] = 1),
			(je[N.g.oa] = 1),
			(je[N.g.hb] = 1),
			(je[N.g.Ja] = 1),
			(je[N.g.ib] = 1),
			(je[N.g.Sa] = 1),
			(je[N.g.la] = 1),
			(je[N.g.Bd] = 1),
			(je[N.g.Z] = 1),
			(je[N.g.vi] = 1),
			(je[N.g.Bc] = 1),
			(je[N.g.Ed] = 1),
			(je[N.g.Fe] = 1),
			(je[N.g.Hd] = 1),
			(je[N.g.Md] = 1),
			(je[N.g.Ka] = 1),
			(je[N.g.Dc] = 1),
			(je[N.g.Ea] = 1),
			(je[N.g.La] = 1),
			(je[N.g.xg] = 1),
			(je[N.g.yg] = 1),
			(je[N.g.zg] = 1),
			(je[N.g.Ag] = 1),
			(je[N.g.zb] = 1),
			(je[N.g.Fa] = 1),
			(je[N.g.Bb] = 1),
			(je[N.g.Hc] = 1),
			(je[N.g.Ma] = 1),
			(je[N.g.ma] = 1),
			(je[N.g.Ic] = 1),
			(je[N.g.lb] = 1),
			(je[N.g.na] = 1),
			(je[N.g.ra] = 1),
			(je[N.g.ja] = 1),
			je),
		)
	Object.freeze(N.g)
	var le = {},
		me = (A.google_tag_manager = A.google_tag_manager || {}),
		ne = Math.random()
	le.Wb = '3280'
	le.Mc = Number('0') || 0
	le.ca = 'dataLayer'
	le.ci = 'ChEIgLminwYQxMnHl93D8+SxARIZAMUcofRfTESlvKV2kJKxssIPKgcyFIPONhoCX08\x3d'
	var oe = {
			__cl: !0,
			__ecl: !0,
			__ehl: !0,
			__evl: !0,
			__fal: !0,
			__fil: !0,
			__fsl: !0,
			__hl: !0,
			__jel: !0,
			__lcl: !0,
			__sdl: !0,
			__tl: !0,
			__ytl: !0,
		},
		pe = { __paused: !0, __tg: !0 },
		qe
	for (qe in oe) oe.hasOwnProperty(qe) && (pe[qe] = !0)
	var re = Ba(''),
		se,
		te = !1
	te = !0
	se = te
	var ue,
		ve = !1
	ue = ve
	var we,
		xe = !1
	we = xe
	var ye,
		ze = !1
	ye = ze
	le.nd = 'www.googletagmanager.com'
	var Ae = '' + le.nd + (se ? '/gtag/js' : '/gtm.js'),
		Be = null,
		Ce = null,
		De = {},
		Ee = {},
		Fe = {},
		Ge = function () {
			var a = me.sequence || 1
			me.sequence = a + 1
			return a
		}
	le.bi = ''
	var He = ''
	le.Vd = He
	var Ie = new ua(),
		Je = {},
		Ke = {},
		Ne = {
			name: le.ca,
			set: function (a, b) {
				G(La(a, b), Je)
				Le()
			},
			get: function (a) {
				return Me(a, 2)
			},
			reset: function () {
				Ie = new ua()
				Je = {}
				Le()
			},
		},
		Me = function (a, b) {
			return 2 != b ? Ie.get(a) : Oe(a)
		},
		Oe = function (a) {
			var b,
				c = a.split('.')
			b = b || []
			for (var d = Je, e = 0; e < c.length; e++) {
				if (null === d) return !1
				if (void 0 === d) break
				d = d[c[e]]
				if (-1 !== b.indexOf(d)) return
			}
			return d
		},
		Pe = function (a, b) {
			Ke.hasOwnProperty(a) || (Ie.set(a, b), G(La(a, b), Je), Le())
		},
		Le = function (a) {
			l(Ke, function (b, c) {
				Ie.set(b, c)
				G(La(b), Je)
				G(La(b, c), Je)
				a && delete Ke[b]
			})
		},
		Qe = function (a, b) {
			var c,
				d = 1 !== (void 0 === b ? 2 : b) ? Oe(a) : Ie.get(a)
			'array' === Mb(d) || 'object' === Mb(d) ? (c = G(d)) : (c = d)
			return c
		}
	var Re,
		Ue = !1,
		Ve = function (a) {
			if (!Ue) {
				Ue = !0
				Re = Re || {}
			}
			return Re[a]
		}
	var We = function () {
			var a = A.screen
			return { width: a ? a.width : 0, height: a ? a.height : 0 }
		},
		Xe = function (a) {
			if (D.hidden) return !0
			var b = a.getBoundingClientRect()
			if (b.top == b.bottom || b.left == b.right || !A.getComputedStyle) return !0
			var c = A.getComputedStyle(a, null)
			if ('hidden' === c.visibility) return !0
			for (var d = a, e = c; d; ) {
				if ('none' === e.display) return !0
				var f = e.opacity,
					g = e.filter
				if (g) {
					var k = g.indexOf('opacity(')
					0 <= k &&
						((g = g.substring(k + 8, g.indexOf(')', k))),
						'%' == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
						(f = Math.min(g, f)))
				}
				if (void 0 !== f && 0 >= f) return !0
				;(d = d.parentElement) && (e = A.getComputedStyle(d, null))
			}
			return !1
		}
	var ff = {}
	var Ef = { ph: 'TH', lk: 'TH-10' }
	var Ff = new (function (a, b) {
		this.h = a
		this.defaultValue = void 0 === b ? !1 : b
	})(1933)
	var Gf = function (a) {
		Gf[' '](a)
		return a
	}
	Gf[' '] = function () {}
	var If = function () {
		var a = Hf,
			b = 'rf'
		if (a.rf && a.hasOwnProperty(b)) return a.rf
		var c = new a()
		return (a.rf = c)
	}
	var Hf = function () {
		var a = {}
		this.h = function () {
			var b = Ff.h,
				c = Ff.defaultValue
			return null != a[b] ? a[b] : c
		}
		this.m = function () {
			a[Ff.h] = !0
		}
	}
	var Jf = []
	function Kf() {
		var a = sb('google_tag_data', {})
		a.ics ||
			(a.ics = {
				entries: {},
				set: Lf,
				update: Mf,
				addListener: Nf,
				notifyListeners: Of,
				active: !1,
				usedDefault: !1,
				usedUpdate: !1,
				accessedDefault: !1,
				accessedAny: !1,
				wasSetLate: !1,
			})
		return a.ics
	}
	function Lf(a, b, c, d, e, f) {
		var g = Kf()
		g.usedDefault || (!g.accessedDefault && !g.accessedAny) || (g.wasSetLate = !0)
		g.active = !0
		g.usedDefault = !0
		if (void 0 != b) {
			var k = g.entries,
				m = k[a] || {},
				n = m.region,
				p = c && h(c) ? c.toUpperCase() : void 0
			d = d.toUpperCase()
			e = e.toUpperCase()
			if ('' === d || p === e || (p === d ? n !== e : !p && !n)) {
				var q = !!(f && 0 < f && void 0 === m.update),
					t = { region: p, initial: 'granted' === b, update: m.update, quiet: q }
				if ('' !== d || !1 !== m.initial) k[a] = t
				q &&
					A.setTimeout(function () {
						k[a] === t && t.quiet && ((t.quiet = !1), Pf(a), Of(), Ya('TAGGING', 2))
					}, f)
			}
		}
	}
	function Mf(a, b) {
		var c = Kf()
		c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0)
		c.active = !0
		c.usedUpdate = !0
		if (void 0 != b) {
			var d = Qf(c, a),
				e = c.entries,
				f = (e[a] = e[a] || {})
			f.update = 'granted' === b
			var g = Qf(c, a)
			f.quiet ? ((f.quiet = !1), Pf(a)) : g !== d && Pf(a)
		}
	}
	function Nf(a, b) {
		Jf.push({ ff: a, wj: b })
	}
	function Pf(a) {
		for (var b = 0; b < Jf.length; ++b) {
			var c = Jf[b]
			ra(c.ff) && -1 !== c.ff.indexOf(a) && (c.Fh = !0)
		}
	}
	function Of(a, b) {
		for (var c = 0; c < Jf.length; ++c) {
			var d = Jf[c]
			if (d.Fh) {
				d.Fh = !1
				try {
					d.wj({ consentEventId: a, consentPriorityId: b })
				} catch (e) {}
			}
		}
	}
	function Qf(a, b) {
		var c = a.entries[b] || {}
		return void 0 !== c.update ? c.update : c.initial
	}
	var Rf = function (a) {
			var b = Kf()
			b.accessedAny = !0
			return Qf(b, a)
		},
		Sf = function (a) {
			var b = Kf()
			b.accessedDefault = !0
			return (b.entries[a] || {}).initial
		},
		Tf = function (a) {
			var b = Kf()
			b.accessedAny = !0
			return !(b.entries[a] || {}).quiet
		},
		Uf = function () {
			if (!If().h()) return !1
			var a = Kf()
			a.accessedAny = !0
			return a.active
		},
		Vf = function () {
			var a = Kf()
			a.accessedDefault = !0
			return a.usedDefault
		},
		Wf = function (a, b) {
			Kf().addListener(a, b)
		},
		Xf = function (a, b) {
			Kf().notifyListeners(a, b)
		},
		Yf = function (a, b) {
			function c() {
				for (var e = 0; e < b.length; e++) if (!Tf(b[e])) return !0
				return !1
			}
			if (c()) {
				var d = !1
				Wf(b, function (e) {
					d || c() || ((d = !0), a(e))
				})
			} else a({})
		},
		Zf = function (a, b) {
			function c() {
				for (var f = [], g = 0; g < d.length; g++) {
					var k = d[g]
					!1 === Rf(k) || e[k] || (f.push(k), (e[k] = !0))
				}
				return f
			}
			var d = h(b) ? [b] : b,
				e = {}
			c().length !== d.length &&
				Wf(d, function (f) {
					var g = c()
					0 < g.length && ((f.ff = g), a(f))
				})
		}
	function $f() {}
	function ag() {}
	function bg(a) {
		for (var b = [], c = 0; c < cg.length; c++) {
			var d = a(cg[c])
			b[c] = !0 === d ? '1' : !1 === d ? '0' : '-'
		}
		return b.join('')
	}
	var cg = [N.g.H, N.g.O],
		dg = function (a) {
			var b = a[N.g.Mf]
			b && J(40)
			var c = a[N.g.Of]
			c && J(41)
			for (var d = ra(b) ? b : [b], e = { ic: 0 }; e.ic < d.length; e = { ic: e.ic }, ++e.ic)
				l(
					a,
					(function (f) {
						return function (g, k) {
							if (g !== N.g.Mf && g !== N.g.Of) {
								var m = d[f.ic],
									n = Ef.ph,
									p = Ef.lk
								Kf().set(g, k, m, n, p, c)
							}
						}
					})(e),
				)
		},
		eg = function (a, b) {
			l(a, function (c, d) {
				Kf().update(c, d)
			})
			Xf(b.eventId, b.priorityId)
		},
		fg = function (a) {
			var b = Rf(a)
			return void 0 != b ? b : !0
		},
		gg = function () {
			return 'G1' + bg(Rf)
		},
		hg = function (a, b) {
			Zf(a, b)
		},
		ig = function (a, b) {
			Yf(a, b)
		}
	var jg = function (a) {
		var b = 1,
			c,
			d,
			e
		if (a)
			for (b = 0, d = a.length - 1; 0 <= d; d--)
				(e = a.charCodeAt(d)),
					(b = ((b << 6) & 268435455) + e + (e << 14)),
					(c = b & 266338304),
					(b = 0 !== c ? b ^ (c >> 21) : b)
		return b
	}
	var kg = function (a, b, c) {
		for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
			var g = e[f].split('='),
				k = g[0].replace(/^\s*|\s*$/g, '')
			if (k && k == a) {
				var m = g
					.slice(1)
					.join('=')
					.replace(/^\s*|\s*$/g, '')
				m && c && (m = decodeURIComponent(m))
				d.push(m)
			}
		}
		return d
	}
	var lg = function (a, b) {
			var c = function () {}
			c.prototype = a.prototype
			var d = new c()
			a.apply(d, Array.prototype.slice.call(arguments, 1))
			return d
		},
		mg = function (a) {
			var b = a
			return function () {
				if (b) {
					var c = b
					b = null
					c()
				}
			}
		}
	function ng(a) {
		return 'null' !== a.origin
	}
	var qg = function (a, b, c, d) {
			return og(d) ? kg(a, String(b || pg()), c) : []
		},
		tg = function (a, b, c, d, e) {
			if (og(e)) {
				var f = rg(a, d, e)
				if (1 === f.length) return f[0].id
				if (0 !== f.length) {
					f = sg(
						f,
						function (g) {
							return g.ae
						},
						b,
					)
					if (1 === f.length) return f[0].id
					f = sg(
						f,
						function (g) {
							return g.ad
						},
						c,
					)
					return f[0] ? f[0].id : void 0
				}
			}
		}
	function ug(a, b, c, d) {
		var e = pg(),
			f = window
		ng(f) && (f.document.cookie = a)
		var g = pg()
		return e != g || (void 0 != c && 0 <= qg(b, g, !1, d).indexOf(c))
	}
	var Fg = function (a, b, c) {
			function d(u, r, v) {
				if (null == v) return delete g[r], u
				g[r] = v
				return u + '; ' + r + '=' + v
			}
			function e(u, r) {
				if (null == r) return delete g[r], u
				g[r] = !0
				return u + '; ' + r
			}
			if (!og(c.Ya)) return 2
			var f
			void 0 == b
				? (f = a + '=deleted; expires=' + new Date(0).toUTCString())
				: (c.encode && (b = encodeURIComponent(b)), (b = vg(b)), (f = a + '=' + b))
			var g = {}
			f = d(f, 'path', c.path)
			var k
			c.expires instanceof Date
				? (k = c.expires.toUTCString())
				: null != c.expires && (k = '' + c.expires)
			f = d(f, 'expires', k)
			f = d(f, 'max-age', c.Tk)
			f = d(f, 'samesite', c.Uk)
			c.Vk && (f = e(f, 'secure'))
			var m = c.domain
			if (m && 'auto' === m.toLowerCase()) {
				for (var n = wg(), p = 0; p < n.length; ++p) {
					var q = 'none' !== n[p] ? n[p] : void 0,
						t = d(f, 'domain', q)
					t = e(t, c.flags)
					if (!Eg(q, c.path) && ug(t, a, b, c.Ya)) return 0
				}
				return 1
			}
			m && 'none' !== m.toLowerCase() && (f = d(f, 'domain', m))
			f = e(f, c.flags)
			return Eg(m, c.path) ? 1 : ug(f, a, b, c.Ya) ? 0 : 1
		},
		Gg = function (a, b, c) {
			null == c.path && (c.path = '/')
			c.domain || (c.domain = 'auto')
			return Fg(a, b, c)
		}
	function sg(a, b, c) {
		for (var d = [], e = [], f, g = 0; g < a.length; g++) {
			var k = a[g],
				m = b(k)
			m === c ? d.push(k) : void 0 === f || m < f ? ((e = [k]), (f = m)) : m === f && e.push(k)
		}
		return 0 < d.length ? d : e
	}
	function rg(a, b, c) {
		for (var d = [], e = qg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
			var g = e[f].split('.'),
				k = g.shift()
			if (!b || -1 !== b.indexOf(k)) {
				var m = g.shift()
				m && ((m = m.split('-')), d.push({ id: g.join('.'), ae: 1 * m[0] || 1, ad: 1 * m[1] || 1 }))
			}
		}
		return d
	}
	var vg = function (a) {
			a && 1200 < a.length && (a = a.substring(0, 1200))
			return a
		},
		Hg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
		Ig = /(^|\.)doubleclick\.net$/i,
		Eg = function (a, b) {
			return Ig.test(window.document.location.hostname) || ('/' === b && Hg.test(a))
		},
		pg = function () {
			return ng(window) ? window.document.cookie : ''
		},
		wg = function () {
			var a = [],
				b = window.document.location.hostname.split('.')
			if (4 === b.length) {
				var c = b[b.length - 1]
				if (parseInt(c, 10).toString() === c) return ['none']
			}
			for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'))
			var e = window.document.location.hostname
			Ig.test(e) || Hg.test(e) || a.push('none')
			return a
		},
		og = function (a) {
			if (!If().h() || !a || !Uf()) return !0
			if (!Tf(a)) return !1
			var b = Rf(a)
			return null == b ? !0 : !!b
		}
	var Jg = function (a) {
			var b = Math.round(2147483647 * Math.random())
			return a ? String(b ^ (jg(a) & 2147483647)) : String(b)
		},
		Kg = function (a) {
			return [Jg(a), Math.round(Fa() / 1e3)].join('.')
		},
		Ng = function (a, b, c, d, e) {
			var f = Lg(b)
			return tg(a, f, Mg(c), d, e)
		},
		Og = function (a, b, c, d) {
			var e = '' + Lg(c),
				f = Mg(d)
			1 < f && (e += '-' + f)
			return [b, e, a].join('.')
		},
		Lg = function (a) {
			if (!a) return 1
			a = 0 === a.indexOf('.') ? a.substr(1) : a
			return a.split('.').length
		},
		Mg = function (a) {
			if (!a || '/' === a) return 1
			'/' !== a[0] && (a = '/' + a)
			'/' !== a[a.length - 1] && (a += '/')
			return a.split('/').length - 1
		}
	function Pg(a, b, c, d) {
		var e,
			f = Number(null != a.qb ? a.qb : void 0)
		0 !== f && (e = new Date((b || Fa()) + 1e3 * (f || 7776e3)))
		return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: e, Ya: d }
	}
	var Qg
	var Ug = function () {
			var a = Rg,
				b = Sg,
				c = Tg(),
				d = function (g) {
					a(g.target || g.srcElement || {})
				},
				e = function (g) {
					b(g.target || g.srcElement || {})
				}
			if (!c.init) {
				Bb(D, 'mousedown', d)
				Bb(D, 'keyup', d)
				Bb(D, 'submit', e)
				var f = HTMLFormElement.prototype.submit
				HTMLFormElement.prototype.submit = function () {
					b(this)
					f.call(this)
				}
				c.init = !0
			}
		},
		Vg = function (a, b, c, d, e) {
			var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e }
			Tg().decorators.push(f)
		},
		Wg = function (a, b, c) {
			for (var d = Tg().decorators, e = {}, f = 0; f < d.length; ++f) {
				var g = d[f],
					k
				if ((k = !c || g.forms))
					a: {
						var m = g.domains,
							n = a,
							p = !!g.sameHost
						if (m && (p || n !== D.location.hostname))
							for (var q = 0; q < m.length; q++)
								if (m[q] instanceof RegExp) {
									if (m[q].test(n)) {
										k = !0
										break a
									}
								} else if (0 <= n.indexOf(m[q]) || (p && 0 <= m[q].indexOf(n))) {
									k = !0
									break a
								}
						k = !1
					}
				if (k) {
					var t = g.placement
					void 0 == t && (t = g.fragment ? 2 : 1)
					t === b && Ia(e, g.callback())
				}
			}
			return e
		}
	function Tg() {
		var a = sb('google_tag_data', {}),
			b = a.gl
		;(b && b.decorators) || ((b = { decorators: [] }), (a.gl = b))
		return b
	}
	var Xg = /(.*?)\*(.*?)\*(.*)/,
		Yg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
		Zg = /^(?:www\.|m\.|amp\.)+/,
		$g = /([^?#]+)(\?[^#]*)?(#.*)?/
	function ah(a) {
		return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)')
	}
	var ch = function (a) {
		var b = [],
			c
		for (c in a)
			if (a.hasOwnProperty(c)) {
				var d = a[c]
				void 0 !== d &&
					d === d &&
					null !== d &&
					'[object Object]' !== d.toString() &&
					(b.push(c), b.push(Va(String(d))))
			}
		var e = b.join('*')
		return ['1', bh(e), e].join('*')
	}
	function bh(a, b) {
		var c = [
				qb.userAgent,
				new Date().getTimezoneOffset(),
				qb.userLanguage || qb.language,
				Math.floor(Fa() / 60 / 1e3) - (void 0 === b ? 0 : b),
				a,
			].join('*'),
			d
		if (!(d = Qg)) {
			for (var e = Array(256), f = 0; 256 > f; f++) {
				for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1
				e[f] = g
			}
			d = e
		}
		Qg = d
		for (var m = 4294967295, n = 0; n < c.length; n++)
			m = (m >>> 8) ^ Qg[(m ^ c.charCodeAt(n)) & 255]
		return ((m ^ -1) >>> 0).toString(36)
	}
	function dh() {
		return function (a) {
			var b = cd(A.location.href),
				c = b.search.replace('?', ''),
				d = Yc(c, '_gl', !0) || ''
			a.query = eh(d) || {}
			var e = ad(b, 'fragment').match(ah('_gl'))
			a.fragment = eh((e && e[3]) || '') || {}
		}
	}
	function fh(a, b) {
		var c = ah(a).exec(b),
			d = b
		if (c) {
			var e = c[2],
				f = c[4]
			d = c[1]
			f && (d = d + e + f)
		}
		return d
	}
	var gh = function (a, b) {
			b || (b = '_gl')
			var c = $g.exec(a)
			if (!c) return ''
			var d = c[1],
				e = fh(b, (c[2] || '').slice(1)),
				f = fh(b, (c[3] || '').slice(1))
			e.length && (e = '?' + e)
			f.length && (f = '#' + f)
			return '' + d + e + f
		},
		hh = function (a) {
			var b = dh(),
				c = Tg()
			c.data || ((c.data = { query: {}, fragment: {} }), b(c.data))
			var d = {},
				e = c.data
			e && (Ia(d, e.query), a && Ia(d, e.fragment))
			return d
		},
		eh = function (a) {
			try {
				var b = ih(a, 3)
				if (void 0 !== b) {
					for (var c = {}, d = b ? b.split('*') : [], e = 0; e + 1 < d.length; e += 2) {
						var f = d[e],
							g = Wa(d[e + 1])
						c[f] = g
					}
					Ya('TAGGING', 6)
					return c
				}
			} catch (k) {
				Ya('TAGGING', 8)
			}
		}
	function ih(a, b) {
		if (a) {
			var c
			a: {
				for (var d = a, e = 0; 3 > e; ++e) {
					var f = Xg.exec(d)
					if (f) {
						c = f
						break a
					}
					d = decodeURIComponent(d)
				}
				c = void 0
			}
			var g = c
			if (g && '1' === g[1]) {
				var k = g[3],
					m
				a: {
					for (var n = g[2], p = 0; p < b; ++p)
						if (n === bh(k, p)) {
							m = !0
							break a
						}
					m = !1
				}
				if (m) return k
				Ya('TAGGING', 7)
			}
		}
	}
	function jh(a, b, c, d) {
		function e(p) {
			p = fh(a, p)
			var q = p.charAt(p.length - 1)
			p && '&' !== q && (p += '&')
			return p + n
		}
		d = void 0 === d ? !1 : d
		var f = $g.exec(c)
		if (!f) return ''
		var g = f[1],
			k = f[2] || '',
			m = f[3] || '',
			n = a + '=' + b
		d ? (m = '#' + e(m.substring(1))) : (k = '?' + e(k.substring(1)))
		return '' + g + k + m
	}
	function kh(a, b) {
		var c = 'FORM' === (a.tagName || '').toUpperCase(),
			d = Wg(b, 1, c),
			e = Wg(b, 2, c),
			f = Wg(b, 3, c)
		if (Ja(d)) {
			var g = ch(d)
			c ? lh('_gl', g, a) : mh('_gl', g, a, !1)
		}
		if (!c && Ja(e)) {
			var k = ch(e)
			mh('_gl', k, a, !0)
		}
		for (var m in f)
			if (f.hasOwnProperty(m))
				a: {
					var n = m,
						p = f[m],
						q = a
					if (q.tagName) {
						if ('a' === q.tagName.toLowerCase()) {
							mh(n, p, q)
							break a
						}
						if ('form' === q.tagName.toLowerCase()) {
							lh(n, p, q)
							break a
						}
					}
					'string' == typeof q && jh(n, p, q)
				}
	}
	function mh(a, b, c, d) {
		if (c.href) {
			var e = jh(a, b, c.href, void 0 === d ? !1 : d)
			fb.test(e) && (c.href = e)
		}
	}
	function lh(a, b, c) {
		if (c && c.action) {
			var d = (c.method || '').toLowerCase()
			if ('get' === d) {
				for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
					var k = e[g]
					if (k.name === a) {
						k.setAttribute('value', b)
						f = !0
						break
					}
				}
				if (!f) {
					var m = D.createElement('input')
					m.setAttribute('type', 'hidden')
					m.setAttribute('name', a)
					m.setAttribute('value', b)
					c.appendChild(m)
				}
			} else if ('post' === d) {
				var n = jh(a, b, c.action)
				fb.test(n) && (c.action = n)
			}
		}
	}
	function Rg(a) {
		try {
			var b
			a: {
				for (var c = a, d = 100; c && 0 < d; ) {
					if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
						b = c
						break a
					}
					c = c.parentNode
					d--
				}
				b = null
			}
			var e = b
			if (e) {
				var f = e.protocol
				;('http:' !== f && 'https:' !== f) || kh(e, e.hostname)
			}
		} catch (g) {}
	}
	function Sg(a) {
		try {
			if (a.action) {
				var b = ad(cd(a.action), 'host')
				kh(a, b)
			}
		} catch (c) {}
	}
	var nh = function (a, b, c, d) {
			Ug()
			Vg(a, b, 'fragment' === c ? 2 : 1, !!d, !1)
		},
		oh = function (a, b) {
			Ug()
			Vg(a, [$c(A.location, 'host', !0)], b, !0, !0)
		},
		ph = function () {
			var a = D.location.hostname,
				b = Yg.exec(D.referrer)
			if (!b) return !1
			var c = b[2],
				d = b[1],
				e = ''
			if (c) {
				var f = c.split('/'),
					g = f[1]
				e = 's' === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
			} else if (d) {
				if (0 === d.indexOf('xn--')) return !1
				e = d.replace(/-/g, '.').replace(/\.\./g, '-')
			}
			var k = a.replace(Zg, ''),
				m = e.replace(Zg, ''),
				n
			if (!(n = k === m)) {
				var p = '.' + m
				n = k.substring(k.length - p.length, k.length) === p
			}
			return n
		},
		qh = function (a, b) {
			return !1 === a ? !1 : a || b || ph()
		}
	var rh = {},
		sh = function (a) {
			return void 0 == rh[a] ? !1 : rh[a]
		}
	var th = ['1'],
		uh = {},
		vh = {},
		Ah = function (a, b) {
			b = void 0 === b ? !0 : b
			var c = wh(a.prefix)
			if (!uh[c])
				if (xh(c, a.path, a.domain)) {
					if (sh('enable_auid_cross_domain')) {
						var d = vh[wh(a.prefix)]
						yh(a, d ? d.id : void 0, d ? d.wf : void 0)
					}
				} else {
					if (sh('enable_auid_fl_iframe')) {
						var e = ed('auiddc')
						if (e) {
							Ya('TAGGING', 17)
							uh[c] = e
							return
						}
					}
					if (b) {
						var f = wh(a.prefix),
							g = Kg()
						if (0 === zh(f, g, a)) {
							var k = sb('google_tag_data', {})
							k._gcl_au || (k._gcl_au = g)
						}
						xh(c, a.path, a.domain)
					}
				}
		}
	function yh(a, b, c) {
		var d = wh(a.prefix),
			e = uh[d]
		if (e) {
			var f = e.split('.')
			if (2 === f.length) {
				var g = Number(f[1]) || 0
				if (g) {
					var k = e
					b && (k = e + '.' + b + '.' + (c ? c : Math.floor(Fa() / 1e3)))
					zh(d, k, a, 1e3 * g)
				}
			}
		}
	}
	function zh(a, b, c, d) {
		var e = Og(b, '1', c.domain, c.path),
			f = Pg(c, d)
		f.Ya = 'ad_storage'
		return Gg(a, e, f)
	}
	function xh(a, b, c) {
		var d = Ng(a, b, c, th, 'ad_storage')
		if (!d) return !1
		Bh(a, d)
		return !0
	}
	function Bh(a, b) {
		var c = b.split('.')
		5 === c.length
			? ((uh[a] = c.slice(0, 2).join('.')),
			  (vh[a] = { id: c.slice(2, 4).join('.'), wf: Number(c[4]) || 0 }))
			: 3 === c.length
			? (vh[a] = { id: c.slice(0, 2).join('.'), wf: Number(c[2]) || 0 })
			: (uh[a] = b)
	}
	function wh(a) {
		return (a || '_gcl') + '_au'
	}
	function Ch(a) {
		Uf() || a()
		Yf(
			function () {
				Rf('ad_storage') && a()
				Zf(a, 'ad_storage')
			},
			['ad_storage'],
		)
	}
	function Dh(a) {
		var b = hh(!0),
			c = wh(a.prefix)
		Ch(function () {
			var d = b[c]
			if (d) {
				Bh(c, d)
				var e = 1e3 * Number(uh[c].split('.')[1])
				if (e) {
					Ya('TAGGING', 16)
					var f = Pg(a, e)
					f.Ya = 'ad_storage'
					var g = Og(d, '1', a.domain, a.path)
					Gg(c, g, f)
				}
			}
		})
	}
	function Eh(a, b, c, d) {
		d = d || {}
		var e = function () {
			var f = wh(d.prefix),
				g = {},
				k = Ng(f, d.path, d.domain, th, 'ad_storage')
			if (!k) return g
			g[f] = k
			return g
		}
		Ch(function () {
			nh(e, a, b, c)
		})
	}
	var Q = []
	Q[7] = !0
	Q[9] = !0
	Q[27] = !0
	Q[11] = !0
	Q[13] = !0
	Q[15] = !0
	Q[25] = !0
	Q[36] = !0
	Q[38] = !0
	Q[43] = !0
	Q[45] = !0
	a: {
		for (var Fh, Gh, Hh = 0; Fh === Gh; )
			if (
				((Fh = Math.floor(2 * Math.random())), (Gh = Math.floor(2 * Math.random())), Hh++, 20 < Hh)
			)
				break a
		Fh ? (Q[46] = !0) : (Q[47] = !0)
	}
	Q[52] = !0
	Q[57] = !0
	Q[58] = !0
	Q[60] = !0
	Q[61] = !0
	Q[65] = !0

	Q[68] = !0
	Q[69] = !0
	Q[72] = !0
	Q[76] = !0
	Q[77] = !0
	var R = function (a) {
		return !!Q[a]
	}
	var Ih = function () {
		me.dedupe_gclid || (me.dedupe_gclid = '' + Kg())
		return me.dedupe_gclid
	}
	var Jh = function () {
		var a = !1
		return a
	}
	var S = { D: '', Qa: '' },
		Kh = { Dh: '', Eh: '' }
	S.Ze = Ba('')
	var Lh = function () {
			return Kh.Dh ? Kh.Dh.split('|') : [S.D]
		},
		Mh = function () {
			return Kh.Eh ? Kh.Eh.split('|') : []
		},
		Nh = function () {
			this.container = {}
			this.destination = {}
			this.canonical = {}
		},
		Ph = function () {
			for (var a = Oh(), b = Lh(), c = 0; c < b.length; c++) {
				var d = a.container[b[c]]
				!d || qa(d) ? (a.container[b[c]] = { state: 2 }) : (d.state = 2)
			}
			for (var e = Mh(), f = 0; f < e.length; f++) {
				var g = a.destination[e[f]]
				g && 0 === g.state && J(93)
				g ? (g.state = 2) : (a.destination[e[f]] = { state: 2 })
			}
			a.canonical[S.Qa] = 2
		},
		Qh = function (a) {
			return !!Oh().container[a]
		},
		Rh = function () {
			var a = Oh().container,
				b
			for (b in a)
				if (a.hasOwnProperty(b)) {
					var c = a[b]
					if (qa(c)) {
						if (1 === c) return !0
					} else if (1 === c.state) return !0
				}
			return !1
		},
		Sh = function () {
			var a = {}
			l(Oh().destination, function (b, c) {
				0 === c.state && (a[b] = c)
			})
			return a
		}
	function Oh() {
		var a = me.tidr
		a || ((a = new Nh()), (me.tidr = a))
		return a
	}
	var Th = {
			'': 'n',
			UA: 'u',
			AW: 'a',
			DC: 'd',
			G: 'e',
			GF: 'f',
			GT: 't',
			HA: 'h',
			MC: 'm',
			GTM: 'g',
			OPT: 'o',
		},
		Uh = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
		Vh = function (a) {
			var b = S.D.split('-'),
				c = b[0].toUpperCase()
			if (R(45)) {
				var d = {}
				d.pj = S.D
				d.qk = le.Mc
				d.tk = le.Wb
				d.Vj = S.Ze ? 2 : 1
				se ? ((d.me = Uh[c]), d.me || (d.me = 0)) : (d.me = ye ? 13 : 10)
				we ? (d.yf = 1) : Jh() ? (d.yf = 2) : (d.yf = 3)
				var e
				var f = d.me,
					g = d.yf
				void 0 === f
					? (e = '')
					: (g || (g = 0),
					  (e =
							'' +
							ud(1, 1) +
							'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[(f << 2) | g]))
				var k = d.Pk,
					m =
						4 +
						e +
						(k
							? '' +
							  ud(2, 1) +
							  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[k]
							: ''),
					n,
					p = d.tk
				n = p && td.test(p) ? '' + ud(3, 2) + p : ''
				var q,
					t = d.qk
				q = t
					? '' + ud(4, 1) + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[t]
					: ''
				var u
				var r = d.pj
				if (r && a) {
					var v = r.split('-'),
						w = v[0].toUpperCase()
					if ('GTM' !== w && 'OPT' !== w) u = ''
					else {
						var y = v[1]
						u =
							'' +
							ud(5, 3) +
							'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[1 + y.length] +
							(d.Vj || 0) +
							y
					}
				} else u = ''
				return m + n + q + u
			}
			var x = Th[c] || 'i',
				B = a && 'GTM' === c ? b[1] : 'OPT' === c ? b[1] : '',
				z = 'w'
			se && (z = Jh() ? 's' : 'o')
			ue
				? ('w' === z && (z = 'x'), 'o' === z && (z = 'q'))
				: we
				? ('w' === z && (z = 'y'), 'o' === z && (z = 'r'))
				: ye && (z = 'z')
			return '2' + z + x + (4 === le.Wb.length ? le.Wb.slice(1) : le.Wb) + B
		}
	function Wh(a, b) {
		if ('' === a) return b
		var c = Number(a)
		return isNaN(c) ? b : c
	}
	var Xh = function (a, b, c) {
		a.addEventListener && a.addEventListener(b, c, !1)
	}
	function Yh() {
		return hb('iPhone') && !hb('iPod') && !hb('iPad')
	}
	function Zh() {
		Yh() || hb('iPad') || hb('iPod')
	}
	hb('Opera')
	hb('Trident') || hb('MSIE')
	hb('Edge')
	!hb('Gecko') ||
		(-1 != gb().toLowerCase().indexOf('webkit') && !hb('Edge')) ||
		hb('Trident') ||
		hb('MSIE') ||
		hb('Edge')
	;-1 != gb().toLowerCase().indexOf('webkit') && !hb('Edge') && hb('Mobile')
	hb('Macintosh')
	hb('Windows')
	hb('Linux') || hb('CrOS')
	var $h = ma.navigator || null
	$h && ($h.appVersion || '').indexOf('X11')
	hb('Android')
	Yh()
	hb('iPad')
	hb('iPod')
	Zh()
	gb().toLowerCase().indexOf('kaios')
	var ai = function (a, b, c, d) {
			for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
				var g = a.charCodeAt(e - 1)
				if (38 == g || 63 == g) {
					var k = a.charCodeAt(e + f)
					if (!k || 61 == k || 38 == k || 35 == k) return e
				}
				e += f + 1
			}
			return -1
		},
		bi = /#|$/,
		ci = function (a, b) {
			var c = a.search(bi),
				d = ai(a, 0, b, c)
			if (0 > d) return null
			var e = a.indexOf('&', d)
			if (0 > e || e > c) e = c
			d += b.length + 1
			return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, ' '))
		},
		di = /[?&]($|#)/,
		ei = function (a, b, c) {
			for (var d, e = a.search(bi), f = 0, g, k = []; 0 <= (g = ai(a, f, b, e)); )
				k.push(a.substring(f, g)), (f = Math.min(a.indexOf('&', g) + 1 || e, e))
			k.push(a.slice(f))
			d = k.join('').replace(di, '$1')
			var m,
				n = null != c ? '=' + encodeURIComponent(String(c)) : ''
			var p = b + n
			if (p) {
				var q,
					t = d.indexOf('#')
				0 > t && (t = d.length)
				var u = d.indexOf('?'),
					r
				0 > u || u > t ? ((u = t), (r = '')) : (r = d.substring(u + 1, t))
				q = [d.slice(0, u), r, d.slice(t)]
				var v = q[1]
				q[1] = p ? (v ? v + '&' + p : p) : v
				m = q[0] + (q[1] ? '?' + q[1] : '') + q[2]
			} else m = d
			return m
		}
	var fi = function (a, b) {
		if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
	}
	function gi(a) {
		if (!a || !D.head) return null
		var b = hi('META')
		D.head.appendChild(b)
		b.httpEquiv = 'origin-trial'
		b.content = a
		return b
	}
	var ii = function () {
			if (A.top == A) return 0
			var a = A.location.ancestorOrigins
			if (a) return a[a.length - 1] == A.location.origin ? 1 : 2
			var b
			var c = A.top
			try {
				var d
				if ((d = !!c && null != c.location.href))
					b: {
						try {
							Gf(c.foo)
							d = !0
							break b
						} catch (e) {}
						d = !1
					}
				b = d
			} catch (e) {
				b = !1
			}
			return b ? 1 : 2
		},
		hi = function (a, b) {
			b = void 0 === b ? document : b
			return b.createElement(String(a).toLowerCase())
		}
	function ji(a, b, c, d) {
		d = void 0 === d ? !1 : d
		a.google_image_requests || (a.google_image_requests = [])
		var e = hi('IMG', a.document)
		if (c) {
			var f = function () {
				if (c) {
					var g = a.google_image_requests,
						k = ab(g, e)
					0 <= k && Array.prototype.splice.call(g, k, 1)
				}
				e.removeEventListener && e.removeEventListener('load', f, !1)
				e.removeEventListener && e.removeEventListener('error', f, !1)
			}
			Xh(e, 'load', f)
			Xh(e, 'error', f)
		}
		d && (e.attributionsrc = '')
		e.src = b
		a.google_image_requests.push(e)
	}
	var li = function (a) {
			var b
			b = void 0 === b ? !1 : b
			var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe'
			fi(a, function (d, e) {
				d && (c += '&' + e + '=' + encodeURIComponent(d))
			})
			ki(c, b)
		},
		ki = function (a, b) {
			var c = window,
				d
			b = void 0 === b ? !1 : b
			d = void 0 === d ? !1 : d
			if (c.fetch) {
				var e = {
					keepalive: !0,
					credentials: 'include',
					redirect: 'follow',
					method: 'get',
					mode: 'no-cors',
				}
				d && ((e.mode = 'cors'), (e.headers = { 'Attribution-Reporting-Eligible': 'event-source' }))
				c.fetch(a, e)
			} else ji(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
		}
	var mi = function () {}
	var ni = function (a) {
			void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0)
			void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0)
			return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
				(void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
				? 2
				: a.cmpStatus && 'error' !== a.cmpStatus
				? 0
				: 3
		},
		oi = function (a, b) {
			b = void 0 === b ? {} : b
			this.m = a
			this.h = null
			this.M = {}
			this.sb = 0
			var c
			this.V = null != (c = b.Ck) ? c : 500
			var d
			this.I = null != (d = b.Qk) ? d : !1
			this.B = null
		}
	la(oi, mi)
	oi.prototype.addEventListener = function (a) {
		var b = this,
			c = { internalBlockOnErrors: this.I },
			d = mg(function () {
				return a(c)
			}),
			e = 0
		;-1 !== this.V &&
			(e = setTimeout(function () {
				c.tcString = 'tcunavailable'
				c.internalErrorState = 1
				d()
			}, this.V))
		var f = function (g, k) {
			clearTimeout(e)
			g
				? ((c = g),
				  (c.internalErrorState = ni(c)),
				  (c.internalBlockOnErrors = b.I),
				  (k && 0 === c.internalErrorState) ||
						((c.tcString = 'tcunavailable'), k || (c.internalErrorState = 3)))
				: ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3))
			a(c)
		}
		try {
			pi(this, 'addEventListener', f)
		} catch (g) {
			;(c.tcString = 'tcunavailable'),
				(c.internalErrorState = 3),
				e && (clearTimeout(e), (e = 0)),
				d()
		}
	}
	oi.prototype.removeEventListener = function (a) {
		a && a.listenerId && pi(this, 'removeEventListener', null, a.listenerId)
	}
	var ri = function (a, b, c) {
			var d
			d = void 0 === d ? '755' : d
			var e
			a: {
				if (a.publisher && a.publisher.restrictions) {
					var f = a.publisher.restrictions[b]
					if (void 0 !== f) {
						e = f[void 0 === d ? '755' : d]
						break a
					}
				}
				e = void 0
			}
			var g = e
			if (0 === g) return !1
			var k = c
			2 === c ? ((k = 0), 2 === g && (k = 1)) : 3 === c && ((k = 1), 1 === g && (k = 0))
			var m
			if (0 === k)
				if (a.purpose && a.vendor) {
					var n = qi(a.vendor.consents, void 0 === d ? '755' : d)
					m =
						n && '1' === b && a.purposeOneTreatment && 'CH' === a.publisherCC
							? !0
							: n && qi(a.purpose.consents, b)
				} else m = !0
			else
				m =
					1 === k
						? a.purpose && a.vendor
							? qi(a.purpose.legitimateInterests, b) &&
							  qi(a.vendor.legitimateInterests, void 0 === d ? '755' : d)
							: !0
						: !0
			return m
		},
		qi = function (a, b) {
			return !(!a || !a[b])
		},
		pi = function (a, b, c, d) {
			c || (c = function () {})
			if ('function' === typeof a.m.__tcfapi) {
				var e = a.m.__tcfapi
				e(b, 2, c, d)
			} else if (si(a)) {
				ti(a)
				var f = ++a.sb
				a.M[f] = c
				if (a.h) {
					var g = {}
					a.h.postMessage(
						((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }), g),
						'*',
					)
				}
			} else c({}, !1)
		},
		si = function (a) {
			if (a.h) return a.h
			var b
			a: {
				for (var c = a.m, d = 0; 50 > d; ++d) {
					var e
					try {
						e = !(!c.frames || !c.frames.__tcfapiLocator)
					} catch (k) {
						e = !1
					}
					if (e) {
						b = c
						break a
					}
					var f
					b: {
						try {
							var g = c.parent
							if (g && g != c) {
								f = g
								break b
							}
						} catch (k) {}
						f = null
					}
					if (!(c = f)) break
				}
				b = null
			}
			a.h = b
			return a.h
		},
		ti = function (a) {
			a.B ||
				((a.B = function (b) {
					try {
						var c
						c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn
						a.M[c.callId](c.returnValue, c.success)
					} catch (d) {}
				}),
				Xh(a.m, 'message', a.B))
		},
		ui = function (a) {
			if (!1 === a.gdprApplies) return !0
			void 0 === a.internalErrorState && (a.internalErrorState = ni(a))
			return 'error' === a.cmpStatus || 0 !== a.internalErrorState
				? a.internalBlockOnErrors
					? (li({ e: String(a.internalErrorState) }), !1)
					: !0
				: 'loaded' !== a.cmpStatus ||
				  ('tcloaded' !== a.eventStatus && 'useractioncomplete' !== a.eventStatus)
				? !1
				: !0
		}
	var vi = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
		wi = Wh('', 500)
	function xi() {
		var a = me.tcf || {}
		return (me.tcf = a)
	}
	var Bi = function () {
		var a = xi(),
			b = new oi(A, { Ck: -1 })
		if (
			!0 === A.gtag_enable_tcf_support &&
			!a.active &&
			('function' === typeof A.__tcfapi || 'function' === typeof b.m.__tcfapi || null != si(b))
		) {
			a.active = !0
			a.he = {}
			yi()
			a.tcString = 'tcunavailable'
			try {
				b.addEventListener(function (c) {
					if (0 !== c.internalErrorState) zi(a), Ai(a)
					else {
						var d
						a.gdprApplies = c.gdprApplies
						if (!1 === c.gdprApplies) {
							var e = {},
								f
							for (f in vi) vi.hasOwnProperty(f) && (e[f] = !0)
							d = e
							b.removeEventListener(c)
						} else if (
							'tcloaded' === c.eventStatus ||
							'useractioncomplete' === c.eventStatus ||
							'cmpuishown' === c.eventStatus
						) {
							var g = {},
								k
							for (k in vi)
								if (vi.hasOwnProperty(k))
									if ('1' === k) {
										var m,
											n = c,
											p = !0
										p = void 0 === p ? !1 : p
										m = ui(n)
											? !1 === n.gdprApplies ||
											  'tcunavailable' === n.tcString ||
											  (void 0 === n.gdprApplies && !p) ||
											  'string' !== typeof n.tcString ||
											  !n.tcString.length
												? !0
												: ri(n, '1', 0)
											: !1
										g['1'] = m
									} else g[k] = ri(c, k, vi[k])
							d = g
						}
						d && ((a.tcString = c.tcString || 'tcempty'), (a.he = d), Ai(a))
					}
				})
			} catch (c) {
				zi(a), Ai(a)
			}
		}
	}
	function zi(a) {
		a.type = 'e'
		a.tcString = 'tcunavailable'
	}
	function yi() {
		var a = {},
			b = ((a.ad_storage = 'denied'), (a.wait_for_update = wi), a)
		dg(b)
	}
	function Ai(a) {
		var b = {},
			c = ((b.ad_storage = a.he['1'] ? 'granted' : 'denied'), b)
		eg(c, { eventId: 0 }, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Ci() })
	}
	var Ci = function () {
			var a = xi()
			return a.active ? a.tcString || '' : ''
		},
		Di = function () {
			var a = xi()
			return a.active && void 0 !== a.gdprApplies ? (a.gdprApplies ? '1' : '0') : ''
		},
		Ei = function (a) {
			if (!vi.hasOwnProperty(String(a))) return !0
			var b = xi()
			return b.active && b.he ? !!b.he[String(a)] : !0
		}
	var Fi = function (a) {
		var b = String(a[Qb.Na] || '').replace(/_/g, '')
		0 === b.indexOf('cvt') && (b = 'cvt')
		return b
	}
	var Gi = ['L', 'S', 'Y'],
		Hi = ['S', 'E'],
		Ii = { sampleRate: '0.005000', Wh: '', Vh: Number('5'), Uh: Number('') },
		Ji =
			0 <= D.location.search.indexOf('?gtm_latency=') ||
			0 <= D.location.search.indexOf('&gtm_latency='),
		Ki
	if (!(Ki = Ji)) {
		var Li = Math.random(),
			Mi = Ii.sampleRate
		Ki = Li < Mi
	}
	var Ni = Ki,
		Oi = 'https://www.googletagmanager.com/a?id=' + S.D + '&cv=1',
		Pi = { label: S.D + ' Container', children: [{ label: 'Initialization', children: [] }] }
	function Qi() {
		return [Oi, '&v=3&t=t', '&pid=' + ta(), '&rv=' + le.Wb].join('')
	}
	var Ri = Qi()
	function Si() {
		Ri = Qi()
	}
	var Ti = {},
		Ui = '',
		Vi = '',
		Wi = '',
		Xi = '',
		Yi = [],
		Zi = '',
		$i = {},
		aj = !1,
		bj = {},
		cj = {},
		dj = {},
		ej = '',
		fj = void 0,
		gj = {},
		hj = {},
		ij = void 0,
		jj = 5
	0 < Ii.Vh && (jj = Ii.Vh)
	var kj = (function (a, b) {
			for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0)
			return {
				Nj: function () {
					return c < a ? !1 : Fa() - d[c % a] < b
				},
				mk: function () {
					var f = c++ % a
					d[f] = Fa()
				},
			}
		})(jj, 1e3),
		lj = 1e3,
		mj = ''
	function nj(a) {
		var b = fj
		if (void 0 === b) return ''
		var c = $a('GTM'),
			d = $a('TAGGING'),
			e = $a('HEALTH'),
			f = Ri,
			g = Ti[b] ? '' : '&es=1',
			k = gj[b],
			m = Fj(b),
			n = Gj(),
			p = Ui,
			q = Vi,
			t = ej,
			u = Hj(a),
			r = Wi,
			v = Xi,
			w
		return [
			f,
			g,
			k,
			m,
			c ? '&u=' + c : '',
			d ? '&ut=' + d : '',
			e ? '&h=' + e : '',
			n,
			p,
			q,
			t,
			u,
			r,
			v,
			w,
			Zi ? '&dl=' + encodeURIComponent(Zi) : '',
			0 < Yi.length ? '&tdp=' + Yi.join('.') : '',
			le.Mc ? '&x=' + le.Mc : '',
			'&z=0',
		].join('')
	}
	function Jj() {
		ij && (A.clearTimeout(ij), (ij = void 0))
		if (void 0 !== fj && (!Ti[fj] || Ui || Vi))
			if (hj[fj] || kj.Nj() || 0 >= lj--) J(1), (hj[fj] = !0)
			else {
				kj.mk()
				var a = nj(!0)
				Ab(a)
				if (Xi || (Zi && 0 < Yi.length)) {
					var b = a.replace('/a?', '/td?')
					Ab(b)
				}
				Ti[fj] = !0
				Zi = Xi = Wi = ej = Vi = Ui = ''
				Yi = []
			}
	}
	function Kj() {
		ij || (ij = A.setTimeout(Jj, 500))
	}
	function Lj(a) {
		return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : '*'
	}
	function Mj() {
		2022 <= nj().length && Jj()
	}
	function Gj() {
		return (
			'&tc=' +
			qc.filter(function (a) {
				return a
			}).length
		)
	}
	var Oj = function (a, b) {
			if (Ni && !hj[a] && fj !== a) {
				Jj()
				fj = a
				Wi = Ui = ''
				gj[a] = '&e=' + Lj(b) + '&eid=' + a
				Kj()
			}
		},
		Pj = function (a, b, c, d) {
			if (Ni && b) {
				var e = Fi(b),
					f = c + e
				if (!hj[a]) {
					a !== fj && (Jj(), (fj = a))
					Ui = Ui ? Ui + '.' + f : '&tr=' + f
					var g = b['function']
					if (!g) throw Error('Error: No function name given for function call.')
					var k = (sc[g] ? '1' : '2') + e
					Wi = Wi ? Wi + '.' + k : '&ti=' + k
					Kj()
					Mj()
				}
			}
		},
		Qj = function (a, b, c) {
			if (Ni && a && a[Qb.ob]) {
				var d = b + '.' + a[Qb.ob]
				dj[d] = c
				'html' == Fi(a) && mj == d && (Ui += ':' + Math.floor(c))
			}
		}
	function Hj(a) {}
	function Fj(a) {}
	var Xj = function (a, b, c) {
			if (Ni && void 0 !== a && !hj[a]) {
				a !== fj && (Jj(), (fj = a))
				var d = c + b
				Vi = Vi ? Vi + '.' + d : '&epr=' + d
				Kj()
				Mj()
			}
		},
		Yj = function (a, b, c) {},
		Ij = void 0
	ib()
	Yh() || hb('iPod')
	hb('iPad')
	!hb('Android') || jb() || ib() || hb('Opera') || hb('Silk')
	jb()
	!hb('Safari') ||
		jb() ||
		hb('Coast') ||
		hb('Opera') ||
		hb('Edge') ||
		hb('Edg/') ||
		hb('OPR') ||
		ib() ||
		hb('Silk') ||
		hb('Android') ||
		Zh()
	var Zj = {},
		ak = null,
		bk = function (a) {
			for (var b = [], c = 0, d = 0; d < a.length; d++) {
				var e = a.charCodeAt(d)
				255 < e && ((b[c++] = e & 255), (e >>= 8))
				b[c++] = e
			}
			var f = 4
			void 0 === f && (f = 0)
			if (!ak) {
				ak = {}
				for (
					var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''),
						k = ['+/=', '+/', '-_=', '-_.', '-_'],
						m = 0;
					5 > m;
					m++
				) {
					var n = g.concat(k[m].split(''))
					Zj[m] = n
					for (var p = 0; p < n.length; p++) {
						var q = n[p]
						void 0 === ak[q] && (ak[q] = p)
					}
				}
			}
			for (
				var t = Zj[f], u = Array(Math.floor(b.length / 3)), r = t[64] || '', v = 0, w = 0;
				v < b.length - 2;
				v += 3
			) {
				var y = b[v],
					x = b[v + 1],
					B = b[v + 2],
					z = t[y >> 2],
					C = t[((y & 3) << 4) | (x >> 4)],
					H = t[((x & 15) << 2) | (B >> 6)],
					I = t[B & 63]
				u[w++] = '' + z + C + H + I
			}
			var E = 0,
				K = r
			switch (b.length - v) {
				case 2:
					;(E = b[v + 1]), (K = t[(E & 15) << 2] || r)
				case 1:
					var M = b[v]
					u[w] = '' + t[M >> 2] + t[((M & 3) << 4) | (E >> 4)] + K + r
			}
			return u.join('')
		}
	var ck =
		'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
			' ',
		)
	function dk() {
		var a
		return null != (a = A.google_tag_data) ? a : (A.google_tag_data = {})
	}
	function ek() {
		var a = A.google_tag_data,
			b
		if (null != a && a.uach) {
			var c = a.uach,
				d = Object.assign({}, c)
			c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0))
			b = d
		} else b = null
		return b
	}
	function fk() {
		var a, b
		return null != (b = null == (a = A.google_tag_data) ? void 0 : a.uach_promise) ? b : null
	}
	function gk() {
		var a, b
		return (
			'function' ===
			typeof (null == (a = A.navigator)
				? void 0
				: null == (b = a.userAgentData)
				? void 0
				: b.getHighEntropyValues)
		)
	}
	function hk() {
		if (!gk()) return null
		var a = dk()
		if (a.uach_promise) return a.uach_promise
		var b = A.navigator.userAgentData.getHighEntropyValues(ck).then(function (c) {
			null != a.uach || (a.uach = c)
			return c
		})
		return (a.uach_promise = b)
	}
	var nk = function (a) {
		for (
			var b = [],
				c = D.cookie.split(';'),
				d = new RegExp('^\\s*' + (a || '_gac') + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$'),
				e = 0;
			e < c.length;
			e++
		) {
			var f = c[e].match(d)
			f && b.push({ Jf: f[1], value: f[2], timestamp: Number(f[2].split('.')[1]) || 0 })
		}
		b.sort(function (g, k) {
			return k.timestamp - g.timestamp
		})
		return b
	}
	function ok(a, b) {
		var c = nk(a),
			d = {}
		if (!c || !c.length) return d
		for (var e = 0; e < c.length; e++) {
			var f = c[e].value.split('.')
			if (!('1' !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) && Number(f[1])) {
				d[c[e].Jf] || (d[c[e].Jf] = [])
				var g = { version: f[0], timestamp: 1e3 * Number(f[1]), aa: f[2] }
				b && 3 < f.length && (g.labels = f.slice(3))
				d[c[e].Jf].push(g)
			}
		}
		return d
	}
	var pk = /^\w+$/,
		qk = /^[\w-]+$/,
		rk = { aw: '_aw', dc: '_dc', gf: '_gf', ha: '_ha', gp: '_gp', gb: '_gb' },
		sk = function () {
			if (!If().h() || !Uf()) return !0
			var a = Rf('ad_storage')
			return null == a ? !0 : !!a
		},
		tk = function (a, b) {
			Tf('ad_storage')
				? sk()
					? a()
					: Zf(a, 'ad_storage')
				: b
				? Ya('TAGGING', 3)
				: Yf(
						function () {
							tk(a, !0)
						},
						['ad_storage'],
				  )
		},
		vk = function (a) {
			return uk(a).map(function (b) {
				return b.aa
			})
		},
		uk = function (a) {
			var b = []
			if (!ng(A) || !D.cookie) return b
			var c = qg(a, D.cookie, void 0, 'ad_storage')
			if (!c || 0 == c.length) return b
			for (var d = {}, e = 0; e < c.length; d = { hd: d.hd }, e++) {
				var f = wk(c[e])
				if (null != f) {
					var g = f,
						k = g.version
					d.hd = g.aa
					var m = g.timestamp,
						n = g.labels,
						p = sa(
							b,
							(function (q) {
								return function (t) {
									return t.aa === q.hd
								}
							})(d),
						)
					p
						? ((p.timestamp = Math.max(p.timestamp, m)), (p.labels = xk(p.labels, n || [])))
						: b.push({ version: k, aa: d.hd, timestamp: m, labels: n })
				}
			}
			b.sort(function (q, t) {
				return t.timestamp - q.timestamp
			})
			return yk(b)
		}
	function xk(a, b) {
		for (var c = {}, d = [], e = 0; e < a.length; e++) (c[a[e]] = !0), d.push(a[e])
		for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f])
		return d
	}
	function zk(a) {
		return a && 'string' == typeof a && a.match(pk) ? a : '_gcl'
	}
	var Bk = function () {
			var a = cd(A.location.href),
				b = ad(a, 'query', !1, void 0, 'gclid'),
				c = ad(a, 'query', !1, void 0, 'gclsrc'),
				d = ad(a, 'query', !1, void 0, 'wbraid'),
				e = ad(a, 'query', !1, void 0, 'dclid')
			if (!b || !c || !d) {
				var f = a.hash.replace('#', '')
				b = b || Yc(f, 'gclid')
				c = c || Yc(f, 'gclsrc')
				d = d || Yc(f, 'wbraid')
			}
			return Ak(b, c, e, d)
		},
		Ak = function (a, b, c, d) {
			var e = {},
				f = function (g, k) {
					e[k] || (e[k] = [])
					e[k].push(g)
				}
			e.gclid = a
			e.gclsrc = b
			e.dclid = c
			void 0 !== d && qk.test(d) && ((e.gbraid = d), f(d, 'gb'))
			if (void 0 !== a && a.match(qk))
				switch (b) {
					case void 0:
						f(a, 'aw')
						break
					case 'aw.ds':
						f(a, 'aw')
						f(a, 'dc')
						break
					case 'ds':
						f(a, 'dc')
						break
					case '3p.ds':
						f(a, 'dc')
						break
					case 'gf':
						f(a, 'gf')
						break
					case 'ha':
						f(a, 'ha')
				}
			c && f(c, 'dc')
			return e
		},
		Dk = function (a) {
			var b = Bk()
			tk(function () {
				Ck(b, !1, a)
			})
		}
	function Ck(a, b, c, d, e) {
		function f(w, y) {
			var x = Ek(w, g)
			x && (Gg(x, y, k), (m = !0))
		}
		c = c || {}
		e = e || []
		var g = zk(c.prefix)
		d = d || Fa()
		var k = Pg(c, d, !0)
		k.Ya = 'ad_storage'
		var m = !1,
			n = Math.round(d / 1e3),
			p = function (w) {
				var y = ['GCL', n, w]
				0 < e.length && y.push(e.join('.'))
				return y.join('.')
			}
		a.aw && f('aw', p(a.aw[0]))
		a.dc && f('dc', p(a.dc[0]))
		a.gf && f('gf', p(a.gf[0]))
		a.ha && f('ha', p(a.ha[0]))
		a.gp && f('gp', p(a.gp[0]))
		if (!m && a.gb) {
			var q = a.gb[0],
				t = Ek('gb', g),
				u = !1
			if (!b)
				for (var r = uk(t), v = 0; v < r.length; v++)
					r[v].aa === q && r[v].labels && 0 < r[v].labels.length && (u = !0)
			u || f('gb', p(q))
		}
	}
	var Gk = function (a, b) {
			var c = hh(!0)
			tk(function () {
				for (var d = zk(b.prefix), e = 0; e < a.length; ++e) {
					var f = a[e]
					if (void 0 !== rk[f]) {
						var g = Ek(f, d),
							k = c[g]
						if (k) {
							var m = Math.min(Fk(k), Fa()),
								n
							b: {
								var p = m
								if (ng(A))
									for (var q = qg(g, D.cookie, void 0, 'ad_storage'), t = 0; t < q.length; ++t)
										if (Fk(q[t]) > p) {
											n = !0
											break b
										}
								n = !1
							}
							if (!n) {
								var u = Pg(b, m, !0)
								u.Ya = 'ad_storage'
								Gg(g, k, u)
							}
						}
					}
				}
				Ck(Ak(c.gclid, c.gclsrc), !1, b)
			})
		},
		Ek = function (a, b) {
			var c = rk[a]
			if (void 0 !== c) return b + c
		},
		Fk = function (a) {
			return 0 !== Hk(a.split('.')).length ? 1e3 * (Number(a.split('.')[1]) || 0) : 0
		}
	function wk(a) {
		var b = Hk(a.split('.'))
		return 0 === b.length
			? null
			: { version: b[0], aa: b[2], timestamp: 1e3 * (Number(b[1]) || 0), labels: b.slice(3) }
	}
	function Hk(a) {
		return 3 > a.length || ('GCL' !== a[0] && '1' !== a[0]) || !/^\d+$/.test(a[1]) || !qk.test(a[2])
			? []
			: a
	}
	var Ik = function (a, b, c, d, e) {
			if (ra(b) && ng(A)) {
				var f = zk(e),
					g = function () {
						for (var k = {}, m = 0; m < a.length; ++m) {
							var n = Ek(a[m], f)
							if (n) {
								var p = qg(n, D.cookie, void 0, 'ad_storage')
								p.length && (k[n] = p.sort()[p.length - 1])
							}
						}
						return k
					}
				tk(function () {
					nh(g, b, c, d)
				})
			}
		},
		yk = function (a) {
			return a.filter(function (b) {
				return qk.test(b.aa)
			})
		},
		Jk = function (a, b) {
			if (ng(A)) {
				for (var c = zk(b.prefix), d = {}, e = 0; e < a.length; e++)
					rk[a[e]] && (d[a[e]] = rk[a[e]])
				tk(function () {
					l(d, function (f, g) {
						var k = qg(c + g, D.cookie, void 0, 'ad_storage')
						k.sort(function (u, r) {
							return Fk(r) - Fk(u)
						})
						if (k.length) {
							var m = k[0],
								n = Fk(m),
								p = 0 !== Hk(m.split('.')).length ? m.split('.').slice(3) : [],
								q = {},
								t
							t = 0 !== Hk(m.split('.')).length ? m.split('.')[2] : void 0
							q[f] = [t]
							Ck(q, !0, b, n, p)
						}
					})
				})
			}
		}
	function Kk(a, b) {
		for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0
		return !1
	}
	var Lk = function (a) {
			function b(e, f, g) {
				g && (e[f] = g)
			}
			if (Uf()) {
				var c = Bk()
				if (Kk(c, a)) {
					var d = {}
					b(d, 'gclid', c.gclid)
					b(d, 'dclid', c.dclid)
					b(d, 'gclsrc', c.gclsrc)
					b(d, 'wbraid', c.gbraid)
					oh(function () {
						return d
					}, 3)
					oh(function () {
						var e = {}
						return (e._up = '1'), e
					}, 1)
				}
			}
		},
		Mk = function (a, b, c, d) {
			var e = []
			c = c || {}
			if (!sk()) return e
			var f = uk(a)
			if (!f.length) return e
			for (var g = 0; g < f.length; g++)
				-1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1)
			if (d) return e
			if (1 !== e[0]) {
				var k = f[0],
					m = f[0].timestamp,
					n = [k.version, Math.round(m / 1e3), k.aa].concat(k.labels || [], [b]).join('.'),
					p = Pg(c, m, !0)
				p.Ya = 'ad_storage'
				Gg(a, n, p)
			}
			return e
		}
	function Nk(a, b) {
		var c = zk(b),
			d = Ek(a, c)
		if (!d) return 0
		for (var e = uk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp)
		return f
	}
	function Ok(a) {
		var b = 0,
			c
		for (c in a)
			for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp))
		return b
	}
	var Pk = function (a) {
		var b = Math.max(Nk('aw', a), Ok(sk() ? ok() : {}))
		return Math.max(Nk('gb', a), Ok(sk() ? ok('_gac_gb', !0) : {})) > b
	}
	var Uk = /[A-Z]+/,
		Vk = /\s/,
		Wk = function (a) {
			if (h(a)) {
				a = Da(a)
				var b = a.indexOf('-')
				if (!(0 > b)) {
					var c = a.substring(0, b)
					if (Uk.test(c)) {
						for (var d = a.substring(b + 1).split('/'), e = 0; e < d.length; e++)
							if (!d[e] || (Vk.test(d[e]) && ('AW' !== c || 1 !== e))) return
						return { id: a, prefix: c, T: c + '-' + d[0], K: d }
					}
				}
			}
		},
		Yk = function (a) {
			for (var b = {}, c = 0; c < a.length; ++c) {
				var d = Wk(a[c])
				d && (b[d.id] = d)
			}
			Xk(b)
			var e = []
			l(b, function (f, g) {
				e.push(g)
			})
			return e
		}
	function Xk(a) {
		var b = [],
			c
		for (c in a)
			if (a.hasOwnProperty(c)) {
				var d = a[c]
				'AW' === d.prefix && d.K[1] && b.push(d.T)
			}
		for (var e = 0; e < b.length; ++e) delete a[b[e]]
	}
	var Zk = function (a, b, c, d) {
		var e = yb(),
			f
		if (1 === e)
			a: {
				var g = Ae
				g = g.toLowerCase()
				for (
					var k = 'https://' + g,
						m = 'http://' + g,
						n = 1,
						p = D.getElementsByTagName('script'),
						q = 0;
					q < p.length && 100 > q;
					q++
				) {
					var t = p[q].src
					if (t) {
						t = t.toLowerCase()
						if (0 === t.indexOf(m)) {
							f = 3
							break a
						}
						1 === n && 0 === t.indexOf(k) && (n = 2)
					}
				}
				f = n
			}
		else f = e
		return (2 === f || d || 'http:' != A.location.protocol ? a : b) + c
	}
	var kl = function (a, b, c) {
			this.target = a
			this.eventName = b
			this.h = c
			this.m = {}
			this.metadata = G(c.eventMetadata || {})
			this.J = !1
		},
		ll = function (a, b, c) {
			var d = P(a.h, b)
			void 0 !== d ? (a.m[b] = d) : void 0 !== c && (a.m[b] = c)
		},
		ml = function (a, b, c) {
			var d = Ve(a.target.T)
			return d && d.hasOwnProperty(b) ? d[b] : c
		}
	function nl(a) {
		return {
			getDestinationId: function () {
				return a.target.T
			},
			getEventName: function () {
				return a.eventName
			},
			setEventName: function (b) {
				return void (a.eventName = b)
			},
			getHitData: function (b) {
				return a.m[b]
			},
			setHitData: function (b, c) {
				return void (a.m[b] = c)
			},
			setHitDataIfNotDefined: function (b, c) {
				void 0 === a.m[b] && (a.m[b] = c)
			},
			copyToHitData: function (b, c) {
				ll(a, b, c)
			},
			getMetadata: function (b) {
				return a.metadata[b]
			},
			setMetadata: function (b, c) {
				return void (a.metadata[b] = c)
			},
			abort: function () {
				return void (a.J = !0)
			},
			getProcessedEvent: function () {
				return a
			},
			getFromEventContext: function (b) {
				return P(a.h, b)
			},
		}
	}
	var El = function (a, b, c, d, e, f, g, k, m, n, p, q) {
			this.eventId = a
			this.priorityId = b
			this.h = c
			this.M = d
			this.m = e
			this.I = f
			this.V = g
			this.B = k
			this.eventMetadata = m
			this.R = n
			this.P = p
			this.F = q
		},
		P = function (a, b, c) {
			if (void 0 !== a.h[b]) return a.h[b]
			if (void 0 !== a.M[b]) return a.M[b]
			if (void 0 !== a.m[b]) return a.m[b]
			Ni && Fl(a, a.I[b], a.V[b]) && (J(71), J(79))
			return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.B[b] ? a.B[b] : c
		},
		Gl = function (a) {
			function b(g) {
				for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1
			}
			var c = {}
			b(a.h)
			b(a.M)
			b(a.m)
			b(a.I)
			if (Ni)
				for (var d = Object.keys(a.V), e = 0; e < d.length; e++) {
					var f = d[e]
					if ('event' !== f && 'gtm' !== f && 'tagTypeBlacklist' !== f && !c.hasOwnProperty(f)) {
						J(71)
						J(80)
						break
					}
				}
			return Object.keys(c)
		},
		Hl = function (a, b, c) {
			function d(m) {
				Ob(m) &&
					l(m, function (n, p) {
						f = !0
						e[n] = p
					})
			}
			var e = {},
				f = !1
			;(c && 1 !== c) || (d(a.B[b]), d(a.I[b]), d(a.m[b]), d(a.M[b]))
			;(c && 2 !== c) || d(a.h[b])
			if (Ni) {
				var g = f,
					k = e
				e = {}
				f = !1
				;(c && 1 !== c) || (d(a.B[b]), d(a.V[b]), d(a.m[b]), d(a.M[b]))
				;(c && 2 !== c) || d(a.h[b])
				if (f !== g || Fl(a, e, k)) J(71), J(81)
				f = g
				e = k
			}
			return f ? e : void 0
		},
		Il = function (a) {
			var b = [N.g.uc, N.g.vd, N.g.wd, N.g.xd, N.g.yd, N.g.zd, N.g.Ad],
				c = {},
				d = !1,
				e = function (k) {
					for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && ((c[b[m]] = k[b[m]]), (d = !0))
					return d
				}
			if (e(a.h) || e(a.M) || e(a.m)) return c
			e(a.I)
			if (Ni) {
				var f = c,
					g = d
				c = {}
				d = !1
				e(a.V)
				Fl(a, c, f) && (J(71), J(82))
				c = f
				d = g
			}
			if (d) return c
			e(a.B)
			return c
		},
		Fl = function (a, b, c) {
			if (!Ni) return !1
			try {
				if (b === c) return !1
				var d = Mb(b)
				if (d !== Mb(c) || !((Ob(b) && Ob(c)) || 'array' === d)) return !0
				if ('array' === d) {
					if (b.length !== c.length) return !0
					for (var e = 0; e < b.length; e++) if (Fl(a, b[e], c[e])) return !0
				} else {
					for (var f in c) if (!b.hasOwnProperty(f)) return !0
					for (var g in b) if (!c.hasOwnProperty(g) || Fl(a, b[g], c[g])) return !0
				}
			} catch (k) {
				J(72)
			}
			return !1
		},
		Jl = function (a, b) {
			this.Mi = a
			this.Ni = b
			this.I = {}
			this.Sg = {}
			this.h = {}
			this.M = {}
			this.m = {}
			this.Kc = {}
			this.B = {}
			this.kc = function () {}
			this.sb = function () {}
			this.V = !1
		},
		Kl = function (a, b) {
			a.I = b
			return a
		},
		Ll = function (a, b) {
			a.Sg = b
			return a
		},
		Ml = function (a, b) {
			a.h = b
			return a
		},
		Nl = function (a, b) {
			a.M = b
			return a
		},
		Ol = function (a, b) {
			a.m = b
			return a
		},
		Pl = function (a, b) {
			a.Kc = b
			return a
		},
		Ql = function (a, b) {
			a.B = b || {}
			return a
		},
		Rl = function (a, b) {
			a.kc = b
			return a
		},
		Sl = function (a, b) {
			a.sb = b
			return a
		},
		Tl = function (a) {
			a.V = !0
			return a
		},
		Ul = function (a) {
			return new El(a.Mi, a.Ni, a.I, a.Sg, a.h, a.M, a.m, a.Kc, a.B, a.kc, a.sb, a.V)
		}
	function Zl() {
		return 'attribution-reporting'
	}
	function $l(a) {
		var b
		b = void 0 === b ? document : b
		var c
		return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
	}
	var am = !1
	function bm() {
		if ($l('join-ad-interest-group') && pa(qb.joinAdInterestGroup)) return !0
		am ||
			(gi(
				'A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9',
			),
			(am = !0))
		return $l('join-ad-interest-group') && pa(qb.joinAdInterestGroup)
	}
	function cm(a, b) {
		var c = void 0
		try {
			c = D.querySelector('iframe[data-tagging-id="' + b + '"]')
		} catch (e) {}
		if (c) {
			var d = Number(c.dataset.loadTime)
			if (d && 6e4 > Fa() - d) {
				Ya('TAGGING', 9)
				return
			}
		} else
			try {
				if (
					50 <=
					D.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length
				) {
					Ya('TAGGING', 10)
					return
				}
			} catch (e) {}
		zb(a, void 0, { allow: 'join-ad-interest-group' }, { taggingId: b, loadTime: Fa() }, c)
	}
	function dm() {
		return R(60) ? 'https://td.doubleclick.net' : 'https://googleads.g.doubleclick.net'
	}
	var em = RegExp(
			'^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$',
		),
		fm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
		gm = /^\d+\.fls\.doubleclick\.net$/,
		hm = /;gac=([^;?]+)/,
		im = /;gacgb=([^;?]+)/,
		jm = /;gclaw=([^;?]+)/,
		km = /;gclgb=([^;?]+)/
	function lm(a, b) {
		if (gm.test(D.location.host)) {
			var c = D.location.href.match(b)
			return c && 2 == c.length && c[1].match(em) ? decodeURIComponent(c[1]) : ''
		}
		var d = [],
			e
		for (e in a) {
			for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].aa)
			d.push(e + ':' + f.join(','))
		}
		return 0 < d.length ? d.join(';') : ''
	}
	var mm = function (a, b, c) {
		var d = sk() ? ok('_gac_gb', !0) : {},
			e = [],
			f = !1,
			g
		for (g in d) {
			var k = Mk('_gac_gb_' + g, a, b, c)
			f =
				f ||
				(0 !== k.length &&
					k.some(function (m) {
						return 1 === m
					}))
			e.push(g + ':' + k.join(','))
		}
		return { zj: f ? e.join(';') : '', yj: lm(d, im) }
	}
	function nm(a, b, c) {
		if (gm.test(D.location.host)) {
			var d = D.location.href.match(c)
			if (d && 2 == d.length && d[1].match(fm)) return [{ aa: d[1] }]
		} else return uk((a || '_gcl') + b)
		return []
	}
	var om = function (a) {
			return nm(a, '_aw', jm)
				.map(function (b) {
					return b.aa
				})
				.join('.')
		},
		pm = function (a) {
			return nm(a, '_gb', km)
				.map(function (b) {
					return b.aa
				})
				.join('.')
		},
		qm = function (a, b) {
			var c = Mk(((b && b.prefix) || '_gcl') + '_gb', a, b)
			return 0 === c.length ||
				c.every(function (d) {
					return 0 === d
				})
				? ''
				: c.join('.')
		}
	var rm = function () {
		if (pa(A.__uspapi)) {
			var a = ''
			try {
				A.__uspapi('getUSPData', 1, function (b, c) {
					if (c && b) {
						var d = b.uspString
						d && RegExp('^[\\da-zA-Z-]{1,20}$').test(d) && (a = d)
					}
				})
			} catch (b) {}
			return a
		}
	}
	var bn = {
		C: {
			Lf: 'ads_conversion_hit',
			te: 'container_execute_start',
			Qf: 'container_setup_end',
			ue: 'container_setup_start',
			Pf: 'container_execute_end',
			Rf: 'container_yield_end',
			ve: 'container_yield_start',
			Pg: 'event_execute_end',
			Qg: 'event_setup_end',
			Jc: 'event_setup_start',
			Rg: 'ga4_conversion_hit',
			Vb: 'page_load',
			Mk: 'pageview',
			nb: 'snippet_load',
			eh: 'tag_callback_error',
			fh: 'tag_callback_failure',
			gh: 'tag_callback_success',
			hh: 'tag_execute_end',
			Xb: 'tag_execute_start',
		},
	}
	var cn = !1,
		dn = 'L S Y E TC HTC'.split(' '),
		en = ['S', 'E'],
		fn = ['TS', 'TE']
	var Dn = function (a, b, c, d, e, f) {
			var g = {}
			return g
		},
		En = function (a) {
			var b = !1
			return b
		},
		Fn = function (a, b) {},
		Gn = function () {
			var a = {}
			return a
		},
		wn = function () {
			var a = {}
			return a
		},
		Hn = function () {},
		In = function (a, b, c) {},
		Jn = function (a) {
			Kb() && Kb().mark(S.D + '_' + a + '_start')
		},
		Kn = function (a) {
			if (Kb()) {
				var b = Kb(),
					c = S.D + '_' + a + '_start',
					d = S.D + '_' + a + '_duration'
				b.measure(d, c)
				var e = Kb().getEntriesByName(d)[0]
				b.clearMarks(c)
				b.clearMeasures(d)
				var f = me._p || {}
				void 0 === f[a] && ((f[a] = e.duration), (me._p = f))
				return e.duration
			}
		},
		Ln = function () {
			var a = Dn('PAGEVIEW')
			if (on(a.Va, 'mark')[0]) {
				var b = Kb()
				b.clearMarks(a.Va)
				b.clearMeasures('GTM-' + bn.C.Vb + ':to:PAGEVIEW')
			}
			var c = Dn(bn.C.Vb)
			En(a) && Fn(a, c)
		}
	var Mn = function (a, b) {
		var c,
			d = A.GooglebQhCsO
		d || ((d = {}), (A.GooglebQhCsO = d))
		c = d
		if (c[a]) return !1
		c[a] = []
		c[a][0] = b
		return !0
	}
	var Nn = function (a, b) {
		var c = ci(a, 'fmt')
		if (b) {
			var d = ci(a, 'random'),
				e = ci(a, 'label') || ''
			if (!d) return !1
			var f = bk(
				decodeURIComponent(e.replace(/\+/g, ' ')) + ':' + decodeURIComponent(d.replace(/\+/g, ' ')),
			)
			if (!Mn(f, b)) return !1
		}
		c && 4 != c && (a = ei(a, 'rfmt', c))
		var g = ei(a, 'fmt', 4)
		xb(
			g,
			function () {
				A.google_noFurtherRedirects && b && b.call && ((A.google_noFurtherRedirects = null), b())
			},
			void 0,
			void 0,
			D.getElementsByTagName('script')[0].parentElement || void 0,
		)
		return !0
	}
	var co = function () {
			this.h = {}
		},
		eo = function (a, b, c) {
			null != c && (a.h[b] = c)
		},
		fo = function (a) {
			return Object.keys(a.h)
				.map(function (b) {
					return encodeURIComponent(b) + '=' + encodeURIComponent(a.h[b])
				})
				.join('&')
		},
		ho = function (a, b, c, d) {}
	function jo(a, b) {
		if (a) {
			var c = '' + a
			0 !== c.indexOf('http://') && 0 !== c.indexOf('https://') && (c = 'https://' + c)
			'/' === c[c.length - 1] && (c = c.substring(0, c.length - 1))
			return cd('' + c + b).href
		}
	}
	function ko() {
		return !!le.Vd && 'SGTM_TOKEN' !== le.Vd.split('@@').join('')
	}
	var mo = function (a, b, c, d) {
			if (!lo() && !Qh(a)) {
				var e = c ? '/gtag/js' : '/gtm.js',
					f = '?id=' + encodeURIComponent(a) + '&l=' + le.ca,
					g = 0 === a.indexOf('GTM-')
				g || (f += '&cx=c')
				var k = ko()
				k && (f += '&sign=' + le.Vd)
				var m = ue || we ? jo(b, e + f) : void 0
				if (!m) {
					var n = le.nd + e
					k && rb && g && (n = rb.replace(/^(?:https?:\/\/)?/i, '').split(/[?#]/)[0])
					m = Zk('https://', 'http://', n + f)
				}
				Oh().container[a] = { state: 1, context: d }
				xb(m)
			}
		},
		no = function (a, b, c) {
			var d
			if ((d = !lo())) {
				var e = Oh().destination[a]
				d = !(e && e.state)
			}
			if (d)
				if (Rh()) (Oh().destination[a] = { state: 0, transportUrl: b, context: c }), J(91)
				else {
					var f = '/gtag/destination?id=' + encodeURIComponent(a) + '&l=' + le.ca + '&cx=c'
					ko() && (f += '&sign=' + le.Vd)
					var g = ue || we ? jo(b, f) : void 0
					g || (g = Zk('https://', 'http://', le.nd + f))
					Oh().destination[a] = { state: 1, context: c }
					xb(g)
				}
		}
	function lo() {
		if (Jh()) {
			return !0
		}
		return !1
	}
	var oo = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
		po = {
			cl: ['ecl'],
			customPixels: ['nonGooglePixels'],
			ecl: ['cl'],
			ehl: ['hl'],
			hl: ['ehl'],
			html: [
				'customScripts',
				'customPixels',
				'nonGooglePixels',
				'nonGoogleScripts',
				'nonGoogleIframes',
			],
			customScripts: [
				'html',
				'customPixels',
				'nonGooglePixels',
				'nonGoogleScripts',
				'nonGoogleIframes',
			],
			nonGooglePixels: [],
			nonGoogleScripts: ['nonGooglePixels'],
			nonGoogleIframes: ['nonGooglePixels'],
		},
		qo = {
			cl: ['ecl'],
			customPixels: ['customScripts', 'html'],
			ecl: ['cl'],
			ehl: ['hl'],
			hl: ['ehl'],
			html: ['customScripts'],
			customScripts: ['html'],
			nonGooglePixels: [
				'customPixels',
				'customScripts',
				'html',
				'nonGoogleScripts',
				'nonGoogleIframes',
			],
			nonGoogleScripts: ['customScripts', 'html'],
			nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts'],
		},
		ro =
			'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
				' ',
			),
		uo = function (a) {
			var b = Me('gtm.allowlist') || Me('gtm.whitelist')
			b && J(9)
			se && (b = ['google', 'gtagfl', 'lcl', 'zone'])
			so() &&
				(se ? J(116) : J(117),
				to &&
					((b = []),
					window.console &&
						window.console.log &&
						window.console.log('GTM blocked. See go/13687728.')))
			var c = b && Ka(Ca(b), po),
				d = Me('gtm.blocklist') || Me('gtm.blacklist')
			d || ((d = Me('tagTypeBlacklist')) && J(3))
			d ? J(8) : (d = [])
			so() && ((d = Ca(d)), d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'))
			0 <= Ca(d).indexOf('google') && J(2)
			var e = d && Ka(Ca(d), qo),
				f = {}
			return function (g) {
				var k = g && g[Qb.Na]
				if (!k || 'string' != typeof k) return !0
				k = k.replace(/^_*/, '')
				if (void 0 !== f[k]) return f[k]
				var m = Ee[k] || [],
					n = a(k, m)
				if (b) {
					var p
					if ((p = n))
						a: {
							if (0 > c.indexOf(k))
								if (m && 0 < m.length)
									for (var q = 0; q < m.length; q++) {
										if (0 > c.indexOf(m[q])) {
											J(11)
											p = !1
											break a
										}
									}
								else {
									p = !1
									break a
								}
							p = !0
						}
					n = p
				}
				var t = !1
				if (d) {
					var u = 0 <= e.indexOf(k)
					if (u) t = u
					else {
						var r = va(e, m || [])
						r && J(10)
						t = r
					}
				}
				var v = !n || t
				v ||
					!(0 <= m.indexOf('sandboxedScripts')) ||
					(c && -1 !== c.indexOf('sandboxedScripts')) ||
					(v = va(e, ro))
				return (f[k] = v)
			}
		},
		to = !1
	var so = function () {
		return oo.test(A.location && A.location.hostname)
	}
	var vo = { initialized: 11, complete: 12, interactive: 13 },
		wo = {},
		xo = Object.freeze(((wo[N.g.Fa] = !0), wo)),
		yo =
			0 <= D.location.search.indexOf('?gtm_diagnostics=') ||
			0 <= D.location.search.indexOf('&gtm_diagnostics='),
		Ao = function (a, b, c) {
			if (Ni && 'config' === a && !(1 < Wk(b).K.length)) {
				var d,
					e = sb('google_tag_data', {})
				e.td || (e.td = {})
				d = e.td
				var f = G(c.I)
				G(c.h, f)
				var g = [],
					k
				for (k in d) {
					var m = zo(d[k], f)
					m.length && (yo && console.log(m), g.push(k))
				}
				if (g.length) {
					if (g.length) {
						var n = b + '*' + g.join('.')
						Xi = Xi ? Xi + '!' + n : '&tdc=' + n
					}
					Ya('TAGGING', vo[D.readyState] || 14)
				}
				d[b] = f
			}
		}
	function Bo(a, b) {
		var c = {},
			d
		for (d in b) b.hasOwnProperty(d) && (c[d] = !0)
		for (var e in a) a.hasOwnProperty(e) && (c[e] = !0)
		return c
	}
	function zo(a, b, c, d) {
		c = void 0 === c ? {} : c
		d = void 0 === d ? '' : d
		if (a === b) return []
		var e = function (q, t) {
				var u = t[q]
				return void 0 === u ? xo[q] : u
			},
			f
		for (f in Bo(a, b)) {
			var g = (d ? d + '.' : '') + f,
				k = e(f, a),
				m = e(f, b),
				n = 'object' === Mb(k) || 'array' === Mb(k),
				p = 'object' === Mb(m) || 'array' === Mb(m)
			if (n && p) zo(k, m, c, g)
			else if (n || p || k !== m) c[g] = !0
		}
		return Object.keys(c)
	}
	var Co = !1,
		Do = 0,
		Eo = []
	function Fo(a) {
		if (!Co) {
			var b = D.createEventObject,
				c = 'complete' == D.readyState,
				d = 'interactive' == D.readyState
			if (!a || 'readystatechange' != a.type || c || (!b && d)) {
				Co = !0
				for (var e = 0; e < Eo.length; e++) F(Eo[e])
			}
			Eo.push = function () {
				for (var f = 0; f < arguments.length; f++) F(arguments[f])
				return 0
			}
		}
	}
	function Go() {
		if (!Co && 140 > Do) {
			Do++
			try {
				D.documentElement.doScroll('left'), Fo()
			} catch (a) {
				A.setTimeout(Go, 50)
			}
		}
	}
	var Ho = function (a) {
		Co ? a() : Eo.push(a)
	}
	var Io = function (a, b) {
		return {
			entityType: 1,
			indexInOriginContainer: a,
			nameInOriginContainer: b,
			originContainerId: S.D,
		}
	}
	var Ko = function (a, b) {
			this.h = !1
			this.I = []
			this.M = { tags: [] }
			this.V = !1
			this.m = this.B = 0
			Jo(this, a, b)
		},
		Lo = function (a, b, c, d) {
			if (pe.hasOwnProperty(b) || '__zone' === b) return -1
			var e = {}
			Ob(d) && (e = G(d, e))
			e.id = c
			e.status = 'timeout'
			return a.M.tags.push(e) - 1
		},
		Mo = function (a, b, c, d) {
			var e = a.M.tags[b]
			e && ((e.status = c), (e.executionTime = d))
		},
		No = function (a) {
			if (!a.h) {
				for (var b = a.I, c = 0; c < b.length; c++) b[c]()
				a.h = !0
				a.I.length = 0
			}
		},
		Jo = function (a, b, c) {
			void 0 !== b && Oo(a, b)
			c &&
				A.setTimeout(function () {
					return No(a)
				}, Number(c))
		},
		Oo = function (a, b) {
			var c = Ha(function () {
				return F(function () {
					b(S.D, a.M)
				})
			})
			a.h ? c() : a.I.push(c)
		},
		Po = function (a) {
			a.B++
			return Ha(function () {
				a.m++
				a.V && a.m >= a.B && No(a)
			})
		},
		Qo = function (a) {
			a.V = !0
			a.m >= a.B && No(a)
		}
	var Ro = {},
		So = function () {
			return A.GoogleAnalyticsObject && A[A.GoogleAnalyticsObject]
		},
		To = !1
	function Wo() {
		return A.GoogleAnalyticsObject || 'ga'
	}
	var Xo = function (a) {},
		Yo = function (a, b) {
			return function () {
				var c = So(),
					d = c && c.getByName && c.getByName(a)
				if (d) {
					var e = d.get('sendHitTask')
					d.set('sendHitTask', function (f) {
						var g = f.get('hitPayload'),
							k = f.get('hitCallback'),
							m = 0 > g.indexOf('&tid=' + b)
						m &&
							(f.set('hitPayload', g.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b), !0),
							f.set('hitCallback', void 0, !0))
						e(f)
						m &&
							(f.set('hitPayload', g, !0),
							f.set('hitCallback', k, !0),
							f.set('_x_19', void 0, !0),
							e(f))
					})
				}
			}
		}
	function Fp(a, b, c, d) {
		var e = qc[a],
			f = Gp(a, b, c, d)
		if (!f) return null
		var g = zc(e[Qb.dh], c, [])
		if (g && g.length) {
			var k = g[0]
			f = Fp(k.index, { R: f, P: 1 === k.th ? b.terminate : f, terminate: b.terminate }, c, d)
		}
		return f
	}
	function Gp(a, b, c, d) {
		function e() {
			if (f[Qb.Si]) k()
			else {
				var w = Ac(f, c, []),
					y = w[Qb.ai]
				if (null != y)
					for (var x = 0; x < y.length; x++)
						if (!fg(y[x])) {
							k()
							return
						}
				var B = Lo(c.Cb, String(f[Qb.Na]), Number(f[Qb.ob]), w[Qb.Ti]),
					z = !1
				w.vtp_gtmOnSuccess = function () {
					if (!z) {
						z = !0
						var E = Fa() - I
						Pj(c.id, qc[a], '5', E)
						Mo(c.Cb, B, 'success', E)
						R(70) && In(c, f, bn.C.gh)
						g()
					}
				}
				w.vtp_gtmOnFailure = function () {
					if (!z) {
						z = !0
						var E = Fa() - I
						Pj(c.id, qc[a], '6', E)
						Mo(c.Cb, B, 'failure', E)
						R(70) && In(c, f, bn.C.fh)
						k()
					}
				}
				w.vtp_gtmTagId = f.tag_id
				w.vtp_gtmEventId = c.id
				c.priorityId && (w.vtp_gtmPriorityId = c.priorityId)
				Pj(c.id, f, '1')
				var C = function () {
					var E = Fa() - I
					Pj(c.id, f, '7', E)
					Mo(c.Cb, B, 'exception', E)
					R(70) && In(c, f, bn.C.eh)
					z || ((z = !0), k())
				}
				if (R(70)) {
					var H = Dn(bn.C.Xb, S.D, c.id, Number(f[Qb.ob]), c.name, Fi(f))
					En(H)
				}
				var I = Fa()
				try {
					yc(w, { event: c, index: a, type: 1 })
				} catch (E) {
					C(E)
				}
				R(70) && In(c, f, bn.C.hh)
			}
		}
		var f = qc[a],
			g = b.R,
			k = b.P,
			m = b.terminate
		if (c.tf(f)) return null
		var n = zc(f[Qb.ih], c, [])
		if (n && n.length) {
			var p = n[0],
				q = Fp(p.index, { R: g, P: k, terminate: m }, c, d)
			if (!q) return null
			g = q
			k = 2 === p.th ? m : q
		}
		if (f[Qb.Yg] || f[Qb.Vi]) {
			var t = f[Qb.Yg] ? rc : c.Ak,
				u = g,
				r = k
			if (!t[a]) {
				e = Ha(e)
				var v = Hp(a, t, e)
				g = v.R
				k = v.P
			}
			return function () {
				t[a](u, r)
			}
		}
		return e
	}
	function Hp(a, b, c) {
		var d = [],
			e = []
		b[a] = Ip(d, e, c)
		return {
			R: function () {
				b[a] = Jp
				for (var f = 0; f < d.length; f++) d[f]()
			},
			P: function () {
				b[a] = Kp
				for (var f = 0; f < e.length; f++) e[f]()
			},
		}
	}
	function Ip(a, b, c) {
		return function (d, e) {
			a.push(d)
			b.push(e)
			c()
		}
	}
	function Jp(a) {
		a()
	}
	function Kp(a, b) {
		b()
	}
	var Mp = function (a, b) {
			return 1 === arguments.length ? Lp('config', a) : Lp('config', a, b)
		},
		Np = function (a, b, c) {
			c = c || {}
			c[N.g.Bb] = a
			return Lp('event', b, c)
		}
	function Lp(a) {
		return arguments
	}
	var Op = function () {
		this.h = []
		this.m = []
	}
	Op.prototype.enqueue = function (a, b, c) {
		var d = this.h.length + 1
		a['gtm.uniqueEventId'] = b
		a['gtm.priorityId'] = d
		c.eventId = b
		c.fromContainerExecution = !0
		c.priorityId = d
		var e = { message: a, notBeforeEventId: b, priorityId: d, messageContext: c }
		this.h.push(e)
		for (var f = 0; f < this.m.length; f++)
			try {
				this.m[f](e)
			} catch (g) {}
	}
	Op.prototype.listen = function (a) {
		this.m.push(a)
	}
	Op.prototype.get = function () {
		for (var a = {}, b = 0; b < this.h.length; b++) {
			var c = this.h[b],
				d = a[c.notBeforeEventId]
			d || ((d = []), (a[c.notBeforeEventId] = d))
			d.push(c)
		}
		return a
	}
	Op.prototype.prune = function (a) {
		for (var b = [], c = [], d = 0; d < this.h.length; d++) {
			var e = this.h[d]
			e.notBeforeEventId === a ? b.push(e) : c.push(e)
		}
		this.h = c
		return b
	}
	var Qp = function (a, b, c) {
			Pp().enqueue(a, b, c)
		},
		Sp = function () {
			var a = Rp
			Pp().listen(a)
		}
	function Pp() {
		var a = me.mb
		a || ((a = new Op()), (me.mb = a))
		return a
	}
	var $p = function (a) {
			var b = me.zones
			return b
				? b.getIsAllowedFn(Lh(), a)
				: function () {
						return !0
				  }
		},
		aq = function (a) {
			var b = me.zones
			return b ? b.isActive(Lh(), a) : !0
		}
	var dq = function (a, b) {
		for (var c = [], d = 0; d < qc.length; d++)
			if (a[d]) {
				var e = qc[d]
				var f = Po(b.Cb)
				try {
					var g = Fp(d, { R: f, P: f, terminate: f }, b, d)
					if (g) {
						var k = c,
							m = k.push,
							n = d,
							p = e['function']
						if (!p) throw 'Error: No function name given for function call.'
						var q = sc[p]
						m.call(k, { Oh: n, Gh: q ? q.priorityOverride || 0 : 0, execute: g })
					} else bq(d, b), f()
				} catch (u) {
					f()
				}
			}
		c.sort(cq)
		for (var t = 0; t < c.length; t++) c[t].execute()
		return 0 < c.length
	}
	function cq(a, b) {
		var c,
			d = b.Gh,
			e = a.Gh
		c = d > e ? 1 : d < e ? -1 : 0
		var f
		if (0 !== c) f = c
		else {
			var g = a.Oh,
				k = b.Oh
			f = g > k ? 1 : g < k ? -1 : 0
		}
		return f
	}
	function bq(a, b) {
		if (Ni) {
			var c = function (d) {
				var e = b.tf(qc[d]) ? '3' : '4',
					f = zc(qc[d][Qb.dh], b, [])
				f && f.length && c(f[0].index)
				Pj(b.id, qc[d], e)
				var g = zc(qc[d][Qb.ih], b, [])
				g && g.length && c(g[0].index)
			}
			c(a)
		}
	}
	var gq = !1,
		eq
	var lq = function (a) {
		var b = Fa(),
			c = a['gtm.uniqueEventId'],
			d = a['gtm.priorityId'],
			e = a.event
		if (R(70)) {
			var f = Dn(bn.C.Jc, S.D, c, void 0, e)
			En(f)
		}
		if ('gtm.js' === e) {
			if (gq) return !1
			gq = !0
		}
		var m,
			n = !1
		if (aq(c)) m = $p(c)
		else {
			if ('gtm.js' !== e && 'gtm.init' !== e && 'gtm.init_consent' !== e) return !1
			n = !0
			m = $p(Number.MAX_SAFE_INTEGER)
		}
		Oj(c, e)
		var p = a.eventCallback,
			q = a.eventTimeout,
			t = {
				id: c,
				priorityId: d,
				name: e,
				tf: uo(m),
				Ak: [],
				Ah: function () {
					J(6)
					Ya('HEALTH', 0)
				},
				mh: hq(),
				nh: iq(c),
				Cb: new Ko(function () {
					if (R(70)) {
						var x = Dn(bn.C.Pg, S.D, c, void 0, e)
						if (En(x)) {
							var B = Dn(bn.C.Jc, S.D, c, void 0, e)
							Fn(x, B)
						}
						if ('gtm.load' === e) {
							var z = Dn(bn.C.Pf, S.D)
							if (En(z)) {
								var C = Dn(bn.C.te, S.D)
								Fn(z, C)
							}
							Hn()
						}
					}
					p && p.apply(p, [].slice.call(arguments, 0))
				}, q),
			},
			u = Ec(t)
		n && (u = jq(u))
		if (R(70)) {
			var r = Dn(bn.C.Qg, S.D, c, void 0, e)
			if (En(r)) {
				var v = Dn(bn.C.Jc, S.D, c, void 0, e)
				Fn(r, v)
			}
		}
		var w = dq(u, t),
			y = !1
		Qo(t.Cb)
		;('gtm.js' !== e && 'gtm.sync' !== e) || Xo(S.D)
		return kq(u, w) || y
	}
	function iq(a) {
		return function (b) {
			Ni && (Pb(b) || Yj(a, 'input', b))
		}
	}
	function hq() {
		var a = {}
		a.event = Qe('event', 1)
		a.ecommerce = Qe('ecommerce', 1)
		a.gtm = Qe('gtm')
		a.eventModel = Qe('eventModel')
		return a
	}
	function jq(a) {
		for (var b = [], c = 0; c < a.length; c++)
			if (a[c]) {
				var d = String(qc[c][Qb.Na])
				if (oe[d] || void 0 !== qc[c][Qb.Wi] || Fe[d]) b[c] = !0
				R(58) ||
					(0 !== qc[c][Qb.Na].indexOf('__ccd') &&
						0 !== qc[c][Qb.Na].indexOf('__ogt') &&
						'__set_product_settings' !== qc[c][Qb.Na]) ||
					(b[c] = !0)
			}
		return b
	}
	function kq(a, b) {
		if (!b) return b
		for (var c = 0; c < a.length; c++) if (a[c] && qc[c] && !pe[String(qc[c][Qb.Na])]) return !0
		return !1
	}
	var nq = function (a, b, c, d) {
			mq.push('event', [b, a], c, d)
		},
		oq = function (a, b, c, d) {
			mq.push('get', [a, b], c, d)
		},
		pq = function () {
			this.status = 1
			this.I = {}
			this.h = {}
			this.M = {}
			this.V = null
			this.B = {}
			this.m = !1
		},
		qq = function (a, b, c, d) {
			var e = Fa()
			this.type = a
			this.m = e
			this.W = b || ''
			this.h = c
			this.messageContext = d
		},
		rq = function () {
			this.m = {}
			this.B = {}
			this.h = []
		},
		sq = function (a, b) {
			var c = Wk(b)
			return (a.m[c.T] = a.m[c.T] || new pq())
		},
		tq = function (a, b, c, d) {
			if (d.W) {
				var e = sq(a, d.W),
					f = e.V
				if (f) {
					var g = G(c),
						k = G(e.I[d.W]),
						m = G(e.B),
						n = G(e.h),
						p = G(a.B),
						q = {}
					if (Ni)
						try {
							q = G(Je)
						} catch (v) {
							J(72)
						}
					var t = Wk(d.W).prefix,
						u = function (v) {
							Xj(d.messageContext.eventId, t, v)
							var w = g[N.g.Ob]
							w && F(w)
						},
						r = Ul(
							Sl(
								Rl(
									Ql(
										Ol(
											Nl(
												Pl(
													Ml(
														Ll(
															Kl(new Jl(d.messageContext.eventId, d.messageContext.priorityId), g),
															k,
														),
														m,
													),
													n,
												),
												p,
											),
											q,
										),
										d.messageContext.eventMetadata,
									),
									function () {
										if (u) {
											var v = u
											u = void 0
											v('2')
										}
									},
								),
								function () {
									if (u) {
										var v = u
										u = void 0
										v('3')
									}
								},
							),
						)
					try {
						Xj(d.messageContext.eventId, t, '1'), Ao(d.type, d.W, r), f(d.W, b, d.m, r)
					} catch (v) {
						Xj(d.messageContext.eventId, t, '4')
					}
				}
			}
		}
	rq.prototype.register = function (a, b, c) {
		var d = sq(this, a)
		3 !== d.status && ((d.V = b), (d.status = 3), c && (G(d.h, c), (d.h = c)), this.flush())
	}
	rq.prototype.push = function (a, b, c, d) {
		if (void 0 !== c) {
			if (!Wk(c)) return
			if (c) {
				var e = Wk(c)
				e &&
					1 === sq(this, c).status &&
					((sq(this, c).status = 2), this.push('require', [{}], e.T, {}))
			}
			sq(this, c).m && (d.deferrable = !1)
		}
		this.h.push(new qq(a, c, b, d))
		d.deferrable || this.flush()
	}
	rq.prototype.flush = function (a) {
		for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
			var f = this.h[0]
			if (f.messageContext.deferrable)
				!f.W || sq(this, f.W).m ? ((f.messageContext.deferrable = !1), this.h.push(f)) : c.push(f),
					this.h.shift()
			else {
				var g = void 0
				switch (f.type) {
					case 'require':
						g = sq(this, f.W)
						if (3 !== g.status && !a) {
							this.h.push.apply(this.h, c)
							return
						}
						break
					case 'set':
						l(f.h[0], function (t, u) {
							G(La(t, u), b.B)
						})
						break
					case 'config':
						g = sq(this, f.W)
						e.ab = {}
						l(
							f.h[0],
							(function (t) {
								return function (u, r) {
									G(La(u, r), t.ab)
								}
							})(e),
						)
						var k = !!e.ab[N.g.Ic]
						delete e.ab[N.g.Ic]
						var m = Wk(f.W),
							n = m.T === m.id
						k || (n ? (g.B = {}) : (g.I[f.W] = {}))
						;(g.m && k) || tq(this, N.g.xa, e.ab, f)
						g.m = !0
						n ? G(e.ab, g.B) : (G(e.ab, g.I[f.W]), J(70))
						d = !0
						break
					case 'event':
						g = sq(this, f.W)
						e.gd = {}
						l(
							f.h[0],
							(function (t) {
								return function (u, r) {
									G(La(u, r), t.gd)
								}
							})(e),
						)
						tq(this, f.h[1], e.gd, f)
						break
					case 'get':
						g = sq(this, f.W)
						var p = {},
							q = ((p[N.g.Ta] = f.h[0]), (p[N.g.jb] = f.h[1]), p)
						tq(this, N.g.Ca, q, f)
				}
				this.h.shift()
				uq(this, f)
			}
			e = { ab: e.ab, gd: e.gd }
		}
		this.h.push.apply(this.h, c)
		d && this.flush()
	}
	var uq = function (a, b) {
			if ('require' !== b.type)
				if (b.W) for (var c = sq(a, b.W).M[b.type] || [], d = 0; d < c.length; d++) c[d]()
				else
					for (var e in a.m)
						if (a.m.hasOwnProperty(e)) {
							var f = a.m[e]
							if (f && f.M) for (var g = f.M[b.type] || [], k = 0; k < g.length; k++) g[k]()
						}
		},
		vq = function (a, b) {
			var c = mq,
				d = G(b)
			G(sq(c, a).h, d)
			sq(c, a).h = d
		},
		mq = new rq()
	var wq = {},
		xq = {},
		yq = function (a) {
			for (var b = [], c = [], d = {}, e = 0; e < a.length; d = { md: d.md, jd: d.jd }, e++) {
				var f = a[e]
				if (0 <= f.indexOf('-'))
					(d.md = Wk(f)),
						d.md &&
							(sa(
								Mh(),
								(function (p) {
									return function (q) {
										return p.md.T === q
									}
								})(d),
							)
								? b.push(f)
								: c.push(f))
				else {
					var g = wq[f] || []
					d.jd = {}
					g.forEach(
						(function (p) {
							return function (q) {
								return (p.jd[q] = !0)
							}
						})(d),
					)
					for (var k = Lh(), m = 0; m < k.length; m++)
						if (d.jd[k[m]]) {
							b = b.concat(Mh())
							break
						}
					var n = xq[f] || []
					n.length && (b = b.concat(n))
				}
			}
			return { Wj: b, Yj: c }
		},
		zq = function (a) {
			l(wq, function (b, c) {
				var d = c.indexOf(a)
				0 <= d && c.splice(d, 1)
			})
		},
		Aq = function (a) {
			l(xq, function (b, c) {
				var d = c.indexOf(a)
				0 <= d && c.splice(d, 1)
			})
		}
	var Bq = 'HA GF G UA AW DC MC'.split(' '),
		Cq = !1,
		Dq = !1
	function Eq(a, b) {
		a.hasOwnProperty('gtm.uniqueEventId') ||
			Object.defineProperty(a, 'gtm.uniqueEventId', { value: Ge() })
		b.eventId = a['gtm.uniqueEventId']
		b.priorityId = a['gtm.priorityId']
		return { eventId: b.eventId, priorityId: b.priorityId }
	}
	var Fq = {
			config: function (a, b) {
				var c = Eq(a, b)
				if (!(2 > a.length) && h(a[1])) {
					var d = {}
					if (2 < a.length) {
						if ((void 0 != a[2] && !Ob(a[2])) || 3 < a.length) return
						d = a[2]
					}
					var e = Wk(a[1])
					if (e) {
						Oj(c.eventId, 'gtag.config')
						var f = e.T,
							g = e.id !== f
						if (g ? -1 === Mh().indexOf(f) : -1 === Lh().indexOf(f)) {
							if (!R(61) || !d[N.g.Md]) {
								var k = d[N.g.ma] || mq.B[N.g.ma]
								g
									? no(f, k, { source: 2, fromContainerExecution: b.fromContainerExecution })
									: mo(f, k, !0, { source: 2, fromContainerExecution: b.fromContainerExecution })
							}
						} else {
							if (re && !g && !d[N.g.Ic]) {
								var m = Dq
								Dq = !0
								if (m) return
							}
							Cq || J(43)
							if (!b.noTargetGroup)
								if (g) {
									Aq(e.id)
									var n = e.id,
										p = d[N.g.Kd] || 'default'
									p = String(p).split(',')
									for (var q = 0; q < p.length; q++) {
										var t = xq[p[q]] || []
										xq[p[q]] = t
										0 > t.indexOf(n) && t.push(n)
									}
								} else {
									zq(e.id)
									var u = e.id,
										r = d[N.g.Kd] || 'default'
									r = r.toString().split(',')
									for (var v = 0; v < r.length; v++) {
										var w = wq[r[v]] || []
										wq[r[v]] = w
										0 > w.indexOf(u) && w.push(u)
									}
								}
							delete d[N.g.Kd]
							var y = b.eventMetadata || {}
							y.hasOwnProperty('is_external_event') ||
								(y.is_external_event = !b.fromContainerExecution)
							b.eventMetadata = y
							delete d[N.g.Ob]
							for (var x = g ? [e.id] : Mh(), B = 0; B < x.length; B++) {
								var z = G(b)
								mq.push('config', [d], x[B], z)
							}
						}
					}
				}
			},
			consent: function (a, b) {
				if (3 === a.length) {
					J(39)
					var c = Eq(a, b),
						d = a[1]
					'default' === d ? dg(a[2]) : 'update' === d && eg(a[2], c)
				}
			},
			event: function (a, b) {
				var c = a[1]
				if (!(2 > a.length) && h(c)) {
					var d
					if (2 < a.length) {
						if ((!Ob(a[2]) && void 0 != a[2]) || 3 < a.length) return
						d = a[2]
					}
					var e = d,
						f = {},
						g = ((f.event = c), f)
					e &&
						((g.eventModel = G(e)),
						e[N.g.Ob] && (g.eventCallback = e[N.g.Ob]),
						e[N.g.Gd] && (g.eventTimeout = e[N.g.Gd]))
					var k = Eq(a, b),
						m = k.eventId,
						n = k.priorityId
					g['gtm.uniqueEventId'] = m
					n && (g['gtm.priorityId'] = n)
					if ('optimize.callback' === c) return (g.eventModel = g.eventModel || {}), g
					var p
					var q = d,
						t = q && q[N.g.Bb]
					void 0 === t && ((t = Me(N.g.Bb, 2)), void 0 === t && (t = 'default'))
					if (h(t) || ra(t)) {
						var u = t.toString().replace(/\s+/g, '').split(','),
							r = yq(u),
							v = r.Wj,
							w = r.Yj
						if (w.length)
							for (var y = (q && q[N.g.ma]) || mq.B[N.g.ma], x = 0; x < w.length; x++) {
								var B = Wk(w[x])
								B && no(B.T, y, { source: 3, fromContainerExecution: b.fromContainerExecution })
							}
						p = Yk(v)
					} else p = void 0
					var z = p
					if (z) {
						Oj(m, c)
						for (var C = [], H = 0; H < z.length; H++) {
							var I = z[H],
								E = G(b)
							if (-1 !== Bq.indexOf(I.prefix)) {
								var K = G(d),
									M = E.eventMetadata || {}
								M.hasOwnProperty('is_external_event') ||
									(M.is_external_event = !E.fromContainerExecution)
								E.eventMetadata = M
								delete K[N.g.Ob]
								nq(c, K, I.id, E)
							}
							C.push(I.id)
						}
						g.eventModel = g.eventModel || {}
						0 < z.length ? (g.eventModel[N.g.Bb] = C.join()) : delete g.eventModel[N.g.Bb]
						Cq || J(43)
						return b.noGtmEvent ? void 0 : g
					}
				}
			},
			get: function (a, b) {
				J(53)
				if (4 === a.length && h(a[1]) && h(a[2]) && pa(a[3])) {
					var c = Wk(a[1]),
						d = String(a[2]),
						e = a[3]
					if (c) {
						Cq || J(43)
						var f = mq.B[N.g.ma]
						if (
							!sa(Mh(), function (k) {
								return c.T === k
							})
						)
							no(c.T, f, { source: 4, fromContainerExecution: b.fromContainerExecution })
						else if (-1 !== Bq.indexOf(c.prefix)) {
							Eq(a, b)
							var g = {}
							$f(G(((g[N.g.Ta] = d), (g[N.g.jb] = e), g)))
							oq(
								d,
								function (k) {
									F(function () {
										return e(k)
									})
								},
								c.id,
								b,
							)
						}
					}
				}
			},
			js: function (a, b) {
				if (2 == a.length && a[1].getTime) {
					Cq = !0
					var c = Eq(a, b),
						d = c.eventId,
						e = c.priorityId,
						f = {}
					return (
						(f.event = 'gtm.js'),
						(f['gtm.start'] = a[1].getTime()),
						(f['gtm.uniqueEventId'] = d),
						(f['gtm.priorityId'] = e),
						f
					)
				}
			},
			policy: function () {},
			set: function (a, b) {
				var c
				2 == a.length && Ob(a[1])
					? (c = G(a[1]))
					: 3 == a.length &&
					  h(a[1]) &&
					  ((c = {}), Ob(a[2]) || ra(a[2]) ? (c[a[1]] = G(a[2])) : (c[a[1]] = a[2]))
				if (c) {
					var d = Eq(a, b),
						e = d.eventId,
						f = d.priorityId
					G(c)
					var g = G(c)
					mq.push('set', [g], void 0, b)
					c['gtm.uniqueEventId'] = e
					f && (c['gtm.priorityId'] = f)
					R(30) && delete c.event
					b.overwriteModelFields = !0
					return c
				}
			},
		},
		Gq = { policy: !0 }
	var Hq = function (a) {
			var b = A[le.ca].hide
			if (b && void 0 !== b[a] && b.end) {
				b[a] = !1
				var c = !0,
					d
				for (d in b)
					if (b.hasOwnProperty(d) && !0 === b[d]) {
						c = !1
						break
					}
				c && (b.end(), (b.end = null))
			}
		},
		Iq = function (a) {
			var b = A[le.ca],
				c = b && b.hide
			c && c.end && (c[a] = !0)
		}
	var Jq = !1,
		Kq = []
	function Lq() {
		if (!Jq) {
			Jq = !0
			for (var a = 0; a < Kq.length; a++) F(Kq[a])
		}
	}
	var Mq = function (a) {
		Jq ? F(a) : Kq.push(a)
	}
	var cr = function (a) {
		if (br(a)) return a
		this.h = a
	}
	cr.prototype.getUntrustedMessageValue = function () {
		return this.h
	}
	var br = function (a) {
		return !a || 'object' !== Mb(a) || Ob(a) ? !1 : 'getUntrustedMessageValue' in a
	}
	cr.prototype.getUntrustedMessageValue = cr.prototype.getUntrustedMessageValue
	var dr = 0,
		er = {},
		fr = [],
		gr = [],
		hr = !1,
		ir = !1
	function jr(a, b) {
		return (
			a.messageContext.eventId - b.messageContext.eventId ||
			a.messageContext.priorityId - b.messageContext.priorityId
		)
	}
	var kr = function (a) {
			return A[le.ca].push(a)
		},
		lr = function (a, b) {
			var c = me[le.ca],
				d = c ? c.subscribers : 1,
				e = 0,
				f = !1,
				g = void 0
			b &&
				(g = A.setTimeout(function () {
					f || ((f = !0), a())
					g = void 0
				}, b))
			return function () {
				++e === d && (g && (A.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)))
			}
		}
	function mr(a, b) {
		var c = a._clear || b.overwriteModelFields
		l(a, function (e, f) {
			'_clear' !== e && (c && Pe(e), Pe(e, f))
		})
		Be || (Be = a['gtm.start'])
		var d = a['gtm.uniqueEventId']
		if (!a.event) return !1
		'number' !== typeof d && ((d = Ge()), (a['gtm.uniqueEventId'] = d), Pe('gtm.uniqueEventId', d))
		return lq(a)
	}
	function nr(a) {
		if (null == a || 'object' !== typeof a) return !1
		if (a.event) return !0
		if (ya(a)) {
			var b = a[0]
			if ('config' === b || 'event' === b || 'js' === b || 'get' === b) return !0
		}
		return !1
	}
	function or() {
		var a
		if (gr.length) a = gr.shift()
		else if (fr.length) a = fr.shift()
		else return
		var b
		var c = a
		if (hr || !nr(c.message)) b = c
		else {
			hr = !0
			var d = c.message['gtm.uniqueEventId']
			'number' !== typeof d && (d = c.message['gtm.uniqueEventId'] = Ge())
			var e = {},
				f = {
					message: ((e.event = 'gtm.init_consent'), (e['gtm.uniqueEventId'] = d - 2), e),
					messageContext: { eventId: d - 2 },
				},
				g = {},
				k = {
					message: ((g.event = 'gtm.init'), (g['gtm.uniqueEventId'] = d - 1), g),
					messageContext: { eventId: d - 1 },
				}
			fr.unshift(k, c)
			if (Ni && S.D) {
				var m
				if (S.Ze) {
					var n = S.D,
						p = Oh().destination[n]
					m = p && p.context
				} else {
					var q = S.D,
						t = Oh().container[q]
					m = t && t.context
				}
				var u = m,
					r,
					v = cd(A.location.href)
				r = v.hostname + v.pathname
				var w = u && u.fromContainerExecution,
					y = u && u.source,
					x = S.D,
					B = S.Qa,
					z = S.Ze
				Zi || (Zi = r)
				Yi.push(x + ';' + B + ';' + (w ? 1 : 0) + ';' + (y || 0) + ';' + (z ? 1 : 0))
			}
			b = f
		}
		return b
	}
	function pr() {
		for (var a = !1, b; !ir && (b = or()); ) {
			ir = !0
			delete Je.eventModel
			Le()
			var c = b,
				d = c.message,
				e = c.messageContext
			if (null == d) ir = !1
			else {
				if (e.fromContainerExecution)
					for (
						var f = [
								'gtm.allowlist',
								'gtm.blocklist',
								'gtm.whitelist',
								'gtm.blacklist',
								'tagTypeBlacklist',
							],
							g = 0;
						g < f.length;
						g++
					) {
						var k = f[g],
							m = Me(k, 1)
						if (ra(m) || Ob(m)) m = G(m)
						Ke[k] = m
					}
				try {
					if (pa(d))
						try {
							d.call(Ne)
						} catch (C) {}
					else if (ra(d)) {
						var n = d
						if (h(n[0])) {
							var p = n[0].split('.'),
								q = p.pop(),
								t = n.slice(1),
								u = Me(p.join('.'), 2)
							if (null != u)
								try {
									u[q].apply(u, t)
								} catch (C) {}
						}
					} else {
						var r = void 0,
							v = !1
						if (ya(d)) {
							a: {
								if (d.length && h(d[0])) {
									var w = Fq[d[0]]
									if (w && (!e.fromContainerExecution || !Gq[d[0]])) {
										r = w(d, e)
										break a
									}
								}
								r = void 0
							}
							;(v = r && 'set' === d[0] && !!r.event) && J(101)
						} else r = d
						if (r) {
							var y = mr(r, e)
							a = y || a
							v && y && J(113)
						}
					}
				} finally {
					e.fromContainerExecution && Le(!0)
					var x = d['gtm.uniqueEventId']
					if ('number' === typeof x) {
						for (var B = er[String(x)] || [], z = 0; z < B.length; z++) gr.push(qr(B[z]))
						B.length && gr.sort(jr)
						delete er[String(x)]
						x > dr && (dr = x)
					}
					ir = !1
				}
			}
		}
		return !a
	}
	function rr() {
		if (R(70)) {
			var b = Dn(bn.C.te, S.D)
			En(b)
			if (sr()) {
				var c = Dn(bn.C.Rf, S.D)
				if (En(c)) {
					var d = Dn(bn.C.ve, S.D)
					Fn(c, d)
				}
			}
		}
		var e = pr()
		try {
			Hq(S.D)
		} catch (f) {}
		return e
	}
	function Rp(a) {
		if (dr < a.notBeforeEventId) {
			var b = String(a.notBeforeEventId)
			er[b] = er[b] || []
			er[b].push(a)
		} else
			gr.push(qr(a)),
				gr.sort(jr),
				F(function () {
					ir || pr()
				})
	}
	function qr(a) {
		return { message: a.message, messageContext: a.messageContext }
	}
	var tr = function () {
			function a(g) {
				var k = {}
				if (br(g)) {
					var m = g
					g = br(m) ? m.getUntrustedMessageValue() : void 0
					k.fromContainerExecution = !0
				}
				return { message: g, messageContext: k }
			}
			var b = sb(le.ca, []),
				c = (me[le.ca] = me[le.ca] || {})
			!0 === c.pruned && J(83)
			er = Pp().get()
			Sp()
			Ho(function () {
				if (!c.gtmDom) {
					c.gtmDom = !0
					var g = {}
					b.push(((g.event = 'gtm.dom'), g))
				}
			})
			Mq(function () {
				if (!c.gtmLoad) {
					c.gtmLoad = !0
					var g = {}
					b.push(((g.event = 'gtm.load'), g))
				}
			})
			c.subscribers = (c.subscribers || 0) + 1
			var d = b.push
			b.push = function () {
				var g
				if (0 < me.SANDBOXED_JS_SEMAPHORE) {
					g = []
					for (var k = 0; k < arguments.length; k++) g[k] = new cr(arguments[k])
				} else g = [].slice.call(arguments, 0)
				var m = g.map(function (t) {
					return a(t)
				})
				fr.push.apply(fr, m)
				var n = d.apply(b, g),
					p = Math.max(100, Number('1000') || 300)
				if (this.length > p) for (J(4), c.pruned = !0; this.length > p; ) this.shift()
				var q = 'boolean' !== typeof n || n
				return pr() && q
			}
			var e = b.slice(0).map(function (g) {
				return a(g)
			})
			fr.push.apply(fr, e)
			if (sr()) {
				if (R(70)) {
					var f = Dn(bn.C.ve, S.D)
					En(f)
				}
				F(rr)
			}
		},
		sr = function () {
			var a = !0
			return a
		}
	function ur(a) {
		if (null == a || 0 === a.length) return !1
		var b = Number(a),
			c = Fa()
		return b < c + 3e5 && b > c - 9e5
	}
	function vr(a) {
		return a && 0 === a.indexOf('pending:') ? ur(a.substr(8)) : !1
	}
	var vc = {}
	vc.Rd = new String('undefined')
	var Wr = A.clearTimeout,
		Xr = A.setTimeout,
		T = function (a, b, c, d) {
			if (Jh()) {
				b && F(b)
			} else return xb(a, b, c, d)
		},
		Yr = function () {
			return new Date()
		},
		Zr = function () {
			return A.location.href
		},
		$r = function (a) {
			return ad(cd(a), 'fragment')
		},
		as = function (a) {
			return bd(cd(a))
		},
		bs = function (a, b) {
			return Me(a, b || 2)
		},
		cs = function (a, b, c) {
			var d
			b ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = kr(a))) : (d = kr(a))
			return d
		},
		ds = function (a, b) {
			A[a] = b
		},
		W = function (a, b, c) {
			b && (void 0 === A[a] || (c && !A[a])) && (A[a] = b)
			return A[a]
		},
		es = function (a, b, c) {
			return qg(a, b, void 0 === c ? !0 : !!c)
		},
		fs = function (a, b, c) {
			return 0 === Gg(a, b, c)
		},
		gs = function (a, b) {
			if (Jh()) {
				b && F(b)
			} else zb(a, b)
		},
		hs = function (a) {
			return !!Cr(a, 'init', !1)
		},
		is = function (a) {
			Ar(a, 'init', !0)
		},
		js = function (a, b, c) {
			Ni && (Pb(a) || Yj(c, b, a))
		}
	function Hs(a) {
		return Is(a) ? 1 : 0
	}
	function Is(a) {
		var b = a.arg0,
			c = a.arg1
		if (a.any_of && Array.isArray(c)) {
			for (var d = 0; d < c.length; d++) {
				var e = G(a, {})
				G({ arg1: c[d], any_of: void 0 }, e)
				if (Hs(e)) return !0
			}
			return !1
		}
		switch (a['function']) {
			case '_cn':
				return 0 <= String(b).indexOf(String(c))
			case '_css':
				var f
				a: {
					if (b)
						try {
							for (var g = 0; g < fd.length; g++) {
								var k = fd[g]
								if (b[k]) {
									f = b[k](c)
									break a
								}
							}
						} catch (m) {}
					f = !1
				}
				return f
			case '_ew':
				return gd(b, c)
			case '_eq':
				return String(b) === String(c)
			case '_ge':
				return Number(b) >= Number(c)
			case '_gt':
				return Number(b) > Number(c)
			case '_lc':
				return 0 <= String(b).split(',').indexOf(String(c))
			case '_le':
				return Number(b) <= Number(c)
			case '_lt':
				return Number(b) < Number(c)
			case '_re':
				return ld(b, c, a.ignore_case)
			case '_sw':
				return 0 === String(b).indexOf(String(c))
			case '_um':
				return md(b, c)
		}
		return !1
	}
	Object.freeze({ dl: 1, id: 1 })
	Object.freeze(['config', 'event', 'get', 'set'])
	function et() {
		return (A.gaGlobal = A.gaGlobal || {})
	}
	var ft = function () {
			var a = et()
			a.hid = a.hid || ta()
			return a.hid
		},
		gt = function (a, b) {
			var c = et()
			if (void 0 == c.vid || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b)
		}
	var Ct = function () {
			var a = !0
			;(Ei(7) && Ei(9) && Ei(10)) || (a = !1)
			return a
		},
		Dt = function () {
			var a = !0
			;(Ei(3) && Ei(4)) || (a = !1)
			return a
		}
	var fu = window,
		gu = document,
		hu = function (a) {
			var b = fu._gaUserPrefs
			if ((b && b.ioo && b.ioo()) || (a && !0 === fu['ga-disable-' + a])) return !0
			try {
				var c = fu.external
				if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0
			} catch (f) {}
			for (var d = kg('AMP_TOKEN', String(gu.cookie), !0), e = 0; e < d.length; e++)
				if ('$OPT_OUT' == d[e]) return !0
			return gu.getElementById('__gaOptOutExtension') ? !0 : !1
		}
	function pu(a) {
		l(a, function (c) {
			'_' === c.charAt(0) && delete a[c]
		})
		var b = a[N.g.Ga] || {}
		l(b, function (c) {
			'_' === c.charAt(0) && delete b[c]
		})
	}
	var zu = function (a, b) {}
	function yu(a, b) {
		var c = function () {}
		return c
	}
	function Au(a, b, c) {}
	var Yv = yu
	var $v = encodeURI,
		X = encodeURIComponent,
		aw = function (a, b, c) {
			Ab(a, b, c)
		},
		bw = function (a, b) {
			if (!a) return !1
			var c = ad(cd(a), 'host')
			if (!c) return !1
			for (var d = 0; b && d < b.length; d++) {
				var e = b[d] && b[d].toLowerCase()
				if (e) {
					var f = c.length - e.length
					0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e))
					if (0 <= f && c.indexOf(e, f) == f) return !0
				}
			}
			return !1
		},
		cw = function (a, b, c) {
			for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
				a[f] &&
					a[f].hasOwnProperty(b) &&
					a[f].hasOwnProperty(c) &&
					((d[a[f][b]] = a[f][c]), (e = !0))
			return e ? d : null
		}
	var Z = { o: {} }
	;(Z.o.e = ['google']),
		(function () {
			;(function (a) {
				Z.__e = a
				Z.__e.s = 'e'
				Z.__e.isVendorTemplate = !0
				Z.__e.priorityOverride = 0
				Z.__e.isInfrastructure = !1
			})(function (a) {
				return String(a.vtp_gtmCachedValues.event)
			})
		})()
	;(Z.o.v = ['google']),
		(function () {
			;(function (a) {
				Z.__v = a
				Z.__v.s = 'v'
				Z.__v.isVendorTemplate = !0
				Z.__v.priorityOverride = 0
				Z.__v.isInfrastructure = !1
			})(function (a) {
				var b = a.vtp_name
				if (!b || !b.replace) return !1
				var c = bs(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1),
					d = void 0 !== c ? c : a.vtp_defaultValue
				js(d, 'v', a.vtp_gtmEventId)
				return d
			})
		})()
	;(Z.o.get = ['google']),
		(function () {
			;(function (a) {
				Z.__get = a
				Z.__get.s = 'get'
				Z.__get.isVendorTemplate = !0
				Z.__get.priorityOverride = 0
				Z.__get.isInfrastructure = !1
			})(function (a) {
				var b = a.vtp_settings,
					c = b.eventParameters || {},
					d = String(a.vtp_eventName),
					e = {}
				e.eventId = a.vtp_gtmEventId
				e.priorityId = a.vtp_gtmPriorityId
				a.vtp_deferrable && (e.deferrable = !0)
				var f = Np(String(b.streamId), d, c)
				Qp(f, e.eventId, e)
				a.vtp_gtmOnSuccess()
			})
		})()

	var ux = {}
	ux.dataLayer = Ne
	ux.callback = function (a) {
		De.hasOwnProperty(a) && pa(De[a]) && De[a]()
		delete De[a]
	}
	ux.bootstrap = 0
	ux._spx = !1
	function vx() {
		me[S.D] = me[S.D] || ux
		S.Qa && (me['ctid_' + S.Qa] = ux)
		Ph()
		Rh() ||
			l(Sh(), function (a, b) {
				no(a, b.transportUrl, b.context)
				J(92)
			})
		Ia(Ee, Z.o)
		xc = Fc
	}
	;(function (a) {
		function b() {
			m = D.documentElement.getAttribute('data-tag-assistant-present')
			ur(m) && (k = g.Ki)
		}
		if (!A['__TAGGY_INSTALLED']) {
			var c = !1
			if (D.referrer) {
				var d = cd(D.referrer)
				c = 'cct.google' === $c(d, 'host')
			}
			if (!c) {
				var e = qg('googTaggyReferrer')
				c = e.length && e[0].length
			}
			c && ((A['__TAGGY_INSTALLED'] = !0), xb('https://cct.google/taggy/agent.js'))
		}
		if (ye) a()
		else {
			var f = function (r) {
					var v = 'GTM',
						w = 'GTM'
					se ? ((v = 'OGT'), (w = 'GTAG')) : ye && (w = v = 'OPT')
					var y = A['google.tagmanager.debugui2.queue']
					y ||
						((y = []),
						(A['google.tagmanager.debugui2.queue'] = y),
						xb(
							'https://' +
								le.nd +
								'/debug/bootstrap?id=' +
								S.D +
								'&src=' +
								w +
								'&cond=' +
								r +
								'&gtm=' +
								Vh(),
						))
					var x = {
						messageType: 'CONTAINER_STARTING',
						data: { scriptSource: rb, containerProduct: v, debug: !1, id: S.D, isGte: re },
					}
					x.data.resume = function () {
						a()
					}
					le.bi && (x.data.initialPublish = !0)
					y.push(x)
				},
				g = { Jk: 1, Li: 2, Xi: 3, di: 4, Ki: 5 },
				k = void 0,
				m = void 0,
				n = ad(A.location, 'query', !1, void 0, 'gtm_debug')
			ur(n) && (k = g.Li)
			if (!k && D.referrer) {
				var p = cd(D.referrer)
				'tagassistant.google.com' === $c(p, 'host') && (k = g.Xi)
			}
			if (!k) {
				var q = qg('__TAG_ASSISTANT')
				q.length && q[0].length && (k = g.di)
			}
			k || b()
			if (!k && vr(m)) {
				var t = function () {
						if (u) return !0
						u = !0
						b()
						k && rb ? f(k) : a()
					},
					u = !1
				Bb(
					D,
					'TADebugSignal',
					function () {
						t()
					},
					!1,
				)
				A.setTimeout(function () {
					t()
				}, 200)
			} else k && rb ? f(k) : a()
		}
	})(function () {
		var a = !1
		a && Jn('INIT')
		if (R(70)) {
			var b = Dn(bn.C.ue, S.D)
			En(b)
		}
		If().m()
		Bi()
		if (S.Qa ? me['ctid_' + S.Qa] : me[S.D]) {
			var c = me.zones
			c && c.unregisterChild(Lh())
		} else {
			for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) nc.push(e[f])
			for (var g = d.tags || [], k = 0; k < g.length; k++) qc.push(g[k])
			for (var m = d.predicates || [], n = 0; n < m.length; n++) pc.push(m[n])
			for (var p = d.rules || [], q = 0; q < p.length; q++) {
				for (var t = p[q], u = {}, r = 0; r < t.length; r++)
					u[t[r][0]] = Array.prototype.slice.call(t[r], 1)
				oc.push(u)
			}
			sc = Z
			tc = Hs
			vx()
			tr()
			Co = !1
			Do = 0
			if (('interactive' == D.readyState && !D.createEventObject) || 'complete' == D.readyState)
				Fo()
			else {
				Bb(D, 'DOMContentLoaded', Fo)
				Bb(D, 'readystatechange', Fo)
				if (D.createEventObject && D.documentElement.doScroll) {
					var v = !0
					try {
						v = !A.frameElement
					} catch (H) {}
					v && Go()
				}
				Bb(A, 'load', Fo)
			}
			Jq = !1
			'complete' === D.readyState ? Lq() : Bb(A, 'load', Lq)
			Ni && A.setInterval(Si, 864e5)
			R(46) && (J(111), Ya('HEALTH', 1))
			R(47) && (J(112), Ya('HEALTH', 2))
			Ce = Fa()
			ux.bootstrap = Ce
			if (a) {
				var B = Kn('INIT')
			}
			if (R(70)) {
				var z = Dn(bn.C.Qf, S.D)
				if (En(z)) {
					var C = Dn(bn.C.ue, S.D)
					Fn(z, C)
				}
			}
		}
	})
})()(
	// Copyright 2012 Google Inc. All rights reserved.
	function () {
		var data = {
			resource: {
				version: '1',

				macros: [],
				tags: [],
				predicates: [],
				rules: [],
			},
			runtime: [],
		}

		/*
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
		var aa,
			ba = function (a) {
				var b = 0
				return function () {
					return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
				}
			},
			ca =
				'function' == typeof Object.create
					? Object.create
					: function (a) {
							var b = function () {}
							b.prototype = a
							return new b()
					  },
			ea
		if ('function' == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf
		else {
			var ha
			a: {
				var ia = { a: !0 },
					ja = {}
				try {
					ja.__proto__ = ia
					ha = ja.a
					break a
				} catch (a) {}
				ha = !1
			}
			ea = ha
				? function (a, b) {
						a.__proto__ = b
						if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible')
						return a
				  }
				: null
		}
		var ka = ea,
			la = function (a, b) {
				a.prototype = ca(b.prototype)
				a.prototype.constructor = a
				if (ka) ka(a, b)
				else
					for (var c in b)
						if ('prototype' != c)
							if (Object.defineProperties) {
								var d = Object.getOwnPropertyDescriptor(b, c)
								d && Object.defineProperty(a, c, d)
							} else a[c] = b[c]
				a.Wk = b.prototype
			},
			ma = this || self,
			na = function (a) {
				return a
			}
		var oa = function () {},
			pa = function (a) {
				return 'function' === typeof a
			},
			h = function (a) {
				return 'string' === typeof a
			},
			qa = function (a) {
				return 'number' === typeof a && !isNaN(a)
			},
			ra = Array.isArray,
			sa = function (a, b) {
				if (a && ra(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
			},
			ta = function (a, b) {
				if (!qa(a) || !qa(b) || a > b) (a = 0), (b = 2147483647)
				return Math.floor(Math.random() * (b - a + 1) + a)
			},
			va = function (a, b) {
				for (var c = new ua(), d = 0; d < a.length; d++) c.set(a[d], !0)
				for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0
				return !1
			},
			l = function (a, b) {
				for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
			},
			ya = function (a) {
				return (
					!!a &&
					('[object Arguments]' === Object.prototype.toString.call(a) ||
						Object.prototype.hasOwnProperty.call(a, 'callee'))
				)
			},
			Aa = function (a) {
				return Math.round(Number(a)) || 0
			},
			Ba = function (a) {
				return 'false' === String(a).toLowerCase() ? !1 : !!a
			},
			Ca = function (a) {
				var b = []
				if (ra(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]))
				return b
			},
			Da = function (a) {
				return a ? a.replace(/^\s+|\s+$/g, '') : ''
			},
			Ea = function () {
				return new Date(Date.now())
			},
			Fa = function () {
				return Ea().getTime()
			},
			ua = function () {
				this.prefix = 'gtm.'
				this.values = {}
			}
		ua.prototype.set = function (a, b) {
			this.values[this.prefix + a] = b
		}
		ua.prototype.get = function (a) {
			return this.values[this.prefix + a]
		}
		var Ga = function (a, b, c) {
				return a && a.hasOwnProperty(b) ? a[b] : c
			},
			Ha = function (a) {
				var b = a
				return function () {
					if (b) {
						var c = b
						b = void 0
						try {
							c()
						} catch (d) {}
					}
				}
			},
			Ia = function (a, b) {
				for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
			},
			Ja = function (a) {
				for (var b in a) if (a.hasOwnProperty(b)) return !0
				return !1
			},
			Ka = function (a, b) {
				for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || [])
				return c
			},
			La = function (a, b) {
				for (var c = {}, d = c, e = a.split('.'), f = 0; f < e.length - 1; f++) d = d[e[f]] = {}
				d[e[e.length - 1]] = b
				return c
			},
			Ma = /^\w{1,9}$/,
			Oa = function (a, b) {
				a = a || {}
				b = b || ','
				var c = []
				l(a, function (d, e) {
					Ma.test(d) && e && c.push(d)
				})
				return c.join(b)
			},
			Qa = function (a, b) {
				function c() {
					++d === b && (e(), (e = null), (c.done = !0))
				}
				var d = 0,
					e = a
				c.done = !1
				return c
			}
		function Ra() {
			for (var a = Sa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c
			return b
		}
		function Ta() {
			var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
			a += a.toLowerCase() + '0123456789-_'
			return a + '.'
		}
		var Sa, Ua
		function Va(a) {
			Sa = Sa || Ta()
			Ua = Ua || Ra()
			for (var b = [], c = 0; c < a.length; c += 3) {
				var d = c + 1 < a.length,
					e = c + 2 < a.length,
					f = a.charCodeAt(c),
					g = d ? a.charCodeAt(c + 1) : 0,
					k = e ? a.charCodeAt(c + 2) : 0,
					m = f >> 2,
					n = ((f & 3) << 4) | (g >> 4),
					p = ((g & 15) << 2) | (k >> 6),
					q = k & 63
				e || ((q = 64), d || (p = 64))
				b.push(Sa[m], Sa[n], Sa[p], Sa[q])
			}
			return b.join('')
		}
		function Wa(a) {
			function b(m) {
				for (; d < a.length; ) {
					var n = a.charAt(d++),
						p = Ua[n]
					if (null != p) return p
					if (!/^[\s\xa0]*$/.test(n)) throw Error('Unknown base64 encoding at char: ' + n)
				}
				return m
			}
			Sa = Sa || Ta()
			Ua = Ua || Ra()
			for (var c = '', d = 0; ; ) {
				var e = b(-1),
					f = b(0),
					g = b(64),
					k = b(64)
				if (64 === k && -1 === e) return c
				c += String.fromCharCode((e << 2) | (f >> 4))
				64 != g &&
					((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
					64 != k && (c += String.fromCharCode(((g << 6) & 192) | k)))
			}
		}
		var Xa = {},
			Ya = function (a, b) {
				Xa[a] = Xa[a] || []
				Xa[a][b] = !0
			},
			Za = function () {
				delete Xa.GA4_EVENT
			},
			$a = function (a) {
				var b = Xa[a]
				if (!b || 0 === b.length) return ''
				for (var c = [], d = 0, e = 0; e < b.length; e++)
					0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), (d = 0)),
						b[e] && (d |= 1 << e % 8)
				0 < d && c.push(String.fromCharCode(d))
				return Va(c.join('')).replace(/\.+$/, '')
			}
		var ab = Array.prototype.indexOf
			? function (a, b) {
					return Array.prototype.indexOf.call(a, b, void 0)
			  }
			: function (a, b) {
					if ('string' === typeof a)
						return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0)
					for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c
					return -1
			  }
		var bb,
			cb = function () {
				if (void 0 === bb) {
					var a = null,
						b = ma.trustedTypes
					if (b && b.createPolicy) {
						try {
							a = b.createPolicy('goog#html', {
								createHTML: na,
								createScript: na,
								createScriptURL: na,
							})
						} catch (c) {
							ma.console && ma.console.error(c.message)
						}
						bb = a
					} else bb = a
				}
				return bb
			}
		var eb = function (a, b) {
			this.h = b === db ? a : ''
		}
		eb.prototype.toString = function () {
			return this.h + ''
		}
		var db = {}
		var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
		function gb() {
			var a = ma.navigator
			if (a) {
				var b = a.userAgent
				if (b) return b
			}
			return ''
		}
		function hb(a) {
			return -1 != gb().indexOf(a)
		}
		function ib() {
			return hb('Firefox') || hb('FxiOS')
		}
		function jb() {
			return ((hb('Chrome') || hb('CriOS')) && !hb('Edge')) || hb('Silk')
		}
		var kb = {},
			lb = function (a, b) {
				this.h = b === kb ? a : ''
			}
		lb.prototype.toString = function () {
			return this.h.toString()
		} /*
  
   SPDX-License-Identifier: Apache-2.0
  */
		function mb(a, b) {
			if (void 0 !== a.tagName) {
				if ('script' === a.tagName.toLowerCase()) throw Error('')
				if ('style' === a.tagName.toLowerCase()) throw Error('')
			}
			a.innerHTML = b instanceof lb && b.constructor === lb ? b.h : 'type_error:SafeHtml'
		}
		function nb(a) {
			var b = (a = ob(a)),
				c = cb(),
				d = c ? c.createHTML(b) : b
			return new lb(d, kb)
		}
		function ob(a) {
			return null === a ? 'null' : void 0 === a ? 'undefined' : a
		}
		var pb = {},
			A = window,
			D = document,
			qb = navigator,
			rb = D.currentScript && D.currentScript.src,
			sb = function (a, b) {
				var c = A[a]
				A[a] = void 0 === c ? b : c
				return A[a]
			},
			tb = function (a, b) {
				b &&
					(a.addEventListener
						? (a.onload = b)
						: (a.onreadystatechange = function () {
								a.readyState in { loaded: 1, complete: 1 } && ((a.onreadystatechange = null), b())
						  }))
			},
			ub = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
			vb = { onload: 1, src: 1, width: 1, height: 1, style: 1 }
		function wb(a, b, c) {
			b &&
				l(b, function (d, e) {
					d = d.toLowerCase()
					c.hasOwnProperty(d) || a.setAttribute(d, e)
				})
		}
		var xb = function (a, b, c, d, e) {
				var f = D.createElement('script')
				wb(f, d, ub)
				f.type = 'text/javascript'
				f.async = !0
				var g,
					k = ob(a),
					m = cb(),
					n = m ? m.createScriptURL(k) : k
				g = new eb(n, db)
				f.src = g instanceof eb && g.constructor === eb ? g.h : 'type_error:TrustedResourceUrl'
				var p,
					q,
					t,
					u =
						null ==
						(t = (q = ((f.ownerDocument && f.ownerDocument.defaultView) || window).document)
							.querySelector)
							? void 0
							: t.call(q, 'script[nonce]')
				;(p = u ? u.nonce || u.getAttribute('nonce') || '' : '') && f.setAttribute('nonce', p)
				tb(f, b)
				c && (f.onerror = c)
				if (e) e.appendChild(f)
				else {
					var r = D.getElementsByTagName('script')[0] || D.body || D.head
					r.parentNode.insertBefore(f, r)
				}
				return f
			},
			yb = function () {
				if (rb) {
					var a = rb.toLowerCase()
					if (0 === a.indexOf('https://')) return 2
					if (0 === a.indexOf('http://')) return 3
				}
				return 1
			},
			zb = function (a, b, c, d, e) {
				var f
				f = void 0 === f ? !0 : f
				var g = e,
					k = !1
				g || ((g = D.createElement('iframe')), (k = !0))
				wb(g, c, vb)
				d &&
					l(d, function (n, p) {
						g.dataset[n] = p
					})
				f &&
					((g.height = '0'),
					(g.width = '0'),
					(g.style.display = 'none'),
					(g.style.visibility = 'hidden'))
				if (k) {
					var m = (D.body && D.body.lastChild) || D.body || D.head
					m.parentNode.insertBefore(g, m)
				}
				tb(g, b)
				void 0 !== a && (g.src = a)
				return g
			},
			Ab = function (a, b, c) {
				var d = new Image(1, 1)
				d.onload = function () {
					d.onload = null
					b && b()
				}
				d.onerror = function () {
					d.onerror = null
					c && c()
				}
				d.src = a
			},
			Bb = function (a, b, c, d) {
				a.addEventListener
					? a.addEventListener(b, c, !!d)
					: a.attachEvent && a.attachEvent('on' + b, c)
			},
			Cb = function (a, b, c) {
				a.removeEventListener
					? a.removeEventListener(b, c, !1)
					: a.detachEvent && a.detachEvent('on' + b, c)
			},
			F = function (a) {
				A.setTimeout(a, 0)
			},
			Db = function (a, b) {
				return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
			},
			Eb = function (a) {
				var b = a.innerText || a.textContent || ''
				b && ' ' != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ''))
				b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, ' '))
				return b
			},
			Fb = function (a) {
				var b = D.createElement('div')
				mb(b, nb('A<div>' + a + '</div>'))
				b = b.lastChild
				for (var c = []; b.firstChild; ) c.push(b.removeChild(b.firstChild))
				return c
			},
			Gb = function (a, b, c) {
				c = c || 100
				for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0
				for (var f = a, g = 0; f && g <= c; g++) {
					if (d[String(f.tagName).toLowerCase()]) return f
					f = f.parentElement
				}
				return null
			},
			Hb = function (a) {
				var b
				try {
					b = qb.sendBeacon && qb.sendBeacon(a)
				} catch (c) {
					Ya('TAGGING', 15)
				}
				b || Ab(a)
			},
			Ib = function (a, b) {
				var c = a[b]
				c && 'string' === typeof c.animVal && (c = c.animVal)
				return c
			},
			Jb = function () {
				var a = A.performance
				if (a && pa(a.now)) return a.now()
			},
			Kb = function () {
				return A.performance || void 0
			} /*
   jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
		var Lb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
			Mb = function (a) {
				if (null == a) return String(a)
				var b = Lb.exec(Object.prototype.toString.call(Object(a)))
				return b ? b[1].toLowerCase() : 'object'
			},
			Nb = function (a, b) {
				return Object.prototype.hasOwnProperty.call(Object(a), b)
			},
			Ob = function (a) {
				if (!a || 'object' != Mb(a) || a.nodeType || a == a.window) return !1
				try {
					if (
						a.constructor &&
						!Nb(a, 'constructor') &&
						!Nb(a.constructor.prototype, 'isPrototypeOf')
					)
						return !1
				} catch (c) {
					return !1
				}
				for (var b in a);
				return void 0 === b || Nb(a, b)
			},
			G = function (a, b) {
				var c = b || ('array' == Mb(a) ? [] : {}),
					d
				for (d in a)
					if (Nb(a, d)) {
						var e = a[d]
						'array' == Mb(e)
							? ('array' != Mb(c[d]) && (c[d] = []), (c[d] = G(e, c[d])))
							: Ob(e)
							? (Ob(c[d]) || (c[d] = {}), (c[d] = G(e, c[d])))
							: (c[d] = e)
					}
				return c
			}
		var Pb = function (a) {
			if (void 0 === a || ra(a) || Ob(a)) return !0
			switch (typeof a) {
				case 'boolean':
				case 'number':
				case 'string':
				case 'function':
					return !0
			}
			return !1
		}
		var Qb = (function () {
			var a = function (b) {
				return {
					toString: function () {
						return b
					},
				}
			}
			return {
				ai: a('consent'),
				Sf: a('convert_case_to'),
				Tf: a('convert_false_to'),
				Uf: a('convert_null_to'),
				Vf: a('convert_true_to'),
				Wf: a('convert_undefined_to'),
				Hk: a('debug_mode_metadata'),
				Na: a('function'),
				Ye: a('instance_name'),
				Ri: a('live_only'),
				Si: a('malware_disabled'),
				Ti: a('metadata'),
				Wi: a('original_activity_id'),
				Lk: a('original_vendor_template_id'),
				Kk: a('once_on_load'),
				Vi: a('once_per_event'),
				Yg: a('once_per_load'),
				Nk: a('priority_override'),
				Ok: a('respected_consent_types'),
				dh: a('setup_tags'),
				ob: a('tag_id'),
				ih: a('teardown_tags'),
			}
		})()
		var mc
		var nc = [],
			oc = [],
			pc = [],
			qc = [],
			rc = [],
			sc = {},
			tc,
			uc,
			wc = function () {
				var a = vc
				uc = uc || a
			},
			xc,
			yc = function (a, b) {
				var c = a['function'],
					d = b && b.event
				if (!c) throw Error('Error: No function name given for function call.')
				var e = sc[c],
					f = {},
					g
				for (g in a)
					a.hasOwnProperty(g) &&
						0 === g.indexOf('vtp_') &&
						(e && d && d.nh && d.nh(a[g]), (f[void 0 !== e ? g : g.substr(4)] = a[g]))
				e && d && d.mh && (f.vtp_gtmCachedValues = d.mh)
				if (b) {
					if (null == b.name) {
						var k
						a: {
							var m = b.index
							if (null == m) k = ''
							else {
								var n
								switch (b.type) {
									case 2:
										n = nc[m]
										break
									case 1:
										n = qc[m]
										break
									default:
										k = ''
										break a
								}
								var p = n && n[Qb.Ye]
								k = p ? String(p) : ''
							}
						}
						b.name = k
					}
					e && ((f.vtp_gtmEntityIndex = b.index), (f.vtp_gtmEntityName = b.name))
				}
				return void 0 !== e ? e(f) : mc(c, f, b)
			},
			Ac = function (a, b, c) {
				c = c || []
				var d = {},
					e
				for (e in a) a.hasOwnProperty(e) && (d[e] = zc(a[e], b, c))
				return d
			},
			zc = function (a, b, c) {
				if (ra(a)) {
					var d
					switch (a[0]) {
						case 'function_id':
							return a[1]
						case 'list':
							d = []
							for (var e = 1; e < a.length; e++) d.push(zc(a[e], b, c))
							return d
						case 'macro':
							var f = a[1]
							if (c[f]) return
							var g = nc[f]
							if (!g || b.tf(g)) return
							c[f] = !0
							var k = String(g[Qb.Ye])
							try {
								var m = Ac(g, b, c)
								m.vtp_gtmEventId = b.id
								b.priorityId && (m.vtp_gtmPriorityId = b.priorityId)
								d = yc(m, { event: b, index: f, type: 2, name: k })
								xc && (d = xc.mj(d, m))
							} catch (x) {
								b.Ah && b.Ah(x, Number(f), k), (d = !1)
							}
							c[f] = !1
							return d
						case 'map':
							d = {}
							for (var n = 1; n < a.length; n += 2) d[zc(a[n], b, c)] = zc(a[n + 1], b, c)
							return d
						case 'template':
							d = []
							for (var p = !1, q = 1; q < a.length; q++) {
								var t = zc(a[q], b, c)
								uc && (p = p || t === uc.Rd)
								d.push(t)
							}
							return uc && p ? uc.oj(d) : d.join('')
						case 'escape':
							d = zc(a[1], b, c)
							if (uc && ra(a[1]) && 'macro' === a[1][0] && uc.Mj(a)) return uc.fk(d)
							d = String(d)
							for (var u = 2; u < a.length; u++) Rb[a[u]] && (d = Rb[a[u]](d))
							return d
						case 'tag':
							var r = a[1]
							if (!qc[r]) throw Error('Unable to resolve tag reference ' + r + '.')
							return (d = { th: a[2], index: r })
						case 'zb':
							var v = { arg0: a[2], arg1: a[3], ignore_case: a[5] }
							v['function'] = a[1]
							var w = Bc(v, b, c),
								y = !!a[4]
							return y || 2 !== w ? y !== (1 === w) : null
						default:
							throw Error('Attempting to expand unknown Value type: ' + a[0] + '.')
					}
				}
				return a
			},
			Bc = function (a, b, c) {
				try {
					return tc(Ac(a, b, c))
				} catch (d) {
					JSON.stringify(a)
				}
				return 2
			}
		var Ec = function (a) {
				function b(t) {
					for (var u = 0; u < t.length; u++) d[t[u]] = !0
				}
				for (var c = [], d = [], e = Cc(a), f = 0; f < oc.length; f++) {
					var g = oc[f],
						k = Dc(g, e)
					if (k) {
						for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0
						b(g.block || [])
					} else null === k && b(g.block || [])
				}
				for (var p = [], q = 0; q < qc.length; q++) c[q] && !d[q] && (p[q] = !0)
				return p
			},
			Dc = function (a, b) {
				for (var c = a['if'] || [], d = 0; d < c.length; d++) {
					var e = b(c[d])
					if (0 === e) return !1
					if (2 === e) return null
				}
				for (var f = a.unless || [], g = 0; g < f.length; g++) {
					var k = b(f[g])
					if (2 === k) return null
					if (1 === k) return !1
				}
				return !0
			},
			Cc = function (a) {
				var b = []
				return function (c) {
					void 0 === b[c] && (b[c] = Bc(pc[c], a))
					return b[c]
				}
			}
		var Fc = {
			mj: function (a, b) {
				b[Qb.Sf] && 'string' === typeof a && (a = 1 == b[Qb.Sf] ? a.toLowerCase() : a.toUpperCase())
				b.hasOwnProperty(Qb.Uf) && null === a && (a = b[Qb.Uf])
				b.hasOwnProperty(Qb.Wf) && void 0 === a && (a = b[Qb.Wf])
				b.hasOwnProperty(Qb.Vf) && !0 === a && (a = b[Qb.Vf])
				b.hasOwnProperty(Qb.Tf) && !1 === a && (a = b[Qb.Tf])
				return a
			},
		}
		var Wc = /:[0-9]+$/,
			Xc = /^\d+\.fls\.doubleclick\.net$/,
			Yc = function (a, b, c) {
				for (var d = a.split('&'), e = 0; e < d.length; e++) {
					var f = d[e].split('=')
					if (decodeURIComponent(f[0]).replace(/\+/g, ' ') === b) {
						var g = f.slice(1).join('=')
						return c ? g : decodeURIComponent(g).replace(/\+/g, ' ')
					}
				}
			},
			ad = function (a, b, c, d, e) {
				b && (b = String(b).toLowerCase())
				if ('protocol' === b || 'port' === b) a.protocol = Zc(a.protocol) || Zc(A.location.protocol)
				'port' === b
					? (a.port = String(
							Number(a.hostname ? a.port : A.location.port) ||
								('http' === a.protocol ? 80 : 'https' === a.protocol ? 443 : ''),
					  ))
					: 'host' === b &&
					  (a.hostname = (a.hostname || A.location.hostname).replace(Wc, '').toLowerCase())
				return $c(a, b, c, d, e)
			},
			$c = function (a, b, c, d, e) {
				var f,
					g = Zc(a.protocol)
				b && (b = String(b).toLowerCase())
				switch (b) {
					case 'url_no_fragment':
						f = bd(a)
						break
					case 'protocol':
						f = g
						break
					case 'host':
						f = a.hostname.replace(Wc, '').toLowerCase()
						if (c) {
							var k = /^www\d*\./.exec(f)
							k && k[0] && (f = f.substr(k[0].length))
						}
						break
					case 'port':
						f = String(Number(a.port) || ('http' === g ? 80 : 'https' === g ? 443 : ''))
						break
					case 'path':
						a.pathname || a.hostname || Ya('TAGGING', 1)
						f = '/' === a.pathname.substr(0, 1) ? a.pathname : '/' + a.pathname
						var m = f.split('/')
						0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = '')
						f = m.join('/')
						break
					case 'query':
						f = a.search.replace('?', '')
						e && (f = Yc(f, e))
						break
					case 'extension':
						var n = a.pathname.split('.')
						f = 1 < n.length ? n[n.length - 1] : ''
						f = f.split('/')[0]
						break
					case 'fragment':
						f = a.hash.replace('#', '')
						break
					default:
						f = a && a.href
				}
				return f
			},
			Zc = function (a) {
				return a ? a.replace(':', '').toLowerCase() : ''
			},
			bd = function (a) {
				var b = ''
				if (a && a.href) {
					var c = a.href.indexOf('#')
					b = 0 > c ? a.href : a.href.substr(0, c)
				}
				return b
			},
			cd = function (a) {
				var b = D.createElement('a')
				a && (b.href = a)
				var c = b.pathname
				'/' !== c[0] && (a || Ya('TAGGING', 1), (c = '/' + c))
				var d = b.hostname.replace(Wc, '')
				return {
					href: b.href,
					protocol: b.protocol,
					host: b.host,
					hostname: d,
					pathname: c,
					search: b.search,
					hash: b.hash,
					port: b.port,
				}
			},
			dd = function (a) {
				function b(n) {
					var p = n.split('=')[0]
					return 0 > d.indexOf(p) ? n : p + '=0'
				}
				function c(n) {
					return n
						.split('&')
						.map(b)
						.filter(function (p) {
							return void 0 !== p
						})
						.join('&')
				}
				var d = 'gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl'.split(' '),
					e = cd(a),
					f = a.split(/[?#]/)[0],
					g = e.search,
					k = e.hash
				'?' === g[0] && (g = g.substring(1))
				'#' === k[0] && (k = k.substring(1))
				g = c(g)
				k = c(k)
				'' !== g && (g = '?' + g)
				'' !== k && (k = '#' + k)
				var m = '' + f + g + k
				'/' === m[m.length - 1] && (m = m.substring(0, m.length - 1))
				return m
			},
			ed = function (a) {
				var b = cd(A.location.href),
					c = ad(b, 'host', !1)
				if (c && c.match(Xc)) {
					var d = ad(b, 'path').split(a + '=')
					if (1 < d.length) return d[1].split(';')[0].split('?')[0]
				}
			}
		var fd = [
			'matches',
			'webkitMatchesSelector',
			'mozMatchesSelector',
			'msMatchesSelector',
			'oMatchesSelector',
		]
		function gd(a, b) {
			a = String(a)
			b = String(b)
			var c = a.length - b.length
			return 0 <= c && a.indexOf(b, c) === c
		}
		var kd = new ua()
		function ld(a, b, c) {
			var d = c ? 'i' : void 0
			try {
				var e = String(b) + d,
					f = kd.get(e)
				f || ((f = new RegExp(b, d)), kd.set(e, f))
				return f.test(a)
			} catch (g) {
				return !1
			}
		}
		function md(a, b) {
			function c(g) {
				var k = cd(g),
					m = ad(k, 'protocol'),
					n = ad(k, 'host', !0),
					p = ad(k, 'port'),
					q = ad(k, 'path').toLowerCase().replace(/\/$/, '')
				if (void 0 === m || ('http' === m && '80' === p) || ('https' === m && '443' === p))
					(m = 'web'), (p = 'default')
				return [m, n, p, q]
			}
			for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
				if (d[f] !== e[f]) return !1
			return !0
		}
		var td = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/
		function ud(a, b) {
			return '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[(a << 2) | b]
		}
		var wd = function (a) {
				return vd ? D.querySelectorAll(a) : null
			},
			xd = function (a, b) {
				if (!vd) return null
				if (Element.prototype.closest)
					try {
						return a.closest(b)
					} catch (e) {
						return null
					}
				var c =
						Element.prototype.matches ||
						Element.prototype.webkitMatchesSelector ||
						Element.prototype.mozMatchesSelector ||
						Element.prototype.msMatchesSelector ||
						Element.prototype.oMatchesSelector,
					d = a
				if (!D.documentElement.contains(d)) return null
				do {
					try {
						if (c.call(d, b)) return d
					} catch (e) {
						break
					}
					d = d.parentElement || d.parentNode
				} while (null !== d && 1 === d.nodeType)
				return null
			},
			yd = !1
		if (D.querySelectorAll)
			try {
				var zd = D.querySelectorAll(':root')
				zd && 1 == zd.length && zd[0] == D.documentElement && (yd = !0)
			} catch (a) {}
		var vd = yd
		var J = function (a) {
			Ya('GTM', a)
		}
		var N = {
				g: {
					H: 'ad_storage',
					O: 'analytics_storage',
					Mf: 'region',
					Nf: 'consent_updated',
					Of: 'wait_for_update',
					ei: 'app_remove',
					fi: 'app_store_refund',
					gi: 'app_store_subscription_cancel',
					hi: 'app_store_subscription_convert',
					ii: 'app_store_subscription_renew',
					Xf: 'add_payment_info',
					Yf: 'add_shipping_info',
					mc: 'add_to_cart',
					nc: 'remove_from_cart',
					Zf: 'view_cart',
					Kb: 'begin_checkout',
					oc: 'select_item',
					tb: 'view_item_list',
					Lb: 'select_promotion',
					ub: 'view_promotion',
					Aa: 'purchase',
					qc: 'refund',
					Ba: 'view_item',
					ag: 'add_to_wishlist',
					ji: 'first_open',
					ki: 'first_visit',
					xa: 'gtag.config',
					Ca: 'gtag.get',
					li: 'in_app_purchase',
					sc: 'page_view',
					mi: 'session_start',
					xe: 'user_engagement',
					Mb: 'gclid',
					ia: 'ads_data_redaction',
					X: 'allow_ad_personalization_signals',
					ye: 'allow_custom_scripts',
					ni: 'allow_display_features',
					od: 'allow_enhanced_conversions',
					vb: 'allow_google_signals',
					ya: 'allow_interest_groups',
					pd: 'auid',
					oi: 'auto_detection_enabled',
					wb: 'aw_remarketing',
					ze: 'aw_remarketing_only',
					qd: 'discount',
					rd: 'aw_feed_country',
					sd: 'aw_feed_language',
					ba: 'items',
					ud: 'aw_merchant_id',
					cg: 'aw_basket_type',
					vd: 'campaign_content',
					wd: 'campaign_id',
					xd: 'campaign_medium',
					yd: 'campaign_name',
					uc: 'campaign',
					zd: 'campaign_source',
					Ad: 'campaign_term',
					fb: 'client_id',
					ri: 'content_group',
					si: 'content_type',
					Da: 'conversion_cookie_prefix',
					vc: 'conversion_id',
					oa: 'conversion_linker',
					wc: 'conversion_api',
					hb: 'cookie_domain',
					Ja: 'cookie_expires',
					ib: 'cookie_flags',
					xc: 'cookie_name',
					Ae: 'cookie_path',
					Sa: 'cookie_prefix',
					Nb: 'cookie_update',
					yc: 'country',
					la: 'currency',
					Bd: 'customer_lifetime_value',
					zc: 'custom_map',
					ui: 'debug_mode',
					Z: 'developer_id',
					vi: 'disable_merchant_reported_purchases',
					wi: 'dc_custom_params',
					xi: 'dc_natural_search',
					Be: 'dynamic_event_settings',
					yi: 'affiliation',
					dg: 'checkout_option',
					eg: 'checkout_step',
					zi: 'coupon',
					Ce: 'item_list_name',
					De: 'list_name',
					Ai: 'promotions',
					Cd: 'shipping',
					fg: 'tax',
					Dd: 'engagement_time_msec',
					Ac: 'enhanced_client_id',
					Bc: 'enhanced_conversions',
					gg: 'enhanced_conversions_automatic_settings',
					Ed: 'estimated_delivery_date',
					Ee: 'euid_logged_in_state',
					Ob: 'event_callback',
					Pb: 'event_developer_id_string',
					hg: 'event',
					Fd: 'event_settings',
					Gd: 'event_timeout',
					Bi: 'experiments',
					Fe: 'firebase_id',
					Hd: 'first_party_collection',
					Id: '_x_20',
					xb: '_x_19',
					ig: 'fledge',
					jg: 'flight_error_code',
					kg: 'flight_error_message',
					lg: 'gac_gclid',
					Jd: 'gac_wbraid',
					mg: 'gac_wbraid_multiple_conversions',
					Ge: 'ga_restrict_domain',
					He: 'ga_temp_client_id',
					ng: 'gdpr_applies',
					og: 'geo_granularity',
					jb: 'value_callback',
					Ta: 'value_key',
					Ik: 'google_ono',
					Ua: 'google_signals',
					Cc: 'google_tld',
					Kd: 'groups',
					pg: 'gsa_experiment_id',
					qg: 'iframe_state',
					Ld: 'ignore_referrer',
					Ie: 'internal_traffic_results',
					Md: 'is_legacy_loaded',
					rg: 'is_passthrough',
					Ka: 'language',
					Je: 'legacy_developer_id_string',
					qa: 'linker',
					Rb: 'accept_incoming',
					yb: 'decorate_forms',
					N: 'domains',
					Sb: 'url_position',
					sg: 'method',
					Dc: 'new_customer',
					ug: 'non_interaction',
					Ci: 'optimize_id',
					vg: 'page_hostname',
					Ec: 'page_path',
					La: 'page_referrer',
					Tb: 'page_title',
					wg: 'passengers',
					xg: 'phone_conversion_callback',
					Di: 'phone_conversion_country_code',
					yg: 'phone_conversion_css_class',
					Ei: 'phone_conversion_ids',
					zg: 'phone_conversion_number',
					Ag: 'phone_conversion_options',
					Bg: 'quantity',
					Fc: 'redact_device_info',
					Ke: 'redact_enhanced_user_id',
					Fi: 'redact_ga_client_id',
					Gi: 'redact_user_id',
					Nd: 'referral_exclusion_definition',
					zb: 'restricted_data_processing',
					Hi: 'retoken',
					Cg: 'screen_name',
					Ab: 'screen_resolution',
					Ii: 'search_term',
					Fa: 'send_page_view',
					Bb: 'send_to',
					Gc: 'session_duration',
					Od: 'session_engaged',
					Le: 'session_engaged_time',
					kb: 'session_id',
					Pd: 'session_number',
					Hc: 'delivery_postal_code',
					Eg: 'temporary_client_id',
					Ji: 'tracking_id',
					Me: 'traffic_type',
					Ma: 'transaction_id',
					ma: 'transport_url',
					Fg: 'trip_type',
					Ic: 'update',
					lb: 'url_passthrough',
					Ne: '_user_agent_architecture',
					Oe: '_user_agent_bitness',
					Pe: '_user_agent_full_version_list',
					Qe: '_user_agent_mobile',
					Re: '_user_agent_model',
					Se: '_user_agent_platform',
					Te: '_user_agent_platform_version',
					Gg: '_user_agent_wait',
					Ue: '_user_agent_wow64',
					na: 'user_data',
					Hg: 'user_data_auto_latency',
					Ig: 'user_data_auto_meta',
					Jg: 'user_data_auto_multi',
					Kg: 'user_data_auto_selectors',
					Lg: 'user_data_auto_status',
					Mg: 'user_data_mode',
					Ve: 'user_data_settings',
					ra: 'user_id',
					Ga: 'user_properties',
					Ng: 'us_privacy_string',
					ja: 'value',
					Qd: 'wbraid',
					Og: 'wbraid_multiple_conversions',
					Ug: '_host_name',
					Vg: '_in_page_command',
					Wg: '_is_passthrough_cid',
					Xg: 'non_personalized_ads',
					Nc: '_sst_parameters',
					Ra: 'conversion_label',
					Ea: 'page_location',
					Qb: 'global_developer_id_string',
					Dg: 'tc_privacy_string',
				},
			},
			Yd = {},
			Zd = Object.freeze(
				((Yd[N.g.X] = 1),
				(Yd[N.g.od] = 1),
				(Yd[N.g.vb] = 1),
				(Yd[N.g.ba] = 1),
				(Yd[N.g.hb] = 1),
				(Yd[N.g.Ja] = 1),
				(Yd[N.g.ib] = 1),
				(Yd[N.g.xc] = 1),
				(Yd[N.g.Ae] = 1),
				(Yd[N.g.Sa] = 1),
				(Yd[N.g.Nb] = 1),
				(Yd[N.g.zc] = 1),
				(Yd[N.g.Z] = 1),
				(Yd[N.g.Be] = 1),
				(Yd[N.g.Ob] = 1),
				(Yd[N.g.Fd] = 1),
				(Yd[N.g.Gd] = 1),
				(Yd[N.g.Hd] = 1),
				(Yd[N.g.Ge] = 1),
				(Yd[N.g.Ua] = 1),
				(Yd[N.g.Cc] = 1),
				(Yd[N.g.Kd] = 1),
				(Yd[N.g.Ie] = 1),
				(Yd[N.g.Md] = 1),
				(Yd[N.g.qa] = 1),
				(Yd[N.g.Ke] = 1),
				(Yd[N.g.Nd] = 1),
				(Yd[N.g.zb] = 1),
				(Yd[N.g.Fa] = 1),
				(Yd[N.g.Bb] = 1),
				(Yd[N.g.Gc] = 1),
				(Yd[N.g.Le] = 1),
				(Yd[N.g.Hc] = 1),
				(Yd[N.g.ma] = 1),
				(Yd[N.g.Ic] = 1),
				(Yd[N.g.Ve] = 1),
				(Yd[N.g.Ga] = 1),
				(Yd[N.g.Nc] = 1),
				Yd),
			)
		Object.freeze([N.g.Ea, N.g.La, N.g.Tb, N.g.Ka, N.g.Cg, N.g.ra, N.g.Fe, N.g.ri])
		var $d = {},
			ae = Object.freeze(
				(($d[N.g.ei] = 1),
				($d[N.g.fi] = 1),
				($d[N.g.gi] = 1),
				($d[N.g.hi] = 1),
				($d[N.g.ii] = 1),
				($d[N.g.ji] = 1),
				($d[N.g.ki] = 1),
				($d[N.g.li] = 1),
				($d[N.g.mi] = 1),
				($d[N.g.xe] = 1),
				$d),
			),
			be = {},
			ce = Object.freeze(
				((be[N.g.Xf] = 1),
				(be[N.g.Yf] = 1),
				(be[N.g.mc] = 1),
				(be[N.g.nc] = 1),
				(be[N.g.Zf] = 1),
				(be[N.g.Kb] = 1),
				(be[N.g.oc] = 1),
				(be[N.g.tb] = 1),
				(be[N.g.Lb] = 1),
				(be[N.g.ub] = 1),
				(be[N.g.Aa] = 1),
				(be[N.g.qc] = 1),
				(be[N.g.Ba] = 1),
				(be[N.g.ag] = 1),
				be),
			),
			de = Object.freeze([N.g.X, N.g.vb, N.g.Nb]),
			ee = Object.freeze([].concat(de)),
			fe = Object.freeze([N.g.Ja, N.g.Gd, N.g.Gc, N.g.Le, N.g.Dd]),
			ge = Object.freeze([].concat(fe)),
			he = {},
			ie = ((he[N.g.H] = '1'), (he[N.g.O] = '2'), he),
			je = {},
			ke = Object.freeze(
				((je[N.g.X] = 1),
				(je[N.g.od] = 1),
				(je[N.g.ya] = 1),
				(je[N.g.wb] = 1),
				(je[N.g.ze] = 1),
				(je[N.g.qd] = 1),
				(je[N.g.rd] = 1),
				(je[N.g.sd] = 1),
				(je[N.g.ba] = 1),
				(je[N.g.ud] = 1),
				(je[N.g.Da] = 1),
				(je[N.g.oa] = 1),
				(je[N.g.hb] = 1),
				(je[N.g.Ja] = 1),
				(je[N.g.ib] = 1),
				(je[N.g.Sa] = 1),
				(je[N.g.la] = 1),
				(je[N.g.Bd] = 1),
				(je[N.g.Z] = 1),
				(je[N.g.vi] = 1),
				(je[N.g.Bc] = 1),
				(je[N.g.Ed] = 1),
				(je[N.g.Fe] = 1),
				(je[N.g.Hd] = 1),
				(je[N.g.Md] = 1),
				(je[N.g.Ka] = 1),
				(je[N.g.Dc] = 1),
				(je[N.g.Ea] = 1),
				(je[N.g.La] = 1),
				(je[N.g.xg] = 1),
				(je[N.g.yg] = 1),
				(je[N.g.zg] = 1),
				(je[N.g.Ag] = 1),
				(je[N.g.zb] = 1),
				(je[N.g.Fa] = 1),
				(je[N.g.Bb] = 1),
				(je[N.g.Hc] = 1),
				(je[N.g.Ma] = 1),
				(je[N.g.ma] = 1),
				(je[N.g.Ic] = 1),
				(je[N.g.lb] = 1),
				(je[N.g.na] = 1),
				(je[N.g.ra] = 1),
				(je[N.g.ja] = 1),
				je),
			)
		Object.freeze(N.g)
		var le = {},
			me = (A.google_tag_manager = A.google_tag_manager || {}),
			ne = Math.random()
		le.Wb = '3280'
		le.Mc = Number('0') || 0
		le.ca = 'dataLayer'
		le.ci = 'ChEIgLminwYQxMnHl93D8+SxARIZAMUcofRfTESlvKV2kJKxssIPKgcyFIPONhoCX08\x3d'
		var oe = {
				__cl: !0,
				__ecl: !0,
				__ehl: !0,
				__evl: !0,
				__fal: !0,
				__fil: !0,
				__fsl: !0,
				__hl: !0,
				__jel: !0,
				__lcl: !0,
				__sdl: !0,
				__tl: !0,
				__ytl: !0,
			},
			pe = { __paused: !0, __tg: !0 },
			qe
		for (qe in oe) oe.hasOwnProperty(qe) && (pe[qe] = !0)
		var re = Ba(''),
			se,
			te = !1
		te = !0
		se = te
		var ue,
			ve = !1
		ue = ve
		var we,
			xe = !1
		we = xe
		var ye,
			ze = !1
		ye = ze
		le.nd = 'www.googletagmanager.com'
		var Ae = '' + le.nd + (se ? '/gtag/js' : '/gtm.js'),
			Be = null,
			Ce = null,
			De = {},
			Ee = {},
			Fe = {},
			Ge = function () {
				var a = me.sequence || 1
				me.sequence = a + 1
				return a
			}
		le.bi = ''
		var He = ''
		le.Vd = He
		var Ie = new ua(),
			Je = {},
			Ke = {},
			Ne = {
				name: le.ca,
				set: function (a, b) {
					G(La(a, b), Je)
					Le()
				},
				get: function (a) {
					return Me(a, 2)
				},
				reset: function () {
					Ie = new ua()
					Je = {}
					Le()
				},
			},
			Me = function (a, b) {
				return 2 != b ? Ie.get(a) : Oe(a)
			},
			Oe = function (a) {
				var b,
					c = a.split('.')
				b = b || []
				for (var d = Je, e = 0; e < c.length; e++) {
					if (null === d) return !1
					if (void 0 === d) break
					d = d[c[e]]
					if (-1 !== b.indexOf(d)) return
				}
				return d
			},
			Pe = function (a, b) {
				Ke.hasOwnProperty(a) || (Ie.set(a, b), G(La(a, b), Je), Le())
			},
			Le = function (a) {
				l(Ke, function (b, c) {
					Ie.set(b, c)
					G(La(b), Je)
					G(La(b, c), Je)
					a && delete Ke[b]
				})
			},
			Qe = function (a, b) {
				var c,
					d = 1 !== (void 0 === b ? 2 : b) ? Oe(a) : Ie.get(a)
				'array' === Mb(d) || 'object' === Mb(d) ? (c = G(d)) : (c = d)
				return c
			}
		var Re,
			Ue = !1,
			Ve = function (a) {
				if (!Ue) {
					Ue = !0
					Re = Re || {}
				}
				return Re[a]
			}
		var We = function () {
				var a = A.screen
				return { width: a ? a.width : 0, height: a ? a.height : 0 }
			},
			Xe = function (a) {
				if (D.hidden) return !0
				var b = a.getBoundingClientRect()
				if (b.top == b.bottom || b.left == b.right || !A.getComputedStyle) return !0
				var c = A.getComputedStyle(a, null)
				if ('hidden' === c.visibility) return !0
				for (var d = a, e = c; d; ) {
					if ('none' === e.display) return !0
					var f = e.opacity,
						g = e.filter
					if (g) {
						var k = g.indexOf('opacity(')
						0 <= k &&
							((g = g.substring(k + 8, g.indexOf(')', k))),
							'%' == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)),
							(f = Math.min(g, f)))
					}
					if (void 0 !== f && 0 >= f) return !0
					;(d = d.parentElement) && (e = A.getComputedStyle(d, null))
				}
				return !1
			}
		var ff = {}
		var Ef = { ph: 'TH', lk: 'TH-10' }
		var Ff = new (function (a, b) {
			this.h = a
			this.defaultValue = void 0 === b ? !1 : b
		})(1933)
		var Gf = function (a) {
			Gf[' '](a)
			return a
		}
		Gf[' '] = function () {}
		var If = function () {
			var a = Hf,
				b = 'rf'
			if (a.rf && a.hasOwnProperty(b)) return a.rf
			var c = new a()
			return (a.rf = c)
		}
		var Hf = function () {
			var a = {}
			this.h = function () {
				var b = Ff.h,
					c = Ff.defaultValue
				return null != a[b] ? a[b] : c
			}
			this.m = function () {
				a[Ff.h] = !0
			}
		}
		var Jf = []
		function Kf() {
			var a = sb('google_tag_data', {})
			a.ics ||
				(a.ics = {
					entries: {},
					set: Lf,
					update: Mf,
					addListener: Nf,
					notifyListeners: Of,
					active: !1,
					usedDefault: !1,
					usedUpdate: !1,
					accessedDefault: !1,
					accessedAny: !1,
					wasSetLate: !1,
				})
			return a.ics
		}
		function Lf(a, b, c, d, e, f) {
			var g = Kf()
			g.usedDefault || (!g.accessedDefault && !g.accessedAny) || (g.wasSetLate = !0)
			g.active = !0
			g.usedDefault = !0
			if (void 0 != b) {
				var k = g.entries,
					m = k[a] || {},
					n = m.region,
					p = c && h(c) ? c.toUpperCase() : void 0
				d = d.toUpperCase()
				e = e.toUpperCase()
				if ('' === d || p === e || (p === d ? n !== e : !p && !n)) {
					var q = !!(f && 0 < f && void 0 === m.update),
						t = { region: p, initial: 'granted' === b, update: m.update, quiet: q }
					if ('' !== d || !1 !== m.initial) k[a] = t
					q &&
						A.setTimeout(function () {
							k[a] === t && t.quiet && ((t.quiet = !1), Pf(a), Of(), Ya('TAGGING', 2))
						}, f)
				}
			}
		}
		function Mf(a, b) {
			var c = Kf()
			c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0)
			c.active = !0
			c.usedUpdate = !0
			if (void 0 != b) {
				var d = Qf(c, a),
					e = c.entries,
					f = (e[a] = e[a] || {})
				f.update = 'granted' === b
				var g = Qf(c, a)
				f.quiet ? ((f.quiet = !1), Pf(a)) : g !== d && Pf(a)
			}
		}
		function Nf(a, b) {
			Jf.push({ ff: a, wj: b })
		}
		function Pf(a) {
			for (var b = 0; b < Jf.length; ++b) {
				var c = Jf[b]
				ra(c.ff) && -1 !== c.ff.indexOf(a) && (c.Fh = !0)
			}
		}
		function Of(a, b) {
			for (var c = 0; c < Jf.length; ++c) {
				var d = Jf[c]
				if (d.Fh) {
					d.Fh = !1
					try {
						d.wj({ consentEventId: a, consentPriorityId: b })
					} catch (e) {}
				}
			}
		}
		function Qf(a, b) {
			var c = a.entries[b] || {}
			return void 0 !== c.update ? c.update : c.initial
		}
		var Rf = function (a) {
				var b = Kf()
				b.accessedAny = !0
				return Qf(b, a)
			},
			Sf = function (a) {
				var b = Kf()
				b.accessedDefault = !0
				return (b.entries[a] || {}).initial
			},
			Tf = function (a) {
				var b = Kf()
				b.accessedAny = !0
				return !(b.entries[a] || {}).quiet
			},
			Uf = function () {
				if (!If().h()) return !1
				var a = Kf()
				a.accessedAny = !0
				return a.active
			},
			Vf = function () {
				var a = Kf()
				a.accessedDefault = !0
				return a.usedDefault
			},
			Wf = function (a, b) {
				Kf().addListener(a, b)
			},
			Xf = function (a, b) {
				Kf().notifyListeners(a, b)
			},
			Yf = function (a, b) {
				function c() {
					for (var e = 0; e < b.length; e++) if (!Tf(b[e])) return !0
					return !1
				}
				if (c()) {
					var d = !1
					Wf(b, function (e) {
						d || c() || ((d = !0), a(e))
					})
				} else a({})
			},
			Zf = function (a, b) {
				function c() {
					for (var f = [], g = 0; g < d.length; g++) {
						var k = d[g]
						!1 === Rf(k) || e[k] || (f.push(k), (e[k] = !0))
					}
					return f
				}
				var d = h(b) ? [b] : b,
					e = {}
				c().length !== d.length &&
					Wf(d, function (f) {
						var g = c()
						0 < g.length && ((f.ff = g), a(f))
					})
			}
		function $f() {}
		function ag() {}
		function bg(a) {
			for (var b = [], c = 0; c < cg.length; c++) {
				var d = a(cg[c])
				b[c] = !0 === d ? '1' : !1 === d ? '0' : '-'
			}
			return b.join('')
		}
		var cg = [N.g.H, N.g.O],
			dg = function (a) {
				var b = a[N.g.Mf]
				b && J(40)
				var c = a[N.g.Of]
				c && J(41)
				for (var d = ra(b) ? b : [b], e = { ic: 0 }; e.ic < d.length; e = { ic: e.ic }, ++e.ic)
					l(
						a,
						(function (f) {
							return function (g, k) {
								if (g !== N.g.Mf && g !== N.g.Of) {
									var m = d[f.ic],
										n = Ef.ph,
										p = Ef.lk
									Kf().set(g, k, m, n, p, c)
								}
							}
						})(e),
					)
			},
			eg = function (a, b) {
				l(a, function (c, d) {
					Kf().update(c, d)
				})
				Xf(b.eventId, b.priorityId)
			},
			fg = function (a) {
				var b = Rf(a)
				return void 0 != b ? b : !0
			},
			gg = function () {
				return 'G1' + bg(Rf)
			},
			hg = function (a, b) {
				Zf(a, b)
			},
			ig = function (a, b) {
				Yf(a, b)
			}
		var jg = function (a) {
			var b = 1,
				c,
				d,
				e
			if (a)
				for (b = 0, d = a.length - 1; 0 <= d; d--)
					(e = a.charCodeAt(d)),
						(b = ((b << 6) & 268435455) + e + (e << 14)),
						(c = b & 266338304),
						(b = 0 !== c ? b ^ (c >> 21) : b)
			return b
		}
		var kg = function (a, b, c) {
			for (var d = [], e = b.split(';'), f = 0; f < e.length; f++) {
				var g = e[f].split('='),
					k = g[0].replace(/^\s*|\s*$/g, '')
				if (k && k == a) {
					var m = g
						.slice(1)
						.join('=')
						.replace(/^\s*|\s*$/g, '')
					m && c && (m = decodeURIComponent(m))
					d.push(m)
				}
			}
			return d
		}
		var lg = function (a, b) {
				var c = function () {}
				c.prototype = a.prototype
				var d = new c()
				a.apply(d, Array.prototype.slice.call(arguments, 1))
				return d
			},
			mg = function (a) {
				var b = a
				return function () {
					if (b) {
						var c = b
						b = null
						c()
					}
				}
			}
		function ng(a) {
			return 'null' !== a.origin
		}
		var qg = function (a, b, c, d) {
				return og(d) ? kg(a, String(b || pg()), c) : []
			},
			tg = function (a, b, c, d, e) {
				if (og(e)) {
					var f = rg(a, d, e)
					if (1 === f.length) return f[0].id
					if (0 !== f.length) {
						f = sg(
							f,
							function (g) {
								return g.ae
							},
							b,
						)
						if (1 === f.length) return f[0].id
						f = sg(
							f,
							function (g) {
								return g.ad
							},
							c,
						)
						return f[0] ? f[0].id : void 0
					}
				}
			}
		function ug(a, b, c, d) {
			var e = pg(),
				f = window
			ng(f) && (f.document.cookie = a)
			var g = pg()
			return e != g || (void 0 != c && 0 <= qg(b, g, !1, d).indexOf(c))
		}
		var Fg = function (a, b, c) {
				function d(u, r, v) {
					if (null == v) return delete g[r], u
					g[r] = v
					return u + '; ' + r + '=' + v
				}
				function e(u, r) {
					if (null == r) return delete g[r], u
					g[r] = !0
					return u + '; ' + r
				}
				if (!og(c.Ya)) return 2
				var f
				void 0 == b
					? (f = a + '=deleted; expires=' + new Date(0).toUTCString())
					: (c.encode && (b = encodeURIComponent(b)), (b = vg(b)), (f = a + '=' + b))
				var g = {}
				f = d(f, 'path', c.path)
				var k
				c.expires instanceof Date
					? (k = c.expires.toUTCString())
					: null != c.expires && (k = '' + c.expires)
				f = d(f, 'expires', k)
				f = d(f, 'max-age', c.Tk)
				f = d(f, 'samesite', c.Uk)
				c.Vk && (f = e(f, 'secure'))
				var m = c.domain
				if (m && 'auto' === m.toLowerCase()) {
					for (var n = wg(), p = 0; p < n.length; ++p) {
						var q = 'none' !== n[p] ? n[p] : void 0,
							t = d(f, 'domain', q)
						t = e(t, c.flags)
						if (!Eg(q, c.path) && ug(t, a, b, c.Ya)) return 0
					}
					return 1
				}
				m && 'none' !== m.toLowerCase() && (f = d(f, 'domain', m))
				f = e(f, c.flags)
				return Eg(m, c.path) ? 1 : ug(f, a, b, c.Ya) ? 0 : 1
			},
			Gg = function (a, b, c) {
				null == c.path && (c.path = '/')
				c.domain || (c.domain = 'auto')
				return Fg(a, b, c)
			}
		function sg(a, b, c) {
			for (var d = [], e = [], f, g = 0; g < a.length; g++) {
				var k = a[g],
					m = b(k)
				m === c ? d.push(k) : void 0 === f || m < f ? ((e = [k]), (f = m)) : m === f && e.push(k)
			}
			return 0 < d.length ? d : e
		}
		function rg(a, b, c) {
			for (var d = [], e = qg(a, void 0, void 0, c), f = 0; f < e.length; f++) {
				var g = e[f].split('.'),
					k = g.shift()
				if (!b || -1 !== b.indexOf(k)) {
					var m = g.shift()
					m &&
						((m = m.split('-')), d.push({ id: g.join('.'), ae: 1 * m[0] || 1, ad: 1 * m[1] || 1 }))
				}
			}
			return d
		}
		var vg = function (a) {
				a && 1200 < a.length && (a = a.substring(0, 1200))
				return a
			},
			Hg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
			Ig = /(^|\.)doubleclick\.net$/i,
			Eg = function (a, b) {
				return Ig.test(window.document.location.hostname) || ('/' === b && Hg.test(a))
			},
			pg = function () {
				return ng(window) ? window.document.cookie : ''
			},
			wg = function () {
				var a = [],
					b = window.document.location.hostname.split('.')
				if (4 === b.length) {
					var c = b[b.length - 1]
					if (parseInt(c, 10).toString() === c) return ['none']
				}
				for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join('.'))
				var e = window.document.location.hostname
				Ig.test(e) || Hg.test(e) || a.push('none')
				return a
			},
			og = function (a) {
				if (!If().h() || !a || !Uf()) return !0
				if (!Tf(a)) return !1
				var b = Rf(a)
				return null == b ? !0 : !!b
			}
		var Jg = function (a) {
				var b = Math.round(2147483647 * Math.random())
				return a ? String(b ^ (jg(a) & 2147483647)) : String(b)
			},
			Kg = function (a) {
				return [Jg(a), Math.round(Fa() / 1e3)].join('.')
			},
			Ng = function (a, b, c, d, e) {
				var f = Lg(b)
				return tg(a, f, Mg(c), d, e)
			},
			Og = function (a, b, c, d) {
				var e = '' + Lg(c),
					f = Mg(d)
				1 < f && (e += '-' + f)
				return [b, e, a].join('.')
			},
			Lg = function (a) {
				if (!a) return 1
				a = 0 === a.indexOf('.') ? a.substr(1) : a
				return a.split('.').length
			},
			Mg = function (a) {
				if (!a || '/' === a) return 1
				'/' !== a[0] && (a = '/' + a)
				'/' !== a[a.length - 1] && (a += '/')
				return a.split('/').length - 1
			}
		function Pg(a, b, c, d) {
			var e,
				f = Number(null != a.qb ? a.qb : void 0)
			0 !== f && (e = new Date((b || Fa()) + 1e3 * (f || 7776e3)))
			return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: e, Ya: d }
		}
		var Qg
		var Ug = function () {
				var a = Rg,
					b = Sg,
					c = Tg(),
					d = function (g) {
						a(g.target || g.srcElement || {})
					},
					e = function (g) {
						b(g.target || g.srcElement || {})
					}
				if (!c.init) {
					Bb(D, 'mousedown', d)
					Bb(D, 'keyup', d)
					Bb(D, 'submit', e)
					var f = HTMLFormElement.prototype.submit
					HTMLFormElement.prototype.submit = function () {
						b(this)
						f.call(this)
					}
					c.init = !0
				}
			},
			Vg = function (a, b, c, d, e) {
				var f = { callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e }
				Tg().decorators.push(f)
			},
			Wg = function (a, b, c) {
				for (var d = Tg().decorators, e = {}, f = 0; f < d.length; ++f) {
					var g = d[f],
						k
					if ((k = !c || g.forms))
						a: {
							var m = g.domains,
								n = a,
								p = !!g.sameHost
							if (m && (p || n !== D.location.hostname))
								for (var q = 0; q < m.length; q++)
									if (m[q] instanceof RegExp) {
										if (m[q].test(n)) {
											k = !0
											break a
										}
									} else if (0 <= n.indexOf(m[q]) || (p && 0 <= m[q].indexOf(n))) {
										k = !0
										break a
									}
							k = !1
						}
					if (k) {
						var t = g.placement
						void 0 == t && (t = g.fragment ? 2 : 1)
						t === b && Ia(e, g.callback())
					}
				}
				return e
			}
		function Tg() {
			var a = sb('google_tag_data', {}),
				b = a.gl
			;(b && b.decorators) || ((b = { decorators: [] }), (a.gl = b))
			return b
		}
		var Xg = /(.*?)\*(.*?)\*(.*)/,
			Yg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
			Zg = /^(?:www\.|m\.|amp\.)+/,
			$g = /([^?#]+)(\?[^#]*)?(#.*)?/
		function ah(a) {
			return new RegExp('(.*?)(^|&)' + a + '=([^&]*)&?(.*)')
		}
		var ch = function (a) {
			var b = [],
				c
			for (c in a)
				if (a.hasOwnProperty(c)) {
					var d = a[c]
					void 0 !== d &&
						d === d &&
						null !== d &&
						'[object Object]' !== d.toString() &&
						(b.push(c), b.push(Va(String(d))))
				}
			var e = b.join('*')
			return ['1', bh(e), e].join('*')
		}
		function bh(a, b) {
			var c = [
					qb.userAgent,
					new Date().getTimezoneOffset(),
					qb.userLanguage || qb.language,
					Math.floor(Fa() / 60 / 1e3) - (void 0 === b ? 0 : b),
					a,
				].join('*'),
				d
			if (!(d = Qg)) {
				for (var e = Array(256), f = 0; 256 > f; f++) {
					for (var g = f, k = 0; 8 > k; k++) g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1
					e[f] = g
				}
				d = e
			}
			Qg = d
			for (var m = 4294967295, n = 0; n < c.length; n++)
				m = (m >>> 8) ^ Qg[(m ^ c.charCodeAt(n)) & 255]
			return ((m ^ -1) >>> 0).toString(36)
		}
		function dh() {
			return function (a) {
				var b = cd(A.location.href),
					c = b.search.replace('?', ''),
					d = Yc(c, '_gl', !0) || ''
				a.query = eh(d) || {}
				var e = ad(b, 'fragment').match(ah('_gl'))
				a.fragment = eh((e && e[3]) || '') || {}
			}
		}
		function fh(a, b) {
			var c = ah(a).exec(b),
				d = b
			if (c) {
				var e = c[2],
					f = c[4]
				d = c[1]
				f && (d = d + e + f)
			}
			return d
		}
		var gh = function (a, b) {
				b || (b = '_gl')
				var c = $g.exec(a)
				if (!c) return ''
				var d = c[1],
					e = fh(b, (c[2] || '').slice(1)),
					f = fh(b, (c[3] || '').slice(1))
				e.length && (e = '?' + e)
				f.length && (f = '#' + f)
				return '' + d + e + f
			},
			hh = function (a) {
				var b = dh(),
					c = Tg()
				c.data || ((c.data = { query: {}, fragment: {} }), b(c.data))
				var d = {},
					e = c.data
				e && (Ia(d, e.query), a && Ia(d, e.fragment))
				return d
			},
			eh = function (a) {
				try {
					var b = ih(a, 3)
					if (void 0 !== b) {
						for (var c = {}, d = b ? b.split('*') : [], e = 0; e + 1 < d.length; e += 2) {
							var f = d[e],
								g = Wa(d[e + 1])
							c[f] = g
						}
						Ya('TAGGING', 6)
						return c
					}
				} catch (k) {
					Ya('TAGGING', 8)
				}
			}
		function ih(a, b) {
			if (a) {
				var c
				a: {
					for (var d = a, e = 0; 3 > e; ++e) {
						var f = Xg.exec(d)
						if (f) {
							c = f
							break a
						}
						d = decodeURIComponent(d)
					}
					c = void 0
				}
				var g = c
				if (g && '1' === g[1]) {
					var k = g[3],
						m
					a: {
						for (var n = g[2], p = 0; p < b; ++p)
							if (n === bh(k, p)) {
								m = !0
								break a
							}
						m = !1
					}
					if (m) return k
					Ya('TAGGING', 7)
				}
			}
		}
		function jh(a, b, c, d) {
			function e(p) {
				p = fh(a, p)
				var q = p.charAt(p.length - 1)
				p && '&' !== q && (p += '&')
				return p + n
			}
			d = void 0 === d ? !1 : d
			var f = $g.exec(c)
			if (!f) return ''
			var g = f[1],
				k = f[2] || '',
				m = f[3] || '',
				n = a + '=' + b
			d ? (m = '#' + e(m.substring(1))) : (k = '?' + e(k.substring(1)))
			return '' + g + k + m
		}
		function kh(a, b) {
			var c = 'FORM' === (a.tagName || '').toUpperCase(),
				d = Wg(b, 1, c),
				e = Wg(b, 2, c),
				f = Wg(b, 3, c)
			if (Ja(d)) {
				var g = ch(d)
				c ? lh('_gl', g, a) : mh('_gl', g, a, !1)
			}
			if (!c && Ja(e)) {
				var k = ch(e)
				mh('_gl', k, a, !0)
			}
			for (var m in f)
				if (f.hasOwnProperty(m))
					a: {
						var n = m,
							p = f[m],
							q = a
						if (q.tagName) {
							if ('a' === q.tagName.toLowerCase()) {
								mh(n, p, q)
								break a
							}
							if ('form' === q.tagName.toLowerCase()) {
								lh(n, p, q)
								break a
							}
						}
						'string' == typeof q && jh(n, p, q)
					}
		}
		function mh(a, b, c, d) {
			if (c.href) {
				var e = jh(a, b, c.href, void 0 === d ? !1 : d)
				fb.test(e) && (c.href = e)
			}
		}
		function lh(a, b, c) {
			if (c && c.action) {
				var d = (c.method || '').toLowerCase()
				if ('get' === d) {
					for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
						var k = e[g]
						if (k.name === a) {
							k.setAttribute('value', b)
							f = !0
							break
						}
					}
					if (!f) {
						var m = D.createElement('input')
						m.setAttribute('type', 'hidden')
						m.setAttribute('name', a)
						m.setAttribute('value', b)
						c.appendChild(m)
					}
				} else if ('post' === d) {
					var n = jh(a, b, c.action)
					fb.test(n) && (c.action = n)
				}
			}
		}
		function Rg(a) {
			try {
				var b
				a: {
					for (var c = a, d = 100; c && 0 < d; ) {
						if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
							b = c
							break a
						}
						c = c.parentNode
						d--
					}
					b = null
				}
				var e = b
				if (e) {
					var f = e.protocol
					;('http:' !== f && 'https:' !== f) || kh(e, e.hostname)
				}
			} catch (g) {}
		}
		function Sg(a) {
			try {
				if (a.action) {
					var b = ad(cd(a.action), 'host')
					kh(a, b)
				}
			} catch (c) {}
		}
		var nh = function (a, b, c, d) {
				Ug()
				Vg(a, b, 'fragment' === c ? 2 : 1, !!d, !1)
			},
			oh = function (a, b) {
				Ug()
				Vg(a, [$c(A.location, 'host', !0)], b, !0, !0)
			},
			ph = function () {
				var a = D.location.hostname,
					b = Yg.exec(D.referrer)
				if (!b) return !1
				var c = b[2],
					d = b[1],
					e = ''
				if (c) {
					var f = c.split('/'),
						g = f[1]
					e = 's' === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
				} else if (d) {
					if (0 === d.indexOf('xn--')) return !1
					e = d.replace(/-/g, '.').replace(/\.\./g, '-')
				}
				var k = a.replace(Zg, ''),
					m = e.replace(Zg, ''),
					n
				if (!(n = k === m)) {
					var p = '.' + m
					n = k.substring(k.length - p.length, k.length) === p
				}
				return n
			},
			qh = function (a, b) {
				return !1 === a ? !1 : a || b || ph()
			}
		var rh = {},
			sh = function (a) {
				return void 0 == rh[a] ? !1 : rh[a]
			}
		var th = ['1'],
			uh = {},
			vh = {},
			Ah = function (a, b) {
				b = void 0 === b ? !0 : b
				var c = wh(a.prefix)
				if (!uh[c])
					if (xh(c, a.path, a.domain)) {
						if (sh('enable_auid_cross_domain')) {
							var d = vh[wh(a.prefix)]
							yh(a, d ? d.id : void 0, d ? d.wf : void 0)
						}
					} else {
						if (sh('enable_auid_fl_iframe')) {
							var e = ed('auiddc')
							if (e) {
								Ya('TAGGING', 17)
								uh[c] = e
								return
							}
						}
						if (b) {
							var f = wh(a.prefix),
								g = Kg()
							if (0 === zh(f, g, a)) {
								var k = sb('google_tag_data', {})
								k._gcl_au || (k._gcl_au = g)
							}
							xh(c, a.path, a.domain)
						}
					}
			}
		function yh(a, b, c) {
			var d = wh(a.prefix),
				e = uh[d]
			if (e) {
				var f = e.split('.')
				if (2 === f.length) {
					var g = Number(f[1]) || 0
					if (g) {
						var k = e
						b && (k = e + '.' + b + '.' + (c ? c : Math.floor(Fa() / 1e3)))
						zh(d, k, a, 1e3 * g)
					}
				}
			}
		}
		function zh(a, b, c, d) {
			var e = Og(b, '1', c.domain, c.path),
				f = Pg(c, d)
			f.Ya = 'ad_storage'
			return Gg(a, e, f)
		}
		function xh(a, b, c) {
			var d = Ng(a, b, c, th, 'ad_storage')
			if (!d) return !1
			Bh(a, d)
			return !0
		}
		function Bh(a, b) {
			var c = b.split('.')
			5 === c.length
				? ((uh[a] = c.slice(0, 2).join('.')),
				  (vh[a] = { id: c.slice(2, 4).join('.'), wf: Number(c[4]) || 0 }))
				: 3 === c.length
				? (vh[a] = { id: c.slice(0, 2).join('.'), wf: Number(c[2]) || 0 })
				: (uh[a] = b)
		}
		function wh(a) {
			return (a || '_gcl') + '_au'
		}
		function Ch(a) {
			Uf() || a()
			Yf(
				function () {
					Rf('ad_storage') && a()
					Zf(a, 'ad_storage')
				},
				['ad_storage'],
			)
		}
		function Dh(a) {
			var b = hh(!0),
				c = wh(a.prefix)
			Ch(function () {
				var d = b[c]
				if (d) {
					Bh(c, d)
					var e = 1e3 * Number(uh[c].split('.')[1])
					if (e) {
						Ya('TAGGING', 16)
						var f = Pg(a, e)
						f.Ya = 'ad_storage'
						var g = Og(d, '1', a.domain, a.path)
						Gg(c, g, f)
					}
				}
			})
		}
		function Eh(a, b, c, d) {
			d = d || {}
			var e = function () {
				var f = wh(d.prefix),
					g = {},
					k = Ng(f, d.path, d.domain, th, 'ad_storage')
				if (!k) return g
				g[f] = k
				return g
			}
			Ch(function () {
				nh(e, a, b, c)
			})
		}
		var Q = []
		Q[7] = !0
		Q[9] = !0
		Q[27] = !0
		Q[11] = !0
		Q[13] = !0
		Q[15] = !0
		Q[25] = !0
		Q[36] = !0
		Q[38] = !0
		Q[43] = !0
		Q[45] = !0
		a: {
			for (var Fh, Gh, Hh = 0; Fh === Gh; )
				if (
					((Fh = Math.floor(2 * Math.random())),
					(Gh = Math.floor(2 * Math.random())),
					Hh++,
					20 < Hh)
				)
					break a
			Fh ? (Q[46] = !0) : (Q[47] = !0)
		}
		Q[52] = !0
		Q[57] = !0
		Q[58] = !0
		Q[60] = !0
		Q[61] = !0
		Q[65] = !0

		Q[68] = !0
		Q[69] = !0
		Q[72] = !0
		Q[76] = !0
		Q[77] = !0
		var R = function (a) {
			return !!Q[a]
		}
		var Ih = function () {
			me.dedupe_gclid || (me.dedupe_gclid = '' + Kg())
			return me.dedupe_gclid
		}
		var Jh = function () {
			var a = !1
			return a
		}
		var S = { D: '', Qa: '' },
			Kh = { Dh: '', Eh: '' }
		S.Ze = Ba('')
		var Lh = function () {
				return Kh.Dh ? Kh.Dh.split('|') : [S.D]
			},
			Mh = function () {
				return Kh.Eh ? Kh.Eh.split('|') : []
			},
			Nh = function () {
				this.container = {}
				this.destination = {}
				this.canonical = {}
			},
			Ph = function () {
				for (var a = Oh(), b = Lh(), c = 0; c < b.length; c++) {
					var d = a.container[b[c]]
					!d || qa(d) ? (a.container[b[c]] = { state: 2 }) : (d.state = 2)
				}
				for (var e = Mh(), f = 0; f < e.length; f++) {
					var g = a.destination[e[f]]
					g && 0 === g.state && J(93)
					g ? (g.state = 2) : (a.destination[e[f]] = { state: 2 })
				}
				a.canonical[S.Qa] = 2
			},
			Qh = function (a) {
				return !!Oh().container[a]
			},
			Rh = function () {
				var a = Oh().container,
					b
				for (b in a)
					if (a.hasOwnProperty(b)) {
						var c = a[b]
						if (qa(c)) {
							if (1 === c) return !0
						} else if (1 === c.state) return !0
					}
				return !1
			},
			Sh = function () {
				var a = {}
				l(Oh().destination, function (b, c) {
					0 === c.state && (a[b] = c)
				})
				return a
			}
		function Oh() {
			var a = me.tidr
			a || ((a = new Nh()), (me.tidr = a))
			return a
		}
		var Th = {
				'': 'n',
				UA: 'u',
				AW: 'a',
				DC: 'd',
				G: 'e',
				GF: 'f',
				GT: 't',
				HA: 'h',
				MC: 'm',
				GTM: 'g',
				OPT: 'o',
			},
			Uh = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 },
			Vh = function (a) {
				var b = S.D.split('-'),
					c = b[0].toUpperCase()
				if (R(45)) {
					var d = {}
					d.pj = S.D
					d.qk = le.Mc
					d.tk = le.Wb
					d.Vj = S.Ze ? 2 : 1
					se ? ((d.me = Uh[c]), d.me || (d.me = 0)) : (d.me = ye ? 13 : 10)
					we ? (d.yf = 1) : Jh() ? (d.yf = 2) : (d.yf = 3)
					var e
					var f = d.me,
						g = d.yf
					void 0 === f
						? (e = '')
						: (g || (g = 0),
						  (e =
								'' +
								ud(1, 1) +
								'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[(f << 2) | g]))
					var k = d.Pk,
						m =
							4 +
							e +
							(k
								? '' +
								  ud(2, 1) +
								  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[k]
								: ''),
						n,
						p = d.tk
					n = p && td.test(p) ? '' + ud(3, 2) + p : ''
					var q,
						t = d.qk
					q = t
						? '' + ud(4, 1) + '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[t]
						: ''
					var u
					var r = d.pj
					if (r && a) {
						var v = r.split('-'),
							w = v[0].toUpperCase()
						if ('GTM' !== w && 'OPT' !== w) u = ''
						else {
							var y = v[1]
							u =
								'' +
								ud(5, 3) +
								'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_'[1 + y.length] +
								(d.Vj || 0) +
								y
						}
					} else u = ''
					return m + n + q + u
				}
				var x = Th[c] || 'i',
					B = a && 'GTM' === c ? b[1] : 'OPT' === c ? b[1] : '',
					z = 'w'
				se && (z = Jh() ? 's' : 'o')
				ue
					? ('w' === z && (z = 'x'), 'o' === z && (z = 'q'))
					: we
					? ('w' === z && (z = 'y'), 'o' === z && (z = 'r'))
					: ye && (z = 'z')
				return '2' + z + x + (4 === le.Wb.length ? le.Wb.slice(1) : le.Wb) + B
			}
		function Wh(a, b) {
			if ('' === a) return b
			var c = Number(a)
			return isNaN(c) ? b : c
		}
		var Xh = function (a, b, c) {
			a.addEventListener && a.addEventListener(b, c, !1)
		}
		function Yh() {
			return hb('iPhone') && !hb('iPod') && !hb('iPad')
		}
		function Zh() {
			Yh() || hb('iPad') || hb('iPod')
		}
		hb('Opera')
		hb('Trident') || hb('MSIE')
		hb('Edge')
		!hb('Gecko') ||
			(-1 != gb().toLowerCase().indexOf('webkit') && !hb('Edge')) ||
			hb('Trident') ||
			hb('MSIE') ||
			hb('Edge')
		;-1 != gb().toLowerCase().indexOf('webkit') && !hb('Edge') && hb('Mobile')
		hb('Macintosh')
		hb('Windows')
		hb('Linux') || hb('CrOS')
		var $h = ma.navigator || null
		$h && ($h.appVersion || '').indexOf('X11')
		hb('Android')
		Yh()
		hb('iPad')
		hb('iPod')
		Zh()
		gb().toLowerCase().indexOf('kaios')
		var ai = function (a, b, c, d) {
				for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d; ) {
					var g = a.charCodeAt(e - 1)
					if (38 == g || 63 == g) {
						var k = a.charCodeAt(e + f)
						if (!k || 61 == k || 38 == k || 35 == k) return e
					}
					e += f + 1
				}
				return -1
			},
			bi = /#|$/,
			ci = function (a, b) {
				var c = a.search(bi),
					d = ai(a, 0, b, c)
				if (0 > d) return null
				var e = a.indexOf('&', d)
				if (0 > e || e > c) e = c
				d += b.length + 1
				return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, ' '))
			},
			di = /[?&]($|#)/,
			ei = function (a, b, c) {
				for (var d, e = a.search(bi), f = 0, g, k = []; 0 <= (g = ai(a, f, b, e)); )
					k.push(a.substring(f, g)), (f = Math.min(a.indexOf('&', g) + 1 || e, e))
				k.push(a.slice(f))
				d = k.join('').replace(di, '$1')
				var m,
					n = null != c ? '=' + encodeURIComponent(String(c)) : ''
				var p = b + n
				if (p) {
					var q,
						t = d.indexOf('#')
					0 > t && (t = d.length)
					var u = d.indexOf('?'),
						r
					0 > u || u > t ? ((u = t), (r = '')) : (r = d.substring(u + 1, t))
					q = [d.slice(0, u), r, d.slice(t)]
					var v = q[1]
					q[1] = p ? (v ? v + '&' + p : p) : v
					m = q[0] + (q[1] ? '?' + q[1] : '') + q[2]
				} else m = d
				return m
			}
		var fi = function (a, b) {
			if (a) for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
		}
		function gi(a) {
			if (!a || !D.head) return null
			var b = hi('META')
			D.head.appendChild(b)
			b.httpEquiv = 'origin-trial'
			b.content = a
			return b
		}
		var ii = function () {
				if (A.top == A) return 0
				var a = A.location.ancestorOrigins
				if (a) return a[a.length - 1] == A.location.origin ? 1 : 2
				var b
				var c = A.top
				try {
					var d
					if ((d = !!c && null != c.location.href))
						b: {
							try {
								Gf(c.foo)
								d = !0
								break b
							} catch (e) {}
							d = !1
						}
					b = d
				} catch (e) {
					b = !1
				}
				return b ? 1 : 2
			},
			hi = function (a, b) {
				b = void 0 === b ? document : b
				return b.createElement(String(a).toLowerCase())
			}
		function ji(a, b, c, d) {
			d = void 0 === d ? !1 : d
			a.google_image_requests || (a.google_image_requests = [])
			var e = hi('IMG', a.document)
			if (c) {
				var f = function () {
					if (c) {
						var g = a.google_image_requests,
							k = ab(g, e)
						0 <= k && Array.prototype.splice.call(g, k, 1)
					}
					e.removeEventListener && e.removeEventListener('load', f, !1)
					e.removeEventListener && e.removeEventListener('error', f, !1)
				}
				Xh(e, 'load', f)
				Xh(e, 'error', f)
			}
			d && (e.attributionsrc = '')
			e.src = b
			a.google_image_requests.push(e)
		}
		var li = function (a) {
				var b
				b = void 0 === b ? !1 : b
				var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe'
				fi(a, function (d, e) {
					d && (c += '&' + e + '=' + encodeURIComponent(d))
				})
				ki(c, b)
			},
			ki = function (a, b) {
				var c = window,
					d
				b = void 0 === b ? !1 : b
				d = void 0 === d ? !1 : d
				if (c.fetch) {
					var e = {
						keepalive: !0,
						credentials: 'include',
						redirect: 'follow',
						method: 'get',
						mode: 'no-cors',
					}
					d &&
						((e.mode = 'cors'), (e.headers = { 'Attribution-Reporting-Eligible': 'event-source' }))
					c.fetch(a, e)
				} else ji(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
			}
		var mi = function () {}
		var ni = function (a) {
				void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0)
				void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0)
				return (void 0 !== a.tcString && 'string' !== typeof a.tcString) ||
					(void 0 !== a.listenerId && 'number' !== typeof a.listenerId)
					? 2
					: a.cmpStatus && 'error' !== a.cmpStatus
					? 0
					: 3
			},
			oi = function (a, b) {
				b = void 0 === b ? {} : b
				this.m = a
				this.h = null
				this.M = {}
				this.sb = 0
				var c
				this.V = null != (c = b.Ck) ? c : 500
				var d
				this.I = null != (d = b.Qk) ? d : !1
				this.B = null
			}
		la(oi, mi)
		oi.prototype.addEventListener = function (a) {
			var b = this,
				c = { internalBlockOnErrors: this.I },
				d = mg(function () {
					return a(c)
				}),
				e = 0
			;-1 !== this.V &&
				(e = setTimeout(function () {
					c.tcString = 'tcunavailable'
					c.internalErrorState = 1
					d()
				}, this.V))
			var f = function (g, k) {
				clearTimeout(e)
				g
					? ((c = g),
					  (c.internalErrorState = ni(c)),
					  (c.internalBlockOnErrors = b.I),
					  (k && 0 === c.internalErrorState) ||
							((c.tcString = 'tcunavailable'), k || (c.internalErrorState = 3)))
					: ((c.tcString = 'tcunavailable'), (c.internalErrorState = 3))
				a(c)
			}
			try {
				pi(this, 'addEventListener', f)
			} catch (g) {
				;(c.tcString = 'tcunavailable'),
					(c.internalErrorState = 3),
					e && (clearTimeout(e), (e = 0)),
					d()
			}
		}
		oi.prototype.removeEventListener = function (a) {
			a && a.listenerId && pi(this, 'removeEventListener', null, a.listenerId)
		}
		var ri = function (a, b, c) {
				var d
				d = void 0 === d ? '755' : d
				var e
				a: {
					if (a.publisher && a.publisher.restrictions) {
						var f = a.publisher.restrictions[b]
						if (void 0 !== f) {
							e = f[void 0 === d ? '755' : d]
							break a
						}
					}
					e = void 0
				}
				var g = e
				if (0 === g) return !1
				var k = c
				2 === c ? ((k = 0), 2 === g && (k = 1)) : 3 === c && ((k = 1), 1 === g && (k = 0))
				var m
				if (0 === k)
					if (a.purpose && a.vendor) {
						var n = qi(a.vendor.consents, void 0 === d ? '755' : d)
						m =
							n && '1' === b && a.purposeOneTreatment && 'CH' === a.publisherCC
								? !0
								: n && qi(a.purpose.consents, b)
					} else m = !0
				else
					m =
						1 === k
							? a.purpose && a.vendor
								? qi(a.purpose.legitimateInterests, b) &&
								  qi(a.vendor.legitimateInterests, void 0 === d ? '755' : d)
								: !0
							: !0
				return m
			},
			qi = function (a, b) {
				return !(!a || !a[b])
			},
			pi = function (a, b, c, d) {
				c || (c = function () {})
				if ('function' === typeof a.m.__tcfapi) {
					var e = a.m.__tcfapi
					e(b, 2, c, d)
				} else if (si(a)) {
					ti(a)
					var f = ++a.sb
					a.M[f] = c
					if (a.h) {
						var g = {}
						a.h.postMessage(
							((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }), g),
							'*',
						)
					}
				} else c({}, !1)
			},
			si = function (a) {
				if (a.h) return a.h
				var b
				a: {
					for (var c = a.m, d = 0; 50 > d; ++d) {
						var e
						try {
							e = !(!c.frames || !c.frames.__tcfapiLocator)
						} catch (k) {
							e = !1
						}
						if (e) {
							b = c
							break a
						}
						var f
						b: {
							try {
								var g = c.parent
								if (g && g != c) {
									f = g
									break b
								}
							} catch (k) {}
							f = null
						}
						if (!(c = f)) break
					}
					b = null
				}
				a.h = b
				return a.h
			},
			ti = function (a) {
				a.B ||
					((a.B = function (b) {
						try {
							var c
							c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn
							a.M[c.callId](c.returnValue, c.success)
						} catch (d) {}
					}),
					Xh(a.m, 'message', a.B))
			},
			ui = function (a) {
				if (!1 === a.gdprApplies) return !0
				void 0 === a.internalErrorState && (a.internalErrorState = ni(a))
				return 'error' === a.cmpStatus || 0 !== a.internalErrorState
					? a.internalBlockOnErrors
						? (li({ e: String(a.internalErrorState) }), !1)
						: !0
					: 'loaded' !== a.cmpStatus ||
					  ('tcloaded' !== a.eventStatus && 'useractioncomplete' !== a.eventStatus)
					? !1
					: !0
			}
		var vi = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 },
			wi = Wh('', 500)
		function xi() {
			var a = me.tcf || {}
			return (me.tcf = a)
		}
		var Bi = function () {
			var a = xi(),
				b = new oi(A, { Ck: -1 })
			if (
				!0 === A.gtag_enable_tcf_support &&
				!a.active &&
				('function' === typeof A.__tcfapi || 'function' === typeof b.m.__tcfapi || null != si(b))
			) {
				a.active = !0
				a.he = {}
				yi()
				a.tcString = 'tcunavailable'
				try {
					b.addEventListener(function (c) {
						if (0 !== c.internalErrorState) zi(a), Ai(a)
						else {
							var d
							a.gdprApplies = c.gdprApplies
							if (!1 === c.gdprApplies) {
								var e = {},
									f
								for (f in vi) vi.hasOwnProperty(f) && (e[f] = !0)
								d = e
								b.removeEventListener(c)
							} else if (
								'tcloaded' === c.eventStatus ||
								'useractioncomplete' === c.eventStatus ||
								'cmpuishown' === c.eventStatus
							) {
								var g = {},
									k
								for (k in vi)
									if (vi.hasOwnProperty(k))
										if ('1' === k) {
											var m,
												n = c,
												p = !0
											p = void 0 === p ? !1 : p
											m = ui(n)
												? !1 === n.gdprApplies ||
												  'tcunavailable' === n.tcString ||
												  (void 0 === n.gdprApplies && !p) ||
												  'string' !== typeof n.tcString ||
												  !n.tcString.length
													? !0
													: ri(n, '1', 0)
												: !1
											g['1'] = m
										} else g[k] = ri(c, k, vi[k])
								d = g
							}
							d && ((a.tcString = c.tcString || 'tcempty'), (a.he = d), Ai(a))
						}
					})
				} catch (c) {
					zi(a), Ai(a)
				}
			}
		}
		function zi(a) {
			a.type = 'e'
			a.tcString = 'tcunavailable'
		}
		function yi() {
			var a = {},
				b = ((a.ad_storage = 'denied'), (a.wait_for_update = wi), a)
			dg(b)
		}
		function Ai(a) {
			var b = {},
				c = ((b.ad_storage = a.he['1'] ? 'granted' : 'denied'), b)
			eg(c, { eventId: 0 }, { gdprApplies: a ? a.gdprApplies : void 0, tcString: Ci() })
		}
		var Ci = function () {
				var a = xi()
				return a.active ? a.tcString || '' : ''
			},
			Di = function () {
				var a = xi()
				return a.active && void 0 !== a.gdprApplies ? (a.gdprApplies ? '1' : '0') : ''
			},
			Ei = function (a) {
				if (!vi.hasOwnProperty(String(a))) return !0
				var b = xi()
				return b.active && b.he ? !!b.he[String(a)] : !0
			}
		var Fi = function (a) {
			var b = String(a[Qb.Na] || '').replace(/_/g, '')
			0 === b.indexOf('cvt') && (b = 'cvt')
			return b
		}
		var Gi = ['L', 'S', 'Y'],
			Hi = ['S', 'E'],
			Ii = { sampleRate: '0.005000', Wh: '', Vh: Number('5'), Uh: Number('') },
			Ji =
				0 <= D.location.search.indexOf('?gtm_latency=') ||
				0 <= D.location.search.indexOf('&gtm_latency='),
			Ki
		if (!(Ki = Ji)) {
			var Li = Math.random(),
				Mi = Ii.sampleRate
			Ki = Li < Mi
		}
		var Ni = Ki,
			Oi = 'https://www.googletagmanager.com/a?id=' + S.D + '&cv=1',
			Pi = { label: S.D + ' Container', children: [{ label: 'Initialization', children: [] }] }
		function Qi() {
			return [Oi, '&v=3&t=t', '&pid=' + ta(), '&rv=' + le.Wb].join('')
		}
		var Ri = Qi()
		function Si() {
			Ri = Qi()
		}
		var Ti = {},
			Ui = '',
			Vi = '',
			Wi = '',
			Xi = '',
			Yi = [],
			Zi = '',
			$i = {},
			aj = !1,
			bj = {},
			cj = {},
			dj = {},
			ej = '',
			fj = void 0,
			gj = {},
			hj = {},
			ij = void 0,
			jj = 5
		0 < Ii.Vh && (jj = Ii.Vh)
		var kj = (function (a, b) {
				for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0)
				return {
					Nj: function () {
						return c < a ? !1 : Fa() - d[c % a] < b
					},
					mk: function () {
						var f = c++ % a
						d[f] = Fa()
					},
				}
			})(jj, 1e3),
			lj = 1e3,
			mj = ''
		function nj(a) {
			var b = fj
			if (void 0 === b) return ''
			var c = $a('GTM'),
				d = $a('TAGGING'),
				e = $a('HEALTH'),
				f = Ri,
				g = Ti[b] ? '' : '&es=1',
				k = gj[b],
				m = Fj(b),
				n = Gj(),
				p = Ui,
				q = Vi,
				t = ej,
				u = Hj(a),
				r = Wi,
				v = Xi,
				w
			return [
				f,
				g,
				k,
				m,
				c ? '&u=' + c : '',
				d ? '&ut=' + d : '',
				e ? '&h=' + e : '',
				n,
				p,
				q,
				t,
				u,
				r,
				v,
				w,
				Zi ? '&dl=' + encodeURIComponent(Zi) : '',
				0 < Yi.length ? '&tdp=' + Yi.join('.') : '',
				le.Mc ? '&x=' + le.Mc : '',
				'&z=0',
			].join('')
		}
		function Jj() {
			ij && (A.clearTimeout(ij), (ij = void 0))
			if (void 0 !== fj && (!Ti[fj] || Ui || Vi))
				if (hj[fj] || kj.Nj() || 0 >= lj--) J(1), (hj[fj] = !0)
				else {
					kj.mk()
					var a = nj(!0)
					Ab(a)
					if (Xi || (Zi && 0 < Yi.length)) {
						var b = a.replace('/a?', '/td?')
						Ab(b)
					}
					Ti[fj] = !0
					Zi = Xi = Wi = ej = Vi = Ui = ''
					Yi = []
				}
		}
		function Kj() {
			ij || (ij = A.setTimeout(Jj, 500))
		}
		function Lj(a) {
			return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : '*'
		}
		function Mj() {
			2022 <= nj().length && Jj()
		}
		function Gj() {
			return (
				'&tc=' +
				qc.filter(function (a) {
					return a
				}).length
			)
		}
		var Oj = function (a, b) {
				if (Ni && !hj[a] && fj !== a) {
					Jj()
					fj = a
					Wi = Ui = ''
					gj[a] = '&e=' + Lj(b) + '&eid=' + a
					Kj()
				}
			},
			Pj = function (a, b, c, d) {
				if (Ni && b) {
					var e = Fi(b),
						f = c + e
					if (!hj[a]) {
						a !== fj && (Jj(), (fj = a))
						Ui = Ui ? Ui + '.' + f : '&tr=' + f
						var g = b['function']
						if (!g) throw Error('Error: No function name given for function call.')
						var k = (sc[g] ? '1' : '2') + e
						Wi = Wi ? Wi + '.' + k : '&ti=' + k
						Kj()
						Mj()
					}
				}
			},
			Qj = function (a, b, c) {
				if (Ni && a && a[Qb.ob]) {
					var d = b + '.' + a[Qb.ob]
					dj[d] = c
					'html' == Fi(a) && mj == d && (Ui += ':' + Math.floor(c))
				}
			}
		function Hj(a) {}
		function Fj(a) {}
		var Xj = function (a, b, c) {
				if (Ni && void 0 !== a && !hj[a]) {
					a !== fj && (Jj(), (fj = a))
					var d = c + b
					Vi = Vi ? Vi + '.' + d : '&epr=' + d
					Kj()
					Mj()
				}
			},
			Yj = function (a, b, c) {},
			Ij = void 0
		ib()
		Yh() || hb('iPod')
		hb('iPad')
		!hb('Android') || jb() || ib() || hb('Opera') || hb('Silk')
		jb()
		!hb('Safari') ||
			jb() ||
			hb('Coast') ||
			hb('Opera') ||
			hb('Edge') ||
			hb('Edg/') ||
			hb('OPR') ||
			ib() ||
			hb('Silk') ||
			hb('Android') ||
			Zh()
		var Zj = {},
			ak = null,
			bk = function (a) {
				for (var b = [], c = 0, d = 0; d < a.length; d++) {
					var e = a.charCodeAt(d)
					255 < e && ((b[c++] = e & 255), (e >>= 8))
					b[c++] = e
				}
				var f = 4
				void 0 === f && (f = 0)
				if (!ak) {
					ak = {}
					for (
						var g = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''),
							k = ['+/=', '+/', '-_=', '-_.', '-_'],
							m = 0;
						5 > m;
						m++
					) {
						var n = g.concat(k[m].split(''))
						Zj[m] = n
						for (var p = 0; p < n.length; p++) {
							var q = n[p]
							void 0 === ak[q] && (ak[q] = p)
						}
					}
				}
				for (
					var t = Zj[f], u = Array(Math.floor(b.length / 3)), r = t[64] || '', v = 0, w = 0;
					v < b.length - 2;
					v += 3
				) {
					var y = b[v],
						x = b[v + 1],
						B = b[v + 2],
						z = t[y >> 2],
						C = t[((y & 3) << 4) | (x >> 4)],
						H = t[((x & 15) << 2) | (B >> 6)],
						I = t[B & 63]
					u[w++] = '' + z + C + H + I
				}
				var E = 0,
					K = r
				switch (b.length - v) {
					case 2:
						;(E = b[v + 1]), (K = t[(E & 15) << 2] || r)
					case 1:
						var M = b[v]
						u[w] = '' + t[M >> 2] + t[((M & 3) << 4) | (E >> 4)] + K + r
				}
				return u.join('')
			}
		var ck =
			'platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64'.split(
				' ',
			)
		function dk() {
			var a
			return null != (a = A.google_tag_data) ? a : (A.google_tag_data = {})
		}
		function ek() {
			var a = A.google_tag_data,
				b
			if (null != a && a.uach) {
				var c = a.uach,
					d = Object.assign({}, c)
				c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0))
				b = d
			} else b = null
			return b
		}
		function fk() {
			var a, b
			return null != (b = null == (a = A.google_tag_data) ? void 0 : a.uach_promise) ? b : null
		}
		function gk() {
			var a, b
			return (
				'function' ===
				typeof (null == (a = A.navigator)
					? void 0
					: null == (b = a.userAgentData)
					? void 0
					: b.getHighEntropyValues)
			)
		}
		function hk() {
			if (!gk()) return null
			var a = dk()
			if (a.uach_promise) return a.uach_promise
			var b = A.navigator.userAgentData.getHighEntropyValues(ck).then(function (c) {
				null != a.uach || (a.uach = c)
				return c
			})
			return (a.uach_promise = b)
		}
		var nk = function (a) {
			for (
				var b = [],
					c = D.cookie.split(';'),
					d = new RegExp('^\\s*' + (a || '_gac') + '_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$'),
					e = 0;
				e < c.length;
				e++
			) {
				var f = c[e].match(d)
				f && b.push({ Jf: f[1], value: f[2], timestamp: Number(f[2].split('.')[1]) || 0 })
			}
			b.sort(function (g, k) {
				return k.timestamp - g.timestamp
			})
			return b
		}
		function ok(a, b) {
			var c = nk(a),
				d = {}
			if (!c || !c.length) return d
			for (var e = 0; e < c.length; e++) {
				var f = c[e].value.split('.')
				if (!('1' !== f[0] || (b && 3 > f.length) || (!b && 3 !== f.length)) && Number(f[1])) {
					d[c[e].Jf] || (d[c[e].Jf] = [])
					var g = { version: f[0], timestamp: 1e3 * Number(f[1]), aa: f[2] }
					b && 3 < f.length && (g.labels = f.slice(3))
					d[c[e].Jf].push(g)
				}
			}
			return d
		}
		var pk = /^\w+$/,
			qk = /^[\w-]+$/,
			rk = { aw: '_aw', dc: '_dc', gf: '_gf', ha: '_ha', gp: '_gp', gb: '_gb' },
			sk = function () {
				if (!If().h() || !Uf()) return !0
				var a = Rf('ad_storage')
				return null == a ? !0 : !!a
			},
			tk = function (a, b) {
				Tf('ad_storage')
					? sk()
						? a()
						: Zf(a, 'ad_storage')
					: b
					? Ya('TAGGING', 3)
					: Yf(
							function () {
								tk(a, !0)
							},
							['ad_storage'],
					  )
			},
			vk = function (a) {
				return uk(a).map(function (b) {
					return b.aa
				})
			},
			uk = function (a) {
				var b = []
				if (!ng(A) || !D.cookie) return b
				var c = qg(a, D.cookie, void 0, 'ad_storage')
				if (!c || 0 == c.length) return b
				for (var d = {}, e = 0; e < c.length; d = { hd: d.hd }, e++) {
					var f = wk(c[e])
					if (null != f) {
						var g = f,
							k = g.version
						d.hd = g.aa
						var m = g.timestamp,
							n = g.labels,
							p = sa(
								b,
								(function (q) {
									return function (t) {
										return t.aa === q.hd
									}
								})(d),
							)
						p
							? ((p.timestamp = Math.max(p.timestamp, m)), (p.labels = xk(p.labels, n || [])))
							: b.push({ version: k, aa: d.hd, timestamp: m, labels: n })
					}
				}
				b.sort(function (q, t) {
					return t.timestamp - q.timestamp
				})
				return yk(b)
			}
		function xk(a, b) {
			for (var c = {}, d = [], e = 0; e < a.length; e++) (c[a[e]] = !0), d.push(a[e])
			for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f])
			return d
		}
		function zk(a) {
			return a && 'string' == typeof a && a.match(pk) ? a : '_gcl'
		}
		var Bk = function () {
				var a = cd(A.location.href),
					b = ad(a, 'query', !1, void 0, 'gclid'),
					c = ad(a, 'query', !1, void 0, 'gclsrc'),
					d = ad(a, 'query', !1, void 0, 'wbraid'),
					e = ad(a, 'query', !1, void 0, 'dclid')
				if (!b || !c || !d) {
					var f = a.hash.replace('#', '')
					b = b || Yc(f, 'gclid')
					c = c || Yc(f, 'gclsrc')
					d = d || Yc(f, 'wbraid')
				}
				return Ak(b, c, e, d)
			},
			Ak = function (a, b, c, d) {
				var e = {},
					f = function (g, k) {
						e[k] || (e[k] = [])
						e[k].push(g)
					}
				e.gclid = a
				e.gclsrc = b
				e.dclid = c
				void 0 !== d && qk.test(d) && ((e.gbraid = d), f(d, 'gb'))
				if (void 0 !== a && a.match(qk))
					switch (b) {
						case void 0:
							f(a, 'aw')
							break
						case 'aw.ds':
							f(a, 'aw')
							f(a, 'dc')
							break
						case 'ds':
							f(a, 'dc')
							break
						case '3p.ds':
							f(a, 'dc')
							break
						case 'gf':
							f(a, 'gf')
							break
						case 'ha':
							f(a, 'ha')
					}
				c && f(c, 'dc')
				return e
			},
			Dk = function (a) {
				var b = Bk()
				tk(function () {
					Ck(b, !1, a)
				})
			}
		function Ck(a, b, c, d, e) {
			function f(w, y) {
				var x = Ek(w, g)
				x && (Gg(x, y, k), (m = !0))
			}
			c = c || {}
			e = e || []
			var g = zk(c.prefix)
			d = d || Fa()
			var k = Pg(c, d, !0)
			k.Ya = 'ad_storage'
			var m = !1,
				n = Math.round(d / 1e3),
				p = function (w) {
					var y = ['GCL', n, w]
					0 < e.length && y.push(e.join('.'))
					return y.join('.')
				}
			a.aw && f('aw', p(a.aw[0]))
			a.dc && f('dc', p(a.dc[0]))
			a.gf && f('gf', p(a.gf[0]))
			a.ha && f('ha', p(a.ha[0]))
			a.gp && f('gp', p(a.gp[0]))
			if (!m && a.gb) {
				var q = a.gb[0],
					t = Ek('gb', g),
					u = !1
				if (!b)
					for (var r = uk(t), v = 0; v < r.length; v++)
						r[v].aa === q && r[v].labels && 0 < r[v].labels.length && (u = !0)
				u || f('gb', p(q))
			}
		}
		var Gk = function (a, b) {
				var c = hh(!0)
				tk(function () {
					for (var d = zk(b.prefix), e = 0; e < a.length; ++e) {
						var f = a[e]
						if (void 0 !== rk[f]) {
							var g = Ek(f, d),
								k = c[g]
							if (k) {
								var m = Math.min(Fk(k), Fa()),
									n
								b: {
									var p = m
									if (ng(A))
										for (var q = qg(g, D.cookie, void 0, 'ad_storage'), t = 0; t < q.length; ++t)
											if (Fk(q[t]) > p) {
												n = !0
												break b
											}
									n = !1
								}
								if (!n) {
									var u = Pg(b, m, !0)
									u.Ya = 'ad_storage'
									Gg(g, k, u)
								}
							}
						}
					}
					Ck(Ak(c.gclid, c.gclsrc), !1, b)
				})
			},
			Ek = function (a, b) {
				var c = rk[a]
				if (void 0 !== c) return b + c
			},
			Fk = function (a) {
				return 0 !== Hk(a.split('.')).length ? 1e3 * (Number(a.split('.')[1]) || 0) : 0
			}
		function wk(a) {
			var b = Hk(a.split('.'))
			return 0 === b.length
				? null
				: { version: b[0], aa: b[2], timestamp: 1e3 * (Number(b[1]) || 0), labels: b.slice(3) }
		}
		function Hk(a) {
			return 3 > a.length ||
				('GCL' !== a[0] && '1' !== a[0]) ||
				!/^\d+$/.test(a[1]) ||
				!qk.test(a[2])
				? []
				: a
		}
		var Ik = function (a, b, c, d, e) {
				if (ra(b) && ng(A)) {
					var f = zk(e),
						g = function () {
							for (var k = {}, m = 0; m < a.length; ++m) {
								var n = Ek(a[m], f)
								if (n) {
									var p = qg(n, D.cookie, void 0, 'ad_storage')
									p.length && (k[n] = p.sort()[p.length - 1])
								}
							}
							return k
						}
					tk(function () {
						nh(g, b, c, d)
					})
				}
			},
			yk = function (a) {
				return a.filter(function (b) {
					return qk.test(b.aa)
				})
			},
			Jk = function (a, b) {
				if (ng(A)) {
					for (var c = zk(b.prefix), d = {}, e = 0; e < a.length; e++)
						rk[a[e]] && (d[a[e]] = rk[a[e]])
					tk(function () {
						l(d, function (f, g) {
							var k = qg(c + g, D.cookie, void 0, 'ad_storage')
							k.sort(function (u, r) {
								return Fk(r) - Fk(u)
							})
							if (k.length) {
								var m = k[0],
									n = Fk(m),
									p = 0 !== Hk(m.split('.')).length ? m.split('.').slice(3) : [],
									q = {},
									t
								t = 0 !== Hk(m.split('.')).length ? m.split('.')[2] : void 0
								q[f] = [t]
								Ck(q, !0, b, n, p)
							}
						})
					})
				}
			}
		function Kk(a, b) {
			for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0
			return !1
		}
		var Lk = function (a) {
				function b(e, f, g) {
					g && (e[f] = g)
				}
				if (Uf()) {
					var c = Bk()
					if (Kk(c, a)) {
						var d = {}
						b(d, 'gclid', c.gclid)
						b(d, 'dclid', c.dclid)
						b(d, 'gclsrc', c.gclsrc)
						b(d, 'wbraid', c.gbraid)
						oh(function () {
							return d
						}, 3)
						oh(function () {
							var e = {}
							return (e._up = '1'), e
						}, 1)
					}
				}
			},
			Mk = function (a, b, c, d) {
				var e = []
				c = c || {}
				if (!sk()) return e
				var f = uk(a)
				if (!f.length) return e
				for (var g = 0; g < f.length; g++)
					-1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1)
				if (d) return e
				if (1 !== e[0]) {
					var k = f[0],
						m = f[0].timestamp,
						n = [k.version, Math.round(m / 1e3), k.aa].concat(k.labels || [], [b]).join('.'),
						p = Pg(c, m, !0)
					p.Ya = 'ad_storage'
					Gg(a, n, p)
				}
				return e
			}
		function Nk(a, b) {
			var c = zk(b),
				d = Ek(a, c)
			if (!d) return 0
			for (var e = uk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp)
			return f
		}
		function Ok(a) {
			var b = 0,
				c
			for (c in a)
				for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp))
			return b
		}
		var Pk = function (a) {
			var b = Math.max(Nk('aw', a), Ok(sk() ? ok() : {}))
			return Math.max(Nk('gb', a), Ok(sk() ? ok('_gac_gb', !0) : {})) > b
		}
		var Uk = /[A-Z]+/,
			Vk = /\s/,
			Wk = function (a) {
				if (h(a)) {
					a = Da(a)
					var b = a.indexOf('-')
					if (!(0 > b)) {
						var c = a.substring(0, b)
						if (Uk.test(c)) {
							for (var d = a.substring(b + 1).split('/'), e = 0; e < d.length; e++)
								if (!d[e] || (Vk.test(d[e]) && ('AW' !== c || 1 !== e))) return
							return { id: a, prefix: c, T: c + '-' + d[0], K: d }
						}
					}
				}
			},
			Yk = function (a) {
				for (var b = {}, c = 0; c < a.length; ++c) {
					var d = Wk(a[c])
					d && (b[d.id] = d)
				}
				Xk(b)
				var e = []
				l(b, function (f, g) {
					e.push(g)
				})
				return e
			}
		function Xk(a) {
			var b = [],
				c
			for (c in a)
				if (a.hasOwnProperty(c)) {
					var d = a[c]
					'AW' === d.prefix && d.K[1] && b.push(d.T)
				}
			for (var e = 0; e < b.length; ++e) delete a[b[e]]
		}
		var Zk = function (a, b, c, d) {
			var e = yb(),
				f
			if (1 === e)
				a: {
					var g = Ae
					g = g.toLowerCase()
					for (
						var k = 'https://' + g,
							m = 'http://' + g,
							n = 1,
							p = D.getElementsByTagName('script'),
							q = 0;
						q < p.length && 100 > q;
						q++
					) {
						var t = p[q].src
						if (t) {
							t = t.toLowerCase()
							if (0 === t.indexOf(m)) {
								f = 3
								break a
							}
							1 === n && 0 === t.indexOf(k) && (n = 2)
						}
					}
					f = n
				}
			else f = e
			return (2 === f || d || 'http:' != A.location.protocol ? a : b) + c
		}
		var kl = function (a, b, c) {
				this.target = a
				this.eventName = b
				this.h = c
				this.m = {}
				this.metadata = G(c.eventMetadata || {})
				this.J = !1
			},
			ll = function (a, b, c) {
				var d = P(a.h, b)
				void 0 !== d ? (a.m[b] = d) : void 0 !== c && (a.m[b] = c)
			},
			ml = function (a, b, c) {
				var d = Ve(a.target.T)
				return d && d.hasOwnProperty(b) ? d[b] : c
			}
		function nl(a) {
			return {
				getDestinationId: function () {
					return a.target.T
				},
				getEventName: function () {
					return a.eventName
				},
				setEventName: function (b) {
					return void (a.eventName = b)
				},
				getHitData: function (b) {
					return a.m[b]
				},
				setHitData: function (b, c) {
					return void (a.m[b] = c)
				},
				setHitDataIfNotDefined: function (b, c) {
					void 0 === a.m[b] && (a.m[b] = c)
				},
				copyToHitData: function (b, c) {
					ll(a, b, c)
				},
				getMetadata: function (b) {
					return a.metadata[b]
				},
				setMetadata: function (b, c) {
					return void (a.metadata[b] = c)
				},
				abort: function () {
					return void (a.J = !0)
				},
				getProcessedEvent: function () {
					return a
				},
				getFromEventContext: function (b) {
					return P(a.h, b)
				},
			}
		}
		var El = function (a, b, c, d, e, f, g, k, m, n, p, q) {
				this.eventId = a
				this.priorityId = b
				this.h = c
				this.M = d
				this.m = e
				this.I = f
				this.V = g
				this.B = k
				this.eventMetadata = m
				this.R = n
				this.P = p
				this.F = q
			},
			P = function (a, b, c) {
				if (void 0 !== a.h[b]) return a.h[b]
				if (void 0 !== a.M[b]) return a.M[b]
				if (void 0 !== a.m[b]) return a.m[b]
				Ni && Fl(a, a.I[b], a.V[b]) && (J(71), J(79))
				return void 0 !== a.I[b] ? a.I[b] : void 0 !== a.B[b] ? a.B[b] : c
			},
			Gl = function (a) {
				function b(g) {
					for (var k = Object.keys(g), m = 0; m < k.length; ++m) c[k[m]] = 1
				}
				var c = {}
				b(a.h)
				b(a.M)
				b(a.m)
				b(a.I)
				if (Ni)
					for (var d = Object.keys(a.V), e = 0; e < d.length; e++) {
						var f = d[e]
						if ('event' !== f && 'gtm' !== f && 'tagTypeBlacklist' !== f && !c.hasOwnProperty(f)) {
							J(71)
							J(80)
							break
						}
					}
				return Object.keys(c)
			},
			Hl = function (a, b, c) {
				function d(m) {
					Ob(m) &&
						l(m, function (n, p) {
							f = !0
							e[n] = p
						})
				}
				var e = {},
					f = !1
				;(c && 1 !== c) || (d(a.B[b]), d(a.I[b]), d(a.m[b]), d(a.M[b]))
				;(c && 2 !== c) || d(a.h[b])
				if (Ni) {
					var g = f,
						k = e
					e = {}
					f = !1
					;(c && 1 !== c) || (d(a.B[b]), d(a.V[b]), d(a.m[b]), d(a.M[b]))
					;(c && 2 !== c) || d(a.h[b])
					if (f !== g || Fl(a, e, k)) J(71), J(81)
					f = g
					e = k
				}
				return f ? e : void 0
			},
			Il = function (a) {
				var b = [N.g.uc, N.g.vd, N.g.wd, N.g.xd, N.g.yd, N.g.zd, N.g.Ad],
					c = {},
					d = !1,
					e = function (k) {
						for (var m = 0; m < b.length; m++) void 0 !== k[b[m]] && ((c[b[m]] = k[b[m]]), (d = !0))
						return d
					}
				if (e(a.h) || e(a.M) || e(a.m)) return c
				e(a.I)
				if (Ni) {
					var f = c,
						g = d
					c = {}
					d = !1
					e(a.V)
					Fl(a, c, f) && (J(71), J(82))
					c = f
					d = g
				}
				if (d) return c
				e(a.B)
				return c
			},
			Fl = function (a, b, c) {
				if (!Ni) return !1
				try {
					if (b === c) return !1
					var d = Mb(b)
					if (d !== Mb(c) || !((Ob(b) && Ob(c)) || 'array' === d)) return !0
					if ('array' === d) {
						if (b.length !== c.length) return !0
						for (var e = 0; e < b.length; e++) if (Fl(a, b[e], c[e])) return !0
					} else {
						for (var f in c) if (!b.hasOwnProperty(f)) return !0
						for (var g in b) if (!c.hasOwnProperty(g) || Fl(a, b[g], c[g])) return !0
					}
				} catch (k) {
					J(72)
				}
				return !1
			},
			Jl = function (a, b) {
				this.Mi = a
				this.Ni = b
				this.I = {}
				this.Sg = {}
				this.h = {}
				this.M = {}
				this.m = {}
				this.Kc = {}
				this.B = {}
				this.kc = function () {}
				this.sb = function () {}
				this.V = !1
			},
			Kl = function (a, b) {
				a.I = b
				return a
			},
			Ll = function (a, b) {
				a.Sg = b
				return a
			},
			Ml = function (a, b) {
				a.h = b
				return a
			},
			Nl = function (a, b) {
				a.M = b
				return a
			},
			Ol = function (a, b) {
				a.m = b
				return a
			},
			Pl = function (a, b) {
				a.Kc = b
				return a
			},
			Ql = function (a, b) {
				a.B = b || {}
				return a
			},
			Rl = function (a, b) {
				a.kc = b
				return a
			},
			Sl = function (a, b) {
				a.sb = b
				return a
			},
			Tl = function (a) {
				a.V = !0
				return a
			},
			Ul = function (a) {
				return new El(a.Mi, a.Ni, a.I, a.Sg, a.h, a.M, a.m, a.Kc, a.B, a.kc, a.sb, a.V)
			}
		function Zl() {
			return 'attribution-reporting'
		}
		function $l(a) {
			var b
			b = void 0 === b ? document : b
			var c
			return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
		}
		var am = !1
		function bm() {
			if ($l('join-ad-interest-group') && pa(qb.joinAdInterestGroup)) return !0
			am ||
				(gi(
					'A751Xsk4ZW3DVQ8WZng2Dk5s3YzAyqncTzgv+VaE6wavgTY0QHkDvUTET1o7HanhuJO8lgv1Vvc88Ij78W1FIAAAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjgwNjUyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9',
				),
				(am = !0))
			return $l('join-ad-interest-group') && pa(qb.joinAdInterestGroup)
		}
		function cm(a, b) {
			var c = void 0
			try {
				c = D.querySelector('iframe[data-tagging-id="' + b + '"]')
			} catch (e) {}
			if (c) {
				var d = Number(c.dataset.loadTime)
				if (d && 6e4 > Fa() - d) {
					Ya('TAGGING', 9)
					return
				}
			} else
				try {
					if (
						50 <=
						D.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]')
							.length
					) {
						Ya('TAGGING', 10)
						return
					}
				} catch (e) {}
			zb(a, void 0, { allow: 'join-ad-interest-group' }, { taggingId: b, loadTime: Fa() }, c)
		}
		function dm() {
			return R(60) ? 'https://td.doubleclick.net' : 'https://googleads.g.doubleclick.net'
		}
		var em = RegExp(
				'^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$',
			),
			fm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
			gm = /^\d+\.fls\.doubleclick\.net$/,
			hm = /;gac=([^;?]+)/,
			im = /;gacgb=([^;?]+)/,
			jm = /;gclaw=([^;?]+)/,
			km = /;gclgb=([^;?]+)/
		function lm(a, b) {
			if (gm.test(D.location.host)) {
				var c = D.location.href.match(b)
				return c && 2 == c.length && c[1].match(em) ? decodeURIComponent(c[1]) : ''
			}
			var d = [],
				e
			for (e in a) {
				for (var f = [], g = a[e], k = 0; k < g.length; k++) f.push(g[k].aa)
				d.push(e + ':' + f.join(','))
			}
			return 0 < d.length ? d.join(';') : ''
		}
		var mm = function (a, b, c) {
			var d = sk() ? ok('_gac_gb', !0) : {},
				e = [],
				f = !1,
				g
			for (g in d) {
				var k = Mk('_gac_gb_' + g, a, b, c)
				f =
					f ||
					(0 !== k.length &&
						k.some(function (m) {
							return 1 === m
						}))
				e.push(g + ':' + k.join(','))
			}
			return { zj: f ? e.join(';') : '', yj: lm(d, im) }
		}
		function nm(a, b, c) {
			if (gm.test(D.location.host)) {
				var d = D.location.href.match(c)
				if (d && 2 == d.length && d[1].match(fm)) return [{ aa: d[1] }]
			} else return uk((a || '_gcl') + b)
			return []
		}
		var om = function (a) {
				return nm(a, '_aw', jm)
					.map(function (b) {
						return b.aa
					})
					.join('.')
			},
			pm = function (a) {
				return nm(a, '_gb', km)
					.map(function (b) {
						return b.aa
					})
					.join('.')
			},
			qm = function (a, b) {
				var c = Mk(((b && b.prefix) || '_gcl') + '_gb', a, b)
				return 0 === c.length ||
					c.every(function (d) {
						return 0 === d
					})
					? ''
					: c.join('.')
			}
		var rm = function () {
			if (pa(A.__uspapi)) {
				var a = ''
				try {
					A.__uspapi('getUSPData', 1, function (b, c) {
						if (c && b) {
							var d = b.uspString
							d && RegExp('^[\\da-zA-Z-]{1,20}$').test(d) && (a = d)
						}
					})
				} catch (b) {}
				return a
			}
		}
		var bn = {
			C: {
				Lf: 'ads_conversion_hit',
				te: 'container_execute_start',
				Qf: 'container_setup_end',
				ue: 'container_setup_start',
				Pf: 'container_execute_end',
				Rf: 'container_yield_end',
				ve: 'container_yield_start',
				Pg: 'event_execute_end',
				Qg: 'event_setup_end',
				Jc: 'event_setup_start',
				Rg: 'ga4_conversion_hit',
				Vb: 'page_load',
				Mk: 'pageview',
				nb: 'snippet_load',
				eh: 'tag_callback_error',
				fh: 'tag_callback_failure',
				gh: 'tag_callback_success',
				hh: 'tag_execute_end',
				Xb: 'tag_execute_start',
			},
		}
		var cn = !1,
			dn = 'L S Y E TC HTC'.split(' '),
			en = ['S', 'E'],
			fn = ['TS', 'TE']
		var Dn = function (a, b, c, d, e, f) {
				var g = {}
				return g
			},
			En = function (a) {
				var b = !1
				return b
			},
			Fn = function (a, b) {},
			Gn = function () {
				var a = {}
				return a
			},
			wn = function () {
				var a = {}
				return a
			},
			Hn = function () {},
			In = function (a, b, c) {},
			Jn = function (a) {
				Kb() && Kb().mark(S.D + '_' + a + '_start')
			},
			Kn = function (a) {
				if (Kb()) {
					var b = Kb(),
						c = S.D + '_' + a + '_start',
						d = S.D + '_' + a + '_duration'
					b.measure(d, c)
					var e = Kb().getEntriesByName(d)[0]
					b.clearMarks(c)
					b.clearMeasures(d)
					var f = me._p || {}
					void 0 === f[a] && ((f[a] = e.duration), (me._p = f))
					return e.duration
				}
			},
			Ln = function () {
				var a = Dn('PAGEVIEW')
				if (on(a.Va, 'mark')[0]) {
					var b = Kb()
					b.clearMarks(a.Va)
					b.clearMeasures('GTM-' + bn.C.Vb + ':to:PAGEVIEW')
				}
				var c = Dn(bn.C.Vb)
				En(a) && Fn(a, c)
			}
		var Mn = function (a, b) {
			var c,
				d = A.GooglebQhCsO
			d || ((d = {}), (A.GooglebQhCsO = d))
			c = d
			if (c[a]) return !1
			c[a] = []
			c[a][0] = b
			return !0
		}
		var Nn = function (a, b) {
			var c = ci(a, 'fmt')
			if (b) {
				var d = ci(a, 'random'),
					e = ci(a, 'label') || ''
				if (!d) return !1
				var f = bk(
					decodeURIComponent(e.replace(/\+/g, ' ')) +
						':' +
						decodeURIComponent(d.replace(/\+/g, ' ')),
				)
				if (!Mn(f, b)) return !1
			}
			c && 4 != c && (a = ei(a, 'rfmt', c))
			var g = ei(a, 'fmt', 4)
			xb(
				g,
				function () {
					A.google_noFurtherRedirects && b && b.call && ((A.google_noFurtherRedirects = null), b())
				},
				void 0,
				void 0,
				D.getElementsByTagName('script')[0].parentElement || void 0,
			)
			return !0
		}
		var co = function () {
				this.h = {}
			},
			eo = function (a, b, c) {
				null != c && (a.h[b] = c)
			},
			fo = function (a) {
				return Object.keys(a.h)
					.map(function (b) {
						return encodeURIComponent(b) + '=' + encodeURIComponent(a.h[b])
					})
					.join('&')
			},
			ho = function (a, b, c, d) {}
		function jo(a, b) {
			if (a) {
				var c = '' + a
				0 !== c.indexOf('http://') && 0 !== c.indexOf('https://') && (c = 'https://' + c)
				'/' === c[c.length - 1] && (c = c.substring(0, c.length - 1))
				return cd('' + c + b).href
			}
		}
		function ko() {
			return !!le.Vd && 'SGTM_TOKEN' !== le.Vd.split('@@').join('')
		}
		var mo = function (a, b, c, d) {
				if (!lo() && !Qh(a)) {
					var e = c ? '/gtag/js' : '/gtm.js',
						f = '?id=' + encodeURIComponent(a) + '&l=' + le.ca,
						g = 0 === a.indexOf('GTM-')
					g || (f += '&cx=c')
					var k = ko()
					k && (f += '&sign=' + le.Vd)
					var m = ue || we ? jo(b, e + f) : void 0
					if (!m) {
						var n = le.nd + e
						k && rb && g && (n = rb.replace(/^(?:https?:\/\/)?/i, '').split(/[?#]/)[0])
						m = Zk('https://', 'http://', n + f)
					}
					Oh().container[a] = { state: 1, context: d }
					xb(m)
				}
			},
			no = function (a, b, c) {
				var d
				if ((d = !lo())) {
					var e = Oh().destination[a]
					d = !(e && e.state)
				}
				if (d)
					if (Rh()) (Oh().destination[a] = { state: 0, transportUrl: b, context: c }), J(91)
					else {
						var f = '/gtag/destination?id=' + encodeURIComponent(a) + '&l=' + le.ca + '&cx=c'
						ko() && (f += '&sign=' + le.Vd)
						var g = ue || we ? jo(b, f) : void 0
						g || (g = Zk('https://', 'http://', le.nd + f))
						Oh().destination[a] = { state: 1, context: c }
						xb(g)
					}
			}
		function lo() {
			if (Jh()) {
				return !0
			}
			return !1
		}
		var oo = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
			po = {
				cl: ['ecl'],
				customPixels: ['nonGooglePixels'],
				ecl: ['cl'],
				ehl: ['hl'],
				hl: ['ehl'],
				html: [
					'customScripts',
					'customPixels',
					'nonGooglePixels',
					'nonGoogleScripts',
					'nonGoogleIframes',
				],
				customScripts: [
					'html',
					'customPixels',
					'nonGooglePixels',
					'nonGoogleScripts',
					'nonGoogleIframes',
				],
				nonGooglePixels: [],
				nonGoogleScripts: ['nonGooglePixels'],
				nonGoogleIframes: ['nonGooglePixels'],
			},
			qo = {
				cl: ['ecl'],
				customPixels: ['customScripts', 'html'],
				ecl: ['cl'],
				ehl: ['hl'],
				hl: ['ehl'],
				html: ['customScripts'],
				customScripts: ['html'],
				nonGooglePixels: [
					'customPixels',
					'customScripts',
					'html',
					'nonGoogleScripts',
					'nonGoogleIframes',
				],
				nonGoogleScripts: ['customScripts', 'html'],
				nonGoogleIframes: ['customScripts', 'html', 'nonGoogleScripts'],
			},
			ro =
				'google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes'.split(
					' ',
				),
			uo = function (a) {
				var b = Me('gtm.allowlist') || Me('gtm.whitelist')
				b && J(9)
				se && (b = ['google', 'gtagfl', 'lcl', 'zone'])
				so() &&
					(se ? J(116) : J(117),
					to &&
						((b = []),
						window.console &&
							window.console.log &&
							window.console.log('GTM blocked. See go/13687728.')))
				var c = b && Ka(Ca(b), po),
					d = Me('gtm.blocklist') || Me('gtm.blacklist')
				d || ((d = Me('tagTypeBlacklist')) && J(3))
				d ? J(8) : (d = [])
				so() && ((d = Ca(d)), d.push('nonGooglePixels', 'nonGoogleScripts', 'sandboxedScripts'))
				0 <= Ca(d).indexOf('google') && J(2)
				var e = d && Ka(Ca(d), qo),
					f = {}
				return function (g) {
					var k = g && g[Qb.Na]
					if (!k || 'string' != typeof k) return !0
					k = k.replace(/^_*/, '')
					if (void 0 !== f[k]) return f[k]
					var m = Ee[k] || [],
						n = a(k, m)
					if (b) {
						var p
						if ((p = n))
							a: {
								if (0 > c.indexOf(k))
									if (m && 0 < m.length)
										for (var q = 0; q < m.length; q++) {
											if (0 > c.indexOf(m[q])) {
												J(11)
												p = !1
												break a
											}
										}
									else {
										p = !1
										break a
									}
								p = !0
							}
						n = p
					}
					var t = !1
					if (d) {
						var u = 0 <= e.indexOf(k)
						if (u) t = u
						else {
							var r = va(e, m || [])
							r && J(10)
							t = r
						}
					}
					var v = !n || t
					v ||
						!(0 <= m.indexOf('sandboxedScripts')) ||
						(c && -1 !== c.indexOf('sandboxedScripts')) ||
						(v = va(e, ro))
					return (f[k] = v)
				}
			},
			to = !1
		var so = function () {
			return oo.test(A.location && A.location.hostname)
		}
		var vo = { initialized: 11, complete: 12, interactive: 13 },
			wo = {},
			xo = Object.freeze(((wo[N.g.Fa] = !0), wo)),
			yo =
				0 <= D.location.search.indexOf('?gtm_diagnostics=') ||
				0 <= D.location.search.indexOf('&gtm_diagnostics='),
			Ao = function (a, b, c) {
				if (Ni && 'config' === a && !(1 < Wk(b).K.length)) {
					var d,
						e = sb('google_tag_data', {})
					e.td || (e.td = {})
					d = e.td
					var f = G(c.I)
					G(c.h, f)
					var g = [],
						k
					for (k in d) {
						var m = zo(d[k], f)
						m.length && (yo && console.log(m), g.push(k))
					}
					if (g.length) {
						if (g.length) {
							var n = b + '*' + g.join('.')
							Xi = Xi ? Xi + '!' + n : '&tdc=' + n
						}
						Ya('TAGGING', vo[D.readyState] || 14)
					}
					d[b] = f
				}
			}
		function Bo(a, b) {
			var c = {},
				d
			for (d in b) b.hasOwnProperty(d) && (c[d] = !0)
			for (var e in a) a.hasOwnProperty(e) && (c[e] = !0)
			return c
		}
		function zo(a, b, c, d) {
			c = void 0 === c ? {} : c
			d = void 0 === d ? '' : d
			if (a === b) return []
			var e = function (q, t) {
					var u = t[q]
					return void 0 === u ? xo[q] : u
				},
				f
			for (f in Bo(a, b)) {
				var g = (d ? d + '.' : '') + f,
					k = e(f, a),
					m = e(f, b),
					n = 'object' === Mb(k) || 'array' === Mb(k),
					p = 'object' === Mb(m) || 'array' === Mb(m)
				if (n && p) zo(k, m, c, g)
				else if (n || p || k !== m) c[g] = !0
			}
			return Object.keys(c)
		}
		var Co = !1,
			Do = 0,
			Eo = []
		function Fo(a) {
			if (!Co) {
				var b = D.createEventObject,
					c = 'complete' == D.readyState,
					d = 'interactive' == D.readyState
				if (!a || 'readystatechange' != a.type || c || (!b && d)) {
					Co = !0
					for (var e = 0; e < Eo.length; e++) F(Eo[e])
				}
				Eo.push = function () {
					for (var f = 0; f < arguments.length; f++) F(arguments[f])
					return 0
				}
			}
		}
		function Go() {
			if (!Co && 140 > Do) {
				Do++
				try {
					D.documentElement.doScroll('left'), Fo()
				} catch (a) {
					A.setTimeout(Go, 50)
				}
			}
		}
		var Ho = function (a) {
			Co ? a() : Eo.push(a)
		}
		var Io = function (a, b) {
			return {
				entityType: 1,
				indexInOriginContainer: a,
				nameInOriginContainer: b,
				originContainerId: S.D,
			}
		}
		var Ko = function (a, b) {
				this.h = !1
				this.I = []
				this.M = { tags: [] }
				this.V = !1
				this.m = this.B = 0
				Jo(this, a, b)
			},
			Lo = function (a, b, c, d) {
				if (pe.hasOwnProperty(b) || '__zone' === b) return -1
				var e = {}
				Ob(d) && (e = G(d, e))
				e.id = c
				e.status = 'timeout'
				return a.M.tags.push(e) - 1
			},
			Mo = function (a, b, c, d) {
				var e = a.M.tags[b]
				e && ((e.status = c), (e.executionTime = d))
			},
			No = function (a) {
				if (!a.h) {
					for (var b = a.I, c = 0; c < b.length; c++) b[c]()
					a.h = !0
					a.I.length = 0
				}
			},
			Jo = function (a, b, c) {
				void 0 !== b && Oo(a, b)
				c &&
					A.setTimeout(function () {
						return No(a)
					}, Number(c))
			},
			Oo = function (a, b) {
				var c = Ha(function () {
					return F(function () {
						b(S.D, a.M)
					})
				})
				a.h ? c() : a.I.push(c)
			},
			Po = function (a) {
				a.B++
				return Ha(function () {
					a.m++
					a.V && a.m >= a.B && No(a)
				})
			},
			Qo = function (a) {
				a.V = !0
				a.m >= a.B && No(a)
			}
		var Ro = {},
			So = function () {
				return A.GoogleAnalyticsObject && A[A.GoogleAnalyticsObject]
			},
			To = !1
		function Wo() {
			return A.GoogleAnalyticsObject || 'ga'
		}
		var Xo = function (a) {},
			Yo = function (a, b) {
				return function () {
					var c = So(),
						d = c && c.getByName && c.getByName(a)
					if (d) {
						var e = d.get('sendHitTask')
						d.set('sendHitTask', function (f) {
							var g = f.get('hitPayload'),
								k = f.get('hitCallback'),
								m = 0 > g.indexOf('&tid=' + b)
							m &&
								(f.set('hitPayload', g.replace(/&tid=UA-[0-9]+-[0-9]+/, '&tid=' + b), !0),
								f.set('hitCallback', void 0, !0))
							e(f)
							m &&
								(f.set('hitPayload', g, !0),
								f.set('hitCallback', k, !0),
								f.set('_x_19', void 0, !0),
								e(f))
						})
					}
				}
			}
		function Fp(a, b, c, d) {
			var e = qc[a],
				f = Gp(a, b, c, d)
			if (!f) return null
			var g = zc(e[Qb.dh], c, [])
			if (g && g.length) {
				var k = g[0]
				f = Fp(k.index, { R: f, P: 1 === k.th ? b.terminate : f, terminate: b.terminate }, c, d)
			}
			return f
		}
		function Gp(a, b, c, d) {
			function e() {
				if (f[Qb.Si]) k()
				else {
					var w = Ac(f, c, []),
						y = w[Qb.ai]
					if (null != y)
						for (var x = 0; x < y.length; x++)
							if (!fg(y[x])) {
								k()
								return
							}
					var B = Lo(c.Cb, String(f[Qb.Na]), Number(f[Qb.ob]), w[Qb.Ti]),
						z = !1
					w.vtp_gtmOnSuccess = function () {
						if (!z) {
							z = !0
							var E = Fa() - I
							Pj(c.id, qc[a], '5', E)
							Mo(c.Cb, B, 'success', E)
							R(70) && In(c, f, bn.C.gh)
							g()
						}
					}
					w.vtp_gtmOnFailure = function () {
						if (!z) {
							z = !0
							var E = Fa() - I
							Pj(c.id, qc[a], '6', E)
							Mo(c.Cb, B, 'failure', E)
							R(70) && In(c, f, bn.C.fh)
							k()
						}
					}
					w.vtp_gtmTagId = f.tag_id
					w.vtp_gtmEventId = c.id
					c.priorityId && (w.vtp_gtmPriorityId = c.priorityId)
					Pj(c.id, f, '1')
					var C = function () {
						var E = Fa() - I
						Pj(c.id, f, '7', E)
						Mo(c.Cb, B, 'exception', E)
						R(70) && In(c, f, bn.C.eh)
						z || ((z = !0), k())
					}
					if (R(70)) {
						var H = Dn(bn.C.Xb, S.D, c.id, Number(f[Qb.ob]), c.name, Fi(f))
						En(H)
					}
					var I = Fa()
					try {
						yc(w, { event: c, index: a, type: 1 })
					} catch (E) {
						C(E)
					}
					R(70) && In(c, f, bn.C.hh)
				}
			}
			var f = qc[a],
				g = b.R,
				k = b.P,
				m = b.terminate
			if (c.tf(f)) return null
			var n = zc(f[Qb.ih], c, [])
			if (n && n.length) {
				var p = n[0],
					q = Fp(p.index, { R: g, P: k, terminate: m }, c, d)
				if (!q) return null
				g = q
				k = 2 === p.th ? m : q
			}
			if (f[Qb.Yg] || f[Qb.Vi]) {
				var t = f[Qb.Yg] ? rc : c.Ak,
					u = g,
					r = k
				if (!t[a]) {
					e = Ha(e)
					var v = Hp(a, t, e)
					g = v.R
					k = v.P
				}
				return function () {
					t[a](u, r)
				}
			}
			return e
		}
		function Hp(a, b, c) {
			var d = [],
				e = []
			b[a] = Ip(d, e, c)
			return {
				R: function () {
					b[a] = Jp
					for (var f = 0; f < d.length; f++) d[f]()
				},
				P: function () {
					b[a] = Kp
					for (var f = 0; f < e.length; f++) e[f]()
				},
			}
		}
		function Ip(a, b, c) {
			return function (d, e) {
				a.push(d)
				b.push(e)
				c()
			}
		}
		function Jp(a) {
			a()
		}
		function Kp(a, b) {
			b()
		}
		var Mp = function (a, b) {
				return 1 === arguments.length ? Lp('config', a) : Lp('config', a, b)
			},
			Np = function (a, b, c) {
				c = c || {}
				c[N.g.Bb] = a
				return Lp('event', b, c)
			}
		function Lp(a) {
			return arguments
		}
		var Op = function () {
			this.h = []
			this.m = []
		}
		Op.prototype.enqueue = function (a, b, c) {
			var d = this.h.length + 1
			a['gtm.uniqueEventId'] = b
			a['gtm.priorityId'] = d
			c.eventId = b
			c.fromContainerExecution = !0
			c.priorityId = d
			var e = { message: a, notBeforeEventId: b, priorityId: d, messageContext: c }
			this.h.push(e)
			for (var f = 0; f < this.m.length; f++)
				try {
					this.m[f](e)
				} catch (g) {}
		}
		Op.prototype.listen = function (a) {
			this.m.push(a)
		}
		Op.prototype.get = function () {
			for (var a = {}, b = 0; b < this.h.length; b++) {
				var c = this.h[b],
					d = a[c.notBeforeEventId]
				d || ((d = []), (a[c.notBeforeEventId] = d))
				d.push(c)
			}
			return a
		}
		Op.prototype.prune = function (a) {
			for (var b = [], c = [], d = 0; d < this.h.length; d++) {
				var e = this.h[d]
				e.notBeforeEventId === a ? b.push(e) : c.push(e)
			}
			this.h = c
			return b
		}
		var Qp = function (a, b, c) {
				Pp().enqueue(a, b, c)
			},
			Sp = function () {
				var a = Rp
				Pp().listen(a)
			}
		function Pp() {
			var a = me.mb
			a || ((a = new Op()), (me.mb = a))
			return a
		}
		var $p = function (a) {
				var b = me.zones
				return b
					? b.getIsAllowedFn(Lh(), a)
					: function () {
							return !0
					  }
			},
			aq = function (a) {
				var b = me.zones
				return b ? b.isActive(Lh(), a) : !0
			}
		var dq = function (a, b) {
			for (var c = [], d = 0; d < qc.length; d++)
				if (a[d]) {
					var e = qc[d]
					var f = Po(b.Cb)
					try {
						var g = Fp(d, { R: f, P: f, terminate: f }, b, d)
						if (g) {
							var k = c,
								m = k.push,
								n = d,
								p = e['function']
							if (!p) throw 'Error: No function name given for function call.'
							var q = sc[p]
							m.call(k, { Oh: n, Gh: q ? q.priorityOverride || 0 : 0, execute: g })
						} else bq(d, b), f()
					} catch (u) {
						f()
					}
				}
			c.sort(cq)
			for (var t = 0; t < c.length; t++) c[t].execute()
			return 0 < c.length
		}
		function cq(a, b) {
			var c,
				d = b.Gh,
				e = a.Gh
			c = d > e ? 1 : d < e ? -1 : 0
			var f
			if (0 !== c) f = c
			else {
				var g = a.Oh,
					k = b.Oh
				f = g > k ? 1 : g < k ? -1 : 0
			}
			return f
		}
		function bq(a, b) {
			if (Ni) {
				var c = function (d) {
					var e = b.tf(qc[d]) ? '3' : '4',
						f = zc(qc[d][Qb.dh], b, [])
					f && f.length && c(f[0].index)
					Pj(b.id, qc[d], e)
					var g = zc(qc[d][Qb.ih], b, [])
					g && g.length && c(g[0].index)
				}
				c(a)
			}
		}
		var gq = !1,
			eq
		var lq = function (a) {
			var b = Fa(),
				c = a['gtm.uniqueEventId'],
				d = a['gtm.priorityId'],
				e = a.event
			if (R(70)) {
				var f = Dn(bn.C.Jc, S.D, c, void 0, e)
				En(f)
			}
			if ('gtm.js' === e) {
				if (gq) return !1
				gq = !0
			}
			var m,
				n = !1
			if (aq(c)) m = $p(c)
			else {
				if ('gtm.js' !== e && 'gtm.init' !== e && 'gtm.init_consent' !== e) return !1
				n = !0
				m = $p(Number.MAX_SAFE_INTEGER)
			}
			Oj(c, e)
			var p = a.eventCallback,
				q = a.eventTimeout,
				t = {
					id: c,
					priorityId: d,
					name: e,
					tf: uo(m),
					Ak: [],
					Ah: function () {
						J(6)
						Ya('HEALTH', 0)
					},
					mh: hq(),
					nh: iq(c),
					Cb: new Ko(function () {
						if (R(70)) {
							var x = Dn(bn.C.Pg, S.D, c, void 0, e)
							if (En(x)) {
								var B = Dn(bn.C.Jc, S.D, c, void 0, e)
								Fn(x, B)
							}
							if ('gtm.load' === e) {
								var z = Dn(bn.C.Pf, S.D)
								if (En(z)) {
									var C = Dn(bn.C.te, S.D)
									Fn(z, C)
								}
								Hn()
							}
						}
						p && p.apply(p, [].slice.call(arguments, 0))
					}, q),
				},
				u = Ec(t)
			n && (u = jq(u))
			if (R(70)) {
				var r = Dn(bn.C.Qg, S.D, c, void 0, e)
				if (En(r)) {
					var v = Dn(bn.C.Jc, S.D, c, void 0, e)
					Fn(r, v)
				}
			}
			var w = dq(u, t),
				y = !1
			Qo(t.Cb)
			;('gtm.js' !== e && 'gtm.sync' !== e) || Xo(S.D)
			return kq(u, w) || y
		}
		function iq(a) {
			return function (b) {
				Ni && (Pb(b) || Yj(a, 'input', b))
			}
		}
		function hq() {
			var a = {}
			a.event = Qe('event', 1)
			a.ecommerce = Qe('ecommerce', 1)
			a.gtm = Qe('gtm')
			a.eventModel = Qe('eventModel')
			return a
		}
		function jq(a) {
			for (var b = [], c = 0; c < a.length; c++)
				if (a[c]) {
					var d = String(qc[c][Qb.Na])
					if (oe[d] || void 0 !== qc[c][Qb.Wi] || Fe[d]) b[c] = !0
					R(58) ||
						(0 !== qc[c][Qb.Na].indexOf('__ccd') &&
							0 !== qc[c][Qb.Na].indexOf('__ogt') &&
							'__set_product_settings' !== qc[c][Qb.Na]) ||
						(b[c] = !0)
				}
			return b
		}
		function kq(a, b) {
			if (!b) return b
			for (var c = 0; c < a.length; c++) if (a[c] && qc[c] && !pe[String(qc[c][Qb.Na])]) return !0
			return !1
		}
		var nq = function (a, b, c, d) {
				mq.push('event', [b, a], c, d)
			},
			oq = function (a, b, c, d) {
				mq.push('get', [a, b], c, d)
			},
			pq = function () {
				this.status = 1
				this.I = {}
				this.h = {}
				this.M = {}
				this.V = null
				this.B = {}
				this.m = !1
			},
			qq = function (a, b, c, d) {
				var e = Fa()
				this.type = a
				this.m = e
				this.W = b || ''
				this.h = c
				this.messageContext = d
			},
			rq = function () {
				this.m = {}
				this.B = {}
				this.h = []
			},
			sq = function (a, b) {
				var c = Wk(b)
				return (a.m[c.T] = a.m[c.T] || new pq())
			},
			tq = function (a, b, c, d) {
				if (d.W) {
					var e = sq(a, d.W),
						f = e.V
					if (f) {
						var g = G(c),
							k = G(e.I[d.W]),
							m = G(e.B),
							n = G(e.h),
							p = G(a.B),
							q = {}
						if (Ni)
							try {
								q = G(Je)
							} catch (v) {
								J(72)
							}
						var t = Wk(d.W).prefix,
							u = function (v) {
								Xj(d.messageContext.eventId, t, v)
								var w = g[N.g.Ob]
								w && F(w)
							},
							r = Ul(
								Sl(
									Rl(
										Ql(
											Ol(
												Nl(
													Pl(
														Ml(
															Ll(
																Kl(
																	new Jl(d.messageContext.eventId, d.messageContext.priorityId),
																	g,
																),
																k,
															),
															m,
														),
														n,
													),
													p,
												),
												q,
											),
											d.messageContext.eventMetadata,
										),
										function () {
											if (u) {
												var v = u
												u = void 0
												v('2')
											}
										},
									),
									function () {
										if (u) {
											var v = u
											u = void 0
											v('3')
										}
									},
								),
							)
						try {
							Xj(d.messageContext.eventId, t, '1'), Ao(d.type, d.W, r), f(d.W, b, d.m, r)
						} catch (v) {
							Xj(d.messageContext.eventId, t, '4')
						}
					}
				}
			}
		rq.prototype.register = function (a, b, c) {
			var d = sq(this, a)
			3 !== d.status && ((d.V = b), (d.status = 3), c && (G(d.h, c), (d.h = c)), this.flush())
		}
		rq.prototype.push = function (a, b, c, d) {
			if (void 0 !== c) {
				if (!Wk(c)) return
				if (c) {
					var e = Wk(c)
					e &&
						1 === sq(this, c).status &&
						((sq(this, c).status = 2), this.push('require', [{}], e.T, {}))
				}
				sq(this, c).m && (d.deferrable = !1)
			}
			this.h.push(new qq(a, c, b, d))
			d.deferrable || this.flush()
		}
		rq.prototype.flush = function (a) {
			for (var b = this, c = [], d = !1, e = {}; this.h.length; ) {
				var f = this.h[0]
				if (f.messageContext.deferrable)
					!f.W || sq(this, f.W).m
						? ((f.messageContext.deferrable = !1), this.h.push(f))
						: c.push(f),
						this.h.shift()
				else {
					var g = void 0
					switch (f.type) {
						case 'require':
							g = sq(this, f.W)
							if (3 !== g.status && !a) {
								this.h.push.apply(this.h, c)
								return
							}
							break
						case 'set':
							l(f.h[0], function (t, u) {
								G(La(t, u), b.B)
							})
							break
						case 'config':
							g = sq(this, f.W)
							e.ab = {}
							l(
								f.h[0],
								(function (t) {
									return function (u, r) {
										G(La(u, r), t.ab)
									}
								})(e),
							)
							var k = !!e.ab[N.g.Ic]
							delete e.ab[N.g.Ic]
							var m = Wk(f.W),
								n = m.T === m.id
							k || (n ? (g.B = {}) : (g.I[f.W] = {}))
							;(g.m && k) || tq(this, N.g.xa, e.ab, f)
							g.m = !0
							n ? G(e.ab, g.B) : (G(e.ab, g.I[f.W]), J(70))
							d = !0
							break
						case 'event':
							g = sq(this, f.W)
							e.gd = {}
							l(
								f.h[0],
								(function (t) {
									return function (u, r) {
										G(La(u, r), t.gd)
									}
								})(e),
							)
							tq(this, f.h[1], e.gd, f)
							break
						case 'get':
							g = sq(this, f.W)
							var p = {},
								q = ((p[N.g.Ta] = f.h[0]), (p[N.g.jb] = f.h[1]), p)
							tq(this, N.g.Ca, q, f)
					}
					this.h.shift()
					uq(this, f)
				}
				e = { ab: e.ab, gd: e.gd }
			}
			this.h.push.apply(this.h, c)
			d && this.flush()
		}
		var uq = function (a, b) {
				if ('require' !== b.type)
					if (b.W) for (var c = sq(a, b.W).M[b.type] || [], d = 0; d < c.length; d++) c[d]()
					else
						for (var e in a.m)
							if (a.m.hasOwnProperty(e)) {
								var f = a.m[e]
								if (f && f.M) for (var g = f.M[b.type] || [], k = 0; k < g.length; k++) g[k]()
							}
			},
			vq = function (a, b) {
				var c = mq,
					d = G(b)
				G(sq(c, a).h, d)
				sq(c, a).h = d
			},
			mq = new rq()
		var wq = {},
			xq = {},
			yq = function (a) {
				for (var b = [], c = [], d = {}, e = 0; e < a.length; d = { md: d.md, jd: d.jd }, e++) {
					var f = a[e]
					if (0 <= f.indexOf('-'))
						(d.md = Wk(f)),
							d.md &&
								(sa(
									Mh(),
									(function (p) {
										return function (q) {
											return p.md.T === q
										}
									})(d),
								)
									? b.push(f)
									: c.push(f))
					else {
						var g = wq[f] || []
						d.jd = {}
						g.forEach(
							(function (p) {
								return function (q) {
									return (p.jd[q] = !0)
								}
							})(d),
						)
						for (var k = Lh(), m = 0; m < k.length; m++)
							if (d.jd[k[m]]) {
								b = b.concat(Mh())
								break
							}
						var n = xq[f] || []
						n.length && (b = b.concat(n))
					}
				}
				return { Wj: b, Yj: c }
			},
			zq = function (a) {
				l(wq, function (b, c) {
					var d = c.indexOf(a)
					0 <= d && c.splice(d, 1)
				})
			},
			Aq = function (a) {
				l(xq, function (b, c) {
					var d = c.indexOf(a)
					0 <= d && c.splice(d, 1)
				})
			}
		var Bq = 'HA GF G UA AW DC MC'.split(' '),
			Cq = !1,
			Dq = !1
		function Eq(a, b) {
			a.hasOwnProperty('gtm.uniqueEventId') ||
				Object.defineProperty(a, 'gtm.uniqueEventId', { value: Ge() })
			b.eventId = a['gtm.uniqueEventId']
			b.priorityId = a['gtm.priorityId']
			return { eventId: b.eventId, priorityId: b.priorityId }
		}
		var Fq = {
				config: function (a, b) {
					var c = Eq(a, b)
					if (!(2 > a.length) && h(a[1])) {
						var d = {}
						if (2 < a.length) {
							if ((void 0 != a[2] && !Ob(a[2])) || 3 < a.length) return
							d = a[2]
						}
						var e = Wk(a[1])
						if (e) {
							Oj(c.eventId, 'gtag.config')
							var f = e.T,
								g = e.id !== f
							if (g ? -1 === Mh().indexOf(f) : -1 === Lh().indexOf(f)) {
								if (!R(61) || !d[N.g.Md]) {
									var k = d[N.g.ma] || mq.B[N.g.ma]
									g
										? no(f, k, { source: 2, fromContainerExecution: b.fromContainerExecution })
										: mo(f, k, !0, { source: 2, fromContainerExecution: b.fromContainerExecution })
								}
							} else {
								if (re && !g && !d[N.g.Ic]) {
									var m = Dq
									Dq = !0
									if (m) return
								}
								Cq || J(43)
								if (!b.noTargetGroup)
									if (g) {
										Aq(e.id)
										var n = e.id,
											p = d[N.g.Kd] || 'default'
										p = String(p).split(',')
										for (var q = 0; q < p.length; q++) {
											var t = xq[p[q]] || []
											xq[p[q]] = t
											0 > t.indexOf(n) && t.push(n)
										}
									} else {
										zq(e.id)
										var u = e.id,
											r = d[N.g.Kd] || 'default'
										r = r.toString().split(',')
										for (var v = 0; v < r.length; v++) {
											var w = wq[r[v]] || []
											wq[r[v]] = w
											0 > w.indexOf(u) && w.push(u)
										}
									}
								delete d[N.g.Kd]
								var y = b.eventMetadata || {}
								y.hasOwnProperty('is_external_event') ||
									(y.is_external_event = !b.fromContainerExecution)
								b.eventMetadata = y
								delete d[N.g.Ob]
								for (var x = g ? [e.id] : Mh(), B = 0; B < x.length; B++) {
									var z = G(b)
									mq.push('config', [d], x[B], z)
								}
							}
						}
					}
				},
				consent: function (a, b) {
					if (3 === a.length) {
						J(39)
						var c = Eq(a, b),
							d = a[1]
						'default' === d ? dg(a[2]) : 'update' === d && eg(a[2], c)
					}
				},
				event: function (a, b) {
					var c = a[1]
					if (!(2 > a.length) && h(c)) {
						var d
						if (2 < a.length) {
							if ((!Ob(a[2]) && void 0 != a[2]) || 3 < a.length) return
							d = a[2]
						}
						var e = d,
							f = {},
							g = ((f.event = c), f)
						e &&
							((g.eventModel = G(e)),
							e[N.g.Ob] && (g.eventCallback = e[N.g.Ob]),
							e[N.g.Gd] && (g.eventTimeout = e[N.g.Gd]))
						var k = Eq(a, b),
							m = k.eventId,
							n = k.priorityId
						g['gtm.uniqueEventId'] = m
						n && (g['gtm.priorityId'] = n)
						if ('optimize.callback' === c) return (g.eventModel = g.eventModel || {}), g
						var p
						var q = d,
							t = q && q[N.g.Bb]
						void 0 === t && ((t = Me(N.g.Bb, 2)), void 0 === t && (t = 'default'))
						if (h(t) || ra(t)) {
							var u = t.toString().replace(/\s+/g, '').split(','),
								r = yq(u),
								v = r.Wj,
								w = r.Yj
							if (w.length)
								for (var y = (q && q[N.g.ma]) || mq.B[N.g.ma], x = 0; x < w.length; x++) {
									var B = Wk(w[x])
									B && no(B.T, y, { source: 3, fromContainerExecution: b.fromContainerExecution })
								}
							p = Yk(v)
						} else p = void 0
						var z = p
						if (z) {
							Oj(m, c)
							for (var C = [], H = 0; H < z.length; H++) {
								var I = z[H],
									E = G(b)
								if (-1 !== Bq.indexOf(I.prefix)) {
									var K = G(d),
										M = E.eventMetadata || {}
									M.hasOwnProperty('is_external_event') ||
										(M.is_external_event = !E.fromContainerExecution)
									E.eventMetadata = M
									delete K[N.g.Ob]
									nq(c, K, I.id, E)
								}
								C.push(I.id)
							}
							g.eventModel = g.eventModel || {}
							0 < z.length ? (g.eventModel[N.g.Bb] = C.join()) : delete g.eventModel[N.g.Bb]
							Cq || J(43)
							return b.noGtmEvent ? void 0 : g
						}
					}
				},
				get: function (a, b) {
					J(53)
					if (4 === a.length && h(a[1]) && h(a[2]) && pa(a[3])) {
						var c = Wk(a[1]),
							d = String(a[2]),
							e = a[3]
						if (c) {
							Cq || J(43)
							var f = mq.B[N.g.ma]
							if (
								!sa(Mh(), function (k) {
									return c.T === k
								})
							)
								no(c.T, f, { source: 4, fromContainerExecution: b.fromContainerExecution })
							else if (-1 !== Bq.indexOf(c.prefix)) {
								Eq(a, b)
								var g = {}
								$f(G(((g[N.g.Ta] = d), (g[N.g.jb] = e), g)))
								oq(
									d,
									function (k) {
										F(function () {
											return e(k)
										})
									},
									c.id,
									b,
								)
							}
						}
					}
				},
				js: function (a, b) {
					if (2 == a.length && a[1].getTime) {
						Cq = !0
						var c = Eq(a, b),
							d = c.eventId,
							e = c.priorityId,
							f = {}
						return (
							(f.event = 'gtm.js'),
							(f['gtm.start'] = a[1].getTime()),
							(f['gtm.uniqueEventId'] = d),
							(f['gtm.priorityId'] = e),
							f
						)
					}
				},
				policy: function () {},
				set: function (a, b) {
					var c
					2 == a.length && Ob(a[1])
						? (c = G(a[1]))
						: 3 == a.length &&
						  h(a[1]) &&
						  ((c = {}), Ob(a[2]) || ra(a[2]) ? (c[a[1]] = G(a[2])) : (c[a[1]] = a[2]))
					if (c) {
						var d = Eq(a, b),
							e = d.eventId,
							f = d.priorityId
						G(c)
						var g = G(c)
						mq.push('set', [g], void 0, b)
						c['gtm.uniqueEventId'] = e
						f && (c['gtm.priorityId'] = f)
						R(30) && delete c.event
						b.overwriteModelFields = !0
						return c
					}
				},
			},
			Gq = { policy: !0 }
		var Hq = function (a) {
				var b = A[le.ca].hide
				if (b && void 0 !== b[a] && b.end) {
					b[a] = !1
					var c = !0,
						d
					for (d in b)
						if (b.hasOwnProperty(d) && !0 === b[d]) {
							c = !1
							break
						}
					c && (b.end(), (b.end = null))
				}
			},
			Iq = function (a) {
				var b = A[le.ca],
					c = b && b.hide
				c && c.end && (c[a] = !0)
			}
		var Jq = !1,
			Kq = []
		function Lq() {
			if (!Jq) {
				Jq = !0
				for (var a = 0; a < Kq.length; a++) F(Kq[a])
			}
		}
		var Mq = function (a) {
			Jq ? F(a) : Kq.push(a)
		}
		var cr = function (a) {
			if (br(a)) return a
			this.h = a
		}
		cr.prototype.getUntrustedMessageValue = function () {
			return this.h
		}
		var br = function (a) {
			return !a || 'object' !== Mb(a) || Ob(a) ? !1 : 'getUntrustedMessageValue' in a
		}
		cr.prototype.getUntrustedMessageValue = cr.prototype.getUntrustedMessageValue
		var dr = 0,
			er = {},
			fr = [],
			gr = [],
			hr = !1,
			ir = !1
		function jr(a, b) {
			return (
				a.messageContext.eventId - b.messageContext.eventId ||
				a.messageContext.priorityId - b.messageContext.priorityId
			)
		}
		var kr = function (a) {
				return A[le.ca].push(a)
			},
			lr = function (a, b) {
				var c = me[le.ca],
					d = c ? c.subscribers : 1,
					e = 0,
					f = !1,
					g = void 0
				b &&
					(g = A.setTimeout(function () {
						f || ((f = !0), a())
						g = void 0
					}, b))
				return function () {
					++e === d && (g && (A.clearTimeout(g), (g = void 0)), f || (a(), (f = !0)))
				}
			}
		function mr(a, b) {
			var c = a._clear || b.overwriteModelFields
			l(a, function (e, f) {
				'_clear' !== e && (c && Pe(e), Pe(e, f))
			})
			Be || (Be = a['gtm.start'])
			var d = a['gtm.uniqueEventId']
			if (!a.event) return !1
			'number' !== typeof d &&
				((d = Ge()), (a['gtm.uniqueEventId'] = d), Pe('gtm.uniqueEventId', d))
			return lq(a)
		}
		function nr(a) {
			if (null == a || 'object' !== typeof a) return !1
			if (a.event) return !0
			if (ya(a)) {
				var b = a[0]
				if ('config' === b || 'event' === b || 'js' === b || 'get' === b) return !0
			}
			return !1
		}
		function or() {
			var a
			if (gr.length) a = gr.shift()
			else if (fr.length) a = fr.shift()
			else return
			var b
			var c = a
			if (hr || !nr(c.message)) b = c
			else {
				hr = !0
				var d = c.message['gtm.uniqueEventId']
				'number' !== typeof d && (d = c.message['gtm.uniqueEventId'] = Ge())
				var e = {},
					f = {
						message: ((e.event = 'gtm.init_consent'), (e['gtm.uniqueEventId'] = d - 2), e),
						messageContext: { eventId: d - 2 },
					},
					g = {},
					k = {
						message: ((g.event = 'gtm.init'), (g['gtm.uniqueEventId'] = d - 1), g),
						messageContext: { eventId: d - 1 },
					}
				fr.unshift(k, c)
				if (Ni && S.D) {
					var m
					if (S.Ze) {
						var n = S.D,
							p = Oh().destination[n]
						m = p && p.context
					} else {
						var q = S.D,
							t = Oh().container[q]
						m = t && t.context
					}
					var u = m,
						r,
						v = cd(A.location.href)
					r = v.hostname + v.pathname
					var w = u && u.fromContainerExecution,
						y = u && u.source,
						x = S.D,
						B = S.Qa,
						z = S.Ze
					Zi || (Zi = r)
					Yi.push(x + ';' + B + ';' + (w ? 1 : 0) + ';' + (y || 0) + ';' + (z ? 1 : 0))
				}
				b = f
			}
			return b
		}
		function pr() {
			for (var a = !1, b; !ir && (b = or()); ) {
				ir = !0
				delete Je.eventModel
				Le()
				var c = b,
					d = c.message,
					e = c.messageContext
				if (null == d) ir = !1
				else {
					if (e.fromContainerExecution)
						for (
							var f = [
									'gtm.allowlist',
									'gtm.blocklist',
									'gtm.whitelist',
									'gtm.blacklist',
									'tagTypeBlacklist',
								],
								g = 0;
							g < f.length;
							g++
						) {
							var k = f[g],
								m = Me(k, 1)
							if (ra(m) || Ob(m)) m = G(m)
							Ke[k] = m
						}
					try {
						if (pa(d))
							try {
								d.call(Ne)
							} catch (C) {}
						else if (ra(d)) {
							var n = d
							if (h(n[0])) {
								var p = n[0].split('.'),
									q = p.pop(),
									t = n.slice(1),
									u = Me(p.join('.'), 2)
								if (null != u)
									try {
										u[q].apply(u, t)
									} catch (C) {}
							}
						} else {
							var r = void 0,
								v = !1
							if (ya(d)) {
								a: {
									if (d.length && h(d[0])) {
										var w = Fq[d[0]]
										if (w && (!e.fromContainerExecution || !Gq[d[0]])) {
											r = w(d, e)
											break a
										}
									}
									r = void 0
								}
								;(v = r && 'set' === d[0] && !!r.event) && J(101)
							} else r = d
							if (r) {
								var y = mr(r, e)
								a = y || a
								v && y && J(113)
							}
						}
					} finally {
						e.fromContainerExecution && Le(!0)
						var x = d['gtm.uniqueEventId']
						if ('number' === typeof x) {
							for (var B = er[String(x)] || [], z = 0; z < B.length; z++) gr.push(qr(B[z]))
							B.length && gr.sort(jr)
							delete er[String(x)]
							x > dr && (dr = x)
						}
						ir = !1
					}
				}
			}
			return !a
		}
		function rr() {
			if (R(70)) {
				var b = Dn(bn.C.te, S.D)
				En(b)
				if (sr()) {
					var c = Dn(bn.C.Rf, S.D)
					if (En(c)) {
						var d = Dn(bn.C.ve, S.D)
						Fn(c, d)
					}
				}
			}
			var e = pr()
			try {
				Hq(S.D)
			} catch (f) {}
			return e
		}
		function Rp(a) {
			if (dr < a.notBeforeEventId) {
				var b = String(a.notBeforeEventId)
				er[b] = er[b] || []
				er[b].push(a)
			} else
				gr.push(qr(a)),
					gr.sort(jr),
					F(function () {
						ir || pr()
					})
		}
		function qr(a) {
			return { message: a.message, messageContext: a.messageContext }
		}
		var tr = function () {
				function a(g) {
					var k = {}
					if (br(g)) {
						var m = g
						g = br(m) ? m.getUntrustedMessageValue() : void 0
						k.fromContainerExecution = !0
					}
					return { message: g, messageContext: k }
				}
				var b = sb(le.ca, []),
					c = (me[le.ca] = me[le.ca] || {})
				!0 === c.pruned && J(83)
				er = Pp().get()
				Sp()
				Ho(function () {
					if (!c.gtmDom) {
						c.gtmDom = !0
						var g = {}
						b.push(((g.event = 'gtm.dom'), g))
					}
				})
				Mq(function () {
					if (!c.gtmLoad) {
						c.gtmLoad = !0
						var g = {}
						b.push(((g.event = 'gtm.load'), g))
					}
				})
				c.subscribers = (c.subscribers || 0) + 1
				var d = b.push
				b.push = function () {
					var g
					if (0 < me.SANDBOXED_JS_SEMAPHORE) {
						g = []
						for (var k = 0; k < arguments.length; k++) g[k] = new cr(arguments[k])
					} else g = [].slice.call(arguments, 0)
					var m = g.map(function (t) {
						return a(t)
					})
					fr.push.apply(fr, m)
					var n = d.apply(b, g),
						p = Math.max(100, Number('1000') || 300)
					if (this.length > p) for (J(4), c.pruned = !0; this.length > p; ) this.shift()
					var q = 'boolean' !== typeof n || n
					return pr() && q
				}
				var e = b.slice(0).map(function (g) {
					return a(g)
				})
				fr.push.apply(fr, e)
				if (sr()) {
					if (R(70)) {
						var f = Dn(bn.C.ve, S.D)
						En(f)
					}
					F(rr)
				}
			},
			sr = function () {
				var a = !0
				return a
			}
		function ur(a) {
			if (null == a || 0 === a.length) return !1
			var b = Number(a),
				c = Fa()
			return b < c + 3e5 && b > c - 9e5
		}
		function vr(a) {
			return a && 0 === a.indexOf('pending:') ? ur(a.substr(8)) : !1
		}
		var vc = {}
		vc.Rd = new String('undefined')
		var Wr = A.clearTimeout,
			Xr = A.setTimeout,
			T = function (a, b, c, d) {
				if (Jh()) {
					b && F(b)
				} else return xb(a, b, c, d)
			},
			Yr = function () {
				return new Date()
			},
			Zr = function () {
				return A.location.href
			},
			$r = function (a) {
				return ad(cd(a), 'fragment')
			},
			as = function (a) {
				return bd(cd(a))
			},
			bs = function (a, b) {
				return Me(a, b || 2)
			},
			cs = function (a, b, c) {
				var d
				b ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = kr(a))) : (d = kr(a))
				return d
			},
			ds = function (a, b) {
				A[a] = b
			},
			W = function (a, b, c) {
				b && (void 0 === A[a] || (c && !A[a])) && (A[a] = b)
				return A[a]
			},
			es = function (a, b, c) {
				return qg(a, b, void 0 === c ? !0 : !!c)
			},
			fs = function (a, b, c) {
				return 0 === Gg(a, b, c)
			},
			gs = function (a, b) {
				if (Jh()) {
					b && F(b)
				} else zb(a, b)
			},
			hs = function (a) {
				return !!Cr(a, 'init', !1)
			},
			is = function (a) {
				Ar(a, 'init', !0)
			},
			js = function (a, b, c) {
				Ni && (Pb(a) || Yj(c, b, a))
			}
		function Hs(a) {
			return Is(a) ? 1 : 0
		}
		function Is(a) {
			var b = a.arg0,
				c = a.arg1
			if (a.any_of && Array.isArray(c)) {
				for (var d = 0; d < c.length; d++) {
					var e = G(a, {})
					G({ arg1: c[d], any_of: void 0 }, e)
					if (Hs(e)) return !0
				}
				return !1
			}
			switch (a['function']) {
				case '_cn':
					return 0 <= String(b).indexOf(String(c))
				case '_css':
					var f
					a: {
						if (b)
							try {
								for (var g = 0; g < fd.length; g++) {
									var k = fd[g]
									if (b[k]) {
										f = b[k](c)
										break a
									}
								}
							} catch (m) {}
						f = !1
					}
					return f
				case '_ew':
					return gd(b, c)
				case '_eq':
					return String(b) === String(c)
				case '_ge':
					return Number(b) >= Number(c)
				case '_gt':
					return Number(b) > Number(c)
				case '_lc':
					return 0 <= String(b).split(',').indexOf(String(c))
				case '_le':
					return Number(b) <= Number(c)
				case '_lt':
					return Number(b) < Number(c)
				case '_re':
					return ld(b, c, a.ignore_case)
				case '_sw':
					return 0 === String(b).indexOf(String(c))
				case '_um':
					return md(b, c)
			}
			return !1
		}
		Object.freeze({ dl: 1, id: 1 })
		Object.freeze(['config', 'event', 'get', 'set'])
		function et() {
			return (A.gaGlobal = A.gaGlobal || {})
		}
		var ft = function () {
				var a = et()
				a.hid = a.hid || ta()
				return a.hid
			},
			gt = function (a, b) {
				var c = et()
				if (void 0 == c.vid || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b)
			}
		var Ct = function () {
				var a = !0
				;(Ei(7) && Ei(9) && Ei(10)) || (a = !1)
				return a
			},
			Dt = function () {
				var a = !0
				;(Ei(3) && Ei(4)) || (a = !1)
				return a
			}
		var fu = window,
			gu = document,
			hu = function (a) {
				var b = fu._gaUserPrefs
				if ((b && b.ioo && b.ioo()) || (a && !0 === fu['ga-disable-' + a])) return !0
				try {
					var c = fu.external
					if (c && c._gaUserPrefs && 'oo' == c._gaUserPrefs) return !0
				} catch (f) {}
				for (var d = kg('AMP_TOKEN', String(gu.cookie), !0), e = 0; e < d.length; e++)
					if ('$OPT_OUT' == d[e]) return !0
				return gu.getElementById('__gaOptOutExtension') ? !0 : !1
			}
		function pu(a) {
			l(a, function (c) {
				'_' === c.charAt(0) && delete a[c]
			})
			var b = a[N.g.Ga] || {}
			l(b, function (c) {
				'_' === c.charAt(0) && delete b[c]
			})
		}
		var zu = function (a, b) {}
		function yu(a, b) {
			var c = function () {}
			return c
		}
		function Au(a, b, c) {}
		var Yv = yu
		var $v = encodeURI,
			X = encodeURIComponent,
			aw = function (a, b, c) {
				Ab(a, b, c)
			},
			bw = function (a, b) {
				if (!a) return !1
				var c = ad(cd(a), 'host')
				if (!c) return !1
				for (var d = 0; b && d < b.length; d++) {
					var e = b[d] && b[d].toLowerCase()
					if (e) {
						var f = c.length - e.length
						0 < f && '.' != e.charAt(0) && (f--, (e = '.' + e))
						if (0 <= f && c.indexOf(e, f) == f) return !0
					}
				}
				return !1
			},
			cw = function (a, b, c) {
				for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
					a[f] &&
						a[f].hasOwnProperty(b) &&
						a[f].hasOwnProperty(c) &&
						((d[a[f][b]] = a[f][c]), (e = !0))
				return e ? d : null
			}
		var Z = { o: {} }
		;(Z.o.e = ['google']),
			(function () {
				;(function (a) {
					Z.__e = a
					Z.__e.s = 'e'
					Z.__e.isVendorTemplate = !0
					Z.__e.priorityOverride = 0
					Z.__e.isInfrastructure = !1
				})(function (a) {
					return String(a.vtp_gtmCachedValues.event)
				})
			})()
		;(Z.o.v = ['google']),
			(function () {
				;(function (a) {
					Z.__v = a
					Z.__v.s = 'v'
					Z.__v.isVendorTemplate = !0
					Z.__v.priorityOverride = 0
					Z.__v.isInfrastructure = !1
				})(function (a) {
					var b = a.vtp_name
					if (!b || !b.replace) return !1
					var c = bs(b.replace(/\\\./g, '.'), a.vtp_dataLayerVersion || 1),
						d = void 0 !== c ? c : a.vtp_defaultValue
					js(d, 'v', a.vtp_gtmEventId)
					return d
				})
			})()
		;(Z.o.get = ['google']),
			(function () {
				;(function (a) {
					Z.__get = a
					Z.__get.s = 'get'
					Z.__get.isVendorTemplate = !0
					Z.__get.priorityOverride = 0
					Z.__get.isInfrastructure = !1
				})(function (a) {
					var b = a.vtp_settings,
						c = b.eventParameters || {},
						d = String(a.vtp_eventName),
						e = {}
					e.eventId = a.vtp_gtmEventId
					e.priorityId = a.vtp_gtmPriorityId
					a.vtp_deferrable && (e.deferrable = !0)
					var f = Np(String(b.streamId), d, c)
					Qp(f, e.eventId, e)
					a.vtp_gtmOnSuccess()
				})
			})()

		var ux = {}
		ux.dataLayer = Ne
		ux.callback = function (a) {
			De.hasOwnProperty(a) && pa(De[a]) && De[a]()
			delete De[a]
		}
		ux.bootstrap = 0
		ux._spx = !1
		function vx() {
			me[S.D] = me[S.D] || ux
			S.Qa && (me['ctid_' + S.Qa] = ux)
			Ph()
			Rh() ||
				l(Sh(), function (a, b) {
					no(a, b.transportUrl, b.context)
					J(92)
				})
			Ia(Ee, Z.o)
			xc = Fc
		}
		;(function (a) {
			function b() {
				m = D.documentElement.getAttribute('data-tag-assistant-present')
				ur(m) && (k = g.Ki)
			}
			if (!A['__TAGGY_INSTALLED']) {
				var c = !1
				if (D.referrer) {
					var d = cd(D.referrer)
					c = 'cct.google' === $c(d, 'host')
				}
				if (!c) {
					var e = qg('googTaggyReferrer')
					c = e.length && e[0].length
				}
				c && ((A['__TAGGY_INSTALLED'] = !0), xb('https://cct.google/taggy/agent.js'))
			}
			if (ye) a()
			else {
				var f = function (r) {
						var v = 'GTM',
							w = 'GTM'
						se ? ((v = 'OGT'), (w = 'GTAG')) : ye && (w = v = 'OPT')
						var y = A['google.tagmanager.debugui2.queue']
						y ||
							((y = []),
							(A['google.tagmanager.debugui2.queue'] = y),
							xb(
								'https://' +
									le.nd +
									'/debug/bootstrap?id=' +
									S.D +
									'&src=' +
									w +
									'&cond=' +
									r +
									'&gtm=' +
									Vh(),
							))
						var x = {
							messageType: 'CONTAINER_STARTING',
							data: { scriptSource: rb, containerProduct: v, debug: !1, id: S.D, isGte: re },
						}
						x.data.resume = function () {
							a()
						}
						le.bi && (x.data.initialPublish = !0)
						y.push(x)
					},
					g = { Jk: 1, Li: 2, Xi: 3, di: 4, Ki: 5 },
					k = void 0,
					m = void 0,
					n = ad(A.location, 'query', !1, void 0, 'gtm_debug')
				ur(n) && (k = g.Li)
				if (!k && D.referrer) {
					var p = cd(D.referrer)
					'tagassistant.google.com' === $c(p, 'host') && (k = g.Xi)
				}
				if (!k) {
					var q = qg('__TAG_ASSISTANT')
					q.length && q[0].length && (k = g.di)
				}
				k || b()
				if (!k && vr(m)) {
					var t = function () {
							if (u) return !0
							u = !0
							b()
							k && rb ? f(k) : a()
						},
						u = !1
					Bb(
						D,
						'TADebugSignal',
						function () {
							t()
						},
						!1,
					)
					A.setTimeout(function () {
						t()
					}, 200)
				} else k && rb ? f(k) : a()
			}
		})(function () {
			var a = !1
			a && Jn('INIT')
			if (R(70)) {
				var b = Dn(bn.C.ue, S.D)
				En(b)
			}
			If().m()
			Bi()
			if (S.Qa ? me['ctid_' + S.Qa] : me[S.D]) {
				var c = me.zones
				c && c.unregisterChild(Lh())
			} else {
				for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++)
					nc.push(e[f])
				for (var g = d.tags || [], k = 0; k < g.length; k++) qc.push(g[k])
				for (var m = d.predicates || [], n = 0; n < m.length; n++) pc.push(m[n])
				for (var p = d.rules || [], q = 0; q < p.length; q++) {
					for (var t = p[q], u = {}, r = 0; r < t.length; r++)
						u[t[r][0]] = Array.prototype.slice.call(t[r], 1)
					oc.push(u)
				}
				sc = Z
				tc = Hs
				vx()
				tr()
				Co = !1
				Do = 0
				if (('interactive' == D.readyState && !D.createEventObject) || 'complete' == D.readyState)
					Fo()
				else {
					Bb(D, 'DOMContentLoaded', Fo)
					Bb(D, 'readystatechange', Fo)
					if (D.createEventObject && D.documentElement.doScroll) {
						var v = !0
						try {
							v = !A.frameElement
						} catch (H) {}
						v && Go()
					}
					Bb(A, 'load', Fo)
				}
				Jq = !1
				'complete' === D.readyState ? Lq() : Bb(A, 'load', Lq)
				Ni && A.setInterval(Si, 864e5)
				R(46) && (J(111), Ya('HEALTH', 1))
				R(47) && (J(112), Ya('HEALTH', 2))
				Ce = Fa()
				ux.bootstrap = Ce
				if (a) {
					var B = Kn('INIT')
				}
				if (R(70)) {
					var z = Dn(bn.C.Qf, S.D)
					if (En(z)) {
						var C = Dn(bn.C.ue, S.D)
						Fn(z, C)
					}
				}
			}
		})
	},
)()
