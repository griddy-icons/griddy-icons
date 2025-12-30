import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const InteractiveVoiceResponseIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
InteractiveVoiceResponseIcon.displayName = "InteractiveVoiceResponse";
var InteractiveVoiceResponse_default = InteractiveVoiceResponseIcon;
export {
  InteractiveVoiceResponse_default as default
};
