import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BeakerEmptyAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BeakerEmptyAltIcon.displayName = "BeakerEmptyAlt";
var BeakerEmptyAlt_default = BeakerEmptyAltIcon;
export {
  BeakerEmptyAlt_default as default
};
