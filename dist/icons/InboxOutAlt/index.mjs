import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const InboxOutAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
InboxOutAltIcon.displayName = "InboxOutAlt";
var InboxOutAlt_default = InboxOutAltIcon;
export {
  InboxOutAlt_default as default
};
