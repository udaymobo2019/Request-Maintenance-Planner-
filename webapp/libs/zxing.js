! function (t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(
		"ZXing", [], e) : "object" == typeof exports ? exports.ZXing = e() : t.ZXing = e()
}(window, function () {
	return r = {}, t.m = e = [function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s.getNotFoundInstance = function () {
				return new s
			}, s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s.getFormatInstance = function () {
				return new s
			}, s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o;
		Object.defineProperty(e, "__esModule", {
				value: !0
			}), (o = n = n || {})[o.AZTEC = 0] = "AZTEC", o[o.CODABAR = 1] = "CODABAR", o[o.CODE_39 = 2] = "CODE_39", o[o.CODE_93 = 3] =
			"CODE_93", o[o.CODE_128 = 4] = "CODE_128", o[o.DATA_MATRIX = 5] = "DATA_MATRIX", o[o.EAN_8 = 6] = "EAN_8", o[o.EAN_13 = 7] = "EAN_13",
			o[o.ITF = 8] = "ITF", o[o.MAXICODE = 9] = "MAXICODE", o[o.PDF_417 = 10] = "PDF_417", o[o.QR_CODE = 11] = "QR_CODE", o[o.RSS_14 = 12] =
			"RSS_14", o[o.RSS_EXPANDED = 13] = "RSS_EXPANDED", o[o.UPC_A = 14] = "UPC_A", o[o.UPC_E = 15] = "UPC_E", o[o.UPC_EAN_EXTENSION = 16] =
			"UPC_EAN_EXTENSION", e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(10),
			o = r(63),
			i = (a.prototype.getX = function () {
				return this.x
			}, a.prototype.getY = function () {
				return this.y
			}, a.prototype.equals = function (t) {
				if (t instanceof a) {
					var e = t;
					return this.x === e.x && this.y === e.y
				}
				return !1
			}, a.prototype.hashCode = function () {
				return 31 * o.default.floatToIntBits(this.x) + o.default.floatToIntBits(this.y)
			}, a.prototype.toString = function () {
				return "(" + this.x + "," + this.y + ")"
			}, a.orderBestPatterns = function (t) {
				var e, r, n, o = this.distance(t[0], t[1]),
					i = this.distance(t[1], t[2]),
					a = this.distance(t[0], t[2]);
				if (n = o <= i && a <= i ? (r = t[0], e = t[1], t[2]) : i <= a && o <= a ? (r = t[1], e = t[0], t[2]) : (r = t[2], e = t[0], t[1]),
					this.crossProductZ(e, r, n) < 0) {
					var u = e;
					e = n, n = u
				}
				t[0] = e, t[1] = r, t[2] = n
			}, a.distance = function (t, e) {
				return n.default.distance(t.x, t.y, e.x, e.y)
			}, a.crossProductZ = function (t, e, r) {
				var n = e.x,
					o = e.y;
				return (r.x - n) * (t.y - o) - (r.y - o) * (t.x - n)
			}, a);

		function a(t, e) {
			this.x = t, this.y = e
		}
		e.default = i
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(28),
			o = (i.prototype.enableDecoding = function (t) {
				return this.encoding = t, this
			}, i.prototype.append = function (t) {
				return "string" == typeof t ? this.value += t.toString() : this.encoding ? this.value += n.default.castAsNonUtf8Char(t, this.encoding) :
					this.value += String.fromCharCode(t), this
			}, i.prototype.length = function () {
				return this.value.length
			}, i.prototype.charAt = function (t) {
				return this.value.charAt(t)
			}, i.prototype.deleteCharAt = function (t) {
				this.value = this.value.substr(0, t) + this.value.substring(t + 1)
			}, i.prototype.setCharAt = function (t, e) {
				this.value = this.value.substr(0, t) + e + this.value.substr(t + 1)
			}, i.prototype.substring = function (t, e) {
				return this.value.substring(t, e)
			}, i.prototype.setLengthToZero = function () {
				this.value = ""
			}, i.prototype.toString = function () {
				return this.value
			}, i.prototype.insert = function (t, e) {
				this.value = this.value.substr(0, t) + e + this.value.substr(t + e.length)
			}, i);

		function i(t) {
			void 0 === t && (t = ""), this.value = t
		}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.arraycopy = function (t, e, r, n, o) {
			for (; o--;) r[n++] = t[e++]
		}, o.currentTimeMillis = function () {
			return Date.now()
		}, o);

		function o() {}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(95),
			u = (o(s, i = a.CustomError), s);

		function s(t) {
			void 0 === t && (t = void 0);
			var e = i.call(this, t) || this;
			return e.message = t, e
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o;
		Object.defineProperty(e, "__esModule", {
				value: !0
			}), (o = n = n || {})[o.OTHER = 0] = "OTHER", o[o.PURE_BARCODE = 1] = "PURE_BARCODE", o[o.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS",
			o[o.TRY_HARDER = 3] = "TRY_HARDER", o[o.CHARACTER_SET = 4] = "CHARACTER_SET", o[o.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", o[o.ASSUME_CODE_39_CHECK_DIGIT =
				6] = "ASSUME_CODE_39_CHECK_DIGIT", o[o.ASSUME_GS1 = 7] = "ASSUME_GS1", o[o.RETURN_CODABAR_START_END = 8] =
			"RETURN_CODABAR_START_END", o[o.NEED_RESULT_POINT_CALLBACK = 9] = "NEED_RESULT_POINT_CALLBACK", o[o.ALLOWED_EAN_EXTENSIONS = 10] =
			"ALLOWED_EAN_EXTENSIONS", e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(6),
			o = (i.prototype.getText = function () {
				return this.text
			}, i.prototype.getRawBytes = function () {
				return this.rawBytes
			}, i.prototype.getNumBits = function () {
				return this.numBits
			}, i.prototype.getResultPoints = function () {
				return this.resultPoints
			}, i.prototype.getBarcodeFormat = function () {
				return this.format
			}, i.prototype.getResultMetadata = function () {
				return this.resultMetadata
			}, i.prototype.putMetadata = function (t, e) {
				null === this.resultMetadata && (this.resultMetadata = new Map), this.resultMetadata.set(t, e)
			}, i.prototype.putAllMetadata = function (t) {
				null !== t && (null === this.resultMetadata ? this.resultMetadata = t : this.resultMetadata = new Map(t))
			}, i.prototype.addResultPoints = function (t) {
				var e = this.resultPoints;
				if (null === e) this.resultPoints = t;
				else if (null !== t && 0 < t.length) {
					var r = new Array(e.length + t.length);
					n.default.arraycopy(e, 0, r, 0, e.length), n.default.arraycopy(t, 0, r, e.length, t.length), this.resultPoints = r
				}
			}, i.prototype.getTimestamp = function () {
				return this.timestamp
			}, i.prototype.toString = function () {
				return this.text
			}, i);

		function i(t, e, r, o, i, a) {
			void 0 === r && (r = null == e ? 0 : 8 * e.length), void 0 === a && (a = n.default.currentTimeMillis()), this.text = t, this.rawBytes =
				e, this.numBits = r, this.resultPoints = o, this.format = i, this.timestamp = a, this.text = t, this.rawBytes = e, this.numBits =
				null == r ? null == e ? 0 : 8 * e.length : r, this.resultPoints = o, this.format = i, this.resultMetadata = null, this.timestamp =
				null == a ? n.default.currentTimeMillis() : a
		}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.MathUtils = function () {}, o.round = function (t) {
			return NaN === t ? 0 : t <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : t >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER :
				t + (t < 0 ? -.5 : .5) | 0
		}, o.distance = function (t, e, r, n) {
			var o = t - r,
				i = e - n;
			return Math.sqrt(o * o + i * i)
		}, o.sum = function (t) {
			for (var e = 0, r = 0, n = t.length; r !== n; r++) e += t[r];
			return e
		}, o);

		function o() {}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s.getChecksumInstance = function () {
				return new s
			}, s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(18),
			o = r(6),
			i = r(19),
			a = r(5),
			u = r(1),
			s = (f.parseFromBooleanArray = function (t) {
				for (var e = t.length, r = t[0].length, n = new f(r, e), o = 0; o < e; o++)
					for (var i = t[o], a = 0; a < r; a++) i[a] && n.set(a, o);
				return n
			}, f.parseFromString = function (t, e, r) {
				if (null === t) throw new u.default("stringRepresentation cannot be null");
				for (var n = new Array(t.length), o = 0, i = 0, a = -1, s = 0, l = 0; l < t.length;)
					if ("\n" === t.charAt(l) || "\r" === t.charAt(l)) {
						if (i < o) {
							if (-1 === a) a = o - i;
							else if (o - i !== a) throw new u.default("row lengths do not match");
							i = o, s++
						}
						l++
					} else if (t.substring(l, l + e.length) === e) l += e.length, n[o] = !0, o++;
				else {
					if (t.substring(l, l + r.length) !== r) throw new u.default("illegal character encountered: " + t.substring(l));
					l += r.length, n[o] = !1, o++
				}
				if (i < o) {
					if (-1 === a) a = o - i;
					else if (o - i !== a) throw new u.default("row lengths do not match");
					s++
				}
				for (var d = new f(a, s), c = 0; c < o; c++) n[c] && d.set(Math.floor(c % a), Math.floor(c / a));
				return d
			}, f.prototype.get = function (t, e) {
				var r = e * this.rowSize + Math.floor(t / 32);
				return 0 != (this.bits[r] >>> (31 & t) & 1)
			}, f.prototype.set = function (t, e) {
				var r = e * this.rowSize + Math.floor(t / 32);
				this.bits[r] |= 1 << (31 & t) & 4294967295
			}, f.prototype.unset = function (t, e) {
				var r = e * this.rowSize + Math.floor(t / 32);
				this.bits[r] &= ~(1 << (31 & t) & 4294967295)
			}, f.prototype.flip = function (t, e) {
				var r = e * this.rowSize + Math.floor(t / 32);
				this.bits[r] ^= 1 << (31 & t) & 4294967295
			}, f.prototype.xor = function (t) {
				if (this.width !== t.getWidth() || this.height !== t.getHeight() || this.rowSize !== t.getRowSize()) throw new u.default(
					"input matrix dimensions do not match");
				for (var e = new n.default(Math.floor(this.width / 32) + 1), r = this.rowSize, o = this.bits, i = 0, a = this.height; i < a; i++)
					for (var s = i * r, f = t.getRow(i, e).getBitArray(), l = 0; l < r; l++) o[s + l] ^= f[l]
			}, f.prototype.clear = function () {
				for (var t = this.bits, e = t.length, r = 0; r < e; r++) t[r] = 0
			}, f.prototype.setRegion = function (t, e, r, n) {
				if (e < 0 || t < 0) throw new u.default("Left and top must be nonnegative");
				if (n < 1 || r < 1) throw new u.default("Height and width must be at least 1");
				var o = t + r,
					i = e + n;
				if (i > this.height || o > this.width) throw new u.default("The region must fit inside the matrix");
				for (var a = this.rowSize, s = this.bits, f = e; f < i; f++)
					for (var l = f * a, d = t; d < o; d++) s[l + Math.floor(d / 32)] |= 1 << (31 & d) & 4294967295
			}, f.prototype.getRow = function (t, e) {
				null == e || e.getSize() < this.width ? e = new n.default(this.width) : e.clear();
				for (var r = this.rowSize, o = this.bits, i = t * r, a = 0; a < r; a++) e.setBulk(32 * a, o[i + a]);
				return e
			}, f.prototype.setRow = function (t, e) {
				o.default.arraycopy(e.getBitArray(), 0, this.bits, t * this.rowSize, this.rowSize)
			}, f.prototype.rotate180 = function () {
				for (var t = this.getWidth(), e = this.getHeight(), r = new n.default(t), o = new n.default(t), i = 0, a = Math.floor((e + 1) / 2); i <
					a; i++) r = this.getRow(i, r), o = this.getRow(e - 1 - i, o), r.reverse(), o.reverse(), this.setRow(i, o), this.setRow(e - 1 - i,
					r)
			}, f.prototype.getEnclosingRectangle = function () {
				for (var t = this.width, e = this.height, r = this.rowSize, n = this.bits, o = t, i = e, a = -1, u = -1, s = 0; s < e; s++)
					for (var f = 0; f < r; f++) {
						var l = n[s * r + f];
						if (0 !== l) {
							if (s < i && (i = s), u < s && (u = s), 32 * f < o) {
								for (var d = 0; 0 == (l << 31 - d & 4294967295);) d++;
								32 * f + d < o && (o = 32 * f + d)
							}
							if (a < 32 * f + 31) {
								for (d = 31; l >>> d == 0;) d--;
								a < 32 * f + d && (a = 32 * f + d)
							}
						}
					}
				return a < o || u < i ? null : Int32Array.from([o, i, a - o + 1, u - i + 1])
			}, f.prototype.getTopLeftOnBit = function () {
				for (var t = this.rowSize, e = this.bits, r = 0; r < e.length && 0 === e[r];) r++;
				if (r === e.length) return null;
				for (var n = r / t, o = r % t * 32, i = e[r], a = 0; 0 == (i << 31 - a & 4294967295);) a++;
				return o += a, Int32Array.from([o, n])
			}, f.prototype.getBottomRightOnBit = function () {
				for (var t = this.rowSize, e = this.bits, r = e.length - 1; 0 <= r && 0 === e[r];) r--;
				if (r < 0) return null;
				for (var n = Math.floor(r / t), o = 32 * Math.floor(r % t), i = e[r], a = 31; i >>> a == 0;) a--;
				return o += a, Int32Array.from([o, n])
			}, f.prototype.getWidth = function () {
				return this.width
			}, f.prototype.getHeight = function () {
				return this.height
			}, f.prototype.getRowSize = function () {
				return this.rowSize
			}, f.prototype.equals = function (t) {
				if (!(t instanceof f)) return !1;
				var e = t;
				return this.width === e.width && this.height === e.height && this.rowSize === e.rowSize && i.default.equals(this.bits, e.bits)
			}, f.prototype.hashCode = function () {
				var t = this.width;
				return 31 * (t = 31 * (t = 31 * (t = 31 * t + this.width) + this.height) + this.rowSize) + i.default.hashCode(this.bits)
			}, f.prototype.toString = function (t, e, r) {
				return void 0 === t && (t = "X "), void 0 === e && (e = "  "), void 0 === r && (r = "\n"), this.buildToString(t, e, r)
			}, f.prototype.buildToString = function (t, e, r) {
				for (var n = new a.default, o = 0, i = this.height; o < i; o++) {
					for (var u = 0, s = this.width; u < s; u++) n.append(this.get(u, o) ? t : e);
					n.append(r)
				}
				return n.toString()
			}, f.prototype.clone = function () {
				return new f(this.width, this.height, this.rowSize, this.bits.slice())
			}, f);

		function f(t, e, r, n) {
			if (this.width = t, this.height = e, this.rowSize = r, this.bits = n, null == e && (e = t), this.height = e, t < 1 || e < 1) throw new u
				.default("Both dimensions must be greater than 0");
			null == r && (r = Math.floor((t + 31) / 32)), this.rowSize = r, null == n && (this.bits = new Int32Array(this.rowSize * this.height))
		}
		e.default = s
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.numberOfTrailingZeros = function (t) {
			var e;
			if (0 === t) return 32;
			var r = 31;
			return 0 != (e = t << 16) && (r -= 16, t = e), 0 != (e = t << 8) && (r -= 8, t = e), 0 != (e = t << 4) && (r -= 4, t = e), 0 != (e =
				t << 2) && (r -= 2, t = e), r - (t << 1 >>> 31)
		}, o.numberOfLeadingZeros = function (t) {
			if (0 === t) return 32;
			var e = 1;
			return t >>> 16 == 0 && (e += 16, t <<= 16), t >>> 24 == 0 && (e += 8, t <<= 8), t >>> 28 == 0 && (e += 4, t <<= 4), t >>> 30 == 0 &&
				(e += 2, t <<= 2), e - (t >>> 31)
		}, o.toHexString = function (t) {
			return t.toString(16)
		}, o.toBinaryString = function (t) {
			return String(parseInt(String(t), 2))
		}, o.bitCount = function (t) {
			return t = (t = (858993459 & (t -= t >>> 1 & 1431655765)) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135, 63 & (t += t >>> 8) + (
				t >>> 16)
		}, o.truncDivision = function (t, e) {
			return Math.trunc(t / e)
		}, o.parseInt = function (t, e) {
			return void 0 === e && (e = void 0), parseInt(t, e)
		}, o.MIN_VALUE_32_BITS = -2147483648, o.MAX_VALUE = Number.MAX_SAFE_INTEGER, o);

		function o() {}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n, o;
		Object.defineProperty(e, "__esModule", {
				value: !0
			}), (o = n = n || {})[o.OTHER = 0] = "OTHER", o[o.ORIENTATION = 1] = "ORIENTATION", o[o.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", o[o.ERROR_CORRECTION_LEVEL =
				3] = "ERROR_CORRECTION_LEVEL", o[o.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", o[o.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", o[o.POSSIBLE_COUNTRY =
				6] = "POSSIBLE_COUNTRY", o[o.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", o[o.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA",
			o[o.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", o[o.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY",
			e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(18),
			o = r(8),
			i = r(14),
			a = r(4),
			u = r(0),
			s = (f.prototype.decode = function (t, e) {
				try {
					return this.doDecode(t, e)
				} catch (h) {
					if (e && !0 === e.get(o.default.TRY_HARDER) && t.isRotateSupported()) {
						var r = t.rotateCounterClockwise(),
							n = this.doDecode(r, e),
							s = n.getResultMetadata(),
							f = 270;
						null !== s && !0 === s.get(i.default.ORIENTATION) && (f += s.get(i.default.ORIENTATION) % 360), n.putMetadata(i.default.ORIENTATION,
							f);
						var l = n.getResultPoints();
						if (null !== l)
							for (var d = r.getHeight(), c = 0; c < l.length; c++) l[c] = new a.default(d - l[c].getY() - 1, l[c].getX());
						return n
					}
					throw new u.default
				}
			}, f.prototype.reset = function () {}, f.prototype.doDecode = function (t, e) {
				var r, s = t.getWidth(),
					f = t.getHeight(),
					l = new n.default(s),
					d = e && !0 === e.get(o.default.TRY_HARDER),
					c = Math.max(1, f >> (d ? 8 : 5));
				r = d ? f : 15;
				for (var h = Math.trunc(f / 2), p = 0; p < r; p++) {
					var _ = Math.trunc((p + 1) / 2),
						g = h + c * (0 == (1 & p) ? _ : -_);
					if (g < 0 || f <= g) break;
					try {
						l = t.getBlackRow(g, l)
					} catch (t) {
						continue
					}
					for (var v = function (t) {
							if (1 === t && (l.reverse(), e && !0 === e.get(o.default.NEED_RESULT_POINT_CALLBACK))) {
								var r = new Map;
								e.forEach(function (t, e) {
									return r.set(e, t)
								}), r.delete(o.default.NEED_RESULT_POINT_CALLBACK), e = r
							}
							try {
								var n = w.decodeRow(g, l, e);
								if (1 === t) {
									n.putMetadata(i.default.ORIENTATION, 180);
									var u = n.getResultPoints();
									null !== u && (u[0] = new a.default(s - u[0].getX() - 1, u[0].getY()), u[1] = new a.default(s - u[1].getX() - 1, u[1].getY()))
								}
								return {
									value: n
								}
							} catch (t) {}
						}, w = this, y = 0; y < 2; y++) {
						var E = v(y);
						if ("object" == typeof E) return E.value
					}
				}
				throw new u.default
			}, f.recordPattern = function (t, e, r) {
				for (var n = r.length, o = 0; o < n; o++) r[o] = 0;
				var i = t.getSize();
				if (i <= e) throw new u.default;
				for (var a = !t.get(e), s = 0, f = e; f < i;) {
					if (t.get(f) !== a) r[s]++;
					else {
						if (++s === n) break;
						r[s] = 1, a = !a
					}
					f++
				}
				if (s !== n && (s !== n - 1 || f !== i)) throw new u.default
			}, f.recordPatternInReverse = function (t, e, r) {
				for (var n = r.length, o = t.get(e); 0 < e && 0 <= n;) t.get(--e) !== o && (n--, o = !o);
				if (0 <= n) throw new u.default;
				f.recordPattern(t, e + 1, r)
			}, f.patternMatchVariance = function (t, e, r) {
				for (var n = t.length, o = 0, i = 0, a = 0; a < n; a++) o += t[a], i += e[a];
				if (o < i) return Number.POSITIVE_INFINITY;
				var u = o / i;
				r *= u;
				for (var s = 0, f = 0; f < n; f++) {
					var l = t[f],
						d = e[f] * u,
						c = d < l ? l - d : d - l;
					if (r < c) return Number.POSITIVE_INFINITY;
					s += c
				}
				return s / o
			}, f);

		function f() {}
		e.default = s
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__awaiter || function (t, e, r, n) {
				return new(r = r || Promise)(function (o, i) {
					function a(t) {
						try {
							s(n.next(t))
						} catch (t) {
							i(t)
						}
					}

					function u(t) {
						try {
							s(n.throw(t))
						} catch (t) {
							i(t)
						}
					}

					function s(t) {
						t.done ? o(t.value) : new r(function (e) {
							e(t.value)
						}).then(a, u)
					}
					s((n = n.apply(t, e || [])).next())
				})
			},
			o = this && this.__generator || function (t, e) {
				var r, n, o, i, a = {
					label: 0,
					sent: function () {
						if (1 & o[0]) throw o[1];
						return o[1]
					},
					trys: [],
					ops: []
				};
				return i = {
					next: u(0),
					throw: u(1),
					return: u(2)
				}, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
					return this
				}), i;

				function u(i) {
					return function (u) {
						return function (i) {
							if (r) throw new TypeError("Generator is already executing.");
							for (; a;) try {
								if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[
										1])).done) return o;
								switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
								case 0:
								case 1:
									o = i;
									break;
								case 4:
									return a.label++, {
										value: i[1],
										done: !1
									};
								case 5:
									a.label++, n = i[1], i = [0];
									continue;
								case 7:
									i = a.ops.pop(), a.trys.pop();
									continue;
								default:
									if (!(o = 0 < (o = a.trys).length && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
										a = 0;
										continue
									}
									if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
										a.label = i[1];
										break
									}
									if (6 === i[0] && a.label < o[1]) {
										a.label = o[1], o = i;
										break
									}
									if (o && a.label < o[2]) {
										a.label = o[2], a.ops.push(i);
										break
									}
									o[2] && a.ops.pop(), a.trys.pop();
									continue
								}
								i = e.call(t, a)
							} catch (t) {
								i = [6, t], n = 0
							} finally {
								r = o = 0
							}
							if (5 & i[0]) throw i[1];
							return {
								value: i[0] ? i[1] : void 0,
								done: !0
							}
						}([i, u])
					}
				}
			},
			i = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = r(36),
			u = r(55),
			s = r(11),
			f = r(56),
			l = r(2),
			d = r(0),
			c = r(59),
			h = r(60),
			p = (Object.defineProperty(_.prototype, "hasNavigator", {
				get: function () {
					return "undefined" != typeof navigator
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(_.prototype, "isMediaDevicesSuported", {
				get: function () {
					return this.hasNavigator && !!navigator.mediaDevices
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(_.prototype, "canEnumerateDevices", {
				get: function () {
					return !(!this.isMediaDevicesSuported || !navigator.mediaDevices.enumerateDevices)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(_.prototype, "timeBetweenDecodingAttempts", {
				get: function () {
					return this._timeBetweenDecodingAttempts
				},
				set: function (t) {
					this._timeBetweenDecodingAttempts = t < 0 ? 0 : t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(_.prototype, "hints", {
				get: function () {
					return this._hints
				},
				set: function (t) {
					this._hints = t || null
				},
				enumerable: !0,
				configurable: !0
			}), _.prototype.listVideoInputDevices = function () {
				return n(this, void 0, void 0, function () {
					var t, e, r, n, a, u, s, f, l, d, c, h;
					return o(this, function (o) {
						switch (o.label) {
						case 0:
							if (!this.hasNavigator) throw new Error("Can't enumerate devices, navigator is not present.");
							if (!this.canEnumerateDevices) throw new Error("Can't enumerate devices, method not supported.");
							return [4, navigator.mediaDevices.enumerateDevices()];
						case 1:
							r = o.sent(), n = [];
							try {
								for (a = i(r), u = a.next(); !u.done; u = a.next()) s = u.value, "videoinput" === (f = "video" === s.kind ? "videoinput" :
									s.kind) && (l = s.deviceId || s.id, d = s.label || "Video device " + (n.length + 1), c = s.groupId, h = {
									deviceId: l,
									label: d,
									kind: f,
									groupId: c
								}, n.push(h))
							} catch (o) {
								t = {
									error: o
								}
							} finally {
								try {
									u && !u.done && (e = a.return) && e.call(a)
								} finally {
									if (t) throw t.error
								}
							}
							return [2, n]
						}
					})
				})
			}, _.prototype.getVideoInputDevices = function () {
				return n(this, void 0, void 0, function () {
					return o(this, function (t) {
						switch (t.label) {
						case 0:
							return [4, this.listVideoInputDevices()];
						case 1:
							return [2, t.sent().map(function (t) {
								return new h.VideoInputDevice(t.deviceId, t.label)
							})]
						}
					})
				})
			}, _.prototype.findDeviceById = function (t) {
				return n(this, void 0, void 0, function () {
					var e;
					return o(this, function (r) {
						switch (r.label) {
						case 0:
							return [4, this.listVideoInputDevices()];
						case 1:
							return (e = r.sent()) ? [2, e.find(function (e) {
								return e.deviceId === t
							})] : [2, null]
						}
					})
				})
			}, _.prototype.decodeFromInputVideoDevice = function (t, e) {
				return n(this, void 0, void 0, function () {
					return o(this, function (r) {
						switch (r.label) {
						case 0:
							return [4, this.decodeOnceFromVideoDevice(t, e)];
						case 1:
							return [2, r.sent()]
						}
					})
				})
			}, _.prototype.decodeOnceFromVideoDevice = function (t, e) {
				return n(this, void 0, void 0, function () {
					var r;
					return o(this, function (n) {
						switch (n.label) {
						case 0:
							return this.reset(), r = {
								video: t ? {
									deviceId: {
										exact: t
									}
								} : {
									facingMode: "environment"
								}
							}, [4, this.decodeOnceFromConstraints(r, e)];
						case 1:
							return [2, n.sent()]
						}
					})
				})
			}, _.prototype.decodeOnceFromConstraints = function (t, e) {
				return n(this, void 0, void 0, function () {
					var r;
					return o(this, function (n) {
						switch (n.label) {
						case 0:
							return [4, navigator.mediaDevices.getUserMedia(t)];
						case 1:
							return r = n.sent(), [4, this.decodeOnceFromStream(r, e)];
						case 2:
							return [2, n.sent()]
						}
					})
				})
			}, _.prototype.decodeOnceFromStream = function (t, e) {
				return n(this, void 0, void 0, function () {
					var r;
					return o(this, function (n) {
						switch (n.label) {
						case 0:
							return this.reset(), [4, this.attachStreamToVideo(t, e)];
						case 1:
							return r = n.sent(), [4, this.decodeOnce(r)];
						case 2:
							return [2, n.sent()]
						}
					})
				})
			}, _.prototype.decodeFromInputVideoDeviceContinuously = function (t, e, r) {
				return n(this, void 0, void 0, function () {
					return o(this, function (n) {
						switch (n.label) {
						case 0:
							return [4, this.decodeFromVideoDevice(t, e, r)];
						case 1:
							return [2, n.sent()]
						}
					})
				})
			}, _.prototype.decodeFromVideoDevice = function (t, e, r) {
				return n(this, void 0, void 0, function () {
					var n;
					return o(this, function (o) {
						switch (o.label) {
						case 0:
							return n = {
								video: t ? {
									deviceId: {
										exact: t
									}
								} : {
									facingMode: "environment"
								}
							}, [4, this.decodeFromConstraints(n, e, r)];
						case 1:
							return [2, o.sent()]
						}
					})
				})
			}, _.prototype.decodeFromConstraints = function (t, e, r) {
				return n(this, void 0, void 0, function () {
					var n;
					return o(this, function (o) {
						switch (o.label) {
						case 0:
							return [4, navigator.mediaDevices.getUserMedia(t)];
						case 1:
							return n = o.sent(), [4, this.decodeFromStream(n, e, r)];
						case 2:
							return [2, o.sent()]
						}
					})
				})
			}, _.prototype.decodeFromStream = function (t, e, r) {
				return n(this, void 0, void 0, function () {
					var n;
					return o(this, function (o) {
						switch (o.label) {
						case 0:
							return this.reset(), [4, this.attachStreamToVideo(t, e)];
						case 1:
							return n = o.sent(), [4, this.decodeContinuously(n, r)];
						case 2:
							return [2, o.sent()]
						}
					})
				})
			}, _.prototype.stopAsyncDecode = function () {
				this._stopAsyncDecode = !0
			}, _.prototype.stopContinuousDecode = function () {
				this._stopContinuousDecode = !0
			}, _.prototype.attachStreamToVideo = function (t, e) {
				return n(this, void 0, void 0, function () {
					var r;
					return o(this, function (n) {
						switch (n.label) {
						case 0:
							return r = this.prepareVideoElement(e), this.addVideoSource(r, t), this.videoElement = r, this.stream = t, [4, this.playVideoOnLoadAsync(
								r)];
						case 1:
							return n.sent(), [2, r]
						}
					})
				})
			}, _.prototype.playVideoOnLoadAsync = function (t) {
				var e = this;
				return new Promise(function (r, n) {
					return e.playVideoOnLoad(t, function () {
						return r()
					})
				})
			}, _.prototype.playVideoOnLoad = function (t, e) {
				var r = this;
				this.videoEndedListener = function () {
					return r.stopStreams()
				}, this.videoCanPlayListener = function () {
					return r.tryPlayVideo(t)
				}, t.addEventListener("ended", this.videoEndedListener), t.addEventListener("canplay", this.videoCanPlayListener), t.addEventListener(
					"playing", e), this.tryPlayVideo(t)
			}, _.prototype.isVideoPlaying = function (t) {
				return 0 < t.currentTime && !t.paused && !t.ended && 2 < t.readyState
			}, _.prototype.tryPlayVideo = function (t) {
				return n(this, void 0, void 0, function () {
					return o(this, function (e) {
						switch (e.label) {
						case 0:
							if (this.isVideoPlaying(t)) return console.warn("Trying to play video that is already playing."), [2];
							e.label = 1;
						case 1:
							return e.trys.push([1, 3, , 4]), [4, t.play()];
						case 2:
							return e.sent(), [3, 4];
						case 3:
							return e.sent(), console.warn("It was not possible to play the video."), [3, 4];
						case 4:
							return [2]
						}
					})
				})
			}, _.prototype.getMediaElement = function (t, e) {
				var r = document.getElementById(t);
				if (!r) throw new a.default("element with id '" + t + "' not found");
				if (r.nodeName.toLowerCase() !== e.toLowerCase()) throw new a.default("element with id '" + t + "' must be an " + e + " element");
				return r
			}, _.prototype.decodeFromImage = function (t, e) {
				if (!t && !e) throw new a.default("either imageElement with a src set or an url must be provided");
				return e && !t ? this.decodeFromImageUrl(e) : this.decodeFromImageElement(t)
			}, _.prototype.decodeFromVideo = function (t, e) {
				if (!t && !e) throw new a.default("Either an element with a src set or an URL must be provided");
				return e && !t ? this.decodeFromVideoUrl(e) : this.decodeFromVideoElement(t)
			}, _.prototype.decodeFromVideoContinuously = function (t, e, r) {
				if (void 0 === t && void 0 === e) throw new a.default("Either an element with a src set or an URL must be provided");
				return e && !t ? this.decodeFromVideoUrlContinuously(e, r) : this.decodeFromVideoElementContinuously(t, r)
			}, _.prototype.decodeFromImageElement = function (t) {
				if (!t) throw new a.default("An image element must be provided.");
				this.reset();
				var e = this.prepareImageElement(t);
				return this.imageElement = e, this.isImageLoaded(e) ? this.decodeOnce(e, !1, !0) : this._decodeOnLoadImage(e)
			}, _.prototype.decodeFromVideoElement = function (t) {
				var e = this._decodeFromVideoElementSetup(t);
				return this._decodeOnLoadVideo(e)
			}, _.prototype.decodeFromVideoElementContinuously = function (t, e) {
				var r = this._decodeFromVideoElementSetup(t);
				return this._decodeOnLoadVideoContinuously(r, e)
			}, _.prototype._decodeFromVideoElementSetup = function (t) {
				if (!t) throw new a.default("A video element must be provided.");
				this.reset();
				var e = this.prepareVideoElement(t);
				return this.videoElement = e
			}, _.prototype.decodeFromImageUrl = function (t) {
				if (!t) throw new a.default("An URL must be provided.");
				this.reset();
				var e = this.prepareImageElement();
				this.imageElement = e;
				var r = this._decodeOnLoadImage(e);
				return e.src = t, r
			}, _.prototype.decodeFromVideoUrl = function (t) {
				if (!t) throw new a.default("An URL must be provided.");
				this.reset();
				var e = this.prepareVideoElement(),
					r = this.decodeFromVideoElement(e);
				return e.src = t, r
			}, _.prototype.decodeFromVideoUrlContinuously = function (t, e) {
				if (!t) throw new a.default("An URL must be provided.");
				this.reset();
				var r = this.prepareVideoElement(),
					n = this.decodeFromVideoElementContinuously(r, e);
				return r.src = t, n
			}, _.prototype._decodeOnLoadImage = function (t) {
				var e = this;
				return new Promise(function (r, n) {
					e.imageLoadedListener = function () {
						return e.decodeOnce(t, !1, !0).then(r, n)
					}, t.addEventListener("load", e.imageLoadedListener)
				})
			}, _.prototype._decodeOnLoadVideo = function (t) {
				return n(this, void 0, void 0, function () {
					return o(this, function (e) {
						switch (e.label) {
						case 0:
							return [4, this.playVideoOnLoadAsync(t)];
						case 1:
							return e.sent(), [4, this.decodeOnce(t)];
						case 2:
							return [2, e.sent()]
						}
					})
				})
			}, _.prototype._decodeOnLoadVideoContinuously = function (t, e) {
				return n(this, void 0, void 0, function () {
					return o(this, function (r) {
						switch (r.label) {
						case 0:
							return [4, this.playVideoOnLoadAsync(t)];
						case 1:
							return r.sent(), this.decodeContinuously(t, e), [2]
						}
					})
				})
			}, _.prototype.isImageLoaded = function (t) {
				return !!t.complete && 0 !== t.naturalWidth
			}, _.prototype.prepareImageElement = function (t) {
				var e;
				return void 0 === t && ((e = document.createElement("img")).width = 200, e.height = 200), "string" == typeof t && (e = this.getMediaElement(
					t, "img")), t instanceof HTMLImageElement && (e = t), e
			}, _.prototype.prepareVideoElement = function (t) {
				var e;
				return t || "undefined" == typeof document || ((e = document.createElement("video")).width = 200, e.height = 200), "string" ==
					typeof t && (e = this.getMediaElement(t, "video")), t instanceof HTMLVideoElement && (e = t), e.setAttribute("autoplay", "true"),
					e.setAttribute("muted", "true"), e.setAttribute("playsinline", "true"), e
			}, _.prototype.decodeOnce = function (t, e, r) {
				var n = this;
				void 0 === e && (e = !0), void 0 === r && (r = !0), this._stopAsyncDecode = !1;
				var o = function (i, a) {
					if (n._stopAsyncDecode) return a(new d.default("Video stream has ended before any code could be detected.")), void(n._stopAsyncDecode =
						void 0);
					try {
						var u = n.decode(t);
						i(u)
					} catch (u) {
						var f = e && u instanceof d.default,
							c = u instanceof s.default || u instanceof l.default;
						if (f || c && r) return setTimeout(function () {
							return o(i, a)
						}, n._timeBetweenDecodingAttempts);
						a(u)
					}
				};
				return new Promise(function (t, e) {
					return o(t, e)
				})
			}, _.prototype.decodeContinuously = function (t, e) {
				var r = this;
				this._stopContinuousDecode = !1;
				var n = function () {
					if (r._stopContinuousDecode) r._stopContinuousDecode = void 0;
					else try {
						var o = r.decode(t);
						e(o, null), setTimeout(function () {
							return n()
						}, r.timeBetweenScansMillis)
					} catch (o) {
						e(null, o);
						var i = o instanceof s.default || o instanceof l.default,
							a = o instanceof d.default;
						(i || a) && setTimeout(function () {
							return n()
						}, r._timeBetweenDecodingAttempts)
					}
				};
				n()
			}, _.prototype.decode = function (t) {
				var e = this.createBinaryBitmap(t);
				return this.decodeBitmap(e)
			}, _.prototype.createBinaryBitmap = function (t) {
				var e = this.getCaptureCanvasContext(t);
				this.drawImageOnCanvas(e, t);
				var r = this.getCaptureCanvas(t),
					n = new c.HTMLCanvasElementLuminanceSource(r),
					o = new f.default(n);
				return new u.default(o)
			}, _.prototype.getCaptureCanvasContext = function (t) {
				if (!this.captureCanvasContext) {
					var e = this.getCaptureCanvas(t).getContext("2d");
					this.captureCanvasContext = e
				}
				return this.captureCanvasContext
			}, _.prototype.getCaptureCanvas = function (t) {
				if (!this.captureCanvas) {
					var e = this.createCaptureCanvas(t);
					this.captureCanvas = e
				}
				return this.captureCanvas
			}, _.prototype.drawImageOnCanvas = function (t, e) {
				t.drawImage(e, 0, 0)
			}, _.prototype.decodeBitmap = function (t) {
				return this.reader.decode(t, this._hints)
			}, _.prototype.createCaptureCanvas = function (t) {
				if ("undefined" == typeof document) return this._destroyCaptureCanvas(), null;
				var e, r, n = document.createElement("canvas");
				return void 0 !== t && (t instanceof HTMLVideoElement ? (e = t.videoWidth, r = t.videoHeight) : t instanceof HTMLImageElement && (e =
						t.naturalWidth || t.width, r = t.naturalHeight || t.height)), n.style.width = e + "px", n.style.height = r + "px", n.width = e, n
					.height = r, n
			}, _.prototype.stopStreams = function () {
				this.stream && (this.stream.getVideoTracks().forEach(function (t) {
					return t.stop()
				}), this.stream = void 0), !1 === this._stopAsyncDecode && this.stopAsyncDecode(), !1 === this._stopContinuousDecode && this.stopContinuousDecode()
			}, _.prototype.reset = function () {
				this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas()
			}, _.prototype._destroyVideoElement = function () {
				this.videoElement && (void 0 !== this.videoEndedListener && this.videoElement.removeEventListener("ended", this.videoEndedListener),
					void 0 !== this.videoPlayingEventListener && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener),
					void 0 !== this.videoCanPlayListener && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(
						this.videoElement), this.videoElement = void 0)
			}, _.prototype._destroyImageElement = function () {
				this.imageElement && (void 0 !== this.imageLoadedListener && this.imageElement.removeEventListener("load", this.imageLoadedListener),
					this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0)
			}, _.prototype._destroyCaptureCanvas = function () {
				this.captureCanvasContext = void 0, this.captureCanvas = void 0
			}, _.prototype.addVideoSource = function (t, e) {
				try {
					t.srcObject = e
				} catch (r) {
					t.src = URL.createObjectURL(e)
				}
			}, _.prototype.cleanVideoSource = function (t) {
				try {
					t.srcObject = null
				} catch (e) {
					t.src = ""
				}
				this.videoElement.removeAttribute("src")
			}, _);

		function _(t, e, r) {
			void 0 === e && (e = 500), this.reader = t, this.timeBetweenScansMillis = e, this._hints = r, this._stopContinuousDecode = !1, this._stopAsyncDecode = !
				1, this._timeBetweenDecodingAttempts = 0
		}
		e.BrowserCodeReader = p
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(6),
			o = r(13),
			i = r(19),
			a = r(1),
			u = (s.prototype.getSize = function () {
				return this.size
			}, s.prototype.getSizeInBytes = function () {
				return Math.floor((this.size + 7) / 8)
			}, s.prototype.ensureCapacity = function (t) {
				if (t > 32 * this.bits.length) {
					var e = s.makeArray(t);
					n.default.arraycopy(this.bits, 0, e, 0, this.bits.length), this.bits = e
				}
			}, s.prototype.get = function (t) {
				return 0 != (this.bits[Math.floor(t / 32)] & 1 << (31 & t))
			}, s.prototype.set = function (t) {
				this.bits[Math.floor(t / 32)] |= 1 << (31 & t)
			}, s.prototype.flip = function (t) {
				this.bits[Math.floor(t / 32)] ^= 1 << (31 & t)
			}, s.prototype.getNextSet = function (t) {
				var e = this.size;
				if (e <= t) return e;
				var r = this.bits,
					n = Math.floor(t / 32),
					i = r[n];
				i &= ~((1 << (31 & t)) - 1);
				for (var a = r.length; 0 === i;) {
					if (++n === a) return e;
					i = r[n]
				}
				var u = 32 * n + o.default.numberOfTrailingZeros(i);
				return e < u ? e : u
			}, s.prototype.getNextUnset = function (t) {
				var e = this.size;
				if (e <= t) return e;
				var r = this.bits,
					n = Math.floor(t / 32),
					i = ~r[n];
				i &= ~((1 << (31 & t)) - 1);
				for (var a = r.length; 0 === i;) {
					if (++n === a) return e;
					i = ~r[n]
				}
				var u = 32 * n + o.default.numberOfTrailingZeros(i);
				return e < u ? e : u
			}, s.prototype.setBulk = function (t, e) {
				this.bits[Math.floor(t / 32)] = e
			}, s.prototype.setRange = function (t, e) {
				if (e < t || t < 0 || e > this.size) throw new a.default;
				if (e !== t) {
					e--;
					for (var r = Math.floor(t / 32), n = Math.floor(e / 32), o = this.bits, i = r; i <= n; i++) {
						var u = (2 << (i < n ? 31 : 31 & e)) - (1 << (r < i ? 0 : 31 & t));
						o[i] |= u
					}
				}
			}, s.prototype.clear = function () {
				for (var t = this.bits.length, e = this.bits, r = 0; r < t; r++) e[r] = 0
			}, s.prototype.isRange = function (t, e, r) {
				if (e < t || t < 0 || e > this.size) throw new a.default;
				if (e === t) return !0;
				e--;
				for (var n = Math.floor(t / 32), o = Math.floor(e / 32), i = this.bits, u = n; u <= o; u++) {
					var s = (2 << (u < o ? 31 : 31 & e)) - (1 << (n < u ? 0 : 31 & t)) & 4294967295;
					if ((i[u] & s) != (r ? s : 0)) return !1
				}
				return !0
			}, s.prototype.appendBit = function (t) {
				this.ensureCapacity(this.size + 1), t && (this.bits[Math.floor(this.size / 32)] |= 1 << (31 & this.size)), this.size++
			}, s.prototype.appendBits = function (t, e) {
				if (e < 0 || 32 < e) throw new a.default("Num bits must be between 0 and 32");
				this.ensureCapacity(this.size + e), this.appendBit;
				for (var r = e; 0 < r; r--) this.appendBit(1 == (t >> r - 1 & 1))
			}, s.prototype.appendBitArray = function (t) {
				var e = t.size;
				this.ensureCapacity(this.size + e), this.appendBit;
				for (var r = 0; r < e; r++) this.appendBit(t.get(r))
			}, s.prototype.xor = function (t) {
				if (this.size !== t.size) throw new a.default("Sizes don't match");
				for (var e = this.bits, r = 0, n = e.length; r < n; r++) e[r] ^= t.bits[r]
			}, s.prototype.toBytes = function (t, e, r, n) {
				for (var o = 0; o < n; o++) {
					for (var i = 0, a = 0; a < 8; a++) this.get(t) && (i |= 1 << 7 - a), t++;
					e[r + o] = i
				}
			}, s.prototype.getBitArray = function () {
				return this.bits
			}, s.prototype.reverse = function () {
				for (var t = new Int32Array(this.bits.length), e = Math.floor((this.size - 1) / 32), r = e + 1, n = this.bits, o = 0; o < r; o++) {
					var i = n[o];
					i = (i = (i = (i = (i = i >> 1 & 1431655765 | (1431655765 & i) << 1) >> 2 & 858993459 | (858993459 & i) << 2) >> 4 & 252645135 | (
						252645135 & i) << 4) >> 8 & 16711935 | (16711935 & i) << 8) >> 16 & 65535 | (65535 & i) << 16, t[e - o] = i
				}
				if (this.size !== 32 * r) {
					var a = 32 * r - this.size,
						u = t[0] >>> a;
					for (o = 1; o < r; o++) {
						var s = t[o];
						u |= s << 32 - a, t[o - 1] = u, u = s >>> a
					}
					t[r - 1] = u
				}
				this.bits = t
			}, s.makeArray = function (t) {
				return new Int32Array(Math.floor((t + 31) / 32))
			}, s.prototype.equals = function (t) {
				if (!(t instanceof s)) return !1;
				var e = t;
				return this.size === e.size && i.default.equals(this.bits, e.bits)
			}, s.prototype.hashCode = function () {
				return 31 * this.size + i.default.hashCode(this.bits)
			}, s.prototype.toString = function () {
				for (var t = "", e = 0, r = this.size; e < r; e++) 0 == (7 & e) && (t += " "), t += this.get(e) ? "X" : ".";
				return t
			}, s.prototype.clone = function () {
				return new s(this.size, this.bits.slice())
			}, s);

		function s(t, e) {
			void 0 === t ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = t, this.bits = null == e ? s.makeArray(t) : e)
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(6),
			i = r(1),
			a = r(96),
			u = (s.fill = function (t, e) {
				for (var r = 0, n = t.length; r < n; r++) t[r] = e
			}, s.fillWithin = function (t, e, r, n) {
				s.rangeCheck(t.length, e, r);
				for (var o = e; o < r; o++) t[o] = n
			}, s.rangeCheck = function (t, e, r) {
				if (r < e) throw new i.default("fromIndex(" + e + ") > toIndex(" + r + ")");
				if (e < 0) throw new a.default(e);
				if (t < r) throw new a.default(r)
			}, s.asList = function () {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				return t
			}, s.create = function (t, e, r) {
				return Array.from({
					length: t
				}).map(function (t) {
					return Array.from({
						length: e
					}).fill(r)
				})
			}, s.createInt32Array = function (t, e, r) {
				return Array.from({
					length: t
				}).map(function (t) {
					return Int32Array.from({
						length: e
					}).fill(r)
				})
			}, s.equals = function (t, e) {
				if (!t) return !1;
				if (!e) return !1;
				if (!t.length) return !1;
				if (!e.length) return !1;
				if (t.length !== e.length) return !1;
				for (var r = 0, n = t.length; r < n; r++)
					if (t[r] !== e[r]) return !1;
				return !0
			}, s.hashCode = function (t) {
				var e, r;
				if (null === t) return 0;
				var o = 1;
				try {
					for (var i = n(t), a = i.next(); !a.done; a = i.next()) o = 31 * o + a.value
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						a && !a.done && (r = i.return) && r.call(i)
					} finally {
						if (e) throw e.error
					}
				}
				return o
			}, s.fillUint8Array = function (t, e) {
				for (var r = 0; r !== t.length; r++) t[r] = e
			}, s.copyOf = function (t, e) {
				return t.slice(0, e)
			}, s.copyOfUint8Array = function (t, e) {
				if (t.length <= e) {
					var r = new Uint8Array(e);
					return r.set(t), r
				}
				return t.slice(0, e)
			}, s.copyOfRange = function (t, e, r) {
				var n = r - e,
					i = new Int32Array(n);
				return o.default.arraycopy(t, e, i, 0, n), i
			}, s.binarySearch = function (t, e, r) {
				void 0 === r && (r = s.numberComparator);
				for (var n = 0, o = t.length - 1; n <= o;) {
					var i = o + n >> 1,
						a = r(e, t[i]);
					if (0 < a) n = 1 + i;
					else {
						if (!(a < 0)) return i;
						o = i - 1
					}
				}
				return -n - 1
			}, s.numberComparator = function (t, e) {
				return t - e
			}, s);

		function s() {}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(29),
			u = r(61),
			s = r(13),
			f = r(1),
			l = r(40),
			d = (o(c, i = u.default), c.prototype.getZero = function () {
					return this.zero
				}, c.prototype.getOne = function () {
					return this.one
				}, c.prototype.buildMonomial = function (t, e) {
					if (t < 0) throw new f.default;
					if (0 === e) return this.zero;
					var r = new Int32Array(t + 1);
					return r[0] = e, new a.default(this, r)
				}, c.prototype.inverse = function (t) {
					if (0 === t) throw new l.default;
					return this.expTable[this.size - this.logTable[t] - 1]
				}, c.prototype.multiply = function (t, e) {
					return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.size - 1)]
				}, c.prototype.getSize = function () {
					return this.size
				}, c.prototype.getGeneratorBase = function () {
					return this.generatorBase
				}, c.prototype.toString = function () {
					return "GF(0x" + s.default.toHexString(this.primitive) + "," + this.size + ")"
				}, c.prototype.equals = function (t) {
					return t === this
				}, c.AZTEC_DATA_12 = new c(4201, 4096, 1), c.AZTEC_DATA_10 = new c(1033, 1024, 1), c.AZTEC_DATA_6 = new c(67, 64, 1), c.AZTEC_PARAM =
				new c(19, 16, 1), c.QR_CODE_FIELD_256 = new c(285, 256, 0), c.DATA_MATRIX_FIELD_256 = new c(301, 256, 1), c.AZTEC_DATA_8 = c.DATA_MATRIX_FIELD_256,
				c.MAXICODE_FIELD_64 = c.AZTEC_DATA_6, c);

		function c(t, e, r) {
			var n = i.call(this) || this;
			n.primitive = t, n.size = e, n.generatorBase = r;
			for (var o = new Int32Array(e), u = 1, s = 0; s < e; s++) o[s] = u, e <= (u *= 2) && (u ^= t, u &= e - 1);
			n.expTable = o;
			var f = new Int32Array(e);
			for (s = 0; s < e - 1; s++) f[o[s]] = s;
			return n.logTable = f, n.zero = new a.default(n, Int32Array.from([0])), n.one = new a.default(n, Int32Array.from([1])), n
		}
		e.default = d
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(19),
			i = r(10),
			a = (u.prototype.PDF417Common = function () {}, u.getBitCountSum = function (t) {
					return i.default.sum(t)
				}, u.toIntArray = function (t) {
					var e, r;
					if (null == t || !t.length) return u.EMPTY_INT_ARRAY;
					var o = new Int32Array(t.length),
						i = 0;
					try {
						for (var a = n(t), s = a.next(); !s.done; s = a.next()) {
							var f = s.value;
							o[i++] = f
						}
					} catch (t) {
						e = {
							error: t
						}
					} finally {
						try {
							s && !s.done && (r = a.return) && r.call(a)
						} finally {
							if (e) throw e.error
						}
					}
					return o
				}, u.getCodeword = function (t) {
					var e = o.default.binarySearch(u.SYMBOL_TABLE, 262143 & t);
					return e < 0 ? -1 : (u.CODEWORD_TABLE[e] - 1) % u.NUMBER_OF_CODEWORDS
				}, u.MAX_CODEWORDS_IN_BARCODE = (u.NUMBER_OF_CODEWORDS = 929) - 1, u.MIN_ROWS_IN_BARCODE = 3, u.MAX_ROWS_IN_BARCODE = 90, u.MODULES_IN_CODEWORD =
				17, u.MODULES_IN_STOP_PATTERN = 18, u.BARS_IN_MODULE = 8, u.EMPTY_INT_ARRAY = new Int32Array([]), u.SYMBOL_TABLE = Int32Array.from([
					66142, 66170, 66206, 66236, 66290, 66292, 66350, 66382, 66396, 66454, 66470, 66476, 66594, 66600, 66614, 66626, 66628, 66632,
					66640, 66654, 66662, 66668, 66682, 66690, 66718, 66720, 66748, 66758, 66776, 66798, 66802, 66804, 66820, 66824, 66832, 66846,
					66848, 66876, 66880, 66936, 66950, 66956, 66968, 66992, 67006, 67022, 67036, 67042, 67044, 67048, 67062, 67118, 67150, 67164,
					67214, 67228, 67256, 67294, 67322, 67350, 67366, 67372, 67398, 67404, 67416, 67438, 67474, 67476, 67490, 67492, 67496, 67510,
					67618, 67624, 67650, 67656, 67664, 67678, 67686, 67692, 67706, 67714, 67716, 67728, 67742, 67744, 67772, 67782, 67788, 67800,
					67822, 67826, 67828, 67842, 67848, 67870, 67872, 67900, 67904, 67960, 67974, 67992, 68016, 68030, 68046, 68060, 68066, 68068,
					68072, 68086, 68104, 68112, 68126, 68128, 68156, 68160, 68216, 68336, 68358, 68364, 68376, 68400, 68414, 68448, 68476, 68494,
					68508, 68536, 68546, 68548, 68552, 68560, 68574, 68582, 68588, 68654, 68686, 68700, 68706, 68708, 68712, 68726, 68750, 68764,
					68792, 68802, 68804, 68808, 68816, 68830, 68838, 68844, 68858, 68878, 68892, 68920, 68976, 68990, 68994, 68996, 69e3, 69008, 69022,
					69024, 69052, 69062, 69068, 69080, 69102, 69106, 69108, 69142, 69158, 69164, 69190, 69208, 69230, 69254, 69260, 69272, 69296,
					69310, 69326, 69340, 69386, 69394, 69396, 69410, 69416, 69430, 69442, 69444, 69448, 69456, 69470, 69478, 69484, 69554, 69556,
					69666, 69672, 69698, 69704, 69712, 69726, 69754, 69762, 69764, 69776, 69790, 69792, 69820, 69830, 69836, 69848, 69870, 69874,
					69876, 69890, 69918, 69920, 69948, 69952, 70008, 70022, 70040, 70064, 70078, 70094, 70108, 70114, 70116, 70120, 70134, 70152,
					70174, 70176, 70264, 70384, 70412, 70448, 70462, 70496, 70524, 70542, 70556, 70584, 70594, 70600, 70608, 70622, 70630, 70636,
					70664, 70672, 70686, 70688, 70716, 70720, 70776, 70896, 71136, 71180, 71192, 71216, 71230, 71264, 71292, 71360, 71416, 71452,
					71480, 71536, 71550, 71554, 71556, 71560, 71568, 71582, 71584, 71612, 71622, 71628, 71640, 71662, 71726, 71732, 71758, 71772,
					71778, 71780, 71784, 71798, 71822, 71836, 71864, 71874, 71880, 71888, 71902, 71910, 71916, 71930, 71950, 71964, 71992, 72048,
					72062, 72066, 72068, 72080, 72094, 72096, 72124, 72134, 72140, 72152, 72174, 72178, 72180, 72206, 72220, 72248, 72304, 72318,
					72416, 72444, 72456, 72464, 72478, 72480, 72508, 72512, 72568, 72588, 72600, 72624, 72638, 72654, 72668, 72674, 72676, 72680,
					72694, 72726, 72742, 72748, 72774, 72780, 72792, 72814, 72838, 72856, 72880, 72894, 72910, 72924, 72930, 72932, 72936, 72950,
					72966, 72972, 72984, 73008, 73022, 73056, 73084, 73102, 73116, 73144, 73156, 73160, 73168, 73182, 73190, 73196, 73210, 73226,
					73234, 73236, 73250, 73252, 73256, 73270, 73282, 73284, 73296, 73310, 73318, 73324, 73346, 73348, 73352, 73360, 73374, 73376,
					73404, 73414, 73420, 73432, 73454, 73498, 73518, 73522, 73524, 73550, 73564, 73570, 73572, 73576, 73590, 73800, 73822, 73858,
					73860, 73872, 73886, 73888, 73916, 73944, 73970, 73972, 73992, 74014, 74016, 74044, 74048, 74104, 74118, 74136, 74160, 74174,
					74210, 74212, 74216, 74230, 74244, 74256, 74270, 74272, 74360, 74480, 74502, 74508, 74544, 74558, 74592, 74620, 74638, 74652,
					74680, 74690, 74696, 74704, 74726, 74732, 74782, 74784, 74812, 74992, 75232, 75288, 75326, 75360, 75388, 75456, 75512, 75576,
					75632, 75646, 75650, 75652, 75664, 75678, 75680, 75708, 75718, 75724, 75736, 75758, 75808, 75836, 75840, 75896, 76016, 76256,
					76736, 76824, 76848, 76862, 76896, 76924, 76992, 77048, 77296, 77340, 77368, 77424, 77438, 77536, 77564, 77572, 77576, 77584,
					77600, 77628, 77632, 77688, 77702, 77708, 77720, 77744, 77758, 77774, 77788, 77870, 77902, 77916, 77922, 77928, 77966, 77980,
					78008, 78018, 78024, 78032, 78046, 78060, 78074, 78094, 78136, 78192, 78206, 78210, 78212, 78224, 78238, 78240, 78268, 78278,
					78284, 78296, 78322, 78324, 78350, 78364, 78448, 78462, 78560, 78588, 78600, 78622, 78624, 78652, 78656, 78712, 78726, 78744,
					78768, 78782, 78798, 78812, 78818, 78820, 78824, 78838, 78862, 78876, 78904, 78960, 78974, 79072, 79100, 79296, 79352, 79368,
					79376, 79390, 79392, 79420, 79424, 79480, 79600, 79628, 79640, 79664, 79678, 79712, 79740, 79772, 79800, 79810, 79812, 79816,
					79824, 79838, 79846, 79852, 79894, 79910, 79916, 79942, 79948, 79960, 79982, 79988, 80006, 80024, 80048, 80062, 80078, 80092,
					80098, 80100, 80104, 80134, 80140, 80176, 80190, 80224, 80252, 80270, 80284, 80312, 80328, 80336, 80350, 80358, 80364, 80378,
					80390, 80396, 80408, 80432, 80446, 80480, 80508, 80576, 80632, 80654, 80668, 80696, 80752, 80766, 80776, 80784, 80798, 80800,
					80828, 80844, 80856, 80878, 80882, 80884, 80914, 80916, 80930, 80932, 80936, 80950, 80962, 80968, 80976, 80990, 80998, 81004,
					81026, 81028, 81040, 81054, 81056, 81084, 81094, 81100, 81112, 81134, 81154, 81156, 81160, 81168, 81182, 81184, 81212, 81216,
					81272, 81286, 81292, 81304, 81328, 81342, 81358, 81372, 81380, 81384, 81398, 81434, 81454, 81458, 81460, 81486, 81500, 81506,
					81508, 81512, 81526, 81550, 81564, 81592, 81602, 81604, 81608, 81616, 81630, 81638, 81644, 81702, 81708, 81722, 81734, 81740,
					81752, 81774, 81778, 81780, 82050, 82078, 82080, 82108, 82180, 82184, 82192, 82206, 82208, 82236, 82240, 82296, 82316, 82328,
					82352, 82366, 82402, 82404, 82408, 82440, 82448, 82462, 82464, 82492, 82496, 82552, 82672, 82694, 82700, 82712, 82736, 82750,
					82784, 82812, 82830, 82882, 82884, 82888, 82896, 82918, 82924, 82952, 82960, 82974, 82976, 83004, 83008, 83064, 83184, 83424,
					83468, 83480, 83504, 83518, 83552, 83580, 83648, 83704, 83740, 83768, 83824, 83838, 83842, 83844, 83848, 83856, 83872, 83900,
					83910, 83916, 83928, 83950, 83984, 84e3, 84028, 84032, 84088, 84208, 84448, 84928, 85040, 85054, 85088, 85116, 85184, 85240, 85488,
					85560, 85616, 85630, 85728, 85756, 85764, 85768, 85776, 85790, 85792, 85820, 85824, 85880, 85894, 85900, 85912, 85936, 85966,
					85980, 86048, 86080, 86136, 86256, 86496, 86976, 88160, 88188, 88256, 88312, 88560, 89056, 89200, 89214, 89312, 89340, 89536,
					89592, 89608, 89616, 89632, 89664, 89720, 89840, 89868, 89880, 89904, 89952, 89980, 89998, 90012, 90040, 90190, 90204, 90254,
					90268, 90296, 90306, 90308, 90312, 90334, 90382, 90396, 90424, 90480, 90494, 90500, 90504, 90512, 90526, 90528, 90556, 90566,
					90572, 90584, 90610, 90612, 90638, 90652, 90680, 90736, 90750, 90848, 90876, 90884, 90888, 90896, 90910, 90912, 90940, 90944, 91e3,
					91014, 91020, 91032, 91056, 91070, 91086, 91100, 91106, 91108, 91112, 91126, 91150, 91164, 91192, 91248, 91262, 91360, 91388,
					91584, 91640, 91664, 91678, 91680, 91708, 91712, 91768, 91888, 91928, 91952, 91966, 92e3, 92028, 92046, 92060, 92088, 92098, 92100,
					92104, 92112, 92126, 92134, 92140, 92188, 92216, 92272, 92384, 92412, 92608, 92664, 93168, 93200, 93214, 93216, 93244, 93248,
					93304, 93424, 93664, 93720, 93744, 93758, 93792, 93820, 93888, 93944, 93980, 94008, 94064, 94078, 94084, 94088, 94096, 94110,
					94112, 94140, 94150, 94156, 94168, 94246, 94252, 94278, 94284, 94296, 94318, 94342, 94348, 94360, 94384, 94398, 94414, 94428,
					94440, 94470, 94476, 94488, 94512, 94526, 94560, 94588, 94606, 94620, 94648, 94658, 94660, 94664, 94672, 94686, 94694, 94700,
					94714, 94726, 94732, 94744, 94768, 94782, 94816, 94844, 94912, 94968, 94990, 95004, 95032, 95088, 95102, 95112, 95120, 95134,
					95136, 95164, 95180, 95192, 95214, 95218, 95220, 95244, 95256, 95280, 95294, 95328, 95356, 95424, 95480, 95728, 95758, 95772,
					95800, 95856, 95870, 95968, 95996, 96008, 96016, 96030, 96032, 96060, 96064, 96120, 96152, 96176, 96190, 96220, 96226, 96228,
					96232, 96290, 96292, 96296, 96310, 96322, 96324, 96328, 96336, 96350, 96358, 96364, 96386, 96388, 96392, 96400, 96414, 96416,
					96444, 96454, 96460, 96472, 96494, 96498, 96500, 96514, 96516, 96520, 96528, 96542, 96544, 96572, 96576, 96632, 96646, 96652,
					96664, 96688, 96702, 96718, 96732, 96738, 96740, 96744, 96758, 96772, 96776, 96784, 96798, 96800, 96828, 96832, 96888, 97008,
					97030, 97036, 97048, 97072, 97086, 97120, 97148, 97166, 97180, 97208, 97220, 97224, 97232, 97246, 97254, 97260, 97326, 97330,
					97332, 97358, 97372, 97378, 97380, 97384, 97398, 97422, 97436, 97464, 97474, 97476, 97480, 97488, 97502, 97510, 97516, 97550,
					97564, 97592, 97648, 97666, 97668, 97672, 97680, 97694, 97696, 97724, 97734, 97740, 97752, 97774, 97830, 97836, 97850, 97862,
					97868, 97880, 97902, 97906, 97908, 97926, 97932, 97944, 97968, 97998, 98012, 98018, 98020, 98024, 98038, 98618, 98674, 98676,
					98838, 98854, 98874, 98892, 98904, 98926, 98930, 98932, 98968, 99006, 99042, 99044, 99048, 99062, 99166, 99194, 99246, 99286,
					99350, 99366, 99372, 99386, 99398, 99416, 99438, 99442, 99444, 99462, 99504, 99518, 99534, 99548, 99554, 99556, 99560, 99574,
					99590, 99596, 99608, 99632, 99646, 99680, 99708, 99726, 99740, 99768, 99778, 99780, 99784, 99792, 99806, 99814, 99820, 99834,
					99858, 99860, 99874, 99880, 99894, 99906, 99920, 99934, 99962, 99970, 99972, 99976, 99984, 99998, 1e5, 100028, 100038, 100044,
					100056, 100078, 100082, 100084, 100142, 100174, 100188, 100246, 100262, 100268, 100306, 100308, 100390, 100396, 100410, 100422,
					100428, 100440, 100462, 100466, 100468, 100486, 100504, 100528, 100542, 100558, 100572, 100578, 100580, 100584, 100598, 100620,
					100656, 100670, 100704, 100732, 100750, 100792, 100802, 100808, 100816, 100830, 100838, 100844, 100858, 100888, 100912, 100926,
					100960, 100988, 101056, 101112, 101148, 101176, 101232, 101246, 101250, 101252, 101256, 101264, 101278, 101280, 101308, 101318,
					101324, 101336, 101358, 101362, 101364, 101410, 101412, 101416, 101430, 101442, 101448, 101456, 101470, 101478, 101498, 101506,
					101508, 101520, 101534, 101536, 101564, 101580, 101618, 101620, 101636, 101640, 101648, 101662, 101664, 101692, 101696, 101752,
					101766, 101784, 101838, 101858, 101860, 101864, 101934, 101938, 101940, 101966, 101980, 101986, 101988, 101992, 102030, 102044,
					102072, 102082, 102084, 102088, 102096, 102138, 102166, 102182, 102188, 102214, 102220, 102232, 102254, 102282, 102290, 102292,
					102306, 102308, 102312, 102326, 102444, 102458, 102470, 102476, 102488, 102514, 102516, 102534, 102552, 102576, 102590, 102606,
					102620, 102626, 102632, 102646, 102662, 102668, 102704, 102718, 102752, 102780, 102798, 102812, 102840, 102850, 102856, 102864,
					102878, 102886, 102892, 102906, 102936, 102974, 103008, 103036, 103104, 103160, 103224, 103280, 103294, 103298, 103300, 103312,
					103326, 103328, 103356, 103366, 103372, 103384, 103406, 103410, 103412, 103472, 103486, 103520, 103548, 103616, 103672, 103920,
					103992, 104048, 104062, 104160, 104188, 104194, 104196, 104200, 104208, 104224, 104252, 104256, 104312, 104326, 104332, 104344,
					104368, 104382, 104398, 104412, 104418, 104420, 104424, 104482, 104484, 104514, 104520, 104528, 104542, 104550, 104570, 104578,
					104580, 104592, 104606, 104608, 104636, 104652, 104690, 104692, 104706, 104712, 104734, 104736, 104764, 104768, 104824, 104838,
					104856, 104910, 104930, 104932, 104936, 104968, 104976, 104990, 104992, 105020, 105024, 105080, 105200, 105240, 105278, 105312,
					105372, 105410, 105412, 105416, 105424, 105446, 105518, 105524, 105550, 105564, 105570, 105572, 105576, 105614, 105628, 105656,
					105666, 105672, 105680, 105702, 105722, 105742, 105756, 105784, 105840, 105854, 105858, 105860, 105864, 105872, 105888, 105932,
					105970, 105972, 106006, 106022, 106028, 106054, 106060, 106072, 106100, 106118, 106124, 106136, 106160, 106174, 106190, 106210,
					106212, 106216, 106250, 106258, 106260, 106274, 106276, 106280, 106306, 106308, 106312, 106320, 106334, 106348, 106394, 106414,
					106418, 106420, 106566, 106572, 106610, 106612, 106630, 106636, 106648, 106672, 106686, 106722, 106724, 106728, 106742, 106758,
					106764, 106776, 106800, 106814, 106848, 106876, 106894, 106908, 106936, 106946, 106948, 106952, 106960, 106974, 106982, 106988,
					107032, 107056, 107070, 107104, 107132, 107200, 107256, 107292, 107320, 107376, 107390, 107394, 107396, 107400, 107408, 107422,
					107424, 107452, 107462, 107468, 107480, 107502, 107506, 107508, 107544, 107568, 107582, 107616, 107644, 107712, 107768, 108016,
					108060, 108088, 108144, 108158, 108256, 108284, 108290, 108292, 108296, 108304, 108318, 108320, 108348, 108352, 108408, 108422,
					108428, 108440, 108464, 108478, 108494, 108508, 108514, 108516, 108520, 108592, 108640, 108668, 108736, 108792, 109040, 109536,
					109680, 109694, 109792, 109820, 110016, 110072, 110084, 110088, 110096, 110112, 110140, 110144, 110200, 110320, 110342, 110348,
					110360, 110384, 110398, 110432, 110460, 110478, 110492, 110520, 110532, 110536, 110544, 110558, 110658, 110686, 110714, 110722,
					110724, 110728, 110736, 110750, 110752, 110780, 110796, 110834, 110836, 110850, 110852, 110856, 110864, 110878, 110880, 110908,
					110912, 110968, 110982, 111e3, 111054, 111074, 111076, 111080, 111108, 111112, 111120, 111134, 111136, 111164, 111168, 111224,
					111344, 111372, 111422, 111456, 111516, 111554, 111556, 111560, 111568, 111590, 111632, 111646, 111648, 111676, 111680, 111736,
					111856, 112096, 112152, 112224, 112252, 112320, 112440, 112514, 112516, 112520, 112528, 112542, 112544, 112588, 112686, 112718,
					112732, 112782, 112796, 112824, 112834, 112836, 112840, 112848, 112870, 112890, 112910, 112924, 112952, 113008, 113022, 113026,
					113028, 113032, 113040, 113054, 113056, 113100, 113138, 113140, 113166, 113180, 113208, 113264, 113278, 113376, 113404, 113416,
					113424, 113440, 113468, 113472, 113560, 113614, 113634, 113636, 113640, 113686, 113702, 113708, 113734, 113740, 113752, 113778,
					113780, 113798, 113804, 113816, 113840, 113854, 113870, 113890, 113892, 113896, 113926, 113932, 113944, 113968, 113982, 114016,
					114044, 114076, 114114, 114116, 114120, 114128, 114150, 114170, 114194, 114196, 114210, 114212, 114216, 114242, 114244, 114248,
					114256, 114270, 114278, 114306, 114308, 114312, 114320, 114334, 114336, 114364, 114380, 114420, 114458, 114478, 114482, 114484,
					114510, 114524, 114530, 114532, 114536, 114842, 114866, 114868, 114970, 114994, 114996, 115042, 115044, 115048, 115062, 115130,
					115226, 115250, 115252, 115278, 115292, 115298, 115300, 115304, 115318, 115342, 115394, 115396, 115400, 115408, 115422, 115430,
					115436, 115450, 115478, 115494, 115514, 115526, 115532, 115570, 115572, 115738, 115758, 115762, 115764, 115790, 115804, 115810,
					115812, 115816, 115830, 115854, 115868, 115896, 115906, 115912, 115920, 115934, 115942, 115948, 115962, 115996, 116024, 116080,
					116094, 116098, 116100, 116104, 116112, 116126, 116128, 116156, 116166, 116172, 116184, 116206, 116210, 116212, 116246, 116262,
					116268, 116282, 116294, 116300, 116312, 116334, 116338, 116340, 116358, 116364, 116376, 116400, 116414, 116430, 116444, 116450,
					116452, 116456, 116498, 116500, 116514, 116520, 116534, 116546, 116548, 116552, 116560, 116574, 116582, 116588, 116602, 116654,
					116694, 116714, 116762, 116782, 116786, 116788, 116814, 116828, 116834, 116836, 116840, 116854, 116878, 116892, 116920, 116930,
					116936, 116944, 116958, 116966, 116972, 116986, 117006, 117048, 117104, 117118, 117122, 117124, 117136, 117150, 117152, 117180,
					117190, 117196, 117208, 117230, 117234, 117236, 117304, 117360, 117374, 117472, 117500, 117506, 117508, 117512, 117520, 117536,
					117564, 117568, 117624, 117638, 117644, 117656, 117680, 117694, 117710, 117724, 117730, 117732, 117736, 117750, 117782, 117798,
					117804, 117818, 117830, 117848, 117874, 117876, 117894, 117936, 117950, 117966, 117986, 117988, 117992, 118022, 118028, 118040,
					118064, 118078, 118112, 118140, 118172, 118210, 118212, 118216, 118224, 118238, 118246, 118266, 118306, 118312, 118338, 118352,
					118366, 118374, 118394, 118402, 118404, 118408, 118416, 118430, 118432, 118460, 118476, 118514, 118516, 118574, 118578, 118580,
					118606, 118620, 118626, 118628, 118632, 118678, 118694, 118700, 118730, 118738, 118740, 118830, 118834, 118836, 118862, 118876,
					118882, 118884, 118888, 118902, 118926, 118940, 118968, 118978, 118980, 118984, 118992, 119006, 119014, 119020, 119034, 119068,
					119096, 119152, 119166, 119170, 119172, 119176, 119184, 119198, 119200, 119228, 119238, 119244, 119256, 119278, 119282, 119284,
					119324, 119352, 119408, 119422, 119520, 119548, 119554, 119556, 119560, 119568, 119582, 119584, 119612, 119616, 119672, 119686,
					119692, 119704, 119728, 119742, 119758, 119772, 119778, 119780, 119784, 119798, 119920, 119934, 120032, 120060, 120256, 120312,
					120324, 120328, 120336, 120352, 120384, 120440, 120560, 120582, 120588, 120600, 120624, 120638, 120672, 120700, 120718, 120732,
					120760, 120770, 120772, 120776, 120784, 120798, 120806, 120812, 120870, 120876, 120890, 120902, 120908, 120920, 120946, 120948,
					120966, 120972, 120984, 121008, 121022, 121038, 121058, 121060, 121064, 121078, 121100, 121112, 121136, 121150, 121184, 121212,
					121244, 121282, 121284, 121288, 121296, 121318, 121338, 121356, 121368, 121392, 121406, 121440, 121468, 121536, 121592, 121656,
					121730, 121732, 121736, 121744, 121758, 121760, 121804, 121842, 121844, 121890, 121922, 121924, 121928, 121936, 121950, 121958,
					121978, 121986, 121988, 121992, 122e3, 122014, 122016, 122044, 122060, 122098, 122100, 122116, 122120, 122128, 122142, 122144,
					122172, 122176, 122232, 122246, 122264, 122318, 122338, 122340, 122344, 122414, 122418, 122420, 122446, 122460, 122466, 122468,
					122472, 122510, 122524, 122552, 122562, 122564, 122568, 122576, 122598, 122618, 122646, 122662, 122668, 122694, 122700, 122712,
					122738, 122740, 122762, 122770, 122772, 122786, 122788, 122792, 123018, 123026, 123028, 123042, 123044, 123048, 123062, 123098,
					123146, 123154, 123156, 123170, 123172, 123176, 123190, 123202, 123204, 123208, 123216, 123238, 123244, 123258, 123290, 123314,
					123316, 123402, 123410, 123412, 123426, 123428, 123432, 123446, 123458, 123464, 123472, 123486, 123494, 123500, 123514, 123522,
					123524, 123528, 123536, 123552, 123580, 123590, 123596, 123608, 123630, 123634, 123636, 123674, 123698, 123700, 123740, 123746,
					123748, 123752, 123834, 123914, 123922, 123924, 123938, 123944, 123958, 123970, 123976, 123984, 123998, 124006, 124012, 124026,
					124034, 124036, 124048, 124062, 124064, 124092, 124102, 124108, 124120, 124142, 124146, 124148, 124162, 124164, 124168, 124176,
					124190, 124192, 124220, 124224, 124280, 124294, 124300, 124312, 124336, 124350, 124366, 124380, 124386, 124388, 124392, 124406,
					124442, 124462, 124466, 124468, 124494, 124508, 124514, 124520, 124558, 124572, 124600, 124610, 124612, 124616, 124624, 124646,
					124666, 124694, 124710, 124716, 124730, 124742, 124748, 124760, 124786, 124788, 124818, 124820, 124834, 124836, 124840, 124854,
					124946, 124948, 124962, 124964, 124968, 124982, 124994, 124996, 125e3, 125008, 125022, 125030, 125036, 125050, 125058, 125060,
					125064, 125072, 125086, 125088, 125116, 125126, 125132, 125144, 125166, 125170, 125172, 125186, 125188, 125192, 125200, 125216,
					125244, 125248, 125304, 125318, 125324, 125336, 125360, 125374, 125390, 125404, 125410, 125412, 125416, 125430, 125444, 125448,
					125456, 125472, 125504, 125560, 125680, 125702, 125708, 125720, 125744, 125758, 125792, 125820, 125838, 125852, 125880, 125890,
					125892, 125896, 125904, 125918, 125926, 125932, 125978, 125998, 126002, 126004, 126030, 126044, 126050, 126052, 126056, 126094,
					126108, 126136, 126146, 126148, 126152, 126160, 126182, 126202, 126222, 126236, 126264, 126320, 126334, 126338, 126340, 126344,
					126352, 126366, 126368, 126412, 126450, 126452, 126486, 126502, 126508, 126522, 126534, 126540, 126552, 126574, 126578, 126580,
					126598, 126604, 126616, 126640, 126654, 126670, 126684, 126690, 126692, 126696, 126738, 126754, 126756, 126760, 126774, 126786,
					126788, 126792, 126800, 126814, 126822, 126828, 126842, 126894, 126898, 126900, 126934, 127126, 127142, 127148, 127162, 127178,
					127186, 127188, 127254, 127270, 127276, 127290, 127302, 127308, 127320, 127342, 127346, 127348, 127370, 127378, 127380, 127394,
					127396, 127400, 127450, 127510, 127526, 127532, 127546, 127558, 127576, 127598, 127602, 127604, 127622, 127628, 127640, 127664,
					127678, 127694, 127708, 127714, 127716, 127720, 127734, 127754, 127762, 127764, 127778, 127784, 127810, 127812, 127816, 127824,
					127838, 127846, 127866, 127898, 127918, 127922, 127924, 128022, 128038, 128044, 128058, 128070, 128076, 128088, 128110, 128114,
					128116, 128134, 128140, 128152, 128176, 128190, 128206, 128220, 128226, 128228, 128232, 128246, 128262, 128268, 128280, 128304,
					128318, 128352, 128380, 128398, 128412, 128440, 128450, 128452, 128456, 128464, 128478, 128486, 128492, 128506, 128522, 128530,
					128532, 128546, 128548, 128552, 128566, 128578, 128580, 128584, 128592, 128606, 128614, 128634, 128642, 128644, 128648, 128656,
					128670, 128672, 128700, 128716, 128754, 128756, 128794, 128814, 128818, 128820, 128846, 128860, 128866, 128868, 128872, 128886,
					128918, 128934, 128940, 128954, 128978, 128980, 129178, 129198, 129202, 129204, 129238, 129258, 129306, 129326, 129330, 129332,
					129358, 129372, 129378, 129380, 129384, 129398, 129430, 129446, 129452, 129466, 129482, 129490, 129492, 129562, 129582, 129586,
					129588, 129614, 129628, 129634, 129636, 129640, 129654, 129678, 129692, 129720, 129730, 129732, 129736, 129744, 129758, 129766,
					129772, 129814, 129830, 129836, 129850, 129862, 129868, 129880, 129902, 129906, 129908, 129930, 129938, 129940, 129954, 129956,
					129960, 129974, 130010
				]), u.CODEWORD_TABLE = Int32Array.from([2627, 1819, 2622, 2621, 1813, 1812, 2729, 2724, 2723, 2779, 2774, 2773, 902, 896, 908, 868,
					865, 861, 859, 2511, 873, 871, 1780, 835, 2493, 825, 2491, 842, 837, 844, 1764, 1762, 811, 810, 809, 2483, 807, 2482, 806, 2480,
					815, 814, 813, 812, 2484, 817, 816, 1745, 1744, 1742, 1746, 2655, 2637, 2635, 2626, 2625, 2623, 2628, 1820, 2752, 2739, 2737, 2728,
					2727, 2725, 2730, 2785, 2783, 2778, 2777, 2775, 2780, 787, 781, 747, 739, 736, 2413, 754, 752, 1719, 692, 689, 681, 2371, 678,
					2369, 700, 697, 694, 703, 1688, 1686, 642, 638, 2343, 631, 2341, 627, 2338, 651, 646, 643, 2345, 654, 652, 1652, 1650, 1647, 1654,
					601, 599, 2322, 596, 2321, 594, 2319, 2317, 611, 610, 608, 606, 2324, 603, 2323, 615, 614, 612, 1617, 1616, 1614, 1612, 616, 1619,
					1618, 2575, 2538, 2536, 905, 901, 898, 909, 2509, 2507, 2504, 870, 867, 864, 860, 2512, 875, 872, 1781, 2490, 2489, 2487, 2485,
					1748, 836, 834, 832, 830, 2494, 827, 2492, 843, 841, 839, 845, 1765, 1763, 2701, 2676, 2674, 2653, 2648, 2656, 2634, 2633, 2631,
					2629, 1821, 2638, 2636, 2770, 2763, 2761, 2750, 2745, 2753, 2736, 2735, 2733, 2731, 1848, 2740, 2738, 2786, 2784, 591, 588, 576,
					569, 566, 2296, 1590, 537, 534, 526, 2276, 522, 2274, 545, 542, 539, 548, 1572, 1570, 481, 2245, 466, 2242, 462, 2239, 492, 485,
					482, 2249, 496, 494, 1534, 1531, 1528, 1538, 413, 2196, 406, 2191, 2188, 425, 419, 2202, 415, 2199, 432, 430, 427, 1472, 1467,
					1464, 433, 1476, 1474, 368, 367, 2160, 365, 2159, 362, 2157, 2155, 2152, 378, 377, 375, 2166, 372, 2165, 369, 2162, 383, 381, 379,
					2168, 1419, 1418, 1416, 1414, 385, 1411, 384, 1423, 1422, 1420, 1424, 2461, 802, 2441, 2439, 790, 786, 783, 794, 2409, 2406, 2403,
					750, 742, 738, 2414, 756, 753, 1720, 2367, 2365, 2362, 2359, 1663, 693, 691, 684, 2373, 680, 2370, 702, 699, 696, 704, 1690, 1687,
					2337, 2336, 2334, 2332, 1624, 2329, 1622, 640, 637, 2344, 634, 2342, 630, 2340, 650, 648, 645, 2346, 655, 653, 1653, 1651, 1649,
					1655, 2612, 2597, 2595, 2571, 2568, 2565, 2576, 2534, 2529, 2526, 1787, 2540, 2537, 907, 904, 900, 910, 2503, 2502, 2500, 2498,
					1768, 2495, 1767, 2510, 2508, 2506, 869, 866, 863, 2513, 876, 874, 1782, 2720, 2713, 2711, 2697, 2694, 2691, 2702, 2672, 2670,
					2664, 1828, 2678, 2675, 2647, 2646, 2644, 2642, 1823, 2639, 1822, 2654, 2652, 2650, 2657, 2771, 1855, 2765, 2762, 1850, 1849, 2751,
					2749, 2747, 2754, 353, 2148, 344, 342, 336, 2142, 332, 2140, 345, 1375, 1373, 306, 2130, 299, 2128, 295, 2125, 319, 314, 311, 2132,
					1354, 1352, 1349, 1356, 262, 257, 2101, 253, 2096, 2093, 274, 273, 267, 2107, 263, 2104, 280, 278, 275, 1316, 1311, 1308, 1320,
					1318, 2052, 202, 2050, 2044, 2040, 219, 2063, 212, 2060, 208, 2055, 224, 221, 2066, 1260, 1258, 1252, 231, 1248, 229, 1266, 1264,
					1261, 1268, 155, 1998, 153, 1996, 1994, 1991, 1988, 165, 164, 2007, 162, 2006, 159, 2003, 2e3, 172, 171, 169, 2012, 166, 2010,
					1186, 1184, 1182, 1179, 175, 1176, 173, 1192, 1191, 1189, 1187, 176, 1194, 1193, 2313, 2307, 2305, 592, 589, 2294, 2292, 2289, 578,
					572, 568, 2297, 580, 1591, 2272, 2267, 2264, 1547, 538, 536, 529, 2278, 525, 2275, 547, 544, 541, 1574, 1571, 2237, 2235, 2229,
					1493, 2225, 1489, 478, 2247, 470, 2244, 465, 2241, 493, 488, 484, 2250, 498, 495, 1536, 1533, 1530, 1539, 2187, 2186, 2184, 2182,
					1432, 2179, 1430, 2176, 1427, 414, 412, 2197, 409, 2195, 405, 2193, 2190, 426, 424, 421, 2203, 418, 2201, 431, 429, 1473, 1471,
					1469, 1466, 434, 1477, 1475, 2478, 2472, 2470, 2459, 2457, 2454, 2462, 803, 2437, 2432, 2429, 1726, 2443, 2440, 792, 789, 785,
					2401, 2399, 2393, 1702, 2389, 1699, 2411, 2408, 2405, 745, 741, 2415, 758, 755, 1721, 2358, 2357, 2355, 2353, 1661, 2350, 1660,
					2347, 1657, 2368, 2366, 2364, 2361, 1666, 690, 687, 2374, 683, 2372, 701, 698, 705, 1691, 1689, 2619, 2617, 2610, 2608, 2605, 2613,
					2593, 2588, 2585, 1803, 2599, 2596, 2563, 2561, 2555, 1797, 2551, 1795, 2573, 2570, 2567, 2577, 2525, 2524, 2522, 2520, 1786, 2517,
					1785, 2514, 1783, 2535, 2533, 2531, 2528, 1788, 2541, 2539, 906, 903, 911, 2721, 1844, 2715, 2712, 1838, 1836, 2699, 2696, 2693,
					2703, 1827, 1826, 1824, 2673, 2671, 2669, 2666, 1829, 2679, 2677, 1858, 1857, 2772, 1854, 1853, 1851, 1856, 2766, 2764, 143, 1987,
					139, 1986, 135, 133, 131, 1984, 128, 1983, 125, 1981, 138, 137, 136, 1985, 1133, 1132, 1130, 112, 110, 1974, 107, 1973, 104, 1971,
					1969, 122, 121, 119, 117, 1977, 114, 1976, 124, 1115, 1114, 1112, 1110, 1117, 1116, 84, 83, 1953, 81, 1952, 78, 1950, 1948, 1945,
					94, 93, 91, 1959, 88, 1958, 85, 1955, 99, 97, 95, 1961, 1086, 1085, 1083, 1081, 1078, 100, 1090, 1089, 1087, 1091, 49, 47, 1917,
					44, 1915, 1913, 1910, 1907, 59, 1926, 56, 1925, 53, 1922, 1919, 66, 64, 1931, 61, 1929, 1042, 1040, 1038, 71, 1035, 70, 1032, 68,
					1048, 1047, 1045, 1043, 1050, 1049, 12, 10, 1869, 1867, 1864, 1861, 21, 1880, 19, 1877, 1874, 1871, 28, 1888, 25, 1886, 22, 1883,
					982, 980, 977, 974, 32, 30, 991, 989, 987, 984, 34, 995, 994, 992, 2151, 2150, 2147, 2146, 2144, 356, 355, 354, 2149, 2139, 2138,
					2136, 2134, 1359, 343, 341, 338, 2143, 335, 2141, 348, 347, 346, 1376, 1374, 2124, 2123, 2121, 2119, 1326, 2116, 1324, 310, 308,
					305, 2131, 302, 2129, 298, 2127, 320, 318, 316, 313, 2133, 322, 321, 1355, 1353, 1351, 1357, 2092, 2091, 2089, 2087, 1276, 2084,
					1274, 2081, 1271, 259, 2102, 256, 2100, 252, 2098, 2095, 272, 269, 2108, 266, 2106, 281, 279, 277, 1317, 1315, 1313, 1310, 282,
					1321, 1319, 2039, 2037, 2035, 2032, 1203, 2029, 1200, 1197, 207, 2053, 205, 2051, 201, 2049, 2046, 2043, 220, 218, 2064, 215, 2062,
					211, 2059, 228, 226, 223, 2069, 1259, 1257, 1254, 232, 1251, 230, 1267, 1265, 1263, 2316, 2315, 2312, 2311, 2309, 2314, 2304, 2303,
					2301, 2299, 1593, 2308, 2306, 590, 2288, 2287, 2285, 2283, 1578, 2280, 1577, 2295, 2293, 2291, 579, 577, 574, 571, 2298, 582, 581,
					1592, 2263, 2262, 2260, 2258, 1545, 2255, 1544, 2252, 1541, 2273, 2271, 2269, 2266, 1550, 535, 532, 2279, 528, 2277, 546, 543, 549,
					1575, 1573, 2224, 2222, 2220, 1486, 2217, 1485, 2214, 1482, 1479, 2238, 2236, 2234, 2231, 1496, 2228, 1492, 480, 477, 2248, 473,
					2246, 469, 2243, 490, 487, 2251, 497, 1537, 1535, 1532, 2477, 2476, 2474, 2479, 2469, 2468, 2466, 2464, 1730, 2473, 2471, 2453,
					2452, 2450, 2448, 1729, 2445, 1728, 2460, 2458, 2456, 2463, 805, 804, 2428, 2427, 2425, 2423, 1725, 2420, 1724, 2417, 1722, 2438,
					2436, 2434, 2431, 1727, 2444, 2442, 793, 791, 788, 795, 2388, 2386, 2384, 1697, 2381, 1696, 2378, 1694, 1692, 2402, 2400, 2398,
					2395, 1703, 2392, 1701, 2412, 2410, 2407, 751, 748, 744, 2416, 759, 757, 1807, 2620, 2618, 1806, 1805, 2611, 2609, 2607, 2614,
					1802, 1801, 1799, 2594, 2592, 2590, 2587, 1804, 2600, 2598, 1794, 1793, 1791, 1789, 2564, 2562, 2560, 2557, 1798, 2554, 1796, 2574,
					2572, 2569, 2578, 1847, 1846, 2722, 1843, 1842, 1840, 1845, 2716, 2714, 1835, 1834, 1832, 1830, 1839, 1837, 2700, 2698, 2695, 2704,
					1817, 1811, 1810, 897, 862, 1777, 829, 826, 838, 1760, 1758, 808, 2481, 1741, 1740, 1738, 1743, 2624, 1818, 2726, 2776, 782, 740,
					737, 1715, 686, 679, 695, 1682, 1680, 639, 628, 2339, 647, 644, 1645, 1643, 1640, 1648, 602, 600, 597, 595, 2320, 593, 2318, 609,
					607, 604, 1611, 1610, 1608, 1606, 613, 1615, 1613, 2328, 926, 924, 892, 886, 899, 857, 850, 2505, 1778, 824, 823, 821, 819, 2488,
					818, 2486, 833, 831, 828, 840, 1761, 1759, 2649, 2632, 2630, 2746, 2734, 2732, 2782, 2781, 570, 567, 1587, 531, 527, 523, 540,
					1566, 1564, 476, 467, 463, 2240, 486, 483, 1524, 1521, 1518, 1529, 411, 403, 2192, 399, 2189, 423, 416, 1462, 1457, 1454, 428,
					1468, 1465, 2210, 366, 363, 2158, 360, 2156, 357, 2153, 376, 373, 370, 2163, 1410, 1409, 1407, 1405, 382, 1402, 380, 1417, 1415,
					1412, 1421, 2175, 2174, 777, 774, 771, 784, 732, 725, 722, 2404, 743, 1716, 676, 674, 668, 2363, 665, 2360, 685, 1684, 1681, 626,
					624, 622, 2335, 620, 2333, 617, 2330, 641, 635, 649, 1646, 1644, 1642, 2566, 928, 925, 2530, 2527, 894, 891, 888, 2501, 2499, 2496,
					858, 856, 854, 851, 1779, 2692, 2668, 2665, 2645, 2643, 2640, 2651, 2768, 2759, 2757, 2744, 2743, 2741, 2748, 352, 1382, 340, 337,
					333, 1371, 1369, 307, 300, 296, 2126, 315, 312, 1347, 1342, 1350, 261, 258, 250, 2097, 246, 2094, 271, 268, 264, 1306, 1301, 1298,
					276, 1312, 1309, 2115, 203, 2048, 195, 2045, 191, 2041, 213, 209, 2056, 1246, 1244, 1238, 225, 1234, 222, 1256, 1253, 1249, 1262,
					2080, 2079, 154, 1997, 150, 1995, 147, 1992, 1989, 163, 160, 2004, 156, 2001, 1175, 1174, 1172, 1170, 1167, 170, 1164, 167, 1185,
					1183, 1180, 1177, 174, 1190, 1188, 2025, 2024, 2022, 587, 586, 564, 559, 556, 2290, 573, 1588, 520, 518, 512, 2268, 508, 2265, 530,
					1568, 1565, 461, 457, 2233, 450, 2230, 446, 2226, 479, 471, 489, 1526, 1523, 1520, 397, 395, 2185, 392, 2183, 389, 2180, 2177, 410,
					2194, 402, 422, 1463, 1461, 1459, 1456, 1470, 2455, 799, 2433, 2430, 779, 776, 773, 2397, 2394, 2390, 734, 728, 724, 746, 1717,
					2356, 2354, 2351, 2348, 1658, 677, 675, 673, 670, 667, 688, 1685, 1683, 2606, 2589, 2586, 2559, 2556, 2552, 927, 2523, 2521, 2518,
					2515, 1784, 2532, 895, 893, 890, 2718, 2709, 2707, 2689, 2687, 2684, 2663, 2662, 2660, 2658, 1825, 2667, 2769, 1852, 2760, 2758,
					142, 141, 1139, 1138, 134, 132, 129, 126, 1982, 1129, 1128, 1126, 1131, 113, 111, 108, 105, 1972, 101, 1970, 120, 118, 115, 1109,
					1108, 1106, 1104, 123, 1113, 1111, 82, 79, 1951, 75, 1949, 72, 1946, 92, 89, 86, 1956, 1077, 1076, 1074, 1072, 98, 1069, 96, 1084,
					1082, 1079, 1088, 1968, 1967, 48, 45, 1916, 42, 1914, 39, 1911, 1908, 60, 57, 54, 1923, 50, 1920, 1031, 1030, 1028, 1026, 67, 1023,
					65, 1020, 62, 1041, 1039, 1036, 1033, 69, 1046, 1044, 1944, 1943, 1941, 11, 9, 1868, 7, 1865, 1862, 1859, 20, 1878, 16, 1875, 13,
					1872, 970, 968, 966, 963, 29, 960, 26, 23, 983, 981, 978, 975, 33, 971, 31, 990, 988, 985, 1906, 1904, 1902, 993, 351, 2145, 1383,
					331, 330, 328, 326, 2137, 323, 2135, 339, 1372, 1370, 294, 293, 291, 289, 2122, 286, 2120, 283, 2117, 309, 303, 317, 1348, 1346,
					1344, 245, 244, 242, 2090, 239, 2088, 236, 2085, 2082, 260, 2099, 249, 270, 1307, 1305, 1303, 1300, 1314, 189, 2038, 186, 2036,
					183, 2033, 2030, 2026, 206, 198, 2047, 194, 216, 1247, 1245, 1243, 1240, 227, 1237, 1255, 2310, 2302, 2300, 2286, 2284, 2281, 565,
					563, 561, 558, 575, 1589, 2261, 2259, 2256, 2253, 1542, 521, 519, 517, 514, 2270, 511, 533, 1569, 1567, 2223, 2221, 2218, 2215,
					1483, 2211, 1480, 459, 456, 453, 2232, 449, 474, 491, 1527, 1525, 1522, 2475, 2467, 2465, 2451, 2449, 2446, 801, 800, 2426, 2424,
					2421, 2418, 1723, 2435, 780, 778, 775, 2387, 2385, 2382, 2379, 1695, 2375, 1693, 2396, 735, 733, 730, 727, 749, 1718, 2616, 2615,
					2604, 2603, 2601, 2584, 2583, 2581, 2579, 1800, 2591, 2550, 2549, 2547, 2545, 1792, 2542, 1790, 2558, 929, 2719, 1841, 2710, 2708,
					1833, 1831, 2690, 2688, 2686, 1815, 1809, 1808, 1774, 1756, 1754, 1737, 1736, 1734, 1739, 1816, 1711, 1676, 1674, 633, 629, 1638,
					1636, 1633, 1641, 598, 1605, 1604, 1602, 1600, 605, 1609, 1607, 2327, 887, 853, 1775, 822, 820, 1757, 1755, 1584, 524, 1560, 1558,
					468, 464, 1514, 1511, 1508, 1519, 408, 404, 400, 1452, 1447, 1444, 417, 1458, 1455, 2208, 364, 361, 358, 2154, 1401, 1400, 1398,
					1396, 374, 1393, 371, 1408, 1406, 1403, 1413, 2173, 2172, 772, 726, 723, 1712, 672, 669, 666, 682, 1678, 1675, 625, 623, 621, 618,
					2331, 636, 632, 1639, 1637, 1635, 920, 918, 884, 880, 889, 849, 848, 847, 846, 2497, 855, 852, 1776, 2641, 2742, 2787, 1380, 334,
					1367, 1365, 301, 297, 1340, 1338, 1335, 1343, 255, 251, 247, 1296, 1291, 1288, 265, 1302, 1299, 2113, 204, 196, 192, 2042, 1232,
					1230, 1224, 214, 1220, 210, 1242, 1239, 1235, 1250, 2077, 2075, 151, 148, 1993, 144, 1990, 1163, 1162, 1160, 1158, 1155, 161, 1152,
					157, 1173, 1171, 1168, 1165, 168, 1181, 1178, 2021, 2020, 2018, 2023, 585, 560, 557, 1585, 516, 509, 1562, 1559, 458, 447, 2227,
					472, 1516, 1513, 1510, 398, 396, 393, 390, 2181, 386, 2178, 407, 1453, 1451, 1449, 1446, 420, 1460, 2209, 769, 764, 720, 712, 2391,
					729, 1713, 664, 663, 661, 659, 2352, 656, 2349, 671, 1679, 1677, 2553, 922, 919, 2519, 2516, 885, 883, 881, 2685, 2661, 2659, 2767,
					2756, 2755, 140, 1137, 1136, 130, 127, 1125, 1124, 1122, 1127, 109, 106, 102, 1103, 1102, 1100, 1098, 116, 1107, 1105, 1980, 80,
					76, 73, 1947, 1068, 1067, 1065, 1063, 90, 1060, 87, 1075, 1073, 1070, 1080, 1966, 1965, 46, 43, 40, 1912, 36, 1909, 1019, 1018,
					1016, 1014, 58, 1011, 55, 1008, 51, 1029, 1027, 1024, 1021, 63, 1037, 1034, 1940, 1939, 1937, 1942, 8, 1866, 4, 1863, 1, 1860, 956,
					954, 952, 949, 946, 17, 14, 969, 967, 964, 961, 27, 957, 24, 979, 976, 972, 1901, 1900, 1898, 1896, 986, 1905, 1903, 350, 349,
					1381, 329, 327, 324, 1368, 1366, 292, 290, 287, 284, 2118, 304, 1341, 1339, 1337, 1345, 243, 240, 237, 2086, 233, 2083, 254, 1297,
					1295, 1293, 1290, 1304, 2114, 190, 187, 184, 2034, 180, 2031, 177, 2027, 199, 1233, 1231, 1229, 1226, 217, 1223, 1241, 2078, 2076,
					584, 555, 554, 552, 550, 2282, 562, 1586, 507, 506, 504, 502, 2257, 499, 2254, 515, 1563, 1561, 445, 443, 441, 2219, 438, 2216,
					435, 2212, 460, 454, 475, 1517, 1515, 1512, 2447, 798, 797, 2422, 2419, 770, 768, 766, 2383, 2380, 2376, 721, 719, 717, 714, 731,
					1714, 2602, 2582, 2580, 2548, 2546, 2543, 923, 921, 2717, 2706, 2705, 2683, 2682, 2680, 1771, 1752, 1750, 1733, 1732, 1731, 1735,
					1814, 1707, 1670, 1668, 1631, 1629, 1626, 1634, 1599, 1598, 1596, 1594, 1603, 1601, 2326, 1772, 1753, 1751, 1581, 1554, 1552, 1504,
					1501, 1498, 1509, 1442, 1437, 1434, 401, 1448, 1445, 2206, 1392, 1391, 1389, 1387, 1384, 359, 1399, 1397, 1394, 1404, 2171, 2170,
					1708, 1672, 1669, 619, 1632, 1630, 1628, 1773, 1378, 1363, 1361, 1333, 1328, 1336, 1286, 1281, 1278, 248, 1292, 1289, 2111, 1218,
					1216, 1210, 197, 1206, 193, 1228, 1225, 1221, 1236, 2073, 2071, 1151, 1150, 1148, 1146, 152, 1143, 149, 1140, 145, 1161, 1159,
					1156, 1153, 158, 1169, 1166, 2017, 2016, 2014, 2019, 1582, 510, 1556, 1553, 452, 448, 1506, 1500, 394, 391, 387, 1443, 1441, 1439,
					1436, 1450, 2207, 765, 716, 713, 1709, 662, 660, 657, 1673, 1671, 916, 914, 879, 878, 877, 882, 1135, 1134, 1121, 1120, 1118, 1123,
					1097, 1096, 1094, 1092, 103, 1101, 1099, 1979, 1059, 1058, 1056, 1054, 77, 1051, 74, 1066, 1064, 1061, 1071, 1964, 1963, 1007,
					1006, 1004, 1002, 999, 41, 996, 37, 1017, 1015, 1012, 1009, 52, 1025, 1022, 1936, 1935, 1933, 1938, 942, 940, 938, 935, 932, 5, 2,
					955, 953, 950, 947, 18, 943, 15, 965, 962, 958, 1895, 1894, 1892, 1890, 973, 1899, 1897, 1379, 325, 1364, 1362, 288, 285, 1334,
					1332, 1330, 241, 238, 234, 1287, 1285, 1283, 1280, 1294, 2112, 188, 185, 181, 178, 2028, 1219, 1217, 1215, 1212, 200, 1209, 1227,
					2074, 2072, 583, 553, 551, 1583, 505, 503, 500, 513, 1557, 1555, 444, 442, 439, 436, 2213, 455, 451, 1507, 1505, 1502, 796, 763,
					762, 760, 767, 711, 710, 708, 706, 2377, 718, 715, 1710, 2544, 917, 915, 2681, 1627, 1597, 1595, 2325, 1769, 1749, 1747, 1499,
					1438, 1435, 2204, 1390, 1388, 1385, 1395, 2169, 2167, 1704, 1665, 1662, 1625, 1623, 1620, 1770, 1329, 1282, 1279, 2109, 1214, 1207,
					1222, 2068, 2065, 1149, 1147, 1144, 1141, 146, 1157, 1154, 2013, 2011, 2008, 2015, 1579, 1549, 1546, 1495, 1487, 1433, 1431, 1428,
					1425, 388, 1440, 2205, 1705, 658, 1667, 1664, 1119, 1095, 1093, 1978, 1057, 1055, 1052, 1062, 1962, 1960, 1005, 1003, 1e3, 997, 38,
					1013, 1010, 1932, 1930, 1927, 1934, 941, 939, 936, 933, 6, 930, 3, 951, 948, 944, 1889, 1887, 1884, 1881, 959, 1893, 1891, 35,
					1377, 1360, 1358, 1327, 1325, 1322, 1331, 1277, 1275, 1272, 1269, 235, 1284, 2110, 1205, 1204, 1201, 1198, 182, 1195, 179, 1213,
					2070, 2067, 1580, 501, 1551, 1548, 440, 437, 1497, 1494, 1490, 1503, 761, 709, 707, 1706, 913, 912, 2198, 1386, 2164, 2161, 1621,
					1766, 2103, 1208, 2058, 2054, 1145, 1142, 2005, 2002, 1999, 2009, 1488, 1429, 1426, 2200, 1698, 1659, 1656, 1975, 1053, 1957, 1954,
					1001, 998, 1924, 1921, 1918, 1928, 937, 934, 931, 1879, 1876, 1873, 1870, 945, 1885, 1882, 1323, 1273, 1270, 2105, 1202, 1199,
					1196, 1211, 2061, 2057, 1576, 1543, 1540, 1484, 1481, 1478, 1491, 1700
				]), u);

		function u() {}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o, i, a = r(2);
		(i = o = e.CharacterSetValueIdentifiers || (e.CharacterSetValueIdentifiers = {}))[i.Cp437 = 0] = "Cp437", i[i.ISO8859_1 = 1] =
			"ISO8859_1", i[i.ISO8859_2 = 2] = "ISO8859_2", i[i.ISO8859_3 = 3] = "ISO8859_3", i[i.ISO8859_4 = 4] = "ISO8859_4", i[i.ISO8859_5 = 5] =
			"ISO8859_5", i[i.ISO8859_6 = 6] = "ISO8859_6", i[i.ISO8859_7 = 7] = "ISO8859_7", i[i.ISO8859_8 = 8] = "ISO8859_8", i[i.ISO8859_9 = 9] =
			"ISO8859_9", i[i.ISO8859_10 = 10] = "ISO8859_10", i[i.ISO8859_11 = 11] = "ISO8859_11", i[i.ISO8859_13 = 12] = "ISO8859_13", i[i.ISO8859_14 =
				13] = "ISO8859_14", i[i.ISO8859_15 = 14] = "ISO8859_15", i[i.ISO8859_16 = 15] = "ISO8859_16", i[i.SJIS = 16] = "SJIS", i[i.Cp1250 =
				17] = "Cp1250", i[i.Cp1251 = 18] = "Cp1251", i[i.Cp1252 = 19] = "Cp1252", i[i.Cp1256 = 20] = "Cp1256", i[i.UnicodeBigUnmarked = 21] =
			"UnicodeBigUnmarked", i[i.UTF8 = 22] = "UTF8", i[i.ASCII = 23] = "ASCII", i[i.Big5 = 24] = "Big5", i[i.GB18030 = 25] = "GB18030", i[i
				.EUC_KR = 26] = "EUC_KR";
		var u = (s.prototype.getValueIdentifier = function () {
				return this.valueIdentifier
			}, s.prototype.getName = function () {
				return this.name
			}, s.prototype.getValue = function () {
				return this.values[0]
			}, s.getCharacterSetECIByValue = function (t) {
				if (t < 0 || 900 <= t) throw new a.default("incorect value");
				var e = s.VALUES_TO_ECI.get(t);
				if (void 0 === e) throw new a.default("incorect value");
				return e
			}, s.getCharacterSetECIByName = function (t) {
				var e = s.NAME_TO_ECI.get(t);
				if (void 0 === e) throw new a.default("incorect value");
				return e
			}, s.prototype.equals = function (t) {
				if (!(t instanceof s)) return !1;
				var e = t;
				return this.getName() === e.getName()
			}, s.VALUE_IDENTIFIER_TO_ECI = new Map, s.VALUES_TO_ECI = new Map, s.NAME_TO_ECI = new Map, s.Cp437 = new s(o.Cp437, Int32Array.from(
				[0, 2]), "Cp437"), s.ISO8859_1 = new s(o.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), s.ISO8859_2 =
			new s(o.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), s.ISO8859_3 = new s(o.ISO8859_3, 5, "ISO-8859-3", "ISO88593",
				"ISO8859_3"), s.ISO8859_4 = new s(o.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), s.ISO8859_5 = new s(o.ISO8859_5, 7,
				"ISO-8859-5", "ISO88595", "ISO8859_5"), s.ISO8859_6 = new s(o.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), s.ISO8859_7 =
			new s(o.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), s.ISO8859_8 = new s(o.ISO8859_8, 10, "ISO-8859-8", "ISO88598",
				"ISO8859_8"), s.ISO8859_9 = new s(o.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), s.ISO8859_10 = new s(o.ISO8859_10, 12,
				"ISO-8859-10", "ISO885910", "ISO8859_10"), s.ISO8859_11 = new s(o.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), s.ISO8859_13 =
			new s(o.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), s.ISO8859_14 = new s(o.ISO8859_14, 16, "ISO-8859-14", "ISO885914",
				"ISO8859_14"), s.ISO8859_15 = new s(o.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), s.ISO8859_16 = new s(o.ISO8859_16,
				18, "ISO-8859-16", "ISO885916", "ISO8859_16"), s.SJIS = new s(o.SJIS, 20, "SJIS", "Shift_JIS"), s.Cp1250 = new s(o.Cp1250, 21,
				"Cp1250", "windows-1250"), s.Cp1251 = new s(o.Cp1251, 22, "Cp1251", "windows-1251"), s.Cp1252 = new s(o.Cp1252, 23, "Cp1252",
				"windows-1252"), s.Cp1256 = new s(o.Cp1256, 24, "Cp1256", "windows-1256"), s.UnicodeBigUnmarked = new s(o.UnicodeBigUnmarked, 25,
				"UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), s.UTF8 = new s(o.UTF8, 26, "UTF8", "UTF-8"), s.ASCII = new s(o.ASCII, Int32Array.from(
				[27, 170]), "ASCII", "US-ASCII"), s.Big5 = new s(o.Big5, 28, "Big5"), s.GB18030 = new s(o.GB18030, 29, "GB18030", "GB2312",
				"EUC_CN", "GBK"), s.EUC_KR = new s(o.EUC_KR, 30, "EUC_KR", "EUC-KR"), s);

		function s(t, e, r) {
			for (var o, i, a = [], u = 3; u < arguments.length; u++) a[u - 3] = arguments[u];
			this.valueIdentifier = t, this.name = r, this.values = "number" == typeof e ? Int32Array.from([e]) : e, this.otherEncodingNames = a,
				s.VALUE_IDENTIFIER_TO_ECI.set(t, this), s.NAME_TO_ECI.set(r, this);
			for (var f = this.values, l = 0, d = f.length; l !== d; l++) {
				var c = f[l];
				s.VALUES_TO_ECI.set(c, this)
			}
			try {
				for (var h = n(a), p = h.next(); !p.done; p = h.next()) {
					var _ = p.value;
					s.NAME_TO_ECI.set(_, this)
				}
			} catch (t) {
				o = {
					error: t
				}
			} finally {
				try {
					p && !p.done && (i = h.return) && i.call(h)
				} finally {
					if (o) throw o.error
				}
			}
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(38),
			o = r(22),
			i = (a.decode = function (t, e) {
				var r = this.encodingName(e);
				return this.customDecoder ? this.customDecoder(t, r) : "undefined" == typeof TextDecoder || this.shouldDecodeOnFallback(r) ? this.decodeFallback(
					t, r) : new TextDecoder(r).decode(t)
			}, a.shouldDecodeOnFallback = function (t) {
				return !a.isBrowser() && "ISO-8859-1" === t
			}, a.encode = function (t, e) {
				var r = this.encodingName(e);
				return this.customEncoder ? this.customEncoder(t, r) : "undefined" == typeof TextEncoder ? this.encodeFallback(t) : (new TextEncoder)
					.encode(t)
			}, a.isBrowser = function () {
				return "undefined" != typeof window && "[object Window]" === {}.toString.call(window)
			}, a.encodingName = function (t) {
				return "string" == typeof t ? t : t.getName()
			}, a.encodingCharacterSet = function (t) {
				return t instanceof o.default ? t : o.default.getCharacterSetECIByName(t)
			}, a.decodeFallback = function (t, e) {
				var r = this.encodingCharacterSet(e);
				if (a.isDecodeFallbackSupported(r)) {
					for (var i = "", u = 0, s = t.length; u < s; u++) {
						var f = t[u].toString(16);
						f.length < 2 && (f = "0" + f), i += "%" + f
					}
					return decodeURIComponent(i)
				}
				if (r.equals(o.default.UnicodeBigUnmarked)) return String.fromCharCode.apply(null, new Uint16Array(t.buffer));
				throw new n.default("Encoding " + this.encodingName(e) + " not supported by fallback.")
			}, a.isDecodeFallbackSupported = function (t) {
				return t.equals(o.default.UTF8) || t.equals(o.default.ISO8859_1) || t.equals(o.default.ASCII)
			}, a.encodeFallback = function (t) {
				for (var e = btoa(unescape(encodeURIComponent(t))).split(""), r = [], n = 0; n < e.length; n++) r.push(e[n].charCodeAt(0));
				return new Uint8Array(r)
			}, a);

		function a() {}
		e.default = i
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(25),
			u = (o(s, i = a.default), s.prototype.getRow = function (t, e) {
				for (var r = this.delegate.getRow(t, e), n = this.getWidth(), o = 0; o < n; o++) r[o] = 255 - (255 & r[o]);
				return r
			}, s.prototype.getMatrix = function () {
				for (var t = this.delegate.getMatrix(), e = this.getWidth() * this.getHeight(), r = new Uint8ClampedArray(e), n = 0; n < e; n++) r[
					n] = 255 - (255 & t[n]);
				return r
			}, s.prototype.isCropSupported = function () {
				return this.delegate.isCropSupported()
			}, s.prototype.crop = function (t, e, r, n) {
				return new s(this.delegate.crop(t, e, r, n))
			}, s.prototype.isRotateSupported = function () {
				return this.delegate.isRotateSupported()
			}, s.prototype.invert = function () {
				return this.delegate
			}, s.prototype.rotateCounterClockwise = function () {
				return new s(this.delegate.rotateCounterClockwise())
			}, s.prototype.rotateCounterClockwise45 = function () {
				return new s(this.delegate.rotateCounterClockwise45())
			}, s);

		function s(t) {
			var e = i.call(this, t.getWidth(), t.getHeight()) || this;
			return e.delegate = t, e
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(5),
			o = r(38),
			i = (a.prototype.getWidth = function () {
				return this.width
			}, a.prototype.getHeight = function () {
				return this.height
			}, a.prototype.isCropSupported = function () {
				return !1
			}, a.prototype.crop = function (t, e, r, n) {
				throw new o.default("This luminance source does not support cropping.")
			}, a.prototype.isRotateSupported = function () {
				return !1
			}, a.prototype.rotateCounterClockwise = function () {
				throw new o.default("This luminance source does not support rotation by 90 degrees.")
			}, a.prototype.rotateCounterClockwise45 = function () {
				throw new o.default("This luminance source does not support rotation by 45 degrees.")
			}, a.prototype.toString = function () {
				for (var t = new Uint8ClampedArray(this.width), e = new n.default, r = 0; r < this.height; r++) {
					for (var o = this.getRow(r, t), i = 0; i < this.width; i++) {
						var a, u = 255 & o[i];
						a = u < 64 ? "#" : u < 128 ? "+" : u < 192 ? "." : " ", e.append(a)
					}
					e.append("\n")
				}
				return e.toString()
			}, a);

		function a(t, e) {
			this.width = t, this.height = e
		}
		e.default = i
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getRawBytes = function () {
			return this.rawBytes
		}, o.prototype.getNumBits = function () {
			return this.numBits
		}, o.prototype.setNumBits = function (t) {
			this.numBits = t
		}, o.prototype.getText = function () {
			return this.text
		}, o.prototype.getByteSegments = function () {
			return this.byteSegments
		}, o.prototype.getECLevel = function () {
			return this.ecLevel
		}, o.prototype.getErrorsCorrected = function () {
			return this.errorsCorrected
		}, o.prototype.setErrorsCorrected = function (t) {
			this.errorsCorrected = t
		}, o.prototype.getErasures = function () {
			return this.erasures
		}, o.prototype.setErasures = function (t) {
			this.erasures = t
		}, o.prototype.getOther = function () {
			return this.other
		}, o.prototype.setOther = function (t) {
			this.other = t
		}, o.prototype.hasStructuredAppend = function () {
			return 0 <= this.structuredAppendParity && 0 <= this.structuredAppendSequenceNumber
		}, o.prototype.getStructuredAppendParity = function () {
			return this.structuredAppendParity
		}, o.prototype.getStructuredAppendSequenceNumber = function () {
			return this.structuredAppendSequenceNumber
		}, o);

		function o(t, e, r, n, o, i) {
			void 0 === o && (o = -1), void 0 === i && (i = -1), this.rawBytes = t, this.text = e, this.byteSegments = r, this.ecLevel = n, this.structuredAppendSequenceNumber =
				o, this.structuredAppendParity = i, this.numBits = null == t ? 0 : 8 * t.length
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(20),
			o = r(29),
			i = r(62),
			a = r(16),
			u = (s.prototype.decode = function (t, e) {
				for (var r = this.field, a = new o.default(r, t), u = new Int32Array(e), s = !0, f = 0; f < e; f++) {
					var l = a.evaluateAt(r.exp(f + r.getGeneratorBase()));
					0 !== (u[u.length - 1 - f] = l) && (s = !1)
				}
				if (!s) {
					var d = new o.default(r, u),
						c = this.runEuclideanAlgorithm(r.buildMonomial(e, 1), d, e),
						h = c[0],
						p = c[1],
						_ = this.findErrorLocations(h),
						g = this.findErrorMagnitudes(p, _);
					for (f = 0; f < _.length; f++) {
						var v = t.length - 1 - r.log(_[f]);
						if (v < 0) throw new i.default("Bad error location");
						t[v] = n.default.addOrSubtract(t[v], g[f])
					}
				}
			}, s.prototype.runEuclideanAlgorithm = function (t, e, r) {
				if (t.getDegree() < e.getDegree()) {
					var n = t;
					t = e, e = n
				}
				for (var o = this.field, u = t, s = e, f = o.getZero(), l = o.getOne(); s.getDegree() >= (r / 2 | 0);) {
					var d = u,
						c = f;
					if (f = l, (u = s).isZero()) throw new i.default("r_{i-1} was zero");
					s = d;
					for (var h = o.getZero(), p = u.getCoefficient(u.getDegree()), _ = o.inverse(p); s.getDegree() >= u.getDegree() && !s.isZero();) {
						var g = s.getDegree() - u.getDegree(),
							v = o.multiply(s.getCoefficient(s.getDegree()), _);
						h = h.addOrSubtract(o.buildMonomial(g, v)), s = s.addOrSubtract(u.multiplyByMonomial(g, v))
					}
					if (l = h.multiply(f).addOrSubtract(c), s.getDegree() >= u.getDegree()) throw new a.default(
						"Division algorithm failed to reduce polynomial?")
				}
				var w = l.getCoefficient(0);
				if (0 === w) throw new i.default("sigmaTilde(0) was zero");
				var y = o.inverse(w);
				return [l.multiplyScalar(y), s.multiplyScalar(y)]
			}, s.prototype.findErrorLocations = function (t) {
				var e = t.getDegree();
				if (1 === e) return Int32Array.from([t.getCoefficient(1)]);
				for (var r = new Int32Array(e), n = 0, o = this.field, a = 1; a < o.getSize() && n < e; a++) 0 === t.evaluateAt(a) && (r[n] = o.inverse(
					a), n++);
				if (n !== e) throw new i.default("Error locator degree does not match number of roots");
				return r
			}, s.prototype.findErrorMagnitudes = function (t, e) {
				for (var r = e.length, n = new Int32Array(r), o = this.field, i = 0; i < r; i++) {
					for (var a = o.inverse(e[i]), u = 1, s = 0; s < r; s++)
						if (i !== s) {
							var f = o.multiply(e[s], a),
								l = 0 == (1 & f) ? 1 | f : -2 & f;
							u = o.multiply(u, l)
						}
					n[i] = o.multiply(t.evaluateAt(a), o.inverse(u)), 0 !== o.getGeneratorBase() && (n[i] = o.multiply(n[i], a))
				}
				return n
			}, s);

		function s(t) {
			this.field = t
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(8),
			o = r(22),
			i = r(23),
			a = (u.castAsNonUtf8Char = function (t, e) {
					void 0 === e && (e = null);
					var r = e ? e.getName() : this.ISO88591;
					return i.default.decode(new Uint8Array([t]), r)
				}, u.guessEncoding = function (t, e) {
					if (null != e && void 0 !== e.get(n.default.CHARACTER_SET)) return e.get(n.default.CHARACTER_SET).toString();
					for (var r = t.length, o = !0, i = !0, a = !0, s = 0, f = 0, l = 0, d = 0, c = 0, h = 0, p = 0, _ = 0, g = 0, v = 0, w = 0, y = 3 <
							t.length && 239 === t[0] && 187 === t[1] && 191 === t[2], E = 0; E < r && (o || i || a); E++) {
						var A = 255 & t[E];
						a && (0 < s ? 0 == (128 & A) ? a = !1 : s-- : 0 != (128 & A) && (0 == (64 & A) ? a = !1 : (s++, 0 == (32 & A) ? f++ : (s++, 0 == (
							16 & A) ? l++ : (s++, 0 == (8 & A) ? d++ : a = !1))))), o && (127 < A && A < 160 ? o = !1 : 159 < A && (A < 192 || 215 == A ||
							247 == A) && w++), i && (0 < c ? A < 64 || 127 == A || 252 < A ? i = !1 : c-- : 128 == A || 160 == A || 239 < A ? i = !1 : 160 <
							A && A < 224 ? (h++, _ = 0, g < ++p && (g = p)) : 127 < A ? (c++, p = 0, v < ++_ && (v = _)) : _ = p = 0)
					}
					return a && 0 < s && (a = !1), i && 0 < c && (i = !1), a && (y || 0 < f + l + d) ? u.UTF8 : i && (u.ASSUME_SHIFT_JIS || 3 <= g || 3 <=
							v) ? u.SHIFT_JIS : o && i ? 2 === g && 2 === h || r <= 10 * w ? u.SHIFT_JIS : u.ISO88591 : o ? u.ISO88591 : i ? u.SHIFT_JIS : a ?
						u.UTF8 : u.PLATFORM_DEFAULT_ENCODING
				}, u.format = function (t) {
					for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
					var n = -1;
					return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function (t, r, o, i, a, u) {
						if ("%%" === t) return "%";
						if (void 0 !== e[++n]) {
							t = i ? parseInt(i.substr(1)) : void 0;
							var s, f = a ? parseInt(a.substr(1)) : void 0;
							switch (u) {
							case "s":
								s = e[n];
								break;
							case "c":
								s = e[n][0];
								break;
							case "f":
								s = parseFloat(e[n]).toFixed(t);
								break;
							case "p":
								s = parseFloat(e[n]).toPrecision(t);
								break;
							case "e":
								s = parseFloat(e[n]).toExponential(t);
								break;
							case "x":
								s = parseInt(e[n]).toString(f || 16);
								break;
							case "d":
								s = parseFloat(parseInt(e[n], f || 10).toPrecision(t)).toFixed(0)
							}
							s = "object" == typeof s ? JSON.stringify(s) : (+s).toString(f);
							for (var l = parseInt(o), d = o && o[0] + "" == "0" ? "0" : " "; s.length < l;) s = void 0 !== r ? s + d : d + s;
							return s
						}
					})
				}, u.getBytes = function (t, e) {
					return i.default.encode(t, e)
				}, u.getCharCode = function (t, e) {
					return void 0 === e && (e = 0), t.charCodeAt(e)
				}, u.getCharAt = function (t) {
					return String.fromCharCode(t)
				}, u.SHIFT_JIS = o.default.SJIS.getName(), u.GB2312 = "GB2312", u.ISO88591 = o.default.ISO8859_1.getName(), u.EUC_JP = "EUC_JP", u.UTF8 =
				o.default.UTF8.getName(), u.PLATFORM_DEFAULT_ENCODING = u.UTF8, u.ASSUME_SHIFT_JIS = !1, u);

		function u() {}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(61),
			o = r(6),
			i = r(1),
			a = (u.prototype.getCoefficients = function () {
				return this.coefficients
			}, u.prototype.getDegree = function () {
				return this.coefficients.length - 1
			}, u.prototype.isZero = function () {
				return 0 === this.coefficients[0]
			}, u.prototype.getCoefficient = function (t) {
				return this.coefficients[this.coefficients.length - 1 - t]
			}, u.prototype.evaluateAt = function (t) {
				if (0 === t) return this.getCoefficient(0);
				var e, r = this.coefficients;
				if (1 === t) {
					for (var o = e = 0, i = r.length; o !== i; o++) {
						var a = r[o];
						e = n.default.addOrSubtract(e, a)
					}
					return e
				}
				e = r[0];
				var u = r.length,
					s = this.field;
				for (o = 1; o < u; o++) e = n.default.addOrSubtract(s.multiply(t, e), r[o]);
				return e
			}, u.prototype.addOrSubtract = function (t) {
				if (!this.field.equals(t.field)) throw new i.default("GenericGFPolys do not have same GenericGF field");
				if (this.isZero()) return t;
				if (t.isZero()) return this;
				var e = this.coefficients,
					r = t.coefficients;
				if (e.length > r.length) {
					var a = e;
					e = r, r = a
				}
				var s = new Int32Array(r.length),
					f = r.length - e.length;
				o.default.arraycopy(r, 0, s, 0, f);
				for (var l = f; l < r.length; l++) s[l] = n.default.addOrSubtract(e[l - f], r[l]);
				return new u(this.field, s)
			}, u.prototype.multiply = function (t) {
				if (!this.field.equals(t.field)) throw new i.default("GenericGFPolys do not have same GenericGF field");
				if (this.isZero() || t.isZero()) return this.field.getZero();
				for (var e = this.coefficients, r = e.length, o = t.coefficients, a = o.length, s = new Int32Array(r + a - 1), f = this.field, l =
						0; l < r; l++)
					for (var d = e[l], c = 0; c < a; c++) s[l + c] = n.default.addOrSubtract(s[l + c], f.multiply(d, o[c]));
				return new u(f, s)
			}, u.prototype.multiplyScalar = function (t) {
				if (0 === t) return this.field.getZero();
				if (1 === t) return this;
				for (var e = this.coefficients.length, r = this.field, n = new Int32Array(e), o = this.coefficients, i = 0; i < e; i++) n[i] = r.multiply(
					o[i], t);
				return new u(r, n)
			}, u.prototype.multiplyByMonomial = function (t, e) {
				if (t < 0) throw new i.default;
				if (0 === e) return this.field.getZero();
				for (var r = this.coefficients, n = r.length, o = new Int32Array(n + t), a = this.field, s = 0; s < n; s++) o[s] = a.multiply(r[s],
					e);
				return new u(a, o)
			}, u.prototype.divide = function (t) {
				if (!this.field.equals(t.field)) throw new i.default("GenericGFPolys do not have same GenericGF field");
				if (t.isZero()) throw new i.default("Divide by 0");
				for (var e = this.field, r = e.getZero(), n = this, o = t.getCoefficient(t.getDegree()), a = e.inverse(o); n.getDegree() >= t.getDegree() &&
					!n.isZero();) {
					var u = n.getDegree() - t.getDegree(),
						s = e.multiply(n.getCoefficient(n.getDegree()), a),
						f = t.multiplyByMonomial(u, s),
						l = e.buildMonomial(u, s);
					r = r.addOrSubtract(l), n = n.addOrSubtract(f)
				}
				return [r, n]
			}, u.prototype.toString = function () {
				for (var t = "", e = this.getDegree(); 0 <= e; e--) {
					var r = this.getCoefficient(e);
					if (0 !== r) {
						if (r < 0 ? (t += " - ", r = -r) : 0 < t.length && (t += " + "), 0 === e || 1 !== r) {
							var n = this.field.log(r);
							0 === n ? t += "1" : 1 === n ? t += "a" : (t += "a^", t += n)
						}
						0 !== e && (1 === e ? t += "x" : (t += "x^", t += e))
					}
				}
				return t
			}, u);

		function u(t, e) {
			if (0 === e.length) throw new i.default;
			this.field = t;
			var r = e.length;
			if (1 < r && 0 === e[0]) {
				for (var n = 1; n < r && 0 === e[n];) n++;
				n === r ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(r - n), o.default.arraycopy(e, n, this.coefficients,
					0, this.coefficients.length))
			} else this.coefficients = e
		}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getBits = function () {
			return this.bits
		}, o.prototype.getPoints = function () {
			return this.points
		}, o);

		function o(t, e) {
			this.bits = t, this.points = e
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(64),
			o = (i.setGridSampler = function (t) {
				i.gridSampler = t
			}, i.getInstance = function () {
				return i.gridSampler
			}, i.gridSampler = new n.default, i);

		function i() {}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(15),
			u = r(0),
			s = r(2),
			f = (o(l, i = a.default), l.findStartGuardPattern = function (t) {
				for (var e = !1, r = null, n = 0, o = [0, 0, 0]; !e;) {
					var i = (r = l.findGuardPattern(t, n, !(o = [0, 0, 0]), this.START_END_PATTERN, o))[0],
						a = i - ((n = r[1]) - i);
					0 <= a && (e = t.isRange(a, i, !1))
				}
				return r
			}, l.checkChecksum = function (t) {
				return l.checkStandardUPCEANChecksum(t)
			}, l.checkStandardUPCEANChecksum = function (t) {
				var e = t.length;
				if (0 === e) return !1;
				var r = parseInt(t.charAt(e - 1), 10);
				return l.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r
			}, l.getStandardUPCEANChecksum = function (t) {
				for (var e = t.length, r = 0, n = e - 1; 0 <= n; n -= 2) {
					if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || 9 < o) throw new s.default;
					r += o
				}
				for (r *= 3, n = e - 2; 0 <= n; n -= 2) {
					var o;
					if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || 9 < o) throw new s.default;
					r += o
				}
				return (1e3 - r) % 10
			}, l.decodeEnd = function (t, e) {
				return l.findGuardPattern(t, e, !1, l.START_END_PATTERN, new Array(l.START_END_PATTERN.length).fill(0))
			}, l.findGuardPattern = function (t, e, r, n, o) {
				for (var i = t.getSize(), s = 0, f = e = r ? t.getNextUnset(e) : t.getNextSet(e), d = n.length, c = r, h = e; h < i; h++)
					if (t.get(h) !== c) o[s]++;
					else {
						if (s === d - 1) {
							if (a.default.patternMatchVariance(o, n, l.MAX_INDIVIDUAL_VARIANCE) < l.MAX_AVG_VARIANCE) return [f, h];
							f += o[0] + o[1];
							for (var p = o.slice(2, o.length), _ = 0; _ < s - 1; _++) o[_] = p[_];
							o[s - 1] = 0, o[s] = 0, s--
						} else s++;
						o[s] = 1, c = !c
					}
				throw new u.default
			}, l.decodeDigit = function (t, e, r, n) {
				this.recordPattern(t, r, e);
				for (var o = this.MAX_AVG_VARIANCE, i = -1, s = n.length, f = 0; f < s; f++) {
					var d = n[f],
						c = a.default.patternMatchVariance(e, d, l.MAX_INDIVIDUAL_VARIANCE);
					c < o && (o = c, i = f)
				}
				if (0 <= i) return i;
				throw new u.default
			}, l.MAX_AVG_VARIANCE = .48, l.MAX_INDIVIDUAL_VARIANCE = .7, l.START_END_PATTERN = [1, 1, 1], l.MIDDLE_PATTERN = [1, 1, 1, 1, 1], l.END_PATTERN = [
				1, 1, 1, 1, 1, 1
			], l.L_PATTERNS = [
				[3, 2, 1, 1],
				[2, 2, 2, 1],
				[2, 1, 2, 2],
				[1, 4, 1, 1],
				[1, 1, 3, 2],
				[1, 2, 3, 1],
				[1, 1, 1, 4],
				[1, 3, 1, 2],
				[1, 2, 1, 3],
				[3, 1, 1, 2]
			], l);

		function l() {
			var t = null !== i && i.apply(this, arguments) || this;
			return t.decodeRowStringBuffer = "", t
		}
		e.default = f
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n, o, i = r(36),
			a = r(1);
		(o = n = e.ErrorCorrectionLevelValues || (e.ErrorCorrectionLevelValues = {}))[o.L = 0] = "L", o[o.M = 1] = "M", o[o.Q = 2] = "Q", o[o.H =
			3] = "H";
		var u = (s.prototype.getValue = function () {
				return this.value
			}, s.prototype.getBits = function () {
				return this.bits
			}, s.fromString = function (t) {
				switch (t) {
				case "L":
					return s.L;
				case "M":
					return s.M;
				case "Q":
					return s.Q;
				case "H":
					return s.H;
				default:
					throw new i.default(t + "not available")
				}
			}, s.prototype.toString = function () {
				return this.stringValue
			}, s.prototype.equals = function (t) {
				if (!(t instanceof s)) return !1;
				var e = t;
				return this.value === e.value
			}, s.forBits = function (t) {
				if (t < 0 || t >= s.FOR_BITS.size) throw new a.default;
				return s.FOR_BITS.get(t)
			}, s.FOR_BITS = new Map, s.FOR_VALUE = new Map, s.L = new s(n.L, "L", 1), s.M = new s(n.M, "M", 0), s.Q = new s(n.Q, "Q", 3), s.H =
			new s(n.H, "H", 2), s);

		function s(t, e, r) {
			this.value = t, this.stringValue = e, this.bits = r, s.FOR_BITS.set(r, this), s.FOR_VALUE.set(t, this)
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o;
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), (o = n = n || {})[o.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", o[o.CHARACTER_SET = 1] = "CHARACTER_SET", o[o.DATA_MATRIX_SHAPE =
			2] = "DATA_MATRIX_SHAPE", o[o.MIN_SIZE = 3] = "MIN_SIZE", o[o.MAX_SIZE = 4] = "MAX_SIZE", o[o.MARGIN = 5] = "MARGIN", o[o.PDF417_COMPACT =
			6] = "PDF417_COMPACT", o[o.PDF417_COMPACTION = 7] = "PDF417_COMPACTION", o[o.PDF417_DIMENSIONS = 8] = "PDF417_DIMENSIONS", o[o.AZTEC_LAYERS =
			9] = "AZTEC_LAYERS", o[o.QR_VERSION = 10] = "QR_VERSION", e.default = n
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(89),
			u = (o(s, i = a.default), s.prototype.encodeCompressedGtin = function (t, e) {
				t.append("(01)");
				var r = t.length();
				t.append("9"), this.encodeCompressedGtinWithoutAI(t, e, r)
			}, s.prototype.encodeCompressedGtinWithoutAI = function (t, e, r) {
				for (var n = 0; n < 4; ++n) {
					var o = this.getGeneralDecoder().extractNumericValueFromBitArray(e + 10 * n, 10);
					o / 100 == 0 && t.append("0"), o / 10 == 0 && t.append("0"), t.append(o)
				}
				s.appendCheckDigit(t, r)
			}, s.appendCheckDigit = function (t, e) {
				for (var r = 0, n = 0; n < 13; n++) {
					var o = t.charAt(n + e).charCodeAt(0) - "0".charCodeAt(0);
					r += 0 == (1 & n) ? 3 * o : o
				}
				10 == (r = 10 - r % 10) && (r = 0), t.append(r)
			}, s.GTIN_SIZE = 40, s);

		function s(t) {
			return i.call(this, t) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(9),
			o = r(3),
			i = r(8),
			a = r(14),
			u = r(6),
			s = r(97),
			f = r(98),
			l = (d.prototype.decode = function (t, e) {
				void 0 === e && (e = null);
				var r = null,
					i = new f.default(t.getBlackMatrix()),
					l = null,
					d = null;
				try {
					l = (c = i.detectMirror(!1)).getPoints(), this.reportFoundResultPoints(e, l), d = (new s.default).decode(c)
				} catch (t) {
					r = t
				}
				if (null == d) try {
					var c;
					l = (c = i.detectMirror(!0)).getPoints(), this.reportFoundResultPoints(e, l), d = (new s.default).decode(c)
				} catch (t) {
					if (null != r) throw r;
					throw t
				}
				var h = new n.default(d.getText(), d.getRawBytes(), d.getNumBits(), l, o.default.AZTEC, u.default.currentTimeMillis()),
					p = d.getByteSegments();
				null != p && h.putMetadata(a.default.BYTE_SEGMENTS, p);
				var _ = d.getECLevel();
				return null != _ && h.putMetadata(a.default.ERROR_CORRECTION_LEVEL, _), h
			}, d.prototype.reportFoundResultPoints = function (t, e) {
				if (null != t) {
					var r = t.get(i.default.NEED_RESULT_POINT_CALLBACK);
					null != r && e.forEach(function (t, e, n) {
						r.foundPossibleResultPoint(t)
					})
				}
			}, d.prototype.reset = function () {}, d);

		function d() {}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(4),
			o = r(10),
			i = r(0),
			a = (u.prototype.detect = function () {
				for (var t = this.leftInit, e = this.rightInit, r = this.upInit, n = this.downInit, o = !1, a = !0, u = !1, s = !1, f = !1, l = !1,
						d = !1, c = this.width, h = this.height; a;) {
					for (var p = !(a = !1);
						(p || !s) && e < c;)(p = this.containsBlackPoint(r, n, e, !1)) ? (e++, s = a = !0) : s || e++;
					if (c <= e) {
						o = !0;
						break
					}
					for (var _ = !0;
						(_ || !f) && n < h;)(_ = this.containsBlackPoint(t, e, n, !0)) ? (n++, f = a = !0) : f || n++;
					if (h <= n) {
						o = !0;
						break
					}
					for (var g = !0;
						(g || !l) && 0 <= t;)(g = this.containsBlackPoint(r, n, t, !1)) ? (t--, l = a = !0) : l || t--;
					if (t < 0) {
						o = !0;
						break
					}
					for (var v = !0;
						(v || !d) && 0 <= r;)(v = this.containsBlackPoint(t, e, r, !0)) ? (r--, d = a = !0) : d || r--;
					if (r < 0) {
						o = !0;
						break
					}
					a && (u = !0)
				}
				if (o || !u) throw new i.default;
				for (var w = e - t, y = null, E = 1; null === y && E < w; E++) y = this.getBlackPointOnSegment(t, n - E, t + E, n);
				if (null == y) throw new i.default;
				var A = null;
				for (E = 1; null === A && E < w; E++) A = this.getBlackPointOnSegment(t, r + E, t + E, r);
				if (null == A) throw new i.default;
				var C = null;
				for (E = 1; null === C && E < w; E++) C = this.getBlackPointOnSegment(e, r + E, e - E, r);
				if (null == C) throw new i.default;
				var m = null;
				for (E = 1; null === m && E < w; E++) m = this.getBlackPointOnSegment(e, n - E, e - E, n);
				if (null == m) throw new i.default;
				return this.centerEdges(m, y, C, A)
			}, u.prototype.getBlackPointOnSegment = function (t, e, r, i) {
				for (var a = o.default.round(o.default.distance(t, e, r, i)), u = (r - t) / a, s = (i - e) / a, f = this.image, l = 0; l < a; l++) {
					var d = o.default.round(t + l * u),
						c = o.default.round(e + l * s);
					if (f.get(d, c)) return new n.default(d, c)
				}
				return null
			}, u.prototype.centerEdges = function (t, e, r, o) {
				var i = t.getX(),
					a = t.getY(),
					s = e.getX(),
					f = e.getY(),
					l = r.getX(),
					d = r.getY(),
					c = o.getX(),
					h = o.getY(),
					p = u.CORR;
				return i < this.width / 2 ? [new n.default(c - p, h + p), new n.default(s + p, f + p), new n.default(l - p, d - p), new n.default(i +
					p, a - p)] : [new n.default(c + p, h + p), new n.default(s + p, f - p), new n.default(l - p, d + p), new n.default(i - p, a - p)]
			}, u.prototype.containsBlackPoint = function (t, e, r, n) {
				var o = this.image;
				if (n) {
					for (var i = t; i <= e; i++)
						if (o.get(i, r)) return !0
				} else
					for (var a = t; a <= e; a++)
						if (o.get(r, a)) return !0; return !1
			}, u.INIT_SIZE = 10, u.CORR = 1, u);

		function u(t, e, r, n) {
			this.image = t, this.height = t.getHeight(), this.width = t.getWidth(), null == e && (e = u.INIT_SIZE), null == r && (r = t.getWidth() /
				2 | 0), null == n && (n = t.getHeight() / 2 | 0);
			var o = e / 2 | 0;
			if (this.leftInit = r - o, this.rightInit = r + o, this.upInit = n - o, this.downInit = n + o, this.upInit < 0 || this.leftInit < 0 ||
				this.downInit >= this.height || this.rightInit >= this.width) throw new i.default
		}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.quadrilateralToQuadrilateral = function (t, e, r, n, i, a, u, s, f, l, d, c, h, p, _, g) {
			var v = o.quadrilateralToSquare(t, e, r, n, i, a, u, s);
			return o.squareToQuadrilateral(f, l, d, c, h, p, _, g).times(v)
		}, o.prototype.transformPoints = function (t) {
			for (var e = t.length, r = this.a11, n = this.a12, o = this.a13, i = this.a21, a = this.a22, u = this.a23, s = this.a31, f = this.a32,
					l = this.a33, d = 0; d < e; d += 2) {
				var c = t[d],
					h = t[d + 1],
					p = o * c + u * h + l;
				t[d] = (r * c + i * h + s) / p, t[d + 1] = (n * c + a * h + f) / p
			}
		}, o.prototype.transformPointsWithValues = function (t, e) {
			for (var r = this.a11, n = this.a12, o = this.a13, i = this.a21, a = this.a22, u = this.a23, s = this.a31, f = this.a32, l = this.a33,
					d = t.length, c = 0; c < d; c++) {
				var h = t[c],
					p = e[c],
					_ = o * h + u * p + l;
				t[c] = (r * h + i * p + s) / _, e[c] = (n * h + a * p + f) / _
			}
		}, o.squareToQuadrilateral = function (t, e, r, n, i, a, u, s) {
			var f = t - r + i - u,
				l = e - n + a - s;
			if (0 == f && 0 == l) return new o(r - t, i - r, t, n - e, a - n, e, 0, 0, 1);
			var d = r - i,
				c = u - i,
				h = n - a,
				p = s - a,
				_ = d * p - c * h,
				g = (f * p - c * l) / _,
				v = (d * l - f * h) / _;
			return new o(r - t + g * r, u - t + v * u, t, n - e + g * n, s - e + v * s, e, g, v, 1)
		}, o.quadrilateralToSquare = function (t, e, r, n, i, a, u, s) {
			return o.squareToQuadrilateral(t, e, r, n, i, a, u, s).buildAdjoint()
		}, o.prototype.buildAdjoint = function () {
			return new o(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 *
				this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 *
				this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 *
				this.a21)
		}, o.prototype.times = function (t) {
			return new o(this.a11 * t.a11 + this.a21 * t.a12 + this.a31 * t.a13, this.a11 * t.a21 + this.a21 * t.a22 + this.a31 * t.a23, this.a11 *
				t.a31 + this.a21 * t.a32 + this.a31 * t.a33, this.a12 * t.a11 + this.a22 * t.a12 + this.a32 * t.a13, this.a12 * t.a21 + this.a22 *
				t.a22 + this.a32 * t.a23, this.a12 * t.a31 + this.a22 * t.a32 + this.a32 * t.a33, this.a13 * t.a11 + this.a23 * t.a12 + this.a33 *
				t.a13, this.a13 * t.a21 + this.a23 * t.a22 + this.a33 * t.a23, this.a13 * t.a31 + this.a23 * t.a32 + this.a33 * t.a33)
		}, o);

		function o(t, e, r, n, o, i, a, u, s) {
			this.a11 = t, this.a21 = e, this.a31 = r, this.a12 = n, this.a22 = o, this.a32 = i, this.a13 = a, this.a23 = u, this.a33 = s
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(3),
			u = r(66),
			s = r(67),
			f = r(68),
			l = r(8),
			d = r(72),
			c = r(102),
			h = r(0),
			p = r(15),
			_ = (o(g, i = p.default), g.prototype.decodeRow = function (t, e, r) {
				for (var n = 0; n < this.readers.length; n++) try {
					return this.readers[n].decodeRow(t, e, r)
				} catch (t) {}
				throw new h.default
			}, g.prototype.reset = function () {
				this.readers.forEach(function (t) {
					return t.reset()
				})
			}, g);

		function g(t) {
			var e = i.call(this) || this;
			e.readers = [];
			var r = t ? t.get(l.default.POSSIBLE_FORMATS) : null,
				n = t && void 0 !== t.get(l.default.ASSUME_CODE_39_CHECK_DIGIT);
			return r && ((r.includes(a.default.EAN_13) || r.includes(a.default.EAN_8)) && e.readers.push(new c.default(t)), r.includes(a.default.CODE_39) &&
					e.readers.push(new u.default(n)), r.includes(a.default.CODE_128) && e.readers.push(new s.default), r.includes(a.default.ITF) && e.readers
					.push(new d.default), r.includes(a.default.RSS_14) && e.readers.push(new f.default)), 0 === e.readers.length && (e.readers.push(new u
					.default), e.readers.push(new c.default(t)), e.readers.push(new s.default), e.readers.push(new d.default), e.readers.push(new f.default)),
				e
		}
		e.default = _
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getValue = function () {
			return this.value
		}, o.prototype.getChecksumPortion = function () {
			return this.checksumPortion
		}, o.prototype.toString = function () {
			return this.value + "(" + this.checksumPortion + ")"
		}, o.prototype.equals = function (t) {
			if (!(t instanceof o)) return !1;
			var e = t;
			return this.value === e.value && this.checksumPortion === e.checksumPortion
		}, o.prototype.hashCode = function () {
			return this.value ^ this.checksumPortion
		}, o);

		function o(t, e) {
			this.value = t, this.checksumPortion = e
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(108),
			o = r(9),
			i = r(3),
			a = r(8),
			u = r(14),
			s = r(12),
			f = r(113),
			l = r(6),
			d = r(0),
			c = (h.prototype.decode = function (t, e) {
				var r, n;
				if (void 0 === e && (e = null), null != e && e.has(a.default.PURE_BARCODE)) {
					var s = h.extractPureBits(t.getBlackMatrix());
					r = this.decoder.decode(s), n = h.NO_POINTS
				} else {
					var d = new f.default(t.getBlackMatrix()).detect();
					r = this.decoder.decode(d.getBits()), n = d.getPoints()
				}
				var c = r.getRawBytes(),
					p = new o.default(r.getText(), c, 8 * c.length, n, i.default.DATA_MATRIX, l.default.currentTimeMillis()),
					_ = r.getByteSegments();
				null != _ && p.putMetadata(u.default.BYTE_SEGMENTS, _);
				var g = r.getECLevel();
				return null != g && p.putMetadata(u.default.ERROR_CORRECTION_LEVEL, g), p
			}, h.prototype.reset = function () {}, h.extractPureBits = function (t) {
				var e = t.getTopLeftOnBit(),
					r = t.getBottomRightOnBit();
				if (null == e || null == r) throw new d.default;
				var n = this.moduleSize(e, t),
					o = e[1],
					i = r[1],
					a = e[0],
					u = (r[0] - a + 1) / n,
					f = (i - o + 1) / n;
				if (u <= 0 || f <= 0) throw new d.default;
				var l = n / 2;
				o += l, a += l;
				for (var c = new s.default(u, f), h = 0; h < f; h++)
					for (var p = o + h * n, _ = 0; _ < u; _++) t.get(a + _ * n, p) && c.set(_, h);
				return c
			}, h.moduleSize = function (t, e) {
				for (var r = e.getWidth(), n = t[0], o = t[1]; n < r && e.get(n, o);) n++;
				if (n === r) throw new d.default;
				var i = n - t[0];
				if (0 == i) throw new d.default;
				return i
			}, h.NO_POINTS = [], h);

		function h() {
			this.decoder = new n.default
		}
		e.default = c
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(1),
			o = (i.prototype.getBitOffset = function () {
				return this.bitOffset
			}, i.prototype.getByteOffset = function () {
				return this.byteOffset
			}, i.prototype.readBits = function (t) {
				if (t < 1 || 32 < t || t > this.available()) throw new n.default("" + t);
				var e = 0,
					r = this.bitOffset,
					o = this.byteOffset,
					i = this.bytes;
				if (0 < r) {
					var a = 8 - r,
						u = t < a ? t : a,
						s = 255 >> 8 - u << (f = a - u);
					e = (i[o] & s) >> f, t -= u, 8 === (r += u) && (r = 0, o++)
				}
				if (0 < t) {
					for (; 8 <= t;) e = e << 8 | 255 & i[o], o++, t -= 8;
					var f;
					0 < t && (s = 255 >> (f = 8 - t) << f, e = e << t | (i[o] & s) >> f, r += t)
				}
				return this.bitOffset = r, this.byteOffset = o, e
			}, i.prototype.available = function () {
				return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset
			}, i);

		function i(t) {
			this.bytes = t, this.byteOffset = 0, this.bitOffset = 0
		}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(3),
			o = r(8),
			i = r(9),
			a = r(14),
			u = r(12),
			s = r(115),
			f = r(77),
			l = r(122),
			d = r(0),
			c = (h.prototype.getDecoder = function () {
				return this.decoder
			}, h.prototype.decode = function (t, e) {
				var r, u;
				if (null != e && void 0 !== e.get(o.default.PURE_BARCODE)) {
					var s = h.extractPureBits(t.getBlackMatrix());
					r = this.decoder.decodeBitMatrix(s, e), u = h.NO_POINTS
				} else {
					var d = new l.default(t.getBlackMatrix()).detect(e);
					r = this.decoder.decodeBitMatrix(d.getBits(), e), u = d.getPoints()
				}
				r.getOther() instanceof f.default && r.getOther().applyMirroredCorrection(u);
				var c = new i.default(r.getText(), r.getRawBytes(), void 0, u, n.default.QR_CODE, void 0),
					p = r.getByteSegments();
				null !== p && c.putMetadata(a.default.BYTE_SEGMENTS, p);
				var _ = r.getECLevel();
				return null !== _ && c.putMetadata(a.default.ERROR_CORRECTION_LEVEL, _), r.hasStructuredAppend() && (c.putMetadata(a.default.STRUCTURED_APPEND_SEQUENCE,
					r.getStructuredAppendSequenceNumber()), c.putMetadata(a.default.STRUCTURED_APPEND_PARITY, r.getStructuredAppendParity())), c
			}, h.prototype.reset = function () {}, h.extractPureBits = function (t) {
				var e = t.getTopLeftOnBit(),
					r = t.getBottomRightOnBit();
				if (null === e || null === r) throw new d.default;
				var n = this.moduleSize(e, t),
					o = e[1],
					i = r[1],
					a = e[0],
					s = r[0];
				if (s <= a || i <= o) throw new d.default;
				if (i - o != s - a && (s = a + (i - o)) >= t.getWidth()) throw new d.default;
				var f = Math.round((s - a + 1) / n),
					l = Math.round((i - o + 1) / n);
				if (f <= 0 || l <= 0) throw new d.default;
				if (l !== f) throw new d.default;
				var c = Math.floor(n / 2);
				o += c;
				var h = (a += c) + Math.floor((f - 1) * n) - s;
				if (0 < h) {
					if (c < h) throw new d.default;
					a -= h
				}
				var p = o + Math.floor((l - 1) * n) - i;
				if (0 < p) {
					if (c < p) throw new d.default;
					o -= p
				}
				for (var _ = new u.default(f, l), g = 0; g < l; g++)
					for (var v = o + Math.floor(g * n), w = 0; w < f; w++) t.get(a + Math.floor(w * n), v) && _.set(w, g);
				return _
			}, h.moduleSize = function (t, e) {
				for (var r = e.getHeight(), n = e.getWidth(), o = t[0], i = t[1], a = !0, u = 0; o < n && i < r;) {
					if (a !== e.get(o, i)) {
						if (5 == ++u) break;
						a = !a
					}
					o++, i++
				}
				if (o === n || i === r) throw new d.default;
				return (o - t[0]) / 7
			}, h.NO_POINTS = new Array, h);

		function h() {
			this.decoder = new s.default
		}
		e.default = c
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(12),
			i = r(76),
			a = r(117),
			u = r(118),
			s = r(2),
			f = r(1),
			l = (d.prototype.getVersionNumber = function () {
				return this.versionNumber
			}, d.prototype.getAlignmentPatternCenters = function () {
				return this.alignmentPatternCenters
			}, d.prototype.getTotalCodewords = function () {
				return this.totalCodewords
			}, d.prototype.getDimensionForVersion = function () {
				return 17 + 4 * this.versionNumber
			}, d.prototype.getECBlocksForLevel = function (t) {
				return this.ecBlocks[t.getValue()]
			}, d.getProvisionalVersionForDimension = function (t) {
				if (t % 4 != 1) throw new s.default;
				try {
					return this.getVersionForNumber((t - 17) / 4)
				} catch (t) {
					throw new s.default
				}
			}, d.getVersionForNumber = function (t) {
				if (t < 1 || 40 < t) throw new f.default;
				return d.VERSIONS[t - 1]
			}, d.decodeVersionInformation = function (t) {
				for (var e = Number.MAX_SAFE_INTEGER, r = 0, n = 0; n < d.VERSION_DECODE_INFO.length; n++) {
					var o = d.VERSION_DECODE_INFO[n];
					if (o === t) return d.getVersionForNumber(n + 7);
					var a = i.default.numBitsDiffering(t, o);
					a < e && (r = n + 7, e = a)
				}
				return e <= 3 ? d.getVersionForNumber(r) : null
			}, d.prototype.buildFunctionPattern = function () {
				var t = this.getDimensionForVersion(),
					e = new o.default(t);
				e.setRegion(0, 0, 9, 9), e.setRegion(t - 8, 0, 8, 9), e.setRegion(0, t - 8, 9, 8);
				for (var r = this.alignmentPatternCenters.length, n = 0; n < r; n++)
					for (var i = this.alignmentPatternCenters[n] - 2, a = 0; a < r; a++) 0 === n && (0 === a || a === r - 1) || n === r - 1 && 0 === a ||
						e.setRegion(this.alignmentPatternCenters[a] - 2, i, 5, 5);
				return e.setRegion(6, 9, 1, t - 17), e.setRegion(9, 6, t - 17, 1), 6 < this.versionNumber && (e.setRegion(t - 11, 0, 3, 6), e.setRegion(
					0, t - 11, 6, 3)), e
			}, d.prototype.toString = function () {
				return "" + this.versionNumber
			}, d.VERSION_DECODE_INFO = Int32Array.from([31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784, 68472, 70749, 76311,
				79154, 84390, 87683, 92361, 96236, 102084, 102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589, 136944, 141498, 145311,
				150283, 152622, 158308, 161089, 167017
			]), d.VERSIONS = [new d(1, new Int32Array(0), new a.default(7, new u.default(1, 19)), new a.default(10, new u.default(1, 16)), new a
					.default(13, new u.default(1, 13)), new a.default(17, new u.default(1, 9))), new d(2, Int32Array.from([6, 18]), new a.default(10,
					new u.default(1, 34)), new a.default(16, new u.default(1, 28)), new a.default(22, new u.default(1, 22)), new a.default(28, new u.default(
					1, 16))), new d(3, Int32Array.from([6, 22]), new a.default(15, new u.default(1, 55)), new a.default(26, new u.default(1, 44)), new a
					.default(18, new u.default(2, 17)), new a.default(22, new u.default(2, 13))), new d(4, Int32Array.from([6, 26]), new a.default(20,
					new u.default(1, 80)), new a.default(18, new u.default(2, 32)), new a.default(26, new u.default(2, 24)), new a.default(16, new u.default(
					4, 9))), new d(5, Int32Array.from([6, 30]), new a.default(26, new u.default(1, 108)), new a.default(24, new u.default(2, 43)), new a
					.default(18, new u.default(2, 15), new u.default(2, 16)), new a.default(22, new u.default(2, 11), new u.default(2, 12))), new d(6,
					Int32Array.from([6, 34]), new a.default(18, new u.default(2, 68)), new a.default(16, new u.default(4, 27)), new a.default(24, new u
						.default(4, 19)), new a.default(28, new u.default(4, 15))), new d(7, Int32Array.from([6, 22, 38]), new a.default(20, new u.default(
					2, 78)), new a.default(18, new u.default(4, 31)), new a.default(18, new u.default(2, 14), new u.default(4, 15)), new a.default(26,
					new u.default(4, 13), new u.default(1, 14))), new d(8, Int32Array.from([6, 24, 42]), new a.default(24, new u.default(2, 97)), new a
					.default(22, new u.default(2, 38), new u.default(2, 39)), new a.default(22, new u.default(4, 18), new u.default(2, 19)), new a.default(
						26, new u.default(4, 14), new u.default(2, 15))), new d(9, Int32Array.from([6, 26, 46]), new a.default(30, new u.default(2, 116)),
					new a.default(22, new u.default(3, 36), new u.default(2, 37)), new a.default(20, new u.default(4, 16), new u.default(4, 17)), new a
					.default(24, new u.default(4, 12), new u.default(4, 13))), new d(10, Int32Array.from([6, 28, 50]), new a.default(18, new u.default(
					2, 68), new u.default(2, 69)), new a.default(26, new u.default(4, 43), new u.default(1, 44)), new a.default(24, new u.default(6,
					19), new u.default(2, 20)), new a.default(28, new u.default(6, 15), new u.default(2, 16))), new d(11, Int32Array.from([6, 30, 54]),
					new a.default(20, new u.default(4, 81)), new a.default(30, new u.default(1, 50), new u.default(4, 51)), new a.default(28, new u.default(
						4, 22), new u.default(4, 23)), new a.default(24, new u.default(3, 12), new u.default(8, 13))), new d(12, Int32Array.from([6, 32,
						58
					]), new a.default(24, new u.default(2, 92), new u.default(2, 93)), new a.default(22, new u.default(6, 36), new u.default(2, 37)),
					new a.default(26, new u.default(4, 20), new u.default(6, 21)), new a.default(28, new u.default(7, 14), new u.default(4, 15))), new d(
					13, Int32Array.from([6, 34, 62]), new a.default(26, new u.default(4, 107)), new a.default(22, new u.default(8, 37), new u.default(
						1, 38)), new a.default(24, new u.default(8, 20), new u.default(4, 21)), new a.default(22, new u.default(12, 11), new u.default(4,
						12))), new d(14, Int32Array.from([6, 26, 46, 66]), new a.default(30, new u.default(3, 115), new u.default(1, 116)), new a.default(
					24, new u.default(4, 40), new u.default(5, 41)), new a.default(20, new u.default(11, 16), new u.default(5, 17)), new a.default(24,
					new u.default(11, 12), new u.default(5, 13))), new d(15, Int32Array.from([6, 26, 48, 70]), new a.default(22, new u.default(5, 87),
					new u.default(1, 88)), new a.default(24, new u.default(5, 41), new u.default(5, 42)), new a.default(30, new u.default(5, 24), new u
					.default(7, 25)), new a.default(24, new u.default(11, 12), new u.default(7, 13))), new d(16, Int32Array.from([6, 26, 50, 74]), new a
					.default(24, new u.default(5, 98), new u.default(1, 99)), new a.default(28, new u.default(7, 45), new u.default(3, 46)), new a.default(
						24, new u.default(15, 19), new u.default(2, 20)), new a.default(30, new u.default(3, 15), new u.default(13, 16))), new d(17,
					Int32Array.from([6, 30, 54, 78]), new a.default(28, new u.default(1, 107), new u.default(5, 108)), new a.default(28, new u.default(
						10, 46), new u.default(1, 47)), new a.default(28, new u.default(1, 22), new u.default(15, 23)), new a.default(28, new u.default(2,
						14), new u.default(17, 15))), new d(18, Int32Array.from([6, 30, 56, 82]), new a.default(30, new u.default(5, 120), new u.default(
					1, 121)), new a.default(26, new u.default(9, 43), new u.default(4, 44)), new a.default(28, new u.default(17, 22), new u.default(1,
					23)), new a.default(28, new u.default(2, 14), new u.default(19, 15))), new d(19, Int32Array.from([6, 30, 58, 86]), new a.default(
					28, new u.default(3, 113), new u.default(4, 114)), new a.default(26, new u.default(3, 44), new u.default(11, 45)), new a.default(
					26, new u.default(17, 21), new u.default(4, 22)), new a.default(26, new u.default(9, 13), new u.default(16, 14))), new d(20,
					Int32Array.from([6, 34, 62, 90]), new a.default(28, new u.default(3, 107), new u.default(5, 108)), new a.default(26, new u.default(
						3, 41), new u.default(13, 42)), new a.default(30, new u.default(15, 24), new u.default(5, 25)), new a.default(28, new u.default(
						15, 15), new u.default(10, 16))), new d(21, Int32Array.from([6, 28, 50, 72, 94]), new a.default(28, new u.default(4, 116), new u.default(
					4, 117)), new a.default(26, new u.default(17, 42)), new a.default(28, new u.default(17, 22), new u.default(6, 23)), new a.default(
					30, new u.default(19, 16), new u.default(6, 17))), new d(22, Int32Array.from([6, 26, 50, 74, 98]), new a.default(28, new u.default(
					2, 111), new u.default(7, 112)), new a.default(28, new u.default(17, 46)), new a.default(30, new u.default(7, 24), new u.default(
					16, 25)), new a.default(24, new u.default(34, 13))), new d(23, Int32Array.from([6, 30, 54, 78, 102]), new a.default(30, new u.default(
					4, 121), new u.default(5, 122)), new a.default(28, new u.default(4, 47), new u.default(14, 48)), new a.default(30, new u.default(
					11, 24), new u.default(14, 25)), new a.default(30, new u.default(16, 15), new u.default(14, 16))), new d(24, Int32Array.from([6,
						28, 54, 80, 106
					]), new a.default(30, new u.default(6, 117), new u.default(4, 118)), new a.default(28, new u.default(6, 45), new u.default(14, 46)),
					new a.default(30, new u.default(11, 24), new u.default(16, 25)), new a.default(30, new u.default(30, 16), new u.default(2, 17))),
				new d(25, Int32Array.from([6, 32, 58, 84, 110]), new a.default(26, new u.default(8, 106), new u.default(4, 107)), new a.default(28,
					new u.default(8, 47), new u.default(13, 48)), new a.default(30, new u.default(7, 24), new u.default(22, 25)), new a.default(30,
					new u.default(22, 15), new u.default(13, 16))), new d(26, Int32Array.from([6, 30, 58, 86, 114]), new a.default(28, new u.default(
					10, 114), new u.default(2, 115)), new a.default(28, new u.default(19, 46), new u.default(4, 47)), new a.default(28, new u.default(
					28, 22), new u.default(6, 23)), new a.default(30, new u.default(33, 16), new u.default(4, 17))), new d(27, Int32Array.from([6, 34,
						62, 90, 118
					]), new a.default(30, new u.default(8, 122), new u.default(4, 123)), new a.default(28, new u.default(22, 45), new u.default(3, 46)),
					new a.default(30, new u.default(8, 23), new u.default(26, 24)), new a.default(30, new u.default(12, 15), new u.default(28, 16))),
				new d(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new a.default(30, new u.default(3, 117), new u.default(10, 118)), new a.default(
					28, new u.default(3, 45), new u.default(23, 46)), new a.default(30, new u.default(4, 24), new u.default(31, 25)), new a.default(
					30, new u.default(11, 15), new u.default(31, 16))), new d(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new a.default(30, new u.default(
					7, 116), new u.default(7, 117)), new a.default(28, new u.default(21, 45), new u.default(7, 46)), new a.default(30, new u.default(
					1, 23), new u.default(37, 24)), new a.default(30, new u.default(19, 15), new u.default(26, 16))), new d(30, Int32Array.from([6, 26,
					52, 78, 104, 130
				]), new a.default(30, new u.default(5, 115), new u.default(10, 116)), new a.default(28, new u.default(19, 47), new u.default(10,
					48)), new a.default(30, new u.default(15, 24), new u.default(25, 25)), new a.default(30, new u.default(23, 15), new u.default(25,
					16))), new d(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new a.default(30, new u.default(13, 115), new u.default(3, 116)), new a
					.default(28, new u.default(2, 46), new u.default(29, 47)), new a.default(30, new u.default(42, 24), new u.default(1, 25)), new a.default(
						30, new u.default(23, 15), new u.default(28, 16))), new d(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new a.default(30, new u
					.default(17, 115)), new a.default(28, new u.default(10, 46), new u.default(23, 47)), new a.default(30, new u.default(10, 24), new u
					.default(35, 25)), new a.default(30, new u.default(19, 15), new u.default(35, 16))), new d(33, Int32Array.from([6, 30, 58, 86, 114,
					142
				]), new a.default(30, new u.default(17, 115), new u.default(1, 116)), new a.default(28, new u.default(14, 46), new u.default(21,
					47)), new a.default(30, new u.default(29, 24), new u.default(19, 25)), new a.default(30, new u.default(11, 15), new u.default(46,
					16))), new d(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new a.default(30, new u.default(13, 115), new u.default(6, 116)), new a
					.default(28, new u.default(14, 46), new u.default(23, 47)), new a.default(30, new u.default(44, 24), new u.default(7, 25)), new a.default(
						30, new u.default(59, 16), new u.default(1, 17))), new d(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new a.default(30,
					new u.default(12, 121), new u.default(7, 122)), new a.default(28, new u.default(12, 47), new u.default(26, 48)), new a.default(30,
					new u.default(39, 24), new u.default(14, 25)), new a.default(30, new u.default(22, 15), new u.default(41, 16))), new d(36,
					Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new a.default(30, new u.default(6, 121), new u.default(14, 122)), new a.default(
						28, new u.default(6, 47), new u.default(34, 48)), new a.default(30, new u.default(46, 24), new u.default(10, 25)), new a.default(
						30, new u.default(2, 15), new u.default(64, 16))), new d(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new a.default(30,
					new u.default(17, 122), new u.default(4, 123)), new a.default(28, new u.default(29, 46), new u.default(14, 47)), new a.default(30,
					new u.default(49, 24), new u.default(10, 25)), new a.default(30, new u.default(24, 15), new u.default(46, 16))), new d(38,
					Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new a.default(30, new u.default(4, 122), new u.default(18, 123)), new a.default(
						28, new u.default(13, 46), new u.default(32, 47)), new a.default(30, new u.default(48, 24), new u.default(14, 25)), new a.default(
						30, new u.default(42, 15), new u.default(32, 16))), new d(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new a.default(30,
					new u.default(20, 117), new u.default(4, 118)), new a.default(28, new u.default(40, 47), new u.default(7, 48)), new a.default(30,
					new u.default(43, 24), new u.default(22, 25)), new a.default(30, new u.default(10, 15), new u.default(67, 16))), new d(40,
					Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new a.default(30, new u.default(19, 118), new u.default(6, 119)), new a.default(
						28, new u.default(18, 47), new u.default(31, 48)), new a.default(30, new u.default(34, 24), new u.default(34, 25)), new a.default(
						30, new u.default(20, 15), new u.default(61, 16)))
			], d);

		function d(t, e) {
			for (var r, o, i = [], a = 2; a < arguments.length; a++) i[a - 2] = arguments[a];
			this.versionNumber = t, this.alignmentPatternCenters = e;
			var u = 0,
				s = (this.ecBlocks = i)[0].getECCodewordsPerBlock(),
				f = i[0].getECBlocks();
			try {
				for (var l = n(f), d = l.next(); !d.done; d = l.next()) {
					var c = d.value;
					u += c.getCount() * (c.getDataCodewords() + s)
				}
			} catch (t) {
				r = {
					error: t
				}
			} finally {
				try {
					d && !d.done && (o = l.return) && o.call(l)
				} finally {
					if (r) throw r.error
				}
			}
			this.totalCodewords = u
		}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.form = function (t, e) {
			var r = -1;
			return t.replace(/%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g, function (t, n, o, i, a, u) {
				if ("%%" === t) return "%";
				if (void 0 !== e[++r]) {
					t = i ? parseInt(i.substr(1)) : void 0;
					var s, f = a ? parseInt(a.substr(1)) : void 0;
					switch (u) {
					case "s":
						s = e[r];
						break;
					case "c":
						s = e[r][0];
						break;
					case "f":
						s = parseFloat(e[r]).toFixed(t);
						break;
					case "p":
						s = parseFloat(e[r]).toPrecision(t);
						break;
					case "e":
						s = parseFloat(e[r]).toExponential(t);
						break;
					case "x":
						s = parseInt(e[r]).toString(f || 16);
						break;
					case "d":
						s = parseFloat(parseInt(e[r], f || 10).toPrecision(t)).toFixed(0)
					}
					s = "object" == typeof s ? JSON.stringify(s) : (+s).toString(f);
					for (var l = parseInt(o), d = o && o[0] + "" == "0" ? "0" : " "; s.length < l;) s = void 0 !== n ? s + d : d + s;
					return s
				}
			})
		}, o.prototype.format = function (t) {
			for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
			this.buffer += o.form(t, e)
		}, o.prototype.toString = function () {
			return this.buffer
		}, o);

		function o() {
			this.buffer = ""
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(34),
			i = r(18),
			a = r(22),
			u = r(20),
			s = r(85),
			f = r(78),
			l = r(48),
			d = r(86),
			c = r(150),
			h = r(51),
			p = r(151),
			_ = r(23),
			g = r(152),
			v = r(52),
			w = (y.calculateMaskPenalty = function (t) {
				return d.default.applyMaskPenaltyRule1(t) + d.default.applyMaskPenaltyRule2(t) + d.default.applyMaskPenaltyRule3(t) + d.default.applyMaskPenaltyRule4(
					t)
			}, y.encode = function (t, e, r) {
				void 0 === r && (r = null);
				var n = y.DEFAULT_BYTE_MODE_ENCODING,
					u = null !== r && void 0 !== r.get(o.default.CHARACTER_SET);
				u && (n = r.get(o.default.CHARACTER_SET).toString());
				var s = this.chooseMode(t, n),
					d = new i.default;
				if (s === f.default.BYTE && (u || y.DEFAULT_BYTE_MODE_ENCODING !== n)) {
					var _ = a.default.getCharacterSetECIByName(n);
					void 0 !== _ && this.appendECI(_, d)
				}
				this.appendModeInfo(s, d);
				var g, w = new i.default;
				if (this.appendBytes(t, s, w, n), null !== r && void 0 !== r.get(o.default.QR_VERSION)) {
					var E = Number.parseInt(r.get(o.default.QR_VERSION).toString(), 10);
					g = l.default.getVersionForNumber(E);
					var A = this.calculateBitsNeeded(s, d, w, g);
					if (!this.willFit(A, g, e)) throw new v.default("Data too big for requested version")
				} else g = this.recommendVersion(e, s, d, w);
				var C = new i.default;
				C.appendBitArray(d);
				var m = s === f.default.BYTE ? w.getSizeInBytes() : t.length;
				this.appendLengthInfo(m, g, s, C), C.appendBitArray(w);
				var I = g.getECBlocksForLevel(e),
					S = g.getTotalCodewords() - I.getTotalECCodewords();
				this.terminateBits(S, C);
				var O = this.interleaveWithECBytes(C, g.getTotalCodewords(), S, I.getNumBlocks()),
					T = new h.default;
				T.setECLevel(e), T.setMode(s), T.setVersion(g);
				var R = g.getDimensionForVersion(),
					b = new c.default(R, R),
					N = this.chooseMaskPattern(O, e, g, b);
				return T.setMaskPattern(N), p.default.buildMatrix(O, e, g, N, b), T.setMatrix(b), T
			}, y.recommendVersion = function (t, e, r, n) {
				var o = this.calculateBitsNeeded(e, r, n, l.default.getVersionForNumber(1)),
					i = this.chooseVersion(o, t),
					a = this.calculateBitsNeeded(e, r, n, i);
				return this.chooseVersion(a, t)
			}, y.calculateBitsNeeded = function (t, e, r, n) {
				return e.getSize() + t.getCharacterCountBits(n) + r.getSize()
			}, y.getAlphanumericCode = function (t) {
				return t < y.ALPHANUMERIC_TABLE.length ? y.ALPHANUMERIC_TABLE[t] : -1
			}, y.chooseMode = function (t, e) {
				if (void 0 === e && (e = null), a.default.SJIS.getName() === e && this.isOnlyDoubleByteKanji(t)) return f.default.KANJI;
				for (var r = !1, n = !1, o = 0, i = t.length; o < i; ++o) {
					var u = t.charAt(o);
					if (y.isDigit(u)) r = !0;
					else {
						if (-1 === this.getAlphanumericCode(u.charCodeAt(0))) return f.default.BYTE;
						n = !0
					}
				}
				return n ? f.default.ALPHANUMERIC : r ? f.default.NUMERIC : f.default.BYTE
			}, y.isOnlyDoubleByteKanji = function (t) {
				var e;
				try {
					e = _.default.encode(t, a.default.SJIS)
				} catch (t) {
					return !1
				}
				var r = e.length;
				if (r % 2 != 0) return !1;
				for (var n = 0; n < r; n += 2) {
					var o = 255 & e[n];
					if ((o < 129 || 159 < o) && (o < 224 || 235 < o)) return !1
				}
				return !0
			}, y.chooseMaskPattern = function (t, e, r, n) {
				for (var o = Number.MAX_SAFE_INTEGER, i = -1, a = 0; a < h.default.NUM_MASK_PATTERNS; a++) {
					p.default.buildMatrix(t, e, r, a, n);
					var u = this.calculateMaskPenalty(n);
					u < o && (o = u, i = a)
				}
				return i
			}, y.chooseVersion = function (t, e) {
				for (var r = 1; r <= 40; r++) {
					var n = l.default.getVersionForNumber(r);
					if (y.willFit(t, n, e)) return n
				}
				throw new v.default("Data too big")
			}, y.willFit = function (t, e, r) {
				return (t + 7) / 8 <= e.getTotalCodewords() - e.getECBlocksForLevel(r).getTotalECCodewords()
			}, y.terminateBits = function (t, e) {
				var r = 8 * t;
				if (e.getSize() > r) throw new v.default("data bits cannot fit in the QR Code" + e.getSize() + " > " + r);
				for (var n = 0; n < 4 && e.getSize() < r; ++n) e.appendBit(!1);
				var o = 7 & e.getSize();
				if (0 < o)
					for (n = o; n < 8; n++) e.appendBit(!1);
				var i = t - e.getSizeInBytes();
				for (n = 0; n < i; ++n) e.appendBits(0 == (1 & n) ? 236 : 17, 8);
				if (e.getSize() !== r) throw new v.default("Bits size does not equal capacity")
			}, y.getNumDataBytesAndNumECBytesForBlockID = function (t, e, r, n, o, i) {
				if (r <= n) throw new v.default("Block ID too large");
				var a = t % r,
					u = r - a,
					s = Math.floor(t / r),
					f = s + 1,
					l = Math.floor(e / r),
					d = l + 1,
					c = s - l,
					h = f - d;
				if (c != h) throw new v.default("EC bytes mismatch");
				if (r !== u + a) throw new v.default("RS blocks mismatch");
				if (t !== (l + c) * u + (d + h) * a) throw new v.default("Total bytes mismatch");
				n < u ? (o[0] = l, i[0] = c) : (o[0] = d, i[0] = h)
			}, y.interleaveWithECBytes = function (t, e, r, o) {
				var a, u, s, f;
				if (t.getSizeInBytes() !== r) throw new v.default("Number of bits and data bytes does not match");
				for (var l = 0, d = 0, c = 0, h = new Array, p = 0; p < o; ++p) {
					var _ = new Int32Array(1),
						w = new Int32Array(1);
					y.getNumDataBytesAndNumECBytesForBlockID(e, r, o, p, _, w);
					var E = _[0],
						A = new Uint8Array(E);
					t.toBytes(8 * l, A, 0, E);
					var C = y.generateECBytes(A, w[0]);
					h.push(new g.default(A, C)), d = Math.max(d, E), c = Math.max(c, C.length), l += _[0]
				}
				if (r !== l) throw new v.default("Data bytes does not match offset");
				var m = new i.default;
				for (p = 0; p < d; ++p) try {
					for (var I = n(h), S = I.next(); !S.done; S = I.next()) p < (A = S.value.getDataBytes()).length && m.appendBits(A[p], 8)
				} catch (t) {
					a = {
						error: t
					}
				} finally {
					try {
						S && !S.done && (u = I.return) && u.call(I)
					} finally {
						if (a) throw a.error
					}
				}
				for (p = 0; p < c; ++p) try {
					for (var O = n(h), T = O.next(); !T.done; T = O.next()) p < (C = T.value.getErrorCorrectionBytes()).length && m.appendBits(C[p],
						8)
				} catch (t) {
					s = {
						error: t
					}
				} finally {
					try {
						T && !T.done && (f = O.return) && f.call(O)
					} finally {
						if (s) throw s.error
					}
				}
				if (e !== m.getSizeInBytes()) throw new v.default("Interleaving error: " + e + " and " + m.getSizeInBytes() + " differ.");
				return m
			}, y.generateECBytes = function (t, e) {
				for (var r = t.length, n = new Int32Array(r + e), o = 0; o < r; o++) n[o] = 255 & t[o];
				new s.default(u.default.QR_CODE_FIELD_256).encode(n, e);
				var i = new Uint8Array(e);
				for (o = 0; o < e; o++) i[o] = n[r + o];
				return i
			}, y.appendModeInfo = function (t, e) {
				e.appendBits(t.getBits(), 4)
			}, y.appendLengthInfo = function (t, e, r, n) {
				var o = r.getCharacterCountBits(e);
				if (1 << o <= t) throw new v.default(t + " is bigger than " + ((1 << o) - 1));
				n.appendBits(t, o)
			}, y.appendBytes = function (t, e, r, n) {
				switch (e) {
				case f.default.NUMERIC:
					y.appendNumericBytes(t, r);
					break;
				case f.default.ALPHANUMERIC:
					y.appendAlphanumericBytes(t, r);
					break;
				case f.default.BYTE:
					y.append8BitBytes(t, r, n);
					break;
				case f.default.KANJI:
					y.appendKanjiBytes(t, r);
					break;
				default:
					throw new v.default("Invalid mode: " + e)
				}
			}, y.getDigit = function (t) {
				return t.charCodeAt(0) - 48
			}, y.isDigit = function (t) {
				var e = y.getDigit(t);
				return 0 <= e && e <= 9
			}, y.appendNumericBytes = function (t, e) {
				for (var r = t.length, n = 0; n < r;) {
					var o = y.getDigit(t.charAt(n));
					if (n + 2 < r) {
						var i = y.getDigit(t.charAt(n + 1)),
							a = y.getDigit(t.charAt(n + 2));
						e.appendBits(100 * o + 10 * i + a, 10), n += 3
					} else n + 1 < r ? (i = y.getDigit(t.charAt(n + 1)), e.appendBits(10 * o + i, 7), n += 2) : (e.appendBits(o, 4), n++)
				}
			}, y.appendAlphanumericBytes = function (t, e) {
				for (var r = t.length, n = 0; n < r;) {
					var o = y.getAlphanumericCode(t.charCodeAt(n));
					if (-1 === o) throw new v.default;
					if (n + 1 < r) {
						var i = y.getAlphanumericCode(t.charCodeAt(n + 1));
						if (-1 === i) throw new v.default;
						e.appendBits(45 * o + i, 11), n += 2
					} else e.appendBits(o, 6), n++
				}
			}, y.append8BitBytes = function (t, e, r) {
				var n;
				try {
					n = _.default.encode(t, r)
				} catch (t) {
					throw new v.default(t)
				}
				for (var o = 0, i = n.length; o !== i; o++) {
					var a = n[o];
					e.appendBits(a, 8)
				}
			}, y.appendKanjiBytes = function (t, e) {
				var r;
				try {
					r = _.default.encode(t, a.default.SJIS)
				} catch (t) {
					throw new v.default(t)
				}
				for (var n = r.length, o = 0; o < n; o += 2) {
					var i = (255 & r[o]) << 8 & 4294967295 | 255 & r[o + 1],
						u = -1;
					if (33088 <= i && i <= 40956 ? u = i - 33088 : 57408 <= i && i <= 60351 && (u = i - 49472), -1 === u) throw new v.default(
						"Invalid byte sequence");
					var s = 192 * (u >> 8) + (255 & u);
					e.appendBits(s, 13)
				}
			}, y.appendECI = function (t, e) {
				e.appendBits(f.default.ECI.getBits(), 4), e.appendBits(t.getValue(), 8)
			}, y.ALPHANUMERIC_TABLE = Int32Array.from([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -
				1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1, -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3, 4, 5, 6, 7, 8,
				9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
				35, -1, -1, -1, -1, -1
			]), y.DEFAULT_BYTE_MODE_ENCODING = a.default.UTF8.getName(), y);

		function y() {}
		e.default = w
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(5),
			o = (i.prototype.getMode = function () {
				return this.mode
			}, i.prototype.getECLevel = function () {
				return this.ecLevel
			}, i.prototype.getVersion = function () {
				return this.version
			}, i.prototype.getMaskPattern = function () {
				return this.maskPattern
			}, i.prototype.getMatrix = function () {
				return this.matrix
			}, i.prototype.toString = function () {
				var t = new n.default;
				return t.append("<<\n"), t.append(" mode: "), t.append(this.mode ? this.mode.toString() : "null"), t.append("\n ecLevel: "), t.append(
					this.ecLevel ? this.ecLevel.toString() : "null"), t.append("\n version: "), t.append(this.version ? this.version.toString() :
					"null"), t.append("\n maskPattern: "), t.append(this.maskPattern.toString()), this.matrix ? (t.append("\n matrix:\n"), t.append(
					this.matrix.toString())) : t.append("\n matrix: null\n"), t.append(">>\n"), t.toString()
			}, i.prototype.setMode = function (t) {
				this.mode = t
			}, i.prototype.setECLevel = function (t) {
				this.ecLevel = t
			}, i.prototype.setVersion = function (t) {
				this.version = t
			}, i.prototype.setMaskPattern = function (t) {
				this.maskPattern = t
			}, i.prototype.setMatrix = function (t) {
				this.matrix = t
			}, i.isValidMaskPattern = function (t) {
				return 0 <= t && t < i.NUM_MASK_PATTERNS
			}, i.NUM_MASK_PATTERNS = 8, i);

		function i() {
			this.maskPattern = -1
		}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getNewPosition = function () {
			return this.newPosition
		}, o);

		function o(t) {
			this.newPosition = t
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
				value: !0
			}),
			function (t) {
				for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
			}(r(93));
		var n = r(36);
		e.ArgumentException = n.default;
		var o = r(40);
		e.ArithmeticException = o.default;
		var i = r(11);
		e.ChecksumException = i.default;
		var a = r(7);
		e.Exception = a.default;
		var u = r(2);
		e.FormatException = u.default;
		var s = r(1);
		e.IllegalArgumentException = s.default;
		var f = r(16);
		e.IllegalStateException = f.default;
		var l = r(0);
		e.NotFoundException = l.default;
		var d = r(84);
		e.ReaderException = d.default;
		var c = r(62);
		e.ReedSolomonException = c.default;
		var h = r(38);
		e.UnsupportedOperationException = h.default;
		var p = r(52);
		e.WriterException = p.default;
		var _ = r(3);
		e.BarcodeFormat = _.default;
		var g = r(58);
		e.Binarizer = g.default;
		var v = r(55);
		e.BinaryBitmap = v.default;
		var w = r(8);
		e.DecodeHintType = w.default;
		var y = r(24);
		e.InvertedLuminanceSource = y.default;
		var E = r(25);
		e.LuminanceSource = E.default;
		var A = r(75);
		e.MultiFormatReader = A.default;
		var C = r(153);
		e.MultiFormatWriter = C.default;
		var m = r(154);
		e.PlanarYUVLuminanceSource = m.default;
		var I = r(9);
		e.Result = I.default;
		var S = r(14);
		e.ResultMetadataType = S.default;
		var O = r(155);
		e.RGBLuminanceSource = O.default;
		var T = r(18);
		e.BitArray = T.default;
		var R = r(12);
		e.BitMatrix = R.default;
		var b = r(46);
		e.BitSource = b.default;
		var N = r(22);
		e.CharacterSetECI = N.default;
		var M = r(26);
		e.DecoderResult = M.default;
		var P = r(64);
		e.DefaultGridSampler = P.default;
		var D = r(30);
		e.DetectorResult = D.default;
		var B = r(34);
		e.EncodeHintType = B.default;
		var L = r(57);
		e.GlobalHistogramBinarizer = L.default;
		var F = r(65);
		e.GridSampler = F.default;
		var x = r(31);
		e.GridSamplerInstance = x.default;
		var k = r(56);
		e.HybridBinarizer = k.default;
		var V = r(42);
		e.PerspectiveTransform = V.default;
		var U = r(28);
		e.StringUtils = U.default;
		var H = r(10);
		e.MathUtils = H.default;
		var j = r(41);
		e.WhiteRectangleDetector = j.default;
		var G = r(20);
		e.GenericGF = G.default;
		var X = r(29);
		e.GenericGFPoly = X.default;
		var W = r(27);
		e.ReedSolomonDecoder = W.default;
		var z = r(85);
		e.ReedSolomonEncoder = z.default;
		var Y = r(45);
		e.DataMatrixReader = Y.default;
		var Z = r(47);
		e.QRCodeReader = Z.default;
		var K = r(87);
		e.QRCodeWriter = K.default;
		var q = r(33);
		e.QRCodeDecoderErrorCorrectionLevel = q.default;
		var Q = r(50);
		e.QRCodeEncoder = Q.default;
		var J = r(51);
		e.QRCodeEncoderQRCode = J.default;
		var $ = r(39);
		e.AztecCodeReader = $.default;
		var tt = r(15);
		e.OneDReader = tt.default;
		var et = r(73);
		e.EAN13Reader = et.default;
		var rt = r(67);
		e.Code128Reader = rt.default;
		var nt = r(72);
		e.ITFReader = nt.default;
		var ot = r(66);
		e.Code39Reader = ot.default;
		var it = r(68);
		e.RSS14Reader = it.default;
		var at = r(156);
		e.RSSExpandedReader = at.default;
		var ut = r(43);
		e.MultiformatReader = ut.default
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(1),
			o = (i.prototype.getWidth = function () {
				return this.binarizer.getWidth()
			}, i.prototype.getHeight = function () {
				return this.binarizer.getHeight()
			}, i.prototype.getBlackRow = function (t, e) {
				return this.binarizer.getBlackRow(t, e)
			}, i.prototype.getBlackMatrix = function () {
				return null !== this.matrix && void 0 !== this.matrix || (this.matrix = this.binarizer.getBlackMatrix()), this.matrix
			}, i.prototype.isCropSupported = function () {
				return this.binarizer.getLuminanceSource().isCropSupported()
			}, i.prototype.crop = function (t, e, r, n) {
				var o = this.binarizer.getLuminanceSource().crop(t, e, r, n);
				return new i(this.binarizer.createBinarizer(o))
			}, i.prototype.isRotateSupported = function () {
				return this.binarizer.getLuminanceSource().isRotateSupported()
			}, i.prototype.rotateCounterClockwise = function () {
				var t = this.binarizer.getLuminanceSource().rotateCounterClockwise();
				return new i(this.binarizer.createBinarizer(t))
			}, i.prototype.rotateCounterClockwise45 = function () {
				var t = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
				return new i(this.binarizer.createBinarizer(t))
			}, i.prototype.toString = function () {
				try {
					return this.getBlackMatrix().toString()
				} catch (t) {
					return ""
				}
			}, i);

		function i(t) {
			if (null === (this.binarizer = t)) throw new n.default("Binarizer must be non-null.")
		}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(57),
			u = r(12),
			s = (o(f, i = a.default), f.prototype.getBlackMatrix = function () {
					if (null !== this.matrix) return this.matrix;
					var t = this.getLuminanceSource(),
						e = t.getWidth(),
						r = t.getHeight();
					if (f.MINIMUM_DIMENSION <= e && f.MINIMUM_DIMENSION <= r) {
						var n = t.getMatrix(),
							o = e >> f.BLOCK_SIZE_POWER;
						0 != (e & f.BLOCK_SIZE_MASK) && o++;
						var a = r >> f.BLOCK_SIZE_POWER;
						0 != (r & f.BLOCK_SIZE_MASK) && a++;
						var s = f.calculateBlackPoints(n, o, a, e, r),
							l = new u.default(e, r);
						f.calculateThresholdForBlock(n, o, a, e, r, s, l), this.matrix = l
					} else this.matrix = i.prototype.getBlackMatrix.call(this);
					return this.matrix
				}, f.prototype.createBinarizer = function (t) {
					return new f(t)
				}, f.calculateThresholdForBlock = function (t, e, r, n, o, i, a) {
					for (var u = o - f.BLOCK_SIZE, s = n - f.BLOCK_SIZE, l = 0; l < r; l++) {
						var d = l << f.BLOCK_SIZE_POWER;
						u < d && (d = u);
						for (var c = f.cap(l, 2, r - 3), h = 0; h < e; h++) {
							var p = h << f.BLOCK_SIZE_POWER;
							s < p && (p = s);
							for (var _ = f.cap(h, 2, e - 3), g = 0, v = -2; v <= 2; v++) {
								var w = i[c + v];
								g += w[_ - 2] + w[_ - 1] + w[_] + w[_ + 1] + w[_ + 2]
							}
							f.thresholdBlock(t, p, d, g / 25, n, a)
						}
					}
				}, f.cap = function (t, e, r) {
					return t < e ? e : r < t ? r : t
				}, f.thresholdBlock = function (t, e, r, n, o, i) {
					for (var a = 0, u = r * o + e; a < f.BLOCK_SIZE; a++, u += o)
						for (var s = 0; s < f.BLOCK_SIZE; s++)(255 & t[u + s]) <= n && i.set(e + s, r + a)
				}, f.calculateBlackPoints = function (t, e, r, n, o) {
					for (var i = o - f.BLOCK_SIZE, a = n - f.BLOCK_SIZE, u = new Array(r), s = 0; s < r; s++) {
						u[s] = new Int32Array(e);
						var l = s << f.BLOCK_SIZE_POWER;
						i < l && (l = i);
						for (var d = 0; d < e; d++) {
							var c = d << f.BLOCK_SIZE_POWER;
							a < c && (c = a);
							for (var h = 0, p = 255, _ = 0, g = 0, v = l * n + c; g < f.BLOCK_SIZE; g++, v += n) {
								for (var w = 0; w < f.BLOCK_SIZE; w++) {
									var y = 255 & t[v + w];
									h += y, y < p && (p = y), _ < y && (_ = y)
								}
								if (f.MIN_DYNAMIC_RANGE < _ - p)
									for (g++, v += n; g < f.BLOCK_SIZE; g++, v += n)
										for (w = 0; w < f.BLOCK_SIZE; w++) h += 255 & t[v + w]
							}
							var E = h >> 2 * f.BLOCK_SIZE_POWER;
							if (_ - p <= f.MIN_DYNAMIC_RANGE && (E = p / 2, 0 < s && 0 < d)) {
								var A = (u[s - 1][d] + 2 * u[s][d - 1] + u[s - 1][d - 1]) / 4;
								p < A && (E = A)
							}
							u[s][d] = E
						}
					}
					return u
				}, f.BLOCK_SIZE_MASK = (f.BLOCK_SIZE = 1 << (f.BLOCK_SIZE_POWER = 3)) - 1, f.MINIMUM_DIMENSION = 5 * f.BLOCK_SIZE, f.MIN_DYNAMIC_RANGE =
				24, f);

		function f(t) {
			var e = i.call(this, t) || this;
			return e.matrix = null, e
		}
		e.default = s
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(58),
			u = r(18),
			s = r(12),
			f = r(0),
			l = (o(d, i = a.default), d.prototype.getBlackRow = function (t, e) {
					var r = this.getLuminanceSource(),
						n = r.getWidth();
					null == e || e.getSize() < n ? e = new u.default(n) : e.clear(), this.initArrays(n);
					for (var o = r.getRow(t, this.luminances), i = this.buckets, a = 0; a < n; a++) i[(255 & o[a]) >> d.LUMINANCE_SHIFT]++;
					var s = d.estimateBlackPoint(i);
					if (n < 3)
						for (a = 0; a < n; a++)(255 & o[a]) < s && e.set(a);
					else {
						var f = 255 & o[0],
							l = 255 & o[1];
						for (a = 1; a < n - 1; a++) {
							var c = 255 & o[a + 1];
							(4 * l - f - c) / 2 < s && e.set(a), f = l, l = c
						}
					}
					return e
				}, d.prototype.getBlackMatrix = function () {
					var t = this.getLuminanceSource(),
						e = t.getWidth(),
						r = t.getHeight(),
						n = new s.default(e, r);
					this.initArrays(e);
					for (var o = this.buckets, i = 1; i < 5; i++)
						for (var a = Math.floor(r * i / 5), u = t.getRow(a, this.luminances), f = Math.floor(4 * e / 5), l = Math.floor(e / 5); l < f; l++)
							o[(255 & u[l]) >> d.LUMINANCE_SHIFT]++;
					var c = d.estimateBlackPoint(o),
						h = t.getMatrix();
					for (i = 0; i < r; i++) {
						var p = i * e;
						for (l = 0; l < e; l++)(255 & h[p + l]) < c && n.set(l, i)
					}
					return n
				}, d.prototype.createBinarizer = function (t) {
					return new d(t)
				}, d.prototype.initArrays = function (t) {
					this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
					for (var e = this.buckets, r = 0; r < d.LUMINANCE_BUCKETS; r++) e[r] = 0
				}, d.estimateBlackPoint = function (t) {
					for (var e = t.length, r = 0, n = 0, o = 0, i = 0; i < e; i++) t[i] > o && (o = t[n = i]), t[i] > r && (r = t[i]);
					var a = 0,
						u = 0;
					for (i = 0; i < e; i++) {
						var s = i - n;
						u < (p = t[i] * s * s) && (a = i, u = p)
					}
					if (a < n) {
						var l = n;
						n = a, a = l
					}
					if (a - n <= e / 16) throw new f.default;
					var c = a - 1,
						h = -1;
					for (i = a - 1; n < i; i--) {
						var p, _ = i - n;
						h < (p = _ * _ * (a - i) * (r - t[i])) && (c = i, h = p)
					}
					return c << d.LUMINANCE_SHIFT
				}, d.LUMINANCE_SHIFT = 8 - (d.LUMINANCE_BITS = 5), d.LUMINANCE_BUCKETS = 1 << d.LUMINANCE_BITS, d.EMPTY = Uint8ClampedArray.from([0]),
				d);

		function d(t) {
			var e = i.call(this, t) || this;
			return e.luminances = d.EMPTY, e.buckets = new Int32Array(d.LUMINANCE_BUCKETS), e
		}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getLuminanceSource = function () {
			return this.source
		}, o.prototype.getWidth = function () {
			return this.source.getWidth()
		}, o.prototype.getHeight = function () {
			return this.source.getHeight()
		}, o);

		function o(t) {
			this.source = t
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(24),
			u = r(25),
			s = r(1),
			f = (o(l, i = u.default), l.makeBufferFromCanvasImageData = function (t) {
				var e = t.getContext("2d").getImageData(0, 0, t.width, t.height);
				return l.toGrayscaleBuffer(e.data, t.width, t.height)
			}, l.toGrayscaleBuffer = function (t, e, r) {
				for (var n = new Uint8ClampedArray(e * r), o = 0, i = 0, a = t.length; o < a; o += 4, i++) {
					var u;
					u = 0 === t[o + 3] ? 255 : 306 * t[o] + 601 * t[o + 1] + 117 * t[o + 2] + 512 >> 10, n[i] = u
				}
				return n
			}, l.prototype.getRow = function (t, e) {
				if (t < 0 || t >= this.getHeight()) throw new s.default("Requested row is outside the image: " + t);
				var r = this.getWidth(),
					n = t * r;
				return null === e ? e = this.buffer.slice(n, n + r) : (e.length < r && (e = new Uint8ClampedArray(r)), e.set(this.buffer.slice(n, n +
					r))), e
			}, l.prototype.getMatrix = function () {
				return this.buffer
			}, l.prototype.isCropSupported = function () {
				return !0
			}, l.prototype.crop = function (t, e, r, n) {
				return this.crop(t, e, r, n), this
			}, l.prototype.isRotateSupported = function () {
				return !0
			}, l.prototype.rotateCounterClockwise = function () {
				return this.rotate(-90), this
			}, l.prototype.rotateCounterClockwise45 = function () {
				return this.rotate(-45), this
			}, l.prototype.getTempCanvasElement = function () {
				if (null === this.tempCanvasElement) {
					var t = this.canvas.ownerDocument.createElement("canvas");
					t.width = this.canvas.width, t.height = this.canvas.height, this.tempCanvasElement = t
				}
				return this.tempCanvasElement
			}, l.prototype.rotate = function (t) {
				var e = this.getTempCanvasElement(),
					r = e.getContext("2d"),
					n = t * l.DEGREE_TO_RADIANS,
					o = this.canvas.width,
					i = this.canvas.height,
					a = Math.ceil(Math.abs(Math.cos(n)) * o + Math.abs(Math.sin(n)) * i),
					u = Math.ceil(Math.abs(Math.sin(n)) * o + Math.abs(Math.cos(n)) * i);
				return e.width = a, e.height = u, r.translate(a / 2, u / 2), r.rotate(n), r.drawImage(this.canvas, o / -2, i / -2), this.buffer = l
					.makeBufferFromCanvasImageData(e), this
			}, l.prototype.invert = function () {
				return new a.default(this)
			}, l.DEGREE_TO_RADIANS = Math.PI / 180, l);

		function l(t) {
			var e = i.call(this, t.width, t.height) || this;
			return e.canvas = t, e.tempCanvasElement = null, e.buffer = l.makeBufferFromCanvasImageData(t), e
		}
		e.HTMLCanvasElementLuminanceSource = f
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.toJSON = function () {
			return {
				kind: this.kind,
				groupId: this.groupId,
				deviceId: this.deviceId,
				label: this.label
			}
		}, o);

		function o(t, e, r) {
			this.deviceId = t, this.label = e, this.kind = "videoinput", this.groupId = r || void 0
		}
		e.VideoInputDevice = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(1),
			o = (i.prototype.exp = function (t) {
				return this.expTable[t]
			}, i.prototype.log = function (t) {
				if (0 === t) throw new n.default;
				return this.logTable[t]
			}, i.addOrSubtract = function (t, e) {
				return t ^ e
			}, i);

		function i() {}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.floatToIntBits = function (t) {
			return t
		}, o.MAX_VALUE = Number.MAX_SAFE_INTEGER, o);

		function o() {}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(65),
			u = r(12),
			s = r(42),
			f = r(0),
			l = (o(d, i = a.default), d.prototype.sampleGrid = function (t, e, r, n, o, i, a, u, f, l, d, c, h, p, _, g, v, w, y) {
				var E = s.default.quadrilateralToQuadrilateral(n, o, i, a, u, f, l, d, c, h, p, _, g, v, w, y);
				return this.sampleGridWithTransform(t, e, r, E)
			}, d.prototype.sampleGridWithTransform = function (t, e, r, n) {
				if (e <= 0 || r <= 0) throw new f.default;
				for (var o = new u.default(e, r), i = new Float32Array(2 * e), s = 0; s < r; s++) {
					for (var l = i.length, d = s + .5, c = 0; c < l; c += 2) i[c] = c / 2 + .5, i[c + 1] = d;
					n.transformPoints(i), a.default.checkAndNudgePoints(t, i);
					try {
						for (c = 0; c < l; c += 2) t.get(Math.floor(i[c]), Math.floor(i[c + 1])) && o.set(c / 2, s)
					} catch (t) {
						throw new f.default
					}
				}
				return o
			}, d);

		function d() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(0),
			o = (i.checkAndNudgePoints = function (t, e) {
				for (var r = t.getWidth(), o = t.getHeight(), i = !0, a = 0; a < e.length && i; a += 2) {
					var u = Math.floor(e[a]),
						s = Math.floor(e[a + 1]);
					if (u < -1 || r < u || s < -1 || o < s) throw new n.default;
					i = !1, -1 === u ? i = !(e[a] = 0) : u === r && (e[a] = r - 1, i = !0), -1 === s ? i = !(e[a + 1] = 0) : s === o && (e[a + 1] = o -
						1, i = !0)
				}
				for (i = !0, a = e.length - 2; 0 <= a && i; a -= 2) {
					if (u = Math.floor(e[a]), s = Math.floor(e[a + 1]), u < -1 || r < u || s < -1 || o < s) throw new n.default;
					i = !1, -1 === u ? i = !(e[a] = 0) : u === r && (e[a] = r - 1, i = !0), -1 === s ? i = !(e[a + 1] = 0) : s === o && (e[a + 1] = o -
						1, i = !0)
				}
			}, i);

		function i() {}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
			}, function (t, e) {
				function r() {
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
			}),
			i = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, u = r(3),
			s = r(11),
			f = r(2),
			l = r(0),
			d = r(15),
			c = r(9),
			h = r(4),
			p = (o(_, a = d.default), _.prototype.decodeRow = function (t, e, r) {
				var n, o, a, f, d = this.counters;
				d.fill(0), this.decodeRowResult = "";
				var p, g, v = _.findAsteriskPattern(e, d),
					w = e.getNextSet(v[1]),
					y = e.getSize();
				do {
					_.recordPattern(e, w, d);
					var E = _.toNarrowWidePattern(d);
					if (E < 0) throw new l.default;
					p = _.patternToChar(E), this.decodeRowResult += p, g = w;
					try {
						for (var A = i(d), C = A.next(); !C.done; C = A.next()) w += C.value
					} catch (t) {
						n = {
							error: t
						}
					} finally {
						try {
							C && !C.done && (o = A.return) && o.call(A)
						} finally {
							if (n) throw n.error
						}
					}
					w = e.getNextSet(w)
				} while ("*" !== p);
				this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
				var m, I = 0;
				try {
					for (var S = i(d), O = S.next(); !O.done; O = S.next()) I += O.value
				} catch (t) {
					a = {
						error: t
					}
				} finally {
					try {
						O && !O.done && (f = S.return) && f.call(S)
					} finally {
						if (a) throw a.error
					}
				}
				if (w !== y && 2 * (w - g - I) < I) throw new l.default;
				if (this.usingCheckDigit) {
					for (var T = this.decodeRowResult.length - 1, R = 0, b = 0; b < T; b++) R += _.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(
						b));
					if (this.decodeRowResult.charAt(T) !== _.ALPHABET_STRING.charAt(R % 43)) throw new s.default;
					this.decodeRowResult = this.decodeRowResult.substring(0, T)
				}
				if (0 === this.decodeRowResult.length) throw new l.default;
				m = this.extendedMode ? _.decodeExtended(this.decodeRowResult) : this.decodeRowResult;
				var N = (v[1] + v[0]) / 2,
					M = g + I / 2;
				return new c.default(m, null, 0, [new h.default(N, t), new h.default(M, t)], u.default.CODE_39, (new Date).getTime())
			}, _.findAsteriskPattern = function (t, e) {
				for (var r = t.getSize(), n = t.getNextSet(0), o = 0, i = n, a = !1, u = e.length, s = n; s < r; s++)
					if (t.get(s) !== a) e[o]++;
					else {
						if (o === u - 1) {
							if (this.toNarrowWidePattern(e) === _.ASTERISK_ENCODING && t.isRange(Math.max(0, i - Math.floor((s - i) / 2)), i, !1)) return [i,
								s
							];
							i += e[0] + e[1], e.copyWithin(0, 2, 2 + o - 1), e[o - 1] = 0, e[o] = 0, o--
						} else o++;
						e[o] = 1, a = !a
					}
				throw new l.default
			}, _.toNarrowWidePattern = function (t) {
				var e, r, n, o = t.length,
					a = 0;
				do {
					var u = 2147483647;
					try {
						for (var s = i(t), f = s.next(); !f.done; f = s.next())(h = f.value) < u && a < h && (u = h)
					} catch (t) {
						e = {
							error: t
						}
					} finally {
						try {
							f && !f.done && (r = s.return) && r.call(s)
						} finally {
							if (e) throw e.error
						}
					}
					a = u;
					for (var l = n = 0, d = 0, c = 0; c < o; c++) a < (h = t[c]) && (d |= 1 << o - 1 - c, n++, l += h);
					if (3 === n) {
						for (c = 0; c < o && 0 < n; c++) {
							var h;
							if (a < (h = t[c]) && (n--, l <= 2 * h)) return -1
						}
						return d
					}
				} while (3 < n);
				return -1
			}, _.patternToChar = function (t) {
				for (var e = 0; e < _.CHARACTER_ENCODINGS.length; e++)
					if (_.CHARACTER_ENCODINGS[e] === t) return _.ALPHABET_STRING.charAt(e);
				if (t === _.ASTERISK_ENCODING) return "*";
				throw new l.default
			}, _.decodeExtended = function (t) {
				for (var e = t.length, r = "", n = 0; n < e; n++) {
					var o = t.charAt(n);
					if ("+" === o || "$" === o || "%" === o || "/" === o) {
						var i = t.charAt(n + 1),
							a = "\0";
						switch (o) {
						case "+":
							if (!("A" <= i && i <= "Z")) throw new f.default;
							a = String.fromCharCode(i.charCodeAt(0) + 32);
							break;
						case "$":
							if (!("A" <= i && i <= "Z")) throw new f.default;
							a = String.fromCharCode(i.charCodeAt(0) - 64);
							break;
						case "%":
							if ("A" <= i && i <= "E") a = String.fromCharCode(i.charCodeAt(0) - 38);
							else if ("F" <= i && i <= "J") a = String.fromCharCode(i.charCodeAt(0) - 11);
							else if ("K" <= i && i <= "O") a = String.fromCharCode(i.charCodeAt(0) + 16);
							else if ("P" <= i && i <= "T") a = String.fromCharCode(i.charCodeAt(0) + 43);
							else if ("U" === i) a = "\0";
							else if ("V" === i) a = "@";
							else if ("W" === i) a = "`";
							else {
								if ("X" !== i && "Y" !== i && "Z" !== i) throw new f.default;
								a = ""
							}
							break;
						case "/":
							if ("A" <= i && i <= "O") a = String.fromCharCode(i.charCodeAt(0) - 32);
							else {
								if ("Z" !== i) throw new f.default;
								a = ":"
							}
						}
						r += a, n++
					} else r += o
				}
				return r
			}, _.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", _.CHARACTER_ENCODINGS = [52, 289, 97, 352, 49, 304, 112, 37,
				292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133,
				388, 196, 168, 162, 138, 42
			], _.ASTERISK_ENCODING = 148, _);

		function _(t, e) {
			void 0 === t && (t = !1), void 0 === e && (e = !1);
			var r = a.call(this) || this;
			return r.usingCheckDigit = t, r.extendedMode = e, r.decodeRowResult = "", r.counters = new Array(9), r
		}
		e.default = p
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(3),
			u = r(8),
			s = r(9),
			f = r(4),
			l = r(15),
			d = r(0),
			c = r(2),
			h = r(11),
			p = (o(_, i = l.default), _.findStartPattern = function (t) {
					for (var e = t.getSize(), r = t.getNextSet(0), n = 0, o = [0, 0, 0, 0, 0, 0], i = r, a = !1, u = r; u < e; u++)
						if (t.get(u) !== a) o[n]++;
						else {
							if (5 === n) {
								for (var s = _.MAX_AVG_VARIANCE, f = -1, c = _.CODE_START_A; c <= _.CODE_START_C; c++) {
									var h = l.default.patternMatchVariance(o, _.CODE_PATTERNS[c], _.MAX_INDIVIDUAL_VARIANCE);
									h < s && (s = h, f = c)
								}
								if (0 <= f && t.isRange(Math.max(0, i - (u - i) / 2), i, !1)) return [i, u, f];
								i += o[0] + o[1], o.splice(0, 2), o[n - 1] = 0, o[n] = 0, n--
							} else n++;
							o[n] = 1, a = !a
						}
					throw new d.default
				}, _.decodeCode = function (t, e, r) {
					l.default.recordPattern(t, r, e);
					for (var n = _.MAX_AVG_VARIANCE, o = -1, i = 0; i < _.CODE_PATTERNS.length; i++) {
						var a = _.CODE_PATTERNS[i],
							u = this.patternMatchVariance(e, a, _.MAX_INDIVIDUAL_VARIANCE);
						u < n && (n = u, o = i)
					}
					if (0 <= o) return o;
					throw new d.default
				}, _.prototype.decodeRow = function (t, e, r) {
					var n, o = r && !0 === r.get(u.default.ASSUME_GS1),
						i = _.findStartPattern(e),
						l = i[2],
						p = 0,
						g = new Uint8Array(20);
					switch (g[p++] = l) {
					case _.CODE_START_A:
						n = _.CODE_CODE_A;
						break;
					case _.CODE_START_B:
						n = _.CODE_CODE_B;
						break;
					case _.CODE_START_C:
						n = _.CODE_CODE_C;
						break;
					default:
						throw new c.default
					}
					for (var v = !1, w = !1, y = "", E = i[0], A = i[1], C = [0, 0, 0, 0, 0, 0], m = 0, I = 0, S = l, O = 0, T = !0, R = !1, b = !1; !v;) {
						var N = w;
						switch (w = !1, m = I, I = _.decodeCode(e, C, A), (g[p++] = I) !== _.CODE_STOP && (T = !0), I !== _.CODE_STOP && (S += ++O * I), E =
							A, A += C.reduce(function (t, e) {
								return t + e
							}, 0), I) {
						case _.CODE_START_A:
						case _.CODE_START_B:
						case _.CODE_START_C:
							throw new c.default
						}
						switch (n) {
						case _.CODE_CODE_A:
							if (I < 64) y += b === R ? String.fromCharCode(" ".charCodeAt(0) + I) : String.fromCharCode(" ".charCodeAt(0) + I + 128), b = !1;
							else if (I < 96) y += b === R ? String.fromCharCode(I - 64) : String.fromCharCode(I + 64), b = !1;
							else switch (I !== _.CODE_STOP && (T = !1), I) {
							case _.CODE_FNC_1:
								o && (0 === y.length ? y += "]C1" : y += String.fromCharCode(29));
								break;
							case _.CODE_FNC_2:
							case _.CODE_FNC_3:
								break;
							case _.CODE_FNC_4_A:
								b = !R && b ? !(R = !0) : !R || !b || (R = !1);
								break;
							case _.CODE_SHIFT:
								w = !0, n = _.CODE_CODE_B;
								break;
							case _.CODE_CODE_B:
								n = _.CODE_CODE_B;
								break;
							case _.CODE_CODE_C:
								n = _.CODE_CODE_C;
								break;
							case _.CODE_STOP:
								v = !0
							}
							break;
						case _.CODE_CODE_B:
							if (I < 96) y += b === R ? String.fromCharCode(" ".charCodeAt(0) + I) : String.fromCharCode(" ".charCodeAt(0) + I + 128), b = !1;
							else switch (I !== _.CODE_STOP && (T = !1), I) {
							case _.CODE_FNC_1:
								o && (0 === y.length ? y += "]C1" : y += String.fromCharCode(29));
								break;
							case _.CODE_FNC_2:
							case _.CODE_FNC_3:
								break;
							case _.CODE_FNC_4_B:
								b = !R && b ? !(R = !0) : !R || !b || (R = !1);
								break;
							case _.CODE_SHIFT:
								w = !0, n = _.CODE_CODE_A;
								break;
							case _.CODE_CODE_A:
								n = _.CODE_CODE_A;
								break;
							case _.CODE_CODE_C:
								n = _.CODE_CODE_C;
								break;
							case _.CODE_STOP:
								v = !0
							}
							break;
						case _.CODE_CODE_C:
							if (I < 100) I < 10 && (y += "0"), y += I;
							else switch (I !== _.CODE_STOP && (T = !1), I) {
							case _.CODE_FNC_1:
								o && (0 === y.length ? y += "]C1" : y += String.fromCharCode(29));
								break;
							case _.CODE_CODE_A:
								n = _.CODE_CODE_A;
								break;
							case _.CODE_CODE_B:
								n = _.CODE_CODE_B;
								break;
							case _.CODE_STOP:
								v = !0
							}
						}
						N && (n = n === _.CODE_CODE_A ? _.CODE_CODE_B : _.CODE_CODE_A)
					}
					var M = A - E;
					if (A = e.getNextUnset(A), !e.isRange(A, Math.min(e.getSize(), A + (A - E) / 2), !1)) throw new d.default;
					if ((S -= O * m) % 103 !== m) throw new h.default;
					var P = y.length;
					if (0 === P) throw new d.default;
					0 < P && T && (y = n === _.CODE_CODE_C ? y.substring(0, P - 2) : y.substring(0, P - 1));
					for (var D = (i[1] + i[0]) / 2, B = E + M / 2, L = g.length, F = new Uint8Array(L), x = 0; x < L; x++) F[x] = g[x];
					var k = [new f.default(D, t), new f.default(B, t)];
					return new s.default(y, F, 0, k, a.default.CODE_128, (new Date).getTime())
				}, _.CODE_PATTERNS = [
					[2, 1, 2, 2, 2, 2],
					[2, 2, 2, 1, 2, 2],
					[2, 2, 2, 2, 2, 1],
					[1, 2, 1, 2, 2, 3],
					[1, 2, 1, 3, 2, 2],
					[1, 3, 1, 2, 2, 2],
					[1, 2, 2, 2, 1, 3],
					[1, 2, 2, 3, 1, 2],
					[1, 3, 2, 2, 1, 2],
					[2, 2, 1, 2, 1, 3],
					[2, 2, 1, 3, 1, 2],
					[2, 3, 1, 2, 1, 2],
					[1, 1, 2, 2, 3, 2],
					[1, 2, 2, 1, 3, 2],
					[1, 2, 2, 2, 3, 1],
					[1, 1, 3, 2, 2, 2],
					[1, 2, 3, 1, 2, 2],
					[1, 2, 3, 2, 2, 1],
					[2, 2, 3, 2, 1, 1],
					[2, 2, 1, 1, 3, 2],
					[2, 2, 1, 2, 3, 1],
					[2, 1, 3, 2, 1, 2],
					[2, 2, 3, 1, 1, 2],
					[3, 1, 2, 1, 3, 1],
					[3, 1, 1, 2, 2, 2],
					[3, 2, 1, 1, 2, 2],
					[3, 2, 1, 2, 2, 1],
					[3, 1, 2, 2, 1, 2],
					[3, 2, 2, 1, 1, 2],
					[3, 2, 2, 2, 1, 1],
					[2, 1, 2, 1, 2, 3],
					[2, 1, 2, 3, 2, 1],
					[2, 3, 2, 1, 2, 1],
					[1, 1, 1, 3, 2, 3],
					[1, 3, 1, 1, 2, 3],
					[1, 3, 1, 3, 2, 1],
					[1, 1, 2, 3, 1, 3],
					[1, 3, 2, 1, 1, 3],
					[1, 3, 2, 3, 1, 1],
					[2, 1, 1, 3, 1, 3],
					[2, 3, 1, 1, 1, 3],
					[2, 3, 1, 3, 1, 1],
					[1, 1, 2, 1, 3, 3],
					[1, 1, 2, 3, 3, 1],
					[1, 3, 2, 1, 3, 1],
					[1, 1, 3, 1, 2, 3],
					[1, 1, 3, 3, 2, 1],
					[1, 3, 3, 1, 2, 1],
					[3, 1, 3, 1, 2, 1],
					[2, 1, 1, 3, 3, 1],
					[2, 3, 1, 1, 3, 1],
					[2, 1, 3, 1, 1, 3],
					[2, 1, 3, 3, 1, 1],
					[2, 1, 3, 1, 3, 1],
					[3, 1, 1, 1, 2, 3],
					[3, 1, 1, 3, 2, 1],
					[3, 3, 1, 1, 2, 1],
					[3, 1, 2, 1, 1, 3],
					[3, 1, 2, 3, 1, 1],
					[3, 3, 2, 1, 1, 1],
					[3, 1, 4, 1, 1, 1],
					[2, 2, 1, 4, 1, 1],
					[4, 3, 1, 1, 1, 1],
					[1, 1, 1, 2, 2, 4],
					[1, 1, 1, 4, 2, 2],
					[1, 2, 1, 1, 2, 4],
					[1, 2, 1, 4, 2, 1],
					[1, 4, 1, 1, 2, 2],
					[1, 4, 1, 2, 2, 1],
					[1, 1, 2, 2, 1, 4],
					[1, 1, 2, 4, 1, 2],
					[1, 2, 2, 1, 1, 4],
					[1, 2, 2, 4, 1, 1],
					[1, 4, 2, 1, 1, 2],
					[1, 4, 2, 2, 1, 1],
					[2, 4, 1, 2, 1, 1],
					[2, 2, 1, 1, 1, 4],
					[4, 1, 3, 1, 1, 1],
					[2, 4, 1, 1, 1, 2],
					[1, 3, 4, 1, 1, 1],
					[1, 1, 1, 2, 4, 2],
					[1, 2, 1, 1, 4, 2],
					[1, 2, 1, 2, 4, 1],
					[1, 1, 4, 2, 1, 2],
					[1, 2, 4, 1, 1, 2],
					[1, 2, 4, 2, 1, 1],
					[4, 1, 1, 2, 1, 2],
					[4, 2, 1, 1, 1, 2],
					[4, 2, 1, 2, 1, 1],
					[2, 1, 2, 1, 4, 1],
					[2, 1, 4, 1, 2, 1],
					[4, 1, 2, 1, 2, 1],
					[1, 1, 1, 1, 4, 3],
					[1, 1, 1, 3, 4, 1],
					[1, 3, 1, 1, 4, 1],
					[1, 1, 4, 1, 1, 3],
					[1, 1, 4, 3, 1, 1],
					[4, 1, 1, 1, 1, 3],
					[4, 1, 1, 3, 1, 1],
					[1, 1, 3, 1, 4, 1],
					[1, 1, 4, 1, 3, 1],
					[3, 1, 1, 1, 4, 1],
					[4, 1, 1, 1, 3, 1],
					[2, 1, 1, 4, 1, 2],
					[2, 1, 1, 2, 1, 4],
					[2, 1, 1, 2, 3, 2],
					[2, 3, 3, 1, 1, 1, 2]
				], _.MAX_AVG_VARIANCE = .25, _.MAX_INDIVIDUAL_VARIANCE = .7, _.CODE_SHIFT = 98, _.CODE_CODE_C = 99, _.CODE_CODE_B = 100, _.CODE_CODE_A =
				101, _.CODE_FNC_1 = 102, _.CODE_FNC_2 = 97, _.CODE_FNC_3 = 96, _.CODE_FNC_4_A = 101, _.CODE_FNC_4_B = 100, _.CODE_START_A = 103, _.CODE_START_B =
				104, _.CODE_START_C = 105, _.CODE_STOP = 106, _);

		function _() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = p
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
			}, function (t, e) {
				function r() {
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
			}),
			i = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, u = r(69),
			s = r(101),
			f = r(9),
			l = r(8),
			d = r(0),
			c = r(5),
			h = r(3),
			p = r(4),
			_ = r(70),
			g = r(44),
			v = r(10),
			w = r(71),
			y = r(6),
			E = r(15),
			A = (o(C, a = u.default), C.prototype.decodeRow = function (t, e, r) {
				var n, o, a, u, s = this.decodePair(e, !1, t, r);
				C.addOrTally(this.possibleLeftPairs, s), e.reverse();
				var f = this.decodePair(e, !0, t, r);
				C.addOrTally(this.possibleRightPairs, f), e.reverse();
				try {
					for (var l = i(this.possibleLeftPairs), c = l.next(); !c.done; c = l.next()) {
						var h = c.value;
						if (1 < h.getCount()) try {
							for (var p = i(this.possibleRightPairs), _ = p.next(); !_.done; _ = p.next()) {
								var g = _.value;
								if (1 < g.getCount() && C.checkChecksum(h, g)) return C.constructResult(h, g)
							}
						} catch (t) {
							a = {
								error: t
							}
						} finally {
							try {
								_ && !_.done && (u = p.return) && u.call(p)
							} finally {
								if (a) throw a.error
							}
						}
					}
				} catch (t) {
					n = {
						error: t
					}
				} finally {
					try {
						c && !c.done && (o = l.return) && o.call(l)
					} finally {
						if (n) throw n.error
					}
				}
				throw new d.default
			}, C.addOrTally = function (t, e) {
				var r, n;
				if (null != e) {
					var o = !1;
					try {
						for (var a = i(t), u = a.next(); !u.done; u = a.next()) {
							var s = u.value;
							if (s.getValue() === e.getValue()) {
								s.incrementCount(), o = !0;
								break
							}
						}
					} catch (t) {
						r = {
							error: t
						}
					} finally {
						try {
							u && !u.done && (n = a.return) && n.call(a)
						} finally {
							if (r) throw r.error
						}
					}
					o || t.push(e)
				}
			}, C.prototype.reset = function () {
				this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0
			}, C.constructResult = function (t, e) {
				for (var r = 4537077 * t.getValue() + e.getValue(), n = new String(r).toString(), o = new c.default, i = 13 - n.length; 0 < i; i--)
					o.append("0");
				o.append(n);
				var a = 0;
				for (i = 0; i < 13; i++) {
					var u = o.charAt(i).charCodeAt(0) - "0".charCodeAt(0);
					a += 0 == (1 & i) ? 3 * u : u
				}
				10 == (a = 10 - a % 10) && (a = 0), o.append(a.toString());
				var s = t.getFinderPattern().getResultPoints(),
					l = e.getFinderPattern().getResultPoints();
				return new f.default(o.toString(), null, 0, [s[0], s[1], l[0], l[1]], h.default.RSS_14, (new Date).getTime())
			}, C.checkChecksum = function (t, e) {
				var r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79,
					n = 9 * t.getFinderPattern().getValue() + e.getFinderPattern().getValue();
				return 72 < n && n--, 8 < n && n--, r === n
			}, C.prototype.decodePair = function (t, e, r, n) {
				try {
					var o = this.findFinderPattern(t, e),
						i = this.parseFoundFinderPattern(t, r, e, o),
						a = null == n ? null : n.get(l.default.NEED_RESULT_POINT_CALLBACK);
					if (null != a) {
						var u = (o[0] + o[1]) / 2;
						e && (u = t.getSize() - 1 - u), a.foundPossibleResultPoint(new p.default(u, r))
					}
					var f = this.decodeDataCharacter(t, i, !0),
						d = this.decodeDataCharacter(t, i, !1);
					return new s.default(1597 * f.getValue() + d.getValue(), f.getChecksumPortion() + 4 * d.getChecksumPortion(), i)
				} catch (t) {
					return null
				}
			}, C.prototype.decodeDataCharacter = function (t, e, r) {
				for (var n = this.getDataCharacterCounters(), o = 0; o < n.length; o++) n[o] = 0;
				if (r) E.default.recordPatternInReverse(t, e.getStartEnd()[0], n);
				else {
					E.default.recordPattern(t, e.getStartEnd()[1] + 1, n);
					for (var i = 0, a = n.length - 1; i < a; i++, a--) {
						var u = n[i];
						n[i] = n[a], n[a] = u
					}
				}
				var s = r ? 16 : 15,
					f = v.default.sum(new Int32Array(n)) / s,
					l = this.getOddCounts(),
					c = this.getEvenCounts(),
					h = this.getOddRoundingErrors(),
					p = this.getEvenRoundingErrors();
				for (i = 0; i < n.length; i++) {
					var _ = n[i] / f,
						y = Math.floor(.5 + _);
					y < 1 ? y = 1 : 8 < y && (y = 8);
					var A = Math.floor(i / 2);
					0 == (1 & i) ? (l[A] = y, h[A] = _ - y) : (c[A] = y, p[A] = _ - y)
				}
				this.adjustOddEvenCounts(r, s);
				var m = 0,
					I = 0;
				for (i = l.length - 1; 0 <= i; i--) I *= 9, I += l[i], m += l[i];
				var S = 0,
					O = 0;
				for (i = c.length - 1; 0 <= i; i--) S *= 9, S += c[i], O += c[i];
				var T = I + 3 * S;
				if (r) {
					if (0 != (1 & m) || 12 < m || m < 4) throw new d.default;
					var R = 9 - (B = C.OUTSIDE_ODD_WIDEST[D = (12 - m) / 2]),
						b = w.default.getRSSvalue(l, B, !1),
						N = w.default.getRSSvalue(c, R, !0),
						M = C.OUTSIDE_EVEN_TOTAL_SUBSET[D],
						P = C.OUTSIDE_GSUM[D];
					return new g.default(b * M + N + P, T)
				}
				if (0 != (1 & O) || 10 < O || O < 4) throw new d.default;
				R = 9 - (B = C.INSIDE_ODD_WIDEST[D = (10 - O) / 2]), b = w.default.getRSSvalue(l, B, !0), N = w.default.getRSSvalue(c, R, !1);
				var D, B, L = C.INSIDE_ODD_TOTAL_SUBSET[D];
				return P = C.INSIDE_GSUM[D], new g.default(N * L + b + P, T)
			}, C.prototype.findFinderPattern = function (t, e) {
				var r = this.getDecodeFinderCounters();
				r[0] = 0, r[1] = 0, r[2] = 0, r[3] = 0;
				for (var n = t.getSize(), o = !1, i = 0; i < n && e !== (o = !t.get(i));) i++;
				for (var a = 0, s = i, f = i; f < n; f++)
					if (t.get(f) !== o) r[a]++;
					else {
						if (3 === a) {
							if (u.default.isFinderPattern(r)) return [s, f];
							s += r[0] + r[1], r[0] = r[2], r[1] = r[3], r[2] = 0, r[3] = 0, a--
						} else a++;
						r[a] = 1, o = !o
					}
				throw new d.default
			}, C.prototype.parseFoundFinderPattern = function (t, e, r, n) {
				for (var o = t.get(n[0]), i = n[0] - 1; 0 <= i && o !== t.get(i);) i--;
				i++;
				var a = n[0] - i,
					u = this.getDecodeFinderCounters(),
					s = new Array(u.length);
				y.default.arraycopy(u, 0, s, 1, u.length - 1), s[0] = a;
				var f = this.parseFinderValue(s, C.FINDER_PATTERNS),
					l = i,
					d = n[1];
				return r && (l = t.getSize() - 1 - l, d = t.getSize() - 1 - d), new _.default(f, [i, n[1]], l, d, e)
			}, C.prototype.adjustOddEvenCounts = function (t, e) {
				var r = v.default.sum(new Int32Array(this.getOddCounts())),
					n = v.default.sum(new Int32Array(this.getEvenCounts())),
					o = !1,
					i = !1,
					a = !1,
					s = !1;
				t ? (12 < r ? i = !0 : r < 4 && (o = !0), 12 < n ? s = !0 : n < 4 && (a = !0)) : (11 < r ? i = !0 : r < 5 && (o = !0), 10 < n ? s = !
					0 : n < 4 && (a = !0));
				var f = r + n - e,
					l = (1 & r) == (t ? 1 : 0),
					c = 1 == (1 & n);
				if (1 == f)
					if (l) {
						if (c) throw new d.default;
						i = !0
					} else {
						if (!c) throw new d.default;
						s = !0
					}
				else if (-1 == f)
					if (l) {
						if (c) throw new d.default;
						o = !0
					} else {
						if (!c) throw new d.default;
						a = !0
					}
				else {
					if (0 != f) throw new d.default;
					if (l) {
						if (!c) throw new d.default;
						r < n ? s = o = !0 : a = i = !0
					} else if (c) throw new d.default
				}
				if (o) {
					if (i) throw new d.default;
					u.default.increment(this.getOddCounts(), this.getOddRoundingErrors())
				}
				if (i && u.default.decrement(this.getOddCounts(), this.getOddRoundingErrors()), a) {
					if (s) throw new d.default;
					u.default.increment(this.getEvenCounts(), this.getOddRoundingErrors())
				}
				s && u.default.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
			}, C.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], C.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], C.OUTSIDE_GSUM = [0, 161, 961,
				2015, 2715
			], C.INSIDE_GSUM = [0, 336, 1036, 1516], C.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], C.INSIDE_ODD_WIDEST = [2, 4, 6, 8], C.FINDER_PATTERNS = [
				[3, 8, 2, 1],
				[3, 5, 5, 1],
				[3, 3, 7, 1],
				[3, 1, 9, 1],
				[2, 7, 4, 1],
				[2, 5, 6, 1],
				[2, 3, 8, 1],
				[1, 5, 7, 1],
				[1, 3, 9, 1]
			], C);

		function C() {
			var t = null !== a && a.apply(this, arguments) || this;
			return t.possibleLeftPairs = [], t.possibleRightPairs = [], t
		}
		e.default = A
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
			}, function (t, e) {
				function r() {
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
			}),
			i = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, u = r(15),
			s = r(0),
			f = r(10),
			l = (o(d, a = u.default), d.prototype.getDecodeFinderCounters = function () {
					return this.decodeFinderCounters
				}, d.prototype.getDataCharacterCounters = function () {
					return this.dataCharacterCounters
				}, d.prototype.getOddRoundingErrors = function () {
					return this.oddRoundingErrors
				}, d.prototype.getEvenRoundingErrors = function () {
					return this.evenRoundingErrors
				}, d.prototype.getOddCounts = function () {
					return this.oddCounts
				}, d.prototype.getEvenCounts = function () {
					return this.evenCounts
				}, d.prototype.parseFinderValue = function (t, e) {
					for (var r = 0; r < e.length; r++)
						if (u.default.patternMatchVariance(t, e[r], d.MAX_INDIVIDUAL_VARIANCE) < d.MAX_AVG_VARIANCE) return r;
					throw new s.default
				}, d.count = function (t) {
					return f.default.sum(new Int32Array(t))
				}, d.increment = function (t, e) {
					for (var r = 0, n = e[0], o = 1; o < t.length; o++) e[o] > n && (n = e[o], r = o);
					t[r]++
				}, d.decrement = function (t, e) {
					for (var r = 0, n = e[0], o = 1; o < t.length; o++) e[o] < n && (n = e[o], r = o);
					t[r]--
				}, d.isFinderPattern = function (t) {
					var e, r, n = t[0] + t[1],
						o = n / (n + t[2] + t[3]);
					if (d.MIN_FINDER_PATTERN_RATIO <= o && o <= d.MAX_FINDER_PATTERN_RATIO) {
						var a = Number.MAX_SAFE_INTEGER,
							u = Number.MIN_SAFE_INTEGER;
						try {
							for (var s = i(t), f = s.next(); !f.done; f = s.next()) {
								var l = f.value;
								u < l && (u = l), l < a && (a = l)
							}
						} catch (t) {
							e = {
								error: t
							}
						} finally {
							try {
								f && !f.done && (r = s.return) && r.call(s)
							} finally {
								if (e) throw e.error
							}
						}
						return u < 10 * a
					}
					return !1
				}, d.MAX_AVG_VARIANCE = .2, d.MAX_INDIVIDUAL_VARIANCE = .45, d.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, d.MAX_FINDER_PATTERN_RATIO =
				12.5 / 14, d);

		function d() {
			var t = a.call(this) || this;
			return t.decodeFinderCounters = new Array(4), t.dataCharacterCounters = new Array(8), t.oddRoundingErrors = new Array(4), t.evenRoundingErrors =
				new Array(4), t.oddCounts = new Array(t.dataCharacterCounters.length / 2), t.evenCounts = new Array(t.dataCharacterCounters.length /
					2), t
		}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(4),
			o = (i.prototype.getValue = function () {
				return this.value
			}, i.prototype.getStartEnd = function () {
				return this.startEnd
			}, i.prototype.getResultPoints = function () {
				return this.resultPoints
			}, i.prototype.equals = function (t) {
				if (!(t instanceof i)) return !1;
				var e = t;
				return this.value === e.value
			}, i.prototype.hashCode = function () {
				return this.value
			}, i);

		function i(t, e, r, o, i) {
			this.value = t, this.startEnd = e, this.value = t, this.startEnd = e, this.resultPoints = new Array, this.resultPoints.push(new n.default(
				r, i)), this.resultPoints.push(new n.default(o, i))
		}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = (i.prototype.RSSUtils = function () {}, i.getRSSvalue = function (t, e, r) {
			var o, a, u = 0;
			try {
				for (var s = n(t), f = s.next(); !f.done; f = s.next()) u += f.value
			} catch (t) {
				o = {
					error: t
				}
			} finally {
				try {
					f && !f.done && (a = s.return) && a.call(s)
				} finally {
					if (o) throw o.error
				}
			}
			for (var l = 0, d = 0, c = t.length, h = 0; h < c - 1; h++) {
				var p = void 0;
				for (d |= (p = 1) << h; p < t[h]; p++, d &= ~(1 << h)) {
					var _ = i.combins(u - p - 1, c - h - 2);
					if (r && 0 === d && c - h - 1 <= u - p - (c - h - 1) && (_ -= i.combins(u - p - (c - h), c - h - 2)), 1 < c - h - 1) {
						for (var g = 0, v = u - p - (c - h - 2); e < v; v--) g += i.combins(u - p - v - 1, c - h - 3);
						_ -= g * (c - 1 - h)
					} else e < u - p && _--;
					l += _
				}
				u -= p
			}
			return l
		}, i.combins = function (t, e) {
			var r, n;
			r = e < t - e ? t - (n = e) : (n = t - e, e);
			for (var o = 1, i = 1, a = t; r < a; a--) o *= a, i <= n && (o /= i, i++);
			for (; i <= n;) o /= i, i++;
			return o
		}, i);

		function i() {}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
			}, function (t, e) {
				function r() {
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
			}),
			i = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, u = r(3),
			s = r(8),
			f = r(9),
			l = r(4),
			d = r(15),
			c = r(5),
			h = r(6),
			p = r(2),
			_ = r(0),
			g = (o(v, a = d.default), v.prototype.decodeRow = function (t, e, r) {
				var n, o, a = this.decodeStart(e),
					d = this.decodeEnd(e),
					h = new c.default;
				v.decodeMiddle(e, a[1], d[0], h);
				var _ = h.toString(),
					g = null;
				null != r && (g = r.get(s.default.ALLOWED_LENGTHS)), null == g && (g = v.DEFAULT_ALLOWED_LENGTHS);
				var w = _.length,
					y = !1,
					E = 0;
				try {
					for (var A = i(g), C = A.next(); !C.done; C = A.next()) {
						var m = C.value;
						if (w === m) {
							y = !0;
							break
						}
						E < m && (E = m)
					}
				} catch (t) {
					n = {
						error: t
					}
				} finally {
					try {
						C && !C.done && (o = A.return) && o.call(A)
					} finally {
						if (n) throw n.error
					}
				}
				if (!y && E < w && (y = !0), !y) throw new p.default;
				var I = [new l.default(a[1], t), new l.default(d[0], t)];
				return new f.default(_, null, 0, I, u.default.ITF, (new Date).getTime())
			}, v.decodeMiddle = function (t, e, r, n) {
				var o = new Array(10),
					i = new Array(5),
					a = new Array(5);
				for (o.fill(0), i.fill(0), a.fill(0); e < r;) {
					d.default.recordPattern(t, e, o);
					for (var u = 0; u < 5; u++) {
						var s = 2 * u;
						i[u] = o[s], a[u] = o[1 + s]
					}
					var f = v.decodeDigit(i);
					n.append(f.toString()), f = this.decodeDigit(a), n.append(f.toString()), o.forEach(function (t) {
						e += t
					})
				}
			}, v.prototype.decodeStart = function (t) {
				var e = v.skipWhiteSpace(t),
					r = v.findGuardPattern(t, e, v.START_PATTERN);
				return this.narrowLineWidth = (r[1] - r[0]) / 4, this.validateQuietZone(t, r[0]), r
			}, v.prototype.validateQuietZone = function (t, e) {
				var r = 10 * this.narrowLineWidth;
				r = r < e ? r : e;
				for (var n = e - 1; 0 < r && 0 <= n && !t.get(n); n--) r--;
				if (0 !== r) throw new _.default
			}, v.skipWhiteSpace = function (t) {
				var e = t.getSize(),
					r = t.getNextSet(0);
				if (r === e) throw new _.default;
				return r
			}, v.prototype.decodeEnd = function (t) {
				t.reverse();
				try {
					var e = v.skipWhiteSpace(t),
						r = void 0;
					try {
						r = v.findGuardPattern(t, e, v.END_PATTERN_REVERSED[0])
					} catch (n) {
						r = v.findGuardPattern(t, e, v.END_PATTERN_REVERSED[1])
					}
					this.validateQuietZone(t, r[0]);
					var n = r[0];
					return r[0] = t.getSize() - r[1], r[1] = t.getSize() - n, r
				} finally {
					t.reverse()
				}
			}, v.findGuardPattern = function (t, e, r) {
				var n = r.length,
					o = new Array(n),
					i = t.getSize(),
					a = !1,
					u = 0,
					s = e;
				o.fill(0);
				for (var f = e; f < i; f++)
					if (t.get(f) !== a) o[u]++;
					else {
						if (u === n - 1) {
							if (d.default.patternMatchVariance(o, r, v.MAX_INDIVIDUAL_VARIANCE) < v.MAX_AVG_VARIANCE) return [s, f];
							s += o[0] + o[1], h.default.arraycopy(o, 2, o, 0, u - 1), o[u - 1] = 0, o[u] = 0, u--
						} else u++;
						o[u] = 1, a = !a
					}
				throw new _.default
			}, v.decodeDigit = function (t) {
				for (var e = v.MAX_AVG_VARIANCE, r = -1, n = v.PATTERNS.length, o = 0; o < n; o++) {
					var i = v.PATTERNS[o],
						a = d.default.patternMatchVariance(t, i, v.MAX_INDIVIDUAL_VARIANCE);
					a < e ? (e = a, r = o) : a === e && (r = -1)
				}
				if (0 <= r) return r % 10;
				throw new _.default
			}, v.W = 3, v.w = 2, v.N = 1, v.PATTERNS = [
				[1, 1, 2, 2, 1],
				[2, 1, 1, 1, 2],
				[1, 2, 1, 1, 2],
				[2, 2, 1, 1, 1],
				[1, 1, 2, 1, 2],
				[2, 1, 2, 1, 1],
				[1, 2, 2, 1, 1],
				[1, 1, 1, 2, 2],
				[2, 1, 1, 2, 1],
				[1, 2, 1, 2, 1],
				[1, 1, 3, 3, 1],
				[3, 1, 1, 1, 3],
				[1, 3, 1, 1, 3],
				[3, 3, 1, 1, 1],
				[1, 1, 3, 1, 3],
				[3, 1, 3, 1, 1],
				[1, 3, 3, 1, 1],
				[1, 1, 1, 3, 3],
				[3, 1, 1, 3, 1],
				[1, 3, 1, 3, 1]
			], v.MAX_AVG_VARIANCE = .38, v.MAX_INDIVIDUAL_VARIANCE = .5, v.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], v.START_PATTERN = [1, 1,
				1, 1
			], v.END_PATTERN_REVERSED = [
				[1, 1, 2],
				[1, 1, 3]
			], v);

		function v() {
			var t = null !== a && a.apply(this, arguments) || this;
			return t.narrowLineWidth = -1, t
		}
		e.default = g
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
			}, function (t, e) {
				function r() {
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
			}),
			i = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, u = r(3),
			s = r(74),
			f = r(0),
			l = (o(d, a = s.default), d.prototype.decodeMiddle = function (t, e, r) {
				var n, o, a, u, f = this.decodeMiddleCounters;
				f[0] = 0, f[1] = 0, f[2] = 0, f[3] = 0;
				for (var l = t.getSize(), c = e[1], h = 0, p = 0; p < 6 && c < l; p++) {
					var _ = s.default.decodeDigit(t, f, c, s.default.L_AND_G_PATTERNS);
					r += String.fromCharCode("0".charCodeAt(0) + _ % 10);
					try {
						for (var g = i(f), v = g.next(); !v.done; v = g.next()) c += v.value
					} catch (t) {
						n = {
							error: t
						}
					} finally {
						try {
							v && !v.done && (o = g.return) && o.call(g)
						} finally {
							if (n) throw n.error
						}
					}
					10 <= _ && (h |= 1 << 5 - p)
				}
				for (r = d.determineFirstDigit(r, h), c = s.default.findGuardPattern(t, c, !0, s.default.MIDDLE_PATTERN, new Array(s.default.MIDDLE_PATTERN
						.length).fill(0))[1], p = 0; p < 6 && c < l; p++) {
					_ = s.default.decodeDigit(t, f, c, s.default.L_PATTERNS), r += String.fromCharCode("0".charCodeAt(0) + _);
					try {
						for (var w = i(f), y = w.next(); !y.done; y = w.next()) c += y.value
					} catch (t) {
						a = {
							error: t
						}
					} finally {
						try {
							y && !y.done && (u = w.return) && u.call(w)
						} finally {
							if (a) throw a.error
						}
					}
				}
				return {
					rowOffset: c,
					resultString: r
				}
			}, d.prototype.getBarcodeFormat = function () {
				return u.default.EAN_13
			}, d.determineFirstDigit = function (t, e) {
				for (var r = 0; r < 10; r++)
					if (e === this.FIRST_DIGIT_ENCODINGS[r]) return String.fromCharCode("0".charCodeAt(0) + r) + t;
				throw new f.default
			}, d.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26], d);

		function d() {
			var t = a.call(this) || this;
			return t.decodeMiddleCounters = [0, 0, 0, 0], t
		}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(3),
			u = r(8),
			s = r(9),
			f = r(14),
			l = r(4),
			d = r(103),
			c = r(32),
			h = r(0),
			p = r(2),
			_ = r(11),
			g = (o(v, i = c.default), v.prototype.decodeRow = function (t, e, r) {
				var n = v.findStartGuardPattern(e),
					o = null == r ? null : r.get(u.default.NEED_RESULT_POINT_CALLBACK);
				if (null != o) {
					var i = new l.default((n[0] + n[1]) / 2, t);
					o.foundPossibleResultPoint(i)
				}
				var c = this.decodeMiddle(e, n, this.decodeRowStringBuffer),
					g = c.rowOffset,
					w = c.resultString;
				if (null != o) {
					var y = new l.default(g, t);
					o.foundPossibleResultPoint(y)
				}
				var E = v.decodeEnd(e, g);
				if (null != o) {
					var A = new l.default((E[0] + E[1]) / 2, t);
					o.foundPossibleResultPoint(A)
				}
				var C = E[1],
					m = C + (C - E[0]);
				if (m >= e.getSize() || !e.isRange(C, m, !1)) throw new h.default;
				var I = w.toString();
				if (I.length < 8) throw new p.default;
				if (!v.checkChecksum(I)) throw new _.default;
				var S = (n[1] + n[0]) / 2,
					O = (E[1] + E[0]) / 2,
					T = this.getBarcodeFormat(),
					R = [new l.default(S, t), new l.default(O, t)],
					b = new s.default(I, null, 0, R, T, (new Date).getTime()),
					N = 0;
				try {
					var M = d.default.decodeRow(t, e, E[1]);
					b.putMetadata(f.default.UPC_EAN_EXTENSION, M.getText()), b.putAllMetadata(M.getResultMetadata()), b.addResultPoints(M.getResultPoints()),
						N = M.getText().length
				} catch (t) {}
				var P = null == r ? null : r.get(u.default.ALLOWED_EAN_EXTENSIONS);
				if (null != P) {
					var D = !1;
					for (var B in P)
						if (N.toString() === B) {
							D = !0;
							break
						}
					if (!D) throw new h.default
				}
				return T === a.default.EAN_13 || a.default.UPC_A, b
			}, v.checkChecksum = function (t) {
				return v.checkStandardUPCEANChecksum(t)
			}, v.checkStandardUPCEANChecksum = function (t) {
				var e = t.length;
				if (0 === e) return !1;
				var r = parseInt(t.charAt(e - 1), 10);
				return v.getStandardUPCEANChecksum(t.substring(0, e - 1)) === r
			}, v.getStandardUPCEANChecksum = function (t) {
				for (var e = t.length, r = 0, n = e - 1; 0 <= n; n -= 2) {
					if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || 9 < o) throw new p.default;
					r += o
				}
				for (r *= 3, n = e - 2; 0 <= n; n -= 2) {
					var o;
					if ((o = t.charAt(n).charCodeAt(0) - "0".charCodeAt(0)) < 0 || 9 < o) throw new p.default;
					r += o
				}
				return (1e3 - r) % 10
			}, v.decodeEnd = function (t, e) {
				return v.findGuardPattern(t, e, !1, v.START_END_PATTERN, new Array(v.START_END_PATTERN.length).fill(0))
			}, v);

		function v() {
			var t = i.call(this) || this;
			t.decodeRowStringBuffer = "", v.L_AND_G_PATTERNS = v.L_PATTERNS.map(function (t) {
				return t.slice()
			});
			for (var e = 10; e < 20; e++) {
				for (var r = v.L_PATTERNS[e - 10], n = new Array(r.length), o = 0; o < r.length; o++) n[o] = r[r.length - o - 1];
				v.L_AND_G_PATTERNS[e] = n
			}
			return t
		}
		e.default = g
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(8),
			i = r(3),
			a = r(47),
			u = r(39),
			s = r(43),
			f = r(45),
			l = r(0),
			d = r(79),
			c = r(84),
			h = (p.prototype.decode = function (t, e) {
				return this.setHints(e), this.decodeInternal(t)
			}, p.prototype.decodeWithState = function (t) {
				return null !== this.readers && void 0 !== this.readers || this.setHints(null), this.decodeInternal(t)
			}, p.prototype.setHints = function (t) {
				var e = null != (this.hints = t) && void 0 !== t.get(o.default.TRY_HARDER),
					r = null == t ? null : t.get(o.default.POSSIBLE_FORMATS),
					n = new Array;
				if (null != r) {
					var l = r.some(function (t) {
						return t === i.default.UPC_A || t === i.default.UPC_E || t === i.default.EAN_13 || t === i.default.EAN_8 || t === i.default.CODABAR ||
							t === i.default.CODE_39 || t === i.default.CODE_93 || t === i.default.CODE_128 || t === i.default.ITF || t === i.default.RSS_14 ||
							t === i.default.RSS_EXPANDED
					});
					l && !e && n.push(new s.default(t)), r.includes(i.default.QR_CODE) && n.push(new a.default), r.includes(i.default.DATA_MATRIX) &&
						n.push(new f.default), r.includes(i.default.AZTEC) && n.push(new u.default), r.includes(i.default.PDF_417) && n.push(new d.default),
						l && e && n.push(new s.default(t))
				}
				0 === n.length && (e || n.push(new s.default(t)), n.push(new a.default), n.push(new f.default), n.push(new u.default), n.push(new d
					.default), e && n.push(new s.default(t))), this.readers = n
			}, p.prototype.reset = function () {
				var t, e;
				if (null !== this.readers) try {
					for (var r = n(this.readers), o = r.next(); !o.done; o = r.next()) o.value.reset()
				} catch (e) {
					t = {
						error: e
					}
				} finally {
					try {
						o && !o.done && (e = r.return) && e.call(r)
					} finally {
						if (t) throw t.error
					}
				}
			}, p.prototype.decodeInternal = function (t) {
				var e, r;
				if (null === this.readers) throw new c.default("No readers where selected, nothing can be read.");
				try {
					for (var o = n(this.readers), i = o.next(); !i.done; i = o.next()) {
						var a = i.value;
						try {
							return a.decode(t, this.hints)
						} catch (t) {
							if (t instanceof c.default) continue
						}
					}
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						i && !i.done && (r = o.return) && r.call(o)
					} finally {
						if (e) throw e.error
					}
				}
				throw new l.default("No MultiFormat Readers were able to detect the code.")
			}, p);

		function p() {}
		e.default = h
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(33),
			i = r(13),
			a = (u.numBitsDiffering = function (t, e) {
				return i.default.bitCount(t ^ e)
			}, u.decodeFormatInformation = function (t, e) {
				var r = u.doDecodeFormatInformation(t, e);
				return null !== r ? r : u.doDecodeFormatInformation(t ^ u.FORMAT_INFO_MASK_QR, e ^ u.FORMAT_INFO_MASK_QR)
			}, u.doDecodeFormatInformation = function (t, e) {
				var r, o, i = Number.MAX_SAFE_INTEGER,
					a = 0;
				try {
					for (var s = n(u.FORMAT_INFO_DECODE_LOOKUP), f = s.next(); !f.done; f = s.next()) {
						var l = f.value,
							d = l[0];
						if (d === t || d === e) return new u(l[1]);
						var c = u.numBitsDiffering(t, d);
						c < i && (a = l[1], i = c), t !== e && (c = u.numBitsDiffering(e, d)) < i && (a = l[1], i = c)
					}
				} catch (t) {
					r = {
						error: t
					}
				} finally {
					try {
						f && !f.done && (o = s.return) && o.call(s)
					} finally {
						if (r) throw r.error
					}
				}
				return i <= 3 ? new u(a) : null
			}, u.prototype.getErrorCorrectionLevel = function () {
				return this.errorCorrectionLevel
			}, u.prototype.getDataMask = function () {
				return this.dataMask
			}, u.prototype.hashCode = function () {
				return this.errorCorrectionLevel.getBits() << 3 | this.dataMask
			}, u.prototype.equals = function (t) {
				if (!(t instanceof u)) return !1;
				var e = t;
				return this.errorCorrectionLevel === e.errorCorrectionLevel && this.dataMask === e.dataMask
			}, u.FORMAT_INFO_MASK_QR = 21522, u.FORMAT_INFO_DECODE_LOOKUP = [Int32Array.from([21522, 0]), Int32Array.from([20773, 1]),
				Int32Array.from([24188, 2]), Int32Array.from([23371, 3]), Int32Array.from([17913, 4]), Int32Array.from([16590, 5]), Int32Array.from(
					[20375, 6]), Int32Array.from([19104, 7]), Int32Array.from([30660, 8]), Int32Array.from([29427, 9]), Int32Array.from([32170, 10]),
				Int32Array.from([30877, 11]), Int32Array.from([26159, 12]), Int32Array.from([25368, 13]), Int32Array.from([27713, 14]), Int32Array.from(
					[26998, 15]), Int32Array.from([5769, 16]), Int32Array.from([5054, 17]), Int32Array.from([7399, 18]), Int32Array.from([6608, 19]),
				Int32Array.from([1890, 20]), Int32Array.from([597, 21]), Int32Array.from([3340, 22]), Int32Array.from([2107, 23]), Int32Array.from(
					[13663, 24]), Int32Array.from([12392, 25]), Int32Array.from([16177, 26]), Int32Array.from([14854, 27]), Int32Array.from([9396, 28]),
				Int32Array.from([8579, 29]), Int32Array.from([11994, 30]), Int32Array.from([11245, 31])
			], u);

		function u(t) {
			this.errorCorrectionLevel = o.default.forBits(t >> 3 & 3), this.dataMask = 7 & t
		}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.isMirrored = function () {
			return this.mirrored
		}, o.prototype.applyMirroredCorrection = function (t) {
			if (this.mirrored && null !== t && !(t.length < 3)) {
				var e = t[0];
				t[0] = t[2], t[2] = e
			}
		}, o);

		function o(t) {
			this.mirrored = t
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n, o, i = r(1);
		(o = n = e.ModeValues || (e.ModeValues = {}))[o.TERMINATOR = 0] = "TERMINATOR", o[o.NUMERIC = 1] = "NUMERIC", o[o.ALPHANUMERIC = 2] =
			"ALPHANUMERIC", o[o.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", o[o.BYTE = 4] = "BYTE", o[o.ECI = 5] = "ECI", o[o.KANJI = 6] =
			"KANJI", o[o.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", o[o.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", o[o.HANZI = 9] =
			"HANZI";
		var a = (u.forBits = function (t) {
				var e = u.FOR_BITS.get(t);
				if (void 0 === e) throw new i.default;
				return e
			}, u.prototype.getCharacterCountBits = function (t) {
				var e, r = t.getVersionNumber();
				return e = r <= 9 ? 0 : r <= 26 ? 1 : 2, this.characterCountBitsForVersions[e]
			}, u.prototype.getValue = function () {
				return this.value
			}, u.prototype.getBits = function () {
				return this.bits
			}, u.prototype.equals = function (t) {
				if (!(t instanceof u)) return !1;
				var e = t;
				return this.value === e.value
			}, u.prototype.toString = function () {
				return this.stringValue
			}, u.FOR_BITS = new Map, u.FOR_VALUE = new Map, u.TERMINATOR = new u(n.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), u.NUMERIC =
			new u(n.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), u.ALPHANUMERIC = new u(n.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from(
				[9, 11, 13]), 2), u.STRUCTURED_APPEND = new u(n.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), u.BYTE =
			new u(n.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), u.ECI = new u(n.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), u.KANJI = new u(
				n.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), u.FNC1_FIRST_POSITION = new u(n.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION",
				Int32Array.from([0, 0, 0]), 5), u.FNC1_SECOND_POSITION = new u(n.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0,
				0, 0
			]), 9), u.HANZI = new u(n.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13), u);

		function u(t, e, r, n) {
			this.value = t, this.stringValue = e, this.characterCountBitsForVersions = r, this.bits = n, u.FOR_BITS.set(n, this), u.FOR_VALUE.set(
				t, this)
		}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(3),
			i = r(11),
			a = r(2),
			u = r(0),
			s = r(9),
			f = r(21),
			l = r(13),
			d = r(14),
			c = r(128),
			h = r(130),
			p = (_.prototype.decode = function (t, e) {
				void 0 === e && (e = null);
				var r = _.decode(t, e, !1);
				if (null == r || 0 === r.length || null == r[0]) throw u.default.getNotFoundInstance();
				return r[0]
			}, _.prototype.decodeMultiple = function (t, e) {
				void 0 === e && (e = null);
				try {
					return _.decode(t, e, !0)
				} catch (t) {
					if (t instanceof a.default || t instanceof i.default) throw u.default.getNotFoundInstance();
					throw t
				}
			}, _.decode = function (t, e, r) {
				var i, a, u = new Array,
					f = c.default.detectMultiple(t, e, r);
				try {
					for (var l = n(f.getPoints()), p = l.next(); !p.done; p = l.next()) {
						var g = p.value,
							v = h.default.decode(f.getBits(), g[4], g[5], g[6], g[7], _.getMinCodewordWidth(g), _.getMaxCodewordWidth(g)),
							w = new s.default(v.getText(), v.getRawBytes(), void 0, g, o.default.PDF_417);
						w.putMetadata(d.default.ERROR_CORRECTION_LEVEL, v.getECLevel());
						var y = v.getOther();
						null != y && w.putMetadata(d.default.PDF417_EXTRA_METADATA, y), u.push(w)
					}
				} catch (t) {
					i = {
						error: t
					}
				} finally {
					try {
						p && !p.done && (a = l.return) && a.call(l)
					} finally {
						if (i) throw i.error
					}
				}
				return u.map(function (t) {
					return t
				})
			}, _.getMaxWidth = function (t, e) {
				return null == t || null == e ? 0 : Math.trunc(Math.abs(t.getX() - e.getX()))
			}, _.getMinWidth = function (t, e) {
				return null == t || null == e ? l.default.MAX_VALUE : Math.trunc(Math.abs(t.getX() - e.getX()))
			}, _.getMaxCodewordWidth = function (t) {
				return Math.floor(Math.max(Math.max(_.getMaxWidth(t[0], t[4]), _.getMaxWidth(t[6], t[2]) * f.default.MODULES_IN_CODEWORD / f.default
					.MODULES_IN_STOP_PATTERN), Math.max(_.getMaxWidth(t[1], t[5]), _.getMaxWidth(t[7], t[3]) * f.default.MODULES_IN_CODEWORD / f.default
					.MODULES_IN_STOP_PATTERN)))
			}, _.getMinCodewordWidth = function (t) {
				return Math.floor(Math.min(Math.min(_.getMinWidth(t[0], t[4]), _.getMinWidth(t[6], t[2]) * f.default.MODULES_IN_CODEWORD / f.default
					.MODULES_IN_STOP_PATTERN), Math.min(_.getMinWidth(t[1], t[5]), _.getMinWidth(t[7], t[3]) * f.default.MODULES_IN_CODEWORD / f.default
					.MODULES_IN_STOP_PATTERN)))
			}, _.prototype.reset = function () {}, _);

		function _() {}
		e.default = p
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(1),
			i = r(6),
			a = r(5),
			u = (s.prototype.getCoefficients = function () {
				return this.coefficients
			}, s.prototype.getDegree = function () {
				return this.coefficients.length - 1
			}, s.prototype.isZero = function () {
				return 0 === this.coefficients[0]
			}, s.prototype.getCoefficient = function (t) {
				return this.coefficients[this.coefficients.length - 1 - t]
			}, s.prototype.evaluateAt = function (t) {
				var e, r;
				if (0 === t) return this.getCoefficient(0);
				if (1 === t) {
					var o = 0;
					try {
						for (var i = n(this.coefficients), a = i.next(); !a.done; a = i.next()) {
							var u = a.value;
							o = this.field.add(o, u)
						}
					} catch (t) {
						e = {
							error: t
						}
					} finally {
						try {
							a && !a.done && (r = i.return) && r.call(i)
						} finally {
							if (e) throw e.error
						}
					}
					return o
				}
				for (var s = this.coefficients[0], f = this.coefficients.length, l = 1; l < f; l++) s = this.field.add(this.field.multiply(t, s),
					this.coefficients[l]);
				return s
			}, s.prototype.add = function (t) {
				if (!this.field.equals(t.field)) throw new o.default("ModulusPolys do not have same ModulusGF field");
				if (this.isZero()) return t;
				if (t.isZero()) return this;
				var e = this.coefficients,
					r = t.coefficients;
				if (e.length > r.length) {
					var n = e;
					e = r, r = n
				}
				var a = new Int32Array(r.length),
					u = r.length - e.length;
				i.default.arraycopy(r, 0, a, 0, u);
				for (var f = u; f < r.length; f++) a[f] = this.field.add(e[f - u], r[f]);
				return new s(this.field, a)
			}, s.prototype.subtract = function (t) {
				if (!this.field.equals(t.field)) throw new o.default("ModulusPolys do not have same ModulusGF field");
				return t.isZero() ? this : this.add(t.negative())
			}, s.prototype.multiply = function (t) {
				return t instanceof s ? this.multiplyOther(t) : this.multiplyScalar(t)
			}, s.prototype.multiplyOther = function (t) {
				if (!this.field.equals(t.field)) throw new o.default("ModulusPolys do not have same ModulusGF field");
				if (this.isZero() || t.isZero()) return new s(this.field, new Int32Array([0]));
				for (var e = this.coefficients, r = e.length, n = t.coefficients, i = n.length, a = new Int32Array(r + i - 1), u = 0; u < r; u++)
					for (var f = e[u], l = 0; l < i; l++) a[u + l] = this.field.add(a[u + l], this.field.multiply(f, n[l]));
				return new s(this.field, a)
			}, s.prototype.negative = function () {
				for (var t = this.coefficients.length, e = new Int32Array(t), r = 0; r < t; r++) e[r] = this.field.subtract(0, this.coefficients[r]);
				return new s(this.field, e)
			}, s.prototype.multiplyScalar = function (t) {
				if (0 === t) return new s(this.field, new Int32Array([0]));
				if (1 === t) return this;
				for (var e = this.coefficients.length, r = new Int32Array(e), n = 0; n < e; n++) r[n] = this.field.multiply(this.coefficients[n], t);
				return new s(this.field, r)
			}, s.prototype.multiplyByMonomial = function (t, e) {
				if (t < 0) throw new o.default;
				if (0 === e) return new s(this.field, new Int32Array([0]));
				for (var r = this.coefficients.length, n = new Int32Array(r + t), i = 0; i < r; i++) n[i] = this.field.multiply(this.coefficients[i],
					e);
				return new s(this.field, n)
			}, s.prototype.toString = function () {
				for (var t = new a.default, e = this.getDegree(); 0 <= e; e--) {
					var r = this.getCoefficient(e);
					0 !== r && (r < 0 ? (t.append(" - "), r = -r) : 0 < t.length() && t.append(" + "), 0 !== e && 1 === r || t.append(r), 0 !== e && (
						1 === e ? t.append("x") : (t.append("x^"), t.append(e))))
				}
				return t.toString()
			}, s);

		function s(t, e) {
			if (0 === e.length) throw new o.default;
			this.field = t;
			var r = e.length;
			if (1 < r && 0 === e[0]) {
				for (var n = 1; n < r && 0 === e[n];) n++;
				n === r ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(r - n), i.default.arraycopy(e, n, this.coefficients,
					0, this.coefficients.length))
			} else this.coefficients = e
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(0),
			o = r(4),
			i = (a.prototype.constructor_1 = function (t, e, r, i, a) {
				var u = null == e || null == r,
					s = null == i || null == a;
				if (u && s) throw new n.default;
				u ? (e = new o.default(0, i.getY()), r = new o.default(0, a.getY())) : s && (i = new o.default(t.getWidth() - 1, e.getY()), a = new o
						.default(t.getWidth() - 1, r.getY())), this.image = t, this.topLeft = e, this.bottomLeft = r, this.topRight = i, this.bottomRight =
					a, this.minX = Math.trunc(Math.min(e.getX(), r.getX())), this.maxX = Math.trunc(Math.max(i.getX(), a.getX())), this.minY = Math.trunc(
						Math.min(e.getY(), i.getY())), this.maxY = Math.trunc(Math.max(r.getY(), a.getY()))
			}, a.prototype.constructor_2 = function (t) {
				this.image = t.image, this.topLeft = t.getTopLeft(), this.bottomLeft = t.getBottomLeft(), this.topRight = t.getTopRight(), this.bottomRight =
					t.getBottomRight(), this.minX = t.getMinX(), this.maxX = t.getMaxX(), this.minY = t.getMinY(), this.maxY = t.getMaxY()
			}, a.merge = function (t, e) {
				return null == t ? e : null == e ? t : new a(t.image, t.topLeft, t.bottomLeft, e.topRight, e.bottomRight)
			}, a.prototype.addMissingRows = function (t, e, r) {
				var n = this.topLeft,
					i = this.bottomLeft,
					u = this.topRight,
					s = this.bottomRight;
				if (0 < t) {
					var f = r ? this.topLeft : this.topRight,
						l = Math.trunc(f.getY() - t);
					l < 0 && (l = 0);
					var d = new o.default(f.getX(), l);
					r ? n = d : u = d
				}
				if (0 < e) {
					var c = r ? this.bottomLeft : this.bottomRight,
						h = Math.trunc(c.getY() + e);
					h >= this.image.getHeight() && (h = this.image.getHeight() - 1);
					var p = new o.default(c.getX(), h);
					r ? i = p : s = p
				}
				return new a(this.image, n, i, u, s)
			}, a.prototype.getMinX = function () {
				return this.minX
			}, a.prototype.getMaxX = function () {
				return this.maxX
			}, a.prototype.getMinY = function () {
				return this.minY
			}, a.prototype.getMaxY = function () {
				return this.maxY
			}, a.prototype.getTopLeft = function () {
				return this.topLeft
			}, a.prototype.getTopRight = function () {
				return this.topRight
			}, a.prototype.getBottomLeft = function () {
				return this.bottomLeft
			}, a.prototype.getBottomRight = function () {
				return this.bottomRight
			}, a);

		function a(t, e, r, n, o) {
			t instanceof a ? this.constructor_2(t) : this.constructor_1(t, e, r, n, o)
		}
		e.default = i
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(49),
			i = r(81),
			a = (u.prototype.getCodewordNearby = function (t) {
				var e = this.getCodeword(t);
				if (null != e) return e;
				for (var r = 1; r < u.MAX_NEARBY_DISTANCE; r++) {
					var n = this.imageRowToCodewordIndex(t) - r;
					if (0 <= n && null != (e = this.codewords[n])) return e;
					if ((n = this.imageRowToCodewordIndex(t) + r) < this.codewords.length && null != (e = this.codewords[n])) return e
				}
				return null
			}, u.prototype.imageRowToCodewordIndex = function (t) {
				return t - this.boundingBox.getMinY()
			}, u.prototype.setCodeword = function (t, e) {
				this.codewords[this.imageRowToCodewordIndex(t)] = e
			}, u.prototype.getCodeword = function (t) {
				return this.codewords[this.imageRowToCodewordIndex(t)]
			}, u.prototype.getBoundingBox = function () {
				return this.boundingBox
			}, u.prototype.getCodewords = function () {
				return this.codewords
			}, u.prototype.toString = function () {
				var t, e, r = new o.default,
					i = 0;
				try {
					for (var a = n(this.codewords), u = a.next(); !u.done; u = a.next()) {
						var s = u.value;
						null != s ? r.format("%3d: %3d|%3d%n", i++, s.getRowNumber(), s.getValue()) : r.format("%3d:    |   %n", i++)
					}
				} catch (e) {
					t = {
						error: e
					}
				} finally {
					try {
						u && !u.done && (e = a.return) && e.call(a)
					} finally {
						if (t) throw t.error
					}
				}
				return r.toString()
			}, u.MAX_NEARBY_DISTANCE = 5, u);

		function u(t) {
			this.boundingBox = new i.default(t), this.codewords = new Array(t.getMaxY() - t.getMinY() + 1)
		}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			},
			o = this && this.__read || function (t, e) {
				var r = "function" == typeof Symbol && t[Symbol.iterator];
				if (!r) return t;
				var n, o, i = r.call(t),
					a = [];
				try {
					for (;
						(void 0 === e || 0 < e--) && !(n = i.next()).done;) a.push(n.value)
				} catch (t) {
					o = {
						error: t
					}
				} finally {
					try {
						n && !n.done && (r = i.return) && r.call(i)
					} finally {
						if (o) throw o.error
					}
				}
				return a
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = r(21),
			a = (u.prototype.setValue = function (t) {
				t = Math.trunc(t);
				var e = this.values.get(t);
				null == e && (e = 0), e++, this.values.set(t, e)
			}, u.prototype.getValue = function () {
				function t(t, e) {
					var r = function () {
							return t
						},
						n = function () {
							return e
						};
					n() > a ? (a = n(), (u = []).push(r())) : n() === a && u.push(r())
				}
				var e, r, a = -1,
					u = new Array;
				try {
					for (var s = n(this.values.entries()), f = s.next(); !f.done; f = s.next()) {
						var l = o(f.value, 2);
						t(l[0], l[1])
					}
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						f && !f.done && (r = s.return) && r.call(s)
					} finally {
						if (e) throw e.error
					}
				}
				return i.default.toIntArray(u)
			}, u.prototype.getConfidence = function (t) {
				return this.values.get(t)
			}, u);

		function u() {
			this.values = new Map
		}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(29),
			o = r(6),
			i = r(1),
			a = (u.prototype.buildGenerator = function (t) {
				var e = this.cachedGenerators;
				if (t >= e.length)
					for (var r = e[e.length - 1], o = this.field, i = e.length; i <= t; i++) {
						var a = r.multiply(new n.default(o, Int32Array.from([1, o.exp(i - 1 + o.getGeneratorBase())])));
						e.push(a), r = a
					}
				return e[t]
			}, u.prototype.encode = function (t, e) {
				if (0 === e) throw new i.default("No error correction bytes");
				var r = t.length - e;
				if (r <= 0) throw new i.default("No data bytes provided");
				var a = this.buildGenerator(e),
					u = new Int32Array(r);
				o.default.arraycopy(t, 0, u, 0, r);
				for (var s = new n.default(this.field, u), f = (s = s.multiplyByMonomial(e, 1)).divide(a)[1].getCoefficients(), l = e - f.length, d =
						0; d < l; d++) t[r + d] = 0;
				o.default.arraycopy(f, 0, t, r + l, f.length)
			}, u);

		function u(t) {
			this.field = t, this.cachedGenerators = [], this.cachedGenerators.push(new n.default(t, Int32Array.from([1])))
		}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(1),
			o = (i.applyMaskPenaltyRule1 = function (t) {
				return i.applyMaskPenaltyRule1Internal(t, !0) + i.applyMaskPenaltyRule1Internal(t, !1)
			}, i.applyMaskPenaltyRule2 = function (t) {
				for (var e = 0, r = t.getArray(), n = t.getWidth(), o = t.getHeight(), a = 0; a < o - 1; a++)
					for (var u = r[a], s = 0; s < n - 1; s++) {
						var f = u[s];
						f === u[s + 1] && f === r[a + 1][s] && f === r[a + 1][s + 1] && e++
					}
				return i.N2 * e
			}, i.applyMaskPenaltyRule3 = function (t) {
				for (var e = 0, r = t.getArray(), n = t.getWidth(), o = t.getHeight(), a = 0; a < o; a++)
					for (var u = 0; u < n; u++) {
						var s = r[a];
						u + 6 < n && 1 === s[u] && 0 === s[u + 1] && 1 === s[u + 2] && 1 === s[u + 3] && 1 === s[u + 4] && 0 === s[u + 5] && 1 === s[u +
							6] && (i.isWhiteHorizontal(s, u - 4, u) || i.isWhiteHorizontal(s, u + 7, u + 11)) && e++, a + 6 < o && 1 === r[a][u] && 0 === r[
							a + 1][u] && 1 === r[a + 2][u] && 1 === r[a + 3][u] && 1 === r[a + 4][u] && 0 === r[a + 5][u] && 1 === r[a + 6][u] && (i.isWhiteVertical(
							r, u, a - 4, a) || i.isWhiteVertical(r, u, a + 7, a + 11)) && e++
					}
				return e * i.N3
			}, i.isWhiteHorizontal = function (t, e, r) {
				e = Math.max(e, 0), r = Math.min(r, t.length);
				for (var n = e; n < r; n++)
					if (1 === t[n]) return !1;
				return !0
			}, i.isWhiteVertical = function (t, e, r, n) {
				r = Math.max(r, 0), n = Math.min(n, t.length);
				for (var o = r; o < n; o++)
					if (1 === t[o][e]) return !1;
				return !0
			}, i.applyMaskPenaltyRule4 = function (t) {
				for (var e = 0, r = t.getArray(), n = t.getWidth(), o = t.getHeight(), a = 0; a < o; a++)
					for (var u = r[a], s = 0; s < n; s++) 1 === u[s] && e++;
				var f = t.getHeight() * t.getWidth();
				return Math.floor(10 * Math.abs(2 * e - f) / f) * i.N4
			}, i.getDataMaskBit = function (t, e, r) {
				var o, i;
				switch (t) {
				case 0:
					o = r + e & 1;
					break;
				case 1:
					o = 1 & r;
					break;
				case 2:
					o = e % 3;
					break;
				case 3:
					o = (r + e) % 3;
					break;
				case 4:
					o = Math.floor(r / 2) + Math.floor(e / 3) & 1;
					break;
				case 5:
					o = (1 & (i = r * e)) + i % 3;
					break;
				case 6:
					o = (1 & (i = r * e)) + i % 3 & 1;
					break;
				case 7:
					o = (i = r * e) % 3 + (r + e & 1) & 1;
					break;
				default:
					throw new n.default("Invalid mask pattern: " + t)
				}
				return 0 === o
			}, i.applyMaskPenaltyRule1Internal = function (t, e) {
				for (var r = 0, n = e ? t.getHeight() : t.getWidth(), o = e ? t.getWidth() : t.getHeight(), a = t.getArray(), u = 0; u < n; u++) {
					for (var s = 0, f = -1, l = 0; l < o; l++) {
						var d = e ? a[u][l] : a[l][u];
						d === f ? s++ : (5 <= s && (r += i.N1 + (s - 5)), s = 1, f = d)
					}
					5 <= s && (r += i.N1 + (s - 5))
				}
				return r
			}, i.N1 = 3, i.N2 = 3, i.N3 = 40, i.N4 = 10, i);

		function i() {}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(3),
			o = r(34),
			i = r(12),
			a = r(33),
			u = r(50),
			s = r(1),
			f = r(16),
			l = (d.prototype.encode = function (t, e, r, i, f) {
				if (0 === t.length) throw new s.default("Found empty contents");
				if (e !== n.default.QR_CODE) throw new s.default("Can only encode QR_CODE, but got " + e);
				if (r < 0 || i < 0) throw new s.default("Requested dimensions are too small: " + r + "x" + i);
				var l = a.default.L,
					c = d.QUIET_ZONE_SIZE;
				null !== f && (void 0 !== f.get(o.default.ERROR_CORRECTION) && (l = a.default.fromString(f.get(o.default.ERROR_CORRECTION).toString())),
					void 0 !== f.get(o.default.MARGIN) && (c = Number.parseInt(f.get(o.default.MARGIN).toString(), 10)));
				var h = u.default.encode(t, l, f);
				return d.renderResult(h, r, i, c)
			}, d.renderResult = function (t, e, r, n) {
				var o = t.getMatrix();
				if (null === o) throw new f.default;
				for (var a = o.getWidth(), u = o.getHeight(), s = a + 2 * n, l = u + 2 * n, d = Math.max(e, s), c = Math.max(r, l), h = Math.min(
							Math.floor(d / s), Math.floor(c / l)), p = Math.floor((d - a * h) / 2), _ = Math.floor((c - u * h) / 2), g = new i.default(d, c),
						v = 0, w = _; v < u; v++, w += h)
					for (var y = 0, E = p; y < a; y++, E += h) 1 === o.get(y, v) && g.setRegion(E, w, h, h);
				return g
			}, d.QUIET_ZONE_SIZE = 4, d);

		function d() {}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(2),
			o = r(16),
			i = r(5),
			a = r(158),
			u = r(159),
			s = r(160),
			f = r(161),
			l = r(162),
			d = (c.prototype.decodeAllCodes = function (t, e) {
				for (var r = e, n = null;;) {
					var o = this.decodeGeneralPurposeField(r, n),
						i = f.default.parseFieldsInGeneralPurpose(o.getNewString());
					if (null != i && t.append(i), n = o.isRemaining() ? "" + o.getRemainingValue() : null, r == o.getNewPosition()) break;
					r = o.getNewPosition()
				}
				return t.toString()
			}, c.prototype.isStillNumeric = function (t) {
				if (t + 7 > this.information.getSize()) return t + 4 <= this.information.getSize();
				for (var e = t; e < t + 3; ++e)
					if (this.information.get(e)) return !0;
				return this.information.get(t + 3)
			}, c.prototype.decodeNumeric = function (t) {
				if (t + 7 > this.information.getSize()) {
					var e = this.extractNumericValueFromBitArray(t, 4);
					return 0 == e ? new u.default(this.information.getSize(), u.default.FNC1, u.default.FNC1) : new u.default(this.information.getSize(),
						e - 1, u.default.FNC1)
				}
				var r = this.extractNumericValueFromBitArray(t, 7),
					n = (r - 8) / 11,
					o = (r - 8) % 11;
				return new u.default(t + 7, n, o)
			}, c.prototype.extractNumericValueFromBitArray = function (t, e) {
				return c.extractNumericValueFromBitArray(this.information, t, e)
			}, c.extractNumericValueFromBitArray = function (t, e, r) {
				for (var n = 0, o = 0; o < r; ++o) t.get(e + o) && (n |= 1 << r - o - 1);
				return n
			}, c.prototype.decodeGeneralPurposeField = function (t, e) {
				this.buffer.setLengthToZero(), null != e && this.buffer.append(e), this.current.setPosition(t);
				var r = this.parseBlocks();
				return null != r && r.isRemaining() ? new s.default(this.current.getPosition(), this.buffer.toString(), r.getRemainingValue()) :
					new s.default(this.current.getPosition(), this.buffer.toString())
			}, c.prototype.parseBlocks = function () {
				var t, e;
				do {
					var r = this.current.getPosition();
					if (t = this.current.isAlpha() ? (e = this.parseAlphaBlock()).isFinished() : this.current.isIsoIec646() ? (e = this.parseIsoIec646Block())
						.isFinished() : (e = this.parseNumericBlock()).isFinished(), r == this.current.getPosition() && !t) break
				} while (!t);
				return e.getDecodedInformation()
			}, c.prototype.parseNumericBlock = function () {
				for (; this.isStillNumeric(this.current.getPosition());) {
					var t = this.decodeNumeric(this.current.getPosition());
					if (this.current.setPosition(t.getNewPosition()), t.isFirstDigitFNC1()) {
						var e = void 0;
						return e = t.isSecondDigitFNC1() ? new s.default(this.current.getPosition(), this.buffer.toString()) : new s.default(this.current
							.getPosition(), this.buffer.toString(), t.getSecondDigit()), new l.default(!0, e)
					}
					if (this.buffer.append(t.getFirstDigit()), t.isSecondDigitFNC1()) return e = new s.default(this.current.getPosition(), this.buffer
						.toString()), new l.default(!0, e);
					this.buffer.append(t.getSecondDigit())
				}
				return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)),
					new l.default(!1)
			}, c.prototype.parseIsoIec646Block = function () {
				for (; this.isStillIsoIec646(this.current.getPosition());) {
					var t = this.decodeIsoIec646(this.current.getPosition());
					if (this.current.setPosition(t.getNewPosition()), t.isFNC1()) {
						var e = new s.default(this.current.getPosition(), this.buffer.toString());
						return new l.default(!0, e)
					}
					this.buffer.append(t.getValue())
				}
				return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) :
					this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current
						.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new l.default(!1)
			}, c.prototype.parseAlphaBlock = function () {
				for (; this.isStillAlpha(this.current.getPosition());) {
					var t = this.decodeAlphanumeric(this.current.getPosition());
					if (this.current.setPosition(t.getNewPosition()), t.isFNC1()) {
						var e = new s.default(this.current.getPosition(), this.buffer.toString());
						return new l.default(!0, e)
					}
					this.buffer.append(t.getValue())
				}
				return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) :
					this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current
						.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new l.default(!1)
			}, c.prototype.isStillIsoIec646 = function (t) {
				if (t + 5 > this.information.getSize()) return !1;
				var e = this.extractNumericValueFromBitArray(t, 5);
				if (5 <= e && e < 16) return !0;
				if (t + 7 > this.information.getSize()) return !1;
				var r = this.extractNumericValueFromBitArray(t, 7);
				if (64 <= r && r < 116) return !0;
				if (t + 8 > this.information.getSize()) return !1;
				var n = this.extractNumericValueFromBitArray(t, 8);
				return 232 <= n && n < 253
			}, c.prototype.decodeIsoIec646 = function (t) {
				var e = this.extractNumericValueFromBitArray(t, 5);
				if (15 == e) return new a.default(t + 5, a.default.FNC1);
				if (5 <= e && e < 15) return new a.default(t + 5, "0" + (e - 5));
				var r, o = this.extractNumericValueFromBitArray(t, 7);
				if (64 <= o && o < 90) return new a.default(t + 7, "" + (o + 1));
				if (90 <= o && o < 116) return new a.default(t + 7, "" + (o + 7));
				switch (this.extractNumericValueFromBitArray(t, 8)) {
				case 232:
					r = "!";
					break;
				case 233:
					r = '"';
					break;
				case 234:
					r = "%";
					break;
				case 235:
					r = "&";
					break;
				case 236:
					r = "'";
					break;
				case 237:
					r = "(";
					break;
				case 238:
					r = ")";
					break;
				case 239:
					r = "*";
					break;
				case 240:
					r = "+";
					break;
				case 241:
					r = ",";
					break;
				case 242:
					r = "-";
					break;
				case 243:
					r = ".";
					break;
				case 244:
					r = "/";
					break;
				case 245:
					r = ":";
					break;
				case 246:
					r = ";";
					break;
				case 247:
					r = "<";
					break;
				case 248:
					r = "=";
					break;
				case 249:
					r = ">";
					break;
				case 250:
					r = "?";
					break;
				case 251:
					r = "_";
					break;
				case 252:
					r = " ";
					break;
				default:
					throw new n.default
				}
				return new a.default(t + 8, r)
			}, c.prototype.isStillAlpha = function (t) {
				if (t + 5 > this.information.getSize()) return !1;
				var e = this.extractNumericValueFromBitArray(t, 5);
				if (5 <= e && e < 16) return !0;
				if (t + 6 > this.information.getSize()) return !1;
				var r = this.extractNumericValueFromBitArray(t, 6);
				return 16 <= r && r < 63
			}, c.prototype.decodeAlphanumeric = function (t) {
				var e = this.extractNumericValueFromBitArray(t, 5);
				if (15 == e) return new a.default(t + 5, a.default.FNC1);
				if (5 <= e && e < 15) return new a.default(t + 5, "0" + (e - 5));
				var r, n = this.extractNumericValueFromBitArray(t, 6);
				if (32 <= n && n < 58) return new a.default(t + 6, "" + (n + 33));
				switch (n) {
				case 58:
					r = "*";
					break;
				case 59:
					r = ",";
					break;
				case 60:
					r = "-";
					break;
				case 61:
					r = ".";
					break;
				case 62:
					r = "/";
					break;
				default:
					throw new o.default("Decoding invalid alphanumeric value: " + n)
				}
				return new a.default(t + 6, r)
			}, c.prototype.isAlphaTo646ToAlphaLatch = function (t) {
				if (t + 1 > this.information.getSize()) return !1;
				for (var e = 0; e < 5 && e + t < this.information.getSize(); ++e)
					if (2 == e) {
						if (!this.information.get(t + 2)) return !1
					} else if (this.information.get(t + e)) return !1;
				return !0
			}, c.prototype.isAlphaOr646ToNumericLatch = function (t) {
				if (t + 3 > this.information.getSize()) return !1;
				for (var e = t; e < t + 3; ++e)
					if (this.information.get(e)) return !1;
				return !0
			}, c.prototype.isNumericToAlphaNumericLatch = function (t) {
				if (t + 1 > this.information.getSize()) return !1;
				for (var e = 0; e < 4 && e + t < this.information.getSize(); ++e)
					if (this.information.get(t + e)) return !1;
				return !0
			}, c);

		function c(t) {
			this.buffer = new i.default, this.information = t
		}
		e.default = d
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(88),
			o = (i.prototype.getInformation = function () {
				return this.information
			}, i.prototype.getGeneralDecoder = function () {
				return this.generalDecoder
			}, i);

		function i(t) {
			this.information = t, this.generalDecoder = new n.default(t)
		}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(91),
			u = r(5),
			s = r(0),
			f = (o(l, i = a.default), l.prototype.parseInformation = function () {
				if (this.getInformation().getSize() != l.HEADER_SIZE + a.default.GTIN_SIZE + l.WEIGHT_SIZE) throw new s.default;
				var t = new u.default;
				return this.encodeCompressedGtin(t, l.HEADER_SIZE), this.encodeCompressedWeight(t, l.HEADER_SIZE + a.default.GTIN_SIZE, l.WEIGHT_SIZE),
					t.toString()
			}, l.HEADER_SIZE = 5, l.WEIGHT_SIZE = 15, l);

		function l(t) {
			return i.call(this, t) || this
		}
		e.default = f
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(35),
			u = (o(s, i = a.default), s.prototype.encodeCompressedWeight = function (t, e, r) {
				var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e, r);
				this.addWeightCode(t, n);
				for (var o = this.checkWeight(n), i = 1e5, a = 0; a < 5; ++a) o / i == 0 && t.append("0"), i /= 10;
				t.append(o)
			}, s);

		function s(t) {
			return i.call(this, t) || this
		}
		e.default = u
	}, function (t, e, r) {
		t.exports = r(54)
	}, function (t, e, r) {
		"use strict";

		function n(t) {
			for (var r in t) e.hasOwnProperty(r) || (e[r] = t[r])
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), n(r(94)), n(r(100)), n(r(17)), n(r(107)), n(r(114)), n(r(147)), n(r(148)), n(r(149)), n(r(59)), n(r(60))
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(17),
			u = r(39),
			s = (o(f, i = a.BrowserCodeReader), f);

		function f(t) {
			return void 0 === t && (t = 500), i.call(this, new u.default, t) || this
		}
		e.BrowserAztecCodeReader = s
	}, function (t, e, r) {
		function n(t, e) {
			void 0 === e && (e = t.constructor);
			var r = Error.captureStackTrace;
			r && r(t, e)
		}
		var o, i, a;
		o = e, i = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function (t, e) {
			t.__proto__ = e
		} || function (t, e) {
			for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
		}, a = function (t) {
			function e(e) {
				var r = this.constructor,
					o = t.call(this, e) || this;
				return Object.defineProperty(o, "name", {
						value: r.name,
						enumerable: !1
					}),
					function (t, e) {
						var r = Object.setPrototypeOf;
						r ? r(t, e) : t.__proto__ = e
					}(o, r.prototype), n(o), o
			}
			return function (t, e) {
				function r() {
					this.constructor = t
				}
				i(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
			}(e, t), e
		}(Error), o.CustomError = a, o.customErrorFactory = function (t, e) {
			function r() {
				for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
				if (!(this instanceof r)) return new(r.bind.apply(r, [void 0].concat(o)));
				e.apply(this, o), t.apply(this, o), this.name = t.name || e.name, n(this, r)
			}
			return void 0 === e && (e = Error), Object.defineProperties(r, {
				prototype: {
					value: Object.create(e.prototype, {
						constructor: {
							value: r,
							writable: !0,
							configurable: !0
						}
					})
				}
			})
		}
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(37),
			u = (o(s, i = a.default), s);

		function s(t, e) {
			void 0 === t && (t = void 0), void 0 === e && (e = void 0);
			var r = i.call(this, e) || this;
			return r.index = t, r.message = e, r
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n, o, i = r(26),
			a = r(20),
			u = r(27),
			s = r(16),
			f = r(2),
			l = r(54),
			d = r(13);
		(o = n = n || {})[o.UPPER = 0] = "UPPER", o[o.LOWER = 1] = "LOWER", o[o.MIXED = 2] = "MIXED", o[o.DIGIT = 3] = "DIGIT", o[o.PUNCT = 4] =
			"PUNCT", o[o.BINARY = 5] = "BINARY";
		var c = (h.prototype.decode = function (t) {
			var e = (this.ddata = t).getBits(),
				r = this.extractBits(e),
				n = this.correctBits(r),
				o = h.convertBoolArrayToByteArray(n),
				a = h.getEncodedData(n),
				u = new i.default(o, a, null, null);
			return u.setNumBits(n.length), u
		}, h.highLevelDecode = function (t) {
			return this.getEncodedData(t)
		}, h.getEncodedData = function (t) {
			for (var e = t.length, r = n.UPPER, o = n.UPPER, i = "", a = 0; a < e;)
				if (o === n.BINARY) {
					if (e - a < 5) break;
					var u = h.readCode(t, a, 5);
					if (a += 5, 0 === u) {
						if (e - a < 11) break;
						u = h.readCode(t, a, 11) + 31, a += 11
					}
					for (var s = 0; s < u; s++) {
						if (e - a < 8) {
							a = e;
							break
						}
						var f = h.readCode(t, a, 8);
						i += l.StringUtils.castAsNonUtf8Char(f), a += 8
					}
					o = r
				} else {
					var d = o === n.DIGIT ? 4 : 5;
					if (e - a < d) break;
					f = h.readCode(t, a, d), a += d;
					var c = h.getCharacter(o, f);
					c.startsWith("CTRL_") ? (r = o, o = h.getTable(c.charAt(5)), "L" === c.charAt(6) && (r = o)) : (i += c, o = r)
				}
			return i
		}, h.getTable = function (t) {
			switch (t) {
			case "L":
				return n.LOWER;
			case "P":
				return n.PUNCT;
			case "M":
				return n.MIXED;
			case "D":
				return n.DIGIT;
			case "B":
				return n.BINARY;
			case "U":
			default:
				return n.UPPER
			}
		}, h.getCharacter = function (t, e) {
			switch (t) {
			case n.UPPER:
				return h.UPPER_TABLE[e];
			case n.LOWER:
				return h.LOWER_TABLE[e];
			case n.MIXED:
				return h.MIXED_TABLE[e];
			case n.PUNCT:
				return h.PUNCT_TABLE[e];
			case n.DIGIT:
				return h.DIGIT_TABLE[e];
			default:
				throw new s.default("Bad table")
			}
		}, h.prototype.correctBits = function (t) {
			var e, r;
			e = this.ddata.getNbLayers() <= 2 ? (r = 6, a.default.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (r = 8, a.default.AZTEC_DATA_8) :
				this.ddata.getNbLayers() <= 22 ? (r = 10, a.default.AZTEC_DATA_10) : (r = 12, a.default.AZTEC_DATA_12);
			var n = this.ddata.getNbDatablocks(),
				o = t.length / r;
			if (o < n) throw new f.default;
			for (var i = t.length % r, s = new Int32Array(o), l = 0; l < o; l++, i += r) s[l] = h.readCode(t, i, r);
			try {
				new u.default(e).decode(s, o - n)
			} catch (t) {
				throw new f.default(t)
			}
			var d = (1 << r) - 1,
				c = 0;
			for (l = 0; l < n; l++) {
				if (0 === (g = s[l]) || g === d) throw new f.default;
				1 !== g && g !== d - 1 || c++
			}
			var p = new Array(n * r - c),
				_ = 0;
			for (l = 0; l < n; l++) {
				var g;
				if (1 === (g = s[l]) || g === d - 1) p.fill(1 < g, _, _ + r - 1), _ += r - 1;
				else
					for (var v = r - 1; 0 <= v; --v) p[_++] = 0 != (g & 1 << v)
			}
			return p
		}, h.prototype.extractBits = function (t) {
			var e = this.ddata.isCompact(),
				r = this.ddata.getNbLayers(),
				n = (e ? 11 : 14) + 4 * r,
				o = new Int32Array(n),
				i = new Array(this.totalBitsInLayer(r, e));
			if (e)
				for (var a = 0; a < o.length; a++) o[a] = a;
			else {
				var u = 1 + n + 2 * d.default.truncDivision(d.default.truncDivision(n, 2) - 1, 15),
					s = n / 2,
					f = d.default.truncDivision(u, 2);
				for (a = 0; a < s; a++) {
					var l = a + d.default.truncDivision(a, 15);
					o[s - a - 1] = f - l - 1, o[s + a] = f + l + 1
				}
			}
			for (var c = a = 0; a < r; a++) {
				for (var h = 4 * (r - a) + (e ? 9 : 12), p = 2 * a, _ = n - 1 - p, g = 0; g < h; g++)
					for (var v = 2 * g, w = 0; w < 2; w++) i[c + v + w] = t.get(o[p + w], o[p + g]), i[c + 2 * h + v + w] = t.get(o[p + g], o[_ - w]),
						i[c + 4 * h + v + w] = t.get(o[_ - w], o[_ - g]), i[c + 6 * h + v + w] = t.get(o[_ - g], o[p + w]);
				c += 8 * h
			}
			return i
		}, h.readCode = function (t, e, r) {
			for (var n = 0, o = e; o < e + r; o++) n <<= 1, t[o] && (n |= 1);
			return n
		}, h.readByte = function (t, e) {
			var r = t.length - e;
			return 8 <= r ? h.readCode(t, e, 8) : h.readCode(t, e, r) << 8 - r
		}, h.convertBoolArrayToByteArray = function (t) {
			for (var e = new Uint8Array((t.length + 7) / 8), r = 0; r < e.length; r++) e[r] = h.readByte(t, 8 * r);
			return e
		}, h.prototype.totalBitsInLayer = function (t, e) {
			return ((e ? 88 : 112) + 16 * t) * t
		}, h.UPPER_TABLE = ["CTRL_PS", " ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
			"T", "U", "V", "W", "X", "Y", "Z", "CTRL_LL", "CTRL_ML", "CTRL_DL", "CTRL_BS"
		], h.LOWER_TABLE = ["CTRL_PS", " ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
			"t", "u", "v", "w", "x", "y", "z", "CTRL_US", "CTRL_ML", "CTRL_DL", "CTRL_BS"
		], h.MIXED_TABLE = ["CTRL_PS", " ", "\\1", "\\2", "\\3", "\\4", "\\5", "\\6", "\\7", "\b", "\t", "\n", "\\13", "\f", "\r", "\\33",
			"\\34", "\\35", "\\36", "\\37", "@", "\\", "^", "_", "`", "|", "~", "\\177", "CTRL_LL", "CTRL_UL", "CTRL_PL", "CTRL_BS"
		], h.PUNCT_TABLE = ["", "\r", "\r\n", ". ", ", ", ": ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/",
			":", ";", "<", "=", ">", "?", "[", "]", "{", "}", "CTRL_UL"
		], h.DIGIT_TABLE = ["CTRL_PS", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ",", ".", "CTRL_UL", "CTRL_US"], h);

		function h() {}
		e.default = c
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(4),
			o = r(99),
			i = r(10),
			a = r(41),
			u = r(20),
			s = r(27),
			f = r(0),
			l = r(31),
			d = r(13),
			c = (h.prototype.toResultPoint = function () {
				return new n.default(this.getX(), this.getY())
			}, h.prototype.getX = function () {
				return this.x
			}, h.prototype.getY = function () {
				return this.y
			}, h);

		function h(t, e) {
			this.x = t, this.y = e
		}
		e.Point = c;
		var p = (_.prototype.detect = function () {
			return this.detectMirror(!1)
		}, _.prototype.detectMirror = function (t) {
			var e = this.getMatrixCenter(),
				r = this.getBullsEyeCorners(e);
			if (t) {
				var n = r[0];
				r[0] = r[2], r[2] = n
			}
			this.extractParameters(r);
			var i = this.sampleGrid(this.image, r[this.shift % 4], r[(this.shift + 1) % 4], r[(this.shift + 2) % 4], r[(this.shift + 3) % 4]),
				a = this.getMatrixCornerPoints(r);
			return new o.default(i, a, this.compact, this.nbDataBlocks, this.nbLayers)
		}, _.prototype.extractParameters = function (t) {
			if (!(this.isValidPoint(t[0]) && this.isValidPoint(t[1]) && this.isValidPoint(t[2]) && this.isValidPoint(t[3]))) throw new f.default;
			var e = 2 * this.nbCenterLayers,
				r = new Int32Array([this.sampleLine(t[0], t[1], e), this.sampleLine(t[1], t[2], e), this.sampleLine(t[2], t[3], e), this.sampleLine(
					t[3], t[0], e)]);
			this.shift = this.getRotation(r, e);
			for (var n = 0, o = 0; o < 4; o++) {
				var i = r[(this.shift + o) % 4];
				this.compact ? (n <<= 7, n += i >> 1 & 127) : (n <<= 10, n += (i >> 2 & 992) + (i >> 1 & 31))
			}
			var a = this.getCorrectedParameterData(n, this.compact);
			this.compact ? (this.nbLayers = 1 + (a >> 6), this.nbDataBlocks = 1 + (63 & a)) : (this.nbLayers = 1 + (a >> 11), this.nbDataBlocks =
				1 + (2047 & a))
		}, _.prototype.getRotation = function (t, e) {
			var r = 0;
			t.forEach(function (t, n, o) {
				r = (t >> e - 2 << 1) + (1 & t) + (r << 3)
			}), r = ((1 & r) << 11) + (r >> 1);
			for (var n = 0; n < 4; n++)
				if (d.default.bitCount(r ^ this.EXPECTED_CORNER_BITS[n]) <= 2) return n;
			throw new f.default
		}, _.prototype.getCorrectedParameterData = function (t, e) {
			var r, n;
			n = e ? (r = 7, 2) : (r = 10, 4);
			for (var o = r - n, i = new Int32Array(r), a = r - 1; 0 <= a; --a) i[a] = 15 & t, t >>= 4;
			try {
				new s.default(u.default.AZTEC_PARAM).decode(i, o)
			} catch (t) {
				throw new f.default
			}
			var l = 0;
			for (a = 0; a < n; a++) l = (l << 4) + i[a];
			return l
		}, _.prototype.getBullsEyeCorners = function (t) {
			var e = t,
				r = t,
				o = t,
				i = t,
				a = !0;
			for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
				var u = this.getFirstDifferent(e, a, 1, -1),
					s = this.getFirstDifferent(r, a, 1, 1),
					l = this.getFirstDifferent(o, a, -1, 1),
					d = this.getFirstDifferent(i, a, -1, -1);
				if (2 < this.nbCenterLayers) {
					var c = this.distancePoint(d, u) * this.nbCenterLayers / (this.distancePoint(i, e) * (this.nbCenterLayers + 2));
					if (c < .75 || 1.25 < c || !this.isWhiteOrBlackRectangle(u, s, l, d)) break
				}
				e = u, r = s, o = l, i = d, a = !a
			}
			if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers) throw new f.default;
			this.compact = 5 === this.nbCenterLayers;
			var h = new n.default(e.getX() + .5, e.getY() - .5),
				p = new n.default(r.getX() + .5, r.getY() + .5),
				_ = new n.default(o.getX() - .5, o.getY() + .5),
				g = new n.default(i.getX() - .5, i.getY() - .5);
			return this.expandSquare([h, p, _, g], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers)
		}, _.prototype.getMatrixCenter = function () {
			var t, e, r, n;
			try {
				t = (l = new a.default(this.image).detect())[0], e = l[1], r = l[2], n = l[3]
			} catch (l) {
				var o = this.image.getWidth() / 2,
					u = this.image.getHeight() / 2;
				t = this.getFirstDifferent(new c(7 + o, u - 7), !1, 1, -1).toResultPoint(), e = this.getFirstDifferent(new c(7 + o, 7 + u), !1, 1,
					1).toResultPoint(), r = this.getFirstDifferent(new c(o - 7, 7 + u), !1, -1, 1).toResultPoint(), n = this.getFirstDifferent(new c(
					o - 7, u - 7), !1, -1, -1).toResultPoint()
			}
			var s = i.default.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4),
				f = i.default.round((t.getY() + n.getY() + e.getY() + r.getY()) / 4);
			try {
				var l;
				t = (l = new a.default(this.image, 15, s, f).detect())[0], e = l[1], r = l[2], n = l[3]
			} catch (l) {
				t = this.getFirstDifferent(new c(s + 7, f - 7), !1, 1, -1).toResultPoint(), e = this.getFirstDifferent(new c(s + 7, f + 7), !1, 1,
					1).toResultPoint(), r = this.getFirstDifferent(new c(s - 7, f + 7), !1, -1, 1).toResultPoint(), n = this.getFirstDifferent(new c(
					s - 7, f - 7), !1, -1, -1).toResultPoint()
			}
			return s = i.default.round((t.getX() + n.getX() + e.getX() + r.getX()) / 4), f = i.default.round((t.getY() + n.getY() + e.getY() +
				r.getY()) / 4), new c(s, f)
		}, _.prototype.getMatrixCornerPoints = function (t) {
			return this.expandSquare(t, 2 * this.nbCenterLayers, this.getDimension())
		}, _.prototype.sampleGrid = function (t, e, r, n, o) {
			var i = l.default.getInstance(),
				a = this.getDimension(),
				u = a / 2 - this.nbCenterLayers,
				s = a / 2 + this.nbCenterLayers;
			return i.sampleGrid(t, a, a, u, u, s, u, s, s, u, s, e.getX(), e.getY(), r.getX(), r.getY(), n.getX(), n.getY(), o.getX(), o.getY())
		}, _.prototype.sampleLine = function (t, e, r) {
			for (var n = 0, o = this.distanceResultPoint(t, e), a = o / r, u = t.getX(), s = t.getY(), f = a * (e.getX() - t.getX()) / o, l = a *
					(e.getY() - t.getY()) / o, d = 0; d < r; d++) this.image.get(i.default.round(u + d * f), i.default.round(s + d * l)) && (n |= 1 <<
				r - d - 1);
			return n
		}, _.prototype.isWhiteOrBlackRectangle = function (t, e, r, n) {
			t = new c(t.getX() - 3, t.getY() + 3), e = new c(e.getX() - 3, e.getY() - 3), r = new c(r.getX() + 3, r.getY() - 3), n = new c(n.getX() +
				3, n.getY() + 3);
			var o = this.getColor(n, t);
			if (0 === o) return !1;
			var i = this.getColor(t, e);
			return i === o && (i = this.getColor(e, r)) === o && (i = this.getColor(r, n)) === o
		}, _.prototype.getColor = function (t, e) {
			for (var r = this.distancePoint(t, e), n = (e.getX() - t.getX()) / r, o = (e.getY() - t.getY()) / r, a = 0, u = t.getX(), s = t.getY(),
					f = this.image.get(t.getX(), t.getY()), l = Math.ceil(r), d = 0; d < l; d++) u += n, s += o, this.image.get(i.default.round(u), i
				.default.round(s)) !== f && a++;
			var c = a / r;
			return .1 < c && c < .9 ? 0 : c <= .1 === f ? 1 : -1
		}, _.prototype.getFirstDifferent = function (t, e, r, n) {
			for (var o = t.getX() + r, i = t.getY() + n; this.isValid(o, i) && this.image.get(o, i) === e;) o += r, i += n;
			for (o -= r, i -= n; this.isValid(o, i) && this.image.get(o, i) === e;) o += r;
			for (o -= r; this.isValid(o, i) && this.image.get(o, i) === e;) i += n;
			return new c(o, i -= n)
		}, _.prototype.expandSquare = function (t, e, r) {
			var o = r / (2 * e),
				i = t[0].getX() - t[2].getX(),
				a = t[0].getY() - t[2].getY(),
				u = (t[0].getX() + t[2].getX()) / 2,
				s = (t[0].getY() + t[2].getY()) / 2,
				f = new n.default(u + o * i, s + o * a),
				l = new n.default(u - o * i, s - o * a);
			return i = t[1].getX() - t[3].getX(), a = t[1].getY() - t[3].getY(), u = (t[1].getX() + t[3].getX()) / 2, s = (t[1].getY() + t[3].getY()) /
				2, [f, new n.default(u + o * i, s + o * a), l, new n.default(u - o * i, s - o * a)]
		}, _.prototype.isValid = function (t, e) {
			return 0 <= t && t < this.image.getWidth() && 0 < e && e < this.image.getHeight()
		}, _.prototype.isValidPoint = function (t) {
			var e = i.default.round(t.getX()),
				r = i.default.round(t.getY());
			return this.isValid(e, r)
		}, _.prototype.distancePoint = function (t, e) {
			return i.default.distance(t.getX(), t.getY(), e.getX(), e.getY())
		}, _.prototype.distanceResultPoint = function (t, e) {
			return i.default.distance(t.getX(), t.getY(), e.getX(), e.getY())
		}, _.prototype.getDimension = function () {
			return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (d.default.truncDivision(
				this.nbLayers - 4, 8) + 1) + 15
		}, _);

		function _(t) {
			this.EXPECTED_CORNER_BITS = new Int32Array([3808, 476, 2107, 1799]), this.image = t
		}
		e.default = p
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(30),
			u = (o(s, i = a.default), s.prototype.getNbLayers = function () {
				return this.nbLayers
			}, s.prototype.getNbDatablocks = function () {
				return this.nbDatablocks
			}, s.prototype.isCompact = function () {
				return this.compact
			}, s);

		function s(t, e, r, n, o) {
			var a = i.call(this, t, e) || this;
			return a.compact = r, a.nbDatablocks = n, a.nbLayers = o, a
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(17),
			u = r(43),
			s = (o(f, i = a.BrowserCodeReader), f);

		function f(t, e) {
			return void 0 === t && (t = 500), i.call(this, new u.default(e), t, e) || this
		}
		e.BrowserBarcodeReader = s
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(44),
			u = (o(s, i = a.default), s.prototype.getFinderPattern = function () {
				return this.finderPattern
			}, s.prototype.getCount = function () {
				return this.count
			}, s.prototype.incrementCount = function () {
				this.count++
			}, s);

		function s(t, e, r) {
			var n = i.call(this, t, e) || this;
			return n.count = 0, n.finderPattern = r, n
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
			}, function (t, e) {
				function r() {
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
			}),
			i = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, u = r(3),
			s = r(8),
			f = r(15),
			l = r(73),
			d = r(106),
			c = r(0),
			h = (o(p, a = f.default), p.prototype.decodeRow = function (t, e, r) {
				var n, o;
				try {
					for (var a = i(this.readers), u = a.next(); !u.done; u = a.next()) {
						var s = u.value;
						try {
							return s.decodeRow(t, e, r)
						} catch (t) {}
					}
				} catch (t) {
					n = {
						error: t
					}
				} finally {
					try {
						u && !u.done && (o = a.return) && o.call(a)
					} finally {
						if (n) throw n.error
					}
				}
				throw new c.default
			}, p.prototype.reset = function () {
				var t, e;
				try {
					for (var r = i(this.readers), n = r.next(); !n.done; n = r.next()) n.value.reset()
				} catch (e) {
					t = {
						error: e
					}
				} finally {
					try {
						n && !n.done && (e = r.return) && e.call(r)
					} finally {
						if (t) throw t.error
					}
				}
			}, p);

		function p(t) {
			var e = a.call(this) || this,
				r = null == t ? null : t.get(s.default.POSSIBLE_FORMATS),
				n = [];
			return null != r && (-1 < r.indexOf(u.default.EAN_13) && n.push(new l.default), -1 < r.indexOf(u.default.EAN_8) && n.push(new d.default)),
				0 === n.length && (n.push(new l.default), n.push(new d.default)), e.readers = n, e
		}
		e.default = h
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(32),
			o = r(104),
			i = r(105),
			a = (u.decodeRow = function (t, e, r) {
				var a = n.default.findGuardPattern(e, r, !1, this.EXTENSION_START_PATTERN, new Array(this.EXTENSION_START_PATTERN.length).fill(0));
				try {
					return (new o.default).decodeRow(t, e, a)
				} catch (r) {
					return (new i.default).decodeRow(t, e, a)
				}
			}, u.EXTENSION_START_PATTERN = [1, 1, 2], u);

		function u() {}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(3),
			i = r(32),
			a = r(9),
			u = r(4),
			s = r(14),
			f = r(0),
			l = (d.prototype.decodeRow = function (t, e, r) {
				var n = this.decodeRowStringBuffer,
					i = this.decodeMiddle(e, r, n),
					s = n.toString(),
					f = d.parseExtensionString(s),
					l = [new u.default((r[0] + r[1]) / 2, t), new u.default(i, t)],
					c = new a.default(s, null, 0, l, o.default.UPC_EAN_EXTENSION, (new Date).getTime());
				return null != f && c.putAllMetadata(f), c
			}, d.prototype.decodeMiddle = function (t, e, r) {
				var o, a, u = this.decodeMiddleCounters;
				u[0] = 0, u[1] = 0, u[2] = 0, u[3] = 0;
				for (var s = t.getSize(), l = e[1], c = 0, h = 0; h < 5 && l < s; h++) {
					var p = i.default.decodeDigit(t, u, l, i.default.L_AND_G_PATTERNS);
					r += String.fromCharCode("0".charCodeAt(0) + p % 10);
					try {
						for (var _ = n(u), g = _.next(); !g.done; g = _.next()) l += g.value
					} catch (t) {
						o = {
							error: t
						}
					} finally {
						try {
							g && !g.done && (a = _.return) && a.call(_)
						} finally {
							if (o) throw o.error
						}
					}
					10 <= p && (c |= 1 << 4 - h), 4 !== h && (l = t.getNextSet(l), l = t.getNextUnset(l))
				}
				if (5 !== r.length) throw new f.default;
				var v = this.determineCheckDigit(c);
				if (d.extensionChecksum(r.toString()) !== v) throw new f.default;
				return l
			}, d.extensionChecksum = function (t) {
				for (var e = t.length, r = 0, n = e - 2; 0 <= n; n -= 2) r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
				for (r *= 3, n = e - 1; 0 <= n; n -= 2) r += t.charAt(n).charCodeAt(0) - "0".charCodeAt(0);
				return (r *= 3) % 10
			}, d.prototype.determineCheckDigit = function (t) {
				for (var e = 0; e < 10; e++)
					if (t === this.CHECK_DIGIT_ENCODINGS[e]) return e;
				throw new f.default
			}, d.parseExtensionString = function (t) {
				if (5 !== t.length) return null;
				var e = d.parseExtension5String(t);
				return null == e ? null : new Map([
					[s.default.SUGGESTED_PRICE, e]
				])
			}, d.parseExtension5String = function (t) {
				var e;
				switch (t.charAt(0)) {
				case "0":
					e = "£";
					break;
				case "5":
					e = "$";
					break;
				case "9":
					switch (t) {
					case "90000":
						return null;
					case "99991":
						return "0.00";
					case "99990":
						return "Used"
					}
					e = "";
					break;
				default:
					e = ""
				}
				var r = parseInt(t.substring(1)),
					n = r % 100;
				return e + (r / 100).toString() + "." + (n < 10 ? "0" + n : n.toString())
			}, d);

		function d() {
			this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = [0, 0, 0, 0], this.decodeRowStringBuffer =
				""
		}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(3),
			i = r(32),
			a = r(9),
			u = r(4),
			s = r(14),
			f = r(0),
			l = (d.prototype.decodeRow = function (t, e, r) {
				var n = this.decodeRowStringBuffer,
					i = this.decodeMiddle(e, r, n),
					s = n.toString(),
					f = d.parseExtensionString(s),
					l = [new u.default((r[0] + r[1]) / 2, t), new u.default(i, t)],
					c = new a.default(s, null, 0, l, o.default.UPC_EAN_EXTENSION, (new Date).getTime());
				return null != f && c.putAllMetadata(f), c
			}, d.prototype.decodeMiddle = function (t, e, r) {
				var o, a, u = this.decodeMiddleCounters;
				u[0] = 0, u[1] = 0, u[2] = 0, u[3] = 0;
				for (var s = t.getSize(), l = e[1], d = 0, c = 0; c < 2 && l < s; c++) {
					var h = i.default.decodeDigit(t, u, l, i.default.L_AND_G_PATTERNS);
					r += String.fromCharCode("0".charCodeAt(0) + h % 10);
					try {
						for (var p = n(u), _ = p.next(); !_.done; _ = p.next()) l += _.value
					} catch (t) {
						o = {
							error: t
						}
					} finally {
						try {
							_ && !_.done && (a = p.return) && a.call(p)
						} finally {
							if (o) throw o.error
						}
					}
					10 <= h && (d |= 1 << 1 - c), 1 !== c && (l = t.getNextSet(l), l = t.getNextUnset(l))
				}
				if (2 !== r.length) throw new f.default;
				if (parseInt(r.toString()) % 4 !== d) throw new f.default;
				return l
			}, d.parseExtensionString = function (t) {
				return 2 !== t.length ? null : new Map([
					[s.default.ISSUE_NUMBER, parseInt(t)]
				])
			}, d);

		function d() {
			this.decodeMiddleCounters = [0, 0, 0, 0], this.decodeRowStringBuffer = ""
		}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
			}, function (t, e) {
				function r() {
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
			}),
			i = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, u = r(3),
			s = r(74),
			f = (o(l, a = s.default), l.prototype.decodeMiddle = function (t, e, r) {
				var n, o, a, u, f = this.decodeMiddleCounters;
				f[0] = 0, f[1] = 0, f[2] = 0, f[3] = 0;
				for (var l = t.getSize(), d = e[1], c = 0; c < 4 && d < l; c++) {
					var h = s.default.decodeDigit(t, f, d, s.default.L_PATTERNS);
					r += String.fromCharCode("0".charCodeAt(0) + h);
					try {
						for (var p = i(f), _ = p.next(); !_.done; _ = p.next()) d += _.value
					} catch (t) {
						n = {
							error: t
						}
					} finally {
						try {
							_ && !_.done && (o = p.return) && o.call(p)
						} finally {
							if (n) throw n.error
						}
					}
				}
				for (d = s.default.findGuardPattern(t, d, !0, s.default.MIDDLE_PATTERN, new Array(s.default.MIDDLE_PATTERN.length).fill(0))[1], c =
					0; c < 4 && d < l; c++) {
					h = s.default.decodeDigit(t, f, d, s.default.L_PATTERNS), r += String.fromCharCode("0".charCodeAt(0) + h);
					try {
						for (var g = i(f), v = g.next(); !v.done; v = g.next()) d += v.value
					} catch (t) {
						a = {
							error: t
						}
					} finally {
						try {
							v && !v.done && (u = g.return) && u.call(g)
						} finally {
							if (a) throw a.error
						}
					}
				}
				return {
					rowOffset: d,
					resultString: r
				}
			}, l.prototype.getBarcodeFormat = function () {
				return u.default.EAN_8
			}, l);

		function l() {
			var t = a.call(this) || this;
			return t.decodeMiddleCounters = [0, 0, 0, 0], t
		}
		e.default = f
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(17),
			u = r(45),
			s = (o(f, i = a.BrowserCodeReader), f);

		function f(t) {
			return void 0 === t && (t = 500), i.call(this, new u.default, t) || this
		}
		e.BrowserDatamatrixCodeReader = s
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(27),
			i = r(20),
			a = r(109),
			u = r(111),
			s = r(112),
			f = r(11),
			l = (d.prototype.decode = function (t) {
				var e, r, o = new a.default(t),
					i = o.getVersion(),
					f = o.readCodewords(),
					l = u.default.getDataBlocks(f, i),
					d = 0;
				try {
					for (var c = n(l), h = c.next(); !h.done; h = c.next()) d += h.value.getNumDataCodewords()
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						h && !h.done && (r = c.return) && r.call(c)
					} finally {
						if (e) throw e.error
					}
				}
				for (var p = new Uint8Array(d), _ = l.length, g = 0; g < _; g++) {
					var v = l[g],
						w = v.getCodewords(),
						y = v.getNumDataCodewords();
					this.correctErrors(w, y);
					for (var E = 0; E < y; E++) p[E * _ + g] = w[E]
				}
				return s.default.decode(p)
			}, d.prototype.correctErrors = function (t, e) {
				t.length;
				var r = new Int32Array(t);
				try {
					this.rsDecoder.decode(r, t.length - e)
				} catch (t) {
					throw new f.default
				}
				for (var n = 0; n < e; n++) t[n] = r[n]
			}, d);

		function d() {
			this.rsDecoder = new o.default(i.default.DATA_MATRIX_FIELD_256)
		}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(12),
			o = r(110),
			i = r(2),
			a = r(1),
			u = (s.prototype.getVersion = function () {
				return this.version
			}, s.readVersion = function (t) {
				var e = t.getHeight(),
					r = t.getWidth();
				return o.default.getVersionForDimensions(e, r)
			}, s.prototype.readCodewords = function () {
				var t = new Int8Array(this.version.getTotalCodewords()),
					e = 0,
					r = 4,
					n = 0,
					o = this.mappingBitMatrix.getHeight(),
					a = this.mappingBitMatrix.getWidth(),
					u = !1,
					s = !1,
					f = !1,
					l = !1;
				do {
					if (r !== o || 0 !== n || u)
						if (r !== o - 2 || 0 !== n || 0 == (3 & a) || s)
							if (r !== o + 4 || 2 !== n || 0 != (7 & a) || f)
								if (r !== o - 2 || 0 !== n || 4 != (7 & a) || l) {
									for (; r < o && 0 <= n && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, o, a)), n += 2, 0 <= (r -=
											2) && n < a;);
									for (r += 1, n += 3; 0 <= r && n < a && !this.readMappingMatrix.get(n, r) && (t[e++] = 255 & this.readUtah(r, n, o, a)), n -=
										2, (r += 2) < o && 0 <= n;);
									r += 3, n += 1
								} else t[e++] = 255 & this.readCorner4(o, a), r -= 2, n += 2, l = !0;
					else t[e++] = 255 & this.readCorner3(o, a), r -= 2, n += 2, f = !0;
					else t[e++] = 255 & this.readCorner2(o, a), r -= 2, n += 2, s = !0;
					else t[e++] = 255 & this.readCorner1(o, a), r -= 2, n += 2, u = !0
				} while (r < o || n < a);
				if (e !== this.version.getTotalCodewords()) throw new i.default;
				return t
			}, s.prototype.readModule = function (t, e, r, n) {
				return t < 0 && (t += r, e += 4 - (r + 4 & 7)), e < 0 && (e += n, t += 4 - (n + 4 & 7)), this.readMappingMatrix.set(e, t), this.mappingBitMatrix
					.get(e, t)
			}, s.prototype.readUtah = function (t, e, r, n) {
				var o = 0;
				return this.readModule(t - 2, e - 2, r, n) && (o |= 1), o <<= 1, this.readModule(t - 2, e - 1, r, n) && (o |= 1), o <<= 1, this.readModule(
						t - 1, e - 2, r, n) && (o |= 1), o <<= 1, this.readModule(t - 1, e - 1, r, n) && (o |= 1), o <<= 1, this.readModule(t - 1, e, r,
						n) && (o |= 1), o <<= 1, this.readModule(t, e - 2, r, n) && (o |= 1), o <<= 1, this.readModule(t, e - 1, r, n) && (o |= 1), o <<=
					1, this.readModule(t, e, r, n) && (o |= 1), o
			}, s.prototype.readCorner1 = function (t, e) {
				var r = 0;
				return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, 1, t, e) && (r |= 1), r <<= 1, this.readModule(
					t - 1, 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |=
					1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(
					3, e - 1, t, e) && (r |= 1), r
			}, s.prototype.readCorner2 = function (t, e) {
				var r = 0;
				return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(
					t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 4, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 3, t, e) && (r |=
					1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(
					1, e - 1, t, e) && (r |= 1), r
			}, s.prototype.readCorner3 = function (t, e) {
				var r = 0;
				return this.readModule(t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(
					0, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |=
					1), r <<= 1, this.readModule(1, e - 3, t, e) && (r |= 1), r <<= 1, this.readModule(1, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(
					1, e - 1, t, e) && (r |= 1), r
			}, s.prototype.readCorner4 = function (t, e) {
				var r = 0;
				return this.readModule(t - 3, 0, t, e) && (r |= 1), r <<= 1, this.readModule(t - 2, 0, t, e) && (r |= 1), r <<= 1, this.readModule(
					t - 1, 0, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 2, t, e) && (r |= 1), r <<= 1, this.readModule(0, e - 1, t, e) && (r |=
					1), r <<= 1, this.readModule(1, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(2, e - 1, t, e) && (r |= 1), r <<= 1, this.readModule(
					3, e - 1, t, e) && (r |= 1), r
			}, s.prototype.extractDataRegion = function (t) {
				var e = this.version.getSymbolSizeRows(),
					r = this.version.getSymbolSizeColumns();
				if (t.getHeight() !== e) throw new a.default("Dimension of bitMatrix must match the version size");
				for (var o = this.version.getDataRegionSizeRows(), i = this.version.getDataRegionSizeColumns(), u = e / o | 0, s = r / i | 0, f = u *
						o, l = s * i, d = new n.default(l, f), c = 0; c < u; ++c)
					for (var h = c * o, p = 0; p < s; ++p)
						for (var _ = p * i, g = 0; g < o; ++g)
							for (var v = c * (o + 2) + 1 + g, w = h + g, y = 0; y < i; ++y) {
								var E = p * (i + 2) + 1 + y;
								if (t.get(E, v)) {
									var A = _ + y;
									d.set(A, w)
								}
							}
				return d
			}, s);

		function s(t) {
			var e = t.getHeight();
			if (e < 8 || 144 < e || 0 != (1 & e)) throw new i.default;
			this.version = s.readVersion(t), this.mappingBitMatrix = this.extractDataRegion(t), this.readMappingMatrix = new n.default(this.mappingBitMatrix
				.getWidth(), this.mappingBitMatrix.getHeight())
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(2),
			i = (a.prototype.getECCodewords = function () {
				return this.ecCodewords
			}, a.prototype.getECBlocks = function () {
				return this.ecBlocks
			}, a);

		function a(t, e, r) {
			this.ecCodewords = t, this.ecBlocks = [e], r && this.ecBlocks.push(r)
		}
		e.ECBlocks = i;
		var u = (s.prototype.getCount = function () {
			return this.count
		}, s.prototype.getDataCodewords = function () {
			return this.dataCodewords
		}, s);

		function s(t, e) {
			this.count = t, this.dataCodewords = e
		}
		e.ECB = u;
		var f = (l.prototype.getVersionNumber = function () {
			return this.versionNumber
		}, l.prototype.getSymbolSizeRows = function () {
			return this.symbolSizeRows
		}, l.prototype.getSymbolSizeColumns = function () {
			return this.symbolSizeColumns
		}, l.prototype.getDataRegionSizeRows = function () {
			return this.dataRegionSizeRows
		}, l.prototype.getDataRegionSizeColumns = function () {
			return this.dataRegionSizeColumns
		}, l.prototype.getTotalCodewords = function () {
			return this.totalCodewords
		}, l.prototype.getECBlocks = function () {
			return this.ecBlocks
		}, l.getVersionForDimensions = function (t, e) {
			var r, i;
			if (0 != (1 & t) || 0 != (1 & e)) throw new o.default;
			try {
				for (var a = n(l.VERSIONS), u = a.next(); !u.done; u = a.next()) {
					var s = u.value;
					if (s.symbolSizeRows === t && s.symbolSizeColumns === e) return s
				}
			} catch (t) {
				r = {
					error: t
				}
			} finally {
				try {
					u && !u.done && (i = a.return) && i.call(a)
				} finally {
					if (r) throw r.error
				}
			}
			throw new o.default
		}, l.prototype.toString = function () {
			return "" + this.versionNumber
		}, l.buildVersions = function () {
			return [new l(1, 10, 10, 8, 8, new i(5, new u(1, 3))), new l(2, 12, 12, 10, 10, new i(7, new u(1, 5))), new l(3, 14, 14, 12, 12,
					new i(10, new u(1, 8))), new l(4, 16, 16, 14, 14, new i(12, new u(1, 12))), new l(5, 18, 18, 16, 16, new i(14, new u(1, 18))),
				new l(6, 20, 20, 18, 18, new i(18, new u(1, 22))), new l(7, 22, 22, 20, 20, new i(20, new u(1, 30))), new l(8, 24, 24, 22, 22,
					new i(24, new u(1, 36))), new l(9, 26, 26, 24, 24, new i(28, new u(1, 44))), new l(10, 32, 32, 14, 14, new i(36, new u(1, 62))),
				new l(11, 36, 36, 16, 16, new i(42, new u(1, 86))), new l(12, 40, 40, 18, 18, new i(48, new u(1, 114))), new l(13, 44, 44, 20, 20,
					new i(56, new u(1, 144))), new l(14, 48, 48, 22, 22, new i(68, new u(1, 174))), new l(15, 52, 52, 24, 24, new i(42, new u(2, 102))),
				new l(16, 64, 64, 14, 14, new i(56, new u(2, 140))), new l(17, 72, 72, 16, 16, new i(36, new u(4, 92))), new l(18, 80, 80, 18, 18,
					new i(48, new u(4, 114))), new l(19, 88, 88, 20, 20, new i(56, new u(4, 144))), new l(20, 96, 96, 22, 22, new i(68, new u(4, 174))),
				new l(21, 104, 104, 24, 24, new i(56, new u(6, 136))), new l(22, 120, 120, 18, 18, new i(68, new u(6, 175))), new l(23, 132, 132,
					20, 20, new i(62, new u(8, 163))), new l(24, 144, 144, 22, 22, new i(62, new u(8, 156), new u(2, 155))), new l(25, 8, 18, 6, 16,
					new i(7, new u(1, 5))), new l(26, 8, 32, 6, 14, new i(11, new u(1, 10))), new l(27, 12, 26, 10, 24, new i(14, new u(1, 16))),
				new l(28, 12, 36, 10, 16, new i(18, new u(1, 22))), new l(29, 16, 36, 14, 16, new i(24, new u(1, 32))), new l(30, 16, 48, 14, 22,
					new i(28, new u(1, 49)))
			]
		}, l.VERSIONS = l.buildVersions(), l);

		function l(t, e, r, o, i, a) {
			var u, s;
			this.versionNumber = t, this.symbolSizeRows = e, this.symbolSizeColumns = r, this.dataRegionSizeRows = o, this.dataRegionSizeColumns =
				i;
			var f = 0,
				l = (this.ecBlocks = a).getECCodewords(),
				d = a.getECBlocks();
			try {
				for (var c = n(d), h = c.next(); !h.done; h = c.next()) {
					var p = h.value;
					f += p.getCount() * (p.getDataCodewords() + l)
				}
			} catch (t) {
				u = {
					error: t
				}
			} finally {
				try {
					h && !h.done && (s = c.return) && s.call(c)
				} finally {
					if (u) throw u.error
				}
			}
			this.totalCodewords = f
		}
		e.default = f
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(1),
			i = (a.getDataBlocks = function (t, e) {
				var r, i, u, s, f = e.getECBlocks(),
					l = 0,
					d = f.getECBlocks();
				try {
					for (var c = n(d), h = c.next(); !h.done; h = c.next()) l += (w = h.value).getCount()
				} catch (t) {
					r = {
						error: t
					}
				} finally {
					try {
						h && !h.done && (i = c.return) && i.call(c)
					} finally {
						if (r) throw r.error
					}
				}
				var p = new Array(l),
					_ = 0;
				try {
					for (var g = n(d), v = g.next(); !v.done; v = g.next())
						for (var w = v.value, y = 0; y < w.getCount(); y++) {
							var E = w.getDataCodewords(),
								A = f.getECCodewords() + E;
							p[_++] = new a(E, new Uint8Array(A))
						}
				} catch (t) {
					u = {
						error: t
					}
				} finally {
					try {
						v && !v.done && (s = g.return) && s.call(g)
					} finally {
						if (u) throw u.error
					}
				}
				var C = p[0].codewords.length - f.getECCodewords(),
					m = C - 1,
					I = 0;
				for (y = 0; y < m; y++)
					for (var S = 0; S < _; S++) p[S].codewords[y] = t[I++];
				var O = 24 === e.getVersionNumber(),
					T = O ? 8 : _;
				for (S = 0; S < T; S++) p[S].codewords[C - 1] = t[I++];
				var R = p[0].codewords.length;
				for (y = C; y < R; y++)
					for (S = 0; S < _; S++) {
						var b = O ? (S + 8) % _ : S,
							N = O && 7 < b ? y - 1 : y;
						p[b].codewords[N] = t[I++]
					}
				if (I !== t.length) throw new o.default;
				return p
			}, a.prototype.getNumDataCodewords = function () {
				return this.numDataCodewords
			}, a.prototype.getCodewords = function () {
				return this.codewords
			}, a);

		function a(t, e) {
			this.numDataCodewords = t, this.codewords = e
		}
		e.default = i
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n, o, i = r(26),
			a = r(46),
			u = r(5),
			s = r(23),
			f = r(28),
			l = r(2),
			d = r(16);
		(o = n = n || {})[o.PAD_ENCODE = 0] = "PAD_ENCODE", o[o.ASCII_ENCODE = 1] = "ASCII_ENCODE", o[o.C40_ENCODE = 2] = "C40_ENCODE", o[o.TEXT_ENCODE =
				3] = "TEXT_ENCODE", o[o.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", o[o.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", o[o.BASE256_ENCODE = 6] =
			"BASE256_ENCODE";
		var c = (h.decode = function (t) {
			var e = new a.default(t),
				r = new u.default,
				o = new u.default,
				s = new Array,
				f = n.ASCII_ENCODE;
			do {
				if (f === n.ASCII_ENCODE) f = this.decodeAsciiSegment(e, r, o);
				else {
					switch (f) {
					case n.C40_ENCODE:
						this.decodeC40Segment(e, r);
						break;
					case n.TEXT_ENCODE:
						this.decodeTextSegment(e, r);
						break;
					case n.ANSIX12_ENCODE:
						this.decodeAnsiX12Segment(e, r);
						break;
					case n.EDIFACT_ENCODE:
						this.decodeEdifactSegment(e, r);
						break;
					case n.BASE256_ENCODE:
						this.decodeBase256Segment(e, r, s);
						break;
					default:
						throw new l.default
					}
					f = n.ASCII_ENCODE
				}
			} while (f !== n.PAD_ENCODE && 0 < e.available());
			return 0 < o.length() && r.append(o.toString()), new i.default(t, r.toString(), 0 === s.length ? null : s, null)
		}, h.decodeAsciiSegment = function (t, e, r) {
			var o = !1;
			do {
				var i = t.readBits(8);
				if (0 === i) throw new l.default;
				if (i <= 128) return o && (i += 128), e.append(String.fromCharCode(i - 1)), n.ASCII_ENCODE;
				if (129 === i) return n.PAD_ENCODE;
				if (i <= 229) {
					var a = i - 130;
					a < 10 && e.append("0"), e.append("" + a)
				} else switch (i) {
				case 230:
					return n.C40_ENCODE;
				case 231:
					return n.BASE256_ENCODE;
				case 232:
					e.append(String.fromCharCode(29));
					break;
				case 233:
				case 234:
					break;
				case 235:
					o = !0;
					break;
				case 236:
					e.append("[)>05"), r.insert(0, "");
					break;
				case 237:
					e.append("[)>06"), r.insert(0, "");
					break;
				case 238:
					return n.ANSIX12_ENCODE;
				case 239:
					return n.TEXT_ENCODE;
				case 240:
					return n.EDIFACT_ENCODE;
				case 241:
					break;
				default:
					if (254 !== i || 0 !== t.available()) throw new l.default
				}
			} while (0 < t.available());
			return n.ASCII_ENCODE
		}, h.decodeC40Segment = function (t, e) {
			var r = !1,
				n = [],
				o = 0;
			do {
				if (8 === t.available()) return;
				var i = t.readBits(8);
				if (254 === i) return;
				this.parseTwoBytes(i, t.readBits(8), n);
				for (var a = 0; a < 3; a++) {
					var u = n[a];
					switch (o) {
					case 0:
						if (u < 3) o = u + 1;
						else {
							if (!(u < this.C40_BASIC_SET_CHARS.length)) throw new l.default;
							var s = this.C40_BASIC_SET_CHARS[u];
							r ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : e.append(s)
						}
						break;
					case 1:
						r ? (e.append(String.fromCharCode(u + 128)), r = !1) : e.append(String.fromCharCode(u)), o = 0;
						break;
					case 2:
						if (u < this.C40_SHIFT2_SET_CHARS.length) s = this.C40_SHIFT2_SET_CHARS[u], r ? (e.append(String.fromCharCode(s.charCodeAt(0) +
							128)), r = !1) : e.append(s);
						else switch (u) {
						case 27:
							e.append(String.fromCharCode(29));
							break;
						case 30:
							r = !0;
							break;
						default:
							throw new l.default
						}
						o = 0;
						break;
					case 3:
						r ? (e.append(String.fromCharCode(u + 224)), r = !1) : e.append(String.fromCharCode(u + 96)), o = 0;
						break;
					default:
						throw new l.default
					}
				}
			} while (0 < t.available())
		}, h.decodeTextSegment = function (t, e) {
			var r = !1,
				n = [],
				o = 0;
			do {
				if (8 === t.available()) return;
				var i = t.readBits(8);
				if (254 === i) return;
				this.parseTwoBytes(i, t.readBits(8), n);
				for (var a = 0; a < 3; a++) {
					var u = n[a];
					switch (o) {
					case 0:
						if (u < 3) o = u + 1;
						else {
							if (!(u < this.TEXT_BASIC_SET_CHARS.length)) throw new l.default;
							var s = this.TEXT_BASIC_SET_CHARS[u];
							r ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : e.append(s)
						}
						break;
					case 1:
						r ? (e.append(String.fromCharCode(u + 128)), r = !1) : e.append(String.fromCharCode(u)), o = 0;
						break;
					case 2:
						if (u < this.TEXT_SHIFT2_SET_CHARS.length) s = this.TEXT_SHIFT2_SET_CHARS[u], r ? (e.append(String.fromCharCode(s.charCodeAt(0) +
							128)), r = !1) : e.append(s);
						else switch (u) {
						case 27:
							e.append(String.fromCharCode(29));
							break;
						case 30:
							r = !0;
							break;
						default:
							throw new l.default
						}
						o = 0;
						break;
					case 3:
						if (!(u < this.TEXT_SHIFT3_SET_CHARS.length)) throw new l.default;
						s = this.TEXT_SHIFT3_SET_CHARS[u], r ? (e.append(String.fromCharCode(s.charCodeAt(0) + 128)), r = !1) : e.append(s), o = 0;
						break;
					default:
						throw new l.default
					}
				}
			} while (0 < t.available())
		}, h.decodeAnsiX12Segment = function (t, e) {
			var r = [];
			do {
				if (8 === t.available()) return;
				var n = t.readBits(8);
				if (254 === n) return;
				this.parseTwoBytes(n, t.readBits(8), r);
				for (var o = 0; o < 3; o++) {
					var i = r[o];
					switch (i) {
					case 0:
						e.append("\r");
						break;
					case 1:
						e.append("*");
						break;
					case 2:
						e.append(">");
						break;
					case 3:
						e.append(" ");
						break;
					default:
						if (i < 14) e.append(String.fromCharCode(i + 44));
						else {
							if (!(i < 40)) throw new l.default;
							e.append(String.fromCharCode(i + 51))
						}
					}
				}
			} while (0 < t.available())
		}, h.parseTwoBytes = function (t, e, r) {
			var n = (t << 8) + e - 1,
				o = Math.floor(n / 1600);
			n -= 1600 * (r[0] = o), o = Math.floor(n / 40), r[1] = o, r[2] = n - 40 * o
		}, h.decodeEdifactSegment = function (t, e) {
			do {
				if (t.available() <= 16) return;
				for (var r = 0; r < 4; r++) {
					var n = t.readBits(6);
					if (31 === n) {
						var o = 8 - t.getBitOffset();
						return void(8 != o && t.readBits(o))
					}
					0 == (32 & n) && (n |= 64), e.append(String.fromCharCode(n))
				}
			} while (0 < t.available())
		}, h.decodeBase256Segment = function (t, e, r) {
			var n, o = 1 + t.getByteOffset(),
				i = this.unrandomize255State(t.readBits(8), o++);
			if ((n = 0 === i ? t.available() / 8 | 0 : i < 250 ? i : 250 * (i - 249) + this.unrandomize255State(t.readBits(8), o++)) < 0) throw new l
				.default;
			for (var a = new Uint8Array(n), u = 0; u < n; u++) {
				if (t.available() < 8) throw new l.default;
				a[u] = this.unrandomize255State(t.readBits(8), o++)
			}
			r.push(a);
			try {
				e.append(s.default.decode(a, f.default.ISO88591))
			} catch (t) {
				throw new d.default("Platform does not support required encoding: " + t.message)
			}
		}, h.unrandomize255State = function (t, e) {
			var r = t - (149 * e % 255 + 1);
			return 0 <= r ? r : 256 + r
		}, h.C40_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G",
			"H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
		], h.C40_SHIFT2_SET_CHARS = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?",
			"@", "[", "\\", "]", "^", "_"
		], h.TEXT_BASIC_SET_CHARS = ["*", "*", "*", " ", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g",
			"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
		], h.TEXT_SHIFT2_SET_CHARS = h.C40_SHIFT2_SET_CHARS, h.TEXT_SHIFT3_SET_CHARS = ["`", "A", "B", "C", "D", "E", "F", "G", "H", "I",
			"J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "{", "|", "}", "~", String.fromCharCode(127)
		], h);

		function h() {}
		e.default = c
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			},
			o = this && this.__read || function (t, e) {
				var r = "function" == typeof Symbol && t[Symbol.iterator];
				if (!r) return t;
				var n, o, i = r.call(t),
					a = [];
				try {
					for (;
						(void 0 === e || 0 < e--) && !(n = i.next()).done;) a.push(n.value)
				} catch (t) {
					o = {
						error: t
					}
				} finally {
					try {
						n && !n.done && (r = i.return) && r.call(i)
					} finally {
						if (o) throw o.error
					}
				}
				return a
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = r(4),
			a = r(30),
			u = r(31),
			s = r(10),
			f = r(41),
			l = r(0),
			d = (c.prototype.detect = function () {
				var t, e, r = this.rectangleDetector.detect(),
					u = r[0],
					s = r[1],
					f = r[2],
					d = r[3],
					p = [];
				p.push(this.transitionsBetween(u, s)), p.push(this.transitionsBetween(u, f)), p.push(this.transitionsBetween(s, d)), p.push(this.transitionsBetween(
					f, d)), p.sort(h.resultPointsAndTransitionsComparator);
				var _ = p[0],
					g = p[1],
					v = new Map;
				c.increment(v, _.getFrom()), c.increment(v, _.getTo()), c.increment(v, g.getFrom()), c.increment(v, g.getTo());
				var w = null,
					y = null,
					E = null;
				try {
					for (var A = n(Array.from(v.entries())), C = A.next(); !C.done; C = A.next()) {
						var m = o(C.value, 2),
							I = m[0];
						2 === m[1] ? y = I : null == w ? w = I : E = I
					}
				} catch (e) {
					t = {
						error: e
					}
				} finally {
					try {
						C && !C.done && (e = A.return) && e.call(A)
					} finally {
						if (t) throw t.error
					}
				}
				if (null == w || null == y || null == E) throw new l.default;
				var S = [w, y, E];
				i.default.orderBestPatterns(S);
				var O = S[0];
				y = S[1];
				var T, R = S[2];
				T = v.has(u) ? v.has(s) ? v.has(f) ? d : f : s : u;
				var b, N, M = this.transitionsBetween(R, T).getTransitions(),
					P = this.transitionsBetween(O, T).getTransitions();
				if (1 == (1 & M) && M++, 1 == (1 & P) && P++, 7 * (P += 2) <= 4 * (M += 2) || 7 * M <= 4 * P) null == (N = this.correctTopRightRectangular(
					y, O, R, T, M, P)) && (N = T), 1 == (1 & (M = this.transitionsBetween(R, N).getTransitions())) && M++, 1 == (1 & (P = this.transitionsBetween(
					O, N).getTransitions())) && P++, b = c.sampleGrid(this.image, R, y, O, N, M, P);
				else {
					var D = Math.min(P, M);
					null == (N = this.correctTopRight(y, O, R, T, D)) && (N = T);
					var B = Math.max(this.transitionsBetween(R, N).getTransitions(), this.transitionsBetween(O, N).getTransitions());
					1 == (1 & ++B) && B++, b = c.sampleGrid(this.image, R, y, O, N, B, B)
				}
				return new a.default(b, [R, y, O, N])
			}, c.prototype.correctTopRightRectangular = function (t, e, r, n, o, a) {
				var u = c.distance(t, e) / o,
					s = c.distance(r, n),
					f = (n.getX() - r.getX()) / s,
					l = (n.getY() - r.getY()) / s,
					d = new i.default(n.getX() + u * f, n.getY() + u * l);
				u = c.distance(t, r) / a, s = c.distance(e, n), f = (n.getX() - e.getX()) / s, l = (n.getY() - e.getY()) / s;
				var h = new i.default(n.getX() + u * f, n.getY() + u * l);
				return this.isValid(d) ? this.isValid(h) ? Math.abs(o - this.transitionsBetween(r, d).getTransitions()) + Math.abs(a - this.transitionsBetween(
					e, d).getTransitions()) <= Math.abs(o - this.transitionsBetween(r, h).getTransitions()) + Math.abs(a - this.transitionsBetween(e,
					h).getTransitions()) ? d : h : d : this.isValid(h) ? h : null
			}, c.prototype.correctTopRight = function (t, e, r, n, o) {
				var a = c.distance(t, e) / o,
					u = c.distance(r, n),
					s = (n.getX() - r.getX()) / u,
					f = (n.getY() - r.getY()) / u,
					l = new i.default(n.getX() + a * s, n.getY() + a * f);
				a = c.distance(t, r) / o, u = c.distance(e, n), s = (n.getX() - e.getX()) / u, f = (n.getY() - e.getY()) / u;
				var d = new i.default(n.getX() + a * s, n.getY() + a * f);
				return this.isValid(l) ? this.isValid(d) ? Math.abs(this.transitionsBetween(r, l).getTransitions() - this.transitionsBetween(e, l).getTransitions()) <=
					Math.abs(this.transitionsBetween(r, d).getTransitions() - this.transitionsBetween(e, d).getTransitions()) ? l : d : l : this.isValid(
						d) ? d : null
			}, c.prototype.isValid = function (t) {
				return 0 <= t.getX() && t.getX() < this.image.getWidth() && 0 < t.getY() && t.getY() < this.image.getHeight()
			}, c.distance = function (t, e) {
				return s.default.round(i.default.distance(t, e))
			}, c.increment = function (t, e) {
				var r = t.get(e);
				t.set(e, null == r ? 1 : r + 1)
			}, c.sampleGrid = function (t, e, r, n, o, i, a) {
				return u.default.getInstance().sampleGrid(t, i, a, .5, .5, i - .5, .5, i - .5, a - .5, .5, a - .5, e.getX(), e.getY(), o.getX(), o.getY(),
					n.getX(), n.getY(), r.getX(), r.getY())
			}, c.prototype.transitionsBetween = function (t, e) {
				var r = 0 | t.getX(),
					n = 0 | t.getY(),
					o = 0 | e.getX(),
					i = 0 | e.getY(),
					a = Math.abs(i - n) > Math.abs(o - r);
				if (a) {
					var u = r;
					r = n, n = u, u = o, o = i, i = u
				}
				for (var s = Math.abs(o - r), f = Math.abs(i - n), l = -s / 2, d = n < i ? 1 : -1, c = r < o ? 1 : -1, p = 0, _ = this.image.get(a ?
						n : r, a ? r : n), g = r, v = n; g !== o; g += c) {
					var w = this.image.get(a ? v : g, a ? g : v);
					if (w !== _ && (p++, _ = w), 0 < (l += f)) {
						if (v === i) break;
						v += d, l -= s
					}
				}
				return new h(t, e, p)
			}, c);

		function c(t) {
			this.image = t, this.rectangleDetector = new f.default(t)
		}
		e.default = d;
		var h = (p.prototype.getFrom = function () {
			return this.from
		}, p.prototype.getTo = function () {
			return this.to
		}, p.prototype.getTransitions = function () {
			return this.transitions
		}, p.prototype.toString = function () {
			return this.from + "/" + this.to + "/" + this.transitions
		}, p.resultPointsAndTransitionsComparator = function (t, e) {
			return t.getTransitions() - e.getTransitions()
		}, p);

		function p(t, e, r) {
			this.from = t, this.to = e, this.transitions = r
		}
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(17),
			u = r(75),
			s = (o(f, i = a.BrowserCodeReader), f.prototype.decodeBitmap = function (t) {
				return this.reader.decodeWithState(t)
			}, f);

		function f(t, e) {
			void 0 === t && (t = null), void 0 === e && (e = 500);
			var r = new u.default;
			return r.setHints(t), i.call(this, r, e) || this
		}
		e.BrowserMultiFormatReader = s
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(12),
			i = r(20),
			a = r(27),
			u = r(116),
			s = r(77),
			f = r(120),
			l = r(121),
			d = r(11),
			c = (h.prototype.decodeBooleanArray = function (t, e) {
				return this.decodeBitMatrix(o.default.parseFromBooleanArray(t), e)
			}, h.prototype.decodeBitMatrix = function (t, e) {
				var r = new u.default(t),
					n = null;
				try {
					return this.decodeBitMatrixParser(r, e)
				} catch (t) {
					n = t
				}
				try {
					r.remask(), r.setMirror(!0), r.readVersion(), r.readFormatInformation(), r.mirror();
					var o = this.decodeBitMatrixParser(r, e);
					return o.setOther(new s.default(!0)), o
				} catch (t) {
					if (null !== n) throw n;
					throw t
				}
			}, h.prototype.decodeBitMatrixParser = function (t, e) {
				var r, o, i, a, u = t.readVersion(),
					s = t.readFormatInformation().getErrorCorrectionLevel(),
					d = t.readCodewords(),
					c = f.default.getDataBlocks(d, u, s),
					h = 0;
				try {
					for (var p = n(c), _ = p.next(); !_.done; _ = p.next()) h += (E = _.value).getNumDataCodewords()
				} catch (t) {
					r = {
						error: t
					}
				} finally {
					try {
						_ && !_.done && (o = p.return) && o.call(p)
					} finally {
						if (r) throw r.error
					}
				}
				var g = new Uint8Array(h),
					v = 0;
				try {
					for (var w = n(c), y = w.next(); !y.done; y = w.next()) {
						var E, A = (E = y.value).getCodewords(),
							C = E.getNumDataCodewords();
						this.correctErrors(A, C);
						for (var m = 0; m < C; m++) g[v++] = A[m]
					}
				} catch (t) {
					i = {
						error: t
					}
				} finally {
					try {
						y && !y.done && (a = w.return) && a.call(w)
					} finally {
						if (i) throw i.error
					}
				}
				return l.default.decode(g, u, s, e)
			}, h.prototype.correctErrors = function (t, e) {
				t.length;
				var r = new Int32Array(t);
				try {
					this.rsDecoder.decode(r, t.length - e)
				} catch (t) {
					throw new d.default
				}
				for (var n = 0; n < e; n++) t[n] = r[n]
			}, h);

		function h() {
			this.rsDecoder = new a.default(i.default.QR_CODE_FIELD_256)
		}
		e.default = c
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(48),
			o = r(76),
			i = r(119),
			a = r(2),
			u = (s.prototype.readFormatInformation = function () {
				if (null !== this.parsedFormatInfo && void 0 !== this.parsedFormatInfo) return this.parsedFormatInfo;
				for (var t = 0, e = 0; e < 6; e++) t = this.copyBit(e, 8, t);
				t = this.copyBit(7, 8, t), t = this.copyBit(8, 8, t), t = this.copyBit(8, 7, t);
				for (var r = 5; 0 <= r; r--) t = this.copyBit(8, r, t);
				var n = this.bitMatrix.getHeight(),
					i = 0,
					u = n - 7;
				for (r = n - 1; u <= r; r--) i = this.copyBit(8, r, i);
				for (e = n - 8; e < n; e++) i = this.copyBit(e, 8, i);
				if (this.parsedFormatInfo = o.default.decodeFormatInformation(t, i), null !== this.parsedFormatInfo) return this.parsedFormatInfo;
				throw new a.default
			}, s.prototype.readVersion = function () {
				if (null !== this.parsedVersion && void 0 !== this.parsedVersion) return this.parsedVersion;
				var t = this.bitMatrix.getHeight(),
					e = Math.floor((t - 17) / 4);
				if (e <= 6) return n.default.getVersionForNumber(e);
				for (var r = 0, o = t - 11, i = 5; 0 <= i; i--)
					for (var u = t - 9; o <= u; u--) r = this.copyBit(u, i, r);
				var s = n.default.decodeVersionInformation(r);
				if (null !== s && s.getDimensionForVersion() === t) return this.parsedVersion = s;
				for (r = 0, u = 5; 0 <= u; u--)
					for (i = t - 9; o <= i; i--) r = this.copyBit(u, i, r);
				if (null !== (s = n.default.decodeVersionInformation(r)) && s.getDimensionForVersion() === t) return this.parsedVersion = s;
				throw new a.default
			}, s.prototype.copyBit = function (t, e, r) {
				return (this.isMirror ? this.bitMatrix.get(e, t) : this.bitMatrix.get(t, e)) ? r << 1 | 1 : r << 1
			}, s.prototype.readCodewords = function () {
				var t = this.readFormatInformation(),
					e = this.readVersion(),
					r = i.default.values.get(t.getDataMask()),
					n = this.bitMatrix.getHeight();
				r.unmaskBitMatrix(this.bitMatrix, n);
				for (var o = e.buildFunctionPattern(), u = !0, s = new Uint8Array(e.getTotalCodewords()), f = 0, l = 0, d = 0, c = n - 1; 0 < c; c -=
					2) {
					6 === c && c--;
					for (var h = 0; h < n; h++)
						for (var p = u ? n - 1 - h : h, _ = 0; _ < 2; _++) o.get(c - _, p) || (d++, l <<= 1, this.bitMatrix.get(c - _, p) && (l |= 1), 8 ===
							d && (s[f++] = l, l = d = 0));
					u = !u
				}
				if (f !== e.getTotalCodewords()) throw new a.default;
				return s
			}, s.prototype.remask = function () {
				if (null !== this.parsedFormatInfo) {
					var t = i.default.values[this.parsedFormatInfo.getDataMask()],
						e = this.bitMatrix.getHeight();
					t.unmaskBitMatrix(this.bitMatrix, e)
				}
			}, s.prototype.setMirror = function (t) {
				this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = t
			}, s.prototype.mirror = function () {
				for (var t = this.bitMatrix, e = 0, r = t.getWidth(); e < r; e++)
					for (var n = e + 1, o = t.getHeight(); n < o; n++) t.get(e, n) !== t.get(n, e) && (t.flip(n, e), t.flip(e, n))
			}, s);

		function s(t) {
			var e = t.getHeight();
			if (e < 21 || 1 != (3 & e)) throw new a.default;
			this.bitMatrix = t
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = (i.prototype.getECCodewordsPerBlock = function () {
			return this.ecCodewordsPerBlock
		}, i.prototype.getNumBlocks = function () {
			var t, e, r = 0,
				o = this.ecBlocks;
			try {
				for (var i = n(o), a = i.next(); !a.done; a = i.next()) r += a.value.getCount()
			} catch (e) {
				t = {
					error: e
				}
			} finally {
				try {
					a && !a.done && (e = i.return) && e.call(i)
				} finally {
					if (t) throw t.error
				}
			}
			return r
		}, i.prototype.getTotalECCodewords = function () {
			return this.ecCodewordsPerBlock * this.getNumBlocks()
		}, i.prototype.getECBlocks = function () {
			return this.ecBlocks
		}, i);

		function i(t) {
			for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
			this.ecCodewordsPerBlock = t, this.ecBlocks = e
		}
		e.default = o
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getCount = function () {
			return this.count
		}, o.prototype.getDataCodewords = function () {
			return this.dataCodewords
		}, o);

		function o(t, e) {
			this.count = t, this.dataCodewords = e
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n, o;
		Object.defineProperty(e, "__esModule", {
				value: !0
			}), (o = n = e.DataMaskValues || (e.DataMaskValues = {}))[o.DATA_MASK_000 = 0] = "DATA_MASK_000", o[o.DATA_MASK_001 = 1] =
			"DATA_MASK_001", o[o.DATA_MASK_010 = 2] = "DATA_MASK_010", o[o.DATA_MASK_011 = 3] = "DATA_MASK_011", o[o.DATA_MASK_100 = 4] =
			"DATA_MASK_100", o[o.DATA_MASK_101 = 5] = "DATA_MASK_101", o[o.DATA_MASK_110 = 6] = "DATA_MASK_110", o[o.DATA_MASK_111 = 7] =
			"DATA_MASK_111";
		var i = (a.prototype.unmaskBitMatrix = function (t, e) {
			for (var r = 0; r < e; r++)
				for (var n = 0; n < e; n++) this.isMasked(r, n) && t.flip(n, r)
		}, a.values = new Map([
			[n.DATA_MASK_000, new a(n.DATA_MASK_000, function (t, e) {
				return 0 == (t + e & 1)
			})],
			[n.DATA_MASK_001, new a(n.DATA_MASK_001, function (t, e) {
				return 0 == (1 & t)
			})],
			[n.DATA_MASK_010, new a(n.DATA_MASK_010, function (t, e) {
				return e % 3 == 0
			})],
			[n.DATA_MASK_011, new a(n.DATA_MASK_011, function (t, e) {
				return (t + e) % 3 == 0
			})],
			[n.DATA_MASK_100, new a(n.DATA_MASK_100, function (t, e) {
				return 0 == (Math.floor(t / 2) + Math.floor(e / 3) & 1)
			})],
			[n.DATA_MASK_101, new a(n.DATA_MASK_101, function (t, e) {
				return t * e % 6 == 0
			})],
			[n.DATA_MASK_110, new a(n.DATA_MASK_110, function (t, e) {
				return t * e % 6 < 3
			})],
			[n.DATA_MASK_111, new a(n.DATA_MASK_111, function (t, e) {
				return 0 == (t + e + t * e % 3 & 1)
			})]
		]), a);

		function a(t, e) {
			this.value = t, this.isMasked = e
		}
		e.default = i
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(1),
			i = (a.getDataBlocks = function (t, e, r) {
				var i, u, s, f;
				if (t.length !== e.getTotalCodewords()) throw new o.default;
				var l = e.getECBlocksForLevel(r),
					d = 0,
					c = l.getECBlocks();
				try {
					for (var h = n(c), p = h.next(); !p.done; p = h.next()) d += (y = p.value).getCount()
				} catch (t) {
					i = {
						error: t
					}
				} finally {
					try {
						p && !p.done && (u = h.return) && u.call(h)
					} finally {
						if (i) throw i.error
					}
				}
				var _ = new Array(d),
					g = 0;
				try {
					for (var v = n(c), w = v.next(); !w.done; w = v.next())
						for (var y = w.value, E = 0; E < y.getCount(); E++) {
							var A = y.getDataCodewords(),
								C = l.getECCodewordsPerBlock() + A;
							_[g++] = new a(A, new Uint8Array(C))
						}
				} catch (t) {
					s = {
						error: t
					}
				} finally {
					try {
						w && !w.done && (f = v.return) && f.call(v)
					} finally {
						if (s) throw s.error
					}
				}
				for (var m = _[0].codewords.length, I = _.length - 1; 0 <= I && _[I].codewords.length !== m;) I--;
				I++;
				var S = m - l.getECCodewordsPerBlock(),
					O = 0;
				for (E = 0; E < S; E++)
					for (var T = 0; T < g; T++) _[T].codewords[E] = t[O++];
				for (T = I; T < g; T++) _[T].codewords[S] = t[O++];
				var R = _[0].codewords.length;
				for (E = S; E < R; E++)
					for (T = 0; T < g; T++) {
						var b = T < I ? E : E + 1;
						_[T].codewords[b] = t[O++]
					}
				return _
			}, a.prototype.getNumDataCodewords = function () {
				return this.numDataCodewords
			}, a.prototype.getCodewords = function () {
				return this.codewords
			}, a);

		function a(t, e) {
			this.numDataCodewords = t, this.codewords = e
		}
		e.default = i
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(46),
			o = r(22),
			i = r(26),
			a = r(28),
			u = r(78),
			s = r(5),
			f = r(23),
			l = r(2),
			d = (c.decode = function (t, e, r, a) {
				var f = new n.default(t),
					d = new s.default,
					h = new Array,
					p = -1,
					_ = -1;
				try {
					var g = null,
						v = !1,
						w = void 0;
					do {
						if (f.available() < 4) w = u.default.TERMINATOR;
						else {
							var y = f.readBits(4);
							w = u.default.forBits(y)
						}
						switch (w) {
						case u.default.TERMINATOR:
							break;
						case u.default.FNC1_FIRST_POSITION:
						case u.default.FNC1_SECOND_POSITION:
							v = !0;
							break;
						case u.default.STRUCTURED_APPEND:
							if (f.available() < 16) throw new l.default;
							p = f.readBits(8), _ = f.readBits(8);
							break;
						case u.default.ECI:
							var E = c.parseECIValue(f);
							if (null === (g = o.default.getCharacterSetECIByValue(E))) throw new l.default;
							break;
						case u.default.HANZI:
							var A = f.readBits(4),
								C = f.readBits(w.getCharacterCountBits(e));
							A === c.GB2312_SUBSET && c.decodeHanziSegment(f, d, C);
							break;
						default:
							var m = f.readBits(w.getCharacterCountBits(e));
							switch (w) {
							case u.default.NUMERIC:
								c.decodeNumericSegment(f, d, m);
								break;
							case u.default.ALPHANUMERIC:
								c.decodeAlphanumericSegment(f, d, m, v);
								break;
							case u.default.BYTE:
								c.decodeByteSegment(f, d, m, g, h, a);
								break;
							case u.default.KANJI:
								c.decodeKanjiSegment(f, d, m);
								break;
							default:
								throw new l.default
							}
						}
					} while (w !== u.default.TERMINATOR)
				} catch (t) {
					throw new l.default
				}
				return new i.default(t, d.toString(), 0 === h.length ? null : h, null === r ? null : r.toString(), p, _)
			}, c.decodeHanziSegment = function (t, e, r) {
				if (13 * r > t.available()) throw new l.default;
				for (var n = new Uint8Array(2 * r), o = 0; 0 < r;) {
					var i = t.readBits(13),
						u = i / 96 << 8 & 4294967295 | i % 96;
					u += u < 959 ? 41377 : 42657, n[o] = u >> 8 & 255, n[o + 1] = 255 & u, o += 2, r--
				}
				try {
					e.append(f.default.decode(n, a.default.GB2312))
				} catch (t) {
					throw new l.default(t)
				}
			}, c.decodeKanjiSegment = function (t, e, r) {
				if (13 * r > t.available()) throw new l.default;
				for (var n = new Uint8Array(2 * r), o = 0; 0 < r;) {
					var i = t.readBits(13),
						u = i / 192 << 8 & 4294967295 | i % 192;
					u += u < 7936 ? 33088 : 49472, n[o] = u >> 8, n[o + 1] = u, o += 2, r--
				}
				try {
					e.append(f.default.decode(n, a.default.SHIFT_JIS))
				} catch (t) {
					throw new l.default(t)
				}
			}, c.decodeByteSegment = function (t, e, r, n, o, i) {
				if (8 * r > t.available()) throw new l.default;
				for (var u, s = new Uint8Array(r), d = 0; d < r; d++) s[d] = t.readBits(8);
				u = null === n ? a.default.guessEncoding(s, i) : n.getName();
				try {
					e.append(f.default.decode(s, u))
				} catch (t) {
					throw new l.default(t)
				}
				o.push(s)
			}, c.toAlphaNumericChar = function (t) {
				if (t >= c.ALPHANUMERIC_CHARS.length) throw new l.default;
				return c.ALPHANUMERIC_CHARS[t]
			}, c.decodeAlphanumericSegment = function (t, e, r, n) {
				for (var o = e.length(); 1 < r;) {
					if (t.available() < 11) throw new l.default;
					var i = t.readBits(11);
					e.append(c.toAlphaNumericChar(Math.floor(i / 45))), e.append(c.toAlphaNumericChar(i % 45)), r -= 2
				}
				if (1 === r) {
					if (t.available() < 6) throw new l.default;
					e.append(c.toAlphaNumericChar(t.readBits(6)))
				}
				if (n)
					for (var a = o; a < e.length(); a++) "%" === e.charAt(a) && (a < e.length() - 1 && "%" === e.charAt(a + 1) ? e.deleteCharAt(a + 1) :
						e.setCharAt(a, String.fromCharCode(29)))
			}, c.decodeNumericSegment = function (t, e, r) {
				for (; 3 <= r;) {
					if (t.available() < 10) throw new l.default;
					var n = t.readBits(10);
					if (1e3 <= n) throw new l.default;
					e.append(c.toAlphaNumericChar(Math.floor(n / 100))), e.append(c.toAlphaNumericChar(Math.floor(n / 10) % 10)), e.append(c.toAlphaNumericChar(
						n % 10)), r -= 3
				}
				if (2 === r) {
					if (t.available() < 7) throw new l.default;
					var o = t.readBits(7);
					if (100 <= o) throw new l.default;
					e.append(c.toAlphaNumericChar(Math.floor(o / 10))), e.append(c.toAlphaNumericChar(o % 10))
				} else if (1 === r) {
					if (t.available() < 4) throw new l.default;
					var i = t.readBits(4);
					if (10 <= i) throw new l.default;
					e.append(c.toAlphaNumericChar(i))
				}
			}, c.parseECIValue = function (t) {
				var e = t.readBits(8);
				if (0 == (128 & e)) return 127 & e;
				if (128 == (192 & e)) return (63 & e) << 8 & 4294967295 | t.readBits(8);
				if (192 != (224 & e)) throw new l.default;
				return (31 & e) << 16 & 4294967295 | t.readBits(16)
			}, c.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", c.GB2312_SUBSET = 1, c);

		function c() {}
		e.default = d
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(8),
			o = r(4),
			i = r(30),
			a = r(31),
			u = r(42),
			s = r(10),
			f = r(48),
			l = r(123),
			d = r(126),
			c = r(0),
			h = (p.prototype.getImage = function () {
				return this.image
			}, p.prototype.getResultPointCallback = function () {
				return this.resultPointCallback
			}, p.prototype.detect = function (t) {
				this.resultPointCallback = null == t ? null : t.get(n.default.NEED_RESULT_POINT_CALLBACK);
				var e = new l.default(this.image, this.resultPointCallback).find(t);
				return this.processFinderPatternInfo(e)
			}, p.prototype.processFinderPatternInfo = function (t) {
				var e = t.getTopLeft(),
					r = t.getTopRight(),
					n = t.getBottomLeft(),
					o = this.calculateModuleSize(e, r, n);
				if (o < 1) throw new c.default("No pattern found in proccess finder.");
				var a = p.computeDimension(e, r, n, o),
					u = f.default.getProvisionalVersionForDimension(a),
					s = u.getDimensionForVersion() - 7,
					l = null;
				if (0 < u.getAlignmentPatternCenters().length)
					for (var d = r.getX() - e.getX() + n.getX(), h = r.getY() - e.getY() + n.getY(), _ = 1 - 3 / s, g = Math.floor(e.getX() + _ * (d -
							e.getX())), v = Math.floor(e.getY() + _ * (h - e.getY())), w = 4; w <= 16; w <<= 1) try {
						l = this.findAlignmentInRegion(o, g, v, w);
						break
					} catch (t) {
						if (!(t instanceof c.default)) throw t
					}
				var y, E = p.createTransform(e, r, n, l, a),
					A = p.sampleGrid(this.image, E, a);
				return y = null === l ? [n, e, r] : [n, e, r, l], new i.default(A, y)
			}, p.createTransform = function (t, e, r, n, o) {
				var i, a, s, f, l = o - 3.5;
				return f = s = null !== n ? (i = n.getX(), a = n.getY(), l - 3) : (i = e.getX() - t.getX() + r.getX(), a = e.getY() - t.getY() + r.getY(),
					l), u.default.quadrilateralToQuadrilateral(3.5, 3.5, l, 3.5, s, f, 3.5, l, t.getX(), t.getY(), e.getX(), e.getY(), i, a, r.getX(),
					r.getY())
			}, p.sampleGrid = function (t, e, r) {
				return a.default.getInstance().sampleGridWithTransform(t, r, r, e)
			}, p.computeDimension = function (t, e, r, n) {
				var i = s.default.round(o.default.distance(t, e) / n),
					a = s.default.round(o.default.distance(t, r) / n),
					u = Math.floor((i + a) / 2) + 7;
				switch (3 & u) {
				case 0:
					u++;
					break;
				case 2:
					u--;
					break;
				case 3:
					throw new c.default("Dimensions could be not found.")
				}
				return u
			}, p.prototype.calculateModuleSize = function (t, e, r) {
				return (this.calculateModuleSizeOneWay(t, e) + this.calculateModuleSizeOneWay(t, r)) / 2
			}, p.prototype.calculateModuleSizeOneWay = function (t, e) {
				var r = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.getX()), Math.floor(t.getY()), Math.floor(e.getX()), Math.floor(e.getY())),
					n = this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.getX()), Math.floor(e.getY()), Math.floor(t.getX()), Math.floor(t.getY()));
				return isNaN(r) ? n / 7 : isNaN(n) ? r / 7 : (r + n) / 14
			}, p.prototype.sizeOfBlackWhiteBlackRunBothWays = function (t, e, r, n) {
				var o = this.sizeOfBlackWhiteBlackRun(t, e, r, n),
					i = 1,
					a = t - (r - t);
				a < 0 ? (i = t / (t - a), a = 0) : a >= this.image.getWidth() && (i = (this.image.getWidth() - 1 - t) / (a - t), a = this.image.getWidth() -
					1);
				var u = Math.floor(e - (n - e) * i);
				return i = 1, u < 0 ? (i = e / (e - u), u = 0) : u >= this.image.getHeight() && (i = (this.image.getHeight() - 1 - e) / (u - e), u =
					this.image.getHeight() - 1), a = Math.floor(t + (a - t) * i), (o += this.sizeOfBlackWhiteBlackRun(t, e, a, u)) - 1
			}, p.prototype.sizeOfBlackWhiteBlackRun = function (t, e, r, n) {
				var o = Math.abs(n - e) > Math.abs(r - t);
				if (o) {
					var i = t;
					t = e, e = i, i = r, r = n, n = i
				}
				for (var a = Math.abs(r - t), u = Math.abs(n - e), f = -a / 2, l = t < r ? 1 : -1, d = e < n ? 1 : -1, c = 0, h = r + l, p = t, _ =
						e; p !== h; p += l) {
					var g = o ? _ : p,
						v = o ? p : _;
					if (1 === c === this.image.get(g, v)) {
						if (2 === c) return s.default.distance(p, _, t, e);
						c++
					}
					if (0 < (f += u)) {
						if (_ === n) break;
						_ += d, f -= a
					}
				}
				return 2 === c ? s.default.distance(r + l, n, t, e) : NaN
			}, p.prototype.findAlignmentInRegion = function (t, e, r, n) {
				var o = Math.floor(n * t),
					i = Math.max(0, e - o),
					a = Math.min(this.image.getWidth() - 1, e + o);
				if (a - i < 3 * t) throw new c.default("Alignment top exceeds estimated module size.");
				var u = Math.max(0, r - o),
					s = Math.min(this.image.getHeight() - 1, r + o);
				if (s - u < 3 * t) throw new c.default("Alignment bottom exceeds estimated module size.");
				return new d.default(this.image, i, u, a - i, s - u, t, this.resultPointCallback).find()
			}, p);

		function p(t) {
			this.image = t
		}
		e.default = h
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(8),
			i = r(4),
			a = r(124),
			u = r(125),
			s = r(0),
			f = (l.prototype.getImage = function () {
				return this.image
			}, l.prototype.getPossibleCenters = function () {
				return this.possibleCenters
			}, l.prototype.find = function (t) {
				var e = null != t && void 0 !== t.get(o.default.TRY_HARDER),
					r = null != t && void 0 !== t.get(o.default.PURE_BARCODE),
					n = this.image,
					a = n.getHeight(),
					s = n.getWidth(),
					f = Math.floor(3 * a / (4 * l.MAX_MODULES));
				(f < l.MIN_SKIP || e) && (f = l.MIN_SKIP);
				for (var d = !1, c = new Int32Array(5), h = f - 1; h < a && !d; h += f) {
					c[0] = 0, c[1] = 0, c[2] = 0, c[3] = 0;
					for (var p = c[4] = 0, _ = 0; _ < s; _++)
						if (n.get(_, h)) 1 == (1 & p) && p++, c[p]++;
						else if (0 == (1 & p))
						if (4 === p)
							if (l.foundPatternCross(c)) {
								if (!0 !== this.handlePossibleCenter(c, h, _, r)) {
									c[0] = c[2], c[1] = c[3], c[2] = c[4], c[3] = 1, c[4] = 0, p = 3;
									continue
								}
								if (f = 2, !0 === this.hasSkipped) d = this.haveMultiplyConfirmedCenters();
								else {
									var g = this.findRowSkip();
									g > c[2] && (h += g - c[2] - f, _ = s - 1)
								}
								c[p = 0] = 0, c[1] = 0, c[2] = 0, c[3] = 0, c[4] = 0
							} else c[0] = c[2], c[1] = c[3], c[2] = c[4], c[3] = 1, c[4] = 0, p = 3;
					else c[++p]++;
					else c[p]++;
					l.foundPatternCross(c) && !0 === this.handlePossibleCenter(c, h, s, r) && (f = c[0], this.hasSkipped && (d = this.haveMultiplyConfirmedCenters()))
				}
				var v = this.selectBestPatterns();
				return i.default.orderBestPatterns(v), new u.default(v)
			}, l.centerFromEnd = function (t, e) {
				return e - t[4] - t[3] - t[2] / 2
			}, l.foundPatternCross = function (t) {
				for (var e = 0, r = 0; r < 5; r++) {
					var n = t[r];
					if (0 === n) return !1;
					e += n
				}
				if (e < 7) return !1;
				var o = e / 7,
					i = o / 2;
				return Math.abs(o - t[0]) < i && Math.abs(o - t[1]) < i && Math.abs(3 * o - t[2]) < 3 * i && Math.abs(o - t[3]) < i && Math.abs(o -
					t[4]) < i
			}, l.prototype.getCrossCheckStateCount = function () {
				var t = this.crossCheckStateCount;
				return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t
			}, l.prototype.crossCheckDiagonal = function (t, e, r, n) {
				for (var o = this.getCrossCheckStateCount(), i = 0, a = this.image; i <= t && i <= e && a.get(e - i, t - i);) o[2]++, i++;
				if (t < i || e < i) return !1;
				for (; i <= t && i <= e && !a.get(e - i, t - i) && o[1] <= r;) o[1]++, i++;
				if (t < i || e < i || o[1] > r) return !1;
				for (; i <= t && i <= e && a.get(e - i, t - i) && o[0] <= r;) o[0]++, i++;
				if (o[0] > r) return !1;
				var u = a.getHeight(),
					s = a.getWidth();
				for (i = 1; t + i < u && e + i < s && a.get(e + i, t + i);) o[2]++, i++;
				if (u <= t + i || s <= e + i) return !1;
				for (; t + i < u && e + i < s && !a.get(e + i, t + i) && o[3] < r;) o[3]++, i++;
				if (u <= t + i || s <= e + i || o[3] >= r) return !1;
				for (; t + i < u && e + i < s && a.get(e + i, t + i) && o[4] < r;) o[4]++, i++;
				if (o[4] >= r) return !1;
				var f = o[0] + o[1] + o[2] + o[3] + o[4];
				return Math.abs(f - n) < 2 * n && l.foundPatternCross(o)
			}, l.prototype.crossCheckVertical = function (t, e, r, n) {
				for (var o = this.image, i = o.getHeight(), a = this.getCrossCheckStateCount(), u = t; 0 <= u && o.get(e, u);) a[2]++, u--;
				if (u < 0) return NaN;
				for (; 0 <= u && !o.get(e, u) && a[1] <= r;) a[1]++, u--;
				if (u < 0 || a[1] > r) return NaN;
				for (; 0 <= u && o.get(e, u) && a[0] <= r;) a[0]++, u--;
				if (a[0] > r) return NaN;
				for (u = t + 1; u < i && o.get(e, u);) a[2]++, u++;
				if (u === i) return NaN;
				for (; u < i && !o.get(e, u) && a[3] < r;) a[3]++, u++;
				if (u === i || a[3] >= r) return NaN;
				for (; u < i && o.get(e, u) && a[4] < r;) a[4]++, u++;
				if (a[4] >= r) return NaN;
				var s = a[0] + a[1] + a[2] + a[3] + a[4];
				return 5 * Math.abs(s - n) >= 2 * n ? NaN : l.foundPatternCross(a) ? l.centerFromEnd(a, u) : NaN
			}, l.prototype.crossCheckHorizontal = function (t, e, r, n) {
				for (var o = this.image, i = o.getWidth(), a = this.getCrossCheckStateCount(), u = t; 0 <= u && o.get(u, e);) a[2]++, u--;
				if (u < 0) return NaN;
				for (; 0 <= u && !o.get(u, e) && a[1] <= r;) a[1]++, u--;
				if (u < 0 || a[1] > r) return NaN;
				for (; 0 <= u && o.get(u, e) && a[0] <= r;) a[0]++, u--;
				if (a[0] > r) return NaN;
				for (u = t + 1; u < i && o.get(u, e);) a[2]++, u++;
				if (u === i) return NaN;
				for (; u < i && !o.get(u, e) && a[3] < r;) a[3]++, u++;
				if (u === i || a[3] >= r) return NaN;
				for (; u < i && o.get(u, e) && a[4] < r;) a[4]++, u++;
				if (a[4] >= r) return NaN;
				var s = a[0] + a[1] + a[2] + a[3] + a[4];
				return 5 * Math.abs(s - n) >= n ? NaN : l.foundPatternCross(a) ? l.centerFromEnd(a, u) : NaN
			}, l.prototype.handlePossibleCenter = function (t, e, r, n) {
				var o = t[0] + t[1] + t[2] + t[3] + t[4],
					i = l.centerFromEnd(t, r),
					u = this.crossCheckVertical(e, Math.floor(i), t[2], o);
				if (isNaN(u) || (i = this.crossCheckHorizontal(Math.floor(i), Math.floor(u), t[2], o), isNaN(i) || n && !this.crossCheckDiagonal(
						Math.floor(u), Math.floor(i), t[2], o))) return !1;
				for (var s = o / 7, f = !1, d = this.possibleCenters, c = 0, h = d.length; c < h; c++) {
					var p = d[c];
					if (p.aboutEquals(s, u, i)) {
						d[c] = p.combineEstimate(u, i, s), f = !0;
						break
					}
				}
				if (!f) {
					var _ = new a.default(i, u, s);
					d.push(_), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback.foundPossibleResultPoint(
						_)
				}
				return !0
			}, l.prototype.findRowSkip = function () {
				var t, e;
				if (this.possibleCenters.length <= 1) return 0;
				var r = null;
				try {
					for (var o = n(this.possibleCenters), i = o.next(); !i.done; i = o.next()) {
						var a = i.value;
						if (a.getCount() >= l.CENTER_QUORUM) {
							if (null != r) return this.hasSkipped = !0, Math.floor((Math.abs(r.getX() - a.getX()) - Math.abs(r.getY() - a.getY())) / 2);
							r = a
						}
					}
				} catch (e) {
					t = {
						error: e
					}
				} finally {
					try {
						i && !i.done && (e = o.return) && e.call(o)
					} finally {
						if (t) throw t.error
					}
				}
				return 0
			}, l.prototype.haveMultiplyConfirmedCenters = function () {
				var t, e, r, o, i = 0,
					a = 0,
					u = this.possibleCenters.length;
				try {
					for (var s = n(this.possibleCenters), f = s.next(); !f.done; f = s.next())(_ = f.value).getCount() >= l.CENTER_QUORUM && (i++, a +=
						_.getEstimatedModuleSize())
				} catch (e) {
					t = {
						error: e
					}
				} finally {
					try {
						f && !f.done && (e = s.return) && e.call(s)
					} finally {
						if (t) throw t.error
					}
				}
				if (i < 3) return !1;
				var d = a / u,
					c = 0;
				try {
					for (var h = n(this.possibleCenters), p = h.next(); !p.done; p = h.next()) {
						var _ = p.value;
						c += Math.abs(_.getEstimatedModuleSize() - d)
					}
				} catch (e) {
					r = {
						error: e
					}
				} finally {
					try {
						p && !p.done && (o = h.return) && o.call(h)
					} finally {
						if (r) throw r.error
					}
				}
				return c <= .05 * a
			}, l.prototype.selectBestPatterns = function () {
				var t, e, r, o, i = this.possibleCenters.length;
				if (i < 3) throw new s.default;
				var a, u = this.possibleCenters;
				if (3 < i) {
					var f = 0,
						l = 0;
					try {
						for (var d = n(this.possibleCenters), c = d.next(); !c.done; c = d.next()) {
							var h = c.value.getEstimatedModuleSize();
							f += h, l += h * h
						}
					} catch (e) {
						t = {
							error: e
						}
					} finally {
						try {
							c && !c.done && (e = d.return) && e.call(d)
						} finally {
							if (t) throw t.error
						}
					}
					a = f / i;
					var p = Math.sqrt(l / i - a * a);
					u.sort(function (t, e) {
						var r = Math.abs(e.getEstimatedModuleSize() - a),
							n = Math.abs(t.getEstimatedModuleSize() - a);
						return r < n ? -1 : n < r ? 1 : 0
					});
					for (var _ = Math.max(.2 * a, p), g = 0; g < u.length && 3 < u.length; g++) {
						var v = u[g];
						Math.abs(v.getEstimatedModuleSize() - a) > _ && (u.splice(g, 1), g--)
					}
				}
				if (3 < u.length) {
					f = 0;
					try {
						for (var w = n(u), y = w.next(); !y.done; y = w.next()) f += y.value.getEstimatedModuleSize()
					} catch (e) {
						r = {
							error: e
						}
					} finally {
						try {
							y && !y.done && (o = w.return) && o.call(w)
						} finally {
							if (r) throw r.error
						}
					}
					a = f / u.length, u.sort(function (t, e) {
						if (e.getCount() !== t.getCount()) return e.getCount() - t.getCount();
						var r = Math.abs(e.getEstimatedModuleSize() - a),
							n = Math.abs(t.getEstimatedModuleSize() - a);
						return r < n ? 1 : n < r ? -1 : 0
					}), u.splice(3)
				}
				return [u[0], u[1], u[2]]
			}, l.CENTER_QUORUM = 2, l.MIN_SKIP = 3, l.MAX_MODULES = 57, l);

		function l(t, e) {
			this.image = t, this.resultPointCallback = e, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback =
				e
		}
		e.default = f
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(4),
			u = (o(s, i = a.default), s.prototype.getEstimatedModuleSize = function () {
				return this.estimatedModuleSize
			}, s.prototype.getCount = function () {
				return this.count
			}, s.prototype.aboutEquals = function (t, e, r) {
				if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
					var n = Math.abs(t - this.estimatedModuleSize);
					return n <= 1 || n <= this.estimatedModuleSize
				}
				return !1
			}, s.prototype.combineEstimate = function (t, e, r) {
				var n = this.count + 1;
				return new s((this.count * this.getX() + e) / n, (this.count * this.getY() + t) / n, (this.count * this.estimatedModuleSize + r) /
					n, n)
			}, s);

		function s(t, e, r, n) {
			var o = i.call(this, t, e) || this;
			return o.estimatedModuleSize = r, void 0 === (o.count = n) && (o.count = 1), o
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getBottomLeft = function () {
			return this.bottomLeft
		}, o.prototype.getTopLeft = function () {
			return this.topLeft
		}, o.prototype.getTopRight = function () {
			return this.topRight
		}, o);

		function o(t) {
			this.bottomLeft = t[0], this.topLeft = t[1], this.topRight = t[2]
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(127),
			i = r(0),
			a = (u.prototype.find = function () {
				for (var t = this.startX, e = this.height, r = t + this.width, n = this.startY + e / 2, o = new Int32Array(3), a = this.image, u =
						0; u < e; u++) {
					var s = n + (0 == (1 & u) ? Math.floor((u + 1) / 2) : -Math.floor((u + 1) / 2));
					o[0] = 0, o[1] = 0, o[2] = 0;
					for (var f = t; f < r && !a.get(f, s);) f++;
					for (var l = 0; f < r;) {
						if (a.get(f, s))
							if (1 === l) o[1]++;
							else if (2 === l) {
							var d;
							if (this.foundPatternCross(o) && null !== (d = this.handlePossibleCenter(o, s, f))) return d;
							o[0] = o[2], o[1] = 1, o[2] = 0, l = 1
						} else o[++l]++;
						else 1 === l && l++, o[l]++;
						f++
					}
					if (this.foundPatternCross(o) && null !== (d = this.handlePossibleCenter(o, s, r))) return d
				}
				if (0 !== this.possibleCenters.length) return this.possibleCenters[0];
				throw new i.default
			}, u.centerFromEnd = function (t, e) {
				return e - t[2] - t[1] / 2
			}, u.prototype.foundPatternCross = function (t) {
				for (var e = this.moduleSize, r = e / 2, n = 0; n < 3; n++)
					if (Math.abs(e - t[n]) >= r) return !1;
				return !0
			}, u.prototype.crossCheckVertical = function (t, e, r, n) {
				var o = this.image,
					i = o.getHeight(),
					a = this.crossCheckStateCount;
				a[0] = 0, a[1] = 0, a[2] = 0;
				for (var s = t; 0 <= s && o.get(e, s) && a[1] <= r;) a[1]++, s--;
				if (s < 0 || a[1] > r) return NaN;
				for (; 0 <= s && !o.get(e, s) && a[0] <= r;) a[0]++, s--;
				if (a[0] > r) return NaN;
				for (s = t + 1; s < i && o.get(e, s) && a[1] <= r;) a[1]++, s++;
				if (s === i || a[1] > r) return NaN;
				for (; s < i && !o.get(e, s) && a[2] <= r;) a[2]++, s++;
				if (a[2] > r) return NaN;
				var f = a[0] + a[1] + a[2];
				return 5 * Math.abs(f - n) >= 2 * n ? NaN : this.foundPatternCross(a) ? u.centerFromEnd(a, s) : NaN
			}, u.prototype.handlePossibleCenter = function (t, e, r) {
				var i, a, s = t[0] + t[1] + t[2],
					f = u.centerFromEnd(t, r),
					l = this.crossCheckVertical(e, f, 2 * t[1], s);
				if (!isNaN(l)) {
					var d = (t[0] + t[1] + t[2]) / 3;
					try {
						for (var c = n(this.possibleCenters), h = c.next(); !h.done; h = c.next()) {
							var p = h.value;
							if (p.aboutEquals(d, l, f)) return p.combineEstimate(l, f, d)
						}
					} catch (t) {
						i = {
							error: t
						}
					} finally {
						try {
							h && !h.done && (a = c.return) && a.call(c)
						} finally {
							if (i) throw i.error
						}
					}
					var _ = new o.default(f, l, d);
					this.possibleCenters.push(_), null !== this.resultPointCallback && void 0 !== this.resultPointCallback && this.resultPointCallback
						.foundPossibleResultPoint(_)
				}
				return null
			}, u);

		function u(t, e, r, n, o, i, a) {
			this.image = t, this.startX = e, this.startY = r, this.width = n, this.height = o, this.moduleSize = i, this.resultPointCallback = a,
				this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3)
		}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(4),
			u = (o(s, i = a.default), s.prototype.aboutEquals = function (t, e, r) {
				if (Math.abs(e - this.getY()) <= t && Math.abs(r - this.getX()) <= t) {
					var n = Math.abs(t - this.estimatedModuleSize);
					return n <= 1 || n <= this.estimatedModuleSize
				}
				return !1
			}, s.prototype.combineEstimate = function (t, e, r) {
				return new s((this.getX() + e) / 2, (this.getY() + t) / 2, (this.estimatedModuleSize + r) / 2)
			}, s);

		function s(t, e, r) {
			var n = i.call(this, t, e) || this;
			return n.estimatedModuleSize = r, n
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(4),
			i = r(6),
			a = r(19),
			u = r(129),
			s = (f.detectMultiple = function (t, e, r) {
					var n = t.getBlackMatrix(),
						o = f.detect(r, n);
					return o.length || ((n = n.clone()).rotate180(), o = f.detect(r, n)), new u.default(n, o)
				}, f.detect = function (t, e) {
					for (var r, o, i = new Array, a = 0, u = 0, s = !1; a < e.getHeight();) {
						var l = f.findVertices(e, a, u);
						if (null != l[0] || null != l[3]) {
							if (s = !0, i.push(l), !t) break;
							a = null != l[2] ? (u = Math.trunc(l[2].getX()), Math.trunc(l[2].getY())) : (u = Math.trunc(l[4].getX()), Math.trunc(l[4].getY()))
						} else {
							if (!s) break;
							s = !1, u = 0;
							try {
								for (var d = n(i), c = d.next(); !c.done; c = d.next()) {
									var h = c.value;
									null != h[1] && (a = Math.trunc(Math.max(a, h[1].getY()))), null != h[3] && (a = Math.max(a, Math.trunc(h[3].getY())))
								}
							} catch (t) {
								r = {
									error: t
								}
							} finally {
								try {
									c && !c.done && (o = d.return) && o.call(d)
								} finally {
									if (r) throw r.error
								}
							}
							a += f.ROW_STEP
						}
					}
					return i
				}, f.findVertices = function (t, e, r) {
					var n = t.getHeight(),
						o = t.getWidth(),
						i = new Array(8);
					return f.copyToResult(i, f.findRowsWithPattern(t, n, o, e, r, f.START_PATTERN), f.INDEXES_START_PATTERN), null != i[4] && (r = Math
							.trunc(i[4].getX()), e = Math.trunc(i[4].getY())), f.copyToResult(i, f.findRowsWithPattern(t, n, o, e, r, f.STOP_PATTERN), f.INDEXES_STOP_PATTERN),
						i
				}, f.copyToResult = function (t, e, r) {
					for (var n = 0; n < r.length; n++) t[r[n]] = e[n]
				}, f.findRowsWithPattern = function (t, e, r, n, i, u) {
					for (var s = new Array(4), l = !1, d = new Int32Array(u.length); n < e; n += f.ROW_STEP)
						if (null != (_ = f.findGuardPattern(t, i, n, r, !1, u, d))) {
							for (; 0 < n;) {
								if (null == (p = f.findGuardPattern(t, i, --n, r, !1, u, d))) {
									n++;
									break
								}
								_ = p
							}
							s[0] = new o.default(_[0], n), s[1] = new o.default(_[1], n), l = !0;
							break
						}
					var c = n + 1;
					if (l) {
						for (var h = 0, p = Int32Array.from([Math.trunc(s[0].getX()), Math.trunc(s[1].getX())]); c < e; c++) {
							var _;
							if (null != (_ = f.findGuardPattern(t, p[0], c, r, !1, u, d)) && Math.abs(p[0] - _[0]) < f.MAX_PATTERN_DRIFT && Math.abs(p[1] - _[
									1]) < f.MAX_PATTERN_DRIFT) p = _, h = 0;
							else {
								if (f.SKIPPED_ROW_COUNT_MAX < h) break;
								h++
							}
						}
						c -= h + 1, s[2] = new o.default(p[0], c), s[3] = new o.default(p[1], c)
					}
					return c - n < f.BARCODE_MIN_HEIGHT && a.default.fill(s, null), s
				}, f.findGuardPattern = function (t, e, r, n, o, u, s) {
					a.default.fillWithin(s, 0, s.length, 0);
					for (var l = e, d = 0; t.get(l, r) && 0 < l && d++ < f.MAX_PIXEL_DRIFT;) l--;
					for (var c = l, h = 0, p = u.length, _ = o; c < n; c++)
						if (t.get(c, r) !== _) s[h]++;
						else {
							if (h === p - 1) {
								if (f.patternMatchVariance(s, u, f.MAX_INDIVIDUAL_VARIANCE) < f.MAX_AVG_VARIANCE) return new Int32Array([l, c]);
								l += s[0] + s[1], i.default.arraycopy(s, 2, s, 0, h - 1), s[h - 1] = 0, s[h] = 0, h--
							} else h++;
							s[h] = 1, _ = !_
						}
					return h === p - 1 && f.patternMatchVariance(s, u, f.MAX_INDIVIDUAL_VARIANCE) < f.MAX_AVG_VARIANCE ? new Int32Array([l, c - 1]) :
						null
				}, f.patternMatchVariance = function (t, e, r) {
					for (var n = t.length, o = 0, i = 0, a = 0; a < n; a++) o += t[a], i += e[a];
					if (o < i) return 1 / 0;
					var u = o / i;
					r *= u;
					for (var s = 0, f = 0; f < n; f++) {
						var l = t[f],
							d = e[f] * u,
							c = d < l ? l - d : d - l;
						if (r < c) return 1 / 0;
						s += c
					}
					return s / o
				}, f.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]), f.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]), f.MAX_AVG_VARIANCE =
				.42, f.MAX_INDIVIDUAL_VARIANCE = .8, f.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]), f.STOP_PATTERN = Int32Array.from([
					7, 1, 1, 3, 1, 1, 1, 2, 1
				]), f.MAX_PIXEL_DRIFT = 3, f.MAX_PATTERN_DRIFT = 5, f.SKIPPED_ROW_COUNT_MAX = 25, f.ROW_STEP = 5, f.BARCODE_MIN_HEIGHT = 10, f);

		function f() {}
		e.default = s
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getBits = function () {
			return this.bits
		}, o.prototype.getPoints = function () {
			return this.points
		}, o);

		function o(t, e) {
			this.bits = t, this.points = e
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(11),
			i = r(2),
			a = r(0),
			u = r(10),
			s = r(21),
			f = r(131),
			l = r(81),
			d = r(134),
			c = r(136),
			h = r(82),
			p = r(137),
			_ = r(83),
			g = r(138),
			v = r(139),
			w = r(49),
			y = (E.decode = function (t, e, r, n, o, i, u) {
				for (var s, f = new l.default(t, e, r, n, o), c = null, p = null, _ = !0;; _ = !1) {
					if (null != e && (c = E.getRowIndicatorColumn(t, f, e, !0, i, u)), null != n && (p = E.getRowIndicatorColumn(t, f, n, !1, i, u)),
						null == (s = E.merge(c, p))) throw a.default.getNotFoundInstance();
					var g = s.getBoundingBox();
					if (!_ || null == g || !(g.getMinY() < f.getMinY() || g.getMaxY() > f.getMaxY())) break;
					f = g
				}
				s.setBoundingBox(f);
				var v = s.getBarcodeColumnCount() + 1;
				s.setDetectionResultColumn(0, c), s.setDetectionResultColumn(v, p);
				for (var w = null != c, y = 1; y <= v; y++) {
					var A = w ? y : v - y;
					if (void 0 === s.getDetectionResultColumn(A)) {
						var C = void 0;
						C = 0 === A || A === v ? new d.default(f, 0 === A) : new h.default(f), s.setDetectionResultColumn(A, C);
						for (var m = -1, I = m, S = f.getMinY(); S <= f.getMaxY(); S++) {
							if ((m = E.getStartColumn(s, A, S, w)) < 0 || m > f.getMaxX()) {
								if (-1 === I) continue;
								m = I
							}
							var O = E.detectCodeword(t, f.getMinX(), f.getMaxX(), w, m, S, i, u);
							null != O && (C.setCodeword(S, O), I = m, i = Math.min(i, O.getWidth()), u = Math.max(u, O.getWidth()))
						}
					}
				}
				return E.createDecoderResult(s)
			}, E.merge = function (t, e) {
				if (null == t && null == e) return null;
				var r = E.getBarcodeMetadata(t, e);
				if (null == r) return null;
				var n = l.default.merge(E.adjustBoundingBox(t), E.adjustBoundingBox(e));
				return new c.default(r, n)
			}, E.adjustBoundingBox = function (t) {
				var e, r;
				if (null == t) return null;
				var o = t.getRowHeights();
				if (null == o) return null;
				var i = E.getMax(o),
					a = 0;
				try {
					for (var u = n(o), s = u.next(); !s.done; s = u.next()) {
						var f = s.value;
						if (a += i - f, 0 < f) break
					}
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						s && !s.done && (r = u.return) && r.call(u)
					} finally {
						if (e) throw e.error
					}
				}
				for (var l = t.getCodewords(), d = 0; 0 < a && null == l[d]; d++) a--;
				var c = 0;
				for (d = o.length - 1; 0 <= d && (c += i - o[d], !(0 < o[d])); d--);
				for (d = l.length - 1; 0 < c && null == l[d]; d--) c--;
				return t.getBoundingBox().addMissingRows(a, c, t.isLeft())
			}, E.getMax = function (t) {
				var e, r, o = -1;
				try {
					for (var i = n(t), a = i.next(); !a.done; a = i.next()) {
						var u = a.value;
						o = Math.max(o, u)
					}
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						a && !a.done && (r = i.return) && r.call(i)
					} finally {
						if (e) throw e.error
					}
				}
				return o
			}, E.getBarcodeMetadata = function (t, e) {
				var r, n;
				return null == t || null == (r = t.getBarcodeMetadata()) ? null == e ? null : e.getBarcodeMetadata() : null == e || null == (n = e.getBarcodeMetadata()) ?
					r : r.getColumnCount() !== n.getColumnCount() && r.getErrorCorrectionLevel() !== n.getErrorCorrectionLevel() && r.getRowCount() !==
					n.getRowCount() ? null : r
			}, E.getRowIndicatorColumn = function (t, e, r, n, o, i) {
				for (var a = new d.default(e, n), u = 0; u < 2; u++)
					for (var s = 0 === u ? 1 : -1, f = Math.trunc(Math.trunc(r.getX())), l = Math.trunc(Math.trunc(r.getY())); l <= e.getMaxY() && l >=
						e.getMinY(); l += s) {
						var c = E.detectCodeword(t, 0, t.getWidth(), n, f, l, o, i);
						null != c && (a.setCodeword(l, c), f = n ? c.getStartX() : c.getEndX())
					}
				return a
			}, E.adjustCodewordCount = function (t, e) {
				var r = e[0][1],
					n = r.getValue(),
					o = t.getBarcodeColumnCount() * t.getBarcodeRowCount() - E.getNumberOfECCodeWords(t.getBarcodeECLevel());
				if (0 === n.length) {
					if (o < 1 || o > s.default.MAX_CODEWORDS_IN_BARCODE) throw a.default.getNotFoundInstance();
					r.setValue(o)
				} else n[0] !== o && r.setValue(o)
			}, E.createDecoderResult = function (t) {
				var e = E.createBarcodeMatrix(t);
				E.adjustCodewordCount(t, e);
				for (var r = new Array, n = new Int32Array(t.getBarcodeRowCount() * t.getBarcodeColumnCount()), o = [], i = new Array, a = 0; a < t
					.getBarcodeRowCount(); a++)
					for (var u = 0; u < t.getBarcodeColumnCount(); u++) {
						var f = e[a][u + 1].getValue(),
							l = a * t.getBarcodeColumnCount() + u;
						0 === f.length ? r.push(l) : 1 === f.length ? n[l] = f[0] : (i.push(l), o.push(f))
					}
				for (var d = new Array(o.length), c = 0; c < d.length; c++) d[c] = o[c];
				return E.createDecoderResultFromAmbiguousValues(t.getBarcodeECLevel(), n, s.default.toIntArray(r), s.default.toIntArray(i), d)
			}, E.createDecoderResultFromAmbiguousValues = function (t, e, r, n, i) {
				for (var a = new Int32Array(n.length), u = 100; 0 < u--;) {
					for (var s = 0; s < a.length; s++) e[n[s]] = i[s][a[s]];
					try {
						return E.decodeCodewords(e, t, r)
					} catch (t) {
						if (!(t instanceof o.default)) throw t
					}
					if (0 === a.length) throw o.default.getChecksumInstance();
					for (s = 0; s < a.length; s++) {
						if (a[s] < i[s].length - 1) {
							a[s]++;
							break
						}
						if (a[s] = 0, s === a.length - 1) throw o.default.getChecksumInstance()
					}
				}
				throw o.default.getChecksumInstance()
			}, E.createBarcodeMatrix = function (t) {
				for (var e, r, o, i, a = Array.from({
						length: t.getBarcodeRowCount()
					}, function () {
						return new Array(t.getBarcodeColumnCount() + 2)
					}), u = 0; u < a.length; u++)
					for (var s = 0; s < a[u].length; s++) a[u][s] = new _.default;
				var f = 0;
				try {
					for (var l = n(t.getDetectionResultColumns()), d = l.next(); !d.done; d = l.next()) {
						var c = d.value;
						if (null != c) try {
							for (var h = n(c.getCodewords()), p = h.next(); !p.done; p = h.next()) {
								var g = p.value;
								if (null != g) {
									var v = g.getRowNumber();
									if (0 <= v) {
										if (v >= a.length) continue;
										a[v][f].setValue(g.getValue())
									}
								}
							}
						} catch (t) {
							o = {
								error: t
							}
						} finally {
							try {
								p && !p.done && (i = h.return) && i.call(h)
							} finally {
								if (o) throw o.error
							}
						}
						f++
					}
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						d && !d.done && (r = l.return) && r.call(l)
					} finally {
						if (e) throw e.error
					}
				}
				return a
			}, E.isValidBarcodeColumn = function (t, e) {
				return 0 <= e && e <= t.getBarcodeColumnCount() + 1
			}, E.getStartColumn = function (t, e, r, o) {
				var i, a, u = o ? 1 : -1,
					s = null;
				if (E.isValidBarcodeColumn(t, e - u) && (s = t.getDetectionResultColumn(e - u).getCodeword(r)), null != s) return o ? s.getEndX() :
					s.getStartX();
				if (null != (s = t.getDetectionResultColumn(e).getCodewordNearby(r))) return o ? s.getStartX() : s.getEndX();
				if (E.isValidBarcodeColumn(t, e - u) && (s = t.getDetectionResultColumn(e - u).getCodewordNearby(r)), null != s) return o ? s.getEndX() :
					s.getStartX();
				for (var f = 0; E.isValidBarcodeColumn(t, e - u);) {
					e -= u;
					try {
						for (var l = n(t.getDetectionResultColumn(e).getCodewords()), d = l.next(); !d.done; d = l.next()) {
							var c = d.value;
							if (null != c) return (o ? c.getEndX() : c.getStartX()) + u * f * (c.getEndX() - c.getStartX())
						}
					} catch (t) {
						i = {
							error: t
						}
					} finally {
						try {
							d && !d.done && (a = l.return) && a.call(l)
						} finally {
							if (i) throw i.error
						}
					}
					f++
				}
				return o ? t.getBoundingBox().getMinX() : t.getBoundingBox().getMaxX()
			}, E.detectCodeword = function (t, e, r, n, o, i, a, f) {
				o = E.adjustCodewordStartColumn(t, e, r, n, o, i);
				var l, d = E.getModuleBitCount(t, e, r, n, o, i);
				if (null == d) return null;
				var c = u.default.sum(d);
				if (n) l = o + c;
				else {
					for (var h = 0; h < d.length / 2; h++) {
						var _ = d[h];
						d[h] = d[d.length - 1 - h], d[d.length - 1 - h] = _
					}
					o = (l = o) - c
				}
				if (!E.checkCodewordSkew(c, a, f)) return null;
				var v = g.default.getDecodedValue(d),
					w = s.default.getCodeword(v);
				return -1 === w ? null : new p.default(o, l, E.getCodewordBucketNumber(v), w)
			}, E.getModuleBitCount = function (t, e, r, n, o, i) {
				for (var a = o, u = new Int32Array(8), s = 0, f = n ? 1 : -1, l = n;
					(n ? a < r : e <= a) && s < u.length;) t.get(a, i) === l ? (u[s]++, a += f) : (s++, l = !l);
				return s === u.length || a === (n ? r : e) && s === u.length - 1 ? u : null
			}, E.getNumberOfECCodeWords = function (t) {
				return 2 << t
			}, E.adjustCodewordStartColumn = function (t, e, r, n, o, i) {
				for (var a = o, u = n ? -1 : 1, s = 0; s < 2; s++) {
					for (;
						(n ? e <= a : a < r) && n === t.get(a, i);) {
						if (Math.abs(o - a) > E.CODEWORD_SKEW_SIZE) return o;
						a += u
					}
					u = -u, n = !n
				}
				return a
			}, E.checkCodewordSkew = function (t, e, r) {
				return e - E.CODEWORD_SKEW_SIZE <= t && t <= r + E.CODEWORD_SKEW_SIZE
			}, E.decodeCodewords = function (t, e, r) {
				if (0 === t.length) throw i.default.getFormatInstance();
				var n = 1 << e + 1,
					o = E.correctErrors(t, r, n);
				E.verifyCodewordCount(t, n);
				var a = v.default.decode(t, "" + e);
				return a.setErrorsCorrected(o), a.setErasures(r.length), a
			}, E.correctErrors = function (t, e, r) {
				if (null != e && e.length > r / 2 + E.MAX_ERRORS || r < 0 || E.MAX_EC_CODEWORDS < r) throw o.default.getChecksumInstance();
				return E.errorCorrection.decode(t, r, e)
			}, E.verifyCodewordCount = function (t, e) {
				if (t.length < 4) throw i.default.getFormatInstance();
				var r = t[0];
				if (r > t.length) throw i.default.getFormatInstance();
				if (0 === r) {
					if (!(e < t.length)) throw i.default.getFormatInstance();
					t[0] = t.length - e
				}
			}, E.getBitCountForCodeword = function (t) {
				for (var e = new Int32Array(8), r = 0, n = e.length - 1; !((1 & t) !== r && (r = 1 & t, --n < 0));) e[n]++, t >>= 1;
				return e
			}, E.getCodewordBucketNumber = function (t) {
				return t instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(t) : this.getCodewordBucketNumber_number(t)
			}, E.getCodewordBucketNumber_number = function (t) {
				return E.getCodewordBucketNumber(E.getBitCountForCodeword(t))
			}, E.getCodewordBucketNumber_Int32Array = function (t) {
				return (t[0] - t[2] + t[4] - t[6] + 9) % 9
			}, E.toString = function (t) {
				for (var e = new w.default, r = 0; r < t.length; r++) {
					e.format("Row %2d: ", r);
					for (var n = 0; n < t[r].length; n++) {
						var o = t[r][n];
						0 === o.getValue().length ? e.format("        ", null) : e.format("%4d(%2d)", o.getValue()[0], o.getConfidence(o.getValue()[0]))
					}
					e.format("%n")
				}
				return e.toString()
			}, E.CODEWORD_SKEW_SIZE = 2, E.MAX_ERRORS = 3, E.MAX_EC_CODEWORDS = 512, E.errorCorrection = new f.default, E);

		function E() {}
		e.default = y
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(11),
			i = r(80),
			a = r(132),
			u = (s.prototype.decode = function (t, e, r) {
				for (var a, u, s = new i.default(this.field, t), f = new Int32Array(e), l = !1, d = e; 0 < d; d--) {
					var c = s.evaluateAt(this.field.exp(d));
					0 !== (f[e - d] = c) && (l = !0)
				}
				if (!l) return 0;
				var h = this.field.getOne();
				if (null != r) try {
					for (var p = n(r), _ = p.next(); !_.done; _ = p.next()) {
						var g = _.value,
							v = this.field.exp(t.length - 1 - g),
							w = new i.default(this.field, new Int32Array([this.field.subtract(0, v), 1]));
						h = h.multiply(w)
					}
				} catch (t) {
					a = {
						error: t
					}
				} finally {
					try {
						_ && !_.done && (u = p.return) && u.call(p)
					} finally {
						if (a) throw a.error
					}
				}
				var y = new i.default(this.field, f),
					E = this.runEuclideanAlgorithm(this.field.buildMonomial(e, 1), y, e),
					A = E[0],
					C = E[1],
					m = this.findErrorLocations(A),
					I = this.findErrorMagnitudes(C, A, m);
				for (d = 0; d < m.length; d++) {
					var S = t.length - 1 - this.field.log(m[d]);
					if (S < 0) throw o.default.getChecksumInstance();
					t[S] = this.field.subtract(t[S], I[d])
				}
				return m.length
			}, s.prototype.runEuclideanAlgorithm = function (t, e, r) {
				if (t.getDegree() < e.getDegree()) {
					var n = t;
					t = e, e = n
				}
				for (var i = t, a = e, u = this.field.getZero(), s = this.field.getOne(); a.getDegree() >= Math.round(r / 2);) {
					var f = i,
						l = u;
					if (u = s, (i = a).isZero()) throw o.default.getChecksumInstance();
					a = f;
					for (var d = this.field.getZero(), c = i.getCoefficient(i.getDegree()), h = this.field.inverse(c); a.getDegree() >= i.getDegree() &&
						!a.isZero();) {
						var p = a.getDegree() - i.getDegree(),
							_ = this.field.multiply(a.getCoefficient(a.getDegree()), h);
						d = d.add(this.field.buildMonomial(p, _)), a = a.subtract(i.multiplyByMonomial(p, _))
					}
					s = d.multiply(u).subtract(l).negative()
				}
				var g = s.getCoefficient(0);
				if (0 === g) throw o.default.getChecksumInstance();
				var v = this.field.inverse(g);
				return [s.multiply(v), a.multiply(v)]
			}, s.prototype.findErrorLocations = function (t) {
				for (var e = t.getDegree(), r = new Int32Array(e), n = 0, i = 1; i < this.field.getSize() && n < e; i++) 0 === t.evaluateAt(i) && (
					r[n] = this.field.inverse(i), n++);
				if (n !== e) throw o.default.getChecksumInstance();
				return r
			}, s.prototype.findErrorMagnitudes = function (t, e, r) {
				for (var n = e.getDegree(), o = new Int32Array(n), a = 1; a <= n; a++) o[n - a] = this.field.multiply(a, e.getCoefficient(a));
				var u = new i.default(this.field, o),
					s = r.length,
					f = new Int32Array(s);
				for (a = 0; a < s; a++) {
					var l = this.field.inverse(r[a]),
						d = this.field.subtract(0, t.evaluateAt(l)),
						c = this.field.inverse(u.evaluateAt(l));
					f[a] = this.field.multiply(d, c)
				}
				return f
			}, s);

		function s() {
			this.field = a.default.PDF417_GF
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(21),
			u = r(80),
			s = r(1),
			f = r(133),
			l = (o(d, i = f.default), d.prototype.getZero = function () {
				return this.zero
			}, d.prototype.getOne = function () {
				return this.one
			}, d.prototype.buildMonomial = function (t, e) {
				if (t < 0) throw new s.default;
				if (0 === e) return this.zero;
				var r = new Int32Array(t + 1);
				return r[0] = e, new u.default(this, r)
			}, d.PDF417_GF = new d(a.default.NUMBER_OF_CODEWORDS, 3), d);

		function d(t, e) {
			var r = i.call(this) || this;
			r.modulus = t, r.expTable = new Int32Array(t), r.logTable = new Int32Array(t);
			for (var n = 1, o = 0; o < t; o++) n = (r.expTable[o] = n) * e % t;
			for (o = 0; o < t - 1; o++) r.logTable[r.expTable[o]] = o;
			return r.zero = new u.default(r, new Int32Array([0])), r.one = new u.default(r, new Int32Array([1])), r
		}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(1),
			o = r(40),
			i = (a.prototype.add = function (t, e) {
				return (t + e) % this.modulus
			}, a.prototype.subtract = function (t, e) {
				return (this.modulus + t - e) % this.modulus
			}, a.prototype.exp = function (t) {
				return this.expTable[t]
			}, a.prototype.log = function (t) {
				if (0 === t) throw new n.default;
				return this.logTable[t]
			}, a.prototype.inverse = function (t) {
				if (0 === t) throw new o.default;
				return this.expTable[this.modulus - this.logTable[t] - 1]
			}, a.prototype.multiply = function (t, e) {
				return 0 === t || 0 === e ? 0 : this.expTable[(this.logTable[t] + this.logTable[e]) % (this.modulus - 1)]
			}, a.prototype.getSize = function () {
				return this.modulus
			}, a.prototype.equals = function (t) {
				return t === this
			}, a);

		function a() {}
		e.default = i
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
			}, function (t, e) {
				function r() {
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
			}),
			i = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, u = r(21),
			s = r(135),
			f = r(82),
			l = r(83),
			d = (o(c, a = f.default), c.prototype.setRowNumbers = function () {
				var t, e;
				try {
					for (var r = i(this.getCodewords()), n = r.next(); !n.done; n = r.next()) {
						var o = n.value;
						null != o && o.setRowNumberAsRowIndicatorColumn()
					}
				} catch (e) {
					t = {
						error: e
					}
				} finally {
					try {
						n && !n.done && (e = r.return) && e.call(r)
					} finally {
						if (t) throw t.error
					}
				}
			}, c.prototype.adjustCompleteIndicatorColumnRowNumbers = function (t) {
				var e = this.getCodewords();
				this.setRowNumbers(), this.removeIncorrectCodewords(e, t);
				for (var r = this.getBoundingBox(), n = this._isLeft ? r.getTopLeft() : r.getTopRight(), o = this._isLeft ? r.getBottomLeft() : r.getBottomRight(),
						i = this.imageRowToCodewordIndex(Math.trunc(n.getY())), a = this.imageRowToCodewordIndex(Math.trunc(o.getY())), u = -1, s = 1, f =
						0, l = i; l < a; l++)
					if (null != e[l]) {
						var d = e[l],
							c = d.getRowNumber() - u;
						if (0 == c) f++;
						else if (1 == c) s = Math.max(s, f), f = 1, u = d.getRowNumber();
						else if (c < 0 || d.getRowNumber() >= t.getRowCount() || l < c) e[l] = null;
						else {
							for (var h, p = l <= (h = 2 < s ? (s - 2) * c : c), _ = 1; _ <= h && !p; _++) p = null != e[l - _];
							p ? e[l] = null : (u = d.getRowNumber(), f = 1)
						}
					}
			}, c.prototype.getRowHeights = function () {
				var t, e, r = this.getBarcodeMetadata();
				if (null == r) return null;
				this.adjustIncompleteIndicatorColumnRowNumbers(r);
				var n = new Int32Array(r.getRowCount());
				try {
					for (var o = i(this.getCodewords()), a = o.next(); !a.done; a = o.next()) {
						var u = a.value;
						if (null != u) {
							var s = u.getRowNumber();
							if (s >= n.length) continue;
							n[s]++
						}
					}
				} catch (e) {
					t = {
						error: e
					}
				} finally {
					try {
						a && !a.done && (e = o.return) && e.call(o)
					} finally {
						if (t) throw t.error
					}
				}
				return n
			}, c.prototype.adjustIncompleteIndicatorColumnRowNumbers = function (t) {
				for (var e = this.getBoundingBox(), r = this._isLeft ? e.getTopLeft() : e.getTopRight(), n = this._isLeft ? e.getBottomLeft() : e.getBottomRight(),
						o = this.imageRowToCodewordIndex(Math.trunc(r.getY())), i = this.imageRowToCodewordIndex(Math.trunc(n.getY())), a = this.getCodewords(),
						u = -1, s = 1, f = 0, l = o; l < i; l++)
					if (null != a[l]) {
						var d = a[l];
						d.setRowNumberAsRowIndicatorColumn();
						var c = d.getRowNumber() - u;
						0 == c ? f++ : 1 == c ? (s = Math.max(s, f), f = 1, u = d.getRowNumber()) : d.getRowNumber() >= t.getRowCount() ? a[l] = null : (
							u = d.getRowNumber(), f = 1)
					}
			}, c.prototype.getBarcodeMetadata = function () {
				var t, e, r = this.getCodewords(),
					n = new l.default,
					o = new l.default,
					a = new l.default,
					f = new l.default;
				try {
					for (var d = i(r), c = d.next(); !c.done; c = d.next()) {
						var h = c.value;
						if (null != h) {
							h.setRowNumberAsRowIndicatorColumn();
							var p = h.getValue() % 30,
								_ = h.getRowNumber();
							switch (this._isLeft || (_ += 2), _ % 3) {
							case 0:
								o.setValue(3 * p + 1);
								break;
							case 1:
								f.setValue(p / 3), a.setValue(p % 3);
								break;
							case 2:
								n.setValue(1 + p)
							}
						}
					}
				} catch (e) {
					t = {
						error: e
					}
				} finally {
					try {
						c && !c.done && (e = d.return) && e.call(d)
					} finally {
						if (t) throw t.error
					}
				}
				if (0 === n.getValue().length || 0 === o.getValue().length || 0 === a.getValue().length || 0 === f.getValue().length || n.getValue()[
						0] < 1 || o.getValue()[0] + a.getValue()[0] < u.default.MIN_ROWS_IN_BARCODE || o.getValue()[0] + a.getValue()[0] > u.default.MAX_ROWS_IN_BARCODE)
					return null;
				var g = new s.default(n.getValue()[0], o.getValue()[0], a.getValue()[0], f.getValue()[0]);
				return this.removeIncorrectCodewords(r, g), g
			}, c.prototype.removeIncorrectCodewords = function (t, e) {
				for (var r = 0; r < t.length; r++) {
					var n = t[r];
					if (null != t[r]) {
						var o = n.getValue() % 30,
							i = n.getRowNumber();
						if (i > e.getRowCount()) t[r] = null;
						else switch (this._isLeft || (i += 2), i % 3) {
						case 0:
							3 * o + 1 !== e.getRowCountUpperPart() && (t[r] = null);
							break;
						case 1:
							Math.trunc(o / 3) === e.getErrorCorrectionLevel() && o % 3 === e.getRowCountLowerPart() || (t[r] = null);
							break;
						case 2:
							1 + o !== e.getColumnCount() && (t[r] = null)
						}
					}
				}
			}, c.prototype.isLeft = function () {
				return this._isLeft
			}, c.prototype.toString = function () {
				return "IsLeft: " + this._isLeft + "\n" + a.prototype.toString.call(this)
			}, c);

		function c(t, e) {
			var r = a.call(this, t) || this;
			return r._isLeft = e, r
		}
		e.default = d
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getColumnCount = function () {
			return this.columnCount
		}, o.prototype.getErrorCorrectionLevel = function () {
			return this.errorCorrectionLevel
		}, o.prototype.getRowCount = function () {
			return this.rowCount
		}, o.prototype.getRowCountUpperPart = function () {
			return this.rowCountUpperPart
		}, o.prototype.getRowCountLowerPart = function () {
			return this.rowCountLowerPart
		}, o);

		function o(t, e, r, n) {
			this.columnCount = t, this.errorCorrectionLevel = n, this.rowCountUpperPart = e, this.rowCountLowerPart = r, this.rowCount = e + r
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(21),
			i = r(49),
			a = (u.prototype.getDetectionResultColumns = function () {
				this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[
					this.barcodeColumnCount + 1]);
				for (var t, e = o.default.MAX_CODEWORDS_IN_BARCODE; t = e, 0 < (e = this.adjustRowNumbersAndGetCount()) && e < t;);
				return this.detectionResultColumns
			}, u.prototype.adjustIndicatorColumnRowNumbers = function (t) {
				null != t && t.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata)
			}, u.prototype.adjustRowNumbersAndGetCount = function () {
				var t = this.adjustRowNumbersByRow();
				if (0 === t) return 0;
				for (var e = 1; e < this.barcodeColumnCount + 1; e++)
					for (var r = this.detectionResultColumns[e].getCodewords(), n = 0; n < r.length; n++) null != r[n] && (r[n].hasValidRowNumber() ||
						this.adjustRowNumbers(e, n, r));
				return t
			}, u.prototype.adjustRowNumbersByRow = function () {
				return this.adjustRowNumbersFromBothRI(), this.adjustRowNumbersFromLRI() + this.adjustRowNumbersFromRRI()
			}, u.prototype.adjustRowNumbersFromBothRI = function () {
				if (null != this.detectionResultColumns[0] && null != this.detectionResultColumns[this.barcodeColumnCount + 1])
					for (var t = this.detectionResultColumns[0].getCodewords(), e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(),
							r = 0; r < t.length; r++)
						if (null != t[r] && null != e[r] && t[r].getRowNumber() === e[r].getRowNumber())
							for (var n = 1; n <= this.barcodeColumnCount; n++) {
								var o = this.detectionResultColumns[n].getCodewords()[r];
								null != o && (o.setRowNumber(t[r].getRowNumber()), o.hasValidRowNumber() || (this.detectionResultColumns[n].getCodewords()[r] =
									null))
							}
			}, u.prototype.adjustRowNumbersFromRRI = function () {
				if (null == this.detectionResultColumns[this.barcodeColumnCount + 1]) return 0;
				for (var t = 0, e = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), r = 0; r < e.length; r++)
					if (null != e[r])
						for (var n = e[r].getRowNumber(), o = 0, i = this.barcodeColumnCount + 1; 0 < i && o < this.ADJUST_ROW_NUMBER_SKIP; i--) {
							var a = this.detectionResultColumns[i].getCodewords()[r];
							null != a && (o = u.adjustRowNumberIfValid(n, o, a), a.hasValidRowNumber() || t++)
						}
					return t
			}, u.prototype.adjustRowNumbersFromLRI = function () {
				if (null == this.detectionResultColumns[0]) return 0;
				for (var t = 0, e = this.detectionResultColumns[0].getCodewords(), r = 0; r < e.length; r++)
					if (null != e[r])
						for (var n = e[r].getRowNumber(), o = 0, i = 1; i < this.barcodeColumnCount + 1 && o < this.ADJUST_ROW_NUMBER_SKIP; i++) {
							var a = this.detectionResultColumns[i].getCodewords()[r];
							null != a && (o = u.adjustRowNumberIfValid(n, o, a), a.hasValidRowNumber() || t++)
						}
					return t
			}, u.adjustRowNumberIfValid = function (t, e, r) {
				return null == r || r.hasValidRowNumber() || (r.isValidRowNumber(t) ? (r.setRowNumber(t), e = 0) : ++e), e
			}, u.prototype.adjustRowNumbers = function (t, e, r) {
				var o, i, a = r[e],
					s = this.detectionResultColumns[t - 1].getCodewords(),
					f = s;
				null != this.detectionResultColumns[t + 1] && (f = this.detectionResultColumns[t + 1].getCodewords());
				var l = new Array(14);
				l[2] = s[e], l[3] = f[e], 0 < e && (l[0] = r[e - 1], l[4] = s[e - 1], l[5] = f[e - 1]), 1 < e && (l[8] = r[e - 2], l[10] = s[e - 2],
					l[11] = f[e - 2]), e < r.length - 1 && (l[1] = r[e + 1], l[6] = s[e + 1], l[7] = f[e + 1]), e < r.length - 2 && (l[9] = r[e + 2],
					l[12] = s[e + 2], l[13] = f[e + 2]);
				try {
					for (var d = n(l), c = d.next(); !c.done; c = d.next()) {
						var h = c.value;
						if (u.adjustRowNumber(a, h)) return
					}
				} catch (t) {
					o = {
						error: t
					}
				} finally {
					try {
						c && !c.done && (i = d.return) && i.call(d)
					} finally {
						if (o) throw o.error
					}
				}
			}, u.adjustRowNumber = function (t, e) {
				return !(null == e || !e.hasValidRowNumber() || e.getBucket() !== t.getBucket() || (t.setRowNumber(e.getRowNumber()), 0))
			}, u.prototype.getBarcodeColumnCount = function () {
				return this.barcodeColumnCount
			}, u.prototype.getBarcodeRowCount = function () {
				return this.barcodeMetadata.getRowCount()
			}, u.prototype.getBarcodeECLevel = function () {
				return this.barcodeMetadata.getErrorCorrectionLevel()
			}, u.prototype.setBoundingBox = function (t) {
				this.boundingBox = t
			}, u.prototype.getBoundingBox = function () {
				return this.boundingBox
			}, u.prototype.setDetectionResultColumn = function (t, e) {
				this.detectionResultColumns[t] = e
			}, u.prototype.getDetectionResultColumn = function (t) {
				return this.detectionResultColumns[t]
			}, u.prototype.toString = function () {
				var t = this.detectionResultColumns[0];
				null == t && (t = this.detectionResultColumns[this.barcodeColumnCount + 1]);
				for (var e = new i.default, r = 0; r < t.getCodewords().length; r++) {
					e.format("CW %3d:", r);
					for (var n = 0; n < this.barcodeColumnCount + 2; n++)
						if (null != this.detectionResultColumns[n]) {
							var o = this.detectionResultColumns[n].getCodewords()[r];
							null != o ? e.format(" %3d|%3d", o.getRowNumber(), o.getValue()) : e.format("    |   ")
						} else e.format("    |   ");
					e.format("%n")
				}
				return e.toString()
			}, u);

		function u(t, e) {
			this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = t, this.barcodeColumnCount = t.getColumnCount(), this.boundingBox = e, this.detectionResultColumns =
				new Array(this.barcodeColumnCount + 2)
		}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.hasValidRowNumber = function () {
			return this.isValidRowNumber(this.rowNumber)
		}, o.prototype.isValidRowNumber = function (t) {
			return t !== o.BARCODE_ROW_UNKNOWN && this.bucket === t % 3 * 3
		}, o.prototype.setRowNumberAsRowIndicatorColumn = function () {
			this.rowNumber = Math.trunc(3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3))
		}, o.prototype.getWidth = function () {
			return this.endX - this.startX
		}, o.prototype.getStartX = function () {
			return this.startX
		}, o.prototype.getEndX = function () {
			return this.endX
		}, o.prototype.getBucket = function () {
			return this.bucket
		}, o.prototype.getValue = function () {
			return this.value
		}, o.prototype.getRowNumber = function () {
			return this.rowNumber
		}, o.prototype.setRowNumber = function (t) {
			this.rowNumber = t
		}, o.prototype.toString = function () {
			return this.rowNumber + "|" + this.value
		}, o.BARCODE_ROW_UNKNOWN = -1, o);

		function o(t, e, r, n) {
			this.rowNumber = o.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(t), this.endX = Math.trunc(e), this.bucket = Math.trunc(r), this.value =
				Math.trunc(n)
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(10),
			o = r(21),
			i = r(63),
			a = (u.initialize = function () {
				for (var t = 0; t < o.default.SYMBOL_TABLE.length; t++)
					for (var e = o.default.SYMBOL_TABLE[t], r = 1 & e, n = 0; n < o.default.BARS_IN_MODULE; n++) {
						for (var i = 0;
							(1 & e) === r;) i += 1, e >>= 1;
						r = 1 & e, u.RATIOS_TABLE[t] || (u.RATIOS_TABLE[t] = new Array(o.default.BARS_IN_MODULE)), u.RATIOS_TABLE[t][o.default.BARS_IN_MODULE -
							n - 1
						] = Math.fround(i / o.default.MODULES_IN_CODEWORD)
					}
				this.bSymbolTableReady = !0
			}, u.getDecodedValue = function (t) {
				var e = u.getDecodedCodewordValue(u.sampleBitCounts(t));
				return -1 !== e ? e : u.getClosestDecodedValue(t)
			}, u.sampleBitCounts = function (t) {
				for (var e = n.default.sum(t), r = new Int32Array(o.default.BARS_IN_MODULE), i = 0, a = 0, u = 0; u < o.default.MODULES_IN_CODEWORD; u++) {
					var s = e / (2 * o.default.MODULES_IN_CODEWORD) + u * e / o.default.MODULES_IN_CODEWORD;
					a + t[i] <= s && (a += t[i], i++), r[i]++
				}
				return r
			}, u.getDecodedCodewordValue = function (t) {
				var e = u.getBitValue(t);
				return -1 === o.default.getCodeword(e) ? -1 : e
			}, u.getBitValue = function (t) {
				for (var e = 0, r = 0; r < t.length; r++)
					for (var n = 0; n < t[r]; n++) e = e << 1 | (r % 2 == 0 ? 1 : 0);
				return Math.trunc(e)
			}, u.getClosestDecodedValue = function (t) {
				var e = n.default.sum(t),
					r = new Array(o.default.BARS_IN_MODULE);
				if (1 < e)
					for (var a = 0; a < r.length; a++) r[a] = Math.fround(t[a] / e);
				var s = i.default.MAX_VALUE,
					f = -1;
				this.bSymbolTableReady || u.initialize();
				for (var l = 0; l < u.RATIOS_TABLE.length; l++) {
					for (var d = 0, c = u.RATIOS_TABLE[l], h = 0; h < o.default.BARS_IN_MODULE; h++) {
						var p = Math.fround(c[h] - r[h]);
						if (s <= (d += Math.fround(p * p))) break
					}
					d < s && (s = d, f = o.default.SYMBOL_TABLE[l])
				}
				return f
			}, u.bSymbolTableReady = !1, u.RATIOS_TABLE = new Array(o.default.SYMBOL_TABLE.length).map(function (t) {
				return new Array(o.default.BARS_IN_MODULE)
			}), u);

		function u() {}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		(function (t) {
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var n, o, i, a = r(2),
				u = r(22),
				s = r(26),
				f = r(141),
				l = r(19),
				d = r(5),
				c = r(13),
				h = r(142),
				p = r(143),
				_ = r(23);

			function g() {
				if ("undefined" != typeof window) return window.BigInt || null;
				if (void 0 !== t) return t.BigInt || null;
				throw new Error("Can't search globals for BigInt!")
			}

			function v(t) {
				if (void 0 === i && (i = g()), null === i) throw new Error("BigInt is not supported!");
				return i(t)
			}(o = n = n || {})[o.ALPHA = 0] = "ALPHA", o[o.LOWER = 1] = "LOWER", o[o.MIXED = 2] = "MIXED", o[o.PUNCT = 3] = "PUNCT", o[o.ALPHA_SHIFT =
				4] = "ALPHA_SHIFT", o[o.PUNCT_SHIFT = 5] = "PUNCT_SHIFT";
			var w = (y.decode = function (t, e) {
					var r = new d.default(""),
						n = u.default.ISO8859_1;
					r.enableDecoding(n);
					for (var o = 1, i = t[o++], l = new f.default; o < t[0];) {
						switch (i) {
						case y.TEXT_COMPACTION_MODE_LATCH:
							o = y.textCompaction(t, o, r);
							break;
						case y.BYTE_COMPACTION_MODE_LATCH:
						case y.BYTE_COMPACTION_MODE_LATCH_6:
							o = y.byteCompaction(i, t, n, o, r);
							break;
						case y.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
							r.append(t[o++]);
							break;
						case y.NUMERIC_COMPACTION_MODE_LATCH:
							o = y.numericCompaction(t, o, r);
							break;
						case y.ECI_CHARSET:
							u.default.getCharacterSetECIByValue(t[o++]);
							break;
						case y.ECI_GENERAL_PURPOSE:
							o += 2;
							break;
						case y.ECI_USER_DEFINED:
							o++;
							break;
						case y.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
							o = y.decodeMacroBlock(t, o, l);
							break;
						case y.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
						case y.MACRO_PDF417_TERMINATOR:
							throw new a.default;
						default:
							o = y.textCompaction(t, --o, r)
						}
						if (!(o < t.length)) throw a.default.getFormatInstance();
						i = t[o++]
					}
					if (0 === r.length()) throw a.default.getFormatInstance();
					var c = new s.default(null, r.toString(), null, e);
					return c.setOther(l), c
				}, y.decodeMacroBlock = function (t, e, r) {
					if (e + y.NUMBER_OF_SEQUENCE_CODEWORDS > t[0]) throw a.default.getFormatInstance();
					for (var n = new Int32Array(y.NUMBER_OF_SEQUENCE_CODEWORDS), o = 0; o < y.NUMBER_OF_SEQUENCE_CODEWORDS; o++, e++) n[o] = t[e];
					r.setSegmentIndex(c.default.parseInt(y.decodeBase900toBase10(n, y.NUMBER_OF_SEQUENCE_CODEWORDS)));
					var i = new d.default;
					e = y.textCompaction(t, e, i), r.setFileId(i.toString());
					var u = -1;
					for (t[e] === y.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (u = e + 1); e < t[0];) switch (t[e]) {
					case y.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
						switch (t[++e]) {
						case y.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
							var s = new d.default;
							e = y.textCompaction(t, e + 1, s), r.setFileName(s.toString());
							break;
						case y.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
							var f = new d.default;
							e = y.textCompaction(t, e + 1, f), r.setSender(f.toString());
							break;
						case y.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
							var p = new d.default;
							e = y.textCompaction(t, e + 1, p), r.setAddressee(p.toString());
							break;
						case y.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
							var _ = new d.default;
							e = y.numericCompaction(t, e + 1, _), r.setSegmentCount(c.default.parseInt(_.toString()));
							break;
						case y.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
							var g = new d.default;
							e = y.numericCompaction(t, e + 1, g), r.setTimestamp(h.default.parseLong(g.toString()));
							break;
						case y.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
							var v = new d.default;
							e = y.numericCompaction(t, e + 1, v), r.setChecksum(c.default.parseInt(v.toString()));
							break;
						case y.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
							var w = new d.default;
							e = y.numericCompaction(t, e + 1, w), r.setFileSize(h.default.parseLong(w.toString()));
							break;
						default:
							throw a.default.getFormatInstance()
						}
						break;
					case y.MACRO_PDF417_TERMINATOR:
						e++, r.setLastSegment(!0);
						break;
					default:
						throw a.default.getFormatInstance()
					}
					if (-1 !== u) {
						var E = e - u;
						r.isLastSegment() && E--, r.setOptionalData(l.default.copyOfRange(t, u, u + E))
					}
					return e
				}, y.textCompaction = function (t, e, r) {
					for (var n = new Int32Array(2 * (t[0] - e)), o = new Int32Array(2 * (t[0] - e)), i = 0, a = !1; e < t[0] && !a;) {
						var u = t[e++];
						if (u < y.TEXT_COMPACTION_MODE_LATCH) n[i] = u / 30, n[i + 1] = u % 30, i += 2;
						else switch (u) {
						case y.TEXT_COMPACTION_MODE_LATCH:
							n[i++] = y.TEXT_COMPACTION_MODE_LATCH;
							break;
						case y.BYTE_COMPACTION_MODE_LATCH:
						case y.BYTE_COMPACTION_MODE_LATCH_6:
						case y.NUMERIC_COMPACTION_MODE_LATCH:
						case y.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
						case y.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
						case y.MACRO_PDF417_TERMINATOR:
							e--, a = !0;
							break;
						case y.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
							n[i] = y.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, u = t[e++], o[i] = u, i++
						}
					}
					return y.decodeTextCompaction(n, o, i, r), e
				}, y.decodeTextCompaction = function (t, e, r, o) {
					for (var i = n.ALPHA, a = n.ALPHA, u = 0; u < r;) {
						var s = t[u],
							f = "";
						switch (i) {
						case n.ALPHA:
							if (s < 26) f = String.fromCharCode(65 + s);
							else switch (s) {
							case 26:
								f = " ";
								break;
							case y.LL:
								i = n.LOWER;
								break;
							case y.ML:
								i = n.MIXED;
								break;
							case y.PS:
								a = i, i = n.PUNCT_SHIFT;
								break;
							case y.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
								o.append(e[u]);
								break;
							case y.TEXT_COMPACTION_MODE_LATCH:
								i = n.ALPHA
							}
							break;
						case n.LOWER:
							if (s < 26) f = String.fromCharCode(97 + s);
							else switch (s) {
							case 26:
								f = " ";
								break;
							case y.AS:
								a = i, i = n.ALPHA_SHIFT;
								break;
							case y.ML:
								i = n.MIXED;
								break;
							case y.PS:
								a = i, i = n.PUNCT_SHIFT;
								break;
							case y.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
								o.append(e[u]);
								break;
							case y.TEXT_COMPACTION_MODE_LATCH:
								i = n.ALPHA
							}
							break;
						case n.MIXED:
							if (s < y.PL) f = y.MIXED_CHARS[s];
							else switch (s) {
							case y.PL:
								i = n.PUNCT;
								break;
							case 26:
								f = " ";
								break;
							case y.LL:
								i = n.LOWER;
								break;
							case y.AL:
								i = n.ALPHA;
								break;
							case y.PS:
								a = i, i = n.PUNCT_SHIFT;
								break;
							case y.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
								o.append(e[u]);
								break;
							case y.TEXT_COMPACTION_MODE_LATCH:
								i = n.ALPHA
							}
							break;
						case n.PUNCT:
							if (s < y.PAL) f = y.PUNCT_CHARS[s];
							else switch (s) {
							case y.PAL:
								i = n.ALPHA;
								break;
							case y.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
								o.append(e[u]);
								break;
							case y.TEXT_COMPACTION_MODE_LATCH:
								i = n.ALPHA
							}
							break;
						case n.ALPHA_SHIFT:
							if (i = a, s < 26) f = String.fromCharCode(65 + s);
							else switch (s) {
							case 26:
								f = " ";
								break;
							case y.TEXT_COMPACTION_MODE_LATCH:
								i = n.ALPHA
							}
							break;
						case n.PUNCT_SHIFT:
							if (i = a, s < y.PAL) f = y.PUNCT_CHARS[s];
							else switch (s) {
							case y.PAL:
								i = n.ALPHA;
								break;
							case y.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
								o.append(e[u]);
								break;
							case y.TEXT_COMPACTION_MODE_LATCH:
								i = n.ALPHA
							}
						}
						"" !== f && o.append(f), u++
					}
				}, y.byteCompaction = function (t, e, r, n, o) {
					var i = new p.default,
						a = 0,
						u = 0,
						s = !1;
					switch (t) {
					case y.BYTE_COMPACTION_MODE_LATCH:
						for (var f = new Int32Array(6), l = e[n++]; n < e[0] && !s;) switch (u = 900 * u + (f[a++] = l), l = e[n++]) {
						case y.TEXT_COMPACTION_MODE_LATCH:
						case y.BYTE_COMPACTION_MODE_LATCH:
						case y.NUMERIC_COMPACTION_MODE_LATCH:
						case y.BYTE_COMPACTION_MODE_LATCH_6:
						case y.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
						case y.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
						case y.MACRO_PDF417_TERMINATOR:
							n--, s = !0;
							break;
						default:
							if (a % 5 == 0 && 0 < a) {
								for (var d = 0; d < 6; ++d) i.write(Number(v(u) >> v(8 * (5 - d))));
								a = u = 0
							}
						}
						n === e[0] && l < y.TEXT_COMPACTION_MODE_LATCH && (f[a++] = l);
						for (var c = 0; c < a; c++) i.write(f[c]);
						break;
					case y.BYTE_COMPACTION_MODE_LATCH_6:
						for (; n < e[0] && !s;) {
							var h = e[n++];
							if (h < y.TEXT_COMPACTION_MODE_LATCH) a++, u = 900 * u + h;
							else switch (h) {
							case y.TEXT_COMPACTION_MODE_LATCH:
							case y.BYTE_COMPACTION_MODE_LATCH:
							case y.NUMERIC_COMPACTION_MODE_LATCH:
							case y.BYTE_COMPACTION_MODE_LATCH_6:
							case y.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
							case y.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
							case y.MACRO_PDF417_TERMINATOR:
								n--, s = !0
							}
							if (a % 5 == 0 && 0 < a) {
								for (d = 0; d < 6; ++d) i.write(Number(v(u) >> v(8 * (5 - d))));
								a = u = 0
							}
						}
					}
					return o.append(_.default.decode(i.toByteArray(), r)), n
				}, y.numericCompaction = function (t, e, r) {
					for (var n = 0, o = !1, i = new Int32Array(y.MAX_NUMERIC_CODEWORDS); e < t[0] && !o;) {
						var a = t[e++];
						if (e === t[0] && (o = !0), a < y.TEXT_COMPACTION_MODE_LATCH) i[n] = a, n++;
						else switch (a) {
						case y.TEXT_COMPACTION_MODE_LATCH:
						case y.BYTE_COMPACTION_MODE_LATCH:
						case y.BYTE_COMPACTION_MODE_LATCH_6:
						case y.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
						case y.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
						case y.MACRO_PDF417_TERMINATOR:
							e--, o = !0
						}(n % y.MAX_NUMERIC_CODEWORDS == 0 || a === y.NUMERIC_COMPACTION_MODE_LATCH || o) && 0 < n && (r.append(y.decodeBase900toBase10(
							i, n)), n = 0)
					}
					return e
				}, y.decodeBase900toBase10 = function (t, e) {
					for (var r = v(0), n = 0; n < e; n++) r += y.EXP900[e - n - 1] * v(t[n]);
					var o = r.toString();
					if ("1" !== o.charAt(0)) throw new a.default;
					return o.substring(1)
				}, y.TEXT_COMPACTION_MODE_LATCH = 900, y.BYTE_COMPACTION_MODE_LATCH = 901, y.NUMERIC_COMPACTION_MODE_LATCH = 902, y.BYTE_COMPACTION_MODE_LATCH_6 =
				924, y.ECI_USER_DEFINED = 925, y.ECI_GENERAL_PURPOSE = 926, y.ECI_CHARSET = 927, y.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, y.BEGIN_MACRO_PDF417_OPTIONAL_FIELD =
				923, y.MACRO_PDF417_TERMINATOR = 922, y.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, y.MAX_NUMERIC_CODEWORDS = 15, y.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME =
				0, y.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, y.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, y.MACRO_PDF417_OPTIONAL_FIELD_SENDER =
				3, y.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, y.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, y.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM =
				6, y.PL = 25, y.LL = 27, y.AS = 27, y.ML = 28, y.AL = 28, y.PS = 29, y.PAL = 29, y.PUNCT_CHARS =
				";<>@[\\]_`~!\r\t,:\n-.$/\"|*()?{}'", y.MIXED_CHARS = "0123456789&\r\t,:#-.$/+%*=^", y.EXP900 = g() ? function () {
					var t = [];
					t[0] = v(1);
					var e = v(900);
					t[1] = e;
					for (var r = 2; r < 16; r++) t[r] = t[r - 1] * e;
					return t
				}() : [], y.NUMBER_OF_SEQUENCE_CODEWORDS = 2, y);

			function y() {}
			e.default = w
		}).call(this, r(140))
	}, function (t, e) {
		var r;
		r = function () {
			return this
		}();
		try {
			r = r || new Function("return this")()
		} catch (t) {
			"object" == typeof window && (r = window)
		}
		t.exports = r
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getSegmentIndex = function () {
			return this.segmentIndex
		}, o.prototype.setSegmentIndex = function (t) {
			this.segmentIndex = t
		}, o.prototype.getFileId = function () {
			return this.fileId
		}, o.prototype.setFileId = function (t) {
			this.fileId = t
		}, o.prototype.getOptionalData = function () {
			return this.optionalData
		}, o.prototype.setOptionalData = function (t) {
			this.optionalData = t
		}, o.prototype.isLastSegment = function () {
			return this.lastSegment
		}, o.prototype.setLastSegment = function (t) {
			this.lastSegment = t
		}, o.prototype.getSegmentCount = function () {
			return this.segmentCount
		}, o.prototype.setSegmentCount = function (t) {
			this.segmentCount = t
		}, o.prototype.getSender = function () {
			return this.sender || null
		}, o.prototype.setSender = function (t) {
			this.sender = t
		}, o.prototype.getAddressee = function () {
			return this.addressee || null
		}, o.prototype.setAddressee = function (t) {
			this.addressee = t
		}, o.prototype.getFileName = function () {
			return this.fileName
		}, o.prototype.setFileName = function (t) {
			this.fileName = t
		}, o.prototype.getFileSize = function () {
			return this.fileSize
		}, o.prototype.setFileSize = function (t) {
			this.fileSize = t
		}, o.prototype.getChecksum = function () {
			return this.checksum
		}, o.prototype.setChecksum = function (t) {
			this.checksum = t
		}, o.prototype.getTimestamp = function () {
			return this.timestamp
		}, o.prototype.setTimestamp = function (t) {
			this.timestamp = t
		}, o);

		function o() {
			this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.parseLong = function (t, e) {
			return void 0 === e && (e = void 0), parseInt(t, e)
		}, o);

		function o() {}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(19),
			u = r(144),
			s = r(13),
			f = r(1),
			l = r(146),
			d = r(6),
			c = r(37),
			h = (o(p, i = u.default), p.prototype.ensureCapacity = function (t) {
				0 < t - this.buf.length && this.grow(t)
			}, p.prototype.grow = function (t) {
				var e = this.buf.length << 1;
				if (e - t < 0 && (e = t), e < 0) {
					if (t < 0) throw new l.default;
					e = s.default.MAX_VALUE
				}
				this.buf = a.default.copyOfUint8Array(this.buf, e)
			}, p.prototype.write = function (t) {
				this.ensureCapacity(this.count + 1), this.buf[this.count] = t, this.count += 1
			}, p.prototype.writeBytesOffset = function (t, e, r) {
				if (e < 0 || e > t.length || r < 0 || 0 < e + r - t.length) throw new c.default;
				this.ensureCapacity(this.count + r), d.default.arraycopy(t, e, this.buf, this.count, r), this.count += r
			}, p.prototype.writeTo = function (t) {
				t.writeBytesOffset(this.buf, 0, this.count)
			}, p.prototype.reset = function () {
				this.count = 0
			}, p.prototype.toByteArray = function () {
				return a.default.copyOfUint8Array(this.buf, this.count)
			}, p.prototype.size = function () {
				return this.count
			}, p.prototype.toString = function (t) {
				return t ? "string" == typeof t ? this.toString_string(t) : this.toString_number(t) : this.toString_void()
			}, p.prototype.toString_void = function () {
				return new String(this.buf).toString()
			}, p.prototype.toString_string = function (t) {
				return new String(this.buf).toString()
			}, p.prototype.toString_number = function (t) {
				return new String(this.buf).toString()
			}, p.prototype.close = function () {}, p);

		function p(t) {
			void 0 === t && (t = 32);
			var e = i.call(this) || this;
			if (t < (e.count = 0)) throw new f.default("Negative initial size: " + t);
			return e.buf = new Uint8Array(t), e
		}
		e.default = h
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(37),
			o = r(145),
			i = (a.prototype.writeBytes = function (t) {
				this.writeBytesOffset(t, 0, t.length)
			}, a.prototype.writeBytesOffset = function (t, e, r) {
				if (null == t) throw new o.default;
				if (e < 0 || e > t.length || r < 0 || e + r > t.length || e + r < 0) throw new n.default;
				if (0 !== r)
					for (var i = 0; i < r; i++) this.write(t[e + i])
			}, a.prototype.flush = function () {}, a.prototype.close = function () {}, a);

		function a() {}
		e.default = i
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(7),
			u = (o(s, i = a.default), s);

		function s() {
			return null !== i && i.apply(this, arguments) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(17),
			u = r(79),
			s = (o(f, i = a.BrowserCodeReader), f);

		function f(t) {
			return void 0 === t && (t = 500), i.call(this, new u.default, t) || this
		}
		e.BrowserPDF417Reader = s
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(17),
			u = r(47),
			s = (o(f, i = a.BrowserCodeReader), f);

		function f(t) {
			return void 0 === t && (t = 500), i.call(this, new u.default, t) || this
		}
		e.BrowserQRCodeReader = s
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(34),
			o = r(50),
			i = r(33),
			a = r(1),
			u = r(16),
			s = (f.prototype.write = function (t, e, r, u) {
				if (void 0 === u && (u = null), 0 === t.length) throw new a.default("Found empty contents");
				if (e < 0 || r < 0) throw new a.default("Requested dimensions are too small: " + e + "x" + r);
				var s = i.default.L,
					l = f.QUIET_ZONE_SIZE;
				null !== u && (void 0 !== u.get(n.default.ERROR_CORRECTION) && (s = i.default.fromString(u.get(n.default.ERROR_CORRECTION).toString())),
					void 0 !== u.get(n.default.MARGIN) && (l = Number.parseInt(u.get(n.default.MARGIN).toString(), 10)));
				var d = o.default.encode(t, s, u);
				return this.renderResult(d, e, r, l)
			}, f.prototype.writeToDom = function (t, e, r, n, o) {
				void 0 === o && (o = null), "string" == typeof t && (t = document.querySelector(t));
				var i = this.write(e, r, n, o);
				t && t.appendChild(i)
			}, f.prototype.renderResult = function (t, e, r, n) {
				var o = t.getMatrix();
				if (null === o) throw new u.default;
				for (var i = o.getWidth(), a = o.getHeight(), s = i + 2 * n, f = a + 2 * n, l = Math.max(e, s), d = Math.max(r, f), c = Math.min(
						Math.floor(l / s), Math.floor(d / f)), h = Math.floor((l - i * c) / 2), p = Math.floor((d - a * c) / 2), _ = this.createSVGElement(
						l, d), g = 0, v = p; g < a; g++, v += c)
					for (var w = 0, y = h; w < i; w++, y += c)
						if (1 === o.get(w, g)) {
							var E = this.createSvgRectElement(y, v, c, c);
							_.appendChild(E)
						}
				return _
			}, f.prototype.createSVGElement = function (t, e) {
				var r = document.createElementNS(f.SVG_NS, "svg");
				return r.setAttributeNS(null, "height", t.toString()), r.setAttributeNS(null, "width", e.toString()), r
			}, f.prototype.createSvgRectElement = function (t, e, r, n) {
				var o = document.createElementNS(f.SVG_NS, "rect");
				return o.setAttributeNS(null, "x", t.toString()), o.setAttributeNS(null, "y", e.toString()), o.setAttributeNS(null, "height", r.toString()),
					o.setAttributeNS(null, "width", n.toString()), o.setAttributeNS(null, "fill", "#000000"), o
			}, f.QUIET_ZONE_SIZE = 4, f.SVG_NS = "http://www.w3.org/2000/svg", f);

		function f() {}
		e.BrowserQRCodeSvgWriter = s
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(19),
			i = r(5),
			a = (u.prototype.getHeight = function () {
				return this.height
			}, u.prototype.getWidth = function () {
				return this.width
			}, u.prototype.get = function (t, e) {
				return this.bytes[e][t]
			}, u.prototype.getArray = function () {
				return this.bytes
			}, u.prototype.setNumber = function (t, e, r) {
				this.bytes[e][t] = r
			}, u.prototype.setBoolean = function (t, e, r) {
				this.bytes[e][t] = r ? 1 : 0
			}, u.prototype.clear = function (t) {
				var e, r;
				try {
					for (var i = n(this.bytes), a = i.next(); !a.done; a = i.next()) {
						var u = a.value;
						o.default.fill(u, t)
					}
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						a && !a.done && (r = i.return) && r.call(i)
					} finally {
						if (e) throw e.error
					}
				}
			}, u.prototype.equals = function (t) {
				if (!(t instanceof u)) return !1;
				var e = t;
				if (this.width !== e.width) return !1;
				if (this.height !== e.height) return !1;
				for (var r = 0, n = this.height; r < n; ++r)
					for (var o = this.bytes[r], i = e.bytes[r], a = 0, s = this.width; a < s; ++a)
						if (o[a] !== i[a]) return !1;
				return !0
			}, u.prototype.toString = function () {
				for (var t = new i.default, e = 0, r = this.height; e < r; ++e) {
					for (var n = this.bytes[e], o = 0, a = this.width; o < a; ++o) switch (n[o]) {
					case 0:
						t.append(" 0");
						break;
					case 1:
						t.append(" 1");
						break;
					default:
						t.append("  ")
					}
					t.append("\n")
				}
				return t.toString()
			}, u);

		function u(t, e) {
			this.width = t, this.height = e;
			for (var r = new Array(e), n = 0; n !== e; n++) r[n] = new Uint8Array(t);
			this.bytes = r
		}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(18),
			o = r(13),
			i = r(51),
			a = r(86),
			u = r(52),
			s = r(1),
			f = (l.clearMatrix = function (t) {
					t.clear(255)
				}, l.buildMatrix = function (t, e, r, n, o) {
					l.clearMatrix(o), l.embedBasicPatterns(r, o), l.embedTypeInfo(e, n, o), l.maybeEmbedVersionInfo(r, o), l.embedDataBits(t, n, o)
				}, l.embedBasicPatterns = function (t, e) {
					l.embedPositionDetectionPatternsAndSeparators(e), l.embedDarkDotAtLeftBottomCorner(e), l.maybeEmbedPositionAdjustmentPatterns(t, e),
						l.embedTimingPatterns(e)
				}, l.embedTypeInfo = function (t, e, r) {
					var o = new n.default;
					l.makeTypeInfoBits(t, e, o);
					for (var i = 0, a = o.getSize(); i < a; ++i) {
						var u = o.get(o.getSize() - 1 - i),
							s = l.TYPE_INFO_COORDINATES[i],
							f = s[0],
							d = s[1];
						if (r.setBoolean(f, d, u), i < 8) {
							var c = r.getWidth() - i - 1,
								h = 8;
							r.setBoolean(c, h, u)
						} else c = 8, h = r.getHeight() - 7 + (i - 8), r.setBoolean(c, h, u)
					}
				}, l.maybeEmbedVersionInfo = function (t, e) {
					if (!(t.getVersionNumber() < 7)) {
						var r = new n.default;
						l.makeVersionInfoBits(t, r);
						for (var o = 17, i = 0; i < 6; ++i)
							for (var a = 0; a < 3; ++a) {
								var u = r.get(o);
								o--, e.setBoolean(i, e.getHeight() - 11 + a, u), e.setBoolean(e.getHeight() - 11 + a, i, u)
							}
					}
				}, l.embedDataBits = function (t, e, r) {
					for (var n = 0, o = -1, i = r.getWidth() - 1, s = r.getHeight() - 1; 0 < i;) {
						for (6 === i && (i -= 1); 0 <= s && s < r.getHeight();) {
							for (var f = 0; f < 2; ++f) {
								var d = i - f;
								if (l.isEmpty(r.get(d, s))) {
									var c = void 0;
									n < t.getSize() ? (c = t.get(n), ++n) : c = !1, 255 !== e && a.default.getDataMaskBit(e, d, s) && (c = !c), r.setBoolean(d, s,
										c)
								}
							}
							s += o
						}
						s += o = -o, i -= 2
					}
					if (n !== t.getSize()) throw new u.default("Not all bits consumed: " + n + "/" + t.getSize())
				}, l.findMSBSet = function (t) {
					return 32 - o.default.numberOfLeadingZeros(t)
				}, l.calculateBCHCode = function (t, e) {
					if (0 === e) throw new s.default("0 polynomial");
					var r = l.findMSBSet(e);
					for (t <<= r - 1; l.findMSBSet(t) >= r;) t ^= e << l.findMSBSet(t) - r;
					return t
				}, l.makeTypeInfoBits = function (t, e, r) {
					if (!i.default.isValidMaskPattern(e)) throw new u.default("Invalid mask pattern");
					var o = t.getBits() << 3 | e;
					r.appendBits(o, 5);
					var a = l.calculateBCHCode(o, l.TYPE_INFO_POLY);
					r.appendBits(a, 10);
					var s = new n.default;
					if (s.appendBits(l.TYPE_INFO_MASK_PATTERN, 15), r.xor(s), 15 !== r.getSize()) throw new u.default("should not happen but we got: " +
						r.getSize())
				}, l.makeVersionInfoBits = function (t, e) {
					e.appendBits(t.getVersionNumber(), 6);
					var r = l.calculateBCHCode(t.getVersionNumber(), l.VERSION_INFO_POLY);
					if (e.appendBits(r, 12), 18 !== e.getSize()) throw new u.default("should not happen but we got: " + e.getSize())
				}, l.isEmpty = function (t) {
					return 255 === t
				}, l.embedTimingPatterns = function (t) {
					for (var e = 8; e < t.getWidth() - 8; ++e) {
						var r = (e + 1) % 2;
						l.isEmpty(t.get(e, 6)) && t.setNumber(e, 6, r), l.isEmpty(t.get(6, e)) && t.setNumber(6, e, r)
					}
				}, l.embedDarkDotAtLeftBottomCorner = function (t) {
					if (0 === t.get(8, t.getHeight() - 8)) throw new u.default;
					t.setNumber(8, t.getHeight() - 8, 1)
				}, l.embedHorizontalSeparationPattern = function (t, e, r) {
					for (var n = 0; n < 8; ++n) {
						if (!l.isEmpty(r.get(t + n, e))) throw new u.default;
						r.setNumber(t + n, e, 0)
					}
				}, l.embedVerticalSeparationPattern = function (t, e, r) {
					for (var n = 0; n < 7; ++n) {
						if (!l.isEmpty(r.get(t, e + n))) throw new u.default;
						r.setNumber(t, e + n, 0)
					}
				}, l.embedPositionAdjustmentPattern = function (t, e, r) {
					for (var n = 0; n < 5; ++n)
						for (var o = l.POSITION_ADJUSTMENT_PATTERN[n], i = 0; i < 5; ++i) r.setNumber(t + i, e + n, o[i])
				}, l.embedPositionDetectionPattern = function (t, e, r) {
					for (var n = 0; n < 7; ++n)
						for (var o = l.POSITION_DETECTION_PATTERN[n], i = 0; i < 7; ++i) r.setNumber(t + i, e + n, o[i])
				}, l.embedPositionDetectionPatternsAndSeparators = function (t) {
					var e = l.POSITION_DETECTION_PATTERN[0].length;
					l.embedPositionDetectionPattern(0, 0, t), l.embedPositionDetectionPattern(t.getWidth() - e, 0, t), l.embedPositionDetectionPattern(
							0, t.getWidth() - e, t), l.embedHorizontalSeparationPattern(0, 7, t), l.embedHorizontalSeparationPattern(t.getWidth() - 8, 7, t),
						l.embedHorizontalSeparationPattern(0, t.getWidth() - 8, t), l.embedVerticalSeparationPattern(7, 0, t), l.embedVerticalSeparationPattern(
							t.getHeight() - 7 - 1, 0, t), l.embedVerticalSeparationPattern(7, t.getHeight() - 7, t)
				}, l.maybeEmbedPositionAdjustmentPatterns = function (t, e) {
					if (!(t.getVersionNumber() < 2))
						for (var r = t.getVersionNumber() - 1, n = l.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[r], o = 0, i = n.length; o !== i; o++) {
							var a = n[o];
							if (0 <= a)
								for (var u = 0; u !== i; u++) {
									var s = n[u];
									0 <= s && l.isEmpty(e.get(s, a)) && l.embedPositionAdjustmentPattern(s - 2, a - 2, e)
								}
						}
				}, l.POSITION_DETECTION_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
					Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array.from([1, 0, 1, 1, 1, 0, 1]), Int32Array
					.from([1, 0, 0, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1, 1, 1])
				]), l.POSITION_ADJUSTMENT_PATTERN = Array.from([Int32Array.from([1, 1, 1, 1, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from(
					[1, 0, 1, 0, 1]), Int32Array.from([1, 0, 0, 0, 1]), Int32Array.from([1, 1, 1, 1, 1])]), l.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE =
				Array.from([Int32Array.from([-1, -1, -1, -1, -1, -1, -1]), Int32Array.from([6, 18, -1, -1, -1, -1, -1]), Int32Array.from([6, 22, -1, -
					1, -1, -1, -1
				]), Int32Array.from([6, 26, -1, -1, -1, -1, -1]), Int32Array.from([6, 30, -1, -1, -1, -1, -1]), Int32Array.from([6, 34, -1, -1, -1, -
					1, -1
				]), Int32Array.from([6, 22, 38, -1, -1, -1, -1]), Int32Array.from([6, 24, 42, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, -1, -1, -
					1, -1
				]), Int32Array.from([6, 28, 50, -1, -1, -1, -1]), Int32Array.from([6, 30, 54, -1, -1, -1, -1]), Int32Array.from([6, 32, 58, -1, -1, -
					1, -1
				]), Int32Array.from([6, 34, 62, -1, -1, -1, -1]), Int32Array.from([6, 26, 46, 66, -1, -1, -1]), Int32Array.from([6, 26, 48, 70, -1, -
					1, -1
				]), Int32Array.from([6, 26, 50, 74, -1, -1, -1]), Int32Array.from([6, 30, 54, 78, -1, -1, -1]), Int32Array.from([6, 30, 56, 82, -1, -
					1, -1
				]), Int32Array.from([6, 30, 58, 86, -1, -1, -1]), Int32Array.from([6, 34, 62, 90, -1, -1, -1]), Int32Array.from([6, 28, 50, 72, 94, -
					1, -1
				]), Int32Array.from([6, 26, 50, 74, 98, -1, -1]), Int32Array.from([6, 30, 54, 78, 102, -1, -1]), Int32Array.from([6, 28, 54, 80,
					106, -1, -1
				]), Int32Array.from([6, 32, 58, 84, 110, -1, -1]), Int32Array.from([6, 30, 58, 86, 114, -1, -1]), Int32Array.from([6, 34, 62, 90,
					118, -1, -1
				]), Int32Array.from([6, 26, 50, 74, 98, 122, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, -1]), Int32Array.from([6, 26, 52, 78,
					104, 130, -1
				]), Int32Array.from([6, 30, 56, 82, 108, 134, -1]), Int32Array.from([6, 34, 60, 86, 112, 138, -1]), Int32Array.from([6, 30, 58, 86,
					114, 142, -1
				]), Int32Array.from([6, 34, 62, 90, 118, 146, -1]), Int32Array.from([6, 30, 54, 78, 102, 126, 150]), Int32Array.from([6, 24, 50,
					76, 102, 128, 154
				]), Int32Array.from([6, 28, 54, 80, 106, 132, 158]), Int32Array.from([6, 32, 58, 84, 110, 136, 162]), Int32Array.from([6, 26, 54,
					82, 110, 138, 166
				]), Int32Array.from([6, 30, 58, 86, 114, 142, 170])]), l.TYPE_INFO_COORDINATES = Array.from([Int32Array.from([8, 0]), Int32Array.from(
						[8, 1]), Int32Array.from([8, 2]), Int32Array.from([8, 3]), Int32Array.from([8, 4]), Int32Array.from([8, 5]), Int32Array.from([8,
						7
					]), Int32Array.from([8, 8]), Int32Array.from([7, 8]), Int32Array.from([5, 8]), Int32Array.from([4, 8]), Int32Array.from([3, 8]),
					Int32Array.from([2, 8]), Int32Array.from([1, 8]), Int32Array.from([0, 8])
				]), l.VERSION_INFO_POLY = 7973, l.TYPE_INFO_POLY = 1335, l.TYPE_INFO_MASK_PATTERN = 21522, l);

		function l() {}
		e.default = f
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getDataBytes = function () {
			return this.dataBytes
		}, o.prototype.getErrorCorrectionBytes = function () {
			return this.errorCorrectionBytes
		}, o);

		function o(t, e) {
			this.dataBytes = t, this.errorCorrectionBytes = e
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(87),
			o = r(3),
			i = r(1),
			a = (u.prototype.encode = function (t, e, r, a, u) {
				var s;
				switch (e) {
				case o.default.QR_CODE:
					s = new n.default;
					break;
				default:
					throw new i.default("No encoder available for format " + e)
				}
				return s.encode(t, e, r, a, u)
			}, u);

		function u() {}
		e.default = a
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(6),
			u = r(25),
			s = r(24),
			f = r(1),
			l = (o(d, i = u.default), d.prototype.getRow = function (t, e) {
				if (t < 0 || t >= this.getHeight()) throw new f.default("Requested row is outside the image: " + t);
				var r = this.getWidth();
				(null == e || e.length < r) && (e = new Uint8ClampedArray(r));
				var n = (t + this.top) * this.dataWidth + this.left;
				return a.default.arraycopy(this.yuvData, n, e, 0, r), e
			}, d.prototype.getMatrix = function () {
				var t = this.getWidth(),
					e = this.getHeight();
				if (t === this.dataWidth && e === this.dataHeight) return this.yuvData;
				var r = t * e,
					n = new Uint8ClampedArray(r),
					o = this.top * this.dataWidth + this.left;
				if (t === this.dataWidth) return a.default.arraycopy(this.yuvData, o, n, 0, r), n;
				for (var i = 0; i < e; i++) {
					var u = i * t;
					a.default.arraycopy(this.yuvData, o, n, u, t), o += this.dataWidth
				}
				return n
			}, d.prototype.isCropSupported = function () {
				return !0
			}, d.prototype.crop = function (t, e, r, n) {
				return new d(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + e, r, n, !1)
			}, d.prototype.renderThumbnail = function () {
				for (var t = this.getWidth() / d.THUMBNAIL_SCALE_FACTOR, e = this.getHeight() / d.THUMBNAIL_SCALE_FACTOR, r = new Int32Array(t * e),
						n = this.yuvData, o = this.top * this.dataWidth + this.left, i = 0; i < e; i++) {
					for (var a = i * t, u = 0; u < t; u++) {
						var s = 255 & n[o + u * d.THUMBNAIL_SCALE_FACTOR];
						r[a + u] = 4278190080 | 65793 * s
					}
					o += this.dataWidth * d.THUMBNAIL_SCALE_FACTOR
				}
				return r
			}, d.prototype.getThumbnailWidth = function () {
				return this.getWidth() / d.THUMBNAIL_SCALE_FACTOR
			}, d.prototype.getThumbnailHeight = function () {
				return this.getHeight() / d.THUMBNAIL_SCALE_FACTOR
			}, d.prototype.reverseHorizontal = function (t, e) {
				for (var r = this.yuvData, n = 0, o = this.top * this.dataWidth + this.left; n < e; n++, o += this.dataWidth)
					for (var i = o + t / 2, a = o, u = o + t - 1; a < i; a++, u--) {
						var s = r[a];
						r[a] = r[u], r[u] = s
					}
			}, d.prototype.invert = function () {
				return new s.default(this)
			}, d.THUMBNAIL_SCALE_FACTOR = 2, d);

		function d(t, e, r, n, o, a, u, s) {
			var l = i.call(this, a, u) || this;
			if (l.yuvData = t, l.dataWidth = e, l.dataHeight = r, l.left = n, l.top = o, e < n + a || r < o + u) throw new f.default(
				"Crop rectangle does not fit within image data.");
			return s && l.reverseHorizontal(a, u), l
		}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), r(24);
		var i, a = r(24),
			u = r(25),
			s = r(6),
			f = r(1),
			l = (o(d, i = u.default), d.prototype.getRow = function (t, e) {
				if (t < 0 || t >= this.getHeight()) throw new f.default("Requested row is outside the image: " + t);
				var r = this.getWidth();
				(null == e || e.length < r) && (e = new Uint8ClampedArray(r));
				var n = (t + this.top) * this.dataWidth + this.left;
				return s.default.arraycopy(this.luminances, n, e, 0, r), e
			}, d.prototype.getMatrix = function () {
				var t = this.getWidth(),
					e = this.getHeight();
				if (t === this.dataWidth && e === this.dataHeight) return this.luminances;
				var r = t * e,
					n = new Uint8ClampedArray(r),
					o = this.top * this.dataWidth + this.left;
				if (t === this.dataWidth) return s.default.arraycopy(this.luminances, o, n, 0, r), n;
				for (var i = 0; i < e; i++) {
					var a = i * t;
					s.default.arraycopy(this.luminances, o, n, a, t), o += this.dataWidth
				}
				return n
			}, d.prototype.isCropSupported = function () {
				return !0
			}, d.prototype.crop = function (t, e, r, n) {
				return new d(this.luminances, r, n, this.dataWidth, this.dataHeight, this.left + t, this.top + e)
			}, d.prototype.invert = function () {
				return new a.default(this)
			}, d);

		function d(t, e, r, n, o, a, u) {
			var s = i.call(this, e, r) || this;
			if (s.dataWidth = n, s.dataHeight = o, s.left = a, s.top = u, 4 === t.BYTES_PER_ELEMENT) {
				for (var l = e * r, d = new Uint8ClampedArray(l), c = 0; c < l; c++) {
					var h = t[c],
						p = h >> 16 & 255,
						_ = h >> 7 & 510,
						g = 255 & h;
					d[c] = (p + _ + g) / 4 & 255
				}
				s.luminances = d
			} else s.luminances = t;
			if (void 0 === n && (s.dataWidth = e), void 0 === o && (s.dataHeight = r), void 0 === a && (s.left = 0), void 0 === u && (s.top = 0),
				s.left + e > s.dataWidth || s.top + r > s.dataHeight) throw new f.default("Crop rectangle does not fit within image data.");
			return s
		}
		e.default = l
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
				return (n = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function (t, e) {
						t.__proto__ = e
					} || function (t, e) {
						for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
					})(t, e)
			}, function (t, e) {
				function r() {
					this.constructor = t
				}
				n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
			}),
			i = this && this.__values || function (t) {
				var e = "function" == typeof Symbol && t[Symbol.iterator],
					r = 0;
				return e ? e.call(t) : {
					next: function () {
						return t && r >= t.length && (t = void 0), {
							value: t && t[r++],
							done: !t
						}
					}
				}
			};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a, u = r(3),
			s = r(0),
			f = r(9),
			l = r(10),
			d = r(69),
			c = r(44),
			h = r(70),
			p = r(71),
			_ = r(157),
			g = r(170),
			v = r(171),
			w = r(172),
			y = r(6),
			E = (o(A, a = d.default), A.prototype.decodeRow = function (t, e, r) {
				this.pairs.length = 0, this.startFromEven = !1;
				try {
					return A.constructResult(this.decodeRow2pairs(t, e))
				} catch (t) {
					console.log(t)
				}
				return this.pairs.length = 0, this.startFromEven = !0, A.constructResult(this.decodeRow2pairs(t, e))
			}, A.prototype.reset = function () {
				this.pairs.length = 0, this.rows.length = 0
			}, A.prototype.decodeRow2pairs = function (t, e) {
				for (var r, n = !1; !n;) try {
					this.pairs.push(this.retrieveNextPair(e, this.pairs, t))
				} catch (t) {
					if (!this.pairs.length) throw new t;
					n = !0
				}
				if (this.checkChecksum()) return this.pairs;
				if (r = !!this.rows.length, this.storeRow(t, !1), r) {
					var o = this.checkRowsBoolean(!1);
					if (null != o) return o;
					if (null != (o = this.checkRowsBoolean(!0))) return o
				}
				throw new s.default
			}, A.prototype.checkRowsBoolean = function (t) {
				if (25 < this.rows.length) return this.rows.length = 0, null;
				this.pairs.length = 0, t && (this.rows = this.rows.reverse());
				var e = null;
				try {
					e = this.checkRows(new Array, 0)
				} catch (t) {
					console.log(t)
				}
				return t && (this.rows = this.rows.reverse()), e
			}, A.prototype.checkRows = function (t, e) {
				for (var r, n, o = e; o < this.rows.length; o++) {
					var a = this.rows[o];
					this.pairs.length = 0;
					try {
						for (var u = i(t), f = u.next(); !f.done; f = u.next()) {
							var l = f.value;
							this.pairs.push(l.getPairs())
						}
					} catch (t) {
						r = {
							error: t
						}
					} finally {
						try {
							f && !f.done && (n = u.return) && n.call(u)
						} finally {
							if (r) throw r.error
						}
					}
					if (this.pairs.push(a.getPairs()), A.isValidSequence(this.pairs)) {
						if (this.checkChecksum()) return this.pairs;
						var d = new Array(t);
						d.push(a);
						try {
							return this.checkRows(d, o + 1)
						} catch (t) {
							console.log(t)
						}
					}
				}
				throw new s.default
			}, A.isValidSequence = function (t) {
				var e, r;
				try {
					for (var n = i(A.FINDER_PATTERN_SEQUENCES), o = n.next(); !o.done; o = n.next()) {
						var a = o.value;
						if (!(t.length > a.length)) {
							for (var u = !0, s = 0; s < t.length; s++)
								if (t[s].getFinderPattern().getValue() != a[s]) {
									u = !1;
									break
								}
							if (u) return !0
						}
					}
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						o && !o.done && (r = n.return) && r.call(n)
					} finally {
						if (e) throw e.error
					}
				}
				return !1
			}, A.prototype.storeRow = function (t, e) {
				for (var r = 0, n = !1, o = !1; r < this.rows.length;) {
					var i = this.rows[r];
					if (i.getRowNumber() > t) {
						o = i.isEquivalent(this.pairs);
						break
					}
					n = i.isEquivalent(this.pairs), r++
				}
				o || n || A.isPartialRow(this.pairs, this.rows) || (this.rows.push(r, new v.default(this.pairs, t, e)), this.removePartialRows(this
					.pairs, this.rows))
			}, A.prototype.removePartialRows = function (t, e) {
				var r, n, o, a, u, s;
				try {
					for (var f = i(e), l = f.next(); !l.done; l = f.next()) {
						var d = l.value;
						if (d.getPairs().length !== t.length) try {
							for (var c = i(d.getPairs()), h = c.next(); !h.done; h = c.next()) {
								var p = h.value;
								try {
									for (var _ = i(t), v = _.next(); !v.done; v = _.next()) {
										var w = v.value;
										if (g.default.equals(p, w)) break
									}
								} catch (t) {
									u = {
										error: t
									}
								} finally {
									try {
										v && !v.done && (s = _.return) && s.call(_)
									} finally {
										if (u) throw u.error
									}
								}
							}
						} catch (t) {
							o = {
								error: t
							}
						} finally {
							try {
								h && !h.done && (a = c.return) && a.call(c)
							} finally {
								if (o) throw o.error
							}
						}
					}
				} catch (t) {
					r = {
						error: t
					}
				} finally {
					try {
						l && !l.done && (n = f.return) && n.call(f)
					} finally {
						if (r) throw r.error
					}
				}
			}, A.isPartialRow = function (t, e) {
				var r, n, o, a, u, s;
				try {
					for (var f = i(e), l = f.next(); !l.done; l = f.next()) {
						var d = l.value,
							c = !0;
						try {
							for (var h = i(t), p = h.next(); !p.done; p = h.next()) {
								var _ = p.value,
									g = !1;
								try {
									for (var v = i(d.getPairs()), w = v.next(); !w.done; w = v.next()) {
										var y = w.value;
										if (_.equals(y)) {
											g = !0;
											break
										}
									}
								} catch (t) {
									u = {
										error: t
									}
								} finally {
									try {
										w && !w.done && (s = v.return) && s.call(v)
									} finally {
										if (u) throw u.error
									}
								}
								if (!g) {
									c = !1;
									break
								}
							}
						} catch (t) {
							o = {
								error: t
							}
						} finally {
							try {
								p && !p.done && (a = h.return) && a.call(h)
							} finally {
								if (o) throw o.error
							}
						}
						if (c) return !0
					}
				} catch (t) {
					r = {
						error: t
					}
				} finally {
					try {
						l && !l.done && (n = f.return) && n.call(f)
					} finally {
						if (r) throw r.error
					}
				}
				return !1
			}, A.prototype.getRows = function () {
				return this.rows
			}, A.constructResult = function (t) {
				var e = w.default.buildBitArray(t),
					r = _.createDecoder(e).parseInformation(),
					n = t[0].getFinderPattern().getResultPoints(),
					o = t[t.length - 1].getFinderPattern().getResultPoints(),
					i = [n[0], n[1], o[0], o[1]];
				return new f.default(r, null, null, i, u.default.RSS_EXPANDED, null)
			}, A.prototype.checkChecksum = function () {
				var t = this.pairs.get(0),
					e = t.getLeftChar(),
					r = t.getRightChar();
				if (null == r) return !1;
				for (var n = r.getChecksumPortion(), o = 2, i = 1; i < this.pairs.size(); ++i) {
					var a = this.pairs.get(i);
					n += a.getLeftChar().getChecksumPortion(), o++;
					var u = a.getRightChar();
					null != u && (n += u.getChecksumPortion(), o++)
				}
				return 211 * (o - 4) + (n %= 211) == e.getValue()
			}, A.getNextSecondBar = function (t, e) {
				var r;
				return t.get(e) ? (r = t.getNextUnset(e), t.getNextSet(r)) : (r = t.getNextSet(e), t.getNextUnset(r))
			}, A.prototype.retrieveNextPair = function (t, e, r) {
				var n, o = e.length % 2 == 0;
				this.startFromEven && (o = !o);
				for (var i = !0, a = -1; this.findNextPair(t, e, a), null == (n = this.parseFoundFinderPattern(t, r, o)) ? a = A.getNextSecondBar(t,
						this.startEnd[0]) : i = !1, i;);
				var u, f = this.decodeDataCharacter(t, n, o, !0);
				if (!this.isEmptyPair(e) && e[e.length - 1].mustBeLast()) throw new s.default;
				try {
					u = this.decodeDataCharacter(t, n, o, !1)
				} catch (t) {
					u = null, console.log(t)
				}
				return new g.default(f, u, n, !0)
			}, A.prototype.isEmptyPair = function (t) {
				return 0 === t.length
			}, A.prototype.findNextPair = function (t, e, r) {
				var n = this.getDecodeFinderCounters();
				n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 0;
				var o, i = t.getSize();
				o = 0 <= r ? r : this.isEmptyPair(e) ? 0 : e[e.length - 1].getFinderPattern().getStartEnd()[1];
				var a = e.length % 2 != 0;
				this.startFromEven && (a = !a);
				for (var u = !1; o < i && (u = !t.get(o));) o++;
				for (var f = 0, l = o, d = o; d < i; d++)
					if (t.get(d) != u) n[f]++;
					else {
						if (3 == f) {
							if (a && A.reverseCounters(n), A.isFinderPattern(n)) return this.startEnd[0] = l, void(this.startEnd[1] = d);
							a && A.reverseCounters(n), l += n[0] + n[1], n[0] = n[2], n[1] = n[3], n[2] = 0, n[3] = 0, f--
						} else f++;
						n[f] = 1, u = !u
					}
				throw new s.default
			}, A.reverseCounters = function (t) {
				for (var e = t.length, r = 0; r < e / 2; ++r) {
					var n = t[r];
					t[r] = t[e - r - 1], t[e - r - 1] = n
				}
			}, A.prototype.parseFoundFinderPattern = function (t, e, r) {
				var n, o, i;
				if (r) {
					for (var a = this.startEnd[0] - 1; 0 <= a && !t.get(a);) a--;
					a++, n = this.startEnd[0] - a, o = a, i = this.startEnd[1]
				} else o = this.startEnd[0], n = (i = t.getNextUnset(this.startEnd[1] + 1)) - this.startEnd[1];
				var u, s = this.getDecodeFinderCounters();
				y.default.arraycopy(s, 0, s, 1, s.length - 1), s[0] = n;
				try {
					u = this.parseFinderValue(s, A.FINDER_PATTERNS)
				} catch (t) {
					return null
				}
				return new h.default(u, [o, i], o, i, e)
			}, A.prototype.decodeDataCharacter = function (t, e, r, n) {
				for (var o = this.getDataCharacterCounters(), i = 0; i < o.length; i++) o[i] = 0;
				if (n) A.recordPatternInReverse(t, e.getStartEnd()[0], o);
				else {
					A.recordPattern(t, e.getStartEnd()[1], o);
					for (var a = 0, u = o.length - 1; a < u; a++, u--) {
						var f = o[a];
						o[a] = o[u], o[u] = f
					}
				}
				var d = l.default.sum(new Int32Array(o)) / 17,
					h = (e.getStartEnd()[1] - e.getStartEnd()[0]) / 15;
				if (.3 < Math.abs(d - h) / h) throw new s.default;
				var _ = this.getOddCounts(),
					g = this.getEvenCounts(),
					v = this.getOddRoundingErrors(),
					w = this.getEvenRoundingErrors();
				for (a = 0; a < o.length; a++) {
					var y = 1 * o[a] / d,
						E = .5 + y;
					if (E < 1) {
						if (y < .3) throw new s.default;
						E = 1
					} else if (8 < E) {
						if (8.7 < y) throw new s.default;
						E = 8
					}
					var C = a / 2;
					0 == (1 & a) ? (_[C] = E, v[C] = y - E) : (g[C] = E, w[C] = y - E)
				}
				this.adjustOddEvenCounts(17);
				var m = 4 * e.getValue() + (r ? 0 : 2) + (n ? 0 : 1) - 1,
					I = 0,
					S = 0;
				for (a = _.length - 1; 0 <= a; a--) {
					if (A.isNotA1left(e, r, n)) {
						var O = A.WEIGHTS[m][2 * a];
						S += _[a] * O
					}
					I += _[a]
				}
				var T = 0;
				for (a = g.length - 1; 0 <= a; a--) A.isNotA1left(e, r, n) && (O = A.WEIGHTS[m][2 * a + 1], T += g[a] * O);
				var R = S + T;
				if (0 != (1 & I) || 13 < I || I < 4) throw new s.default;
				var b = (13 - I) / 2,
					N = A.SYMBOL_WIDEST[b],
					M = 9 - N,
					P = p.default.getRSSvalue(_, N, !0),
					D = p.default.getRSSvalue(g, M, !1),
					B = P * A.EVEN_TOTAL_SUBSET[b] + D + A.GSUM[b];
				return new c.default(B, R)
			}, A.isNotA1left = function (t, e, r) {
				return !(0 == t.getValue() && e && r)
			}, A.prototype.adjustOddEvenCounts = function (t) {
				var e = l.default.sum(new Int32Array(this.getOddCounts())),
					r = l.default.sum(new Int32Array(this.getEvenCounts())),
					n = !1,
					o = !1;
				13 < e ? o = !0 : e < 4 && (n = !0);
				var i = !1,
					a = !1;
				13 < r ? a = !0 : r < 4 && (i = !0);
				var u = e + r - t,
					f = 1 == (1 & e),
					d = 0 == (1 & r);
				if (1 == u)
					if (f) {
						if (d) throw new s.default;
						o = !0
					} else {
						if (!d) throw new s.default;
						a = !0
					}
				else if (-1 == u)
					if (f) {
						if (d) throw new s.default;
						n = !0
					} else {
						if (!d) throw new s.default;
						i = !0
					}
				else {
					if (0 != u) throw new s.default;
					if (f) {
						if (!d) throw new s.default;
						e < r ? a = n = !0 : i = o = !0
					} else if (d) throw new s.default
				}
				if (n) {
					if (o) throw new s.default;
					A.increment(this.getOddCounts(), this.getOddRoundingErrors())
				}
				if (o && A.decrement(this.getOddCounts(), this.getOddRoundingErrors()), i) {
					if (a) throw new s.default;
					A.increment(this.getEvenCounts(), this.getOddRoundingErrors())
				}
				a && A.decrement(this.getEvenCounts(), this.getEvenRoundingErrors())
			}, A.SYMBOL_WIDEST = [7, 5, 4, 3, 1], A.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204], A.GSUM = [0, 348, 1388, 2948, 3988], A.FINDER_PATTERNS = [
				[1, 8, 4, 1],
				[3, 6, 4, 1],
				[3, 4, 6, 1],
				[3, 2, 8, 1],
				[2, 6, 5, 1],
				[2, 2, 9, 1]
			], A.WEIGHTS = [
				[1, 3, 9, 27, 81, 32, 96, 77],
				[20, 60, 180, 118, 143, 7, 21, 63],
				[189, 145, 13, 39, 117, 140, 209, 205],
				[193, 157, 49, 147, 19, 57, 171, 91],
				[62, 186, 136, 197, 169, 85, 44, 132],
				[185, 133, 188, 142, 4, 12, 36, 108],
				[113, 128, 173, 97, 80, 29, 87, 50],
				[150, 28, 84, 41, 123, 158, 52, 156],
				[46, 138, 203, 187, 139, 206, 196, 166],
				[76, 17, 51, 153, 37, 111, 122, 155],
				[43, 129, 176, 106, 107, 110, 119, 146],
				[16, 48, 144, 10, 30, 90, 59, 177],
				[109, 116, 137, 200, 178, 112, 125, 164],
				[70, 210, 208, 202, 184, 130, 179, 115],
				[134, 191, 151, 31, 93, 68, 204, 190],
				[148, 22, 66, 198, 172, 94, 71, 2],
				[6, 18, 54, 162, 64, 192, 154, 40],
				[120, 149, 25, 75, 14, 42, 126, 167],
				[79, 26, 78, 23, 69, 207, 199, 175],
				[103, 98, 83, 38, 114, 131, 182, 124],
				[161, 61, 183, 127, 170, 88, 53, 159],
				[55, 165, 73, 8, 24, 72, 5, 15],
				[45, 135, 194, 160, 58, 174, 100, 89]
			], A.FINDER_PATTERN_SEQUENCES = [
				[A.FINDER_PAT_A = 0, A.FINDER_PAT_A],
				[A.FINDER_PAT_A, A.FINDER_PAT_B = 1, A.FINDER_PAT_B],
				[A.FINDER_PAT_A, A.FINDER_PAT_C = 2, A.FINDER_PAT_B, A.FINDER_PAT_D = 3],
				[A.FINDER_PAT_A, A.FINDER_PAT_E = 4, A.FINDER_PAT_B, A.FINDER_PAT_D, A.FINDER_PAT_C],
				[A.FINDER_PAT_A, A.FINDER_PAT_E, A.FINDER_PAT_B, A.FINDER_PAT_D, A.FINDER_PAT_D, A.FINDER_PAT_F = 5],
				[A.FINDER_PAT_A, A.FINDER_PAT_E, A.FINDER_PAT_B, A.FINDER_PAT_D, A.FINDER_PAT_E, A.FINDER_PAT_F, A.FINDER_PAT_F],
				[A.FINDER_PAT_A, A.FINDER_PAT_A, A.FINDER_PAT_B, A.FINDER_PAT_B, A.FINDER_PAT_C, A.FINDER_PAT_C, A.FINDER_PAT_D, A.FINDER_PAT_D],
				[A.FINDER_PAT_A, A.FINDER_PAT_A, A.FINDER_PAT_B, A.FINDER_PAT_B, A.FINDER_PAT_C, A.FINDER_PAT_C, A.FINDER_PAT_D, A.FINDER_PAT_E, A.FINDER_PAT_E],
				[A.FINDER_PAT_A, A.FINDER_PAT_A, A.FINDER_PAT_B, A.FINDER_PAT_B, A.FINDER_PAT_C, A.FINDER_PAT_C, A.FINDER_PAT_D, A.FINDER_PAT_E, A.FINDER_PAT_F,
					A.FINDER_PAT_F
				],
				[A.FINDER_PAT_A, A.FINDER_PAT_A, A.FINDER_PAT_B, A.FINDER_PAT_B, A.FINDER_PAT_C, A.FINDER_PAT_D, A.FINDER_PAT_D, A.FINDER_PAT_E, A.FINDER_PAT_E,
					A.FINDER_PAT_F, A.FINDER_PAT_F
				]
			], A.MAX_PAIRS = 11, A);

		function A() {
			var t = null !== a && a.apply(this, arguments) || this;
			return t.pairs = new Array(A.MAX_PAIRS), t.rows = new Array, t.startEnd = [2], t
		}
		e.default = E
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(16),
			o = r(88),
			i = r(163),
			a = r(164),
			u = r(165),
			s = r(166),
			f = r(167),
			l = r(168),
			d = r(169);
		e.createDecoder = function (t) {
			try {
				if (t.get(1)) return new i.default(t);
				if (!t.get(2)) return new a.default(t);
				switch (o.default.extractNumericValueFromBitArray(t, 1, 4)) {
				case 4:
					return new u.default(t);
				case 5:
					return new s.default(t)
				}
				switch (o.default.extractNumericValueFromBitArray(t, 1, 5)) {
				case 12:
					return new f.default(t);
				case 13:
					return new l.default(t)
				}
				switch (o.default.extractNumericValueFromBitArray(t, 1, 7)) {
				case 56:
					return new d.default(t, "310", "11");
				case 57:
					return new d.default(t, "320", "11");
				case 58:
					return new d.default(t, "310", "13");
				case 59:
					return new d.default(t, "320", "13");
				case 60:
					return new d.default(t, "310", "15");
				case 61:
					return new d.default(t, "320", "15");
				case 62:
					return new d.default(t, "310", "17");
				case 63:
					return new d.default(t, "320", "17")
				}
			} catch (e) {
				throw console.log(e), new n.default("unknown decoder: " + t)
			}
		}
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(53),
			u = (o(s, i = a.default), s.prototype.getValue = function () {
				return this.value
			}, s.prototype.isFNC1 = function () {
				return this.value === s.FNC1
			}, s.FNC1 = "$", s);

		function s(t, e) {
			var r = i.call(this, t) || this;
			return r.value = e, r
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(2),
			u = r(53),
			s = (o(f, i = u.default), f.prototype.getFirstDigit = function () {
				return this.firstDigit
			}, f.prototype.getSecondDigit = function () {
				return this.secondDigit
			}, f.prototype.getValue = function () {
				return 10 * this.firstDigit + this.secondDigit
			}, f.prototype.isFirstDigitFNC1 = function () {
				return this.firstDigit == f.FNC1
			}, f.prototype.isSecondDigitFNC1 = function () {
				return this.secondDigit == f.FNC1
			}, f.prototype.isAnyFNC1 = function () {
				return this.firstDigit === f.FNC1 || this.secondDigit === f.FNC1
			}, f.FNC1 = 10, f);

		function f(t, e, r) {
			var n = i.call(this, t) || this;
			if (e < 0 || 10 < e || r < 0 || 10 < r) throw new a.default;
			return n.firstDigit = e, n.secondDigit = r, n
		}
		e.default = s
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(53),
			u = (o(s, i = a.default), s.prototype.getNewString = function () {
				return this.newString
			}, s.prototype.isRemaining = function () {
				return this.remaining
			}, s.prototype.getRemainingValue = function () {
				return this.remainingValue
			}, s);

		function s(t, e, r) {
			var n = i.call(this, t) || this;
			return r ? (n.remaining = !0, n.remainingValue = n.remainingValue) : (n.remaining = !1, n.remainingValue = 0), n.newString = e, n
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n = this && this.__values || function (t) {
			var e = "function" == typeof Symbol && t[Symbol.iterator],
				r = 0;
			return e ? e.call(t) : {
				next: function () {
					return t && r >= t.length && (t = void 0), {
						value: t && t[r++],
						done: !t
					}
				}
			}
		};
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(0),
			i = (a.parseFieldsInGeneralPurpose = function (t) {
				var e, r, i, u, s, f, l, d;
				if (!t) return null;
				if (t.length < 2) throw new o.default;
				var c = t.substring(0, 2);
				try {
					for (var h = n(a.TWO_DIGIT_DATA_LENGTH), p = h.next(); !p.done; p = h.next())
						if ((m = p.value)[0] === c) return m[1] === a.VARIABLE_LENGTH ? a.processVariableAI(2, m[2], t) : a.processFixedAI(2, m[1], t)
				} catch (t) {
					e = {
						error: t
					}
				} finally {
					try {
						p && !p.done && (r = h.return) && r.call(h)
					} finally {
						if (e) throw e.error
					}
				}
				if (t.length < 3) throw new o.default;
				var _ = t.substring(0, 3);
				try {
					for (var g = n(a.THREE_DIGIT_DATA_LENGTH), v = g.next(); !v.done; v = g.next())
						if ((m = v.value)[0] === _) return m[1] === a.VARIABLE_LENGTH ? a.processVariableAI(3, m[2], t) : a.processFixedAI(3, m[1], t)
				} catch (t) {
					i = {
						error: t
					}
				} finally {
					try {
						v && !v.done && (u = g.return) && u.call(g)
					} finally {
						if (i) throw i.error
					}
				}
				try {
					for (var w = n(a.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), y = w.next(); !y.done; y = w.next())
						if ((m = y.value)[0] === _) return m[1] === a.VARIABLE_LENGTH ? a.processVariableAI(4, m[2], t) : a.processFixedAI(4, m[1], t)
				} catch (t) {
					s = {
						error: t
					}
				} finally {
					try {
						y && !y.done && (f = w.return) && f.call(w)
					} finally {
						if (s) throw s.error
					}
				}
				if (t.length < 4) throw new o.default;
				var E = t.substring(0, 4);
				try {
					for (var A = n(a.FOUR_DIGIT_DATA_LENGTH), C = A.next(); !C.done; C = A.next()) {
						var m;
						if ((m = C.value)[0] === E) return m[1] === a.VARIABLE_LENGTH ? a.processVariableAI(4, m[2], t) : a.processFixedAI(4, m[1], t)
					}
				} catch (t) {
					l = {
						error: t
					}
				} finally {
					try {
						C && !C.done && (d = A.return) && d.call(A)
					} finally {
						if (l) throw l.error
					}
				}
				throw new o.default
			}, a.processFixedAI = function (t, e, r) {
				if (r.length < t) throw new o.default;
				var n = r.substring(0, t);
				if (r.length < t + e) throw new o.default;
				var i = r.substring(t, t + e),
					u = r.substring(t + e),
					s = "(" + n + ")" + i,
					f = a.parseFieldsInGeneralPurpose(u);
				return null == f ? s : s + f
			}, a.processVariableAI = function (t, e, r) {
				var n, o = r.substring(0, t);
				n = r.length < t + e ? r.length : t + e;
				var i = r.substring(t, n),
					u = r.substring(n),
					s = "(" + o + ")" + i,
					f = a.parseFieldsInGeneralPurpose(u);
				return null == f ? s : s + f
			}, a.TWO_DIGIT_DATA_LENGTH = [
				["00", 18],
				["01", 14],
				["02", 14],
				["10", a.VARIABLE_LENGTH = [], 20],
				["11", 6],
				["12", 6],
				["13", 6],
				["15", 6],
				["17", 6],
				["20", 2],
				["21", a.VARIABLE_LENGTH, 20],
				["22", a.VARIABLE_LENGTH, 29],
				["30", a.VARIABLE_LENGTH, 8],
				["37", a.VARIABLE_LENGTH, 8],
				["90", a.VARIABLE_LENGTH, 30],
				["91", a.VARIABLE_LENGTH, 30],
				["92", a.VARIABLE_LENGTH, 30],
				["93", a.VARIABLE_LENGTH, 30],
				["94", a.VARIABLE_LENGTH, 30],
				["95", a.VARIABLE_LENGTH, 30],
				["96", a.VARIABLE_LENGTH, 30],
				["97", a.VARIABLE_LENGTH, 3],
				["98", a.VARIABLE_LENGTH, 30],
				["99", a.VARIABLE_LENGTH, 30]
			], a.THREE_DIGIT_DATA_LENGTH = [
				["240", a.VARIABLE_LENGTH, 30],
				["241", a.VARIABLE_LENGTH, 30],
				["242", a.VARIABLE_LENGTH, 6],
				["250", a.VARIABLE_LENGTH, 30],
				["251", a.VARIABLE_LENGTH, 30],
				["253", a.VARIABLE_LENGTH, 17],
				["254", a.VARIABLE_LENGTH, 20],
				["400", a.VARIABLE_LENGTH, 30],
				["401", a.VARIABLE_LENGTH, 30],
				["402", 17],
				["403", a.VARIABLE_LENGTH, 30],
				["410", 13],
				["411", 13],
				["412", 13],
				["413", 13],
				["414", 13],
				["420", a.VARIABLE_LENGTH, 20],
				["421", a.VARIABLE_LENGTH, 15],
				["422", 3],
				["423", a.VARIABLE_LENGTH, 15],
				["424", 3],
				["425", 3],
				["426", 3]
			], a.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
				["310", 6],
				["311", 6],
				["312", 6],
				["313", 6],
				["314", 6],
				["315", 6],
				["316", 6],
				["320", 6],
				["321", 6],
				["322", 6],
				["323", 6],
				["324", 6],
				["325", 6],
				["326", 6],
				["327", 6],
				["328", 6],
				["329", 6],
				["330", 6],
				["331", 6],
				["332", 6],
				["333", 6],
				["334", 6],
				["335", 6],
				["336", 6],
				["340", 6],
				["341", 6],
				["342", 6],
				["343", 6],
				["344", 6],
				["345", 6],
				["346", 6],
				["347", 6],
				["348", 6],
				["349", 6],
				["350", 6],
				["351", 6],
				["352", 6],
				["353", 6],
				["354", 6],
				["355", 6],
				["356", 6],
				["357", 6],
				["360", 6],
				["361", 6],
				["362", 6],
				["363", 6],
				["364", 6],
				["365", 6],
				["366", 6],
				["367", 6],
				["368", 6],
				["369", 6],
				["390", a.VARIABLE_LENGTH, 15],
				["391", a.VARIABLE_LENGTH, 18],
				["392", a.VARIABLE_LENGTH, 15],
				["393", a.VARIABLE_LENGTH, 18],
				["703", a.VARIABLE_LENGTH, 30]
			], a.FOUR_DIGIT_DATA_LENGTH = [
				["7001", 13],
				["7002", a.VARIABLE_LENGTH, 30],
				["7003", 10],
				["8001", 14],
				["8002", a.VARIABLE_LENGTH, 20],
				["8003", a.VARIABLE_LENGTH, 30],
				["8004", a.VARIABLE_LENGTH, 30],
				["8005", 6],
				["8006", 18],
				["8007", a.VARIABLE_LENGTH, 30],
				["8008", a.VARIABLE_LENGTH, 12],
				["8018", 18],
				["8020", a.VARIABLE_LENGTH, 25],
				["8100", 6],
				["8101", 10],
				["8102", 2],
				["8110", a.VARIABLE_LENGTH, 70],
				["8200", a.VARIABLE_LENGTH, 70]
			], a);

		function a() {}
		e.default = i
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getDecodedInformation = function () {
			return this.decodedInformation
		}, o.prototype.isFinished = function () {
			return this.finished
		}, o);

		function o(t, e) {
			e ? this.decodedInformation = null : (this.finished = t, this.decodedInformation = e)
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(35),
			u = r(5),
			s = (o(f, i = a.default), f.prototype.parseInformation = function () {
				var t = new u.default;
				t.append("(01)");
				var e = t.length(),
					r = this.getGeneralDecoder().extractNumericValueFromBitArray(f.HEADER_SIZE, 4);
				return t.append(r), this.encodeCompressedGtinWithoutAI(t, f.HEADER_SIZE + 4, e), this.getGeneralDecoder().decodeAllCodes(t, f.HEADER_SIZE +
					44)
			}, f.HEADER_SIZE = 4, f);

		function f(t) {
			return i.call(this, t) || this
		}
		e.default = s
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(5),
			u = r(89),
			s = (o(f, i = u.default), f.prototype.parseInformation = function () {
				var t = new a.default;
				return this.getGeneralDecoder().decodeAllCodes(t, f.HEADER_SIZE)
			}, f.HEADER_SIZE = 5, f);

		function f(t) {
			return i.call(this, t) || this
		}
		e.default = s
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(90),
			u = (o(s, i = a.default), s.prototype.addWeightCode = function (t, e) {
				t.append("(3103)")
			}, s.prototype.checkWeight = function (t) {
				return t
			}, s);

		function s(t) {
			return i.call(this, t) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(90),
			u = (o(s, i = a.default), s.prototype.addWeightCode = function (t, e) {
				e < 1e4 ? t.append("(3202)") : t.append("(3203)")
			}, s.prototype.checkWeight = function (t) {
				return t < 1e4 ? t : t - 1e4
			}, s);

		function s(t) {
			return i.call(this, t) || this
		}
		e.default = u
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(35),
			u = r(0),
			s = r(5),
			f = (o(l, i = a.default), l.prototype.parseInformation = function () {
				if (this.getInformation().getSize() < l.HEADER_SIZE + a.default.GTIN_SIZE) throw new u.default;
				var t = new s.default;
				this.encodeCompressedGtin(t, l.HEADER_SIZE);
				var e = this.getGeneralDecoder().extractNumericValueFromBitArray(l.HEADER_SIZE + a.default.GTIN_SIZE, l.LAST_DIGIT_SIZE);
				t.append("(392"), t.append(e), t.append(")");
				var r = this.getGeneralDecoder().decodeGeneralPurposeField(l.HEADER_SIZE + a.default.GTIN_SIZE + l.LAST_DIGIT_SIZE, null);
				return t.append(r.getNewString()), t.toString()
			}, l.HEADER_SIZE = 8, l.LAST_DIGIT_SIZE = 2, l);

		function l(t) {
			return i.call(this, t) || this
		}
		e.default = f
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(35),
			u = r(0),
			s = r(5),
			f = (o(l, i = a.default), l.prototype.parseInformation = function () {
				if (this.getInformation().getSize() < l.HEADER_SIZE + a.default.GTIN_SIZE) throw new u.default;
				var t = new s.default;
				this.encodeCompressedGtin(t, l.HEADER_SIZE);
				var e = this.getGeneralDecoder().extractNumericValueFromBitArray(l.HEADER_SIZE + a.default.GTIN_SIZE, l.LAST_DIGIT_SIZE);
				t.append("(393"), t.append(e), t.append(")");
				var r = this.getGeneralDecoder().extractNumericValueFromBitArray(l.HEADER_SIZE + a.default.GTIN_SIZE + l.LAST_DIGIT_SIZE, l.FIRST_THREE_DIGITS_SIZE);
				r / 100 == 0 && t.append("0"), r / 10 == 0 && t.append("0"), t.append(r);
				var n = this.getGeneralDecoder().decodeGeneralPurposeField(l.HEADER_SIZE + a.default.GTIN_SIZE + l.LAST_DIGIT_SIZE + l.FIRST_THREE_DIGITS_SIZE,
					null);
				return t.append(n.getNewString()), t.toString()
			}, l.HEADER_SIZE = 8, l.LAST_DIGIT_SIZE = 2, l.FIRST_THREE_DIGITS_SIZE = 10, l);

		function l(t) {
			return i.call(this, t) || this
		}
		e.default = f
	}, function (t, e, r) {
		"use strict";
		var n, o = this && this.__extends || (n = function (t, e) {
			return (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function (t, e) {
					t.__proto__ = e
				} || function (t, e) {
					for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
				})(t, e)
		}, function (t, e) {
			function r() {
				this.constructor = t
			}
			n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
		});
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, a = r(91),
			u = r(0),
			s = r(5),
			f = (o(l, i = a.default), l.prototype.parseInformation = function () {
				if (this.getInformation().getSize() != l.HEADER_SIZE + l.GTIN_SIZE + l.WEIGHT_SIZE + l.DATE_SIZE) throw new u.default;
				var t = new s.default;
				return this.encodeCompressedGtin(t, l.HEADER_SIZE), this.encodeCompressedWeight(t, l.HEADER_SIZE + l.GTIN_SIZE, l.WEIGHT_SIZE),
					this.encodeCompressedDate(t, l.HEADER_SIZE + l.GTIN_SIZE + l.WEIGHT_SIZE), t.toString()
			}, l.prototype.encodeCompressedDate = function (t, e) {
				var r = this.getGeneralDecoder().extractNumericValueFromBitArray(e, l.DATE_SIZE);
				if (38400 != r) {
					t.append("("), t.append(this.dateCode), t.append(")");
					var n = r % 32,
						o = (r /= 32) % 12 + 1,
						i = r /= 12;
					i / 10 == 0 && t.append("0"), t.append(i), o / 10 == 0 && t.append("0"), t.append(o), n / 10 == 0 && t.append("0"), t.append(n)
				}
			}, l.prototype.addWeightCode = function (t, e) {
				t.append("("), t.append(this.firstAIdigits), t.append(e / 1e5), t.append(")")
			}, l.prototype.checkWeight = function (t) {
				return t % 1e5
			}, l.HEADER_SIZE = 8, l.WEIGHT_SIZE = 20, l.DATE_SIZE = 16, l);

		function l(t, e, r) {
			var n = i.call(this, t) || this;
			return n.dateCode = r, n.firstAIdigits = e, n
		}
		e.default = f
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.mayBeLast = function () {
			return this.maybeLast
		}, o.prototype.getLeftChar = function () {
			return this.leftchar
		}, o.prototype.getRightChar = function () {
			return this.rightchar
		}, o.prototype.getFinderPattern = function () {
			return this.finderpattern
		}, o.prototype.mustBeLast = function () {
			return null == this.rightchar
		}, o.prototype.toString = function () {
			return "[ " + this.leftchar + ", " + this.rightchar + " : " + (null == this.finderpattern ? "null" : this.finderpattern.getValue()) +
				" ]"
		}, o.equals = function (t, e) {
			return t instanceof o && o.equalsOrNull(t.leftchar, e.leftchar) && o.equalsOrNull(t.rightchar, e.rightchar) && o.equalsOrNull(t.finderpattern,
				e.finderpattern)
		}, o.equalsOrNull = function (t, e) {
			return null === t ? null === e : o.equals(t, e)
		}, o.prototype.hashCode = function () {
			return this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue()
		}, o.hashNotNull = function (t) {
			return null === t ? 0 : t.hashCode()
		}, o);

		function o(t, e, r, n) {
			this.leftchar = t, this.rightchar = e, this.finderpattern = r, this.maybeLast = n
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = (o.prototype.getPairs = function () {
			return this.pairs
		}, o.prototype.getRowNumber = function () {
			return this.rowNumber
		}, o.prototype.isReversed = function () {
			return this.wasReversed
		}, o.prototype.isEquivalent = function (t) {
			return this.checkEqualitity(this, t)
		}, o.prototype.toString = function () {
			return "{ " + this.pairs + " }"
		}, o.prototype.equals = function (t, e) {
			return t instanceof o && this.checkEqualitity(t, e) && t.wasReversed === e.wasReversed
		}, o.prototype.checkEqualitity = function (t, e) {
			var r;
			if (t && e) return t.forEach(function (t, n) {
				e.forEach(function (e) {
					t.getLeftChar().getValue() === e.getLeftChar().getValue() && t.getRightChar().getValue() === e.getRightChar().getValue() &&
						t.getFinderPatter().getValue() === e.getFinderPatter().getValue() && (r = !0)
				})
			}), r
		}, o);

		function o(t, e, r) {
			this.pairs = t, this.rowNumber = e, this.wasReversed = r
		}
		e.default = n
	}, function (t, e, r) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = r(18),
			o = (i.buildBitArray = function (t) {
				var e = 2 * t.length - 1;
				null == t[t.length - 1].getRightChar() && (e -= 1);
				for (var r = 12 * e, o = new n.default(r), i = 0, a = t[0].getRightChar().getValue(), u = 11; 0 <= u; --u) 0 != (a & 1 << u) && o.set(
					i), i++;
				for (u = 1; u < t.length; ++u) {
					for (var s = t[u], f = s.getLeftChar().getValue(), l = 11; 0 <= l; --l) 0 != (f & 1 << l) && o.set(i), i++;
					if (null != s.getRightChar()) {
						var d = s.getRightChar().getValue();
						for (l = 11; 0 <= l; --l) 0 != (d & 1 << l) && o.set(i), i++
					}
				}
				return o
			}, i);

		function i() {}
		e.default = o
	}], t.c = r, t.d = function (e, r, n) {
		t.o(e, r) || Object.defineProperty(e, r, {
			enumerable: !0,
			get: n
		})
	}, t.r = function (t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, t.t = function (e, r) {
		if (1 & r && (e = t(e)), 8 & r) return e;
		if (4 & r && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (t.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & r && "string" != typeof e)
			for (var o in e) t.d(n, o, function (t) {
				return e[t]
			}.bind(null, o));
		return n
	}, t.n = function (e) {
		var r = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return t.d(r, "a", r), r
	}, t.o = function (t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, t.p = "", t(t.s = 92);

	function t(n) {
		if (r[n]) return r[n].exports;
		var o = r[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
	}
	var e, r
});
//# sourceMappingURL=index.min.js.map