import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChatBubbleInfoIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChatBubbleInfoIcon.displayName = "ChatBubbleInfo";
var ChatBubbleInfo_default = ChatBubbleInfoIcon;
export {
  ChatBubbleInfo_default as default
};
