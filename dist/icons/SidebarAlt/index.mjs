import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SidebarAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SidebarAltIcon.displayName = "SidebarAlt";
var SidebarAlt_default = SidebarAltIcon;
export {
  SidebarAlt_default as default
};
