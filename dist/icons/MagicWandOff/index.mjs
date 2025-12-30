import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MagicWandOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MagicWandOffIcon.displayName = "MagicWandOff";
var MagicWandOff_default = MagicWandOffIcon;
export {
  MagicWandOff_default as default
};
