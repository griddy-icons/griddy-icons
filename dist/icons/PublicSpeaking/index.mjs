import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PublicSpeakingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PublicSpeakingIcon.displayName = "PublicSpeaking";
var PublicSpeaking_default = PublicSpeakingIcon;
export {
  PublicSpeaking_default as default
};
