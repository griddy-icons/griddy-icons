import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VoicemailIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VoicemailIcon.displayName = "Voicemail";
var Voicemail_default = VoicemailIcon;
export {
  Voicemail_default as default
};
