import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HurricaneIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HurricaneIcon.displayName = "Hurricane";
var Hurricane_default = HurricaneIcon;
export {
  Hurricane_default as default
};
