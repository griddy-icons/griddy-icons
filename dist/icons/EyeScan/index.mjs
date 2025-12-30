import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EyeScanIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EyeScanIcon.displayName = "EyeScan";
var EyeScan_default = EyeScanIcon;
export {
  EyeScan_default as default
};
