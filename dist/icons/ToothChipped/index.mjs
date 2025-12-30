import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothChippedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothChippedIcon.displayName = "ToothChipped";
var ToothChipped_default = ToothChippedIcon;
export {
  ToothChipped_default as default
};
