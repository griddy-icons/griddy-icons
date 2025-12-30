import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothImplantIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothImplantIcon.displayName = "ToothImplant";
var ToothImplant_default = ToothImplantIcon;
export {
  ToothImplant_default as default
};
