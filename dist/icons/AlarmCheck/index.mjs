import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlarmCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlarmCheckIcon.displayName = "AlarmCheck";
var AlarmCheck_default = AlarmCheckIcon;
export {
  AlarmCheck_default as default
};
