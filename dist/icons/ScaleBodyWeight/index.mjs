import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ScaleBodyWeightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ScaleBodyWeightIcon.displayName = "ScaleBodyWeight";
var ScaleBodyWeight_default = ScaleBodyWeightIcon;
export {
  ScaleBodyWeight_default as default
};
