import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LockOpenAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LockOpenAlt01Icon.displayName = "LockOpenAlt01";
var LockOpenAlt01_default = LockOpenAlt01Icon;
export {
  LockOpenAlt01_default as default
};
