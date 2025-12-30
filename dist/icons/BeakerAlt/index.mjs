import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BeakerAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BeakerAltIcon.displayName = "BeakerAlt";
var BeakerAlt_default = BeakerAltIcon;
export {
  BeakerAlt_default as default
};
