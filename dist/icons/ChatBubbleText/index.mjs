import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChatBubbleTextIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChatBubbleTextIcon.displayName = "ChatBubbleText";
var ChatBubbleText_default = ChatBubbleTextIcon;
export {
  ChatBubbleText_default as default
};
