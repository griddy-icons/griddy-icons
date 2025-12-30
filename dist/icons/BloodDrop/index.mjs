import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BloodDropIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BloodDropIcon.displayName = "BloodDrop";
var BloodDrop_default = BloodDropIcon;
export {
  BloodDrop_default as default
};
