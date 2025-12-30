import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChromeCastIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChromeCastIcon.displayName = "ChromeCast";
var ChromeCast_default = ChromeCastIcon;
export {
  ChromeCast_default as default
};
