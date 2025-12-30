import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FerrisWheelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FerrisWheelIcon.displayName = "FerrisWheel";
var FerrisWheel_default = FerrisWheelIcon;
export {
  FerrisWheel_default as default
};
