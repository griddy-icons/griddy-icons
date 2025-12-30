import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothGumInflammationIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothGumInflammationIcon.displayName = "ToothGumInflammation";
var ToothGumInflammation_default = ToothGumInflammationIcon;
export {
  ToothGumInflammation_default as default
};
