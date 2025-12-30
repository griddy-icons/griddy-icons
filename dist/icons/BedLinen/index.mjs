import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BedLinenIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BedLinenIcon.displayName = "BedLinen";
var BedLinen_default = BedLinenIcon;
export {
  BedLinen_default as default
};
