import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChickenLegIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChickenLegIcon.displayName = "ChickenLeg";
var ChickenLeg_default = ChickenLegIcon;
export {
  ChickenLeg_default as default
};
