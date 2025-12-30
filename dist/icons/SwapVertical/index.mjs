import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SwapVerticalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SwapVerticalIcon.displayName = "SwapVertical";
var SwapVertical_default = SwapVerticalIcon;
export {
  SwapVertical_default as default
};
