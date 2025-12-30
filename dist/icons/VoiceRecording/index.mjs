import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VoiceRecordingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VoiceRecordingIcon.displayName = "VoiceRecording";
var VoiceRecording_default = VoiceRecordingIcon;
export {
  VoiceRecording_default as default
};
