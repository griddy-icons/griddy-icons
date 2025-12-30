import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TextLetterSpacingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TextLetterSpacingIcon.displayName = "TextLetterSpacing";
var TextLetterSpacing_default = TextLetterSpacingIcon;
export {
  TextLetterSpacing_default as default
};
