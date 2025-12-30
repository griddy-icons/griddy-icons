import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BackpackAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BackpackAltIcon.displayName = "BackpackAlt";
var BackpackAlt_default = BackpackAltIcon;
export {
  BackpackAlt_default as default
};
