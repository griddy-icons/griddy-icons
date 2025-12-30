import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ConnectivityIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ConnectivityIcon.displayName = "Connectivity";
var Connectivity_default = ConnectivityIcon;
export {
  Connectivity_default as default
};
