//Sun Oct 11 2026 12:41:51 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
(function () {
  const _0x557e7d = true;
  const _0x5373ae = 1200000;
  const _0x42a7bb = 10000;
  const _0x5a4467 = {
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
          let _0x1726aa = "";
          let _0x4ba994 = "";
          let _0x47e591 = 0;
          const _0x3d575d = "YYMusicSource";
          const _0xdce054 = "v1.0.0";
          return _0x484c67 => {
            !_0x1726aa && (_0x1726aa = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4));
            if (!_0x4ba994 || Date.now() - _0x47e591 > 300000) {
              const _0x89e843 = {
                device_id: _0x1726aa,
                ip: "0.0.0.0",
                timestamp: Math.floor(Date.now() / 1000),
                random: Math.random().toString(36).substring(2, 12)
              };
              try {
                if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                  const _0x245e90 = globalThis.lx.utils.buffer.from(JSON.stringify(_0x89e843), "utf-8");
                  _0x4ba994 = globalThis.lx.utils.buffer.bufToString(_0x245e90, "base64");
                } else {
                  _0x4ba994 = btoa(unescape(encodeURIComponent(JSON.stringify(_0x89e843))));
                }
              } catch (_0x198e42) {
                _0x4ba994 = "";
              }
              _0x47e591 = Date.now();
            }
            _0x484c67.headers = _0x484c67.headers || {};
            _0x484c67.headers["X-Token"] = _0x4ba994;
            _0x484c67.headers["X-Client"] = _0x3d575d + "/" + _0xdce054 + " (Android)";
            return _0x484c67;
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
          let _0x50e49e = "";
          let _0x64d8cc = "";
          let _0x401109 = 0;
          const _0x5585c3 = "YYMusicSource";
          const _0x1d9943 = "v1.0.0";
          return _0x2005b2 => {
            !_0x50e49e && (_0x50e49e = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4));
            if (!_0x64d8cc || Date.now() - _0x401109 > 300000) {
              const _0x1f03ce = {
                device_id: _0x50e49e,
                ip: "0.0.0.0",
                timestamp: Math.floor(Date.now() / 1000),
                random: Math.random().toString(36).substring(2, 12)
              };
              try {
                if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                  const _0x35eebe = globalThis.lx.utils.buffer.from(JSON.stringify(_0x1f03ce), "utf-8");
                  _0x64d8cc = globalThis.lx.utils.buffer.bufToString(_0x35eebe, "base64");
                } else {
                  _0x64d8cc = btoa(unescape(encodeURIComponent(JSON.stringify(_0x1f03ce))));
                }
              } catch (_0x4ba96a) {
                _0x64d8cc = "";
              }
              _0x401109 = Date.now();
            }
            _0x2005b2.headers = _0x2005b2.headers || {};
            _0x2005b2.headers["X-Token"] = _0x64d8cc;
            _0x2005b2.headers["X-Client"] = _0x5585c3 + "/" + _0x1d9943 + " (Android)";
            return _0x2005b2;
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
        after: _0x547300 => {
          if (!_0x547300) {
            throw new Error("tang 无响应");
          }
          const _0x408f96 = ["song_play_url_pq", "song_play_url_sq", "song_play_url_hq", "song_play_url_standard", "song_play_url", "song_play_url_fq"];
          for (const _0x35bb66 of _0x408f96) {
            if (typeof _0x547300[_0x35bb66] === "string" && _0x547300[_0x35bb66].trim()) {
              return _0x547300[_0x35bb66].trim();
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
        after: _0x496515 => {
          if (_0x496515.code === 200 && _0x496515.url) {
            return _0x496515.url;
          }
          throw new Error(_0x496515.message || "无数据");
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
          let _0x585f4e = "";
          let _0x2a1d1f = "";
          let _0x335ca5 = 0;
          const _0xeb757 = "YYMusicSource";
          const _0x103fdf = "v1.0.0";
          return _0x32ab8c => {
            !_0x585f4e && (_0x585f4e = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4));
            if (!_0x2a1d1f || Date.now() - _0x335ca5 > 300000) {
              const _0x1a58d0 = {
                device_id: _0x585f4e,
                ip: "0.0.0.0",
                timestamp: Math.floor(Date.now() / 1000),
                random: Math.random().toString(36).substring(2, 12)
              };
              try {
                if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                  const _0x377c5a = globalThis.lx.utils.buffer.from(JSON.stringify(_0x1a58d0), "utf-8");
                  _0x2a1d1f = globalThis.lx.utils.buffer.bufToString(_0x377c5a, "base64");
                } else {
                  _0x2a1d1f = btoa(unescape(encodeURIComponent(JSON.stringify(_0x1a58d0))));
                }
              } catch (_0x574f5c) {
                _0x2a1d1f = "";
              }
              _0x335ca5 = Date.now();
            }
            _0x32ab8c.headers = _0x32ab8c.headers || {};
            _0x32ab8c.headers["X-Token"] = _0x2a1d1f;
            _0x32ab8c.headers["X-Client"] = _0xeb757 + "/" + _0x103fdf + " (Android)";
            return _0x32ab8c;
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
        after: _0x5e95e6 => {
          if (_0x5e95e6.code === 200 && _0x5e95e6.url) {
            return _0x5e95e6.url;
          }
          throw new Error(_0x5e95e6.message || "mcp 无数据");
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
          let _0xe2b702 = "";
          let _0x511983 = "";
          let _0x46b7a5 = 0;
          const _0x5d3114 = "YYMusicSource";
          const _0x3ff368 = "v1.0.0";
          return _0x2bde5e => {
            !_0xe2b702 && (_0xe2b702 = "lx-online-" + Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-4));
            if (!_0x511983 || Date.now() - _0x46b7a5 > 300000) {
              const _0x2d0682 = {
                device_id: _0xe2b702,
                ip: "0.0.0.0",
                timestamp: Math.floor(Date.now() / 1000),
                random: Math.random().toString(36).substring(2, 12)
              };
              try {
                if (globalThis.lx?.["utils"]?.["buffer"]?.["from"]) {
                  const _0x3bdbf7 = globalThis.lx.utils.buffer.from(JSON.stringify(_0x2d0682), "utf-8");
                  _0x511983 = globalThis.lx.utils.buffer.bufToString(_0x3bdbf7, "base64");
                } else {
                  _0x511983 = btoa(unescape(encodeURIComponent(JSON.stringify(_0x2d0682))));
                }
              } catch (_0x3976ef) {
                _0x511983 = "";
              }
              _0x46b7a5 = Date.now();
            }
            _0x2bde5e.headers = _0x2bde5e.headers || {};
            _0x2bde5e.headers["X-Token"] = _0x511983;
            _0x2bde5e.headers["X-Client"] = _0x5d3114 + "/" + _0x3ff368 + " (Android)";
            return _0x2bde5e;
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
    EVENT_NAMES: _0x59538c,
    request: _0x2f7e46,
    on: _0x2461b4,
    send: _0x4f6c60,
    currentScriptInfo: _0x31b369
  } = globalThis.lx;
  const _0x45de9c = Object.create(null);
  const _0x4b0542 = Object.keys(_0x5a4467);
  const _0x307b00 = _0x4bcecd => _0x557e7d && _0x45de9c[_0x4bcecd]?.["expire"] > Date.now() ? _0x45de9c[_0x4bcecd].data : (delete _0x45de9c[_0x4bcecd], null);
  const _0x1cb322 = (_0x37b6a2, _0xae1bca) => _0x557e7d && (_0x45de9c[_0x37b6a2] = {
    data: _0xae1bca,
    expire: Date.now() + _0x5373ae
  });
  const _0x5d7e20 = (_0x51a159, _0x41dd80 = {}) => new Promise((_0x13bd2c, _0x3c7f08) => {
    const _0x132992 = setTimeout(() => _0x3c7f08(new Error("请求超时")), _0x41dd80.timeout || _0x42a7bb);
    _0x2f7e46(_0x51a159, {
      method: _0x41dd80.method || "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        ..._0x41dd80.headers
      },
      ...(_0x41dd80.body !== undefined ? {
        body: _0x41dd80.body
      } : {})
    }, (_0x4338c8, _0x38fbae) => {
      clearTimeout(_0x132992);
      if (_0x4338c8) {
        return _0x3c7f08(_0x4338c8 instanceof Error ? _0x4338c8 : new Error(String(_0x4338c8)));
      }
      if (!_0x38fbae) {
        return _0x3c7f08(new Error("空响应"));
      }
      _0x13bd2c({
        body: _0x38fbae.body,
        statusCode: _0x38fbae.statusCode || _0x38fbae.status || 200,
        url: _0x38fbae.url
      });
    });
  });
  const _0x3fa36e = (_0x47d7e2, _0x38d8f5) => _0x38d8f5.split(".").reduce((_0x200226, _0x14d069) => _0x200226 == null ? undefined : Array.isArray(_0x200226) ? /^\d+$/.test(_0x14d069) ? _0x200226[+_0x14d069] : _0x200226.map(_0x3d23fa => _0x3d23fa?.[_0x14d069]).find(_0x33b2e3 => _0x33b2e3 != null && _0x33b2e3 !== "") : _0x200226[_0x14d069], _0x47d7e2);
  const _0x24972f = _0x48397f => typeof _0x48397f === "string" && /^(https?:)?\/\//.test(_0x48397f.trim()) ? _0x48397f.trim().startsWith("//") ? "https:" + _0x48397f.trim() : _0x48397f.trim() : null;
  const _0x2da82c = (_0x7e2f80, _0x5e1349) => _0x7e2f80 == null ? null : _0x24972f(_0x7e2f80) || _0x5e1349.map(_0x2b0f0c => _0x24972f(_0x3fa36e(_0x7e2f80, _0x2b0f0c))).find(Boolean) || null;
  const _0x2b44f4 = (_0x30327a, _0x106daf) => _0x106daf.map(_0x1e7345 => _0x3fa36e(_0x30327a, _0x1e7345)).find(_0x2fd492 => _0x2fd492 !== undefined && _0x2fd492 !== null && _0x2fd492 !== "")?.["toString"]() ?? "";
  const _0x1b6a90 = Object.create(null);
  const _0xd76922 = Object.create(null);
  const _0x500a65 = Object.create(null);
  _0x4b0542.forEach(_0x1b8067 => {
    const _0xa61e08 = _0x5a4467[_0x1b8067].apis || [];
    const _0x5abf3d = [...new Set(_0xa61e08.flatMap(_0xa403fb => Object.keys(_0xa403fb.quality || {})))];
    _0x1b6a90[_0x1b8067] = _0x5abf3d.reduce((_0x52f508, _0x2127d9) => (_0x52f508[_0x2127d9] = _0x2127d9, _0x52f508), {});
    _0xd76922[_0x1b8067] = {
      name: _0x5a4467[_0x1b8067].name,
      type: "music",
      actions: ["musicUrl"],
      qualitys: _0x5abf3d
    };
    _0x500a65[_0x1b8067] = [...new Set(_0xa61e08.flatMap(_0x56ee98 => _0x56ee98.idField || []))];
  });
  _0x1b6a90.local = {};
  _0xd76922.local = {
    name: "本地音乐",
    type: "music",
    actions: ["musicUrl", "lyric", "pic"],
    qualitys: []
  };
  const _0x320eae = {
    master: ["master", "atmos_plus", "atmos", "hires", "flac24bit", "flac", "320k", "128k"],
    atmos_plus: ["atmos_plus", "atmos", "hires", "flac24bit", "flac", "320k", "128k"],
    atmos: ["atmos", "hires", "flac24bit", "flac", "320k", "128k"],
    hires: ["hires", "flac24bit", "flac", "320k", "128k"],
    flac24bit: ["flac24bit", "flac", "320k", "128k"],
    flac: ["flac", "320k", "128k"],
    "320k": ["320k", "128k"],
    "128k": ["128k"]
  };
  const _0x1ed3a5 = (_0xa858d1, _0x4290bf) => typeof _0xa858d1 === "string" ? _0xa858d1.replace(/\{(id|quality|keyword)\}/g, (_0x158817, _0x31773a) => _0x4290bf[_0x31773a] ?? "") : Array.isArray(_0xa858d1) ? _0xa858d1.map(_0x11c9ac => _0x1ed3a5(_0x11c9ac, _0x4290bf)) : _0xa858d1 && typeof _0xa858d1 === "object" ? Object.fromEntries(Object.entries(_0xa858d1).map(([_0x117019, _0x5c0235]) => [_0x117019, _0x1ed3a5(_0x5c0235, _0x4290bf)])) : _0xa858d1;
  const _0x1fd635 = (_0x318461, _0x2e7729) => [_0x318461.api, _0x318461.body, _0x318461.headers].some(_0x45425b => _0x45425b && JSON.stringify(_0x45425b).includes("{" + _0x2e7729 + "}"));
  const _0x5aa062 = (_0x2837e6, _0xda5478) => _0x2837e6.url ? _0x24972f(_0x2837e6.url) || (() => {
    try {
      return new URL(_0x2837e6.url, _0xda5478).href;
    } catch {
      return null;
    }
  })() : null;
  const _0x28731f = (_0xe80900, _0x47898e, _0x14b6cf, _0x458f2e) => {
    const _0x9cdcd0 = _0x1fd635(_0xe80900, "id");
    const _0x43c89f = _0x1fd635(_0xe80900, "keyword");
    const _0xb46967 = _0x9cdcd0 ? _0x2b44f4(_0x47898e, _0xe80900.idField) : "";
    if (_0x9cdcd0 && !_0xb46967) {
      throw new Error("缺少id字段");
    }
    if (_0x43c89f && !_0x458f2e) {
      throw new Error("缺少歌曲名");
    }
    const _0x3be8c1 = {
      id: _0xb46967,
      keyword: _0x458f2e,
      quality: _0xe80900.quality ? _0xe80900.quality[_0x14b6cf] : _0x14b6cf
    };
    let _0x30a119 = {
      url: _0x1ed3a5(_0xe80900.api, _0x3be8c1),
      headers: _0xe80900.headers ? _0x1ed3a5(_0xe80900.headers, _0x3be8c1) : undefined,
      body: _0xe80900.body ? _0x1ed3a5(_0xe80900.body, _0x3be8c1) : undefined
    };
    typeof _0xe80900.before === "function" && (_0x30a119 = _0xe80900.before(_0x30a119) || _0x30a119);
    if (!_0x30a119.url || /\{[^}]*\}/.test(_0x30a119.url)) {
      throw new Error("URL模板未配置");
    }
    return _0x30a119;
  };
  const _0x595606 = async (_0x3238bf, _0xfd8b7e) => {
    if (_0x3238bf.followRedirect === false) {
      return _0xfd8b7e.url;
    }
    const _0x3c57b9 = async _0x1e5ed9 => {
      const _0x461e1c = await _0x5d7e20(_0xfd8b7e.url, {
        method: _0x1e5ed9,
        headers: _0xfd8b7e.headers,
        timeout: _0x3238bf.timeout
      });
      if (_0x461e1c.statusCode >= 400) {
        const _0x15cdc9 = new Error("状态码" + _0x461e1c.statusCode);
        _0x15cdc9.statusCode = _0x461e1c.statusCode;
        throw _0x15cdc9;
      }
      return _0x461e1c;
    };
    const _0x3b669e = _0x3238bf.method || "HEAD";
    let _0xe1bc50;
    try {
      _0xe1bc50 = await _0x3c57b9(_0x3b669e);
    } catch (_0x4060a3) {
      if (_0x3b669e === "GET" || _0x4060a3.statusCode !== 405) {
        throw _0x4060a3;
      }
      _0xe1bc50 = await _0x3c57b9("GET");
    }
    if ([301, 302, 303, 307, 308].includes(_0xe1bc50.statusCode)) {
      const _0x281912 = _0x5aa062(_0xe1bc50, _0xfd8b7e.url);
      if (_0x281912) {
        return _0x281912;
      }
    }
    return _0xfd8b7e.url;
  };
  const _0x1a198c = async (_0x1c3377, _0x36c4e5) => {
    const _0x5924c1 = await _0x5d7e20(_0x36c4e5.url, {
      method: _0x1c3377.method || "GET",
      headers: _0x36c4e5.headers,
      body: _0x36c4e5.body,
      timeout: _0x1c3377.timeout
    });
    if (_0x1c3377.followRedirect !== false && [301, 302, 303, 307, 308].includes(_0x5924c1.statusCode)) {
      const _0x508fda = _0x5aa062(_0x5924c1, _0x36c4e5.url);
      if (_0x508fda) {
        return _0x508fda;
      }
    }
    const _0x1facf4 = _0x24972f(_0x5924c1.body);
    if (_0x1facf4) {
      return _0x1facf4;
    }
    const _0x4943fc = typeof _0x5924c1.body === "string" ? JSON.parse(_0x5924c1.body) : _0x5924c1.body;
    const _0x3b43a5 = typeof _0x1c3377.after === "function" ? _0x1c3377.after(_0x4943fc) : _0x4943fc;
    if (typeof _0x3b43a5 === "string") {
      const _0x3c5cea = _0x24972f(_0x3b43a5);
      if (_0x3c5cea) {
        return _0x3c5cea;
      }
    }
    const _0x1ff9f3 = _0x2da82c(_0x3b43a5, _0x1c3377.urlField || ["url", "data.url", "playUrl"]);
    if (_0x1ff9f3) {
      return _0x1ff9f3;
    }
    throw new Error("响应中未找到有效链接");
  };
  const _0x56c766 = async (_0x1bc39f, _0x318d54, _0x449995) => {
    const _0x341d21 = _0x5a4467[_0x1bc39f].apis;
    if (!_0x341d21?.["length"]) {
      throw new Error("无API配置");
    }
    const _0x58cf56 = encodeURIComponent(_0x318d54.name || _0x318d54.songname || "");
    const _0x37543e = async _0x1a5f02 => {
      const _0x325655 = _0x1a5f02.api.split("?")[0].split("/").pop() || "api";
      if (_0x1a5f02.quality && !_0x1a5f02.quality[_0x449995]) {
        throw new Error(_0x325655 + ":不支持" + _0x449995);
      }
      try {
        const _0x361bf4 = _0x28731f(_0x1a5f02, _0x318d54, _0x449995, _0x58cf56);
        return await (_0x1a5f02.raw ? _0x595606(_0x1a5f02, _0x361bf4) : _0x1a198c(_0x1a5f02, _0x361bf4));
      } catch (_0x1e71fc) {
        throw new Error(_0x325655 + ":" + _0x1e71fc.message);
      }
    };
    const _0x2a76d3 = [];
    for (const _0x13b30c of _0x341d21) {
      try {
        return await _0x37543e(_0x13b30c);
      } catch (_0x150437) {
        _0x2a76d3.push(_0x150437.message || String(_0x150437));
      }
    }
    throw new Error("所有API均失败(" + _0x449995 + ") [" + _0x2a76d3.join(" | ") + "]");
  };
  const _0x4bcf6f = Object.create(null);
  const _0x411340 = _0x4b0542.reduce((_0x45a921, _0x91b8f9) => {
    _0x45a921[_0x91b8f9] = {
      async musicUrl(_0x282fdd, _0x3f6d6f) {
        if (!_0x282fdd) {
          throw new Error("缺少musicInfo");
        }
        const _0x1dfeb9 = _0x2b44f4(_0x282fdd, _0x500a65[_0x91b8f9]) || [_0x282fdd.name, _0x282fdd.singer || _0x282fdd.artist].filter(Boolean).join("-");
        const _0x3d57d0 = _0x91b8f9 + "_" + (_0x1dfeb9 || "anon" + Math.random().toString(36).slice(2)) + "_" + _0x3f6d6f;
        const _0x2d3813 = _0x307b00(_0x3d57d0);
        if (_0x2d3813) {
          return _0x2d3813;
        }
        if (_0x4bcf6f[_0x3d57d0]) {
          return _0x4bcf6f[_0x3d57d0];
        }
        const _0x181be9 = (async () => {
          const _0x2f9ae9 = [];
          for (const _0x24ed56 of _0x320eae[_0x3f6d6f] || [_0x3f6d6f]) {
            if (!_0x1b6a90[_0x91b8f9].hasOwnProperty(_0x24ed56)) {
              continue;
            }
            try {
              const _0x56449d = await _0x56c766(_0x91b8f9, _0x282fdd, _0x24ed56);
              if (_0x56449d) {
                _0x1cb322(_0x3d57d0, _0x56449d);
                return _0x56449d;
              }
            } catch (_0x3bb301) {
              _0x2f9ae9.push(_0x3bb301.message || String(_0x3bb301));
            }
          }
          throw new Error(_0x2f9ae9.length ? _0x2f9ae9.join(" || ") : "所有音质均失败");
        })();
        _0x4bcf6f[_0x3d57d0] = _0x181be9;
        try {
          return await _0x181be9;
        } finally {
          delete _0x4bcf6f[_0x3d57d0];
        }
      }
    };
    return _0x45a921;
  }, {});
  _0x2461b4(_0x59538c.request, ({
    source: _0x4437f3,
    action: _0x36b248,
    info: _0x364391
  } = {}) => {
    if (!_0x411340[_0x4437f3] || _0x36b248 !== "musicUrl") {
      return Promise.reject("不支持");
    }
    if (!_0x1b6a90[_0x4437f3]?.[_0x364391?.["type"]]) {
      return Promise.reject("不支持的音质: " + _0x364391?.["type"]);
    }
    return _0x411340[_0x4437f3].musicUrl(_0x364391.musicInfo, _0x364391.type).catch(_0x2d6714 => Promise.reject(_0x2d6714.message));
  });
  _0x4f6c60(_0x59538c.inited, {
    openDevTools: false,
    sources: _0xd76922
  });
  const _0xcb489a = "https://gitee.com/Chinesebaicai/HelloWorld/raw/master/update.json";
  const _0x33e5bc = "https://gitee.com/Chinesebaicai/HelloWorld/raw/master/HelloWorld.js";
  const _0x1b8fb8 = (_0x554850, _0x19b2ca) => {
    if (typeof _0x554850 !== "string" || typeof _0x19b2ca !== "string") {
      return 0;
    }
    return _0x19b2ca.replace(/^v/, "").localeCompare(_0x554850.replace(/^v/, ""), undefined, {
      numeric: true
    });
  };
  const _0x448c99 = async () => {
    try {
      const _0x59f85c = await _0x5d7e20(_0xcb489a, {
        timeout: 5000
      });
      const _0x11b58c = typeof _0x59f85c.body === "string" ? JSON.parse(_0x59f85c.body) : _0x59f85c.body;
      const _0x20f892 = _0x31b369?.["version"] || "";
      _0x11b58c && _0x11b58c.latest && _0x1b8fb8(_0x20f892, _0x11b58c.latest) > 0 && _0x4f6c60(_0x59538c.updateAlert, {
        log: "发现新版本 " + _0x11b58c.latest + "\n" + (_0x11b58c.log || ""),
        updateUrl: _0x33e5bc
      });
    } catch (_0x49843b) {}
  };
  setTimeout(_0x448c99, 2000);
})();