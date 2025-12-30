import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ComponentButtonIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ComponentButtonIcon.displayName = "ComponentButton";
var ComponentButton_default = ComponentButtonIcon;
export {
  ComponentButton_default as default
};
