import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SkipBackIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SkipBackIcon.displayName = "SkipBack";
var SkipBack_default = SkipBackIcon;
export {
  SkipBack_default as default
};
