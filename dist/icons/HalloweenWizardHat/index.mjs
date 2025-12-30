import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HalloweenWizardHatIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HalloweenWizardHatIcon.displayName = "HalloweenWizardHat";
var HalloweenWizardHat_default = HalloweenWizardHatIcon;
export {
  HalloweenWizardHat_default as default
};
