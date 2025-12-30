import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowUpRightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowUpRightIcon.displayName = "ArrowUpRight";
var ArrowUpRight_default = ArrowUpRightIcon;
export {
  ArrowUpRight_default as default
};
