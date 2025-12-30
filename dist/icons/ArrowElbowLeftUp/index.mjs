import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowElbowLeftUpIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowElbowLeftUpIcon.displayName = "ArrowElbowLeftUp";
var ArrowElbowLeftUp_default = ArrowElbowLeftUpIcon;
export {
  ArrowElbowLeftUp_default as default
};
