import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PrivateDriverIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PrivateDriverIcon.displayName = "PrivateDriver";
var PrivateDriver_default = PrivateDriverIcon;
export {
  PrivateDriver_default as default
};
