import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CPlusPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CPlusPlusIcon.displayName = "CPlusPlus";
var CPlusPlus_default = CPlusPlusIcon;
export {
  CPlusPlus_default as default
};
