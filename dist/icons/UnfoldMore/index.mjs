import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UnfoldMoreIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UnfoldMoreIcon.displayName = "UnfoldMore";
var UnfoldMore_default = UnfoldMoreIcon;
export {
  UnfoldMore_default as default
};
