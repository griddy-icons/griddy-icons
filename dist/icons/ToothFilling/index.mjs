import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothFillingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothFillingIcon.displayName = "ToothFilling";
var ToothFilling_default = ToothFillingIcon;
export {
  ToothFilling_default as default
};
