import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SendAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SendAlt02Icon.displayName = "SendAlt02";
var SendAlt02_default = SendAlt02Icon;
export {
  SendAlt02_default as default
};
