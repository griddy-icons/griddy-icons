import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ActivityIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ActivityIcon.displayName = "Activity";
var Activity_default = ActivityIcon;
export {
  Activity_default as default
};
