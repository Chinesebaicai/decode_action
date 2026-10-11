//Sun Oct 11 2026 10:03:37 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {})();
const ENABLE_CACHE = true;
const CACHE_TTL = 1200000;
const TIMEOUT = 10000;
const CONFIG = {
  kw: {
    name: "酷我音乐",
    apis: [{
      api: "http://175.27.166.236:8928/kwstream?id={id}&level={quality}&stream=1",
      idField: ["rid", "hash", "songmid", "id"],
      quality: {
        atmos: "atmos",
        atmos_plus: "atmos_plus",
        master: "master"
      },
      raw: true,
      followRedirect: false
    }, {
      api: "https://musicserver.haitangw.cc/v1/music/resolve-url",
      idField: ["hash", "songmid", "rid", "id"],
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
      },
      body: {
        source: "kw",
        rid: "{id}",
        level: "{quality}"
      },
      urlField: ["data.url"],
      quality: {
        atmos: "atmos",
        atmos_plus: "atmos_plus",
        master: "master"
      }
    }, {
      api: "http://mobi.kuwo.cn/mobi.s?f=web&user=0&source=__8_tianbao_T1A_qirui.apk&type=convert_url_with_sign&rid={id}&br={quality}",
      idField: ["rid", "hash", "songId", "id", "songmid"],
      urlField: ["data.url"],
      quality: {
        "128k": "128kmp3",
        "320k": "320kmp3",
        flac: "2000kflac",
        flac24bit: "4000kflac",
        hires: "4000kflac"
      },
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; Android) AppleWebKit/537.36"
      }
    }]
  },
  kg: {
    name: "酷狗音乐",
    apis: [{
      api: "http://103.79.184.97/api/music/url?source=kg&songId={id}&quality={quality}&key=6C1F-53W0-GRKI-EVFG",
      idField: ["hash", "songmid", "id", "rid"],
      headers: {
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": "6C1F-53W0-GRKI-EVFG"
      },
      urlField: ["url", "data.url"],
      quality: {
        "128k": "128k",
        "320k": "320k",
        flac: "flac"
      }
    }, {
      api: "https://yy.zddyr.top/lx/api/?source=kg&quality={quality}&mainHash={id}",
      idField: ["hash", "songmid", "id", "rid"],
      urlField: ["url"],
      quality: {
        "128k": "128k",
        "320k": "320k",
        flac: "flac",
        hires: "hires"
      },
      before: (() => {
        let _0x5e8a19 = "";
        let _0x380328 = "";
        let _0xd3844f = 0;
        const _0x475094 = "YYMusicSource";
        const _0x2c5e24 = "v1.0.0";
        return _0x3e1a62 => {
          if (!_0x5e8a19) {
            _0x5e8a19 = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
          }
          if (!_0x380328 || Date.now() - _0xd3844f > 300000) {
            const _0x25cf8e = {
              device_id: _0x5e8a19,
              ip: "0.0.0.0",
              timestamp: Math.floor(Date.now() / 1000),
              random: Math.random().toString(36).substring(2, 12)
            };
            try {
              if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                const _0x430015 = globalThis.lx.utils.buffer.from(JSON.stringify(_0x25cf8e), "utf-8");
                _0x380328 = globalThis.lx.utils.buffer.bufToString(_0x430015, "base64");
              } else {
                _0x380328 = btoa(unescape(encodeURIComponent(JSON.stringify(_0x25cf8e))));
              }
            } catch (_0x1cb876) {
              _0x380328 = "";
            }
            _0xd3844f = Date.now();
          }
          _0x3e1a62.headers = _0x3e1a62.headers || {};
          _0x3e1a62.headers["X-Token"] = _0x380328;
          _0x3e1a62.headers["X-Client"] = _0x475094 + "/" + _0x2c5e24 + " (Android)";
          return _0x3e1a62;
        };
      })()
    }, {
      api: "https://musicserver.haitangw.cc/v1/music/resolve-url",
      idField: ["hash", "songmid", "id", "rid"],
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
      },
      body: {
        source: "kg",
        rid: "{id}",
        level: "{quality}"
      },
      urlField: ["data.url"],
      quality: {
        "128k": "standard",
        "320k": "exhigh",
        flac: "lossless",
        hires: "hires",
        atmos: "atmos",
        master: "clear"
      }
    }]
  },
  tx: {
    name: "QQ音乐",
    apis: [{
      api: "https://api.xunhuisi.store/API/QQMusic/Song.php?id={id}&n=1&quality={quality}",
      idField: ["songmid", "id", "hash"],
      urlField: ["music_url"],
      quality: {
        "128k": "standard",
        "320k": "high"
      }
    }, {
      api: "http://103.79.184.97/api/music/url?source=tx&songId={id}&quality={quality}&key=6C1F-53W0-GRKI-EVFG",
      idField: ["songmid", "id", "hash"],
      headers: {
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": "6C1F-53W0-GRKI-EVFG"
      },
      urlField: ["url", "data.url"],
      quality: {
        "128k": "128k",
        "320k": "320k",
        flac: "flac",
        flac24bit: "flac24bit"
      }
    }, {
      api: "https://yy.zddyr.top/lx/api/?source=tx&songmid={id}&quality={quality}",
      idField: ["songmid", "id", "hash"],
      urlField: ["url"],
      quality: {
        "128k": "128k",
        "320k": "320k",
        flac: "flac",
        hires: "hires"
      },
      before: (() => {
        let _0x28539d = "";
        let _0x4659a3 = "";
        let _0x32a02e = 0;
        const _0x3d1721 = "YYMusicSource";
        const _0x6596ce = "v1.0.0";
        return _0x1c8606 => {
          if (!_0x28539d) {
            _0x28539d = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
          }
          if (!_0x4659a3 || Date.now() - _0x32a02e > 300000) {
            const _0x1d3a70 = {
              device_id: _0x28539d,
              ip: "0.0.0.0",
              timestamp: Math.floor(Date.now() / 1000),
              random: Math.random().toString(36).substring(2, 12)
            };
            try {
              if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                {
                  const _0x1b0590 = globalThis.lx.utils.buffer.from(JSON.stringify(_0x1d3a70), "utf-8");
                  _0x4659a3 = globalThis.lx.utils.buffer.bufToString(_0x1b0590, "base64");
                }
              } else {
                {
                  _0x4659a3 = btoa(unescape(encodeURIComponent(JSON.stringify(_0x1d3a70))));
                }
              }
            } catch (_0x4618e9) {
              _0x4659a3 = "";
            }
            _0x32a02e = Date.now();
          }
          _0x1c8606.headers = _0x1c8606.headers || {};
          _0x1c8606.headers["X-Token"] = _0x4659a3;
          _0x1c8606.headers["X-Client"] = _0x3d1721 + "/" + _0x6596ce + " (Android)";
          return _0x1c8606;
        };
      })()
    }, {
      api: "https://tang.api.s01s.cn/music_open_api.php?mid={id}",
      idField: ["songmid", "id", "hash"],
      urlField: ["song_play_url_pq", "song_play_url_sq", "song_play_url_hq", "song_play_url_standard", "song_play_url", "song_play_url_fq"],
      quality: {
        "128k": "song_play_url_standard",
        "320k": "song_play_url_hq",
        flac: "song_play_url_sq",
        flac24bit: "song_play_url_pq",
        atmos: "song_play_url_pq"
      },
      after: _0x751151 => {
        if (!_0x751151) {
          throw new Error("tang 无响应");
        }
        const _0x4bff47 = ["song_play_url_pq", "song_play_url_sq", "song_play_url_hq", "song_play_url_standard", "song_play_url", "song_play_url_fq"];
        for (const _0x39b081 of _0x4bff47) {
          {
            if (typeof _0x751151[_0x39b081] === "string" && _0x751151[_0x39b081].trim()) {
              return _0x751151[_0x39b081].trim();
            }
          }
        }
        throw new Error("tang 无链接");
      }
    }, {
      api: "https://musicserver.haitangw.cc/v1/music/resolve-url",
      idField: ["songmid", "id", "hash"],
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
      },
      body: {
        source: "tx",
        rid: "{id}",
        level: "{quality}"
      },
      urlField: ["data.url"],
      quality: {
        "128k": "standard",
        "320k": "exhigh",
        flac: "lossless",
        flac24bit: "hires",
        hires: "hires",
        atmos: "1999",
        atmos_plus: "2999",
        master: "jymaster"
      }
    }, {
      api: "https://a.aa.cab/qq.music?msg={keyword}&n=1&type={quality}",
      idField: ["songmid", "id", "hash"],
      urlField: ["data.music", "playUrl", "url", "data.url"],
      quality: {
        "128k": "0",
        "320k": "1",
        flac: "4",
        master: "5"
      }
    }]
  },
  wy: {
    name: "网易云音乐",
    apis: [{
      api: "https://c.wwwweb.top/music/url",
      idField: ["hash", "songmid"],
      urlField: ["url"],
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "lx-music-desktop/2.10.1"
      },
      body: {
        source: "wy",
        musicId: "{id}",
        quality: "{quality}"
      },
      quality: {
        "128k": "128k",
        "320k": "320k",
        flac: "flac",
        flac24bit: "flac24bit",
        hires: "hires",
        atmos: "atmos",
        master: "master"
      },
      after: _0x64c570 => {
        if (_0x64c570.code === 200 && _0x64c570.url) {
          return _0x64c570.url;
        }
        throw new Error(_0x64c570.message || "无数据");
      }
    }, {
      api: "http://103.79.184.97/api/music/url?platform=wy&songId={id}&quality={quality}&key=6C1F-53W0-GRKI-EVFG",
      idField: ["songmid", "songId", "id", "hash"],
      urlField: ["url", "data.url", "data"],
      quality: {
        "128k": "128k",
        "320k": "320k",
        flac: "flac",
        flac24bit: "flac24bit",
        hires: "hires"
      },
      headers: {
        "User-Agent": "lx-music-mobile/2.0.0",
        "X-Card-Key": "6C1F-53W0-GRKI-EVFG"
      }
    }, {
      api: "https://yy.zddyr.top/lx/api/?source=wy&songmid={id}&quality={quality}",
      idField: ["hash", "songmid", "id"],
      urlField: ["url", "data.url"],
      quality: {
        "128k": "128k",
        "320k": "320k",
        flac: "flac",
        hires: "hires"
      },
      before: (() => {
        let _0x3dced2 = "";
        let _0x1701b4 = "";
        let _0x49d3d9 = 0;
        const _0x4d6408 = "YYMusicSource";
        const _0x202a93 = "v1.0.0";
        return _0x3b4b72 => {
          if (!_0x3dced2) {
            _0x3dced2 = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
          }
          if (!_0x1701b4 || Date.now() - _0x49d3d9 > 300000) {
            const _0x29b63f = {
              device_id: _0x3dced2,
              ip: "0.0.0.0",
              timestamp: Math.floor(Date.now() / 1000),
              random: Math.random().toString(36).substring(2, 12)
            };
            try {
              if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                const _0x2c12fc = globalThis.lx.utils.buffer.from(JSON.stringify(_0x29b63f), "utf-8");
                _0x1701b4 = globalThis.lx.utils.buffer.bufToString(_0x2c12fc, "base64");
              } else {
                {
                  _0x1701b4 = btoa(unescape(encodeURIComponent(JSON.stringify(_0x29b63f))));
                }
              }
            } catch (_0x34a79a) {
              _0x1701b4 = "";
            }
            _0x49d3d9 = Date.now();
          }
          _0x3b4b72.headers = _0x3b4b72.headers || {};
          _0x3b4b72.headers["X-Token"] = _0x1701b4;
          _0x3b4b72.headers["X-Client"] = _0x4d6408 + "/" + _0x202a93 + " (Android)";
          return _0x3b4b72;
        };
      })()
    }, {
      api: "https://mcp.nianxinxz.com/share/ceshi/wy.php?id={id}&level={quality}",
      idField: ["hash", "songmid", "id"],
      urlField: ["url"],
      quality: {
        "128k": "standard",
        "320k": "exhigh",
        flac: "lossless",
        flac24bit: "hires",
        hires: "hires",
        master: "jymaster",
        atmos: "jyeffect"
      },
      after: _0x230830 => {
        if (_0x230830.code === 200 && _0x230830.url) {
          return _0x230830.url;
        }
        throw new Error(_0x230830.message || "mcp 无数据");
      }
    }, {
      api: "https://musicserver.haitangw.cc/v1/music/resolve-url",
      idField: ["songmid", "id", "hash"],
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
      },
      body: {
        source: "wy",
        rid: "{id}",
        level: "{quality}"
      },
      urlField: ["data.url"],
      quality: {
        "128k": "standard",
        "320k": "exhigh",
        flac: "lossless",
        flac24bit: "hires",
        hires: "hires",
        atmos: "jyeffect",
        master: "jymaster"
      }
    }]
  },
  mg: {
    name: "咪咕音乐",
    apis: [{
      api: "http://103.79.184.97/api/music/url?source=mg&songId={id}&quality={quality}&key=6C1F-53W0-GRKI-EVFG",
      idField: ["hash", "songmid", "id", "rid"],
      headers: {
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": "6C1F-53W0-GRKI-EVFG"
      },
      urlField: ["url", "data.url"],
      quality: {
        "128k": "128k"
      }
    }, {
      api: "https://musicserver.haitangw.cc/v1/music/resolve-url",
      idField: ["songmid", "id", "hash"],
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
      },
      body: {
        source: "mg",
        rid: "{id}",
        level: "standard"
      },
      urlField: ["data.url"],
      quality: {
        "128k": "standard"
      }
    }, {
      api: "https://yy.zddyr.top/lx/api/?source=migu&songmid={id}&quality={quality}",
      idField: ["songmid", "id", "hash"],
      urlField: ["url", "data.url"],
      quality: {
        "128k": "128k",
        "320k": "320k",
        flac: "flac",
        hires: "hires"
      },
      before: (() => {
        let _0x57e87e = "";
        let _0x1247fe = "";
        let _0x582c36 = 0;
        const _0x174cc9 = "YYMusicSource";
        const _0x28e82c = "v1.0.0";
        return _0xa499ed => {
          if (!_0x57e87e) {
            _0x57e87e = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4);
          }
          if (!_0x1247fe || Date.now() - _0x582c36 > 300000) {
            {
              const _0xa0ddec = {
                device_id: _0x57e87e,
                ip: "0.0.0.0",
                timestamp: Math.floor(Date.now() / 1000),
                random: Math.random().toString(36).substring(2, 12)
              };
              try {
                {
                  if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                    const _0x597d30 = globalThis.lx.utils.buffer.from(JSON.stringify(_0xa0ddec), "utf-8");
                    _0x1247fe = globalThis.lx.utils.buffer.bufToString(_0x597d30, "base64");
                  } else {
                    _0x1247fe = btoa(unescape(encodeURIComponent(JSON.stringify(_0xa0ddec))));
                  }
                }
              } catch (_0x404a28) {
                {
                  _0x1247fe = "";
                }
              }
              _0x582c36 = Date.now();
            }
          }
          _0xa499ed.headers = _0xa499ed.headers || {};
          _0xa499ed.headers["X-Token"] = _0x1247fe;
          _0xa499ed.headers["X-Client"] = _0x174cc9 + "/" + _0x28e82c + " (Android)";
          return _0xa499ed;
        };
      })()
    }, {
      api: "https://oiapi.net/api/MiGu_Music?msg={keyword}&br={quality}&n=1",
      idField: ["songmid", "id", "hash"],
      urlField: ["data.url", "url"],
      quality: {
        "128k": "LQ",
        "320k": "HQ",
        flac: "SQ",
        hires: "SQ"
      }
    }]
  }
};
const {
  EVENT_NAMES,
  request,
  on,
  send
} = globalThis.lx;
const cache = Object.create(null);
const sourceKeys = Object.keys(CONFIG);
const getCache = _0x408bcd => ENABLE_CACHE && cache[_0x408bcd]?.["expire"] > Date.now() ? cache[_0x408bcd].data : (delete cache[_0x408bcd], null);
const setCache = (_0xa2a003, _0x5e5ba8) => ENABLE_CACHE && (cache[_0xa2a003] = {
  data: _0x5e5ba8,
  expire: Date.now() + CACHE_TTL
});
const httpRequest = (_0x900140, _0x480f98 = {}) => new Promise((_0x33a9e4, _0x310ca3) => {
  const _0x356901 = setTimeout(() => _0x310ca3(new Error("请求超时")), _0x480f98.timeout || TIMEOUT);
  request(_0x900140, {
    method: _0x480f98.method || "GET",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      ..._0x480f98.headers
    },
    ...(_0x480f98.body !== undefined ? {
      body: _0x480f98.body
    } : {})
  }, (_0x4615a8, _0x4a09ff) => {
    clearTimeout(_0x356901);
    if (_0x4615a8) {
      return _0x310ca3(_0x4615a8 instanceof Error ? _0x4615a8 : new Error(String(_0x4615a8)));
    }
    if (!_0x4a09ff) {
      return _0x310ca3(new Error("空响应"));
    }
    _0x33a9e4({
      body: _0x4a09ff.body,
      statusCode: _0x4a09ff.statusCode || _0x4a09ff.status || 200,
      url: _0x4a09ff.url
    });
  });
});
const getField = (_0x284123, _0x42a5a1) => _0x42a5a1.split(".").reduce((_0x3cb6ad, _0x709bb7) => _0x3cb6ad == null ? undefined : Array.isArray(_0x3cb6ad) ? /^\d+$/.test(_0x709bb7) ? _0x3cb6ad[+_0x709bb7] : _0x3cb6ad.map(_0x324a71 => _0x324a71?.[_0x709bb7]).find(_0x35a765 => _0x35a765 != null && _0x35a765 !== "") : _0x3cb6ad[_0x709bb7], _0x284123);
const asUrl = _0x259161 => typeof _0x259161 === "string" && /^(https?:)?\/\//.test(_0x259161.trim()) ? _0x259161.trim().startsWith("//") ? "https:" + _0x259161.trim() : _0x259161.trim() : null;
const findUrl = (_0x56ba3e, _0x19d8a6) => _0x56ba3e == null ? null : asUrl(_0x56ba3e) || _0x19d8a6.map(_0x2f60fd => asUrl(getField(_0x56ba3e, _0x2f60fd))).find(Boolean) || null;
const getSongId = (_0x14c244, _0x20aaa2) => _0x20aaa2.map(_0x217c25 => getField(_0x14c244, _0x217c25)).find(_0x39e952 => _0x39e952 !== undefined && _0x39e952 !== null && _0x39e952 !== "")?.["toString"]() ?? "";
const qualitys = Object.create(null);
const sources = Object.create(null);
const idFieldsBySource = Object.create(null);
sourceKeys.forEach(_0x47c465 => {
  const _0x48667b = CONFIG[_0x47c465].apis || [];
  const _0x28122b = [...new Set(_0x48667b.flatMap(_0x1a18ce => Object.keys(_0x1a18ce.quality || {})))];
  qualitys[_0x47c465] = _0x28122b.reduce((_0x1a60da, _0xfc0e4d) => (_0x1a60da[_0xfc0e4d] = _0xfc0e4d, _0x1a60da), {});
  sources[_0x47c465] = {
    name: CONFIG[_0x47c465].name,
    type: "music",
    actions: ["musicUrl"],
    qualitys: _0x28122b
  };
  idFieldsBySource[_0x47c465] = [...new Set(_0x48667b.flatMap(_0xedd34e => _0xedd34e.idField || []))];
});
qualitys.local = {};
sources.local = {
  name: "本地音乐",
  type: "music",
  actions: ["musicUrl", "lyric", "pic"],
  qualitys: []
};
const FALLBACK = {
  master: ["master", "atmos_plus", "atmos", "hires", "flac24bit", "flac", "320k", "128k"],
  atmos_plus: ["atmos_plus", "atmos", "hires", "flac24bit", "flac", "320k", "128k"],
  atmos: ["atmos", "hires", "flac24bit", "flac", "320k", "128k"],
  hires: ["hires", "flac24bit", "flac", "320k", "128k"],
  flac24bit: ["flac24bit", "flac", "320k", "128k"],
  flac: ["flac", "320k", "128k"],
  "320k": ["320k", "128k"],
  "128k": ["128k"]
};
const substitute = (_0x1b9c49, _0x17d5ec) => typeof _0x1b9c49 === "string" ? _0x1b9c49.replace(/\{(id|quality|keyword)\}/g, (_0x513d25, _0x2753cd) => _0x17d5ec[_0x2753cd] ?? "") : Array.isArray(_0x1b9c49) ? _0x1b9c49.map(_0x58ff35 => substitute(_0x58ff35, _0x17d5ec)) : _0x1b9c49 && typeof _0x1b9c49 === "object" ? Object.fromEntries(Object.entries(_0x1b9c49).map(([_0x1fd358, _0x3910ce]) => [_0x1fd358, substitute(_0x3910ce, _0x17d5ec)])) : _0x1b9c49;
const hasPlaceholder = (_0x4c694d, _0x2a2b1a) => [_0x4c694d.api, _0x4c694d.body, _0x4c694d.headers].some(_0x294cf3 => _0x294cf3 && JSON.stringify(_0x294cf3).includes("{" + _0x2a2b1a + "}"));
const resolveRedirectUrl = (_0x3efccf, _0x308a03) => _0x3efccf.url ? asUrl(_0x3efccf.url) || (() => {
  try {
    {
      return new URL(_0x3efccf.url, _0x308a03).href;
    }
  } catch {
    {
      return null;
    }
  }
})() : null;
const buildParams = (_0x54c83c, _0x3203cc, _0x194d68, _0x2bf141) => {
  const _0x2ab736 = hasPlaceholder(_0x54c83c, "id");
  const _0x3fc40f = hasPlaceholder(_0x54c83c, "keyword");
  const _0x32e71f = _0x2ab736 ? getSongId(_0x3203cc, _0x54c83c.idField) : "";
  if (_0x2ab736 && !_0x32e71f) {
    throw new Error("缺少id字段");
  }
  if (_0x3fc40f && !_0x2bf141) {
    throw new Error("缺少歌曲名");
  }
  const _0x2414d8 = {
    id: _0x32e71f,
    keyword: _0x2bf141,
    quality: _0x54c83c.quality ? _0x54c83c.quality[_0x194d68] : _0x194d68
  };
  let _0xb483bf = {
    url: substitute(_0x54c83c.api, _0x2414d8),
    headers: _0x54c83c.headers ? substitute(_0x54c83c.headers, _0x2414d8) : undefined,
    body: _0x54c83c.body ? substitute(_0x54c83c.body, _0x2414d8) : undefined
  };
  if (typeof _0x54c83c.before === "function") {
    _0xb483bf = _0x54c83c.before(_0xb483bf) || _0xb483bf;
  }
  if (!_0xb483bf.url || /\{[^}]*\}/.test(_0xb483bf.url)) {
    throw new Error("URL模板未配置");
  }
  return _0xb483bf;
};
const runRaw = async (_0xae8cf6, _0x3d9ce4) => {
  if (_0xae8cf6.followRedirect === false) {
    return _0x3d9ce4.url;
  }
  const _0x1a5cbc = async _0x2531f8 => {
    const _0x3de0c0 = await httpRequest(_0x3d9ce4.url, {
      method: _0x2531f8,
      headers: _0x3d9ce4.headers,
      timeout: _0xae8cf6.timeout
    });
    if (_0x3de0c0.statusCode >= 400) {
      const _0x1e0271 = new Error("状态码" + _0x3de0c0.statusCode);
      _0x1e0271.statusCode = _0x3de0c0.statusCode;
      throw _0x1e0271;
    }
    return _0x3de0c0;
  };
  const _0x2f3f82 = _0xae8cf6.method || "HEAD";
  let _0x43d63;
  try {
    {
      _0x43d63 = await _0x1a5cbc(_0x2f3f82);
    }
  } catch (_0x4525e4) {
    if (_0x2f3f82 === "GET" || _0x4525e4.statusCode !== 405) {
      throw _0x4525e4;
    }
    _0x43d63 = await _0x1a5cbc("GET");
  }
  if ([301, 302, 303, 307, 308].includes(_0x43d63.statusCode)) {
    const _0x338dd1 = resolveRedirectUrl(_0x43d63, _0x3d9ce4.url);
    if (_0x338dd1) {
      return _0x338dd1;
    }
  }
  return _0x3d9ce4.url;
};
const runStandard = async (_0x3088bf, _0x350d23) => {
  const _0x54b0ea = await httpRequest(_0x350d23.url, {
    method: _0x3088bf.method || "GET",
    headers: _0x350d23.headers,
    body: _0x350d23.body,
    timeout: _0x3088bf.timeout
  });
  if (_0x3088bf.followRedirect !== false && [301, 302, 303, 307, 308].includes(_0x54b0ea.statusCode)) {
    const _0x42d00d = resolveRedirectUrl(_0x54b0ea, _0x350d23.url);
    if (_0x42d00d) {
      return _0x42d00d;
    }
  }
  const _0x419ffc = asUrl(_0x54b0ea.body);
  if (_0x419ffc) {
    return _0x419ffc;
  }
  const _0x122336 = typeof _0x54b0ea.body === "string" ? JSON.parse(_0x54b0ea.body) : _0x54b0ea.body;
  const _0x3c151d = typeof _0x3088bf.after === "function" ? _0x3088bf.after(_0x122336) : _0x122336;
  if (typeof _0x3c151d === "string") {
    const _0x287694 = asUrl(_0x3c151d);
    if (_0x287694) {
      return _0x287694;
    }
  }
  const _0x4d483a = findUrl(_0x3c151d, _0x3088bf.urlField || ["url", "data.url", "playUrl"]);
  if (_0x4d483a) {
    return _0x4d483a;
  }
  throw new Error("响应中未找到有效链接");
};
const tryApi = async (_0x4a4442, _0x3d9269, _0x289831) => {
  const _0x55400f = CONFIG[_0x4a4442].apis;
  if (!_0x55400f?.["length"]) {
    throw new Error("无API配置");
  }
  const _0x814829 = encodeURIComponent(_0x3d9269.name || _0x3d9269.songname || "");
  const _0x4eb922 = async _0x11f54b => {
    const _0x48b6b9 = _0x11f54b.api.split("?")[0].split("/").pop() || "api";
    if (_0x11f54b.quality && !_0x11f54b.quality[_0x289831]) {
      throw new Error(_0x48b6b9 + ":不支持" + _0x289831);
    }
    try {
      const _0x348051 = buildParams(_0x11f54b, _0x3d9269, _0x289831, _0x814829);
      return await (_0x11f54b.raw ? runRaw(_0x11f54b, _0x348051) : runStandard(_0x11f54b, _0x348051));
    } catch (_0x4df7eb) {
      throw new Error(_0x48b6b9 + ":" + _0x4df7eb.message);
    }
  };
  const _0x3d38c0 = [];
  for (const _0x1bf728 of _0x55400f) {
    try {
      {
        return await _0x4eb922(_0x1bf728);
      }
    } catch (_0x595a02) {
      {
        _0x3d38c0.push(_0x595a02.message || String(_0x595a02));
      }
    }
  }
  throw new Error("所有API均失败(" + _0x289831 + ") [" + _0x3d38c0.join(" | ") + "]");
};
const inflight = Object.create(null);
const apis = sourceKeys.reduce((_0x526411, _0x499de5) => {
  _0x526411[_0x499de5] = {
    async musicUrl(_0x14e281, _0xc23061) {
      {
        if (!_0x14e281) {
          throw new Error("缺少musicInfo");
        }
        const _0xf27cc = getSongId(_0x14e281, idFieldsBySource[_0x499de5]) || [_0x14e281.name, _0x14e281.singer || _0x14e281.artist].filter(Boolean).join("-");
        const _0x589c7d = _0x499de5 + "_" + (_0xf27cc || "anon" + Math.random().toString(36).slice(2)) + "_" + _0xc23061;
        const _0x203d28 = getCache(_0x589c7d);
        if (_0x203d28) {
          return _0x203d28;
        }
        if (inflight[_0x589c7d]) {
          return inflight[_0x589c7d];
        }
        const _0xcc20de = (async () => {
          {
            const _0x5f3d4f = [];
            for (const _0x5c50ba of FALLBACK[_0xc23061] || [_0xc23061]) {
              if (!qualitys[_0x499de5].hasOwnProperty(_0x5c50ba)) {
                continue;
              }
              try {
                const _0x201a41 = await tryApi(_0x499de5, _0x14e281, _0x5c50ba);
                if (_0x201a41) {
                  setCache(_0x589c7d, _0x201a41);
                  return _0x201a41;
                }
              } catch (_0xab017a) {
                {
                  _0x5f3d4f.push(_0xab017a.message || String(_0xab017a));
                }
              }
            }
            throw new Error(_0x5f3d4f.length ? _0x5f3d4f.join(" || ") : "所有音质均失败");
          }
        })();
        inflight[_0x589c7d] = _0xcc20de;
        try {
          return await _0xcc20de;
        } finally {
          {
            delete inflight[_0x589c7d];
          }
        }
      }
    }
  };
  return _0x526411;
}, {});
on(EVENT_NAMES.request, ({
  source: _0x500236,
  action: _0x43613d,
  info: _0xe5f9d9
} = {}) => {
  if (!apis[_0x500236] || _0x43613d !== "musicUrl") {
    return Promise.reject("不支持");
  }
  if (!qualitys[_0x500236]?.[_0xe5f9d9?.["type"]]) {
    return Promise.reject("不支持的音质: " + _0xe5f9d9?.["type"]);
  }
  return apis[_0x500236].musicUrl(_0xe5f9d9.musicInfo, _0xe5f9d9.type).catch(_0x2b6af2 => Promise.reject(_0x2b6af2.message));
});
send(EVENT_NAMES.inited, {
  openDevTools: false,
  sources: sources
});
const CHECK_URL = "https://cdn.jsdelivr.net/gh/Chinesebaicai/HelloWorld@main/update.json";
const UPDATE_URL = "https://cdn.jsdelivr.net/gh/Chinesebaicai/HelloWorld@main/HelloWorld261011.js";
const compareVersion = (_0x1162bf, _0x2b2462) => {
  if (typeof _0x1162bf !== "string" || typeof _0x2b2462 !== "string") {
    return 0;
  }
  return _0x2b2462.replace(/^v/, "").localeCompare(_0x1162bf.replace(/^v/, ""), undefined, {
    numeric: true
  });
};
const checkLatestVersion = async () => {
  try {
    const _0x52ee86 = await httpRequest(CHECK_URL, {
      timeout: 5000
    });
    const _0x57cd18 = typeof _0x52ee86.body === "string" ? JSON.parse(_0x52ee86.body) : _0x52ee86.body;
    if (!_0x57cd18 || !_0x57cd18.latest) {
      return;
    }
    const _0x3b28b8 = globalThis.lx.currentScriptInfo?.["version"] || "";
    if (!_0x3b28b8) {
      return;
    }
    compareVersion(_0x3b28b8, _0x57cd18.latest) > 0 && send(EVENT_NAMES.updateAlert, {
      log: "发现新版本 " + _0x57cd18.latest + "\n" + (_0x57cd18.log || ""),
      updateUrl: UPDATE_URL
    });
  } catch (_0x4bf12f) {}
};
setTimeout(checkLatestVersion, 2000);