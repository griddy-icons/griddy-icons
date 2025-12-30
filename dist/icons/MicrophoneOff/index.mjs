import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MicrophoneOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MicrophoneOffIcon.displayName = "MicrophoneOff";
var MicrophoneOff_default = MicrophoneOffIcon;
export {
  MicrophoneOff_default as default
};
