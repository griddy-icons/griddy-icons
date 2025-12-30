import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowUpLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowUpLeftIcon.displayName = "ArrowUpLeft";
var ArrowUpLeft_default = ArrowUpLeftIcon;
export {
  ArrowUpLeft_default as default
};
