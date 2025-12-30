import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TuneVerticalAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TuneVerticalAltIcon.displayName = "TuneVerticalAlt";
var TuneVerticalAlt_default = TuneVerticalAltIcon;
export {
  TuneVerticalAlt_default as default
};
