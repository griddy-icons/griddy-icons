import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ThumbsDownIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ThumbsDownIcon.displayName = "ThumbsDown";
var ThumbsDown_default = ThumbsDownIcon;
export {
  ThumbsDown_default as default
};
