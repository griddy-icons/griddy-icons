import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EggCrackedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EggCrackedIcon.displayName = "EggCracked";
var EggCracked_default = EggCrackedIcon;
export {
  EggCracked_default as default
};
