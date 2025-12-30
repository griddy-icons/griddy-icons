import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SendAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SendAlt01Icon.displayName = "SendAlt01";
var SendAlt01_default = SendAlt01Icon;
export {
  SendAlt01_default as default
};
