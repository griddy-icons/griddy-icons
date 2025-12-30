import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShieldPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShieldPlusIcon.displayName = "ShieldPlus";
var ShieldPlus_default = ShieldPlusIcon;
export {
  ShieldPlus_default as default
};
