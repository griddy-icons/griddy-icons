import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TextLineHeightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TextLineHeightIcon.displayName = "TextLineHeight";
var TextLineHeight_default = TextLineHeightIcon;
export {
  TextLineHeight_default as default
};
