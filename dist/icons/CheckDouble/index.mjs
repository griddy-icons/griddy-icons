import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CheckDoubleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CheckDoubleIcon.displayName = "CheckDouble";
var CheckDouble_default = CheckDoubleIcon;
export {
  CheckDouble_default as default
};
