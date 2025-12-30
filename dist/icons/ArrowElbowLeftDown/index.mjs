import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowElbowLeftDownIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowElbowLeftDownIcon.displayName = "ArrowElbowLeftDown";
var ArrowElbowLeftDown_default = ArrowElbowLeftDownIcon;
export {
  ArrowElbowLeftDown_default as default
};
