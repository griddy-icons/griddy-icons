import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MoonAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MoonAltIcon.displayName = "MoonAlt";
var MoonAlt_default = MoonAltIcon;
export {
  MoonAlt_default as default
};
