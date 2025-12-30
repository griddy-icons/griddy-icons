import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PhoneCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PhoneCancelIcon.displayName = "PhoneCancel";
var PhoneCancel_default = PhoneCancelIcon;
export {
  PhoneCancel_default as default
};
