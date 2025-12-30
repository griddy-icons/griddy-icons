import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TextClearFormatIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TextClearFormatIcon.displayName = "TextClearFormat";
var TextClearFormat_default = TextClearFormatIcon;
export {
  TextClearFormat_default as default
};
