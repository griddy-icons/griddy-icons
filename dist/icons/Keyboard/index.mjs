import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const KeyboardIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
KeyboardIcon.displayName = "Keyboard";
var Keyboard_default = KeyboardIcon;
export {
  Keyboard_default as default
};
