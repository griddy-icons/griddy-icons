import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AttachmentAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AttachmentAlt02Icon.displayName = "AttachmentAlt02";
var AttachmentAlt02_default = AttachmentAlt02Icon;
export {
  AttachmentAlt02_default as default
};
