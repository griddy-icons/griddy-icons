import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BeakerEmptyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BeakerEmptyIcon.displayName = "BeakerEmpty";
var BeakerEmpty_default = BeakerEmptyIcon;
export {
  BeakerEmpty_default as default
};
