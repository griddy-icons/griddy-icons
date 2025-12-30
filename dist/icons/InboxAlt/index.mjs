import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const InboxAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
InboxAltIcon.displayName = "InboxAlt";
var InboxAlt_default = InboxAltIcon;
export {
  InboxAlt_default as default
};
