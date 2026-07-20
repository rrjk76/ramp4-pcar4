import { defineComponent as R, ref as _, onMounted as ce, createElementBlock as l, openBlock as e, createElementVNode as h, normalizeClass as Y, createCommentVNode as N, Fragment as K, renderList as te, normalizeStyle as he, toDisplayString as z, computed as E, resolveDirective as P, withDirectives as F, withModifiers as _e, createVNode as oe, onBeforeMount as se, watch as V, onBeforeUnmount as le, unref as w, createBlock as W, inject as ae, resolveDynamicComponent as fe, nextTick as re, createTextVNode as ue, resolveComponent as Ie, withCtx as ye } from "vue";
import { _ as de, e as ie, X as ve, a2 as Me, L as Se, Y as Ce, G as ee, a0 as De, a1 as ze } from "./main-D04fyO2j.js";
import { useI18n as X } from "vue-i18n";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "tiny-emitter";
import "throttle-debounce";
import "pinia";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import be from "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { T as He } from "./toggle-switch-control-DBhE_yYi.js";
const je = {
  key: 0,
  class: "relative"
}, Ne = {
  key: 0,
  class: "relative"
}, Oe = ["innerHTML"], Be = ["src"], Ae = {
  key: 1,
  class: "w-32 h-32"
}, qe = { class: "symbologyIcon" }, Fe = ["innerHTML"], Pe = ["src"], Ge = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Re = {
  key: 0,
  class: "px-5"
}, Ue = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, Ve = /* @__PURE__ */ R({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(m) {
    const M = m, t = _([]);
    return ce(() => {
      t.value = M.layer.legend;
    }), (d, g) => m.result.loaded ? (e(), l("div", je, [
      h("div", {
        class: Y(m.result.items.length === 0 ? "opacity-50" : "")
      }, [
        t.value.length > 1 ? (e(), l("div", Ne, [
          (e(!0), l(K, null, te(t.value.slice(0, 3).reverse(), (b, f) => (e(), l("div", {
            class: Y(["absolute", [f == 0 ? "symbol-0" : f == 1 ? "left-3" : "left-6"]]),
            style: he({ "z-index": 3 - f }),
            key: f
          }, [
            t.value[f].svgcode ? (e(), l("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: t.value[f].svgcode
            }, null, 8, Oe)) : t.value[f].imgUrl ? (e(), l("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: t.value[f].imgUrl
            }, null, 8, Be)) : N("", !0)
          ], 6))), 128))
        ])) : t.value.length > 0 ? (e(), l("div", Ae, [
          h("div", qe, [
            t.value[0].svgcode ? (e(), l("span", {
              key: 0,
              innerHTML: t.value[0].svgcode
            }, null, 8, Fe)) : t.value[0].imgUrl ? (e(), l("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: t.value[0].imgUrl
            }, null, 8, Pe)) : N("", !0)
          ])
        ])) : N("", !0)
      ], 2),
      h("div", Ge, [
        m.result.loaded ? (e(), l("div", Re, z(m.result.items.length), 1)) : N("", !0)
      ])
    ])) : (e(), l("div", Ue, g[0] || (g[0] = [
      h("div", { class: "symbologyIcon h-32 w-32" }, [
        h("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Ye = /* @__PURE__ */ de(Ve, [["__scopeId", "data-v-496d788d"]]), Ze = ["content"], We = { class: "symbologyLayerName truncate" }, Xe = /* @__PURE__ */ R({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(m) {
    const M = ie(), t = E(() => M.properties), d = m, g = () => {
      const b = d.layer;
      return b && t.value[b.id] && t.value[b.id].name ? t.value[b.id].name : b?.name ?? "";
    };
    return (b, f) => {
      const S = P("tippy");
      return F((e(), l("button", {
        class: Y(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", m.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: f[0] || (f[0] = _e(() => {
        }, ["stop"])),
        content: g()
      }, [
        oe(Ye, {
          class: "symbStack w-32 h-32 mr-10",
          layer: m.layer,
          result: m.result
        }, null, 8, ["layer", "result"]),
        h("div", We, z(g()), 1)
      ], 10, Ze)), [
        [S, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), Je = ["content"], Ke = /* @__PURE__ */ R({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(m, { emit: M }) {
    const { t } = X(), d = ve(), g = _(), b = () => {
      g.value._tippy.hide();
    }, f = (I) => {
      I.key === "Tab" && g.value?.matches(":focus") && g.value._tippy.show();
    }, S = M, C = m, s = _(""), r = _([]), o = _(!1), i = _(!1), y = (I) => d.getLayerByUid(I), c = (I) => {
      s.value = I, S("selection-changed", I), o.value = !1;
    }, k = () => {
      i.value || setTimeout(() => {
        o.value = i.value;
      }, 500), i.value = !0;
    }, O = () => {
      o.value = i.value = !1;
    }, B = () => {
      i.value || (o.value = !0), i.value = !0;
    }, D = () => {
      o.value = i.value = !1;
    };
    return se(() => {
      r.value.push(
        V(C, () => {
          s.value = C.selected;
        })
      );
    }), ce(() => {
      g.value?.addEventListener("blur", b), g.value?.addEventListener("keyup", f);
    }), le(() => {
      r.value.forEach((I) => I()), g.value?.removeEventListener("blur", b), g.value?.removeEventListener("keyup", f);
    }), (I, q) => {
      const u = P("focus-item"), T = P("focus-list"), p = P("tippy");
      return F((e(), l("div", {
        class: Y(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": o.value }]),
        onMouseover: k,
        onMouseleave: O,
        onFocus: B,
        onBlur: _e(D, ["self"]),
        content: w(t)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: g
      }, [
        (e(!0), l(K, null, te(C.results, (H, n) => (e(), l("div", {
          class: "flex justify-start relative",
          key: n
        }, [
          F((e(), W(Xe, {
            key: H.uid,
            layer: y(H.uid),
            result: H,
            selected: H.uid === s.value,
            onClick: (v) => c(H.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [u]
          ])
        ]))), 128))
      ], 42, Je)), [
        [T],
        [p, {
          trigger: "manual",
          placement: "top-start",
          touch: !1
        }]
      ]);
    };
  }
}), Qe = { class: "inline font-bold" }, et = ["innerHTML"], tt = /* @__PURE__ */ R({
  __name: "esri-default",
  props: {
    fixtureFields: {
      type: Object,
      required: !1
    },
    fields: {
      type: Object,
      required: !0
    },
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(m) {
    const { t: M } = X(), t = ae("iApi"), d = m, g = (s, r, o, i) => {
      const y = s.find((c) => c[r].toLowerCase() === o.toLowerCase());
      y && delete i[y.name];
    }, b = () => {
      const s = Object.assign({}, d.identifyData.data);
      g(d.fields, "type", "geometry", s), t.ui.exposeOids || g(d.fields, "type", "oid", s), t.ui.exposeMeasurements || (g(d.fields, "name", "shape_length", s), g(d.fields, "name", "shape_area", s));
      const r = {};
      d.fields.forEach((i) => {
        const y = d.fixtureFields?.find((c) => i.name === c.field);
        r[i.name] = {
          name: y?.alias || i.alias || i.name,
          type: i.type,
          visible: y?.visible ?? !0
        };
      });
      const o = {};
      Object.keys(s).forEach((i) => {
        const y = r[i];
        if (y && y.visible) {
          const c = s[i];
          o[i] = {
            value: typeof c == "number" ? t.ui.formatNumber(c) : c,
            alias: y.name,
            type: y.type
          };
        }
      });
      for (const [i] of Object.entries(o))
        t.ui.isPlainText(o[i].value) && (o[i].value = t.ui.escapeHtml(o[i].value));
      return o;
    }, f = (s, r, o) => {
      switch (o) {
        case "date":
          return C(s);
        default:
          return S(s, r);
      }
    }, S = (s, r) => {
      if (!s)
        return s;
      if (s.trim().match(/\.(jpeg|jpg|gif|png)$/) || s.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
      ))
        return `<img src="${s}" alt="${M("details.item.alert.defaultAltText", { alias: r })}" />`;
      const o = "underline text-blue-700 break-all", i = document.createElement("div");
      return i.innerHTML = s.trim(), i.firstElementChild?.tagName == "A" ? (i.firstElementChild.className = o, i.innerHTML) : be(s, {
        className: o,
        target: "_blank",
        validate: {
          url: (c) => /^https?:\/\//.test(c)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, C = (s) => {
      const r = parseInt(s);
      return isNaN(r) ? s : new Date(r).toISOString().split("T")[0];
    };
    return (s, r) => (e(), l("div", null, [
      (e(!0), l(K, null, te(b(), (o, i, y) => (e(), l("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: y
      }, [
        h("span", Qe, z(o.alias), 1),
        r[0] || (r[0] = h("span", { class: "flex-auto" }, null, -1)),
        h("span", {
          class: "inline",
          innerHTML: f(o.value, o.alias, o.type)
        }, null, 8, et)
      ]))), 128))
    ]));
  }
}), st = ["innerHTML"], lt = { key: 1 }, at = /* @__PURE__ */ R({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(m) {
    const { t: M } = X();
    return (t, d) => m.identifyData ? (e(), l("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: m.identifyData.data.data ?? m.identifyData.data
    }, null, 8, st)) : (e(), l("div", lt, z(w(M)("details.layers.results.empty")), 1));
  }
}), it = { class: "relative flex flex-grow truncate" }, nt = {
  key: 0,
  class: "flex flex-grow items-center truncate"
}, ot = { class: "flex p-8 items-center" }, rt = ["innerHTML"], ut = {
  key: 1,
  class: "symbologyIcon p-6"
}, ct = ["content", "innerHTML", "tabindex"], dt = {
  key: 1,
  class: "flex p-6 flex-grow"
}, vt = {
  key: 2,
  class: "zoomButton text-center p-3"
}, mt = ["content", "aria-label"], pt = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, ft = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
}, yt = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
}, gt = ["innerHTML"], ge = /* @__PURE__ */ R({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(m) {
    const M = ve(), t = m, d = ae("iApi"), g = _([]), b = ie(), { t: f } = X(), S = _(!1), C = _(""), s = _("none"), r = _(), o = () => M.getLayerByUid(t.uid), i = E(() => b.properties), y = E(() => b.defaultTemplates), c = E(() => o()?.supportsFeatures ?? !1), k = E(() => o()?.mapLayer ?? !1), O = E(() => {
      const n = o();
      let v = n && t.data.loaded ? n.nameValue(t.data.data) : d.$i18n.t("details.items.title");
      return d.ui.isPlainText(v) && (v = d.ui.escapeHtml(v)), v;
    }), B = (n) => {
      if (typeof n == "string") {
        const v = "underline text-blue-700 break-all", x = document.createElement("div");
        return x.innerHTML = n.trim(), x.firstElementChild?.tagName == "A" ? (x.firstElementChild.className = v, x.innerHTML) : be(n, {
          className: v,
          target: "_blank",
          validate: {
            url: ($) => /^https?:\/\//.test($)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return n;
    }, D = () => {
      p("none"), t.data.loaded ? I() : t.data.load().then(() => {
        I();
      });
    }, I = () => {
      if (C.value = "", !(t.data && t.data.loaded))
        return;
      const n = o();
      if (n === void 0) {
        console.warn(`could not find layer for uid ${t.uid} during icon lookup`);
        return;
      }
      if (n.supportsFeatures) {
        const v = n.oidField;
        n.getIcon(t.data.data[v]).then((x) => {
          C.value = x;
        });
      }
    }, q = E(() => {
      const n = o(), v = n && i.value[n.id] && i.value[n.id].template;
      if (v) {
        if (typeof fe(v) != "string")
          return v;
        re(
          () => d.notify.show(
            Me.WARNING,
            d.$i18n.t("details.template.notFound", { layer: v })
          )
        );
      }
      return y.value && y.value[t.data.format] ? y.value[t.data.format] : c.value ? tt : at;
    }), u = E(() => c.value ? o()?.fields || [] : []), T = E(() => {
      const n = o();
      if (n && i.value[n.id] && i.value[n.id].fields)
        return i.value[n.id].fields;
    }), p = (n) => {
      n === "zoomed" || n === "error" ? setTimeout(() => {
        s.value = n, r.value?._tippy.show(), setTimeout(() => {
          r.value?._tippy.hide(), s.value = "none";
        }, 3e3);
      }, 300) : s.value = n;
    }, H = () => {
      if (s.value !== "none")
        return;
      p("zooming");
      const n = o();
      if (n === void 0 || !n.isLoaded) {
        console.warn(`Could not find layer for uid ${t.uid} during zoom geometry lookup`), p("error");
        return;
      }
      if (!t.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), p("error");
        return;
      }
      const v = t.data.data[n.oidField], x = () => {
        const A = { getGeom: !0 };
        n.getGraphic(v, A).then(($) => {
          $.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${v}`), p("error")) : (d.geo.map.zoomMapTo($.geometry), p("zoomed"), d.updateAlert(d.$i18n.t("details.item.alert.zoom")));
        }).catch(() => {
          p("error");
        });
      };
      n.layerType === Se.FEATURE && n.geomType !== Ce.POINT ? n.getGraphicExtent(v).then((A) => {
        d.geo.map.zoomMapTo(A), p("zoomed"), d.updateAlert(d.$i18n.t("details.item.alert.zoom"));
      }).catch(() => {
        x();
      }) : x();
    };
    return se(() => {
      g.value.push(
        V(
          t,
          () => {
            D();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      );
    }), le(() => {
      g.value.forEach((n) => n());
    }), (n, v) => {
      const x = P("truncate"), A = P("tippy");
      return e(), l(K, null, [
        h("div", it, [
          c.value ? (e(), l("div", nt, [
            h("div", ot, [
              m.data.loaded && C.value ? (e(), l("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: C.value
              }, null, 8, rt)) : (e(), l("div", ut, v[3] || (v[3] = [
                h("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            m.data.loaded ? F((e(), l("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: O.value,
              innerHTML: B(O.value),
              onTouchstart: v[0] || (v[0] = ($) => S.value = !0),
              onTouchend: v[1] || (v[1] = ($) => S.value = !1),
              tabindex: m.inList ? -1 : 0
            }, null, 40, ct)), [
              [x, {
                options: {
                  placement: "top-start",
                  // Offset more for touch devices so tooltip is visible above finger
                  offset: () => S.value ? [0, 25] : [0, 0]
                }
              }]
            ]) : (e(), l("div", dt, z(w(f)("details.loading")), 1)),
            m.data.loaded ? (e(), l("span", vt, [
              k.value ? F((e(), l("button", {
                key: 0,
                type: "button",
                content: w(f)(`details.item.zoom${s.value === "none" ? "" : `.${s.value}`}`),
                "aria-label": w(f)(`grid.cells.zoom${s.value === "none" ? "" : `.${s.value}`}`),
                ref_key: "zoomButton",
                ref: r,
                onClick: v[2] || (v[2] = ($) => {
                  $.stopPropagation(), H();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                s.value === "zooming" ? (e(), l("div", pt)) : s.value === "zoomed" ? (e(), l("svg", ft, v[4] || (v[4] = [
                  h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : s.value === "error" ? (e(), l("svg", yt, v[5] || (v[5] = [
                  h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (e(), l("span", {
                  key: 3,
                  innerHTML: w(d).ui.getZoomIcon()
                }, null, 8, gt))
              ], 8, mt)), [
                [A, { placement: "bottom" }]
              ]) : N("", !0)
            ])) : N("", !0)
          ])) : N("", !0)
        ]),
        m.open ? (e(), W(fe(q.value), {
          key: 0,
          identifyData: m.data,
          fields: u.value,
          fixtureFields: T.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : N("", !0)
      ], 64);
    };
  }
}), ht = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
}, _t = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, bt = { for: "toggle" }, kt = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, xt = { class: "flex" }, Lt = ["aria-label"], wt = ["content", "aria-label", "disabled"], Tt = { class: "px-3 text-center flex-grow" }, $t = ["content", "aria-label", "disabled"], Et = { key: 3 }, It = { key: 0 }, Mt = ["content"], St = ["onClick"], Ct = {
  key: 1,
  class: "text-center"
}, Dt = {
  key: 4,
  class: "p-5"
}, zt = /* @__PURE__ */ R({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  emits: ["item-selected"],
  setup(m, { emit: M }) {
    const t = _(), d = () => {
      t.value._tippy.hide();
    }, g = (a) => {
      a.key === "Tab" && t.value?.matches(":focus") && t.value._tippy.show();
    }, b = ae("iApi"), f = ie(), S = ve(), C = M, s = m, { t: r } = X(), o = _(!1), i = _(b.fixture.get("details")), y = _(!0), c = _(!1), k = _(0), O = _(20), B = _([]), D = _([]), I = E(() => f.activeGreedy), q = E(() => f.properties), u = E(() => k.value + O.value), T = () => S.getLayerByUid(s.uid), p = () => s.results.find((a) => a.uid === s.uid), H = E(() => p()?.loaded ?? !1), n = E(() => p()?.requestTime), v = E(
      () => o.value && (!c.value && $().length > 1 || c.value && $().length > O.value)
    ), x = E(() => {
      const a = T();
      return a && q.value[a.id] && q.value[a.id].name ? q.value[a.id].name : a?.name ?? "";
    }), A = E(() => s.uid), $ = () => {
      const a = p();
      return a ? a.items : [];
    }, j = E(() => $()[k.value]), Z = E(() => {
      if (i.value.hasHilighter()) {
        const a = T();
        if (a)
          return a.mapLayer && a.supportsFeatures;
      }
      return !1;
    }), J = (a) => {
      y.value = a, f.hilightToggle = a, G();
    }, ke = () => {
      const a = T();
      k.value = k.value ?? 0, y.value = f.hilightToggle ?? y.value, c.value = !1, o.value = !!a, G();
    }, me = (a) => {
      c.value ? (k.value += a * O.value, G()) : k.value += a;
    }, G = async (a = !1) => {
      if (y.value && Z.value) {
        if (a) {
          const U = p();
          U && await U.loading;
        }
        const L = $();
        if (H.value && L.length > 0) {
          if (c.value)
            i.value.hilightDetailsItems(L.slice(k.value, u.value), s.uid);
          else {
            const U = L[k.value];
            U && i.value.hilightDetailsItems([U], s.uid);
          }
          return;
        }
      }
      i.value.removeDetailsHilight();
    }, xe = () => {
      c.value = !0, k.value = Math.floor(k.value / O.value) * O.value, G();
    }, Le = () => {
      i.value.removeDetailsHilight(), D.value.forEach((a) => a()), B.value.forEach((a) => b.event.off(a));
    }, we = () => {
      i.value.removeDetailsHilight();
    }, Te = (a) => {
      const L = k.value;
      k.value = a, c.value = !1, L === a && G(), C("item-selected");
    };
    return ce(() => {
      B.value.push(
        b.event.on(ee.LAYER_REMOVE, (a) => {
          const L = b.panel.get("details");
          s.uid === a.uid && L && L.close();
        })
      ), B.value.push(
        b.event.on(ee.PANEL_CLOSED, (a) => {
          a.id === "details" && Le();
        })
      ), B.value.push(
        b.event.on(ee.PANEL_MINIMIZED, (a) => {
          a.id === "details" && we();
        })
      ), B.value.push(
        b.event.on(ee.MAP_BASEMAPCHANGE, (a) => {
          y.value && a.schemaChanged && G();
        })
      ), t.value?.addEventListener("blur", d), t.value?.addEventListener("keyup", g);
    }), se(() => {
      D.value.push(
        V(
          j,
          () => {
            c.value || (ke(), j.value === void 0 && i.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), D.value.push(
        V(
          A,
          () => {
            const a = s.uid;
            if (c.value && a) {
              const L = p();
              L && L.loading.then(() => {
                s.uid === a && c.value && G();
              });
            }
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), D.value.push(
        V(n, () => {
          k.value = 0, c.value && G(!0);
        })
      ), D.value.push(
        V(
          () => s.uid,
          () => {
            k.value = 0;
          }
        )
      );
    }), le(() => {
      t.value?.removeEventListener("blur", d), t.value?.removeEventListener("keyup", g);
    }), (a, L) => {
      const U = P("truncate"), ne = P("tippy"), $e = P("focus-item"), Ee = P("focus-list");
      return H.value && I.value === 0 ? (e(), l("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: he(m.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        o.value ? F((e(), l("h1", ht, [
          ue(z(x.value), 1)
        ])), [
          [U, { options: { placement: "top-start" } }]
        ]) : N("", !0),
        Z.value ? (e(), l("div", _t, [
          h("label", bt, z(w(r)("details.togglehilight.title")), 1),
          oe(He, {
            config: {
              value: y.value,
              disabled: !1
            },
            onToggled: J
          }, null, 8, ["config"])
        ])) : N("", !0),
        v.value ? (e(), l("div", kt, [
          h("div", xt, [
            c.value ? N("", !0) : (e(), l("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": w(r)("details.item.see.list"),
              onClick: L[0] || (L[0] = (Q) => xe())
            }, z(w(r)("details.item.see.list")), 9, Lt)),
            h("div", {
              class: Y(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": c.value }])
            }, [
              F((e(), l("button", {
                type: "button",
                content: w(r)(c.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: L[1] || (L[1] = (Q) => me(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": w(r)(c.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: k.value === 0
              }, L[3] || (L[3] = [
                h("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  h("g", null, [
                    h("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, wt)), [
                [ne, { placement: "top" }]
              ]),
              h("span", Tt, z(c.value ? w(r)("details.items.range", [
                k.value + 1,
                Math.min(u.value, $().length),
                $().length
              ]) : w(r)("details.item.count", [k.value + 1, $().length])), 1),
              F((e(), l("button", {
                type: "button",
                content: w(r)(c.value ? "details.items.next" : "details.item.next.item"),
                onClick: L[2] || (L[2] = (Q) => me(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": w(r)(c.value ? "details.items.next" : "details.item.next.item"),
                disabled: !c.value && k.value === $().length - 1 || c.value && u.value >= $().length
              }, L[4] || (L[4] = [
                h("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  h("g", null, [
                    h("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, $t)), [
                [ne, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : N("", !0),
        o.value ? (e(), l("div", Et, [
          $().length > 0 ? (e(), l("div", It, [
            c.value ? F((e(), l("div", {
              key: 0,
              class: "flex flex-col",
              content: w(r)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: t
            }, [
              (e(!0), l(K, null, te($().slice(k.value, u.value), (Q, pe) => F((e(), l("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: pe,
                onClick: (Ot) => Te(k.value + pe)
              }, [
                oe(ge, {
                  data: Q,
                  uid: m.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, St)), [
                [$e, "show-truncate"]
              ])), 128))
            ], 8, Mt)), [
              [Ee],
              [ne, {
                trigger: "manual",
                placement: "top-start",
                touch: !1
              }]
            ]) : (e(), W(ge, {
              key: 1,
              data: j.value,
              uid: m.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (e(), l("div", Ct, z(w(r)("details.layers.results.empty.currentLayer")), 1))
        ])) : (e(), l("div", Dt, z(w(r)("details.item.no.data")), 1))
      ], 4)) : (e(), l("div", {
        key: 1,
        class: Y(["flex justify-center py-10 items-center", m.results.length > 1 ? "ml-42" : ""])
      }, [
        L[5] || (L[5] = h("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        ue(" " + z(w(r)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Ht = /* @__PURE__ */ de(zt, [["__scopeId", "data-v-60b1b8a2"]]), jt = { class: "relative h-full" }, Nt = /* @__PURE__ */ R({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(m) {
    const { t: M } = X(), t = ae("iApi"), d = ie(), g = _([]), b = _([]), f = _([]), S = _([]), C = _(!1), s = _(null), r = _(""), o = E(() => d.activeGreedy), i = E(() => d.payload), y = E(() => d.properties), c = (u) => {
      r.value = u;
    }, k = (u) => f.value.find((T) => T.uid === u), O = (u) => {
      u !== void 0 && (d.activeGreedy = u.length === 0 ? 0 : u[0].requestTime, f.value = u, B(u));
    }, B = (u) => {
      if (q(u), r.value) {
        const T = k(r.value);
        T ? T.loading.then(() => {
          T.requestTime === o.value && (T.items.length > 0 ? I(!1) : D(u));
        }) : D(u);
      } else
        D(u);
    }, D = (u, T) => {
      let p;
      if (T)
        p = T;
      else {
        const x = d.properties, A = u.map((j) => [
          x[j.layerId]?.priority ?? 50,
          j.layerId
        ]), $ = new Set(A.map((j) => j[0]));
        p = [], $.forEach((j) => {
          const Z = A.filter((J) => J[0] === j).map((J) => J[1]);
          p.push([j, Z]);
        }), p.sort((j, Z) => Z[0] - j[0]);
      }
      if (p.length === 0) {
        i.value.length ? I(!0) : re().then(() => {
          I(!0);
        });
        return;
      }
      const H = p[p.length - 1][1], n = u.filter((x) => H.includes(x.layerId)).map(
        (x) => x.loading.then(() => x.items.length > 0 ? Promise.resolve(x) : Promise.reject())
      ), v = u.length === 0 ? 0 : u[0].requestTime;
      Promise.any(n).then((x) => {
        x.requestTime === o.value && (r.value = x.uid, I(!1));
      }).catch(() => {
        v === o.value && (p.pop(), D(u, p));
      });
    }, I = (u) => {
      d.activeGreedy = 0, C.value = u;
    }, q = (u) => {
      S.value = u.filter((T) => {
        const p = t.geo.layer.getLayer(T.layerId);
        return !(!p || p.layerState !== De.LOADED || !p.visibility || p.mapLayer && p.getSqlFilter(ze.SYMBOL) === "1=2");
      });
    };
    return se(() => {
      b.value.push(
        V(
          i,
          (u) => {
            O(u);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      );
    }), le(() => {
      g.value.forEach((u) => t.event.off(u)), b.value.forEach((u) => u());
    }), (u, T) => {
      const p = Ie("panel-screen");
      return e(), W(p, { panel: m.panel }, {
        header: ye(() => [
          ue(z(
            // Show different titles based on what requested the panel
            w(d).origin === "toggleEvent" ? w(M)("details.layers.title.gridOrigin") : w(M)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: ye(() => [
          h("div", jt, [
            S.value.length > 1 ? (e(), W(Ke, {
              key: 0,
              results: S.value,
              detailsProperties: y.value,
              selected: r.value,
              onSelectionChanged: c
            }, null, 8, ["results", "detailsProperties", "selected"])) : N("", !0),
            h("div", {
              class: "detailsContentSection overflow-y-auto h-full",
              ref_key: "detailsPanel",
              ref: s
            }, [
              C.value ? (e(), l("div", {
                key: 1,
                class: Y(["text-center", { "ml-42": S.value.length > 1 }])
              }, z(S.value.length >= 1 ? w(M)("details.layers.results.empty") : w(M)("details.layers.results.empty.noLayers")), 3)) : (e(), W(Ht, {
                key: 0,
                uid: r.value,
                results: S.value,
                onItemSelected: T[0] || (T[0] = () => re(() => s.value?.scrollTo({ top: 0 })))
              }, null, 8, ["uid", "results"]))
            ], 512)
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), xs = /* @__PURE__ */ de(Nt, [["__scopeId", "data-v-c970be8d"]]);
export {
  xs as default
};
