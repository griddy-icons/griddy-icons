import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ReplyAllIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ReplyAllIcon.displayName = "ReplyAll";
var ReplyAll_default = ReplyAllIcon;
export {
  ReplyAll_default as default
};
