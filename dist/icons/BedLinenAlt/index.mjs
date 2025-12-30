import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BedLinenAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BedLinenAltIcon.displayName = "BedLinenAlt";
var BedLinenAlt_default = BedLinenAltIcon;
export {
  BedLinenAlt_default as default
};
