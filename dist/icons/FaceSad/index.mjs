import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FaceSadIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FaceSadIcon.displayName = "FaceSad";
var FaceSad_default = FaceSadIcon;
export {
  FaceSad_default as default
};
