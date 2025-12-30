import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const KeyboardOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
KeyboardOffIcon.displayName = "KeyboardOff";
var KeyboardOff_default = KeyboardOffIcon;
export {
  KeyboardOff_default as default
};
