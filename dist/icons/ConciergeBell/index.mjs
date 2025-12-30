import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ConciergeBellIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ConciergeBellIcon.displayName = "ConciergeBell";
var ConciergeBell_default = ConciergeBellIcon;
export {
  ConciergeBell_default as default
};
