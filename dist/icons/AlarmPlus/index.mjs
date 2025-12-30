import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlarmPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlarmPlusIcon.displayName = "AlarmPlus";
var AlarmPlus_default = AlarmPlusIcon;
export {
  AlarmPlus_default as default
};
