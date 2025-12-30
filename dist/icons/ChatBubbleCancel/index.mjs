import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChatBubbleCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChatBubbleCancelIcon.displayName = "ChatBubbleCancel";
var ChatBubbleCancel_default = ChatBubbleCancelIcon;
export {
  ChatBubbleCancel_default as default
};
