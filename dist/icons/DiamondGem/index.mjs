import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DiamondGemIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DiamondGemIcon.displayName = "DiamondGem";
var DiamondGem_default = DiamondGemIcon;
export {
  DiamondGem_default as default
};
