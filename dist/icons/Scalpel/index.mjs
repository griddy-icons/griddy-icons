import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ScalpelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ScalpelIcon.displayName = "Scalpel";
var Scalpel_default = ScalpelIcon;
export {
  Scalpel_default as default
};
