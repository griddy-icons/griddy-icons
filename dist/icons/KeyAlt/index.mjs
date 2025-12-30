import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const KeyAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
KeyAltIcon.displayName = "KeyAlt";
var KeyAlt_default = KeyAltIcon;
export {
  KeyAlt_default as default
};
