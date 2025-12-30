import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RefreshCwIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RefreshCwIcon.displayName = "RefreshCw";
var RefreshCw_default = RefreshCwIcon;
export {
  RefreshCw_default as default
};
