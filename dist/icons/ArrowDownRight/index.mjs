import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowDownRightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowDownRightIcon.displayName = "ArrowDownRight";
var ArrowDownRight_default = ArrowDownRightIcon;
export {
  ArrowDownRight_default as default
};
