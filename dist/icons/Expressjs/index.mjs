import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ExpressjsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ExpressjsIcon.displayName = "Expressjs";
var Expressjs_default = ExpressjsIcon;
export {
  Expressjs_default as default
};
