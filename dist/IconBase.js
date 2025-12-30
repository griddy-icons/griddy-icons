"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var IconBase_exports = {};
__export(IconBase_exports, {
  default: () => IconBase_default
});
module.exports = __toCommonJS(IconBase_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
const IconBase = (0, import_react.forwardRef)(function IconBase2({ size = 24, filled, weights, ...rest }, ref) {
  var _a;
  const chosen = (_a = weights[filled ? "filled" : "regular"]) != null ? _a : weights.regular;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      ref,
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      ...rest,
      children: chosen
    }
  );
});
var IconBase_default = IconBase;
