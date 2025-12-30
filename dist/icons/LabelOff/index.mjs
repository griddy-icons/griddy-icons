import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LabelOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LabelOffIcon.displayName = "LabelOff";
var LabelOff_default = LabelOffIcon;
export {
  LabelOff_default as default
};
