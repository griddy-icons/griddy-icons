import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ReceiptAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ReceiptAltIcon.displayName = "ReceiptAlt";
var ReceiptAlt_default = ReceiptAltIcon;
export {
  ReceiptAlt_default as default
};
