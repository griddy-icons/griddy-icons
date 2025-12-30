import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChatBubblePlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChatBubblePlusIcon.displayName = "ChatBubblePlus";
var ChatBubblePlus_default = ChatBubblePlusIcon;
export {
  ChatBubblePlus_default as default
};
