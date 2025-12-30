import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChatBubbleAlertIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChatBubbleAlertIcon.displayName = "ChatBubbleAlert";
var ChatBubbleAlert_default = ChatBubbleAlertIcon;
export {
  ChatBubbleAlert_default as default
};
