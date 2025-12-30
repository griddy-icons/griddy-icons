import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShieldCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShieldCheckIcon.displayName = "ShieldCheck";
var ShieldCheck_default = ShieldCheckIcon;
export {
  ShieldCheck_default as default
};
