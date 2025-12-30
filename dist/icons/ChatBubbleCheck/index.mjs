import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChatBubbleCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChatBubbleCheckIcon.displayName = "ChatBubbleCheck";
var ChatBubbleCheck_default = ChatBubbleCheckIcon;
export {
  ChatBubbleCheck_default as default
};
