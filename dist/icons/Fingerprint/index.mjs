import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FingerprintIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FingerprintIcon.displayName = "Fingerprint";
var Fingerprint_default = FingerprintIcon;
export {
  Fingerprint_default as default
};
