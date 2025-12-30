import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FingerprintAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FingerprintAltIcon.displayName = "FingerprintAlt";
var FingerprintAlt_default = FingerprintAltIcon;
export {
  FingerprintAlt_default as default
};
