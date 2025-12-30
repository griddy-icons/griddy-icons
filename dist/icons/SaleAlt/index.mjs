import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SaleAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SaleAltIcon.displayName = "SaleAlt";
var SaleAlt_default = SaleAltIcon;
export {
  SaleAlt_default as default
};
