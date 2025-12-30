import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ExpandSidebarIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ExpandSidebarIcon.displayName = "ExpandSidebar";
var ExpandSidebar_default = ExpandSidebarIcon;
export {
  ExpandSidebar_default as default
};
