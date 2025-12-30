import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DentalMirrorIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DentalMirrorIcon.displayName = "DentalMirror";
var DentalMirror_default = DentalMirrorIcon;
export {
  DentalMirror_default as default
};
