import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MagicWandIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MagicWandIcon.displayName = "MagicWand";
var MagicWand_default = MagicWandIcon;
export {
  MagicWand_default as default
};
