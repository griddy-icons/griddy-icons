import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MuscleFlexIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MuscleFlexIcon.displayName = "MuscleFlex";
var MuscleFlex_default = MuscleFlexIcon;
export {
  MuscleFlex_default as default
};
