import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowElbowDownLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowElbowDownLeftIcon.displayName = "ArrowElbowDownLeft";
var ArrowElbowDownLeft_default = ArrowElbowDownLeftIcon;
export {
  ArrowElbowDownLeft_default as default
};
