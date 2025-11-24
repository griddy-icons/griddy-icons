"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AnalyzeVoice: () => AnalyzeVoice_default,
  ArrowRight: () => ArrowRight_default,
  Heart: () => Heart_default,
  IconContext: () => IconContext
});
module.exports = __toCommonJS(index_exports);

// src/icons/AnalyzeVoice/index.tsx
var import_react3 = require("react");

// src/IconBase.tsx
var import_react2 = require("react");

// src/IconContext.tsx
var import_react = __toESM(require("react"));
var IconContext = import_react.default.createContext({
  color: "currentColor",
  size: 24,
  weight: "regular",
  mirrored: false
});
var IconContextProvider = IconContext.Provider;

// src/IconBase.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var IconBase = (0, import_react2.forwardRef)(function IconBase2({ color, size, weight, mirrored, weights: weights4, style, ...rest }, ref) {
  var _a, _b, _c, _d, _e, _f, _g;
  const context = (0, import_react2.useContext)(IconContext);
  const finalColor = (_a = color != null ? color : context.color) != null ? _a : "currentColor";
  const finalSize = (_b = size != null ? size : context.size) != null ? _b : 24;
  const finalWeight = (_c = weight != null ? weight : context.weight) != null ? _c : "regular";
  const finalMirrored = (_d = mirrored != null ? mirrored : context.mirrored) != null ? _d : false;
  const chosen = (_g = (_f = (_e = weights4[finalWeight]) != null ? _e : weights4.regular) != null ? _f : weights4.bold) != null ? _g : Object.values(weights4)[0];
  const transform = finalMirrored ? "scale(-1,1)" : void 0;
  const mergedStyle = finalMirrored ? { ...style != null ? style : {}, transformOrigin: "center", transform: "scaleX(-1)" } : style;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: finalSize,
      height: finalSize,
      viewBox: "0 0 256 256",
      fill: finalColor,
      ...transform ? { transform } : {},
      style: mergedStyle,
      ...rest,
      children: chosen
    }
  );
});
var IconBase_default = IconBase;

// src/icons/AnalyzeVoice/bold.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var bold_default = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("g", { transform: "scale(10.666666666666666)", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 16a5 5 0 0 0 4.975-4.5H14.75V10c0-.965-.785-1.75-1.75-1.75h-1.5v-4.5H13c.705 0 1.31-.42 1.585-1.025A4.953 4.953 0 0 0 12 2C9.24 2 7 4.24 7 7v4c0 2.76 2.24 5 5 5Zm0 1.5a6.48 6.48 0 0 1-6.005-4.01l-1.385.575a7.978 7.978 0 0 0 6.645 4.9v1.54H7v1.5h10v-1.5h-4.25v-1.54a7.985 7.985 0 0 0 6.645-4.9l-1.385-.575a6.486 6.486 0 0 1-6.005 4.01H12ZM16.25 2h1.5c0 1.79 1.46 3.25 3.25 3.25v1.5c-1.79 0-3.25 1.46-3.25 3.25h-1.5c0-1.79-1.46-3.25-3.25-3.25v-1.5c1.79 0 3.25-1.46 3.25-3.25Zm-.7 4c.585.375 1.08.87 1.45 1.45.375-.585.87-1.08 1.45-1.45A4.775 4.775 0 0 1 17 4.55 4.775 4.775 0 0 1 15.55 6Z", fill: "#202023" }) }) });

// src/icons/AnalyzeVoice/regular.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var regular_default = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("g", { transform: "scale(10.666666666666666)", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.75 2h-1.5c0 1.79-1.46 3.25-3.25 3.25v1.5c1.79 0 3.25 1.46 3.25 3.25h1.5c0-1.79 1.46-3.25 3.25-3.25v-1.5c-1.79 0-3.25-1.46-3.25-3.25ZM17 7.45A4.775 4.775 0 0 0 15.55 6 4.775 4.775 0 0 0 17 4.55c.37.58.865 1.075 1.45 1.45-.58.37-1.075.865-1.45 1.45ZM12 17.5a6.48 6.48 0 0 1-6.005-4.01l-1.385.575a7.978 7.978 0 0 0 6.645 4.9v1.54H7v1.5h10v-1.5h-4.25v-1.54a7.985 7.985 0 0 0 6.645-4.9l-1.385-.575a6.486 6.486 0 0 1-6.005 4.01H12Zm4.975-6A5.003 5.003 0 0 1 12 16c-2.755 0-5-2.245-5-5V7c0-2.755 2.245-5 5-5v1.5c-1.93 0-3.5 1.57-3.5 3.5v4c0 1.93 1.57 3.5 3.5 3.5a3.501 3.501 0 0 0 3.46-3h1.515Z", fill: "#202023" }) }) });

// src/icons/AnalyzeVoice/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var weights = { bold: bold_default, regular: regular_default };
var AnalyzeVoice = (0, import_react3.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(IconBase_default, { ref, ...props, weights }));
AnalyzeVoice.displayName = "AnalyzeVoice";
var AnalyzeVoice_default = AnalyzeVoice;

// src/icons/ArrowRight/index.tsx
var import_react4 = require("react");

// src/icons/ArrowRight/bold.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var bold_default2 = /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M44 128H208", stroke: "currentColor", strokeWidth: "24", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "M152 72L208 128L152 184", stroke: "currentColor", strokeWidth: "24", strokeLinecap: "round", strokeLinejoin: "round" })
] });

// src/icons/ArrowRight/regular.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var regular_default2 = /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M48 128H208", stroke: "currentColor", strokeWidth: "16", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M160 80L208 128L160 176", stroke: "currentColor", strokeWidth: "16", strokeLinecap: "round", strokeLinejoin: "round" })
] });

// src/icons/ArrowRight/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var weights2 = { bold: bold_default2, regular: regular_default2 };
var ArrowRight = (0, import_react4.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(IconBase_default, { ref, ...props, weights: weights2 }));
ArrowRight.displayName = "ArrowRight";
var ArrowRight_default = ArrowRight;

// src/icons/Heart/index.tsx
var import_react5 = require("react");

// src/icons/Heart/bold.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var bold_default3 = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M128 216s-72-44.8-96-86.4C20.8 104 36 72 68 64c20.4-4.8 39.2 4.8 48 20 8.8-15.2 27.6-24.8 48-20 32 8 47.2 40 36 65.6C200 171.2 128 216 128 216Z", stroke: "currentColor", strokeWidth: "24", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) });

// src/icons/Heart/regular.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var regular_default3 = /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_jsx_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M128 216s-72-44.8-96-86.4C20.8 104 36 72 68 64c20.4-4.8 39.2 4.8 48 20 8.8-15.2 27.6-24.8 48-20 32 8 47.2 40 36 65.6C200 171.2 128 216 128 216Z", stroke: "currentColor", strokeWidth: "16", strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }) });

// src/icons/Heart/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var weights3 = { bold: bold_default3, regular: regular_default3 };
var Heart = (0, import_react5.forwardRef)((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(IconBase_default, { ref, ...props, weights: weights3 }));
Heart.displayName = "Heart";
var Heart_default = Heart;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnalyzeVoice,
  ArrowRight,
  Heart,
  IconContext
});
//# sourceMappingURL=index.js.map