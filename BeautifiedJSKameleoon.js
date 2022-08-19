[Command: /Library/Frameworks / Python.framework / Versions / 3.10 / bin / python3 - u / Users / fabiangmeindl / Documents / code / BeautifulSoupFirstTry / KameleoonJSreader.py]
if (undefined === window.Kameleoon) {
   (function () {
         ! function (e, t) {
            e.kbowser = t()
         }(this, (function () {
            return function (e) {
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
               return r.m = e, r.c = t, r.d = function (e, t, n) {
                  r.o(e, t) || Object.defineProperty(e, t, {
                     enumerable: !0,
                     get: n
                  })
               }, r.r = function (e) {
                  "undefined" != typeof Symbol & amp; & amp;
                  Symbol.toStringTag & amp; & amp;
                  Object.defineProperty(e, Symbol.toStringTag, {
                     value: "Module"
                  }), Object.defineProperty(e, "__esModule", {
                     value: !0
                  })
               }, r.t = function (e, t) {
                  if (1 & amp; t & amp; & amp;
                     (e = r(e)), 8 & amp; t) return e;
                  if (4 & amp; t & amp; & amp;
                     "object" == typeof e & amp; & amp; e & amp; & amp; e.__esModule) return e;
                  var n = Object.create(null);
                  if (r.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                     }), 2 & amp; t & amp; & amp;
                     "string" != typeof e)
                     for (var i in e) r.d(n, i, function (t) {
                        return e[t]
                     }.bind(null, i));
                  return n
               }, r.n = function (e) {
                  var t = e & amp; & amp;
                  e.__esModule ? function () {
                     return e.default
                  } : function () {
                     return e
                  };
                  return r.d(t, "a", t), t
               }, r.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t)
               }, r.p = "", r(r.s = 90)
            }({
                  17: function (e, t, r) {
                     "use strict";
                     t.__esModule = !0, t.default = void 0;
                     var n = r(18),
                        i = function () {
                           function e() {}
                           return e.getFirstMatch = function (e, t) {
                              var r = t.match(e);
                              return r & amp; & amp;
                              r.length & gt;
                              0 & amp; & amp;
                              r[1] || ""
                           }, e.getSecondMatch = function (e, t) {
                              var r = t.match(e);
                              return r & amp; & amp;
                              r.length & gt;
                              1 & amp; & amp;
                              r[2] || ""
                           }, e.matchAndReturnConst = function (e, t, r) {
                              if (e.test(t)) return r
                           }, e.getWindowsVersionName = function (e) {
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
                           }, e.getMacOSVersionName = function (e) {
                              var t = e.split(".").splice(0, 2).map((function (e) {
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
                           }, e.getAndroidVersionName = function (e) {
                              var t = e.split(".").splice(0, 2).map((function (e) {
                                 return parseInt(e, 10) || 0
                              }));
                              if (t.push(0), !(1 === t[0] & amp; & amp; t[1] & lt; 5)) return 1 === t[0] & amp; & amp;
                              t[1] & lt;
                              6 ? "Cupcake" : 1 === t[0] & amp; & amp;
                              t[1] & gt; = 6 ? "Donut" : 2 === t[0] & amp; & amp;
                              t[1] & lt;
                              2 ? "Eclair" : 2 === t[0] & amp; & amp;
                              2 === t[1] ? "Froyo" : 2 === t[0] & amp; & amp;
                              t[1] & gt;
                              2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] & amp; & amp;
                              t[1] & lt;
                              1 ? "Ice Cream Sandwich" : 4 === t[0] & amp; & amp;
                              t[1] & lt;
                              4 ? "Jelly Bean" : 4 === t[0] & amp; & amp;
                              t[1] & gt; = 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                           }, e.getVersionPrecision = function (e) {
                              return e.split(".").length
                           }, e.compareVersions = function (t, r, n) {
                              void 0 === n & amp; & amp;
                              (n = !1);
                              var i = e.getVersionPrecision(t),
                                 s = e.getVersionPrecision(r),
                                 a = Math.max(i, s),
                                 o = 0,
                                 u = e.map([t, r], (function (t) {
                                    var r = a - e.getVersionPrecision(t),
                                       n = t + new Array(r + 1).join(".0");
                                    return e.map(n.split("."), (function (e) {
                                       return new Array(20 - e.length).join("0") + e
                                    })).reverse()
                                 }));
                              for (n & amp; & amp;
                                 (o = a - Math.min(i, s)), a -= 1; a & gt; = o;) {
                                 if (u[0][a] & gt; u[1][a]) return 1;
                                 if (u[0][a] === u[1][a]) {
                                    if (a === o) return 0;
                                    a -= 1
                                 } else if (u[0][a] < u[1][a]) return -1
                              }
                           }, e.map = function (e, t) {
                              var array(i = ""
                                 array.prototype.find.call(e, t);
                                 for (r = "0,n=e.length;r<n;r+=1){var"
                                    array.prototype.map.call(e, t);
                                    for (r = "0;r<e.length;r+=1)n.push(t(e[r]));return"
                                       i = "e[r];if(t(i,r))return"
                                       i
                                    }
                                 }, e.assign = "function(e){for(var"
                                 n
                              }, e.find = "function(e,t){var"
                              r, n = "[];if(Array.prototype.map)return"
                              r, n;
                              if (array.prototype.find) return = ""
                              t, r, n = "e,i=arguments.length,s=new" > 1 ? i - 1 : 0), a = 1;
                           a < i;
                           a++) s[a - 1] = arguments[a];
                     if (object.assign) return 0 = "e&&(e=!1);var"
                     0;
                     t.browser_aliases_map = '{"Amazon'
                     0;
                     var = ""
                     4 ",roku:"
                     roku "};t.engine_map='{EdgeHTML:"
                     EdgeHTML ",Blink:"
                     Blink ",Trident:"
                     Trident ",Presto:"
                     Presto ",Gecko:"
                     Gecko ",WebKit:"
                     WebKit "}},90:function(e,t,r){"
                     use ' a='
                     e[t];
                     "string" == typeof ' a&&(r[t]="a,n+=1)})),n" a(e,t){for(var="" a?(i[t]='
                     a, s += 1): "object" == typeof ' android",seamonkey:"seamonkey",sleipnir:"sleipnir",swing:"swing",tizen:"tizen",uc:"uc="" android":"samsung_internet",seamonkey:"seamonkey",sleipnir:"sleipnir",swing:"swing",tizen:"tizen","uc="" array)return="" be="" browser="" browser",bada:"bada",blackberry:"blackberry",chrome:"chrome",chromium:"chromium",electron:"electron",epiphany:"epiphany",firefox:"firefox",focus:"focus",generic:"generic",googlebot:"googlebot",google_search:"google="" browser",naver:"naver="" browser",opera:"opera",opera_coast:"opera="" browser",qqlite:"qq="" browser",vivaldi:"vivaldi",webos:"webos="" browser",wechat:"wechat",yandex:"yandex="" browser":"android",bada:"bada",blackberry:"blackberry",chrome:"chrome",chromium:"chromium",electron:"electron",epiphany:"epiphany",firefox:"firefox",focus:"focus",generic:"generic","google="" browser":"mz","naver="" browser":"naver",opera:"opera","opera="" browser":"uc",vivaldi:"vivaldi","webos="" browser":"webos",wechat:"wechat","yandex="" browser":"yandex",roku:"roku"};t.browser_map=' {
                     amazon_silk: "Amazon' browser"
                  };t.platforms_map = '{tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows'
                  can 't="" coast",phantomjs:"phantomjs",puffin:"puffin",qupzilla:"qupzilla",qq:"qq="" coast":"opera_coast",phantomjs:"phantomjs",puffin:"puffin",qupzilla:"qupzilla",qq:"qq",qqlite:"qqlite",safari:"safari",sailfish:"sailfish","samsung="" d="function(){function" e="this;this.parsedResult.engine={};var" e&&e.__esmodule?e:{default:e}}var="" e&&null!="e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return" e(){}var="" e(e,t){if(void="" e)throw="" e.getparser="function(e,t){if(void" e.test(t)}));throw="" e.test(this._ua)},t.parsebrowser="function(){var" e?string(t).tolowercase()||"":t||""},t.getosversion="function(){return" e?string(t).tolowercase()||"":t||""},t.parseplatform="function(){var" e?string(this.getbrowser().name).tolowercase()||"":this.getbrowser().name||""},t.getbrowserversion="function(){return" e?string(this.getengine().name).tolowercase()||"":this.getengine().name||""},t.parseengine="function(){var" edge",mz:"mz="" edge":"edge","mz="" empty");this._ua="e,this.parsedResult={},!0!==t&&this.parse()}var" error("browser'
                  s = ""
                  error("useragent="
                     " explorer", k_meleon: "k-meleon", maxthon: "maxthon", edge: "microsoft="
                     " explorer": "ie", "k-meleon": "k_meleon", maxthon: "maxthon", "microsoft="
                     " e},e.getbrowseralias="
                     function (e) {
                        return " for="
                        " function="
                        " i.default(e).getresult()},t='e,n=[{key:"
                        BROWSER_MAP ",get:function(){return' i.default(e,t)},e.parse="
                        function (e) {
                           return " instanceof="
                           " internet="
                           " is="
                           " lite", safari: "safari", sailfish: "sailfish", samsung_internet: "samsung="
                           " n="
                           u(r(92)), i = u(r(93)), s = u(r(94)), a = u(r(95)), o = u(r(17));

                           function " n&&(n.writable="!0), Object.defineProperty(e, n.key, n)
                     }
                  }
                  var " n,i="(n = r(91)) & amp; & amp;n.__esModule ? n : {
                     default: n
                  },
                  s = r(18);

                  function " n.browser_aliases_map[e]},e.getbrowsertypebyalias="
                  function (e) {
                     return " n.browser_map[e]||"
                     "},e}();t.default='i,e.exports=t.default},18:function(e,t,r){"
                     use ' new="" not="" o="function(){function" o.default.assign({},this.parsedresult)},t.satisfies="function(e){var" object.assign.apply(object,[e].concat(s));var="" os",playstation4:"playstation="" parameter="" phone",windows:"windows",macos:"macos",ios:"ios",android:"android",webos:"webos",blackberry:"blackberry",bada:"bada",tizen:"tizen",linux:"linux",chromeos:"chrome="" r="0;r<t.length;r++){var" s.browser_map}},{key:"engine_map",get:function(){return="" s.engine_map}},{key:"os_map",get:function(){return="" s.os_map}},{key:"platforms_map",get:function(){return="" s.platforms_map}}],(r='
                     null) & amp; & amp;a(t.prototype, r),
                  n & amp; & amp;a(t, n),
                  e
               }(); t.default = o, e.exports = t.default
            }, 91: function (e, t, r) {
               "use' search",
               ie: "internet="
               " search": "google_search",
               googlebot: "googlebot",
               "internet="
               " should="
               " silk",
               android: "android="
               " silk": "amazon_silk",
               "android="
               " strict";t.__esmodule = "!0,t.default=void"
               string ");return="
               " t="
               this,
               r = {},
               n = 0,
               i = {},
               s = 0;
               if (Object.keys(e).forEach((function (t) {
                           var " t&&(this.parsedresult.browser="
                           t.describe(this.getUA())), this.parsedResult.browser
                     }, t.getBrowser = function () {
                        return " t&&(this.parsedresult.engine="
                        t.describe(this.getUA())), this.parsedResult.engine
                  }, t.parse = function () {
                     return " t&&(this.parsedresult.os="
                     t.describe(this.getUA())), this.parsedResult.os
               },
               t.getOSName = function (e) {
                  var " t&&(this.parsedresult.platform="
                  t.describe(this.getUA())),
               this.parsedResult.platform
            }, t.getEngine = function () {
               return " t,r,n;return="
               " t.getua="
               function () {
                  return " t.test(e);if(t.test="
                  " t.test)return="
                  " t.test.some((function(t){return="
                  " test="
                  " this._ua},t.test="
                  function (e) {
                     return " this.getbrowser().version},t.getos="
                     function () {
                        return " this.getos().version},t.getplatform="
                        function () {
                           return " this.parsebrowser(),this.parseos(),this.parseplatform(),this.parseengine(),this},t.getresult="
                           function () {
                              return " this.parsedresult.browser?this.parsedresult.browser:this.parsebrowser()},t.getbrowsername="
                              function (e) {
                                 return " this.parsedresult.engine?this.parsedresult.engine:this.parseengine()},t.getenginename="
                                 function (e) {
                                    return " this.parsedresult.os?this.parsedresult.os:this.parseos()},t.parseos="
                                    function () {
                                       var " this.parsedresult.platform?this.parsedresult.platform:this.parseplatform()},t.getplatformtype="
                                       function (e) {
                                          void " u(e){return="
                                          " valid")
                                    }));
                              return = ""
                              whale = "" > 0) {
                              var a = Object.keys(r),
                                 u = o.default.find(a, (function (e) {
                                    return t.isOS(e)
                                 }));
                              if (u) {
                                 var d = this.satisfies(r[u]);
                                 if (void 0 !== d) return d
                              }
                              var c = o.default.find(a, (function (e) {
                                 return t.isPlatform(e)
                              }));
                              if (c) {
                                 var f = this.satisfies(r[c]);
                                 if (void 0 !== f) return f
                              }
                           }
                           if (s & gt; 0) {
                              var l = Object.keys(i),
                                 h = o.default.find(l, (function (e) {
                                    return t.isBrowser(e, !0)
                                 }));
                              if (void 0 !== h) return this.compareVersion(i[h])
                           }
                        }, t.isBrowser = function (e, t) {
                           void 0 === t & amp; & amp;
                           (t = !1);
                           var r = this.getBrowserName().toLowerCase(),
                              n = e.toLowerCase(),
                              i = o.default.getBrowserTypeByAlias(n);
                           return t & amp; & amp;
                           i & amp; & amp;
                           (n = i.toLowerCase()), n === r
                        }, t.compareVersion = function (e) {
                           var t = [0],
                              r = e,
                              n = !1,
                              i = this.getBrowserVersion();
                           if ("string" == typeof i) return ">" === e[0] || "<" === e[0] ? (r = e.substr(1), "=" === e[1] ? (n = !0, r = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? r = e.substr(1) : "~" === e[0] & amp; & amp;
                           (n = !0, r = e.substr(1)), t.indexOf(o.default.compareVersions(i, r, n)) & gt; - 1
                        }, t.isOS = function (e) {
                           return this.getOSName(!0) === String(e).toLowerCase()
                        }, t.isPlatform = function (e) {
                           return this.getPlatformType(!0) === String(e).toLowerCase()
                        }, t.isEngine = function (e) {
                           return this.getEngineName(!0) === String(e).toLowerCase()
                        }, t.is = function (e) {
                           return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e)
                        }, t.some = function (e) {
                           var t = this;
                           return void 0 === e & amp; & amp;
                           (e = []), e.some((function (e) {
                              return t.is(e)
                           }))
                        }, e
                     }();
                     t.default = d, e.exports = t.default
                  }, 92: function (e, t, r) {
                     "use strict";
                     t.__esModule = !0, t.default = void 0;
                     var n, i = (n = r(17)) & amp; & amp;
                     n.__esModule ? n : {
                        default: n
                     };
                     var s = /version\/(\d+(\.?_?\d+)+)/i,
                        a = [{
                           test: [/googlebot/i],
                           describe: function (e) {
                              var t = {
                                    name: "Googlebot"
                                 },
                                 r = i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/opera/i],
                           describe: function (e) {
                              var t = {
                                    name: "Opera"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/opr\/|opios/i],
                           describe: function (e) {
                              var t = {
                                    name: "Opera"
                                 },
                                 r = i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/SamsungBrowser/i],
                           describe: function (e) {
                              var t = {
                                    name: "Samsung Internet for Android"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/Whale/i],
                           describe: function (e) {
                              var t = {
                                    name: "NAVER Whale Browser"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/MZBrowser/i],
                           describe: function (e) {
                              var t = {
                                    name: "MZ Browser"
                                 },
                                 r = i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/focus/i],
                           describe: function (e) {
                              var t = {
                                    name: "Focus"
                                 },
                                 r = i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/swing/i],
                           describe: function (e) {
                              var t = {
                                    name: "Swing"
                                 },
                                 r = i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/coast/i],
                           describe: function (e) {
                              var t = {
                                    name: "Opera Coast"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/yabrowser/i],
                           describe: function (e) {
                              var t = {
                                    name: "Yandex Browser"
                                 },
                                 r = i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/ucbrowser/i],
                           describe: function (e) {
                              var t = {
                                    name: "UC Browser"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/Maxthon|mxios/i],
                           describe: function (e) {
                              var t = {
                                    name: "Maxthon"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/epiphany/i],
                           describe: function (e) {
                              var t = {
                                    name: "Epiphany"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/puffin/i],
                           describe: function (e) {
                              var t = {
                                    name: "Puffin"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/sleipnir/i],
                           describe: function (e) {
                              var t = {
                                    name: "Sleipnir"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/k-meleon/i],
                           describe: function (e) {
                              var t = {
                                    name: "K-Meleon"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/micromessenger/i],
                           describe: function (e) {
                              var t = {
                                    name: "WeChat"
                                 },
                                 r = i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/qqbrowser/i],
                           describe: function (e) {
                              var t = {
                                    name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                                 },
                                 r = i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/msie|trident/i],
                           describe: function (e) {
                              var t = {
                                    name: "Internet Explorer"
                                 },
                                 r = i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/\sedg\//i],
                           describe: function (e) {
                              var t = {
                                    name: "Microsoft Edge"
                                 },
                                 r = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/edg([ea]|ios)/i],
                           describe: function (e) {
                              var t = {
                                    name: "Microsoft Edge"
                                 },
                                 r = i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/vivaldi/i],
                           describe: function (e) {
                              var t = {
                                    name: "Vivaldi"
                                 },
                                 r = i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/seamonkey/i],
                           describe: function (e) {
                              var t = {
                                    name: "SeaMonkey"
                                 },
                                 r = i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/sailfish/i],
                           describe: function (e) {
                              var t = {
                                    name: "Sailfish"
                                 },
                                 r = i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/silk/i],
                           describe: function (e) {
                              var t = {
                                    name: "Amazon Silk"
                                 },
                                 r = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/phantom/i],
                           describe: function (e) {
                              var t = {
                                    name: "PhantomJS"
                                 },
                                 r = i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/slimerjs/i],
                           describe: function (e) {
                              var t = {
                                    name: "SlimerJS"
                                 },
                                 r = i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                           describe: function (e) {
                              var t = {
                                    name: "BlackBerry"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/(web|hpw)[o0]s/i],
                           describe: function (e) {
                              var t = {
                                    name: "WebOS Browser"
                                 },
                                 r = i.default.getFirstMatch(s, e) || i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/bada/i],
                           describe: function (e) {
                              var t = {
                                    name: "Bada"
                                 },
                                 r = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/tizen/i],
                           describe: function (e) {
                              var t = {
                                    name: "Tizen"
                                 },
                                 r = i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/qupzilla/i],
                           describe: function (e) {
                              var t = {
                                    name: "QupZilla"
                                 },
                                 r = i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/firefox|iceweasel|fxios/i],
                           describe: function (e) {
                              var t = {
                                    name: "Firefox"
                                 },
                                 r = i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/electron/i],
                           describe: function (e) {
                              var t = {
                                    name: "Electron"
                                 },
                                 r = i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/chromium/i],
                           describe: function (e) {
                              var t = {
                                    name: "Chromium"
                                 },
                                 r = i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/chrome|crios|crmo/i],
                           describe: function (e) {
                              var t = {
                                    name: "Chrome"
                                 },
                                 r = i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/GSA/i],
                           describe: function (e) {
                              var t = {
                                    name: "Google Search"
                                 },
                                 r = i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: function (e) {
                              var t = !e.test(/like android/i),
                                 r = e.test(/android/i);
                              return t & amp; & amp;
                              r
                           },
                           describe: function (e) {
                              var t = {
                                    name: "Android Browser"
                                 },
                                 r = i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/playstation 4/i],
                           describe: function (e) {
                              var t = {
                                    name: "PlayStation 4"
                                 },
                                 r = i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/safari|applewebkit/i],
                           describe: function (e) {
                              var t = {
                                    name: "Safari"
                                 },
                                 r = i.default.getFirstMatch(s, e);
                              return r & amp; & amp;
                              (t.version = r), t
                           }
                        }, {
                           test: [/.*/i],
                           describe: function (e) {
                              var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                              return {
                                 name: i.default.getFirstMatch(t, e),
                                 version: i.default.getSecondMatch(t, e)
                              }
                           }
                        }];
                     t.default = a, e.exports = t.default
                  }, 93: function (e, t, r) {
                     "use strict";
                     t.__esModule = !0, t.default = void 0;
                     var n, i = (n = r(17)) & amp; & amp;
                     n.__esModule ? n : {
                        default: n
                     }, s = r(18);
                     var a = [{
                        test: [/Roku\/DVP/],
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                           return {
                              name: s.OS_MAP.Roku,
                              version: t
                           }
                        }
                     }, {
                        test: [/windows phone/i],
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                           return {
                              name: s.OS_MAP.WindowsPhone,
                              version: t
                           }
                        }
                     }, {
                        test: [/windows /i],
                        describe: function (e) {
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
                        describe: function (e) {
                           var t = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                           return {
                              name: s.OS_MAP.iOS,
                              version: t
                           }
                        }
                     }, {
                        test: [/macintosh/i],
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                              r = i.default.getMacOSVersionName(t),
                              n = {
                                 name: s.OS_MAP.MacOS,
                                 version: t
                              };
                           return r & amp; & amp;
                           (n.versionName = r), n
                        }
                     }, {
                        test: [/(ipod|iphone|ipad)/i],
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                           return {
                              name: s.OS_MAP.iOS,
                              version: t
                           }
                        }
                     }, {
                        test: function (e) {
                           var t = !e.test(/like android/i),
                              r = e.test(/android/i);
                           return t & amp; & amp;
                           r
                        },
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                              r = i.default.getAndroidVersionName(t),
                              n = {
                                 name: s.OS_MAP.Android,
                                 version: t
                              };
                           return r & amp; & amp;
                           (n.versionName = r), n
                        }
                     }, {
                        test: [/(web|hpw)[o0]s/i],
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                              r = {
                                 name: s.OS_MAP.WebOS
                              };
                           return t & amp; & amp;
                           t.length & amp; & amp;
                           (r.version = t), r
                        }
                     }, {
                        test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || i.default.getFirstMatch(/\bbb(\d+)/i, e);
                           return {
                              name: s.OS_MAP.BlackBerry,
                              version: t
                           }
                        }
                     }, {
                        test: [/bada/i],
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                           return {
                              name: s.OS_MAP.Bada,
                              version: t
                           }
                        }
                     }, {
                        test: [/tizen/i],
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                           return {
                              name: s.OS_MAP.Tizen,
                              version: t
                           }
                        }
                     }, {
                        test: [/linux/i],
                        describe: function () {
                           return {
                              name: s.OS_MAP.Linux
                           }
                        }
                     }, {
                        test: [/CrOS/],
                        describe: function () {
                           return {
                              name: s.OS_MAP.ChromeOS
                           }
                        }
                     }, {
                        test: [/PlayStation 4/],
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                           return {
                              name: s.OS_MAP.PlayStation4,
                              version: t
                           }
                        }
                     }];
                     t.default = a, e.exports = t.default
                  }, 94: function (e, t, r) {
                     "use strict";
                     t.__esModule = !0, t.default = void 0;
                     var n, i = (n = r(17)) & amp; & amp;
                     n.__esModule ? n : {
                        default: n
                     }, s = r(18);
                     var a = [{
                        test: [/googlebot/i],
                        describe: function () {
                           return {
                              type: "bot",
                              vendor: "Google"
                           }
                        }
                     }, {
                        test: [/huawei/i],
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/(can-l01)/i, e) & amp; & amp;
                           "Nova", r = {
                              type: s.PLATFORMS_MAP.mobile,
                              vendor: "Huawei"
                           };
                           return t & amp; & amp;
                           (r.model = t), r
                        }
                     }, {
                        test: [/nexus\s*(?:7|8|9|10).*/i],
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.tablet,
                              vendor: "Nexus"
                           }
                        }
                     }, {
                        test: [/ipad/i],
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.tablet,
                              vendor: "Apple",
                              model: "iPad"
                           }
                        }
                     }, {
                        test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.tablet,
                              vendor: "Apple",
                              model: "iPad"
                           }
                        }
                     }, {
                        test: [/kftt build/i],
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.tablet,
                              vendor: "Amazon",
                              model: "Kindle Fire HD 7"
                           }
                        }
                     }, {
                        test: [/silk/i],
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.tablet,
                              vendor: "Amazon"
                           }
                        }
                     }, {
                        test: [/tablet(?! pc)/i],
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.tablet
                           }
                        }
                     }, {
                        test: function (e) {
                           var t = e.test(/ipod|iphone/i),
                              r = e.test(/like (ipod|iphone)/i);
                           return t & amp; & amp;
                           !r
                        },
                        describe: function (e) {
                           var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                           return {
                              type: s.PLATFORMS_MAP.mobile,
                              vendor: "Apple",
                              model: t
                           }
                        }
                     }, {
                        test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.mobile,
                              vendor: "Nexus"
                           }
                        }
                     }, {
                        test: [/[^-]mobi/i],
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.mobile
                           }
                        }
                     }, {
                        test: function (e) {
                           return "blackberry" === e.getBrowserName(!0)
                        },
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.mobile,
                              vendor: "BlackBerry"
                           }
                        }
                     }, {
                        test: function (e) {
                           return "bada" === e.getBrowserName(!0)
                        },
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.mobile
                           }
                        }
                     }, {
                        test: function (e) {
                           return "windows phone" === e.getBrowserName()
                        },
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.mobile,
                              vendor: "Microsoft"
                           }
                        }
                     }, {
                        test: function (e) {
                           var t = Number(String(e.getOSVersion()).split(".")[0]);
                           return "android" === e.getOSName(!0) & amp; & amp;
                           t & gt; = 3
                        },
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.tablet
                           }
                        }
                     }, {
                        test: function (e) {
                           return "android" === e.getOSName(!0)
                        },
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.mobile
                           }
                        }
                     }, {
                        test: function (e) {
                           return "macos" === e.getOSName(!0)
                        },
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.desktop,
                              vendor: "Apple"
                           }
                        }
                     }, {
                        test: function (e) {
                           return "windows" === e.getOSName(!0)
                        },
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.desktop
                           }
                        }
                     }, {
                        test: function (e) {
                           return "linux" === e.getOSName(!0)
                        },
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.desktop
                           }
                        }
                     }, {
                        test: function (e) {
                           return "playstation 4" === e.getOSName(!0)
                        },
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.tv
                           }
                        }
                     }, {
                        test: function (e) {
                           return "roku" === e.getOSName(!0)
                        },
                        describe: function () {
                           return {
                              type: s.PLATFORMS_MAP.tv
                           }
                        }
                     }];
                     t.default = a, e.exports = t.default
                  }, 95: function (e, t, r) {
                     "use strict";
                     t.__esModule = !0, t.default = void 0;
                     var n, i = (n = r(17)) & amp; & amp;
                     n.__esModule ? n : {
                        default: n
                     }, s = r(18);
                     var a = [{
                        test: function (e) {
                           return "microsoft edge" === e.getBrowserName(!0)
                        },
                        describe: function (e) {
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
                        describe: function (e) {
                           var t = {
                                 name: s.ENGINE_MAP.Trident
                              },
                              r = i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                           return r & amp; & amp;
                           (t.version = r), t
                        }
                     }, {
                        test: function (e) {
                           return e.test(/presto/i)
                        },
                        describe: function (e) {
                           var t = {
                                 name: s.ENGINE_MAP.Presto
                              },
                              r = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                           return r & amp; & amp;
                           (t.version = r), t
                        }
                     }, {
                        test: function (e) {
                           var t = e.test(/gecko/i),
                              r = e.test(/like gecko/i);
                           return t & amp; & amp;
                           !r
                        },
                        describe: function (e) {
                           var t = {
                                 name: s.ENGINE_MAP.Gecko
                              },
                              r = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                           return r & amp; & amp;
                           (t.version = r), t
                        }
                     }, {
                        test: [/(apple)?webkit\/537\.36/i],
                        describe: function () {
                           return {
                              name: s.ENGINE_MAP.Blink
                           }
                        }
                     }, {
                        test: [/(apple)?webkit/i],
                        describe: function (e) {
                           var t = {
                                 name: s.ENGINE_MAP.WebKit
                              },
                              r = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                           return r & amp; & amp;
                           (t.version = r), t
                        }
                     }];
                     t.default = a, e.exports = t.default
                  }
               })
         }));
         var APIConfiguration = function () {
            function e(e) {
               this.generationTime = e.scriptProduceTime;
               this.goals = e.goals.map((function (e) {
                  return new APIGoal(e)
               }));
               this.singlePageSupport = Kameleoon.Internals.runtime.singlePageSupport;
               this.siteCode = e.siteCode
            }
            return e
         }();
         var APIAction = function () {
            function i(i, t) {
               this.dateLaunched = i.dateStatusModified;
               this.dateModified = i.dateModified;
               this.id = i.id;
               this.name = i.name;
               this.targetSegment = new APISegment(i.targetingSegment);
               this.active = i.targeting & amp; & amp;
               !i.disabled & amp; & amp;
               i.displayedVariation & amp; & amp;
               null != i.displayedVariation.id;
               this.triggered = i.targeting || !1;
               this.goals = Kameleoon.Internals.configuration.goals.filter((function (t) {
                  return -1 != (i.goals || []).indexOf(t.id)
               })).map((function (i) {
                  return new APIGoal(i)
               }));
               this.untrackedTrafficReallocationTime = i.untrackedRespoolTime || null;
               var e = function (i) {
                  var t = Kameleoon.Internals.runtime.variations.filter((function (t) {
                     return t.id == i
                  }));
                  return t & amp; & amp;
                  t[0]
               };
               var a = Kameleoon.Internals.runtime.Visitor.currentVisit;
               if ("experiments" == t) {
                  this.mainGoal = i.kameleoonTracking & amp; & amp;
                  i.kameleoonTracking.mainGoalId ? new APIGoal(Kameleoon.Internals.configuration.goals.filter((function (t) {
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
                  this.mainGoal = new APIGoal(Kameleoon.Internals.configuration.goals.filter((function (t) {
                     return t.id == i.mainGoalId
                  }))[0]);
                  this.associatedVariation = new APIVariation(e(i.associatedVariation.id), i);
                  var s = Kameleoon.Internals.runtime.storedData.obtainField("Gatherer", "personalizationsTriggered", {});
                  this.triggeredInVisit = s[this.id] ? !0 : !1;
                  this.activatedInVisit = this.triggeredInVisit & amp; & amp;
                  a.PersonalizationActivations[this.id] ? !0 : !1
               }
            }
            return i
         }();
         var APIActionActivation = function () {
            function i(i, n, t) {
               var e;
               var a;
               if ("experiment" == i) {
                  this.times = t.ExperimentActivations[n].times;
                  this.experimentID = n;
                  e = Kameleoon.Internals.runtime.experiments.filter((function (i) {
                     return i.id == n
                  }))[0];
                  a = t.ExperimentActivations[n].associatedVariationID;
                  this.experiment = e ? new APIAction(e, "experiments") : null
               } else {
                  this.times = t.PersonalizationActivations[n].times;
                  this.personalizationID = n;
                  e = Kameleoon.Internals.runtime.personalizations.filter((function (i) {
                     return i.id == n
                  }))[0];
                  a = t.PersonalizationActivations[n].associatedVariationID;
                  this.personalization = e ? new APIAction(e, "personalizations") : null
               }
               this.associatedVariationID = a;
               var o = Kameleoon.Internals.configuration.variations.filter((function (i) {
                  return i.id == a
               }))[0];
               this.associatedVariation = o ? new APIVariation(o, e) : null
            }
            return i
         }();
         var APIActions = function () {
            function n(n) {
               var e = this;
               var t = n;
               var i = function () {
                  if (Kameleoon.Internals.runtime)
                     if ("experiments" == t) return Kameleoon.Internals.runtime.experiments;
                     else return Kameleoon.Internals.runtime.personalizations;
                  else return []
               };
               this.getAll = function () {
                  return i().map((function (n) {
                     return new APIAction(n, t)
                  }))
               };
               this.getActive = function () {
                  return i().filter((function (n) {
                     return !0 === n.targeting & amp; & amp;
                     1 != n.disabled & amp; & amp;
                     n.displayedVariation & amp; & amp;
                     null != n.displayedVariation.id
                  })).map((function (n) {
                     return new APIAction(n, t)
                  }))
               };
               this.getTriggeredInVisit = function () {
                  return i().map((function (n) {
                     return new APIAction(n, t)
                  })).filter((function (n) {
                     return n.triggeredInVisit
                  }))
               };
               this.getActivatedInVisit = function () {
                  return i().map((function (n) {
                     return new APIAction(n, t)
                  })).filter((function (n) {
                     return n.activatedInVisit
                  }))
               };
               var r = function (n, e) {
                  var r = i().filter((function (t) {
                     return t[n] == e
                  }))[0];
                  if (r) return new APIAction(r, t);
                  return null
               };
               this.getById = function (n) {
                  return r("id", n)
               };
               this.getByName = function (n) {
                  return r("name", n)
               };
               if ("experiments" == t) {
                  this.assignVariation = function (n, e, t) {
                     var r = i().filter((function (e) {
                        return e.id == n
                     }))[0];
                     if (r)
                        if (void 0 === r.registeredVariationId || t) {
                           r.registeredVariationId = e;
                           r.assignmentTime = (new Date).getTime();
                           r.writeLocalData()
                        }
                  };
                  this.block = function (n, e) {
                     if (void 0 === e) e = !1;
                     var t = Kameleoon.Internals.runtime.experiments.filter((function (e) {
                        return e.id == n
                     }));
                     if (t.length & gt; 0) {
                        if (e) {
                           var i = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "blockedExperiments", []);
                           i.push(n);
                           Kameleoon.Internals.runtime.storedData.saveField("Runtime", "blockedExperiments", i)
                        }
                        t[0].blocked = !0
                     }
                  };
                  this.trigger = function (n, e) {
                     var t = Kameleoon.Internals.runtime.experiments.filter((function (e) {
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
                  this.triggerExperiment = function (n, t) {
                     e.trigger(n, t)
                  }
               } else {
                  this.block = function (n, e) {
                     if (void 0 === e) e = !1;
                     var t = Kameleoon.Internals.runtime.personalizations.filter((function (e) {
                        return e.id == n
                     }));
                     if (t.length & gt; 0) {
                        if (e) {
                           var i = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "blockedPersonalizations", []);
                           i.push(n);
                           Kameleoon.Internals.runtime.storedData.saveField("Runtime", "blockedPersonalizations", i)
                        }
                        t[0].blocked = !0
                     }
                  };
                  this.disable = function (n) {
                     var e = i().filter((function (e) {
                        return e.id == n
                     }))[0];
                     if (e) e.disabled = !0
                  };
                  this.trigger = function (n, e) {
                     var t = Kameleoon.Internals.runtime.personalizations.filter((function (e) {
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
         var APIGoal = function () {
            function i(i) {
               if (i) {
                  this.id = i.id;
                  this.name = i.name;
                  this.type = i.type
               }
            }
            return i
         }();
         var APIProduct = function () {
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
               else if ("categories" == t & amp; & amp; i.categories.length & gt; 0) this.categories = i.categories;
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
                  null != this.category & amp; & amp;
                  (this.categories[0].name = this.category)
               }
            }
            e.prototype.getTrackingParameters = function () {
               var e = "m" == this.gender || "M" == this.gender ? !0 : "f" == this.gender || "F" == this.gender ? !1 : null;
               return "&ean=" + encodeURIComponent(this.productID.toString()) + (null == this.name ? "" : "&name=" + encodeURIComponent(this.name.toString())) + "&href=" + encodeURIComponent(this.url || Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()) + (null == this.mainImageURL ? "" : "&pictureHref=" + encodeURIComponent(this.mainImageURL.toString())) + (null == this.price ? "" : "&price=" + this.price) + (null == this.available ? "" : "&available=" + this.available) + (null == this.brand ? "" : "&brand=" + this.brand) + (null == this.child ? "" : "&child=" + this.child) + (null == e ? "" : "♂=" + e) + (null == this.sizes ? "" : "&sizes=" + encodeURIComponent(JSON.stringify(this.sizes))) + (null == this.type ? "" : "&type=" + this.type) + (null == this.feature ? "" : "&feature=" + this.feature) + (null == this.sku ? "" : "&sku=" + this.sku) + (null == this.merchantID ? "" : "&sellerId=" + this.merchantID) + (null == this.crossedOutPrice ? "" : "&crossedOutPrice=" + this.crossedOutPrice) + (null == this.description ? "" : "&description=" + encodeURIComponent(this.description)) + (null == this.rating ? "" : "&rating=" + this.rating) + (null == this.tags ? "" : "&tags=" + encodeURIComponent(JSON.stringify(this.tags))) + (null == this.params ? "" : "&params=" + encodeURIComponent(JSON.stringify(this.params))) + (null == this.categories ? "" : "&categories=" + encodeURIComponent(JSON.stringify(this.categories)))
            };
            return e
         }();
         var APISegment = function () {
            function n(n) {
               if (n) {
                  this.id = n.id;
                  this.name = n.name
               }
            }
            return n
         }();
         var APITemplate = function () {
            function t(t, n) {
               this.name = t;
               this.customFields = n
            }
            return t
         }();
         var APIVariation = function () {
            function i(i, e) {
               if (void 0 === e) e = {};
               if (i) {
                  this.id = i.id;
                  this.name = i.name;
                  if (0 === this.id) this.id = "reference";
                  if (null === this.id) this.id = "none";
                  if (e.experimentAction) {
                     var t = e.variations.filter((function (e) {
                        return e.id == i.id
                     }))[0];
                     this.reallocationTime = t ? t.respoolTime : null
                  } else this.reallocationTime = null;
                  this.instantiatedTemplate = i.widgetTemplateInputData ? new APITemplate(i.widgetTemplateName, i.widgetTemplateInputData) : null
               }
            }
            return i
         }();
         var APIVisit = function () {
            function e(e) {
               this.pageViews = e.timesStartedPages.length;
               this.duration = e.timeLastActivity - e.startDate;
               this.locale = e.locale;
               this.startDate = e.startDate;
               this.index = e.index;
               this.currentProduct = null;
               this.products = [];
               this.activatedExperiments = Object.keys(e.ExperimentActivations).map((function (t) {
                  return new APIActionActivation("experiment", parseInt(t), e)
               }));
               this.activatedPersonalizations = Object.keys(e.PersonalizationActivations).map((function (t) {
                  return new APIActionActivation("personalization", parseInt(t), e)
               }));
               if (e == Kameleoon.Internals.runtime.Visitor.currentVisit) {
                  this.device = new Device;
                  this.geolocation = e.Geolocation;
                  if (Kameleoon.Internals.runtime.mentalistRun) {
                     Object.defineProperty(this, "conversionPredictions", {
                        enumerable: !0,
                        get: function () {
                           return Kameleoon.Mentalist.computeGoalConversionProbabilityPredictionByGoalId(null)
                        }
                     });
                     Object.defineProperty(this, "initialConversionPredictions", {
                        enumerable: !0,
                        get: function () {
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
               var i = function (e, t) {
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
               var c = "<other unknown="
               ">";
               var m = [];
               var h = Kameleoon.Internals.runtime.storedData.obtainField("Runtime", "firstReferrers", []);
               for (var v = 0, f = h.length; v < f; v++) {
                  var 0;
                  if (0 = 'd)p="<RESTART'
                     d = "h[v];var"
                     p = "void" > ";else{var I=Kameleoon.Internals.runtime.Gatherer.configuration.referrers[d-1];p=null==I?c:I.name}m.push(p)}this.acquisitionChannel=m[0];this.landingPageURL=e.landingPageURL;this.weather=new APIWeather(e)}return e}();var APIVisitor=function(){function t(){this.getCustomDataVisitor=function(){var t={};for(var i in Kameleoon.Internals.runtime.Visitor.currentVisit.countByValueByCustomDatum){var e=Kameleoon.Internals.runtime.Gatherer.configuration.customData[i];if(null!=e&&!e.disabled)if("
                     VISITOR "==e.scope){var n=Kameleoon.Internals.runtime.Visitor.currentVisit.countByValueByCustomDatum[i];switch(e.type){case"
                     LIST ":var s=[];for(var r in n)s.push(r);t[e.name]=s;break;case"
                     COUNT_LIST ":var a=[];for(var r in n)a.push({value:r,count:n[r]});t[e.name]=a;break;default:t[e.name]=Object.keys(n)[0];break}}}return t};this.numberOfVisits=Kameleoon.Internals.runtime.Visitor.totalVisits;this.timeStartedEldestVisit=Kameleoon.Internals.runtime.Visitor.timeStartedEldestVisit;this.customData=this.getCustomDataVisitor();this.personalizationsActive=Kameleoon.Internals.runtime.personalizationsActive;this.code=Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode;this.currentVisit=new APIVisit(Kameleoon.Internals.runtime.Visitor.currentVisit);this.visits=Kameleoon.Internals.runtime.Visitor.visits.map((function(t){return new APIVisit(t)}));this.previousVisit=Kameleoon.Internals.runtime.Visitor.visits.length>1?new APIVisit(Kameleoon.Internals.runtime.Visitor.visits.slice(-2)[0]):null;this.experimentLegalConsent=Kameleoon.Internals.runtime.Consent.AB_TESTING;this.personalizationLegalConsent=Kameleoon.Internals.runtime.Consent.PERSONALIZATION;this.firstVisitStartDate=Kameleoon.Internals.runtime.Visitor.timeStartedEldestVisit}return t}();var APIWeather=function(){function i(i){var e=i.Weather;this.temperature=e.temperature;this.humidity=e.humidity;this.pressure=e.pressure;this.windSpeed=e.windSpeed;this.cloudiness=e.cloudiness;this.sunrise=e.sunrise;this.sunset=e.sunset;this.conditionCode=e.conditionCode;this.conditionDescription=e.conditionDescription}return i}();var Analyst=function(){function Analyst(){var _this=this;this.initialize=function(e){_this.isTimeout=!1;if(window.kameleoonDisplayPage){if(null==Kameleoon.Internals.configuration.behaviorWhenTimeout||document.getElementById("
                     kameleoonLoadingStyleSheet "))window.clearTimeout(window.kameleoonDisplayPageTimeOut);else if(null==window.kameleoonEndLoadTime)_this.isTimeout=!0;try{window.kameleoonDisplayPage(!0)}catch(e){}window.kameleoonDisplayPage=null}window.kameleoonEndLoadTime=(new Date).getTime();if(-1!=navigator.userAgent.indexOf("
                     Chrome / 62 ")){var n={x:window.scrollX,y:window.scrollY};document.documentElement.style.display="
                     none ";var o=document.documentElement.offsetHeight;document.documentElement.style.display="
                     block ";window.scrollTo(n.x,n.y)}e()};this.load=function(){Kameleoon.Utils.sendKameleoonCustomEvent("
                     Internals ",{type:"
                     load ",time:(new Date).getTime()});Kameleoon.Utils.runProtectedFunction((function(){if(window.kameleoonAddCustomAction){Kameleoon.Utils.runProtectedScript(window.kameleoonAddCustomAction,"
                     kameleoonAddCustomActionScript.js ");delete window.kameleoonAddCustomAction}if(window.kameleoonAddCustomGlobalScript){Kameleoon.Internals.configuration.globalScript=window.kameleoonAddCustomGlobalScript;delete window.kameleoonAddCustomGlobalScript}window.addEventListener("
                     error ",(function(e){if(e.error&&e.error.stack&&e.error.stack.match(/kameleoon/gi)){Kameleoon.Utils.Logger.send(e.error.stack,"
                     kameleoon.js ");return!1}}));Kameleoon.Analyst.initialize((function(){var e=Kameleoon.Analyst.checkBlockingElements();var n=window.kameleoonEndLoadTime-(window.kameleoonStartLoadTime||window.kameleoonEndLoadTime)-25;Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"
                     Loaded ",{timeout:"
                     TIMEOUT "==e,loadTime:n});Kameleoon.Internals.runtime=Kameleoon.Internals.runtime;if(Kameleoon.Internals.runtime)Kameleoon.Internals.runtime.clear();if(0==e.length){Kameleoon.Internals.runtime=new Runtime;Kameleoon.Analyst.loadKameleoonFull((function(){Kameleoon.Internals.runtime.run()}))}else{Kameleoon.Utils.sendKameleoonCustomEvent("
                     Internals ",{type:"
                     abort ",blockingReason:e});Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"
                     Aborted ",{reason:e})}}))}))};this.loadKameleoonFull=function(e,n){if(!Kameleoon.Internals.runtime.kameleoonFull&&(_this.kameleoonFullNeeded()||n)){var o=function(n){var o=document.createElement("
                     script ");o.innerHTML=n+"\
                     n;
                     ";o.innerHTML+="("+e.toString()+")()
                     ";o.innerHTML+=" //# sourceURL=kameleoonFull.js";document.head.appendChild(o)};var a=sessionStorage.getItem("kameleoonFullApplicationCode");if(null!=a)o(a);else Kameleoon.Utils.performBeaconServerCall("https://"+Kameleoon.Internals.configuration.STATIC_HOST_NAME+"."+Kameleoon.Internals.configuration.DOMAIN+"/kameleoon-full.js?cache="+Kameleoon.Utils.obtainRandomString(16),(function(e){if(void 0===e.readyState||4==e.readyState&&200==e.status){sessionStorage.setItem("kameleoonFullApplicationCode",e.responseText);o(e.responseText)}}))}else e()};this.Actions=new Actions;this.Goals=new Goals}Analyst.prototype.checkBlockingElements=function(){var device=new Device;if("Internet Explorer"==device.browser&&device.browserVersion<=(Kameleoon.Internals.configuration.wideEngineSupport?10:12)||"Opera"==device.browser&&device.browserVersion<13)return"BROWSER";var noLocalStorage=!1;try{if(window.localStorage)localStorage.getItem("kameleoonPrivateMode");else noLocalStorage=!0}catch(e){noLocalStorage=!0}var noSessionStorage=!1;try{if(window.sessionStorage)sessionStorage.getItem("kameleoonPrivateMode");else noSessionStorage=!0}catch(e){noSessionStorage=!0}if(noLocalStorage||noSessionStorage)return"STORAGE";if(this.isTimeout){switch(Kameleoon.Internals.configuration.behaviorWhenTimeout){case"VISIT":sessionStorage.setItem("kameleoonDisabledForVisit","true");break;default:break}return"TIMEOUT"}document.removeEventListener("visibilitychange",Kameleoon.Analyst.load);if("prerender"==document.visibilityState){document.addEventListener("visibilitychange",Kameleoon.Analyst.load);return"PRERENDER"}if(-1!=location.href.indexOf("kameleoonDisabled"))return"PARAMETER";if(Kameleoon.Internals.configuration.kameleoonDisabled)return"DISABLED";return""};Analyst.prototype.getHeatMap=function(){window.kameleoonHeatMap()};Analyst.prototype.kameleoonFullNeeded=function(){if(sessionStorage.getItem("kameleoonFullApplicationCode")||sessionStorage.getItem("kameleoonLightExtension")||Kameleoon.Internals.runtime.parameters.kameleoon||Kameleoon.Internals.runtime.parameters.kameleoonVariationId||Kameleoon.Internals.runtime.parameters.kameleoonHeatMap||Kameleoon.Internals.runtime.parameters["kameleoon-simulation"]||Kameleoon.Internals.runtime.parameters.kameleoonLightExtension||Kameleoon.Internals.runtime.simulationMode)return!0;return!1};Analyst.prototype.loadSimulation=function(){var e=this;if(!Kameleoon.Internals.runtime.parameters.kameleoonVariationId)Object.keys(localStorage).forEach((function(e){if(-1!==e.indexOf("kameleoonVariation-"))localStorage.removeItem(e)}))};Analyst.prototype.loadVariationFromServer=function(variationId,variation){};Analyst.prototype.processSimulations=function(){};Analyst.CODE_ALPHABET="abcdefghijklmnopqrstuvwxyz0123456789";return Analyst}();var API=function(){function e(){var e=this;this.Core={enableLegalConsent:function(e){if(void 0===e)e="BOTH";Kameleoon.Internals.runtime.Consent.enable(e)},disableLegalConsent:function(e){if(void 0===e)e="BOTH";Kameleoon.Internals.runtime.Consent.disable(e)},enableSinglePageSupport:function(){Kameleoon.Internals.runtime.enableSinglePageSupport.apply(Kameleoon.Internals.runtime,arguments)},getConfiguration:function(){return new APIConfiguration(Kameleoon.Internals.configuration)},load:function(){Kameleoon.Analyst.load.apply(Kameleoon.Analyst,arguments)},processRedirect:function(){Kameleoon.Utils.processRedirect.apply(Kameleoon.Utils,arguments)},runWhenConditionTrue:function(n,t,o){if(void 0===o)o=200;if(n())Kameleoon.Utils.runProtectedFunction(t,!0);else if(!Kameleoon.Internals.runtime.pageLoaded)var r=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(r);e.Core.runWhenConditionTrue.apply(Kameleoon,[n,t,o])}),o,!0)},runWhenElementPresent:function(n,t,o){var r=!0;if("undefined"!==typeof o)r=!1;var a=Kameleoon.Utils.querySelectorAll(n);if(!Kameleoon.Internals.runtime.querySelectorAllHasError)if(0<a.length)kameleoon.utils.runprotectedfunction((function(){t(a)}),!0);else &key=").concat(e),(function(e){if(4==e.readyState){var t={};if(200==e.status)t=JSON.parse(e.responseText);n&&n(t)}}),null)},setCustomData:function(e,n,t){if(void 0===t)t=!1;if(Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.gathererRun){var o=null;for(var r in Kameleoon.Internals.runtime.Gatherer.configuration.customData){var a=Kameleoon.Internals.runtime.Gatherer.configuration.customData[r];if(null!=a&&a.name==e){o=parseInt(r);break}}if(null!=o)Kameleoon.Gatherer.CustomData.register(o,{value:n,overwrite:t})}},writeLocalData:function(e,n,t){Kameleoon.Internals.runtime.storedData.Vars[e]={value:n,date:(new Date).getTime()+24*60*60*1e3*(t?30:1/24)}},performRemoteSynchronization:function(e,n,t){}};this.Events={triggered:[],trigger:function(n){e.Core.runWhenConditionTrue((function(){return!0===Kameleoon.Internals.runtime.setupAfterLocalDataRetrieval}),(function(){e.Events.triggered.push(n);if(Kameleoon.Analyst.Actions)Kameleoon.Analyst.Actions.processAllActions();if(Kameleoon.Targeting)Kameleoon.Targeting.processAllTargetingSegments();}),100)}};this.Tracking={processOmniture:function(e){Kameleoon.Tracking.processOmniture&&Kameleoon.Tracking.processOmniture(e)}};this.Products={obtainProductQuantities:function(e,n,t,o){var r={};null!=t&&(r.timeBegin=t);null!=o&&(r.timeStart=o);Kameleoon.Internals.runtime.Visitor.obtainProductData(" 0="t)t=1;if(null!=e&&e.length" a="0;a<e.length;++a)r.push({url:e[a]});Kameleoon.Internals.runtime.checkImageCallbacks[o]=function(e){if(n&&1==e)for(var" api-data.".concat(kameleoon.internals.configuration.visitor_domain,"="" data?sitecode=").concat(Kameleoon.Internals.configuration.siteCode," e){e[t].views="e[t].v||0;e[t].cartQuantities=e[t].atcq||0;e[t].boughtQuantities=e[t].bq||0;delete" e){var="" e[t].atcq;delete="" e[t].bq}n(e)}))},obtainproductdata:function(e,n,t){if(void="" e[t].v;delete="" i="Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(i);e.Core.runWhenElementPresent.apply(Kameleoon,[n,t,r,o||200])}),o||200,!0);else" if(!kameleoon.internals.runtime.pageloaded)if(kameleoon.internals.runtime.cantusemutationobserver||!r)var="" in="" kameleoon.internals.runtime.gatherer.configuration.interests){var="" kameleoon.internals.runtime.storeddata.vars[e]?kameleoon.internals.runtime.storeddata.vars[e].value:null},resetcustomdata:function(n){e.data.setcustomdata(n,[],!0)},retrievedatafromremotesource:function(e,n){kameleoon.utils.performbeaconservercall("https:="" kameleoon.internals.runtime.waitingelementpresentobjects.push({selector:n,callback:t,useantiflicker:r})}};this.goals="{cancelConversion:function(n,t){try{e.Goals.processConversions(n,t,!0)}catch(e){}},processConversion:function(n,t){try{e.Goals.processConversions(n,t,!1)}catch(e){}},processConversions:function(e,n,t){Kameleoon.Internals.runtime.goals.forEach((function(o){if(e==o.id||e==o.name){var" o="" productcounters",e,r,(function(e){for(var="" r='Kameleoon.Internals.runtime.Gatherer.configuration.interests[o];if("interestName"==r.name){Kameleoon.Internals.runtime.Visitor.currentVisit.addInterests([r.index],!0);break}}t&&t(e)};Kameleoon.Gatherer.Interest.checkImageList(r,null,o)}},readLocalData:function(e){return' t="">0)if(t>0){Kameleoon.Internals.runtime.RequestManager.sendProduct("eventType=productAddToCart&ean=".concat(encodeURIComponent(e.toString()),"&quantity=").concat(t));}},trackCategoryView:function(e){},trackProductView:function(e,n){if(null!=e&&e.length>0){var t=new APIProduct(e,n);Kameleoon.Internals.runtime.RequestManager.sendProduct("eventType=productPage".concat(t.getTrackingParameters()));if(Kameleoon.Internals.runtime.gathererRun)Kameleoon.Gatherer.track(VisitEvent_Product,{ean:e});Kameleoon.Internals.runtime.product=t}},trackTransaction:function(e){for(var t=0;t<e.length;++t){var o="e[t];o.productID=o.productId||o.productID;if(null!=o.productID&&o.productID.length">0){o.quantity=parseInt(o.quantity)||1;if(o.quantity>0)Kameleoon.Internals.runtime.RequestManager.sendProduct("eventType=productBuy&ean=".concat(encodeURIComponent(o.productID.toString()),"&quantity=").concat(o.quantity))}}}};this.Experiments=new APIActions("experiments");this.Segments={getAll:function(){return Kameleoon.Internals.runtime.targetingSegments.map((function(e){return new APISegment(e)}))},getById:function(e){var n=Kameleoon.Internals.runtime.targetingSegments.filter((function(n){return n.id==e}))[0];return n?new APISegment(n):null},getByName:function(e){var n=Kameleoon.Internals.runtime.targetingSegments.filter((function(n){return n.name==e}))[0];return n?new APISegment(n):null},reevaluate:function(e){var n=-1;for(var t=0;t<(Kameleoon.Internals.runtime.targetingSegments||[]).length;t++){var o=Kameleoon.Internals.runtime.targetingSegments[t];if(o.id==e){n=t;break}}if(n>-1){var r=void 0;if(Kameleoon.Internals.runtime.simulationMode)r=Kameleoon.Internals.runtime.simulationModeData.targetingSegments.filter((function(n){return n.id==e}))[0];else r=Kameleoon.Internals.configuration.targetingSegments.filter((function(n){return n.id==e}))[0];if(r){Kameleoon.Internals.runtime.targetingSegments.splice(n,1);var a=Kameleoon.Utils.clone(r);Kameleoon.Internals.runtime.targetingSegments.push(a);Kameleoon.Targeting.checkTargetingSegmentsTargeting([a]);Kameleoon.Internals.runtime.experiments.forEach((function(n){return n.setTargetingSegment(e)}));Kameleoon.Internals.runtime.experiments.forEach((function(n){return n.setTargetingSegment(e)}));Kameleoon.Analyst.Actions.processAllActions();return a.targeting}}return},trigger:function(e){var n=Kameleoon.Internals.runtime.targetingSegments.filter((function(n){return n.id==e}));if(n.length>0){n[0].targeting=!0;Kameleoon.Internals.runtime.experiments.forEach((function(n){if(n.targetingSegmentId==e){n.targeting=void 0;n.rescheduleTargeting=!0;n.forceTargeting=!0}}));Kameleoon.Internals.runtime.personalizations.forEach((function(n){if(n.targetingSegmentId==e){n.targeting=void 0;n.rescheduleTargeting=!0;n.forceTargeting=!0}}));Kameleoon.Analyst.Actions.processAllActions();Kameleoon.Targeting.processTargetingSegments(n)}}};this.Variations={execute:function(e){var n=function(e){var n=Kameleoon.Internals.runtime.variations.filter((function(n){return n.id==e}));return n?n[0]:null};var t=n(e);if(t){if(t.redirections)t.preProcessRedirect();Kameleoon.Utils.addCSSStyleSheet(t.cssCode);return t.applyJavascriptCode(!0)}return null}};this.Utils={addEventListener:function(e,n,t,o){Kameleoon.Utils.addEventListener(e,n,t,o,!0)},addUniversalClickListener:function(e,n,t){this.addEventListener(e,Kameleoon.Internals.runtime.mouseDownEvent,(function(e){if(!Kameleoon.Internals.runtime.touchMoveEvent)n&&n(e)}))},clearInterval:function(){Kameleoon.Utils.clearInterval.apply(Kameleoon.Utils,arguments)},clearTimeout:function(){Kameleoon.Utils.clearTimeout.apply(Kameleoon.Utils,arguments)},createHash:function(e){return Kameleoon.Utils.computeStringHash.apply(Kameleoon.Utils,arguments)},getURLParameters:function(){return Kameleoon.Utils.parseParameters.apply(Kameleoon.Utils,arguments)},performRequest:function(e,n,t,o){if(void 0===o)o=5e3;return Kameleoon.Utils.performBeaconServerCall(e,n,t,o)},querySelectorAll:function(e){return Kameleoon.Utils.querySelectorAll.apply(Kameleoon.Utils,arguments)},setInterval:function(e,n){if(void 0===n)n=200;return Kameleoon.Utils.setInterval(e,n,!1,!0)},setTimeout:function(e,n){if(void 0===n)n=200;return Kameleoon.Utils.setTimeout(e,n,!0)}};Object.defineProperty(this.Utils,"mouseDownEvent",{enumerable:!0,get:function(){return Kameleoon.Internals.runtime.mouseDownEvent}});Object.defineProperty(this.Utils,"touchMoveEvent",{enumerable:!0,get:function(){return Kameleoon.Internals.runtime.touchMoveEvent}});Object.defineProperty(this,"Visitor",{enumerable:!0,get:function(){try{return new APIVisitor}catch(e){return null}}});Object.defineProperty(this,"CurrentVisit",{enumerable:!0,get:function(){try{return new APIVisit(Kameleoon.Internals.runtime.Visitor.currentVisit)}catch(e){return null}}});Object.defineProperty(this,"React",{enumerable:!1,get:function(){return window.KameleoonAPIReact||null}});Object.defineProperty(this,"processOmniture",{enumerable:!1,get:function(){console.info("Kameleoon.API.processOmniture is deprecated, please use Kameleoon.API.Tracking.processOmniture");return Kameleoon.API.Tracking.processOmniture}})}return e}();var ElementSet=function(){function e(){this.appendEmptyElement=function(e){if(Kameleoon.Internals.configuration.singlePageSupport&&!e.querySelector("span.kameleoonDomOperation")){var t=document.createElement("span");t.className="kameleoonDomOperation";t.style.display="none";t.style.opacity="0";t.style.width="0";t.style.height="0";e.appendChild(t)}};this.pageElementSets=[];this.pageElementSetsSpa=[];this.pageElementSetsSpaIds={};window.kameleoonVirtualRootElement=document.createElement("div")}e.prototype.addDuplicatedData=function(e,t,o){if(!e||!Kameleoon.Internals.configuration.singlePageSupport)return;if(null!=o&&e.getAttribute){var n=e.getAttribute("data-kameleoon-class")||"";if(-1==n.toString().indexOf(o))e.setAttribute("data-kameleoon-class",(n.length>0?n+" ":"")+o)}if(null!=t)e.setAttribute("data-kameleoon-id",t.toString())};e.prototype.addRelativePositionToReferenceElement=function(e){if("absolute"!=Kameleoon.Utils.obtainComputedStyle(e).position&&document.body!=e)this.setStyle(e,"position","relative",!1)};e.prototype.changeHTMLContent=function(e,t,o,n,a){o=this.replaceImagePlaceholder(o);var l=e.element;var i=!1;var r,s,m;var d="input"==l.nodeName.toLowerCase()&&("button"==l.getAttribute("type")||"submit"==l.getAttribute("type")||"text"==l.getAttribute("type"));if(d)r=l.value;else{r=[];var p=l.childNodes;for(m=0;m<p.length;++m)r.push(p[m])}s=d?l.value:l.innerhtml;this.saveelementoriginaldata(l);if(void ")){this.saveelementoriginaldata(l[h],u.domoperation);l[h].classname+='(l[h].className?"' ").indexof("="" "+l[h].classname+"="" ":"")+"kameleoonclass"+u.kameleoonclass;kameleoon.elementset.addduplicateddata(l[h],null,u.kameleoonclass)}if(u.kameleoonid)for(var="" 0="u.htmlContent||this.checkElementLoaded(l[h])){if(u.userPosition&&u.userPosition.referenceElement&&!Kameleoon.Utils.querySelectorAll(u.userPosition.referenceElement)[0])continue;if(u.domOperation){var" 0;if(e[s].element)v="e[s].element;else" c="null,f=document;if(u.context){c=Kameleoon.Utils.querySelectorAll(u.context);if(!c[0])continue;c=c[0].contentWindow.document;f=c;if(n)Kameleoon.Utils.addCSSStyleSheet(n.css,n.action,c)}if(!c&&a)c=a;if(u.scopeURL&&!new" d="e[s].selector;var" e='Kameleoon.Utils.querySelectorAll(u.domReference,c)[0];if(!E&&u.domReferenceCurrentQuery)E=Kameleoon.Utils.querySelectorAll(u.domReferenceCurrentQuery,c)[0];this.saveElementOriginalData(l[h]);l[h].kameleoonData.domTargetElement=E;if(t||o){if(!this.checkElementLoaded(l[h])&&0!=u.selector.indexOf("#kameleoonElement")||!this.checkElementLoaded(l[h].kameleoonData.domTargetElement))continue;k=!0}}i.push({element:l[h],options:Kameleoon.Utils.clone(u)})}e[s].removeSelector=k||o&&0<l.length&&null!=u.autoGeneratedSelector;r=r.concat(i)}return' e.nextsibling?!0:this.checkelementloaded(e.parentnode)};e.prototype.obtaindepth="function(e){var" e[s].evaluated='!1;if(v){v.id=S;Kameleoon.ElementSet.addDuplicatedData(v,S,null);Kameleoon.Internals.runtime.addedIDs.push("#"+S);l=[v]}else' h='0,g=l.length;h<g;++h)if(!l[h].getAttribute("kameleoon"))if(!t||void' i="null;var" if(0='S.indexOf("kameleoonElement"))if(u.domOperation){var' if(d)l.value="o;else{for(m=0;m<r.length;++m)l.removeChild(r[m]);l.innerHTML=o}return" if(f.body){v='f.createElement("div");f.body.appendChild(v)}else' if(u.customselector||u.autogeneratedselector||u.contentselector){l="Kameleoon.Utils.querySelectorAll(d,c);if(0==l.length&&p)l=Kameleoon.Utils.querySelectorAll(p,c);if(u.kameleoonClass)for(var" i};e.prototype.checkelementisindocument="function(e,t){var" k="!1;i=[];for(var" kameleoonclass"+u.kameleoonclass+"="" l="this;var" l,i,r="[];for(var" o="l.obtainDepth(e.element),n=l.obtainDepth(t.element);return" o<n?-1:o="" p="e[s].currentQuery;var" r="!0;while(r){i=this.obtainElements(e,t,o,n,a);if(0==i.length)break;i=i.sort((function(e,t){var" regexp(u.scopeurl).test(window.location.href))l="[];else" return!1;return="" r};e.prototype.performhtmlreplacements="function(e,t,o,n,a){var" s="d.substr(1);if(Kameleoon.Internals.configuration.singlePageSupport)l=[f.querySelector(d)];else" switch(d.charat(0)){case"#":var="" t="0;while(null!==e.parentNode){++t;e=e.parentNode}return" t};e.prototype.obtainelements="function(e,t,o,n,a){var" u="e[s].options;var" v="void">n?1:0}));i=this.removeDuplicates(i);r=!1;for(var s=0,m=i.length;s<m;++s){var ")){t.classname+='(t.className?"' ").indexof("="" "+t.classname+"="" ":"")+"kameleoonclass"+o.kameleoonclass;kameleoon.elementset.addduplicateddata(t,null,o.kameleoonclass)}this.processuserposition(t,t,o.userposition,"inline"!="Kameleoon.Utils.obtainComputedStyle(t).display);this.setupNoLinkPropagation(o,t);this.processSpecialCases(t);this.processLinks(t,o.href)}};e.prototype.powerElements=function(e,t){for(var" a="t.parentNode;var" a.appendchild(o);if("left"='Kameleoon.Utils.obtainComputedStyle(t)["float"]&&"right"==Kameleoon.Utils.obtainComputedStyle(o)["float"]){t.style["float"]="right";o.style["float"]="left"}else' d="i[s].options;if(d.htmlContent)r=this.changeHTMLContent(i[s],e,d.htmlContent,!1,!0)||r;if(d.replaceHtmlContent)r=this.changeHTMLContent(i[s],e,d.replaceHtmlContent,!0,!0)||r;if(r)r=!1}}for(var" e.setattribute(a.attributename,a.attributevalue)}};e.prototype.processdomoperation="function(e,t,o,n){if(!o){if(t.dataset)t.dataset.kameleoonEvaluated=!1;e.evaluated=!1;return}var" i="null;var" if("right"='Kameleoon.Utils.obtainComputedStyle(t)["float"]&&"left"==Kameleoon.Utils.obtainComputedStyle(o)["float"]){t.style["float"]="left";o.style["float"]="right"}t.kameleoonData.swapTargetElement=o;break;case"INSERT_BEFORE":Kameleoon.ElementSet.appendEmptyElement(t);l.insertBefore(t,o);break;case"INSERT_AFTER":Kameleoon.ElementSet.appendEmptyElement(t);if(o.nextSibling)l.insertBefore(t,o.nextSibling);else' i};e.prototype.powerelement='function(e,t,o){if(!t.dataset||!t.dataset.kameleoonEvaluated||Kameleoon.Internals.runtime.editorMode||Kameleoon.Internals.runtime.kameleoonSelectionIframeMode){if(!t||Kameleoon.Internals.configuration.specifyElements&&-1==t.className.indexOf("Kameleoon"))return;if(t.dataset)t.dataset.kameleoonEvaluated=!0;this.saveElementOriginalData(t);t.kameleoonData.powered=!0;t.setAttribute("kameleoon","active");if(o.keepSpace)this.reserveSpaceForElement(t);if(o.domOperation){var' kameleoonclass"+o.kameleoonclass+"="" l="o.parentNode;var" l.appendchild(t);break;case"insert_as_child":kameleoon.elementset.appendemptyelement(t);if(0="o.childNodes.length)o.appendChild(t);else" n="0;n<o.length;++n){var" o="JSON.parse(t);for(var" o.insertbefore(t,o.firstchild);break}}catch(e){}};e.prototype.processelementset="function(e,t,o,n,a,l){if(!e.id)e.id=Math.floor(999999*Math.random());var" r="[];this.pageElementSets=this.pageElementSets.concat([e]);i=this.performHTMLReplacements([e],o,n,t,l);if(Kameleoon.Internals.configuration.singlePageSupport&&!this.pageElementSetsSpaIds[e.id.toString()]){this.pageElementSetsSpaIds[e.id.toString()]=!0;this.pageElementSetsSpa.push({elementSet:e,potentialElementsWithOptions:i})}if(a)window.editor.services.EngineService.getInstance().refreshCustomizableElements();for(var" r?r.length="" s='0,m=i.length;s<m;++s){if(o&&i[s].options.userPosition&&"RELATIVE"!=i[s].options.userPosition.positionMode)continue;r.push(i[s])}this.powerElements(e,r);if(0===r.length)e.evaluated=!1;return'>0:!1};e.prototype.processLinks=function(e,t){if(!t)return;if("a"==e.nodeName.toLowerCase())e.href=t;else{Kameleoon.Utils.addEventListener(e,"click",(function(){window.location.href=t}));e.style.cursor="pointer"}};e.prototype.processSpecialCases=function(e){if("body"==e.nodeName.toLowerCase()&&-1!=Kameleoon.Utils.obtainComputedStyle(e).background.indexOf("linear-gradient")){e.style.backgroundRepeat="no-repeat";if(window.innerHeight-document.documentElement.scrollHeight>0)e.style.backgroundAttachment="fixed"}};e.prototype.processUserPosition=function(e,t,o,n){if(o){switch(o.positionMode){case"ABSOLUTE_KEEP_SPACE":case"ABSOLUTE":if(n){var a="ABSOLUTE_KEEP_SPACE"==o.positionMode?e.kameleoonData.originalData.originalNode.offsetWidth:e.offsetWidth;if(a)this.setStyle(t,"width",a+"px","th"!=t.nodeName.toLowerCase()&&"td"!=t.nodeName.toLowerCase())}var l=null;var i=!1;if(o.referenceElement){l=Kameleoon.Utils.querySelectorAll(o.referenceElement)[0];i=!0}if(!l)l=document.body;if(l&&t.parentNode!=l){t.parentNode.removeChild(t);l.appendChild(t);if(!t.kameleoonData)t.kameleoonData={};t.kameleoonData.moved=!0}this.setStyle(t,"position","absolute",!1);var r=Kameleoon.Utils.obtainComputedStyle(t).left.replace("px","");var s=(parseInt(r)||0)/o.referenceWidth;this.setStyle(t,"left",Math.round(s*l.offsetWidth)+"px",!0);if(i)this.addRelativePositionToReferenceElement(l);break;case"RELATIVE":this.setStyle(t,"position","",!1);break}this.setStyle(t,"top","",!1);this.setStyle(t,"left","",!1);this.setStyle(t,"right","",!1);this.setStyle(t,"bottom","",!1);if(!n)this.setStyle(t,"width","",!1);this.setStyle(t,"height","",!1)}};e.prototype.removeDuplicates=function(e){var t=[];for(var o=0,n=e.length;o<n;++o)if(void 0="e[o].element.kameleoonUnique){e[o].element.kameleoonUnique=t.length;if(e[o].options.kameleoonClass)e[o].options.kameleoonClass=[e[o].options.kameleoonClass];t.push(e[o])}else{var" 0!="t[o].element.kameleoonUnique){t[o].element.kameleoonUnique=void" 0;t[o].element.removeattribute("kameleoonunique")}return="" a='this.checkElementIsInDocument(e,n);if(0==o.indexOf("kameleoonInputImage:")){this.saveElementOriginalData(e);e.kameleoonData.originalData.imgSrc=e.src;e.src=o.replace("kameleoonInputImage:","");return' e[o].options)if("kameleoonclass"="l){if(!t[a].options[l])t[a].options[l]=[];t[a].options[l].push(e[o].options[l])}else" e}var="" i="null;if(0===o.search(/<td" in="" l='document.createElement(a?e.parentNode.nodeName.toLowerCase():"div");l.innerHTML=o;var' o="0,n=t.length;o<n;++o)if(void" t[a].options[l]="e[o].options[l]}for(var" t};e.prototype.replacehtmlcontent="function(e,t,o,n){o=this.replaceImagePlaceholder(o);var">|<tr>/)){var r=document.createElement("table");r.innerHTML=o;l.innerHTML="";l.appendChild(r)}while(l.childNodes.length>0){var s=l.childNodes[0];s.kameleoonData=e.kameleoonData;s.kameleoonData.originalData.replacedElement=e;if(!i){if(3==s.nodeType)return!1;i=s;s.id=e.id;if("copyAttributes"==i.getAttribute("kameleoon")){for(var m=0,d=e.attributes.length;m<d;++m){if("srcset"==e.attributes[m].name){if(i.getattribute("src"))i.setattribute("srcset",i.getattribute("src"));continue}if("src"!=e.attributes[m].name)i.setattribute(e.attributes[m].name,e.attributes[m].value)}i.removeattribute("kameleoon")}var !="typeof" !important";e.style.opacity="0.0 !important" !important;":";"):"");e.style.csstext='i};e.prototype.setupNoLinkPropagation=function(e,t){if(e.noLinkPropagation)t.setAttribute("kData","nlp")};return' ")!='a.length-1&&o)a+="' ")){s.classname+='(s.className?"' ").indexof("="" "+o+(n?"="" "+s.classname+"="" ":"")+"kameleoonclass"+n.kameleoonclass;kameleoon.elementset.addduplicateddata(s,null,n.kameleoonclass)}}if(a)e.parentnode.insertbefore(s,e);if(!0!="a)for(var" ":"")+p[1];if(n.kameleoonid){s.id="kameleoonId" "}}else="" +n.kameleoonid;kameleoon.elementset.addduplicateddata(s,n.kameleoonid,null)}if(n.kameleoonclass&&-1='("' 0;if(null="a)r=null;else{var" ;e.height="0px" ;e.onload='function(){e.parentNode.removeChild(e)};document.head.appendChild(e)}),5e3)}));if("touchend"==e.mouseDownEvent){Kameleoon.Utils.addEventListener(document,"touchmove",(function(t){e.touchMoveEvent=!0}));Kameleoon.Utils.addEventListener(document,"touchstart",(function(t){e.touchMoveEvent=!1}))}if(!e.iframeLocalStorage)window.addEventListener("storage",(function(t){var' ;e.width="0px" ;var="" a='Kameleoon.Utils.setInterval((function(){if(Kameleoon.Utils.querySelectorAll("[id^=ghostery-]").length' analyst;this.api="new" api;this.elementset="new" browser(e.browsers);this.customdata="new" customdata(e.customdata);this.keypage="new" e='document.createElement("iframe");e.src=window.kameleoonIframeURL;e.id="kameleoonExternalIframe";e.style.cssFloat="left' e(){this.analyst="new" e(){var="" e)e="JSON.parse(Kameleoon.Utils.decodeString(e));Kameleoon.Internals.runtime.Gatherer={configuration:e,active:!0,numberClicks:0};this.Browser=new" e.datakeyname:case"kameleoonsimulationvisitordata":i.type='o;i.value=null==a?null:a;break;case"kameleoonLegalConsent":i.type=o;i.saveLegalConsent=null==a?null:a;break}if(null!=i.type)Kameleoon.Utils.processStorageData(i)}}),!1);};this.loadExternalRequests=function(){e.Geolocation="undefined"!=typeof' e.incomingstoreddata[t];else="" e.replace(="" e.widgettemplateinputdata)if("string"="typeof" e.widgettemplateinputdata[t])e.widgettemplateinputdata[t]='e.widgetTemplateInputData[t].replace("STATIC_IMAGE_PATH",Kameleoon.Internals.configuration.IMAGE_PATH)}))}if(Kameleoon.Internals.configuration.abtestingSetup)e.experiments=Kameleoon.Utils.clone(Kameleoon.Internals.configuration.experiments).map((function(t){return' elementset;this.gatherer="new" experiment(t,e.incomingstoreddata)}));if(kameleoon.internals.configuration.personalizationsetup){}};this.initializeactionsaftergatherer="function(){};this.initializeListeners=function(){Kameleoon.Utils.domReady((function(){e.domReady=!0;if(!0!==Kameleoon.Internals.configuration.disableEditorLaunchViaKeys)Kameleoon.Loader.enableKameleoonEditorListener();if(e.kameleoonSelectionIframeMode){var" e}();var="" g,kameleoon.internals.configuration.image_path)};e.prototype.reservespaceforelement="function(e){if(!e.kameleoonData||!e.kameleoonData.originalData)this.saveElementOriginalData(e);if(!e.kameleoonData.originalData.originalNode){var" gatherer="function(){function" gatherer;this.loader="new" i='{};switch(o){case"kameleoonExperiment":i.type=o;var' in="" ip:null};this.processpageloaded="function(){e.pageLoaded=!0;Kameleoon.Utils.removeBlockingStyleSheet();for(var" ip?new="" i};e.prototype.replaceimageplaceholder="function(e){return" kameleoon.gatherer.track(visitevent_adblocker)}),2e3);var="" kameleoon.utils.readlocaldata(t,n,!0)};this.setup="function(){if(Kameleoon.Internals.runtime.parameters.kameleoon)Kameleoon.Utils.domReady((function(){Kameleoon.Loader.enableKameleoonEditor()}));if(null!=Kameleoon.Internals.configuration.kameleoonByteLength)if(null!=window.kameleoonStartLoadTime){var" kameleoonclass"+n.kameleoonclass+"="" kameleoonengine="function(){function" keypage(e.keypages);this.keyword="new" keyword(e.keywords);this.language="new" kgeolocation:null;e.ip="undefined" kgeolocation?new="" l="n[1];i.experimentId=parseInt(l);var" language;this.operatingsystem="new" loader="function(){function" loader;this.targeting="new" m="0,d=t.length;m<d;++m)if(e==t[m].element)t[m].element=s;if(!1===a){e=s;s.parentNode.removeChild(s)}}if(a)e.parentNode.removeChild(e);return" n="Kameleoon.Utils.setInterval((function(){var" new="" o="Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(o);var" operatingsystem(e.oss);this.referrer="new" p='e.className.match(/(KameleoonClass[^\s]*)/);if(p)s.className+=(s.className?"' r="void" referrer(e.referrers);this.timezone="new" regexp("(^|;)(\\s*"+t+"(.*?);)");a='a.replace(l,"$1");if(a){if(a.lastIndexOf(";")<a.length-2)a+=";";if(a.lastIndexOf("' return="" runtime="function(){function" runtime(){var="" s='a.split("/")[0];r=isNaN(s)?s:parseInt(s)}i.registeredVariationId=r;break;case"kameleoonGlobalPersonalizationExposition":i.type=o;i.active=null==a?null:"true"==a.split("/")[0];break;case' static_image_path="" t='document.getElementById("adBlockerCheck");if(null!=t)t.parentNode.removeChild(t);if(null==e.adBlocker){Kameleoon.Utils.clearInterval(n);e.adBlocker=!1}else' t(){this.max_href_length_in_a_request="200;this.MAX_PAGE_TITLE_LENGTH_IN_A_REQUEST=200;this.SCRIPT_VERSION=20190115;this.trackExternalSolutionData=function(){}}t.prototype.run=function(t){var" targeting;this.tracking="new" timezone;kameleoon.internals.runtime.storeddata.savefield("gatherer","startsofvisitforcurrentpage",0);kameleoon.internals.runtime.visitor="new" tracking;this.utils="new" try{a="JSON.parse(t.newValue).value}catch(e){return}var" t}();var="" utils}return="" visitevent(t).track(e)};return="" visitor;t();kameleoon.utils.runprotectedscript(kameleoon.internals.runtime.gatherer.configuration.customscriptbefore,"kameleooncustomscriptbefore.js");this.track(visitevent_page);this.track(visitevent_staticdata);kameleoon.internals.runtime.visitor.updateandtrackinfluences();visitevent_activity.initialize();this.customdata.run();kameleoon.internals.runtime.gathererrun="!0};t.prototype.startNewVisit=function(t,e){Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!0,!0,e);this.track(VisitEvent_Page);this.track(VisitEvent_StaticData);Kameleoon.Internals.runtime.Visitor.updateAndTrackInfluences();this.CustomData.run();};t.prototype.track=function(t,e){new">0){Kameleoon.Utils.clearInterval(a);e.adBlocker=!0}}),50);var i=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(i);if(null==e.ghostery){Kameleoon.Utils.clearInterval(a);e.ghostery=!1}else Kameleoon.Gatherer.track(VisitEvent_AdBlocker)}),2e3);if("Safari"==Kameleoon.Internals.runtime.Device.browser)window.onpageshow=function(t){if(t.persisted)e.updateAfterPageCached()};Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!1,!1,!1);if(!Kameleoon.Internals.configuration.requestsAfterConsent)e.loadExternalRequests();KMutationObserver.setMutationObserver();Kameleoon.Analyst.loadKameleoonFull((function(){Kameleoon.Analyst.loadSimulation()}));Kameleoon.Analyst.Actions.processAllActions();Kameleoon.Targeting.processAllTargetingSegments();Kameleoon.Analyst.Goals.checkKameleoonGoals()};this.setupLocalData=function(t){Kameleoon.Utils.addEventListener(window,"message",Kameleoon.Utils.processMessageEvent,!1);if(e.iframeLocalStorage){e.externalIframe=document.getElementById("kameleoonExternalIframe")||window.kameleoonExternalIframe;e.postMessageOrigin=window.kameleoonIframeOrigin?window.kameleoonIframeOrigin:Kameleoon.Internals.configuration.IFRAME_ORIGIN;e.postMessageCallbacks={};if(null==Kameleoon.Internals.configuration.externalIframeData)Kameleoon.Utils.postMessageToExternalIframe(JSON.stringify({type:"retrieve",callbackId:Kameleoon.Utils.addPostMessageCallback((function(n){e.incomingStoredData=n;t()}))}));else{e.incomingStoredData=Kameleoon.Internals.configuration.externalIframeData;t();delete Kameleoon.Internals.configuration.externalIframeData}}else{e.incomingStoredData=null;t()}};this.shouldAbortRuntimeOptout=function(){var t=e.parameters.kameleoonOptout;if(null!=t){var n=parseInt(t);Kameleoon.Utils.createLocalData("kameleoonOptout","true",isNaN(n)?45:n,null,"LS",!1,null,!0)}if(Kameleoon.Utils.readLocalData("kameleoonOptout","LS",!1)||Kameleoon.Utils.readLocalData("kameleoonOptout","COOKIE",!1)){Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"optout"});return!0}return!1};this.updateAfterPageCached=function(){if(e.iframeLocalStorage)Kameleoon.Utils.postMessageToExternalIframe(JSON.stringify({type:"retrieve",callbackId:Kameleoon.Utils.addPostMessageCallback((function(){}))}));else{var t=Kameleoon.Utils.readLocalData(Kameleoon.Internals.runtime.simulationMode?"kameleoonSimulationVisitorData":Kameleoon.Internals.runtime.dataKeyName,"LS",!0);Kameleoon.Internals.runtime.storedData.update(t);Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!1,!1,!1)}};this.pageStartTime=(new Date).getTime();this.dataKeyName="kameleoonData";if(Kameleoon.Internals.configuration.useMultipleSiteCodes){this.dataKeyName+="-"+Kameleoon.Internals.configuration.siteCode;Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[this.dataKeyName]=!0}this.Device=new Device;this.deviceType=this.Device.type;this.parameters=Kameleoon.Utils.parseParameters();this.headNode=document.getElementsByTagName("head")[0];this.editorMode="true"==this.parameters.kameleoon;this.proxyMode="proxy."+Kameleoon.Internals.configuration.DOMAIN===window.location.hostname;this.disableCache="true"==this.parameters.kameleoonDisableCache||this.parameters.kameleoonVariationId;this.kameleoonSelectionIframeMode="true"==this.parameters.kameleoonSelectionIframeMode;this.iframeLocalStorage=Kameleoon.Internals.configuration.useWideDomainSupport;this.useWideDomainSupport=Kameleoon.Internals.configuration.useWideDomainSupport||null!=window.kameleoonLightIframe;if(0==window.kameleoonLightIframe||null==window.kameleoonLightIframe)this.iframeLocalStorage=!1;this.mouseDownEvent="ontouchend"in document.documentElement?"touchend":"mousedown";this.addedClasses=[];this.addedIDs=[];this.eventListeners=[];this.listenVariations=[];this.waitingElementPresentObjects=[];this.experiments=[];this.personalizations=[];this.variations=[];this.intervalIds={};this.timeoutIds={};this.goals=Kameleoon.Utils.clone(Kameleoon.Internals.configuration.goals);this.cantUseMutationObserver="undefined"==typeof MutationObserver&&!Kameleoon.Internals.configuration.disableDomMutationObserver;this.Consent=new Consent}Runtime.prototype.clear=function(){this.eventListeners.forEach((function(eventListener){var element;if("window"==eventListener.elementKey||"document"==eventListener.elementKey)element=eval(eventListener.elementKey);else{element=document.querySelector("[kameleoonListener-".concat(eventListener.elementKey,"=true]"));if(element)element.removeAttribute("kameleoonListener-".concat(eventListener.elementKey))}if(element)element.removeEventListener(eventListener.eventType,eventListener.actionFunction,eventListener.useCapture)}));for(var timeoutId in this.timeoutIds)Kameleoon.Utils.clearTimeout(parseInt(timeoutId));for(var intervalId in this.intervalIds)Kameleoon.Utils.clearInterval(parseInt(intervalId));if(this.RequestManager)this.RequestManager.processRequests();if(this.storedData)this.storedData.save(!0);if(null!=this.mutationObserver)this.mutationObserver.disconnect();if(null!=this.mutationObserverSpa)this.mutationObserverSpa.disconnect();var elements=Kameleoon.Utils.querySelectorAll("[id^='kameleoonElement'], [id*='kameleoonScenarioLayerBase'], [id^='kameleoonStyleSheet'], [class*='kameleoonWidget']");for(var i=0;i<elements.length;++i)elements[i].parentnode.removechild(elements[i]);elements=kameleoon.utils.queryselectorall("[id^='kameleoonid'], .kameleoonoverlay");for(var="" ;if(-1!='e.indexOf("#")){a=e.substr(e.indexOf("#"));e=e.substr(0,e.indexOf("#"))}e+=(-1==e.indexOf("?")?"?":"&")+t+a;return' a="" commandqueue(window.kameleoonqueue);kameleoon.utils.sendkameleooncustomevent.call(window,"started",{newvisitorcode:1="Kameleoon.Internals.runtime.Visitor.visits.length});e.initializeListeners();e.setup();e.setupAfterLocalDataRetrieval=!0}}))};return" e="Kameleoon.Internals.runtime;if(null==e.currentPageAbsoluteURLNoProxyMode){if(e.proxyMode){var" e+(-1='e.indexOf("#")?"#":"&")+t;var' e.currentpageabsoluteurlnoproxymode};this.computecurrentpagecanonicalurl="function(){if(null==Kameleoon.Internals.runtime.currentPageCanonicalURL){var" e.id="t}));if(n)e.currentPageAbsoluteURLNoProxyMode=n[0].baseURL}}if(null==e.currentPageAbsoluteURLNoProxyMode)e.currentPageAbsoluteURLNoProxyMode=window.location.href}return" e};this.computecurrentpageabsoluteurlnoproxymode="function(){var" i='0;i<elements.length;++i)elements[i].removeAttribute("class");if(Kameleoon.Internals.runtime.storedData)Kameleoon.Internals.runtime.storedData.save(!0);Kameleoon.API.Events.triggered=[]};Runtime.prototype.run=function(){var' n="e.experiments.filter((function(e){return" requestmanager}));e.initializeactionsaftergatherer();e.executeglobalscript();window.kameleoonqueue="new" runtime}();var="" storeddata(e.incomingstoreddata);kameleoon.internals.runtime.consent.setup();e.initializeactions();kameleoon.gatherer.run((function(){e.requestmanager="new" t="e.querySelectorAll('link[rel="canonical"]');if(t.length" utils="function(){function" utils(){var="">0)Kameleoon.Internals.runtime.currentPageCanonicalURL=t[0].href}return Kameleoon.Internals.runtime.currentPageCanonicalURL};this.computeCurrentPageCleanRelativeURL=function(){if(null==Kameleoon.Internals.runtime.currentPageCleanRelativeURL)Kameleoon.Internals.runtime.currentPageCleanRelativeURL=e.computeRelativeURL(e.computeCurrentPageCleanAbsoluteURL());return Kameleoon.Internals.runtime.currentPageCleanRelativeURL};this.computeIfSuffix=function(e,t){var n=e.length-t.length;var a=e.lastIndexOf(t,n);return a>=0&&a==n};this.computeRelativeURL=function(e){var t=document.createElement("a");t.href=e;return t.pathname+t.search+t.hash};this.computeStringSha256=function(t){var n=1,a,r=[],o=[];while(++n<18)for(a=n*n;a<312;a+=n)r[a]=1;function i(e,t){return Math.pow(e,1/t)%1*4294967296|0}for(n=1,a=0;n<313;)if(!r[++n]){o[a]=i(n,2);r[a++]=i(n,3)}function l(e,t){return e>>>t|e<<32-t}var s=o.slice(n=0),m=e.encodeUTF8(t),c=[],u=m.length,f=[],d,g,p;for(;n<u;)f[n>>2]|=(255&m.charCodeAt(n))<<8*(3-n++%4);u*=8;f[u>>5]|=128<<24-u%32;f[p=u+64>>5|15]=u;for(n=0;n<p;n+=16){d=s.slice(a=0,8);for(;a<64;d[4]+=g){if(a<16)c[a]=f[a+n];else c[a]="(l(g=c[a-2],17)^l(g,19)^g">>>10)+(0|c[a-7])+(l(g=c[a-15],7)^l(g,18)^g>>>3)+(0|c[a-16]);var h=void 0;d.unshift((g=(d.pop()+(l(h=d[4],6)^l(h,11)^l(h,25))+((h&d[5]^~h&d[6])+r[a])|0)+(0|c[a++]))+(l(u=d[0],2)^l(u,13)^l(u,22))+(u&d[1]^d[1]&d[2]^d[2]&u))}for(a=8;a--;)s[a]=d[a]+s[a]}for(m="";a<63;)m+=(s[++a>>3]>>4*(7-a%8)&15).toString(16);return m};this.computeURLNoKameleoonParameters=function(e){return e.replace(/(\?|&|#)kameleoon[^&#]*/g,"")};this.computeURLRegExpNoKameleoonParameters=function(e){return e?e.replace(/(\\\?|&|#)kameleoon[^&#()]*/g,""):null};this.createLocalData=function(t,n,a,r,o,i,l,s){var m="LS"==o?!0:"COOKIE"==o?!1:!0;var c=(new Date).getTime();if(!s&&!Kameleoon.Internals.runtime.Consent.hasGlobalConsent()){var u=m?"LS":"COOKIE";if(null==Kameleoon.Internals.runtime.localDataMap)Kameleoon.Internals.runtime.localDataMap={};if(null==Kameleoon.Internals.runtime.localDataMap[u])Kameleoon.Internals.runtime.localDataMap[u]={};Kameleoon.Internals.runtime.localDataMap[u][t]={name:t,value:n,days:a,domain:r,forceLocalAccess:o,jsonFormat:i,creationTime:c};if(m)l&&l();return}if(m){var f=c+24*a*60*60*1e3;if(Kameleoon.Internals.runtime.iframeLocalStorage)e.postMessageToExternalIframe(JSON.stringify({type:"set",key:t,data:{value:Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[t]&&e.obfuscateString(JSON.stringify(n))||n,expirationDate:f},callbackId:e.addPostMessageCallback(l)}));else{try{localStorage.setItem(t,JSON.stringify({value:Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[t]&&e.obfuscateString(JSON.stringify(n))||n,expirationDate:f}))}catch(e){}l&&l()}}else{var d="";var g=i?JSON.stringify(n):n;if(a){var f=new Date(c+24*a*60*60*1e3);d="; expires="+f.toUTCString()}if("CURRENT_HOST"!=r){r=r||e.obtainCurrentRootDomain(t,g);d+="; domain="+r}var p=Kameleoon.Internals.configuration.useSecureCookie?"; Secure":"";document.cookie=t+"="+g+d+"; path=/; SameSite=Lax"+p}};this.decodeString=function(t){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var a="";var r,o,i;var l,s,m,c;var u=0;t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(u<t.length){l=n.indexOf(t.charAt(u++));s=n.indexOf(t.charAt(u++));m=n.indexOf(t.charAt(u++));c=n.indexOf(t.charAt(u++));r=l<<2|s>>4;o=(15&s)<<4|m>>2;i=(3&m)<<6|c;a+=String.fromCharCode(r);if(64!=m)a+=String.fromCharCode(o);if(64!=c)a+=String.fromCharCode(i)}a=e.decodeUTF8(a);return a};this.decodeUTF8=function(e){var t="";var n=0;var a=0,r=0,o;while(n<e.length){a=e.charCodeAt(n);if(a<128){t+=String.fromCharCode(a);n++}else if(a>191&&a<224){r=e.charCodeAt(n+1);t+=String.fromCharCode((31&a)<<6|63&r);n+=2}else{r=e.charCodeAt(n+1);o=e.charCodeAt(n+2);t+=String.fromCharCode((15&a)<<12|(63&r)<<6|63&o);n+=3}}return t};this.domReady=function(t){if("complete"==document.readyState||"interactive"==document.readyState)return t();else{var n=!1;e.addEventListener(document,"DOMContentLoaded",(function(){if(n)return;n=!0;t()}),!1);e.addEventListener(window,"load",(function(){if(n)return;n=!0;t()}),!1)}};this.encodeString=function(t){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var a="";var r,o,i,l,s,m,c;var u=0;t=e.encodeUTF8(t);while(u<t.length){r=t.charCodeAt(u++);o=t.charCodeAt(u++);i=t.charCodeAt(u++);l=r>>2;s=(3&r)<<4|o>>4;m=(15&o)<<2|i>>6;c=63&i;if(isNaN(o))m=c=64;else if(isNaN(i))c=64;a=a+n.charAt(l)+n.charAt(s)+n.charAt(m)+n.charAt(c)}return a};this.encodeUTF8=function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var a=e.charCodeAt(n);if(a<128)t+=String.fromCharCode(a);else if(a>127&&a<2048){t+=String.fromCharCode(a>>6|192);t+=String.fromCharCode(63&a|128)}else{t+=String.fromCharCode(a>>12|224);t+=String.fromCharCode(a>>6&63|128);t+=String.fromCharCode(63&a|128)}}return t};this.eraseLocalData=function(t,n,a){var r="LS"==a?!0:"COOKIE"==a?!1:!0;var o=Kameleoon.Internals.runtime.localDataMap;var i=r?"LS":"COOKIE";if(null!=o&&null!=o[i]&&null!=o[i][t])delete o[i][t];if(r)if(Kameleoon.Internals.runtime.iframeLocalStorage)e.postMessageToExternalIframe(JSON.stringify({type:"remove",key:t,callbackId:e.addPostMessageCallback(null)}));else localStorage.removeItem(t);else e.createLocalData(t,"",-1,n,"COOKIE",!1,null,!0)};this.forceNoFlicker=function(e){var t=document.createElement("style");t.setAttribute("id","kameleoonPageLoading");t.setAttribute("rel","stylesheet");t.setAttribute("type","text/css");t.setAttribute("media","screen");var n=e+" { visibility: hidden !important; background-image: none !important; }";t.appendChild(document.createTextNode(n));Kameleoon.Internals.runtime.headNode.appendChild(t)};this.getLocale=function(e){var t=Kameleoon.Gatherer.Language.obtainLocaleTag();if("fr-FR"==t)t="fr";if("en-US"==t)t="en";if(e&&(!t||"fr"!=t))t="en";return t.substring(0,2)};this.obtainComputedStyle=function(e){if(window.getComputedStyle)return getComputedStyle(e,"");return null};this.obtainCurrentRootDomain=function(t,n){if(null==Kameleoon.Internals.runtime.currentRootDomain){var a=window.location.hostname.split(".");var r="";var o="_testRootDomain";for(var i=0,l=a.length;i<l;i++){if(i>0)r="."+r;r=a[l-i-1]+r;if(0==r.length)continue;n+=o;e.createLocalData(t,n,1,r,"COOKIE",!1,void 0,!0);var s=e.readLocalData(t,"COOKIE",!1);if(s&&-1!=s.indexOf(o)){e.eraseLocalData(t,r,"COOKIE");Kameleoon.Internals.runtime.currentRootDomain=r;break}}}return Kameleoon.Internals.runtime.currentRootDomain};this.obtainRandomString=function(e,t){if(void 0===t)t=Analyst.CODE_ALPHABET;var n=t.length;var a="";for(var r=0;r<e;++r){var o=Math.floor(Math.random()*n);a+=t.substring(o,o+1)}return a};this.parseHostName=function(e){var t=document.createElement("a");t.href=e;return t.hostname};this.processRedirect=function(e,t){if(window.location.href!=e){t=t||Kameleoon.Analyst.Actions.currentAction;if(Kameleoon.Internals.runtime.gathererRun&&1==Kameleoon.Internals.runtime.Visitor.currentVisit.timesStartedPages.length){if(Kameleoon.Internals.configuration.googleAnalytics)e=Kameleoon.Utils.addParameterToURL(e,"utm_referrer="+encodeURIComponent(document.referrer),Kameleoon.Internals.configuration.googleAnalyticsAllowAnchor);if(Kameleoon.Internals.configuration.adobeOmniture)e=Kameleoon.Utils.addParameterToURL(e,"sc_referrer="+encodeURIComponent(document.referrer),!0);if(Kameleoon.Internals.configuration.experiments.concat(Kameleoon.Internals.configuration.personalizations).filter((function(e){return e.atInternetTracking})).length>0)e=Kameleoon.Utils.addParameterToURL(e,"xtref="+encodeURIComponent(document.referrer),!0);if(Kameleoon.Internals.configuration.experiments.concat(Kameleoon.Internals.configuration.personalizations).filter((function(e){return e.webtrekkTracking})).length>0)if(1==Kameleoon.Internals.runtime.Visitor.currentVisit.timesStartedPages.length){e=Kameleoon.Utils.addParameterToURL(e,"em_src=ref",!0);var n=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","firstReferrerHref");if(null!=n&&0==n.length)e=Kameleoon.Utils.addParameterToURL(e,"em_src=direct",!0);else if(null!=n&&new RegExp("^https?://[^/]*(google|bing|yahoo|yandex|baidu)\\..*").test(n))e=Kameleoon.Utils.addParameterToURL(e,"em_src=suma",!0)}}var a=Kameleoon.Internals.runtime.parameters;if(a.kameleoonHeatMap){e+=-1==e.indexOf("?")?"?":"&";e+="kameleoonHeatMap="+a.kameleoonHeatMap;e+="&kameleoonProgressiveLoading="+a.kameleoonProgressiveLoading;e+="&kameleoonExperimentId="+a.kameleoonExperimentId;e+="&kameleoonPageWidth="+a.kameleoonPageWidth;e+="&kameleoonAccountLocale="+a.kameleoonAccountLocale;e+="&kameleoonVariationId="+a.kameleoonVariationId;e+="&kameleoonHeatMapRedirect=true"}var r=document.createElement("a");r.href=e;if(!Kameleoon.Internals.runtime.useWideDomainSupport&&-1==window.location.href.indexOf(r.protocol+"//"+r.hostname)){if(t)e=Kameleoon.Utils.addParameterToURL(e,"kameleoonRedirect-"+t.id+"="+t.associatedVariation.id,!0)}else if(t)Kameleoon.Utils.createLocalData("kameleoonRedirect-"+t.id,t.associatedVariation.id,1,null,null,!1,null,!0);if(window.location.href!=e&&!a.kameleoonHeatMapRedirect){Kameleoon.Utils.forceNoFlicker("*");window.location.replace(e)}}};this.processStorageData=function(e){if(Kameleoon.Internals.runtime.setupAfterLocalDataRetrieval)switch(e.type){case"kameleoonExperiment":for(var t=0,n=Kameleoon.Internals.runtime.experiments.length;t<n;++t){var a=Kameleoon.Internals.runtime.experiments[t];if(e.experimentId==a.id){a.registeredVariationId=e.registeredVariationId;break}}break;case"kameleoonGlobalPersonalizationExposition":Kameleoon.Internals.runtime.personalizationsActive=e.active;break;case Kameleoon.Internals.runtime.dataKeyName:case"kameleoonSimulationVisitorData":if("kameleoonData"==e.type&&!Kameleoon.Internals.runtime.simulationMode||"kameleoonSimulationVisitorData"==e.type&&Kameleoon.Internals.runtime.simulationMode){Kameleoon.Internals.runtime.storedData.update(JSON.parse(Kameleoon.Utils.unobfuscateString(e.value)));Kameleoon.Internals.runtime.Visitor.updateFromStoredData(!1,!1,!1)}break;case"kameleoonLegalConsent":if(e.saveLegalConsent){if(e.saveLegalConsent.AB_TESTING){if(1!=Kameleoon.Internals.runtime.Consent.AB_TESTING)Kameleoon.Internals.runtime.Consent.enable("AB_TESTING")}else if(!1===e.saveLegalConsent.AB_TESTING)if(0!=Kameleoon.Internals.runtime.Consent.AB_TESTING)Kameleoon.Internals.runtime.Consent.disable("AB_TESTING");if(e.saveLegalConsent.PERSONALIZATION){if(1!=Kameleoon.Internals.runtime.Consent.PERSONALIZATION)Kameleoon.Internals.runtime.Consent.enable("PERSONALIZATION")}else if(!1===e.saveLegalConsent.PERSONALIZATION)if(0!=Kameleoon.Internals.runtime.Consent.PERSONALIZATION)Kameleoon.Internals.runtime.Consent.disable("PERSONALIZATION")}break}};this.querySelectorAll=function(t,n){Kameleoon.Internals.runtime.querySelectorAllHasError=!1;var a=!1,r,o=[],i=[];if(null==n)n=document;var l=t.match(/#([0-9]+.*)(?: |$)/);if(l){var s=t.charAt(1);t=t.replace("#"+s,"#\\3"+s+" ")}if(""!==t){if(-1!==t.indexOf("[")&&-1===t.indexOf("']")&&-1===t.indexOf('"]')){var m=t.split(/(?=\.)|(?=#)|(?=\[)/),c,u,f;m.forEach((function(e){if("["===e[0]&&-1===e.indexOf("']")&&-1===t.indexOf('"]')&&-1!==t.indexOf("=")){c=e.split(/=(.+)?/);u=c[1];u=u.substring(0,u.length-1);f=c[0]+"='"+u+"']";t=t.replace(e,f)}}))}if(-1!==t.indexOf(":contains")){a=!0;r=e.treatContainsSelector(t);t=r.newSelector}if(n&&n.querySelectorAll)if(-1!==t.indexOf(":eq"))o=e.treatEqSelector(t,n);else try{o=n.querySelectorAll(t)}catch(e){Kameleoon.Internals.runtime.querySelectorAllHasError=!0;o=[]}for(var d=0,g=o.length;d<g;++d)if(a){if(r.check(r.containText,o[d]))i.push(o[d])}else i.push(o[d])}return i};this.readLocalData=function(t,n,a){var r="LS"==n?!0:"COOKIE"==n?!1:!0;var o=(new Date).getTime();try{if(!Kameleoon.Internals.runtime.Consent.hasGlobalConsent()){var i=Kameleoon.Internals.runtime.localDataMap;var l=r?"LS":"COOKIE";if(null!=i&&null!=i[l]&&null!=i[l][t]){var s=i[l][t];if(o-24*s.days*60*60*1e3>=s.creationTime)delete i[l][t];else return s.value}}if(r){var s=void 0;try{s=localStorage&&localStorage.getItem(t);if(!s)return null;if(Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[t])s=e.unobfuscateString(s);s=JSON.parse(s)}catch(n){s=localStorage&&localStorage.getItem(t);if(!s)return null;s=JSON.parse(s);if(Utils.LOCAL_STORAGE_OBFUSCATED_KEYS[t])s.value=JSON.parse(e.unobfuscateString(s.value))}if(o>(s.date||s.expirationDate)){localStorage.removeItem(t);return null}return s.value}else{var m=null;var c=document.cookie.split(";");for(var u=0,f=c.length;u<f;++u){var d=c[u];var g=d.indexOf("=");if(d.substring(0,g).trim()==t){var p=d.substring(g+1);m=a&&JSON.parse(p)||p;break}}return m}}catch(e){}return null};this.runProtectedFunction=function(e,t){try{e()}catch(e){if(t)console.log(e);else Kameleoon.Utils.Logger.send(e,"kameleoon.js");if(Kameleoon.Internals.runtime&&t)Kameleoon.Internals.runtime.processPageLoaded()}};this.runProtectedScript=function(e,t){if(e){var n=null;try{n=eval.call(window,"(function () {\n"+e+"\n})();"+"//# sourceURL="+t)}catch(e){n=null;console.log(e)}return n}return null};this.seededRandom=function(t,n){var a;if(n){a=Kameleoon.Utils.computeStringSha256(t);return parseInt(a,16)/Math.pow(2,256)}a=e.computeStringHash(t);a=(9301*Math.abs(a)+49297)%233280;return a/233280};this.treatEqSelector=function(e,t){if(void 0===e)return null;var n=e.split(/\:eq\([0-9]+\)/g);var a=e.match(/(?!\:eq\()[0-9]+/g)||[];var r=null==t?document:t;for(var o=0;o<n.length;++o){n[o]=n[o].trim();if(">"===n[o].charAt(0))n[o]=n[o].substring(1,e.length).trim();if(null==r||""==n[o].trim())break;if(o>a.length-1)r=r.querySelectorAll(n[o]);else r=r.querySelectorAll(n[o])[a[o]]}if(null==r)return[];if(void 0==r.length)r=[r];var i=Kameleoon.Utils.querySelectorAll(e.replace(/\:eq\([0-9]+\)/g,""));var l=[];for(var o=0;o<i.length;++o)for(var s=0;s<r.length;++s)if(i[o]===r[s]){l.push(r[s]);break}return l};this.Logger=new Logger;this.bowser=window.kbowser||window.bowser}Utils.prototype.addEventListener=function(e,t,n,a,r){var o;if(e==window)o="window";else if(e==document)o="document";else{o=Kameleoon.Utils.obtainRandomString(4);e.setAttribute("kameleoonListener-".concat(o),!0)}var i=n;if(r)e.addEventListener(t,i,a);else{i=function(e){Kameleoon.Utils.runProtectedFunction((function(){n(e)}))};e.addEventListener(t,i,a)}Kameleoon.Internals.runtime.eventListeners.push({elementKey:o,eventType:t,actionFunction:i,useCapture:a})};Utils.prototype.addPostMessageCallback=function(e){var t=Math.random().toString();Kameleoon.Internals.runtime.postMessageCallbacks[t]=e;return t};Utils.prototype.addCSSStyleSheet=function(e,t,n){if(!e)return;var a=n?n:document;var r="kameleoonStyleSheet"+(t?"-"+t.id:"");var o=n?n.getElementById(r):null;var i="";if(o){i=o.textContent;o.parentNode.removeChild(o)}var l=a.createElement("style");l.className="KameleoonStyleSheet";l.setAttribute("id",r);l.setAttribute("rel","stylesheet");l.setAttribute("type","text/css");l.setAttribute("media","screen");var s=i+e;if(l.styleSheet)l.styleSheet.cssText=s;else l.appendChild(document.createTextNode(s));if(n)a.getElementsByTagName("head")[0].appendChild(l,a.getElementsByTagName("head")[0].firstChild);else Kameleoon.Internals.runtime.headNode.appendChild(l);if(t)t.loadedCSSStyleSheet=l};Utils.prototype.applyVariation=function(e){new Variation(e).process()};Utils.prototype.clearInterval=function(e){delete Kameleoon.Internals.runtime.intervalIds[e];window.clearInterval(e)};Utils.prototype.clearTimeout=function(e){delete Kameleoon.Internals.runtime.timeoutIds[e];window.clearTimeout(e)};Utils.prototype.clone=function(e){return JSON.parse(JSON.stringify(e))};Utils.prototype.computeCurrentPageCleanAbsoluteURL=function(){if(null==Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL){Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL=this.computeURLNoKameleoonParameters(this.computeCurrentPageAbsoluteURLNoProxyMode());try{Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL=decodeURIComponent(Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL)}catch(e){}}return Kameleoon.Internals.runtime.currentPageCleanAbsoluteURL};Utils.prototype.computeStringHash=function(e,t){e=t?this.computeStringSha256(e):e;var n=0;for(var a=0;a<e.length;++a){n=(n<<5)-n+e.charCodeAt(a);n&=n}return n};Utils.prototype.secureSessionStorage=function(e,t,n){try{return window.sessionStorage[e](t,n)}catch(e){return null}};Utils.prototype.flatten=function(){var e=[];for(var t=0;t<arguments.length;t++)e[t]=arguments[t];var n=[];for(var a=0;a<arguments.length;a++)if(arguments[a]instanceof Array)n.push.apply(n,Kameleoon.Utils.flatten.apply(this,arguments[a]));else n.push(arguments[a]);return n};Utils.prototype.isInsideHoursMinutesRange=function(e,t,n,a,r,o){if(0==a){n--;if(-1==n)n=23;a=60}if(n<e||n==e&&a<t){n+=24;if(r<e||r==e&&o<t)r+=24}var i=60*(60*r+o)*1e3;var l=60*(60*e+t)*1e3;var s=60*(60*n+a)*1e3;return i>=l&&i<s};Utils.prototype.obfuscateString=function(e){var t="";for(var n=0,a=e.length;n<a;n+=1){var r=e[n];if("’"==r)r="'";t+=String.fromCharCode(r.charCodeAt(0)+16)}return t};Utils.prototype.parseParameters=function(){var e={};var t=window.location.hash.substring(1).replace(/\?/g,"&");var n=window.location.search.substring(1);if(n||t){var a=(n?n.split("&"):[]).concat(t?t.split("&"):[]);a.forEach((function(t){var n=t.split("=");try{e[decodeURIComponent(n[0])]=n[1]?decodeURIComponent(n[1]):null}catch(t){e[unescape(n[0])]=n[1]?unescape(n[1]):null}}))}return e};Utils.prototype.performBeaconServerCall=function(e,t,n,a){var r=new XMLHttpRequest;r.open("GET",e,!0);if(t)r.onreadystatechange=function(e){t.bind(r)(e.target)};if(n){r.onerror=function(e){n.bind(r)(e.target)};r.ontimeout=function(e){n.bind(r)(e.target)}}r.timeout=a||15*60*1e3;r.send()};Utils.prototype.postMessageToExternalIframe=function(e){if(!Kameleoon.Internals.runtime.externalIframe||!Kameleoon.Internals.runtime.externalIframe.contentWindow){if(window.kameleoonIframeURL){var t=document.createElement("iframe");t.src=window.kameleoonIframeURL;t.id="kameleoonExternalIframe";t.style.cssFloat="left !important";t.style.height="0px !important";t.style.opacity="0.0 !important";t.style.width="0px !important";t.onload=function(){Kameleoon.Internals.runtime.externalIframe=t;Kameleoon.Internals.runtime.externalIframe.contentWindow.postMessage("kameleoon"+e,"*")};document.head.appendChild(t)}}else Kameleoon.Internals.runtime.externalIframe.contentWindow.postMessage("kameleoon"+e,"*")};Utils.prototype.processMessageEvent=function(event){if("string"!==typeof event.data)return;if("obtainTagCommanderVariableNames"==event.data){var tagCommanderVariableNames=[];if(window.tc_vars)for(var tagCommanderVariableName in window.tc_vars)tagCommanderVariableNames.push(tagCommanderVariableName);if(!(event.source instanceof MessagePort)&&!(event.source instanceof ServiceWorker))event.source.postMessage("tagCommanderVariableNames"+JSON.stringify(tagCommanderVariableNames),event.origin);return}if(0==event.data.indexOf("checkKameleoonScriptPresent")){if("https://back-office."+Kameleoon.Internals.configuration.DOMAIN==event.origin){var resultMessage="";var obtainScriptInstallationCode=event.data.replace("checkKameleoonScriptPresent","");eval(obtainScriptInstallationCode);if(!(event.source instanceof MessagePort)&&!(event.source instanceof ServiceWorker))event.source.postMessage(resultMessage,event.origin)}return}if(-1==event.data.indexOf("kameleoonFull")){if(event.data.indexOf("addKameleoonInterest")>=0||event.data.indexOf("finishKameleoonInterestCheck")>=0){Kameleoon.Internals.runtime.Gatherer.interestsChecked=!0;var messageData_1=JSON.parse(event.data);if("addKameleoonInterest"==messageData_1.command)Kameleoon.Internals.runtime.Gatherer.freshActiveInterestIndexes.push(messageData_1.index);--Kameleoon.Internals.runtime.numberInterestChecks;if(0==Kameleoon.Internals.runtime.numberInterestChecks)var timeoutId_1=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(timeoutId_1);var e=document.getElementsByClassName("KameleoonInterestDetection");for(var t=0,n=e.length;t<n;++t){var a=e.item(0);a.parentNode.removeChild(a)}Kameleoon.Gatherer.track(VisitEvent_Interests,{index:messageData_1.index,fresh:!0})}),300);return}if(event.data.indexOf("imageChecked")>=0){var messageData=JSON.parse(event.data);if(null!=Kameleoon.Internals.runtime.checkImageCallbacks&&null!=Kameleoon.Internals.runtime.checkImageCallbacks[messageData.callbackId]){var callback=Kameleoon.Internals.runtime.checkImageCallbacks[messageData.callbackId];delete Kameleoon.Internals.runtime.checkImageCallbacks[messageData.callbackId];callback&&callback(messageData.value);var iframes=document.getElementsByClassName("KameleoonImageDetection");for(var i=0,l=iframes.length;i<l;++i){var iframe=iframes.item(0);iframe.parentNode.removeChild(iframe)}}}}if(Kameleoon.Internals.runtime.iframeLocalStorage&&Kameleoon.Internals.runtime.postMessageOrigin==event.origin)try{var messageData=JSON.parse(event.data);if(messageData.kameleoonMessage){if(messageData.callbackId){var callback=Kameleoon.Internals.runtime.postMessageCallbacks[messageData.callbackId];delete Kameleoon.Internals.runtime.postMessageCallbacks[messageData.callbackId];callback&&callback(messageData.data)}if(null!=messageData.type)Kameleoon.Utils.processStorageData(messageData)}}catch(e){}};Utils.prototype.removeBlockingStyleSheet=function(){var e=document.getElementById("kameleoonPageLoading");if(e&&e.parentNode)e.parentNode.removeChild(e)};Utils.prototype.removeCSSStyleSheet=function(e){if(e.loadedCSSStyleSheet){var t=e.loadedCSSStyleSheet.id.replace("kameleoonStyleSheet-","");if(-1==t.indexOf(",")){Kameleoon.Internals.runtime.headNode.removeChild(e.loadedCSSStyleSheet);e.loadedCSSStyleSheet=null}else e.loadedCSSStyleSheet.id="kameleoonStyleSheet-"+t.replace(new RegExp(e.id+",?"),"")}};Utils.prototype.sendKameleoonCustomEvent=function(e,t,n){try{var a=document.createEvent("CustomEvent");t.time=(new Date).getTime();a.initCustomEvent("Kameleoon::"+e,!1,!1,t);window.dispatchEvent(a);if(sessionStorage.getItem("kameleoonLightExtension")||Kameleoon.Internals.runtime.parameters.kameleoonLightExtension){t.type=n?n:t.type;window.kameleoonEvents=window.kameleoonEvents||[];window.kameleoonEvents.push(t)}}catch(e){}};Utils.prototype.setInterval=function(e,t,n,a){var r=window.setInterval((function(){Kameleoon.Utils.runProtectedFunction((function(){e()}),a)}),t);Kameleoon.Internals.runtime.intervalIds[r]=!0;if(n)e();return r};Utils.prototype.setTimeout=function(e,t,n){var a=window.setTimeout((function(){Kameleoon.Utils.runProtectedFunction((function(){e()}),n)}),t);Kameleoon.Internals.runtime.timeoutIds[a]=!0;return a};Utils.prototype.testEmptyMap=function(e){return 0==Object.keys(e).length};Utils.prototype.treatContainsSelector=function(e){var t={},n;function a(e,t){var n=!1;if(t.textContent&&-1!==t.textContent.indexOf(e))n=!0;return n}n=e.match(/:contains\(['"]([\s\S]+)['"]\)/);t.containText=n[1];t.newSelector=e.replace(n[0],"");if(""===t.newSelector)t.newSelector="*";t.check=a;return t};Utils.prototype.unobfuscateString=function(e){var t="";for(var n=0,a=e.length;n<a;n+=1)t+=String.fromCharCode(e[n].charCodeAt(0)-16);return t};Utils.LOCAL_STORAGE_OBFUSCATED_KEYS={kameleoonData:!0,kameleoonSimulationVisitorData:!0};Utils.MAX_STORAGE_DAYS=365;return Utils}();var Browser=function(){function r(r){this.browsers=r}r.prototype.obtain=function(){var r=Kameleoon.Internals.runtime.Device.browser;if("Internet Explorer"==r||"Microsoft Edge"==r)r="Explorer";return r};r.prototype.obtainIndex=function(){var r=this.obtain()||"";var e=r.toUpperCase();for(var t in this.browsers)if(this.browsers[t].name.toUpperCase()==e)return parseInt(t);return null};return r}();var CustomData=function(){function CustomData(customData){var _this=this;this.CUSTOM_DATA_CUTOFF=3*1e3;this.CUSTOM_DATA_INTERVAL=3*1e3;this.CUSTOM_DATA_RETRY_DELAY_BEFORE_CUT_OFF=100;this.MAX_INTERVAL_API_VISIT_REQUEST=15*60*1e3;this.MAX_NUMBER_REQUESTS_TO_API_VISIT=3;this.inheritVisitorScopeAndTrackVisitorDataFromServer=function(){if(Kameleoon.Internals.runtime.Visitor.visits.length>1){var e=Kameleoon.Internals.runtime.Visitor.currentVisit.countByValueByCustomDatum;var t=Kameleoon.Internals.runtime.Visitor.visits[Kameleoon.Internals.runtime.Visitor.visits.length-2].countByValueByCustomDatum;for(var a in _this.customData){var n=_this.customData[a].scope;if("VISITOR"==n&&null==e[a]){var r=t[a];if(null!=r)_this.register(parseInt(a),{value:r,overwrite:!0},!0)}}Kameleoon.Internals.runtime.Visitor.saveToStoredData()}};this.register=function(e,t,a){var n=_this.customData[e];if(n){var r={};var i=t.value;if(null==i)return;var o=t.overwrite;if(a)r=i;else if(i instanceof Array){for(var s=0,l=i.length;s<l;++s)if(null!=i[s]&&(i[s].toString().length<=VisitEvent_CustomData.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST||n.localOnly))r[i[s]]=1}else if(i.toString().length<=VisitEvent_CustomData.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST||n.localOnly)r[i]=1;var u="LIST"==n.type||"COUNT_LIST"==n.type?o:!0;if(u||!Kameleoon.Utils.testEmptyMap(r)){Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"CustomDataSet",{name:n.name,value:i});Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"customData/set",name:n.name,value:i});Kameleoon.Gatherer.track(VisitEvent_CustomData,{index:e,overwrite:u,countByValueToAdd:r,value:i,localOnly:n.localOnly})}}};this.registerVisitsRequestSuccessAndChangePreviousVisits=function(e){Kameleoon.Internals.runtime.storedData.saveField("Gatherer","visitsRequestSuccess",!0);var t=[];for(var a=0,n=e.length;a<n;++a)t.push(new Visit(e[a]).convertVisitFromServer());if(t.length>0){var r=Kameleoon.Internals.runtime.Visitor;r.addPreviousVisits(t);r.updateAndTrackInfluences();r.saveToStoredData();_this.inheritVisitorScopeAndTrackVisitorDataFromServer()}};this.run=function(){Kameleoon.Internals.runtime.Visitor.currentVisit.clearCustomDataPage();Kameleoon.Utils.clearInterval(_this.intervalId);if(Kameleoon.Internals.runtime.Gatherer.startOfVisit)_this.inheritVisitorScopeAndTrackVisitorDataFromServer();_this.firstTimeCheck=(new Date).getTime();_this.intervalId=Kameleoon.Utils.setInterval(_this.obtain.bind(_this),_this.CUSTOM_DATA_RETRY_DELAY_BEFORE_CUT_OFF,!0);Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearInterval(_this.intervalId)}),_this.CUSTOM_DATA_CUTOFF);Kameleoon.Utils.setInterval(_this.obtain.bind(_this),_this.CUSTOM_DATA_INTERVAL,!1)};this.customData=customData;Kameleoon.Internals.runtime.enableHistoryReconciliation=!1;for(var key in customData)if(customData[key].mappingIdentifier){Kameleoon.Internals.runtime.enableHistoryReconciliation=!0;break}}CustomData.prototype.obtain=function(){for(var e in this.customData)if(!this.customData[e].treated){var t=parseInt(e);var a=this.obtainValueMap(t,this.customData[e]);if(a)this.register(t,a)}};CustomData.prototype.obtainValueFromPath=function(e,t){return e.match(/[^'\]\[\.\"]+/gi).reduce((function(e,t){return e&&e[t]}),t)};CustomData.prototype.obtainValueMap=function(e,t){var a=null;if(null!=t&&!t.disabled)switch(t.method.toUpperCase()){case"GTM":if(window.dataLayer&&t.variableName)for(var n=0,r=window.dataLayer.length;n<r;++n){var i=this.obtainValueFromPath(t.variableName,window.dataLayer[n]);if(null!=i){a={value:i,overwrite:!1};break}}break;case"TC":if(window.tc_vars&&t.variableName){var i=this.obtainValueFromPath(t.variableName,window.tc_vars);if("string"==typeof i&&0==i.length)i=null;if(null!=i){a={value:i,overwrite:!1};break}}break;case"TEALIUM":if(window.utag_data&&t.variableName){var i=this.obtainValueFromPath(t.variableName,window.utag_data);if("string"==typeof i&&0==i.length)i=null;if(null!=i){a={value:i,overwrite:!1};break}}break;case"CUSTOM_CODE":a=Kameleoon.Utils.runProtectedScript(t.customEvalCode,"kameleoonCustomDataScript-"+e+".js");break;default:break}if(null!=a){t.treated=!0;var o=Kameleoon.Internals.runtime.Visitor.currentVisit.countByValueByCustomDatum[e];var s=a.value;if(null!=s){var l=t.type;if("LIST"==l||"COUNT_LIST"==l||null==o||Object.keys(o)[0]!=s||Kameleoon.Internals.runtime.enableHistoryReconciliation&&t.mappingIdentifier&&null==Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","visitsRequestSuccess"))return a}}return null};CustomData.prototype.remoteSynchronisation=function(e,t,a){};return CustomData}();var KeyPage=function(){function e(e){this.keyPages=e}e.prototype.obtainIndexes=function(){var e=[];for(var t in this.keyPages){var n=new RegExp(this.keyPages[t].relativeURLRegExp);if(n.test(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL())||n.test(Kameleoon.Utils.computeCurrentPageCleanRelativeURL()))e.push(parseInt(t))}if(0==e.length)e.push(null);return e};return e}();var KeyWord=function(){function r(r){this.keyWords=r}r.prototype.obtainIndexes=function(r){var e=[];for(var t in this.keyWords)if(new RegExp(this.keyWords[t].wordRegExp,"i").test(r))e.push(parseInt(t));return e};return r}();var Language=function(){function a(){this.DEFAULT_LOCALE_LANGUAGE_TAG="en"}a.prototype.obtainLocaleTag=function(){var a=null;if(navigator&&navigator.language)a=navigator.language;return a?a:this.DEFAULT_LOCALE_LANGUAGE_TAG};return a}();var OperatingSystem=function(){function e(e){this.oss=e}e.prototype.obtainIndex=function(){var e=this.obtain()||"";var n=e.toUpperCase();for(var t in this.oss)if(this.oss[t].name.toUpperCase()==n)return parseInt(t);return null};e.prototype.obtain=function(){var e=Kameleoon.Utils.bowser.parse(navigator.userAgent);switch(e.os.name){case"Windows Phone":case"iOS":case"Android":case"Linux":case"Windows":return e.os.name;case"macOS":return"Tablet"==Kameleoon.Internals.runtime.Device.type?"iOS":"Mac";default:return null}};return e}();var Referrer=function(){function Referrer(e){this.referrers=e}Referrer.prototype.obtainCorrected=function(e){switch(this.obtainType(e)){case 0:case 1:case 2:return null;default:return this.obtain()}};Referrer.prototype.obtain=function(){return document.referrer};Referrer.prototype.obtainDetectionMatches=function(e){var r=this.obtainDetectionPartMatches(e.method,e.parameters);if(e.and)r=r&&this.obtainDetectionPartMatches(e.andMethod,e.andParameters);return r};Referrer.prototype.obtainDetectionPartMatches=function(method,parameters){switch(method.toUpperCase()){case"REFERRER_REGEX":return new RegExp(parameters).test(this.obtain());case"URL_REGEX":var regExp=new RegExp(parameters);return regExp.test(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL())||regExp.test(Kameleoon.Utils.computeCurrentPageCleanRelativeURL());default:try{return!0===eval(parameters)}catch(e){return!1}}};Referrer.prototype.obtainIndexes=function(e){switch(this.obtainType(e)){case 0:case 2:return[null];case 1:return[0];default:var r=[];var t=Number.NEGATIVE_INFINITY;for(var n in Kameleoon.Internals.runtime.Gatherer.configuration.referrers){var a=Kameleoon.Internals.runtime.Gatherer.configuration.referrers[n];if(this.obtainMatches(a)){var o=a.priority;if(null==o)o=Number.NEGATIVE_INFINITY;if(o>=t){if(o>t){r=[];t=o}r.push(parseInt(n)+1)}}}if(0==r.length)r.push(null);return r}};Referrer.prototype.obtainIsIgnored=function(e){var r=this.obtain();if(Kameleoon.Internals.runtime.Gatherer.configuration.directNoneReferrerOnlyFirst)if(""==r&&!e)return!0;var t=window.location.pathname;var n=Kameleoon.Internals.runtime.Gatherer.configuration.noReferrerPages.length;for(var a=0;a<n;a++)if(t==Kameleoon.Internals.runtime.Gatherer.configuration.noReferrerPages[a])return!0;return!1};Referrer.prototype.obtainMatches=function(e){var r=e.detections;for(var t=0;t<r.length;t++)if(this.obtainDetectionMatches(r[t]))return!0;return!1};Referrer.prototype.obtainType=function(e){if(this.obtainIsIgnored(e))return 0;var r=-1;var t=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","startsOfVisitForCurrentPage");if(t>1)return 1;if(r>=0)return 2;return 3};return Referrer}();var StoredData=function(){function a(a){var e=this;this.Gatherer={};this.Runtime={};this.Vars=Kameleoon.Utils.readLocalData("kameleoonVars","LS")||{};this.Visitor={};this.canSave=!1;if(a){var t="";if(a[Kameleoon.Internals.runtime.dataKeyName]){t=a[Kameleoon.Internals.runtime.dataKeyName];if(a.Kameleoon)Kameleoon.Utils.eraseLocalData("kameleoonData",null,"LS")}else if(a.kameleoonData)t=a.kameleoonData;if(Kameleoon.Internals.runtime.simulationMode)if(a.kameleoonDataSimulation||a.kameleoonSimulationVisitorData)t=a.kameleoonDataSimulation||a.kameleoonSimulationVisitorData;var o=Kameleoon.Utils.unobfuscateString(t);var i=o&&JSON.parse(o)||{};this.Gatherer=i.Gatherer||{};this.Runtime=i.Runtime||{};this.Vars=i.Vars||a.kameleoonVars||{};this.Visitor=i.Visitor||{}}else{var n=Kameleoon.Utils.readLocalData("kameleoonData","LS");if(Kameleoon.Internals.configuration.useMultipleSiteCodes){var l=Kameleoon.Utils.readLocalData(Kameleoon.Internals.runtime.dataKeyName,"LS",!0);if(l)n=l;Kameleoon.Utils.eraseLocalData("kameleoonData",null,"LS")}if(Kameleoon.Internals.runtime.simulationMode)if(Kameleoon.Utils.readLocalData("kameleoonDataSimulation","LS",!0)||Kameleoon.Utils.readLocalData("kameleoonSimulationVisitorData","LS",!0))n=Kameleoon.Utils.readLocalData("kameleoonDataSimulation","LS",!0)||Kameleoon.Utils.readLocalData("kameleoonSimulationVisitorData","LS",!0);if(n){this.Gatherer=n.Gatherer;this.Runtime=n.Runtime||{};this.Vars=n.Vars||this.Vars;this.Visitor=n.Visitor}}Kameleoon.Utils.eraseLocalData("kameleoonVars",null,"LS");for(var s in this.Vars)if(Kameleoon.Internals.runtime.pageStartTime>this.Vars[s].date)delete this.Vars[s];Kameleoon.Utils.setInterval((function(){if(e.canSave){e.save(!0);e.canSave=!1}}),1e3);Kameleoon.Utils.addEventListener(window,"beforeunload",(function(){e.save(!0)}))}a.prototype.obtainField=function(a,e,t){return this[a][e]||t||null};a.prototype.resetForStartOfVisit=function(){this.Runtime={}};a.prototype.saveField=function(a,e,t){this[a][e]=t;this.save(!1)};a.prototype.save=function(a){if(a)Kameleoon.Utils.createLocalData(Kameleoon.Internals.runtime.simulationMode?"kameleoonSimulationVisitorData":Kameleoon.Internals.runtime.dataKeyName,this,Kameleoon.Internals.runtime.simulationMode?1/24:Utils.MAX_STORAGE_DAYS,null,"LS",!0);else this.canSave=!0};a.prototype.update=function(a){this.Gatherer=a.Gatherer||this.Gatherer;this.Runtime=a.Runtime||this.Runtime;this.Vars=a.Vars||this.Vars;this.Visitor=a.Visitor||this.Visitor};return a}();var TimeZone=function(){function t(){}t.prototype.obtainId=function(){var t;try{t="undefined"!=typeof Intl&&Intl.DateTimeFormat().resolvedOptions?Intl.DateTimeFormat().resolvedOptions().timeZone:null}catch(n){t=null}return t};return t}();var VisitEvent=function(){function e(e){this.eventType=e.type;this.visitEvent=e}e.prototype.track=function(e){var t=this;var n=function(){var n=new t.visitEvent(e);Kameleoon.Internals.runtime.Visitor.saveToStoredData();if((!e||!e.notTrack&&!n.notTrack)&&Kameleoon.Internals.configuration.track)Kameleoon.Internals.runtime.RequestManager.addRequest(n);Kameleoon.Internals.runtime.storedData.save(t.visitEvent.urgent)};if(!Kameleoon.Internals.runtime.Visitor.currentVisit.isVisitFinished())n();else if(this.eventType==VisitEvent_Activity.type&&Kameleoon.Internals.runtime.Gatherer.active||this.eventType==VisitEvent_Search.type){Kameleoon.Internals.runtime.Visitor=new Visitor;Kameleoon.Gatherer.track(VisitEvent_Page);Kameleoon.Gatherer.track(VisitEvent_StaticData);Kameleoon.Internals.runtime.Visitor.updateAndTrackInfluences();Kameleoon.Gatherer.CustomData.run();Kameleoon.Internals.runtime.gathererRun=!0;n()}};return e}();var VisitEvent_Main=function(){function t(t){var n=this;this.HEXADECIMAL_ALPHABET="0123456789ABCDEF";this.NONCE_LENGTH=16;this.obtainRequestData=function(){return n.toString()+"&nonce="+n.nonce};this.addValueParameter=function(t){if("object"==typeof t)return encodeURIComponent(JSON.stringify(t));else if("string"==typeof t)return encodeURIComponent(t);return t};this.time=(new Date).getTime();this.nonce=Kameleoon.Utils.obtainRandomString(this.NONCE_LENGTH,this.HEXADECIMAL_ALPHABET)}return t}();var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();var VisitEvent_Activity=function(e){__extends(t,e);function t(){var n=e.call(this)||this;n.eventType=t.type;n.toString=function(){return"eventType=ACTIVITY&numberClicks=".concat(n.numberClicks)};n.numberClicks=Kameleoon.Internals.runtime.Gatherer.numberClicks;Kameleoon.Internals.runtime.Visitor.currentVisit.addActivity(n.time,Kameleoon.Internals.runtime.Gatherer.active);Kameleoon.Internals.runtime.Visitor.currentVisit.addNumberClicks(n.numberClicks);Kameleoon.Internals.runtime.Gatherer.active=!1;Kameleoon.Internals.runtime.Gatherer.numberClicks=0;return n}t.initialize=function(){var e=this;var t=function(){Kameleoon.Internals.runtime.Gatherer.active=!0};var n=function(){t();Kameleoon.Internals.runtime.Gatherer.numberClicks++};Kameleoon.Utils.addEventListener(document,"mousemove",t,!1);Kameleoon.Utils.addEventListener(document,"scroll",t,!1);Kameleoon.Utils.addEventListener(document,"click",n,!1);Kameleoon.Utils.setInterval((function(){if(Kameleoon.Internals.runtime.Gatherer.active)Kameleoon.Gatherer.track(e)}),this.ACTIVITY_TRACKING_INTERVAL,!0)};t.ACTIVITY_TRACKING_INTERVAL=15*1e3;t.type="activity";t.urgent=!1;return t}(VisitEvent_Main);var __extends=this&&this.__extends||function(){var t=function(n,e){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)if(Object.prototype.hasOwnProperty.call(n,e))t[e]=n[e]};return t(n,e)};return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(n,e);function r(){this.constructor=n}n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();var VisitEvent_AdBlocker=function(t){__extends(n,t);function n(){var e=t.call(this)||this;e.eventType=n.type;e.toString=function(){return"eventType=ADBLOCKER"};Kameleoon.Internals.runtime.Visitor.currentVisit.addAdBlocker();return e}n.type="adBlocker";n.urgent=!1;return n}(VisitEvent_Main);var __extends=this&&this.__extends||function(){var t=function(n,i){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i))t[i]=n[i]};return t(n,i)};return function(n,i){if("function"!==typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");t(n,i);function e(){this.constructor=n}n.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}}();var VisitEvent_Actions=function(t){__extends(n,t);function n(i){var e=t.call(this)||this;e.eventType=n.type;e.toString=function(){var t="eventType=".concat(e.type,"&id=").concat(e.id,"&variationId=").concat(e.variationId,"&mentalistDecision=").concat(e.mentalistDecision);if("EXPERIMENT"==e.type)t+="&train=".concat(e.train);else if(0==e.variationId&&e.unexpositionCause)t+="&unexpositionCause=".concat(e.unexpositionCause);return t};e.id=i.id;e.mentalistDecision=!0===i.mentalistDecision;e.train=!0===i.train;e.type=i.type;e.variationId=i.variationId;e.notTrack=i.notTrack;if(i.unexpositionCause)e.unexpositionCause=i.unexpositionCause;if("EXPERIMENT"==e.type&&null==e.variationId)e.notTrack=!0;var o="EXPERIMENT"==e.type?"addExperiment":"addPersonalization";Kameleoon.Internals.runtime.Visitor.currentVisit[o](e.time,e.id,i.originalVariationId,e.mentalistDecision);return e}n.type="containers";n.urgent=!0;return n}(VisitEvent_Main);var __extends=this&&this.__extends||function(){var e=function(n,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)if(Object.prototype.hasOwnProperty.call(n,t))e[t]=n[t]};return e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");e(n,t);function o(){this.constructor=n}n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();var VisitEvent_Conversions=function(e){__extends(n,e);function n(t){var o=e.call(this)||this;o.eventType=n.type;o.toString=function(){return"eventType=CONVERSION&goalId=".concat(o.goalId,"&negative=").concat(o.negative,"&revenue=").concat(o.revenue)};o.goalId=t.goalId;o.negative=!0===t.negative;var r,a=!1;var i=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","revenuesByGoalId",{});var l=i[o.goalId];if(o.negative)if(l&&l.length>0){r=l.splice(-1)[0];if(0==l.length)delete i[o.goalId]}else a=!0;else{r=t.revenue;if(isNaN(r))r=0;if(!l)l=[];l.push(r);i[o.goalId]=l.splice(-10)}o.revenue=r;if(!a){Kameleoon.Internals.runtime.storedData.saveField("Gatherer","revenuesByGoalId",i);Kameleoon.Internals.runtime.Visitor.currentVisit.addConversions(o.goalId,1,o.revenue,o.negative);if(null!=window.Kameleoon.API.conversionCallbacks)for(var s=0,c=window.Kameleoon.API.conversionCallbacks.length;s<c;++s)try{window.Kameleoon.API.conversionCallbacks[s](o.time,o.goalId,o.revenue,o.negative)}catch(e){}}return o}n.type="conversions";n.urgent=!0;return n}(VisitEvent_Main);var __extends=this&&this.__extends||function(){var t=function(n,e){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)if(Object.prototype.hasOwnProperty.call(n,e))t[e]=n[e]};return t(n,e)};return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(n,e);function o(){this.constructor=n}n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();var VisitEvent_CustomData=function(t){__extends(n,t);function n(e){var o=t.call(this)||this;o.eventType=n.type;o.toString=function(){var t=function(){if(null==o.valueToCount.length){var t=[];for(var n in o.valueToCount)t.push([n,o.valueToCount[n]]);return t}return o.valueToCount};return"eventType=CUSTOMDATA&index=".concat(o.index,"&overwrite=").concat(o.overwrite,"&valueToCount=").concat(o.addValueParameter(t()))};o.index=e.index;o.overwrite=e.overwrite||!1;o.notTrack=e.value.length>n.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST||e.localOnly;o.valueToCount=e.countByValueToAdd;Kameleoon.Internals.runtime.Visitor.currentVisit.addCustomData(o.index,o.valueToCount,o.overwrite);return o}n.MAX_SUM_CUSTOM_DATA_VALUES_LENGTHES_IN_A_REQUEST=1e3;n.type="customData";n.urgent=!0;return n}(VisitEvent_Main);var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();var VisitEvent_Page=function(e){__extends(t,e);function t(){var r=e.call(this)||this;r.eventType=t.type;r.toString=function(){return"eventType=PAGE&href=".concat(r.addValueParameter(r.href))+"&title=".concat(r.addValueParameter(r.title),"&keyPages=").concat(r.addValueParameter(r.keyPages))+"&referrers=".concat(r.addValueParameter(r.referrers))};var n=Kameleoon.Utils.computeCurrentPageCanonicalURL()||Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL();var a=document.title;r.href=n&&n.slice(0,Kameleoon.Gatherer.MAX_HREF_LENGTH_IN_A_REQUEST);if(r.href&&Kameleoon.Internals.configuration.cleanHrefTracking)r.href=r.href.replace(/(\?|\#)(.*)/gi,"");r.title=a.slice(0,Kameleoon.Gatherer.MAX_PAGE_TITLE_LENGTH_IN_A_REQUEST);r.keyPages=Kameleoon.Gatherer.KeyPage.obtainIndexes();r.referrers=Kameleoon.Gatherer.Referrer.obtainIndexes(Kameleoon.Internals.runtime.Gatherer.startOfVisit);Kameleoon.Internals.runtime.Visitor.currentVisit.addPage(r.time,n,r.keyPages,r.referrers);Kameleoon.Internals.runtime.Visitor.currentVisit.addActivity(r.time,!0);return r}t.type="page";t.urgent=!0;return t}(VisitEvent_Main);var __extends=this&&this.__extends||function(){var t=function(n,e){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)if(Object.prototype.hasOwnProperty.call(n,e))t[e]=n[e]};return t(n,e)};return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(n,e);function r(){this.constructor=n}n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();var VisitEvent_Product=function(t){__extends(n,t);function n(e){var r=t.call(this)||this;r.eventType=n.type;r.toString=function(){return"eventType=PRODUCT&ean=".concat(r.addValueParameter(r.ean))};r.ean=e.ean;Kameleoon.Internals.runtime.Visitor.currentVisit.addProduct(r.ean);return r}n.type="product";n.urgent=!1;return n}(VisitEvent_Main);var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();var VisitEvent_Search=function(e){__extends(t,e);function t(n){var r=e.call(this)||this;r.eventType=t.type;r.toString=function(){return"eventType=SEARCH&keyWords=".concat(r.addValueParameter(r.keyWords),"&numberResults=").concat(r.numberResults,"&followed=").concat(r.followed)};r.followed=n.followed;r.keyWords=n.keyWords;r.numberResults=n.numberResults;Kameleoon.Internals.runtime.Visitor.currentVisit.addSearch(r.time,Kameleoon.Gatherer.KeyWord.obtainIndexes(r.keyWords),r.numberResults,r.followed);return r}t.type="search";t.urgent=!1;return t}(VisitEvent_Main);var __extends=this&&this.__extends||function(){var e=function(n,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r))e[r]=n[r]};return e(n,r)};return function(n,r){if("function"!==typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(n,r);function t(){this.constructor=n}n.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}}();var VisitEvent_StaticData=function(e){__extends(n,e);function n(){var r=e.call(this)||this;r.eventType=n.type;r.toString=function(){var e="eventType=STATICDATA";e+="&visitNumber=".concat(r.visitNumber);e+="&timeSincePreviousVisit=".concat(r.timeSincePreviousVisit);e+="&landingPageHref=".concat(r.addValueParameter(r.landingPageHref));e+="&landingPageTitle=".concat(r.addValueParameter(r.landingPageTitle));e+="&landingPages=".concat(r.addValueParameter(r.landingPages));e+="&firstReferrerHref=".concat(r.addValueParameter(r.firstReferrerHref));e+="&firstReferrers=".concat(r.addValueParameter(r.firstReferrers));e+="&browser=".concat(r.browser);e+="&browserVersion=".concat(r.browserVersion);e+="&mobileBrowser=".concat(r.mobileBrowser);e+="&os=".concat(r.os);e+="&windowWidth=".concat(r.windowWidth);e+="&windowHeight=".concat(r.windowHeight);e+="&screenWidth=".concat(r.screenWidth);e+="&screenHeight=".concat(r.screenHeight);e+="&timeZoneId=".concat(r.timeZoneId);e+="&localeLanguageTag=".concat(r.localeLanguageTag);e+="&deviceType=".concat(r.deviceType);e+="&browserName=".concat(r.browserName);e+="&osName=".concat(r.osName);e+="&mappingIdentifier=".concat(r.mappingIdentifier);if(r.experimentInfluences)e+="&experimentInfluences=".concat(r.addValueParameter(r.experimentInfluences));if(r.personalizationInfluences)e+="&personalizationInfluences=".concat(r.addValueParameter(r.personalizationInfluences));return e};var t=Kameleoon.Internals.runtime.Visitor.currentVisit.landingPageURL;var a=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","landingPageTitle");var i=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","landingPages");var o=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","firstReferrerHref");var s=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","firstReferrers");if(Kameleoon.Internals.runtime.enableHistoryReconciliation){var l=null;for(var c in Kameleoon.Internals.runtime.Gatherer.configuration.customData)if(Kameleoon.Internals.runtime.Gatherer.configuration.customData[c].mappingIdentifier){l=parseInt(c);break}r.mappingIdentifier=null!=l&&l}r.timeSincePreviousVisit=Kameleoon.Internals.runtime.Visitor.obtainTimeSincePreviousVisit();r.landingPageHref=t&&t.slice(0,Kameleoon.Gatherer.MAX_HREF_LENGTH_IN_A_REQUEST);r.landingPageTitle=a&&a.slice(0,Kameleoon.Gatherer.MAX_PAGE_TITLE_LENGTH_IN_A_REQUEST);r.landingPages=i;r.firstReferrerHref=o&&o.slice(0,Kameleoon.Gatherer.MAX_HREF_LENGTH_IN_A_REQUEST);if(Kameleoon.Internals.configuration.cleanHrefTracking){if(r.landingPageHref)r.landingPageHref=r.landingPageHref.replace(/(\?|\#)(.*)/gi,"");if(r.firstReferrerHref)r.firstReferrerHref=r.firstReferrerHref.replace(/(\?|\#)(.*)/gi,"")}r.firstReferrers=s;r.language=null;r.browser=Kameleoon.Gatherer.Browser.obtainIndex();r.browserVersion=Kameleoon.Internals.runtime.Device.browserVersion;var m=Kameleoon.Internals.runtime.Device.type;r.mobileBrowser="Tablet"==m||"Phone"==m;r.os=Kameleoon.Gatherer.OperatingSystem.obtainIndex();r.windowWidth=Kameleoon.Internals.runtime.Device.windowWidth;r.windowHeight=Kameleoon.Internals.runtime.Device.windowHeight;r.screenWidth=Kameleoon.Internals.runtime.Device.screenWidth;r.screenHeight=Kameleoon.Internals.runtime.Device.screenHeight;r.javaEnabled=!0===navigator.javaEnabled();r.timeZoneId=Kameleoon.Gatherer.TimeZone.obtainId();r.localeLanguageTag=Kameleoon.Gatherer.Language.obtainLocaleTag();r.deviceType=Kameleoon.Internals.runtime.Device.type.toLocaleUpperCase();r.browserName=Kameleoon.Gatherer.Browser.obtain();r.osName=Kameleoon.Gatherer.OperatingSystem.obtain();r.timeZoneGroups=[null];r.visitNumber=Kameleoon.Internals.runtime.Visitor.currentVisit.index;if(Kameleoon.Internals.runtime.Gatherer.startOfVisit&&Kameleoon.Internals.runtime.Visitor.visits.length>1){r.experimentInfluences=Kameleoon.Internals.runtime.Visitor.currentVisit.experimentInfluences;r.personalizationInfluences=Kameleoon.Internals.runtime.Visitor.currentVisit.personalizationInfluences}return r}n.type="staticData";n.urgent=!0;return n}(VisitEvent_Main);var __extends=this&&this.__extends||function(){var t=function(n,e){t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)if(Object.prototype.hasOwnProperty.call(n,e))t[e]=n[e]};return t(n,e)};return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");t(n,e);function r(){this.constructor=n}n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();var VisitEvent_TargetingSegments=function(t){__extends(n,t);function n(e){var r=t.call(this)||this;r.eventType=n.type;r.toString=function(){return"eventType=TARGETINGSEGMENT&id=".concat(r.id)};r.id=e.id;Kameleoon.Internals.runtime.Visitor.currentVisit.addTargetingSegment(r.time,r.id);return r}n.type="targetingSegments";n.urgent=!1;return n}(VisitEvent_Main);var CommandQueue=function(){function CommandQueue(oldKameleoonQueue){var _this=this;this.executeCommand=function(command){var commandFunctionName=command[0];try{if("function"===typeof command)command();else{var method=commandFunctionName;var path=method.split(".");var bindedObject;if("Kameleoon"!=path[0]){method="Kameleoon.API."+commandFunctionName;bindedObject=eval("Kameleoon.API."+path[0])}else bindedObject=eval("Kameleoon.API."+path[2]);eval(method).apply(bindedObject,Array.prototype.slice.call(command,1))}}catch(e){console.log(e)}};this.commands=oldKameleoonQueue&&oldKameleoonQueue.forEach?oldKameleoonQueue:[];this.commands.push=function(e){_this.executeCommand(e)};var commandsToRun=[];this.commands.forEach((function(e){commandsToRun.push(e)}));this.commands.splice(0,this.commands.length);commandsToRun.forEach(this.executeCommand);return this.commands}return CommandQueue}();var Actions=function(){function e(){this.associateActionAndVariation=function(e,n,i){var o=!0;var t=!0;if("REGISTERED_VARIATION"==i)t=!1;if("DISPLAYED_VARIATION"==i)o=!1;if(null===n)e.trackingPerformed=!0;var a=Kameleoon.Internals.runtime.variations.filter((function(e){return e.id==n}))[0];var r="Reference";if(e&&e.variations)e.variations.forEach((function(e,i){if(e.id&&e.name&&e.id==n)r=e.name}));var s=e.associatedVariation;if(e&&s&&n==s.id)r=s.name;if(e&&o)e.associatedVariation={id:n,name:r};if(e&&t&&!e.displayedVariation)e.associationMade=!1;if(a){if(e&&(Kameleoon.Internals.runtime.simulationMode&&-1==e.id||!e.associationMade)){if(o){e.associatedVariation=a;e.associationMade=!0}a.actionId=e.id;if(t)e.displayedVariation=new Variation(a)}}else e.displayedVariation={id:n,name:r}}}e.prototype.checkCapping=function(e,n,i,o,t){if(null!=o.expositionFrequencySameVisit&&Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n,i,null,t,!0,!1,!1,e)>=o.expositionFrequencySameVisit||null!=o.expositionFrequencySameVisitor&&null!=o.expositionFrequencySameVisitorDelaySeconds&&Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n,i,t-1e3*o.expositionFrequencySameVisitorDelaySeconds,t,!0,!0,!1,e)>=o.expositionFrequencySameVisitor||o.cappingPerVisitorNumberExpositions&&Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n,i,null,t,!0,!0,!1,e)>=o.expositionFrequencySameVisitorMax||o.cappingPerVisitorNumberExposedVisits&&Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n,i,null,null,!0,!0,!0,e)>=o.exposedVisitsSameVisitorMax||o.cappingPerVisitorConvertGoal&&Kameleoon.Internals.runtime.Visitor.obtainNumberConversions(o.cappingPerVisitorGoalId)>0||null!=o.expositionFrequencyDelaySecondsBetweenTwoExpositions&&Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(n,i,t-1e3*o.expositionFrequencyDelaySecondsBetweenTwoExpositions,t,!0,!0,!1,e)>=1)return!1;return!0};e.prototype.checkActionConsent=function(e){if(e.experimentAction){if(!Kameleoon.Internals.runtime.Consent.AB_TESTING){if(null==Kameleoon.Internals.runtime.Consent.AB_TESTING){if("ALL"==Kameleoon.Internals.configuration.beforeAbtestConsent)return!0;if("PARTIALLY"==Kameleoon.Internals.configuration.beforeAbtestConsent&&e.technical)return!0}else if(e.technical&&"RUN"==Kameleoon.Internals.configuration.abtestConsentOptout)return!0;return!1}}else if(!Kameleoon.Internals.runtime.Consent.PERSONALIZATION){if(null==Kameleoon.Internals.runtime.Consent.PERSONALIZATION){if("ALL"==Kameleoon.Internals.configuration.beforePersonalizationConsent)return!0;if("PARTIALLY"==Kameleoon.Internals.configuration.beforePersonalizationConsent&&e.technical)return!0}else if(e.technical&&"RUN"==Kameleoon.Internals.configuration.personalizationConsentOptout)return!0;return!1}return!0};e.prototype.checkActionsTargeting=function(e){var n=this;for(var i=0,o=Kameleoon.Internals.runtime.personalizations.length;i<o;++i){var t=Kameleoon.Internals.runtime.personalizations[i];t.previousExposition=t.exposition}var a=[];for(var i=0,o=e.length;i<o;++i){var r=e[i];if(!this.checkActionConsent(r)||r.blocked)continue;if(null==r.numberTargetingCheckings)r.numberTargetingCheckings=0;if(Kameleoon.Targeting.checkIfTargetingMustBeComputed(r.targeting,r.rescheduleTargeting||0==r.numberTargetingCheckings,!r.experimentAction&&"CUMULATIVE_WEIGHT"==r.checkConditionsRule))a.push(r)}e=a;for(var i=0,o=e.length;i<o;++i){var r=e[i];if(!0===r.forceTargeting)r.targeting=!0;else{var s=!r.experimentAction&&"CUMULATIVE_WEIGHT"==r.personalizationCheckConditionsRule;var l=Kameleoon.Targeting.checkTree(r,r.targetingSegment?r.targetingSegment.tree:null,s);if(s)switch(r.microtargetingMatchType){case"GREATER":r.targeting=l.weight>(r.cumulativeWeightOfConditions||0);break;case"EQUAL":r.targeting=l.weight==(r.cumulativeWeightOfConditions||0);break;case"LOWER":r.targeting=l.weight<r.cumulativeWeightOfConditions;break}else r.targeting=l.targeting;r.rescheduleTargeting=l.rescheduleTargeting;r.numberTargetingCheckings++}}var c=[];for(var i=0,o=e.length;i<o;++i){var r=e[i];if(!r.experimentAction)if(!0===r.targeting)c.push(r);else r.exposition=!1}var m=function(e){var n=[];for(var i=0,o=Kameleoon.Internals.runtime.personalizations.length;i<o;++i){var t=Kameleoon.Internals.runtime.personalizations[i];if(e!=t.id)n.push(t)}return n};var u=new Date;var g=u.getTime();for(var i=0,o=c.length;i<o;++i){var t=c[i];if(void 0!==t.forceExposition){t.exposition=t.forceExposition;if(!1===t.exposition)t.notExposedReason="SIMULATION"}else{t.exposition=!0;if(!0===t.exposition&&(!Kameleoon.Internals.runtime.simulationMode||null!=Kameleoon.Internals.runtime.simulationModeData&&null!=Kameleoon.Internals.runtime.simulationModeData.experiments)&&!Kameleoon.Internals.runtime.personalizationsActive){t.exposition=!1;t.notExposedReason="GLOBAL_EXCLUSION"}if(!0===t.exposition&&t.globalCappingNumberVisitors&&t.numberVisitorsExposed>=t.maxNumberVisitorsExposed){t.exposition=!1;t.notExposedReason="PERSONALIZATION_CAPPING"}var p=t.scheduleItem;if(!0===t.exposition&&null!=p&&0<p.length){t.exposition=!1;for(var d=0,f=p.length;d<f;++d){var I=p[d];if((null==I.dateStart||g>=I.dateStart)&&(null==I.dateEnd||g<I.dateEnd)){var A=I.scheduleItemOptions;if(null==A||0==A.length)t.exposition=!0;else for(var v=0,T=A.length;v<T;++v){var h=A[v];if(Kameleoon.Utils.isInsideHoursMinutesRange(h.hoursStart,h.minutesStart,h.hoursEnd,h.minutesEnd,u.getHours(),u.getMinutes())){var E=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];switch(h.daysOfWeekForShow){case"EVERYDAY":t.exposition=!0;break;case"WEEK_END":if(0==u.getDay()||6==u.getDay())t.exposition=!0;break;case"WEEK":if(0!=u.getDay()&&6!=u.getDay())t.exposition=!0;break;default:if(h.daysOfWeekForShow==E[u.getDay()])t.exposition=!0;break}}if(!0===t.exposition)break}}if(!0===t.exposition)break}if(!1===t.exposition)t.notExposedReason="SCHEDULE"}if(!0===t.exposition&&!Kameleoon.Internals.runtime.simulationMode){switch(t.customExpositionRate){case 1:break;case 0:t.exposition=!1;break;default:var k=Kameleoon.Internals.runtime.incomingStoredData&&Kameleoon.Internals.runtime.incomingStoredData["kameleoonPersonalization-"+t.id]||Kameleoon.Utils.readLocalData("kameleoonPersonalization-"+t.id,"LS",!1);if(null==k)k=Kameleoon.Internals.runtime.incomingStoredData&&Kameleoon.Internals.runtime.incomingStoredData["kameleoonPersonalizationTargeted-"+t.id]||Kameleoon.Utils.readLocalData("kameleoonPersonalizationTargeted-"+t.id,"LS",!1);if(null!=k){var x=k.split("/");t.exposition="true"==x[0]}else{t.exposition=Kameleoon.Utils.seededRandom(t.id+Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode,!0)<t.customExpositionRate;Kameleoon.Utils.createLocalData("kameleoonPersonalization-"+t.id,t.exposition+"/"+(new Date).getTime(),-1==t.id?1/24:30,null,"LS",!1)}break}if(!1===t.exposition)t.notExposedReason="PERSONALIZATION_EXCLUSION"}if(!0===t.exposition&&!this.checkCapping(!1,t.id,1,t,g)){t.exposition=!1;t.notExposedReason="VISITOR_CAPPING"}var K=t.personalizationsInteractionConditions;if(!0===t.exposition&&null!=K&&0<K.length)for(var d=0,f=K.length;d<f;++d){var S=K[d];if("SAME_PAGE"!=S.personalizationsInteractionVisitsConfiguration&&!Kameleoon.Internals.runtime.gathererRun)continue;var b=void 0;var R=void 0;var C=void 0;switch(S.personalizationsInteractionConfiguration){case"NO_OTHER_PERSO":b=m(t.id);R=0;C=0;break;case"AT_LEAST_ONE_OTHER_PERSO":b=m(t.id);R=1;C=b.length;break;case"NUMBER_OF_OTHER_PERSOS":b=m(t.id);switch(S.personalizationsInteractionNumberOtherPersosMatchType){case"GREATER":R=S.personalizationsInteractionNumberOtherPersos+1;C=b.length;break;case"LOWER":R=0;C=S.personalizationsInteractionNumberOtherPersos-1;break;case"GREATER_THAN_EQUAL":R=S.personalizationsInteractionNumberOtherPersos;C=b.length;break;case"LOWER_THAN_EQUAL":R=0;C=S.personalizationsInteractionNumberOtherPersos;break;case"EQUAL":default:R=S.personalizationsInteractionNumberOtherPersos;C=S.personalizationsInteractionNumberOtherPersos;break}break;case"ALL_OTHER_PERSOS":b=m(t.id);R=b.length;C=b.length;break;case"ID_PERSO":b=[];for(var v=0,T=Kameleoon.Internals.runtime.personalizations.length;v<T;++v){var P=Kameleoon.Internals.runtime.personalizations[v];if(P.id==S.personalizationsInteractionIdPerso){b.push(P);break}}if(0==b.length)b.push({id:S.personalizationsInteractionIdPerso,previousExposition:!1});R=1;C=1;break;default:b=[];R=1;C=1;break}var V=0;for(var v=0,T=b.length;v<T;++v){var O=b[v];var y=void 0;switch(S.personalizationsInteractionVisitsConfiguration){case"SAME_PAGE":y=!0===O.previousExposition;break;case"CURRENT_VISIT":y=Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(O.id,1,null,null,!0,!1,!1,!1)>0;break;case"PREVIOUS_VISIT":y=Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(O.id,1,null,null,!1,!0,!1,!1)>0;break;case"ALL_VISITS":y=Kameleoon.Internals.runtime.Visitor.obtainActionNumberActivations(O.id,1,null,null,!0,!0,!1,!1)>0;break;default:y=!1;break}if(!S.personalizationsInteractionDisplayOthersPersos)y=!y;if(y)V++}var N=V>=R&&V<=C;if(N&&!S.personalizationsInteractionDisplayPerso||!N&&S.personalizationsInteractionDisplayPerso){t.exposition=!1;t.notExposedReason="SCENARIO";break}}}}var D={};if(Kameleoon.Internals.runtime.personalizations)Kameleoon.Internals.runtime.personalizations.forEach((function(e){if(e.exposition){var n=e.configuration;var i=D[n];var o=e.priority;if(null==i||o>i)D[n]=o}}));var L={};for(var i=0,o=e.length;i<o;++i){var r=e[i];if(!r.experimentAction&&!0===r.exposition){var z=r.configuration;var w=D[z];var M=r.priority;if(null==w||M>=w){if(null==L[z]||M>w)L[z]=[];L[z].push(r.id)}}}D=null;if(Kameleoon.Internals.configuration.disablePersonalizationsOfTheSameType)for(var z in L)L[z]=[L[z][Math.floor(Math.random()*L[z].length)]];for(var i=0,o=c.length;i<o;++i){var t=c[i];if(!0===t.exposition&&!0!==t.forceExposition)if(L[t.configuration]&&-1==L[t.configuration].indexOf(t.id)){t.exposition=!1;t.notExposedReason="PRIORITY"}}L=null;var U=[];for(var i=0,o=e.length;i<o;++i){var r=e[i];if(!1===r.targeting||!r.experimentAction&&!0===r.targeting&&!1===r.exposition){this.associateActionAndVariation(r,0,"DISPLAYED_VARIATION");Kameleoon.Utils.removeCSSStyleSheet(r)}if(Kameleoon.Targeting.checkIfTargetingMustBeComputed(r.targeting,r.rescheduleTargeting,!r.experimentAction&&"CUMULATIVE_WEIGHT"==r.personalizationCheckConditionsRule))U.push(r)}if(U.length>0)var _=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(_);n.process(U)}),Kameleoon.Internals.runtime.PAGE_LOADING_POLL_DELAY);if(e.length>0&&Kameleoon.Internals.runtime.targetingsEvent)Kameleoon.Internals.runtime.targetingsEvent.emit(e)};e.prototype.performActionsTracking=function(e){var n=[];for(var i=0,o=e.length;i<o;++i){var t=e[i];if(t.trackingPerformed||!t.associatedVariation||null==t.associatedVariation.id)continue;n.push(t)}e=n;for(var i=0,o=e.length;i<o;++i){var t=e[i];var a=t.collectingDataDisabled?!1:!0;if(!t.experimentAction)if("PERSONALIZATION_CAPPING"==t.notExposedReason||"SCHEDULE"==t.notExposedReason||"SCENARIO"==t.notExposedReason||"PRIORITY"==t.notExposedReason||"VISITOR_CAPPING"==t.notExposedReason)a=!1;var r=t.associatedVariation;if(t.mentalistEnabled)r.name+=" (Predicteo)";if(Kameleoon.Internals.configuration.checkTestedTrafficActive&&!t.counterActive&&t.experimentAction){t.counterActive=!0;Kameleoon.Internals.runtime.RequestManager.sendCounter("anniversaryDay="+Kameleoon.Internals.configuration.anniversaryDay);t.writeLocalData()}Kameleoon.Gatherer.track(VisitEvent_Actions,{type:t.experimentAction?"EXPERIMENT":"PERSONALIZATION",id:t.id,variationId:0==r.id?0:t.experimentAction?r.id:1,mentalistDecision:t.mentalistEnabled?!0:!1,train:t.train?!0:!1,notTrack:!(t.kameleoonTracking&&a),originalVariationId:r.id,unexpositionCause:!t.experimentAction?t.notExposedReason:null});if(a&&(t.experimentAction||t.exposition||!t.exposition&&"PERSONALIZATION_EXCLUSION"==t.notExposedReason)){if(t.universalAnalyticsTracking)Kameleoon.Tracking.processUniversalAnalytics(t);if(t.customIntegrations)Kameleoon.Tracking.processCustomIntegration(t)}t.trackingPerformed=!0}};e.prototype.process=function(e,n){var i=(new Date).getTime();this.checkActionsTargeting(e);var o=[];for(var t=0,a=e.length;t<a;++t){var r=e[t];if(r.treated||r.blocked)continue;if(!0===r.targeting){Kameleoon.Internals.runtime.Visitor.currentVisit.addActionTriggered(r.id,r.experimentAction);Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"SegmentTriggered",{segment:{id:r.targetingSegmentId,name:r.targetingSegment?r.targetingSegment.name:null}});if(r.experimentAction){var s=new APIAction(r,"experiments");Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"ExperimentTriggered",{experiment:s},"experiment/triggered");r.performVariationAssignment(!1);if(null!=r.associatedVariation)if(!this.checkCapping(!0,r.id,r.associatedVariation.id,r.associatedVariation,i))r.targeting=!1}else{var s=new APIAction(r,"personalizations");Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"PersonalizationTriggered",{personalization:s},"personalization/triggered");this.associateActionAndVariation(r,r.exposition?r.associatedVariation.id:0,"BOTH")}}if(!0===r.targeting){r.treated=!0;this.currentAction=r;if(r.displayedVariation){if(r.experimentAction)if(0!=r.displayedVariation.id&&"reference"!=r.displayedVariation.id||r.executeCodeForReference){if(r.cssCode&&!r.cssCodeEvaluated){r.cssCodeEvaluated=!0;Kameleoon.Utils.addCSSStyleSheet(r.cssCode,r,null)}if(r.javaScriptCode&&!r.javaScriptCodeEvaluated){r.javaScriptCodeEvaluated=!0;Kameleoon.Utils.runProtectedScript(r.javaScriptCode,"kameleoonActionJavaScriptCode-"+r.id+".js")}}if(!n&&r.displayedVariation.process)r.displayedVariation.process();if(r.targeting&&(r.experimentAction||r.exposition)){var l={};if(r.experimentAction)l.experiment=new APIAction(r,"experiments");else l.personalization=new APIAction(r,"personalizations");Kameleoon.Utils.sendKameleoonCustomEvent.call(window,r.experimentAction?"ExperimentActivated":"PersonalizationActivated",l,"action/activated")}o.push(r)}}}this.performActionsTracking(o)};e.prototype.processAllActions=function(){var e=[];e=e.concat(Kameleoon.Internals.runtime.experiments);e=e.concat(Kameleoon.Internals.runtime.personalizations);this.process(e);Kameleoon.Internals.runtime.experiments.forEach((function(e){e.handleSpecialCase()}));if(!this.actionsProcessed){Kameleoon.Internals.runtime.RequestManager.processRequests();this.actionsProcessed=!0}};return e}();var Consent=function(){function n(){var n=this;this.disable=function(e){Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"consent/disable",consentType:e});if(e&&"BOTH"!=e)n[e]=!1;else{n.AB_TESTING=!1;n.PERSONALIZATION=!1}n.write();Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"LegalConsentUpdated",{legalConsentUpdate:n.getConsent()})};this.enable=function(e){Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"consent/enable",consentType:e});if(e&&"BOTH"!=e)n[e]=!0;else{n.AB_TESTING=!0;n.PERSONALIZATION=!0}if(Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.RequestManager){if(Kameleoon.Internals.configuration.requestsAfterConsent)Kameleoon.Internals.runtime.loadExternalRequests();n.purge()}n.write();Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"LegalConsentUpdated",{legalConsentUpdate:n.getConsent()})};this.getConfiguredConsent=function(){return{AB_TESTING:Kameleoon.Internals.configuration.abtestConsent,PERSONALIZATION:Kameleoon.Internals.configuration.personalizationConsent}};this.getConsent=function(){return{AB_TESTING:n.AB_TESTING,PERSONALIZATION:n.PERSONALIZATION}};this.hasGlobalConsent=function(){return n.AB_TESTING||n.PERSONALIZATION||Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.kameleoonFull};this.initialize=function(e){Kameleoon.Utils.sendKameleoonCustomEvent("Internals",{type:"consent/initialize",consent:e});n.AB_TESTING=e.AB_TESTING;n.PERSONALIZATION=e.PERSONALIZATION;n.initializeInteractive();n.initializeIAB()};this.initializeInteractive=function(){if("INTERACTIVE"==Kameleoon.Internals.configuration.abtestConsent&&null==n.AB_TESTING||"INTERACTIVE"==Kameleoon.Internals.configuration.personalizationConsent&&null==n.PERSONALIZATION){var e=function(){document.removeEventListener(Kameleoon.Internals.runtime.mouseDownEvent,e,!1);window.removeEventListener("scroll",e,!1);var t;if("INTERACTIVE"==Kameleoon.Internals.configuration.abtestConsent&&null==n.AB_TESTING)t="AB_TESTING";if("INTERACTIVE"==Kameleoon.Internals.configuration.personalizationConsent&&null==n.PERSONALIZATION)if("AB_TESTING"==t)t="BOTH";else t="PERSONALIZATION";if(t)Kameleoon.Internals.runtime.Consent.enable(t)};Kameleoon.Utils.addEventListener(document,Kameleoon.Internals.runtime.mouseDownEvent,e,!1);Kameleoon.Utils.addEventListener(window,"scroll",e,!1)}};this.initializeIAB=function(){if("IABTCF"==Kameleoon.Internals.configuration.abtestConsent)Kameleoon.API.Core.runWhenConditionTrue((function(){return"undefined"!=typeof window.__tcfapi}),(function(){window.__tcfapi("addEventListener",2,(function(e,t){if(t&&("useractioncomplete"===e.eventStatus||"tcloaded"===e.eventStatus))if(e){var o=e.vendor.consents[820];if(o){var a=e.purpose.consents;if(a[1]&&a[10])if(a[3]&&a[5]&&a[6]&&a[8])n.enable("BOTH");else{n.enable("AB_TESTING");n.disable("PERSONALIZATION")}else n.disable("BOTH")}else n.disable("BOTH")}}),[820])}),200)};this.purge=function(){if(Kameleoon.Internals.runtime){Kameleoon.Internals.runtime.RequestManager.processRequests();var n=function(n){if(null!=n)for(var e in n)Kameleoon.Utils.createLocalData(n[e].name,n[e].value,n[e].days,n[e].domain,n[e].forceLocalAccess,n[e].jsonFormat,null,!0)};n(Kameleoon.Internals.runtime.localDataMap&&Kameleoon.Internals.runtime.localDataMap["LS"]);n(Kameleoon.Internals.runtime.localDataMap&&Kameleoon.Internals.runtime.localDataMap["COOKIE"]);Kameleoon.Internals.runtime.localDataMap=null;Kameleoon.Analyst.Actions.processAllActions();}};this.setup=function(){var e={AB_TESTING:!1,PERSONALIZATION:!1};var t=Kameleoon.Internals.runtime.readFromStorageOrExternal("kameleoonLegalConsent","LS");if(null==t)t=Kameleoon.Internals.runtime.readFromStorageOrExternal("kameleoonLocalDataConsent","LS");if(null!=t)if(1==t)e={AB_TESTING:!0,PERSONALIZATION:!0};else e=t;else{e={AB_TESTING:"OFF"==Kameleoon.Internals.configuration.abtestConsent?!0:null,PERSONALIZATION:"OFF"==Kameleoon.Internals.configuration.personalizationConsent?!0:null};if(!Kameleoon.Internals.configuration.abtestingSetup)e.AB_TESTING=null;if(!Kameleoon.Internals.configuration.personalizationSetup)e.PERSONALIZATION=null}if(Kameleoon.Internals.runtime.kameleoonFull){e.AB_TESTING=!0;e.PERSONALIZATION=!0}n.initialize(e)};this.write=function(){Kameleoon.Utils.createLocalData("kameleoonLegalConsent",n.getConsent(),Utils.MAX_STORAGE_DAYS,null,"LS",!0,null,!0)};this.AB_TESTING=!1;this.PERSONALIZATION=!1}return n}();var Device=function(){function e(){var e=Kameleoon.Utils.bowser.parse(navigator.userAgent);var t=e.browser.version;try{if(t.split(".").length>1)t=t.split(".")[0]+"."+t.split(".")[1]}catch(e){console.log(e)}this.browser=""==e.browser.name?null:e.browser.name;this.browserVersion=t?parseFloat(t):null;this.type="tablet"==e.platform.type?"Tablet":"mobile"==e.platform.type?"Phone":"Desktop";if("Safari"==this.browser&&"Desktop"==this.type&&"ontouchend"in document.documentElement)this.type="Tablet"}Object.defineProperty(e.prototype,"adBlocker",{get:function(){return Kameleoon.Internals.runtime.adBlocker},enumerable:!1,configurable:!0});Object.defineProperty(e.prototype,"os",{get:function(){var t=Kameleoon.Gatherer.OperatingSystem.obtainIndex();if(null!=t)return e.OSS[Kameleoon.Internals.runtime.Gatherer.configuration.oss[t].name];else return"Other"},enumerable:!1,configurable:!0});Object.defineProperty(e.prototype,"screenHeight",{get:function(){return window.screen.height},enumerable:!1,configurable:!0});Object.defineProperty(e.prototype,"screenWidth",{get:function(){return window.screen.width},enumerable:!1,configurable:!0});Object.defineProperty(e.prototype,"timeZone",{get:function(){return Kameleoon.Gatherer.TimeZone.obtainId()},enumerable:!1,configurable:!0});Object.defineProperty(e.prototype,"windowHeight",{get:function(){return window.innerHeight},enumerable:!1,configurable:!0});Object.defineProperty(e.prototype,"windowWidth",{get:function(){return window.innerWidth},enumerable:!1,configurable:!0});e.OSS={CHROME:"Chrome OS",MAC:"Mac",IOS:"iOS",LINUX:"Linux",ANDROID:"Android","WINDOWS PHONE":"Windows Phone"};return e}();var Experiment=function(){function Experiment(experiment,incomingStoredData){var _this=this;this.handleSpecialCase=function(){if(!0!==_this.targeting&&_this.redirectProcessed){_this.performVariationAssignment(!0);Kameleoon.Analyst.Actions.performActionsTracking([_this])}else if(_this.preAssignVariation)_this.performVariationAssignment(!0)};this.obtainVariationAssignmentRandomNumber=function(){var i=null;if(Kameleoon.Internals.runtime.gathererRun)for(var e in Kameleoon.Internals.runtime.Gatherer.configuration.customData)if(Kameleoon.Internals.runtime.Gatherer.configuration.customData[e].mappingIdentifier){i=Kameleoon.Internals.runtime.Visitor.currentVisit.countByValueByCustomDatum[e];if(null!=i)i=Object.keys(i)[0];break}if(null==i){var t="";_this.variations.forEach((function(i){if(i.respoolTime&&0!=i.respoolTime)t+=i.respoolTime}));var n=Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode+_this.id+t;return Kameleoon.Utils.seededRandom(n,!0)}return Kameleoon.Utils.seededRandom(_this.id+"//"+i,!1)};this.performVariationAssignment=function(onlyRegisteredVariation){if(_this.displayedVariation&&!onlyRegisteredVariation)return;if(void 0!==_this.registeredVariationId&&_this.assignmentTime)_this.variations.forEach((function(i){if(_this.registeredVariationId==i.id&&i.respoolTime>_this.assignmentTime||null===_this.registeredVariationId&&_this.untrackedRespoolTime>_this.assignmentTime)_this.registeredVariationId=void 0}));if(void 0===_this.registeredVariationId&&!Kameleoon.Internals.runtime.simulationMode&&0==_this.variations.filter((function(i){return i.id==_this.registeredVariationId})).length)_this.registeredVariationId=void 0;if(_this.mentalistEnabled&&_this.mentalistVariationReassignationPermission)_this.registeredVariationId=void 0;if(!_this.registeredVariationId||_this.mentalistVariationReassignationPermission)_this.train=!0;if(void 0===_this.registeredVariationId){if(_this.mentalistEnabled){}else if(Kameleoon.Internals.runtime.customVariationSelectionFunction){_this.registeredVariationId=Kameleoon.Internals.runtime.customVariationSelectionFunction(_this);if(null!=_this.registeredVariationId)if("reference"==_this.registeredVariationId.toString())_this.registeredVariationId=0;else if("none"==_this.registeredVariationId.toString())_this.registeredVariationId=null}else{var deviationRandom=_this.obtainVariationAssignmentRandomNumber();var total=0;_this.registeredVariationId=null;for(var i=0,l=_this.variations.length;i<l;++i){total+=_this.variations[i].deviation;if(deviationRandom<=total){_this.registeredVariationId=_this.variations[i].id;break}}}_this.assignmentTime=(new Date).getTime();_this.writeLocalData()}Kameleoon.Analyst.Actions.associateActionAndVariation(_this,_this.registeredVariationId,onlyRegisteredVariation?"REGISTERED_VARIATION":"BOTH")};this.setTargetingSegment=function(i){_this.targetingSegment=Kameleoon.Internals.runtime.targetingSegments.filter((function(i){return i.id==_this.targetingSegmentId}))[0]||{};if(!i||i==_this.targetingSegmentId){_this.targeting=void 0;_this.rescheduleTargeting=null;_this.numberTargetingCheckings=0;_this.displayedVariation=null}};this.trigger=function(){if(!_this.targeting){_this.targeting=!0;_this.displayedVariation=null}};this.writeLocalData=function(){var i=_this.registeredVariationId+(_this.mentalistEnabled?"-mentalist":"")+"/"+_this.assignmentTime+"/"+_this.counterActive;if(!_this.simulationMode)Kameleoon.Utils.createLocalData("kameleoonExperiment-"+_this.id,i,_this.cookieDuration?_this.cookieDuration:30,_this.cookieDomain,"LS",!1)};for(var key in experiment)this[key]=experiment[key];var redirectVariationIdKey="kameleoonRedirect-"+this.id;var redirectVariationId=incomingStoredData?incomingStoredData[redirectVariationIdKey]:Kameleoon.Utils.readLocalData(redirectVariationIdKey,"LS",!1);redirectVariationId=redirectVariationId?redirectVariationId:Kameleoon.Internals.runtime.parameters[redirectVariationIdKey];this.previousRequestRedirected=redirectVariationId?!0:!1;if(redirectVariationId){this.registeredVariationId=redirectVariationId;this.assignmentTime=(new Date).getTime()}if(this.previousRequestRedirected){this.redirectProcessed=!0;Kameleoon.Utils.eraseLocalData("kameleoonRedirect-"+this.id,null,null)}var kameleoonExperimentKey="kameleoonExperiment-"+this.id;var storedValue=incomingStoredData?incomingStoredData[kameleoonExperimentKey]:Kameleoon.Utils.readLocalData(kameleoonExperimentKey,"LS",!1);for(var key in Kameleoon.Internals.runtime.parameters)if(0==key.indexOf("kameleoonRedirect-"+this.id)){storedValue=Kameleoon.Internals.runtime.parameters[key]+"/"+(new Date).getTime()+"/"+!1;this.writeLocalData()}if(storedValue&&-1!=this.id){var storedValues=storedValue.split("/");this.registeredVariationId="null"==storedValues[0]?null:storedValues[0];this.assignmentTime=parseInt(storedValues[1]);this.counterActive="true"==storedValues[2]&&(new Date).getTime()-this.assignmentTime<2592e6?!0:!1;if(this.registeredVariationId){if("reference"==this.registeredVariationId.toString()){this.registeredVariationId=0;this.writeLocalData()}if("none"==this.registeredVariationId.toString()){this.registeredVariationId=null;this.writeLocalData()}}}else this.counterActive=!1;if(this.registeredVariationId&&-1!=this.registeredVariationId.toString().indexOf("-mentalist")){this.registeredVariationId=parseInt(this.registeredVariationId.toString().replace("-mentalist",""));this.mentalistEnabled=!0}this.setTargetingSegment();if(this.redirectProcessed&&this.registeredVariationId)this.writeLocalData();var blockedExperiments=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","blockedExperiments",[]);if(blockedExperiments.length>0&&-1!=blockedExperiments.indexOf(this.id))this.blocked=!0}return Experiment}();var Goals=function(){function e(){var e=this;this.checkKameleoonGoals=function(){var n=[];Kameleoon.Internals.runtime.goals.forEach((function(e){if("URL"==e.type){var t=new RegExp(e.url);if(t.test(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()))n.push({goal:e})}if("PAGE_VIEWS"==e.type)if(Kameleoon.Internals.runtime.gathererRun){var o=Kameleoon.Internals.runtime.Visitor.currentVisit.timesStartedPages.length;if((null==e.minPageViews||o>=e.minPageViews)&&(null==e.maxPageViews||o<=e.maxPageViews))n.push({goal:e})}}));if(n.length>0)e.processConversions(n);Kameleoon.Utils.addEventListener(document,Kameleoon.Internals.runtime.mouseDownEvent,(function(n){var t=Kameleoon.Internals.runtime.goals.filter((function(e){return"ENGAGEMENT"==e.type})).map((function(e){return{goal:e}}));e.processConversions(t)}),!0);var t=Kameleoon.Internals.runtime.goals.filter((function(e){return"TIME_SPENT"==e.type}));if(t.length>0)Kameleoon.Utils.setInterval((function(){var n=[];t.forEach((function(e){var t=Kameleoon.Internals.runtime.Visitor.currentVisit.timeLastActivity-Kameleoon.Internals.runtime.Visitor.currentVisit.startDate;if((null==e.minTimeSpent||t>=e.minTimeSpent)&&(null==e.maxTimeSpent||t<=e.maxTimeSpent))n.push({goal:e})}));if(n.length>0)e.processConversions(n)}),1e3);};this.processConversions=function(e){if(Kameleoon.Internals.runtime.gathererRun){var n=[];if(null!=Kameleoon.Internals.runtime.experiments)for(var t=0,o=Kameleoon.Internals.runtime.experiments.length;t<o;++t){var r=Kameleoon.Internals.runtime.experiments[t];var i=r.registeredVariationId;if(null!=i&&null!==i)n.push(r.id)}for(var l=0,a=e.length;l<a;++l){var s=e[l];var u=s.goal;var m=!0===s.negative;if(m||"PAGE_VIEWS"!=u.type&&"TIME_SPENT"!=u.type&&"ENGAGEMENT"!=u.type||0==Kameleoon.Internals.runtime.Visitor.currentVisit.obtainNumberConversions(u.id)){Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"ConversionTriggered",new APIGoal(u),"goal/process");Kameleoon.Gatherer.track(VisitEvent_Conversions,{goalId:u.id,revenue:s.revenue?s.revenue:0,negative:m})}}}if(Kameleoon.Internals.runtime.kameleoonFull)Kameleoon.Analyst.processConversions()}}return e}();var IP=function(){function e(){var e=this;this.ipAddressMatchesRange=function(n,a){var t=n.split(".");var r=a.split(".");return 4==t.length&&4==r.length&&e.ipAdressBlockMatchesRangeBlock(t[0],r[0])&&e.ipAdressBlockMatchesRangeBlock(t[1],r[1])&&e.ipAdressBlockMatchesRangeBlock(t[2],r[2])&&e.ipAdressBlockMatchesRangeBlock(t[3],r[3])};var n=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","ip");if(!n)Kameleoon.Utils.performBeaconServerCall(Kameleoon.Internals.runtime.RequestManager.obtainIpUrl(),(function(n){if(4==n.readyState&&(200==n.status||204==n.status)){var a=n.getResponseHeader("ip")||"";Kameleoon.Internals.runtime.ipIsTrackerAccepted=!0;for(var t=0,r=Kameleoon.Internals.configuration.trackerExcludedIPRanges.length;t<r;++t)if(e.ipAddressMatchesRange(a,Kameleoon.Internals.configuration.trackerExcludedIPRanges[t])){Kameleoon.Internals.runtime.ipIsTrackerAccepted=!1;break}Kameleoon.Internals.runtime.storedData.saveField("Runtime","ipIsTrackerAccepted",Kameleoon.Internals.runtime.ipIsTrackerAccepted);Kameleoon.Internals.runtime.storedData.saveField("Runtime","ip",a);e.value=a}}),(function(){Kameleoon.Internals.runtime.ipIsTrackerAccepted=!0}),1e3);else{this.value=n;Kameleoon.Internals.runtime.ipIsTrackerAccepted=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","ipIsTrackerAccepted")}}e.prototype.ipAdressBlockMatchesRangeBlock=function(e,n){if(n==e)return!0;if("*"==n)return!0;var a=parseInt(e);var t=n.split("-");var r=parseInt(t[0]);var s=t.length>1?parseInt(t[1]):r;if(!isNaN(a)&&!isNaN(r)&&!isNaN(s)&&a>=r&&a<=s)return!0;return!1};return e}();var KMutationObserver=function(){function e(){}e.addMutationElementsToInternalObjects=function(e){for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.id)if(-1===Kameleoon.Internals.runtime.addedIDs.indexOf("#"+n.id))Kameleoon.Internals.runtime.addedIDs.push("#"+n.id);if(n&&n.className&&"string"===typeof n.className){var o=n.className.split(" ");for(var r=0;r<o.length;++r)if(-1===Kameleoon.Internals.runtime.addedClasses.indexOf("."+o[r]))Kameleoon.Internals.runtime.addedClasses.push("."+o[r])}}};e.checkClassesForSelector=function(e){var t=e.selector;var n=[];if(t&&-1!==t.indexOf(".")){if(!e.selectorClasses||0===e.selectorClasses.length){if(-1!==t.indexOf("contains")){var o=t.match(/:contains\(['"]([\s\S]+)['"]\)/);var r=t.replace(o[0],"");n=r.match(/\.([^\s.:\[]+)/g)}n=t.match(/\.([^\s.:\[]+)/g);e.selectorClasses=n}}else return!0;for(var a=0,l=e.selectorClasses.length;a<l;++a){var i=e.selectorClasses[a];if(-1===i.indexOf("kameleoon")&&-1===Kameleoon.Internals.runtime.addedClasses.indexOf(i))return!1}return!0};e.checkContainsTextesForSelector=function(e,t){var n=e.selector;var o;if(t&&t.nodeType==Node.TEXT_NODE)if(n&&-1!==n.indexOf("contains")){if(!e.selectorContainsText){var r=n.match(/:contains\(['"]([\s\S]+)['"]\)/);o=r[1];e.selectorContainsText=o;if(t.nodeValue&&-1===t.nodeValue.indexOf(o))return!1}}else return!1;return!0};e.checkIDsForSelector=function(t){var n=t.selector;var o;if(t.currentQuery)o=t.currentQuery;var r;if(t.options)r=t.options.domReference;var a=[];if(n&&-1!==n.indexOf("#")){if(!t.selectorIDs||0===t.selectorIDs.length){if(-1!==n.indexOf("contains")){var l=n.match(/:contains\(['"]([\s\S]+)['"]\)/);var i=n.replace(l[0],"");a=i.match(/#([^\s:\[]+)/g)}else a=n.match(/#([^\s:\[>]+)/g);t.selectorIDs=a;if(o&&-1!==o.indexOf("#"))if(-1!==o.indexOf("contains")){var l=o.match(/:contains\(['"]([\s\S]+)['"]\)/);var s=o.replace(l[0],"");a=s.match(/#([^\s:\[]+)/g)}else a=o.match(/#([^\s:\[]+)/g);for(var c=0,m=a.length;c<m;++c)if(-1===t.selectorIDs.indexOf(a[c]))t.selectorIDs.push(a[c])}}else return!0;for(var d=0,f=t.selectorIDs.length;d<f;++d){var u=t.selectorIDs[d];if(-1!==u.indexOf("kameleoonElement")){if(r&&!e.checkIDsForSelector({selector:r,checkDomReference:!0}))return!1;if(t.checkDomReference)if(-1===Kameleoon.Internals.runtime.addedIDs.indexOf(u))return!1}else if(-1===Kameleoon.Internals.runtime.addedIDs.indexOf(u))return!1}return!0};e.fillInternalObjectsForMutationObserver=function(e){if(!e)e=document;var t=e.getElementsByTagName("*");for(var n=0,o=t.length;n<o;++n){var r=t[n];if(r.id&&-1===Kameleoon.Internals.runtime.addedIDs.indexOf("#"+r.id))Kameleoon.Internals.runtime.addedIDs.push("#"+r.id);if(r.className&&"string"===typeof r.className){var a=r.className.split(" ");for(var l=0;l<a.length;++l)if(-1===Kameleoon.Internals.runtime.addedClasses.indexOf("."+a[l]))Kameleoon.Internals.runtime.addedClasses.push("."+a[l])}}};e.removeMutationElementsFromInternalObjects=function(e){for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.id)if(-1!==Kameleoon.Internals.runtime.addedIDs.indexOf("#"+n.id)){var o=Kameleoon.Internals.runtime.addedIDs.indexOf(n.id);Kameleoon.Internals.runtime.addedIDs.splice(o,1)}}};e.setMutationObserver=function(){if(Kameleoon.Internals.runtime.cantUseMutationObserver)return;e.fillInternalObjectsForMutationObserver();var t=document.documentElement,n;if(!Kameleoon.Internals.runtime.mutationObserver)Kameleoon.Internals.runtime.mutationObserver=new MutationObserver((function(t){t.forEach((function(t){var n=!0,o=t.addedNodes,r=t.removedNodes,a=Kameleoon.Internals.runtime.listenVariations;e.removeMutationElementsFromInternalObjects(r);e.addMutationElementsToInternalObjects(o);var l=Array.prototype.slice.call(o);var i=Array.prototype.slice.call(r);var s=l.concat(i);var c=function(o){var r=s[o];var l=r.parentNode;if((Kameleoon.Internals.runtime.editorMode||Kameleoon.Internals.runtime.kameleoonSelectionIframeMode)&&r&&r.id&&"string"==typeof r.id&&null!==r.id.match("kameleoon"))if(r.closest)if(null!==r.closest(".KameleoonProtected"))n=!1;if(n&&r&&r.innerHTML&&"childList"===t.type)e.fillInternalObjectsForMutationObserver(r);if(n&&r&&a)a.forEach((function(t){if(t.elementSets)t.elementSets.forEach((function(n){if((!n.evaluated||!(n.options.autoGeneratedSelector||n.options.idSelector||n.options.domOperation))&&e.checkIDsForSelector(n)&&e.checkClassesForSelector(n)&&e.checkContainsTextesForSelector(n,r))if(!t.getAction()||t.getAction().targeting){n.evaluated=!0;Kameleoon.ElementSet.processElementSet(n,t,!1,t.permanentRefreshActive,t.editionMode,l)}}));if(t.replaceData&&r.nodeType===Node.TEXT_NODE&&(!r.parentNode||"SCRIPT"!==r.parentNode.nodeName&&"STYLE"!==r.parentNode.nodeName)){var n=JSON.parse(t.replaceData);for(var o=0;o<n.length;++o){var a=new RegExp(n[o].toReplace,"gi");if(!n[o].disabled&&r.nodeValue&&a.test(r.nodeValue)){Kameleoon.ElementSet.saveElementOriginalData(r);r.kameleoonData.powered=!0;r.nodeValue=r.nodeValue.replace(a,n[o].replaceBy)}}}}));if(n&&r){var i=function(t){var n=Kameleoon.Internals.runtime.waitingElementPresentObjects[t];if(n&&n.useAntiFlicker)if(e.checkIDsForSelector(n)&&e.checkClassesForSelector(n)&&e.checkContainsTextesForSelector(n,r)){var o=Kameleoon.Utils.querySelectorAll(n.selector,l);if(0<o.length){Kameleoon.Utils.runProtectedFunction((function(){n.callback(o)}));Kameleoon.Internals.runtime.waitingElementPresentObjects.splice(t,1)}}};for(var c=Kameleoon.Internals.runtime.waitingElementPresentObjects.length-1;c>=0;c-=1)i(c)}};for(var m=0;m<s.length;++m)c(m)}))}));n={attributes:!0,childList:!0,characterData:!0,subtree:!0};if("function"===typeof Kameleoon.Internals.runtime.mutationObserver.observe)Kameleoon.Internals.runtime.mutationObserver.observe(t,n);if(Kameleoon.Internals.configuration.singlePageSupport)Kameleoon.API.Core.runWhenElementPresent("body",(function(t){Kameleoon.Internals.runtime.mutationObserverSpa=new MutationObserver((function(){Kameleoon.Internals.runtime.listenVariations=[];Kameleoon.Internals.runtime.mutationObserverSpa.disconnect();if(Kameleoon.ElementSet)e.checkElementSetIntegrity();n()}));var n=function(){Kameleoon.Internals.runtime.mutationObserverSpa.observe(t[0],{childList:!0,characterData:!0,subtree:!0})};n()}))};e.checkElementSetIntegrity=function(){if(Kameleoon.Internals.runtime.editorEnabled)return;(Kameleoon.ElementSet.pageElementSetsSpa||[]).forEach((function(t){try{var n=t.elementSet;var o=Kameleoon.Utils.querySelectorAll(n.selector);o.forEach((function(t){if(n.options.htmlContent)if(t.innerHTML!=n.options.htmlContent)e.resetElementSet(n,t);if(n.options.href)if(t.href!=n.options.href&&t.href!=n.options.href+"/")if("A"==t.tagName)e.resetElementSet(n,t);if(n.options.domOperation){if("SWAP"==n.options.domOperation)if(t.kameleoonData){var o=Kameleoon.Utils.querySelectorAll(n.options.domReference)[0];if(!e.containsDomOperationElements(o))e.resetElementSet(n,t,o)}else e.resetElementSet(n,t);else if("INSERT_BEFORE"==n.options.domOperation){var r=Kameleoon.Utils.querySelectorAll(n.selector+","+n.options.domReference);if(r[0]!=t&&(!e.containsDomOperationElements(r[0])||!e.containsDomOperationElements(r[1])))e.resetElementSet(n,t)}else if("INSERT_AFTER"==n.options.domOperation){var r=Kameleoon.Utils.querySelectorAll(n.selector+","+n.options.domReference);if(r[0]==t&&(!e.containsDomOperationElements(r[0])||!e.containsDomOperationElements(r[1])))e.resetElementSet(n,t)}else if("INSERT_AS_CHILD"){var a=Kameleoon.Utils.querySelectorAll(n.options.domReference)[0];if(t.parentElement!=a)e.resetElementSet(n,t)}}else if(n.options.autoGeneratedSelector&&n.options.kameleoonId){if(null==t.getAttribute("data-kameleoon-id"))t.setAttribute("data-kameleoon-id",n.options.kameleoonId);if(null==t.id)t.setAttribute("id","kameleoonId"+n.options.kameleoonId)}}))}catch(e){}}))};e.resetElementSet=function(e,t,n){var o=[t];if(n)o.push(n);o.forEach((function(e){if(e.id&&0==e.id.indexOf("kameleoon"))e.removeAttribute("id");e.removeAttribute("kameleoon");e.removeAttribute("data-kameleoon-id");delete e.kameleoonData;delete e.dataset.kameleoonEvaluated}));e.evaluated=!1;Kameleoon.ElementSet.processElementSet(e,null,!1,!1,!1);e.evaluated=!0};e.containsDomOperationElements=function(e){var t=e.querySelector("span.kameleoonDomOperation");return t&&t.parentElement==e};return e}();var Logger=function(){function e(){var e=this;this.MAX_REQUESTS_PER_VISIT=3;this.baseUrl="https://logger.kameleoon.com/api/2/store/?sentry_key=d8dc96c209184885ab9643cbaf1eb86f&sentry_version=7";this.canSend=function(){if(Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.Consent.hasGlobalConsent())if(e.errorLoggerIds.length<e.MAX_REQUESTS_PER_VISIT){var n=Kameleoon.Internals.runtime.storedData.obtainField("Runtime","loggerPopulation");if(null==n){e.population=n=Math.random();Kameleoon.Internals.runtime.storedData.saveField("Runtime","loggerPopulation",n)}if(n<.01)return!0}return!1};this.generateRandomIdAsString=function(e,n,t){return Kameleoon.Utils.computeStringSha256(e+n+t).substr(0,32)};this.generateRequestDataAsString=function(e,n,t,r){var o={tags:{siteCode:Kameleoon.Internals.configuration.siteCode},user:{},environment:Kameleoon.Internals.configuration.environment,platform:"javascript",event_id:n,request:{url:location.href,headers:{"User-Agent":navigator.userAgent}},exception:{values:[{type:e.name,value:e.stack?e.stack:e.message,stacktrace:{frames:[{filename:t}]},mechanism:{data:{mode:"stack",message:e.stack?e.stack:e.message,name:e.name},handled:!1,type:"onerror"}}]}};if(r){o.tags["action-id"]=r.id;o.tags["action-name"]=r.name;o.tags["action-type"]=r.experimentAction?"experiment":"personalization"}try{o.user={id:Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.Visitor&&Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode}}catch(e){o.user={id:"no_visitor_code"}}return JSON.stringify(o)};this.send=function(n,t,r){if("DEVELOPMENT"==Kameleoon.Internals.configuration.environment)console.error(n);try{e.errorLoggerIds=Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.storedData.obtainField("Runtime","loggerRequestsSend")||e.errorLoggerIds;var o=e.generateRandomIdAsString(n.message,Kameleoon.Internals.configuration.siteCode,Kameleoon.Internals.configuration.environment);if(-1==e.errorLoggerIds.indexOf(o)){e.errors.push(n);var a=n.stack?n.stack:n.message;if(e.canSend()&&a&&a.trim().length>0){var s=new XMLHttpRequest;s.open("POST",e.baseUrl,!0);s.timeout=2e3;s.send(e.generateRequestDataAsString(n,o,t,r));Kameleoon.Internals.runtime&&Kameleoon.Internals.runtime.storedData.saveField("Runtime","loggerRequestsSend",e.errorLoggerIds)}e.errorLoggerIds.push(o);if(Kameleoon.Internals.runtime.parameters.kameleoonDebug||localStorage.kameleoonExtensionIsAdmin)console.log(n)}}catch(t){e.errors.push(n)}};this.errorLoggerIds=[];this.errors=[]}return e}();var OnlineMeanAndDeviation=function(){function n(n){var e=this;this.dimension=n;this.mean=[];this.nbUpdates=[];this.m2=[];this.deviation=[];for(var a=0;a<n;++a){this.mean[a]=0;this.nbUpdates[a]=0;this.m2[a]=0;this.deviation[a]=0}this.update=function(n,a){if(void 0===a)a=1;if(a>0)for(var t=0;t<e.dimension;++t)if(!isNaN(n[t])&&isFinite(n[t])){var i=e.mean[t]-n[t];var r=e.nbUpdates[t]+a;e.m2[t]=e.m2[t]+i/r*i*e.nbUpdates[t]*a;e.deviation[t]=Math.sqrt(e.m2[t]/r);e.mean[t]=e.mean[t]/r*e.nbUpdates[t]+n[t]/r*a;e.nbUpdates[t]=r}}}n.createFromDifferences=function(e,a,t,i){var r=new n(1);var s=e.length;var o=0;if(o<s){var v=e[o];o++;while(o<s){var d=e[o];o++;var f=d-v;if(f<0&&a||0==f&&t||f>0&&i)r.update([f]);v=d}}return r};n.createFromValues=function(e){var a=new n(1);for(var t=0,i=e.length;t<i;t++)a.update([e[t]]);return a};n.createFromBooleanValues=function(e){var a=new n(1);for(var t=0,i=e.length;t<i;t++)a.update([e[t]?1:0]);return a};return n}();var RequestManager=function(){function e(){var e=this;this.processRequests=function(){if(e.eventsToSend.length>0)if(e.validateTrackingRequest())if(!Kameleoon.Internals.runtime.simulationMode&&!Kameleoon.Internals.runtime.proxyMode&&!Kameleoon.Internals.runtime.kameleoonSelectionIframeMode){var t=e.eventsToSend.splice(0,1e3);var n=t.reduce((function(e,t){if(!t.notTrack)e+=t.obtainRequestData()+"\n";return e}),"");e.send(e.obtainVisitUrl(),"POST",n);if(e.eventsToSend.length>0)e.processRequests()}};this.obtainVisitUrl=function(){var t=Kameleoon.Internals.runtime.Visitor.currentVisit.visitorCode;var n=Kameleoon.Internals.runtime.Gatherer.startOfVisit?"true":"false";return"https://".concat(e.continentPrefix,"api-visit.").concat(e.domain,"/events?siteCode=").concat(e.siteCode,"&visitorCode=").concat(t,"&startOfVisit=").concat(n)};this.obtainIpUrl=function(){return"https://".concat(e.continentPrefix,"api-tracker.").concat(e.domain,"/ip.gif")};this.obtainGeolocationUrl=function(){return"https://".concat(e.continentPrefix,"api-tracker.").concat(e.domain,"/geolocation.gif")};this.send=function(t,n,i,o,s,a){var r=new XMLHttpRequest;r.open(n,t,!0);if(o)r.onreadystatechange=function(e){o.bind(r)(e.target)};if(s){r.onerror=function(e){s.bind(r)(e.target)};r.ontimeout=function(e){s.bind(r)(e.target)}}r.timeout=a||15*60*1e3;r.send("POST"==n&&i?i:null);};this.sendActiveScript=function(){e.send("https://".concat(e.continentPrefix,"api-active-script.").concat(e.domain,"/event?siteCode=").concat(e.siteCode),"POST")};this.sendCounter=function(t){e.send("https://".concat(e.continentPrefix,"api-counter.").concat(e.domain,"/events?siteCode=").concat(e.siteCode),"POST",t)};this.sendHeatMap=function(t,n,i){e.send("https://".concat(e.continentPrefix,"api-heat-map.").concat(e.domain,"/events?siteCode=").concat(e.siteCode),"POST","x="+t+"&y="+n+"&experimentId="+i.id+"&variationId="+i.associatedVariation.id)};this.sendProduct=function(t){e.send("https://".concat(e.continentPrefix,"api-product.").concat(e.domain,"/events?siteCode=").concat(e.siteCode),"POST",t)};this.eventsToSend=[];this.continentPrefix=Kameleoon.Internals.configuration.trackerContinent;this.domain=Kameleoon.Internals.configuration.VISITOR_DOMAIN;this.siteCode=Kameleoon.Internals.configuration.siteCode;Kameleoon.Utils.setInterval(this.processRequests.bind(this),500);Kameleoon.Utils.addEventListener(window,"beforeunload",this.processRequests.bind(this))}e.prototype.addRequest=function(e){switch(e.eventType){case"containers":case"customData":case"interests":case"targetingSegments":case"conversions":this.eventsToSend.push(e);break;default:this.eventsToSend.push(e);this.processRequests();break}};e.prototype.validateTrackingRequest=function(){var e=Kameleoon.Internals.runtime.ipIsTrackerAccepted;var t=Kameleoon.Internals.configuration.trackerExcludedIPRanges.length>0;if(t&&!e||!Kameleoon.Internals.runtime.Consent.hasGlobalConsent())return!1;else return!0};return e}();var Segment=function(){function n(){}return n}();var Targeting=function(){function e(){var e=this;this.checkTargetingCondition=function(t,r){var n;if(null==r.numberTargetingCheckings)r.numberTargetingCheckings=0;if(!e.checkIfTargetingMustBeComputed(r.targeting,r.rescheduleTargeting||0==r.numberTargetingCheckings,void 0))n={targeting:r.targeting,rescheduleTargeting:!1};else{var i=Kameleoon.Targeting["evaluate_"+r.type];var a=void 0;if(null!=i)a=i.bind(e)(r,t);else a=null;if(null==a)a={targeting:void 0,rescheduleTargeting:!1};var g=a.targeting;if(!0!==r.include)if(void 0===g){if(!0===a.excludedUndefinedIsTargeted)g=!0}else g=!g;n={targeting:g,rescheduleTargeting:e.checkIfTargetingMustBeComputed(g,a.rescheduleTargeting,void 0)};r.targeting=n.targeting;r.rescheduleTargeting=n.rescheduleTargeting;r.numberTargetingCheckings++}if(!0===n.targeting)n.weight=r.weight;else n.weight=0;return n};this.checkTargetingSegmentsTargeting=function(t){var r=[];for(var n=0,i=t.length;n<i;++n){var a=t[n];if(null==a.numberTargetingCheckings)a.numberTargetingCheckings=0;if(e.checkIfTargetingMustBeComputed(a.targeting,a.rescheduleTargeting||0==a.numberTargetingCheckings,!1))r.push(a)}t=r;for(var n=0,i=t.length;n<i;++n){var a=t[n];var g=e.checkTree(null,a?a.tree:null,!1);a.targeting=g.targeting;a.rescheduleTargeting=g.rescheduleTargeting;a.numberTargetingCheckings++}var l=[];for(var n=0,i=t.length;n<i;++n){var a=t[n];if(e.checkIfTargetingMustBeComputed(a.targeting,a.rescheduleTargeting,!1))l.push(a)}if(l.length>0)var o=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(o);e.processTargetingSegments(l)}),Kameleoon.Internals.runtime.domReady?Kameleoon.Internals.runtime.PAGE_LOADED_POLL_DELAY:Kameleoon.Internals.runtime.PAGE_LOADING_POLL_DELAY)};this.checkTree=function(t,r,n){var i;if(null==r){i={targeting:!0,rescheduleTargeting:!1};if(n)i.weight=0}else{if(null==r.numberTargetingCheckings)r.numberTargetingCheckings=0;if(!e.checkIfTargetingMustBeComputed(r.targeting,r.rescheduleTargeting||0==r.numberTargetingCheckings,n)){i={targeting:r.targeting,rescheduleTargeting:!1};if(n)i.weight=r.weight}else{if(null!=r.targetingCondition)i=e.checkTargetingCondition(t,r.targetingCondition);else{var a=e.checkTree(t,r.leftChild,n);var g=Kameleoon.Internals.runtime.simulationMode||n;if(!g)switch(a.targeting){case!0:if(!r.orOperator)g=!0;break;case!1:if(r.orOperator)g=!0;break;case void 0:default:g=!0;break}var l=null;if(g)l=e.checkTree(t,r.rightChild,n);var o=void 0;switch(a.targeting){case!0:if(r.orOperator)o=!0;else switch(l.targeting){case!0:o=!0;break;case!1:o=!1;break;case void 0:default:o=void 0;break}break;case!1:if(r.orOperator)switch(l.targeting){case!0:o=!0;break;case!1:o=!1;break;case void 0:default:o=void 0;break}else o=!1;break;case void 0:default:if(r.orOperator)switch(l.targeting){case!0:o=!0;break;case!1:o=void 0;break;case void 0:default:o=void 0;break}else switch(l.targeting){case!0:o=void 0;break;case!1:o=!1;break;case void 0:default:o=void 0;break}break}i={targeting:o,rescheduleTargeting:e.checkIfTargetingMustBeComputed(o,a.rescheduleTargeting||g&&l.rescheduleTargeting,n)};if(n){var s=void 0;if(r.orOperator)s=Math.max(a.weight,l.weight);else s=a.weight+l.weight;i.weight=s}}r.targeting=i.targeting;r.rescheduleTargeting=i.rescheduleTargeting;if(n)r.weight=i.weight}r.numberTargetingCheckings++}return i};this.computeDisplayableTree=function(t){var r=new Array;var n=new Array;e.computeDisplayableTreeFirstLevelAddIn(t,r,n);if(n.length>0){var i=new Array;var a=new Array;var g=e.createIterator(r);var l=e.createIterator(n);while(l.hasNext()){var o=l.next();if(Kameleoon.Utils.testEmptyMap(o.conditions)){if(l.hasNext())g.next()}else{a.push(o);if(l.hasNext())i.push(g.next())}}r=a.length>0?i.slice(0,a.length-1):i;n=a}return{firstLevelOrOperators:r,secondLevel:n}};this.computeDisplayableTreeFirstLevelAddIn=function(t,r,n){if(null!=t)if(null==t.targetingCondition)if(0==t.orGuiLevel){e.computeDisplayableTreeFirstLevelAddIn(t.leftChild,r,n);r.push(t.orOperator);e.computeDisplayableTreeFirstLevelAddIn(t.rightChild,r,n)}else n.push(e.computeDisplayableTreeSecondLevel(t));else n.push(e.computeDisplayableTreeSecondLevel(t))};this.computeDisplayableTreeSecondLevel=function(t){var r=new Array;var n=new Array;e.computeDisplayableTreeSecondLevelAddIn(t,r,n);if(n.length>0){var i=new Array;var a=new Array;var g=e.createIterator(r);var l=e.createIterator(n);while(l.hasNext()){var o=l.next();if(o.disabled){if(l.hasNext())g.next()}else{a.push(o);if(l.hasNext())i.push(g.next())}}r=a.length>0?i.slice(0,a.length-1):i;n=a}return{orOperators:r,conditions:n}};this.computeDisplayableTreeSecondLevelAddIn=function(t,r,n){if(null!=t)if(null==t.targetingCondition){e.computeDisplayableTreeSecondLevelAddIn(t.leftChild,r,n);r.push(t.orOperator);e.computeDisplayableTreeSecondLevelAddIn(t.rightChild,r,n)}else n.push(t.targetingCondition)};this.flattenTree=function(e){var t=function(e,r){if(null!=e)if(null!=e.targetingCondition)return!1===e.targetingCondition.targeting?["!",e.targetingCondition]:e.targetingCondition;else{var n=e.orOperator?"OR":"AND";var i=[t(e.leftChild,n),n,t(e.rightChild,n)];return"AND"==r&&"OR"==n?["(",i,")"]:i}};return Kameleoon.Utils.flatten(t(e,"OR"))};this.processAllTargetingSegments=function(){e.processTargetingSegments(Kameleoon.Internals.runtime.targetingSegments||[])};this.processTargetingSegments=function(t){e.checkTargetingSegmentsTargeting(t);var r=[];for(var n=0,i=t.length;n<i;++n){var a=t[n];if(!0===a.targeting)r.push(a)}e.performSegmentsTracking(r)}}e.prototype.checkIfTargetingMustBeComputed=function(e,t,r){var n=!0===t&&(void 0===e||!1===e&&!0===r);return n};e.prototype.createIterator=function(e){var t=0;return{hasNext:function(){return t<e.length},next:function(){return e[t++]}}};e.prototype.performSegmentsTracking=function(e){for(var t=0,r=e.length;t<r;++t){var n=e[t];Kameleoon.Utils.sendKameleoonCustomEvent.call(window,"SegmentTriggered",{segment:{id:n.id,name:n.name}});if(Kameleoon.Internals.configuration.useAudience||Kameleoon.Internals.runtime.mentalistRun&&(n.trackMentalistPrediction||n.mentalist))Kameleoon.Gatherer.track(VisitEvent_TargetingSegments,{id:n.id});if(Kameleoon.Internals.runtime.mentalistRun)if(n.trackMentalistPrediction)Kameleoon.Gatherer.track(VisitEvent_MentalistPredictionSegmentTargeting,{targetingSegmentId:n.id,trackMentalistPrediction:n.trackMentalistPrediction})}};return e}();Targeting.prototype.evaluate_PAGE_URL=function(e){var t=new RegExp(Kameleoon.Utils.computeURLRegExpNoKameleoonParameters(e.value));var a;try{a=t.test(decodeURI(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()))}catch(e){try{a=unescape?t.test(unescape(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL())):!1}catch(e){a=!1}}return{targeting:a,rescheduleTargeting:!1}};Targeting.prototype.evaluate_DEVICE_TYPE=function(e){return{targeting:e.value==Kameleoon.Internals.runtime.Device.type.toLocaleUpperCase(),rescheduleTargeting:!1}};Targeting.prototype.evaluate_LANDING_PAGE=function(e){if(Kameleoon.Internals.runtime.gathererRun){var n=Kameleoon.Internals.runtime.Visitor.currentVisit.landingPageURL;return{targeting:null!=n&&new RegExp(e.value).test(n),rescheduleTargeting:!1}}return null};Targeting.prototype.evaluate_MOUSE_OUT=function(e){var n=void 0;if(Kameleoon.Internals.runtime.mouseOutEvent)n=!0;else if(!Kameleoon.Internals.runtime.mouseOutListener&&document.body){Kameleoon.Internals.runtime.mouseOutListener=!0;var t=Kameleoon.Internals.runtime.Visitor.currentVisit.Device.browserName;if("Internet Explorer"==t)Kameleoon.Utils.addEventListener(document.body,"mouseout",(function(e){if(!e.relatedTarget)if(Math.abs(e.clientY-window.innerHeight)>e.clientY)Kameleoon.Internals.runtime.mouseOutEvent=!0}));else Kameleoon.Utils.addEventListener(document.body,"mouseleave",(function(e){if(e.clientY<0)Kameleoon.Internals.runtime.mouseOutEvent=!0}))}return{targeting:n,rescheduleTargeting:void 0===n}};Targeting.prototype.evaluate_JS_CODE=function(targetingCondition,container){var asyncCallback=function(e){targetingCondition.targeting=e};if(!targetingCondition.valueGeneratedCode)if(targetingCondition.async){targetingCondition.valueGeneratedCode="(function(setTargeting) {"+targetingCondition.value+"})(asyncCallback);";eval(targetingCondition.valueGeneratedCode)}else targetingCondition.valueGeneratedCode="(function() {"+targetingCondition.value+"})();";var targeting=void 0;if(targetingCondition.async)targeting=targetingCondition.targeting||void 0;else if(!targetingCondition.domReady||Kameleoon.Internals.runtime.domReady)try{var value=eval(targetingCondition.valueGeneratedCode);if("boolean"!=typeof value)targeting=void 0;else targeting=value}catch(e){targeting=!1;var segmentName=container&&container.targetingSegment?container.targetingSegment.name:null;console.log(e,segmentName)}return{targeting:targeting,rescheduleTargeting:void 0===targeting}};Targeting.prototype.evaluate_NEW_VISITORS=function(e){if(Kameleoon.Internals.runtime.gathererRun){var n=1==Kameleoon.Internals.runtime.Visitor.visits.length;return{targeting:"NEW"==e.value?n:!n,rescheduleTargeting:!1}}return null};Targeting.prototype.evaluate_PAGE_VIEWS=function(e){if(Kameleoon.Internals.runtime.gathererRun){var t=void 0;switch(e.operator){case"GREATER":t=Kameleoon.Internals.runtime.Visitor.currentVisit.timesStartedPages.length>e.value;break;case"LOWER":t=Kameleoon.Internals.runtime.Visitor.currentVisit.timesStartedPages.length<e.value;break;case"EQUAL":t=Kameleoon.Internals.runtime.Visitor.currentVisit.timesStartedPages.length==e.value;break}return{targeting:t,rescheduleTargeting:!1}}return null};Targeting.prototype.evaluate_TIME_SINCE_PAGE_LOAD=function(e){var t=function(e){try{return e.test(decodeURI(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL()))}catch(t){try{return unescape?e.test(unescape(Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL())):!1}catch(e){return!1}}}.bind(this);var a=(null==e.pageURLRegExpToMatch||t(new RegExp(Kameleoon.Utils.computeURLRegExpNoKameleoonParameters(e.pageURLRegExpToMatch))))&&(null==e.pageURLRegExpNotToMatch||!t(new RegExp(Kameleoon.Utils.computeURLRegExpNoKameleoonParameters(e.pageURLRegExpNotToMatch))));if(a){var o=(new Date).getTime()-Kameleoon.Internals.runtime.pageStartTime;switch(e.operator){case"EQUAL":a=o==e.time;break;case"LOWER":a=o<e.time;break;case"GREATER":a=o>e.time?!0:void 0;break;case"LOWER_OR_EQUAL":a=o<=e.time;break;case"GREATER_OR_EQUAL":a=o>=e.time?!0:void 0;break}}return{targeting:a,rescheduleTargeting:void 0===a}};var Tracking=function(){function t(){var t=this;this.timeBeforeSendTracking=20*60*1e3;this.checkAndSetKameleoonTrackingTime=function(n,e){var i=Kameleoon.Utils.secureSessionStorage("getItem","kameleoonAnalyticsTrackingTimes");var a=null==i?{}:JSON.parse(i);var o="Experiment-"+n;if(null==a[e]||null==a[e][o]||(new Date).getTime()>=a[e][o]+t.timeBeforeSendTracking){if(null==a[e])a[e]={};a[e][o]=(new Date).getTime();Kameleoon.Utils.secureSessionStorage("setItem","kameleoonAnalyticsTrackingTimes",JSON.stringify(a));return!0}return!1};this.processCustomIntegration=function(t){var n=Kameleoon.Internals.configuration.customIntegrations;var e=function(e){var i=t.customIntegrations[e];var a=n.filter((function(t){return t.name==i}))[0];if(a)Kameleoon.Utils.runProtectedScript("(function(\n\t\t\t\t\t\texperimentID,\n\t\t\t\t\t\texperimentName,\n\t\t\t\t\t\tpersonalizationID,\n\t\t\t\t\t\tpersonalizationName,\n\t\t\t\t\t\tvariationID,\n\t\t\t\t\t\tvariationName) {\n\t\t\t\t\t\t\t".concat(a.jsCode,"\n\t\t\t\t\t})(\n\t\t\t\t\t\t").concat(t.experimentAction?t.id:null,",\n\t\t\t\t\t\t").concat(t.experimentAction?"'"+t.name+"'":null,",\n\t\t\t\t\t\t").concat(!t.experimentAction?t.id:null,",\n\t\t\t\t\t\t").concat(!t.experimentAction?"'"+t.name+"'":null,",\n\t\t\t\t\t\t").concat(t.associatedVariation.id,",\n\t\t\t\t\t\t").concat("'"+t.associatedVariation.name+"'","\n\t\t\t\t\t)"),"kameleoonCustomIntegration"+i+".js")};for(var i=0;i<t.customIntegrations.length;i++)e(i)}}return t}();Tracking.prototype.processUniversalAnalytics=function(n){var a=Kameleoon.Tracking.findUniversalAnalyticsObject();var e=a&&a.answer&&42==a.answer;if(!e&&n.universalAnalyticsTracking.eventCallDelayed){var i=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(i);Kameleoon.Tracking.processUniversalAnalytics.apply(Kameleoon.Tracking,[n])}),150);return}var r=n.universalAnalyticsTracking.trackingId;if(e&&n.universalAnalyticsTracking.eventCallDelayed&&r)if(void 0==Kameleoon.Tracking.obtainUniversalAnalyticsTracker(n)){var l=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(l);Kameleoon.Tracking.processUniversalAnalytics.apply(Kameleoon.Tracking,[n])}),150);return}var t=Kameleoon.Tracking.obtainUniversalAnalyticsTrackerPrefix(n);if(null==a)var o=Kameleoon.Utils.setTimeout((function(){Kameleoon.Utils.clearTimeout(o);Kameleoon.Tracking.processUniversalAnalytics.apply(Kameleoon.Tracking,[n])}),150);else{if(n.universalAnalyticsTracking.dimension&&n.universalAnalyticsTracking.dimension<201)a(t+"set","dimension"+n.universalAnalyticsTracking.dimension,n.name+"/"+n.associatedVariation.name.substring(0,80));if(Kameleoon.Tracking.checkAndSetKameleoonTrackingTime(n.id,"universalAnalytics"))if(n.universalAnalyticsTracking.pageViewTracking){var c=n.name.replace(/\//gi,"-");a(t+"send","pageview","/Kameleoon/"+c+"/"+encodeURIComponent(n.associatedVariation.name))}else if(e||n.universalAnalyticsTracking.eventTracking)a(t+"send","event","Kameleoon",n.name,n.associatedVariation.name,void 0,{nonInteraction:1})}};Tracking.prototype.findUniversalAnalyticsObject=function(){return window.ga};Tracking.prototype.obtainUniversalAnalyticsTrackerPrefix=function(n){var a=Kameleoon.Tracking.obtainUniversalAnalyticsTracker(n);return a?a.get("name")+".":""};Tracking.prototype.obtainUniversalAnalyticsTrackerFromTrackingId=function(n){var a=Kameleoon.Tracking.findUniversalAnalyticsObject();if(void 0!==a&&null!=a.getAll){var e=a.getAll();if(n){for(var i=0;i<e.length;++i)if(n==e[i].get("trackingId"))return e[i]}else if(e.length>0)return e[0]}return};Tracking.prototype.obtainUniversalAnalyticsTracker=function(n){var a=void 0;if(n&&n.universalAnalyticsTracking&&n.universalAnalyticsTracking.trackingId)a=n.universalAnalyticsTracking.trackingId;return Kameleoon.Tracking.obtainUniversalAnalyticsTrackerFromTrackingId(a)};var Variation=function(){function e(e){var t=this;this.getAction=function(){var e=[];e=e.concat(Kameleoon.Internals.runtime.experiments);e=e.concat(Kameleoon.Internals.runtime.personalizations);return e.filter((function(e){return e.id==t.actionId}))[0]};for(var o in e){this[o]=e[o];if("widgetTemplateInputData"==o){var n=this[o];for(var r in n)if("string"==typeof n[r])n[r]=n[r].replace("STATIC_IMAGE_PATH",Kameleoon.Internals.configuration.IMAGE_PATH)}}}e.prototype.applyJavascriptCode=function(e){if(this.javaScriptCode&&this.javaScriptCode.code&&(null==this.javaScriptCode.evaluated||e)){this.javaScriptCode.evaluated=!0;return Kameleoon.Utils.runProtectedScript(this.javaScriptCode.code,"kameleoonVariationJavaScriptCode-"+this.id+".js")}return null};e.prototype.preProcessRedirect=function(e){var t=this.redirections||[];for(var o=0,n=t.length;o<n;++o)if(!t[o].scope||new RegExp(t[o].scope).test(window.location.href))if(t[o].additionalParameters){if(-1==window.location.search.indexOf(t[o].string))if("#"!=t[o].string[0])Kameleoon.Utils.processRedirect(window.location.protocol+"//"+window.location.hostname+(!window.location.port?"":":"+window.location.port)+window.location.pathname+window.location.search+(-1==window.location.search.indexOf("?")?"?":"&")+t[o].string+window.location.hash,e);else window.location.replace(window.location.protocol+"//"+window.location.hostname+(!window.location.port?"":":"+window.location.port)+window.location.pathname+window.location.search+t[o].string)}else{var r=t[o].string;if(t[o].keepParameters)r+=-1!=r.indexOf("?")?window.location.search.replace("?","&"):window.location.search;Kameleoon.Utils.processRedirect(r,e)}};e.prototype.process=function(){var e=this;var t=[];t=t.concat(Kameleoon.Internals.runtime.experiments);t=t.concat(Kameleoon.Internals.runtime.personalizations);var o=t.filter((function(t){return t.id==e.actionId}))[0];if(this.redirections&&!Kameleoon.Internals.runtime.editorEnabled)this.preProcessRedirect(o);if(this.forceNoFlicker&&!Kameleoon.Internals.runtime.domReady){var n="";for(var r=0,i=this.elementSets.length;r<i;++r)n+=(0!=r?", ":"")+this.elementSets[r].selector;Kameleoon.Utils.forceNoFlicker(n)}if(!this.styleSheetAdded){this.styleSheetAdded=!0;Kameleoon.Utils.addCSSStyleSheet(this.css,o,null)}if(this.javaScriptCode&&!this.permanentRefreshActive)if(!this.javaScriptCode.afterDOMReady)this.applyJavascriptCode(!1);else if(!this.permanentRefreshActive)Kameleoon.Utils.domReady((function(){e.applyJavascriptCode(!1)}));if(this.elementSets&&(!o||o.targeting))this.elementSets.forEach((function(t){t.evaluated=!0;Kameleoon.ElementSet.processElementSet(t,e,!1,e.permanentRefreshActive,e.editionMode)}));if(this.replaceData){var a=JSON.parse(this.replaceData);this.processReplaceData(a)}if(this.forceNoFlicker&&!this.permanentRefreshActive)Kameleoon.Utils.removeBlockingStyleSheet();if(Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]&&!this.permanentRefreshActive){if(Kameleoon.Internals.runtime.cantUseMutationObserver)Kameleoon.Utils.clearInterval(Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]);Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]=null}if(!Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]&&!Kameleoon.Internals.runtime.editorMode&&!Kameleoon.Internals.runtime.kameleoonSelectionIframeMode){this.permanentRefreshActive=!0;Kameleoon.Internals.runtime.listenVariations.push(this);Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]=!0;if(Kameleoon.Internals.runtime.cantUseMutationObserver)Kameleoon.Internals.runtime["enginePollerForVariation"+this.id]=Kameleoon.Utils.setInterval((function(){e.process()}),10)}};e.prototype.processReplaceData=function(e){if(document&&document.body){var t=function(e){var t=!0,o=e.parentNode,n;if(o)n=o.getAttribute("id");if(Kameleoon.Internals.runtime.editorMode)if(n&&null!==n.match("kameleoon")||o.closest&&null!==o.closest(".KameleoonProtected"))t=!1;if("SCRIPT"===o.nodeName||"STYLE"===o.nodeName||"NOSCRIPT"===o.nodeName)t=!1;if(t)return NodeFilter.FILTER_ACCEPT};var o=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")};var n=function(e){return e.replace(/[aàáâãäå]/g,"[aàáâãäå]").replace(/[cç]/g,"[cç]").replace(/[eèéêëæ]/g,"[eèéêëæ]").replace(/[nñ]/g,"[nñ]").replace(/[oòóôõöø]/g,"[oòóôõöø]").replace(/[sß]/g,"[sß]").replace(/[uùúûü]/g,"[uùúûü]").replace(/[yÿ]/g,"[yÿ]")};var r=t;r.acceptNode=t;var i=document.createTreeWalker(document.body,NodeFilter.SHOW_ALL,r,!1);while(i.nextNode()){if(3!==i.currentNode.nodeType&&(1!==i.currentNode.nodeType||!i.currentNode.getAttribute("placeholder")))continue;for(var a=0;a<e.length;++a){var l="[a-zA-Z0-9_ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž]",s=n(o(e[a].toReplace)),c=e[a].isWholeWordMode?"(?<!"+l+")"+s+"(?!"+l+")":s,d=new RegExp(c,e[a].isCaseSensitiveMode?"g":"gi");if(!e[a].disabled&&i.currentNode.nodeValue&&d.test(i.currentNode.nodeValue)){Kameleoon.ElementSet.saveElementOriginalData(i.currentNode);i.currentNode.kameleoonData.powered=!0;i.currentNode.nodeValue=i.currentNode.nodeValue.replace(d,e[a].replaceBy)}else if(!e[a].disabled&&1===i.currentNode.nodeType&&i.currentNode.getAttribute("placeholder")&&d.test(i.currentNode.getAttribute("placeholder"))){Kameleoon.ElementSet.saveElementOriginalData(i.currentNode);i.currentNode.kameleoonData.powered=!0;i.currentNode.setAttribute("placeholder",i.currentNode.getAttribute("placeholder").replace(d,e[a].replaceBy))}}}}};return e}();var Visit=function(){function e(e){var t=this;this.addActionTriggered=function(e,t){if(t){var i=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","experimentsTriggered",{});i[e.toString()]=!0;Kameleoon.Internals.runtime.storedData.saveField("Gatherer","experimentsTriggered",i)}else{var n=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","personalizationsTriggered",{});n[e.toString()]=!0;Kameleoon.Internals.runtime.storedData.saveField("Gatherer","personalizationsTriggered",n)}};this.addActivity=function(e,i){if(i)t.timeLastActivity=e};this.addAdBlocker=function(){t.Device.adBlocker=!0};this.addConversions=function(e,i,n,r){var s=r?-1:1;i*=s;n*=s;var a=t.conversions[e];var o=a?a.count:0;var u=a?a.revenue:0;var l=o+i;var c=u+n;if(l>0)if(c>=0)t.conversions[e]={count:l,revenue:c};else delete t.conversions[e];else delete t.conversions[e]};this.addCustomData=function(e,i,n){if(Kameleoon.Utils.testEmptyMap(i)){if(n)delete t.countByValueByCustomDatum[e]}else{if(n||null==t.countByValueByCustomDatum[e])t.countByValueByCustomDatum[e]={};for(var r in i)t.countByValueByCustomDatum[e][r]=(t.countByValueByCustomDatum[e][r]||0)+i[r]}};this.addExperiment=function(e,i,n,r){if(null===n)return;if(void 0===t.ExperimentActivations[i]){t.ExperimentActivations[i]={associatedVariationID:n,times:[]};t.mentalistDecisionByExperimentId[i]=r}t.ExperimentActivations[i].times.push(e);if(-1!=i){var s=Kameleoon.Internals.runtime.experiments.filter((function(e){return e.id==i}))[0];var a=s?s.attributionWindow:Visitor.INFLUENCE_DELAY;if(a>0)t.experimentInfluences[i]=[parseInt(n),a]}};this.addExternalSolutionData=function(e,i){if(!Kameleoon.Utils.testEmptyMap(i)){var n=t.valuesByKeyByExternalSolution[e];if(null==n){n={};t.valuesByKeyByExternalSolution[e]=n}for(var r in i){var s=i[r];var a=s.length;if(a>0){var o=n[r];if(null==o){o={};n[r]=o}for(var u=0;u<a;++u)o[s[u]]=!0}}}};this.addGeolocation=function(e,i,n,r,s,a){t.Geolocation={country:e,region:i,city:n,postalCode:r,latitude:s,longitude:a}};this.addInterests=function(e,i){e.forEach((function(e){var n=t.freshByActiveInterest[e];if(null==n)n=!1;t.freshByActiveInterest[e]=n||i}))};this.addNumberClicks=function(e){if(e>0)t.numberClicks+=e};this.addPage=function(e,i,n,r){t.addActivity(e,!0);t.keyPages.push(n);t.timesStartedPages.push(e);var s=r.filter((function(e){return null!=e}));if(s.length>0){t.referrers.push(s);t.timesReferrers.push(e)}var a=t.timesByPageHref[i];if(null==a){a=[];t.timesByPageHref[i]=a}a.push(e);for(var o in t.productEansLastPage)t.productEansAllButLastPages[o]=!0;t.productEansLastPage={}};this.addPersonalization=function(e,i,n,r){if(0==n)return null;if(void 0===t.PersonalizationActivations[i]||null!=n&&null==t.PersonalizationActivations[i].associatedVariationID){t.PersonalizationActivations[i]={associatedVariationID:n,times:[]};t.mentalistDecisionByPersonalizationId[i]=r}t.PersonalizationActivations[i].times.push(e);if(-1!=i){var s=Kameleoon.Internals.runtime.personalizations.filter((function(e){return e.id==i}))[0];var a=s?s.attributionWindow:Visitor.INFLUENCE_DELAY;if(a>0)t.personalizationInfluences[i]=[1,a]}};this.addProduct=function(e){t.productEansLastPage[e]=!0};this.addSearch=function(e,i,n,r){t.addActivity(e,!0);t.keyWords.push(i);t.searchesFollowed.push(r);t.searchesNumberResults.push(n);t.timesSearches.push(e)};this.addTargetingSegment=function(e,i){var n=t.timesByTargetingSegmentId[i];if(null==n){n=[];t.timesByTargetingSegmentId[i]=n}n.push(e)};this.addWeather=function(e,i,n,r,s,a,o,u,l){t.Weather={temperature:e,humidity:i,pressure:n,windSpeed:r,cloudiness:s,sunrise:a,sunset:o,conditionDescription:u,conditionCode:l}};this.clearCustomDataPage=function(){for(var e in Kameleoon.Internals.runtime.Gatherer.configuration.customData){var i=Kameleoon.Internals.runtime.Gatherer.configuration.customData[e];if("PAGE"==i.scope)delete t.countByValueByCustomDatum[e]}};this.computeActionNumberActivations=function(e,i,n,r){if(null==r[e])return 0;return t.computeObjectNumberPresence(i,n,r[e].times)};this.computeObjectNumberPresence=function(e,t,i){var n=0;for(var r=0,s=i.length;r<s;++r){var a=i[r];if((null==e||a>=e)&&(null==t||a<=t))n++}return n};this.convertVisitFromServer=function(){for(var e in t.valuesByKeyByExternalSolution){var i=t.valuesByKeyByExternalSolution[e];for(var n in i){var r=i[n];var s={};for(var a=0,o=r.length;a<o;++a)s[r[a]]=!0;i[n]=s}}return t};this.isVisitFinished=function(){return t.timeLastActivity<(new Date).getTime()-Kameleoon.Internals.runtime.Gatherer.configuration.maxVisitIdleDuration};this.obtainInterestIsActive=function(e,i){if(null==i)return null!=t.freshByActiveInterest[e];return t.freshByActiveInterest[e]==i};this.obtainKeyPageIsVisited=function(e){for(var i=0,n=t.keyPages.length;i<n;i++){var r=t.keyPages[i];for(var s=0,a=r.length;s<a;s++)if(e==r[s])return!0}return!1};this.obtainKeyWordIsSearched=function(e){for(var i=0,n=t.keyWords.length;i<n;i++){var r=t.keyWords[i];for(var s=0,a=r.length;s<a;s++)if(e==r[s])return!0}return!1};this.obtainMeanPageDuration=function(){var e=new Date;var i=OnlineMeanAndDeviation.createFromDifferences(t.timesStartedPages,!1,!0,!0);i.update([e.getTime()-t.timesStartedPages[t.timesStartedPages.length-1]]);return i.mean[0]};this.obtainNumberConversions=function(e){var i=t.conversions[e];return null==i?0:i.count};this.obtainPageNumberViews=function(e,i,n,r){var s=0;for(var a in t.timesByPageHref)if(null!=a){var o=Kameleoon.Utils.computeRelativeURL(a);if((null==e||e.test(a)||e.test(o))&&(null==i||!i.test(a)&&!i.test(o)))s+=t.computeObjectNumberPresence(n,r,t.timesByPageHref[a])}return s};this.obtainPersonalizationNumberActivations=function(e,i,n){return t.computeActionNumberActivations(e,i,n,t.PersonalizationActivations)};this.obtainReferrerIsPresent=function(e){var i=null==e?null:e+1;for(var n=0,r=t.referrers.length;n<r;n++){var s=t.referrers[n];for(var a=0,o=s.length;a<o;a++)if(s[a]==i)return!0}return!1};this.index=e.index||0;this.landingPageURL=e.landingPageURL||null;this.locale=e.locale||"en";this.mentalistDecisionByExperimentId=e.mentalistDecisionByExperimentId||{};this.mentalistDecisionByPersonalizationId=e.mentalistDecisionByPersonalizationId||{};this.productEansAllButLastPages=e.productEansAllButLastPages||{};this.productEansLastPage=e.productEansLastPage||{};this.startDate=e.startDate||0;this.timesByPageHref=e.timesByPageHref||{};this.timesByTargetingSegmentId=e.timesByTargetingSegmentId||{};this.valuesByKeyByExternalSolution=e.valuesByKeyByExternalSolution||{};this.visitorCode=e.visitorCode||"";this.countByValueByCustomDatum=e.countByValueByCustomDatum||{};this.freshByActiveInterest=e.freshByActiveInterest||{};this.keyPages=e.keyPages||[];this.keyWords=e.keyWords||[];this.numberClicks=e.numberClicks||0;this.referrers=e.referrers||[];this.searchesFollowed=e.searchesFollowed||[];this.searchesNumberResults=e.searchesNumberResults||[];this.timeLastActivity=e.timeLastActivity||this.startDate;this.timesReferrers=e.timesReferrers||[];this.timesSearches=e.timesSearches||[];this.timesStartedPages=e.timesStartedPages||[];this.experimentInfluences=e.experimentInfluences||{};this.personalizationInfluences=e.personalizationInfluences||{};var i=e.Device||{};this.Device={adBlocker:i.adBlocker||!1,browser:null!=i.browser?i.browser:null,browserName:i.browserName||null,browserVersion:i.browserVersion||null,os:null!=i.os?i.os:null,osName:i.osName||null,screenHeight:i.screenHeight||null,screenWidth:i.screenWidth||null,timeZone:i.timeZone||"UTC",type:i.type?i.type.toLocaleUpperCase():null,windowHeight:i.windowHeight||null,windowWidth:i.windowWidth||null};var n=e.Geolocation||{};this.Geolocation={city:n.city||null,country:n.country||null,latitude:n.latitude||null,longitude:n.longitude||null,postalCode:n.postalCode||null,region:n.region||null};var r=e.Weather||{};this.Weather={conditionCode:r.conditionCode||null,conditionDescription:r.conditionDescription||null,cloudiness:r.cloudiness||null,humidity:r.humidity||null,pressure:r.pressure||null,sunrise:r.sunrise||null,sunset:r.sunset||null,temperature:r.temperature||null,windSpeed:r.windSpeed||null};this.conversions=e.conversions||{};this.ExperimentActivations=e.ExperimentActivations||{};this.PersonalizationActivations=e.PersonalizationActivations||{}}e.prototype.obtainExperimentNumberActivations=function(e,t,i){return this.computeActionNumberActivations(e,t,i,this.ExperimentActivations)};return e}();var Visitor=function(){function e(){var t=this;this.addVisit=function(e){t.visits.push(e);t.currentVisit=e;t.totalVisits++;if(null==t.timeStartedEldestVisit)t.timeStartedEldestVisit=e.startDate;var i=t.visits.length;var n=Math.max(1,Kameleoon.Internals.configuration.maxNumberLocalVisits);if(i>n)t.visits=t.visits.slice(i-n)};this.addPreviousVisits=function(e){if(null!=t.currentVisit){var i=t.currentVisit;var n=[];for(var r=0,a=t.visits.length-1;r<a;++r)n.push(t.visits[r]);for(var r=0,a=e.length;r<a;++r)n.push(e[r]);n.sort((function(e,t){var i=e.startDate-t.startDate;if(0!=i)return i;i=e.index-t.index;return i}));var o=null;var s=null;for(var r=0,a=n.length;r<a;r++){var l=n[r];var u=l.visitorCode;var d=l.index;if(u!=o||d!=s)t.addVisit(l);o=u;s=d}t.addVisit(i)}};this.obtainKeyPageIsVisited=function(e){for(var i=0,n=t.visits.length;i<n;++i)if(t.visits[i].obtainKeyPageIsVisited(e))return!0;return!1};this.obtainKeyWordIsSearched=function(e){for(var i=0,n=t.visits.length;i<n;++i)if(t.visits[i].obtainKeyWordIsSearched(e))return!0;return!1};this.obtainInterestIsActive=function(e){for(var i=0,n=t.visits.length;i<n;++i)if(t.visits[i].obtainInterestIsActive(e,null))return!0;return!1};this.obtainReferrerIsPresent=function(e){for(var i=0,n=t.visits.length;i<n;++i)if(t.visits[i].obtainReferrerIsPresent(e))return!0;return!1};this.obtainLastVisitWithFreshActiveInterest=function(e){for(var i=t.visits.length-1;i>=0;--i){var n=t.visits[i];if(n.obtainInterestIsActive(e,!0))return n}return null};this.obtainNumberConversions=function(e){var i=0;for(var n=t.visits.length-1;n>=0;--n)i+=t.visits[n].obtainNumberConversions(e);return i};this.obtainActionNumberActivations=function(e,i,n,r,a,o,s,l){var u=l?"obtainExperimentNumberActivations":"obtainPersonalizationNumberActivations";var d=Kameleoon.Internals.runtime.Visitor.visits.length;var m=0;if(d>0){if(a){var v=Kameleoon.Internals.runtime.Visitor.visits[d-1][u](e,n,r);m+=s?v>0?1:0:v}if(o)for(var c=0,f=d-1;c<f;++c){var h=t.visits[c][u](e,n,r);m+=s?h>0?1:0:h}}return m};this.obtainPageNumberViews=function(e,i,n,r,a,o){var s=t.visits.length;var l=0;if(s>0){if(a)l+=t.visits[s-1].obtainPageNumberViews(e,i,n,r);if(o)for(var u=0,d=s-1;u<d;++u)l+=t.visits[u].obtainPageNumberViews(e,i,n,r)}return l};this.obtainTimeSincePreviousVisit=function(){var e=0;if(t.visits.length>1){e=t.currentVisit.startDate-t.visits.slice(-2)[0].timeLastActivity;e=Math.max(e,Kameleoon.Internals.runtime.Gatherer.configuration.maxVisitIdleDuration)}return e};this.obtainVisitorCode=function(i){var n=!1;var r=!1;var a;var o=!1;if(Kameleoon.Internals.runtime.incomingStoredData)a=Kameleoon.Internals.runtime.incomingStoredData.kameleoonVisitorCode;else a=Kameleoon.Utils.readLocalData("kameleoonVisitorCode","LS");var s=Kameleoon.Utils.readLocalData("kameleoonVisitorCode","COOKIE");if(s){if(-1!=s.indexOf("_js_"))o=!0;s=s.replace("_js_","")}a=a||s;if(i||null==a){a=Kameleoon.Utils.obtainRandomString(e.VISITOR_CODE_LENGTH,Analyst.CODE_ALPHABET);n=!0;r=!0}Kameleoon.Utils.createLocalData("kameleoonVisitorCode",a,Utils.MAX_STORAGE_DAYS,null,"LS");if(a!=s||o){Kameleoon.Utils.createLocalData("kameleoonVisitorCode","_js_"+a,Utils.MAX_STORAGE_DAYS,null,"COOKIE");if(a!=s)r=!0}t.visitorCode=a;return n};this.obtainVisitorFromStoredData=function(){return Kameleoon.Internals.runtime.storedData.Visitor};this.saveToStoredData=function(){t.saveFieldToStoredData("visits",t.visits);t.saveFieldToStoredData("totalVisits",t.totalVisits);t.saveFieldToStoredData("timeStartedEldestVisit",t.timeStartedEldestVisit)};this.updateCurrentVisit=function(){};this.updateFromStoredData=function(e,i,n){var r=!1;var a=t.obtainVisitorFromStoredData();var o=a.visits;if(!t.visitorCode){var s=t.obtainVisitorCode(n);if(s)n=!0}if(o){var l=o.slice(-1)[0].visitorCode;if(l!=t.visitorCode){var u=Kameleoon.Utils.readLocalData("kameleoonVisitorCode","LS");if(u==l||!Kameleoon.Internals.runtime.Consent.hasGlobalConsent()){t.visitorCode=l;try{delete Kameleoon.Internals.runtime.localDataMap.COOKIE.kameleoonVisitorCode;delete Kameleoon.Internals.runtime.localDataMap.LS.kameleoonVisitorCode}catch(e){}}else if(u==t.visitorCode)n=!0}}if(n||e){i=!0;if(n)t.totalVisits=0}t.visits=[];if(!n&&o){o.forEach((function(e){t.addVisit(new Visit(e))}));t.totalVisits=a.totalVisits;t.timeStartedEldestVisit=a.timeStartedEldestVisit}var d=!1;if(i||!t.currentVisit||t.currentVisit.isVisitFinished()){var m=Kameleoon.Internals.runtime.storedData.obtainField("Gatherer","startsOfVisitForCurrentPage");Kameleoon.Internals.runtime.storedData.saveField("Gatherer","startsOfVisitForCurrentPage",m+1);Kameleoon.Internals.runtime.Gatherer.startOfVisit=r=!0;Kameleoon.Internals.runtime.storedData.resetForStartOfVisit();Kameleoon.Internals.runtime.storedData.saveField("Runtime","landingPageTitle",document.title);Kameleoon.Internals.runtime.storedData.saveField("Runtime","firstReferrerHref",Kameleoon.Gatherer.Referrer.obtainCorrected(!0)||null);Kameleoon.Internals.runtime.storedData.saveField("Runtime","firstReferrers",Kameleoon.Gatherer.Referrer.obtainIndexes(!0)||[null]);Kameleoon.Internals.runtime.storedData.saveField("Runtime","landingPages",Kameleoon.Gatherer.KeyPage.obtainIndexes()||[null]);var v=void 0;if(!t.currentVisit||n)v=0;else v=t.currentVisit.index+1;t.addVisit(new Visit({visitorCode:t.visitorCode,startDate:(new Date).getTime(),index:v,landingPageURL:Kameleoon.Utils.computeCurrentPageCleanAbsoluteURL(),Device:{browser:Kameleoon.Gatherer.Browser.obtainIndex(),browserName:Kameleoon.Gatherer.Browser.obtain(),browserVersion:Kameleoon.Internals.runtime.Device.browserVersion,os:Kameleoon.Gatherer.OperatingSystem.obtainIndex(),osName:Kameleoon.Gatherer.OperatingSystem.obtain(),screenHeight:Kameleoon.Internals.runtime.Device.screenHeight,screenWidth:Kameleoon.Internals.runtime.Device.screenWidth,timeZone:Kameleoon.Gatherer.TimeZone.obtainId(),type:Kameleoon.Internals.runtime.Device.type,windowHeight:Kameleoon.Internals.runtime.Device.windowHeight,windowWidth:Kameleoon.Internals.runtime.Device.windowWidth},locale:Kameleoon.Gatherer.Language.obtainLocaleTag()}));d=!0}t.saveToStoredData();Kameleoon.Internals.runtime.storedData.save(d)};this.updateAndTrackInfluences=function(){if(Kameleoon.Internals.runtime.Gatherer.startOfVisit&&t.visits.length>1){var e={experiments:{},personalizations:{}};t.visits.forEach((function(t){if(t.experimentInfluences)for(var i in t.experimentInfluences)e.experiments[i]=t.experimentInfluences[i];if(t.personalizationInfluences)for(var i in t.personalizationInfluences)e.personalizations[i]=t.personalizationInfluences[i]}));var i=function(e){for(var i in e){if("string"==typeof e[i][0])e[i][0]=parseInt(e[i][0]);e[i][1]-=t.currentVisit.startDate-t.visits.slice(-2)[0].startDate;if(e[i][1]<0||"-1"==i||null==e[i][0]||"null"==e[i][0])delete e[i]}return e};t.currentVisit.experimentInfluences=i(e.experiments);t.currentVisit.personalizationInfluences=i(e.personalizations)}};this.obtainProductData=function(e,t,i,n){var r="https://api-product.".concat(Kameleoon.Internals.configuration.DOMAIN,"/").concat(e,"?siteCode=").concat(Kameleoon.Internals.configuration.siteCode);i.eans=encodeURIComponent(JSON.stringify(t instanceof Array?t:[t]));for(var a in i)r+="&"+"".concat(a,"=").concat(i[a]);Kameleoon.Utils.performBeaconServerCall(r,(function(e){if(4===e.readyState&&200===e.status)n(JSON.parse(e.response||"{}"))}),(function(e){console.error(e)}));};this.visits=[];this.currentVisit=null;this.totalVisits=0;this.updateFromStoredData(!1)}e.prototype.saveFieldToStoredData=function(e,t){Kameleoon.Internals.runtime.storedData.Visitor[e]=t};e.VISITOR_CODE_LENGTH=16;e.INFLUENCE_DELAY=1e3*60*60*24*7;return e}();try{window.Kameleoon=new KameleoonEngine}catch(o){console.log(o)}
                     Kameleoon.Internals = {
                        "configuration": {
                           "API_HOST_NAME": "api",
                           "APP_HOST_NAME": "app",
                           "BACK_OFFICE_HOST_NAME": "old",
                           "EDITOR_HOST_NAME": "editor",
                           "DOMAIN": "kameleoon.com",
                           "WIDE_DOMAIN": "kameleoon.eu",
                           "GUI_ESTIMATED_LOADING_TIME": 3000,
                           "IMAGE_PATH": "https://lfztqvffnx.kameleoon.eu/images/",
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
                           "siteCode": "lfztqvffnx",
                           "abtestConsent": "REQUIRED",
                           "abtestConsentOptout": "RUN",
                           "beforeAbtestConsent": "ALL",
                           "beforePersonalizationConsent": "ALL",
                           "personalizationConsent": "OFF",
                           "personalizationConsentOptout": "RUN",
                           "personalizationsDeviation": 0.9,
                           "experiments": [{
                              "id": 144237,
                              "name": "[Tracking menu] Desktop",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1638438906000,
                              "dateStatusModified": 1636732806000,
                              "goals": [],
                              "deviation": {
                                 "0": 0,
                                 "689476": 1
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0,
                                 "respoolTime": null
                              }, {
                                 "name": "Tracking menu",
                                 "id": 689476,
                                 "deviation": 1,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 169698,
                              "attributionWindow": 0,
                              "kameleoonTracking": {
                                 "mainGoalId": 257226
                              },
                              "customIntegrations": []
                           }, {
                              "id": 144506,
                              "name": "[Tracking menu]  Mobile",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1638438927000,
                              "dateStatusModified": 1636732790000,
                              "goals": [],
                              "deviation": {
                                 "0": 0,
                                 "692047": 1
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0,
                                 "respoolTime": null
                              }, {
                                 "name": "Tracking menu",
                                 "id": 692047,
                                 "deviation": 1,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 169778,
                              "attributionWindow": 0,
                              "kameleoonTracking": {
                                 "mainGoalId": 257226
                              },
                              "customIntegrations": []
                           }, {
                              "id": 151317,
                              "name": "[COLLECTION] Réduction image principal ",
                              "baseURL": "https://www.nutrimuscle.com/collections/complements-alimentaires-nutrition-sportive",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1643993504000,
                              "dateStatusModified": 1643971782000,
                              "goals": [],
                              "deviation": {
                                 "0": 0.3333,
                                 "722543": 0.3333,
                                 "722558": 0.3333
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0.3333,
                                 "respoolTime": null
                              }, {
                                 "name": "Image Réduite",
                                 "id": 722558,
                                 "deviation": 0.3333,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 176800,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 240030
                              }
                           }, {
                              "id": 151373,
                              "name": "[USP BAR] Wording cliquable",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1654259697000,
                              "dateStatusModified": 1643988335000,
                              "goals": [],
                              "deviation": {
                                 "0": 0,
                                 "722706": 1
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0,
                                 "respoolTime": null
                              }, {
                                 "name": "Wording Cliquable",
                                 "id": 722706,
                                 "deviation": 1,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 176855,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 241242
                              }
                           }, {
                              "id": 153839,
                              "name": "[PANIER] Widget Trustpilot V2",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1645689933000,
                              "dateStatusModified": 1645610369000,
                              "goals": [],
                              "deviation": {
                                 "0": 0.5,
                                 "727780": 0.5
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }, {
                                 "name": "Variation 1",
                                 "id": 727780,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 178237,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 240502
                              },
                              "customIntegrations": []
                           }, {
                              "id": 157422,
                              "name": "Vignettes HP mobile",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1649861772000,
                              "dateStatusModified": 1649861773000,
                              "goals": [],
                              "deviation": {
                                 "0": 0.5,
                                 "738629": 0.5
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }, {
                                 "name": "Variation 1",
                                 "id": 738629,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 181696,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 276732
                              },
                              "customIntegrations": []
                           }, {
                              "id": 158021,
                              "name": "[Fiche produit] Posologie",
                              "baseURL": "https://www.nutrimuscle.com/products/arginine-l-arginine-base",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1649337443000,
                              "dateStatusModified": 1649322040000,
                              "goals": [],
                              "deviation": {
                                 "0": 0,
                                 "740650": 0.5,
                                 "740662": 0.5
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0,
                                 "respoolTime": null
                              }, {
                                 "name": "Avec posologie",
                                 "id": 740650,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }, {
                                 "name": "Sans posologie",
                                 "id": 740662,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 182297,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 241242
                              }
                           }, {
                              "id": 159660,
                              "name": "[PANIER] Bandeau programme fidélité",
                              "baseURL": "https://www.nutrimuscle.com/cart",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1655217551000,
                              "dateStatusModified": 1651161559000,
                              "goals": [],
                              "deviation": {
                                 "0": 0,
                                 "746745": 1
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0,
                                 "respoolTime": null
                              }, {
                                 "name": "Variation 1 - Bloc fidélité",
                                 "id": 746745,
                                 "deviation": 1,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 184213,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 278990
                              }
                           }, {
                              "id": 163904,
                              "name": "[BANNER DESKTOP] FIRST10",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1655738268000,
                              "dateStatusModified": 1655476735000,
                              "goals": [],
                              "deviation": {
                                 "0": 0,
                                 "761228": 1
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0,
                                 "respoolTime": null
                              }, {
                                 "name": "Aff. du code",
                                 "id": 761228,
                                 "deviation": 1,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 189445,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 241242
                              }
                           }, {
                              "id": 164299,
                              "name": "[BANNER MOBILE] FIRST10",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1655741100000,
                              "dateStatusModified": 1655741165000,
                              "goals": [],
                              "deviation": {
                                 "0": 0,
                                 "762110": 1
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0,
                                 "respoolTime": null
                              }, {
                                 "name": "Aff. code promo",
                                 "id": 762110,
                                 "deviation": 1,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 189912,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 241242
                              }
                           }, {
                              "id": 165746,
                              "name": "Potions Global V2",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "cssCode": "",
                              "javaScriptCode": "window.location.href.includes(\"/products/\")&&(Kameleoon.API.Core.runWhenElementPresent(\"potions-multiply\",([e])=>{e.shadow.querySelector(\"potions-multiply-integrated\").shadow.querySelector(\"potions-slider\").addEventListener(\"click\",e=>{let t=e.target.getAttribute(\"product-id\");t&&(Kameleoon.API.Data.setCustomData(\"listeIdPP\",t),Kameleoon.API.Goals.processConversion(283941))})}),Kameleoon.API.Core.runWhenElementPresent(\"form.shutter__content div potions-multiply\",([e])=>{e.shadow.querySelector(\"potions-multiply-integrated\").shadow.querySelector(\"potions-slider\").addEventListener(\"click\",e=>{let t=e.target.getAttribute(\"product-id\");Kameleoon.API.Data.setCustomData(\"listeIdPB\",t)})})),window.location.href.includes(\"/cart\")&&Kameleoon.API.Core.runWhenElementPresent(\"potions-multiply\",([e])=>{e.shadow.querySelector(\"potions-multiply-integrated\").shadow.querySelector(\"potions-slider\").addEventListener(\"click\",e=>{let t=e.target.getAttribute(\"product-id\");Kameleoon.API.Data.setCustomData(\"listeIdPC\",t)})});",
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1657297186000,
                              "dateStatusModified": 1657027830000,
                              "goals": [],
                              "deviation": {
                                 "0": 0.5,
                                 "765740": 0.5
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }, {
                                 "name": "Variation 1",
                                 "id": 765740,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 189288,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 241242
                              },
                              "customIntegrations": []
                           }, {
                              "id": 166412,
                              "name": "Copy [Top bar] Wording compléments alimentaires",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1657705707000,
                              "dateStatusModified": 1657705380000,
                              "goals": [],
                              "deviation": {
                                 "0": 0.5,
                                 "767687": 0.5
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }, {
                                 "name": "WORDING COMPL.ALI",
                                 "id": 767687,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 191867,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 240030
                              }
                           }, {
                              "id": 167274,
                              "name": "Test vide - access Page : Opé_Commerciale10=true Test By Kam",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1658493716000,
                              "dateStatusModified": 1658493297000,
                              "goals": [],
                              "deviation": {
                                 "0": 0,
                                 "769725": 1
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0,
                                 "respoolTime": null
                              }, {
                                 "name": "Variation 1",
                                 "id": 769725,
                                 "deviation": 1,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 192611,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 285049
                              },
                              "customIntegrations": []
                           }, {
                              "id": 167870,
                              "name": "Copy [NUTRIMUSCLE] Pop-in",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1660227481000,
                              "dateStatusModified": 1659340189000,
                              "goals": [],
                              "deviation": {
                                 "0": 0.5,
                                 "771204": 0.5
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }, {
                                 "name": "Popin",
                                 "id": 771204,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 190801,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 241242
                              },
                              "customIntegrations": []
                           }, {
                              "id": 167871,
                              "name": "Copy [NUTRIMUSCLE] Tooltip",
                              "baseURL": "https://www.nutrimuscle.com",
                              "experimentAction": true,
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1660831542000,
                              "dateStatusModified": 1659099614000,
                              "goals": [],
                              "deviation": {
                                 "0": 0.5,
                                 "771205": 0.5
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }, {
                                 "name": "Tooltip",
                                 "id": 771205,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 190915,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 241242
                              },
                              "customIntegrations": []
                           }, {
                              "id": 168784,
                              "name": "[kameleoon support] Photos page liste",
                              "baseURL": "https://www.nutrimuscle.com/collections/nutrition-sportive-snacks-barres",
                              "experimentAction": true,
                              "javaScriptCode": "Kameleoon.API.Core.enableSinglePageSupport();\r\nconst goals = {\r\n    'Tracking clics photos': 272442,\r\n    'Add to cart express specific photos': 272443,\r\n    'Add to cart specific photos': 272444,\r\n};\r\nconst fireGoal = (name) => Kameleoon.API.Goals.processConversion(goals[name]);\r\n\r\nconst productsPageAll = [\r\n    '/products/barre-proteinee',\r\n    '/products/barre-glucidique-crue-biologique',\r\n    '/products/barre-proteinee-crispy',\r\n    '/products/beurre-de-cacahuetes-biologique',\r\n    '/products/beurre-amandes-biologique',\r\n];\r\nconst catalogPageAllFilter = [\r\n    /\\/collections\\/nutrition-sportive-snacks-barres/,\r\n    /\\/collections\\/nutrition-sportive-a-tartiner-beurres/, \r\n    /collections\\/complements-alimentaires-nutrition-sportive/,    \r\n    /collections\\/nutrition-sportive-les-meilleures-ventes/,\r\n    /collections\\/complements-alimentaires-bio-pour-la-musculation/,\r\n    /collections\\/nutrition-sportive-les-nouveautes/,\r\n    /collections\\/nos-essentiels-sport-pour-la-musculation/,\r\n    /collections\\/complements-alimentaires-pre-training/,\r\n    /collections\\/complements-alimentaires-intra-training/,\r\n    /collections\\/complements-alimentaires-post-training/,    \r\n    /collections\\/complements-alimentaires-prise-de-muscle/,\r\n    /collections\\/complements-alimentaires-proteines-prise-de-muscle/,\r\n    /collections\\/sante-bien-etre-controle-du-poids/,\r\n    /collections\\/complements-alimentaires-pour-la-recuperation/,\r\n    /collections\\/complements-alimentaires-pour-performance-endurance/,\r\n    /collections\\/complements-alimentaires-sport-recuperation-nerveuse/,   \r\n];\r\n\r\nconst pageNow = window.location.pathname;\r\nconst productsPage = productsPageAll.includes(pageNow);\r\nconst catalogPage = catalogPageAllFilter.find((regex) => regex.test(pageNow));\r\n\r\nlet clickButton = false;\r\nKameleoon.API.Core.runWhenElementPresent('.product__sidebar .product__actions button', ([selector]) => {\r\n    selector.addEventListener('click', () => {\r\n        clickButton = true;\r\n    });\r\n});\r\n\r\nconst allProductName = [\r\n    'BARRE PROTÉINÉE', \r\n    //'BARRE GLUCIDIQUE',\r\n    'BARRE CRUE BIO',\r\n    //'BARRE ÉNERGIE BIO',\r\n    //'BARRE ÉNERGÉTIQUE BIO',\r\n    //'BARRE PROTÉINÉE CRISPY',\r\n    'BEURRE DE CACAHUÈTES COMPLÈTES BIOLOGIQUE',\r\n    \"BEURRE D’AMANDES COMPLÈTES BIOLOGIQUE\"\r\n];\r\n\r\nlet clickButtonCatalogPage;\r\nKameleoon.API.Core.runWhenElementPresent('.collection__main', ([selector]) => { \r\n    Kameleoon.API.Core.runWhenElementPresent('.products.products--grid button', (block) => {\r\n        block.forEach((element) => {\r\n            const nameProduct = element.closest('a').querySelector('.product__content .product__title').textContent;\r\n            if (allProductName.some((item) => nameProduct.toUpperCase() === item)) {\r\n                element.closest('a').addEventListener('click', () => {\r\n                    fireGoal('Tracking clics photos');                   \r\n                });\r\n                element.addEventListener('click', () => {\r\n                    fireGoal('Tracking clics photos');\r\n                    clickButtonCatalogPage = true;\r\n                });\r\n            } else {\r\n                element.addEventListener('click', () => {\r\n                    clickButtonCatalogPage = false;\r\n                });\r\n            }\r\n        });\r\n    }, 200); \r\n}, 200);\r\n\r\nif (!window['Kamdev-151002-app']) {\r\n    (function (open) {    \r\n        XMLHttpRequest.prototype.open = function (method, url, async, user, pass) {\r\n            this.addEventListener('readystatechange', function () {               \r\n                if (url === '/cart/add.js') {                    \r\n                    if (this.readyState === 4 && catalogPage && clickButtonCatalogPage) {\r\n                        fireGoal('Add to cart express specific photos');\r\n                    }\r\n                    if (this.readyState === 4 && productsPage && clickButton) {\r\n                        fireGoal('Add to cart specific photos');\r\n                        clickButton = false;\r\n                    }               \r\n                }\r\n            }, false);\r\n            open.call(this, method, url, async, user, pass);\r\n        };\r\n    }(XMLHttpRequest.prototype.open));\r\n}\r\n\r\nwindow['Kamdev-151002-app'] = true;   \r\n\r\n\r\nvar isBought= false\r\nvar products = ['6655249875081', '6653242310793', '6660024434825', '6671309996169']\r\nif(window.location.href.includes('thank_you')){\r\n    var productLayer;\r\n    Kameleoon.API.Core.runWhenConditionTrue(() => {\r\n        productLayer = window.dataLayer && window.dataLayer.find(layer =>\r\n            layer?.productIdArr != undefined)\r\n        return !!productLayer;\r\n    },()=>{\r\n        var productList = productLayer.productIdArr;\r\n        const intersection =  productList.filter(element => products.includes(element));\r\n        if (intersection.length !=0){\r\n            isBought = true;\r\n        }\r\n        Kameleoon.API.Data.setCustomData(\"produit achete\", isBought);\r\n    })\r\n}",
                              "executeCodeForReference": true,
                              "forcedTechnical": true,
                              "dateModified": 1660642343000,
                              "dateStatusModified": 1660642349000,
                              "goals": [],
                              "deviation": {
                                 "0": 0.5,
                                 "773451": 0.5
                              },
                              "variations": [{
                                 "name": "Reference",
                                 "id": 0,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }, {
                                 "name": "Photos situation",
                                 "id": 773451,
                                 "deviation": 0.5,
                                 "respoolTime": null
                              }],
                              "targetingSegmentId": 194182,
                              "attributionWindow": 604800000,
                              "kameleoonTracking": {
                                 "mainGoalId": 272442
                              },
                              "customIntegrations": []
                           }],
                           "personalizations": [],
                           "targetingSegments": [{
                              "id": 169698,
                              "name": "[NUTRIMUSCLE] Tracking menu",
                              "tree": {
                                 "orOperator": false,
                                 "orGuiLevel": 0,
                                 "leftChild": {
                                    "targetingCondition": {
                                       "type": "PAGE_URL",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "(.*)www\\.nutrimuscle\\.com(.*)",
                                       "include": true
                                    }
                                 },
                                 "rightChild": {
                                    "targetingCondition": {
                                       "type": "DEVICE_TYPE",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "DESKTOP",
                                       "include": true
                                    }
                                 }
                              }
                           }, {
                              "id": 169778,
                              "name": "[NUTRIMUSCLE] Tracking menu mobile",
                              "tree": {
                                 "orOperator": false,
                                 "orGuiLevel": 0,
                                 "leftChild": {
                                    "targetingCondition": {
                                       "type": "PAGE_URL",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "(.*)www\\.nutrimuscle\\.com(.*)",
                                       "include": true
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
                              }
                           }, {
                              "id": 176800,
                              "name": "Visiteurs mobile only pages collection",
                              "tree": {
                                 "orOperator": false,
                                 "orGuiLevel": 1,
                                 "leftChild": {
                                    "targetingCondition": {
                                       "type": "PAGE_URL",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "(.*)/collections/(.*)",
                                       "include": true
                                    }
                                 },
                                 "rightChild": {
                                    "targetingCondition": {
                                       "type": "DEVICE_TYPE",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "DESKTOP",
                                       "include": false
                                    }
                                 }
                              }
                           }, {
                              "id": 176855,
                              "name": "Segment for [USP BAR] Wording cliquable",
                              "tree": null
                           }, {
                              "id": 178237,
                              "name": "Segment for [PANIER] Widget Trustpilot V2",
                              "tree": {
                                 "targetingCondition": {
                                    "type": "PAGE_URL",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": "(.*)https\\://www\\.nutrimuscle\\.com/cart(.*)",
                                    "include": true
                                 }
                              }
                           }, {
                              "id": 181696,
                              "name": "Vignettes HP mobile",
                              "tree": {
                                 "orOperator": false,
                                 "orGuiLevel": 1,
                                 "leftChild": {
                                    "targetingCondition": {
                                       "type": "PAGE_URL",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "https\\://www\\.nutrimuscle\\.com//?([\\?#].*)?$",
                                       "include": true
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
                              }
                           }, {
                              "id": 182297,
                              "name": "Segment for [Fiche produit] Posologie",
                              "tree": {
                                 "targetingCondition": {
                                    "type": "PAGE_URL",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": "(.*)/products/(.*)",
                                    "include": true
                                 }
                              }
                           }, {
                              "id": 184213,
                              "name": "Segment for [PANIER] Bandeau programme fidélité",
                              "tree": {
                                 "targetingCondition": {
                                    "type": "PAGE_URL",
                                    "disabled": false,
                                    "weight": 1,
                                    "value": "https\\://www\\.nutrimuscle\\.com/cart/?([\\?#].*)?$",
                                    "include": true
                                 }
                              }
                           }, {
                              "id": 189445,
                              "name": "[BANNER DESKTOP] FIRST10",
                              "tree": {
                                 "orOperator": true,
                                 "orGuiLevel": 1,
                                 "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                       "targetingCondition": {
                                          "type": "LANDING_PAGE",
                                          "disabled": false,
                                          "weight": 1,
                                          "value": "(.*)Opé_Commerciale10(.*)",
                                          "include": true
                                       }
                                    },
                                    "rightChild": {
                                       "targetingCondition": {
                                          "type": "DEVICE_TYPE",
                                          "disabled": false,
                                          "weight": 1,
                                          "value": "DESKTOP",
                                          "include": true
                                       }
                                    }
                                 },
                                 "rightChild": {
                                    "targetingCondition": {
                                       "type": "DEVICE_TYPE",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "TABLET",
                                       "include": true
                                    }
                                 }
                              }
                           }, {
                              "id": 189912,
                              "name": "[BANNER MOBILE] FIRST10-1",
                              "tree": {
                                 "orOperator": false,
                                 "orGuiLevel": 0,
                                 "leftChild": {
                                    "targetingCondition": {
                                       "type": "LANDING_PAGE",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "(.*)Opé_Commerciale10(.*)",
                                       "include": true
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
                              }
                           }, {
                              "id": 189288,
                              "name": "Potions Global",
                              "tree": {
                                 "orOperator": true,
                                 "orGuiLevel": 1,
                                 "leftChild": {
                                    "targetingCondition": {
                                       "type": "PAGE_URL",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "(.*)/products/(.*)",
                                       "include": true
                                    }
                                 },
                                 "rightChild": {
                                    "targetingCondition": {
                                       "type": "PAGE_URL",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "(.*)/cart(.*)",
                                       "include": true
                                    }
                                 }
                              }
                           }, {
                              "id": 191867,
                              "name": "Segment for Copy [Top bar] Wording compléments alimentaires",
                              "tree": null
                           }, {
                              "id": 192611,
                              "name": "A/A test visite Opé_Commerciale10 by Kam",
                              "tree": {
                                 "orOperator": false,
                                 "orGuiLevel": 1,
                                 "leftChild": {
                                    "targetingCondition": {
                                       "type": "PAGE_URL",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "(.*)nutrimuscle(.*)",
                                       "include": true
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
                              }
                           }, {
                              "id": 190801,
                              "name": "NUTRIMUSCLE PopIn_segment",
                              "tree": {
                                 "orOperator": false,
                                 "orGuiLevel": 1,
                                 "leftChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                       "targetingCondition": {
                                          "type": "PAGE_URL",
                                          "disabled": false,
                                          "weight": 1,
                                          "value": "(.*)nutrimuscle\\.com(.*)",
                                          "include": true
                                       }
                                    },
                                    "rightChild": {
                                       "targetingCondition": {
                                          "type": "DEVICE_TYPE",
                                          "disabled": false,
                                          "weight": 1,
                                          "value": "DESKTOP",
                                          "include": true
                                       }
                                    }
                                 },
                                 "rightChild": {
                                    "orOperator": false,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                       "targetingCondition": {
                                          "type": "MOUSE_OUT",
                                          "disabled": false,
                                          "weight": 1,
                                          "include": true
                                       }
                                    },
                                    "rightChild": {
                                       "targetingCondition": {
                                          "type": "JS_CODE",
                                          "disabled": false,
                                          "weight": 1,
                                          "value": "window.Kameleoon.API.Core.runWhenElementPresent('a[title=\"Panier\"] [data-cart-count]', ([kamCartValue]) => {\n    const checkCartValue = () => {\n        if (parseInt(kamCartValue.innerText, 10) > 0) {\n            setTargeting(true);\n            cartObserver.disconnect();\n        }\n    }\n    const cartObserver = new MutationObserver(checkCartValue);\n    cartObserver.observe(kamCartValue, {childList: true});\n    checkCartValue();\n});",
                                          "include": true,
                                          "async": true
                                       }
                                    }
                                 }
                              }
                           }, {
                              "id": 190915,
                              "name": "NUTRIMUSCLE Tooltip_Segment",
                              "tree": {
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
                                             "type": "PAGE_URL",
                                             "disabled": false,
                                             "weight": 1,
                                             "value": "(.*)nutrimuscle\\.com(.*)",
                                             "include": true
                                          }
                                       },
                                       "rightChild": {
                                          "targetingCondition": {
                                             "type": "DEVICE_TYPE",
                                             "disabled": false,
                                             "weight": 1,
                                             "value": "DESKTOP",
                                             "include": true
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
                                                "type": "NEW_VISITORS",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "RETURNING",
                                                "include": true
                                             }
                                          },
                                          "rightChild": {
                                             "targetingCondition": {
                                                "type": "JS_CODE",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "window.Kameleoon.API.Core.runWhenElementPresent('a[title=\"Panier\"] [data-cart-count]', ([kamCartValue]) => {\n    if (parseInt(kamCartValue.innerText, 10) > 0) {\n        setTargeting(true);\n    }\n});",
                                                "include": true,
                                                "async": true
                                             }
                                          }
                                       },
                                       "rightChild": {
                                          "targetingCondition": {
                                             "type": "PAGE_VIEWS",
                                             "disabled": false,
                                             "weight": 1,
                                             "operator": "EQUAL",
                                             "include": true,
                                             "value": 1
                                          }
                                       }
                                    }
                                 },
                                 "rightChild": {
                                    "targetingCondition": {
                                       "type": "TIME_SINCE_PAGE_LOAD",
                                       "disabled": false,
                                       "weight": 1,
                                       "include": true,
                                       "time": 5000,
                                       "operator": "GREATER",
                                       "timeUnit": "SECOND",
                                       "pageURLRegExpToMatch": "(.*)https\\://www\\.nutrimuscle\\.com/(.*)",
                                       "pageURLRegExpNotToMatch": null
                                    }
                                 }
                              }
                           }, {
                              "id": 194182,
                              "name": "[kameleoon support] Photos page liste",
                              "tree": {
                                 "orOperator": false,
                                 "orGuiLevel": 0,
                                 "leftChild": {
                                    "orOperator": true,
                                    "orGuiLevel": 1,
                                    "leftChild": {
                                       "targetingCondition": {
                                          "type": "PAGE_URL",
                                          "disabled": false,
                                          "weight": 1,
                                          "value": "(.*)/collections/nutrition-sportive-snacks-barres(.*)",
                                          "include": true
                                       }
                                    },
                                    "rightChild": {
                                       "orOperator": true,
                                       "orGuiLevel": 1,
                                       "leftChild": {
                                          "targetingCondition": {
                                             "type": "PAGE_URL",
                                             "disabled": false,
                                             "weight": 1,
                                             "value": "(.*)/collections/nutrition-sportive-a-tartiner-beurres(.*)",
                                             "include": true
                                          }
                                       },
                                       "rightChild": {
                                          "orOperator": true,
                                          "orGuiLevel": 1,
                                          "leftChild": {
                                             "targetingCondition": {
                                                "type": "PAGE_URL",
                                                "disabled": false,
                                                "weight": 1,
                                                "value": "(.*)/products/barre-proteinee(.*)",
                                                "include": true
                                             }
                                          },
                                          "rightChild": {
                                             "orOperator": true,
                                             "orGuiLevel": 1,
                                             "leftChild": {
                                                "targetingCondition": {
                                                   "type": "PAGE_URL",
                                                   "disabled": false,
                                                   "weight": 1,
                                                   "value": "(.*)/products/barre-glucidique-crue-biologique(.*)",
                                                   "include": true
                                                }
                                             },
                                             "rightChild": {
                                                "orOperator": true,
                                                "orGuiLevel": 1,
                                                "leftChild": {
                                                   "targetingCondition": {
                                                      "type": "PAGE_URL",
                                                      "disabled": false,
                                                      "weight": 1,
                                                      "value": "(.*)/products/beurre-de-cacahuetes-biologique(.*)",
                                                      "include": true
                                                   }
                                                },
                                                "rightChild": {
                                                   "orOperator": true,
                                                   "orGuiLevel": 1,
                                                   "leftChild": {
                                                      "targetingCondition": {
                                                         "type": "PAGE_URL",
                                                         "disabled": false,
                                                         "weight": 1,
                                                         "value": "(.*)/products/beurre-amandes-biologique(.*)",
                                                         "include": true
                                                      }
                                                   },
                                                   "rightChild": {
                                                      "orOperator": true,
                                                      "orGuiLevel": 1,
                                                      "leftChild": {
                                                         "targetingCondition": {
                                                            "type": "PAGE_URL",
                                                            "disabled": false,
                                                            "weight": 1,
                                                            "value": "(.*)/collections/complements-alimentaires-nutrition-sportive(.*)",
                                                            "include": true
                                                         }
                                                      },
                                                      "rightChild": {
                                                         "orOperator": true,
                                                         "orGuiLevel": 1,
                                                         "leftChild": {
                                                            "targetingCondition": {
                                                               "type": "PAGE_URL",
                                                               "disabled": false,
                                                               "weight": 1,
                                                               "value": "(.*)/collections/nutrition-sportive-les-meilleures-ventes(.*)",
                                                               "include": true
                                                            }
                                                         },
                                                         "rightChild": {
                                                            "orOperator": true,
                                                            "orGuiLevel": 1,
                                                            "leftChild": {
                                                               "targetingCondition": {
                                                                  "type": "PAGE_URL",
                                                                  "disabled": false,
                                                                  "weight": 1,
                                                                  "value": "(.*)/collections/complements-alimentaires-bio-pour-la-musculation(.*)",
                                                                  "include": true
                                                               }
                                                            },
                                                            "rightChild": {
                                                               "orOperator": true,
                                                               "orGuiLevel": 1,
                                                               "leftChild": {
                                                                  "targetingCondition": {
                                                                     "type": "PAGE_URL",
                                                                     "disabled": false,
                                                                     "weight": 1,
                                                                     "value": "(.*)/collections/nutrition-sportive-les-nouveautes(.*)",
                                                                     "include": true
                                                                  }
                                                               },
                                                               "rightChild": {
                                                                  "orOperator": true,
                                                                  "orGuiLevel": 1,
                                                                  "leftChild": {
                                                                     "targetingCondition": {
                                                                        "type": "PAGE_URL",
                                                                        "disabled": false,
                                                                        "weight": 1,
                                                                        "value": "(.*)/collections/nos-essentiels-sport-pour-la-musculation(.*)",
                                                                        "include": true
                                                                     }
                                                                  },
                                                                  "rightChild": {
                                                                     "orOperator": true,
                                                                     "orGuiLevel": 1,
                                                                     "leftChild": {
                                                                        "targetingCondition": {
                                                                           "type": "PAGE_URL",
                                                                           "disabled": false,
                                                                           "weight": 1,
                                                                           "value": "(.*)/collections/complements-alimentaires-pre-training(.*)",
                                                                           "include": true
                                                                        }
                                                                     },
                                                                     "rightChild": {
                                                                        "orOperator": true,
                                                                        "orGuiLevel": 1,
                                                                        "leftChild": {
                                                                           "targetingCondition": {
                                                                              "type": "PAGE_URL",
                                                                              "disabled": false,
                                                                              "weight": 1,
                                                                              "value": "(.*)/collections\\/complements-alimentaires-intra-training(.*)",
                                                                              "include": true
                                                                           }
                                                                        },
                                                                        "rightChild": {
                                                                           "orOperator": true,
                                                                           "orGuiLevel": 1,
                                                                           "leftChild": {
                                                                              "targetingCondition": {
                                                                                 "type": "PAGE_URL",
                                                                                 "disabled": false,
                                                                                 "weight": 1,
                                                                                 "value": "(.*)/collections/complements-alimentaires-post-training(.*)",
                                                                                 "include": true
                                                                              }
                                                                           },
                                                                           "rightChild": {
                                                                              "orOperator": true,
                                                                              "orGuiLevel": 1,
                                                                              "leftChild": {
                                                                                 "targetingCondition": {
                                                                                    "type": "PAGE_URL",
                                                                                    "disabled": false,
                                                                                    "weight": 1,
                                                                                    "value": "(.*)/collections/complements-alimentaires-prise-de-muscle\\?page\\=2(.*)",
                                                                                    "include": true
                                                                                 }
                                                                              },
                                                                              "rightChild": {
                                                                                 "orOperator": true,
                                                                                 "orGuiLevel": 1,
                                                                                 "leftChild": {
                                                                                    "targetingCondition": {
                                                                                       "type": "PAGE_URL",
                                                                                       "disabled": false,
                                                                                       "weight": 1,
                                                                                       "value": "(.*)/collections/complements-alimentaires-prise-de-muscle(.*)",
                                                                                       "include": true
                                                                                    }
                                                                                 },
                                                                                 "rightChild": {
                                                                                    "orOperator": true,
                                                                                    "orGuiLevel": 1,
                                                                                    "leftChild": {
                                                                                       "targetingCondition": {
                                                                                          "type": "PAGE_URL",
                                                                                          "disabled": false,
                                                                                          "weight": 1,
                                                                                          "value": "(.*)/collections/complements-alimentaires-proteines-prise-de-muscle(.*)",
                                                                                          "include": true
                                                                                       }
                                                                                    },
                                                                                    "rightChild": {
                                                                                       "orOperator": true,
                                                                                       "orGuiLevel": 1,
                                                                                       "leftChild": {
                                                                                          "targetingCondition": {
                                                                                             "type": "PAGE_URL",
                                                                                             "disabled": false,
                                                                                             "weight": 1,
                                                                                             "value": "(.*)/collections\\/sante-bien-etre-controle-du-poids(.*)",
                                                                                             "include": true
                                                                                          }
                                                                                       },
                                                                                       "rightChild": {
                                                                                          "orOperator": true,
                                                                                          "orGuiLevel": 1,
                                                                                          "leftChild": {
                                                                                             "targetingCondition": {
                                                                                                "type": "PAGE_URL",
                                                                                                "disabled": false,
                                                                                                "weight": 1,
                                                                                                "value": "(.*)/collections/complements-alimentaires-pour-la-recuperation(.*)",
                                                                                                "include": true
                                                                                             }
                                                                                          },
                                                                                          "rightChild": {
                                                                                             "orOperator": true,
                                                                                             "orGuiLevel": 1,
                                                                                             "leftChild": {
                                                                                                "targetingCondition": {
                                                                                                   "type": "PAGE_URL",
                                                                                                   "disabled": false,
                                                                                                   "weight": 1,
                                                                                                   "value": "(.*)/collections/complements-alimentaires-pour-performance-endurance(.*)",
                                                                                                   "include": true
                                                                                                }
                                                                                             },
                                                                                             "rightChild": {
                                                                                                "orOperator": true,
                                                                                                "orGuiLevel": 1,
                                                                                                "leftChild": {
                                                                                                   "targetingCondition": {
                                                                                                      "type": "PAGE_URL",
                                                                                                      "disabled": false,
                                                                                                      "weight": 1,
                                                                                                      "value": "(.*)/collections/complements-alimentaires-sport-recuperation-nerveuse(.*)",
                                                                                                      "include": true
                                                                                                   }
                                                                                                },
                                                                                                "rightChild": {
                                                                                                   "orOperator": true,
                                                                                                   "orGuiLevel": 1,
                                                                                                   "leftChild": {
                                                                                                      "targetingCondition": {
                                                                                                         "type": "PAGE_URL",
                                                                                                         "disabled": false,
                                                                                                         "weight": 1,
                                                                                                         "value": "(.*)collections/complements-alimentaires-cereales-glucides(.*)",
                                                                                                         "include": true
                                                                                                      }
                                                                                                   },
                                                                                                   "rightChild": {
                                                                                                      "orOperator": true,
                                                                                                      "orGuiLevel": 1,
                                                                                                      "leftChild": {
                                                                                                         "targetingCondition": {
                                                                                                            "type": "PAGE_URL",
                                                                                                            "disabled": false,
                                                                                                            "weight": 1,
                                                                                                            "value": "(.*)/collections/regime-sportif-cuisine-fitness(.*)",
                                                                                                            "include": true
                                                                                                         }
                                                                                                      },
                                                                                                      "rightChild": {
                                                                                                         "targetingCondition": {
                                                                                                            "type": "PAGE_URL",
                                                                                                            "disabled": false,
                                                                                                            "weight": 1,
                                                                                                            "value": "(.*)collections/regime-sportif-cuisine-fitness(.*)",
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
                                                                              }
                                                                           }
                                                                        }
                                                                     }
                                                                  }
                                                               }
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
                                    "targetingCondition": {
                                       "type": "PAGE_URL",
                                       "disabled": false,
                                       "weight": 1,
                                       "value": "^https\\://www\\.nutrimuscle\\.com/products/barre-proteinee-crispy$",
                                       "include": false
                                    }
                                 }
                              }
                           }],
                           "variations": [{
                              "name": "Tracking menu",
                              "id": 689476,
                              "css": "",
                              "elementSets": [],
                              "javaScriptCode": {
                                 "code": "const goals={\"Tracking “Protéines”\":257226,\"Tracking “Nutrition sportive”\":257260,\"Tracking “Barres”\":257283,\"Tracking “Cuisine Fitness”\":257289,\"Tracking “Santé”\":257375,\"Tracking “Packs”\":257379,\"Tracking “Tous les produits”\":257397,\"Tracking offres\":257406,\"Tracking logo\":257415,\"Tracking barre de recherche\":257420,\"Tracking panier\":257429,\"Tracking barre bleue\":257431,\"Tracking “Mon compte”\":257436,\"Tracking “A propos”\":257448,\"Tracking  barre noire\":257502,\"Tracking Protéines_Protéines\":258058,\"Tracking Protéines_Barres\":258107,\"Tracking Protéines_Gainers\":258125,\"Tracking Protéines_Tous les produits\":258139,\"Tracking Protéines_Objectifs\":260772,\"Tracking Protéines_Conseils Sport\":260773,\"Tracking Protéines_Conseils Nutrition\":260775,\"Tracking Protétines_Block1\":260778,\"Tracking Protétines_Block2\":260780,\"Tracking Nutrition_Acides Aminés\":260789,\"Tracking Nutrition_Barres\":260791,\"Tracking Nutrition_Boosters\":260798,\"Tracking Nutrition_Burners\":260799,\"Tracking Nutrition_Cereales&Glucides\":260801,\"Tracking Nutrition_Créatine\":260802,\"Tracking Nutrition_Cuisine Fitness\":260803,\"Tracking Nutrition_Gainers\":260808,\"Tracking Nutrition_Protéines\":260809,\"Tracking Nutrition_Entrainement\":260819,\"Tracking Nutrition_Tous les produits\":260827,\"Tracking Nutrition_Objectifs\":260837,\"Tracking Nutrition_Conseils\":260839,\"Tracking Nutrition_Encart 1\":260872,\"Tracking Nutrition_Encart 2\":260873,\"Tracking Barres_Protéinées\":260908,\"Tracking Barres_CruesBio\":260925,\"Tracking Barres_Tous les produits\":260929,\"Tracking Barres_Encart1\":260933,\"Tracking Barres_Encart2\":260935,\"Tracking Cuisine_Beurres\":260950,\"Tracking Cuisine_Céréales\":260953,\"Tracking Cuisine_Pancakes\":260959,\"Tracking Cuisine_Cuisine\":260963,\"Tracking Cuisine_Tous les produits\":260969,\"Tracking Cuisine_Objectifs\":260973,\"Tracking Cuisine_Conseils\":260977,\"Tracking Cuisine_Recettes\":260980,\"Tracking Cuisine_Encart1\":260985,\"Tracking Cuisine_Encart2\":260988,\"Tracking Santé_Vitamines\":260999,\"Tracking Santé_Minéraux\":261020,\"Tracking Santé_Collagène\":261034,\"Tracking Santé_Oméga3\":261037,\"Tracking Santé_Boosters\":261042,\"Tracking Santé_Brûleurs\":261047,\"Tracking Santé_Plantes\":261050,\"Tracking Santé_Régime\":261083,\"Tracking Santé_Tous les produits\":261092,\"Tracking Santé_Objectifs\":261097,\"Tracking Santé_Conseils\":261105,\"Tracking Santé_Encart1\":261108,\"Tracking Santé_Encart2\":261109,\"Tracking Packs_Tous\":261130,\"Tracking Packs_Sport\":261134,\"Tracking Packs_Santé\":261140,\"Tracking Packs_Démarrage\":261143,\"Tracking Packs_Encart1\":261145,\"Tracking Packs_Encart2\":261151,\"Tracking TousLesProduits_Lettres\":261164,\"Tracking Avis (barre noire)\":267440,\"Tracking Contact (barre noire)\":267441,\"Tracking FAQ (barre noire)\":267442,\"Tracking Langue (barre noire)\":267443,\"Tracking Bannière blanche\":267444},selectors={\"Tracking “Protéines”\":'.header__menu li a[title=\"Protéines \"]',\"Tracking “Nutrition sportive”\":'.header__menu li a[title=\"Nutrition sportive \"]',\"Tracking “Barres”\":'.header__menu li a[title=\"Barres\"]',\"Tracking “Cuisine Fitness”\":'.header__menu li a[title=\"Cuisine fitness \"]',\"Tracking “Santé”\":'.header__menu li a[title=\"Santé\"]',\"Tracking “Packs”\":'.header__menu li a[title=\"Packs\"]',\"Tracking “Tous les produits”\":'.header__menu li a[title=\"Tous les produits \"]',\"Tracking offres\":'.header__menu li a[title=\"Offres\"]',\"Tracking logo\":\".header__logo\",\"Tracking barre de recherche\":\".header__search\",\"Tracking panier\":'.header__actions a[title=\"Panier\"]',\"Tracking barre bleue\":\"#shopify-section-header-reinsurance\",\"Tracking “Mon compte”\":\".header__actions-login\",\"Tracking “A propos”\":\".header__actions-link\",\"Tracking  barre noire\":\"#shopify-section-topbar .topbar__text\",\"Tracking Protéines_Protéines\":\".megarolls .megaroll:nth-child(1) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Protéines_Barres\":\".megarolls .megaroll:nth-child(1) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Protéines_Gainers\":\".megarolls .megaroll:nth-child(1) .megaroll__col:nth-child(2) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Protéines_Tous les produits\":\".megarolls .megaroll:nth-child(1) .megaroll__col:nth-child(2) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Protéines_Objectifs\":\".megarolls .megaroll:nth-child(1) .megaroll__col:nth-child(3) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Protéines_Conseils Sport\":\".megarolls .megaroll:nth-child(1) .megaroll__col:nth-child(3) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Protéines_Conseils Nutrition\":\".megarolls .megaroll:nth-child(1) .megaroll__col:nth-child(3) .megaroll__col-links > li:nth-child(3) a\",\"Tracking Protétines_Block1\":\".megarolls .megaroll:nth-child(1) .megaroll__col--medias a:nth-child(1)\",\"Tracking Protétines_Block2\":\".megarolls .megaroll:nth-child(1) .megaroll__col--medias a:nth-child(2)\",\"Tracking Nutrition_Acides Aminés\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Nutrition_Barres\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Nutrition_Boosters\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(3) a\",\"Tracking Nutrition_Burners\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(4) a\",\"Tracking Nutrition_Cereales&Glucides\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(5) a\",\"Tracking Nutrition_Créatine\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(6) a\",\"Tracking Nutrition_Cuisine Fitness\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(7) a\",\"Tracking Nutrition_Gainers\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(8) a\",\"Tracking Nutrition_Protéines\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(9) a\",\"Tracking Nutrition_Entrainement\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(2) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Nutrition_Tous les produits\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(2) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Nutrition_Objectifs\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(3) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Nutrition_Conseils\":\".megarolls .megaroll:nth-child(2) .megaroll__col:nth-child(3) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Nutrition_Encart 1\":\".megarolls .megaroll:nth-child(2) .megaroll__col--medias a:nth-child(1)\",\"Tracking Nutrition_Encart 2\":\".megarolls .megaroll:nth-child(2) .megaroll__col--medias a:nth-child(2)\",\"Tracking Barres_Protéinées\":\".megarolls .megaroll:nth-child(3) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Barres_CruesBio\":\".megarolls .megaroll:nth-child(3) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Barres_Tous les produits\":\".megarolls .megaroll:nth-child(3) .megaroll__col:nth-child(2) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Barres_Encart1\":\".megarolls .megaroll:nth-child(3) .megaroll__col--medias a:nth-child(1)\",\"Tracking Barres_Encart2\":\".megarolls .megaroll:nth-child(3) .megaroll__col--medias a:nth-child(2)\",\"Tracking Cuisine_Beurres\":\".megarolls .megaroll:nth-child(4) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Cuisine_Céréales\":\".megarolls .megaroll:nth-child(4) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Cuisine_Pancakes\":\".megarolls .megaroll:nth-child(4) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(3) a\",\"Tracking Cuisine_Cuisine\":\".megarolls .megaroll:nth-child(4) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(4) a\",\"Tracking Cuisine_Tous les produits\":\".megarolls .megaroll:nth-child(4) .megaroll__col:nth-child(2) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Cuisine_Objectifs\":\".megarolls .megaroll:nth-child(4) .megaroll__col:nth-child(2) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Cuisine_Conseils\":\".megarolls .megaroll:nth-child(4) .megaroll__col:nth-child(3) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Cuisine_Recettes\":\".megarolls .megaroll:nth-child(4) .megaroll__col:nth-child(3) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Cuisine_Encart1\":\".megarolls .megaroll:nth-child(4) .megaroll__col--medias a:nth-child(1)\",\"Tracking Cuisine_Encart2\":\".megarolls .megaroll:nth-child(4) .megaroll__col--medias a:nth-child(2)\",\"Tracking Santé_Vitamines\":\".megarolls .megaroll:nth-child(5) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Santé_Minéraux\":\".megarolls .megaroll:nth-child(5) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Santé_Collagène\":\".megarolls .megaroll:nth-child(5) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(3) a\",\"Tracking Santé_Oméga3\":\".megarolls .megaroll:nth-child(5) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(4) a\",\"Tracking Santé_Boosters\":\".megarolls .megaroll:nth-child(5) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(5) a\",\"Tracking Santé_Brûleurs\":\".megarolls .megaroll:nth-child(5) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(6) a\",\"Tracking Santé_Plantes\":\".megarolls .megaroll:nth-child(5) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(7) a\",\"Tracking Santé_Régime\":\".megarolls .megaroll:nth-child(5) .megaroll__col:nth-child(2) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Santé_Tous les produits\":\".megarolls .megaroll:nth-child(5) .megaroll__col:nth-child(2) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Santé_Objectifs\":\".megarolls .megaroll:nth-child(5) .megaroll__col:nth-child(3) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Santé_Conseils\":\".megarolls .megaroll:nth-child(5) .megaroll__col:nth-child(3) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Santé_Encart1\":\".megarolls .megaroll:nth-child(5) .megaroll__col--medias a:nth-child(1)\",\"Tracking Santé_Encart2\":\".megarolls .megaroll:nth-child(5) .megaroll__col--medias a:nth-child(2)\",\"Tracking Packs_Tous\":\".megarolls .megaroll:nth-child(6) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(1) a\",\"Tracking Packs_Sport\":\".megarolls .megaroll:nth-child(6) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(2) a\",\"Tracking Packs_Santé\":\".megarolls .megaroll:nth-child(6) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(3) a\",\"Tracking Packs_Démarrage\":\".megarolls .megaroll:nth-child(6) .megaroll__col:nth-child(1) .megaroll__col-links > li:nth-child(4) a\",\"Tracking Packs_Encart1\":\".megarolls .megaroll:nth-child(6) .megaroll__col--medias a:nth-child(1)\",\"Tracking Packs_Encart2\":\".megarolls .megaroll:nth-child(6) .megaroll__col--medias a:nth-child(2)\",\"Tracking TousLesProduits_Lettres\":\".megarolls .megaroll:nth-child(7) a\",\"Tracking Contact (barre noire)\":'#shopify-section-topbar a[title=\"Contact\"]',\"Tracking FAQ (barre noire)\":'#shopify-section-topbar a[title=\"FAQ\"]',\"Tracking Langue (barre noire)\":'#shopify-section-topbar a[title=\"FR - €\"]',\"Tracking Bannière blanche\":\"#shopify-section-promobanner .promobanner__text\"};document.addEventListener(\"click\",l=>{for(const i in selectors)if(l.target.closest(selectors[i])){Kameleoon.API.Goals.processConversion(goals[i]);break}}),Kameleoon.API.Core.runWhenElementPresent(\".topbar__reviews .trustpilot-widget\",([l])=>{l.setAttribute(\"tabindex\",\"-1\")});const waitClickOnIframe=()=>{Kameleoon.API.Core.runWhenConditionTrue(()=>document.activeElement===document.querySelector(\".topbar__reviews .trustpilot-widget\"),()=>{Kameleoon.API.Goals.processConversion(goals[\"Tracking Avis (barre noire)\"]),document.activeElement.blur(),setTimeout(()=>{waitClickOnIframe()},500)})};waitClickOnIframe();",
                                 "afterDOMReady": false
                              }
                           }, {
                              "name": "Tracking menu",
                              "id": 692047,
                              "css": "",
                              "elementSets": [],
                              "javaScriptCode": {
                                 "code": "const goals={\"Tracking “Protéines”\":257226,\"Tracking “Nutrition sportive”\":257260,\"Tracking “Barres”\":257283,\"Tracking “Cuisine Fitness”\":257289,\"Tracking “Santé”\":257375,\"Tracking “Packs”\":257379,\"Tracking “Tous les produits”\":257397,\"Tracking offres\":257406,\"Tracking logo\":257415,\"Tracking barre de recherche\":257420,\"Tracking panier\":257429,\"Tracking barre bleue\":257431,\"Tracking “Mon compte”\":257436,\"Tracking “A propos”\":257448,\"Tracking “Objectifs”\":266837,\"Tracking “Aide & Conseils”\":266838,\"Tracking Protéines_Barres\":258107,\"Tracking Protéines_Native\":267215,\"Tracking Protéines_Isolat\":267216,\"Tracking Protéines_Caséine\":267217,\"Tracking Protéines_PeptoPro\":267218,\"Tracking Protéines_Protéines_d_oeuf\":267219,\"Tracking Protéines_Protéines bio\":267220,\"Tracking Protéines_Mélanges\":267221,\"Tracking Protéines_Gainers\":258125,\"Tracking Protéines_Packs\":267222,\"Tracking Protéines_Toutes\":267223,\"Tracking Nutrition_Essentiels\":266847,\"Tracking Nutrition_Acides Aminés\":260789,\"Tracking Nutrition_Barres\":260791,\"Tracking Nutrition_Boosters\":260798,\"Tracking Nutrition_Burners\":260799,\"Tracking Nutrition_Créatine\":260802,\"Tracking Nutrition_Cuisine Fitness\":260803,\"Tracking Nutrition_Gainers\":260808,\"Tracking Nutrition_Protéines\":260809,\"Tracking Nutrition_Entrainement\":260819,\"Tracking Barres_Protéinées\":260908,\"Tracking Barres_CruesBio\":260925,\"Tracking Cuisine_Beurres\":260950,\"Tracking Cuisine_Céréales\":260953,\"Tracking Cuisine_Pancakes\":260959,\"Tracking Cuisine_Toute la cuisine\":267224,\"Tracking Santé_Essentiels\":267225,\"Tracking Santé_Vitamines\":260999,\"Tracking Santé_Minéraux\":261020,\"Tracking Santé_Collagène\":261034,\"Tracking Santé_Oméga3\":261037,\"Tracking Santé_Boosters\":261042,\"Tracking Santé_Brûleurs\":261047,\"Tracking Santé_Plantes\":261050,\"Tracking Santé_Régime\":261083,\"Tracking Packs_Tous\":261130,\"Tracking Packs_Sport\":261134,\"Tracking Packs_Santé\":261140,\"Tracking Packs_Démarrage\":261143,\"Tracking Tous_EssentielsSport\":267226,\"Tracking Tous_EssentielsSantés\":267227,\"Tracking Tous_Nouveautés\":267228,\"Tracking Tous_GammeBio\":267229,\"Tracking Tous_MeilleuresVentes\":267230,\"Tracking Tous_Produits\":267231,\"Tracking Aide_Contact\":267232,\"Tracking Aide_DevenirTesteur\":267233,\"Tracking Aide_FAQ\":267234,\"Tracking Aide_Blog\":267235,\"Tracking Aide_Forum\":267236,\"Tracking Aide_Glossaire\":267237,\"Tracking Aide_Podcasts\":267238,\"Tracking Propos_Qui sommes-nous?\":267239,\"Tracking Propos_Fournisseurs\":267240,\"Tracking Propos_Transparence\":267241,\"Tracking Propos_Qualité\":267242,\"Tracking Propos_Cequenousfaisonspas\":267243,\"Tracking  barre noire\":257502,\"Tracking Bannière blanche\":267444,\"Tracking Langues\":267447,\"Tracking Contact\":267450,\"Tracking FAQ\":267451},selectors={\"Tracking “Protéines”\":'.offcanvas__nav li a[title=\"Protéines\"]',\"Tracking “Nutrition sportive”\":'.offcanvas__nav li a[title=\"Nutrition sportive \"]',\"Tracking “Barres”\":'.offcanvas__nav li a[title=\"Barres \"]',\"Tracking “Cuisine Fitness”\":'.offcanvas__nav li a[title=\"Cuisine fitness  \"]',\"Tracking “Santé”\":'.offcanvas__nav li a[title=\"Santé \"]',\"Tracking “Packs”\":'.offcanvas__nav li a[title=\"Packs \"]',\"Tracking “Tous les produits”\":'.offcanvas__nav li a[title=\"Tous les produits \"]',\"Tracking offres\":'.offcanvas__nav li a[title=\"Offres\"]',\"Tracking logo\":\".header__logo\",\"Tracking barre de recherche\":'.header__actions a[title=\"Recherche\"]',\"Tracking panier\":'.header__actions a[title=\"Panier\"]',\"Tracking barre bleue\":\"#shopify-section-header-reinsurance\",\"Tracking “Mon compte”\":'.offcanvas__nav li a[title=\"Mon compte\"]',\"Tracking “A propos”\":'.offcanvas__nav li a[title=\"À propos \"]',\"Tracking “Objectifs”\":'.offcanvas__nav li a[title=\"Objectifs\"]',\"Tracking “Aide & Conseils”\":'.offcanvas__nav li a[title=\"Aide & conseils \"]',\"Tracking Protéines_Barres\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"proteines\"] li a[title=\"Barres protéinées\"]',\"Tracking Protéines_Native\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"proteines\"] li a[title=\"Whey native\"]',\"Tracking Protéines_Isolat\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"proteines\"] li a[title=\"Isolat de Whey Native\"]',\"Tracking Protéines_Caséine\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"proteines\"] li a[title=\"Caséine\"]',\"Tracking Protéines_PeptoPro\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"proteines\"] li a[title=\"PeptoPro®\"]',\"Tracking Protéines_Protéines_d_oeuf\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"proteines\"] li a[title=\"Protéines d\\'oeuf\"]',\"Tracking Protéines_Protéines bio\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"proteines\"] li a[title=\"Protéines bio\"]',\"Tracking Protéines_Mélanges\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"proteines\"] li a[title=\"Mélanges de protéines\"]',\"Tracking Protéines_Gainers\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"proteines\"] li a[title=\"Gainers\"]',\"Tracking Protéines_Packs\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"proteines\"] li a[title=\"Packs de protéines\"]',\"Tracking Protéines_Toutes\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"proteines\"] li a[title=\"Toutes les protéines\"]',\"Tracking Nutrition_Essentiels\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"nutrition-sportive\"] li a[title=\"Essentiels sport\"]',\"Tracking Nutrition_Acides Aminés\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"nutrition-sportive\"] li a[title=\"Acides aminés \"]',\"Tracking Nutrition_Barres\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"nutrition-sportive\"] li a[title=\"Barres\"]',\"Tracking Nutrition_Boosters\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"nutrition-sportive\"] li a[title=\"Boosters\"]',\"Tracking Nutrition_Burners\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"nutrition-sportive\"] li a[title=\"Burners\"]',\"Tracking Nutrition_Créatine\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"nutrition-sportive\"] li a[title=\"Créatine\"]',\"Tracking Nutrition_Cuisine Fitness\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"nutrition-sportive\"] li a[title=\"Cuisine fitness \"]',\"Tracking Nutrition_Gainers\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"nutrition-sportive\"] li a[title=\"Gainers\"]',\"Tracking Nutrition_Protéines\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"nutrition-sportive\"] li a[title=\"Protéines \"]',\"Tracking Nutrition_Entrainement\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"nutrition-sportive\"] li a[title=\"Pré, intra & post entrainement \"]',\"Tracking Barres_Protéinées\":'.offcanvas__submenus .offcanvas__submenu li a[title=\"Barres protéinées  \"]',\"Tracking Barres_CruesBio\":'.offcanvas__submenus .offcanvas__submenu li a[title=\"Barres crues bio \"]',\"Tracking Cuisine_Beurres\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"cuisine-fitness\"] li a[title=\"Beurres de noix\"]',\"Tracking Cuisine_Céréales\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"cuisine-fitness\"] li a[title=\"Céréales biologiques\"]',\"Tracking Cuisine_Pancakes\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"cuisine-fitness\"] li a[title=\"Pancakes protéinés \"]',\"Tracking Cuisine_Toute la cuisine\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"cuisine-fitness\"] li a[title=\"Toute la cuisine fitness\"]',\"Tracking Santé_Essentiels\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"sante\"] li a[title=\"Essentiels santé\"]',\"Tracking Santé_Vitamines\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"sante\"] li a[title=\"Vitamines\"]',\"Tracking Santé_Minéraux\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"sante\"] li a[title=\"Minéraux\"]',\"Tracking Santé_Collagène\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"sante\"] li a[title=\"Collagène\"]',\"Tracking Santé_Oméga3\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"sante\"] li a[title=\"Oméga 3 \"]',\"Tracking Santé_Boosters\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"sante\"] li a[title=\"Boosters naturels\"]',\"Tracking Santé_Brûleurs\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"sante\"] li a[title=\"Brûleurs de graisses naturels\"]',\"Tracking Santé_Plantes\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"sante\"] li a[title=\"Plantes\"]',\"Tracking Santé_Régime\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"sante\"] li a[title=\"Par régime alimentaire \"]',\"Tracking Packs_Tous\":'.offcanvas__submenus .offcanvas__submenu li a[title=\"Tous les packs \"]',\"Tracking Packs_Sport\":'.offcanvas__submenus .offcanvas__submenu li a[title=\"Packs sport \"]',\"Tracking Packs_Santé\":'.offcanvas__submenus .offcanvas__submenu li a[title=\"Packs Santé\"]',\"Tracking Packs_Démarrage\":'.offcanvas__submenus .offcanvas__submenu li a[title=\"Packs Démarrage\"]',\"Tracking Tous_EssentielsSport\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"tous-les-produits\"] li a[title=\"Essentiels sport\"]',\"Tracking Tous_EssentielsSantés\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"tous-les-produits\"] li a[title=\"Essentiels santé\"]',\"Tracking Tous_Nouveautés\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"tous-les-produits\"] li a[title=\"Nouveautés\"]',\"Tracking Tous_GammeBio\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"tous-les-produits\"] li a[title=\"Gamme bio \"]',\"Tracking Tous_MeilleuresVentes\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"tous-les-produits\"] li a[title=\"Meilleures ventes\"]',\"Tracking Tous_Produits\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"tous-les-produits\"] li a[title=\"Produits de A à Z\"]',\"Tracking Aide_Contact\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"aide-conseils\"] li a[title=\"Contactez-nous\"]',\"Tracking Aide_DevenirTesteur\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"aide-conseils\"] li a[title=\"Devenir testeur \"]',\"Tracking Aide_FAQ\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"aide-conseils\"] li a[title=\"FAQ\"]',\"Tracking Aide_Blog\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"aide-conseils\"] li a[title=\"Le blog\"]',\"Tracking Aide_Forum\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"aide-conseils\"] li a[title=\"Le forum \"]',\"Tracking Aide_Glossaire\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"aide-conseils\"] li a[title=\"Le glossaire \"]',\"Tracking Aide_Podcasts\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"aide-conseils\"] li a[title=\"Les podcasts\"]',\"Tracking Propos_Qui sommes-nous?\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"a-propos\"] li a[title=\"Qui sommes-nous ?\"]',\"Tracking Propos_Fournisseurs\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"a-propos\"] li a[title=\"Nos fournisseurs\"]',\"Tracking Propos_Transparence\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"a-propos\"] li a[title=\"La transparence Nutrimuscle\"]',\"Tracking Propos_Qualité\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"a-propos\"] li a[title=\"La qualité Nutrimuscle\"]',\"Tracking Propos_Cequenousfaisonspas\":'.offcanvas__submenus .offcanvas__submenu[data-offcanvas-submenu=\"a-propos\"] li a[title=\"Ce que nous ne faisons pas \"]',\"Tracking  barre noire\":\"#shopify-section-topbar .topbar__text\",\"Tracking Bannière blanche\":\"#shopify-section-promobanner .promobanner__text\",\"Tracking Langues\":'.offcanvas__nav li a[title=\"FR - €\"]',\"Tracking Contact\":'.offcanvas__links li a[title=\"Contact\"]',\"Tracking FAQ\":'.offcanvas__links li a[title=\"FAQ\"]'};Kameleoon.API.Utils.addUniversalClickListener(document,a=>{for(const s in selectors)if(a.target.closest(selectors[s])){Kameleoon.API.Goals.processConversion(goals[s]);break}});",
                                 "afterDOMReady": false
                              }
                           }, {
                              "name": "Image Réduite",
                              "id": 722558,
                              "css": "#kameleoonId1105724{height:100px!important}#kameleoonId1105725{font-size:10px!important}",
                              "elementSets": [{
                                 "selector": "body > div:first-child > div:nth-of-type(2) > div:nth-of-type(2) > div:first-child > div:first-child",
                                 "options": {
                                    "kameleoonId": 1105723,
                                    "autoGeneratedSelector": true,
                                    "selector": "#kameleoonId1105723, [data-kameleoon-id=\"1105723\"]"
                                 },
                                 "currentQuery": "body > div:first-child > div:nth-of-type(2) > div:nth-of-type(2) > div:first-child > div:first-child"
                              }, {
                                 "selector": "body > div:first-child > div:nth-of-type(2) > div:nth-of-type(2)",
                                 "options": {
                                    "kameleoonId": 1105724,
                                    "autoGeneratedSelector": true,
                                    "selector": "#kameleoonId1105724, [data-kameleoon-id=\"1105724\"]"
                                 },
                                 "currentQuery": "body > div:first-child > div:nth-of-type(2) > div:nth-of-type(2)"
                              }, {
                                 "selector": "body > div:first-child > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:first-child",
                                 "options": {
                                    "htmlContent": "\n<h1 class=\"hero__title\" style=\"\"><span style=\"font-size:16px;\">Nutrition sportive</span></h1>\n",
                                    "kameleoonId": 1105725,
                                    "autoGeneratedSelector": true,
                                    "attributesData": "[]",
                                    "selector": "#kameleoonId1105725, [data-kameleoon-id=\"1105725\"]"
                                 },
                                 "currentQuery": "#kameleoonId1105724 > div:nth-of-type(2) > div:first-child"
                              }]
                           }, {
                              "name": "Wording Cliquable",
                              "id": 722706,
                              "css": "",
                              "elementSets": [{
                                 "selector": "#shopify-section-header-reinsurance > div:nth-of-type(2)",
                                 "options": {
                                    "kameleoonId": 1323753,
                                    "autoGeneratedSelector": true,
                                    "href": "https://www.nutrimuscle.com/pages/nos-offres",
                                    "selector": "#kameleoonId1323753, [data-kameleoon-id=\"1323753\"]"
                                 },
                                 "currentQuery": "#shopify-section-header-reinsurance > div:nth-of-type(2)"
                              }, {
                                 "selector": "#shopify-section-header-reinsurance > div:nth-of-type(3)",
                                 "options": {
                                    "kameleoonId": 1323754,
                                    "autoGeneratedSelector": true,
                                    "href": "https://www.nutrimuscle.com/pages/la-qualite-nutrimuscle",
                                    "selector": "#kameleoonId1323754, [data-kameleoon-id=\"1323754\"]"
                                 },
                                 "currentQuery": "#shopify-section-header-reinsurance > div:nth-of-type(3)"
                              }, {
                                 "selector": "#shopify-section-header-reinsurance > div:first-child",
                                 "options": {
                                    "kameleoonId": 1323755,
                                    "autoGeneratedSelector": true,
                                    "href": "https://www.nutrimuscle.com/pages/la-transparence",
                                    "selector": "#kameleoonId1323755, [data-kameleoon-id=\"1323755\"]"
                                 },
                                 "currentQuery": "#shopify-section-header-reinsurance > div:first-child"
                              }, {
                                 "selector": "#shopify-section-header-reinsurance > div:nth-of-type(4)",
                                 "options": {
                                    "kameleoonId": 1323756,
                                    "autoGeneratedSelector": true,
                                    "href": "https://www.nutrimuscle.com/blogs/faq/#tab-livraison/frais-de-port",
                                    "selector": "#kameleoonId1323756, [data-kameleoon-id=\"1323756\"]"
                                 },
                                 "currentQuery": "#shopify-section-header-reinsurance > div:nth-of-type(4)"
                              }]
                           }, {
                              "name": "Variation 1",
                              "id": 727780,
                              "css": ".jumbotron{display:flex;align-items:center;margin-left:auto;margin-right:auto}.trustpilot-widget{position:absolute;z-index:-10}.widget-container{width:fit-content;position:relative;margin-right:initial}.container.container--small{width:fit-content;margin-left:initial;padding-left:5%}.trustpilot-widget.overlay{content:\" \";cursor:pointer;z-index:10;display:block;position:absolute;height:100%;width:100%;top:0;left:0;right:0}@media screen and (max-width:414px){.widget-container{width:fit-content;margin-right:initial;top:12%}.jumbotron{width:100%;flex-direction:column!important}}@media screen and (min-width:420px){.jumbotron{width:73.125rem}}",
                              "elementSets": [],
                              "javaScriptCode": {
                                 "code": "Kameleoon.API.Core.runWhenElementPresent(\"body > div.page > div.main > div.jumbotron\",([t])=>{console.log(t),t.insertAdjacentHTML(\"beforeend\",'\\x3c!-- TrustBox widget - Horizontal --\\x3e<div class=\"container widget-container\"> <div class=\"trustpilot-widget\" data-locale=\"fr-FR\" data-template-id=\"5406e65db0d04a09e042d5fc\" data-businessunit-id=\"4d04fcb400006400050e40f4\" data-style-height=\"28px\" data-style-width=\"100%\" data-theme=\"light\"><a href=https://fr.trustpilot.com/review/nutrimuscle.com target=\"_blank\" rel=\"noopener\">Trustpilot</a></div> <a class=\"trustpilot-widget overlay link\" href=https://fr.trustpilot.com/review/nutrimuscle.com target=\"_blank\"><div class=\"trustpilot-widget overlay\"></div></a></div>\\x3c!-- End TrustBox widget <div></div>--\\x3e')});",
                                 "afterDOMReady": false
                              }
                           }, {
                              "name": "Variation 1",
                              "id": 738629,
                              "css": ".kameleoon-157422-vignettes{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:100%;overflow-x:scroll;padding:.3rem 0;padding-bottom:0}.kameleoon-157422-vignettes .kameleoon-157422-link{text-align:center;-webkit-box-sizing:initial!important;box-sizing:initial!important}.kameleoon-157422-vignettes .kameleoon-157422-link a{text-decoration:none}.kameleoon-157422-vignettes .kameleoon-157422-link p{color:#000;margin-top:5px;font-size:10px;line-height:12px}.kameleoon-157422-vignettes .kameleoon-157422-link .kameleoon-157422-img{width:22vw;max-width:none}",
                              "elementSets": [],
                              "javaScriptCode": {
                                 "code": "const url=[{url:\"https://storage.kameleoon.com/nutrimuscle/Vignettes_HP_mobile/1-musculation.svg\",href:\"https://www.nutrimuscle.com/pages/conseils-sport_les-complements-pour-musculation\",title:\"Musculation\"},{url:\"https://storage.kameleoon.com/nutrimuscle/Vignettes_HP_mobile/2-crossfit.svg\",href:\"https://www.nutrimuscle.com/pages/conseils-sport_les-complements-pour-crossfit\",title:\"Crossfit\"},{url:\"https://storage.kameleoon.com/nutrimuscle/Vignettes_HP_mobile/3-sports_de_combat.svg\",href:\"https://www.nutrimuscle.com/pages/conseils-sport_les-complements-pour-sport-de-combat\",title:\"Sports de combat\"},{url:\"https://storage.kameleoon.com/nutrimuscle/Vignettes_HP_mobile/4-running.svg\",href:\"https://www.nutrimuscle.com/pages/conseils-sport_les-complements-pour-running\",title:\"Running\"},{url:\"https://storage.kameleoon.com/nutrimuscle/Vignettes_HP_mobile/5-fitness.svg\",href:\"https://www.nutrimuscle.com/pages/conseils-sport_les-complements-pour-fitness\",title:\"Fitness\"},{url:\"https://storage.kameleoon.com/nutrimuscle/Vignettes_HP_mobile/6-cyclisme.svg\",href:\"https://www.nutrimuscle.com/pages/conseils-sport_les-complements-pour-cyclisme\",title:\"Cyclisme\"},{url:\"https://storage.kameleoon.com/nutrimuscle/Vignettes_HP_mobile/7-natation.svg\",href:\"https://www.nutrimuscle.com/pages/conseils-sport_les-complements-pour-natation\",title:\"Natation\"}],selectors={header:\".header\"},goals={\"Clics vignettes HP mobile\":276732},linkComponent=(e,s)=>`<div class=\"kameleoon-157422-link\">\\n        <a href=\"${e}\">\\n            <img class=\"kameleoon-157422-img\" src=\"${s}\"/>\\n        </a>\\n    </div>`,vignettesComponent=()=>`<div class=\"kameleoon-157422-vignettes\">\\n    ${url.map(e=>{return s=e.href,t=e.url,`<div class=\"kameleoon-157422-link\">\\n        <a href=\"${s}\">\\n            <img class=\"kameleoon-157422-img\" src=\"${t}\"/>\\n        </a>\\n    </div>`;var s,t}).join(\"\")}\\n</div>`;Kameleoon.API.Core.runWhenElementPresent(selectors.header,([e])=>{e.insertAdjacentHTML(\"afterend\",`<div class=\"kameleoon-157422-vignettes\">\\n    ${url.map(e=>{return s=e.href,t=e.url,`<div class=\"kameleoon-157422-link\">\\n        <a href=\"${s}\">\\n            <img class=\"kameleoon-157422-img\" src=\"${t}\"/>\\n        </a>\\n    </div>`;var s,t}).join(\"\")}\\n</div>`)}),Kameleoon.API.Utils.addUniversalClickListener(document,({target:e})=>{e.closest(\".kameleoon-157422-link\")&&Kameleoon.API.Goals.processConversion(goals[\"Clics vignettes HP mobile\"])});",
                                 "afterDOMReady": false
                              }
                           }, {
                              "name": "Avec posologie",
                              "id": 740650,
                              "css": ".product__dosage{border:none!important;letter-spacing:normal!important;opacity:1!important;background-color:transparent!important;background-image:none!important;border-radius:0 0 0 0!important;color:#a6afb2!important;font-size:13px!important;line-height:.9375em!important;padding:0!important;margin-top:calc(20px + 0px)!important;margin-bottom:calc(0px + 0px)!important;margin-left:calc(0px + 0px)!important;margin-right:calc(0px + 0px)!important;height:auto!important;width:auto!important;z-index:auto!important}",
                              "elementSets": [{
                                 "selector": ".product__dosage",
                                 "options": {
                                    "domOperation": "INSERT_AFTER",
                                    "domReference": ".product__description",
                                    "domReferenceCurrentQuery": "body > div:first-child > div:nth-of-type(2) > div:nth-of-type(2) > div:first-child > div:first-child > div:first-child > div:nth-of-type(2) > div:nth-of-type(4)",
                                    "selector": ".product__dosage"
                                 },
                                 "currentQuery": null
                              }, {
                                 "selector": "body > div:first-child > div:nth-of-type(2) > div:nth-of-type(2) > div:first-child > div:first-child > div:first-child > div:nth-of-type(2) > div:nth-of-type(8)",
                                 "options": {
                                    "kameleoonId": 1279010,
                                    "autoGeneratedSelector": true,
                                    "selector": "#kameleoonId1279010, [data-kameleoon-id=\"1279010\"]"
                                 },
                                 "currentQuery": "body > div:first-child > div:nth-of-type(2) > div:nth-of-type(2) > div:first-child > div:first-child > div:first-child > div:nth-of-type(2) > div:nth-of-type(5)"
                              }]
                           }, {
                              "name": "Sans posologie",
                              "id": 740662,
                              "css": ".product__dosage{display:none!important}",
                              "elementSets": [{
                                 "selector": ".product__dosage",
                                 "options": {
                                    "selector": ".product__dosage"
                                 },
                                 "currentQuery": null
                              }]
                           }, {
                              "name": "Variation 1 - Bloc fidélité",
                              "id": 746745,
                              "css": "#kameleoonElement1304069{border:none!important;letter-spacing:normal!important;opacity:1!important;background-color:#fedba3!important;background-image:none!important;border-radius:0 0 0 0!important;color:#000!important;text-align:left!important;font-size:14px!important;line-height:1.15em!important;padding-top:10px!important;padding-bottom:10px!important;padding-left:14px!important;padding-right:10px!important;margin-top:calc(0px + 0px)!important;margin-bottom:calc(12px + 0px)!important;margin-left:calc(0px + 0px)!important;margin-right:calc(0px + 0px)!important;height:59px!important;width:279.154px!important;z-index:121!important}#kameleoonId1327588{font-size:50px!important}",
                              "elementSets": [{
                                 "selector": "#kameleoonElement1304069",
                                 "options": {
                                    "replaceHtmlContent": "<p kameleoondefaultstyles=\"blockBordered\">Connecte-toi et découvre tes produits offerts dans ton nouveau <a href=\"https://www.nutrimuscle.com/pages/fidelite\">programme de fidélité &gt;</a></p>",
                                    "idSelector": true,
                                    "domOperation": "INSERT_AS_CHILD",
                                    "domReference": "body > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > form:first-child > div:nth-of-type(2)",
                                    "domReferenceCurrentQuery": "body > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(3) > form:first-child > div:nth-of-type(2)",
                                    "selector": "#kameleoonElement1304069"
                                 },
                                 "currentQuery": null
                              }, {
                                 "selector": "body > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:first-child > h1:first-child",
                                 "options": {
                                    "kameleoonId": 1327588,
                                    "autoGeneratedSelector": true,
                                    "selector": "#kameleoonId1327588, [data-kameleoon-id=\"1327588\"]"
                                 },
                                 "currentQuery": "body > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:first-child > h1:first-child"
                              }]
                           }, {
                              "name": "Aff. du code",
                              "id": 761228,
                              "css": "#kameleoonElement1327833{border:none!important;letter-spacing:normal!important;opacity:1!important;background-color:#fff!important;background-image:none!important;border-radius:0 0 0 0!important;color:#000!important;text-align:right!important;font-size:8px!important;line-height:2em!important;padding-top:10px!important;padding-bottom:19px!important;padding-left:10px!important;padding-right:16px!important;margin:calc(0px + 0px)!important;height:24px!important;width:250px!important;z-index:1000000!important}#kameleoonId1327910{line-height:0!important;height:18px!important;width:176px!important}",
                              "elementSets": [{
                                 "selector": "#kameleoonElement1327833",
                                 "options": {
                                    "replaceHtmlContent": "<p kameleoondefaultstyles=\"blockBordered\"><span style=\"font-size:14px;\"><strong>-10% </strong>avec le code<strong> FIRST10</strong></span></p>",
                                    "idSelector": true,
                                    "domOperation": "INSERT_BEFORE",
                                    "domReference": "#shopify-section-header > div:first-child > div:nth-of-type(3) > a:first-child",
                                    "domReferenceCurrentQuery": "#shopify-section-header > div:first-child > div:nth-of-type(3) > a:first-child",
                                    "selector": "#kameleoonElement1327833"
                                 },
                                 "currentQuery": null
                              }, {
                                 "selector": "#kameleoonElement1327833 > span:first-child",
                                 "options": {
                                    "htmlContent": "<strong>-10% </strong>avec le code<strong><span style=\"color:#16bdf0;\"> FIRST10</span>&nbsp;<span style=\"color:#ffffff;\">___</span></strong><span style=\"font-size:22px;\">|</span>",
                                    "kameleoonId": 1327910,
                                    "autoGeneratedSelector": true,
                                    "attributesData": "[]",
                                    "selector": "#kameleoonId1327910, [data-kameleoon-id=\"1327910\"]"
                                 },
                                 "currentQuery": "#kameleoonElement1327833 > span:first-child"
                              }],
                              "widgetTemplateInputData": null,
                              "widgetTemplateName": null
                           }, {
                              "name": "Aff. code promo",
                              "id": 762110,
                              "css": "",
                              "elementSets": [{
                                 "selector": ".topbar__text",
                                 "options": {
                                    "htmlContent": "-10% avec le code FIRST10",
                                    "selector": ".topbar__text"
                                 },
                                 "currentQuery": null
                              }]
                           }, {
                              "name": "Variation 1",
                              "id": 765740,
                              "css": "potions-multiply{display:none}.section--products{display:block!important}",
                              "elementSets": [],
                              "javaScriptCode": {
                                 "code": "window.location.href.includes(\"/products/\")&&(Kameleoon.API.Core.runWhenElementPresent(\"form.shutter__content\",([e])=>{document.querySelector(\"form.shutter__content div potions-multiply\").style.display=\"none\"}),Kameleoon.API.Core.runWhenElementPresent(\"div.main\",([e])=>{Kameleoon.API.Utils.addEventListener(e,\"click\",({target:e})=>{(e.closest(\".swiper-slide\")||e.closest(\".swiper-navigation\"))&&Kameleoon.API.Goals.processConversion(283941)},!0)}));",
                                 "afterDOMReady": false
                              },
                              "widgetTemplateInputData": null,
                              "widgetTemplateName": null
                           }, {
                              "name": "WORDING COMPL.ALI",
                              "id": 767687,
                              "css": "",
                              "elementSets": [{
                                 "selector": ".topbar__text",
                                 "options": {
                                    "htmlContent": "Expert en compléments alimentaires \n  ",
                                    "selector": ".topbar__text"
                                 },
                                 "currentQuery": null
                              }],
                              "widgetTemplateInputData": null,
                              "widgetTemplateName": null
                           }, {
                              "name": "Variation 1",
                              "id": 769725,
                              "css": "",
                              "elementSets": []
                           }, {
                              "name": "Popin",
                              "id": 771204,
                              "css": "body.kam_nm_041_popIn .kam_nm_wrapper{width:100%;height:100%;position:fixed;z-index:1000;background-color:#00000059;top:0;left:0}body.kam_nm_041_popIn .kam_nm_info_container{flex:1;display:flex;justify-content:center;align-items:center;flex-direction:column;padding:0 10px 0 10px}body.kam_nm_041_popIn .kam_nm_title{font-weight:700;font-size:30px;text-align:center;margin-bottom:30px}body.kam_nm_041_popIn .kam_nm_main_text{text-align:center;color:#53595f;padding:0 40px;line-height:21px}body.kam_nm_041_popIn .kam_nm_cta{background-color:#000;color:#fff;padding:15px;text-align:center;display:inline-block;font-size:16px;cursor:pointer;text-decoration:none;margin:30px 0}body.kam_nm_041_popIn .kam_nm_link{color:#0199ec}body.kam_nm_041_popIn .kam_nm_img_container{flex:1;display:flex}body.kam_nm_041_popIn .kam_nm_cross_icon{position:absolute;top:15px;right:15px;font-size:34px;color:#fff;font-weight:500;cursor:pointer;border:none;background:0 0;width:15px;height:25px;padding:0;display:flex;align-items:center}body.kam_nm_041_popIn .kam_nm-wrap{width:800px;height:auto;position:relative;z-index:1000;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;background-color:#fff;color:#000}body.kam_nm_041_popIn .custom-overlay{background:#00000059}body.kam_nm_041_popIn .kam_nm_img_container img{object-fit:cover;height:100%}body.kam_nm_041_popIn.kamPopUpopened{overflow:hidden}",
                              "elementSets": [],
                              "expositionFrequencySameVisit": 1,
                              "expositionFrequencyDelaySecondsBetweenTwoExpositions": 86400,
                              "javaScriptCode": {
                                 "code": "const kamNM041Configs={selectors:{kamCartValue:'a[title=\"Panier\"] [data-cart-count]',kamInnerPopUp:\".kam_nm-wrap\"},html:{custom_popIn:'<div class=\"kam_nm_wrapper\">\\n                            <div class=\"kam_nm-wrap\">\\n                                <div class=\"kam_nm_info_container\">\\n                                    <h2 class=\"kam_nm_title\">\\n                                        Vous partez déjà ? &#127942\\n                                    </h2>\\n                                    <p class=\"kam_nm_main_text\">\\n                                        Des produits vous attendent dans votre panier ! \\n                                        Validez-les et gagnez des points à chaque euro dépensé en devenant membre de la team Nutrimuscle. \\n                                    </p>\\n                                    <a class=\"kam_nm_cta\" href=\"https://www.nutrimuscle.com/cart\">FINALISER MA COMMANDE</a>\\n                                    <a class=\"kam_nm_link\" href=\"https://www.nutrimuscle.com/pages/fidelite\">Découvrir le programme de fidélité</a>\\n                                </div>\\n                                <div class=\"kam_nm_img_container\">\\n                                    <img src=\"https://cdn.shopify.com/s/files/1/0318/5718/0809/files/shutterstock_609082148_31e54f04-4ae1-4ca2-b7c3-3d9d18721f8d_1160x1160_crop_center.jpg?v=1622200286\">\\n                                </div>\\n                                <button class=\"kam_nm_cross_icon\">x</button>\\n                            </div>\\n                        </div>'},goalIds:{click_cross_icon:283769,decouvrer_le_programme:283765,click_continue_cta:283768}};function kamNm041PopInClickEvents(){document.querySelector(kamNM041Configs.selectors.kamInnerPopUp).addEventListener(\"click\",n=>{(n.target.classList.contains(\"kam_nm_cross_icon\")||n.target.classList.contains(\"kam_nm_cta\")||n.target.classList.contains(\"kam_nm_link\"))&&(document.querySelector(\".kam_nm_wrapper\").remove(),document.body.classList.remove(\"kamPopUpopened\",\"kam_nm_041_popIn\"),n.target.classList.contains(\"kam_nm_cross_icon\")?Kameleoon.API.Goals.processConversion(kamNM041Configs.goalIds.click_cross_icon):n.target.classList.contains(\"kam_nm_cta\")?window.Kameleoon.API.Goals.processConversion(kamNM041Configs.goalIds.decouvrer_le_programme):n.target.classList.contains(\"kam_nm_link\")&&window.Kameleoon.API.Goals.processConversion(kamNM041Configs.goalIds.click_continue_cta))})}function kamNM041init(){document.body.insertAdjacentHTML(\"beforeend\",kamNM041Configs.html.custom_popIn),document.body.classList.add(\"kam_nm_041_popIn\",\"kamPopUpopened\"),kamNm041PopInClickEvents()}window.Kameleoon.API.Core.runWhenElementPresent(\"body\",kamNM041init);",
                                 "afterDOMReady": false
                              },
                              "widgetTemplateInputData": null,
                              "widgetTemplateName": null
                           }, {
                              "name": "Tooltip",
                              "id": 771205,
                              "css": "body.kam_nm_042_topIn .kam-nm-wrapper{display:flex;flex-direction:column;width:100%;max-width:250px;background-color:#fff;box-shadow:0 1px 2px 0 rgba(153,153,153,.25);right:20px;z-index:99;position:fixed;top:12%;border:3px solid #8bc5c5}body.kam_nm_042_topIn .kam-nm-wrapper-content{position:relative;padding:20px}body.kam_nm_042_topIn .kam-nm-wrapper-icon{position:absolute;top:7px;right:16px;cursor:pointer;font-size:20px;background:unset;border:unset}body.kam_nm_042_topIn .kam-nm-wrapper-content img{margin-left:auto;margin-right:auto;display:block}body.kam_nm_042_topIn .kam-nm-wrapper-content h3{font-family:Nutrifont,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;text-align:center;font-style:normal;font-size:20px;line-height:26px;color:#000;text-decoration:none;font-weight:600;padding:10px 0}body.kam_nm_042_topIn .kam-nm-wrapper-content p{font-family:Nutrifont,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-style:normal;font-size:13px;line-height:20px;text-align:center;margin:0}body.kam_nm_042_topIn .kam-nm-wrapper-button{background:#000;padding:15px 10px;border:none;font-size:16px;color:#fff;width:100%;text-align:center;margin:15px auto 10px;display:inline-block;text-decoration:none;text-transform:uppercase;font-weight:600}body.kam_nm_042_topIn .kam_Gift_icon{display:flex;justify-content:center;align-items:center;font-size:30px}",
                              "elementSets": [],
                              "expositionFrequencySameVisit": 1,
                              "expositionFrequencyDelaySecondsBetweenTwoExpositions": 86400,
                              "javaScriptCode": {
                                 "code": "const kamNM042Configs={selectors:{kamCartValue:\"[data-cart-count]\",kamtopUpWrap:\".kam_nm_wrapper\",kamInnertopUp:\".kam-nm-wrapper-content\",kamtopUpcross:\".kam_nm_close_btn\"},html:{custom_topIn:'<div class=\"kam-nm-wrapper\">\\n                        <div class=\"kam-nm-wrapper-content\">\\n                            <span class=\"kam_Gift_icon\">&#127873</span>\\n                            <button class=\"kam-nm-wrapper-icon\">x</button>\\n                            <h3>Vous y êtes presque !</h3>\\n                            <p>Vos articles vous attendent. Commandez-les dès maintenant ! </p>  \\n                            <a class=\"kam-nm-wrapper-button\" href=\"https://www.nutrimuscle.com/cart\">Je commande</a>\\n                        </div>    \\n                    </div>'},goalIds:{click_cross_icon:283837,click_cart_cta:283838}};function kamNm042TopInClickEvents(){document.querySelector(\".kam-nm-wrapper-content\").addEventListener(\"click\",n=>{n.target.classList.contains(\"kam-nm-wrapper-icon\")?(Kameleoon.API.Goals.processConversion(kamNM042Configs.goalIds.click_cross_icon),document.querySelector(\".kam-nm-wrapper\").remove(),document.body.classList.add(\"kam_nm_042_topIn\")):n.target.classList.contains(\"kam-nm-wrapper-button\")&&(document.querySelector(\".kam-nm-wrapper\").remove(),Kameleoon.API.Goals.processConversion(kamNM042Configs.goalIds.click_cart_cta),document.body.classList.add(\"kam_nm_042_topIn\"))})}function kamNM042init(){document.body.classList.add(\"kam_nm_042_topIn\"),document.body.insertAdjacentHTML(\"beforeend\",kamNM042Configs.html.custom_topIn),kamNm042TopInClickEvents()}window.Kameleoon.API.Core.runWhenElementPresent(\"body\",kamNM042init);",
                                 "afterDOMReady": false
                              },
                              "widgetTemplateInputData": null,
                              "widgetTemplateName": null
                           }, {
                              "name": "Photos situation",
                              "id": 773451,
                              "css": "",
                              "elementSets": [],
                              "javaScriptCode": {
                                 "code": "const collectionSnacksBarres={\"BARRE PROTÉINÉE\":\"https://cdn.shopify.com/s/files/1/0318/5718/0809/products/nutrimuscle-proteines-barre-proteinee-28863997706377_800x800_crop_center@2x.jpg?v=1659641762\",\"BARRE CRUE BIO\":\"https://cdn.shopify.com/s/files/1/0318/5718/0809/products/nutrimuscle-glucides-barre-crue-bio-28864002031753_1440x1440_crop_center.jpg?v=1659744188\"},collectionTartinerBeurres={\"BEURRE DE CACAHUÈTES COMPLÈTES BIOLOGIQUE\":\"https://cdn.shopify.com/s/files/1/0318/5718/0809/products/nutrimuscle-glucides-beurre-de-cacahuetes-completes-biologique-28863992791177_800x800_crop_center@2x.jpg?v=1659640695\",\"BEURRE D’AMANDES COMPLÈTES BIOLOGIQUE\":\"https://cdn.shopify.com/s/files/1/0318/5718/0809/products/nutrimuscle-glucides-beurre-d-amandes-completes-biologique-amande-crunchy-200-g-28863978537097_800x800_crop_center@2x.jpg?v=1659640328\"},collectionAll={...collectionSnacksBarres,...collectionTartinerBeurres},expressCartProductName=[\"barre-proteinee\",\"barre-glucidique-crue-biologique\",\"beurre-de-cacahuetes-biologique\",\"beurre-amandes-biologique\"],changeImg=e=>{Kameleoon.API.Core.runWhenElementPresent(\".collection__main\",([r])=>{const t=()=>{r.querySelectorAll(\"a\").forEach(r=>{Kameleoon.API.Core.runWhenConditionTrue(()=>{const e=r.querySelector(\".product__image img\");return e&&\"\"!==e.srcset},()=>{const t=r.querySelector(\".product__content h3\").innerText.toUpperCase();e.hasOwnProperty(t)&&(r.querySelector(\"img\").src=e[t],r.querySelector(\"img\").srcset=\"\")})})};t();new MutationObserver(t).observe(r,{attributes:!0,childList:!0,subtree:!0})})},observeModal=e=>{new MutationObserver(r=>{r.forEach(r=>{\"attributes\"===r.type&&\"class\"===r.attributeName&&r.target.classList.contains(\"modal--product\")&&r.target.classList.contains(\"modal--visible\")&&expressCartProductName.filter(e=>e===r.target.getAttribute(\"data-product-current-modal\")).length&&replaceExpressCartImages(r.target,e)})}).observe(document.body,{attributes:!0,attributeFilter:[\"class\"],childList:!0,subtree:!0})},replaceExpressCartImages=(e,r)=>{Kameleoon.API.Core.runWhenElementPresent(\".modal--product .product__image img\",([e])=>{e.style.opacity=\"0\",Kameleoon.API.Core.runWhenElementPresent(\".modal--product .product__title\",([t])=>{Kameleoon.API.Core.runWhenConditionTrue(()=>\"\"!==e.srcset&&\"\"!==t.innerText,()=>{const o=t.innerText.toUpperCase();r.hasOwnProperty(o)&&(e.src=r[o],e.srcset=\"\",e.style.opacity=\"1\")})})})};/nutrition-sportive-snacks-barres/.test(window.location.href)&&(changeImg(collectionSnacksBarres),observeModal(collectionSnacksBarres)),/nutrition-sportive-a-tartiner-beurres/.test(window.location.href)&&(changeImg(collectionTartinerBeurres),observeModal(collectionTartinerBeurres)),/nutrimuscle.com\\/products/.test(window.location.href)&&!/nutrimuscle.com\\/products\\/barre-glucidique-crue-biologique/.test(window.location.href)&&(Kameleoon.API.Core.runWhenElementPresent(\".product__gallery-images .swiper-wrapper\",([e])=>{const r=e.querySelector(\".product__gallery-image:nth-child(3)\"),t=e.querySelector(\".product__gallery-image:nth-child(1)\");r.before(t)}),Kameleoon.API.Core.runWhenElementPresent(\".product__gallery-thumbs .swiper-wrapper\",([e])=>{const r=e.querySelector(\".product__gallery-thumb:nth-child(3)\"),t=e.querySelector(\".product__gallery-thumb:nth-child(1)\");r.before(t)})),/nutrimuscle.com\\/products\\/barre-glucidique-crue-biologique/.test(window.location.href)&&(Kameleoon.API.Core.runWhenElementPresent(\".product__gallery-images .swiper-wrapper\",([e])=>{const r=e.querySelector(\".product__gallery-image:nth-child(1)\"),t=e.querySelector(\".product__gallery-image:nth-child(4)\");r.before(t)}),Kameleoon.API.Core.runWhenElementPresent(\".product__gallery-thumbs .swiper-wrapper\",([e])=>{const r=e.querySelector(\".product__gallery-thumb:nth-child(1)\"),t=e.querySelector(\".product__gallery-thumb:nth-child(4)\");r.before(t)}));const pageCollection=[/collections\\/complements-alimentaires-cereales-glucides/,/collections\\/complements-alimentaires-nutrition-sportive/,/collections\\/nutrition-sportive-les-meilleures-ventes/,/collections\\/complements-alimentaires-bio-pour-la-musculation/,/collections\\/nutrition-sportive-les-nouveautes/,/collections\\/nos-essentiels-sport-pour-la-musculation/,/collections\\/complements-alimentaires-pre-training/,/collections\\/complements-alimentaires-intra-training/,/collections\\/complements-alimentaires-post-training/,/collections\\/complements-alimentaires-prise-de-muscle?page=2/,/collections\\/complements-alimentaires-prise-de-muscle/,/collections\\/complements-alimentaires-proteines-prise-de-muscle/,/collections\\/sante-bien-etre-controle-du-poids/,/collections\\/complements-alimentaires-pour-la-recuperation/,/collections\\/complements-alimentaires-pour-performance-endurance/,/collections\\/complements-alimentaires-sport-recuperation-nerveuse/,/collections\\/regime-sportif-cuisine-fitness/];pageCollection.some(e=>e.test(window.location.href))&&(changeImg(collectionAll),observeModal(collectionAll));",
                                 "afterDOMReady": false
                              },
                              "widgetTemplateInputData": null,
                              "widgetTemplateName": null
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
                              "id": 240029,
                              "name": "CTA \"Add to cart\" (via product page)",
                              "type": "CLICK"
                           }, {
                              "id": 240030,
                              "name": "Pages produit consultées",
                              "type": "URL",
                              "url": "https\\://www\\.nutrimuscle\\.com/products(.*)"
                           }, {
                              "id": 240031,
                              "name": "Pages Collection consultées",
                              "type": "URL",
                              "url": "https\\://www\\.nutrimuscle\\.com/collections(.*)"
                           }, {
                              "id": 240032,
                              "name": "Accès page Panier",
                              "type": "URL",
                              "url": "https\\://www\\.nutrimuscle\\.com/cart(.*)"
                           }, {
                              "id": 240129,
                              "name": "Accès pages checkout",
                              "type": "URL",
                              "url": "(.*)/checkouts/(.*)"
                           }, {
                              "id": 240176,
                              "name": "Ajout produit offert",
                              "type": "CLICK"
                           }, {
                              "id": 240177,
                              "name": "Ajout produit offert pop-in",
                              "type": "CLICK"
                           }, {
                              "id": 240179,
                              "name": "CTA Ajouter au panier pop-in",
                              "type": "CLICK"
                           }, {
                              "id": 240184,
                              "name": "CTA Achat Express",
                              "type": "CLICK"
                           }, {
                              "id": 240498,
                              "name": "Nombre d'articles commandés",
                              "type": "CUSTOM"
                           }, {
                              "id": 240501,
                              "name": "Utilisation de code promo",
                              "type": "CUSTOM"
                           }, {
                              "id": 240502,
                              "name": "Click CTA « Valider ma commande »",
                              "type": "CUSTOM"
                           }, {
                              "id": 241242,
                              "name": "transaction_shopify",
                              "type": "CUSTOM"
                           }, {
                              "id": 241657,
                              "name": "CTA ajout au panier specific",
                              "type": "CUSTOM"
                           }, {
                              "id": 241776,
                              "name": "Accès Page Nos Offres",
                              "type": "URL",
                              "url": "https\\://www\\.nutrimuscle\\.com/pages/nos-offres(.*)"
                           }, {
                              "id": 242521,
                              "name": "Clics bandeau Calorie Killer",
                              "type": "CLICK"
                           }, {
                              "id": 244720,
                              "name": "click on CTA carrousel via editor",
                              "type": "CLICK"
                           }, {
                              "id": 245018,
                              "name": "test live léa Jérome",
                              "type": "CLICK"
                           }, {
                              "id": 246210,
                              "name": "KPI acheteur",
                              "type": "CUSTOM"
                           }, {
                              "id": 246211,
                              "name": "Code promo",
                              "type": "CUSTOM"
                           }, {
                              "id": 246430,
                              "name": "Click slider",
                              "type": "CUSTOM"
                           }, {
                              "id": 246488,
                              "name": "Click CTA slider",
                              "type": "CUSTOM"
                           }, {
                              "id": 257226,
                              "name": "Tracking “Protéines”",
                              "type": "CUSTOM"
                           }, {
                              "id": 257260,
                              "name": "Tracking “Nutrition sportive”",
                              "type": "CUSTOM"
                           }, {
                              "id": 257283,
                              "name": "Tracking “Barres”",
                              "type": "CUSTOM"
                           }, {
                              "id": 257289,
                              "name": "Tracking “Cuisine Fitness”",
                              "type": "CUSTOM"
                           }, {
                              "id": 257375,
                              "name": "Tracking “Santé”",
                              "type": "CUSTOM"
                           }, {
                              "id": 257379,
                              "name": "Tracking “Packs”",
                              "type": "CUSTOM"
                           }, {
                              "id": 257397,
                              "name": "Tracking “Tous les produits”",
                              "type": "CUSTOM"
                           }, {
                              "id": 257406,
                              "name": "Tracking offres",
                              "type": "CUSTOM"
                           }, {
                              "id": 257415,
                              "name": "Tracking logo",
                              "type": "CUSTOM"
                           }, {
                              "id": 257420,
                              "name": "Tracking barre de recherche",
                              "type": "CUSTOM"
                           }, {
                              "id": 257429,
                              "name": "Tracking panier",
                              "type": "CUSTOM"
                           }, {
                              "id": 257431,
                              "name": "Tracking barre bleue",
                              "type": "CUSTOM"
                           }, {
                              "id": 257436,
                              "name": "Tracking “Mon compte”",
                              "type": "CUSTOM"
                           }, {
                              "id": 257448,
                              "name": "Tracking “A propos”",
                              "type": "CUSTOM"
                           }, {
                              "id": 257502,
                              "name": "Tracking  barre noire",
                              "type": "CUSTOM"
                           }, {
                              "id": 258058,
                              "name": "Tracking Protéines_Protéines",
                              "type": "CUSTOM"
                           }, {
                              "id": 258107,
                              "name": "Tracking Protéines_Barres",
                              "type": "CUSTOM"
                           }, {
                              "id": 258125,
                              "name": "Tracking Protéines_Gainers",
                              "type": "CUSTOM"
                           }, {
                              "id": 258139,
                              "name": "Tracking Protéines_Tous les produits",
                              "type": "CUSTOM"
                           }, {
                              "id": 259560,
                              "name": "Retention rate",
                              "type": "ENGAGEMENT"
                           }, {
                              "id": 259595,
                              "name": "Temps passé sur site : plus de 30 sec",
                              "type": "TIME_SPENT",
                              "minTimeSpent": 30001
                           }, {
                              "id": 259695,
                              "name": "Nbr de pages vues",
                              "type": "PAGE_VIEWS",
                              "minPageViews": 2
                           }, {
                              "id": 260772,
                              "name": "Tracking Protéines_Objectifs",
                              "type": "CUSTOM"
                           }, {
                              "id": 260773,
                              "name": "Tracking Protéines_Conseils Sport",
                              "type": "CUSTOM"
                           }, {
                              "id": 260775,
                              "name": "Tracking Protéines_Conseils Nutrition",
                              "type": "CUSTOM"
                           }, {
                              "id": 260778,
                              "name": "Tracking Protétines_Block1",
                              "type": "CUSTOM"
                           }, {
                              "id": 260780,
                              "name": "Tracking Protétines_Block2",
                              "type": "CUSTOM"
                           }, {
                              "id": 260789,
                              "name": "Tracking Nutrition_Acides Aminés",
                              "type": "CUSTOM"
                           }, {
                              "id": 260791,
                              "name": "Tracking Nutrition_Barres",
                              "type": "CUSTOM"
                           }, {
                              "id": 260798,
                              "name": "Tracking Nutrition_Boosters",
                              "type": "CUSTOM"
                           }, {
                              "id": 260799,
                              "name": "Tracking Nutrition_Burners",
                              "type": "CUSTOM"
                           }, {
                              "id": 260801,
                              "name": "Tracking Nutrition_Cereales&Glucides",
                              "type": "CUSTOM"
                           }, {
                              "id": 260802,
                              "name": "Tracking Nutrition_Créatine",
                              "type": "CUSTOM"
                           }, {
                              "id": 260803,
                              "name": "Tracking Nutrition_Cuisine Fitness",
                              "type": "CUSTOM"
                           }, {
                              "id": 260808,
                              "name": "Tracking Nutrition_Gainers",
                              "type": "CUSTOM"
                           }, {
                              "id": 260809,
                              "name": "Tracking Nutrition_Protéines",
                              "type": "CUSTOM"
                           }, {
                              "id": 260819,
                              "name": "Tracking Nutrition_Entrainement",
                              "type": "CUSTOM"
                           }, {
                              "id": 260827,
                              "name": "Tracking Nutrition_Tous les produits",
                              "type": "CUSTOM"
                           }, {
                              "id": 260837,
                              "name": "Tracking Nutrition_Objectifs",
                              "type": "CUSTOM"
                           }, {
                              "id": 260839,
                              "name": "Tracking Nutrition_Conseils",
                              "type": "CUSTOM"
                           }, {
                              "id": 260872,
                              "name": "Tracking Nutrition_Encart 1",
                              "type": "CUSTOM"
                           }, {
                              "id": 260873,
                              "name": "Tracking Nutrition_Encart 2",
                              "type": "CUSTOM"
                           }, {
                              "id": 260908,
                              "name": "Tracking Barres_Protéinées",
                              "type": "CUSTOM"
                           }, {
                              "id": 260925,
                              "name": "Tracking Barres_CruesBio",
                              "type": "CUSTOM"
                           }, {
                              "id": 260929,
                              "name": "Tracking Barres_Tous les produits",
                              "type": "CUSTOM"
                           }, {
                              "id": 260933,
                              "name": "Tracking Barres_Encart1",
                              "type": "CUSTOM"
                           }, {
                              "id": 260935,
                              "name": "Tracking Barres_Encart2",
                              "type": "CUSTOM"
                           }, {
                              "id": 260950,
                              "name": "Tracking Cuisine_Beurres",
                              "type": "CUSTOM"
                           }, {
                              "id": 260953,
                              "name": "Tracking Cuisine_Céréales",
                              "type": "CUSTOM"
                           }, {
                              "id": 260959,
                              "name": "Tracking Cuisine_Pancakes",
                              "type": "CUSTOM"
                           }, {
                              "id": 260963,
                              "name": "Tracking Cuisine_Cuisine",
                              "type": "CUSTOM"
                           }, {
                              "id": 260969,
                              "name": "Tracking Cuisine_Tous les produits",
                              "type": "CUSTOM"
                           }, {
                              "id": 260973,
                              "name": "Tracking Cuisine_Objectifs",
                              "type": "CUSTOM"
                           }, {
                              "id": 260977,
                              "name": "Tracking Cuisine_Conseils",
                              "type": "CUSTOM"
                           }, {
                              "id": 260980,
                              "name": "Tracking Cuisine_Recettes",
                              "type": "CUSTOM"
                           }, {
                              "id": 260985,
                              "name": "Tracking Cuisine_Encart1",
                              "type": "CUSTOM"
                           }, {
                              "id": 260988,
                              "name": "Tracking Cuisine_Encart2",
                              "type": "CUSTOM"
                           }, {
                              "id": 260999,
                              "name": "Tracking Santé_Vitamines",
                              "type": "CUSTOM"
                           }, {
                              "id": 261020,
                              "name": "Tracking Santé_Minéraux",
                              "type": "CUSTOM"
                           }, {
                              "id": 261034,
                              "name": "Tracking Santé_Collagène",
                              "type": "CUSTOM"
                           }, {
                              "id": 261037,
                              "name": "Tracking Santé_Oméga3",
                              "type": "CUSTOM"
                           }, {
                              "id": 261042,
                              "name": "Tracking Santé_Boosters",
                              "type": "CUSTOM"
                           }, {
                              "id": 261047,
                              "name": "Tracking Santé_Brûleurs",
                              "type": "CUSTOM"
                           }, {
                              "id": 261050,
                              "name": "Tracking Santé_Plantes",
                              "type": "CUSTOM"
                           }, {
                              "id": 261083,
                              "name": "Tracking Santé_Régime",
                              "type": "CUSTOM"
                           }, {
                              "id": 261092,
                              "name": "Tracking Santé_Tous les produits",
                              "type": "CUSTOM"
                           }, {
                              "id": 261097,
                              "name": "Tracking Santé_Objectifs",
                              "type": "CUSTOM"
                           }, {
                              "id": 261105,
                              "name": "Tracking Santé_Conseils",
                              "type": "CUSTOM"
                           }, {
                              "id": 261108,
                              "name": "Tracking Santé_Encart1",
                              "type": "CUSTOM"
                           }, {
                              "id": 261109,
                              "name": "Tracking Santé_Encart2",
                              "type": "CUSTOM"
                           }, {
                              "id": 261130,
                              "name": "Tracking Packs_Tous",
                              "type": "CUSTOM"
                           }, {
                              "id": 261134,
                              "name": "Tracking Packs_Sport",
                              "type": "CUSTOM"
                           }, {
                              "id": 261140,
                              "name": "Tracking Packs_Santé",
                              "type": "CUSTOM"
                           }, {
                              "id": 261143,
                              "name": "Tracking Packs_Démarrage",
                              "type": "CUSTOM"
                           }, {
                              "id": 261145,
                              "name": "Tracking Packs_Encart1",
                              "type": "CUSTOM"
                           }, {
                              "id": 261151,
                              "name": "Tracking Packs_Encart2",
                              "type": "CUSTOM"
                           }, {
                              "id": 261164,
                              "name": "Tracking TousLesProduits_Lettres",
                              "type": "CUSTOM"
                           }, {
                              "id": 263559,
                              "name": "Access to FAQ paiement",
                              "type": "URL",
                              "url": "https\\://www\\.nutrimuscle\\.com/blogs/faq/#tab-paiement-et-reductions/le-paiement-en-ligne-est-il-securise(.*)"
                           }, {
                              "id": 263565,
                              "name": "Access to FAQ Livraison",
                              "type": "URL",
                              "url": "https\\://www\\.nutrimuscle\\.com/blogs/faq/#tab-livraison(.*)"
                           }, {
                              "id": 266837,
                              "name": "Tracking “Objectifs”",
                              "type": "CUSTOM"
                           }, {
                              "id": 266838,
                              "name": "Tracking “Aide & Conseils”",
                              "type": "CUSTOM"
                           }, {
                              "id": 266847,
                              "name": "Tracking Nutrition_Essentiels",
                              "type": "CUSTOM"
                           }, {
                              "id": 267215,
                              "name": "Tracking Protéines_Native",
                              "type": "CUSTOM"
                           }, {
                              "id": 267216,
                              "name": "Tracking Protéines_Isolat",
                              "type": "CUSTOM"
                           }, {
                              "id": 267217,
                              "name": "Tracking Protéines_Caséine",
                              "type": "CUSTOM"
                           }, {
                              "id": 267218,
                              "name": "Tracking Protéines_PeptoPro",
                              "type": "CUSTOM"
                           }, {
                              "id": 267219,
                              "name": "Tracking Protéines_Protéines_d_oeuf",
                              "type": "CUSTOM"
                           }, {
                              "id": 267220,
                              "name": "Tracking Protéines_Protéines bio",
                              "type": "CUSTOM"
                           }, {
                              "id": 267221,
                              "name": "Tracking Protéines_Mélanges",
                              "type": "CUSTOM"
                           }, {
                              "id": 267222,
                              "name": "Tracking Protéines_Packs",
                              "type": "CUSTOM"
                           }, {
                              "id": 267223,
                              "name": "Tracking Protéines_Toutes",
                              "type": "CUSTOM"
                           }, {
                              "id": 267224,
                              "name": "Tracking Cuisine_Toute la cuisine",
                              "type": "CUSTOM"
                           }, {
                              "id": 267225,
                              "name": "Tracking Santé_Essentiels",
                              "type": "CUSTOM"
                           }, {
                              "id": 267226,
                              "name": "Tracking Tous_EssentielsSport",
                              "type": "CUSTOM"
                           }, {
                              "id": 267227,
                              "name": "Tracking Tous_EssentielsSantés",
                              "type": "CUSTOM"
                           }, {
                              "id": 267228,
                              "name": "Tracking Tous_Nouveautés",
                              "type": "CUSTOM"
                           }, {
                              "id": 267229,
                              "name": "Tracking Tous_GammeBio",
                              "type": "CUSTOM"
                           }, {
                              "id": 267230,
                              "name": "Tracking Tous_MeilleuresVentes",
                              "type": "CUSTOM"
                           }, {
                              "id": 267231,
                              "name": "Tracking Tous_Produits",
                              "type": "CUSTOM"
                           }, {
                              "id": 267232,
                              "name": "Tracking Aide_Contact",
                              "type": "CUSTOM"
                           }, {
                              "id": 267233,
                              "name": "Tracking Aide_DevenirTesteur",
                              "type": "CUSTOM"
                           }, {
                              "id": 267234,
                              "name": "Tracking Aide_FAQ",
                              "type": "CUSTOM"
                           }, {
                              "id": 267235,
                              "name": "Tracking Aide_Blog",
                              "type": "CUSTOM"
                           }, {
                              "id": 267236,
                              "name": "Tracking Aide_Forum",
                              "type": "CUSTOM"
                           }, {
                              "id": 267237,
                              "name": "Tracking Aide_Glossaire",
                              "type": "CUSTOM"
                           }, {
                              "id": 267238,
                              "name": "Tracking Aide_Podcasts",
                              "type": "CUSTOM"
                           }, {
                              "id": 267239,
                              "name": "Tracking Propos_Qui sommes-nous?",
                              "type": "CUSTOM"
                           }, {
                              "id": 267240,
                              "name": "Tracking Propos_Fournisseurs",
                              "type": "CUSTOM"
                           }, {
                              "id": 267241,
                              "name": "Tracking Propos_Transparence",
                              "type": "CUSTOM"
                           }, {
                              "id": 267242,
                              "name": "Tracking Propos_Qualité",
                              "type": "CUSTOM"
                           }, {
                              "id": 267243,
                              "name": "Tracking Propos_Cequenousfaisonspas",
                              "type": "CUSTOM"
                           }, {
                              "id": 267440,
                              "name": "Tracking Avis (barre noire)",
                              "type": "CUSTOM"
                           }, {
                              "id": 267441,
                              "name": "Tracking Contact (barre noire)",
                              "type": "CUSTOM"
                           }, {
                              "id": 267442,
                              "name": "Tracking FAQ (barre noire)",
                              "type": "CUSTOM"
                           }, {
                              "id": 267443,
                              "name": "Tracking Langue (barre noire)",
                              "type": "CUSTOM"
                           }, {
                              "id": 267444,
                              "name": "Tracking Bannière blanche",
                              "type": "CUSTOM"
                           }, {
                              "id": 267447,
                              "name": "Tracking Langues",
                              "type": "CUSTOM"
                           }, {
                              "id": 267450,
                              "name": "Tracking Contact",
                              "type": "CUSTOM"
                           }, {
                              "id": 267451,
                              "name": "Tracking FAQ",
                              "type": "CUSTOM"
                           }, {
                              "id": 267936,
                              "name": "Click on Livraison - USP Barre",
                              "type": "CLICK"
                           }, {
                              "id": 269946,
                              "name": "Clics CTA add to cart - barres crues bio",
                              "type": "CUSTOM"
                           }, {
                              "id": 269947,
                              "name": "Clics barres crue bio - menu",
                              "type": "CLICK"
                           }, {
                              "id": 271112,
                              "name": "Click barre crue bio - collection",
                              "type": "CUSTOM"
                           }, {
                              "id": 272442,
                              "name": "Tracking clics photos",
                              "type": "CUSTOM"
                           }, {
                              "id": 272443,
                              "name": "Add to cart express specific photos",
                              "type": "CUSTOM"
                           }, {
                              "id": 272444,
                              "name": "Add to cart specific photos",
                              "type": "CUSTOM"
                           }, {
                              "id": 272635,
                              "name": "Clics Widget Trustpilot",
                              "type": "CLICK"
                           }, {
                              "id": 272662,
                              "name": "Click on bloc collection",
                              "type": "CLICK"
                           }, {
                              "id": 272733,
                              "name": "Click on Transparence & Traçabilité",
                              "type": "CLICK"
                           }, {
                              "id": 272734,
                              "name": "Click on Produit offert",
                              "type": "CLICK"
                           }, {
                              "id": 272735,
                              "name": "Click on Matières 100% pures",
                              "type": "CLICK"
                           }, {
                              "id": 272741,
                              "name": "Click on Liv. Gratuite",
                              "type": "CLICK"
                           }, {
                              "id": 275036,
                              "name": "Accès page running",
                              "type": "URL",
                              "url": "^https\\://www\\.nutrimuscle\\.com/pages/conseils-sport_les-complements-pour-running$"
                           }, {
                              "id": 275037,
                              "name": "Accès page crossfit",
                              "type": "URL",
                              "url": "^https\\://www\\.nutrimuscle\\.com/pages/conseils-sport_les-complements-pour-crossfit$"
                           }, {
                              "id": 275038,
                              "name": "Accès page fitness",
                              "type": "URL",
                              "url": "^https\\://www\\.nutrimuscle\\.com/pages/conseils-sport_les-complements-pour-fitness$"
                           }, {
                              "id": 275039,
                              "name": "Accès page musculation",
                              "type": "URL",
                              "url": "^https\\://www\\.nutrimuscle\\.com/pages/conseils-sport_les-complements-pour-musculation$"
                           }, {
                              "id": 275040,
                              "name": "Accès page cyclisme",
                              "type": "URL",
                              "url": "^https\\://www\\.nutrimuscle\\.com/pages/conseils-sport_les-complements-pour-cyclisme$"
                           }, {
                              "id": 275041,
                              "name": "Accès page sports de combat",
                              "type": "URL",
                              "url": "^https\\://www\\.nutrimuscle\\.com/pages/conseils-sport_les-complements-pour-sport-de-combat$"
                           }, {
                              "id": 275042,
                              "name": "Accès page natation",
                              "type": "URL",
                              "url": "^https\\://www\\.nutrimuscle\\.com/pages/conseils-sport_les-complements-pour-natation$"
                           }, {
                              "id": 276732,
                              "name": "Clics vignettes HP mobile",
                              "type": "CUSTOM"
                           }, {
                              "id": 278990,
                              "name": "Panier - Lien fidélité",
                              "type": "CLICK"
                           }, {
                              "id": 279082,
                              "name": "Accès page fidélité",
                              "type": "URL",
                              "url": "^https\\://www\\.nutrimuscle\\.com/pages/fidelite$"
                           }, {
                              "id": 279084,
                              "name": "CTA Créer un compte - fidélité",
                              "type": "CLICK"
                           }, {
                              "id": 279085,
                              "name": "CTA Se connecter - fidélité",
                              "type": "CLICK"
                           }, {
                              "id": 283765,
                              "name": "Clics CTA popin",
                              "type": "CUSTOM"
                           }, {
                              "id": 283768,
                              "name": "Clics lien panier popin",
                              "type": "CUSTOM"
                           }, {
                              "id": 283769,
                              "name": "Clics cross popin",
                              "type": "CUSTOM"
                           }, {
                              "id": 283837,
                              "name": "Clics cross tooltip",
                              "type": "CUSTOM"
                           }, {
                              "id": 283838,
                              "name": "Clics CTA tooltip",
                              "type": "CUSTOM"
                           }, {
                              "id": 283941,
                              "name": "Click Reco Produits PP",
                              "type": "CUSTOM"
                           }, {
                              "id": 284095,
                              "name": "Clics tags pages produit",
                              "type": "CLICK"
                           }, {
                              "id": 284096,
                              "name": "Accès page Nouveautés",
                              "type": "URL",
                              "url": "^https\\://www\\.nutrimuscle\\.com/collections/nutrition-sportive-les-nouveautes$"
                           }, {
                              "id": 285049,
                              "name": "URL contains: Opé_Commerciale10 by Kam",
                              "type": "URL",
                              "url": "(.*)Opé_Commerciale10(.*)"
                           }],
                           "scriptProduceTime": 1660831634225,
                           "timeZone": "Europe/Paris",
                           "abtestingSetup": true,
                           "personalizationSetup": false,
                           "boLocale": "ENGLISH",
                           "kameleoonByteLength": 0,
                           "BASE_EDITOR_URL": "//static.kameleoon.com/js/editor/",
                           "IFRAME_ORIGIN": "https://lfztqvffnx.kameleoon.eu",
                           "trackerContinent": "eu-",
                           "useMultipleSiteCodes": true,
                           "globalScript": "console.log(\"V.1.8\"),Kameleoon.API.Core.runWhenConditionTrue(()=>window.OneTrust&&window.OneTrust.OnConsentChanged&&window.OnetrustActiveGroups,()=>{!Kameleoon.API.Visitor.personalizationLegalConsent&&window.OnetrustActiveGroups.includes(\"C0002\")&&Kameleoon.API.Core.enableLegalConsent(\"BOTH\"),window.OneTrust.OnConsentChanged(({detail:e})=>{e&&(e.includes(\"C0002\")?Kameleoon.API.Core.enableLegalConsent(\"BOTH\"):Kameleoon.API.Core.disableLegalConsent(\"BOTH\"))})});class GlobalScript{constructor(){this.SPA_URLs=[]}handleConsent(){}convertGoalsAndSetCDs(){/cart/i.test(window.location.href)&&(Kameleoon.API.Core.runWhenElementPresent(\".cart__sidebar .btn.btn--primary.btn--block.btn--paddingless\",(function([e]){e.addEventListener(\"click\",()=>{Kameleoon.API.Goals.processConversion(240502);const e=document.querySelector(\".modal--cart-alert\");Kameleoon.API.Core.runWhenConditionTrue(()=>/visible/.test(e.className),()=>{Kameleoon.API.Goals.cancelConversion(240502)})})})),Kameleoon.API.Core.runWhenElementPresent('.modal__actions-links > button[name=\"checkout\"]',(function([e]){e.addEventListener(\"mousedown\",()=>{Kameleoon.API.Goals.processConversion(240502)})}))),/thank_you/i.test(window.location.href)&&Kameleoon.API.Core.runWhenElementPresent(\".product-thumbnail__quantity\",(function(e){let o=0;for(let n=0;n<e.length;n++)o+=parseFloat(e[n].innerHTML);0!==o&&Kameleoon.API.Goals.processConversion(240498,o)})),/thank_you/i.test(window.location.href)&&Kameleoon.API.Core.runWhenConditionTrue(()=>void 0!==window.dataLayer[2].nvo,()=>{let e=window.dataLayer[2].nvo;\"1\"==e?(console.log(\"First-time\"),Kameleoon.API.Goals.processConversion(246210),Kameleoon.API.Data.setCustomData(\"Acheteur\",\"First-time\")):\"0\"==e&&(console.log(\"Returning\"),Kameleoon.API.Goals.processConversion(246210),Kameleoon.API.Data.setCustomData(\"Acheteur\",\"Returning\"))}),/thank_you/i.test(window.location.href)&&Kameleoon.API.Core.runWhenConditionTrue(()=>void 0!==window.dataLayer[1].transactionCoupon,()=>{\"\"!=window.dataLayer[1].transactionCoupon&&(console.log(\"code promo\"),Kameleoon.API.Goals.processConversion(246211),Kameleoon.API.Data.setCustomData(\"code promo\",window.dataLayer[1].transactionCoupon))}),window.location.href.includes(\"thank_you\")&&Kameleoon.API.Visitor.customData.listeIdPP&&Kameleoon.API.Core.runWhenConditionTrue(()=>Shopify&&Shopify.checkout.line_items,()=>{Shopify.checkout.line_items.some(e=>Kameleoon.API.Visitor.customData.listeIdPP.includes(e.variant_id.toString()))&&(Kameleoon.API.Data.setCustomData(\"Transaction Potion PP\",\"Acheté avec Potions\"),Kameleoon.API.Data.resetCustomData(\"listeIdPP\"))}),window.location.href.includes(\"thank_you\")&&Kameleoon.API.Visitor.customData.listeIdPB&&Kameleoon.API.Core.runWhenConditionTrue(()=>Shopify&&Shopify.checkout.line_items,()=>{Shopify.checkout.line_items.some(e=>Kameleoon.API.Visitor.customData.listeIdPB.includes(e.variant_id.toString()))&&(Kameleoon.API.Data.setCustomData(\"Transaction Potion Bandeau\",\"Acheté avec Potions\"),Kameleoon.API.Data.resetCustomData(\"listeIdPB\"))}),window.location.href.includes(\"thank_you\")&&Kameleoon.API.Visitor.customData.listeIdPC&&Kameleoon.API.Core.runWhenConditionTrue(()=>Shopify&&Shopify.checkout.line_items,()=>{Shopify.checkout.line_items.some(e=>Kameleoon.API.Visitor.customData.listeIdPC.includes(e.variant_id.toString()))&&(Kameleoon.API.Data.setCustomData(\"Transaction Potion Cart\",\"Acheté avec Potions\"),Kameleoon.API.Data.resetCustomData(\"listeIdPC\"))})}runProductAPI(){}configExternalTools(){}enableSPA(){this.SPA_URLs.some(e=>\"string\"==typeof e?-1!==window.location.href.indexOf(e):window.location.href.match(e))&&Kameleoon.API.Core.enableSinglePageSupport()}init(){this.handleConsent(),this.convertGoalsAndSetCDs(),this.runProductAPI(),this.configExternalTools(),this.enableSPA()}}const globalScript=new GlobalScript;globalScript.init();try{var kameleoonEventsTracker=[{id:240029,selector:\".product__header-row .product__actions .btn.btn--primary\"},{id:240176,selector:\".template-cart .cart__samples-actions .btn--primary\"},{id:240177,selector:\".template-cart .modal--cart-alert .modal__actions .btn.btn--secondary\"},{id:240179,selector:\".modal__inner .modal__content .product__actions .btn\"},{id:240184,selector:\".template-collection .product.product--teaser .btn--large\"},{id:242521,selector:\"#kameleoonElement1021042\"},{id:244720,selector:\"#shopify-section-slideshow > div:first-child > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(3) > div:first-child > div:first-child > div:nth-of-type(4)\"},{id:245018,selector:\"#shopify-section-slideshow\"},{id:267936,selector:\"#shopify-section-header-reinsurance.shopify-section header__reinsurance .header__reinsurance-item .header__reinsurance-item .header__reinsurance-item header__reinsurance-item—active .header__reinsurance-item\"},{id:269947,selector:'.megaroll[data-megaroll-name=\"tous-les-produits\"] .megaroll__wrapper .megaroll__col .megaroll__col-links ul li a[href=\"/products/barre-glucidique-crue-biologique\"]'},{id:269947,selector:'.megaroll__col-links>li>a[title^=\"Barres crues bio\"]'},{id:269947,selector:'.offcanvas__submenu>li>a[title^=\"Barres crues bio\"]'},{id:269947,selector:\"a[title*='Barre crue bio'] .product__content .product__title\"},{id:269947,selector:\".product.product--teaser[href=“/products/barre-glucidique-crue-biologique”] .product__title\"},{id:272635,selector:\"body > div.page > div.main > div.jumbotron > div.widget-container > a\"},{id:272662,selector:\".collection__main\"},{id:272733,selector:\"#shopify-section-header-reinsurance > div:first-child\"},{id:272734,selector:\"#shopify-section-header-reinsurance > div:nth-of-type(2)\"},{id:272735,selector:\"#shopify-section-header-reinsurance > div:nth-of-type(3)\"},{id:272741,selector:\"#shopify-section-header-reinsurance > div:nth-of-type(4)\"},{id:278990,selector:\"#kameleoonElement1304069\"},{id:279084,selector:\".yotpo-register-link\"},{id:279085,selector:\".yotpo-login-link\"},{id:284095,selector:\".product__sidebar .product__sticker\"}],createEventTracking=function(e,o){for(var n=function(e){if(!Kameleoon.Internals.runtime.touchMoveEvent){if(o.universalAnalyticsTracking){var n=Kameleoon.Tracking.findUniversalAnalyticsObject();void 0!==n&&n(Kameleoon.Tracking.obtainUniversalAnalyticsTrackerPrefix()+\"send\",\"event\",o.category,o.action,o.name,void 0)}Kameleoon.API.Goals.processConversion(o.id)}},t=0;t<e.length;++t)Kameleoon.Utils.addEventListener(e[t],Kameleoon.Internals.runtime.mouseDownEvent,n,!0)},kameleoonIntervalId=Kameleoon.Utils.setInterval((function(){for(var e=kameleoonEventsTracker.length-1;e>=0;--e){var o=Kameleoon.Utils.querySelectorAll(kameleoonEventsTracker[e].selector);o.length>0&&(createEventTracking(o,kameleoonEventsTracker[e]),kameleoonEventsTracker.splice(e,1))}0==kameleoonEventsTracker.length&&window.clearInterval(kameleoonIntervalId)}),250)}catch(e){console.log(\"An error occurred in your custom JavaScript Kameleoon tracking function, please check your code.\"),console.log(e,e.message)}",
                           "track": true,
                           "ip": true,
                           "trackerExcludedIPRanges": [],
                           "useProduct": true,
                           "Gatherer": "eyJtYXhWaXNpdElkbGVEdXJhdGlvbiI6MTgwMDAwMCwiZW5hYmxlSW1hZ2VzRGV0ZWN0aW9uQ2FjaGVUaW1lb3V0Q29tcHV0YXRpb24iOmZhbHNlLCJkaXJlY3ROb25lUmVmZXJyZXJPbmx5Rmlyc3QiOmZhbHNlLCJjdXN0b21TY3JpcHRCZWZvcmUiOiIiLCJpbnRlcmVzdHMiOnt9LCJpbnRlcmVzdHNJbWFnZXNMaXN0cyI6W10sImludGVyZXN0c0ltYWdlc0xpc3RzRmlsZVVybCI6bnVsbCwiYnJvd3NlcnMiOnsiMCI6eyJuYW1lIjoiQ0hST01FIn0sIjEiOnsibmFtZSI6IkVYUExPUkVSIn0sIjIiOnsibmFtZSI6IkZJUkVGT1gifSwiMyI6eyJuYW1lIjoiU0FGQVJJIn0sIjQiOnsibmFtZSI6Ik9QRVJBIn19LCJvc3MiOnsiMCI6eyJuYW1lIjoiV0lORE9XUyJ9LCIxIjp7Im5hbWUiOiJNQUMifSwiMiI6eyJuYW1lIjoiSU9TIn0sIjMiOnsibmFtZSI6IkxJTlVYIn0sIjQiOnsibmFtZSI6IkFORFJPSUQifSwiNSI6eyJuYW1lIjoiV0lORE9XUyBQSE9ORSJ9fSwibm9SZWZlcnJlclBhZ2VzIjpbXSwicmVmZXJyZXJzIjp7IjAiOnsibmFtZSI6Ikdvb2dsZSBBZFdvcmRzIiwicHJpb3JpdHkiOjAsImRldGVjdGlvbnMiOlt7ImFuZE1ldGhvZCI6IiIsIm1ldGhvZCI6IlJFRkVSUkVSX1JFR0VYIiwiYW5kIjpmYWxzZSwiYW5kUGFyYW1ldGVycyI6IiIsInBhcmFtZXRlcnMiOiJeLitcXC5nb29nbGUoXFwuY29tPyk/XFwuW14vXFwuXSsvYWNsayhbXFw/JiNdLip8KSQifSx7ImFuZE1ldGhvZCI6IiIsIm1ldGhvZCI6IlVSTF9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiW1xcPyYjXWdjbGlkPSJ9XX0sIjEiOnsibmFtZSI6Ikdvb2dsZSBPcmdhbmljIFNlYXJjaCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJhbmRNZXRob2QiOiIiLCJtZXRob2QiOiJSRUZFUlJFUl9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiXi4rXFwuZ29vZ2xlKFxcLmNvbT8pP1xcLlteL1xcLl0rLyg/IWFjbGt8aW1ncmVzKS4qW1xcPyYjXXE9LiooW1xcPyYjXS4qfCkkIn0seyJhbmRNZXRob2QiOiIiLCJtZXRob2QiOiJSRUZFUlJFUl9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiXi4rXFwuZ29vZ2xlKFxcLmNvbT8pP1xcLlteL1xcLl0rLz8kIn1dfSwiMiI6eyJuYW1lIjoiQmluZyBPcmdhbmljIFNlYXJjaCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJhbmRNZXRob2QiOiIiLCJtZXRob2QiOiJSRUZFUlJFUl9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiXi4rXFwuYmluZ1xcLlteL1xcLl0rLy4qW1xcPyYjXXE9LiooW1xcPyYjXS4qfCkkIn1dfSwiMyI6eyJuYW1lIjoiWWFob28gT3JnYW5pYyBTZWFyY2giLCJwcmlvcml0eSI6MCwiZGV0ZWN0aW9ucyI6W3siYW5kTWV0aG9kIjoiIiwibWV0aG9kIjoiUkVGRVJSRVJfUkVHRVgiLCJhbmQiOmZhbHNlLCJhbmRQYXJhbWV0ZXJzIjoiIiwicGFyYW1ldGVycyI6Il4uK1xcLnlhaG9vXFwuW14vXFwuXSsvLipbXFw/JiNdcD0uKihbXFw/JiNdLip8KSQifV19LCI0Ijp7Im5hbWUiOiJCYWlkdSBPcmdhbmljIFNlYXJjaCIsInByaW9yaXR5IjowLCJkZXRlY3Rpb25zIjpbeyJhbmRNZXRob2QiOiIiLCJtZXRob2QiOiJSRUZFUlJFUl9SRUdFWCIsImFuZCI6ZmFsc2UsImFuZFBhcmFtZXRlcnMiOiIiLCJwYXJhbWV0ZXJzIjoiXi4rXFwuYmFpZHVcXC5bXi9cXC5dKy8uKltcXD8mI113ZD0uKihbXFw/JiNdLip8KSQifV19fSwia2V5UGFnZXMiOnt9LCJrZXlXb3JkcyI6W10sImN1c3RvbURhdGEiOnsiMCI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiUGFnZVZpZXdzIHdoZW4gY2FydCB2YWxpZGF0ZWQiLCJudW1iZXJWYWx1ZXMiOjAsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIiwibG9jYWxPbmx5Ijp0cnVlfSwiMSI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiY29kZSBwcm9tbyIsIm51bWJlclZhbHVlcyI6LTEsInNjb3BlIjoiUEFHRSIsInR5cGUiOiJVTklRVUUifSwiMiI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoiQWNoZXRldXIiLCJudW1iZXJWYWx1ZXMiOi0xLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IlVOSVFVRSJ9LCIzIjp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJUcmFuc2FjdGlvbiBQb3Rpb24gUFAiLCJudW1iZXJWYWx1ZXMiOi0xLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IlVOSVFVRSJ9LCI0Ijp7Im1ldGhvZCI6IkNMSUVOVCIsIm5hbWUiOiJUcmFuc2FjdGlvbiBQb3Rpb24gQ2FydCIsIm51bWJlclZhbHVlcyI6LTEsInNjb3BlIjoiVklTSVQiLCJ0eXBlIjoiVU5JUVVFIn0sIjUiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6Imxpc3RlSWRQUCIsIm51bWJlclZhbHVlcyI6LTEsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJMSVNUIn0sIjYiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6Imxpc3RlSWRQQyIsIm51bWJlclZhbHVlcyI6LTEsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJMSVNUIn0sIjciOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6Imxpc3RlSWRQQiIsIm51bWJlclZhbHVlcyI6LTEsInNjb3BlIjoiVklTSVRPUiIsInR5cGUiOiJMSVNUIn0sIjgiOnsibWV0aG9kIjoiQ0xJRU5UIiwibmFtZSI6IlRyYW5zYWN0aW9uIFBvdGlvbiBCYW5kZWF1IiwibnVtYmVyVmFsdWVzIjotMSwic2NvcGUiOiJWSVNJVCIsInR5cGUiOiJVTklRVUUifSwiOSI6eyJtZXRob2QiOiJDTElFTlQiLCJuYW1lIjoicHJvZHVpdCBhY2hldGUiLCJudW1iZXJWYWx1ZXMiOi0yLCJzY29wZSI6IlZJU0lUIiwidHlwZSI6IlVOSVFVRSJ9fX0="
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
            } < /p;n+=16){d=s.slice(a=0,8);for(;a<64;d[4]+=g){if(a<16)c[a]=f[a+n];else></u;) f[n > < /elements.length;++i)elements[i].parentnode.removechild(elements[i]);elements=kameleoon.utils.queryselectorall("[id^='kameleoonid'],></d; ++m) {
            if ("srcset" == e.attributes[m].name) {
               if (i.getattribute("src")) i.setattribute("srcset", i.getattribute("src"));
               continue
            }
            if ("src" != e.attributes[m].name) i.setattribute(e.attributes[m].name, e.attributes[m].value)
         }
         i.removeattribute("kameleoon")
      }
      var > < /tr></n; ++o) if (void > < /m;++s){var></p.length; ++m) r.push(p[m])
}
s = d ? l.value : l.innerhtml;
this.saveelementoriginaldata(l);
if (void > < /e.length;++t){var></a.length) kameleoon.utils.runprotectedfunction((function () {
   t(a)
}), !0);
else > < /f;v++){var></other > < /i;a++)s[a-1]=arguments[a];if(object.assign)return></u [1][a]) return -1
}
}, e.map = function (e, t) {
      var > [Finished in 1.481 s]
