import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GenderFemaleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GenderFemaleIcon.displayName = "GenderFemale";
var GenderFemale_default = GenderFemaleIcon;
export {
  GenderFemale_default as default
};
