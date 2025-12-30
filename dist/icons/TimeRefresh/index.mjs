import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TimeRefreshIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TimeRefreshIcon.displayName = "TimeRefresh";
var TimeRefresh_default = TimeRefreshIcon;
export {
  TimeRefresh_default as default
};
