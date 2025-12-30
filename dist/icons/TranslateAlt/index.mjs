import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TranslateAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TranslateAltIcon.displayName = "TranslateAlt";
var TranslateAlt_default = TranslateAltIcon;
export {
  TranslateAlt_default as default
};
