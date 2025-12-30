import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MoreVerticalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MoreVerticalIcon.displayName = "MoreVertical";
var MoreVertical_default = MoreVerticalIcon;
export {
  MoreVertical_default as default
};
