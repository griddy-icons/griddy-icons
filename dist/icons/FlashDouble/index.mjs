import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FlashDoubleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FlashDoubleIcon.displayName = "FlashDouble";
var FlashDouble_default = FlashDoubleIcon;
export {
  FlashDouble_default as default
};
