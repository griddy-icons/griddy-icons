import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AlertOctagonIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AlertOctagonIcon.displayName = "AlertOctagon";
var AlertOctagon_default = AlertOctagonIcon;
export {
  AlertOctagon_default as default
};
