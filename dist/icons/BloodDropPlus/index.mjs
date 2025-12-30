import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BloodDropPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BloodDropPlusIcon.displayName = "BloodDropPlus";
var BloodDropPlus_default = BloodDropPlusIcon;
export {
  BloodDropPlus_default as default
};
