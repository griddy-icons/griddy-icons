import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MoreHorizontalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MoreHorizontalIcon.displayName = "MoreHorizontal";
var MoreHorizontal_default = MoreHorizontalIcon;
export {
  MoreHorizontal_default as default
};
