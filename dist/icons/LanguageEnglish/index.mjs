import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LanguageEnglishIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LanguageEnglishIcon.displayName = "LanguageEnglish";
var LanguageEnglish_default = LanguageEnglishIcon;
export {
  LanguageEnglish_default as default
};
