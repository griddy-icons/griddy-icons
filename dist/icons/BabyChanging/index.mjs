import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BabyChangingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BabyChangingIcon.displayName = "BabyChanging";
var BabyChanging_default = BabyChangingIcon;
export {
  BabyChanging_default as default
};
