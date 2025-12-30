import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TextStrikethroughIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TextStrikethroughIcon.displayName = "TextStrikethrough";
var TextStrikethrough_default = TextStrikethroughIcon;
export {
  TextStrikethrough_default as default
};
