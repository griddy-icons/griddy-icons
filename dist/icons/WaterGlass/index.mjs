import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WaterGlassIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WaterGlassIcon.displayName = "WaterGlass";
var WaterGlass_default = WaterGlassIcon;
export {
  WaterGlass_default as default
};
