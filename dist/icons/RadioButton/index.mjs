import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RadioButtonIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RadioButtonIcon.displayName = "RadioButton";
var RadioButton_default = RadioButtonIcon;
export {
  RadioButton_default as default
};
