import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GlassesAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GlassesAltIcon.displayName = "GlassesAlt";
var GlassesAlt_default = GlassesAltIcon;
export {
  GlassesAlt_default as default
};
