import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const IconBase = forwardRef(function IconBase2({ size = 24, filled, weights, ...rest }, ref) {
  var _a;
  const chosen = (_a = weights[filled ? "filled" : "regular"]) != null ? _a : weights.regular;
  return /* @__PURE__ */ jsx(
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
export {
  IconBase_default as default
};
