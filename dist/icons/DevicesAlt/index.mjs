import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DevicesAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DevicesAltIcon.displayName = "DevicesAlt";
var DevicesAlt_default = DevicesAltIcon;
export {
  DevicesAlt_default as default
};
