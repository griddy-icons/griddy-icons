import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PlusCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PlusCircleIcon.displayName = "PlusCircle";
var PlusCircle_default = PlusCircleIcon;
export {
  PlusCircle_default as default
};
