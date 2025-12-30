import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MeatBoxedChickenIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MeatBoxedChickenIcon.displayName = "MeatBoxedChicken";
var MeatBoxedChicken_default = MeatBoxedChickenIcon;
export {
  MeatBoxedChicken_default as default
};
