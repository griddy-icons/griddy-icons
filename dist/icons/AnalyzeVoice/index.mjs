import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AnalyzeVoiceIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AnalyzeVoiceIcon.displayName = "AnalyzeVoice";
var AnalyzeVoice_default = AnalyzeVoiceIcon;
export {
  AnalyzeVoice_default as default
};
