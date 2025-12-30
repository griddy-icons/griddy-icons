import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BootstrapIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BootstrapIcon.displayName = "Bootstrap";
var Bootstrap_default = BootstrapIcon;
export {
  Bootstrap_default as default
};
