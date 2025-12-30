import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlarmCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlarmCancelIcon.displayName = "AlarmCancel";
var AlarmCancel_default = AlarmCancelIcon;
export {
  AlarmCancel_default as default
};
