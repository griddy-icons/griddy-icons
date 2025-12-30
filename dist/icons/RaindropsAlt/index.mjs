import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RaindropsAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RaindropsAltIcon.displayName = "RaindropsAlt";
var RaindropsAlt_default = RaindropsAltIcon;
export {
  RaindropsAlt_default as default
};
