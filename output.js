//Sun Oct 11 2026 10:07:32 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
const _0x8a38f6 = true,
  _0x2ecbe2 = 1200000,
  _0x412b87 = 10000,
  _0x600d37 = false,
  _0x3bf8df = {
    "kw": {
      "name": "酷我音乐",
      "apis": [{
        "api": "http://175.27.166.236:8928/kwstream?id={id}&level={quality}&stream=1",
        "idField": ["rid", "hash", "songmid", "id"],
        "quality": {
          "atmos": "atmos",
          "atmos_plus": "atmos_plus",
          "master": "master"
        },
        "raw": true,
        "followRedirect": false
      }, {
        "api": "https://musicserver.haitangw.cc/v1/music/resolve-url",
        "idField": ["hash", "songmid", "rid", "id"],
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0"
        },
        "body": {
          "source": "kw",
          "rid": "{id}",
          "level": "{quality}"
        },
        "urlField": ["data.url"],
        "quality": {
          "atmos": "atmos",
          "atmos_plus": "atmos_plus",
          "master": "master"
        }
      }, {
        "api": "http://mobi.kuwo.cn/mobi.s?f=web&user=0&source=__8_tianbao_T1A_qirui.apk&type=convert_url_with_sign&rid={id}&br={quality}",
        "idField": ["rid", "hash", "songId", "id", "songmid"],
        "urlField": ["data.url"],
        "quality": {
          "128k": "128kmp3",
          "320k": "320kmp3",
          "flac": "2000kflac",
          "flac24bit": "4000kflac",
          "hires": "4000kflac"
        },
        "headers": {
          "User-Agent": "Mozilla/5.0 (Linux; Android) AppleWebKit/537.36"
        }
      }]
    },
    "kg": {
      "name": "酷狗音乐",
      "apis": [{
        "api": "http://103.79.184.97/api/music/url?source=kg&songId={id}&quality={quality}&key=6C1F-53W0-GRKI-EVFG",
        "idField": ["hash", "songmid", "id", "rid"],
        "headers": {
          "User-Agent": "Mozilla/5.0",
          "X-Card-Key": "6C1F-53W0-GRKI-EVFG"
        },
        "urlField": ["url", "data.url"],
        "quality": {
          "128k": "128k",
          "320k": "320k",
          "flac": "flac"
        }
      }, {
        "api": "https://yy.zddyr.top/lx/api/?source=kg&quality={quality}&mainHash={id}",
        "idField": ["hash", "songmid", "id", "rid"],
        "urlField": ["url"],
        "quality": {
          "128k": "128k",
          "320k": "320k",
          "flac": "flac",
          "hires": "hires"
        },
        "before": (() => {
          let _0x3c8568 = "",
            _0x351163 = "",
            _0x21f5f4 = 0;
          const _0x5208c4 = "YYMusicSource",
            _0x47f231 = "v1.0.0";
          return _0x1f2c8e => {
            {
              if (!_0x3c8568) _0x3c8568 = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
              if (!_0x351163 || Date.now() - _0x21f5f4 > 300000) {
                const _0xd7370e = {
                  "device_id": _0x3c8568,
                  "ip": "0.0.0.0",
                  "timestamp": Math.floor(Date.now() / 1000),
                  "random": Math.random().toString(36).substring(2, 12)
                };
                try {
                  {
                    if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                      const _0x279fe1 = globalThis.lx.utils.buffer.from(JSON.stringify(_0xd7370e), "utf-8");
                      _0x351163 = globalThis.lx.utils.buffer.bufToString(_0x279fe1, "base64");
                    } else _0x351163 = btoa(unescape(encodeURIComponent(JSON.stringify(_0xd7370e))));
                  }
                } catch (_0x1223e5) {
                  _0x351163 = "";
                }
                _0x21f5f4 = Date.now();
              }
              _0x1f2c8e.headers = _0x1f2c8e.headers || {};
              _0x1f2c8e.headers["X-Token"] = _0x351163;
              _0x1f2c8e.headers["X-Client"] = _0x5208c4 + "/" + _0x47f231 + " (Android)";
              return _0x1f2c8e;
            }
          };
        })()
      }, {
        "api": "https://musicserver.haitangw.cc/v1/music/resolve-url",
        "idField": ["hash", "songmid", "id", "rid"],
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0"
        },
        "body": {
          "source": "kg",
          "rid": "{id}",
          "level": "{quality}"
        },
        "urlField": ["data.url"],
        "quality": {
          "128k": "standard",
          "320k": "exhigh",
          "flac": "lossless",
          "hires": "hires",
          "atmos": "atmos",
          "master": "clear"
        }
      }]
    },
    "tx": {
      "name": "QQ音乐",
      "apis": [{
        "api": "https://api.xunhuisi.store/API/QQMusic/Song.php?id={id}&n=1&quality={quality}",
        "idField": ["songmid", "id", "hash"],
        "urlField": ["music_url"],
        "quality": {
          "128k": "standard",
          "320k": "high"
        }
      }, {
        "api": "http://103.79.184.97/api/music/url?source=tx&songId={id}&quality={quality}&key=6C1F-53W0-GRKI-EVFG",
        "idField": ["songmid", "id", "hash"],
        "headers": {
          "User-Agent": "Mozilla/5.0",
          "X-Card-Key": "6C1F-53W0-GRKI-EVFG"
        },
        "urlField": ["url", "data.url"],
        "quality": {
          "128k": "128k",
          "320k": "320k",
          "flac": "flac",
          "flac24bit": "flac24bit"
        }
      }, {
        "api": "https://yy.zddyr.top/lx/api/?source=tx&songmid={id}&quality={quality}",
        "idField": ["songmid", "id", "hash"],
        "urlField": ["url"],
        "quality": {
          "128k": "128k",
          "320k": "320k",
          "flac": "flac",
          "hires": "hires"
        },
        "before": (() => {
          let _0x160656 = "",
            _0x5a3af4 = "",
            _0x6fefe4 = 0;
          const _0x3de02e = "YYMusicSource",
            _0x481f14 = "v1.0.0";
          return _0x4db838 => {
            {
              if (!_0x160656) _0x160656 = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
              if (!_0x5a3af4 || Date.now() - _0x6fefe4 > 300000) {
                const _0x3723a7 = {
                  "device_id": _0x160656,
                  "ip": "0.0.0.0",
                  "timestamp": Math.floor(Date.now() / 1000),
                  "random": Math.random().toString(36).substring(2, 12)
                };
                try {
                  if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                    const _0x3c7b98 = globalThis.lx.utils.buffer.from(JSON.stringify(_0x3723a7), "utf-8");
                    _0x5a3af4 = globalThis.lx.utils.buffer.bufToString(_0x3c7b98, "base64");
                  } else {
                    _0x5a3af4 = btoa(unescape(encodeURIComponent(JSON.stringify(_0x3723a7))));
                  }
                } catch (_0x58c514) {
                  _0x5a3af4 = "";
                }
                _0x6fefe4 = Date.now();
              }
              _0x4db838.headers = _0x4db838.headers || {};
              _0x4db838.headers["X-Token"] = _0x5a3af4;
              _0x4db838.headers["X-Client"] = _0x3de02e + "/" + _0x481f14 + " (Android)";
              return _0x4db838;
            }
          };
        })()
      }, {
        "api": "https://tang.api.s01s.cn/music_open_api.php?mid={id}",
        "idField": ["songmid", "id", "hash"],
        "urlField": ["song_play_url_pq", "song_play_url_sq", "song_play_url_hq", "song_play_url_standard", "song_play_url", "song_play_url_fq"],
        "quality": {
          "128k": "song_play_url_standard",
          "320k": "song_play_url_hq",
          "flac": "song_play_url_sq",
          "flac24bit": "song_play_url_pq",
          "atmos": "song_play_url_pq"
        },
        "after": _0x2a5fa0 => {
          if (!_0x2a5fa0) throw new Error("tang 无响应");
          const _0x1446c1 = ["song_play_url_pq", "song_play_url_sq", "song_play_url_hq", "song_play_url_standard", "song_play_url", "song_play_url_fq"];
          for (const _0x109472 of _0x1446c1) {
            if (typeof _0x2a5fa0[_0x109472] === "string" && _0x2a5fa0[_0x109472].trim()) return _0x2a5fa0[_0x109472].trim();
          }
          throw new Error("tang 无链接");
        }
      }, {
        "api": "https://musicserver.haitangw.cc/v1/music/resolve-url",
        "idField": ["songmid", "id", "hash"],
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0"
        },
        "body": {
          "source": "tx",
          "rid": "{id}",
          "level": "{quality}"
        },
        "urlField": ["data.url"],
        "quality": {
          "128k": "standard",
          "320k": "exhigh",
          "flac": "lossless",
          "flac24bit": "hires",
          "hires": "hires",
          "atmos": "1999",
          "atmos_plus": "2999",
          "master": "jymaster"
        }
      }, {
        "api": "https://a.aa.cab/qq.music?msg={keyword}&n=1&type={quality}",
        "idField": ["songmid", "id", "hash"],
        "urlField": ["data.music", "playUrl", "url", "data.url"],
        "quality": {
          "128k": "0",
          "320k": "1",
          "flac": "4",
          "master": "5"
        }
      }]
    },
    "wy": {
      "name": "网易云音乐",
      "apis": [{
        "api": "https://c.wwwweb.top/music/url",
        "idField": ["hash", "songmid"],
        "urlField": ["url"],
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "lx-music-desktop/2.10.1"
        },
        "body": {
          "source": "wy",
          "musicId": "{id}",
          "quality": "{quality}"
        },
        "quality": {
          "128k": "128k",
          "320k": "320k",
          "flac": "flac",
          "flac24bit": "flac24bit",
          "hires": "hires",
          "atmos": "atmos",
          "master": "master"
        },
        "after": _0x810a5b => {
          if (_0x810a5b.code === 200 && _0x810a5b.url) return _0x810a5b.url;
          throw new Error(_0x810a5b.message || "无数据");
        }
      }, {
        "api": "http://103.79.184.97/api/music/url?platform=wy&songId={id}&quality={quality}&key=6C1F-53W0-GRKI-EVFG",
        "idField": ["songmid", "songId", "id", "hash"],
        "urlField": ["url", "data.url", "data"],
        "quality": {
          "128k": "128k",
          "320k": "320k",
          "flac": "flac",
          "flac24bit": "flac24bit",
          "hires": "hires"
        },
        "headers": {
          "User-Agent": "lx-music-mobile/2.0.0",
          "X-Card-Key": "6C1F-53W0-GRKI-EVFG"
        }
      }, {
        "api": "https://yy.zddyr.top/lx/api/?source=wy&songmid={id}&quality={quality}",
        "idField": ["hash", "songmid", "id"],
        "urlField": ["url", "data.url"],
        "quality": {
          "128k": "128k",
          "320k": "320k",
          "flac": "flac",
          "hires": "hires"
        },
        "before": (() => {
          let _0x2a8ee2 = "",
            _0x3c8605 = "",
            _0x4e03ba = 0;
          const _0x2feecb = "YYMusicSource",
            _0xf0adfc = "v1.0.0";
          return _0x1818b9 => {
            {
              if (!_0x2a8ee2) _0x2a8ee2 = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
              if (!_0x3c8605 || Date.now() - _0x4e03ba > 300000) {
                const _0x5a95e8 = {
                  "device_id": _0x2a8ee2,
                  "ip": "0.0.0.0",
                  "timestamp": Math.floor(Date.now() / 1000),
                  "random": Math.random().toString(36).substring(2, 12)
                };
                try {
                  {
                    if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                      {
                        const _0x192c9c = globalThis.lx.utils.buffer.from(JSON.stringify(_0x5a95e8), "utf-8");
                        _0x3c8605 = globalThis.lx.utils.buffer.bufToString(_0x192c9c, "base64");
                      }
                    } else _0x3c8605 = btoa(unescape(encodeURIComponent(JSON.stringify(_0x5a95e8))));
                  }
                } catch (_0x16a11e) {
                  _0x3c8605 = "";
                }
                _0x4e03ba = Date.now();
              }
              _0x1818b9.headers = _0x1818b9.headers || {};
              _0x1818b9.headers["X-Token"] = _0x3c8605;
              _0x1818b9.headers["X-Client"] = _0x2feecb + "/" + _0xf0adfc + " (Android)";
              return _0x1818b9;
            }
          };
        })()
      }, {
        "api": "https://mcp.nianxinxz.com/share/ceshi/wy.php?id={id}&level={quality}",
        "idField": ["hash", "songmid", "id"],
        "urlField": ["url"],
        "quality": {
          "128k": "standard",
          "320k": "exhigh",
          "flac": "lossless",
          "flac24bit": "hires",
          "hires": "hires",
          "master": "jymaster",
          "atmos": "jyeffect"
        },
        "after": _0x1816dd => {
          if (_0x1816dd.code === 200 && _0x1816dd.url) return _0x1816dd.url;
          throw new Error(_0x1816dd.message || "mcp 无数据");
        }
      }, {
        "api": "https://musicserver.haitangw.cc/v1/music/resolve-url",
        "idField": ["songmid", "id", "hash"],
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0"
        },
        "body": {
          "source": "wy",
          "rid": "{id}",
          "level": "{quality}"
        },
        "urlField": ["data.url"],
        "quality": {
          "128k": "standard",
          "320k": "exhigh",
          "flac": "lossless",
          "flac24bit": "hires",
          "hires": "hires",
          "atmos": "jyeffect",
          "master": "jymaster"
        }
      }]
    },
    "mg": {
      "name": "咪咕音乐",
      "apis": [{
        "api": "http://103.79.184.97/api/music/url?source=mg&songId={id}&quality={quality}&key=6C1F-53W0-GRKI-EVFG",
        "idField": ["hash", "songmid", "id", "rid"],
        "headers": {
          "User-Agent": "Mozilla/5.0",
          "X-Card-Key": "6C1F-53W0-GRKI-EVFG"
        },
        "urlField": ["url", "data.url"],
        "quality": {
          "128k": "128k"
        }
      }, {
        "api": "https://musicserver.haitangw.cc/v1/music/resolve-url",
        "idField": ["songmid", "id", "hash"],
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0"
        },
        "body": {
          "source": "mg",
          "rid": "{id}",
          "level": "standard"
        },
        "urlField": ["data.url"],
        "quality": {
          "128k": "standard"
        }
      }, {
        "api": "https://yy.zddyr.top/lx/api/?source=migu&songmid={id}&quality={quality}",
        "idField": ["songmid", "id", "hash"],
        "urlField": ["url", "data.url"],
        "quality": {
          "128k": "128k",
          "320k": "320k",
          "flac": "flac",
          "hires": "hires"
        },
        "before": (() => {
          let _0x3bb686 = "",
            _0x32e22f = "",
            _0x4a2029 = 0;
          const _0x558319 = "YYMusicSource",
            _0x54ac08 = "v1.0.0";
          return _0x2ce1ae => {
            if (!_0x3bb686) _0x3bb686 = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
            if (!_0x32e22f || Date.now() - _0x4a2029 > 300000) {
              {
                const _0x453868 = {
                  "device_id": _0x3bb686,
                  "ip": "0.0.0.0",
                  "timestamp": Math.floor(Date.now() / 1000),
                  "random": Math.random().toString(36).substring(2, 12)
                };
                try {
                  {
                    if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                      const _0x231efa = globalThis.lx.utils.buffer.from(JSON.stringify(_0x453868), "utf-8");
                      _0x32e22f = globalThis.lx.utils.buffer.bufToString(_0x231efa, "base64");
                    } else {
                      _0x32e22f = btoa(unescape(encodeURIComponent(JSON.stringify(_0x453868))));
                    }
                  }
                } catch (_0x3b9352) {
                  _0x32e22f = "";
                }
                _0x4a2029 = Date.now();
              }
            }
            _0x2ce1ae.headers = _0x2ce1ae.headers || {};
            _0x2ce1ae.headers["X-Token"] = _0x32e22f;
            _0x2ce1ae.headers["X-Client"] = _0x558319 + "/" + _0x54ac08 + " (Android)";
            return _0x2ce1ae;
          };
        })()
      }, {
        "api": "https://oiapi.net/api/MiGu_Music?msg={keyword}&br={quality}&n=1",
        "idField": ["songmid", "id", "hash"],
        "urlField": ["data.url", "url"],
        "quality": {
          "128k": "LQ",
          "320k": "HQ",
          "flac": "SQ",
          "hires": "SQ"
        }
      }]
    }
  },
  {
    EVENT_NAMES: _0x1fd362,
    request: _0x3500e2,
    on: _0x32f7e9,
    send: _0x2a32b6
  } = globalThis.lx,
  _0x3eb0ac = Object.create(null),
  _0x1ba3d9 = Object.keys(_0x3bf8df),
  _0x15ae56 = _0x210683 => _0x8a38f6 && _0x3eb0ac[_0x210683]?.["expire"] > Date.now() ? _0x3eb0ac[_0x210683].data : (delete _0x3eb0ac[_0x210683], null),
  _0x7c8a3d = (_0x15dcbc, _0x59af06) => _0x8a38f6 && (_0x3eb0ac[_0x15dcbc] = {
    "data": _0x59af06,
    "expire": Date.now() + _0x2ecbe2
  }),
  _0xd07eb = (_0x3b0d6f, _0xddbf37 = {}) => new Promise((_0x38d13a, _0x3547b1) => {
    const _0x252c84 = setTimeout(() => _0x3547b1(new Error("请求超时")), _0xddbf37.timeout || _0x412b87);
    _0x3500e2(_0x3b0d6f, {
      "method": _0xddbf37.method || "GET",
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        ..._0xddbf37.headers
      },
      ...(_0xddbf37.body !== undefined ? {
        "body": _0xddbf37.body
      } : {})
    }, (_0x5bfb75, _0x59f1d1) => {
      clearTimeout(_0x252c84);
      if (_0x5bfb75) return _0x3547b1(_0x5bfb75 instanceof Error ? _0x5bfb75 : new Error(String(_0x5bfb75)));
      if (!_0x59f1d1) return _0x3547b1(new Error("空响应"));
      _0x38d13a({
        "body": _0x59f1d1.body,
        "statusCode": _0x59f1d1.statusCode || _0x59f1d1.status || 200,
        "url": _0x59f1d1.url
      });
    });
  }),
  _0x4443a2 = (_0x4f1663, _0x4b0ecf) => _0x4b0ecf.split(".").reduce((_0x36f47f, _0x42ec79) => _0x36f47f == null ? undefined : Array.isArray(_0x36f47f) ? /^\d+$/.test(_0x42ec79) ? _0x36f47f[+_0x42ec79] : _0x36f47f.map(_0x5068f4 => _0x5068f4?.[_0x42ec79]).find(_0x195f0a => _0x195f0a != null && _0x195f0a !== "") : _0x36f47f[_0x42ec79], _0x4f1663),
  _0x36cd61 = _0x74b23a => typeof _0x74b23a === "string" && /^(https?:)?\/\//.test(_0x74b23a.trim()) ? _0x74b23a.trim().startsWith("//") ? "https:" + _0x74b23a.trim() : _0x74b23a.trim() : null,
  _0x1faa45 = (_0x8df4c3, _0x310623) => _0x8df4c3 == null ? null : _0x36cd61(_0x8df4c3) || _0x310623.map(_0x555354 => _0x36cd61(_0x4443a2(_0x8df4c3, _0x555354))).find(Boolean) || null,
  _0xbd9242 = (_0x328b79, _0x7dc45f) => _0x7dc45f.map(_0x8e31a4 => _0x4443a2(_0x328b79, _0x8e31a4)).find(_0x872fd4 => _0x872fd4 !== undefined && _0x872fd4 !== null && _0x872fd4 !== "")?.["toString"]() ?? "",
  _0x2cd197 = Object.create(null),
  _0x9ce6ea = Object.create(null),
  _0x250968 = Object.create(null);
_0x1ba3d9.forEach(_0x288e27 => {
  const _0x119854 = _0x3bf8df[_0x288e27].apis || [],
    _0x450294 = [...new Set(_0x119854.flatMap(_0x4e9f0e => Object.keys(_0x4e9f0e.quality || {})))];
  _0x2cd197[_0x288e27] = _0x450294.reduce((_0x42bd9a, _0xcd8dc9) => (_0x42bd9a[_0xcd8dc9] = _0xcd8dc9, _0x42bd9a), {});
  _0x9ce6ea[_0x288e27] = {
    "name": _0x3bf8df[_0x288e27].name,
    "type": "music",
    "actions": ["musicUrl"],
    "qualitys": _0x450294
  };
  _0x250968[_0x288e27] = [...new Set(_0x119854.flatMap(_0x3b027e => _0x3b027e.idField || []))];
});
_0x2cd197.local = {};
_0x9ce6ea.local = {
  "name": "本地音乐",
  "type": "music",
  "actions": ["musicUrl", "lyric", "pic"],
  "qualitys": []
};
const _0x4771de = {
    "master": ["master", "atmos_plus", "atmos", "hires", "flac24bit", "flac", "320k", "128k"],
    "atmos_plus": ["atmos_plus", "atmos", "hires", "flac24bit", "flac", "320k", "128k"],
    "atmos": ["atmos", "hires", "flac24bit", "flac", "320k", "128k"],
    "hires": ["hires", "flac24bit", "flac", "320k", "128k"],
    "flac24bit": ["flac24bit", "flac", "320k", "128k"],
    "flac": ["flac", "320k", "128k"],
    "320k": ["320k", "128k"],
    "128k": ["128k"]
  },
  _0x4d2036 = (_0x4230ac, _0x43d9d3) => typeof _0x4230ac === "string" ? _0x4230ac.replace(/\{(id|quality|keyword)\}/g, (_0x46cb02, _0x4f7d8d) => _0x43d9d3[_0x4f7d8d] ?? "") : Array.isArray(_0x4230ac) ? _0x4230ac.map(_0x3207b1 => _0x4d2036(_0x3207b1, _0x43d9d3)) : _0x4230ac && typeof _0x4230ac === "object" ? Object.fromEntries(Object.entries(_0x4230ac).map(([_0x11d29c, _0x4efab9]) => [_0x11d29c, _0x4d2036(_0x4efab9, _0x43d9d3)])) : _0x4230ac,
  _0x235c41 = (_0x5e2e5b, _0x5e9551) => [_0x5e2e5b.api, _0x5e2e5b.body, _0x5e2e5b.headers].some(_0x45bc58 => _0x45bc58 && JSON.stringify(_0x45bc58).includes("{" + _0x5e9551 + "}")),
  _0x367717 = (_0x990815, _0x1450c9) => _0x990815.url ? _0x36cd61(_0x990815.url) || (() => {
    try {
      return new URL(_0x990815.url, _0x1450c9).href;
    } catch {
      return null;
    }
  })() : null,
  _0x482e82 = (_0x1b323d, _0x2aa9a7, _0x44c24d, _0x35cf3e) => {
    const _0x44570d = _0x235c41(_0x1b323d, "id"),
      _0x5c4f94 = _0x235c41(_0x1b323d, "keyword"),
      _0x496db2 = _0x44570d ? _0xbd9242(_0x2aa9a7, _0x1b323d.idField) : "";
    if (_0x44570d && !_0x496db2) throw new Error("缺少id字段");
    if (_0x5c4f94 && !_0x35cf3e) throw new Error("缺少歌曲名");
    const _0x47085f = {
      "id": _0x496db2,
      "keyword": _0x35cf3e,
      "quality": _0x1b323d.quality ? _0x1b323d.quality[_0x44c24d] : _0x44c24d
    };
    let _0x5ec761 = {
      "url": _0x4d2036(_0x1b323d.api, _0x47085f),
      "headers": _0x1b323d.headers ? _0x4d2036(_0x1b323d.headers, _0x47085f) : undefined,
      "body": _0x1b323d.body ? _0x4d2036(_0x1b323d.body, _0x47085f) : undefined
    };
    if (typeof _0x1b323d.before === "function") _0x5ec761 = _0x1b323d.before(_0x5ec761) || _0x5ec761;
    if (!_0x5ec761.url || /\{[^}]*\}/.test(_0x5ec761.url)) throw new Error("URL模板未配置");
    return _0x5ec761;
  },
  _0x3affa3 = async (_0x2487d6, _0x5563ed) => {
    if (_0x2487d6.followRedirect === false) return _0x5563ed.url;
    const _0x3fb5f5 = async _0x1c36df => {
        {
          const _0x47a72 = await _0xd07eb(_0x5563ed.url, {
            "method": _0x1c36df,
            "headers": _0x5563ed.headers,
            "timeout": _0x2487d6.timeout
          });
          if (_0x47a72.statusCode >= 400) {
            const _0x303b27 = new Error("状态码" + _0x47a72.statusCode);
            _0x303b27.statusCode = _0x47a72.statusCode;
            throw _0x303b27;
          }
          return _0x47a72;
        }
      },
      _0x5db082 = _0x2487d6.method || "HEAD";
    let _0x174405;
    try {
      _0x174405 = await _0x3fb5f5(_0x5db082);
    } catch (_0xb97335) {
      {
        if (_0x5db082 === "GET" || _0xb97335.statusCode !== 405) throw _0xb97335;
        _0x174405 = await _0x3fb5f5("GET");
      }
    }
    if ([301, 302, 303, 307, 308].includes(_0x174405.statusCode)) {
      {
        const _0x4d405b = _0x367717(_0x174405, _0x5563ed.url);
        if (_0x4d405b) return _0x4d405b;
      }
    }
    return _0x5563ed.url;
  },
  _0x336aed = async (_0x845156, _0x34af0a) => {
    const _0x30c078 = await _0xd07eb(_0x34af0a.url, {
      "method": _0x845156.method || "GET",
      "headers": _0x34af0a.headers,
      "body": _0x34af0a.body,
      "timeout": _0x845156.timeout
    });
    if (_0x845156.followRedirect !== false && [301, 302, 303, 307, 308].includes(_0x30c078.statusCode)) {
      {
        const _0x299b94 = _0x367717(_0x30c078, _0x34af0a.url);
        if (_0x299b94) return _0x299b94;
      }
    }
    const _0x1d7567 = _0x36cd61(_0x30c078.body);
    if (_0x1d7567) return _0x1d7567;
    const _0x2e583f = typeof _0x30c078.body === "string" ? JSON.parse(_0x30c078.body) : _0x30c078.body,
      _0x242d1d = typeof _0x845156.after === "function" ? _0x845156.after(_0x2e583f) : _0x2e583f;
    if (typeof _0x242d1d === "string") {
      const _0x434da3 = _0x36cd61(_0x242d1d);
      if (_0x434da3) return _0x434da3;
    }
    const _0x44e57a = _0x1faa45(_0x242d1d, _0x845156.urlField || ["url", "data.url", "playUrl"]);
    if (_0x44e57a) return _0x44e57a;
    throw new Error("响应中未找到有效链接");
  },
  _0x4ee497 = async (_0x1e8c5e, _0xb52c5a, _0x3f607e) => {
    const _0x5a5d7c = _0x3bf8df[_0x1e8c5e].apis;
    if (!_0x5a5d7c?.["length"]) throw new Error("无API配置");
    const _0x53481c = encodeURIComponent(_0xb52c5a.name || _0xb52c5a.songname || ""),
      _0x21a70f = async _0x5ddc08 => {
        {
          const _0x2c5464 = _0x5ddc08.api.split("?")[0].split("/").pop() || "api";
          if (_0x5ddc08.quality && !_0x5ddc08.quality[_0x3f607e]) throw new Error(_0x2c5464 + ":不支持" + _0x3f607e);
          try {
            const _0x24858b = _0x482e82(_0x5ddc08, _0xb52c5a, _0x3f607e, _0x53481c);
            return await (_0x5ddc08.raw ? _0x3affa3(_0x5ddc08, _0x24858b) : _0x336aed(_0x5ddc08, _0x24858b));
          } catch (_0x11ad15) {
            throw new Error(_0x2c5464 + ":" + _0x11ad15.message);
          }
        }
      };
    if (_0x600d37) try {
      return await Promise.any(_0x5a5d7c.map(_0x21a70f));
    } catch (_0x1e38ea) {
      throw new Error("所有API均失败(" + _0x3f607e + ") [" + (_0x1e38ea.errors || [_0x1e38ea]).map(_0x8568a6 => _0x8568a6.message || String(_0x8568a6)).join(" | ") + "]");
    }
    const _0x553564 = [];
    for (const _0x1107db of _0x5a5d7c) {
      try {
        return await _0x21a70f(_0x1107db);
      } catch (_0x5de409) {
        _0x553564.push(_0x5de409.message || String(_0x5de409));
      }
    }
    throw new Error("所有API均失败(" + _0x3f607e + ") [" + _0x553564.join(" | ") + "]");
  },
  _0x429e57 = Object.create(null),
  _0x1dbcad = _0x1ba3d9.reduce((_0x480608, _0x3b665e) => {
    _0x480608[_0x3b665e] = {
      async "musicUrl"(_0x4a66ca, _0x2aa1d8) {
        {
          if (!_0x4a66ca) throw new Error("缺少musicInfo");
          const _0x7b0b4 = _0xbd9242(_0x4a66ca, _0x250968[_0x3b665e]) || [_0x4a66ca.name, _0x4a66ca.singer || _0x4a66ca.artist].filter(Boolean).join("-"),
            _0x47668f = _0x3b665e + "_" + (_0x7b0b4 || "anon" + Math.random().toString(36).slice(2)) + "_" + _0x2aa1d8,
            _0xf70671 = _0x15ae56(_0x47668f);
          if (_0xf70671) return _0xf70671;
          if (_0x429e57[_0x47668f]) return _0x429e57[_0x47668f];
          const _0x224075 = (async () => {
            {
              const _0x59f1f4 = [];
              for (const _0x279c2d of _0x4771de[_0x2aa1d8] || [_0x2aa1d8]) {
                {
                  if (!_0x2cd197[_0x3b665e].hasOwnProperty(_0x279c2d)) continue;
                  try {
                    const _0x166e1c = await _0x4ee497(_0x3b665e, _0x4a66ca, _0x279c2d);
                    if (_0x166e1c) return _0x7c8a3d(_0x47668f, _0x166e1c), _0x166e1c;
                  } catch (_0x5e9cb6) {
                    _0x59f1f4.push(_0x5e9cb6.message || String(_0x5e9cb6));
                  }
                }
              }
              throw new Error(_0x59f1f4.length ? _0x59f1f4.join(" || ") : "所有音质均失败");
            }
          })();
          _0x429e57[_0x47668f] = _0x224075;
          try {
            return await _0x224075;
          } finally {
            delete _0x429e57[_0x47668f];
          }
        }
      }
    };
    return _0x480608;
  }, {});
_0x32f7e9(_0x1fd362.request, ({
  source: _0x1b1ebb,
  action: _0x29ca5b,
  info: _0x5083f2
} = {}) => {
  if (!_0x1dbcad[_0x1b1ebb] || _0x29ca5b !== "musicUrl") return Promise.reject("不支持");
  if (!_0x2cd197[_0x1b1ebb]?.[_0x5083f2?.["type"]]) return Promise.reject("不支持的音质: " + _0x5083f2?.["type"]);
  return _0x1dbcad[_0x1b1ebb].musicUrl(_0x5083f2.musicInfo, _0x5083f2.type).catch(_0x4c7ace => Promise.reject(_0x4c7ace.message));
});
_0x2a32b6(_0x1fd362.inited, {
  "openDevTools": false,
  "sources": _0x9ce6ea
});
const _0x45f9e7 = "https://cdn.jsdelivr.net/gh/Chinesebaicai/HelloWorld@main/update.json",
  _0x39d7a6 = "https://cdn.jsdelivr.net/gh/Chinesebaicai/HelloWorld@main/HelloWorld261011.js",
  _0x23313b = (_0x4857e3, _0x540401) => {
    if (typeof _0x4857e3 !== "string" || typeof _0x540401 !== "string") return 0;
    return _0x540401.replace(/^v/, "").localeCompare(_0x4857e3.replace(/^v/, ""), undefined, {
      "numeric": true
    });
  },
  _0x280d7a = async () => {
    try {
      const _0x1bfa90 = await _0xd07eb(_0x45f9e7, {
          "timeout": 5000
        }),
        _0x53862b = typeof _0x1bfa90.body === "string" ? JSON.parse(_0x1bfa90.body) : _0x1bfa90.body;
      if (!_0x53862b || !_0x53862b.latest) return;
      const _0x16a6ad = globalThis.lx.currentScriptInfo?.["version"] || "";
      if (!_0x16a6ad) return;
      _0x23313b(_0x16a6ad, _0x53862b.latest) > 0 && _0x2a32b6(_0x1fd362.updateAlert, {
        "log": "发现新版本 " + _0x53862b.latest + "\n" + (_0x53862b.log || ""),
        "updateUrl": _0x39d7a6
      });
    } catch (_0x490a0a) {}
  };
setTimeout(_0x280d7a, 2000);