import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UnfoldLessIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UnfoldLessIcon.displayName = "UnfoldLess";
var UnfoldLess_default = UnfoldLessIcon;
export {
  UnfoldLess_default as default
};
