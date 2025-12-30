import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BloodDropMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BloodDropMinusIcon.displayName = "BloodDropMinus";
var BloodDropMinus_default = BloodDropMinusIcon;
export {
  BloodDropMinus_default as default
};
