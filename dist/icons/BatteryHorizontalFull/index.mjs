import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BatteryHorizontalFullIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BatteryHorizontalFullIcon.displayName = "BatteryHorizontalFull";
var BatteryHorizontalFull_default = BatteryHorizontalFullIcon;
export {
  BatteryHorizontalFull_default as default
};
