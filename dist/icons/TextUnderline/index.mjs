import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TextUnderlineIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TextUnderlineIcon.displayName = "TextUnderline";
var TextUnderline_default = TextUnderlineIcon;
export {
  TextUnderline_default as default
};
