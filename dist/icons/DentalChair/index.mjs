import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DentalChairIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DentalChairIcon.displayName = "DentalChair";
var DentalChair_default = DentalChairIcon;
export {
  DentalChair_default as default
};
