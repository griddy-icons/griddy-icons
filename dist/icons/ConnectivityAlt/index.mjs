import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ConnectivityAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ConnectivityAltIcon.displayName = "ConnectivityAlt";
var ConnectivityAlt_default = ConnectivityAltIcon;
export {
  ConnectivityAlt_default as default
};
