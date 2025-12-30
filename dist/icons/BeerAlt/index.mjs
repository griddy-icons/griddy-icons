import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BeerAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BeerAltIcon.displayName = "BeerAlt";
var BeerAlt_default = BeerAltIcon;
export {
  BeerAlt_default as default
};
