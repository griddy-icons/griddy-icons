import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MergeUpAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MergeUpAltIcon.displayName = "MergeUpAlt";
var MergeUpAlt_default = MergeUpAltIcon;
export {
  MergeUpAlt_default as default
};
