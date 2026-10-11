//Sun Oct 11 2026 08:33:58 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let IIi1IlII = null;
const I1l1l1i = new Map(),
  i11iilIl = 3,
  I11iiiiI = 1000,
  lI1l111l = [];
if (!globalThis.lx) throw new Error("LX Music 环境未就绪");
const {
    EVENT_NAMES: IlIii1ii,
    request: ll1ll11I,
    on: i11Ilili,
    send: I1Iii11I,
    currentScriptInfo: iiI1lIII
  } = globalThis.lx,
  iII1illi = iiI1lIII;
if (iII1illi.homepage !== "交流群https://qm.qq.com/q/FDrwb37XqM更新地址https://gitee.com/Myn_1/Mao_Yuna/raw/MYN_update/lx-music/YuXi.js") throw new Error("初始化失败！请加群822317725反馈");
const IIIi1iIl = (...ilii1li) => {
  if (LOG_DEBUG) IIIi1iIl("[屿溪-DEBUG]", ...ilii1li);
};
function Ii1Il1Il() {
  const i1i1i = "abcdefghijklmnopqrstuvwxyz0123456789";
  let I11i11II = "";
  for (let II1iIl1 = 0; II1iIl1 < 10; II1iIl1++) {
    const lIlill1 = Math.floor(Math.random() * i1i1i.length);
    I11i11II += i1i1i[lIlill1];
  }
  return I11i11II;
}
function Il1i11ii() {
  const iIIil = Ii1Il1Il();
  return "qm-muwat0on-" + iIIil;
}
function lliliIii() {
  const lIlilI1l = Date.now();
  while (lI1l111l.length > 0 && lIlilI1l - lI1l111l[0] > I11iiiiI) {
    lI1l111l.shift();
  }
  if (lI1l111l.length >= i11iilIl) {
    throw new Error("请求过于频繁，限制" + i11iilIl + "次/" + I11iiiiI / 1000 + "秒，请稍后重试");
  }
  lI1l111l.push(lIlilI1l);
}
const liIIIllI = {
    "kg": {
      "128k": "standard",
      "320k": "exhigh",
      "flac": "lossless",
      "flac24bit": "hires",
      "hires": "hires",
      "atmos": "atmos",
      "master": "clear"
    },
    "tx": {
      "128k": "standard",
      "320k": "exhigh",
      "flac": "lossless",
      "flac24bit": "hires",
      "hires": "hires",
      "atmos": "hires",
      "atmos_plus": "sur",
      "master": "jymaster"
    },
    "wy": {
      "128k": "standard",
      "320k": "exhigh",
      "flac": "lossless",
      "flac24bit": "hires",
      "hires": "hires",
      "atmos": "jyeffect",
      "master": "jymaster"
    },
    "kw": {
      "128k": "standard",
      "320k": "exhigh",
      "flac": "lossless",
      "flac24bit": "hires",
      "hires": "hires",
      "atmos": "atmos",
      "atmos_plus": "atmos_plus",
      "master": "master"
    },
    "mg": {
      "128k": "128k",
      "320k": "320k",
      "flac": "flac",
      "flac24bit": "flac24bit",
      "hires": "flac24bit",
      "atmos": "atmos",
      "master": "master"
    }
  },
  l1lIIilI = {
    "kg": ["clear", "atmos", "hires", "lossless", "exhigh", "standard"],
    "tx": ["jymaster", "sur", "hires", "lossless", "exhigh", "standard"],
    "wy": ["jymaster", "jyeffect", "hires", "lossless", "exhigh", "standard"],
    "kw": ["master", "atmos_plus", "atmos", "hires", "lossless", "exhigh", "standard"],
    "mg": ["master", "atmos", "flac24bit", "flac", "320k", "128k"]
  },
  lilllilI = {
    "kg": ["128k", "320k", "flac", "flac24bit", "hires", "atmos", "master"],
    "tx": ["128k", "320k", "flac", "flac24bit", "hires", "atmos", "atmos_plus", "master"],
    "wy": ["128k", "320k", "flac", "flac24bit", "hires", "atmos", "master"],
    "kw": ["128k", "320k", "flac", "flac24bit", "hires", "atmos", "atmos_plus", "master"],
    "mg": ["128k", "320k", "flac", "flac24bit", "hires", "atmos", "master"]
  },
  i11lIlil = {
    "kg": "酷狗音乐",
    "tx": "QQ音乐",
    "wy": "网易云音乐",
    "kw": "酷我音乐",
    "mg": "咪咕音乐"
  },
  lliIi1Ii = (ililil1I, IIiiIl11 = {}) => new Promise((IIIl11ll, I11iIi1i) => {
    lliliIii();
    const lliIIil1 = IIiiIl11.timeout || 8000,
      i1lilIil = setTimeout(() => {
        I11iIi1i(new Error("请求超时 " + lliIIil1 + "ms"));
      }, lliIIil1),
      IlI1l1II = {
        "User-Agent": "Mozilla/5.0 (Android 13; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36",
        "x-request-id": Il1i11ii(),
        ...(IIiiIl11.headers != null ? IIiiIl11.headers : {})
      },
      lI11III = {
        ...IIiiIl11,
        "headers": IlI1l1II
      };
    ll1ll11I(ililil1I, lI11III, (Iii11ill, Il11IiIl) => {
      clearTimeout(i1lilIil);
      if (Iii11ill) return I11iIi1i(Iii11ill);
      IIIl11ll({
        "body": Il11IiIl.body,
        "statusCode": Il11IiIl.statusCode,
        "headers": Il11IiIl.headers || {},
        "finalUrl": Il11IiIl.finalUrl || ililil1I
      });
    });
  }),
  iil1Illi = (Ii1lilI1, IiiliIi = {}) => new Promise((iiII1iIi, Il11i1li) => {
    const lIIlIl11 = IiiliIi.timeout || 8000,
      l1l11Ili = setTimeout(() => {
        Il11i1li(new Error("请求超时 " + lIIlIl11 + "ms"));
      }, lIIlIl11),
      iiIi1I1I = {
        "User-Agent": "Mozilla/5.0 (Android 13; Mobile) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36",
        ...(IiiliIi.headers != null ? IiiliIi.headers : {})
      },
      iIlI1lI1 = {
        ...IiiliIi,
        "headers": iiIi1I1I
      };
    ll1ll11I(Ii1lilI1, iIlI1lI1, (llII1ilI, lIi1lI) => {
      clearTimeout(l1l11Ili);
      if (llII1ilI) return Il11i1li(llII1ilI);
      iiII1iIi({
        "body": lIi1lI.body,
        "statusCode": lIi1lI.statusCode,
        "headers": lIi1lI.headers || {},
        "finalUrl": lIi1lI.finalUrl || Ii1lilI1
      });
    });
  });
function iil1iIii(Ili1I1l1) {
  return Ili1I1l1 + "music/health";
}
function IiIiIii(II1IIiIl) {
  return II1IIiIl + "music/resolve-url";
}
async function I1I1li1i(liiIIil) {
  const illlili = iil1iIii(liiIIil);
  try {
    const li1li1li = await iil1Illi(illlili, {
      "timeout": 5000
    });
    if (li1li1li.body && li1li1li.body.status === "ok") {
      return true;
    }
    return false;
  } catch (iliIl1il) {
    IIIi1iIl("[线路探测] 探测失败:", iliIl1il.message);
    return false;
  }
}
function I1liIll(lI1lIli, lli1II1l) {
  const i1i111i1 = l1lIIilI[lI1lIli];
  if (i1i111i1.includes(lli1II1l)) return lli1II1l;
  const i1ili1Il = i1i111i1[0];
  IIIi1iIl("[触发降级] 目标档位不可用，降级至:", i1ili1Il);
  return i1ili1Il;
}
async function IIiIiIli(lIIiI1i1, l1IlI1ii, Iil1ll1I, iiill1lI) {
  let I1il1Ill;
  lIIiI1i1 === "kg" ? I1il1Ill = l1IlI1ii.hash || l1IlI1ii.songmid || l1IlI1ii.id || "" : I1il1Ill = l1IlI1ii.songmid || l1IlI1ii.id || "";
  const IilI11I = String(I1il1Ill);
  if (!IilI11I) throw new Error("缺失歌曲标识 songmid / id / hash");
  let iIIl1llI = I1liIll(lIIiI1i1, Iil1ll1I);
  const Ili1I11l = lIIiI1i1 + "-" + IilI11I + "-" + iIIl1llI,
    lli1iI1I = Date.now();
  if (I1l1l1i.has(Ili1I11l)) {
    const ll1IlIi1 = I1l1l1i.get(Ili1I11l);
    if (ll1IlIi1.expire > lli1iI1I) {
      IIIi1iIl("[缓存命中] key:", Ili1I11l, "面板音质:", iiill1lI, "实际音质:", iIIl1llI);
      return ll1IlIi1.url;
    } else {
      I1l1l1i.delete(Ili1I11l);
    }
  }
  lliliIii();
  if (lIIiI1i1 === "kw" && iIIl1llI === "hires") {
    {
      const iIii1III = "https://nmobi.kuwo.cn/mobi.s?f=web&source=kwplayercar_ar_6.0.0.9_B_jiakong_vh.apk&type=convert_url_with_sign&rid=" + IilI11I + "&br=4000kflac&user=0&loginUid=0",
        lIl1iil = await iil1Illi(iIii1III, {
          "timeout": 8000
        });
      if (lIl1iil?.["body"]?.["code"] !== 200) throw new Error(lIl1iil?.["body"]?.["msg"] || "酷我音乐解析失败");
      const I11iI1ii = lIl1iil?.["body"]?.["data"]?.["url"];
      if (!I11iI1ii) throw new Error("未获取到有效播放链接");
      const liiiIi1I = I11iI1ii.includes("?") ? I11iI1ii.split("?")[0] : I11iI1ii;
      I1l1l1i.set(Ili1I11l, {
        "url": liiiIi1I,
        "expire": lli1iI1I + CACHE_TTL
      });
      return liiiIi1I;
    }
  }
  const l11I1II1 = IiIiIii(IIi1IlII),
    IIliiili = {
      "source": lIIiI1i1,
      "rid": IilI11I,
      "level": lIIiI1i1 === "mg" ? "standard" : iIIl1llI
    },
    l11IIll1 = await lliIi1Ii(l11I1II1, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": IIliiili,
      "timeout": 8000
    }),
    Il1IiIiI = l11IIll1.body;
  if (Il1IiIiI.code !== 0 || !Il1IiIiI.data?.["url"]) throw new Error(Il1IiIiI.message || "无可用播放链接");
  let Ii1III = Il1IiIiI.data.url;
  if (lIIiI1i1 === "mg") {
    const iilIliI = "标清高清/MP3_128_16_Stero";
    let Illii1I,
      Illiiii = ".mp3";
    switch (iiill1lI) {
      case "320k":
        Illii1I = "标清高清/MP3_320_16_Stero";
        Illiiii = ".mp3";
        break;
      case "flac":
        Illii1I = "歌曲下载/flac";
        Illiiii = ".flac";
        break;
      case "flac24bit":
      case "hires":
        Illii1I = "歌曲下载/flac_24bit";
        Illiiii = ".flac";
        break;
      case "atmos":
        Illii1I = "歌曲下载/wav_3d";
        Illiiii = ".wav";
        break;
      case "master":
        Illii1I = "歌曲下载/wav_32bit";
        Illiiii = ".wav";
        break;
      default:
        Illii1I = iilIliI;
        Illiiii = ".mp3";
    }
    let l111IIiI = decodeURIComponent(Ii1III);
    l111IIiI = l111IIiI.split("?")[0];
    l111IIiI = l111IIiI.replace(iilIliI, Illii1I);
    l111IIiI = l111IIiI.replace(/\.mp3$/, Illiiii);
    Ii1III = encodeURI(l111IIiI);
  }
  I1l1l1i.set(Ili1I11l, {
    "url": Ii1III,
    "expire": lli1iI1I + CACHE_TTL
  });
  return Ii1III;
}
i11Ilili(IlIii1ii.request, async ({
  action: ilil1llI,
  source: iliIlil1,
  info: I1Iii111
}) => {
  if (!liIIIllI[iliIlil1]) throw new Error("不支持音源:" + iliIlil1);
  const IIIii = I1Iii111.musicInfo;
  switch (ilil1llI) {
    case "musicUrl":
      {
        iil1Illi("https://www.97abc.com/count.php?id=lx-yuningxi-cq").catch(() => {});
        IIIi1iIl("[播放器请求] 音源:", iliIlil1, "面板选择音质:", I1Iii111.type);
        const liiiIIll = liIIIllI[iliIlil1][I1Iii111.type],
          IIIl1iil = await IIiIiIli(iliIlil1, IIIii, liiiIIll, I1Iii111.type);
        return IIIl1iil;
      }
    default:
      throw new Error("不支持动作:" + ilil1llI);
  }
});
(async () => {
  if (!CIRCUIT) IIi1IlII = "https://musicserver.haitangw.cc/v1/", IIIi1iIl("【音源初始化】固定使用主线路");else try {
    const lII1i1il = await I1I1li1i("https://musicserver.haitangw.cc/v1/");
    if (lII1i1il) IIi1IlII = "https://musicserver.haitangw.cc/v1/";else {
      IIIi1iIl("主线路不可用，尝试备用线路");
      const i11l1l1 = await I1I1li1i("https://qt.haitangw.net/v1/");
      i11l1l1 ? IIi1IlII = "https://qt.haitangw.net/v1/" : (IIIi1iIl("线路检测失败：线路均不可用，兜底使用api1"), IIi1IlII = "https://musicserver.haitangw.cc/v1/");
    }
    IIIi1iIl("【音源初始化】检测线路完成");
  } catch (iil1ll1l) {
    IIIi1iIl("线路探测发生异常：", iil1ll1l.message);
    IIi1IlII = "https://musicserver.haitangw.cc/v1/";
  }
  const iIlli1I = {};
  Object.keys(lilllilI).forEach(ilIIi1Il => {
    iIlli1I[ilIIi1Il] = {
      "name": i11lIlil[ilIIi1Il],
      "type": "music",
      "actions": ["musicUrl"],
      "qualitys": lilllilI[ilIIi1Il]
    };
  });
  I1Iii11I(IlIii1ii.inited, {
    "status": true,
    "sources": iIlli1I
  });
  IIIi1iIl("屿溪 · 沉音 音源初始化完成");
})();