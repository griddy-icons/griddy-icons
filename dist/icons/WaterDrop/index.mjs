import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WaterDropIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WaterDropIcon.displayName = "WaterDrop";
var WaterDrop_default = WaterDropIcon;
export {
  WaterDrop_default as default
};
