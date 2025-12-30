import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LabelImportantIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LabelImportantIcon.displayName = "LabelImportant";
var LabelImportant_default = LabelImportantIcon;
export {
  LabelImportant_default as default
};
