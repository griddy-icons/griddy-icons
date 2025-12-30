import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const IdentificationCardIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
IdentificationCardIcon.displayName = "IdentificationCard";
var IdentificationCard_default = IdentificationCardIcon;
export {
  IdentificationCard_default as default
};
