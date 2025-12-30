import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowElbowDownRightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowElbowDownRightIcon.displayName = "ArrowElbowDownRight";
var ArrowElbowDownRight_default = ArrowElbowDownRightIcon;
export {
  ArrowElbowDownRight_default as default
};
