import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TrophyAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TrophyAltIcon.displayName = "TrophyAlt";
var TrophyAlt_default = TrophyAltIcon;
export {
  TrophyAlt_default as default
};
