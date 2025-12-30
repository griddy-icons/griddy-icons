import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const InboxInAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
InboxInAltIcon.displayName = "InboxInAlt";
var InboxInAlt_default = InboxInAltIcon;
export {
  InboxInAlt_default as default
};
