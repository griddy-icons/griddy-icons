import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CircleCrossedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CircleCrossedIcon.displayName = "CircleCrossed";
var CircleCrossed_default = CircleCrossedIcon;
export {
  CircleCrossed_default as default
};
