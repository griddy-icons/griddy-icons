import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MeetAndGreetIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MeetAndGreetIcon.displayName = "MeetAndGreet";
var MeetAndGreet_default = MeetAndGreetIcon;
export {
  MeetAndGreet_default as default
};
