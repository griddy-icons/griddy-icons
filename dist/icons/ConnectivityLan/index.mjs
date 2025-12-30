import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ConnectivityLanIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ConnectivityLanIcon.displayName = "ConnectivityLan";
var ConnectivityLan_default = ConnectivityLanIcon;
export {
  ConnectivityLan_default as default
};
