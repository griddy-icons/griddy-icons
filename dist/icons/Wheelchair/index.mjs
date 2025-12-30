import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WheelchairIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WheelchairIcon.displayName = "Wheelchair";
var Wheelchair_default = WheelchairIcon;
export {
  Wheelchair_default as default
};
