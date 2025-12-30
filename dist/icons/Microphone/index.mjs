import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MicrophoneIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MicrophoneIcon.displayName = "Microphone";
var Microphone_default = MicrophoneIcon;
export {
  Microphone_default as default
};
