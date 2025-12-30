import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CubeAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CubeAltIcon.displayName = "CubeAlt";
var CubeAlt_default = CubeAltIcon;
export {
  CubeAlt_default as default
};
