import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CrystalBallIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CrystalBallIcon.displayName = "CrystalBall";
var CrystalBall_default = CrystalBallIcon;
export {
  CrystalBall_default as default
};
