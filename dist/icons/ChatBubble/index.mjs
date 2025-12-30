import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChatBubbleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChatBubbleIcon.displayName = "ChatBubble";
var ChatBubble_default = ChatBubbleIcon;
export {
  ChatBubble_default as default
};
