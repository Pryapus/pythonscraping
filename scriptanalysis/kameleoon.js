if (undefined === window.Kameleoon) {
    (function() {
        ! function(e, t) {
            e.kbowser = t()
        }(this, (function() {
            return function(e) {
                var t = {};

                function r(n) {
                    if (t[n]) return t[n].exports;
                    var i = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
                }
                return r.m = e, r.c = t, r.d = function(e, t, n) {
                    r.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }, r.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, r.t = function(e, t) {
                    if (1 & t && (e = r(e)), 8 & t) return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var n = Object.create(null);
                    if (r.r(n), Object.defineProperty(n, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var i in e) r.d(n, i, function(t) {
                            return e[t]
                        }.bind(null, i));
                    return n
                }, r.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return r.d(t, "a", t), t
                }, r.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, r.p = "", r(r.s = 90)
            }({
                17: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n = r(18),
                        i = function() {
                            function e() {}
                            return e.getFirstMatch = function(e, t) {
                                var r = t.match(e);
                                return r && r.length > 0 && r[1] || ""
                            }, e.getSecondMatch = function(e, t) {
                                var r = t.match(e);
                                return r && r.length > 1 && r[2] || ""
                            }, e.matchAndReturnConst = function(e, t, r) {
                                if (e.test(t)) return r
                            }, e.getWindowsVersionName = function(e) {
                                switch (e) {
                                    case "NT":
                                        return "NT";
                                    case "XP":
                                        return "XP";
                                    case "NT 5.0":
                                        return "2000";
                                    case "NT 5.1":
                                        return "XP";
                                    case "NT 5.2":
                                        return "2003";
                                    case "NT 6.0":
                                        return "Vista";
                                    case "NT 6.1":
                                        return "7";
                                    case "NT 6.2":
                                        return "8";
                                    case "NT 6.3":
                                        return "8.1";
                                    case "NT 10.0":
                                        return "10";
                                    default:
                                        return
                                }
                            }, e.getMacOSVersionName = function(e) {
                                var t = e.split(".").splice(0, 2).map((function(e) {
                                    return parseInt(e, 10) || 0
                                }));
                                if (t.push(0), 10 === t[0]) switch (t[1]) {
                                    case 5:
                                        return "Leopard";
                                    case 6:
                                        return "Snow Leopard";
                                    case 7:
                                        return "Lion";
                                    case 8:
                                        return "Mountain Lion";
                                    case 9:
                                        return "Mavericks";
                                    case 10:
                                        return "Yosemite";
                                    case 11:
                                        return "El Capitan";
                                    case 12:
                                        return "Sierra";
                                    case 13:
                                        return "High Sierra";
                                    case 14:
                                        return "Mojave";
                                    case 15:
                                        return "Catalina";
                                    default:
                                        return
                                }
                            }, e.getAndroidVersionName = function(e) {
                                var t = e.split(".").splice(0, 2).map((function(e) {
                                    return parseInt(e, 10) || 0
                                }));
                                if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                            }, e.getVersionPrecision = function(e) {
                                return e.split(".").length
                            }, e.compareVersions = function(t, r, n) {
                                void 0 === n && (n = !1);
                                var i = e.getVersionPrecision(t),
                                    s = e.getVersionPrecision(r),
                                    a = Math.max(i, s),
                                    o = 0,
                                    u = e.map([t, r], (function(t) {
                                        var r = a - e.getVersionPrecision(t),
                                            n = t + new Array(r + 1).join(".0");
                                        return e.map(n.split("."), (function(e) {
                                            return new Array(20 - e.length).join("0") + e
                                        })).reverse()
                                    }));
                                for (n && (o = a - Math.min(i, s)), a -= 1; a >= o;) {
                                    if (u[0][a] > u[1][a]) return 1;
                                    if (u[0][a] === u[1][a]) {
                                        if (a === o) return 0;
                                        a -= 1
                                    } else if (u[0][a] < u[1][a]) return -1
                                }
                            }, e.map = function(e, t) {
                                var r, n = [];
                                if (Array.prototype.map) return Array.prototype.map.call(e, t);
                                for (r = 0; r < e.length; r += 1) n.push(t(e[r]));
                                return n
                            }, e.find = function(e, t) {
                                var r, n;
                                if (Array.prototype.find) return Array.prototype.find.call(e, t);
                                for (r = 0, n = e.length; r < n; r += 1) {
                                    var i = e[r];
                                    if (t(i, r)) return i
                                }
                            }, e.assign = function(e) {
                                for (var t, r, n = e, i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) s[a - 1] = arguments[a];
                                if (Object.assign) return Object.assign.apply(Object, [e].concat(s));
                                var o = function() {
                                    var e = s[t];
                                    "object" == typeof e && null !== e && Object.keys(e).forEach((function(t) {
                                        n[t] = e[t]
                                    }))
                                };
                                for (t = 0, r = s.length; t < r; t += 1) o();
                                return e
                            }, e.getBrowserAlias = function(e) {
                                return n.BROWSER_ALIASES_MAP[e]
                            }, e.getBrowserTypeByAlias = function(e) {
                                return n.BROWSER_MAP[e] || ""
                            }, e
                        }();
                    t.default = i, e.exports = t.default
                },
                18: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0;
                    t.BROWSER_ALIASES_MAP = {
                        "Amazon Silk": "amazon_silk",
                        "Android Browser": "android",
                        Bada: "bada",
                        BlackBerry: "blackberry",
                        Chrome: "chrome",
                        Chromium: "chromium",
                        Electron: "electron",
                        Epiphany: "epiphany",
                        Firefox: "firefox",
                        Focus: "focus",
                        Generic: "generic",
                        "Google Search": "google_search",
                        Googlebot: "googlebot",
                        "Internet Explorer": "ie",
                        "K-Meleon": "k_meleon",
                        Maxthon: "maxthon",
                        "Microsoft Edge": "edge",
                        "MZ Browser": "mz",
                        "NAVER Whale Browser": "naver",
                        Opera: "opera",
                        "Opera Coast": "opera_coast",
                        PhantomJS: "phantomjs",
                        Puffin: "puffin",
                        QupZilla: "qupzilla",
                        QQ: "qq",
                        QQLite: "qqlite",
                        Safari: "safari",
                        Sailfish: "sailfish",
                        "Samsung Internet for Android": "samsung_internet",
                        SeaMonkey: "seamonkey",
                        Sleipnir: "sleipnir",
                        Swing: "swing",
                        Tizen: "tizen",
                        "UC Browser": "uc",
                        Vivaldi: "vivaldi",
                        "WebOS Browser": "webos",
                        WeChat: "wechat",
                        "Yandex Browser": "yandex",
                        Roku: "roku"
                    };
                    t.BROWSER_MAP = {
                        amazon_silk: "Amazon Silk",
                        android: "Android Browser",
                        bada: "Bada",
                        blackberry: "BlackBerry",
                        chrome: "Chrome",
                        chromium: "Chromium",
                        electron: "Electron",
                        epiphany: "Epiphany",
                        firefox: "Firefox",
                        focus: "Focus",
                        generic: "Generic",
                        googlebot: "Googlebot",
                        google_search: "Google Search",
                        ie: "Internet Explorer",
                        k_meleon: "K-Meleon",
                        maxthon: "Maxthon",
                        edge: "Microsoft Edge",
                        mz: "MZ Browser",
                        naver: "NAVER Whale Browser",
                        opera: "Opera",
                        opera_coast: "Opera Coast",
                        phantomjs: "PhantomJS",
                        puffin: "Puffin",
                        qupzilla: "QupZilla",
                        qq: "QQ Browser",
                        qqlite: "QQ Browser Lite",
                        safari: "Safari",
                        sailfish: "Sailfish",
                        samsung_internet: "Samsung Internet for Android",
                        seamonkey: "SeaMonkey",
                        sleipnir: "Sleipnir",
                        swing: "Swing",
                        tizen: "Tizen",
                        uc: "UC Browser",
                        vivaldi: "Vivaldi",
                        webos: "WebOS Browser",
                        wechat: "WeChat",
                        yandex: "Yandex Browser"
                    };
                    t.PLATFORMS_MAP = {
                        tablet: "tablet",
                        mobile: "mobile",
                        desktop: "desktop",
                        tv: "tv"
                    };
                    t.OS_MAP = {
                        WindowsPhone: "Windows Phone",
                        Windows: "Windows",
                        MacOS: "macOS",
                        iOS: "iOS",
                        Android: "Android",
                        WebOS: "WebOS",
                        BlackBerry: "BlackBerry",
                        Bada: "Bada",
                        Tizen: "Tizen",
                        Linux: "Linux",
                        ChromeOS: "Chrome OS",
                        PlayStation4: "PlayStation 4",
                        Roku: "Roku"
                    };
                    t.ENGINE_MAP = {
                        EdgeHTML: "EdgeHTML",
                        Blink: "Blink",
                        Trident: "Trident",
                        Presto: "Presto",
                        Gecko: "Gecko",
                        WebKit: "WebKit"
                    }
                },
                90: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n, i = (n = r(91)) && n.__esModule ? n : {
                            default: n
                        },
                        s = r(18);

                    function a(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    var o = function() {
                        function e() {}
                        var t, r, n;
                        return e.getParser = function(e, t) {
                            if (void 0 === t && (t = !1), "string" != typeof e) throw new Error("UserAgent should be a string");
                            return new i.default(e, t)
                        }, e.parse = function(e) {
                            return new i.default(e).getResult()
                        }, t = e, n = [{
                            key: "BROWSER_MAP",
                            get: function() {
                                return s.BROWSER_MAP
                            }
                        }, {
                            key: "ENGINE_MAP",
                            get: function() {
                                return s.ENGINE_MAP
                            }
                        }, {
                            key: "OS_MAP",
                            get: function() {
                                return s.OS_MAP
                            }
                        }, {
                            key: "PLATFORMS_MAP",
                            get: function() {
                                return s.PLATFORMS_MAP
                            }
                        }], (r = null) && a(t.prototype, r), n && a(t, n), e
                    }();
                    t.default = o, e.exports = t.default
                },
                91: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n = u(r(92)),
                        i = u(r(93)),
                        s = u(r(94)),
                        a = u(r(95)),
                        o = u(r(17));

                    function u(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var d = function() {
                        function e(e, t) {
                            if (void 0 === t && (t = !1), null == e || "" === e) throw new Error("UserAgent parameter can't be empty");
                            this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                        }
                        var t = e.prototype;
                        return t.getUA = function() {
                            return this._ua
                        }, t.test = function(e) {
                            return e.test(this._ua)
                        }, t.parseBrowser = function() {
                            var e = this;
                            this.parsedResult.browser = {};
                            var t = o.default.find(n.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                        }, t.getBrowser = function() {
                            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                        }, t.getBrowserName = function(e) {
                            return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                        }, t.getBrowserVersion = function() {
                            return this.getBrowser().version
                        }, t.getOS = function() {
                            return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                        }, t.parseOS = function() {
                            var e = this;
                            this.parsedResult.os = {};
                            var t = o.default.find(i.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                        }, t.getOSName = function(e) {
                            var t = this.getOS().name;
                            return e ? String(t).toLowerCase() || "" : t || ""
                        }, t.getOSVersion = function() {
                            return this.getOS().version
                        }, t.getPlatform = function() {
                            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                        }, t.getPlatformType = function(e) {
                            void 0 === e && (e = !1);
                            var t = this.getPlatform().type;
                            return e ? String(t).toLowerCase() || "" : t || ""
                        }, t.parsePlatform = function() {
                            var e = this;
                            this.parsedResult.platform = {};
                            var t = o.default.find(s.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                        }, t.getEngine = function() {
                            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                        }, t.getEngineName = function(e) {
                            return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                        }, t.parseEngine = function() {
                            var e = this;
                            this.parsedResult.engine = {};
                            var t = o.default.find(a.default, (function(t) {
                                if ("function" == typeof t.test) return t.test(e);
                                if (t.test instanceof Array) return t.test.some((function(t) {
                                    return e.test(t)
                                }));
                                throw new Error("Browser's test function is not valid")
                            }));
                            return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                        }, t.parse = function() {
                            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                        }, t.getResult = function() {
                            return o.default.assign({}, this.parsedResult)
                        }, t.satisfies = function(e) {
                            var t = this,
                                r = {},
                                n = 0,
                                i = {},
                                s = 0;
                            if (Object.keys(e).forEach((function(t) {
                                    var a = e[t];
                                    "string" == typeof a ? (i[t] = a, s += 1) : "object" == typeof a && (r[t] = a, n += 1)
                                })), n > 0) {
                                var a = Object.keys(r),
                                    u = o.default.find(a, (function(e) {
                                        return t.isOS(e)
                                    }));
                                if (u) {
                                    var d = this.satisfies(r[u]);
                                    if (void 0 !== d) return d
                                }
                                var c = o.default.find(a, (function(e) {
                                    return t.isPlatform(e)
                                }));
                                if (c) {
                                    var f = this.satisfies(r[c]);
                                    if (void 0 !== f) return f
                                }
                            }
                            if (s > 0) {
                                var l = Object.keys(i),
                                    h = o.default.find(l, (function(e) {
                                        return t.isBrowser(e, !0)
                                    }));
                                if (void 0 !== h) return this.compareVersion(i[h])
                            }
                        }, t.isBrowser = function(e, t) {
                            void 0 === t && (t = !1);
                            var r = this.getBrowserName().toLowerCase(),
                                n = e.toLowerCase(),
                                i = o.default.getBrowserTypeByAlias(n);
                            return t && i && (n = i.toLowerCase()), n === r
                        }, t.compareVersion = function(e) {
                            var t = [0],
                                r = e,
                                n = !1,
                                i = this.getBrowserVersion();
                            if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] && (n = !0, r = e.substr(1)), t.indexOf(o.default.compareVersions(i, r, n)) > -1
                        }, t.isOS = function(e) {
                            return this.getOSName(!0) === String(e).toLowerCase()
                        }, t.isPlatform = function(e) {
                            return this.getPlatformType(!0) === String(e).toLowerCase()
                        }, t.isEngine = function(e) {
                            return this.getEngineName(!0) === String(e).toLowerCase()
                        }, t.is = function(e) {
                            return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e)
                        }, t.some = function(e) {
                            var t = this;
                            return void 0 === e && (e = []), e.some((function(e) {
                                return t.is(e)
                            }))
                        }, e
                    }();
                    t.default = d, e.exports = t.default
                },
                92: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n, i = (n = r(17)) && n.__esModule ? n : {
                        default: n
                    };
                    var s = /version\/(\d+(\.?_?\d+)+)/i,
                        a = [{
                            test: [/googlebot/i],
                            describe: function(e) {
                                var t = {
                                        name: "Googlebot"
                                    },
                                    r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/opera/i],
                            describe: function(e) {
                                var t = {
                                        name: "Opera"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/opr\/|opios/i],
                            describe: function(e) {
                                var t = {
                                        name: "Opera"
                                    },
                                    r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/SamsungBrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "Samsung Internet for Android"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/Whale/i],
                            describe: function(e) {
                                var t = {
                                        name: "NAVER Whale Browser"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/MZBrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "MZ Browser"
                                    },
                                    r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/focus/i],
                            describe: function(e) {
                                var t = {
                                        name: "Focus"
                                    },
                                    r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/swing/i],
                            describe: function(e) {
                                var t = {
                                        name: "Swing"
                                    },
                                    r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/coast/i],
                            describe: function(e) {
                                var t = {
                                        name: "Opera Coast"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/yabrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "Yandex Browser"
                                    },
                                    r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/ucbrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: "UC Browser"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/Maxthon|mxios/i],
                            describe: function(e) {
                                var t = {
                                        name: "Maxthon"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/epiphany/i],
                            describe: function(e) {
                                var t = {
                                        name: "Epiphany"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/puffin/i],
                            describe: function(e) {
                                var t = {
                                        name: "Puffin"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/sleipnir/i],
                            describe: function(e) {
                                var t = {
                                        name: "Sleipnir"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/k-meleon/i],
                            describe: function(e) {
                                var t = {
                                        name: "K-Meleon"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/micromessenger/i],
                            describe: function(e) {
                                var t = {
                                        name: "WeChat"
                                    },
                                    r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/qqbrowser/i],
                            describe: function(e) {
                                var t = {
                                        name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                                    },
                                    r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/msie|trident/i],
                            describe: function(e) {
                                var t = {
                                        name: "Internet Explorer"
                                    },
                                    r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/\sedg\//i],
                            describe: function(e) {
                                var t = {
                                        name: "Microsoft Edge"
                                    },
                                    r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/edg([ea]|ios)/i],
                            describe: function(e) {
                                var t = {
                                        name: "Microsoft Edge"
                                    },
                                    r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/vivaldi/i],
                            describe: function(e) {
                                var t = {
                                        name: "Vivaldi"
                                    },
                                    r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/seamonkey/i],
                            describe: function(e) {
                                var t = {
                                        name: "SeaMonkey"
                                    },
                                    r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/sailfish/i],
                            describe: function(e) {
                                var t = {
                                        name: "Sailfish"
                                    },
                                    r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/silk/i],
                            describe: function(e) {
                                var t = {
                                        name: "Amazon Silk"
                                    },
                                    r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/phantom/i],
                            describe: function(e) {
                                var t = {
                                        name: "PhantomJS"
                                    },
                                    r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/slimerjs/i],
                            describe: function(e) {
                                var t = {
                                        name: "SlimerJS"
                                    },
                                    r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                            describe: function(e) {
                                var t = {
                                        name: "BlackBerry"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/(web|hpw)[o0]s/i],
                            describe: function(e) {
                                var t = {
                                        name: "WebOS Browser"
                                    },
                                    r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/bada/i],
                            describe: function(e) {
                                var t = {
                                        name: "Bada"
                                    },
                                    r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/tizen/i],
                            describe: function(e) {
                                var t = {
                                        name: "Tizen"
                                    },
                                    r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/qupzilla/i],
                            describe: function(e) {
                                var t = {
                                        name: "QupZilla"
                                    },
                                    r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/firefox|iceweasel|fxios/i],
                            describe: function(e) {
                                var t = {
                                        name: "Firefox"
                                    },
                                    r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/electron/i],
                            describe: function(e) {
                                var t = {
                                        name: "Electron"
                                    },
                                    r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/chromium/i],
                            describe: function(e) {
                                var t = {
                                        name: "Chromium"
                                    },
                                    r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/chrome|crios|crmo/i],
                            describe: function(e) {
                                var t = {
                                        name: "Chrome"
                                    },
                                    r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/GSA/i],
                            describe: function(e) {
                                var t = {
                                        name: "Google Search"
                                    },
                                    r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: function(e) {
                                var t = !e.test(/like android/i),
                                    r = e.test(/android/i);
                                return t && r
                            },
                            describe: function(e) {
                                var t = {
                                        name: "Android Browser"
                                    },
                                    r = i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/playstation 4/i],
                            describe: function(e) {
                                var t = {
                                        name: "PlayStation 4"
                                    },
                                    r = i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/safari|applewebkit/i],
                            describe: function(e) {
                                var t = {
                                        name: "Safari"
                                    },
                                    r = i.default.getFirstMatch(s, e);
                                return r && (t.version = r), t
                            }
                        }, {
                            test: [/.*/i],
                            describe: function(e) {
                                var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                return {
                                    name: i.default.getFirstMatch(t, e),
                                    version: i.default.getSecondMatch(t, e)
                                }
                            }
                        }];
                    t.default = a, e.exports = t.default
                },
                93: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n, i = (n = r(17)) && n.__esModule ? n : {
                            default: n
                        },
                        s = r(18);
                    var a = [{
                        test: [/Roku\/DVP/],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                            return {
                                name: s.OS_MAP.Roku,
                                version: t
                            }
                        }
                    }, {
                        test: [/windows phone/i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                            return {
                                name: s.OS_MAP.WindowsPhone,
                                version: t
                            }
                        }
                    }, {
                        test: [/windows /i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                                r = i.default.getWindowsVersionName(t);
                            return {
                                name: s.OS_MAP.Windows,
                                version: t,
                                versionName: r
                            }
                        }
                    }, {
                        test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
                        describe: function(e) {
                            var t = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                            return {
                                name: s.OS_MAP.iOS,
                                version: t
                            }
                        }
                    }, {
                        test: [/macintosh/i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                                r = i.default.getMacOSVersionName(t),
                                n = {
                                    name: s.OS_MAP.MacOS,
                                    version: t
                                };
                            return r && (n.versionName = r), n
                        }
                    }, {
                        test: [/(ipod|iphone|ipad)/i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                            return {
                                name: s.OS_MAP.iOS,
                                version: t
                            }
                        }
                    }, {
                        test: function(e) {
                            var t = !e.test(/like android/i),
                                r = e.test(/android/i);
                            return t && r
                        },
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                                r = i.default.getAndroidVersionName(t),
                                n = {
                                    name: s.OS_MAP.Android,
                                    version: t
                                };
                            return r && (n.versionName = r), n
                        }
                    }, {
                        test: [/(web|hpw)[o0]s/i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                                r = {
                                    name: s.OS_MAP.WebOS
                                };
                            return t && t.length && (r.version = t), r
                        }
                    }, {
                        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                            return {
                                name: s.OS_MAP.BlackBerry,
                                version: t
                            }
                        }
                    }, {
                        test: [/bada/i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                            return {
                                name: s.OS_MAP.Bada,
                                version: t
                            }
                        }
                    }, {
                        test: [/tizen/i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                            return {
                                name: s.OS_MAP.Tizen,
                                version: t
                            }
                        }
                    }, {
                        test: [/linux/i],
                        describe: function() {
                            return {
                                name: s.OS_MAP.Linux
                            }
                        }
                    }, {
                        test: [/CrOS/],
                        describe: function() {
                            return {
                                name: s.OS_MAP.ChromeOS
                            }
                        }
                    }, {
                        test: [/PlayStation 4/],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                            return {
                                name: s.OS_MAP.PlayStation4,
                                version: t
                            }
                        }
                    }];
                    t.default = a, e.exports = t.default
                },
                94: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n, i = (n = r(17)) && n.__esModule ? n : {
                            default: n
                        },
                        s = r(18);
                    var a = [{
                        test: [/googlebot/i],
                        describe: function() {
                            return {
                                type: "bot",
                                vendor: "Google"
                            }
                        }
                    }, {
                        test: [/huawei/i],
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                                r = {
                                    type: s.PLATFORMS_MAP.mobile,
                                    vendor: "Huawei"
                                };
                            return t && (r.model = t), r
                        }
                    }, {
                        test: [/nexus\s*(?:7|8|9|10).*/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet,
                                vendor: "Nexus"
                            }
                        }
                    }, {
                        test: [/ipad/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet,
                                vendor: "Apple",
                                model: "iPad"
                            }
                        }
                    }, {
                        test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet,
                                vendor: "Apple",
                                model: "iPad"
                            }
                        }
                    }, {
                        test: [/kftt build/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet,
                                vendor: "Amazon",
                                model: "Kindle Fire HD 7"
                            }
                        }
                    }, {
                        test: [/silk/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet,
                                vendor: "Amazon"
                            }
                        }
                    }, {
                        test: [/tablet(?! pc)/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet
                            }
                        }
                    }, {
                        test: function(e) {
                            var t = e.test(/ipod|iphone/i),
                                r = e.test(/like (ipod|iphone)/i);
                            return t && !r
                        },
                        describe: function(e) {
                            var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                            return {
                                type: s.PLATFORMS_MAP.mobile,
                                vendor: "Apple",
                                model: t
                            }
                        }
                    }, {
                        test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile,
                                vendor: "Nexus"
                            }
                        }
                    }, {
                        test: [/[^-]mobi/i],
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function(e) {
                            return "blackberry" === e.getBrowserName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile,
                                vendor: "BlackBerry"
                            }
                        }
                    }, {
                        test: function(e) {
                            return "bada" === e.getBrowserName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function(e) {
                            return "windows phone" === e.getBrowserName()
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile,
                                vendor: "Microsoft"
                            }
                        }
                    }, {
                        test: function(e) {
                            var t = Number(String(e.getOSVersion()).split(".")[0]);
                            return "android" === e.getOSName(!0) && t >= 3
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tablet
                            }
                        }
                    }, {
                        test: function(e) {
                            return "android" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.mobile
                            }
                        }
                    }, {
                        test: function(e) {
                            return "macos" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.desktop,
                                vendor: "Apple"
                            }
                        }
                    }, {
                        test: function(e) {
                            return "windows" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.desktop
                            }
                        }
                    }, {
                        test: function(e) {
                            return "linux" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.desktop
                            }
                        }
                    }, {
                        test: function(e) {
                            return "playstation 4" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tv
                            }
                        }
                    }, {
                        test: function(e) {
                            return "roku" === e.getOSName(!0)
                        },
                        describe: function() {
                            return {
                                type: s.PLATFORMS_MAP.tv
                            }
                        }
                    }];
                    t.default = a, e.exports = t.default
                },
                95: function(e, t, r) {
                    "use strict";
                    t.__esModule = !0, t.default = void 0;
                    var n, i = (n = r(17)) && n.__esModule ? n : {
                            default: n
                        },
                        s = r(18);
                    var a = [{
                        test: function(e) {
                            return "microsoft edge" === e.getBrowserName(!0)
                        },
                        describe: function(e) {
                            if (/\sedg\//i.test(e)) return {
                                name: s.ENGINE_MAP.Blink
                            };
                            var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                            return {
                                name: s.ENGINE_MAP.EdgeHTML,
                                version: t
                            }
                        }
                    }, {
                        test: [/trident/i],
                        describe: function(e) {
                            var t = {
                                    name: s.ENGINE_MAP.Trident
                                },
                                r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: function(e) {
                            return e.test(/presto/i)
                        },
                        describe: function(e) {
                            var t = {
                                    name: s.ENGINE_MAP.Presto
                                },
                                r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: function(e) {
                            var t = e.test(/gecko/i),
                                r = e.test(/like gecko/i);
                            return t && !r
                        },
                        describe: function(e) {
                            var t = {
                                    name: s.ENGINE_MAP.Gecko
                                },
                                r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }, {
                        test: [/(apple)?webkit\/537\.36/i],
                        describe: function() {
                            return {
                                name: s.ENGINE_MAP.Blink
                            }
                        }
                    }, {
                        test: [/(apple)?webkit/i],
                        describe: function(e) {
                            var t = {
                                    name: s.ENGINE_MAP.WebKit
                                },
                                r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                            return r && (t.version = r), t
                        }
                    }];
                    t.default = a, e.exports = t.default
                }
            })
        }));
        var APIConfiguration = function() {
            function e(e) {
                this.generationTime = e.scriptProduceTime;
                this.goals = e.goals.map((function(e) {
                    return new APIGoal(e)
                }));
                this.singlePageSupport = Kameleoon.Internals.runtime.singlePageSupport;
                this.siteCode = e.siteCode
            }
            return e
        }();
        var APIAction = function() {
            function i(i, t) {
                this.dateLaunched = i.dateStatusModified;
                this.dateModified = i.dateModified;
                this.id = i.id;
                this.name = i.name;
                this.targetSegment = new APISegment(i.targetingSegment);
                this.active = i.targeting && !i.disabled && i.displayedVariation && null != i.displayedVariation.id;
                this.triggered = i.targeting || !1;
                this.goals = Kameleoon.Internals.configuration.goals.filter((function(t) {
                    return -1 != (i.goals || []).indexOf(t.id)
                })).map((function(i) {
                    return new APIGoal(i)
                }));
                this.untrackedTrafficReallocationTime = i.untrackedRespoolTime || null;
                var e = function(i) {
                    var t = Kameleoon.Internals.runtime.variations.filter((function(t) {
                        return t.id == i
                    }));
                    return t && t[0]
                };
                var a = Kameleoon.Internals.runtime.Visitor.currentVisit;
                if ("experiments" == t) {
                    this.mainGoal = i.kameleoonTracking && i.kameleoonTracking.mainGoalId ? new APIGoal(Kameleoon.Internals.configuration.goals.filter((function(t) {
                        return t.id == i.kameleoonTracking.mainGoalId
                    }))[0]) : null;
                    var n = e(i.registeredVariationId);
                    this.associatedVariation = n ? new APIVariation(n, i) : null;
                    this.trafficDeviation = {};
                    this.variations = [];
                    this.redirectProcessed = i.redirectProcessed || !1;
                    for (var r in i.deviation) {
                        this.trafficDeviation[r] = 100 * i.deviation[r];
                        this.variations.push(new APIVariation(e(parseInt(r)), i))
                    }
                    var o = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "experimentsTriggered", {});
                    this.triggeredInVisit = o[this.id] ? !0 : !1;
                    this.activatedInVisit = a.ExperimentActivations[this.id] ? !0 : !1
                } else {
                    this.mainGoal = new APIGoal(Kameleoon.Internals.configuration.goals.filter((function(t) {
                        return t.id == i.mainGoalId
                    }))[0]);
                    this.associatedVariation = new APIVariation(e(i.associatedVariation.id), i);
                    var s = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "personalizationsTriggered", {});
                    this.triggeredInVisit = s[this.id] ? !0 : !1;
                    this.activatedInVisit = this.triggeredInVisit && a.PersonalizationActivations[this.id] ? !0 : !1
                }
            }
            return i
        }();
        var APIActionActivation = function() {
            function i(i, n, t) {
                var e;
                var a;
                if ("experiment" == i) {
                    this.times = t.ExperimentActivations[n].times;
                    this.experimentID = n;
                    e = Kameleoon.Internals.runtime.experiments.filter((function(i) {
                        return i.id == n
                    }))[0];
                    a = t.ExperimentActivations[n].associatedVariationID;
                    this.experiment = e ? new APIAction(e, "experiments") : null
                } else {
                    this.times = t.PersonalizationActivations[n].times;
                    this.personalizationID = n;
                    e = Kameleoon.Internals.runtime.personalizations.filter((function(i) {
                        return i.id == n
                    }))[0];
                    a = t.PersonalizationActivations[n].associatedVariationID;
                    this.personalization = e ? new APIAction(e, "personalizations") : null
                }
                this.associatedVariationID = a;
                var o = Kameleoon.Internals.configuration.variations.filter((function(i) {
                    return i.id == a
                }))[0];
                this.associatedVariation = o ? new APIVariation(o, e) : null
            }
            return i
        }();
        var APIActions = function() {
            function n(n) {
                var e = this;
                var t = n;
                var i = function() {
                    if (Kameleoon.Internals.runtime)
                        if ("experiments" == t) return Kameleoon.Internals.runtime.experiments;
                        else return Kameleoon.Internals.runtime.personalizations;
                    else return []
                };
                this.getAll = function() {
                    return i().map((function(n) {
                        return new APIAction(n, t)
                    }))
                };
                this.getActive = function() {
                    return i().filter((function(n) {
                        return !0 === n.targeting && 1 != n.disabled && n.displayedVariation && null != n.displayedVariation.id
                    })).map((function(n) {
                        return new APIAction(n, t)
                    }))
                };
                this.getTriggeredInVisit = function() {
                    return i().map((function(n) {
                        return new APIAction(n, t)
                    })).filter((function(n) {
                        return n.triggeredInVisit
                    }))
                };
                this.getActivatedInVisit = function() {
                    return i().map((function(n) {
                        return new APIAction(n, t)
                    })).filter((function(n) {
                        return n.activatedInVisit
                    }))
                };
                var r = function(n, e) {
                    var r = i().filter((function(t) {
                        return t[n] == e
                    }))[0];
                    if (r) return new APIAction(r, t);
                    return null
                };
                this.getById = function(n) {
                    return r("id", n)
                };
                this.getByName = function(n) {
                    return r("name", n)
                };
                if ("experiments" == t) {
                    this.assignVariation = function(n, e, t) {
                        var r = i().filter((function(e) {
                            return e.id == n
                        }))[0];
                        if (r)
                            if (void 0 === r.registeredVariationId || t) {
                                r.registeredVariationId = e;
                                r.assignmentTime = (new Date).getTime();
                                r.writeLocalData()
                            }
                    };
                    this.block = function(n, e) {
                        if (void 0 === e) e = !1;
                        var t = Kameleoon.Internals.runtime.experiments.filter((function(e) {
                            return e.id == n
                        }));
                        if (t.length > 0) {
                            if (e) {
                                var i = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "blockedExperiments", []);
                                i.push(n);
                                Kameleoon.Internals.runtime.storedData.saveField("Runtime", "blockedExperiments", i)
                            }
                            t[0].blocked = !0
                        }
                    };
                    this.trigger = function(n, e) {
                        var t = Kameleoon.Internals.runtime.experiments.filter((function(e) {
                            return e.id == n
                        }))[0];
                        if (t)
                            if (e) {
                                if (t) {
                                    t.performVariationAssignment(!0);
                                    Kameleoon.Analyst.Actions.performActionsTracking([t])
                                }
                            } else {
                                t.trigger();
                                Kameleoon.Analyst.Actions.process([t])
                            }
                    };
                    this.triggerExperiment = function(n, t) {
                        e.trigger(n, t)
                    }
                } else {
                    this.block = function(n, e) {
                        if (void 0 === e) e = !1;
                        var t = Kameleoon.Internals.runtime.personalizations.filter((function(e) {
                            return e.id == n
                        }));
                        if (t.length > 0) {
                            if (e) {
                                var i = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "blockedPersonalizations", []);
                                i.push(n);
                                Kameleoon.Internals.runtime.storedData.saveField("Runtime", "blockedPersonalizations", i)
                            }
                            t[0].blocked = !0
                        }
                    };
                    this.disable = function(n) {
                        var e = i().filter((function(e) {
                            return e.id == n
                        }))[0];
                        if (e) e.disabled = !0
                    };
                    this.trigger = function(n, e) {
                        var t = Kameleoon.Internals.runtime.personalizations.filter((function(e) {
                            return e.id == n
                        }))[0];
                        if (t) {
                            t.exposition = !0;
                            if (e) {
                                if (t) Kameleoon.Analyst.Actions.performActionsTracking([t])
                            } else {
                                t.trigger();
                                Kameleoon.Analyst.Actions.process([t])
                            }
                        }
                    }
                }
            }
            return n
        }();
        var APIGoal = function() {
            function i(i) {
                if (i) {
                    this.id = i.id;
                    this.name = i.name;
                    this.type = i.type
                }
            }
            return i
        }();
        var APIProduct = function() {
            function e(e, i) {
                this.productID = e;
                for (var t in i)
                    if ("name" == t) this.name = i.name;
                    else if ("categoryId" == t || "categoryID" == t) this.categoryID = i.categoryId || i.categoryID;
                else if ("category" == t) this.category = i.category;
                else if ("mainImageURL" == t || "image_url" == t) this.mainImageURL = i.mainImageURL || i.image_url;
                else if ("imageURLs" == t) this.imageURLs = i.imageURLs;
                else if ("price" == t) this.price = parseFloat(i.price) || null;
                else if ("available" == t) this.available = i.available;
                else if ("brand" == t) this.brand = i.brand;
                else if ("child" == t) this.child = i.child;
                else if ("gender" == t) this.gender = i.gender;
                else if ("sizes" == t || "fashion_sizes" == t) this.sizes = i.sizes || i.fashion_sizes;
                else if ("type" == t) this.type = i.type;
                else if ("feature" == t) this.feature = i.feature;
                else if ("crossedOutPrice" == t) this.crossedOutPrice = parseFloat(i.crossedOutPrice) || null;
                else if ("sku" == t) this.sku = i.sku;
                else if ("merchantID" == t) this.merchantID = i.merchantID;
                else if ("url" == t) this.url = i.url;
                else if ("categories" == t && i.categories.length > 0) this.categories = i.categories;
                else if ("description" == t) this.description = i.description;
                else if ("rating" == t) this.rating = i.rating;
                else if ("tags" == t) this.tags = i.tags;
                else if ("params" == t) this.params = i.params;
                if (null != this.categories) {
                    this.categoryID = i.categories[0].id;
                    this.category = i.categories[0].name
                } else if (null != this.categoryID) {
                    this.categories = [{
                        id: String(this.categoryID)
                    }];
                    null != this.category && (this.categories[0].name = this.category)
                }
            }
            e.prototype.getTrackingParameters = function() {
                var e = "m" == this.gender || "M" == this.gender ? !0 : "f" == this.gender || "F" == this.gender ? !1 : null;
                return "&ean=" + encodeURIComponent(this.productID.toString()) + (null == this.name ? "" : "&name=" + encodeURIComponent(this.name.toString())) + "&href=" + encodeURIComponent(this.url || Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()) + (null == this.mainImageURL ? "" : "&pictureHref=" + encodeURIComponent(this.mainImageURL.toString())) + (null == this.price ? "" : "&price=" + this.price) + (null == this.available ? "" : "&available=" + this.available) + (null == this.brand ? "" : "&brand=" + this.brand) + (null == this.child ? "" : "&child=" + this.child) + (null == e ? "" : "&male=" + e) + (null == this.sizes ? "" : "&sizes=" + encodeURIComponent(JSON.stringify(this.sizes))) + (null == this.type ? "" : "&type=" + this.type) + (null == this.feature ? "" : "&feature=" + this.feature) + (null == this.sku ? "" : "&sku=" + this.sku) + (null == this.merchantID ? "" : "&sellerId=" + this.merchantID) + (null == this.crossedOutPrice ? "" : "&crossedOutPrice=" + this.crossedOutPrice) + (null == this.description ? "" : "&description=" + encodeURIComponent(this.description)) + (null == this.rating ? "" : "&rating=" + this.rating) + (null == this.tags ? "" : "&tags=" + encodeURIComponent(JSON.stringify(this.tags))) + (null == this.params ? "" : "&params=" + encodeURIComponent(JSON.stringify(this.params))) + (null == this.categories ? "" : "&categories=" + encodeURIComponent(JSON.stringify(this.categories)))
            };
            return e
        }();
        var APISegment = function() {
            function n(n) {
                if (n) {
                    this.id = n.id;
                    this.name = n.name
                }
            }
            return n
        }();
        var APITemplate = function() {
            function t(t, n) {
                this.name = t;
                this.customFields = n
            }
            return t
        }();
        var APIVariation = function() {
            function i(i, e) {
                if (void 0 === e) e = {};
                if (i) {
                    this.id = i.id;
                    this.name = i.name;
                    if (0 === this.id) this.id = "reference";
                    if (null === this.id) this.id = "none";
                    if (e.experimentAction) {
                        var t = e.variations.filter((function(e) {
                            return e.id == i.id
                        }))[0];
                        this.reallocationTime = t ? t.respoolTime : null
                    } else this.reallocationTime = null;
                    this.instantiatedTemplate = i.widgetTemplateInputData ? new APITemplate(i.widgetTemplateName, i.widgetTemplateInputData) : null
                }
            }
            return i
        }();
        var APIVisit = function() {
            function e(e) {
                this.pageViews = e.timesStartedPages.length;
                this.duration = e.timeLastActivity - e.startDate;
                this.locale = e.locale;
                this.startDate = e.startDate;
                this.index = e.index;
                this.currentProduct = null;
                this.products = [];
                this.activatedExperiments = Object.keys(e.ExperimentActivations).map((function(t) {
                    return new APIActionActivation("experiment", parseInt(t), e)
                }));
                this.activatedPersonalizations = Object.keys(e.PersonalizationActivations).map((function(t) {
                    return new APIActionActivation("personalization", parseInt(t), e)
                }));
                if (e == Kameleoon.Internals.runtime.Visitor.currentVisit) {
                    this.device = new Device;
                    this.geolocation = e.Geolocation;
                    if (Kameleoon.Internals.runtime.mentalistRun) {
                        Object.defineProperty(this, "conversionPredictions", {
                            enumerable: !0,
                            get: function() {
                                return Kameleoon.Mentalist.computeGoalConversionProbabilityPredictionByGoalId(null)
                            }
                        });
                        Object.defineProperty(this, "initialConversionPredictions", {
                            enumerable: !0,
                            get: function() {
                                return Kameleoon.Mentalist.computeGoalConversionProbabilityPredictionByGoalId(null)
                            }
                        })
                    }
                }
                this.conversions = Kameleoon.Utils.clone(e.conversions);
                this.interests = null;
                if (Kameleoon.Internals.runtime.Gatherer.interestsChecked) {
                    this.interests = [];
                    for (var t in e.freshByActiveInterest) {
                        var n = Kameleoon.Internals.runtime.Gatherer.configuration.interests[t];
                        if (null != n) this.interests.push(n.name)
                    }
                }
                this.customData = {};
                var i = function(e, t) {
                    switch (e) {
                        case -2:
                            return "true" === t;
                        case -1:
                            return t;
                        default:
                            return parseFloat(t)
                    }
                };
                for (var a in e.countByValueByCustomDatum) {
                    var r = Kameleoon.Internals.runtime.Gatherer.configuration.customData[a];
                    if (null != r) {
                        var s = e.countByValueByCustomDatum[a];
                        switch (r.type) {
                            case "LIST":
                                var o = [];
                                for (var l in s) o.push(l);
                                this.customData[r.name] = o;
                                break;
                            case "COUNT_LIST":
                                var u = [];
                                for (var l in s) u.push({
                                    value: l,
                                    count: s[l]
                                });
                                this.customData[r.name] = u;
                                break;
                            default:
                                this.customData[r.name] = i(r.numberValues, Object.keys(s)[0]);
                                break
                        }
                    }
                }
                var c = "<OTHER / UNKNOWN>";
                var m = [];
                var h = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "firstReferrers", []);
                for (var v = 0, f = h.length; v < f; v++) {
                    var d = h[v];
                    var p = void 0;
                    if (0 == d) p = "<RESTART>";
                    else {
                        var I = Kameleoon.Internals.runtime.Gatherer.configuration.referrers[d - 1];
                        p = null == I ? c : I.name
                    }
                    m.push(p)
                }
                this.acquisitionChannel = m[0];
                this.landingPageURL = e.landingPageURL;
                this.weather = new APIWeather(e)
            }
            return e
        }();
        var APIVisitor = function() {
            function t() {
                this.getCustomDataVisitor = function() {
                    var t = {};
                    for (var i in Kameleoon.Internals.runtime.Visitor.currentVisit.countByValueByCustomDatum) {
                        var e = Kameleoon.Internals.runtime.Gatherer.configuration.customData[i];
                        if (null != e && !e.disabled)
                            if ("VISITOR" == e.scope) {
                                var n = Kameleoon.Internals.runtime.Visitor.currentVisit.countByValueByCustomDatum[i];
                                switch (e.type) {
                                    case "LIST":
                                        var s = [];
                                        for (var r in n) s.push(r);
                                        t[e.name] = s;
                                        break;
                                    case "COUNT_LIST":
                                        var a = [];
                                        for (var r in n) a.push({
                                            value: r,
                                            count: n[r]
                                        });
                                        t[e.name] = a;
                                        break;
                                    default:
                                        t[e.name] = Object.keys(n)[0];
                                        break
                                }
                            }
                    }
                    return t
                };
                this.numberOfVisits = Kameleoon.Internals.runtime.Visitor.totalVisits;
                this.timeStartedEldestVisit = Kameleoon.Internals.runtime.Visitor.timeStartedEldestVisit;
                this.customData = this.getCustomDataVisitor();
                this.personalizationsActive = Kameleoon.Internals.runtime.personalizationsActive;
                this.code = Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode;
                this.currentVisit = new APIVisit(Kameleoon.Internals.runtime.Visitor.currentVisit);
                this.visits = Kameleoon.Internals.runtime.Visitor.visits.map((function(t) {
                    return new APIVisit(t)
                }));
                this.previousVisit = Kameleoon.Internals.runtime.Visitor.visits.length > 1 ? new APIVisit(Kameleoon.Internals.runtime.Visitor.visits.slice(-2)[0]) : null;
                this.experimentLegalConsent = Kameleoon.Internals.runtime.Consent.AB_TESTING;
                this.personalizationLegalConsent = Kameleoon.Internals.runtime.Consent.PERSONALIZATION;
                this.firstVisitStartDate = Kameleoon.Internals.runtime.Visitor.timeStartedEldestVisit
            }
            return t
        }();
        var APIWeather = function() {
            function i(i) {
                var e = i.Weather;
                this.temperature = e.temperature;
                this.humidity = e.humidity;
                this.pressure = e.pressure;
                this.windSpeed = e.windSpeed;
                this.cloudiness = e.cloudiness;
                this.sunrise = e.sunrise;
                this.sunset = e.sunset;
                this.conditionCode = e.conditionCode;
                this.conditionDescription = e.conditionDescription
            }
            return i
        }();
        var Analyst = function() {
            function Analyst() {
                var _this = this;
                this.initialize = function(e) {
                    _this.isTimeout = !1;
                    if (window.kameleoonDisplayPage) {
                        if (null == Kameleoon.Internals.configuration.behaviorWhenTimeout || document.getElementById("kameleoonLoadingStyleSheet")) window.clearTimeout(window.kameleoonDisplayPageTimeOut);
                        else if (null == window.kameleoonEndLoadTime) _this.isTimeout = !0;
                        try {
                            window.kameleoonDisplayPage(!0)
                        } catch (e) {}
                        window.kameleoonDisplayPage = null
                    }
                    window.kameleoonEndLoadTime = (new Date).getTime();
                    if (-1 != navigator.userAgent.indexOf("Chrome/62")) {
                        var n = {
                            x: window.scrollX,
                            y: window.scrollY
                        };
                        document.documentElement.style.display = "none";
                        var o = document.documentElement.offsetHeight;
                        document.documentElement.style.display = "block";
                        window.scrollTo(n.x, n.y)
                    }
                    e()
                };
                this.load = function() {
                    Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
                        type: "load",
                        time: (new Date).getTime()
                    });
                    Kameleoon.Utils.runProtectedFunction((function() {
                        if (window.kameleoonAddCustomAction) {
                            Kameleoon.Utils.runProtectedScript(window.kameleoonAddCustomAction, "kameleoonAddCustomActionScript.js");
                            delete window.kameleoonAddCustomAction
                        }
                        if (window.kameleoonAddCustomGlobalScript) {
                            Kameleoon.Internals.configuration.globalScript = window.kameleoonAddCustomGlobalScript;
                            delete window.kameleoonAddCustomGlobalScript
                        }
                        window.addEventListener("error", (function(e) {
                            if (e.error && e.error.stack && e.error.stack.match(/kameleoon/gi)) {
                                Kameleoon.Utils.Logger.send(e.error.stack, "kameleoon.js");
                                return !1
                            }
                        }));
                        Kameleoon.Analyst.initialize((function() {
                            var e = Kameleoon.Analyst.checkBlockingElements();
                            var n = window.kameleoonEndLoadTime - (window.kameleoonStartLoadTime || window.kameleoonEndLoadTime) - 25;
                            Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "Loaded", {
                                timeout: "TIMEOUT" == e,
                                loadTime: n
                            });
                            Kameleoon.Internals.runtime = Kameleoon.Internals.runtime;
                            if (Kameleoon.Internals.runtime) Kameleoon.Internals.runtime.clear();
                            if (0 == e.length) {
                                Kameleoon.Internals.runtime = new Runtime;
                                Kameleoon.Analyst.loadKameleoonFull((function() {
                                    Kameleoon.Internals.runtime.run()
                                }))
                            } else {
                                Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
                                    type: "abort",
                                    blockingReason: e
                                });
                                Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "Aborted", {
                                    reason: e
                                })
                            }
                        }))
                    }))
                };
                this.loadKameleoonFull = function(e, n) {
                    if (!Kameleoon.Internals.runtime.kameleoonFull && (_this.kameleoonFullNeeded() || n)) {
                        var o = function(n) {
                            var o = document.createElement("script");
                            o.innerHTML = n + "\n;";
                            o.innerHTML += "(" + e.toString() + ")()";
                            o.innerHTML += "//# sourceURL=kameleoonFull.js";
                            document.head.appendChild(o)
                        };
                        var a = sessionStorage.getItem("kameleoonFullApplicationCode");
                        if (null != a) o(a);
                        else Kameleoon.Utils.performBeaconServerCall("https://" + Kameleoon.Internals.configuration.STATIC_HOST_NAME + "." + Kameleoon.Internals.configuration.DOMAIN + "/kameleoon-full.js?cache=" + Kameleoon.Utils.obtainRandomString(16), (function(e) {
                            if (void 0 === e.readyState || 4 == e.readyState && 200 == e.status) {
                                sessionStorage.setItem("kameleoonFullApplicationCode", e.responseText);
                                o(e.responseText)
                            }
                        }))
                    } else e()
                };
                this.Actions = new Actions;
                this.Goals = new Goals
            }
            Analyst.prototype.checkBlockingElements = function() {
                var device = new Device;
                if ("Internet Explorer" == device.browser && device.browserVersion <= (Kameleoon.Internals.configuration.wideEngineSupport ? 10 : 12) || "Opera" == device.browser && device.browserVersion < 13) return "BROWSER";
                var noLocalStorage = !1;
                try {
                    if (window.localStorage) localStorage.getItem("kameleoonPrivateMode");
                    else noLocalStorage = !0
                } catch (e) {
                    noLocalStorage = !0
                }
                var noSessionStorage = !1;
                try {
                    if (window.sessionStorage) sessionStorage.getItem("kameleoonPrivateMode");
                    else noSessionStorage = !0
                } catch (e) {
                    noSessionStorage = !0
                }
                if (noLocalStorage || noSessionStorage) return "STORAGE";
                if (this.isTimeout) {
                    switch (Kameleoon.Internals.configuration.behaviorWhenTimeout) {
                        case "VISIT":
                            sessionStorage.setItem("kameleoonDisabledForVisit", "true");
                            break;
                        default:
                            break
                    }
                    return "TIMEOUT"
                }
                document.removeEventListener("visibilitychange", Kameleoon.Analyst.load);
                if ("prerender" == document.visibilityState) {
                    document.addEventListener("visibilitychange", Kameleoon.Analyst.load);
                    return "PRERENDER"
                }
                if (-1 != location.href.indexOf("kameleoonDisabled")) return "PARAMETER";
                if (Kameleoon.Internals.configuration.kameleoonDisabled) return "DISABLED";
                return ""
            };
            Analyst.prototype.getHeatMap = function() {
                window.kameleoonHeatMap()
            };
            Analyst.prototype.kameleoonFullNeeded = function() {
                if (sessionStorage.getItem("kameleoonFullApplicationCode") || sessionStorage.getItem("kameleoonLightExtension") || Kameleoon.Internals.runtime.parameters.kameleoon || Kameleoon.Internals.runtime.parameters.kameleoonVariationId || Kameleoon.Internals.runtime.parameters.kameleoonHeatMap || Kameleoon.Internals.runtime.parameters["kameleoon-simulation"] || Kameleoon.Internals.runtime.parameters.kameleoonLightExtension || Kameleoon.Internals.runtime.simulationMode) return !0;
                return !1
            };
            Analyst.prototype.loadSimulation = function() {
                var e = this;
                if (!Kameleoon.Internals.runtime.parameters.kameleoonVariationId) Object.keys(localStorage).forEach((function(e) {
                    if (-1 !== e.indexOf("kameleoonVariation-")) localStorage.removeItem(e)
                }))
            };
            Analyst.prototype.loadVariationFromServer = function(variationId, variation) {};
            Analyst.prototype.processSimulations = function() {};
            Analyst.CODE_ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";
            return Analyst
        }();
        var API = function() {
            function e() {
                var e = this;
                this.Core = {
                    enableLegalConsent: function(e) {
                        if (void 0 === e) e = "BOTH";
                        Kameleoon.Internals.runtime.Consent.enable(e)
                    },
                    disableLegalConsent: function(e) {
                        if (void 0 === e) e = "BOTH";
                        Kameleoon.Internals.runtime.Consent.disable(e)
                    },
                    enableSinglePageSupport: function() {
                        Kameleoon.Internals.runtime.enableSinglePageSupport.apply(Kameleoon.Internals.runtime, arguments)
                    },
                    getConfiguration: function() {
                        return new APIConfiguration(Kameleoon.Internals.configuration)
                    },
                    load: function() {
                        Kameleoon.Analyst.load.apply(Kameleoon.Analyst, arguments)
                    },
                    processRedirect: function() {
                        Kameleoon.Utils.processRedirect.apply(Kameleoon.Utils, arguments)
                    },
                    runWhenConditionTrue: function(n, t, o) {
                        if (void 0 === o) o = 200;
                        if (n()) Kameleoon.Utils.runProtectedFunction(t, !0);
                        else if (!Kameleoon.Internals.runtime.pageLoaded) var r = Kameleoon.Utils.setTimeout((function() {
                            Kameleoon.Utils.clearTimeout(r);
                            e.Core.runWhenConditionTrue.apply(Kameleoon, [n, t, o])
                        }), o, !0)
                    },
                    runWhenElementPresent: function(n, t, o) {
                        var r = !0;
                        if ("undefined" !== typeof o) r = !1;
                        var a = Kameleoon.Utils.querySelectorAll(n);
                        if (!Kameleoon.Internals.runtime.querySelectorAllHasError)
                            if (0 < a.length) Kameleoon.Utils.runProtectedFunction((function() {
                                t(a)
                            }), !0);
                            else if (!Kameleoon.Internals.runtime.pageLoaded)
                            if (Kameleoon.Internals.runtime.cantUseMutationObserver || !r) var i = Kameleoon.Utils.setTimeout((function() {
                                Kameleoon.Utils.clearTimeout(i);
                                e.Core.runWhenElementPresent.apply(Kameleoon, [n, t, r, o || 200])
                            }), o || 200, !0);
                            else Kameleoon.Internals.runtime.waitingElementPresentObjects.push({
                                selector: n,
                                callback: t,
                                useAntiFlicker: r
                            })
                    }
                };
                this.Goals = {
                    cancelConversion: function(n, t) {
                        try {
                            e.Goals.processConversions(n, t, !0)
                        } catch (e) {}
                    },
                    processConversion: function(n, t) {
                        try {
                            e.Goals.processConversions(n, t, !1)
                        } catch (e) {}
                    },
                    processConversions: function(e, n, t) {
                        Kameleoon.Internals.runtime.goals.forEach((function(o) {
                            if (e == o.id || e == o.name) {
                                var r = [];
                                r.push({
                                    goal: o,
                                    revenue: n,
                                    negative: t
                                });
                                Kameleoon.Analyst.Goals.processConversions(r)
                            }
                        }))
                    }
                };
                this.Data = {
                    checkInterest: function(e, n, t) {
                        if (Kameleoon.Internals.runtime.gathererRun && "object" == typeof e) {
                            var o = Math.random().toString();
                            if (null == Kameleoon.Internals.runtime.checkImageCallbacks) Kameleoon.Internals.runtime.checkImageCallbacks = {};
                            var r = [];
                            for (var a = 0; a < e.length; ++a) r.push({
                                url: e[a]
                            });
                            Kameleoon.Internals.runtime.checkImageCallbacks[o] = function(e) {
                                if (n && 1 == e)
                                    for (var o in Kameleoon.Internals.runtime.Gatherer.configuration.interests) {
                                        var r = Kameleoon.Internals.runtime.Gatherer.configuration.interests[o];
                                        if ("interestName" == r.name) {
                                            Kameleoon.Internals.runtime.Visitor.currentVisit.addInterests([r.index], !0);
                                            break
                                        }
                                    }
                                t && t(e)
                            };
                            Kameleoon.Gatherer.Interest.checkImageList(r, null, o)
                        }
                    },
                    readLocalData: function(e) {
                        return Kameleoon.Internals.runtime.storedData.Vars[e] ? Kameleoon.Internals.runtime.storedData.Vars[e].value : null
                    },
                    resetCustomData: function(n) {
                        e.Data.setCustomData(n, [], !0)
                    },
                    retrieveDataFromRemoteSource: function(e, n) {
                        Kameleoon.Utils.performBeaconServerCall("https://api-data.".concat(Kameleoon.Internals.configuration.VISITOR_DOMAIN, "/data?siteCode=").concat(Kameleoon.Internals.configuration.siteCode, "&key=").concat(e), (function(e) {
                            if (4 == e.readyState) {
                                var t = {};
                                if (200 == e.status) t = JSON.parse(e.responseText);
                                n && n(t)
                            }
                        }), null)
                    },
                    setCustomData: function(e, n, t) {
                        if (void 0 === t) t = !1;
                        if (Kameleoon.Internals.runtime && Kameleoon.Internals.runtime.gathererRun) {
                            var o = null;
                            for (var r in Kameleoon.Internals.runtime.Gatherer.configuration.customData) {
                                var a = Kameleoon.Internals.runtime.Gatherer.configuration.customData[r];
                                if (null != a && a.name == e) {
                                    o = parseInt(r);
                                    break
                                }
                            }
                            if (null != o) Kameleoon.Gatherer.CustomData.register(o, {
                                value: n,
                                overwrite: t
                            })
                        }
                    },
                    writeLocalData: function(e, n, t) {
                        Kameleoon.Internals.runtime.storedData.Vars[e] = {
                            value: n,
                            date: (new Date).getTime() + 24 * 60 * 60 * 1e3 * (t ? 30 : 1 / 24)
                        }
                    },
                    performRemoteSynchronization: function(e, n, t) {}
                };
                this.Events = {
                    triggered: [],
                    trigger: function(n) {
                        e.Core.runWhenConditionTrue((function() {
                            return !0 === Kameleoon.Internals.runtime.setupAfterLocalDataRetrieval
                        }), (function() {
                            e.Events.triggered.push(n);
                            if (Kameleoon.Analyst.Actions) Kameleoon.Analyst.Actions.processAllActions();
                            if (Kameleoon.Targeting) Kameleoon.Targeting.processAllTargetingSegments();
                        }), 100)
                    }
                };
                this.Tracking = {
                    processOmniture: function(e) {
                        Kameleoon.Tracking.processOmniture && Kameleoon.Tracking.processOmniture(e)
                    }
                };
                this.Products = {
                    obtainProductQuantities: function(e, n, t, o) {
                        var r = {};
                        null != t && (r.timeBegin = t);
                        null != o && (r.timeStart = o);
                        Kameleoon.Internals.runtime.Visitor.obtainProductData("productCounters", e, r, (function(e) {
                            for (var t in e) {
                                e[t].views = e[t].v || 0;
                                e[t].cartQuantities = e[t].atcq || 0;
                                e[t].boughtQuantities = e[t].bq || 0;
                                delete e[t].v;
                                delete e[t].atcq;
                                delete e[t].bq
                            }
                            n(e)
                        }))
                    },
                    obtainProductData: function(e, n, t) {
                        if (void 0 === t) t = {
                            all: !0
                        };
                        Kameleoon.Internals.runtime.Visitor.obtainProductData("productData", e, t, n)
                    },
                    obtainRecommendedProducts: function(e, n, t, o) {},
                    trackAddToCart: function(e, n, t) {
                        if (void 0 === t) t = 1;
                        if (null != e && e.length > 0)
                            if (t > 0) {
                                Kameleoon.Internals.runtime.RequestManager.sendProduct("eventType=productAddToCart&ean=".concat(encodeURIComponent(e.toString()), "&quantity=").concat(t));
                            }
                    },
                    trackCategoryView: function(e) {},
                    trackProductView: function(e, n) {
                        if (null != e && e.length > 0) {
                            var t = new APIProduct(e, n);
                            Kameleoon.Internals.runtime.RequestManager.sendProduct("eventType=productPage".concat(t.getTrackingParameters()));
                            if (Kameleoon.Internals.runtime.gathererRun) Kameleoon.Gatherer.track(VisitEvent_Product, {
                                ean: e
                            });
                            Kameleoon.Internals.runtime.product = t
                        }
                    },
                    trackTransaction: function(e) {
                        for (var t = 0; t < e.length; ++t) {
                            var o = e[t];
                            o.productID = o.productId || o.productID;
                            if (null != o.productID && o.productID.length > 0) {
                                o.quantity = parseInt(o.quantity) || 1;
                                if (o.quantity > 0) Kameleoon.Internals.runtime.RequestManager.sendProduct("eventType=productBuy&ean=".concat(encodeURIComponent(o.productID.toString()), "&quantity=").concat(o.quantity))
                            }
                        }
                    }
                };
                this.Experiments = new APIActions("experiments");
                this.Personalizations = new APIActions("personalizations");
                this.Segments = {
                    getAll: function() {
                        return Kameleoon.Internals.runtime.targetingSegments.map((function(e) {
                            return new APISegment(e)
                        }))
                    },
                    getById: function(e) {
                        var n = Kameleoon.Internals.runtime.targetingSegments.filter((function(n) {
                            return n.id == e
                        }))[0];
                        return n ? new APISegment(n) : null
                    },
                    getByName: function(e) {
                        var n = Kameleoon.Internals.runtime.targetingSegments.filter((function(n) {
                            return n.name == e
                        }))[0];
                        return n ? new APISegment(n) : null
                    },
                    reevaluate: function(e) {
                        var n = -1;
                        for (var t = 0; t < (Kameleoon.Internals.runtime.targetingSegments || []).length; t++) {
                            var o = Kameleoon.Internals.runtime.targetingSegments[t];
                            if (o.id == e) {
                                n = t;
                                break
                            }
                        }
                        if (n > -1) {
                            var r = void 0;
                            if (Kameleoon.Internals.runtime.simulationMode) r = Kameleoon.Internals.runtime.simulationModeData.targetingSegments.filter((function(n) {
                                return n.id == e
                            }))[0];
                            else r = Kameleoon.Internals.configuration.targetingSegments.filter((function(n) {
                                return n.id == e
                            }))[0];
                            if (r) {
                                Kameleoon.Internals.runtime.targetingSegments.splice(n, 1);
                                var a = Kameleoon.Utils.clone(r);
                                Kameleoon.Internals.runtime.targetingSegments.push(a);
                                Kameleoon.Targeting.checkTargetingSegmentsTargeting([a]);
                                Kameleoon.Internals.runtime.experiments.forEach((function(n) {
                                    return n.setTargetingSegment(e)
                                }));
                                Kameleoon.Internals.runtime.experiments.forEach((function(n) {
                                    return n.setTargetingSegment(e)
                                }));
                                Kameleoon.Analyst.Actions.processAllActions();
                                return a.targeting
                            }
                        }
                        return
                    },
                    trigger: function(e) {
                        var n = Kameleoon.Internals.runtime.targetingSegments.filter((function(n) {
                            return n.id == e
                        }));
                        if (n.length > 0) {
                            n[0].targeting = !0;
                            Kameleoon.Internals.runtime.experiments.forEach((function(n) {
                                if (n.targetingSegmentId == e) {
                                    n.targeting = void 0;
                                    n.rescheduleTargeting = !0;
                                    n.forceTargeting = !0
                                }
                            }));
                            Kameleoon.Internals.runtime.personalizations.forEach((function(n) {
                                if (n.targetingSegmentId == e) {
                                    n.targeting = void 0;
                                    n.rescheduleTargeting = !0;
                                    n.forceTargeting = !0
                                }
                            }));
                            Kameleoon.Analyst.Actions.processAllActions();
                            Kameleoon.Targeting.processTargetingSegments(n)
                        }
                    }
                };
                this.Variations = {
                    execute: function(e) {
                        var n = function(e) {
                            var n = Kameleoon.Internals.runtime.variations.filter((function(n) {
                                return n.id == e
                            }));
                            return n ? n[0] : null
                        };
                        var t = n(e);
                        if (t) {
                            if (t.redirections) t.preProcessRedirect();
                            Kameleoon.Utils.addCSSStyleSheet(t.cssCode);
                            return t.applyJavascriptCode(!0)
                        }
                        return null
                    }
                };
                this.Utils = {
                    addEventListener: function(e, n, t, o) {
                        Kameleoon.Utils.addEventListener(e, n, t, o, !0)
                    },
                    addUniversalClickListener: function(e, n, t) {
                        this.addEventListener(e, Kameleoon.Internals.runtime.mouseDownEvent, (function(e) {
                            if (!Kameleoon.Internals.runtime.touchMoveEvent) n && n(e)
                        }))
                    },
                    clearInterval: function() {
                        Kameleoon.Utils.clearInterval.apply(Kameleoon.Utils, arguments)
                    },
                    clearTimeout: function() {
                        Kameleoon.Utils.clearTimeout.apply(Kameleoon.Utils, arguments)
                    },
                    createHash: function(e) {
                        return Kameleoon.Utils.computeStringHash.apply(Kameleoon.Utils, arguments)
                    },
                    getURLParameters: function() {
                        return Kameleoon.Utils.parseParameters.apply(Kameleoon.Utils, arguments)
                    },
                    performRequest: function(e, n, t, o) {
                        if (void 0 === o) o = 5e3;
                        return Kameleoon.Utils.performBeaconServerCall(e, n, t, o)
                    },
                    querySelectorAll: function(e) {
                        return Kameleoon.Utils.querySelectorAll.apply(Kameleoon.Utils, arguments)
                    },
                    setInterval: function(e, n) {
                        if (void 0 === n) n = 200;
                        return Kameleoon.Utils.setInterval(e, n, !1, !0)
                    },
                    setTimeout: function(e, n) {
                        if (void 0 === n) n = 200;
                        return Kameleoon.Utils.setTimeout(e, n, !0)
                    }
                };
                Object.defineProperty(this.Utils, "mouseDownEvent", {
                    enumerable: !0,
                    get: function() {
                        return Kameleoon.Internals.runtime.mouseDownEvent
                    }
                });
                Object.defineProperty(this.Utils, "touchMoveEvent", {
                    enumerable: !0,
                    get: function() {
                        return Kameleoon.Internals.runtime.touchMoveEvent
                    }
                });
                Object.defineProperty(this, "Visitor", {
                    enumerable: !0,
                    get: function() {
                        try {
                            return new APIVisitor
                        } catch (e) {
                            return null
                        }
                    }
                });
                Object.defineProperty(this, "CurrentVisit", {
                    enumerable: !0,
                    get: function() {
                        try {
                            return new APIVisit(Kameleoon.Internals.runtime.Visitor.currentVisit)
                        } catch (e) {
                            return null
                        }
                    }
                });
                Object.defineProperty(this, "React", {
                    enumerable: !1,
                    get: function() {
                        return window.KameleoonAPIReact || null
                    }
                });
                Object.defineProperty(this, "processOmniture", {
                    enumerable: !1,
                    get: function() {
                        console.info("Kameleoon.API.processOmniture is deprecated, please use Kameleoon.API.Tracking.processOmniture");
                        return Kameleoon.API.Tracking.processOmniture
                    }
                })
            }
            return e
        }();
        var ElementSet = function() {
            function e() {
                this.appendEmptyElement = function(e) {
                    if (Kameleoon.Internals.configuration.singlePageSupport && !e.querySelector("span.kameleoonDomOperation")) {
                        var t = document.createElement("span");
                        t.className = "kameleoonDomOperation";
                        t.style.display = "none";
                        t.style.opacity = "0";
                        t.style.width = "0";
                        t.style.height = "0";
                        e.appendChild(t)
                    }
                };
                this.pageElementSets = [];
                this.pageElementSetsSpa = [];
                this.pageElementSetsSpaIds = {};
                window.kameleoonVirtualRootElement = document.createElement("div")
            }
            e.prototype.addDuplicatedData = function(e, t, o) {
                if (!e || !Kameleoon.Internals.configuration.singlePageSupport) return;
                if (null != o && e.getAttribute) {
                    var n = e.getAttribute("data-kameleoon-class") || "";
                    if (-1 == n.toString().indexOf(o)) e.setAttribute("data-kameleoon-class", (n.length > 0 ? n + " " : "") + o)
                }
                if (null != t) e.setAttribute("data-kameleoon-id", t.toString())
            };
            e.prototype.addRelativePositionToReferenceElement = function(e) {
                if ("absolute" != Kameleoon.Utils.obtainComputedStyle(e).position && document.body != e) this.setStyle(e, "position", "relative", !1)
            };
            e.prototype.changeHTMLContent = function(e, t, o, n, a) {
                o = this.replaceImagePlaceholder(o);
                var l = e.element;
                var i = !1;
                var r, s, m;
                var d = "input" == l.nodeName.toLowerCase() && ("button" == l.getAttribute("type") || "submit" == l.getAttribute("type") || "text" == l.getAttribute("type"));
                if (d) r = l.value;
                else {
                    r = [];
                    var p = l.childNodes;
                    for (m = 0; m < p.length; ++m) r.push(p[m])
                }
                s = d ? l.value : l.innerHTML;
                this.saveElementOriginalData(l);
                if (void 0 === l.kameleoonData.originalData.storedContent) {
                    l.kameleoonData.originalData.storedContent = r;
                    l.kameleoonData.originalData.contentType = d ? "VALUE" : "CHILD_NODES";
                    i = !0
                }
                if ((!a || i) && s != o)
                    if (n) e.element = this.replaceHTMLContent(l, t, o, e.options);
                    else if (d) l.value = o;
                else {
                    for (m = 0; m < r.length; ++m) l.removeChild(r[m]);
                    l.innerHTML = o
                }
                return i
            };
            e.prototype.checkElementIsInDocument = function(e, t) {
                var o = null,
                    n = document;
                if (t.context) {
                    o = Kameleoon.Utils.querySelectorAll(t.context);
                    if (o[0]) n = o[0].contentWindow.document
                }
                while (e && e != n.documentElement && e != window.kameleoonVirtualRootElement)
                    if (e.parentNode) e = e.parentNode;
                    else return !1;
                return e == n.documentElement ? !0 : "VIRTUAL"
            };
            e.prototype.checkElementLoaded = function(e) {
                if (!e || !e.parentNode) return !1;
                return e.nextSibling ? !0 : this.checkElementLoaded(e.parentNode)
            };
            e.prototype.obtainDepth = function(e) {
                var t = 0;
                while (null !== e.parentNode) {
                    ++t;
                    e = e.parentNode
                }
                return t
            };
            e.prototype.obtainElements = function(e, t, o, n, a) {
                var l, i, r = [];
                for (var s = 0, m = e.length; s < m; ++s) {
                    if (null === e[s]) continue;
                    var d = e[s].selector;
                    var p = e[s].currentQuery;
                    var u = e[s].options;
                    var c = null,
                        f = document;
                    if (u.context) {
                        c = Kameleoon.Utils.querySelectorAll(u.context);
                        if (!c[0]) continue;
                        c = c[0].contentWindow.document;
                        f = c;
                        if (n) Kameleoon.Utils.addCSSStyleSheet(n.css, n.action, c)
                    }
                    if (!c && a) c = a;
                    if (u.scopeURL && !new RegExp(u.scopeURL).test(window.location.href)) l = [];
                    else if (u.customSelector || u.autoGeneratedSelector || u.contentSelector) {
                        l = Kameleoon.Utils.querySelectorAll(d, c);
                        if (0 == l.length && p) l = Kameleoon.Utils.querySelectorAll(p, c);
                        if (u.kameleoonClass)
                            for (var h = 0, g = l.length; h < g; ++h)
                                if (-1 == (" " + l[h].className + " ").indexOf(" KameleoonClass" + u.kameleoonClass + " ")) {
                                    this.saveElementOriginalData(l[h], u.domOperation);
                                    l[h].className += (l[h].className ? " " : "") + "KameleoonClass" + u.kameleoonClass;
                                    Kameleoon.ElementSet.addDuplicatedData(l[h], null, u.kameleoonClass)
                                } if (u.kameleoonId)
                            for (var h = 0, g = l.length; h < g; ++h) {
                                this.saveElementOriginalData(l[h], u.domOperation);
                                l[h].id = "kameleoonId" + u.kameleoonId;
                                Kameleoon.ElementSet.addDuplicatedData(l[h], u.kameleoonId, null)
                            }
                        if (0 == l.length) {
                            if (u.kameleoonId) {
                                var v = document.getElementById("kameleoonId" + u.kameleoonId);
                                l = v ? [v] : []
                            }
                            if (u.kameleoonClass) l = Kameleoon.Utils.querySelectorAll(".KameleoonClass" + u.kameleoonClass, null)
                        }
                        if (0 == l.length) l = Kameleoon.Utils.querySelectorAll(d, window.kameleoonVirtualRootElement)
                    } else switch (d.charAt(0)) {
                        case "#":
                            var S = d.substr(1);
                            if (Kameleoon.Internals.configuration.singlePageSupport) l = [f.querySelector(d)];
                            else l = [f.getElementById(d.substr(1))];
                            if (!l[0]) {
                                var v = void 0;
                                if (e[s].element) v = e[s].element;
                                else if (0 == S.indexOf("kameleoonElement"))
                                    if (u.domOperation) {
                                        var E = Kameleoon.Utils.querySelectorAll(u.domReference, c)[0];
                                        if (!E && u.domReferenceCurrentQuery) E = Kameleoon.Utils.querySelectorAll(u.domReferenceCurrentQuery, c)[0];
                                        if (E) {
                                            v = f.createElement("div");
                                            window.kameleoonVirtualRootElement.appendChild(v);
                                            e[s].element = v
                                        } else e[s].evaluated = !1
                                    } else if (f.body) {
                                    v = f.createElement("div");
                                    f.body.appendChild(v)
                                } else e[s].evaluated = !1;
                                if (v) {
                                    v.id = S;
                                    Kameleoon.ElementSet.addDuplicatedData(v, S, null);
                                    Kameleoon.Internals.runtime.addedIDs.push("#" + S);
                                    l = [v]
                                } else l = []
                            }
                            break;
                        default:
                            l = Kameleoon.Utils.querySelectorAll(d, c);
                            break
                    }
                    var k = !1;
                    i = [];
                    for (var h = 0, g = l.length; h < g; ++h)
                        if (!l[h].getAttribute("kameleoon"))
                            if (!t || void 0 === u.htmlContent || this.checkElementLoaded(l[h])) {
                                if (u.userPosition && u.userPosition.referenceElement && !Kameleoon.Utils.querySelectorAll(u.userPosition.referenceElement)[0]) continue;
                                if (u.domOperation) {
                                    var E = Kameleoon.Utils.querySelectorAll(u.domReference, c)[0];
                                    if (!E && u.domReferenceCurrentQuery) E = Kameleoon.Utils.querySelectorAll(u.domReferenceCurrentQuery, c)[0];
                                    this.saveElementOriginalData(l[h]);
                                    l[h].kameleoonData.domTargetElement = E;
                                    if (t || o) {
                                        if (!this.checkElementLoaded(l[h]) && 0 != u.selector.indexOf("#kameleoonElement") || !this.checkElementLoaded(l[h].kameleoonData.domTargetElement)) continue;
                                        k = !0
                                    }
                                }
                                i.push({
                                    element: l[h],
                                    options: Kameleoon.Utils.clone(u)
                                })
                            } e[s].removeSelector = k || o && 0 < l.length && null != u.autoGeneratedSelector;
                    r = r.concat(i)
                }
                return r
            };
            e.prototype.performHTMLReplacements = function(e, t, o, n, a) {
                var l = this;
                var i = null;
                var r = !0;
                while (r) {
                    i = this.obtainElements(e, t, o, n, a);
                    if (0 == i.length) break;
                    i = i.sort((function(e, t) {
                        var o = l.obtainDepth(e.element),
                            n = l.obtainDepth(t.element);
                        return o < n ? -1 : o > n ? 1 : 0
                    }));
                    i = this.removeDuplicates(i);
                    r = !1;
                    for (var s = 0, m = i.length; s < m; ++s) {
                        var d = i[s].options;
                        if (d.htmlContent) r = this.changeHTMLContent(i[s], e, d.htmlContent, !1, !0) || r;
                        if (d.replaceHtmlContent) r = this.changeHTMLContent(i[s], e, d.replaceHtmlContent, !0, !0) || r;
                        if (r) r = !1
                    }
                }
                for (var s = 0, m = e.length; s < m; ++s)
                    if (e[s] && e[s].removeSelector) e[s] = null;
                return i
            };
            e.prototype.powerElement = function(e, t, o) {
                if (!t.dataset || !t.dataset.kameleoonEvaluated || Kameleoon.Internals.runtime.editorMode || Kameleoon.Internals.runtime.kameleoonSelectionIframeMode) {
                    if (!t || Kameleoon.Internals.configuration.specifyElements && -1 == t.className.indexOf("Kameleoon")) return;
                    if (t.dataset) t.dataset.kameleoonEvaluated = !0;
                    this.saveElementOriginalData(t);
                    t.kameleoonData.powered = !0;
                    t.setAttribute("kameleoon", "active");
                    if (o.keepSpace) this.reserveSpaceForElement(t);
                    if (o.domOperation) {
                        var n = t.kameleoonData.domTargetElement;
                        if (!n) {
                            var a = null;
                            if (o.context) {
                                a = Kameleoon.Utils.querySelectorAll(o.context);
                                a = a[0] ? a[0].contentWindow.document : null
                            }
                            n = Kameleoon.Utils.querySelectorAll(o.domReference, a)[0];
                            if (!n && o.domReferenceCurrentQuery) n = Kameleoon.Utils.querySelectorAll(o.domReferenceCurrentQuery, a)[0]
                        }
                        this.processDomOperation(e, t, n, o.domOperation)
                    }
                    if (o.attributesData) this.processAttributesData(t, o.attributesData);
                    if (o.kameleoonId && (!t.id || 0 === t.getAttribute("id").indexOf("kameleoonId") || 0 === t.getAttribute("id").indexOf("kameleoonElement"))) {
                        t.id = "kameleoonId" + o.kameleoonId;
                        Kameleoon.ElementSet.addDuplicatedData(t, o.kameleoonId, null)
                    }
                    if (o.kameleoonClass)
                        if (-1 == (" " + t.className + " ").indexOf(" KameleoonClass" + o.kameleoonClass + " ")) {
                            t.className += (t.className ? " " : "") + "KameleoonClass" + o.kameleoonClass;
                            Kameleoon.ElementSet.addDuplicatedData(t, null, o.kameleoonClass)
                        } this.processUserPosition(t, t, o.userPosition, "inline" != Kameleoon.Utils.obtainComputedStyle(t).display);
                    this.setupNoLinkPropagation(o, t);
                    this.processSpecialCases(t);
                    this.processLinks(t, o.href)
                }
            };
            e.prototype.powerElements = function(e, t) {
                for (var o = 0, n = t.length; o < n; ++o) this.powerElement(e, t[o].element, t[o].options)
            };
            e.prototype.processAttributesData = function(e, t) {
                var o = JSON.parse(t);
                for (var n = 0; n < o.length; ++n) {
                    var a = o[n];
                    if (a.removed) e.removeAttribute(a.attributeName);
                    else e.setAttribute(a.attributeName, a.attributeValue)
                }
            };
            e.prototype.processDomOperation = function(e, t, o, n) {
                if (!o) {
                    if (t.dataset) t.dataset.kameleoonEvaluated = !1;
                    e.evaluated = !1;
                    return
                }
                var a = t.parentNode;
                var l = o.parentNode;
                var i = t.nextSibling;
                while (l) {
                    if (l == t) return;
                    l = l.parentNode
                }
                l = o.parentNode;
                try {
                    if (a) a.removeChild(t);
                    switch (n) {
                        case "SWAP":
                            Kameleoon.ElementSet.appendEmptyElement(t);
                            this.saveElementOriginalData(o);
                            l.insertBefore(t, o);
                            l.removeChild(o);
                            if (i) try {
                                a.insertBefore(o, i)
                            } catch (e) {
                                a = t.parentNode;
                                i = t.nextSibling;
                                a.insertBefore(o, i)
                            } else a.appendChild(o);
                            if ("left" == Kameleoon.Utils.obtainComputedStyle(t)["float"] && "right" == Kameleoon.Utils.obtainComputedStyle(o)["float"]) {
                                t.style["float"] = "right";
                                o.style["float"] = "left"
                            } else if ("right" == Kameleoon.Utils.obtainComputedStyle(t)["float"] && "left" == Kameleoon.Utils.obtainComputedStyle(o)["float"]) {
                                t.style["float"] = "left";
                                o.style["float"] = "right"
                            }
                            t.kameleoonData.swapTargetElement = o;
                            break;
                        case "INSERT_BEFORE":
                            Kameleoon.ElementSet.appendEmptyElement(t);
                            l.insertBefore(t, o);
                            break;
                        case "INSERT_AFTER":
                            Kameleoon.ElementSet.appendEmptyElement(t);
                            if (o.nextSibling) l.insertBefore(t, o.nextSibling);
                            else l.appendChild(t);
                            break;
                        case "INSERT_AS_CHILD":
                            Kameleoon.ElementSet.appendEmptyElement(t);
                            if (0 == o.childNodes.length) o.appendChild(t);
                            else o.insertBefore(t, o.firstChild);
                            break
                    }
                } catch (e) {}
            };
            e.prototype.processElementSet = function(e, t, o, n, a, l) {
                if (!e.id) e.id = Math.floor(999999 * Math.random());
                var i = null;
                var r = [];
                this.pageElementSets = this.pageElementSets.concat([e]);
                i = this.performHTMLReplacements([e], o, n, t, l);
                if (Kameleoon.Internals.configuration.singlePageSupport && !this.pageElementSetsSpaIds[e.id.toString()]) {
                    this.pageElementSetsSpaIds[e.id.toString()] = !0;
                    this.pageElementSetsSpa.push({
                        elementSet: e,
                        potentialElementsWithOptions: i
                    })
                }
                if (a) window.editor.services.EngineService.getInstance().refreshCustomizableElements();
                for (var s = 0, m = i.length; s < m; ++s) {
                    if (o && i[s].options.userPosition && "RELATIVE" != i[s].options.userPosition.positionMode) continue;
                    r.push(i[s])
                }
                this.powerElements(e, r);
                if (0 === r.length) e.evaluated = !1;
                return r ? r.length > 0 : !1
            };
            e.prototype.processLinks = function(e, t) {
                if (!t) return;
                if ("a" == e.nodeName.toLowerCase()) e.href = t;
                else {
                    Kameleoon.Utils.addEventListener(e, "click", (function() {
                        window.location.href = t
                    }));
                    e.style.cursor = "pointer"
                }
            };
            e.prototype.processSpecialCases = function(e) {
                if ("body" == e.nodeName.toLowerCase() && -1 != Kameleoon.Utils.obtainComputedStyle(e).background.indexOf("linear-gradient")) {
                    e.style.backgroundRepeat = "no-repeat";
                    if (window.innerHeight - document.documentElement.scrollHeight > 0) e.style.backgroundAttachment = "fixed"
                }
            };
            e.prototype.processUserPosition = function(e, t, o, n) {
                if (o) {
                    switch (o.positionMode) {
                        case "ABSOLUTE_KEEP_SPACE":
                        case "ABSOLUTE":
                            if (n) {
                                var a = "ABSOLUTE_KEEP_SPACE" == o.positionMode ? e.kameleoonData.originalData.originalNode.offsetWidth : e.offsetWidth;
                                if (a) this.setStyle(t, "width", a + "px", "th" != t.nodeName.toLowerCase() && "td" != t.nodeName.toLowerCase())
                            }
                            var l = null;
                            var i = !1;
                            if (o.referenceElement) {
                                l = Kameleoon.Utils.querySelectorAll(o.referenceElement)[0];
                                i = !0
                            }
                            if (!l) l = document.body;
                            if (l && t.parentNode != l) {
                                t.parentNode.removeChild(t);
                                l.appendChild(t);
                                if (!t.kameleoonData) t.kameleoonData = {};
                                t.kameleoonData.moved = !0
                            }
                            this.setStyle(t, "position", "absolute", !1);
                            var r = Kameleoon.Utils.obtainComputedStyle(t).left.replace("px", "");
                            var s = (parseInt(r) || 0) / o.referenceWidth;
                            this.setStyle(t, "left", Math.round(s * l.offsetWidth) + "px", !0);
                            if (i) this.addRelativePositionToReferenceElement(l);
                            break;
                        case "RELATIVE":
                            this.setStyle(t, "position", "", !1);
                            break
                    }
                    this.setStyle(t, "top", "", !1);
                    this.setStyle(t, "left", "", !1);
                    this.setStyle(t, "right", "", !1);
                    this.setStyle(t, "bottom", "", !1);
                    if (!n) this.setStyle(t, "width", "", !1);
                    this.setStyle(t, "height", "", !1)
                }
            };
            e.prototype.removeDuplicates = function(e) {
                var t = [];
                for (var o = 0, n = e.length; o < n; ++o)
                    if (void 0 == e[o].element.kameleoonUnique) {
                        e[o].element.kameleoonUnique = t.length;
                        if (e[o].options.kameleoonClass) e[o].options.kameleoonClass = [e[o].options.kameleoonClass];
                        t.push(e[o])
                    } else {
                        var a = e[o].element.kameleoonUnique;
                        for (var l in e[o].options)
                            if ("kameleoonClass" == l) {
                                if (!t[a].options[l]) t[a].options[l] = [];
                                t[a].options[l].push(e[o].options[l])
                            } else t[a].options[l] = e[o].options[l]
                    } for (var o = 0, n = t.length; o < n; ++o)
                    if (void 0 !== t[o].element.kameleoonUnique) {
                        t[o].element.kameleoonUnique = void 0;
                        t[o].element.removeAttribute("kameleoonUnique")
                    } return t
            };
            e.prototype.replaceHTMLContent = function(e, t, o, n) {
                o = this.replaceImagePlaceholder(o);
                var a = this.checkElementIsInDocument(e, n);
                if (0 == o.indexOf("kameleoonInputImage:")) {
                    this.saveElementOriginalData(e);
                    e.kameleoonData.originalData.imgSrc = e.src;
                    e.src = o.replace("kameleoonInputImage:", "");
                    return e
                }
                var l = document.createElement(a ? e.parentNode.nodeName.toLowerCase() : "div");
                l.innerHTML = o;
                var i = null;
                if (0 === o.search(/<td>|<tr>/)) {
                    var r = document.createElement("table");
                    r.innerHTML = o;
                    l.innerHTML = "";
                    l.appendChild(r)
                }
                while (l.childNodes.length > 0) {
                    var s = l.childNodes[0];
                    s.kameleoonData = e.kameleoonData;
                    s.kameleoonData.originalData.replacedElement = e;
                    if (!i) {
                        if (3 == s.nodeType) return !1;
                        i = s;
                        s.id = e.id;
                        if ("copyAttributes" == i.getAttribute("kameleoon")) {
                            for (var m = 0, d = e.attributes.length; m < d; ++m) {
                                if ("srcset" == e.attributes[m].name) {
                                    if (i.getAttribute("src")) i.setAttribute("srcset", i.getAttribute("src"));
                                    continue
                                }
                                if ("src" != e.attributes[m].name) i.setAttribute(e.attributes[m].name, e.attributes[m].value)
                            }
                            i.removeAttribute("kameleoon")
                        }
                        var p = e.className.match(/(KameleoonClass[^\s]*)/);
                        if (p) s.className += (s.className ? " " : "") + p[1];
                        if (n.kameleoonId) {
                            s.id = "kameleoonId" + n.kameleoonId;
                            Kameleoon.ElementSet.addDuplicatedData(s, n.kameleoonId, null)
                        }
                        if (n.kameleoonClass && -1 == (" " + s.className + " ").indexOf(" KameleoonClass" + n.kameleoonClass + " ")) {
                            s.className += (s.className ? " " : "") + "KameleoonClass" + n.kameleoonClass;
                            Kameleoon.ElementSet.addDuplicatedData(s, null, n.kameleoonClass)
                        }
                    }
                    if (a) e.parentNode.insertBefore(s, e);
                    if (!0 !== a)
                        for (var m = 0, d = t.length; m < d; ++m)
                            if (e == t[m].element) t[m].element = s;
                    if (!1 === a) {
                        e = s;
                        s.parentNode.removeChild(s)
                    }
                }
                if (a) e.parentNode.removeChild(e);
                return i
            };
            e.prototype.replaceImagePlaceholder = function(e) {
                return e.replace(/STATIC_IMAGE_PATH/g, Kameleoon.Internals.configuration.IMAGE_PATH)
            };
            e.prototype.reserveSpaceForElement = function(e) {
                if (!e.kameleoonData || !e.kameleoonData.originalData) this.saveElementOriginalData(e);
                if (!e.kameleoonData.originalData.originalNode) {
                    var t = !0;
                    for (var o = 0, n = e.childNodes.length; o < n; ++o) {
                        var a = e.childNodes[o];
                        if (1 == a.nodeType) t = !1
                    }
                    var l = e.cloneNode(t);
                    var i = e.getBoundingClientRect().width;
                    this.setStyle(l, "width", i + "px", !1);
                    if (!t) this.setStyle(l, "height", e.clientHeight + "px", !1);
                    var r = Kameleoon.Utils.obtainComputedStyle(e);
                    this.setStyle(l, "float", r.cssFloat, !1);
                    this.setStyle(l, "margin-top", r.marginTop, !1);
                    this.setStyle(l, "margin-bottom", r.marginBottom, !1);
                    this.setStyle(l, "margin-left", r.marginLeft, !1);
                    this.setStyle(l, "margin-right", r.marginRight, !1);
                    this.setStyle(l, "overflow", r.overflow, !1);
                    this.setStyle(l, "visibility", "hidden", !1);
                    l.removeAttribute("id");
                    l.removeAttribute("class");
                    e.parentNode.insertBefore(l, e);
                    e.kameleoonData.originalData.originalNode = l;
                    this.setStyle(e, "position", "absolute", !1)
                }
            };
            e.prototype.saveElementOriginalData = function(e, t) {
                if (!e || e.kameleoonData && e.kameleoonData.originalData) return;
                if (!e.kameleoonData) e.kameleoonData = {};
                e.kameleoonData.originalData = {};
                e.kameleoonData.originalData.attributesData = {};
                if (e.parentNode) e.kameleoonData.originalData.parentNode = e.parentNode;
                if (e.nextSibling) {
                    e.kameleoonData.originalData.nextSibling = e.nextSibling;
                    if (3 === e.nextSibling.nodeType && e.previousSibling && 3 === e.previousSibling.nodeType && t && ("INSERT_AFTER" === t || "INSERT_BEFORE" === t)) {
                        var o = document.createComment("ReplaceHolderComment");
                        var n = e.nextSibling.parentNode.insertBefore(o, e.nextSibling);
                        e.kameleoonData.originalData.placeholderComment = n
                    }
                }
                if (e.href) e.kameleoonData.originalData.href = e.getAttribute("href");
                if (e.nodeValue) e.kameleoonData.originalData.nodeValue = e.nodeValue;
                if (e.attributes)
                    for (var a = 0, l = e.attributes.length; a < l; ++a) {
                        var i = e.attributes[a];
                        e.kameleoonData.originalData.attributesData[i.nodeName] = i.nodeValue
                    }
            };
            e.prototype.setStyle = function(e, t, o, n) {
                this.saveElementOriginalData(e);
                var a = e.style.cssText;
                if (a) {
                    a = a.replace(/^\s+|\s+$/g, "");
                    var l = new RegExp("(^|;)(\\s*" + t + "(.*?);)");
                    a = a.replace(l, "$1");
                    if (a) {
                        if (a.lastIndexOf(";") < a.length - 2) a += ";";
                        if (a.lastIndexOf(" ") != a.length - 1 && o) a += " "
                    }
                } else a = "";
                var i = a + (o ? t + ": " + o + (n ? " !important;" : ";") : "");
                e.style.cssText = i
            };
            e.prototype.setupNoLinkPropagation = function(e, t) {
                if (e.noLinkPropagation) t.setAttribute("kData", "nlp")
            };
            return e
        }();
        var Gatherer = function() {
            function t() {
                this.MAX_HREF_LENGTH_IN_A_REQUEST = 200;
                this.MAX_PAGE_TITLE_LENGTH_IN_A_REQUEST = 200;
                this.SCRIPT_VERSION = 20190115;
                this.trackExternalSolutionData = function() {}
            }
            t.prototype.run = function(t) {
                var e = Kameleoon.Utils.clone(Kameleoon.Internals.configuration.Gatherer);
                if ("string" == typeof e) e = JSON.parse(Kameleoon.Utils.decodeString(e));
                Kameleoon.Internals.runtime.Gatherer = {
                    configuration: e,
                    active: !0,
                    numberClicks: 0
                };
                this.Browser = new Browser(e.browsers);
                this.CustomData = new CustomData(e.customData);
                this.KeyPage = new KeyPage(e.keyPages);
                this.KeyWord = new KeyWord(e.keyWords);
                this.Language = new Language;
                this.OperatingSystem = new OperatingSystem(e.oss);
                this.Referrer = new Referrer(e.referrers);
                this.TimeZone = new TimeZone;
                Kameleoon.Internals.runtime.storedData.saveField("Gatherer", "startsOfVisitForCurrentPage", 0);
                Kameleoon.Internals.runtime.Visitor = new Visitor;
                t();
                Kameleoon.Utils.runProtectedScript(Kameleoon.Internals.runtime.Gatherer.configuration.customScriptBefore, "kameleoonCustomScriptBefore.js");
                this.track(VisitEvent_Page);
                this.track(VisitEvent_StaticData);
                Kameleoon.Internals.runtime.Visitor.updateAndTrackInfluences();
                VisitEvent_Activity.initialize();
                this.CustomData.run();
                Kameleoon.Internals.runtime.gathererRun = !0
            };
            t.prototype.startNewVisit = function(t, e) {
                Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!0, !0, e);
                this.track(VisitEvent_Page);
                this.track(VisitEvent_StaticData);
                Kameleoon.Internals.runtime.Visitor.updateAndTrackInfluences();
                this.CustomData.run();
            };
            t.prototype.track = function(t, e) {
                new VisitEvent(t).track(e)
            };
            return t
        }();
        var KameleoonEngine = function() {
            function e() {
                this.Analyst = new Analyst;
                this.API = new API;
                this.ElementSet = new ElementSet;
                this.Gatherer = new Gatherer;
                this.Loader = new Loader;
                this.Targeting = new Targeting;
                this.Tracking = new Tracking;
                this.Utils = new Utils
            }
            return e
        }();
        var Loader = function() {
            function e() {
                var e = this;
                this.enableKameleoonEditorListener = function() {
                    if (!Kameleoon.Internals.runtime.editorListenerEnabled) {
                        Kameleoon.Internals.runtime.editorListenerEnabled = !0;
                        var e = function(e) {
                            if (!e) e = window.event;
                            Kameleoon.Loader.listenKeys.call(Kameleoon.Loader, e)
                        };
                        Kameleoon.Utils.addEventListener(document, "keyup", e, !1)
                    }
                };
                this.listenKeys = function(e) {
                    if (e.shiftKey) {
                        if (113 == e.keyCode && Kameleoon.Internals.configuration.abtestingSetup) {
                            Kameleoon.Internals.runtime.editorMode = !0;
                            Kameleoon.Analyst.loadKameleoonFull((function() {
                                Kameleoon.Loader.enableKameleoonEditor.apply(Kameleoon.Loader)
                            }), !0)
                        }
                        if (115 == e.keyCode && (Kameleoon.Internals.runtime.simulationMode || Kameleoon.Internals.runtime.parameters.kameleoonVariationSelection)) Kameleoon.Analyst.loadKameleoonFull((function() {
                            Kameleoon.Loader.enableSimulationPanel()
                        }), !0)
                    }
                };
            }
            return e
        }();
        var Runtime = function() {
            function Runtime() {
                var e = this;
                this.JS_EDITOR_URL = Kameleoon.Internals.configuration.BASE_EDITOR_URL + "script/editor.js";
                this.PAGE_LOADED_POLL_DELAY = 250;
                this.PAGE_LOADING_POLL_DELAY = 75;
                this.enableSinglePageSupport = function() {
                    e.singlePageSupport = !0;
                    e.href = window.location.href;
                    Kameleoon.Utils.setInterval((function() {
                        var t = e.href;
                        e.href = window.location.href;
                        if (t != e.href) Kameleoon.Analyst.load.apply(e, [])
                    }), 100)
                };
                this.executeGlobalScript = function() {
                    if (Kameleoon.Internals.configuration.globalScript && !e.globalScriptProcessed && !e.editorMode && !e.kameleoonSelectionIframeMode) {
                        Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
                            type: "globalScript"
                        });
                        e.globalScriptProcessed = !0;
                        Kameleoon.Utils.runProtectedScript(Kameleoon.Internals.configuration.globalScript, "kameleoonGlobalScript.js")
                    }
                };
                this.initializeActions = function() {
                    if (Kameleoon.Internals.configuration.abtestingSetup || Kameleoon.Internals.configuration.personalizationSetup) {
                        e.targetingSegments = Kameleoon.Utils.clone(Kameleoon.Internals.configuration.targetingSegments);
                        e.variations = Kameleoon.Utils.clone(Kameleoon.Internals.configuration.variations);
                        e.variations.forEach((function(e) {
                            if (e.widgetTemplateInputData)
                                for (var t in e.widgetTemplateInputData)
                                    if ("string" == typeof e.widgetTemplateInputData[t]) e.widgetTemplateInputData[t] = e.widgetTemplateInputData[t].replace("STATIC_IMAGE_PATH", Kameleoon.Internals.configuration.IMAGE_PATH)
                        }))
                    }
                    if (Kameleoon.Internals.configuration.abtestingSetup) e.experiments = Kameleoon.Utils.clone(Kameleoon.Internals.configuration.experiments).map((function(t) {
                        return new Experiment(t, e.incomingStoredData)
                    }));
                    if (Kameleoon.Internals.configuration.personalizationSetup) {
                        e.personalizations = Kameleoon.Utils.clone(Kameleoon.Internals.configuration.personalizations).map((function(t) {
                            return new Personalization(t, e.incomingStoredData)
                        }));
                    }
                };
                this.initializeActionsAfterGatherer = function() {
                    if (Kameleoon.Internals.configuration.personalizationSetup) Personalization.setGlobalPersonalizationDeviation();
                };
                this.initializeListeners = function() {
                    Kameleoon.Utils.domReady((function() {
                        e.domReady = !0;
                        if (!0 !== Kameleoon.Internals.configuration.disableEditorLaunchViaKeys) Kameleoon.Loader.enableKameleoonEditorListener();
                        if (e.kameleoonSelectionIframeMode) {
                            var t = document.createElement("script");
                            t.setAttribute("type", "text/javascript");
                            t.setAttribute("charset", "utf-8");
                            t.setAttribute("src", "https://back-office-redesign." + Kameleoon.Internals.configuration.DOMAIN + "/get-script?type=selection");
                            e.headNode.appendChild(t)
                        }
                        if (!e.simulationMode && e.parameters.kameleoonHeatMap && e.parameters.kameleoonVariationId) Kameleoon.Analyst.getHeatMap();
                        if (0 == window.kameleoonLightIframe && window.kameleoonIframeURL)
                            if (Kameleoon.Internals.runtime.Gatherer.startOfVisit) Kameleoon.Utils.setTimeout((function() {
                                var e = document.createElement("iframe");
                                e.src = window.kameleoonIframeURL;
                                e.id = "kameleoonExternalIframe";
                                e.style.cssFloat = "left !important";
                                e.style.opacity = "0.0 !important";
                                e.width = "0px";
                                e.height = "0px";
                                e.onload = function() {
                                    e.parentNode.removeChild(e)
                                };
                                document.head.appendChild(e)
                            }), 5e3)
                    }));
                    if ("touchend" == e.mouseDownEvent) {
                        Kameleoon.Utils.addEventListener(document, "touchmove", (function(t) {
                            e.touchMoveEvent = !0
                        }));
                        Kameleoon.Utils.addEventListener(document, "touchstart", (function(t) {
                            e.touchMoveEvent = !1
                        }))
                    }
                    if (!e.iframeLocalStorage) window.addEventListener("storage", (function(t) {
                        var n = null == t.key ? [""] : t.key.split("-");
                        var o = n[0];
                        if (-1 != o.indexOf("kameleoon")) {
                            if (window.document.hasFocus()) return;
                            var a = void 0;
                            if (null == t.newValue) a = null;
                            else try {
                                a = JSON.parse(t.newValue).value
                            } catch (e) {
                                return
                            }
                            var i = {};
                            switch (o) {
                                case "kameleoonExperiment":
                                    i.type = o;
                                    var l = n[1];
                                    i.experimentId = parseInt(l);
                                    var r = void 0;
                                    if (null == a) r = null;
                                    else {
                                        var s = a.split("/")[0];
                                        r = isNaN(s) ? s : parseInt(s)
                                    }
                                    i.registeredVariationId = r;
                                    break;
                                case "kameleoonGlobalPersonalizationExposition":
                                    i.type = o;
                                    i.active = null == a ? null : "true" == a.split("/")[0];
                                    break;
                                case e.dataKeyName:
                                case "kameleoonSimulationVisitorData":
                                    i.type = o;
                                    i.value = null == a ? null : a;
                                    break;
                                case "kameleoonLegalConsent":
                                    i.type = o;
                                    i.saveLegalConsent = null == a ? null : a;
                                    break
                            }
                            if (null != i.type) Kameleoon.Utils.processStorageData(i)
                        }
                    }), !1);
                    if (Kameleoon.Internals.configuration.singlePageSupport) e.enableSinglePageSupport();
                };
                this.loadExternalRequests = function() {
                    e.Geolocation = "undefined" != typeof KGeolocation ? new KGeolocation : null;
                    e.IP = "undefined" != typeof IP ? new IP : null
                };
                this.processPageLoaded = function() {
                    e.pageLoaded = !0;
                    Kameleoon.Utils.removeBlockingStyleSheet();
                    for (var t = 0, n = e.variations.length; t < n; ++t)
                        if (e["enginePollerForVariation" + e.variations[t].id]) {
                            if (Kameleoon.Internals.runtime.cantUseMutationObserver) window.clearInterval(e["enginePollerForVariation" + e.variations[t].id]);
                            e["enginePollerForVariation" + e.variations[t].id] = null
                        }
                };
                this.readFromStorageOrExternal = function(t, n) {
                    if (e.incomingStoredData) return e.incomingStoredData[t];
                    else return Kameleoon.Utils.readLocalData(t, n, !0)
                };
                this.setup = function() {
                    if (Kameleoon.Internals.runtime.parameters.kameleoon) Kameleoon.Utils.domReady((function() {
                        Kameleoon.Loader.enableKameleoonEditor()
                    }));
                    if (null != Kameleoon.Internals.configuration.kameleoonByteLength)
                        if (null != window.kameleoonStartLoadTime) {
                            var t = window.kameleoonEndLoadTime - window.kameleoonStartLoadTime - 25;
                            e.bandwithBytesPerMillisecond = Kameleoon.Internals.configuration.kameleoonByteLength / t
                        } var n = Kameleoon.Utils.setInterval((function() {
                        var t = document.getElementById("adBlockerCheck");
                        if (null == t && null != document.body) {
                            t = document.createElement("div");
                            t.id = "adBlockerCheck";
                            t.className = "ad-placement";
                            document.body.appendChild(t)
                        }
                        if (null != t && "none" == Kameleoon.Utils.obtainComputedStyle(t).display) {
                            Kameleoon.Utils.clearInterval(n);
                            e.adBlocker = !0
                        }
                    }), 50);
                    var o = Kameleoon.Utils.setTimeout((function() {
                        Kameleoon.Utils.clearTimeout(o);
                        var t = document.getElementById("adBlockerCheck");
                        if (null != t) t.parentNode.removeChild(t);
                        if (null == e.adBlocker) {
                            Kameleoon.Utils.clearInterval(n);
                            e.adBlocker = !1
                        } else Kameleoon.Gatherer.track(VisitEvent_AdBlocker)
                    }), 2e3);
                    var a = Kameleoon.Utils.setInterval((function() {
                        if (Kameleoon.Utils.querySelectorAll("[id^=ghostery-]").length > 0) {
                            Kameleoon.Utils.clearInterval(a);
                            e.adBlocker = !0
                        }
                    }), 50);
                    var i = Kameleoon.Utils.setTimeout((function() {
                        Kameleoon.Utils.clearTimeout(i);
                        if (null == e.ghostery) {
                            Kameleoon.Utils.clearInterval(a);
                            e.ghostery = !1
                        } else Kameleoon.Gatherer.track(VisitEvent_AdBlocker)
                    }), 2e3);
                    if ("Safari" == Kameleoon.Internals.runtime.Device.browser) window.onpageshow = function(t) {
                        if (t.persisted) e.updateAfterPageCached()
                    };
                    Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!1, !1, !1);
                    if (!Kameleoon.Internals.configuration.requestsAfterConsent) e.loadExternalRequests();
                    KMutationObserver.setMutationObserver();
                    Kameleoon.Analyst.loadKameleoonFull((function() {
                        Kameleoon.Analyst.loadSimulation()
                    }));
                    Kameleoon.Analyst.Actions.processAllActions();
                    Kameleoon.Targeting.processAllTargetingSegments();
                    Kameleoon.Analyst.Goals.checkKameleoonGoals()
                };
                this.setupLocalData = function(t) {
                    Kameleoon.Utils.addEventListener(window, "message", Kameleoon.Utils.processMessageEvent, !1);
                    if (e.iframeLocalStorage) {
                        e.externalIframe = document.getElementById("kameleoonExternalIframe") || window.kameleoonExternalIframe;
                        e.postMessageOrigin = window.kameleoonIframeOrigin ? window.kameleoonIframeOrigin : Kameleoon.Internals.configuration.IFRAME_ORIGIN;
                        e.postMessageCallbacks = {};
                        if (null == Kameleoon.Internals.configuration.externalIframeData) Kameleoon.Utils.postMessageToExternalIframe(JSON.stringify({
                            type: "retrieve",
                            callbackId: Kameleoon.Utils.addPostMessageCallback((function(n) {
                                e.incomingStoredData = n;
                                t()
                            }))
                        }));
                        else {
                            e.incomingStoredData = Kameleoon.Internals.configuration.externalIframeData;
                            t();
                            delete Kameleoon.Internals.configuration.externalIframeData
                        }
                    } else {
                        e.incomingStoredData = null;
                        t()
                    }
                };
                this.shouldAbortRuntimeOptout = function() {
                    var t = e.parameters.kameleoonOptout;
                    if (null != t) {
                        var n = parseInt(t);
                        Kameleoon.Utils.createLocalData("kameleoonOptout", "true", isNaN(n) ? 45 : n, null, "LS", !1, null, !0)
                    }
                    if (Kameleoon.Utils.readLocalData("kameleoonOptout", "LS", !1) || Kameleoon.Utils.readLocalData("kameleoonOptout", "COOKIE", !1)) {
                        Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
                            type: "optout"
                        });
                        return !0
                    }
                    return !1
                };
                this.updateAfterPageCached = function() {
                    if (e.iframeLocalStorage) Kameleoon.Utils.postMessageToExternalIframe(JSON.stringify({
                        type: "retrieve",
                        callbackId: Kameleoon.Utils.addPostMessageCallback((function() {}))
                    }));
                    else {
                        var t = Kameleoon.Utils.readLocalData(Kameleoon.Internals.runtime.simulationMode ? "kameleoonSimulationVisitorData" : Kameleoon.Internals.runtime.dataKeyName, "LS", !0);
                        Kameleoon.Internals.runtime.storedData.update(t);
                        Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!1, !1, !1)
                    }
                };
                this.pageStartTime = (new Date).getTime();
                this.dataKeyName = "kameleoonData";
                if (Kameleoon.Internals.configuration.useMultipleSiteCodes) {
                    this.dataKeyName += "-" + Kameleoon.Internals.configuration.siteCode;
                    Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[this.dataKeyName] = !0
                }
                this.Device = new Device;
                this.deviceType = this.Device.type;
                this.parameters = Kameleoon.Utils.parseParameters();
                this.headNode = document.getElementsByTagName("head")[0];
                this.editorMode = "true" == this.parameters.kameleoon;
                this.proxyMode = "proxy." + Kameleoon.Internals.configuration.DOMAIN === window.location.hostname;
                this.disableCache = "true" == this.parameters.kameleoonDisableCache || this.parameters.kameleoonVariationId;
                this.kameleoonSelectionIframeMode = "true" == this.parameters.kameleoonSelectionIframeMode;
                this.iframeLocalStorage = Kameleoon.Internals.configuration.useWideDomainSupport;
                this.useWideDomainSupport = Kameleoon.Internals.configuration.useWideDomainSupport || null != window.kameleoonLightIframe;
                if (0 == window.kameleoonLightIframe || null == window.kameleoonLightIframe) this.iframeLocalStorage = !1;
                this.mouseDownEvent = "ontouchend" in document.documentElement ? "touchend" : "mousedown";
                this.addedClasses = [];
                this.addedIDs = [];
                this.eventListeners = [];
                this.listenVariations = [];
                this.waitingElementPresentObjects = [];
                this.experiments = [];
                this.personalizations = [];
                this.variations = [];
                this.intervalIds = {};
                this.timeoutIds = {};
                this.goals = Kameleoon.Utils.clone(Kameleoon.Internals.configuration.goals);
                this.cantUseMutationObserver = "undefined" == typeof MutationObserver && !Kameleoon.Internals.configuration.disableDomMutationObserver;
                this.Consent = new Consent
            }
            Runtime.prototype.clear = function() {
                this.eventListeners.forEach((function(eventListener) {
                    var element;
                    if ("window" == eventListener.elementKey || "document" == eventListener.elementKey) element = eval(eventListener.elementKey);
                    else {
                        element = document.querySelector("[kameleoonListener-".concat(eventListener.elementKey, "=true]"));
                        if (element) element.removeAttribute("kameleoonListener-".concat(eventListener.elementKey))
                    }
                    if (element) element.removeEventListener(eventListener.eventType, eventListener.actionFunction, eventListener.useCapture)
                }));
                for (var timeoutId in this.timeoutIds) Kameleoon.Utils.clearTimeout(parseInt(timeoutId));
                for (var intervalId in this.intervalIds) Kameleoon.Utils.clearInterval(parseInt(intervalId));
                if (this.RequestManager) this.RequestManager.processRequests();
                if (this.storedData) this.storedData.save(!0);
                if (null != this.mutationObserver) this.mutationObserver.disconnect();
                if (null != this.mutationObserverSpa) this.mutationObserverSpa.disconnect();
                var elements = Kameleoon.Utils.querySelectorAll("[id^='kameleoonElement'], [id*='kameleoonScenarioLayerBase'], [id^='kameleoonStyleSheet'], [class*='kameleoonWidget']");
                for (var i = 0; i < elements.length; ++i) elements[i].parentNode.removeChild(elements[i]);
                elements = Kameleoon.Utils.querySelectorAll("[id^='kameleoonId'], .kameleoonOverlay");
                for (var i = 0; i < elements.length; ++i) elements[i].removeAttribute("id");
                elements = Kameleoon.Utils.querySelectorAll("[class^='kameleoonClass']");
                for (var i = 0; i < elements.length; ++i) elements[i].removeAttribute("class");
                if (Kameleoon.Internals.runtime.storedData) Kameleoon.Internals.runtime.storedData.save(!0);
                Kameleoon.API.Events.triggered = []
            };
            Runtime.prototype.run = function() {
                var e = this;
                this.running = !0;
                Kameleoon.Utils.removeBlockingStyleSheet();
                this.setupLocalData((function() {
                    if (!e.shouldAbortRuntimeOptout()) {
                        e.simulationMode = Kameleoon.Internals.runtime.readFromStorageOrExternal("kameleoonSimulation", "LS") ? !0 : !1;
                        e.storedData = new StoredData(e.incomingStoredData);
                        Kameleoon.Internals.runtime.Consent.setup();
                        e.initializeActions();
                        Kameleoon.Gatherer.run((function() {
                            e.RequestManager = new RequestManager
                        }));
                        e.initializeActionsAfterGatherer();
                        e.executeGlobalScript();
                        window.kameleoonQueue = new CommandQueue(window.kameleoonQueue);
                        Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "Started", {
                            newVisitorCode: 1 == Kameleoon.Internals.runtime.Visitor.visits.length
                        });
                        e.initializeListeners();
                        e.setup();
                        e.setupAfterLocalDataRetrieval = !0
                    }
                }))
            };
            return Runtime
        }();
        var Utils = function() {
            function Utils() {
                var e = this;
                this.events = [];
                this.addParameterToURL = function(e, t, n) {
                    if (n) return e + (-1 == e.indexOf("#") ? "#" : "&") + t;
                    var a = "";
                    if (-1 != e.indexOf("#")) {
                        a = e.substr(e.indexOf("#"));
                        e = e.substr(0, e.indexOf("#"))
                    }
                    e += (-1 == e.indexOf("?") ? "?" : "&") + t + a;
                    return e
                };
                this.computeCurrentPageAbsoluteURLNoProxyMode = function() {
                    var e = Kameleoon.Internals.runtime;
                    if (null == e.currentPageAbsoluteURLNoProxyMode) {
                        if (e.proxyMode) {
                            var t = e.parameters.kameleoonExperimentId || e.parameters["kameleoon-experiment-id"];
                            if (null != t) {
                                var n = e.experiments.filter((function(e) {
                                    return e.id == t
                                }));
                                if (n) e.currentPageAbsoluteURLNoProxyMode = n[0].baseURL
                            }
                        }
                        if (null == e.currentPageAbsoluteURLNoProxyMode) e.currentPageAbsoluteURLNoProxyMode = window.location.href
                    }
                    return e.currentPageAbsoluteURLNoProxyMode
                };
                this.computeCurrentPageCanonicalURL = function() {
                    if (null == Kameleoon.Internals.runtime.currentPageCanonicalURL) {
                        var t = e.querySelectorAll('link[rel="canonical"]');
                        if (t.length > 0) Kameleoon.Internals.runtime.currentPageCanonicalURL = t[0].href
                    }
                    return Kameleoon.Internals.runtime.currentPageCanonicalURL
                };
                this.computeCurrentPageCleanRelativeURL = function() {
                    if (null == Kameleoon.Internals.runtime.currentPageCleanRelativeURL) Kameleoon.Internals.runtime.currentPageCleanRelativeURL = e.computeRelativeURL(e.computeCurrentPageCleanAbsoluteURL());
                    return Kameleoon.Internals.runtime.currentPageCleanRelativeURL
                };
                this.computeIfSuffix = function(e, t) {
                    var n = e.length - t.length;
                    var a = e.lastIndexOf(t, n);
                    return a >= 0 && a == n
                };
                this.computeRelativeURL = function(e) {
                    var t = document.createElement("a");
                    t.href = e;
                    return t.pathname + t.search + t.hash
                };
                this.computeStringSha256 = function(t) {
                    var n = 1,
                        a, r = [],
                        o = [];
                    while (++n < 18)
                        for (a = n * n; a < 312; a += n) r[a] = 1;

                    function i(e, t) {
                        return Math.pow(e, 1 / t) % 1 * 4294967296 | 0
                    }
                    for (n = 1, a = 0; n < 313;)
                        if (!r[++n]) {
                            o[a] = i(n, 2);
                            r[a++] = i(n, 3)
                        }
                    function l(e, t) {
                        return e >>> t | e << 32 - t
                    }
                    var s = o.slice(n = 0),
                        m = e.encodeUTF8(t),
                        c = [],
                        u = m.length,
                        f = [],
                        d, g, p;
                    for (; n < u;) f[n >> 2] |= (255 & m.charCodeAt(n)) << 8 * (3 - n++ % 4);
                    u *= 8;
                    f[u >> 5] |= 128 << 24 - u % 32;
                    f[p = u + 64 >> 5 | 15] = u;
                    for (n = 0; n < p; n += 16) {
                        d = s.slice(a = 0, 8);
                        for (; a < 64; d[4] += g) {
                            if (a < 16) c[a] = f[a + n];
                            else c[a] = (l(g = c[a - 2], 17) ^ l(g, 19) ^ g >>> 10) + (0 | c[a - 7]) + (l(g = c[a - 15], 7) ^ l(g, 18) ^ g >>> 3) + (0 | c[a - 16]);
                            var h = void 0;
                            d.unshift((g = (d.pop() + (l(h = d[4], 6) ^ l(h, 11) ^ l(h, 25)) + ((h & d[5] ^ ~h & d[6]) + r[a]) | 0) + (0 | c[a++])) + (l(u = d[0], 2) ^ l(u, 13) ^ l(u, 22)) + (u & d[1] ^ d[1] & d[2] ^ d[2] & u))
                        }
                        for (a = 8; a--;) s[a] = d[a] + s[a]
                    }
                    for (m = ""; a < 63;) m += (s[++a >> 3] >> 4 * (7 - a % 8) & 15).toString(16);
                    return m
                };
                this.computeURLNoKameleoonParameters = function(e) {
                    return e.replace(/(\?|&|#)kameleoon[^&#]*/g, "")
                };
                this.computeURLRegExpNoKameleoonParameters = function(e) {
                    return e ? e.replace(/(\\\?|&|#)kameleoon[^&#()]*/g, "") : null
                };
                this.createLocalData = function(t, n, a, r, o, i, l, s) {
                    var m = "LS" == o ? !0 : "COOKIE" == o ? !1 : !0;
                    var c = (new Date).getTime();
                    if (!s && !Kameleoon.Internals.runtime.Consent.hasGlobalConsent()) {
                        var u = m ? "LS" : "COOKIE";
                        if (null == Kameleoon.Internals.runtime.localDataMap) Kameleoon.Internals.runtime.localDataMap = {};
                        if (null == Kameleoon.Internals.runtime.localDataMap[u]) Kameleoon.Internals.runtime.localDataMap[u] = {};
                        Kameleoon.Internals.runtime.localDataMap[u][t] = {
                            name: t,
                            value: n,
                            days: a,
                            domain: r,
                            forceLocalAccess: o,
                            jsonFormat: i,
                            creationTime: c
                        };
                        if (m) l && l();
                        return
                    }
                    if (m) {
                        var f = c + 24 * a * 60 * 60 * 1e3;
                        if (Kameleoon.Internals.runtime.iframeLocalStorage) e.postMessageToExternalIframe(JSON.stringify({
                            type: "set",
                            key: t,
                            data: {
                                value: Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[t] && e.obfuscateString(JSON.stringify(n)) || n,
                                expirationDate: f
                            },
                            callbackId: e.addPostMessageCallback(l)
                        }));
                        else {
                            try {
                                localStorage.setItem(t, JSON.stringify({
                                    value: Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[t] && e.obfuscateString(JSON.stringify(n)) || n,
                                    expirationDate: f
                                }))
                            } catch (e) {}
                            l && l()
                        }
                    } else {
                        var d = "";
                        var g = i ? JSON.stringify(n) : n;
                        if (a) {
                            var f = new Date(c + 24 * a * 60 * 60 * 1e3);
                            d = "; expires=" + f.toUTCString()
                        }
                        if ("CURRENT_HOST" != r) {
                            r = r || e.obtainCurrentRootDomain(t, g);
                            d += "; domain=" + r
                        }
                        var p = Kameleoon.Internals.configuration.useSecureCookie ? "; Secure" : "";
                        document.cookie = t + "=" + g + d + "; path=/; SameSite=Lax" + p
                    }
                };
                this.decodeString = function(t) {
                    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    var a = "";
                    var r, o, i;
                    var l, s, m, c;
                    var u = 0;
                    t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                    while (u < t.length) {
                        l = n.indexOf(t.charAt(u++));
                        s = n.indexOf(t.charAt(u++));
                        m = n.indexOf(t.charAt(u++));
                        c = n.indexOf(t.charAt(u++));
                        r = l << 2 | s >> 4;
                        o = (15 & s) << 4 | m >> 2;
                        i = (3 & m) << 6 | c;
                        a += String.fromCharCode(r);
                        if (64 != m) a += String.fromCharCode(o);
                        if (64 != c) a += String.fromCharCode(i)
                    }
                    a = e.decodeUTF8(a);
                    return a
                };
                this.decodeUTF8 = function(e) {
                    var t = "";
                    var n = 0;
                    var a = 0,
                        r = 0,
                        o;
                    while (n < e.length) {
                        a = e.charCodeAt(n);
                        if (a < 128) {
                            t += String.fromCharCode(a);
                            n++
                        } else if (a > 191 && a < 224) {
                            r = e.charCodeAt(n + 1);
                            t += String.fromCharCode((31 & a) << 6 | 63 & r);
                            n += 2
                        } else {
                            r = e.charCodeAt(n + 1);
                            o = e.charCodeAt(n + 2);
                            t += String.fromCharCode((15 & a) << 12 | (63 & r) << 6 | 63 & o);
                            n += 3
                        }
                    }
                    return t
                };
                this.domReady = function(t) {
                    if ("complete" == document.readyState || "interactive" == document.readyState) return t();
                    else {
                        var n = !1;
                        e.addEventListener(document, "DOMContentLoaded", (function() {
                            if (n) return;
                            n = !0;
                            t()
                        }), !1);
                        e.addEventListener(window, "load", (function() {
                            if (n) return;
                            n = !0;
                            t()
                        }), !1)
                    }
                };
                this.encodeString = function(t) {
                    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    var a = "";
                    var r, o, i, l, s, m, c;
                    var u = 0;
                    t = e.encodeUTF8(t);
                    while (u < t.length) {
                        r = t.charCodeAt(u++);
                        o = t.charCodeAt(u++);
                        i = t.charCodeAt(u++);
                        l = r >> 2;
                        s = (3 & r) << 4 | o >> 4;
                        m = (15 & o) << 2 | i >> 6;
                        c = 63 & i;
                        if (isNaN(o)) m = c = 64;
                        else if (isNaN(i)) c = 64;
                        a = a + n.charAt(l) + n.charAt(s) + n.charAt(m) + n.charAt(c)
                    }
                    return a
                };
                this.encodeUTF8 = function(e) {
                    e = e.replace(/\r\n/g, "\n");
                    var t = "";
                    for (var n = 0; n < e.length; n++) {
                        var a = e.charCodeAt(n);
                        if (a < 128) t += String.fromCharCode(a);
                        else if (a > 127 && a < 2048) {
                            t += String.fromCharCode(a >> 6 | 192);
                            t += String.fromCharCode(63 & a | 128)
                        } else {
                            t += String.fromCharCode(a >> 12 | 224);
                            t += String.fromCharCode(a >> 6 & 63 | 128);
                            t += String.fromCharCode(63 & a | 128)
                        }
                    }
                    return t
                };
                this.eraseLocalData = function(t, n, a) {
                    var r = "LS" == a ? !0 : "COOKIE" == a ? !1 : !0;
                    var o = Kameleoon.Internals.runtime.localDataMap;
                    var i = r ? "LS" : "COOKIE";
                    if (null != o && null != o[i] && null != o[i][t]) delete o[i][t];
                    if (r)
                        if (Kameleoon.Internals.runtime.iframeLocalStorage) e.postMessageToExternalIframe(JSON.stringify({
                            type: "remove",
                            key: t,
                            callbackId: e.addPostMessageCallback(null)
                        }));
                        else localStorage.removeItem(t);
                    else e.createLocalData(t, "", -1, n, "COOKIE", !1, null, !0)
                };
                this.forceNoFlicker = function(e) {
                    var t = document.createElement("style");
                    t.setAttribute("id", "kameleoonPageLoading");
                    t.setAttribute("rel", "stylesheet");
                    t.setAttribute("type", "text/css");
                    t.setAttribute("media", "screen");
                    var n = e + " { visibility: hidden !important; background-image: none !important; }";
                    t.appendChild(document.createTextNode(n));
                    Kameleoon.Internals.runtime.headNode.appendChild(t)
                };
                this.getLocale = function(e) {
                    var t = Kameleoon.Gatherer.Language.obtainLocaleTag();
                    if ("fr-FR" == t) t = "fr";
                    if ("en-US" == t) t = "en";
                    if (e && (!t || "fr" != t)) t = "en";
                    return t.substring(0, 2)
                };
                this.obtainComputedStyle = function(e) {
                    if (window.getComputedStyle) return getComputedStyle(e, "");
                    return null
                };
                this.obtainCurrentRootDomain = function(t, n) {
                    if (null == Kameleoon.Internals.runtime.currentRootDomain) {
                        var a = window.location.hostname.split(".");
                        var r = "";
                        var o = "_testRootDomain";
                        for (var i = 0, l = a.length; i < l; i++) {
                            if (i > 0) r = "." + r;
                            r = a[l - i - 1] + r;
                            if (0 == r.length) continue;
                            n += o;
                            e.createLocalData(t, n, 1, r, "COOKIE", !1, void 0, !0);
                            var s = e.readLocalData(t, "COOKIE", !1);
                            if (s && -1 != s.indexOf(o)) {
                                e.eraseLocalData(t, r, "COOKIE");
                                Kameleoon.Internals.runtime.currentRootDomain = r;
                                break
                            }
                        }
                    }
                    return Kameleoon.Internals.runtime.currentRootDomain
                };
                this.obtainRandomString = function(e, t) {
                    if (void 0 === t) t = Analyst.CODE_ALPHABET;
                    var n = t.length;
                    var a = "";
                    for (var r = 0; r < e; ++r) {
                        var o = Math.floor(Math.random() * n);
                        a += t.substring(o, o + 1)
                    }
                    return a
                };
                this.parseHostName = function(e) {
                    var t = document.createElement("a");
                    t.href = e;
                    return t.hostname
                };
                this.processRedirect = function(e, t) {
                    if (window.location.href != e) {
                        t = t || Kameleoon.Analyst.Actions.currentAction;
                        if (Kameleoon.Internals.runtime.gathererRun && 1 == Kameleoon.Internals.runtime.Visitor.currentVisit.timesStartedPages.length) {
                            if (Kameleoon.Internals.configuration.googleAnalytics) e = Kameleoon.Utils.addParameterToURL(e, "utm_referrer=" + encodeURIComponent(document.referrer), Kameleoon.Internals.configuration.googleAnalyticsAllowAnchor);
                            if (Kameleoon.Internals.configuration.adobeOmniture) e = Kameleoon.Utils.addParameterToURL(e, "sc_referrer=" + encodeURIComponent(document.referrer), !0);
                            if (Kameleoon.Internals.configuration.experiments.concat(Kameleoon.Internals.configuration.personalizations).filter((function(e) {
                                    return e.atInternetTracking
                                })).length > 0) e = Kameleoon.Utils.addParameterToURL(e, "xtref=" + encodeURIComponent(document.referrer), !0);
                            if (Kameleoon.Internals.configuration.experiments.concat(Kameleoon.Internals.configuration.personalizations).filter((function(e) {
                                    return e.webtrekkTracking
                                })).length > 0)
                                if (1 == Kameleoon.Internals.runtime.Visitor.currentVisit.timesStartedPages.length) {
                                    e = Kameleoon.Utils.addParameterToURL(e, "em_src=ref", !0);
                                    var n = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "firstReferrerHref");
                                    if (null != n && 0 == n.length) e = Kameleoon.Utils.addParameterToURL(e, "em_src=direct", !0);
                                    else if (null != n && new RegExp("^https?://[^/]*(google|bing|yahoo|yandex|baidu)\\..*").test(n)) e = Kameleoon.Utils.addParameterToURL(e, "em_src=suma", !0)
                                }
                        }
                        var a = Kameleoon.Internals.runtime.parameters;
                        if (a.kameleoonHeatMap) {
                            e += -1 == e.indexOf("?") ? "?" : "&";
                            e += "kameleoonHeatMap=" + a.kameleoonHeatMap;
                            e += "&kameleoonProgressiveLoading=" + a.kameleoonProgressiveLoading;
                            e += "&kameleoonExperimentId=" + a.kameleoonExperimentId;
                            e += "&kameleoonPageWidth=" + a.kameleoonPageWidth;
                            e += "&kameleoonAccountLocale=" + a.kameleoonAccountLocale;
                            e += "&kameleoonVariationId=" + a.kameleoonVariationId;
                            e += "&kameleoonHeatMapRedirect=true"
                        }
                        var r = document.createElement("a");
                        r.href = e;
                        if (!Kameleoon.Internals.runtime.useWideDomainSupport && -1 == window.location.href.indexOf(r.protocol + "//" + r.hostname)) {
                            if (t) e = Kameleoon.Utils.addParameterToURL(e, "kameleoonRedirect-" + t.id + "=" + t.associatedVariation.id, !0)
                        } else if (t) Kameleoon.Utils.createLocalData("kameleoonRedirect-" + t.id, t.associatedVariation.id, 1, null, null, !1, null, !0);
                        if (window.location.href != e && !a.kameleoonHeatMapRedirect) {
                            Kameleoon.Utils.forceNoFlicker("*");
                            window.location.replace(e)
                        }
                    }
                };
                this.processStorageData = function(e) {
                    if (Kameleoon.Internals.runtime.setupAfterLocalDataRetrieval) switch (e.type) {
                        case "kameleoonExperiment":
                            for (var t = 0, n = Kameleoon.Internals.runtime.experiments.length; t < n; ++t) {
                                var a = Kameleoon.Internals.runtime.experiments[t];
                                if (e.experimentId == a.id) {
                                    a.registeredVariationId = e.registeredVariationId;
                                    break
                                }
                            }
                            break;
                        case "kameleoonGlobalPersonalizationExposition":
                            Kameleoon.Internals.runtime.personalizationsActive = e.active;
                            break;
                        case Kameleoon.Internals.runtime.dataKeyName:
                        case "kameleoonSimulationVisitorData":
                            if ("kameleoonData" == e.type && !Kameleoon.Internals.runtime.simulationMode || "kameleoonSimulationVisitorData" == e.type && Kameleoon.Internals.runtime.simulationMode) {
                                Kameleoon.Internals.runtime.storedData.update(JSON.parse(Kameleoon.Utils.unobfuscateString(e.value)));
                                Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!1, !1, !1)
                            }
                            break;
                        case "kameleoonLegalConsent":
                            if (e.saveLegalConsent) {
                                if (e.saveLegalConsent.AB_TESTING) {
                                    if (1 != Kameleoon.Internals.runtime.Consent.AB_TESTING) Kameleoon.Internals.runtime.Consent.enable("AB_TESTING")
                                } else if (!1 === e.saveLegalConsent.AB_TESTING)
                                    if (0 != Kameleoon.Internals.runtime.Consent.AB_TESTING) Kameleoon.Internals.runtime.Consent.disable("AB_TESTING");
                                if (e.saveLegalConsent.PERSONALIZATION) {
                                    if (1 != Kameleoon.Internals.runtime.Consent.PERSONALIZATION) Kameleoon.Internals.runtime.Consent.enable("PERSONALIZATION")
                                } else if (!1 === e.saveLegalConsent.PERSONALIZATION)
                                    if (0 != Kameleoon.Internals.runtime.Consent.PERSONALIZATION) Kameleoon.Internals.runtime.Consent.disable("PERSONALIZATION")
                            }
                            break
                    }
                };
                this.querySelectorAll = function(t, n) {
                    Kameleoon.Internals.runtime.querySelectorAllHasError = !1;
                    var a = !1,
                        r, o = [],
                        i = [];
                    if (null == n) n = document;
                    var l = t.match(/#([0-9]+.*)(?: |$)/);
                    if (l) {
                        var s = t.charAt(1);
                        t = t.replace("#" + s, "#\\3" + s + " ")
                    }
                    if ("" !== t) {
                        if (-1 !== t.indexOf("[") && -1 === t.indexOf("']") && -1 === t.indexOf('"]')) {
                            var m = t.split(/(?=\.)|(?=#)|(?=\[)/),
                                c, u, f;
                            m.forEach((function(e) {
                                if ("[" === e[0] && -1 === e.indexOf("']") && -1 === t.indexOf('"]') && -1 !== t.indexOf("=")) {
                                    c = e.split(/=(.+)?/);
                                    u = c[1];
                                    u = u.substring(0, u.length - 1);
                                    f = c[0] + "='" + u + "']";
                                    t = t.replace(e, f)
                                }
                            }))
                        }
                        if (-1 !== t.indexOf(":contains")) {
                            a = !0;
                            r = e.treatContainsSelector(t);
                            t = r.newSelector
                        }
                        if (n && n.querySelectorAll)
                            if (-1 !== t.indexOf(":eq")) o = e.treatEqSelector(t, n);
                            else try {
                                o = n.querySelectorAll(t)
                            } catch (e) {
                                Kameleoon.Internals.runtime.querySelectorAllHasError = !0;
                                o = []
                            }
                        for (var d = 0, g = o.length; d < g; ++d)
                            if (a) {
                                if (r.check(r.containText, o[d])) i.push(o[d])
                            } else i.push(o[d])
                    }
                    return i
                };
                this.readLocalData = function(t, n, a) {
                    var r = "LS" == n ? !0 : "COOKIE" == n ? !1 : !0;
                    var o = (new Date).getTime();
                    try {
                        if (!Kameleoon.Internals.runtime.Consent.hasGlobalConsent()) {
                            var i = Kameleoon.Internals.runtime.localDataMap;
                            var l = r ? "LS" : "COOKIE";
                            if (null != i && null != i[l] && null != i[l][t]) {
                                var s = i[l][t];
                                if (o - 24 * s.days * 60 * 60 * 1e3 >= s.creationTime) delete i[l][t];
                                else return s.value
                            }
                        }
                        if (r) {
                            var s = void 0;
                            try {
                                s = localStorage && localStorage.getItem(t);
                                if (!s) return null;
                                if (Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[t]) s = e.unobfuscateString(s);
                                s = JSON.parse(s)
                            } catch (n) {
                                s = localStorage && localStorage.getItem(t);
                                if (!s) return null;
                                s = JSON.parse(s);
                                if (Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[t]) s.value = JSON.parse(e.unobfuscateString(s.value))
                            }
                            if (o > (s.date || s.expirationDate)) {
                                localStorage.removeItem(t);
                                return null
                            }
                            return s.value
                        } else {
                            var m = null;
                            var c = document.cookie.split(";");
                            for (var u = 0, f = c.length; u < f; ++u) {
                                var d = c[u];
                                var g = d.indexOf("=");
                                if (d.substring(0, g).trim() == t) {
                                    var p = d.substring(g + 1);
                                    m = a && JSON.parse(p) || p;
                                    break
                                }
                            }
                            return m
                        }
                    } catch (e) {}
                    return null
                };
                this.runProtectedFunction = function(e, t) {
                    try {
                        e()
                    } catch (e) {
                        if (t) console.log(e);
                        else Kameleoon.Utils.Logger.send(e, "kameleoon.js");
                        if (Kameleoon.Internals.runtime && t) Kameleoon.Internals.runtime.processPageLoaded()
                    }
                };
                this.runProtectedScript = function(e, t) {
                    if (e) {
                        var n = null;
                        try {
                            n = eval.call(window, "(function () {\n" + e + "\n})();" + "//# sourceURL=" + t)
                        } catch (e) {
                            n = null;
                            console.log(e)
                        }
                        return n
                    }
                    return null
                };
                this.seededRandom = function(t, n) {
                    var a;
                    if (n) {
                        a = Kameleoon.Utils.computeStringSha256(t);
                        return parseInt(a, 16) / Math.pow(2, 256)
                    }
                    a = e.computeStringHash(t);
                    a = (9301 * Math.abs(a) + 49297) % 233280;
                    return a / 233280
                };
                this.treatEqSelector = function(e, t) {
                    if (void 0 === e) return null;
                    var n = e.split(/\:eq\([0-9]+\)/g);
                    var a = e.match(/(?!\:eq\()[0-9]+/g) || [];
                    var r = null == t ? document : t;
                    for (var o = 0; o < n.length; ++o) {
                        n[o] = n[o].trim();
                        if (">" === n[o].charAt(0)) n[o] = n[o].substring(1, e.length).trim();
                        if (null == r || "" == n[o].trim()) break;
                        if (o > a.length - 1) r = r.querySelectorAll(n[o]);
                        else r = r.querySelectorAll(n[o])[a[o]]
                    }
                    if (null == r) return [];
                    if (void 0 == r.length) r = [r];
                    var i = Kameleoon.Utils.querySelectorAll(e.replace(/\:eq\([0-9]+\)/g, ""));
                    var l = [];
                    for (var o = 0; o < i.length; ++o)
                        for (var s = 0; s < r.length; ++s)
                            if (i[o] === r[s]) {
                                l.push(r[s]);
                                break
                            } return l
                };
                this.Logger = new Logger;
                this.bowser = window.kbowser || window.bowser
            }
            Utils.prototype.addEventListener = function(e, t, n, a, r) {
                var o;
                if (e == window) o = "window";
                else if (e == document) o = "document";
                else {
                    o = Kameleoon.Utils.obtainRandomString(4);
                    e.setAttribute("kameleoonListener-".concat(o), !0)
                }
                var i = n;
                if (r) e.addEventListener(t, i, a);
                else {
                    i = function(e) {
                        Kameleoon.Utils.runProtectedFunction((function() {
                            n(e)
                        }))
                    };
                    e.addEventListener(t, i, a)
                }
                Kameleoon.Internals.runtime.eventListeners.push({
                    elementKey: o,
                    eventType: t,
                    actionFunction: i,
                    useCapture: a
                })
            };
            Utils.prototype.addPostMessageCallback = function(e) {
                var t = Math.random().toString();
                Kameleoon.Internals.runtime.postMessageCallbacks[t] = e;
                return t
            };
            Utils.prototype.addCSSStyleSheet = function(e, t, n) {
                if (!e) return;
                var a = n ? n : document;
                var r = "kameleoonStyleSheet" + (t ? "-" + t.id : "");
                var o = n ? n.getElementById(r) : null;
                var i = "";
                if (o) {
                    i = o.textContent;
                    o.parentNode.removeChild(o)
                }
                var l = a.createElement("style");
                l.className = "KameleoonStyleSheet";
                l.setAttribute("id", r);
                l.setAttribute("rel", "stylesheet");
                l.setAttribute("type", "text/css");
                l.setAttribute("media", "screen");
                var s = i + e;
                if (l.styleSheet) l.styleSheet.cssText = s;
                else l.appendChild(document.createTextNode(s));
                if (n) a.getElementsByTagName("head")[0].appendChild(l, a.getElementsByTagName("head")[0].firstChild);
                else Kameleoon.Internals.runtime.headNode.appendChild(l);
                if (t) t.loadedCSSStyleSheet = l
            };
            Utils.prototype.applyVariation = function(e) {
                new Variation(e).process()
            };
            Utils.prototype.clearInterval = function(e) {
                delete Kameleoon.Internals.runtime.intervalIds[e];
                window.clearInterval(e)
            };
            Utils.prototype.clearTimeout = function(e) {
                delete Kameleoon.Internals.runtime.timeoutIds[e];
                window.clearTimeout(e)
            };
            Utils.prototype.clone = function(e) {
                return JSON.parse(JSON.stringify(e))
            };
            Utils.prototype.computeCurrentPageCleanAbsoluteURL = function() {
                if (null == Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL) {
                    Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL = this.computeURLNoKameleoonParameters(this.computeCurrentPageAbsoluteURLNoProxyMode());
                    try {
                        Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL = decodeURIComponent(Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL)
                    } catch (e) {}
                }
                return Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL
            };
            Utils.prototype.computeStringHash = function(e, t) {
                e = t ? this.computeStringSha256(e) : e;
                var n = 0;
                for (var a = 0; a < e.length; ++a) {
                    n = (n << 5) - n + e.charCodeAt(a);
                    n &= n
                }
                return n
            };
            Utils.prototype.secureSessionStorage = function(e, t, n) {
                try {
                    return window.sessionStorage[e](t, n)
                } catch (e) {
                    return null
                }
            };
            Utils.prototype.flatten = function() {
                var e = [];
                for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = [];
                for (var a = 0; a < arguments.length; a++)
                    if (arguments[a] instanceof Array) n.push.apply(n, Kameleoon.Utils.flatten.apply(this, arguments[a]));
                    else n.push(arguments[a]);
                return n
            };
            Utils.prototype.isInsideHoursMinutesRange = function(e, t, n, a, r, o) {
                if (0 == a) {
                    n--;
                    if (-1 == n) n = 23;
                    a = 60
                }
                if (n < e || n == e && a < t) {
                    n += 24;
                    if (r < e || r == e && o < t) r += 24
                }
                var i = 60 * (60 * r + o) * 1e3;
                var l = 60 * (60 * e + t) * 1e3;
                var s = 60 * (60 * n + a) * 1e3;
                return i >= l && i < s
            };
            Utils.prototype.obfuscateString = function(e) {
                var t = "";
                for (var n = 0, a = e.length; n < a; n += 1) {
                    var r = e[n];
                    if ("’" == r) r = "'";
                    t += String.fromCharCode(r.charCodeAt(0) + 16)
                }
                return t
            };
            Utils.prototype.parseParameters = function() {
                var e = {};
                var t = window.location.hash.substring(1).replace(/\?/g, "&");
                var n = window.location.search.substring(1);
                if (n || t) {
                    var a = (n ? n.split("&") : []).concat(t ? t.split("&") : []);
                    a.forEach((function(t) {
                        var n = t.split("=");
                        try {
                            e[decodeURIComponent(n[0])] = n[1] ? decodeURIComponent(n[1]) : null
                        } catch (t) {
                            e[unescape(n[0])] = n[1] ? unescape(n[1]) : null
                        }
                    }))
                }
                return e
            };
            Utils.prototype.performBeaconServerCall = function(e, t, n, a) {
                var r = new XMLHttpRequest;
                r.open("GET", e, !0);
                if (t) r.onreadystatechange = function(e) {
                    t.bind(r)(e.target)
                };
                if (n) {
                    r.onerror = function(e) {
                        n.bind(r)(e.target)
                    };
                    r.ontimeout = function(e) {
                        n.bind(r)(e.target)
                    }
                }
                r.timeout = a || 15 * 60 * 1e3;
                r.send()
            };
            Utils.prototype.postMessageToExternalIframe = function(e) {
                if (!Kameleoon.Internals.runtime.externalIframe || !Kameleoon.Internals.runtime.externalIframe.contentWindow) {
                    if (window.kameleoonIframeURL) {
                        var t = document.createElement("iframe");
                        t.src = window.kameleoonIframeURL;
                        t.id = "kameleoonExternalIframe";
                        t.style.cssFloat = "left !important";
                        t.style.height = "0px !important";
                        t.style.opacity = "0.0 !important";
                        t.style.width = "0px !important";
                        t.onload = function() {
                            Kameleoon.Internals.runtime.externalIframe = t;
                            Kameleoon.Internals.runtime.externalIframe.contentWindow.postMessage("kameleoon" + e, "*")
                        };
                        document.head.appendChild(t)
                    }
                } else Kameleoon.Internals.runtime.externalIframe.contentWindow.postMessage("kameleoon" + e, "*")
            };
            Utils.prototype.processMessageEvent = function(event) {
                if ("string" !== typeof event.data) return;
                if ("obtainTagCommanderVariableNames" == event.data) {
                    var tagCommanderVariableNames = [];
                    if (window.tc_vars)
                        for (var tagCommanderVariableName in window.tc_vars) tagCommanderVariableNames.push(tagCommanderVariableName);
                    if (!(event.source instanceof MessagePort) && !(event.source instanceof ServiceWorker)) event.source.postMessage("tagCommanderVariableNames" + JSON.stringify(tagCommanderVariableNames), event.origin);
                    return
                }
                if (0 == event.data.indexOf("checkKameleoonScriptPresent")) {
                    if ("https://back-office." + Kameleoon.Internals.configuration.DOMAIN == event.origin) {
                        var resultMessage = "";
                        var obtainScriptInstallationCode = event.data.replace("checkKameleoonScriptPresent", "");
                        eval(obtainScriptInstallationCode);
                        if (!(event.source instanceof MessagePort) && !(event.source instanceof ServiceWorker)) event.source.postMessage(resultMessage, event.origin)
                    }
                    return
                }
                if (-1 == event.data.indexOf("kameleoonFull")) {
                    if (event.data.indexOf("addKameleoonInterest") >= 0 || event.data.indexOf("finishKameleoonInterestCheck") >= 0) {
                        Kameleoon.Internals.runtime.Gatherer.interestsChecked = !0;
                        var messageData_1 = JSON.parse(event.data);
                        if ("addKameleoonInterest" == messageData_1.command) Kameleoon.Internals.runtime.Gatherer.freshActiveInterestIndexes.push(messageData_1.index);
                        --Kameleoon.Internals.runtime.numberInterestChecks;
                        if (0 == Kameleoon.Internals.runtime.numberInterestChecks) var timeoutId_1 = Kameleoon.Utils.setTimeout((function() {
                            Kameleoon.Utils.clearTimeout(timeoutId_1);
                            var e = document.getElementsByClassName("KameleoonInterestDetection");
                            for (var t = 0, n = e.length; t < n; ++t) {
                                var a = e.item(0);
                                a.parentNode.removeChild(a)
                            }
                            Kameleoon.Gatherer.track(VisitEvent_Interests, {
                                index: messageData_1.index,
                                fresh: !0
                            })
                        }), 300);
                        return
                    }
                    if (event.data.indexOf("imageChecked") >= 0) {
                        var messageData = JSON.parse(event.data);
                        if (null != Kameleoon.Internals.runtime.checkImageCallbacks && null != Kameleoon.Internals.runtime.checkImageCallbacks[messageData.callbackId]) {
                            var callback = Kameleoon.Internals.runtime.checkImageCallbacks[messageData.callbackId];
                            delete Kameleoon.Internals.runtime.checkImageCallbacks[messageData.callbackId];
                            callback && callback(messageData.value);
                            var iframes = document.getElementsByClassName("KameleoonImageDetection");
                            for (var i = 0, l = iframes.length; i < l; ++i) {
                                var iframe = iframes.item(0);
                                iframe.parentNode.removeChild(iframe)
                            }
                        }
                    }
                }
                if (Kameleoon.Internals.runtime.iframeLocalStorage && Kameleoon.Internals.runtime.postMessageOrigin == event.origin) try {
                    var messageData = JSON.parse(event.data);
                    if (messageData.kameleoonMessage) {
                        if (messageData.callbackId) {
                            var callback = Kameleoon.Internals.runtime.postMessageCallbacks[messageData.callbackId];
                            delete Kameleoon.Internals.runtime.postMessageCallbacks[messageData.callbackId];
                            callback && callback(messageData.data)
                        }
                        if (null != messageData.type) Kameleoon.Utils.processStorageData(messageData)
                    }
                } catch (e) {}
            };
            Utils.prototype.removeBlockingStyleSheet = function() {
                var e = document.getElementById("kameleoonPageLoading");
                if (e && e.parentNode) e.parentNode.removeChild(e)
            };
            Utils.prototype.removeCSSStyleSheet = function(e) {
                if (e.loadedCSSStyleSheet) {
                    var t = e.loadedCSSStyleSheet.id.replace("kameleoonStyleSheet-", "");
                    if (-1 == t.indexOf(",")) {
                        Kameleoon.Internals.runtime.headNode.removeChild(e.loadedCSSStyleSheet);
                        e.loadedCSSStyleSheet = null
                    } else e.loadedCSSStyleSheet.id = "kameleoonStyleSheet-" + t.replace(new RegExp(e.id + ",?"), "")
                }
            };
            Utils.prototype.sendKameleoonCustomEvent = function(e, t, n) {
                try {
                    var a = document.createEvent("CustomEvent");
                    t.time = (new Date).getTime();
                    a.initCustomEvent("Kameleoon::" + e, !1, !1, t);
                    window.dispatchEvent(a);
                    if (sessionStorage.getItem("kameleoonLightExtension") || Kameleoon.Internals.runtime.parameters.kameleoonLightExtension) {
                        t.type = n ? n : t.type;
                        window.kameleoonEvents = window.kameleoonEvents || [];
                        window.kameleoonEvents.push(t)
                    }
                } catch (e) {}
            };
            Utils.prototype.setInterval = function(e, t, n, a) {
                var r = window.setInterval((function() {
                    Kameleoon.Utils.runProtectedFunction((function() {
                        e()
                    }), a)
                }), t);
                Kameleoon.Internals.runtime.intervalIds[r] = !0;
                if (n) e();
                return r
            };
            Utils.prototype.setTimeout = function(e, t, n) {
                var a = window.setTimeout((function() {
                    Kameleoon.Utils.runProtectedFunction((function() {
                        e()
                    }), n)
                }), t);
                Kameleoon.Internals.runtime.timeoutIds[a] = !0;
                return a
            };
            Utils.prototype.testEmptyMap = function(e) {
                return 0 == Object.keys(e).length
            };
            Utils.prototype.treatContainsSelector = function(e) {
                var t = {},
                    n;

                function a(e, t) {
                    var n = !1;
                    if (t.textContent && -1 !== t.textContent.indexOf(e)) n = !0;
                    return n
                }
                n = e.match(/:contains\(['"]([\s\S]+)['"]\)/);
                t.containText = n[1];
                t.newSelector = e.replace(n[0], "");
                if ("" === t.newSelector) t.newSelector = "*";
                t.check = a;
                return t
            };
            Utils.prototype.unobfuscateString = function(e) {
                var t = "";
                for (var n = 0, a = e.length; n < a; n += 1) t += String.fromCharCode(e[n].charCodeAt(0) - 16);
                return t
            };
            Utils.LOCAL_STORAGE_OBFUSCATED_KEYS = {
                kameleoonData: !0,
                kameleoonSimulationVisitorData: !0
            };
            Utils.MAX_STORAGE_DAYS = 365;
            return Utils
        }();
        var Browser = function() {
            function r(r) {
                this.browsers = r
            }
            r.prototype.obtain = function() {
                var r = Kameleoon.Internals.runtime.Device.browser;
                if ("Internet Explorer" == r || "Microsoft Edge" == r) r = "Explorer";
                return r
            };
            r.prototype.obtainIndex = function() {
                var r = this.obtain() || "";
                var e = r.toUpperCase();
                for (var t in this.browsers)
                    if (this.browsers[t].name.toUpperCase() == e) return parseInt(t);
                return null
            };
            return r
        }();
        var CustomData = function() {
            function CustomData(customData) {
                var _this = this;
                this.CUSTOM_DATA_CUTOFF = 3 * 1e3;
                this.CUSTOM_DATA_INTERVAL = 3 * 1e3;
                this.CUSTOM_DATA_RETRY_DELAY_BEFORE_CUT_OFF = 100;
                this.MAX_INTERVAL_API_VISIT_REQUEST = 15 * 60 * 1e3;
                this.MAX_NUMBER_REQUESTS_TO_API_VISIT = 3;
                this.inheritVisitorScopeAndTrackVisitorDataFromServer = function() {
                    if (Kameleoon.Internals.runtime.Visitor.visits.length > 1) {
                        var e = Kameleoon.Internals.runtime.Visitor.currentVisit.countByValueByCustomDatum;
                        var t = Kameleoon.Internals.runtime.Visitor.visits[Kameleoon.Internals.runtime.Visitor.visits.length - 2].countByValueByCustomDatum;
                        for (var a in _this.customData) {
                            var n = _this.customData[a].scope;
                            if ("VISITOR" == n && null == e[a]) {
                                var r = t[a];
                                if (null != r) _this.register(parseInt(a), {
                                    value: r,
                                    overwrite: !0
                                }, !0)
                            }
                        }
                        Kameleoon.Internals.runtime.Visitor.saveToStoredData()
                    }
                };
                this.register = function(e, t, a) {
                    var n = _this.customData[e];
                    if (n) {
                        var r = {};
                        var i = t.value;
                        if (null == i) return;
                        var o = t.overwrite;
                        if (a) r = i;
                        else if (i instanceof Array) {
                            for (var s = 0, l = i.length; s < l; ++s)
                                if (null != i[s] && (i[s].toString().length <= VisitEvent_CustomData.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST || n.localOnly)) r[i[s]] = 1
                        } else if (i.toString().length <= VisitEvent_CustomData.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST || n.localOnly) r[i] = 1;
                        var u = "LIST" == n.type || "COUNT_LIST" == n.type ? o : !0;
                        if (u || !Kameleoon.Utils.testEmptyMap(r)) {
                            Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "CustomDataSet", {
                                name: n.name,
                                value: i
                            });
                            Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
                                type: "customData/set",
                                name: n.name,
                                value: i
                            });
                            Kameleoon.Gatherer.track(VisitEvent_CustomData, {
                                index: e,
                                overwrite: u,
                                countByValueToAdd: r,
                                value: i,
                                localOnly: n.localOnly
                            })
                        }
                    }
                };
                this.registerVisitsRequestSuccessAndChangePreviousVisits = function(e) {
                    Kameleoon.Internals.runtime.storedData.saveField("Gatherer", "visitsRequestSuccess", !0);
                    var t = [];
                    for (var a = 0, n = e.length; a < n; ++a) t.push(new Visit(e[a]).convertVisitFromServer());
                    if (t.length > 0) {
                        var r = Kameleoon.Internals.runtime.Visitor;
                        r.addPreviousVisits(t);
                        r.updateAndTrackInfluences();
                        r.saveToStoredData();
                        _this.inheritVisitorScopeAndTrackVisitorDataFromServer()
                    }
                };
                this.run = function() {
                    Kameleoon.Internals.runtime.Visitor.currentVisit.clearCustomDataPage();
                    Kameleoon.Utils.clearInterval(_this.intervalId);
                    if (Kameleoon.Internals.runtime.Gatherer.startOfVisit) _this.inheritVisitorScopeAndTrackVisitorDataFromServer();
                    _this.firstTimeCheck = (new Date).getTime();
                    _this.intervalId = Kameleoon.Utils.setInterval(_this.obtain.bind(_this), _this.CUSTOM_DATA_RETRY_DELAY_BEFORE_CUT_OFF, !0);
                    Kameleoon.Utils.setTimeout((function() {
                        Kameleoon.Utils.clearInterval(_this.intervalId)
                    }), _this.CUSTOM_DATA_CUTOFF);
                    Kameleoon.Utils.setInterval(_this.obtain.bind(_this), _this.CUSTOM_DATA_INTERVAL, !1)
                };
                this.customData = customData;
                Kameleoon.Internals.runtime.enableHistoryReconciliation = !1;
                for (var key in customData)
                    if (customData[key].mappingIdentifier) {
                        Kameleoon.Internals.runtime.enableHistoryReconciliation = !0;
                        break
                    }
            }
            CustomData.prototype.obtain = function() {
                for (var e in this.customData)
                    if (!this.customData[e].treated) {
                        var t = parseInt(e);
                        var a = this.obtainValueMap(t, this.customData[e]);
                        if (a) this.register(t, a)
                    }
            };
            CustomData.prototype.obtainValueFromPath = function(e, t) {
                return e.match(/[^'\]\[\.\"]+/gi).reduce((function(e, t) {
                    return e && e[t]
                }), t)
            };
            CustomData.prototype.obtainValueMap = function(e, t) {
                var a = null;
                if (null != t && !t.disabled) switch (t.method.toUpperCase()) {
                    case "GTM":
                        if (window.dataLayer && t.variableName)
                            for (var n = 0, r = window.dataLayer.length; n < r; ++n) {
                                var i = this.obtainValueFromPath(t.variableName, window.dataLayer[n]);
                                if (null != i) {
                                    a = {
                                        value: i,
                                        overwrite: !1
                                    };
                                    break
                                }
                            }
                        break;
                    case "TC":
                        if (window.tc_vars && t.variableName) {
                            var i = this.obtainValueFromPath(t.variableName, window.tc_vars);
                            if ("string" == typeof i && 0 == i.length) i = null;
                            if (null != i) {
                                a = {
                                    value: i,
                                    overwrite: !1
                                };
                                break
                            }
                        }
                        break;
                    case "TEALIUM":
                        if (window.utag_data && t.variableName) {
                            var i = this.obtainValueFromPath(t.variableName, window.utag_data);
                            if ("string" == typeof i && 0 == i.length) i = null;
                            if (null != i) {
                                a = {
                                    value: i,
                                    overwrite: !1
                                };
                                break
                            }
                        }
                        break;
                    case "CUSTOM_CODE":
                        a = Kameleoon.Utils.runProtectedScript(t.customEvalCode, "kameleoonCustomDataScript-" + e + ".js");
                        break;
                    default:
                        break
                }
                if (null != a) {
                    t.treated = !0;
                    var o = Kameleoon.Internals.runtime.Visitor.currentVisit.countByValueByCustomDatum[e];
                    var s = a.value;
                    if (null != s) {
                        var l = t.type;
                        if ("LIST" == l || "COUNT_LIST" == l || null == o || Object.keys(o)[0] != s || Kameleoon.Internals.runtime.enableHistoryReconciliation && t.mappingIdentifier && null == Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "visitsRequestSuccess")) return a
                    }
                }
                return null
            };
            CustomData.prototype.remoteSynchronisation = function(e, t, a) {};
            return CustomData
        }();
        var KeyPage = function() {
            function e(e) {
                this.keyPages = e
            }
            e.prototype.obtainIndexes = function() {
                var e = [];
                for (var t in this.keyPages) {
                    var n = new RegExp(this.keyPages[t].relativeURLRegExp);
                    if (n.test(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()) || n.test(Kameleoon.Utils.computeCurrentPageCleanRelativeURL())) e.push(parseInt(t))
                }
                if (0 == e.length) e.push(null);
                return e
            };
            return e
        }();
        var KeyWord = function() {
            function r(r) {
                this.keyWords = r
            }
            r.prototype.obtainIndexes = function(r) {
                var e = [];
                for (var t in this.keyWords)
                    if (new RegExp(this.keyWords[t].wordRegExp, "i").test(r)) e.push(parseInt(t));
                return e
            };
            return r
        }();
        var Language = function() {
            function a() {
                this.DEFAULT_LOCALE_LANGUAGE_TAG = "en"
            }
            a.prototype.obtainLocaleTag = function() {
                var a = null;
                if (navigator && navigator.language) a = navigator.language;
                return a ? a : this.DEFAULT_LOCALE_LANGUAGE_TAG
            };
            return a
        }();
        var OperatingSystem = function() {
            function e(e) {
                this.oss = e
            }
            e.prototype.obtainIndex = function() {
                var e = this.obtain() || "";
                var n = e.toUpperCase();
                for (var t in this.oss)
                    if (this.oss[t].name.toUpperCase() == n) return parseInt(t);
                return null
            };
            e.prototype.obtain = function() {
                var e = Kameleoon.Utils.bowser.parse(navigator.userAgent);
                switch (e.os.name) {
                    case "Windows Phone":
                    case "iOS":
                    case "Android":
                    case "Linux":
                    case "Windows":
                        return e.os.name;
                    case "macOS":
                        return "Tablet" == Kameleoon.Internals.runtime.Device.type ? "iOS" : "Mac";
                    default:
                        return null
                }
            };
            return e
        }();
        var Referrer = function() {
            function Referrer(e) {
                this.referrers = e
            }
            Referrer.prototype.obtainCorrected = function(e) {
                switch (this.obtainType(e)) {
                    case 0:
                    case 1:
                    case 2:
                        return null;
                    default:
                        return this.obtain()
                }
            };
            Referrer.prototype.obtain = function() {
                return document.referrer
            };
            Referrer.prototype.obtainDetectionMatches = function(e) {
                var r = this.obtainDetectionPartMatches(e.method, e.parameters);
                if (e.and) r = r && this.obtainDetectionPartMatches(e.andMethod, e.andParameters);
                return r
            };
            Referrer.prototype.obtainDetectionPartMatches = function(method, parameters) {
                switch (method.toUpperCase()) {
                    case "REFERRER_REGEX":
                        return new RegExp(parameters).test(this.obtain());
                    case "URL_REGEX":
                        var regExp = new RegExp(parameters);
                        return regExp.test(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()) || regExp.test(Kameleoon.Utils.computeCurrentPageCleanRelativeURL());
                    default:
                        try {
                            return !0 === eval(parameters)
                        } catch (e) {
                            return !1
                        }
                }
            };
            Referrer.prototype.obtainIndexes = function(e) {
                switch (this.obtainType(e)) {
                    case 0:
                    case 2:
                        return [null];
                    case 1:
                        return [0];
                    default:
                        var r = [];
                        var t = Number.NEGATIVE_INFINITY;
                        for (var n in Kameleoon.Internals.runtime.Gatherer.configuration.referrers) {
                            var a = Kameleoon.Internals.runtime.Gatherer.configuration.referrers[n];
                            if (this.obtainMatches(a)) {
                                var o = a.priority;
                                if (null == o) o = Number.NEGATIVE_INFINITY;
                                if (o >= t) {
                                    if (o > t) {
                                        r = [];
                                        t = o
                                    }
                                    r.push(parseInt(n) + 1)
                                }
                            }
                        }
                        if (0 == r.length) r.push(null);
                        return r
                }
            };
            Referrer.prototype.obtainIsIgnored = function(e) {
                var r = this.obtain();
                if (Kameleoon.Internals.runtime.Gatherer.configuration.directNoneReferrerOnlyFirst)
                    if ("" == r && !e) return !0;
                var t = window.location.pathname;
                var n = Kameleoon.Internals.runtime.Gatherer.configuration.noReferrerPages.length;
                for (var a = 0; a < n; a++)
                    if (t == Kameleoon.Internals.runtime.Gatherer.configuration.noReferrerPages[a]) return !0;
                return !1
            };
            Referrer.prototype.obtainMatches = function(e) {
                var r = e.detections;
                for (var t = 0; t < r.length; t++)
                    if (this.obtainDetectionMatches(r[t])) return !0;
                return !1
            };
            Referrer.prototype.obtainType = function(e) {
                if (this.obtainIsIgnored(e)) return 0;
                var r = -1;
                var t = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "startsOfVisitForCurrentPage");
                if (t > 1) return 1;
                if (r >= 0) return 2;
                return 3
            };
            return Referrer
        }();
        var StoredData = function() {
            function a(a) {
                var e = this;
                this.Gatherer = {};
                this.Runtime = {};
                this.Vars = Kameleoon.Utils.readLocalData("kameleoonVars", "LS") || {};
                this.Visitor = {};
                this.canSave = !1;
                if (a) {
                    var t = "";
                    if (a[Kameleoon.Internals.runtime.dataKeyName]) {
                        t = a[Kameleoon.Internals.runtime.dataKeyName];
                        if (a.Kameleoon) Kameleoon.Utils.eraseLocalData("kameleoonData", null, "LS")
                    } else if (a.kameleoonData) t = a.kameleoonData;
                    if (Kameleoon.Internals.runtime.simulationMode)
                        if (a.kameleoonDataSimulation || a.kameleoonSimulationVisitorData) t = a.kameleoonDataSimulation || a.kameleoonSimulationVisitorData;
                    var i = Kameleoon.Utils.unobfuscateString(t);
                    var o = i && JSON.parse(i) || {};
                    this.Gatherer = o.Gatherer || {};
                    this.Runtime = o.Runtime || {};
                    this.Vars = o.Vars || a.kameleoonVars || {};
                    this.Visitor = o.Visitor || {}
                } else {
                    var n = Kameleoon.Utils.readLocalData("kameleoonData", "LS");
                    if (Kameleoon.Internals.configuration.useMultipleSiteCodes) {
                        var l = Kameleoon.Utils.readLocalData(Kameleoon.Internals.runtime.dataKeyName, "LS", !0);
                        if (l) n = l;
                        Kameleoon.Utils.eraseLocalData("kameleoonData", null, "LS")
                    }
                    if (Kameleoon.Internals.runtime.simulationMode)
                        if (Kameleoon.Utils.readLocalData("kameleoonDataSimulation", "LS", !0) || Kameleoon.Utils.readLocalData("kameleoonSimulationVisitorData", "LS", !0)) n = Kameleoon.Utils.readLocalData("kameleoonDataSimulation", "LS", !0) || Kameleoon.Utils.readLocalData("kameleoonSimulationVisitorData", "LS", !0);
                    if (n) {
                        this.Gatherer = n.Gatherer;
                        this.Runtime = n.Runtime || {};
                        this.Vars = n.Vars || this.Vars;
                        this.Visitor = n.Visitor
                    }
                }
                Kameleoon.Utils.eraseLocalData("kameleoonVars", null, "LS");
                for (var s in this.Vars)
                    if (Kameleoon.Internals.runtime.pageStartTime > this.Vars[s].date) delete this.Vars[s];
                Kameleoon.Utils.setInterval((function() {
                    if (e.canSave) {
                        e.save(!0);
                        e.canSave = !1
                    }
                }), 1e3);
                Kameleoon.Utils.addEventListener(window, "beforeunload", (function() {
                    if (window.self !== window.top) {
                        var a = Kameleoon.Utils.readLocalData(Kameleoon.Internals.runtime.simulationMode ? "kameleoonSimulationVisitorData" : Kameleoon.Internals.runtime.dataKeyName, "LS");
                        if (a && a.Visitor && e.Visitor && e.Visitor.totalVisits < a.Visitor.totalVisits) e.update(a)
                    }
                    e.save(!0)
                }))
            }
            a.prototype.obtainField = function(a, e, t) {
                return this[a][e] || t || null
            };
            a.prototype.resetForStartOfVisit = function() {
                this.Runtime = {}
            };
            a.prototype.saveField = function(a, e, t) {
                this[a][e] = t;
                this.save(!1)
            };
            a.prototype.save = function(a) {
                if (a) Kameleoon.Utils.createLocalData(Kameleoon.Internals.runtime.simulationMode ? "kameleoonSimulationVisitorData" : Kameleoon.Internals.runtime.dataKeyName, this, Kameleoon.Internals.runtime.simulationMode ? 1 / 24 : Utils.MAX_STORAGE_DAYS, null, "LS", !0);
                else this.canSave = !0
            };
            a.prototype.update = function(a) {
                this.Gatherer = a.Gatherer || this.Gatherer;
                this.Runtime = a.Runtime || this.Runtime;
                this.Vars = a.Vars || this.Vars;
                this.Visitor = a.Visitor || this.Visitor
            };
            return a
        }();
        var TimeZone = function() {
            function t() {}
            t.prototype.obtainId = function() {
                var t;
                try {
                    t = "undefined" != typeof Intl && Intl.DateTimeFormat().resolvedOptions ? Intl.DateTimeFormat().resolvedOptions().timeZone : null
                } catch (n) {
                    t = null
                }
                return t
            };
            return t
        }();
        var VisitEvent = function() {
            function e(e) {
                this.eventType = e.type;
                this.visitEvent = e
            }
            e.prototype.track = function(e) {
                var t = this;
                var n = function() {
                    var n = new t.visitEvent(e);
                    Kameleoon.Internals.runtime.Visitor.saveToStoredData();
                    if ((!e || !e.notTrack && !n.notTrack) && Kameleoon.Internals.configuration.track) Kameleoon.Internals.runtime.RequestManager.addRequest(n);
                    Kameleoon.Internals.runtime.storedData.save(t.visitEvent.urgent)
                };
                if (!Kameleoon.Internals.runtime.Visitor.currentVisit.isVisitFinished()) n();
                else if (this.eventType == VisitEvent_Activity.type && Kameleoon.Internals.runtime.Gatherer.active || this.eventType == VisitEvent_Search.type) {
                    Kameleoon.Internals.runtime.Visitor = new Visitor;
                    Kameleoon.Gatherer.track(VisitEvent_Page);
                    Kameleoon.Gatherer.track(VisitEvent_StaticData);
                    Kameleoon.Internals.runtime.Visitor.updateAndTrackInfluences();
                    Kameleoon.Gatherer.CustomData.run();
                    Kameleoon.Internals.runtime.gathererRun = !0;
                    n()
                }
            };
            return e
        }();
        var VisitEvent_Main = function() {
            function t(t) {
                var n = this;
                this.HEXADECIMAL_ALPHABET = "0123456789ABCDEF";
                this.NONCE_LENGTH = 16;
                this.obtainRequestData = function() {
                    return n.toString() + "&nonce=" + n.nonce
                };
                this.addValueParameter = function(t) {
                    if ("object" == typeof t) return encodeURIComponent(JSON.stringify(t));
                    else if ("string" == typeof t) return encodeURIComponent(t);
                    return t
                };
                this.time = (new Date).getTime();
                this.nonce = Kameleoon.Utils.obtainRandomString(this.NONCE_LENGTH, this.HEXADECIMAL_ALPHABET)
            }
            return t
        }();
        var __extends = this && this.__extends || function() {
            var e = function(t, n) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n]
                };
                return e(t, n)
            };
            return function(t, n) {
                if ("function" !== typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        var VisitEvent_Activity = function(e) {
            __extends(t, e);

            function t() {
                var n = e.call(this) || this;
                n.eventType = t.type;
                n.toString = function() {
                    return "eventType=ACTIVITY&numberClicks=".concat(n.numberClicks)
                };
                n.numberClicks = Kameleoon.Internals.runtime.Gatherer.numberClicks;
                Kameleoon.Internals.runtime.Visitor.currentVisit.addActivity(n.time, Kameleoon.Internals.runtime.Gatherer.active);
                Kameleoon.Internals.runtime.Visitor.currentVisit.addNumberClicks(n.numberClicks);
                Kameleoon.Internals.runtime.Gatherer.active = !1;
                Kameleoon.Internals.runtime.Gatherer.numberClicks = 0;
                return n
            }
            t.initialize = function() {
                var e = this;
                var t = function() {
                    Kameleoon.Internals.runtime.Gatherer.active = !0
                };
                var n = function() {
                    t();
                    Kameleoon.Internals.runtime.Gatherer.numberClicks++
                };
                Kameleoon.Utils.addEventListener(document, "mousemove", t, !1);
                Kameleoon.Utils.addEventListener(document, "scroll", t, !1);
                Kameleoon.Utils.addEventListener(document, "click", n, !1);
                Kameleoon.Utils.setInterval((function() {
                    if (Kameleoon.Internals.runtime.Gatherer.active) Kameleoon.Gatherer.track(e)
                }), this.ACTIVITY_TRACKING_INTERVAL, !0)
            };
            t.ACTIVITY_TRACKING_INTERVAL = 15 * 1e3;
            t.type = "activity";
            t.urgent = !1;
            return t
        }(VisitEvent_Main);
        var __extends = this && this.__extends || function() {
            var t = function(n, e) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, n) {
                    t.__proto__ = n
                } || function(t, n) {
                    for (var e in n)
                        if (Object.prototype.hasOwnProperty.call(n, e)) t[e] = n[e]
                };
                return t(n, e)
            };
            return function(n, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                t(n, e);

                function r() {
                    this.constructor = n
                }
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
        }();
        var VisitEvent_AdBlocker = function(t) {
            __extends(n, t);

            function n() {
                var e = t.call(this) || this;
                e.eventType = n.type;
                e.toString = function() {
                    return "eventType=ADBLOCKER"
                };
                Kameleoon.Internals.runtime.Visitor.currentVisit.addAdBlocker();
                return e
            }
            n.type = "adBlocker";
            n.urgent = !1;
            return n
        }(VisitEvent_Main);
        var __extends = this && this.__extends || function() {
            var t = function(n, i) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, n) {
                    t.__proto__ = n
                } || function(t, n) {
                    for (var i in n)
                        if (Object.prototype.hasOwnProperty.call(n, i)) t[i] = n[i]
                };
                return t(n, i)
            };
            return function(n, i) {
                if ("function" !== typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
                t(n, i);

                function e() {
                    this.constructor = n
                }
                n.prototype = null === i ? Object.create(i) : (e.prototype = i.prototype, new e)
            }
        }();
        var VisitEvent_Actions = function(t) {
            __extends(n, t);

            function n(i) {
                var e = t.call(this) || this;
                e.eventType = n.type;
                e.toString = function() {
                    var t = "eventType=".concat(e.type, "&id=").concat(e.id, "&variationId=").concat(e.variationId, "&mentalistDecision=").concat(e.mentalistDecision);
                    if ("EXPERIMENT" == e.type) t += "&train=".concat(e.train);
                    else if (0 == e.variationId && e.unexpositionCause) t += "&unexpositionCause=".concat(e.unexpositionCause);
                    return t
                };
                e.id = i.id;
                e.mentalistDecision = !0 === i.mentalistDecision;
                e.train = !0 === i.train;
                e.type = i.type;
                e.variationId = i.variationId;
                e.notTrack = i.notTrack;
                if (i.unexpositionCause) e.unexpositionCause = i.unexpositionCause;
                if ("EXPERIMENT" == e.type && null == e.variationId) e.notTrack = !0;
                var o = "EXPERIMENT" == e.type ? "addExperiment" : "addPersonalization";
                Kameleoon.Internals.runtime.Visitor.currentVisit[o](e.time, e.id, i.originalVariationId, e.mentalistDecision);
                return e
            }
            n.type = "containers";
            n.urgent = !0;
            return n
        }(VisitEvent_Main);
        var __extends = this && this.__extends || function() {
            var e = function(n, t) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, n) {
                    e.__proto__ = n
                } || function(e, n) {
                    for (var t in n)
                        if (Object.prototype.hasOwnProperty.call(n, t)) e[t] = n[t]
                };
                return e(n, t)
            };
            return function(n, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
                e(n, t);

                function o() {
                    this.constructor = n
                }
                n.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }
        }();
        var VisitEvent_Conversions = function(e) {
            __extends(n, e);

            function n(t) {
                var o = e.call(this) || this;
                o.eventType = n.type;
                o.toString = function() {
                    return "eventType=CONVERSION&goalId=".concat(o.goalId, "&negative=").concat(o.negative, "&revenue=").concat(o.revenue)
                };
                o.goalId = t.goalId;
                o.negative = !0 === t.negative;
                var r, a = !1;
                var i = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "revenuesByGoalId", {});
                var l = i[o.goalId];
                if (o.negative)
                    if (l && l.length > 0) {
                        r = l.splice(-1)[0];
                        if (0 == l.length) delete i[o.goalId]
                    } else a = !0;
                else {
                    r = t.revenue;
                    if (isNaN(r)) r = 0;
                    if (!l) l = [];
                    l.push(r);
                    i[o.goalId] = l.splice(-10)
                }
                o.revenue = r;
                if (!a) {
                    Kameleoon.Internals.runtime.storedData.saveField("Gatherer", "revenuesByGoalId", i);
                    Kameleoon.Internals.runtime.Visitor.currentVisit.addConversions(o.goalId, 1, o.revenue, o.negative);
                    if (null != window.Kameleoon.API.conversionCallbacks)
                        for (var s = 0, c = window.Kameleoon.API.conversionCallbacks.length; s < c; ++s) try {
                            window.Kameleoon.API.conversionCallbacks[s](o.time, o.goalId, o.revenue, o.negative)
                        } catch (e) {}
                }
                return o
            }
            n.type = "conversions";
            n.urgent = !0;
            return n
        }(VisitEvent_Main);
        var __extends = this && this.__extends || function() {
            var t = function(n, e) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, n) {
                    t.__proto__ = n
                } || function(t, n) {
                    for (var e in n)
                        if (Object.prototype.hasOwnProperty.call(n, e)) t[e] = n[e]
                };
                return t(n, e)
            };
            return function(n, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                t(n, e);

                function o() {
                    this.constructor = n
                }
                n.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }
        }();
        var VisitEvent_CustomData = function(t) {
            __extends(n, t);

            function n(e) {
                var o = t.call(this) || this;
                o.eventType = n.type;
                o.toString = function() {
                    var t = function() {
                        if (null == o.valueToCount.length) {
                            var t = [];
                            for (var n in o.valueToCount) t.push([n, o.valueToCount[n]]);
                            return t
                        }
                        return o.valueToCount
                    };
                    return "eventType=CUSTOMDATA&index=".concat(o.index, "&overwrite=").concat(o.overwrite, "&valueToCount=").concat(o.addValueParameter(t()))
                };
                o.index = e.index;
                o.overwrite = e.overwrite || !1;
                o.notTrack = e.value.length > n.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST || e.localOnly;
                o.valueToCount = e.countByValueToAdd;
                Kameleoon.Internals.runtime.Visitor.currentVisit.addCustomData(o.index, o.valueToCount, o.overwrite);
                return o
            }
            n.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST = 1e3;
            n.type = "customData";
            n.urgent = !0;
            return n
        }(VisitEvent_Main);
        var __extends = this && this.__extends || function() {
            var e = function(t, r) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t)
                        if (Object.prototype.hasOwnProperty.call(t, r)) e[r] = t[r]
                };
                return e(t, r)
            };
            return function(t, r) {
                if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(t, r);

                function n() {
                    this.constructor = t
                }
                t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }();
        var VisitEvent_Page = function(e) {
            __extends(t, e);

            function t() {
                var r = e.call(this) || this;
                r.eventType = t.type;
                r.toString = function() {
                    return "eventType=PAGE&href=".concat(r.addValueParameter(r.href)) + "&title=".concat(r.addValueParameter(r.title), "&keyPages=").concat(r.addValueParameter(r.keyPages)) + "&referrers=".concat(r.addValueParameter(r.referrers))
                };
                var n = Kameleoon.Utils.computeCurrentPageCanonicalURL() || Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL();
                var a = document.title;
                r.href = n && n.slice(0, Kameleoon.Gatherer.MAX_HREF_LENGTH_IN_A_REQUEST);
                if (r.href && Kameleoon.Internals.configuration.cleanHrefTracking) r.href = r.href.replace(/(\?|\#)(.*)/gi, "");
                r.title = a.slice(0, Kameleoon.Gatherer.MAX_PAGE_TITLE_LENGTH_IN_A_REQUEST);
                r.keyPages = Kameleoon.Gatherer.KeyPage.obtainIndexes();
                r.referrers = Kameleoon.Gatherer.Referrer.obtainIndexes(Kameleoon.Internals.runtime.Gatherer.startOfVisit);
                Kameleoon.Internals.runtime.Visitor.currentVisit.addPage(r.time, n, r.keyPages, r.referrers);
                Kameleoon.Internals.runtime.Visitor.currentVisit.addActivity(r.time, !0);
                return r
            }
            t.type = "page";
            t.urgent = !0;
            return t
        }(VisitEvent_Main);
        var __extends = this && this.__extends || function() {
            var t = function(n, e) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, n) {
                    t.__proto__ = n
                } || function(t, n) {
                    for (var e in n)
                        if (Object.prototype.hasOwnProperty.call(n, e)) t[e] = n[e]
                };
                return t(n, e)
            };
            return function(n, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                t(n, e);

                function r() {
                    this.constructor = n
                }
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
        }();
        var VisitEvent_Product = function(t) {
            __extends(n, t);

            function n(e) {
                var r = t.call(this) || this;
                r.eventType = n.type;
                r.toString = function() {
                    return "eventType=PRODUCT&ean=".concat(r.addValueParameter(r.ean))
                };
                r.ean = e.ean;
                Kameleoon.Internals.runtime.Visitor.currentVisit.addProduct(r.ean);
                return r
            }
            n.type = "product";
            n.urgent = !1;
            return n
        }(VisitEvent_Main);
        var __extends = this && this.__extends || function() {
            var e = function(t, n) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t)
                        if (Object.prototype.hasOwnProperty.call(t, n)) e[n] = t[n]
                };
                return e(t, n)
            };
            return function(t, n) {
                if ("function" !== typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                e(t, n);

                function r() {
                    this.constructor = t
                }
                t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        var VisitEvent_Search = function(e) {
            __extends(t, e);

            function t(n) {
                var r = e.call(this) || this;
                r.eventType = t.type;
                r.toString = function() {
                    return "eventType=SEARCH&keyWords=".concat(r.addValueParameter(r.keyWords), "&numberResults=").concat(r.numberResults, "&followed=").concat(r.followed)
                };
                r.followed = n.followed;
                r.keyWords = n.keyWords;
                r.numberResults = n.numberResults;
                Kameleoon.Internals.runtime.Visitor.currentVisit.addSearch(r.time, Kameleoon.Gatherer.KeyWord.obtainIndexes(r.keyWords), r.numberResults, r.followed);
                return r
            }
            t.type = "search";
            t.urgent = !1;
            return t
        }(VisitEvent_Main);
        var __extends = this && this.__extends || function() {
            var e = function(n, r) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, n) {
                    e.__proto__ = n
                } || function(e, n) {
                    for (var r in n)
                        if (Object.prototype.hasOwnProperty.call(n, r)) e[r] = n[r]
                };
                return e(n, r)
            };
            return function(n, r) {
                if ("function" !== typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
                e(n, r);

                function t() {
                    this.constructor = n
                }
                n.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t)
            }
        }();
        var VisitEvent_StaticData = function(e) {
            __extends(n, e);

            function n() {
                var r = e.call(this) || this;
                r.eventType = n.type;
                r.toString = function() {
                    var e = "eventType=STATICDATA";
                    e += "&visitNumber=".concat(r.visitNumber);
                    e += "&timeSincePreviousVisit=".concat(r.timeSincePreviousVisit);
                    e += "&landingPageHref=".concat(r.addValueParameter(r.landingPageHref));
                    e += "&landingPageTitle=".concat(r.addValueParameter(r.landingPageTitle));
                    e += "&landingPages=".concat(r.addValueParameter(r.landingPages));
                    e += "&firstReferrerHref=".concat(r.addValueParameter(r.firstReferrerHref));
                    e += "&firstReferrers=".concat(r.addValueParameter(r.firstReferrers));
                    e += "&browser=".concat(r.browser);
                    e += "&browserVersion=".concat(r.browserVersion);
                    e += "&mobileBrowser=".concat(r.mobileBrowser);
                    e += "&os=".concat(r.os);
                    e += "&windowWidth=".concat(r.windowWidth);
                    e += "&windowHeight=".concat(r.windowHeight);
                    e += "&screenWidth=".concat(r.screenWidth);
                    e += "&screenHeight=".concat(r.screenHeight);
                    e += "&timeZoneId=".concat(r.timeZoneId);
                    e += "&localeLanguageTag=".concat(r.localeLanguageTag);
                    e += "&deviceType=".concat(r.deviceType);
                    e += "&browserName=".concat(r.browserName);
                    e += "&osName=".concat(r.osName);
                    e += "&mappingIdentifier=".concat(r.mappingIdentifier);
                    if (r.experimentInfluences) e += "&experimentInfluences=".concat(r.addValueParameter(r.experimentInfluences));
                    if (r.personalizationInfluences) e += "&personalizationInfluences=".concat(r.addValueParameter(r.personalizationInfluences));
                    return e
                };
                var t = Kameleoon.Internals.runtime.Visitor.currentVisit.landingPageURL;
                var a = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "landingPageTitle");
                var i = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "landingPages");
                var o = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "firstReferrerHref");
                var s = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "firstReferrers");
                if (Kameleoon.Internals.runtime.enableHistoryReconciliation) {
                    var l = null;
                    for (var c in Kameleoon.Internals.runtime.Gatherer.configuration.customData)
                        if (Kameleoon.Internals.runtime.Gatherer.configuration.customData[c].mappingIdentifier) {
                            l = parseInt(c);
                            break
                        } r.mappingIdentifier = null != l && l
                }
                r.timeSincePreviousVisit = Kameleoon.Internals.runtime.Visitor.obtainTimeSincePreviousVisit();
                r.landingPageHref = t && t.slice(0, Kameleoon.Gatherer.MAX_HREF_LENGTH_IN_A_REQUEST);
                r.landingPageTitle = a && a.slice(0, Kameleoon.Gatherer.MAX_PAGE_TITLE_LENGTH_IN_A_REQUEST);
                r.landingPages = i;
                r.firstReferrerHref = o && o.slice(0, Kameleoon.Gatherer.MAX_HREF_LENGTH_IN_A_REQUEST);
                if (Kameleoon.Internals.configuration.cleanHrefTracking) {
                    if (r.landingPageHref) r.landingPageHref = r.landingPageHref.replace(/(\?|\#)(.*)/gi, "");
                    if (r.firstReferrerHref) r.firstReferrerHref = r.firstReferrerHref.replace(/(\?|\#)(.*)/gi, "")
                }
                r.firstReferrers = s;
                r.language = null;
                r.browser = Kameleoon.Gatherer.Browser.obtainIndex();
                r.browserVersion = Kameleoon.Internals.runtime.Device.browserVersion;
                var m = Kameleoon.Internals.runtime.Device.type;
                r.mobileBrowser = "Tablet" == m || "Phone" == m;
                r.os = Kameleoon.Gatherer.OperatingSystem.obtainIndex();
                r.windowWidth = Kameleoon.Internals.runtime.Device.windowWidth;
                r.windowHeight = Kameleoon.Internals.runtime.Device.windowHeight;
                r.screenWidth = Kameleoon.Internals.runtime.Device.screenWidth;
                r.screenHeight = Kameleoon.Internals.runtime.Device.screenHeight;
                r.javaEnabled = !0 === navigator.javaEnabled();
                r.timeZoneId = Kameleoon.Gatherer.TimeZone.obtainId();
                r.localeLanguageTag = Kameleoon.Gatherer.Language.obtainLocaleTag();
                r.deviceType = Kameleoon.Internals.runtime.Device.type.toLocaleUpperCase();
                r.browserName = Kameleoon.Gatherer.Browser.obtain();
                r.osName = Kameleoon.Gatherer.OperatingSystem.obtain();
                r.timeZoneGroups = [null];
                r.visitNumber = Kameleoon.Internals.runtime.Visitor.currentVisit.index;
                if (Kameleoon.Internals.runtime.Gatherer.startOfVisit && Kameleoon.Internals.runtime.Visitor.visits.length > 1) {
                    r.experimentInfluences = Kameleoon.Internals.runtime.Visitor.currentVisit.experimentInfluences;
                    r.personalizationInfluences = Kameleoon.Internals.runtime.Visitor.currentVisit.personalizationInfluences
                }
                return r
            }
            n.type = "staticData";
            n.urgent = !0;
            return n
        }(VisitEvent_Main);
        var __extends = this && this.__extends || function() {
            var t = function(n, e) {
                t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, n) {
                    t.__proto__ = n
                } || function(t, n) {
                    for (var e in n)
                        if (Object.prototype.hasOwnProperty.call(n, e)) t[e] = n[e]
                };
                return t(n, e)
            };
            return function(n, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                t(n, e);

                function r() {
                    this.constructor = n
                }
                n.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
            }
        }();
        var VisitEvent_TargetingSegments = function(t) {
            __extends(n, t);

            function n(e) {
                var r = t.call(this) || this;
                r.eventType = n.type;
                r.toString = function() {
                    return "eventType=TARGETINGSEGMENT&id=".concat(r.id)
                };
                r.id = e.id;
                Kameleoon.Internals.runtime.Visitor.currentVisit.addTargetingSegment(r.time, r.id);
                return r
            }
            n.type = "targetingSegments";
            n.urgent = !1;
            return n
        }(VisitEvent_Main);
        var CommandQueue = function() {
            function CommandQueue(oldKameleoonQueue) {
                var _this = this;
                this.executeCommand = function(command) {
                    var commandFunctionName = command[0];
                    try {
                        if ("function" === typeof command) command();
                        else {
                            var method = commandFunctionName;
                            var path = method.split(".");
                            var bindedObject;
                            if ("Kameleoon" != path[0]) {
                                method = "Kameleoon.API." + commandFunctionName;
                                bindedObject = eval("Kameleoon.API." + path[0])
                            } else bindedObject = eval("Kameleoon.API." + path[2]);
                            eval(method).apply(bindedObject, Array.prototype.slice.call(command, 1))
                        }
                    } catch (e) {
                        console.log(e)
                    }
                };
                this.commands = oldKameleoonQueue && oldKameleoonQueue.forEach ? oldKameleoonQueue : [];
                this.commands.push = function(e) {
                    _this.executeCommand(e)
                };
                var commandsToRun = [];
                this.commands.forEach((function(e) {
                    commandsToRun.push(e)
                }));
                this.commands.splice(0, this.commands.length);
                commandsToRun.forEach(this.executeCommand);
                return this.commands
            }
            return CommandQueue
        }();
        var Actions = function() {
            function e() {
                this.associateActionAndVariation = function(e, n, i) {
                    var o = !0;
                    var t = !0;
                    if ("REGISTERED_VARIATION" == i) t = !1;
                    if ("DISPLAYED_VARIATION" == i) o = !1;
                    if (null === n) e.trackingPerformed = !0;
                    var a = Kameleoon.Internals.runtime.variations.filter((function(e) {
                        return e.id == n
                    }))[0];
                    var r = "Reference";
                    if (e && e.variations) e.variations.forEach((function(e, i) {
                        if (e.id && e.name && e.id == n) r = e.name
                    }));
                    var s = e.associatedVariation;
                    if (e && s && n == s.id) r = s.name;
                    if (e && o) e.associatedVariation = {
                        id: n,
                        name: r
                    };
                    if (e && t && !e.displayedVariation) e.associationMade = !1;
                    if (a) {
                        if (e && (Kameleoon.Internals.runtime.simulationMode && -1 == e.id || !e.associationMade)) {
                            if (o) {
                                e.associatedVariation = a;
                                e.associationMade = !0
                            }
                            a.actionId = e.id;
                            if (t) e.displayedVariation = new Variation(a)
                        }
                    } else e.displayedVariation = {
                        id: n,
                        name: r
                    }
                }
            }
            e.prototype.checkCapping = function(e, n, i, o, t) {
                if (null != o.expositionFrequencySameVisit && Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n, i, null, t, !0, !1, !1, e) >= o.expositionFrequencySameVisit || null != o.expositionFrequencySameVisitor && null != o.expositionFrequencySameVisitorDelaySeconds && Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n, i, t - 1e3 * o.expositionFrequencySameVisitorDelaySeconds, t, !0, !0, !1, e) >= o.expositionFrequencySameVisitor || o.cappingPerVisitorNumberExpositions && Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n, i, null, t, !0, !0, !1, e) >= o.expositionFrequencySameVisitorMax || o.cappingPerVisitorNumberExposedVisits && Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n, i, null, null, !0, !0, !0, e) >= o.exposedVisitsSameVisitorMax || o.cappingPerVisitorConvertGoal && Kameleoon.Internals.runtime.Visitor.obtainNumberConversions(o.cappingPerVisitorGoalId) > 0 || null != o.expositionFrequencyDelaySecondsBetweenTwoExpositions && Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n, i, t - 1e3 * o.expositionFrequencyDelaySecondsBetweenTwoExpositions, t, !0, !0, !1, e) >= 1) return !1;
                return !0
            };
            e.prototype.checkActionConsent = function(e) {
                if (e.experimentAction) {
                    if (!Kameleoon.Internals.runtime.Consent.AB_TESTING) {
                        if (null == Kameleoon.Internals.runtime.Consent.AB_TESTING) {
                            if ("ALL" == Kameleoon.Internals.configuration.beforeAbtestConsent) return !0;
                            if ("PARTIALLY" == Kameleoon.Internals.configuration.beforeAbtestConsent && e.technical) return !0
                        } else if (e.technical && "RUN" == Kameleoon.Internals.configuration.abtestConsentOptout) return !0;
                        return !1
                    }
                } else if (!Kameleoon.Internals.runtime.Consent.PERSONALIZATION) {
                    if (null == Kameleoon.Internals.runtime.Consent.PERSONALIZATION) {
                        if ("ALL" == Kameleoon.Internals.configuration.beforePersonalizationConsent) return !0;
                        if ("PARTIALLY" == Kameleoon.Internals.configuration.beforePersonalizationConsent && e.technical) return !0
                    } else if (e.technical && "RUN" == Kameleoon.Internals.configuration.personalizationConsentOptout) return !0;
                    return !1
                }
                return !0
            };
            e.prototype.checkActionsTargeting = function(e) {
                var n = this;
                for (var i = 0, o = Kameleoon.Internals.runtime.personalizations.length; i < o; ++i) {
                    var t = Kameleoon.Internals.runtime.personalizations[i];
                    t.previousExposition = t.exposition
                }
                var a = [];
                for (var i = 0, o = e.length; i < o; ++i) {
                    var r = e[i];
                    if (!this.checkActionConsent(r) || r.blocked) continue;
                    if (null == r.numberTargetingCheckings) r.numberTargetingCheckings = 0;
                    if (Kameleoon.Targeting.checkIfTargetingMustBeComputed(r.targeting, r.rescheduleTargeting || 0 == r.numberTargetingCheckings, !r.experimentAction && "CUMULATIVE_WEIGHT" == r.checkConditionsRule)) a.push(r)
                }
                e = a;
                for (var i = 0, o = e.length; i < o; ++i) {
                    var r = e[i];
                    if (!0 === r.forceTargeting) r.targeting = !0;
                    else {
                        var s = !r.experimentAction && "CUMULATIVE_WEIGHT" == r.personalizationCheckConditionsRule;
                        var l = Kameleoon.Targeting.checkTree(r, r.targetingSegment ? r.targetingSegment.tree : null, s);
                        if (s) switch (r.microtargetingMatchType) {
                            case "GREATER":
                                r.targeting = l.weight > (r.cumulativeWeightOfConditions || 0);
                                break;
                            case "EQUAL":
                                r.targeting = l.weight == (r.cumulativeWeightOfConditions || 0);
                                break;
                            case "LOWER":
                                r.targeting = l.weight < r.cumulativeWeightOfConditions;
                                break
                        } else r.targeting = l.targeting;
                        r.rescheduleTargeting = l.rescheduleTargeting;
                        r.numberTargetingCheckings++
                    }
                }
                var c = [];
                for (var i = 0, o = e.length; i < o; ++i) {
                    var r = e[i];
                    if (!r.experimentAction)
                        if (!0 === r.targeting) c.push(r);
                        else r.exposition = !1
                }
                var m = function(e) {
                    var n = [];
                    for (var i = 0, o = Kameleoon.Internals.runtime.personalizations.length; i < o; ++i) {
                        var t = Kameleoon.Internals.runtime.personalizations[i];
                        if (e != t.id) n.push(t)
                    }
                    return n
                };
                var u = new Date;
                var g = u.getTime();
                for (var i = 0, o = c.length; i < o; ++i) {
                    var t = c[i];
                    if (void 0 !== t.forceExposition) {
                        t.exposition = t.forceExposition;
                        if (!1 === t.exposition) t.notExposedReason = "SIMULATION"
                    } else {
                        t.exposition = !0;
                        if (!0 === t.exposition && (!Kameleoon.Internals.runtime.simulationMode || null != Kameleoon.Internals.runtime.simulationModeData && null != Kameleoon.Internals.runtime.simulationModeData.experiments) && !Kameleoon.Internals.runtime.personalizationsActive) {
                            t.exposition = !1;
                            t.notExposedReason = "GLOBAL_EXCLUSION"
                        }
                        if (!0 === t.exposition && t.globalCappingNumberVisitors && t.numberVisitorsExposed >= t.maxNumberVisitorsExposed) {
                            t.exposition = !1;
                            t.notExposedReason = "PERSONALIZATION_CAPPING"
                        }
                        var p = t.scheduleItem;
                        if (!0 === t.exposition && null != p && 0 < p.length) {
                            t.exposition = !1;
                            for (var d = 0, f = p.length; d < f; ++d) {
                                var I = p[d];
                                if ((null == I.dateStart || g >= I.dateStart) && (null == I.dateEnd || g < I.dateEnd)) {
                                    var A = I.scheduleItemOptions;
                                    if (null == A || 0 == A.length) t.exposition = !0;
                                    else
                                        for (var v = 0, T = A.length; v < T; ++v) {
                                            var h = A[v];
                                            if (Kameleoon.Utils.isInsideHoursMinutesRange(h.hoursStart, h.minutesStart, h.hoursEnd, h.minutesEnd, u.getHours(), u.getMinutes())) {
                                                var E = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
                                                switch (h.daysOfWeekForShow) {
                                                    case "EVERYDAY":
                                                        t.exposition = !0;
                                                        break;
                                                    case "WEEK_END":
                                                        if (0 == u.getDay() || 6 == u.getDay()) t.exposition = !0;
                                                        break;
                                                    case "WEEK":
                                                        if (0 != u.getDay() && 6 != u.getDay()) t.exposition = !0;
                                                        break;
                                                    default:
                                                        if (h.daysOfWeekForShow == E[u.getDay()]) t.exposition = !0;
                                                        break
                                                }
                                            }
                                            if (!0 === t.exposition) break
                                        }
                                }
                                if (!0 === t.exposition) break
                            }
                            if (!1 === t.exposition) t.notExposedReason = "SCHEDULE"
                        }
                        if (!0 === t.exposition && !Kameleoon.Internals.runtime.simulationMode) {
                            switch (t.customExpositionRate) {
                                case 1:
                                    break;
                                case 0:
                                    t.exposition = !1;
                                    break;
                                default:
                                    var k = Kameleoon.Internals.runtime.incomingStoredData && Kameleoon.Internals.runtime.incomingStoredData["kameleoonPersonalization-" + t.id] || Kameleoon.Utils.readLocalData("kameleoonPersonalization-" + t.id, "LS", !1);
                                    if (null == k) k = Kameleoon.Internals.runtime.incomingStoredData && Kameleoon.Internals.runtime.incomingStoredData["kameleoonPersonalizationTargeted-" + t.id] || Kameleoon.Utils.readLocalData("kameleoonPersonalizationTargeted-" + t.id, "LS", !1);
                                    if (null != k) {
                                        var x = k.split("/");
                                        t.exposition = "true" == x[0]
                                    } else {
                                        t.exposition = Kameleoon.Utils.seededRandom(t.id + Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode, !0) < t.customExpositionRate;
                                        Kameleoon.Utils.createLocalData("kameleoonPersonalization-" + t.id, t.exposition + "/" + (new Date).getTime(), -1 == t.id ? 1 / 24 : 30, null, "LS", !1)
                                    }
                                    break
                            }
                            if (!1 === t.exposition) t.notExposedReason = "PERSONALIZATION_EXCLUSION"
                        }
                        if (!0 === t.exposition && !this.checkCapping(!1, t.id, 1, t, g)) {
                            t.exposition = !1;
                            t.notExposedReason = "VISITOR_CAPPING"
                        }
                        var K = t.personalizationsInteractionConditions;
                        if (!0 === t.exposition && null != K && 0 < K.length)
                            for (var d = 0, f = K.length; d < f; ++d) {
                                var S = K[d];
                                if ("SAME_PAGE" != S.personalizationsInteractionVisitsConfiguration && !Kameleoon.Internals.runtime.gathererRun) continue;
                                var b = void 0;
                                var R = void 0;
                                var C = void 0;
                                switch (S.personalizationsInteractionConfiguration) {
                                    case "NO_OTHER_PERSO":
                                        b = m(t.id);
                                        R = 0;
                                        C = 0;
                                        break;
                                    case "AT_LEAST_ONE_OTHER_PERSO":
                                        b = m(t.id);
                                        R = 1;
                                        C = b.length;
                                        break;
                                    case "NUMBER_OF_OTHER_PERSOS":
                                        b = m(t.id);
                                        switch (S.personalizationsInteractionNumberOtherPersosMatchType) {
                                            case "GREATER":
                                                R = S.personalizationsInteractionNumberOtherPersos + 1;
                                                C = b.length;
                                                break;
                                            case "LOWER":
                                                R = 0;
                                                C = S.personalizationsInteractionNumberOtherPersos - 1;
                                                break;
                                            case "GREATER_THAN_EQUAL":
                                                R = S.personalizationsInteractionNumberOtherPersos;
                                                C = b.length;
                                                break;
                                            case "LOWER_THAN_EQUAL":
                                                R = 0;
                                                C = S.personalizationsInteractionNumberOtherPersos;
                                                break;
                                            case "EQUAL":
                                            default:
                                                R = S.personalizationsInteractionNumberOtherPersos;
                                                C = S.personalizationsInteractionNumberOtherPersos;
                                                break
                                        }
                                        break;
                                    case "ALL_OTHER_PERSOS":
                                        b = m(t.id);
                                        R = b.length;
                                        C = b.length;
                                        break;
                                    case "ID_PERSO":
                                        b = [];
                                        for (var v = 0, T = Kameleoon.Internals.runtime.personalizations.length; v < T; ++v) {
                                            var P = Kameleoon.Internals.runtime.personalizations[v];
                                            if (P.id == S.personalizationsInteractionIdPerso) {
                                                b.push(P);
                                                break
                                            }
                                        }
                                        if (0 == b.length) b.push({
                                            id: S.personalizationsInteractionIdPerso,
                                            previousExposition: !1
                                        });
                                        R = 1;
                                        C = 1;
                                        break;
                                    default:
                                        b = [];
                                        R = 1;
                                        C = 1;
                                        break
                                }
                                var V = 0;
                                for (var v = 0, T = b.length; v < T; ++v) {
                                    var O = b[v];
                                    var y = void 0;
                                    switch (S.personalizationsInteractionVisitsConfiguration) {
                                        case "SAME_PAGE":
                                            y = !0 === O.previousExposition;
                                            break;
                                        case "CURRENT_VISIT":
                                            y = Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(O.id, 1, null, null, !0, !1, !1, !1) > 0;
                                            break;
                                        case "PREVIOUS_VISIT":
                                            y = Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(O.id, 1, null, null, !1, !0, !1, !1) > 0;
                                            break;
                                        case "ALL_VISITS":
                                            y = Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(O.id, 1, null, null, !0, !0, !1, !1) > 0;
                                            break;
                                        default:
                                            y = !1;
                                            break
                                    }
                                    if (!S.personalizationsInteractionDisplayOthersPersos) y = !y;
                                    if (y) V++
                                }
                                var N = V >= R && V <= C;
                                if (N && !S.personalizationsInteractionDisplayPerso || !N && S.personalizationsInteractionDisplayPerso) {
                                    t.exposition = !1;
                                    t.notExposedReason = "SCENARIO";
                                    break
                                }
                            }
                    }
                }
                var D = {};
                if (Kameleoon.Internals.runtime.personalizations) Kameleoon.Internals.runtime.personalizations.forEach((function(e) {
                    if (e.exposition) {
                        var n = e.configuration;
                        var i = D[n];
                        var o = e.priority;
                        if (null == i || o > i) D[n] = o
                    }
                }));
                var L = {};
                for (var i = 0, o = e.length; i < o; ++i) {
                    var r = e[i];
                    if (!r.experimentAction && !0 === r.exposition) {
                        var z = r.configuration;
                        var w = D[z];
                        var M = r.priority;
                        if (null == w || M >= w) {
                            if (null == L[z] || M > w) L[z] = [];
                            L[z].push(r.id)
                        }
                    }
                }
                D = null;
                if (Kameleoon.Internals.configuration.disablePersonalizationsOfTheSameType)
                    for (var z in L) L[z] = [L[z][Math.floor(Math.random() * L[z].length)]];
                for (var i = 0, o = c.length; i < o; ++i) {
                    var t = c[i];
                    if (!0 === t.exposition && !0 !== t.forceExposition)
                        if (L[t.configuration] && -1 == L[t.configuration].indexOf(t.id)) {
                            t.exposition = !1;
                            t.notExposedReason = "PRIORITY"
                        }
                }
                L = null;
                var U = [];
                for (var i = 0, o = e.length; i < o; ++i) {
                    var r = e[i];
                    if (!1 === r.targeting || !r.experimentAction && !0 === r.targeting && !1 === r.exposition) {
                        this.associateActionAndVariation(r, 0, "DISPLAYED_VARIATION");
                        Kameleoon.Utils.removeCSSStyleSheet(r)
                    }
                    if (Kameleoon.Targeting.checkIfTargetingMustBeComputed(r.targeting, r.rescheduleTargeting, !r.experimentAction && "CUMULATIVE_WEIGHT" == r.personalizationCheckConditionsRule)) U.push(r)
                }
                if (U.length > 0) var _ = Kameleoon.Utils.setTimeout((function() {
                    Kameleoon.Utils.clearTimeout(_);
                    n.process(U)
                }), Kameleoon.Internals.runtime.PAGE_LOADING_POLL_DELAY);
                if (e.length > 0 && Kameleoon.Internals.runtime.targetingsEvent) Kameleoon.Internals.runtime.targetingsEvent.emit(e)
            };
            e.prototype.performActionsTracking = function(e) {
                var n = [];
                for (var i = 0, o = e.length; i < o; ++i) {
                    var t = e[i];
                    if (t.trackingPerformed || !t.associatedVariation || null == t.associatedVariation.id) continue;
                    n.push(t)
                }
                e = n;
                for (var i = 0, o = e.length; i < o; ++i) {
                    var t = e[i];
                    var a = t.collectingDataDisabled ? !1 : !0;
                    if (!t.experimentAction)
                        if ("PERSONALIZATION_CAPPING" == t.notExposedReason || "SCHEDULE" == t.notExposedReason || "SCENARIO" == t.notExposedReason || "PRIORITY" == t.notExposedReason || "VISITOR_CAPPING" == t.notExposedReason) a = !1;
                    var r = t.associatedVariation;
                    if (t.mentalistEnabled) r.name += " (Predicteo)";
                    if (Kameleoon.Internals.configuration.checkTestedTrafficActive && !t.counterActive && t.experimentAction) {
                        t.counterActive = !0;
                        Kameleoon.Internals.runtime.RequestManager.sendCounter("anniversaryDay=" + Kameleoon.Internals.configuration.anniversaryDay);
                        t.writeLocalData()
                    }
                    Kameleoon.Gatherer.track(VisitEvent_Actions, {
                        type: t.experimentAction ? "EXPERIMENT" : "PERSONALIZATION",
                        id: t.id,
                        variationId: 0 == r.id ? 0 : t.experimentAction ? r.id : 1,
                        mentalistDecision: t.mentalistEnabled ? !0 : !1,
                        train: t.train ? !0 : !1,
                        notTrack: !(t.kameleoonTracking && a),
                        originalVariationId: r.id,
                        unexpositionCause: !t.experimentAction ? t.notExposedReason : null
                    });
                    if (a && (t.experimentAction || t.exposition || !t.exposition && "PERSONALIZATION_EXCLUSION" == t.notExposedReason)) {
                        if (t.googleAnalytics4Tracking) Kameleoon.Tracking.processGoogleAnalytics4(t);
                        if (t.universalAnalyticsTracking) Kameleoon.Tracking.processUniversalAnalytics(t);
                        if (t.segmentTracking) Kameleoon.Tracking.processSegment(t);
                        if (t.customIntegrations) Kameleoon.Tracking.processCustomIntegration(t)
                    }
                    t.trackingPerformed = !0
                }
            };
            e.prototype.process = function(e, n) {
                var i = (new Date).getTime();
                this.checkActionsTargeting(e);
                var o = [];
                for (var t = 0, a = e.length; t < a; ++t) {
                    var r = e[t];
                    if (r.treated || r.blocked) continue;
                    if (!0 === r.targeting) {
                        Kameleoon.Internals.runtime.Visitor.currentVisit.addActionTriggered(r.id, r.experimentAction);
                        Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "SegmentTriggered", {
                            segment: {
                                id: r.targetingSegmentId,
                                name: r.targetingSegment ? r.targetingSegment.name : null
                            }
                        });
                        if (r.experimentAction) {
                            var s = new APIAction(r, "experiments");
                            Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "ExperimentTriggered", {
                                experiment: s
                            }, "experiment/triggered");
                            r.performVariationAssignment(!1);
                            if (null != r.associatedVariation)
                                if (!this.checkCapping(!0, r.id, r.associatedVariation.id, r.associatedVariation, i)) r.targeting = !1
                        } else {
                            var s = new APIAction(r, "personalizations");
                            Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "PersonalizationTriggered", {
                                personalization: s
                            }, "personalization/triggered");
                            this.associateActionAndVariation(r, r.exposition ? r.associatedVariation.id : 0, "BOTH")
                        }
                    }
                    if (!0 === r.targeting) {
                        r.treated = !0;
                        this.currentAction = r;
                        if (r.displayedVariation) {
                            if (r.experimentAction)
                                if (0 != r.displayedVariation.id && "reference" != r.displayedVariation.id || r.executeCodeForReference) {
                                    if (r.cssCode && !r.cssCodeEvaluated) {
                                        r.cssCodeEvaluated = !0;
                                        Kameleoon.Utils.addCSSStyleSheet(r.cssCode, r, null)
                                    }
                                    if (r.javaScriptCode && !r.javaScriptCodeEvaluated) {
                                        r.javaScriptCodeEvaluated = !0;
                                        Kameleoon.Utils.runProtectedScript(r.javaScriptCode, "kameleoonActionJavaScriptCode-" + r.id + ".js")
                                    }
                                } if (!n && r.displayedVariation.process) r.displayedVariation.process();
                            if (r.targeting && (r.experimentAction || r.exposition)) {
                                var l = {};
                                if (r.experimentAction) l.experiment = new APIAction(r, "experiments");
                                else l.personalization = new APIAction(r, "personalizations");
                                Kameleoon.Utils.sendKameleoonCustomEvent.call(window, r.experimentAction ? "ExperimentActivated" : "PersonalizationActivated", l, "action/activated")
                            }
                            o.push(r)
                        }
                    }
                }
                this.performActionsTracking(o)
            };
            e.prototype.processAllActions = function() {
                var e = [];
                e = e.concat(Kameleoon.Internals.runtime.experiments);
                e = e.concat(Kameleoon.Internals.runtime.personalizations);
                this.process(e);
                Kameleoon.Internals.runtime.experiments.forEach((function(e) {
                    e.handleSpecialCase()
                }));
                if (!this.actionsProcessed) {
                    Kameleoon.Internals.runtime.RequestManager.processRequests();
                    this.actionsProcessed = !0
                }
            };
            return e
        }();
        var Consent = function() {
            function n() {
                var n = this;
                this.disable = function(e) {
                    Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
                        type: "consent/disable",
                        consentType: e
                    });
                    if (e && "BOTH" != e) n[e] = !1;
                    else {
                        n.AB_TESTING = !1;
                        n.PERSONALIZATION = !1
                    }
                    n.write();
                    Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "LegalConsentUpdated", {
                        legalConsentUpdate: n.getConsent()
                    })
                };
                this.enable = function(e) {
                    Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
                        type: "consent/enable",
                        consentType: e
                    });
                    if (e && "BOTH" != e) n[e] = !0;
                    else {
                        n.AB_TESTING = !0;
                        n.PERSONALIZATION = !0
                    }
                    if (Kameleoon.Internals.runtime && Kameleoon.Internals.runtime.RequestManager) {
                        if (Kameleoon.Internals.configuration.requestsAfterConsent) Kameleoon.Internals.runtime.loadExternalRequests();
                        n.purge()
                    }
                    n.write();
                    Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "LegalConsentUpdated", {
                        legalConsentUpdate: n.getConsent()
                    })
                };
                this.getConfiguredConsent = function() {
                    return {
                        AB_TESTING: Kameleoon.Internals.configuration.abtestConsent,
                        PERSONALIZATION: Kameleoon.Internals.configuration.personalizationConsent
                    }
                };
                this.getConsent = function() {
                    return {
                        AB_TESTING: n.AB_TESTING,
                        PERSONALIZATION: n.PERSONALIZATION
                    }
                };
                this.hasGlobalConsent = function() {
                    return n.AB_TESTING || n.PERSONALIZATION || Kameleoon.Internals.runtime && Kameleoon.Internals.runtime.kameleoonFull
                };
                this.initialize = function(e) {
                    Kameleoon.Utils.sendKameleoonCustomEvent("Internals", {
                        type: "consent/initialize",
                        consent: e
                    });
                    n.AB_TESTING = e.AB_TESTING;
                    n.PERSONALIZATION = e.PERSONALIZATION;
                    n.initializeInteractive();
                    n.initializeIAB()
                };
                this.initializeInteractive = function() {
                    if ("INTERACTIVE" == Kameleoon.Internals.configuration.abtestConsent && null == n.AB_TESTING || "INTERACTIVE" == Kameleoon.Internals.configuration.personalizationConsent && null == n.PERSONALIZATION) {
                        var e = function() {
                            document.removeEventListener(Kameleoon.Internals.runtime.mouseDownEvent, e, !1);
                            window.removeEventListener("scroll", e, !1);
                            var t;
                            if ("INTERACTIVE" == Kameleoon.Internals.configuration.abtestConsent && null == n.AB_TESTING) t = "AB_TESTING";
                            if ("INTERACTIVE" == Kameleoon.Internals.configuration.personalizationConsent && null == n.PERSONALIZATION)
                                if ("AB_TESTING" == t) t = "BOTH";
                                else t = "PERSONALIZATION";
                            if (t) Kameleoon.Internals.runtime.Consent.enable(t)
                        };
                        Kameleoon.Utils.addEventListener(document, Kameleoon.Internals.runtime.mouseDownEvent, e, !1);
                        Kameleoon.Utils.addEventListener(window, "scroll", e, !1)
                    }
                };
                this.initializeIAB = function() {
                    if ("IABTCF" == Kameleoon.Internals.configuration.abtestConsent) Kameleoon.API.Core.runWhenConditionTrue((function() {
                        return "undefined" != typeof window.__tcfapi
                    }), (function() {
                        window.__tcfapi("addEventListener", 2, (function(e, t) {
                            if (t && ("useractioncomplete" === e.eventStatus || "tcloaded" === e.eventStatus))
                                if (e) {
                                    var o = e.vendor.consents[820];
                                    if (o) {
                                        var a = e.purpose.consents;
                                        if (a[1] && a[10])
                                            if (a[3] && a[5] && a[6] && a[8]) n.enable("BOTH");
                                            else {
                                                n.enable("AB_TESTING");
                                                n.disable("PERSONALIZATION")
                                            }
                                        else n.disable("BOTH")
                                    } else n.disable("BOTH")
                                }
                        }), [820])
                    }), 200)
                };
                this.purge = function() {
                    if (Kameleoon.Internals.runtime) {
                        Kameleoon.Internals.runtime.RequestManager.processRequests();
                        var n = function(n) {
                            if (null != n)
                                for (var e in n) Kameleoon.Utils.createLocalData(n[e].name, n[e].value, n[e].days, n[e].domain, n[e].forceLocalAccess, n[e].jsonFormat, null, !0)
                        };
                        n(Kameleoon.Internals.runtime.localDataMap && Kameleoon.Internals.runtime.localDataMap["LS"]);
                        n(Kameleoon.Internals.runtime.localDataMap && Kameleoon.Internals.runtime.localDataMap["COOKIE"]);
                        Kameleoon.Internals.runtime.localDataMap = null;
                        Kameleoon.Analyst.Actions.processAllActions();
                    }
                };
                this.setup = function() {
                    var e = {
                        AB_TESTING: !1,
                        PERSONALIZATION: !1
                    };
                    var t = Kameleoon.Internals.runtime.readFromStorageOrExternal("kameleoonLegalConsent", "LS");
                    if (null == t) t = Kameleoon.Internals.runtime.readFromStorageOrExternal("kameleoonLocalDataConsent", "LS");
                    if (null != t)
                        if (1 == t) e = {
                            AB_TESTING: !0,
                            PERSONALIZATION: !0
                        };
                        else e = t;
                    else {
                        e = {
                            AB_TESTING: "OFF" == Kameleoon.Internals.configuration.abtestConsent ? !0 : null,
                            PERSONALIZATION: "OFF" == Kameleoon.Internals.configuration.personalizationConsent ? !0 : null
                        };
                        if (!Kameleoon.Internals.configuration.abtestingSetup) e.AB_TESTING = null;
                        if (!Kameleoon.Internals.configuration.personalizationSetup) e.PERSONALIZATION = null
                    }
                    if (Kameleoon.Internals.runtime.kameleoonFull) {
                        e.AB_TESTING = !0;
                        e.PERSONALIZATION = !0
                    }
                    n.initialize(e)
                };
                this.write = function() {
                    Kameleoon.Utils.createLocalData("kameleoonLegalConsent", n.getConsent(), Utils.MAX_STORAGE_DAYS, null, "LS", !0, null, !0)
                };
                this.AB_TESTING = !1;
                this.PERSONALIZATION = !1
            }
            return n
        }();
        var Device = function() {
            function e() {
                var e = Kameleoon.Utils.bowser.parse(navigator.userAgent);
                var t = e.browser.version;
                try {
                    if (t.split(".").length > 1) t = t.split(".")[0] + "." + t.split(".")[1]
                } catch (e) {
                    console.log(e)
                }
                this.browser = "" == e.browser.name ? null : e.browser.name;
                this.browserVersion = t ? parseFloat(t) : null;
                this.type = "tablet" == e.platform.type ? "Tablet" : "mobile" == e.platform.type ? "Phone" : "Desktop";
                if ("Safari" == this.browser && "Desktop" == this.type && "ontouchend" in document.documentElement) this.type = "Tablet"
            }
            Object.defineProperty(e.prototype, "adBlocker", {
                get: function() {
                    return Kameleoon.Internals.runtime.adBlocker
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(e.prototype, "os", {
                get: function() {
                    var t = Kameleoon.Gatherer.OperatingSystem.obtainIndex();
                    if (null != t) return e.OSS[Kameleoon.Internals.runtime.Gatherer.configuration.oss[t].name];
                    else return "Other"
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(e.prototype, "screenHeight", {
                get: function() {
                    return window.screen.height
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(e.prototype, "screenWidth", {
                get: function() {
                    return window.screen.width
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(e.prototype, "timeZone", {
                get: function() {
                    return Kameleoon.Gatherer.TimeZone.obtainId()
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(e.prototype, "windowHeight", {
                get: function() {
                    return window.innerHeight
                },
                enumerable: !1,
                configurable: !0
            });
            Object.defineProperty(e.prototype, "windowWidth", {
                get: function() {
                    return window.innerWidth
                },
                enumerable: !1,
                configurable: !0
            });
            e.OSS = {
                CHROME: "Chrome OS",
                MAC: "Mac",
                IOS: "iOS",
                LINUX: "Linux",
                ANDROID: "Android",
                "WINDOWS PHONE": "Windows Phone"
            };
            return e
        }();
        var Experiment = function() {
            function Experiment(experiment, incomingStoredData) {
                var _this = this;
                this.handleSpecialCase = function() {
                    if (!0 !== _this.targeting && _this.redirectProcessed) {
                        _this.performVariationAssignment(!0);
                        Kameleoon.Analyst.Actions.performActionsTracking([_this])
                    } else if (_this.preAssignVariation) _this.performVariationAssignment(!0)
                };
                this.obtainVariationAssignmentRandomNumber = function() {
                    var i = null;
                    if (Kameleoon.Internals.runtime.gathererRun)
                        for (var e in Kameleoon.Internals.runtime.Gatherer.configuration.customData)
                            if (Kameleoon.Internals.runtime.Gatherer.configuration.customData[e].mappingIdentifier) {
                                i = Kameleoon.Internals.runtime.Visitor.currentVisit.countByValueByCustomDatum[e];
                                if (null != i) i = Object.keys(i)[0];
                                break
                            } if (null == i) {
                        var t = "";
                        _this.variations.forEach((function(i) {
                            if (i.respoolTime && 0 != i.respoolTime) t += i.respoolTime
                        }));
                        var n = Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode + _this.id + t;
                        return Kameleoon.Utils.seededRandom(n, !0)
                    }
                    return Kameleoon.Utils.seededRandom(_this.id + "//" + i, !1)
                };
                this.performVariationAssignment = function(onlyRegisteredVariation) {
                    if (_this.displayedVariation && !onlyRegisteredVariation) return;
                    if (void 0 !== _this.registeredVariationId && _this.assignmentTime) _this.variations.forEach((function(i) {
                        if (_this.registeredVariationId == i.id && i.respoolTime > _this.assignmentTime || null === _this.registeredVariationId && _this.untrackedRespoolTime > _this.assignmentTime) _this.registeredVariationId = void 0
                    }));
                    if (void 0 === _this.registeredVariationId && !Kameleoon.Internals.runtime.simulationMode && 0 == _this.variations.filter((function(i) {
                            return i.id == _this.registeredVariationId
                        })).length) _this.registeredVariationId = void 0;
                    if (_this.mentalistEnabled && _this.mentalistVariationReassignationPermission) _this.registeredVariationId = void 0;
                    if (!_this.registeredVariationId || _this.mentalistVariationReassignationPermission) _this.train = !0;
                    if (void 0 === _this.registeredVariationId) {
                        if (_this.mentalistEnabled) {} else if (Kameleoon.Internals.runtime.customVariationSelectionFunction) {
                            _this.registeredVariationId = Kameleoon.Internals.runtime.customVariationSelectionFunction(_this);
                            if (null != _this.registeredVariationId)
                                if ("reference" == _this.registeredVariationId.toString()) _this.registeredVariationId = 0;
                                else if ("none" == _this.registeredVariationId.toString()) _this.registeredVariationId = null
                        } else {
                            var deviationRandom = _this.obtainVariationAssignmentRandomNumber();
                            var total = 0;
                            _this.registeredVariationId = null;
                            for (var i = 0, l = _this.variations.length; i < l; ++i) {
                                total += _this.variations[i].deviation;
                                if (deviationRandom <= total) {
                                    _this.registeredVariationId = _this.variations[i].id;
                                    break
                                }
                            }
                        }
                        _this.assignmentTime = (new Date).getTime();
                        _this.writeLocalData()
                    }
                    Kameleoon.Analyst.Actions.associateActionAndVariation(_this, _this.registeredVariationId, onlyRegisteredVariation ? "REGISTERED_VARIATION" : "BOTH")
                };
                this.setTargetingSegment = function(i) {
                    _this.targetingSegment = Kameleoon.Internals.runtime.targetingSegments.filter((function(i) {
                        return i.id == _this.targetingSegmentId
                    }))[0] || {};
                    if (!i || i == _this.targetingSegmentId) {
                        _this.targeting = void 0;
                        _this.rescheduleTargeting = null;
                        _this.numberTargetingCheckings = 0;
                        _this.displayedVariation = null
                    }
                };
                this.trigger = function() {
                    if (!_this.targeting) {
                        _this.targeting = !0;
                        _this.displayedVariation = null
                    }
                };
                this.writeLocalData = function() {
                    var i = _this.registeredVariationId + (_this.mentalistEnabled ? "-mentalist" : "") + "/" + _this.assignmentTime + "/" + _this.counterActive;
                    if (!_this.simulationMode) Kameleoon.Utils.createLocalData("kameleoonExperiment-" + _this.id, i, _this.cookieDuration ? _this.cookieDuration : 30, _this.cookieDomain, "LS", !1)
                };
                for (var key in experiment) this[key] = experiment[key];
                var redirectVariationIdKey = "kameleoonRedirect-" + this.id;
                var redirectVariationId = incomingStoredData ? incomingStoredData[redirectVariationIdKey] : Kameleoon.Utils.readLocalData(redirectVariationIdKey, "LS", !1);
                redirectVariationId = redirectVariationId ? redirectVariationId : Kameleoon.Internals.runtime.parameters[redirectVariationIdKey];
                this.previousRequestRedirected = redirectVariationId ? !0 : !1;
                if (redirectVariationId) {
                    this.registeredVariationId = redirectVariationId;
                    this.assignmentTime = (new Date).getTime()
                }
                if (this.previousRequestRedirected) {
                    this.redirectProcessed = !0;
                    Kameleoon.Utils.eraseLocalData("kameleoonRedirect-" + this.id, null, null)
                }
                var kameleoonExperimentKey = "kameleoonExperiment-" + this.id;
                var storedValue = incomingStoredData ? incomingStoredData[kameleoonExperimentKey] : Kameleoon.Utils.readLocalData(kameleoonExperimentKey, "LS", !1);
                for (var key in Kameleoon.Internals.runtime.parameters)
                    if (0 == key.indexOf("kameleoonRedirect-" + this.id)) {
                        storedValue = Kameleoon.Internals.runtime.parameters[key] + "/" + (new Date).getTime() + "/" + !1;
                        this.writeLocalData()
                    } if (storedValue && -1 != this.id) {
                    var storedValues = storedValue.split("/");
                    this.registeredVariationId = "null" == storedValues[0] ? null : storedValues[0];
                    this.assignmentTime = parseInt(storedValues[1]);
                    this.counterActive = "true" == storedValues[2] && (new Date).getTime() - this.assignmentTime < 2592e6 ? !0 : !1;
                    if (this.registeredVariationId) {
                        if ("reference" == this.registeredVariationId.toString()) {
                            this.registeredVariationId = 0;
                            this.writeLocalData()
                        }
                        if ("none" == this.registeredVariationId.toString()) {
                            this.registeredVariationId = null;
                            this.writeLocalData()
                        }
                    }
                } else this.counterActive = !1;
                if (this.registeredVariationId && -1 != this.registeredVariationId.toString().indexOf("-mentalist")) {
                    this.registeredVariationId = parseInt(this.registeredVariationId.toString().replace("-mentalist", ""));
                    this.mentalistEnabled = !0
                }
                this.setTargetingSegment();
                if (this.redirectProcessed && this.registeredVariationId) this.writeLocalData();
                var blockedExperiments = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "blockedExperiments", []);
                if (blockedExperiments.length > 0 && -1 != blockedExperiments.indexOf(this.id)) this.blocked = !0
            }
            return Experiment
        }();
        var Goals = function() {
            function e() {
                var e = this;
                this.checkKameleoonGoals = function() {
                    var n = [];
                    Kameleoon.Internals.runtime.goals.forEach((function(e) {
                        if ("URL" == e.type) {
                            var t = new RegExp(e.url);
                            if (t.test(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL())) n.push({
                                goal: e
                            })
                        }
                        if ("PAGE_VIEWS" == e.type)
                            if (Kameleoon.Internals.runtime.gathererRun) {
                                var o = Kameleoon.Internals.runtime.Visitor.currentVisit.timesStartedPages.length;
                                if ((null == e.minPageViews || o >= e.minPageViews) && (null == e.maxPageViews || o <= e.maxPageViews)) n.push({
                                    goal: e
                                })
                            }
                    }));
                    if (n.length > 0) e.processConversions(n);
                    Kameleoon.Utils.addEventListener(document, Kameleoon.Internals.runtime.mouseDownEvent, (function(n) {
                        var t = Kameleoon.Internals.runtime.goals.filter((function(e) {
                            return "ENGAGEMENT" == e.type
                        })).map((function(e) {
                            return {
                                goal: e
                            }
                        }));
                        e.processConversions(t)
                    }), !0);
                    var t = Kameleoon.Internals.runtime.goals.filter((function(e) {
                        return "TIME_SPENT" == e.type
                    }));
                    if (t.length > 0) Kameleoon.Utils.setInterval((function() {
                        var n = [];
                        t.forEach((function(e) {
                            var t = Kameleoon.Internals.runtime.Visitor.currentVisit.timeLastActivity - Kameleoon.Internals.runtime.Visitor.currentVisit.startDate;
                            if ((null == e.minTimeSpent || t >= e.minTimeSpent) && (null == e.maxTimeSpent || t <= e.maxTimeSpent)) n.push({
                                goal: e
                            })
                        }));
                        if (n.length > 0) e.processConversions(n)
                    }), 1e3);
                    var o = Kameleoon.Internals.runtime.goals.filter((function(e) {
                        return "SCROLL" == e.type
                    }));
                    Kameleoon.Utils.addEventListener(document, "scroll", (function(n) {
                        if (document.body) {
                            var t = [];
                            o.forEach((function(e) {
                                if (!e.sent) {
                                    var n = null,
                                        o = null;
                                    switch (e.scrollTrackingType) {
                                        case "PIXELS_HEIGHT":
                                            n = Math.ceil(document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
                                            o = e.scrollTrackingValue;
                                            break;
                                        case "PERCENTAGE":
                                            n = (Math.ceil(document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight) / document.body.scrollHeight * 100;
                                            o = e.scrollTrackingValue;
                                            break;
                                        case "ELEMENT":
                                            n = window.innerHeight;
                                            var r = Kameleoon.Utils.querySelectorAll(e.selector);
                                            if (r.length > 0) o = r[0].getBoundingClientRect().top + r[0].offsetHeight;
                                            break
                                    }
                                    if (null !== n && null !== o && o <= n) {
                                        t.push({
                                            goal: e
                                        });
                                        e.sent = !0
                                    }
                                }
                            }));
                            if (t.length > 0) e.processConversions(t)
                        }
                    }), !0);
                };
                this.processConversions = function(e) {
                    if (Kameleoon.Internals.runtime.gathererRun) {
                        var n = [];
                        if (null != Kameleoon.Internals.runtime.experiments)
                            for (var t = 0, o = Kameleoon.Internals.runtime.experiments.length; t < o; ++t) {
                                var r = Kameleoon.Internals.runtime.experiments[t];
                                var i = r.registeredVariationId;
                                if (null != i && null !== i) n.push(r.id)
                            }
                        for (var l = 0, a = e.length; l < a; ++l) {
                            var s = e[l];
                            var u = s.goal;
                            var m = !0 === s.negative;
                            if (m || "PAGE_VIEWS" != u.type && "TIME_SPENT" != u.type && "ENGAGEMENT" != u.type || 0 == Kameleoon.Internals.runtime.Visitor.currentVisit.obtainNumberConversions(u.id)) {
                                Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "ConversionTriggered", new APIGoal(u), "goal/process");
                                Kameleoon.Gatherer.track(VisitEvent_Conversions, {
                                    goalId: u.id,
                                    revenue: s.revenue ? s.revenue : 0,
                                    negative: m
                                })
                            }
                        }
                    }
                    if (Kameleoon.Internals.runtime.kameleoonFull) Kameleoon.Analyst.processConversions()
                }
            }
            return e
        }();
        var IP = function() {
            function e() {
                var e = this;
                this.ipAddressMatchesRange = function(n, a) {
                    var t = n.split(".");
                    var r = a.split(".");
                    return 4 == t.length && 4 == r.length && e.ipAdressBlockMatchesRangeBlock(t[0], r[0]) && e.ipAdressBlockMatchesRangeBlock(t[1], r[1]) && e.ipAdressBlockMatchesRangeBlock(t[2], r[2]) && e.ipAdressBlockMatchesRangeBlock(t[3], r[3])
                };
                var n = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "ip");
                if (!n) Kameleoon.Utils.performBeaconServerCall(Kameleoon.Internals.runtime.RequestManager.obtainIpUrl(), (function(n) {
                    if (4 == n.readyState && (200 == n.status || 204 == n.status)) {
                        var a = n.getResponseHeader("ip") || "";
                        Kameleoon.Internals.runtime.ipIsTrackerAccepted = !0;
                        for (var t = 0, r = Kameleoon.Internals.configuration.trackerExcludedIPRanges.length; t < r; ++t)
                            if (e.ipAddressMatchesRange(a, Kameleoon.Internals.configuration.trackerExcludedIPRanges[t])) {
                                Kameleoon.Internals.runtime.ipIsTrackerAccepted = !1;
                                break
                            } Kameleoon.Internals.runtime.storedData.saveField("Runtime", "ipIsTrackerAccepted", Kameleoon.Internals.runtime.ipIsTrackerAccepted);
                        Kameleoon.Internals.runtime.storedData.saveField("Runtime", "ip", a);
                        e.value = a
                    }
                }), (function() {
                    Kameleoon.Internals.runtime.ipIsTrackerAccepted = !0
                }), 1e3);
                else {
                    this.value = n;
                    Kameleoon.Internals.runtime.ipIsTrackerAccepted = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "ipIsTrackerAccepted")
                }
            }
            e.prototype.ipAdressBlockMatchesRangeBlock = function(e, n) {
                if (n == e) return !0;
                if ("*" == n) return !0;
                var a = parseInt(e);
                var t = n.split("-");
                var r = parseInt(t[0]);
                var s = t.length > 1 ? parseInt(t[1]) : r;
                if (!isNaN(a) && !isNaN(r) && !isNaN(s) && a >= r && a <= s) return !0;
                return !1
            };
            return e
        }();
        var KMutationObserver = function() {
            function e() {}
            e.addMutationElementsToInternalObjects = function(e) {
                for (var t = 0; t < e.length; ++t) {
                    var n = e[t];
                    if (n && n.id)
                        if (-1 === Kameleoon.Internals.runtime.addedIDs.indexOf("#" + n.id)) Kameleoon.Internals.runtime.addedIDs.push("#" + n.id);
                    if (n && n.className && "string" === typeof n.className) {
                        var o = n.className.split(" ");
                        for (var r = 0; r < o.length; ++r)
                            if (-1 === Kameleoon.Internals.runtime.addedClasses.indexOf("." + o[r])) Kameleoon.Internals.runtime.addedClasses.push("." + o[r])
                    }
                }
            };
            e.checkClassesForSelector = function(e) {
                var t = e.selector;
                var n = [];
                if (t && -1 !== t.indexOf(".")) {
                    if (!e.selectorClasses || 0 === e.selectorClasses.length) {
                        if (-1 !== t.indexOf("contains")) {
                            var o = t.match(/:contains\(['"]([\s\S]+)['"]\)/);
                            var r = t.replace(o[0], "");
                            n = r.match(/\.([^\s.:\[]+)/g)
                        }
                        n = t.match(/\.([^\s.:\[]+)/g);
                        e.selectorClasses = n
                    }
                } else return !0;
                for (var a = 0, l = e.selectorClasses.length; a < l; ++a) {
                    var i = e.selectorClasses[a];
                    if (-1 === i.indexOf("kameleoon") && -1 === Kameleoon.Internals.runtime.addedClasses.indexOf(i)) return !1
                }
                return !0
            };
            e.checkContainsTextesForSelector = function(e, t) {
                var n = e.selector;
                var o;
                if (t && t.nodeType == Node.TEXT_NODE)
                    if (n && -1 !== n.indexOf("contains")) {
                        if (!e.selectorContainsText) {
                            var r = n.match(/:contains\(['"]([\s\S]+)['"]\)/);
                            o = r[1];
                            e.selectorContainsText = o;
                            if (t.nodeValue && -1 === t.nodeValue.indexOf(o)) return !1
                        }
                    } else return !1;
                return !0
            };
            e.checkIDsForSelector = function(t) {
                var n = t.selector;
                var o;
                if (t.currentQuery) o = t.currentQuery;
                var r;
                if (t.options) r = t.options.domReference;
                var a = [];
                if (n && -1 !== n.indexOf("#")) {
                    if (!t.selectorIDs || 0 === t.selectorIDs.length) {
                        if (-1 !== n.indexOf("contains")) {
                            var l = n.match(/:contains\(['"]([\s\S]+)['"]\)/);
                            var i = n.replace(l[0], "");
                            a = i.match(/#([^\s:\[]+)/g)
                        } else a = n.match(/#([^\s:\[>]+)/g);
                        t.selectorIDs = a;
                        if (o && -1 !== o.indexOf("#"))
                            if (-1 !== o.indexOf("contains")) {
                                var l = o.match(/:contains\(['"]([\s\S]+)['"]\)/);
                                var s = o.replace(l[0], "");
                                a = s.match(/#([^\s:\[]+)/g)
                            } else a = o.match(/#([^\s:\[]+)/g);
                        for (var c = 0, m = a.length; c < m; ++c)
                            if (-1 === t.selectorIDs.indexOf(a[c])) t.selectorIDs.push(a[c])
                    }
                } else return !0;
                for (var d = 0, f = t.selectorIDs.length; d < f; ++d) {
                    var u = t.selectorIDs[d];
                    if (-1 !== u.indexOf("kameleoonElement")) {
                        if (r && !e.checkIDsForSelector({
                                selector: r,
                                checkDomReference: !0
                            })) return !1;
                        if (t.checkDomReference)
                            if (-1 === Kameleoon.Internals.runtime.addedIDs.indexOf(u)) return !1
                    } else if (-1 === Kameleoon.Internals.runtime.addedIDs.indexOf(u)) return !1
                }
                return !0
            };
            e.fillInternalObjectsForMutationObserver = function(e) {
                if (!e) e = document;
                var t = e.getElementsByTagName("*");
                for (var n = 0, o = t.length; n < o; ++n) {
                    var r = t[n];
                    if (r.id && -1 === Kameleoon.Internals.runtime.addedIDs.indexOf("#" + r.id)) Kameleoon.Internals.runtime.addedIDs.push("#" + r.id);
                    if (r.className && "string" === typeof r.className) {
                        var a = r.className.split(" ");
                        for (var l = 0; l < a.length; ++l)
                            if (-1 === Kameleoon.Internals.runtime.addedClasses.indexOf("." + a[l])) Kameleoon.Internals.runtime.addedClasses.push("." + a[l])
                    }
                }
            };
            e.removeMutationElementsFromInternalObjects = function(e) {
                for (var t = 0; t < e.length; ++t) {
                    var n = e[t];
                    if (n && n.id)
                        if (-1 !== Kameleoon.Internals.runtime.addedIDs.indexOf("#" + n.id)) {
                            var o = Kameleoon.Internals.runtime.addedIDs.indexOf(n.id);
                            Kameleoon.Internals.runtime.addedIDs.splice(o, 1)
                        }
                }
            };
            e.setMutationObserver = function() {
                if (Kameleoon.Internals.runtime.cantUseMutationObserver) return;
                e.fillInternalObjectsForMutationObserver();
                var t = document.documentElement,
                    n;
                if (!Kameleoon.Internals.runtime.mutationObserver) Kameleoon.Internals.runtime.mutationObserver = new MutationObserver((function(t) {
                    t.forEach((function(t) {
                        var n = !0,
                            o = t.addedNodes,
                            r = t.removedNodes,
                            a = Kameleoon.Internals.runtime.listenVariations;
                        e.removeMutationElementsFromInternalObjects(r);
                        e.addMutationElementsToInternalObjects(o);
                        var l = Array.prototype.slice.call(o);
                        var i = Array.prototype.slice.call(r);
                        var s = l.concat(i);
                        var c = function(o) {
                            var r = s[o];
                            var l = r.parentNode;
                            if ((Kameleoon.Internals.runtime.editorMode || Kameleoon.Internals.runtime.kameleoonSelectionIframeMode) && r && r.id && "string" == typeof r.id && null !== r.id.match("kameleoon"))
                                if (r.closest)
                                    if (null !== r.closest(".KameleoonProtected")) n = !1;
                            if (n && r && r.innerHTML && "childList" === t.type) e.fillInternalObjectsForMutationObserver(r);
                            if (n && r && a) a.forEach((function(t) {
                                if (t.elementSets) t.elementSets.forEach((function(n) {
                                    if ((!n.evaluated || !(n.options.autoGeneratedSelector || n.options.idSelector || n.options.domOperation)) && e.checkIDsForSelector(n) && e.checkClassesForSelector(n) && e.checkContainsTextesForSelector(n, r))
                                        if (!t.getAction() || t.getAction().targeting) {
                                            n.evaluated = !0;
                                            Kameleoon.ElementSet.processElementSet(n, t, !1, t.permanentRefreshActive, t.editionMode, l)
                                        }
                                }));
                                if (t.replaceData && r.nodeType === Node.TEXT_NODE && (!r.parentNode || "SCRIPT" !== r.parentNode.nodeName && "STYLE" !== r.parentNode.nodeName)) {
                                    var n = JSON.parse(t.replaceData);
                                    for (var o = 0; o < n.length; ++o) {
                                        var a = new RegExp(n[o].toReplace, "gi");
                                        if (!n[o].disabled && r.nodeValue && a.test(r.nodeValue)) {
                                            Kameleoon.ElementSet.saveElementOriginalData(r);
                                            r.kameleoonData.powered = !0;
                                            r.nodeValue = r.nodeValue.replace(a, n[o].replaceBy)
                                        }
                                    }
                                }
                            }));
                            if (n && r) {
                                var i = function(t) {
                                    var n = Kameleoon.Internals.runtime.waitingElementPresentObjects[t];
                                    if (n && n.useAntiFlicker)
                                        if (e.checkIDsForSelector(n) && e.checkClassesForSelector(n) && e.checkContainsTextesForSelector(n, r)) {
                                            var o = Kameleoon.Utils.querySelectorAll(n.selector, l);
                                            if (0 < o.length) {
                                                Kameleoon.Utils.runProtectedFunction((function() {
                                                    n.callback(o)
                                                }));
                                                Kameleoon.Internals.runtime.waitingElementPresentObjects.splice(t, 1)
                                            }
                                        }
                                };
                                for (var c = Kameleoon.Internals.runtime.waitingElementPresentObjects.length - 1; c >= 0; c -= 1) i(c)
                            }
                        };
                        for (var m = 0; m < s.length; ++m) c(m)
                    }))
                }));
                n = {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                };
                if ("function" === typeof Kameleoon.Internals.runtime.mutationObserver.observe) Kameleoon.Internals.runtime.mutationObserver.observe(t, n);
                if (Kameleoon.Internals.configuration.singlePageSupport) Kameleoon.API.Core.runWhenElementPresent("body", (function(t) {
                    Kameleoon.Internals.runtime.mutationObserverSpa = new MutationObserver((function() {
                        Kameleoon.Internals.runtime.listenVariations = [];
                        Kameleoon.Internals.runtime.mutationObserverSpa.disconnect();
                        if (Kameleoon.ElementSet) e.checkElementSetIntegrity();
                        n()
                    }));
                    var n = function() {
                        Kameleoon.Internals.runtime.mutationObserverSpa.observe(t[0], {
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        })
                    };
                    n()
                }))
            };
            e.checkElementSetIntegrity = function() {
                if (Kameleoon.Internals.runtime.editorEnabled) return;
                (Kameleoon.ElementSet.pageElementSetsSpa || []).forEach((function(t) {
                    try {
                        var n = t.elementSet;
                        var o = Kameleoon.Utils.querySelectorAll(n.selector);
                        o.forEach((function(t) {
                            if (n.options.htmlContent)
                                if (t.innerHTML != n.options.htmlContent) e.resetElementSet(n, t);
                            if (n.options.href)
                                if (t.href != n.options.href && t.href != n.options.href + "/")
                                    if ("A" == t.tagName) e.resetElementSet(n, t);
                            if (n.options.domOperation) {
                                if ("SWAP" == n.options.domOperation)
                                    if (t.kameleoonData) {
                                        var o = Kameleoon.Utils.querySelectorAll(n.options.domReference)[0];
                                        if (!e.containsDomOperationElements(o)) e.resetElementSet(n, t, o)
                                    } else e.resetElementSet(n, t);
                                else if ("INSERT_BEFORE" == n.options.domOperation) {
                                    var r = Kameleoon.Utils.querySelectorAll(n.selector + "," + n.options.domReference);
                                    if (r[0] != t && (!e.containsDomOperationElements(r[0]) || !e.containsDomOperationElements(r[1]))) e.resetElementSet(n, t)
                                } else if ("INSERT_AFTER" == n.options.domOperation) {
                                    var r = Kameleoon.Utils.querySelectorAll(n.selector + "," + n.options.domReference);
                                    if (r[0] == t && (!e.containsDomOperationElements(r[0]) || !e.containsDomOperationElements(r[1]))) e.resetElementSet(n, t)
                                } else if ("INSERT_AS_CHILD") {
                                    var a = Kameleoon.Utils.querySelectorAll(n.options.domReference)[0];
                                    if (t.parentElement != a) e.resetElementSet(n, t)
                                }
                            } else if (n.options.autoGeneratedSelector && n.options.kameleoonId) {
                                if (null == t.getAttribute("data-kameleoon-id")) t.setAttribute("data-kameleoon-id", n.options.kameleoonId);
                                if (null == t.id) t.setAttribute("id", "kameleoonId" + n.options.kameleoonId)
                            }
                        }))
                    } catch (e) {}
                }))
            };
            e.resetElementSet = function(e, t, n) {
                var o = [t];
                if (n) o.push(n);
                o.forEach((function(e) {
                    if (e.id && 0 == e.id.indexOf("kameleoon")) e.removeAttribute("id");
                    e.removeAttribute("kameleoon");
                    e.removeAttribute("data-kameleoon-id");
                    delete e.kameleoonData;
                    delete e.dataset.kameleoonEvaluated
                }));
                e.evaluated = !1;
                Kameleoon.ElementSet.processElementSet(e, null, !1, !1, !1);
                e.evaluated = !0
            };
            e.containsDomOperationElements = function(e) {
                var t = e.querySelector("span.kameleoonDomOperation");
                return t && t.parentElement == e
            };
            return e
        }();
        var Logger = function() {
            function e() {
                var e = this;
                this.MAX_REQUESTS_PER_VISIT = 3;
                this.baseUrl = "https://logger.kameleoon.com/api/2/store/?sentry_key=d8dc96c209184885ab9643cbaf1eb86f&sentry_version=7";
                this.canSend = function() {
                    if (Kameleoon.Internals.runtime && Kameleoon.Internals.runtime.Consent.hasGlobalConsent())
                        if (e.errorLoggerIds.length < e.MAX_REQUESTS_PER_VISIT) {
                            var n = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "loggerPopulation");
                            if (null == n) {
                                e.population = n = Math.random();
                                Kameleoon.Internals.runtime.storedData.saveField("Runtime", "loggerPopulation", n)
                            }
                            if (n < .01) return !0
                        } return !1
                };
                this.generateRandomIdAsString = function(e, n, t) {
                    return Kameleoon.Utils.computeStringSha256(e + n + t).substr(0, 32)
                };
                this.generateRequestDataAsString = function(e, n, t, r) {
                    var o = {
                        tags: {
                            siteCode: Kameleoon.Internals.configuration.siteCode
                        },
                        user: {},
                        environment: Kameleoon.Internals.configuration.environment,
                        platform: "javascript",
                        event_id: n,
                        request: {
                            url: location.href,
                            headers: {
                                "User-Agent": navigator.userAgent
                            }
                        },
                        exception: {
                            values: [{
                                type: e.name,
                                value: e.stack ? e.stack : e.message,
                                stacktrace: {
                                    frames: [{
                                        filename: t
                                    }]
                                },
                                mechanism: {
                                    data: {
                                        mode: "stack",
                                        message: e.stack ? e.stack : e.message,
                                        name: e.name
                                    },
                                    handled: !1,
                                    type: "onerror"
                                }
                            }]
                        }
                    };
                    if (r) {
                        o.tags["action-id"] = r.id;
                        o.tags["action-name"] = r.name;
                        o.tags["action-type"] = r.experimentAction ? "experiment" : "personalization"
                    }
                    try {
                        o.user = {
                            id: Kameleoon.Internals.runtime && Kameleoon.Internals.runtime.Visitor && Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode
                        }
                    } catch (e) {
                        o.user = {
                            id: "no_visitor_code"
                        }
                    }
                    return JSON.stringify(o)
                };
                this.send = function(n, t, r) {
                    if ("DEVELOPMENT" == Kameleoon.Internals.configuration.environment) console.error(n);
                    try {
                        e.errorLoggerIds = Kameleoon.Internals.runtime && Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "loggerRequestsSend") || e.errorLoggerIds;
                        var o = e.generateRandomIdAsString(n.message, Kameleoon.Internals.configuration.siteCode, Kameleoon.Internals.configuration.environment);
                        if (-1 == e.errorLoggerIds.indexOf(o)) {
                            e.errors.push(n);
                            var a = n.stack ? n.stack : n.message;
                            if (e.canSend() && a && a.trim().length > 0) {
                                var s = new XMLHttpRequest;
                                s.open("POST", e.baseUrl, !0);
                                s.timeout = 2e3;
                                s.send(e.generateRequestDataAsString(n, o, t, r));
                                Kameleoon.Internals.runtime && Kameleoon.Internals.runtime.storedData.saveField("Runtime", "loggerRequestsSend", e.errorLoggerIds)
                            }
                            e.errorLoggerIds.push(o);
                            if (Kameleoon.Internals.runtime.parameters.kameleoonDebug || localStorage.kameleoonExtensionIsAdmin) console.log(n)
                        }
                    } catch (t) {
                        e.errors.push(n)
                    }
                };
                this.errorLoggerIds = [];
                this.errors = []
            }
            return e
        }();
        var OnlineMeanAndDeviation = function() {
            function n(n) {
                var e = this;
                this.dimension = n;
                this.mean = [];
                this.nbUpdates = [];
                this.m2 = [];
                this.deviation = [];
                for (var a = 0; a < n; ++a) {
                    this.mean[a] = 0;
                    this.nbUpdates[a] = 0;
                    this.m2[a] = 0;
                    this.deviation[a] = 0
                }
                this.update = function(n, a) {
                    if (void 0 === a) a = 1;
                    if (a > 0)
                        for (var t = 0; t < e.dimension; ++t)
                            if (!isNaN(n[t]) && isFinite(n[t])) {
                                var i = e.mean[t] - n[t];
                                var r = e.nbUpdates[t] + a;
                                e.m2[t] = e.m2[t] + i / r * i * e.nbUpdates[t] * a;
                                e.deviation[t] = Math.sqrt(e.m2[t] / r);
                                e.mean[t] = e.mean[t] / r * e.nbUpdates[t] + n[t] / r * a;
                                e.nbUpdates[t] = r
                            }
                }
            }
            n.createFromDifferences = function(e, a, t, i) {
                var r = new n(1);
                var s = e.length;
                var o = 0;
                if (o < s) {
                    var v = e[o];
                    o++;
                    while (o < s) {
                        var d = e[o];
                        o++;
                        var f = d - v;
                        if (f < 0 && a || 0 == f && t || f > 0 && i) r.update([f]);
                        v = d
                    }
                }
                return r
            };
            n.createFromValues = function(e) {
                var a = new n(1);
                for (var t = 0, i = e.length; t < i; t++) a.update([e[t]]);
                return a
            };
            n.createFromBooleanValues = function(e) {
                var a = new n(1);
                for (var t = 0, i = e.length; t < i; t++) a.update([e[t] ? 1 : 0]);
                return a
            };
            return n
        }();
        var Personalization = function() {
            function Personalization(personalization, incomingStoredData) {
                var _this = this;
                this.setTargetingSegment = function(n) {
                    _this.targetingSegment = Kameleoon.Internals.runtime.targetingSegments.filter((function(n) {
                        return n.id == _this.targetingSegmentId
                    }))[0] || {};
                    if (!n || n == _this.targetingSegmentId) {
                        _this.targeting = void 0;
                        _this.rescheduleTargeting = null;
                        _this.numberTargetingCheckings = 0;
                        _this.displayedVariation = null
                    }
                };
                this.trigger = function() {
                    if (!_this.targeting) {
                        _this.blocked = !1;
                        _this.targeting = !0;
                        _this.displayedVariation = null
                    }
                };
                for (var key in personalization) this[key] = personalization[key];
                if (Kameleoon.Internals.runtime.simulationMode) {
                    var kameleoonPersonalizationStatusKey = "kameleoonPersonalizationStatus-" + this.id;
                    var kameleoonPersonalizationStatus = incomingStoredData ? incomingStoredData[kameleoonPersonalizationStatusKey] : Kameleoon.Utils.readLocalData(kameleoonPersonalizationStatusKey, "LS", !0);
                    if (kameleoonPersonalizationStatus) {
                        this.forceTargeting = eval(kameleoonPersonalizationStatus["targetingStringAndExpositionString"][0]);
                        this.forceExposition = eval(kameleoonPersonalizationStatus["targetingStringAndExpositionString"][1])
                    }
                }
                if (personalization.autopromo && Kameleoon.Internals.configuration.forceAutopromoTargetingToFalse) this.blocked = !0;
                var blockedPersonalizations = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "blockedPersonalizations", []);
                if (blockedPersonalizations.length > 0 && -1 != blockedPersonalizations.indexOf(this.id)) this.blocked = !0;
                Kameleoon.Analyst.Actions.associateActionAndVariation(this, 0, "DISPLAYED_VARIATION");
                this.setTargetingSegment()
            }
            Personalization.executeEmailingScript = function() {};
            Personalization.setGlobalPersonalizationDeviation = function() {
                var n;
                var e = Kameleoon.Internals.runtime.readFromStorageOrExternal("kameleoonGlobalPersonalizationExposition", "LS");
                if (null == e) e = Kameleoon.Internals.runtime.readFromStorageOrExternal("kameleoonPersonalizations", "LS");
                if (e) {
                    var i = e.split("/");
                    n = "true" == i[0] ? !0 : !1;
                    Kameleoon.Utils.createLocalData("kameleoonGlobalPersonalizationExposition", e, Utils.MAX_STORAGE_DAYS, null, null, !1)
                } else {
                    if (Kameleoon.Utils.seededRandom(Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode, !0) < Kameleoon.Internals.configuration.personalizationsDeviation) n = !0;
                    else n = !1;
                    e = n + "/" + (new Date).getTime();
                    Kameleoon.Utils.createLocalData("kameleoonGlobalPersonalizationExposition", e, Utils.MAX_STORAGE_DAYS, null, null, !1)
                }
                Kameleoon.Internals.runtime.personalizationsActive = n
            };
            return Personalization
        }();
        var RequestManager = function() {
            function e() {
                var e = this;
                this.processRequests = function() {
                    if (e.eventsToSend.length > 0)
                        if (e.validateTrackingRequest())
                            if (!Kameleoon.Internals.runtime.simulationMode && !Kameleoon.Internals.runtime.proxyMode && !Kameleoon.Internals.runtime.kameleoonSelectionIframeMode) {
                                var t = e.eventsToSend.splice(0, 1e3);
                                var n = t.reduce((function(e, t) {
                                    if (!t.notTrack) e += t.obtainRequestData() + "\n";
                                    return e
                                }), "");
                                e.send(e.obtainVisitUrl(), "POST", n);
                                if (e.eventsToSend.length > 0) e.processRequests()
                            }
                };
                this.obtainVisitUrl = function() {
                    var t = Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode;
                    var n = Kameleoon.Internals.runtime.Gatherer.startOfVisit ? "true" : "false";
                    return "https://".concat(e.continentPrefix, "api-visit.").concat(e.domain, "/events?siteCode=").concat(e.siteCode, "&visitorCode=").concat(t, "&startOfVisit=").concat(n)
                };
                this.obtainIpUrl = function() {
                    return "https://".concat(e.continentPrefix, "api-tracker.").concat(e.domain, "/ip.gif")
                };
                this.obtainGeolocationUrl = function() {
                    return "https://".concat(e.continentPrefix, "api-tracker.").concat(e.domain, "/geolocation.gif")
                };
                this.send = function(t, n, i, o, s, a) {
                    var r = new XMLHttpRequest;
                    r.open(n, t, !0);
                    if (o) r.onreadystatechange = function(e) {
                        o.bind(r)(e.target)
                    };
                    if (s) {
                        r.onerror = function(e) {
                            s.bind(r)(e.target)
                        };
                        r.ontimeout = function(e) {
                            s.bind(r)(e.target)
                        }
                    }
                    r.timeout = a || 15 * 60 * 1e3;
                    r.send("POST" == n && i ? i : null);
                };
                this.sendActiveScript = function() {
                    e.send("https://".concat(e.continentPrefix, "api-active-script.").concat(e.domain, "/event?siteCode=").concat(e.siteCode), "POST")
                };
                this.sendCounter = function(t) {
                    e.send("https://".concat(e.continentPrefix, "api-counter.").concat(e.domain, "/events?siteCode=").concat(e.siteCode), "POST", t)
                };
                this.sendHeatMap = function(t, n, i) {
                    e.send("https://".concat(e.continentPrefix, "api-heat-map.").concat(e.domain, "/events?siteCode=").concat(e.siteCode), "POST", "x=" + t + "&y=" + n + "&experimentId=" + i.id + "&variationId=" + i.associatedVariation.id)
                };
                this.sendProduct = function(t) {
                    e.send("https://".concat(e.continentPrefix, "api-product.").concat(e.domain, "/events?siteCode=").concat(e.siteCode), "POST", t)
                };
                this.eventsToSend = [];
                this.continentPrefix = Kameleoon.Internals.configuration.trackerContinent;
                this.domain = Kameleoon.Internals.configuration.VISITOR_DOMAIN;
                this.siteCode = Kameleoon.Internals.configuration.siteCode;
                Kameleoon.Utils.setInterval(this.processRequests.bind(this), 500);
                Kameleoon.Utils.addEventListener(window, "beforeunload", this.processRequests.bind(this))
            }
            e.prototype.addRequest = function(e) {
                switch (e.eventType) {
                    case "containers":
                    case "customData":
                    case "interests":
                    case "targetingSegments":
                    case "conversions":
                        this.eventsToSend.push(e);
                        break;
                    default:
                        this.eventsToSend.push(e);
                        this.processRequests();
                        break
                }
            };
            e.prototype.validateTrackingRequest = function() {
                var e = Kameleoon.Internals.runtime.ipIsTrackerAccepted;
                var t = Kameleoon.Internals.configuration.trackerExcludedIPRanges.length > 0;
                if (t && !e || !Kameleoon.Internals.runtime.Consent.hasGlobalConsent()) return !1;
                else return !0
            };
            return e
        }();
        var Segment = function() {
            function n() {}
            return n
        }();
        var Targeting = function() {
            function e() {
                var e = this;
                this.checkTargetingCondition = function(t, r) {
                    var n;
                    if (null == r.numberTargetingCheckings) r.numberTargetingCheckings = 0;
                    if (!e.checkIfTargetingMustBeComputed(r.targeting, r.rescheduleTargeting || 0 == r.numberTargetingCheckings, void 0)) n = {
                        targeting: r.targeting,
                        rescheduleTargeting: !1
                    };
                    else {
                        var i = Kameleoon.Targeting["evaluate_" + r.type];
                        var a = void 0;
                        if (null != i) a = i.bind(e)(r, t);
                        else a = null;
                        if (null == a) a = {
                            targeting: void 0,
                            rescheduleTargeting: !1
                        };
                        var g = a.targeting;
                        if (!0 !== r.include)
                            if (void 0 === g) {
                                if (!0 === a.excludedUndefinedIsTargeted) g = !0
                            } else g = !g;
                        n = {
                            targeting: g,
                            rescheduleTargeting: e.checkIfTargetingMustBeComputed(g, a.rescheduleTargeting, void 0)
                        };
                        r.targeting = n.targeting;
                        r.rescheduleTargeting = n.rescheduleTargeting;
                        r.numberTargetingCheckings++
                    }
                    if (!0 === n.targeting) n.weight = r.weight;
                    else n.weight = 0;
                    return n
                };
                this.checkTargetingSegmentsTargeting = function(t) {
                    var r = [];
                    for (var n = 0, i = t.length; n < i; ++n) {
                        var a = t[n];
                        if (null == a.numberTargetingCheckings) a.numberTargetingCheckings = 0;
                        if (e.checkIfTargetingMustBeComputed(a.targeting, a.rescheduleTargeting || 0 == a.numberTargetingCheckings, !1)) r.push(a)
                    }
                    t = r;
                    for (var n = 0, i = t.length; n < i; ++n) {
                        var a = t[n];
                        var g = e.checkTree(null, a ? a.tree : null, !1);
                        a.targeting = g.targeting;
                        a.rescheduleTargeting = g.rescheduleTargeting;
                        a.numberTargetingCheckings++
                    }
                    var l = [];
                    for (var n = 0, i = t.length; n < i; ++n) {
                        var a = t[n];
                        if (e.checkIfTargetingMustBeComputed(a.targeting, a.rescheduleTargeting, !1)) l.push(a)
                    }
                    if (l.length > 0) var o = Kameleoon.Utils.setTimeout((function() {
                        Kameleoon.Utils.clearTimeout(o);
                        e.processTargetingSegments(l)
                    }), Kameleoon.Internals.runtime.domReady ? Kameleoon.Internals.runtime.PAGE_LOADED_POLL_DELAY : Kameleoon.Internals.runtime.PAGE_LOADING_POLL_DELAY)
                };
                this.checkTree = function(t, r, n) {
                    var i;
                    if (null == r) {
                        i = {
                            targeting: !0,
                            rescheduleTargeting: !1
                        };
                        if (n) i.weight = 0
                    } else {
                        if (null == r.numberTargetingCheckings) r.numberTargetingCheckings = 0;
                        if (!e.checkIfTargetingMustBeComputed(r.targeting, r.rescheduleTargeting || 0 == r.numberTargetingCheckings, n)) {
                            i = {
                                targeting: r.targeting,
                                rescheduleTargeting: !1
                            };
                            if (n) i.weight = r.weight
                        } else {
                            if (null != r.targetingCondition) i = e.checkTargetingCondition(t, r.targetingCondition);
                            else {
                                var a = e.checkTree(t, r.leftChild, n);
                                var g = Kameleoon.Internals.runtime.simulationMode || n;
                                if (!g) switch (a.targeting) {
                                    case !0:
                                        if (!r.orOperator) g = !0;
                                        break;
                                    case !1:
                                        if (r.orOperator) g = !0;
                                        break;
                                    case void 0:
                                    default:
                                        g = !0;
                                        break
                                }
                                var l = null;
                                if (g) l = e.checkTree(t, r.rightChild, n);
                                var o = void 0;
                                switch (a.targeting) {
                                    case !0:
                                        if (r.orOperator) o = !0;
                                        else switch (l.targeting) {
                                            case !0:
                                                o = !0;
                                                break;
                                            case !1:
                                                o = !1;
                                                break;
                                            case void 0:
                                            default:
                                                o = void 0;
                                                break
                                        }
                                        break;
                                    case !1:
                                        if (r.orOperator) switch (l.targeting) {
                                            case !0:
                                                o = !0;
                                                break;
                                            case !1:
                                                o = !1;
                                                break;
                                            case void 0:
                                            default:
                                                o = void 0;
                                                break
                                        } else o = !1;
                                        break;
                                    case void 0:
                                    default:
                                        if (r.orOperator) switch (l.targeting) {
                                            case !0:
                                                o = !0;
                                                break;
                                            case !1:
                                                o = void 0;
                                                break;
                                            case void 0:
                                            default:
                                                o = void 0;
                                                break
                                        } else switch (l.targeting) {
                                            case !0:
                                                o = void 0;
                                                break;
                                            case !1:
                                                o = !1;
                                                break;
                                            case void 0:
                                            default:
                                                o = void 0;
                                                break
                                        }
                                        break
                                }
                                i = {
                                    targeting: o,
                                    rescheduleTargeting: e.checkIfTargetingMustBeComputed(o, a.rescheduleTargeting || g && l.rescheduleTargeting, n)
                                };
                                if (n) {
                                    var s = void 0;
                                    if (r.orOperator) s = Math.max(a.weight, l.weight);
                                    else s = a.weight + l.weight;
                                    i.weight = s
                                }
                            }
                            r.targeting = i.targeting;
                            r.rescheduleTargeting = i.rescheduleTargeting;
                            if (n) r.weight = i.weight
                        }
                        r.numberTargetingCheckings++
                    }
                    return i
                };
                this.computeDisplayableTree = function(t) {
                    var r = new Array;
                    var n = new Array;
                    e.computeDisplayableTreeFirstLevelAddIn(t, r, n);
                    if (n.length > 0) {
                        var i = new Array;
                        var a = new Array;
                        var g = e.createIterator(r);
                        var l = e.createIterator(n);
                        while (l.hasNext()) {
                            var o = l.next();
                            if (Kameleoon.Utils.testEmptyMap(o.conditions)) {
                                if (l.hasNext()) g.next()
                            } else {
                                a.push(o);
                                if (l.hasNext()) i.push(g.next())
                            }
                        }
                        r = a.length > 0 ? i.slice(0, a.length - 1) : i;
                        n = a
                    }
                    return {
                        firstLevelOrOperators: r,
                        secondLevel: n
                    }
                };
                this.computeDisplayableTreeFirstLevelAddIn = function(t, r, n) {
                    if (null != t)
                        if (null == t.targetingCondition)
                            if (0 == t.orGuiLevel) {
                                e.computeDisplayableTreeFirstLevelAddIn(t.leftChild, r, n);
                                r.push(t.orOperator);
                                e.computeDisplayableTreeFirstLevelAddIn(t.rightChild, r, n)
                            } else n.push(e.computeDisplayableTreeSecondLevel(t));
                    else n.push(e.computeDisplayableTreeSecondLevel(t))
                };
                this.computeDisplayableTreeSecondLevel = function(t) {
                    var r = new Array;
                    var n = new Array;
                    e.computeDisplayableTreeSecondLevelAddIn(t, r, n);
                    if (n.length > 0) {
                        var i = new Array;
                        var a = new Array;
                        var g = e.createIterator(r);
                        var l = e.createIterator(n);
                        while (l.hasNext()) {
                            var o = l.next();
                            if (o.disabled) {
                                if (l.hasNext()) g.next()
                            } else {
                                a.push(o);
                                if (l.hasNext()) i.push(g.next())
                            }
                        }
                        r = a.length > 0 ? i.slice(0, a.length - 1) : i;
                        n = a
                    }
                    return {
                        orOperators: r,
                        conditions: n
                    }
                };
                this.computeDisplayableTreeSecondLevelAddIn = function(t, r, n) {
                    if (null != t)
                        if (null == t.targetingCondition) {
                            e.computeDisplayableTreeSecondLevelAddIn(t.leftChild, r, n);
                            r.push(t.orOperator);
                            e.computeDisplayableTreeSecondLevelAddIn(t.rightChild, r, n)
                        } else n.push(t.targetingCondition)
                };
                this.flattenTree = function(e) {
                    var t = function(e, r) {
                        if (null != e)
                            if (null != e.targetingCondition) return !1 === e.targetingCondition.targeting ? ["!", e.targetingCondition] : e.targetingCondition;
                            else {
                                var n = e.orOperator ? "OR" : "AND";
                                var i = [t(e.leftChild, n), n, t(e.rightChild, n)];
                                return "AND" == r && "OR" == n ? ["(", i, ")"] : i
                            }
                    };
                    return Kameleoon.Utils.flatten(t(e, "OR"))
                };
                this.processAllTargetingSegments = function() {
                    e.processTargetingSegments(Kameleoon.Internals.runtime.targetingSegments || [])
                };
                this.processTargetingSegments = function(t) {
                    e.checkTargetingSegmentsTargeting(t);
                    var r = [];
                    for (var n = 0, i = t.length; n < i; ++n) {
                        var a = t[n];
                        if (!0 === a.targeting) r.push(a)
                    }
                    e.performSegmentsTracking(r)
                }
            }
            e.prototype.checkIfTargetingMustBeComputed = function(e, t, r) {
                var n = !0 === t && (void 0 === e || !1 === e && !0 === r);
                return n
            };
            e.prototype.createIterator = function(e) {
                var t = 0;
                return {
                    hasNext: function() {
                        return t < e.length
                    },
                    next: function() {
                        return e[t++]
                    }
                }
            };
            e.prototype.performSegmentsTracking = function(e) {
                for (var t = 0, r = e.length; t < r; ++t) {
                    var n = e[t];
                    Kameleoon.Utils.sendKameleoonCustomEvent.call(window, "SegmentTriggered", {
                        segment: {
                            id: n.id,
                            name: n.name
                        }
                    });
                    if (Kameleoon.Internals.configuration.useAudience || Kameleoon.Internals.runtime.mentalistRun && (n.trackMentalistPrediction || n.mentalist)) Kameleoon.Gatherer.track(VisitEvent_TargetingSegments, {
                        id: n.id
                    });
                    if (Kameleoon.Internals.runtime.mentalistRun)
                        if (n.trackMentalistPrediction) Kameleoon.Gatherer.track(VisitEvent_MentalistPredictionSegmentTargeting, {
                            targetingSegmentId: n.id,
                            trackMentalistPrediction: n.trackMentalistPrediction
                        })
                }
            };
            return e
        }();
        Targeting.prototype.evaluate_PAGE_URL = function(e) {
            var t = new RegExp(Kameleoon.Utils.computeURLRegExpNoKameleoonParameters(e.value));
            var a;
            try {
                a = t.test(decodeURI(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()))
            } catch (e) {
                try {
                    a = unescape ? t.test(unescape(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL())) : !1
                } catch (e) {
                    a = !1
                }
            }
            return {
                targeting: a,
                rescheduleTargeting: !1
            }
        };
        Targeting.prototype.evaluate_LANDING_PAGE = function(e) {
            if (Kameleoon.Internals.runtime.gathererRun) {
                var n = Kameleoon.Internals.runtime.Visitor.currentVisit.landingPageURL;
                return {
                    targeting: null != n && new RegExp(e.value).test(n),
                    rescheduleTargeting: !1
                }
            }
            return null
        };
        Targeting.prototype.evaluate_DEVICE_TYPE = function(e) {
            return {
                targeting: e.value == Kameleoon.Internals.runtime.Device.type.toLocaleUpperCase(),
                rescheduleTargeting: !1
            }
        };
        Targeting.prototype.evaluate_JS_CODE = function(targetingCondition, container) {
            var asyncCallback = function(e) {
                targetingCondition.targeting = e
            };
            if (!targetingCondition.valueGeneratedCode)
                if (targetingCondition.async) {
                    targetingCondition.valueGeneratedCode = "(function(setTargeting) {" + targetingCondition.value + "})(asyncCallback);";
                    eval(targetingCondition.valueGeneratedCode)
                } else targetingCondition.valueGeneratedCode = "(function() {" + targetingCondition.value + "})();";
            var targeting = void 0;
            if (targetingCondition.async) targeting = targetingCondition.targeting || void 0;
            else if (!targetingCondition.domReady || Kameleoon.Internals.runtime.domReady) try {
                var value = eval(targetingCondition.valueGeneratedCode);
                if ("boolean" != typeof value) targeting = void 0;
                else targeting = value
            } catch (e) {
                targeting = !1;
                var segmentName = container && container.targetingSegment ? container.targetingSegment.name : null;
                console.log(e, segmentName)
            }
            return {
                targeting: targeting,
                rescheduleTargeting: void 0 === targeting
            }
        };
        Targeting.prototype.evaluate_NEW_VISITORS = function(e) {
            if (Kameleoon.Internals.runtime.gathererRun) {
                var n = 1 == Kameleoon.Internals.runtime.Visitor.visits.length;
                return {
                    targeting: "NEW" == e.value ? n : !n,
                    rescheduleTargeting: !1
                }
            }
            return null
        };
        Targeting.prototype.evaluate_CONVERSIONS = function(e) {
            if (Kameleoon.Internals.runtime.gathererRun) {
                var n = void 0;
                if (e.value < 0) {
                    n = !1;
                    for (var r = 0, a = Kameleoon.Internals.runtime.goals.length; r < a; ++r) {
                        var t = Kameleoon.Internals.runtime.goals[r];
                        if ("PAGE_VIEWS" != t.type && "URL" != t.type) {
                            n = void 0;
                            break
                        }
                    }
                    for (var r = 0, a = Kameleoon.Internals.runtime.goals.length; r < a; ++r) {
                        var t = Kameleoon.Internals.runtime.goals[r];
                        if (Kameleoon.Internals.runtime.Visitor.currentVisit.obtainNumberConversions(t.id) > 0) {
                            n = !0;
                            break
                        }
                    }
                } else {
                    n = !1;
                    for (var r = 0, a = Kameleoon.Internals.runtime.goals.length; r < a; ++r) {
                        var t = Kameleoon.Internals.runtime.goals[r];
                        if (t.id == e.value) {
                            if ("PAGE_VIEWS" != t.type && "URL" != t.type) n = void 0;
                            if (Kameleoon.Internals.runtime.Visitor.currentVisit.obtainNumberConversions(t.id) > 0) n = !0;
                            break
                        }
                    }
                }
                return {
                    targeting: n,
                    rescheduleTargeting: void 0 === n,
                    excludedUndefinedIsTargeted: !0
                }
            }
            return null
        };
        var Tracking = function() {
            function t() {
                var t = this;
                this.timeBeforeSendTracking = 20 * 60 * 1e3;
                this.checkAndSetKameleoonTrackingTime = function(n, e) {
                    var i = Kameleoon.Utils.secureSessionStorage("getItem", "kameleoonAnalyticsTrackingTimes");
                    var a = null == i ? {} : JSON.parse(i);
                    var o = "Experiment-" + n;
                    if (null == a[e] || null == a[e][o] || (new Date).getTime() >= a[e][o] + t.timeBeforeSendTracking) {
                        if (null == a[e]) a[e] = {};
                        a[e][o] = (new Date).getTime();
                        Kameleoon.Utils.secureSessionStorage("setItem", "kameleoonAnalyticsTrackingTimes", JSON.stringify(a));
                        return !0
                    }
                    return !1
                };
                this.processCustomIntegration = function(t) {
                    var n = Kameleoon.Internals.configuration.customIntegrations;
                    var e = function(e) {
                        var i = t.customIntegrations[e];
                        var a = n.filter((function(t) {
                            return t.name == i
                        }))[0];
                        if (a) Kameleoon.Utils.runProtectedScript("(function(\n\t\t\t\t\t\texperimentID,\n\t\t\t\t\t\texperimentName,\n\t\t\t\t\t\tpersonalizationID,\n\t\t\t\t\t\tpersonalizationName,\n\t\t\t\t\t\tvariationID,\n\t\t\t\t\t\tvariationName) {\n\t\t\t\t\t\t\t".concat(a.jsCode, "\n\t\t\t\t\t})(\n\t\t\t\t\t\t").concat(t.experimentAction ? t.id : null, ",\n\t\t\t\t\t\t").concat(t.experimentAction ? "'" + t.name + "'" : null, ",\n\t\t\t\t\t\t").concat(!t.experimentAction ? t.id : null, ",\n\t\t\t\t\t\t").concat(!t.experimentAction ? "'" + t.name + "'" : null, ",\n\t\t\t\t\t\t").concat(t.associatedVariation.id, ",\n\t\t\t\t\t\t").concat("'" + t.associatedVariation.name + "'", "\n\t\t\t\t\t)"), "kameleoonCustomIntegration" + i + ".js")
                    };
                    for (var i = 0; i < t.customIntegrations.length; i++) e(i)
                }
            }
            return t
        }();
        Tracking.prototype.processGoogleAnalytics4 = function(a) {
            if (null != window.dataLayer) {
                var e = a.experimentAction ? "kameleoon_experiment" : "kameleoon_personalization";
                if (window.gtag) {
                    var i = "".concat(a.id, " - ").concat(a.name, " - ").concat(a.associatedVariation.id, " - ").concat(a.associatedVariation.name);
                    window.gtag("event", e, {
                        send_to: "default",
                        experiment_variation: i,
                        event_timeout: 2e3
                    })
                } else window.dataLayer.push({
                    event: e,
                    campaign_name: a.name,
                    campaign_id: a.id,
                    variation_name: a.associatedVariation.name,
                    variation_id: a.associatedVariation.id
                })
            } else Kameleoon.Utils.setTimeout((function() {
                Kameleoon.Tracking.processGoogleAnalytics4.apply(Kameleoon.Tracking, [a])
            }), 150)
        };
        Tracking.prototype.processUniversalAnalytics = function(n) {
            var a = Kameleoon.Tracking.findUniversalAnalyticsObject();
            var e = a && a.answer && 42 == a.answer;
            if (!e && n.universalAnalyticsTracking.eventCallDelayed) {
                var i = Kameleoon.Utils.setTimeout((function() {
                    Kameleoon.Utils.clearTimeout(i);
                    Kameleoon.Tracking.processUniversalAnalytics.apply(Kameleoon.Tracking, [n])
                }), 150);
                return
            }
            var r = n.universalAnalyticsTracking.trackingId;
            if (e && n.universalAnalyticsTracking.eventCallDelayed && r)
                if (void 0 == Kameleoon.Tracking.obtainUniversalAnalyticsTracker(n)) {
                    var l = Kameleoon.Utils.setTimeout((function() {
                        Kameleoon.Utils.clearTimeout(l);
                        Kameleoon.Tracking.processUniversalAnalytics.apply(Kameleoon.Tracking, [n])
                    }), 150);
                    return
                } var t = Kameleoon.Tracking.obtainUniversalAnalyticsTrackerPrefix(n);
            if (null == a || a && null == a.answer) var o = Kameleoon.Utils.setTimeout((function() {
                Kameleoon.Utils.clearTimeout(o);
                Kameleoon.Tracking.processUniversalAnalytics.apply(Kameleoon.Tracking, [n])
            }), 150);
            else {
                if (n.universalAnalyticsTracking.dimension && n.universalAnalyticsTracking.dimension < 201) a(t + "set", "dimension" + n.universalAnalyticsTracking.dimension, n.name + "/" + n.associatedVariation.name.substring(0, 80));
                if (Kameleoon.Tracking.checkAndSetKameleoonTrackingTime(n.id, "universalAnalytics"))
                    if (n.universalAnalyticsTracking.pageViewTracking) {
                        var c = n.name.replace(/\//gi, "-");
                        a(t + "send", "pageview", "/Kameleoon/" + c + "/" + encodeURIComponent(n.associatedVariation.name))
                    } else if (e || n.universalAnalyticsTracking.eventTracking) a(t + "send", "event", "Kameleoon", n.name, n.associatedVariation.name, void 0, {
                    nonInteraction: 1
                })
            }
        };
        Tracking.prototype.findUniversalAnalyticsObject = function() {
            return window.ga
        };
        Tracking.prototype.obtainUniversalAnalyticsTrackerPrefix = function(n) {
            var a = Kameleoon.Tracking.obtainUniversalAnalyticsTracker(n);
            return a ? a.get("name") + "." : ""
        };
        Tracking.prototype.obtainUniversalAnalyticsTrackerFromTrackingId = function(n) {
            var a = Kameleoon.Tracking.findUniversalAnalyticsObject();
            if (void 0 !== a && null != a.getAll) {
                var e = a.getAll();
                if (n) {
                    for (var i = 0; i < e.length; ++i)
                        if (n == e[i].get("trackingId")) return e[i]
                } else if (e.length > 0) return e[0]
            }
            return
        };
        Tracking.prototype.obtainUniversalAnalyticsTracker = function(n) {
            var a = void 0;
            if (n && n.universalAnalyticsTracking && n.universalAnalyticsTracking.trackingId) a = n.universalAnalyticsTracking.trackingId;
            return Kameleoon.Tracking.obtainUniversalAnalyticsTrackerFromTrackingId(a)
        };
        Tracking.prototype.processSegment = function(e) {
            var a = window.analytics;
            if (a) {
                a.track("Experiment Viewed", {
                    experimentId: e.id,
                    experimentName: e.name,
                    variationId: e.associatedVariation.id,
                    variationName: e.associatedVariation.name,
                    nonInteraction: 1
                });
                if (e.experimentAction) a.identify({
                    Experiment: e.name + ":" + e.associatedVariation.name
                });
                else a.identify({
                    Personalization: e.name + ":" + e.associatedVariation.name
                })
            } else var i = Kameleoon.Utils.setTimeout((function() {
                Kameleoon.Utils.clearInterval(i);
                Kameleoon.Tracking.processSegment.apply(Kameleoon.Tracking, [e])
            }), 150)
        };
        var Variation = function() {
            function e(e) {
                var t = this;
                this.getAction = function() {
                    var e = [];
                    e = e.concat(Kameleoon.Internals.runtime.experiments);
                    e = e.concat(Kameleoon.Internals.runtime.personalizations);
                    return e.filter((function(e) {
                        return e.id == t.actionId
                    }))[0]
                };
                for (var o in e) {
                    this[o] = e[o];
                    if ("widgetTemplateInputData" == o) {
                        var n = this[o];
                        for (var r in n)
                            if ("string" == typeof n[r]) n[r] = n[r].replace("STATIC_IMAGE_PATH", Kameleoon.Internals.configuration.IMAGE_PATH)
                    }
                }
            }
            e.prototype.applyJavascriptCode = function(e) {
                if (this.javaScriptCode && this.javaScriptCode.code && (null == this.javaScriptCode.evaluated || e)) {
                    this.javaScriptCode.evaluated = !0;
                    return Kameleoon.Utils.runProtectedScript(this.javaScriptCode.code, "kameleoonVariationJavaScriptCode-" + this.id + ".js")
                }
                return null
            };
            e.prototype.preProcessRedirect = function(e) {
                var t = this.redirections || [];
                for (var o = 0, n = t.length; o < n; ++o)
                    if (!t[o].scope || new RegExp(t[o].scope).test(window.location.href))
                        if (t[o].additionalParameters) {
                            if (-1 == window.location.search.indexOf(t[o].string))
                                if ("#" != t[o].string[0]) Kameleoon.Utils.processRedirect(window.location.protocol + "//" + window.location.hostname + (!window.location.port ? "" : ":" + window.location.port) + window.location.pathname + window.location.search + (-1 == window.location.search.indexOf("?") ? "?" : "&") + t[o].string + window.location.hash, e);
                                else window.location.replace(window.location.protocol + "//" + window.location.hostname + (!window.location.port ? "" : ":" + window.location.port) + window.location.pathname + window.location.search + t[o].string)
                        } else {
                            var r = t[o].string;
                            if (t[o].keepParameters) r += -1 != r.indexOf("?") ? window.location.search.replace("?", "&") : window.location.search;
                            Kameleoon.Utils.processRedirect(r, e)
                        }
            };
            e.prototype.process = function() {
                var e = this;
                var t = [];
                t = t.concat(Kameleoon.Internals.runtime.experiments);
                t = t.concat(Kameleoon.Internals.runtime.personalizations);
                var o = t.filter((function(t) {
                    return t.id == e.actionId
                }))[0];
                if (this.redirections && !Kameleoon.Internals.runtime.editorEnabled) this.preProcessRedirect(o);
                if (this.forceNoFlicker && !Kameleoon.Internals.runtime.domReady) {
                    var n = "";
                    for (var r = 0, i = this.elementSets.length; r < i; ++r) n += (0 != r ? ", " : "") + this.elementSets[r].selector;
                    Kameleoon.Utils.forceNoFlicker(n)
                }
                if (!this.styleSheetAdded) {
                    this.styleSheetAdded = !0;
                    Kameleoon.Utils.addCSSStyleSheet(this.css, o, null)
                }
                if (this.javaScriptCode && !this.permanentRefreshActive)
                    if (!this.javaScriptCode.afterDOMReady) this.applyJavascriptCode(!1);
                    else if (!this.permanentRefreshActive) Kameleoon.Utils.domReady((function() {
                    e.applyJavascriptCode(!1)
                }));
                if (this.elementSets && (!o || o.targeting)) this.elementSets.forEach((function(t) {
                    t.evaluated = !0;
                    Kameleoon.ElementSet.processElementSet(t, e, !1, e.permanentRefreshActive, e.editionMode)
                }));
                if (this.replaceData) {
                    var a = JSON.parse(this.replaceData);
                    this.processReplaceData(a)
                }
                if (this.forceNoFlicker && !this.permanentRefreshActive) Kameleoon.Utils.removeBlockingStyleSheet();
                if (Kameleoon.Internals.runtime["enginePollerForVariation" + this.id] && !this.permanentRefreshActive) {
                    if (Kameleoon.Internals.runtime.cantUseMutationObserver) Kameleoon.Utils.clearInterval(Kameleoon.Internals.runtime["enginePollerForVariation" + this.id]);
                    Kameleoon.Internals.runtime["enginePollerForVariation" + this.id] = null
                }
                if (!Kameleoon.Internals.runtime["enginePollerForVariation" + this.id] && !Kameleoon.Internals.runtime.editorMode && !Kameleoon.Internals.runtime.kameleoonSelectionIframeMode) {
                    this.permanentRefreshActive = !0;
                    Kameleoon.Internals.runtime.listenVariations.push(this);
                    Kameleoon.Internals.runtime["enginePollerForVariation" + this.id] = !0;
                    if (Kameleoon.Internals.runtime.cantUseMutationObserver) Kameleoon.Internals.runtime["enginePollerForVariation" + this.id] = Kameleoon.Utils.setInterval((function() {
                        e.process()
                    }), 10)
                }
            };
            e.prototype.processReplaceData = function(e) {
                if (document && document.body) {
                    var t = function(e) {
                        var t = !0,
                            o = e.parentNode,
                            n;
                        if (o) n = o.getAttribute("id");
                        if (Kameleoon.Internals.runtime.editorMode)
                            if (n && null !== n.match("kameleoon") || o.closest && null !== o.closest(".KameleoonProtected")) t = !1;
                        if ("SCRIPT" === o.nodeName || "STYLE" === o.nodeName || "NOSCRIPT" === o.nodeName) t = !1;
                        if (t) return NodeFilter.FILTER_ACCEPT
                    };
                    var o = function(e) {
                        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                    };
                    var n = function(e) {
                        return e.replace(/[aàáâãäå]/g, "[aàáâãäå]").replace(/[cç]/g, "[cç]").replace(/[eèéêëæ]/g, "[eèéêëæ]").replace(/[nñ]/g, "[nñ]").replace(/[oòóôõöø]/g, "[oòóôõöø]").replace(/[sß]/g, "[sß]").replace(/[uùúûü]/g, "[uùúûü]").replace(/[yÿ]/g, "[yÿ]")
                    };
                    var r = t;
                    r.acceptNode = t;
                    var i = document.createTreeWalker(document.body, NodeFilter.SHOW_ALL, r, !1);
                    while (i.nextNode()) {
                        if (3 !== i.currentNode.nodeType && (1 !== i.currentNode.nodeType || !i.currentNode.getAttribute("placeholder"))) continue;
                        for (var a = 0; a < e.length; ++a) {
                            var l = "[a-zA-Z0-9_ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž]",
                                s = n(o(e[a].toReplace)),
                                c = e[a].isWholeWordMode ? "(?<!" + l + ")" + s + "(?!" + l + ")" : s,
                                d = new RegExp(c, e[a].isCaseSensitiveMode ? "g" : "gi");
                            if (!e[a].disabled && i.currentNode.nodeValue && d.test(i.currentNode.nodeValue)) {
                                Kameleoon.ElementSet.saveElementOriginalData(i.currentNode);
                                i.currentNode.kameleoonData.powered = !0;
                                i.currentNode.nodeValue = i.currentNode.nodeValue.replace(d, e[a].replaceBy)
                            } else if (!e[a].disabled && 1 === i.currentNode.nodeType && i.currentNode.getAttribute("placeholder") && d.test(i.currentNode.getAttribute("placeholder"))) {
                                Kameleoon.ElementSet.saveElementOriginalData(i.currentNode);
                                i.currentNode.kameleoonData.powered = !0;
                                i.currentNode.setAttribute("placeholder", i.currentNode.getAttribute("placeholder").replace(d, e[a].replaceBy))
                            }
                        }
                    }
                }
            };
            return e
        }();
        var Visit = function() {
            function e(e) {
                var t = this;
                this.addActionTriggered = function(e, t) {
                    if (t) {
                        var i = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "experimentsTriggered", {});
                        i[e.toString()] = !0;
                        Kameleoon.Internals.runtime.storedData.saveField("Gatherer", "experimentsTriggered", i)
                    } else {
                        var n = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "personalizationsTriggered", {});
                        n[e.toString()] = !0;
                        Kameleoon.Internals.runtime.storedData.saveField("Gatherer", "personalizationsTriggered", n)
                    }
                };
                this.addActivity = function(e, i) {
                    if (i) t.timeLastActivity = e
                };
                this.addAdBlocker = function() {
                    t.Device.adBlocker = !0
                };
                this.addConversions = function(e, i, n, r) {
                    var s = r ? -1 : 1;
                    i *= s;
                    n *= s;
                    var a = t.conversions[e];
                    var o = a ? a.count : 0;
                    var u = a ? a.revenue : 0;
                    var l = o + i;
                    var c = u + n;
                    if (l > 0)
                        if (c >= 0) t.conversions[e] = {
                            count: l,
                            revenue: c
                        };
                        else delete t.conversions[e];
                    else delete t.conversions[e]
                };
                this.addCustomData = function(e, i, n) {
                    if (Kameleoon.Utils.testEmptyMap(i)) {
                        if (n) delete t.countByValueByCustomDatum[e]
                    } else {
                        if (n || null == t.countByValueByCustomDatum[e]) t.countByValueByCustomDatum[e] = {};
                        for (var r in i) t.countByValueByCustomDatum[e][r] = (t.countByValueByCustomDatum[e][r] || 0) + i[r]
                    }
                };
                this.addExperiment = function(e, i, n, r) {
                    if (null === n) return;
                    if (void 0 === t.ExperimentActivations[i]) {
                        t.ExperimentActivations[i] = {
                            associatedVariationID: n,
                            times: []
                        };
                        t.mentalistDecisionByExperimentId[i] = r
                    }
                    t.ExperimentActivations[i].times.push(e);
                    if (-1 != i) {
                        var s = Kameleoon.Internals.runtime.experiments.filter((function(e) {
                            return e.id == i
                        }))[0];
                        var a = s ? s.attributionWindow : Visitor.INFLUENCE_DELAY;
                        if (a > 0) t.experimentInfluences[i] = [parseInt(n), a]
                    }
                };
                this.addExternalSolutionData = function(e, i) {
                    if (!Kameleoon.Utils.testEmptyMap(i)) {
                        var n = t.valuesByKeyByExternalSolution[e];
                        if (null == n) {
                            n = {};
                            t.valuesByKeyByExternalSolution[e] = n
                        }
                        for (var r in i) {
                            var s = i[r];
                            var a = s.length;
                            if (a > 0) {
                                var o = n[r];
                                if (null == o) {
                                    o = {};
                                    n[r] = o
                                }
                                for (var u = 0; u < a; ++u) o[s[u]] = !0
                            }
                        }
                    }
                };
                this.addGeolocation = function(e, i, n, r, s, a) {
                    t.Geolocation = {
                        country: e,
                        region: i,
                        city: n,
                        postalCode: r,
                        latitude: s,
                        longitude: a
                    }
                };
                this.addInterests = function(e, i) {
                    e.forEach((function(e) {
                        var n = t.freshByActiveInterest[e];
                        if (null == n) n = !1;
                        t.freshByActiveInterest[e] = n || i
                    }))
                };
                this.addNumberClicks = function(e) {
                    if (e > 0) t.numberClicks += e
                };
                this.addPage = function(e, i, n, r) {
                    t.addActivity(e, !0);
                    t.keyPages.push(n);
                    t.timesStartedPages.push(e);
                    var s = r.filter((function(e) {
                        return null != e
                    }));
                    if (s.length > 0) {
                        t.referrers.push(s);
                        t.timesReferrers.push(e)
                    }
                    var a = t.timesByPageHref[i];
                    if (null == a) {
                        a = [];
                        t.timesByPageHref[i] = a
                    }
                    a.push(e);
                    for (var o in t.productEansLastPage) t.productEansAllButLastPages[o] = !0;
                    t.productEansLastPage = {}
                };
                this.addPersonalization = function(e, i, n, r) {
                    if (0 == n) return null;
                    if (void 0 === t.PersonalizationActivations[i] || null != n && null == t.PersonalizationActivations[i].associatedVariationID) {
                        t.PersonalizationActivations[i] = {
                            associatedVariationID: n,
                            times: []
                        };
                        t.mentalistDecisionByPersonalizationId[i] = r
                    }
                    t.PersonalizationActivations[i].times.push(e);
                    if (-1 != i) {
                        var s = Kameleoon.Internals.runtime.personalizations.filter((function(e) {
                            return e.id == i
                        }))[0];
                        var a = s ? s.attributionWindow : Visitor.INFLUENCE_DELAY;
                        if (a > 0) t.personalizationInfluences[i] = [1, a]
                    }
                };
                this.addProduct = function(e) {
                    t.productEansLastPage[e] = !0
                };
                this.addSearch = function(e, i, n, r) {
                    t.addActivity(e, !0);
                    t.keyWords.push(i);
                    t.searchesFollowed.push(r);
                    t.searchesNumberResults.push(n);
                    t.timesSearches.push(e)
                };
                this.addTargetingSegment = function(e, i) {
                    var n = t.timesByTargetingSegmentId[i];
                    if (null == n) {
                        n = [];
                        t.timesByTargetingSegmentId[i] = n
                    }
                    n.push(e)
                };
                this.addWeather = function(e, i, n, r, s, a, o, u, l) {
                    t.Weather = {
                        temperature: e,
                        humidity: i,
                        pressure: n,
                        windSpeed: r,
                        cloudiness: s,
                        sunrise: a,
                        sunset: o,
                        conditionDescription: u,
                        conditionCode: l
                    }
                };
                this.clearCustomDataPage = function() {
                    for (var e in Kameleoon.Internals.runtime.Gatherer.configuration.customData) {
                        var i = Kameleoon.Internals.runtime.Gatherer.configuration.customData[e];
                        if ("PAGE" == i.scope) delete t.countByValueByCustomDatum[e]
                    }
                };
                this.computeActionNumberActivations = function(e, i, n, r) {
                    if (null == r[e]) return 0;
                    return t.computeObjectNumberPresence(i, n, r[e].times)
                };
                this.computeObjectNumberPresence = function(e, t, i) {
                    var n = 0;
                    for (var r = 0, s = i.length; r < s; ++r) {
                        var a = i[r];
                        if ((null == e || a >= e) && (null == t || a <= t)) n++
                    }
                    return n
                };
                this.convertVisitFromServer = function() {
                    for (var e in t.valuesByKeyByExternalSolution) {
                        var i = t.valuesByKeyByExternalSolution[e];
                        for (var n in i) {
                            var r = i[n];
                            var s = {};
                            for (var a = 0, o = r.length; a < o; ++a) s[r[a]] = !0;
                            i[n] = s
                        }
                    }
                    return t
                };
                this.isVisitFinished = function() {
                    return t.timeLastActivity < (new Date).getTime() - Kameleoon.Internals.runtime.Gatherer.configuration.maxVisitIdleDuration
                };
                this.obtainInterestIsActive = function(e, i) {
                    if (null == i) return null != t.freshByActiveInterest[e];
                    return t.freshByActiveInterest[e] == i
                };
                this.obtainKeyPageIsVisited = function(e) {
                    for (var i = 0, n = t.keyPages.length; i < n; i++) {
                        var r = t.keyPages[i];
                        for (var s = 0, a = r.length; s < a; s++)
                            if (e == r[s]) return !0
                    }
                    return !1
                };
                this.obtainKeyWordIsSearched = function(e) {
                    for (var i = 0, n = t.keyWords.length; i < n; i++) {
                        var r = t.keyWords[i];
                        for (var s = 0, a = r.length; s < a; s++)
                            if (e == r[s]) return !0
                    }
                    return !1
                };
                this.obtainMeanPageDuration = function() {
                    var e = new Date;
                    var i = OnlineMeanAndDeviation.createFromDifferences(t.timesStartedPages, !1, !0, !0);
                    i.update([e.getTime() - t.timesStartedPages[t.timesStartedPages.length - 1]]);
                    return i.mean[0]
                };
                this.obtainNumberConversions = function(e) {
                    var i = t.conversions[e];
                    return null == i ? 0 : i.count
                };
                this.obtainPageNumberViews = function(e, i, n, r) {
                    var s = 0;
                    for (var a in t.timesByPageHref)
                        if (null != a) {
                            var o = Kameleoon.Utils.computeRelativeURL(a);
                            if ((null == e || e.test(a) || e.test(o)) && (null == i || !i.test(a) && !i.test(o))) s += t.computeObjectNumberPresence(n, r, t.timesByPageHref[a])
                        } return s
                };
                this.obtainPersonalizationNumberActivations = function(e, i, n) {
                    return t.computeActionNumberActivations(e, i, n, t.PersonalizationActivations)
                };
                this.obtainReferrerIsPresent = function(e) {
                    var i = null == e ? null : e + 1;
                    for (var n = 0, r = t.referrers.length; n < r; n++) {
                        var s = t.referrers[n];
                        for (var a = 0, o = s.length; a < o; a++)
                            if (s[a] == i) return !0
                    }
                    return !1
                };
                this.index = e.index || 0;
                this.landingPageURL = e.landingPageURL || null;
                this.locale = e.locale || "en";
                this.mentalistDecisionByExperimentId = e.mentalistDecisionByExperimentId || {};
                this.mentalistDecisionByPersonalizationId = e.mentalistDecisionByPersonalizationId || {};
                this.productEansAllButLastPages = e.productEansAllButLastPages || {};
                this.productEansLastPage = e.productEansLastPage || {};
                this.startDate = e.startDate || 0;
                this.timesByPageHref = e.timesByPageHref || {};
                this.timesByTargetingSegmentId = e.timesByTargetingSegmentId || {};
                this.valuesByKeyByExternalSolution = e.valuesByKeyByExternalSolution || {};
                this.visitorCode = e.visitorCode || "";
                this.countByValueByCustomDatum = e.countByValueByCustomDatum || {};
                this.freshByActiveInterest = e.freshByActiveInterest || {};
                this.keyPages = e.keyPages || [];
                this.keyWords = e.keyWords || [];
                this.numberClicks = e.numberClicks || 0;
                this.referrers = e.referrers || [];
                this.searchesFollowed = e.searchesFollowed || [];
                this.searchesNumberResults = e.searchesNumberResults || [];
                this.timeLastActivity = e.timeLastActivity || this.startDate;
                this.timesReferrers = e.timesReferrers || [];
                this.timesSearches = e.timesSearches || [];
                this.timesStartedPages = e.timesStartedPages || [];
                this.experimentInfluences = e.experimentInfluences || {};
                this.personalizationInfluences = e.personalizationInfluences || {};
                var i = e.Device || {};
                this.Device = {
                    adBlocker: i.adBlocker || !1,
                    browser: null != i.browser ? i.browser : null,
                    browserName: i.browserName || null,
                    browserVersion: i.browserVersion || null,
                    os: null != i.os ? i.os : null,
                    osName: i.osName || null,
                    screenHeight: i.screenHeight || null,
                    screenWidth: i.screenWidth || null,
                    timeZone: i.timeZone || "UTC",
                    type: i.type ? i.type.toLocaleUpperCase() : null,
                    windowHeight: i.windowHeight || null,
                    windowWidth: i.windowWidth || null
                };
                var n = e.Geolocation || {};
                this.Geolocation = {
                    city: n.city || null,
                    country: n.country || null,
                    latitude: n.latitude || null,
                    longitude: n.longitude || null,
                    postalCode: n.postalCode || null,
                    region: n.region || null
                };
                var r = e.Weather || {};
                this.Weather = {
                    conditionCode: r.conditionCode || null,
                    conditionDescription: r.conditionDescription || null,
                    cloudiness: r.cloudiness || null,
                    humidity: r.humidity || null,
                    pressure: r.pressure || null,
                    sunrise: r.sunrise || null,
                    sunset: r.sunset || null,
                    temperature: r.temperature || null,
                    windSpeed: r.windSpeed || null
                };
                this.conversions = e.conversions || {};
                this.ExperimentActivations = e.ExperimentActivations || {};
                this.PersonalizationActivations = e.PersonalizationActivations || {}
            }
            e.prototype.obtainExperimentNumberActivations = function(e, t, i) {
                return this.computeActionNumberActivations(e, t, i, this.ExperimentActivations)
            };
            return e
        }();
        var Visitor = function() {
            function e() {
                var t = this;
                this.addVisit = function(e) {
                    t.visits.push(e);
                    t.currentVisit = e;
                    t.totalVisits++;
                    if (null == t.timeStartedEldestVisit) t.timeStartedEldestVisit = e.startDate;
                    var i = t.visits.length;
                    var n = Math.max(1, Kameleoon.Internals.configuration.maxNumberLocalVisits);
                    if (i > n) t.visits = t.visits.slice(i - n)
                };
                this.addPreviousVisits = function(e) {
                    if (null != t.currentVisit) {
                        var i = t.currentVisit;
                        var n = [];
                        for (var r = 0, a = t.visits.length - 1; r < a; ++r) n.push(t.visits[r]);
                        for (var r = 0, a = e.length; r < a; ++r) n.push(e[r]);
                        n.sort((function(e, t) {
                            var i = e.startDate - t.startDate;
                            if (0 != i) return i;
                            i = e.index - t.index;
                            return i
                        }));
                        var o = null;
                        var s = null;
                        for (var r = 0, a = n.length; r < a; r++) {
                            var l = n[r];
                            var u = l.visitorCode;
                            var d = l.index;
                            if (u != o || d != s) t.addVisit(l);
                            o = u;
                            s = d
                        }
                        t.addVisit(i)
                    }
                };
                this.obtainKeyPageIsVisited = function(e) {
                    for (var i = 0, n = t.visits.length; i < n; ++i)
                        if (t.visits[i].obtainKeyPageIsVisited(e)) return !0;
                    return !1
                };
                this.obtainKeyWordIsSearched = function(e) {
                    for (var i = 0, n = t.visits.length; i < n; ++i)
                        if (t.visits[i].obtainKeyWordIsSearched(e)) return !0;
                    return !1
                };
                this.obtainInterestIsActive = function(e) {
                    for (var i = 0, n = t.visits.length; i < n; ++i)
                        if (t.visits[i].obtainInterestIsActive(e, null)) return !0;
                    return !1
                };
                this.obtainReferrerIsPresent = function(e) {
                    for (var i = 0, n = t.visits.length; i < n; ++i)
                        if (t.visits[i].obtainReferrerIsPresent(e)) return !0;
                    return !1
                };
                this.obtainLastVisitWithFreshActiveInterest = function(e) {
                    for (var i = t.visits.length - 1; i >= 0; --i) {
                        var n = t.visits[i];
                        if (n.obtainInterestIsActive(e, !0)) return n
                    }
                    return null
                };
                this.obtainNumberConversions = function(e) {
                    var i = 0;
                    for (var n = t.visits.length - 1; n >= 0; --n) i += t.visits[n].obtainNumberConversions(e);
                    return i
                };
                this.obtainActionNumberActivations = function(e, i, n, r, a, o, s, l) {
                    var u = l ? "obtainExperimentNumberActivations" : "obtainPersonalizationNumberActivations";
                    var d = Kameleoon.Internals.runtime.Visitor.visits.length;
                    var m = 0;
                    if (d > 0) {
                        if (a) {
                            var v = Kameleoon.Internals.runtime.Visitor.visits[d - 1][u](e, n, r);
                            m += s ? v > 0 ? 1 : 0 : v
                        }
                        if (o)
                            for (var c = 0, f = d - 1; c < f; ++c) {
                                var h = t.visits[c][u](e, n, r);
                                m += s ? h > 0 ? 1 : 0 : h
                            }
                    }
                    return m
                };
                this.obtainPageNumberViews = function(e, i, n, r, a, o) {
                    var s = t.visits.length;
                    var l = 0;
                    if (s > 0) {
                        if (a) l += t.visits[s - 1].obtainPageNumberViews(e, i, n, r);
                        if (o)
                            for (var u = 0, d = s - 1; u < d; ++u) l += t.visits[u].obtainPageNumberViews(e, i, n, r)
                    }
                    return l
                };
                this.obtainTimeSincePreviousVisit = function() {
                    var e = 0;
                    if (t.visits.length > 1) {
                        e = t.currentVisit.startDate - t.visits.slice(-2)[0].timeLastActivity;
                        e = Math.max(e, Kameleoon.Internals.runtime.Gatherer.configuration.maxVisitIdleDuration)
                    }
                    return e
                };
                this.obtainVisitorCode = function(i) {
                    var n = !1;
                    var r = !1;
                    var a;
                    var o = !1;
                    if (Kameleoon.Internals.runtime.incomingStoredData) a = Kameleoon.Internals.runtime.incomingStoredData.kameleoonVisitorCode;
                    else a = Kameleoon.Utils.readLocalData("kameleoonVisitorCode", "LS");
                    var s = Kameleoon.Utils.readLocalData("kameleoonVisitorCode", "COOKIE");
                    if (s) {
                        if (-1 != s.indexOf("_js_")) o = !0;
                        s = s.replace("_js_", "")
                    }
                    a = a || s;
                    if (i || null == a) {
                        a = Kameleoon.Utils.obtainRandomString(e.VISITOR_CODE_LENGTH, Analyst.CODE_ALPHABET);
                        n = !0;
                        r = !0
                    }
                    Kameleoon.Utils.createLocalData("kameleoonVisitorCode", a, Utils.MAX_STORAGE_DAYS, null, "LS");
                    if (a != s || o) {
                        Kameleoon.Utils.createLocalData("kameleoonVisitorCode", "_js_" + a, Utils.MAX_STORAGE_DAYS, null, "COOKIE");
                        if (a != s) r = !0
                    }
                    t.visitorCode = a;
                    return n
                };
                this.obtainVisitorFromStoredData = function() {
                    return Kameleoon.Internals.runtime.storedData.Visitor
                };
                this.saveToStoredData = function() {
                    t.saveFieldToStoredData("visits", t.visits);
                    t.saveFieldToStoredData("totalVisits", t.totalVisits);
                    t.saveFieldToStoredData("timeStartedEldestVisit", t.timeStartedEldestVisit)
                };
                this.updateCurrentVisit = function() {};
                this.updateFromStoredData = function(e, i, n) {
                    var r = !1;
                    var a = t.obtainVisitorFromStoredData();
                    var o = a.visits;
                    if (!t.visitorCode) {
                        var s = t.obtainVisitorCode(n);
                        if (s) n = !0
                    }
                    if (o) {
                        var l = o.slice(-1)[0].visitorCode;
                        if (l != t.visitorCode) {
                            var u = Kameleoon.Utils.readLocalData("kameleoonVisitorCode", "LS");
                            if (u == l || !Kameleoon.Internals.runtime.Consent.hasGlobalConsent()) {
                                t.visitorCode = l;
                                try {
                                    delete Kameleoon.Internals.runtime.localDataMap.COOKIE.kameleoonVisitorCode;
                                    delete Kameleoon.Internals.runtime.localDataMap.LS.kameleoonVisitorCode
                                } catch (e) {}
                            } else if (u == t.visitorCode) n = !0
                        }
                    }
                    if (n || e) {
                        i = !0;
                        if (n) t.totalVisits = 0
                    }
                    t.visits = [];
                    if (!n && o) {
                        o.forEach((function(e) {
                            t.addVisit(new Visit(e))
                        }));
                        t.totalVisits = a.totalVisits;
                        t.timeStartedEldestVisit = a.timeStartedEldestVisit
                    }
                    var d = !1;
                    if (i || !t.currentVisit || t.currentVisit.isVisitFinished()) {
                        var m = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "startsOfVisitForCurrentPage");
                        Kameleoon.Internals.runtime.storedData.saveField("Gatherer", "startsOfVisitForCurrentPage", m + 1);
                        Kameleoon.Internals.runtime.Gatherer.startOfVisit = r = !0;
                        Kameleoon.Internals.runtime.storedData.resetForStartOfVisit();
                        Kameleoon.Internals.runtime.storedData.saveField("Runtime", "landingPageTitle", document.title);
                        Kameleoon.Internals.runtime.storedData.saveField("Runtime", "firstReferrerHref", Kameleoon.Gatherer.Referrer.obtainCorrected(!0) || null);
                        Kameleoon.Internals.runtime.storedData.saveField("Runtime", "firstReferrers", Kameleoon.Gatherer.Referrer.obtainIndexes(!0) || [null]);
                        Kameleoon.Internals.runtime.storedData.saveField("Runtime", "landingPages", Kameleoon.Gatherer.KeyPage.obtainIndexes() || [null]);
                        var v = void 0;
                        if (!t.currentVisit || n) v = 0;
                        else v = t.currentVisit.index + 1;
                        t.addVisit(new Visit({
                            visitorCode: t.visitorCode,
                            startDate: (new Date).getTime(),
                            index: v,
                            landingPageURL: Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL(),
                            Device: {
                                browser: Kameleoon.Gatherer.Browser.obtainIndex(),
                                browserName: Kameleoon.Gatherer.Browser.obtain(),
                                browserVersion: Kameleoon.Internals.runtime.Device.browserVersion,
                                os: Kameleoon.Gatherer.OperatingSystem.obtainIndex(),
                                osName: Kameleoon.Gatherer.OperatingSystem.obtain(),
                                screenHeight: Kameleoon.Internals.runtime.Device.screenHeight,
                                screenWidth: Kameleoon.Internals.runtime.Device.screenWidth,
                                timeZone: Kameleoon.Gatherer.TimeZone.obtainId(),
                                type: Kameleoon.Internals.runtime.Device.type,
                                windowHeight: Kameleoon.Internals.runtime.Device.windowHeight,
                                windowWidth: Kameleoon.Internals.runtime.Device.windowWidth
                            },
                            locale: Kameleoon.Gatherer.Language.obtainLocaleTag()
                        }));
                        d = !0
                    }
                    t.saveToStoredData();
                    Kameleoon.Internals.runtime.storedData.save(d)
                };
                this.updateAndTrackInfluences = function() {
                    if (Kameleoon.Internals.runtime.Gatherer.startOfVisit && t.visits.length > 1) {
                        var e = {
                            experiments: {},
                            personalizations: {}
                        };
                        t.visits.forEach((function(t) {
                            if (t.experimentInfluences)
                                for (var i in t.experimentInfluences) e.experiments[i] = t.experimentInfluences[i];
                            if (t.personalizationInfluences)
                                for (var i in t.personalizationInfluences) e.personalizations[i] = t.personalizationInfluences[i]
                        }));
                        var i = function(e) {
                            for (var i in e) {
                                if ("string" == typeof e[i][0]) e[i][0] = parseInt(e[i][0]);
                                e[i][1] -= t.currentVisit.startDate - t.visits.slice(-2)[0].startDate;
                                if (e[i][1] < 0 || "-1" == i || null == e[i][0] || "null" == e[i][0]) delete e[i]
                            }
                            return e
                        };
                        t.currentVisit.experimentInfluences = i(e.experiments);
                        t.currentVisit.personalizationInfluences = i(e.personalizations)
                    }
                };
                this.obtainProductData = function(e, t, i, n) {
                    var r = "https://api-product.".concat(Kameleoon.Internals.configuration.DOMAIN, "/").concat(e, "?siteCode=").concat(Kameleoon.Internals.configuration.siteCode);
                    i.eans = encodeURIComponent(JSON.stringify(t instanceof Array ? t : [t]));
                    for (var a in i) r += "&" + "".concat(a, "=").concat(i[a]);
                    Kameleoon.Utils.performBeaconServerCall(r, (function(e) {
                        if (4 === e.readyState && 200 === e.status) n(JSON.parse(e.response || "{}"))
                    }), (function(e) {
                        console.error(e)
                    }));
                };
                this.visits = [];
                this.currentVisit = null;
                this.totalVisits = 0;
                this.updateFromStoredData(!1)
            }
            e.prototype.saveFieldToStoredData = function(e, t) {
                Kameleoon.Internals.runtime.storedData.Visitor[e] = t
            };
            e.VISITOR_CODE_LENGTH = 16;
            e.INFLUENCE_DELAY = 1e3 * 60 * 60 * 24 * 7;
            return e
        }();
        try {
            window.Kameleoon = new KameleoonEngine
        } catch (o) {
            console.log(o)
        }
        Kameleoon.Internals = {
            "configuration": {
                "API_HOST_NAME": "api",
                "APP_HOST_NAME": "app",
                "BACK_OFFICE_HOST_NAME": "old",
                "EDITOR_HOST_NAME": "editor",
                "DOMAIN": "kameleoon.com",
                "WIDE_DOMAIN": "kameleoon.eu",
                "GUI_ESTIMATED_LOADING_TIME": 3000,
                "IMAGE_PATH": "https://q8qxwhag8x.kameleoon.eu/images/",
                "PROXY_HOST_NAME": "proxy",
                "QOOXDOO_ESTIMATED_LOADING_TIME": 2000,
                "SERVER_CALL_ESTIMATED_LOADING_TIME": 500,
                "STATIC_DIRECT_HOST_NAME": "static-direct",
                "STATIC_HOST_NAME": "static",
                "VISITOR_DOMAIN": "kameleoon.eu",
                "environment": "PRODUCTION",
                "staticURL": "//static.kameleoon.eu/",
                "maxNumberLocalVisits": 25,
                "memberCode": "0",
                "siteCode": "q8qxwhag8x",
                "abtestConsent": "OFF",
                "abtestConsentOptout": "RUN",
                "beforeAbtestConsent": "ALL",
                "beforePersonalizationConsent": "ALL",
                "personalizationConsent": "OFF",
                "personalizationConsentOptout": "RUN",
                "personalizationsDeviation": 1,
                "experiments": [{
                    "id": 159116,
                    "name": "15% Off Sticky Banner",
                    "baseURL": "https://openfarmpet.com/reviews",
                    "experimentAction": true,
                    "executeCodeForReference": true,
                    "forcedTechnical": true,
                    "dateModified": 1650567290000,
                    "dateStatusModified": 1650567316000,
                    "goals": [],
                    "deviation": {
                        "0": 0,
                        "744990": 0,
                        "745039": 0,
                        "745087": 0,
                        "745094": 1
                    },
                    "variations": [{
                        "name": "Reference",
                        "id": 0,
                        "deviation": 0,
                        "respoolTime": null
                    }, {
                        "name": "Variation 1",
                        "id": 744990,
                        "deviation": 0,
                        "respoolTime": null
                    }, {
                        "name": "Variation 2",
                        "id": 745039,
                        "deviation": 0,
                        "respoolTime": null
                    }, {
                        "name": "Sticky Banner",
                        "id": 745087,
                        "deviation": 0,
                        "respoolTime": null
                    }, {
                        "name": "Sticky Banner Footer",
                        "id": 745094,
                        "deviation": 1,
                        "respoolTime": null
                    }],
                    "targetingSegmentId": 183604,
                    "attributionWindow": 604800000,
                    "kameleoonTracking": {
                        "mainGoalId": 275780
                    }
                }, {
                    "id": 159447,
                    "name": "jess test",
                    "baseURL": "https://openfarmpet.com",
                    "experimentAction": true,
                    "executeCodeForReference": true,
                    "forcedTechnical": true,
                    "dateModified": 1651092642000,
                    "dateStatusModified": 1651095743000,
                    "goals": [],
                    "deviation": {
                        "0": 0,
                        "746038": 0,
                        "746439": 1
                    },
                    "variations": [{
                        "name": "Reference",
                        "id": 0,
                        "deviation": 0,
                        "respoolTime": null
                    }, {
                        "name": "Variation 1",
                        "id": 746038,
                        "deviation": 0,
                        "respoolTime": null
                    }, {
                        "name": "Variation 2",
                        "id": 746439,
                        "deviation": 1,
                        "respoolTime": null
                    }],
                    "targetingSegmentId": 184104,
                    "attributionWindow": 604800000,
                    "kameleoonTracking": {
                        "mainGoalId": 275780
                    }
                }, {
                    "id": 162198,
                    "name": "Hide Quiz CTA - Main Nav (Desktop)",
                    "baseURL": "https://openfarmpet.com",
                    "experimentAction": true,
                    "executeCodeForReference": true,
                    "forcedTechnical": true,
                    "dateModified": 1654119667000,
                    "dateStatusModified": 1653664593000,
                    "goals": [],
                    "deviation": {
                        "0": 0,
                        "756173": 1
                    },
                    "variations": [{
                        "name": "Reference",
                        "id": 0,
                        "deviation": 0,
                        "respoolTime": null
                    }, {
                        "name": "Variation 1",
                        "id": 756173,
                        "deviation": 1,
                        "respoolTime": null
                    }],
                    "targetingSegmentId": 188093,
                    "attributionWindow": 604800000,
                    "kameleoonTracking": {
                        "mainGoalId": 268588
                    }
                }, {
                    "id": 162203,
                    "name": " Hide Quiz CTA - Main Nav (Mobile)",
                    "baseURL": "https://openfarmpet.com",
                    "experimentAction": true,
                    "executeCodeForReference": true,
                    "forcedTechnical": true,
                    "dateModified": 1654205975000,
                    "dateStatusModified": 1654205829000,
                    "goals": [],
                    "deviation": {
                        "0": 0,
                        "756185": 0,
                        "757271": 1
                    },
                    "variations": [{
                        "name": "Reference",
                        "id": 0,
                        "deviation": 0,
                        "respoolTime": null
                    }, {
                        "name": "Variation 1",
                        "id": 756185,
                        "deviation": 0,
                        "respoolTime": null
                    }, {
                        "name": "Variation 2",
                        "id": 757271,
                        "deviation": 1,
                        "respoolTime": null
                    }],
                    "targetingSegmentId": 188092,
                    "attributionWindow": 604800000,
                    "kameleoonTracking": {
                        "mainGoalId": 268588
                    }
                }, {
                    "id": 165239,
                    "name": "OF Merch PDPs - hide autoship option",
                    "baseURL": "https://openfarmpet.com/products/pet-parent-shirt/",
                    "experimentAction": true,
                    "executeCodeForReference": true,
                    "forcedTechnical": true,
                    "dateModified": 1660884152000,
                    "dateStatusModified": 1656535565000,
                    "goals": [],
                    "deviation": {
                        "0": 0,
                        "764390": 1
                    },
                    "variations": [{
                        "name": "Reference",
                        "id": 0,
                        "deviation": 0,
                        "respoolTime": null
                    }, {
                        "name": "Variation 1",
                        "id": 764390,
                        "deviation": 1,
                        "respoolTime": null
                    }],
                    "targetingSegmentId": 190678,
                    "attributionWindow": 604800000,
                    "kameleoonTracking": {
                        "mainGoalId": 268588
                    }
                }, {
                    "id": 165351,
                    "name": "OF Merch hide authoship 2 ",
                    "baseURL": "https://openfarmpet.com/products/beanie/",
                    "experimentAction": true,
                    "executeCodeForReference": true,
                    "forcedTechnical": true,
                    "dateModified": 1660884042000,
                    "dateStatusModified": 1656596015000,
                    "goals": [],
                    "deviation": {
                        "0": 0,
                        "764795": 1
                    },
                    "variations": [{
                        "name": "Reference",
                        "id": 0,
                        "deviation": 0,
                        "respoolTime": null
                    }, {
                        "name": "Variation 1",
                        "id": 764795,
                        "deviation": 1,
                        "respoolTime": null
                    }],
                    "targetingSegmentId": 190816,
                    "attributionWindow": 604800000,
                    "kameleoonTracking": {
                        "mainGoalId": 268588
                    }
                }, {
                    "id": 169277,
                    "name": "[Kameleoon] A/A Check Recharge subscription",
                    "baseURL": "https://openfarmpet.com",
                    "experimentAction": true,
                    "executeCodeForReference": true,
                    "forcedTechnical": true,
                    "dateModified": 1660832816000,
                    "dateStatusModified": 1660832788000,
                    "goals": [],
                    "deviation": {
                        "0": 0.5,
                        "774700": 0.5
                    },
                    "variations": [{
                        "name": "Reference",
                        "id": 0,
                        "deviation": 0.5,
                        "respoolTime": null
                    }, {
                        "name": "Variation 1",
                        "id": 774700,
                        "deviation": 0.5,
                        "respoolTime": null
                    }],
                    "targetingSegmentId": 194482,
                    "attributionWindow": 604800000,
                    "kameleoonTracking": {
                        "mainGoalId": 283500
                    },
                    "customIntegrations": []
                }, {
                    "id": 169898,
                    "name": "Home Page Hero Copy Test",
                    "baseURL": "https://openfarmpet.com",
                    "experimentAction": true,
                    "executeCodeForReference": true,
                    "forcedTechnical": true,
                    "dateModified": 1661805234000,
                    "dateStatusModified": 1661805130000,
                    "goals": [],
                    "deviation": {
                        "0": 0.2,
                        "776232": 0.2,
                        "776233": 0.2,
                        "776235": 0.2,
                        "776236": 0.2
                    },
                    "variations": [{
                        "name": "Reference",
                        "id": 0,
                        "deviation": 0.2,
                        "respoolTime": null
                    }, {
                        "name": "Variation 1",
                        "id": 776232,
                        "deviation": 0.2,
                        "respoolTime": null
                    }, {
                        "name": "Variation 2",
                        "id": 776233,
                        "deviation": 0.2,
                        "respoolTime": null
                    }, {
                        "name": "Variation 4",
                        "id": 776235,
                        "deviation": 0.2,
                        "respoolTime": null
                    }, {
                        "name": "Variation 3",
                        "id": 776236,
                        "deviation": 0.2,
                        "respoolTime": null
                    }],
                    "targetingSegmentId": 194943,
                    "attributionWindow": 604800000,
                    "kameleoonTracking": {
                        "mainGoalId": 275780
                    }
                }],
                "personalizations": [{
                    "dateCreated": 1660751196000,
                    "dateModified": 1661896969000,
                    "dateStatusModified": 1661875027000,
                    "id": 88916,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Mobile Sticky Banner - Leads Dogs August Promo",
                    "targetingSegmentId": 194130,
                    "mainGoalId": 275780,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 774399,
                        "name": "Variation 1"
                    },
                    "priority": 5,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 275780,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }, {
                    "dateCreated": 1661350568000,
                    "dateModified": 1661896999000,
                    "dateStatusModified": 1661874927000,
                    "id": 89335,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Desktop Sticky Banner - Leads Dog August Promo",
                    "targetingSegmentId": 194131,
                    "mainGoalId": 275780,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 775546,
                        "name": "Variation 1"
                    },
                    "priority": 5,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 275780,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }, {
                    "dateCreated": 1661351787000,
                    "dateModified": 1661897056000,
                    "dateStatusModified": 1661887115000,
                    "id": 89337,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Mobile Sticky Banner - Leads Cat August Promo",
                    "targetingSegmentId": 194134,
                    "mainGoalId": 275780,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 775552,
                        "name": "Variation 1"
                    },
                    "priority": 4,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 275780,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }, {
                    "dateCreated": 1661352061000,
                    "dateModified": 1661897029000,
                    "dateStatusModified": 1661886995000,
                    "id": 89339,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Desktop Sticky Banner - Leads Cat August Promo",
                    "targetingSegmentId": 194135,
                    "mainGoalId": 275780,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 775556,
                        "name": "Variation 1"
                    },
                    "priority": 4,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 275780,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }, {
                    "dateCreated": 1661352303000,
                    "dateModified": 1661896941000,
                    "dateStatusModified": 1661896229000,
                    "id": 89340,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Desktop Sticky Banner Checkout - Leads Both August Promo",
                    "targetingSegmentId": 194820,
                    "mainGoalId": 275780,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 775560,
                        "name": "Variation 1"
                    },
                    "priority": 5,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 275780,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }, {
                    "dateCreated": 1661352784000,
                    "dateModified": 1661896908000,
                    "dateStatusModified": 1661896251000,
                    "id": 89341,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Mobile Sticky Banner Checkout - Leads Both August Promo",
                    "targetingSegmentId": 194821,
                    "mainGoalId": 275780,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 775563,
                        "name": "Variation 1"
                    },
                    "priority": 4,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 275780,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }, {
                    "dateCreated": 1661352907000,
                    "dateModified": 1661897050000,
                    "dateStatusModified": 1661897048000,
                    "id": 89342,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Mobile Sticky Banner - RC Dogs August Promo",
                    "targetingSegmentId": 194132,
                    "mainGoalId": 283500,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 775567,
                        "name": "Variation 1"
                    },
                    "priority": 5,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 283500,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }, {
                    "dateCreated": 1661462289000,
                    "dateModified": 1661897016000,
                    "dateStatusModified": 1661897015000,
                    "id": 89432,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Desktop Sticky Banner - RC Dogs August Promo",
                    "targetingSegmentId": 194133,
                    "mainGoalId": 283500,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 775809,
                        "name": "Variation 1"
                    },
                    "priority": 5,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 283500,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }, {
                    "dateCreated": 1661462761000,
                    "dateModified": 1661897108000,
                    "dateStatusModified": 1661897106000,
                    "id": 89433,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Mobile Sticky Banner - RC Cats August Promo",
                    "targetingSegmentId": 194136,
                    "mainGoalId": 283500,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 775810,
                        "name": "Variation 1"
                    },
                    "priority": 5,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 283500,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }, {
                    "dateCreated": 1661462943000,
                    "dateModified": 1661897080000,
                    "dateStatusModified": 1661897078000,
                    "id": 89434,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Desktop Sticky Banner - RC Cats August Promo",
                    "targetingSegmentId": 194137,
                    "mainGoalId": 283500,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 775812,
                        "name": "Variation 1"
                    },
                    "priority": 5,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 283500,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }, {
                    "dateCreated": 1661524862000,
                    "dateModified": 1661897168000,
                    "dateStatusModified": 1661897166000,
                    "id": 89510,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Desktop Sticky Banner Checkout - RC Both August Promo",
                    "targetingSegmentId": 194822,
                    "mainGoalId": 283500,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 776010,
                        "name": "Variation 1"
                    },
                    "priority": 4,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 283500,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }, {
                    "dateCreated": 1661525267000,
                    "dateModified": 1661897143000,
                    "dateStatusModified": 1661897141000,
                    "id": 89511,
                    "forcedTechnical": true,
                    "goals": [],
                    "name": "Mobile Sticky Banner Checkout - RC Both August Promo",
                    "targetingSegmentId": 194823,
                    "mainGoalId": 283500,
                    "configuration": "TEMPLATE",
                    "associatedVariation": {
                        "id": 776013,
                        "name": "Variation 1"
                    },
                    "priority": 4,
                    "customExpositionRate": 0.9,
                    "personalizationCheckConditionsRule": "ALL_CONDITIONS",
                    "scheduleItem": [],
                    "targetingSegment": null,
                    "attributionWindow": 604800000,
                    "cappingPerVisitorGoalId": 283500,
                    "cappingPerVisitorConvertGoal": true,
                    "expositionFrequencySameVisitorDelaySeconds": 21600,
                    "kameleoonTracking": {
                        "mainGoalId": null
                    }
                }],
                "targetingSegments": [{
                    "id": 183604,
                    "name": "Segment for 15% Off Sticky Banner",
                    "tree": {
                        "targetingCondition": {
                            "type": "PAGE_URL",
                            "disabled": false,
                            "weight": 1,
                            "value": "https\\://openfarmpet\\.com/reviews//?([\\?#].*)?$",
                            "include": true
                        }
                    }
                }, {
                    "id": 184104,
                    "name": "Secret Sale",
                    "tree": {
                        "targetingCondition": {
                            "type": "LANDING_PAGE",
                            "disabled": false,
                            "weight": 1,
                            "value": "(.*)secretsale(.*)",
                            "include": true
                        }
                    }
                }, {
                    "id": 188093,
                    "name": "Hide Quiz CTA - Main Nav (Desktop)",
                    "tree": {
                        "targetingCondition": {
                            "type": "DEVICE_TYPE",
                            "disabled": false,
                            "weight": 1,
                            "value": "DESKTOP",
                            "include": true
                        }
                    }
                }, {
                    "id": 188092,
                    "name": " Hide Quiz CTA - Main Nav (Mobile)-1",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "targetingCondition": {
                                "type": "DEVICE_TYPE",
                                "disabled": false,
                                "weight": 1,
                                "value": "PHONE",
                                "include": true
                            }
                        },
                        "rightChild": {
                            "targetingCondition": {
                                "type": "JS_CODE",
                                "disabled": false,
                                "weight": 1,
                                "value": "if (document.querySelectorAll('.top-level-links-container li:last-of-type') != null && document.querySelectorAll('.top-level-links-container li:last-of-type') != '')\n{\n        return true;\n}\nelse\n{\n        return undefined;\n}",
                                "include": true,
                                "domReady": true
                            }
                        }
                    }
                }, {
                    "id": 190678,
                    "name": "Customers who visit Merch PDPs - apparel",
                    "tree": {
                        "orOperator": true,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "targetingCondition": {
                                "type": "PAGE_URL",
                                "disabled": false,
                                "weight": 1,
                                "value": "(.*)shirt(.*)",
                                "include": true
                            }
                        },
                        "rightChild": {
                            "targetingCondition": {
                                "type": "PAGE_URL",
                                "disabled": false,
                                "weight": 1,
                                "value": "^https\\://openfarmpet\\.com/products/obsessed-hoodie/$",
                                "include": true
                            }
                        }
                    }
                }, {
                    "id": 190816,
                    "name": "Merch PDPs - accessories",
                    "tree": {
                        "orOperator": true,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "targetingCondition": {
                                "type": "PAGE_URL",
                                "disabled": false,
                                "weight": 1,
                                "value": "(.*)beanie(.*)",
                                "include": true
                            }
                        },
                        "rightChild": {
                            "orOperator": true,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "targetingCondition": {
                                    "type": "PAGE_URL",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": "(.*)water-bottle(.*)",
                                    "include": true
                                }
                            },
                            "rightChild": {
                                "targetingCondition": {
                                    "type": "PAGE_URL",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": "(.*)tumbler(.*)",
                                    "include": true
                                }
                            }
                        }
                    }
                }, {
                    "id": 194482,
                    "name": "Segment for [Kameleoon] A/A Check Recharge subscription",
                    "tree": null
                }, {
                    "id": 194943,
                    "name": "Segment for Home Page Hero Copy Test",
                    "tree": {
                        "targetingCondition": {
                            "type": "PAGE_URL",
                            "disabled": false,
                            "weight": 1,
                            "value": "https\\://openfarmpet\\.com//?([\\?#].*)?$",
                            "include": true
                        }
                    }
                }, {
                    "id": 194130,
                    "name": "Leads_StickyBanner_Dog_Mobile_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 5,
                                        "value": "(.*)https\\://openfarmpet\\.com/(.*)",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)checkout\\.(.*)",
                                        "include": false
                                    }
                                }
                            },
                            "rightChild": {
                                "targetingCondition": {
                                    "type": "DEVICE_TYPE",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": "PHONE",
                                    "include": true
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_Subscribers_April2022_Cat(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_Subscribers_April2022_All(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-Auto-gift(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off(.*)",
                                                    "include": false
                                                }
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "orOperator": false,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                                        "include": false
                                                    }
                                                },
                                                "rightChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                                        "include": false
                                                    }
                                                }
                                            },
                                            "rightChild": {
                                                "orOperator": false,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "orOperator": false,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                                            "include": false
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                                            "include": false
                                                        }
                                                    }
                                                },
                                                "rightChild": {
                                                    "orOperator": false,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "orOperator": false,
                                                        "orGuiLevel": 1,
                                                        "leftChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)attentive-SMS-Leads-25%off-cat(.*)",
                                                                "include": false
                                                            }
                                                        },
                                                        "rightChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)CA_Email_Segment_Leads_April2022_Cat(.*)",
                                                                "include": false
                                                            }
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "orOperator": false,
                                                        "orGuiLevel": 1,
                                                        "leftChild": {
                                                            "orOperator": false,
                                                            "orGuiLevel": 1,
                                                            "leftChild": {
                                                                "targetingCondition": {
                                                                    "type": "LANDING_PAGE",
                                                                    "disabled": false,
                                                                    "weight": 1,
                                                                    "value": "(.*)US_Email_Segment_Leads_April2022_Cat(.*)",
                                                                    "include": false
                                                                }
                                                            },
                                                            "rightChild": {
                                                                "targetingCondition": {
                                                                    "type": "LANDING_PAGE",
                                                                    "disabled": false,
                                                                    "weight": 1,
                                                                    "value": "(.*)campaign\\=cat(.*)",
                                                                    "include": false
                                                                }
                                                            }
                                                        },
                                                        "rightChild": {
                                                            "orOperator": false,
                                                            "orGuiLevel": 1,
                                                            "leftChild": {
                                                                "targetingCondition": {
                                                                    "type": "LANDING_PAGE",
                                                                    "disabled": false,
                                                                    "weight": 1,
                                                                    "value": "(.*)CA_Email_Segment_Subscribers_April2022_All(.*)",
                                                                    "include": false
                                                                }
                                                            },
                                                            "rightChild": {
                                                                "targetingCondition": {
                                                                    "type": "LANDING_PAGE",
                                                                    "disabled": false,
                                                                    "weight": 1,
                                                                    "value": "(.*)CA_Email_Segment_Subscribers_April2022_Cat(.*)",
                                                                    "include": false
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "NEW_VISITORS",
                                            "disabled": false,
                                            "weight": 4,
                                            "value": "NEW",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_Leads_April2022_All(.*)",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": true,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)CA_Email_Segment_Leads_April2022_All(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "orOperator": true,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)attentive-SMS-Leads-25%off-dog(.*)",
                                                        "include": true
                                                    }
                                                },
                                                "rightChild": {
                                                    "orOperator": true,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)campaign\\=dog(.*)",
                                                            "include": true
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "orOperator": true,
                                                        "orGuiLevel": 1,
                                                        "leftChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)US_Email_Segment_L180_Leads_April2022_All(.*)",
                                                                "include": true
                                                            }
                                                        },
                                                        "rightChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)CA_Email_Segment_L180_Leads_April2022_All(.*)",
                                                                "include": true
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 0,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "CONVERSIONS",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": 275916,
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "JS_CODE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.shopify || window._customer.shopify && window._customer.shopify.orders_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                            "include": true,
                                            "async": true
                                        }
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "JS_CODE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.recharge || window._customer.recharge && window._customer.recharge.subscriptions_total_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                        "include": true,
                                        "async": true
                                    }
                                }
                            }
                        }
                    }
                }, {
                    "id": 194131,
                    "name": "Leads_StickyBanner_Dog_Desktop_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)https\\://openfarmpet\\.com/(.*)",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)checkout\\.(.*)",
                                        "include": false
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)campaign\\=cat(.*)",
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                            "include": false
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off(.*)",
                                                    "include": false
                                                }
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "orOperator": false,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)attentive-SMS-Auto-gift(.*)",
                                                        "include": false
                                                    }
                                                },
                                                "rightChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)US_Email_Segment_Subscribers_April2022_All(.*)",
                                                        "include": false
                                                    }
                                                }
                                            },
                                            "rightChild": {
                                                "orOperator": false,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "orOperator": false,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)CA_Email_Segment_Subscribers_April2022_All(.*)",
                                                            "include": false
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)US_Email_Segment_Subscribers_April2022_Cat(.*)",
                                                            "include": false
                                                        }
                                                    }
                                                },
                                                "rightChild": {
                                                    "orOperator": false,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "orOperator": false,
                                                        "orGuiLevel": 1,
                                                        "leftChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)CA_Email_Segment_Subscribers_April2022_Cat(.*)",
                                                                "include": false
                                                            }
                                                        },
                                                        "rightChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)CA_Email_Segment_Leads_April2022_Cat(.*)",
                                                                "include": false
                                                            }
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "orOperator": false,
                                                        "orGuiLevel": 1,
                                                        "leftChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)US_Email_Segment_Leads_April2022_Cat(.*)",
                                                                "include": false
                                                            }
                                                        },
                                                        "rightChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)attentive-SMS-Leads-25%off-cat(.*)",
                                                                "include": false
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "DEVICE_TYPE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "DESKTOP",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "NEW_VISITORS",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "NEW",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)campaign\\=dog(.*)",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": true,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)US_Email_Segment_Leads_April2022_All(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "orOperator": true,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)CA_Email_Segment_Leads_April2022_All(.*)",
                                                        "include": true
                                                    }
                                                },
                                                "rightChild": {
                                                    "orOperator": true,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)US_Email_Segment_L180_Leads_April2022_All(.*)",
                                                            "include": true
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "orOperator": true,
                                                        "orGuiLevel": 1,
                                                        "leftChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)CA_Email_Segment_L180_Leads_April2022_All(.*)",
                                                                "include": true
                                                            }
                                                        },
                                                        "rightChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)attentive-SMS-Leads-25%off-dog(.*)",
                                                                "include": true
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 0,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "CONVERSIONS",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": 275916,
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "JS_CODE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.shopify || window._customer.shopify && window._customer.shopify.orders_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                            "include": true,
                                            "async": true
                                        }
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "JS_CODE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.recharge || window._customer.recharge && window._customer.recharge.subscriptions_total_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                        "include": true,
                                        "async": true
                                    }
                                }
                            }
                        }
                    }
                }, {
                    "id": 194134,
                    "name": "Leads_StickyBanner_Cat_Mobile_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)https\\://openfarmpet\\.com/(.*)",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)checkout\\.(.*)",
                                        "include": false
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                            "include": false
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-Auto-gift(.*)",
                                                    "include": false
                                                }
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "orOperator": false,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)US_Email_Segment_Subscribers_April2022_Cat(.*)",
                                                        "include": false
                                                    }
                                                },
                                                "rightChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)US_Email_Segment_Subscribers_April2022_All(.*)",
                                                        "include": false
                                                    }
                                                }
                                            },
                                            "rightChild": {
                                                "orOperator": false,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "orOperator": false,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)CA_Email_Segment_Subscribers_April2022_All(.*)",
                                                            "include": false
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)CA_Email_Segment_Subscribers_April2022_Cat(.*)",
                                                            "include": false
                                                        }
                                                    }
                                                },
                                                "rightChild": {
                                                    "orOperator": false,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)attentive-SMS-Leads-25%off-dog(.*)",
                                                            "include": false
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)campaign\\=dog(.*)",
                                                            "include": false
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "DEVICE_TYPE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "PHONE",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "NEW_VISITORS",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "NEW",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)campaign\\=cat(.*)",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": true,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)US_Email_Segment_Leads_April2022_Cat(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "orOperator": true,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)CA_Email_Segment_Leads_April2022_Cat(.*)",
                                                        "include": true
                                                    }
                                                },
                                                "rightChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)attentive-SMS-Leads-25%off-cat(.*)",
                                                        "include": true
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 0,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "CONVERSIONS",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": 275916,
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "JS_CODE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.shopify || window._customer.shopify && window._customer.shopify.orders_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                            "include": true,
                                            "async": true
                                        }
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "JS_CODE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.recharge || window._customer.recharge && window._customer.recharge.subscriptions_total_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                        "include": true,
                                        "async": true
                                    }
                                }
                            }
                        }
                    }
                }, {
                    "id": 194135,
                    "name": "Leads_StickyBanner_Cat_Desktop_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)https\\://openfarmpet\\.com/(.*)",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)checkout\\.(.*)",
                                        "include": false
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                            "include": false
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)attentive-SMS-RC-20%off(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)attentive-SMS-Auto-gift(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)US_Email_Segment_Subscribers_April2022_All(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)CA_Email_Segment_Subscribers_April2022_All(.*)",
                                                    "include": false
                                                }
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "orOperator": false,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)US_Email_Segment_Subscribers_April2022_Cat(.*)",
                                                        "include": false
                                                    }
                                                },
                                                "rightChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)CA_Email_Segment_Subscribers_April2022_Cat(.*)",
                                                        "include": false
                                                    }
                                                }
                                            },
                                            "rightChild": {
                                                "orOperator": false,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "orOperator": false,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                                            "include": false
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                                            "include": false
                                                        }
                                                    }
                                                },
                                                "rightChild": {
                                                    "orOperator": false,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)campaign\\=dog(.*)",
                                                            "include": false
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)attentive-SMS-Leads-25%off-dog(.*)",
                                                            "include": false
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "DEVICE_TYPE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "DESKTOP",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "NEW_VISITORS",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "NEW",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)attentive-SMS-Leads-25%off-cat(.*)",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": true,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)campaign\\=cat(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "orOperator": true,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)CA_Email_Segment_Leads_April2022_Cat(.*)",
                                                        "include": true
                                                    }
                                                },
                                                "rightChild": {
                                                    "orOperator": true,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)US_Email_Segment_Leads_April2022_Cat(.*)",
                                                            "include": true
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "orOperator": true,
                                                        "orGuiLevel": 1,
                                                        "leftChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)US_Email_Segment_L180_Leads_April2022_Cat(.*)",
                                                                "include": true
                                                            }
                                                        },
                                                        "rightChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)CA_Email_Segment_L180_Leads_April2022_Cat(.*)",
                                                                "include": true
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 0,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "CONVERSIONS",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": 275916,
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "JS_CODE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.shopify || window._customer.shopify && window._customer.shopify.orders_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                            "include": true,
                                            "async": true
                                        }
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "JS_CODE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.recharge || window._customer.recharge && window._customer.recharge.subscriptions_total_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                        "include": true,
                                        "async": true
                                    }
                                }
                            }
                        }
                    }
                }, {
                    "id": 194820,
                    "name": "Leads_StickyBanner_Checkout_Desktop_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "targetingCondition": {
                                    "type": "PAGE_URL",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": "(.*)checkout\\.(.*)",
                                    "include": true
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022(.*)",
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022(.*)",
                                            "include": false
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)attentive-SMS-RC-20%off(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)attentive-SMS-Auto-gift(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "DEVICE_TYPE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "DESKTOP",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)campaign\\=dog(.*)",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "NEW_VISITORS",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "NEW",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": true,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)US_Email_Segment_Leads_April2022(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "orOperator": true,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)CA_Email_Segment_Leads_April2022(.*)",
                                                        "include": true
                                                    }
                                                },
                                                "rightChild": {
                                                    "orOperator": true,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)US_Email_Segment_L180_Leads_April2022(.*)",
                                                            "include": true
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "orOperator": true,
                                                        "orGuiLevel": 1,
                                                        "leftChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)CA_Email_Segment_L180_Leads_April2022(.*)",
                                                                "include": true
                                                            }
                                                        },
                                                        "rightChild": {
                                                            "orOperator": true,
                                                            "orGuiLevel": 1,
                                                            "leftChild": {
                                                                "targetingCondition": {
                                                                    "type": "LANDING_PAGE",
                                                                    "disabled": false,
                                                                    "weight": 1,
                                                                    "value": "(.*)attentive-SMS-Leads-25%off(.*)",
                                                                    "include": true
                                                                }
                                                            },
                                                            "rightChild": {
                                                                "targetingCondition": {
                                                                    "type": "LANDING_PAGE",
                                                                    "disabled": false,
                                                                    "weight": 1,
                                                                    "value": "(.*)campaign\\=cat(.*)",
                                                                    "include": true
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 0,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "CONVERSIONS",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": 275916,
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "JS_CODE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.shopify || window._customer.shopify && window._customer.shopify.orders_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                            "include": true,
                                            "async": true
                                        }
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "JS_CODE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.recharge || window._customer.recharge && window._customer.recharge.subscriptions_total_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                        "include": true,
                                        "async": true
                                    }
                                }
                            }
                        }
                    }
                }, {
                    "id": 194821,
                    "name": "Leads_StickyBanner_Checkout_Mobile_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "targetingCondition": {
                                    "type": "PAGE_URL",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": "(.*)checkout\\.(.*)",
                                    "include": true
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022(.*)",
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022(.*)",
                                            "include": false
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)attentive-SMS-RC-20%off(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)attentive-SMS-Auto-gift(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "DEVICE_TYPE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "PHONE",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "NEW_VISITORS",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "NEW",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)campaign\\=dog(.*)",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": true,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)US_Email_Segment_Leads_April2022(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "orOperator": true,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                    "targetingCondition": {
                                                        "type": "LANDING_PAGE",
                                                        "disabled": false,
                                                        "weight": 1,
                                                        "value": "(.*)CA_Email_Segment_Leads_April2022(.*)",
                                                        "include": true
                                                    }
                                                },
                                                "rightChild": {
                                                    "orOperator": true,
                                                    "orGuiLevel": 1,
                                                    "leftChild": {
                                                        "targetingCondition": {
                                                            "type": "LANDING_PAGE",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)US_Email_Segment_L180_Leads_April2022(.*)",
                                                            "include": true
                                                        }
                                                    },
                                                    "rightChild": {
                                                        "orOperator": true,
                                                        "orGuiLevel": 1,
                                                        "leftChild": {
                                                            "targetingCondition": {
                                                                "type": "LANDING_PAGE",
                                                                "disabled": false,
                                                                "weight": 1,
                                                                "value": "(.*)CA_Email_Segment_L180_Leads_April2022(.*)",
                                                                "include": true
                                                            }
                                                        },
                                                        "rightChild": {
                                                            "orOperator": true,
                                                            "orGuiLevel": 1,
                                                            "leftChild": {
                                                                "targetingCondition": {
                                                                    "type": "LANDING_PAGE",
                                                                    "disabled": false,
                                                                    "weight": 1,
                                                                    "value": "(.*)attentive-SMS-Leads-25%off(.*)",
                                                                    "include": true
                                                                }
                                                            },
                                                            "rightChild": {
                                                                "targetingCondition": {
                                                                    "type": "LANDING_PAGE",
                                                                    "disabled": false,
                                                                    "weight": 1,
                                                                    "value": "(.*)campaign\\=cat(.*)",
                                                                    "include": true
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "CONVERSIONS",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": 275916,
                                        "include": false
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "JS_CODE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.shopify || window._customer.shopify && window._customer.shopify.orders_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                            "include": true,
                                            "async": true
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "JS_CODE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "Kameleoon.API.Core.runWhenConditionTrue(() => {\n    return window._customer\n}, () => {\n    setTimeout(() => {\n        if (!window._customer.recharge || window._customer.recharge && window._customer.recharge.subscriptions_total_count == 0) setTargeting(true)\n        else setTargeting(false)\n    }, 3000)\n})",
                                            "include": true,
                                            "async": true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, {
                    "id": 194132,
                    "name": "RC_StickyBanner_Dog_Mobile_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)https\\://openfarmpet\\.com/(.*)",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)checkout\\.(.*)",
                                        "include": false
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                            "include": false
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_Leads_April2022(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_Leads_April2022(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)US_Email_Segment_Subscribers_April2022(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)CA_Email_Segment_Subscribers_April2022(.*)",
                                                    "include": false
                                                }
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off-cat(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-Leads-25%off(.*)",
                                                    "include": false
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "DEVICE_TYPE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "PHONE",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": true,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off-dog(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "JS_CODE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "if (window._customer && window._customer.shopify && window._customer.shopify.id)\n    return true;",
                                                    "include": true,
                                                    "domReady": true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "targetingCondition": {
                                    "type": "CONVERSIONS",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": 275916,
                                    "include": false
                                }
                            }
                        }
                    }
                }, {
                    "id": 194133,
                    "name": "RC_StickyBanner_Dog_Desktop_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)https\\://openfarmpet\\.com/(.*)",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)checkout\\.(.*)",
                                        "include": false
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                            "include": false
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_Leads_April2022(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_Leads_April2022(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)US_Email_Segment_Subscribers_April2022(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)CA_Email_Segment_Subscribers_April2022(.*)",
                                                    "include": false
                                                }
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-Leads-25%off(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off-cat(.*)",
                                                    "include": false
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "DEVICE_TYPE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "DESKTOP",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": true,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off-dog(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "JS_CODE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "if (window._customer && window._customer.shopify && window._customer.shopify.id)\n    return true;",
                                                    "include": true,
                                                    "domReady": true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "targetingCondition": {
                                    "type": "CONVERSIONS",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": 275916,
                                    "include": false
                                }
                            }
                        }
                    }
                }, {
                    "id": 194136,
                    "name": "RC_StickyBanner_Cat_Mobile_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)https\\://openfarmpet\\.com/(.*)",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)checkout\\.(.*)",
                                        "include": false
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_Leads_April2022(.*)",
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)CA_Email_Segment_Leads_April2022(.*)",
                                            "include": false
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                                    "include": false
                                                }
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off-dog(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-Leads-25%off(.*)",
                                                    "include": false
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "DEVICE_TYPE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "PHONE",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": true,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off-cat(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "JS_CODE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "if (window._customer && window._customer.shopify && window._customer.shopify.id)\n    return true;",
                                                    "include": true,
                                                    "domReady": true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "targetingCondition": {
                                    "type": "CONVERSIONS",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": 275916,
                                    "include": false
                                }
                            }
                        }
                    }
                }, {
                    "id": 194137,
                    "name": "RC_StickyBanner_Cat_Desktop_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)https\\://openfarmpet\\.com/(.*)",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "targetingCondition": {
                                        "type": "PAGE_URL",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "(.*)checkout\\.(.*)",
                                        "include": false
                                    }
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_Leads_April2022(.*)",
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)CA_Email_Segment_Leads_April2022(.*)",
                                            "include": false
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_All(.*)",
                                                    "include": false
                                                }
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-Leads-25%off(.*)",
                                                    "include": false
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off-dog(.*)",
                                                    "include": false
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "DEVICE_TYPE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "DESKTOP",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022_Cat(.*)",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": true,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off-cat(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "JS_CODE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "if (window._customer && window._customer.shopify && window._customer.shopify.id)\n    return true;",
                                                    "include": true,
                                                    "domReady": true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "targetingCondition": {
                                    "type": "CONVERSIONS",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": 275916,
                                    "include": false
                                }
                            }
                        }
                    }
                }, {
                    "id": 194822,
                    "name": "RC_StickyBanner_Checkout_Desktop_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "targetingCondition": {
                                    "type": "PAGE_URL",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": "(.*)checkout\\.(.*)",
                                    "include": true
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_Leads_April2022(.*)",
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)CA_Email_Segment_Leads_April2022(.*)",
                                            "include": false
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)attentive-SMS-Leads-25%off(.*)",
                                            "include": false
                                        }
                                    }
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "DEVICE_TYPE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "DESKTOP",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022(.*)",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022(.*)",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": true,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "JS_CODE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "if (window._customer && window._customer.shopify && window._customer.shopify.id)\n    return true;",
                                                    "include": true,
                                                    "domReady": true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "targetingCondition": {
                                    "type": "CONVERSIONS",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": 275916,
                                    "include": false
                                }
                            }
                        }
                    }
                }, {
                    "id": 194823,
                    "name": "RC_StickyBanner_Checkout_Mobile_AugustPromo",
                    "tree": {
                        "orOperator": false,
                        "orGuiLevel": 0,
                        "leftChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "targetingCondition": {
                                    "type": "PAGE_URL",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": "(.*)checkout\\.(.*)",
                                    "include": true
                                }
                            },
                            "rightChild": {
                                "orOperator": false,
                                "orGuiLevel": 1,
                                "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_Leads_April2022(.*)",
                                            "include": false
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)CA_Email_Segment_Leads_April2022(.*)",
                                            "include": false
                                        }
                                    }
                                },
                                "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "orOperator": false,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)US_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        },
                                        "rightChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_Subscribers_April2022(.*)",
                                                "include": false
                                            }
                                        }
                                    },
                                    "rightChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)attentive-SMS-Leads-25%off(.*)",
                                            "include": false
                                        }
                                    }
                                }
                            }
                        },
                        "rightChild": {
                            "orOperator": false,
                            "orGuiLevel": 0,
                            "leftChild": {
                                "orOperator": false,
                                "orGuiLevel": 0,
                                "leftChild": {
                                    "targetingCondition": {
                                        "type": "DEVICE_TYPE",
                                        "disabled": false,
                                        "weight": 1,
                                        "value": "PHONE",
                                        "include": true
                                    }
                                },
                                "rightChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                        "targetingCondition": {
                                            "type": "LANDING_PAGE",
                                            "disabled": false,
                                            "weight": 1,
                                            "value": "(.*)US_Email_Segment_OneTimePurchasers_April2022(.*)",
                                            "include": true
                                        }
                                    },
                                    "rightChild": {
                                        "orOperator": true,
                                        "orGuiLevel": 1,
                                        "leftChild": {
                                            "targetingCondition": {
                                                "type": "LANDING_PAGE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)CA_Email_Segment_OneTimePurchasers_April2022(.*)",
                                                "include": true
                                            }
                                        },
                                        "rightChild": {
                                            "orOperator": false,
                                            "orGuiLevel": 1,
                                            "leftChild": {
                                                "targetingCondition": {
                                                    "type": "LANDING_PAGE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "(.*)attentive-SMS-RC-20%off(.*)",
                                                    "include": true
                                                }
                                            },
                                            "rightChild": {
                                                "targetingCondition": {
                                                    "type": "JS_CODE",
                                                    "disabled": false,
                                                    "weight": 1,
                                                    "value": "if (window._customer && window._customer.shopify && window._customer.shopify.id)\n    return true;",
                                                    "include": true,
                                                    "domReady": true
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            "rightChild": {
                                "targetingCondition": {
                                    "type": "CONVERSIONS",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": 275916,
                                    "include": false
                                }
                            }
                        }
                    }
                }],
                "variations": [{
                    "name": "Variation 1",
                    "id": 744990,
                    "css": "",
                    "elementSets": []
                }, {
                    "name": "Variation 2",
                    "id": 745039,
                    "css": "",
                    "elementSets": []
                }, {
                    "name": "Sticky Banner",
                    "id": 745087,
                    "css": "#kameleoonScenarioLayerBase745087{position:fixed;top:0}#kameleoonScenarioLayerBase745087.widgetCookieBanner{display:none;position:fixed;left:0;width:100%;background-color:#fff;z-index:2147483647;height:40px}#kameleoonScenarioLayerBase745087.widgetCookieBanner.widgetCookieBanner_show{display:block!important}.widgetCookieBanner_TOP{top:0}.widgetCookieBanner_BOTTOM{bottom:0}.widgetCookieBanner__msg{margin:0 auto;color:#11a54a;padding:10px 0;text-align:center;max-width:600px;font-family:Arial;font-size:14px;line-height:18px;font-weight:700}.widgetCookieBanner__more{color:#fff!important;text-decoration:underline!important;cursor:pointer!important}.widgetCookieBanner__more:hover{color:#fff!important;text-decoration:none!important}.widgetCookieBanner__close{display:block;position:absolute;top:10px;right:20px;width:16px;height:16px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBhoKKwdEq83AAAAAfUlEQVQ4y6WUuxHAIAxDddmBMbx/xRKMwRIvRVIkfKOLO056Bza2JRFkkjZBIhOSCCpQ1giJAlRCZK5YILcdID8PE6RzrJGhOkemylhY3t2L2+zehn0xWmRvb5Av9g4Z2A/9C/NJZtJmWc2PM1vDbD6zve0B8kfUXQLumjkB5SzQrCeS2ocAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDYtMjZUMTA6NDM6MDcrMDI6MDCsnkxNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA2LTI2VDEwOjQzOjA3KzAyOjAw3cP08QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=');background-repeat:no-repeat;background-size:contain;cursor:pointer}",
                    "elementSets": [{
                        "selector": ".widgetCookieBanner__msg",
                        "options": {
                            "htmlContent": "<span style=\"\">Save 15% on your first order with code HELLO15! </span>",
                            "selector": ".widgetCookieBanner__msg"
                        },
                        "currentQuery": null
                    }],
                    "javaScriptCode": {
                        "code": "!function(e,o){var n='<div id=\"'+e+'\" class=\"KameleoonClassNotProcessFixed KameleoonJavaScriptAdded widgetCookieBanner widgetCookieBanner_'+o+'\" ><div class=\"widgetCookieBanner__msg\"><span>Save 15% on your first order with code HELLO15! </span>';if(n+='</div><span class=\"widgetCookieBanner__close\"></span></div>',document.body.insertAdjacentHTML(\"afterbegin\",n),!localStorage.getItem(\"kn_\"+e)){var a=document.querySelector(\"#\"+e),i=a.querySelector(\".widgetCookieBanner__close\");setTimeout((function(){var e,o;o=\"widgetCookieBanner_show\",(e=a).classList?e.classList.add(o):e.className+=\" \"+o}),1e3),i.addEventListener(\"click\",(function(){var o,n;n=\"widgetCookieBanner_show\",(o=a).classList?o.classList.remove(n):o.className=o.className.replace(new RegExp(\"(^|\\b)\"+n.split(\" \").join(\"|\")+\"(\\b|$)\",\"gi\"),\" \"),localStorage.setItem(\"kn_\"+e,\"hide\")}))}}(\"kameleoonScenarioLayerBase745087\",\"TOP\"),function(){var e=null;if(!document.getElementById(\"kameleoonScenarioLayerBase745087\")){var o=function(){(e=document.createElement(\"div\")).id=\"kameleoonScenarioLayerBase745087\",document.body.appendChild(e),e.innerHTML='<div style=\"width: 100%; height: 0px; '};if(Kameleoon.Internals.runtime.domReady)o();else if(window.onload){var n=window.onload;window.onload=function(){n(),o()}}else window.onload=function(){o()}}}();",
                        "afterDOMReady": true
                    }
                }, {
                    "name": "Sticky Banner Footer",
                    "id": 745094,
                    "css": "#kameleoonScenarioLayerBase745094{position:fixed;bottom:0}#kameleoonScenarioLayerBase745094.widgetCookieBanner{display:none;position:fixed;left:0;width:100%;background-color:#fff;z-index:2147483647}#kameleoonScenarioLayerBase745094.widgetCookieBanner.widgetCookieBanner_show{display:block!important}.widgetCookieBanner_TOP{top:0}.widgetCookieBanner_BOTTOM{bottom:0}.widgetCookieBanner__msg{margin:0 auto;color:#11a54a;padding:10px 0;text-align:center;max-width:600px;font-family:Arial;font-size:14px;line-height:18px;font-weight:700}.widgetCookieBanner__more{color:#fff!important;text-decoration:underline!important;cursor:pointer!important}.widgetCookieBanner__more:hover{color:#fff!important;text-decoration:none!important}.widgetCookieBanner__close{display:block;position:absolute;top:10px;right:20px;width:16px;height:16px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBhoKKwdEq83AAAAAfUlEQVQ4y6WUuxHAIAxDddmBMbx/xRKMwRIvRVIkfKOLO056Bza2JRFkkjZBIhOSCCpQ1giJAlRCZK5YILcdID8PE6RzrJGhOkemylhY3t2L2+zehn0xWmRvb5Av9g4Z2A/9C/NJZtJmWc2PM1vDbD6zve0B8kfUXQLumjkB5SzQrCeS2ocAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDYtMjZUMTA6NDM6MDcrMDI6MDCsnkxNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA2LTI2VDEwOjQzOjA3KzAyOjAw3cP08QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=');background-repeat:no-repeat;background-size:contain;cursor:pointer}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(e,o){var n='<div id=\"'+e+'\" class=\"KameleoonClassNotProcessFixed KameleoonJavaScriptAdded widgetCookieBanner widgetCookieBanner_'+o+'\" ><div class=\"widgetCookieBanner__msg\"><span>Save 15% on your first order with code HELLO15! </span>';if(n+='</div><span class=\"widgetCookieBanner__close\"></span></div>',document.body.insertAdjacentHTML(\"afterbegin\",n),!localStorage.getItem(\"kn_\"+e)){var a=document.querySelector(\"#\"+e),i=a.querySelector(\".widgetCookieBanner__close\");setTimeout((function(){var e,o;o=\"widgetCookieBanner_show\",(e=a).classList?e.classList.add(o):e.className+=\" \"+o}),1e3),i.addEventListener(\"click\",(function(){var o,n;n=\"widgetCookieBanner_show\",(o=a).classList?o.classList.remove(n):o.className=o.className.replace(new RegExp(\"(^|\\b)\"+n.split(\" \").join(\"|\")+\"(\\b|$)\",\"gi\"),\" \"),localStorage.setItem(\"kn_\"+e,\"hide\")}))}}(\"kameleoonScenarioLayerBase745094\",\"BOTTOM\"),function(){var e=null;if(!document.getElementById(\"kameleoonScenarioLayerBase745094\")){var o=function(){(e=document.createElement(\"div\")).id=\"kameleoonScenarioLayerBase745094\",document.body.appendChild(e),e.innerHTML='<div style=\"width: 100%; height: 0px; '};if(Kameleoon.Internals.runtime.domReady)o();else if(window.onload){var n=window.onload;window.onload=function(){n(),o()}}else window.onload=function(){o()}}}();",
                        "afterDOMReady": true
                    }
                }, {
                    "name": "Variation 1",
                    "id": 746038,
                    "css": "#kameleoonId1303602{color:#000!important;font-size:19px!important;height:23.8114px!important;width:1198px!important}#kameleoonScenarioLayerBase746038{background-color:#faf7f0!important;background-image:none!important}#kameleoonId1303794{width:800px!important}#kameleoonScenarioLayerBase746038{position:fixed;bottom:0}#kameleoonScenarioLayerBase746038.widgetCookieBanner{display:none;position:fixed;left:0;width:100%;background-color:#565a5c;z-index:2147483647}#kameleoonScenarioLayerBase746038.widgetCookieBanner.widgetCookieBanner_show{display:block!important}.widgetCookieBanner_TOP{top:0}.widgetCookieBanner_BOTTOM{bottom:0}.widgetCookieBanner__msg{margin:0 auto;color:#fff;padding:20px 0;text-align:center;max-width:800px;font-family:Arial;font-size:12px;line-height:16px}.widgetCookieBanner__more{color:#fff!important;text-decoration:underline!important;cursor:pointer!important}.widgetCookieBanner__more:hover{color:#fff!important;text-decoration:none!important}.widgetCookieBanner__close{display:block;position:absolute;top:10px;right:20px;width:16px;height:16px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBhoKKwdEq83AAAAAfUlEQVQ4y6WUuxHAIAxDddmBMbx/xRKMwRIvRVIkfKOLO056Bza2JRFkkjZBIhOSCCpQ1giJAlRCZK5YILcdID8PE6RzrJGhOkemylhY3t2L2+zehn0xWmRvb5Av9g4Z2A/9C/NJZtJmWc2PM1vDbD6zve0B8kfUXQLumjkB5SzQrCeS2ocAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDYtMjZUMTA6NDM6MDcrMDI6MDCsnkxNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA2LTI2VDEwOjQzOjA3KzAyOjAw3cP08QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=');background-repeat:no-repeat;background-size:contain;cursor:pointer}@media only screen and (max-width:991px){.widgetCookieBanner__msg{max-width:300px;padding:10px 0}}",
                    "elementSets": [{
                        "selector": "#kameleoonScenarioLayerBase746038 > div:first-child > span:first-child",
                        "options": {
                            "htmlContent": "Sale unlocked! Save 25% off your first dry dog food purchase with code SECRETSALE",
                            "kameleoonId": 1303602,
                            "autoGeneratedSelector": true,
                            "href": "https://openfarmpet.com/collections/dry-dog-food/",
                            "selector": "#kameleoonId1303602, [data-kameleoon-id=\"1303602\"]"
                        },
                        "currentQuery": "#kameleoonScenarioLayerBase746038 > div:first-child > span:first-child"
                    }, {
                        "selector": "#kameleoonScenarioLayerBase746038",
                        "options": {
                            "idSelector": true,
                            "selector": "#kameleoonScenarioLayerBase746038"
                        },
                        "currentQuery": null
                    }, {
                        "selector": "#kameleoonScenarioLayerBase746038 > div:first-child",
                        "options": {
                            "htmlContent": "<span data-kameleoon-id=\"1303602\" id=\"\" style=\"\">Sale unlocked! Save 25% off your first Dry Dog Food purchase with code SECRETSALE.</span>",
                            "kameleoonId": 1303794,
                            "autoGeneratedSelector": true,
                            "attributesData": "[]",
                            "selector": "#kameleoonId1303794, [data-kameleoon-id=\"1303794\"]"
                        },
                        "currentQuery": "#kameleoonScenarioLayerBase746038 > div:first-child"
                    }, {
                        "selector": ".widgetCookieBanner__msg",
                        "options": {
                            "href": "https://openfarmpet.com/collections/dry-dog-food/",
                            "selector": ".widgetCookieBanner__msg"
                        },
                        "currentQuery": null
                    }],
                    "javaScriptCode": {
                        "code": "!function(e,o){var n='<div id=\"'+e+'\" class=\"KameleoonClassNotProcessFixed KameleoonJavaScriptAdded widgetCookieBanner widgetCookieBanner_'+o+'\" ><div class=\"widgetCookieBanner__msg\"><span>Sale unlocked! Save 25% off your first Dry Dog Food purchase with code SECRETSALE. </span>';if(n+='</div><span class=\"widgetCookieBanner__close\"></span></div>',document.body.insertAdjacentHTML(\"afterbegin\",n),!localStorage.getItem(\"kn_\"+e)){var a=document.querySelector(\"#\"+e),i=a.querySelector(\".widgetCookieBanner__close\");setTimeout((function(){var e,o;o=\"widgetCookieBanner_show\",(e=a).classList?e.classList.add(o):e.className+=\" \"+o}),1e3),i.addEventListener(\"click\",(function(){var o,n;n=\"widgetCookieBanner_show\",(o=a).classList?o.classList.remove(n):o.className=o.className.replace(new RegExp(\"(^|\\b)\"+n.split(\" \").join(\"|\")+\"(\\b|$)\",\"gi\"),\" \"),localStorage.setItem(\"kn_\"+e,\"hide\")}))}}(\"kameleoonScenarioLayerBase746038\",\"BOTTOM\"),function(){var e=null;if(!document.getElementById(\"kameleoonScenarioLayerBase746038\")){var o=function(){(e=document.createElement(\"div\")).id=\"kameleoonScenarioLayerBase746038\",document.body.appendChild(e),e.innerHTML='<div style=\"width: 100%; height: 0px; '};if(Kameleoon.Internals.runtime.domReady)o();else if(window.onload){var n=window.onload;window.onload=function(){n(),o()}}else window.onload=function(){o()}}}();",
                        "afterDOMReady": true
                    }
                }, {
                    "name": "Variation 2",
                    "id": 746439,
                    "css": "#kameleoonScenarioLayerBase746439{position:fixed;bottom:0}#kameleoonScenarioLayerBase746439.widgetCookieBanner{display:none;position:fixed;left:0;width:100%;background-color:#faf7f0;z-index:2147483647}#kameleoonScenarioLayerBase746439.widgetCookieBanner.widgetCookieBanner_show{display:block!important}.widgetCookieBanner_TOP{top:0}.widgetCookieBanner_BOTTOM{bottom:0}.widgetCookieBanner__msg{margin:0 auto;color:#000;padding:20px 0;text-align:center;max-width:800px;font-family:Arial;font-size:19px;line-height:16px}.widgetCookieBanner__more{color:#fff!important;text-decoration:underline!important;cursor:pointer!important}.widgetCookieBanner__more:hover{color:#fff!important;text-decoration:none!important}.widgetCookieBanner__close{display:block;position:absolute;top:10px;right:20px;width:16px;height:16px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfhBhoKKwdEq83AAAAAfUlEQVQ4y6WUuxHAIAxDddmBMbx/xRKMwRIvRVIkfKOLO056Bza2JRFkkjZBIhOSCCpQ1giJAlRCZK5YILcdID8PE6RzrJGhOkemylhY3t2L2+zehn0xWmRvb5Av9g4Z2A/9C/NJZtJmWc2PM1vDbD6zve0B8kfUXQLumjkB5SzQrCeS2ocAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMDYtMjZUMTA6NDM6MDcrMDI6MDCsnkxNAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE3LTA2LTI2VDEwOjQzOjA3KzAyOjAw3cP08QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=');background-repeat:no-repeat;background-size:contain;cursor:pointer}@media only screen and (max-width:991px){.widgetCookieBanner__msg{max-width:300px;padding:10px 0}}",
                    "elementSets": [{
                        "selector": ".widgetCookieBanner__msg",
                        "options": {
                            "href": "https://openfarmpet.com/collections/dry-dog-food/",
                            "selector": ".widgetCookieBanner__msg"
                        },
                        "currentQuery": null
                    }],
                    "javaScriptCode": {
                        "code": "!function(e,o){var n=\"https://openfarmpet.com/collections/dry-dog-food/\",a='<div id=\"'+e+'\" class=\"KameleoonClassNotProcessFixed KameleoonJavaScriptAdded widgetCookieBanner widgetCookieBanner_'+o+'\" ><div class=\"widgetCookieBanner__msg\"><a href=\"'+n+'\">Sale unlocked! Save 25% off your first Dry Dog Food purchase with code SECRETSALE. </a>';if(a+='</div><span class=\"widgetCookieBanner__close\"></span></div>',document.body.insertAdjacentHTML(\"afterbegin\",a),!localStorage.getItem(\"kn_\"+e)){var i=document.querySelector(\"#\"+e),t=i.querySelector(\".widgetCookieBanner__close\");setTimeout((function(){var e,o;o=\"widgetCookieBanner_show\",(e=i).classList?e.classList.add(o):e.className+=\" \"+o}),1e3),t.addEventListener(\"click\",(function(){var o,n;n=\"widgetCookieBanner_show\",(o=i).classList?o.classList.remove(n):o.className=o.className.replace(new RegExp(\"(^|\\b)\"+n.split(\" \").join(\"|\")+\"(\\b|$)\",\"gi\"),\" \"),localStorage.setItem(\"kn_\"+e,\"hide\")}))}}(\"kameleoonScenarioLayerBase746439\",\"BOTTOM\"),function(){var e=null;if(!document.getElementById(\"kameleoonScenarioLayerBase746439\")){var o=function(){(e=document.createElement(\"div\")).id=\"kameleoonScenarioLayerBase746439\",document.body.appendChild(e),e.innerHTML='<div style=\"width: 100%; height: 0px; '};if(Kameleoon.Internals.runtime.domReady)o();else if(window.onload){var n=window.onload;window.onload=function(){n(),o()}}else window.onload=function(){o()}}}();",
                        "afterDOMReady": true
                    }
                }, {
                    "name": "Variation 1",
                    "id": 756173,
                    "css": ".desktop-quiz-toggle{display:none!important}",
                    "elementSets": [{
                        "selector": ".desktop-quiz-toggle",
                        "options": {
                            "selector": ".desktop-quiz-toggle"
                        },
                        "currentQuery": null
                    }],
                    "widgetTemplateInputData": null,
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 756185,
                    "css": "#kameleoonId1323474{display:none!important}#kameleoonId1323475{display:none!important}",
                    "elementSets": [{
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:first-child > div:nth-of-type(1) > div:first-child > ul:first-child > li:nth-of-type(4) > a:first-child",
                        "options": {
                            "kameleoonId": 1323474,
                            "autoGeneratedSelector": true,
                            "selector": "#kameleoonId1323474, [data-kameleoon-id=\"1323474\"]"
                        },
                        "currentQuery": "#gatsby-focus-wrapper > div:first-child > div:first-child > div:nth-of-type(1) > div:first-child > ul:first-child > li:nth-of-type(4) > a:first-child"
                    }, {
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:first-child > div:nth-of-type(1) > div:first-child > ul:first-child > li:nth-of-type(4)",
                        "options": {
                            "kameleoonId": 1323475,
                            "autoGeneratedSelector": true,
                            "selector": "#kameleoonId1323475, [data-kameleoon-id=\"1323475\"]"
                        },
                        "currentQuery": "#gatsby-focus-wrapper > div:first-child > div:first-child > div:nth-of-type(1) > div:first-child > ul:first-child > li:nth-of-type(4)"
                    }]
                }, {
                    "name": "Variation 2",
                    "id": 757271,
                    "css": "#kameleoonId1323473{display:none!important}.top-level-links-container li:last-of-type{display:none!important}.top-level-links-container a[href=\"/quiz/\"]{display:none!important}li[data-kameleoon-id=\"1323137\"]{display:none!important}",
                    "elementSets": [{
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:first-child > div:nth-of-type(1) > div:first-child > ul:first-child > li:nth-of-type(4)",
                        "options": {
                            "kameleoonId": 1323473,
                            "autoGeneratedSelector": true,
                            "selector": "#kameleoonId1323473, [data-kameleoon-id=\"1323473\"]"
                        },
                        "currentQuery": "#gatsby-focus-wrapper > div:first-child > div:first-child > div:nth-of-type(1) > div:first-child > ul:first-child > li:nth-of-type(4)"
                    }]
                }, {
                    "name": "Variation 1",
                    "id": 764390,
                    "css": "#kameleoonId1357768{display:none!important}",
                    "elementSets": [{
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:nth-of-type(2) > label:nth-of-type(2)",
                        "options": {
                            "kameleoonId": 1357768,
                            "autoGeneratedSelector": true,
                            "selector": "#kameleoonId1357768, [data-kameleoon-id=\"1357768\"]"
                        },
                        "currentQuery": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:nth-of-type(2) > label:nth-of-type(2)"
                    }]
                }, {
                    "name": "Variation 1",
                    "id": 764795,
                    "css": "#kameleoonId1357767{display:none!important}",
                    "elementSets": [{
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > label:nth-of-type(2)",
                        "options": {
                            "kameleoonId": 1357767,
                            "autoGeneratedSelector": true,
                            "selector": "#kameleoonId1357767, [data-kameleoon-id=\"1357767\"]"
                        },
                        "currentQuery": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > label:nth-of-type(2)"
                    }]
                }, {
                    "name": "Variation 1",
                    "id": 774399,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4062_774399 a,.widget_4062_774399 p{margin:0}.widget_4062_774399 *,.widget_4062_774399 :after,.widget_4062_774399 :before{box-sizing:border-box}.widget_4062_774399 .hide{display:none!important}.widget_4062_774399 .unvisible{visibility:hidden}.widget_4062_774399 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4062_774399 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#53ae58;width:100%;height:auto;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:0;margin-bottom:0;position:fixed}.widget_4062_774399 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4062_774399 .column_gimihog8o{display:flex;align-items:center;border-width:0;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;border-color:#fff;flex-direction:column;justify-content:flex-start;flex-basis:30%;flex-shrink:0;flex-grow:0}.widget_4062_774399 .column_xinffo0zn{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4062_774399 .group_nuw7r96gb{display:flex;margin-top:0;padding-top:0;margin-bottom:0;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4062_774399 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4062_774399 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4062_774399 .container_6boh6sy29{padding-top:0;padding-bottom:0}.widget_4062_774399 .text_cd5cy4cot{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4062_774399 .container_ubx1lhel2{padding-top:0;padding-bottom:0;margin-right:0}.widget_4062_774399 .text_a9mu6bif5{font-size:19px;text-align:left;font-family:Poppins;color:#fff;text-decoration:underline;text-transform:uppercase;font-weight:700;border-color:#fff;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;padding-right:10px;line-height:0;margin-bottom:0;margin-top:0;border-width:0;font-family:Moderat}.widget_4062_774399 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:10px}.widget_4062_774399 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4062_774399 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4062_774399 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4062_774399 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4062_774399.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4062_774399.phone .popup_3w9bowxxs{height:auto;padding-top:15px;padding-left:0;padding-right:0;background-color:#00b43c;padding-bottom:15px;top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);width:100%;margin-bottom:0;position:fixed}.widget_4062_774399.phone .column_gimihog8o{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4062_774399.phone .column_xinffo0zn{flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4062_774399.phone .group_nuw7r96gb{flex-direction:row}.widget_4062_774399.phone .container_xnj4c0sf1{padding-bottom:0;margin-right:0;padding-top:0;margin-top:0;margin-left:0}.widget_4062_774399.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;padding-right:0;padding-top:0;margin-right:20px;font-family:Moderat}.widget_4062_774399.phone .container_6boh6sy29{padding-bottom:0}.widget_4062_774399.phone .text_cd5cy4cot{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;font-family:Moderat}.widget_4062_774399.phone .container_ubx1lhel2{margin-right:0;margin-left:0}.widget_4062_774399.phone .text_a9mu6bif5{text-align:center;line-height:16px;padding-top:0;font-size:16px;padding-right:0;padding-left:0;margin-left:0;font-family:Moderat}.widget_4062_774399.phone .container_otl2unq9p{margin-top:5px;margin-right:5px}.widget_4062_774399.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4062_774399.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4062_774399.tablet .popup_3w9bowxxs{top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);position:fixed}.widget_4062_774399.tablet .text_iyo973jv8{font-family:Moderat}.widget_4062_774399.tablet .text_cd5cy4cot{font-family:Moderat}.widget_4062_774399.tablet .text_a9mu6bif5{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_774399\"))return null;if(\"Phone\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4062_774399 kameleoonWidget-4062 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_774399\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">          <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">25% off dry food on your 1st order </p>     </div>     <div class=\"container_6boh6sy29 container_element_cd5cy4cot \">       <p class=\"text_cd5cy4cot \">Code: FALL25</p>     </div>     <div class=\"container_ubx1lhel2 container_element_a9mu6bif5 \">       <p class=\"text_a9mu6bif5 \">Shop now</p>     </div>     <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4062_774399\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4062_774399 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4062_774399 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4062_774399 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4062_774399 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4062_774399 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")}),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4062_774399 .text_a9mu6bif5\"),e=>{e.stopPropagation(),e.preventDefault(),window.open(\"https://openfarmpet.com/collections/dry-dog-food/\",\"_self\"),Kameleoon.API.Goals.processConversion(\"275917\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_MOBILE",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 774700,
                    "css": "",
                    "elementSets": []
                }, {
                    "name": "Variation 1",
                    "id": 775546,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4063_775546 a,.widget_4063_775546 p{margin:0}.widget_4063_775546 *,.widget_4063_775546 :after,.widget_4063_775546 :before{box-sizing:border-box}.widget_4063_775546 .hide{display:none!important}.widget_4063_775546 .unvisible{visibility:hidden}.widget_4063_775546 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4063_775546 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#00b43c;width:100%;height:auto;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:20px;margin-top:0;padding-bottom:20px;position:fixed}.widget_4063_775546 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4063_775546 .column_l5rhzfw3z{display:flex;align-items:center;padding-right:0;padding-left:0;flex-direction:row;justify-content:center;flex-basis:100%;flex-shrink:0;flex-grow:0;margin-top:0}.widget_4063_775546 .column_biy6yw74e{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1;margin-right:0}.widget_4063_775546 .group_wmfor5jzd{display:flex;padding-top:0;justify-content:flex-start;align-items:center;flex-direction:row}.widget_4063_775546 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4063_775546 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;margin-right:20px;margin-left:0;border-width:0;font-family:Moderat}.widget_4063_775546 .container_ubx1lhel2{padding-top:0;padding-bottom:0;margin-right:0}.widget_4063_775546 .text_a9mu6bif5{font-size:19px;text-align:center;font-family:Poppins;color:#fff;text-decoration:underline;text-transform:uppercase;font-weight:700;border-color:#fff;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;padding-right:0;line-height:0;margin-bottom:0;margin-top:0;border-width:0;margin-left:0;margin-right:0;font-family:Moderat}.widget_4063_775546 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:5px}.widget_4063_775546 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4063_775546 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4063_775546 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4063_775546 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4063_775546.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4063_775546.phone .popup_3w9bowxxs{height:85px;position:fixed}.widget_4063_775546.phone .column_l5rhzfw3z{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4063_775546.phone .column_biy6yw74e{margin-top:0;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4063_775546.phone .group_wmfor5jzd{flex-direction:column}.widget_4063_775546.phone .container_xnj4c0sf1{padding-bottom:0}.widget_4063_775546.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Moderat}.widget_4063_775546.phone .text_a9mu6bif5{text-align:center;line-height:0;padding-top:7px;font-family:Moderat}.widget_4063_775546.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4063_775546.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4063_775546.tablet .popup_3w9bowxxs{position:fixed}.widget_4063_775546.tablet .column_l5rhzfw3z{flex-basis:50%;flex-grow:0;flex-shrink:0}.widget_4063_775546.tablet .column_biy6yw74e{flex-basis:auto;flex-grow:1;flex-shrink:1}.widget_4063_775546.tablet .text_iyo973jv8{font-family:Moderat}.widget_4063_775546.tablet .text_a9mu6bif5{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_775546\"))return null;if(\"Desktop\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4063_775546 kameleoonWidget-4063 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_775546\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">       <div class=\"group_wmfor5jzd \">    <div class=\"column_l5rhzfw3z\">        <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">25% off dry food on your 1st order. Code: FALL25</p>     </div>     <div class=\"container_ubx1lhel2 container_element_a9mu6bif5 \">       <p class=\"text_a9mu6bif5 \">Shop now</p>     </div>      </div>       <div class=\"column_biy6yw74e\">         </div>   </div>   <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4063_775546\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4063_775546 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4063_775546 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4063_775546 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4063_775546 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4063_775546 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")}),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4063_775546 .text_a9mu6bif5\"),e=>{e.stopPropagation(),e.preventDefault(),window.open(\"https://openfarmpet.com/collections/dry-dog-food/\",\"_self\"),Kameleoon.API.Goals.processConversion(\"275917\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_DESKTOP",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 775552,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4066_775552 a,.widget_4066_775552 p{margin:0}.widget_4066_775552 *,.widget_4066_775552 :after,.widget_4066_775552 :before{box-sizing:border-box}.widget_4066_775552 .hide{display:none!important}.widget_4066_775552 .unvisible{visibility:hidden}.widget_4066_775552 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4066_775552 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#53ae58;width:100%;height:45px;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:9px;position:fixed}.widget_4066_775552 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4066_775552 .column_gimihog8o{display:flex;align-items:center;border-width:0;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;border-color:#fff;flex-direction:column;justify-content:flex-start;flex-basis:30%;flex-shrink:0;flex-grow:0}.widget_4066_775552 .column_xinffo0zn{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4066_775552 .group_nuw7r96gb{display:flex;margin-top:0;padding-top:0;margin-bottom:0;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4066_775552 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4066_775552 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4066_775552 .container_6boh6sy29{padding-top:0;padding-bottom:0}.widget_4066_775552 .text_cd5cy4cot{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4066_775552 .container_ubx1lhel2{padding-top:0;padding-bottom:0;margin-right:0}.widget_4066_775552 .text_a9mu6bif5{font-size:19px;text-align:left;font-family:Poppins;color:#fff;text-decoration:underline;text-transform:uppercase;font-weight:700;border-color:#fff;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;padding-right:10px;line-height:0;margin-bottom:0;margin-top:0;border-width:0;font-family:Moderat}.widget_4066_775552 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:10px}.widget_4066_775552 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4066_775552 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4066_775552 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4066_775552 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4066_775552.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4066_775552.phone .popup_3w9bowxxs{height:auto;padding-top:15px;padding-left:0;padding-right:0;background-color:#00b43c;padding-bottom:15px;top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);width:100%;position:fixed}.widget_4066_775552.phone .column_gimihog8o{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4066_775552.phone .column_xinffo0zn{flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4066_775552.phone .group_nuw7r96gb{flex-direction:row}.widget_4066_775552.phone .container_xnj4c0sf1{padding-bottom:0;margin-right:0;padding-top:0;margin-top:0;margin-left:0}.widget_4066_775552.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;padding-right:0;padding-top:0;margin-right:20px;font-family:Moderat}.widget_4066_775552.phone .container_6boh6sy29{padding-bottom:0}.widget_4066_775552.phone .text_cd5cy4cot{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;font-family:Moderat}.widget_4066_775552.phone .container_ubx1lhel2{margin-right:0;margin-left:0}.widget_4066_775552.phone .text_a9mu6bif5{text-align:center;line-height:16px;padding-top:0;font-size:16px;padding-right:0;padding-left:0;margin-left:0;font-family:Moderat}.widget_4066_775552.phone .container_otl2unq9p{margin-top:5px;margin-right:5px}.widget_4066_775552.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4066_775552.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4066_775552.tablet .popup_3w9bowxxs{top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);position:fixed}.widget_4066_775552.tablet .text_iyo973jv8{font-family:Moderat}.widget_4066_775552.tablet .text_cd5cy4cot{font-family:Moderat}.widget_4066_775552.tablet .text_a9mu6bif5{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_775552\"))return null;if(\"Phone\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4066_775552 kameleoonWidget-4066 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_775552\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">          <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">25% off dry food on your 1st order </p>     </div>     <div class=\"container_6boh6sy29 container_element_cd5cy4cot \">       <p class=\"text_cd5cy4cot \">Code: FALL25</p>     </div>     <div class=\"container_ubx1lhel2 container_element_a9mu6bif5 \">       <p class=\"text_a9mu6bif5 \">Shop now</p>     </div>     <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4066_775552\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4066_775552 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4066_775552 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4066_775552 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4066_775552 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4066_775552 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")}),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4066_775552 .text_a9mu6bif5\"),e=>{e.stopPropagation(),e.preventDefault(),window.open(\"https://openfarmpet.com/collections/dry-cat-food/\",\"_self\"),Kameleoon.API.Goals.processConversion(\"275917\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_MOBILE",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 775556,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4067_775556 a,.widget_4067_775556 p{margin:0}.widget_4067_775556 *,.widget_4067_775556 :after,.widget_4067_775556 :before{box-sizing:border-box}.widget_4067_775556 .hide{display:none!important}.widget_4067_775556 .unvisible{visibility:hidden}.widget_4067_775556 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4067_775556 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#00b43c;width:100%;height:auto;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:20px;margin-top:0;padding-bottom:20px;position:fixed}.widget_4067_775556 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4067_775556 .column_l5rhzfw3z{display:flex;align-items:center;padding-right:0;padding-left:0;flex-direction:row;justify-content:center;flex-basis:100%;flex-shrink:0;flex-grow:0;margin-top:0}.widget_4067_775556 .column_biy6yw74e{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1;margin-right:0}.widget_4067_775556 .group_wmfor5jzd{display:flex;padding-top:0;justify-content:flex-start;align-items:center;flex-direction:row}.widget_4067_775556 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4067_775556 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;margin-right:20px;margin-left:0;border-width:0;font-family:Moderat}.widget_4067_775556 .container_ubx1lhel2{padding-top:0;padding-bottom:0;margin-right:0}.widget_4067_775556 .text_a9mu6bif5{font-size:19px;text-align:center;font-family:Poppins;color:#fff;text-decoration:underline;text-transform:uppercase;font-weight:700;border-color:#fff;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;padding-right:0;line-height:0;margin-bottom:0;margin-top:0;border-width:0;margin-left:0;margin-right:0;font-family:Moderat}.widget_4067_775556 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:5px}.widget_4067_775556 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4067_775556 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4067_775556 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4067_775556 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4067_775556.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4067_775556.phone .popup_3w9bowxxs{height:85px;position:fixed}.widget_4067_775556.phone .column_l5rhzfw3z{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4067_775556.phone .column_biy6yw74e{margin-top:0;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4067_775556.phone .group_wmfor5jzd{flex-direction:column}.widget_4067_775556.phone .container_xnj4c0sf1{padding-bottom:0}.widget_4067_775556.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Moderat}.widget_4067_775556.phone .text_a9mu6bif5{text-align:center;line-height:0;padding-top:7px;font-family:Moderat}.widget_4067_775556.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4067_775556.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4067_775556.tablet .popup_3w9bowxxs{position:fixed}.widget_4067_775556.tablet .column_l5rhzfw3z{flex-basis:50%;flex-grow:0;flex-shrink:0}.widget_4067_775556.tablet .column_biy6yw74e{flex-basis:auto;flex-grow:1;flex-shrink:1}.widget_4067_775556.tablet .text_iyo973jv8{font-family:Moderat}.widget_4067_775556.tablet .text_a9mu6bif5{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_775556\"))return null;if(\"Desktop\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4067_775556 kameleoonWidget-4067 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_775556\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">       <div class=\"group_wmfor5jzd \">    <div class=\"column_l5rhzfw3z\">        <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">25% off dry food on your 1st order. Code: FALL25</p>     </div>     <div class=\"container_ubx1lhel2 container_element_a9mu6bif5 \">       <p class=\"text_a9mu6bif5 \">Shop now</p>     </div>      </div>       <div class=\"column_biy6yw74e\">         </div>   </div>   <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4067_775556\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4067_775556 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4067_775556 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4067_775556 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4067_775556 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4067_775556 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")}),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4067_775556 .text_a9mu6bif5\"),e=>{e.stopPropagation(),e.preventDefault(),window.open(\"https://openfarmpet.com/collections/dry-cat-food/\",\"_self\"),Kameleoon.API.Goals.processConversion(\"275917\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_DESKTOP",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 775560,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4071_775560 a,.widget_4071_775560 p{margin:0}.widget_4071_775560 *,.widget_4071_775560 :after,.widget_4071_775560 :before{box-sizing:border-box}.widget_4071_775560 .hide{display:none!important}.widget_4071_775560 .unvisible{visibility:hidden}.widget_4071_775560 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4071_775560 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#00b43c;width:100%;height:auto;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:20px;margin-top:0;padding-bottom:20px;position:fixed}.widget_4071_775560 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4071_775560 .column_l5rhzfw3z{display:flex;align-items:center;padding-right:0;padding-left:0;flex-direction:row;justify-content:center;flex-basis:100%;flex-shrink:0;flex-grow:0;margin-top:0}.widget_4071_775560 .column_biy6yw74e{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1;margin-right:0}.widget_4071_775560 .group_wmfor5jzd{display:flex;padding-top:0;justify-content:flex-start;align-items:center;flex-direction:row}.widget_4071_775560 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4071_775560 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;margin-right:20px;margin-left:0;border-width:0;font-family:Moderat}.widget_4071_775560 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:5px}.widget_4071_775560 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4071_775560 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4071_775560 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4071_775560 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4071_775560.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4071_775560.phone .popup_3w9bowxxs{height:85px;position:fixed}.widget_4071_775560.phone .column_l5rhzfw3z{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4071_775560.phone .column_biy6yw74e{margin-top:0;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4071_775560.phone .group_wmfor5jzd{flex-direction:column}.widget_4071_775560.phone .container_xnj4c0sf1{padding-bottom:0}.widget_4071_775560.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Moderat}.widget_4071_775560.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4071_775560.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4071_775560.tablet .popup_3w9bowxxs{position:fixed}.widget_4071_775560.tablet .column_l5rhzfw3z{flex-basis:50%;flex-grow:0;flex-shrink:0}.widget_4071_775560.tablet .column_biy6yw74e{flex-basis:auto;flex-grow:1;flex-shrink:1}.widget_4071_775560.tablet .text_iyo973jv8{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_775560\"))return null;if(\"Desktop\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4071_775560 kameleoonWidget-4071 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_775560\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">       <div class=\"group_wmfor5jzd \">    <div class=\"column_l5rhzfw3z\">        <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">25% off dry food on your 1st order. Code: FALL25</p>     </div>      </div>       <div class=\"column_biy6yw74e\">         </div>   </div>   <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4071_775560\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4071_775560 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4071_775560 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4071_775560 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4071_775560 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4071_775560 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_DESKTOP",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 775563,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4072_775563 a,.widget_4072_775563 p{margin:0}.widget_4072_775563 *,.widget_4072_775563 :after,.widget_4072_775563 :before{box-sizing:border-box}.widget_4072_775563 .hide{display:none!important}.widget_4072_775563 .unvisible{visibility:hidden}.widget_4072_775563 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4072_775563 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#53ae58;width:100%;height:45px;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:9px;position:fixed}.widget_4072_775563 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4072_775563 .column_gimihog8o{display:flex;align-items:center;border-width:0;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;border-color:#fff;flex-direction:column;justify-content:flex-start;flex-basis:30%;flex-shrink:0;flex-grow:0}.widget_4072_775563 .column_xinffo0zn{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4072_775563 .group_nuw7r96gb{display:flex;margin-top:0;padding-top:0;margin-bottom:0;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4072_775563 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4072_775563 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4072_775563 .container_6boh6sy29{padding-top:0;padding-bottom:0}.widget_4072_775563 .text_cd5cy4cot{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4072_775563 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:10px}.widget_4072_775563 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4072_775563 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4072_775563 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4072_775563 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4072_775563.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4072_775563.phone .popup_3w9bowxxs{height:auto;padding-top:15px;padding-left:0;padding-right:0;background-color:#00b43c;padding-bottom:15px;top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);width:100%;position:fixed}.widget_4072_775563.phone .column_gimihog8o{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4072_775563.phone .column_xinffo0zn{flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4072_775563.phone .group_nuw7r96gb{flex-direction:row}.widget_4072_775563.phone .container_xnj4c0sf1{padding-bottom:0;margin-right:0;padding-top:0;margin-top:0;margin-left:0}.widget_4072_775563.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;padding-right:0;padding-top:0;margin-right:20px;font-family:Moderat}.widget_4072_775563.phone .container_6boh6sy29{padding-bottom:0}.widget_4072_775563.phone .text_cd5cy4cot{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;font-family:Moderat}.widget_4072_775563.phone .container_otl2unq9p{margin-top:5px;margin-right:5px}.widget_4072_775563.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4072_775563.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4072_775563.tablet .popup_3w9bowxxs{top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);position:fixed}.widget_4072_775563.tablet .text_iyo973jv8{font-family:Moderat}.widget_4072_775563.tablet .text_cd5cy4cot{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_775563\"))return null;if(\"Phone\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4072_775563 kameleoonWidget-4072 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_775563\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">          <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">25% off dry food on your 1st order </p>     </div>     <div class=\"container_6boh6sy29 container_element_cd5cy4cot \">       <p class=\"text_cd5cy4cot \">Code: FALL25</p>     </div>     <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4072_775563\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4072_775563 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4072_775563 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4072_775563 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4072_775563 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4072_775563 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_MOBILE",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 775567,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4064_775567 a,.widget_4064_775567 p{margin:0}.widget_4064_775567 *,.widget_4064_775567 :after,.widget_4064_775567 :before{box-sizing:border-box}.widget_4064_775567 .hide{display:none!important}.widget_4064_775567 .unvisible{visibility:hidden}.widget_4064_775567 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4064_775567 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#53ae58;width:100%;height:45px;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:9px;position:fixed}.widget_4064_775567 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4064_775567 .column_gimihog8o{display:flex;align-items:center;border-width:0;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;border-color:#fff;flex-direction:column;justify-content:flex-start;flex-basis:30%;flex-shrink:0;flex-grow:0}.widget_4064_775567 .column_xinffo0zn{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4064_775567 .group_nuw7r96gb{display:flex;margin-top:0;padding-top:0;margin-bottom:0;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4064_775567 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4064_775567 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4064_775567 .container_6boh6sy29{padding-top:0;padding-bottom:0}.widget_4064_775567 .text_cd5cy4cot{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4064_775567 .container_ubx1lhel2{padding-top:0;padding-bottom:0;margin-right:0}.widget_4064_775567 .text_a9mu6bif5{font-size:19px;text-align:left;font-family:Poppins;color:#fff;text-decoration:underline;text-transform:uppercase;font-weight:700;border-color:#fff;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;padding-right:10px;line-height:0;margin-bottom:0;margin-top:0;border-width:0;font-family:Moderat}.widget_4064_775567 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:10px}.widget_4064_775567 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4064_775567 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4064_775567 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4064_775567 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4064_775567.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4064_775567.phone .popup_3w9bowxxs{height:auto;padding-top:15px;padding-left:0;padding-right:0;background-color:#00b43c;padding-bottom:15px;top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);width:100%;position:fixed}.widget_4064_775567.phone .column_gimihog8o{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4064_775567.phone .column_xinffo0zn{flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4064_775567.phone .group_nuw7r96gb{flex-direction:row}.widget_4064_775567.phone .container_xnj4c0sf1{padding-bottom:0;margin-right:0;padding-top:0;margin-top:0;margin-left:0}.widget_4064_775567.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;padding-right:0;padding-top:0;margin-right:20px;font-family:Moderat}.widget_4064_775567.phone .container_6boh6sy29{padding-bottom:0}.widget_4064_775567.phone .text_cd5cy4cot{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;font-family:Moderat}.widget_4064_775567.phone .container_ubx1lhel2{margin-right:0;margin-left:0}.widget_4064_775567.phone .text_a9mu6bif5{text-align:center;line-height:16px;padding-top:0;font-size:16px;padding-right:0;padding-left:0;margin-left:0;font-family:Moderat}.widget_4064_775567.phone .container_otl2unq9p{margin-top:5px;margin-right:5px}.widget_4064_775567.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4064_775567.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4064_775567.tablet .popup_3w9bowxxs{top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);position:fixed}.widget_4064_775567.tablet .text_iyo973jv8{font-family:Moderat}.widget_4064_775567.tablet .text_cd5cy4cot{font-family:Moderat}.widget_4064_775567.tablet .text_a9mu6bif5{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_775567\"))return null;if(\"Phone\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4064_775567 kameleoonWidget-4064 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_775567\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">          <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">20% off your 1st autoship delivery</p>     </div>     <div class=\"container_6boh6sy29 container_element_cd5cy4cot \">       <p class=\"text_cd5cy4cot \">Code: FALL20</p>     </div>     <div class=\"container_ubx1lhel2 container_element_a9mu6bif5 \">       <p class=\"text_a9mu6bif5 \">Shop now</p>     </div>     <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4064_775567\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4064_775567 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4064_775567 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4064_775567 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4064_775567 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4064_775567 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")}),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4064_775567 .text_a9mu6bif5\"),e=>{e.stopPropagation(),e.preventDefault(),window.open(\"https://openfarmpet.com/dog-food/\",\"_self\"),Kameleoon.API.Goals.processConversion(\"275917\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_MOBILE",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 775809,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4065_775809 a,.widget_4065_775809 p{margin:0}.widget_4065_775809 *,.widget_4065_775809 :after,.widget_4065_775809 :before{box-sizing:border-box}.widget_4065_775809 .hide{display:none!important}.widget_4065_775809 .unvisible{visibility:hidden}.widget_4065_775809 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4065_775809 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#00b43c;width:100%;height:auto;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:20px;margin-top:0;padding-bottom:20px;position:fixed}.widget_4065_775809 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4065_775809 .column_l5rhzfw3z{display:flex;align-items:center;padding-right:0;padding-left:0;flex-direction:row;justify-content:center;flex-basis:100%;flex-shrink:0;flex-grow:0;margin-top:0}.widget_4065_775809 .column_biy6yw74e{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1;margin-right:0}.widget_4065_775809 .group_wmfor5jzd{display:flex;padding-top:0;justify-content:flex-start;align-items:center;flex-direction:row}.widget_4065_775809 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4065_775809 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;margin-right:20px;margin-left:0;border-width:0;font-family:Moderat}.widget_4065_775809 .container_ubx1lhel2{padding-top:0;padding-bottom:0;margin-right:0}.widget_4065_775809 .text_a9mu6bif5{font-size:19px;text-align:center;font-family:Poppins;color:#fff;text-decoration:underline;text-transform:uppercase;font-weight:700;border-color:#fff;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;padding-right:0;line-height:0;margin-bottom:0;margin-top:0;border-width:0;margin-left:0;margin-right:0;font-family:Moderat}.widget_4065_775809 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:5px}.widget_4065_775809 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4065_775809 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4065_775809 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4065_775809 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4065_775809.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4065_775809.phone .popup_3w9bowxxs{height:85px;position:fixed}.widget_4065_775809.phone .column_l5rhzfw3z{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4065_775809.phone .column_biy6yw74e{margin-top:0;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4065_775809.phone .group_wmfor5jzd{flex-direction:column}.widget_4065_775809.phone .container_xnj4c0sf1{padding-bottom:0}.widget_4065_775809.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Moderat}.widget_4065_775809.phone .text_a9mu6bif5{text-align:center;line-height:0;padding-top:7px;font-family:Moderat}.widget_4065_775809.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4065_775809.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4065_775809.tablet .popup_3w9bowxxs{position:fixed}.widget_4065_775809.tablet .column_l5rhzfw3z{flex-basis:50%;flex-grow:0;flex-shrink:0}.widget_4065_775809.tablet .column_biy6yw74e{flex-basis:auto;flex-grow:1;flex-shrink:1}.widget_4065_775809.tablet .text_iyo973jv8{font-family:Moderat}.widget_4065_775809.tablet .text_a9mu6bif5{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_775809\"))return null;if(\"Desktop\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4065_775809 kameleoonWidget-4065 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_775809\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">       <div class=\"group_wmfor5jzd \">    <div class=\"column_l5rhzfw3z\">        <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">Save 5% for life with autoship &amp; 20% off your first delivery Code: FALL20</p>     </div>     <div class=\"container_ubx1lhel2 container_element_a9mu6bif5 \">       <p class=\"text_a9mu6bif5 \">Shop now</p>     </div>      </div>       <div class=\"column_biy6yw74e\">         </div>   </div>   <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4065_775809\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4065_775809 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4065_775809 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4065_775809 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4065_775809 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4065_775809 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")}),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4065_775809 .text_a9mu6bif5\"),e=>{e.stopPropagation(),e.preventDefault(),window.open(\"https://openfarmpet.com/dog-food/\",\"_self\"),Kameleoon.API.Goals.processConversion(\"275917\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_DESKTOP",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 775810,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4068_775810 a,.widget_4068_775810 p{margin:0}.widget_4068_775810 *,.widget_4068_775810 :after,.widget_4068_775810 :before{box-sizing:border-box}.widget_4068_775810 .hide{display:none!important}.widget_4068_775810 .unvisible{visibility:hidden}.widget_4068_775810 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4068_775810 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#53ae58;width:100%;height:45px;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:9px;position:fixed}.widget_4068_775810 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4068_775810 .column_gimihog8o{display:flex;align-items:center;border-width:0;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;border-color:#fff;flex-direction:column;justify-content:flex-start;flex-basis:30%;flex-shrink:0;flex-grow:0}.widget_4068_775810 .column_xinffo0zn{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4068_775810 .group_nuw7r96gb{display:flex;margin-top:0;padding-top:0;margin-bottom:0;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4068_775810 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4068_775810 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4068_775810 .container_6boh6sy29{padding-top:0;padding-bottom:0}.widget_4068_775810 .text_cd5cy4cot{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4068_775810 .container_ubx1lhel2{padding-top:0;padding-bottom:0;margin-right:0}.widget_4068_775810 .text_a9mu6bif5{font-size:19px;text-align:left;font-family:Poppins;color:#fff;text-decoration:underline;text-transform:uppercase;font-weight:700;border-color:#fff;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;padding-right:10px;line-height:0;margin-bottom:0;margin-top:0;border-width:0;font-family:Moderat}.widget_4068_775810 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:10px}.widget_4068_775810 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4068_775810 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4068_775810 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4068_775810 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4068_775810.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4068_775810.phone .popup_3w9bowxxs{height:auto;padding-top:15px;padding-left:0;padding-right:0;background-color:#00b43c;padding-bottom:15px;top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);width:100%;position:fixed}.widget_4068_775810.phone .column_gimihog8o{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4068_775810.phone .column_xinffo0zn{flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4068_775810.phone .group_nuw7r96gb{flex-direction:row}.widget_4068_775810.phone .container_xnj4c0sf1{padding-bottom:0;margin-right:0;padding-top:0;margin-top:0;margin-left:0}.widget_4068_775810.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;padding-right:0;padding-top:0;margin-right:20px;font-family:Moderat}.widget_4068_775810.phone .container_6boh6sy29{padding-bottom:0}.widget_4068_775810.phone .text_cd5cy4cot{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;font-family:Moderat}.widget_4068_775810.phone .container_ubx1lhel2{margin-right:0;margin-left:0}.widget_4068_775810.phone .text_a9mu6bif5{text-align:center;line-height:16px;padding-top:0;font-size:16px;padding-right:0;padding-left:0;margin-left:0;font-family:Moderat}.widget_4068_775810.phone .container_otl2unq9p{margin-top:5px;margin-right:5px}.widget_4068_775810.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4068_775810.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4068_775810.tablet .popup_3w9bowxxs{top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);position:fixed}.widget_4068_775810.tablet .text_iyo973jv8{font-family:Moderat}.widget_4068_775810.tablet .text_cd5cy4cot{font-family:Moderat}.widget_4068_775810.tablet .text_a9mu6bif5{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_775810\"))return null;if(\"Phone\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4068_775810 kameleoonWidget-4068 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_775810\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">          <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">20% off your 1st autoship delivery</p>     </div>     <div class=\"container_6boh6sy29 container_element_cd5cy4cot \">       <p class=\"text_cd5cy4cot \">Code: FALL20</p>     </div>     <div class=\"container_ubx1lhel2 container_element_a9mu6bif5 \">       <p class=\"text_a9mu6bif5 \">Shop now</p>     </div>     <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4068_775810\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4068_775810 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4068_775810 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4068_775810 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4068_775810 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4068_775810 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")}),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4068_775810 .text_a9mu6bif5\"),e=>{e.stopPropagation(),e.preventDefault(),window.open(\"https://openfarmpet.com/cat-food/\",\"_self\"),Kameleoon.API.Goals.processConversion(\"275917\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_MOBILE",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 775812,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4069_775812 a,.widget_4069_775812 p{margin:0}.widget_4069_775812 *,.widget_4069_775812 :after,.widget_4069_775812 :before{box-sizing:border-box}.widget_4069_775812 .hide{display:none!important}.widget_4069_775812 .unvisible{visibility:hidden}.widget_4069_775812 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4069_775812 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#00b43c;width:100%;height:auto;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:20px;margin-top:0;padding-bottom:20px;position:fixed}.widget_4069_775812 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4069_775812 .column_l5rhzfw3z{display:flex;align-items:center;padding-right:0;padding-left:0;flex-direction:row;justify-content:center;flex-basis:100%;flex-shrink:0;flex-grow:0;margin-top:0}.widget_4069_775812 .column_biy6yw74e{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1;margin-right:0}.widget_4069_775812 .group_wmfor5jzd{display:flex;padding-top:0;justify-content:flex-start;align-items:center;flex-direction:row}.widget_4069_775812 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4069_775812 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;margin-right:20px;margin-left:0;border-width:0;font-family:Moderat}.widget_4069_775812 .container_ubx1lhel2{padding-top:0;padding-bottom:0;margin-right:0}.widget_4069_775812 .text_a9mu6bif5{font-size:19px;text-align:center;font-family:Poppins;color:#fff;text-decoration:underline;text-transform:uppercase;font-weight:700;border-color:#fff;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;padding-right:0;line-height:0;margin-bottom:0;margin-top:0;border-width:0;margin-left:0;margin-right:0;font-family:Moderat}.widget_4069_775812 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:5px}.widget_4069_775812 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4069_775812 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4069_775812 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4069_775812 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4069_775812.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4069_775812.phone .popup_3w9bowxxs{height:85px;position:fixed}.widget_4069_775812.phone .column_l5rhzfw3z{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4069_775812.phone .column_biy6yw74e{margin-top:0;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4069_775812.phone .group_wmfor5jzd{flex-direction:column}.widget_4069_775812.phone .container_xnj4c0sf1{padding-bottom:0}.widget_4069_775812.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Moderat}.widget_4069_775812.phone .text_a9mu6bif5{text-align:center;line-height:0;padding-top:7px;font-family:Moderat}.widget_4069_775812.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4069_775812.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4069_775812.tablet .popup_3w9bowxxs{position:fixed}.widget_4069_775812.tablet .column_l5rhzfw3z{flex-basis:50%;flex-grow:0;flex-shrink:0}.widget_4069_775812.tablet .column_biy6yw74e{flex-basis:auto;flex-grow:1;flex-shrink:1}.widget_4069_775812.tablet .text_iyo973jv8{font-family:Moderat}.widget_4069_775812.tablet .text_a9mu6bif5{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_775812\"))return null;if(\"Desktop\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4069_775812 kameleoonWidget-4069 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_775812\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">       <div class=\"group_wmfor5jzd \">    <div class=\"column_l5rhzfw3z\">        <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">Save 5% for life with autoship &amp; 20% off your first delivery. Code: FALL20</p>     </div>     <div class=\"container_ubx1lhel2 container_element_a9mu6bif5 \">       <p class=\"text_a9mu6bif5 \">Shop now</p>     </div>      </div>       <div class=\"column_biy6yw74e\">         </div>   </div>   <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4069_775812\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4069_775812 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4069_775812 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4069_775812 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4069_775812 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4069_775812 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")}),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4069_775812 .text_a9mu6bif5\"),e=>{e.stopPropagation(),e.preventDefault(),window.open(\"https://openfarmpet.com/cat-food/\",\"_self\"),Kameleoon.API.Goals.processConversion(\"275917\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_DESKTOP",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 776010,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4073_776010 a,.widget_4073_776010 p{margin:0}.widget_4073_776010 *,.widget_4073_776010 :after,.widget_4073_776010 :before{box-sizing:border-box}.widget_4073_776010 .hide{display:none!important}.widget_4073_776010 .unvisible{visibility:hidden}.widget_4073_776010 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4073_776010 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#00b43c;width:100%;height:auto;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:20px;margin-top:0;padding-bottom:20px;position:fixed}.widget_4073_776010 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4073_776010 .column_l5rhzfw3z{display:flex;align-items:center;padding-right:0;padding-left:0;flex-direction:row;justify-content:center;flex-basis:100%;flex-shrink:0;flex-grow:0;margin-top:0}.widget_4073_776010 .column_biy6yw74e{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1;margin-right:0}.widget_4073_776010 .group_wmfor5jzd{display:flex;padding-top:0;justify-content:flex-start;align-items:center;flex-direction:row}.widget_4073_776010 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4073_776010 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;margin-right:20px;margin-left:0;border-width:0;font-family:Moderat}.widget_4073_776010 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:5px}.widget_4073_776010 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4073_776010 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4073_776010 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4073_776010 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4073_776010.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4073_776010.phone .popup_3w9bowxxs{height:85px;position:fixed}.widget_4073_776010.phone .column_l5rhzfw3z{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4073_776010.phone .column_biy6yw74e{margin-top:0;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4073_776010.phone .group_wmfor5jzd{flex-direction:column}.widget_4073_776010.phone .container_xnj4c0sf1{padding-bottom:0}.widget_4073_776010.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Moderat}.widget_4073_776010.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4073_776010.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4073_776010.tablet .popup_3w9bowxxs{position:fixed}.widget_4073_776010.tablet .column_l5rhzfw3z{flex-basis:50%;flex-grow:0;flex-shrink:0}.widget_4073_776010.tablet .column_biy6yw74e{flex-basis:auto;flex-grow:1;flex-shrink:1}.widget_4073_776010.tablet .text_iyo973jv8{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_776010\"))return null;if(\"Desktop\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4073_776010 kameleoonWidget-4073 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_776010\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">       <div class=\"group_wmfor5jzd \">    <div class=\"column_l5rhzfw3z\">        <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">Save 5% for life with autoship &amp; 20% off your first delivery. Code: FALL20</p>     </div>      </div>       <div class=\"column_biy6yw74e\">         </div>   </div>   <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4073_776010\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4073_776010 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4073_776010 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4073_776010 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4073_776010 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4073_776010 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_DESKTOP",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 776013,
                    "css": "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap);.widget_4074_776013 a,.widget_4074_776013 p{margin:0}.widget_4074_776013 *,.widget_4074_776013 :after,.widget_4074_776013 :before{box-sizing:border-box}.widget_4074_776013 .hide{display:none!important}.widget_4074_776013 .unvisible{visibility:hidden}.widget_4074_776013 .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4074_776013 .popup_3w9bowxxs{position:absolute;top:null;left:50%;z-index:9999;background-color:#53ae58;width:100%;height:45px;transform:translateX(-50%);max-width:100%;bottom:0;right:null;padding-top:9px;position:fixed}.widget_4074_776013 .overlay_yevokwytd{background-color:rgba(0,0,0,.6);position:absolute;z-index:9998;top:0;left:0;right:0;bottom:0}.widget_4074_776013 .column_gimihog8o{display:flex;align-items:center;border-width:0;border-bottom-style:none;border-top-style:none;border-left-style:none;border-right-style:solid;border-color:#fff;flex-direction:column;justify-content:flex-start;flex-basis:30%;flex-shrink:0;flex-grow:0}.widget_4074_776013 .column_xinffo0zn{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4074_776013 .group_nuw7r96gb{display:flex;margin-top:0;padding-top:0;margin-bottom:0;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4074_776013 .container_xnj4c0sf1{padding-top:0;padding-bottom:0}.widget_4074_776013 .text_iyo973jv8{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4074_776013 .container_6boh6sy29{padding-top:0;padding-bottom:0}.widget_4074_776013 .text_cd5cy4cot{font-size:21px;text-align:center;font-family:Poppins;color:#fff;font-weight:700;line-height:0;padding-top:0;font-family:Moderat}.widget_4074_776013 .container_otl2unq9p{position:absolute;top:0;right:0;z-index:999;margin-right:10px;margin-top:10px}.widget_4074_776013 .close_0h06514pk{width:20px;height:20px;cursor:pointer;fill:#fff}.widget_4074_776013 .column_klrec2eii{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4074_776013 .column_8won1ipva{display:flex;align-items:center;flex-direction:column;justify-content:flex-start;flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4074_776013 .group_v0xngcq6q{display:flex;justify-content:flex-start;align-items:stretch;flex-direction:row}.widget_4074_776013.phone .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4074_776013.phone .popup_3w9bowxxs{height:auto;padding-top:15px;padding-left:0;padding-right:0;background-color:#00b43c;padding-bottom:15px;top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);width:100%;position:fixed}.widget_4074_776013.phone .column_gimihog8o{flex-basis:50%;flex-shrink:0;flex-grow:0}.widget_4074_776013.phone .column_xinffo0zn{flex-basis:auto;flex-shrink:1;flex-grow:1}.widget_4074_776013.phone .group_nuw7r96gb{flex-direction:row}.widget_4074_776013.phone .container_xnj4c0sf1{padding-bottom:0;margin-right:0;padding-top:0;margin-top:0;margin-left:0}.widget_4074_776013.phone .text_iyo973jv8{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;padding-right:0;padding-top:0;margin-right:20px;font-family:Moderat}.widget_4074_776013.phone .container_6boh6sy29{padding-bottom:0}.widget_4074_776013.phone .text_cd5cy4cot{text-align:center;margin-left:0;margin-bottom:0;line-height:18px;font-family:Poppins;font-size:18px;font-family:Moderat}.widget_4074_776013.phone .container_otl2unq9p{margin-top:5px;margin-right:5px}.widget_4074_776013.phone .template_ouv5nfami .fadeIn{animation-name:fadeIn;animation-duration:1s;animation-delay:0ms;animation-fill-mode:both;position:absolute}.widget_4074_776013.tablet .popup_wrapper_3w9bowxxs{inset:0px;z-index:9999}.widget_4074_776013.tablet .popup_3w9bowxxs{top:null;bottom:0;left:50%;right:null;transform:translateX(-50%);position:fixed}.widget_4074_776013.tablet .text_iyo973jv8{font-family:Moderat}.widget_4074_776013.tablet .text_cd5cy4cot{font-family:Moderat}@keyframes fadeIn{from{opacity:0}to{opacity:1}}",
                    "elementSets": [],
                    "javaScriptCode": {
                        "code": "!function(){if(document.getElementById(\"kameleoonWidget_776013\"))return null;if(\"Phone\"===Kameleoon.API.CurrentVisit.device.type){Kameleoon.API.Core.runWhenElementPresent(\"body\",([e])=>{e.insertAdjacentHTML(\"beforeend\",'        <div class=\"widget_4074_776013 kameleoonWidget-4074 KameleoonJavaScriptAdded\" id=\"kameleoonWidget_776013\">             <div class=\"template_ouv5nfami hide\" >          <div class=\"popup_wrapper_3w9bowxxs\">      <div class=\"popup_3w9bowxxs\">          <div class=\"container_xnj4c0sf1 container_element_iyo973jv8 \">       <p class=\"text_iyo973jv8 \">20% off your 1st autoship delivery</p>     </div>     <div class=\"container_6boh6sy29 container_element_cd5cy4cot \">       <p class=\"text_cd5cy4cot \">Code: FALL20</p>     </div>     <div class=\"container_otl2unq9p container_element_0h06514pk \">       <svg class=\"close_0h06514pk \" viewBox=\"0 0 24 24\" aria-hidden>    <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path>   </svg>     </div>        </div>     </div>    </div>           </div>       ')}),Kameleoon.API.Core.runWhenElementPresent(\".widget_4074_776013\",e=>{e[0].classList.add(Kameleoon.API.CurrentVisit.device.type.toLowerCase()),document.querySelector(\".widget_4074_776013 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs fadeIn\",document.querySelector(\".widget_4074_776013 .template_ouv5nfami\").classList.remove(\"hide\"),setTimeout(()=>{document.querySelector(\".widget_4074_776013 .popup_wrapper_3w9bowxxs\").className=\"popup_wrapper_3w9bowxxs\"},1e3),Kameleoon.API.Utils.addUniversalClickListener(document.querySelector(\".widget_4074_776013 .close_0h06514pk\"),e=>{e.stopPropagation(),e.preventDefault(),document.querySelector(\".widget_4074_776013 .template_ouv5nfami\").classList.add(\"hide\"),Kameleoon.API.Goals.processConversion(\"275916\")})})}}();",
                        "afterDOMReady": false
                    },
                    "widgetTemplateInputData": {
                        "domElementSelector": null,
                        "positionSelectorRelative": "BEFORE",
                        "displayPluginConfiguration": "DISPLAY_ONLY_MOBILE",
                        "positionPluginConfiguration": "ABOVE",
                        "positionDefinition": null,
                        "mainPageUrl": null
                    },
                    "widgetTemplateName": null
                }, {
                    "name": "Variation 1",
                    "id": 776232,
                    "css": "",
                    "elementSets": [{
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > div:first-child > div:first-child > h1:first-child > span:first-child > span:first-child > span:first-child",
                        "options": {
                            "htmlContent": "<span data-kameleoon-class=\"0744-d1cc\">Healthier food. Happier pets.</span>",
                            "kameleoonId": 1363003,
                            "autoGeneratedSelector": true,
                            "attributesData": "[{\"attributeName\":\"style\",\"attributeValue\":\"font-family:moderat;\",\"removed\":false,\"modified\":true,\"added\":false},{\"attributeName\":\"data-kameleoon-class\",\"attributeValue\":\"\",\"removed\":true,\"modified\":true,\"added\":false}]",
                            "selector": "#kameleoonId1363003, [data-kameleoon-id=\"1363003\"]"
                        },
                        "currentQuery": "#kameleoonId1362982 > span:first-child > span:first-child"
                    }, {
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > div:first-child > div:first-child > h1:first-child > span:first-child",
                        "options": {
                            "htmlContent": "<span data-kameleoon-id=\"1362982\" id=\"\" style=\"color: white; font-family: Moderat;\" data-kameleoon-class=\"67ed-e62d\"><span data-kameleoon-class=\"0744-d1cc\" style=\"font-family: Calibri, sans-serif;\">Healthier food. Happier pets.</span></span>",
                            "kameleoonId": 1363004,
                            "autoGeneratedSelector": true,
                            "attributesData": "[{\"attributeName\":\"style\",\"attributeValue\":\"font-size:72px;\",\"removed\":false,\"modified\":true,\"added\":false},{\"attributeName\":\"data-kameleoon-id\",\"attributeValue\":\"\",\"removed\":true,\"modified\":true,\"added\":false}]",
                            "selector": "#kameleoonId1363004, [data-kameleoon-id=\"1363004\"]"
                        },
                        "currentQuery": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > div:first-child > div:first-child > h1:first-child > span:first-child"
                    }]
                }, {
                    "name": "Variation 2",
                    "id": 776233,
                    "css": "",
                    "elementSets": [{
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > div:first-child > div:first-child > h1:first-child > span:first-child",
                        "options": {
                            "htmlContent": "<span style=\"color: white; font-family: Moderat;\" data-kameleoon-class=\"c6cd-44d6\"><span style=\"font-family: Calibri, sans-serif;\" data-kameleoon-class=\"c008-2e1a\">Better Food. For Pets And The Planet.</span></span>",
                            "kameleoonId": 1363001,
                            "autoGeneratedSelector": true,
                            "attributesData": "[{\"attributeName\":\"style\",\"attributeValue\":\"font-size:72px;\",\"removed\":false,\"modified\":true,\"added\":false}]",
                            "selector": "#kameleoonId1363001, [data-kameleoon-id=\"1363001\"]"
                        },
                        "currentQuery": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > div:first-child > div:first-child > h1:first-child > span:first-child"
                    }, {
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > div:first-child > div:first-child > h1:first-child > span:first-child > span:first-child > span:first-child",
                        "options": {
                            "htmlContent": "<span data-kameleoon-class=\"c008-2e1a\">Better Food. For Pets And The Planet.</span>",
                            "kameleoonId": 1363002,
                            "autoGeneratedSelector": true,
                            "attributesData": "[{\"attributeName\":\"style\",\"attributeValue\":\"font-family:moderat;\",\"removed\":false,\"modified\":true,\"added\":false},{\"attributeName\":\"data-kameleoon-class\",\"attributeValue\":\"\",\"removed\":true,\"modified\":true,\"added\":false}]",
                            "selector": "#kameleoonId1363002, [data-kameleoon-id=\"1363002\"]"
                        },
                        "currentQuery": "#kameleoonId1362983 > span:first-child > span:first-child"
                    }]
                }, {
                    "name": "Variation 4",
                    "id": 776235,
                    "css": "",
                    "elementSets": [{
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > div:first-child > div:first-child > h1:first-child > span:first-child",
                        "options": {
                            "htmlContent": "<span style=\"font-family:moderat;\" data-kameleoon-class=\"294d-b172\"><span style=\"color: white;\" data-kameleoon-class=\"aa19-15eb\">Zero Fillers. Zero Doubt. All Natural Pet Food</span></span>",
                            "kameleoonId": 1363000,
                            "autoGeneratedSelector": true,
                            "attributesData": "[{\"attributeName\":\"style\",\"attributeValue\":\"font-size:72px;\",\"removed\":false,\"modified\":true,\"added\":false}]",
                            "selector": "#kameleoonId1363000, [data-kameleoon-id=\"1363000\"]"
                        },
                        "currentQuery": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > div:first-child > div:first-child > h1:first-child > span:first-child"
                    }]
                }, {
                    "name": "Variation 3",
                    "id": 776236,
                    "css": "",
                    "elementSets": [{
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > div:first-child > div:first-child > h1:first-child > span:first-child > span:first-child > span:first-child",
                        "options": {
                            "htmlContent": "<span style=\"font-family:moderat;\" data-kameleoon-class=\"021d-2e2a\"><span data-kameleoon-class=\"ca22-dedc\" style=\"color: white;\">Pet Food With Ingredients You Can Trust (And Trace).</span></span>",
                            "kameleoonId": 1362998,
                            "autoGeneratedSelector": true,
                            "attributesData": "[{\"attributeName\":\"style\",\"attributeValue\":\"font-size:72px;\",\"removed\":false,\"modified\":true,\"added\":false},{\"attributeName\":\"data-kameleoon-class\",\"attributeValue\":\"\",\"removed\":true,\"modified\":true,\"added\":false}]",
                            "selector": "#kameleoonId1362998, [data-kameleoon-id=\"1362998\"]"
                        },
                        "currentQuery": "#kameleoonId1362996 > span:first-child > span:first-child"
                    }, {
                        "selector": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > div:first-child > div:first-child > h1:first-child > span:first-child",
                        "options": {
                            "htmlContent": "<span style=\"font-family:moderat;\" data-kameleoon-class=\"9f47-efd2\"><span style=\"color: white;\" data-kameleoon-class=\"ca22-dedc\">Zero Fillers. Zero Doubt. All Natural Pet Food</span></span>",
                            "kameleoonId": 1362999,
                            "autoGeneratedSelector": true,
                            "attributesData": "[{\"attributeName\":\"style\",\"attributeValue\":\"font-size:72px;\",\"removed\":false,\"modified\":true,\"added\":false}]",
                            "selector": "#kameleoonId1362999, [data-kameleoon-id=\"1362999\"]"
                        },
                        "currentQuery": "#gatsby-focus-wrapper > div:first-child > div:nth-of-type(2) > div:first-child > div:first-child > div:nth-of-type(3) > div:first-child > div:first-child > div:first-child > h1:first-child > span:first-child"
                    }]
                }, {
                    "id": 0,
                    "name": "Reference",
                    "css": "",
                    "elementSets": []
                }, {
                    "id": null,
                    "name": "Excluded"
                }],
                "goals": [{
                    "id": 243407,
                    "name": "Retention rate",
                    "type": "ENGAGEMENT"
                }, {
                    "id": 268588,
                    "name": "Transaction",
                    "type": "CUSTOM"
                }, {
                    "id": 272323,
                    "name": "Quiz - Begin",
                    "type": "CLICK"
                }, {
                    "id": 272325,
                    "name": "Quiz - Complete",
                    "type": "URL",
                    "url": "(.*)quiz-results(.*)"
                }, {
                    "id": 272340,
                    "name": "Subscription Purchase Complete",
                    "type": "URL",
                    "url": "(.*)/r/purchase/thanks(.*)"
                }, {
                    "id": 275779,
                    "name": "Recharge checkout",
                    "type": "URL",
                    "url": "https\\://checkout\\.rechargeapps\\.com/r/purchase/thanks(.*)"
                }, {
                    "id": 275780,
                    "name": "Shopify Purchase",
                    "type": "URL",
                    "url": "(.*)/thank_you(.*)"
                }, {
                    "id": 275781,
                    "name": "HP Banner Clicks",
                    "type": "CUSTOM"
                }, {
                    "id": 275916,
                    "name": "Clicks Closing Cross Sticky Banner",
                    "type": "CUSTOM"
                }, {
                    "id": 275917,
                    "name": "Clicks Shop Now Sticky Banner",
                    "type": "CUSTOM"
                }, {
                    "id": 276159,
                    "name": "Add to Cart",
                    "type": "CLICK"
                }, {
                    "id": 277457,
                    "name": "Quiz - Begin",
                    "type": "URL",
                    "url": "^https\\://openfarmpet\\.com/quiz/$"
                }, {
                    "id": 278021,
                    "name": "Cancel subscription clicks",
                    "type": "CLICK"
                }, {
                    "id": 278883,
                    "name": "Click Link Secret Sale Banner",
                    "type": "CLICK"
                }, {
                    "id": 279155,
                    "name": "Scroll Depth",
                    "type": "SCROLL",
                    "scrollTrackingType": "PERCENTAGE",
                    "scrollTrackingValue": 60
                }, {
                    "id": 283500,
                    "name": "Recharge Purchase",
                    "type": "CUSTOM"
                }, {
                    "id": 286401,
                    "name": "PDP Visit",
                    "type": "URL",
                    "url": "https\\://openfarmpet\\.com/products(.*)"
                }, {
                    "id": 286503,
                    "name": "Checkout Page Reached (Shopify)",
                    "type": "URL",
                    "url": "(.*)/checkouts(.*)"
                }, {
                    "id": 286506,
                    "name": "Shipping Page Reached (Shopify)",
                    "type": "URL",
                    "url": "(.*)shipping_method(.*)"
                }, {
                    "id": 286508,
                    "name": "Checkout Page Reached (Recharge)",
                    "type": "URL",
                    "url": "(.*)/r/checkout/(.*)"
                }, {
                    "id": 286510,
                    "name": "Shipping Page Reached (Recharge)",
                    "type": "URL",
                    "url": "(.*)/r/pay/(.*)"
                }],
                "scriptProduceTime": 1661897393480,
                "timeZone": "US/Eastern",
                "abtestingSetup": true,
                "personalizationSetup": true,
                "boLocale": "ENGLISH",
                "kameleoonByteLength": 0,
                "BASE_EDITOR_URL": "//static.kameleoon.com/js/editor/",
                "IFRAME_ORIGIN": "https://q8qxwhag8x.kameleoon.eu",
                "trackerContinent": "eu-",
                "useMultipleSiteCodes": true,
                "customIntegrations": [{
                    "name": "Klaviyo",
                    "jsCode": "// Define the name of the current experiment or personalization\nconst name = experimentName ? experimentName : personalizationName;\n\n// Define the id of the current experiment or personalization\nconst id = experimentID ? experimentID : personalizationID;\n\n// Define the prefix\nconst type = experimentID ? \"AB\" : \"PERSO\";\n\nwindow._learnq = window._learnq || [];\n\n_learnq.push([\"track\", \"Kameleoon Tracking\", {\n    \"type\": type,\n    \"campaignID\": id,\n    \"campaignName\": name,\n    \"variationID\": variationID,\n    \"variationName\": variationName\n}]);"
                }],
                "globalScript": "console.log(\"[kameleoon support]\");try{var kameleoonEventsTracker=[{id:272323,selector:\"li.desktop-quiz-toggle\"},{id:276159,selector:\".atc-container button\"},{id:278021,selector:\"#gatsby-focus-wrapper > div > div > div.wrapper__WrapperWrap-sc-ys6b8h-0.ggPWPO.account-wrapper > div.account-sections-container > div > div > div.wrapper__WrapperWrap-sc-ys6b8h-0.ggPWPO > div > div.left-column > div.actions-wrapper > div.cancel.flex.gap-15\"},{id:278883,selector:\".widgetCookieBanner__msg\"}],createEventTracking=function(e,n){for(var o=function(e){if(!Kameleoon.Internals.runtime.touchMoveEvent){if(n.universalAnalyticsTracking){var o=Kameleoon.Tracking.findUniversalAnalyticsObject();void 0!==o&&o(Kameleoon.Tracking.obtainUniversalAnalyticsTrackerPrefix()+\"send\",\"event\",n.category,n.action,n.name,void 0)}Kameleoon.API.Goals.processConversion(n.id)}},r=0;r<e.length;++r)Kameleoon.Utils.addEventListener(e[r],Kameleoon.Internals.runtime.mouseDownEvent,o,!0)},kameleoonIntervalId=Kameleoon.Utils.setInterval((function(){for(var e=kameleoonEventsTracker.length-1;e>=0;--e){var n=Kameleoon.Utils.querySelectorAll(kameleoonEventsTracker[e].selector);n.length>0&&(createEventTracking(n,kameleoonEventsTracker[e]),kameleoonEventsTracker.splice(e,1))}0==kameleoonEventsTracker.length&&window.clearInterval(kameleoonIntervalId)}),250)}catch(e){console.log(\"An error occurred in your custom JavaScript Kameleoon tracking function, please check your code.\"),console.log(e,e.message)}",
                "singlePageSupport": true,
                "track": true,
                "ip": true,
                "trackerExcludedIPRanges": [],
                "useProduct": true,
                "Gatherer": "eyJtYXhWaXNpdElkbGVEdXJhdGlvbiI6MTgwMDAwMCwiZW5hYmxlSW1hZ2VzRGV0ZWN0aW9uQ2FjaGVUaW1lb3V0Q29tcHV0YXRpb24iOmZhbHNlLCJkaXJlY3ROb25lUmVmZXJyZXJPbmx5Rmlyc3QiOmZhbHNlLCJjdXN0b21TY3JpcHRCZWZvcmUiOiIiLCJpbnRlcmVzdHMiOnt9LCJpbnRlcmVzdHNJbWFnZXNMaXN0cyI6W10sImludGVyZXN0c0ltYWdlc0xpc3RzRmlsZVVybCI6bnVsbCwiYnJvd3NlcnMiOnsiMCI6eyJuYW1lIjoiQ0hST01FIn0sIjEiOnsibmFtZSI6IkVYUExPUkVSIn0sIjIiOnsibmFtZSI6IkZJUkVGT1gifSwiMyI6eyJuYW1lIjoiU0FGQVJJIn0sIjQiOnsibmFtZSI6Ik9QRVJBIn19LCJvc3MiOnsiMCI6eyJuYW1lIjoiV0lORE9XUyJ9LCIxIjp7Im5hbWUiOiJNQUMifSwiMiI6eyJuYW1lIjoiSU9TIn0sIjMiOnsibmFtZSI6IkxJTlVYIn0sIjQiOnsibmFtZSI6IkFORFJPSUQifSwiNSI6eyJuYW1lIjoiV0lORE9XUyBQSE9ORSJ9fSwibm9SZWZlcnJlclBhZ2VzIjpbXSwicmVmZXJyZXJzIjp7IjAiOnsibmFtZSI6Ikdvb2dsZSBBZFdvcmRzIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7ImFuZE1ldGhvZCI6IiIsIm1ldGhvZCI6IlJFRkVSUkVSX1JFR0VYIiwiYW5kIjpmYWxzZSwiYW5kUGFyYW1ldGVycyI6IiIsInBhcmFtZXRlcnMiOiJeLitcXFxcLmdvb2dsZShcXFxcLmNvbT8pP1xcXFwuW14vXFxcXC5dKy9hY2xrKFtcXFxcPyYjXS4qfCkkIn0seyJhbmRNZXRob2QiOiIiLCJtZXRob2QiOiJVUkxfUkVHRVgiLCJhbmQiOmZhbHNlLCJhbmRQYXJhbWV0ZXJzIjoiIiwicGFyYW1ldGVycyI6IltcXFxcPyYjXWdjbGlkPSJ9XX0sIjEiOnsibmFtZSI6Ikdvb2dsZSBPcmdhbmljIFNlYXJjaCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJhbmRNZXRob2QiOiIiLCJtZXRob2QiOiJSRUZFUlJFUl9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiXi4rXFxcXC5nb29nbGUoXFxcXC5jb20/KT9cXFxcLlteL1xcXFwuXSsvKD8hYWNsa3xpbWdyZXMpLipbXFxcXD8mI11xPS4qKFtcXFxcPyYjXS4qfCkkIn0seyJhbmRNZXRob2QiOiIiLCJtZXRob2QiOiJSRUZFUlJFUl9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiXi4rXFxcXC5nb29nbGUoXFxcXC5jb20/KT9cXFxcLlteL1xcXFwuXSsvPyQifV19LCIyIjp7Im5hbWUiOiJCaW5nIE9yZ2FuaWMgU2VhcmNoIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7ImFuZE1ldGhvZCI6IiIsIm1ldGhvZCI6IlJFRkVSUkVSX1JFR0VYIiwiYW5kIjpmYWxzZSwiYW5kUGFyYW1ldGVycyI6IiIsInBhcmFtZXRlcnMiOiJeLitcXFxcLmJpbmdcXFxcLlteL1xcXFwuXSsvLipbXFxcXD8mI11xPS4qKFtcXFxcPyYjXS4qfCkkIn1dfSwiMyI6eyJuYW1lIjoiWWFob28gT3JnYW5pYyBTZWFyY2giLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3siYW5kTWV0aG9kIjoiIiwibWV0aG9kIjoiUkVGRVJSRVJfUkVHRVgiLCJhbmQiOmZhbHNlLCJhbmRQYXJhbWV0ZXJzIjoiIiwicGFyYW1ldGVycyI6Il4uK1xcXFwueWFob29cXFxcLlteL1xcXFwuXSsvLipbXFxcXD8mI11wPS4qKFtcXFxcPyYjXS4qfCkkIn1dfSwiNCI6eyJuYW1lIjoiQmFpZHUgT3JnYW5pYyBTZWFyY2giLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3siYW5kTWV0aG9kIjoiIiwibWV0aG9kIjoiUkVGRVJSRVJfUkVHRVgiLCJhbmQiOmZhbHNlLCJhbmRQYXJhbWV0ZXJzIjoiIiwicGFyYW1ldGVycyI6Il4uK1xcXFwuYmFpZHVcXFxcLlteL1xcXFwuXSsvLipbXFxcXD8mI113ZD0uKihbXFxcXD8mI10uKnwpJCJ9XX19LCJrZXlQYWdlcyI6e30sImtleVdvcmRzIjpbXSwiY3VzdG9tRGF0YSI6eyI2Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJSQyBEb2ciLCJudW1iZXJWYWx1ZXMiOi0yLCJzY29wZSI6IlZJU0lUT1IiLCJ0eXBlIjoiVU5JUVVFIn0sIjciOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IlJDIENhdCIsIm51bWJlclZhbHVlcyI6LTIsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifSwiMTAiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IkN1c3RvbWVyIHN0YXR1cyIsIm51bWJlclZhbHVlcyI6LTEsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJVTklRVUUifX19"
            }
        };
    })();
    if (window.kameleoonLightIframe) {
        if (window.kameleoonExternalIFrameLoadedData) {
            eval(window.kameleoonExternalIFrameLoadedData);
            Kameleoon.Analyst.load();
        }
    } else {
        Kameleoon.Analyst.load();
    }
}