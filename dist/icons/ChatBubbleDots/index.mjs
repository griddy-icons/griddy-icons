import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChatBubbleDotsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChatBubbleDotsIcon.displayName = "ChatBubbleDots";
var ChatBubbleDots_default = ChatBubbleDotsIcon;
export {
  ChatBubbleDots_default as default
};
