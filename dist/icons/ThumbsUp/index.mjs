import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ThumbsUpIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ThumbsUpIcon.displayName = "ThumbsUp";
var ThumbsUp_default = ThumbsUpIcon;
export {
  ThumbsUp_default as default
};
