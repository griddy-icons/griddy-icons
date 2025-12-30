import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EqualNotIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EqualNotIcon.displayName = "EqualNot";
var EqualNot_default = EqualNotIcon;
export {
  EqualNot_default as default
};
