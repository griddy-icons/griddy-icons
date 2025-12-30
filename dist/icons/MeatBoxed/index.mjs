import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MeatBoxedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MeatBoxedIcon.displayName = "MeatBoxed";
var MeatBoxed_default = MeatBoxedIcon;
export {
  MeatBoxed_default as default
};
