import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HideSidebarIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HideSidebarIcon.displayName = "HideSidebar";
var HideSidebar_default = HideSidebarIcon;
export {
  HideSidebar_default as default
};
