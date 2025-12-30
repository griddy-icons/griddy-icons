import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlertTriangleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlertTriangleIcon.displayName = "AlertTriangle";
var AlertTriangle_default = AlertTriangleIcon;
export {
  AlertTriangle_default as default
};
