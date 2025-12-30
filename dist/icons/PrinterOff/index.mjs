import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PrinterOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PrinterOffIcon.displayName = "PrinterOff";
var PrinterOff_default = PrinterOffIcon;
export {
  PrinterOff_default as default
};
