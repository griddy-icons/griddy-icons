import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothRootCanalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothRootCanalIcon.displayName = "ToothRootCanal";
var ToothRootCanal_default = ToothRootCanalIcon;
export {
  ToothRootCanal_default as default
};
