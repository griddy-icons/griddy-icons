import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ConnectivityTenancyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ConnectivityTenancyIcon.displayName = "ConnectivityTenancy";
var ConnectivityTenancy_default = ConnectivityTenancyIcon;
export {
  ConnectivityTenancy_default as default
};
