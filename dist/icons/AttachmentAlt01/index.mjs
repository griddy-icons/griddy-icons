import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AttachmentAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AttachmentAlt01Icon.displayName = "AttachmentAlt01";
var AttachmentAlt01_default = AttachmentAlt01Icon;
export {
  AttachmentAlt01_default as default
};
