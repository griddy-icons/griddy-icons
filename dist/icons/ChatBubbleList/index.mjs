import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChatBubbleListIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChatBubbleListIcon.displayName = "ChatBubbleList";
var ChatBubbleList_default = ChatBubbleListIcon;
export {
  ChatBubbleList_default as default
};
