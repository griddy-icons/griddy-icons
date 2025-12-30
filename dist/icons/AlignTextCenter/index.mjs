import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlignTextCenterIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlignTextCenterIcon.displayName = "AlignTextCenter";
var AlignTextCenter_default = AlignTextCenterIcon;
export {
  AlignTextCenter_default as default
};
