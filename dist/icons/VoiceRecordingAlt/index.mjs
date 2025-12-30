import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VoiceRecordingAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VoiceRecordingAltIcon.displayName = "VoiceRecordingAlt";
var VoiceRecordingAlt_default = VoiceRecordingAltIcon;
export {
  VoiceRecordingAlt_default as default
};
