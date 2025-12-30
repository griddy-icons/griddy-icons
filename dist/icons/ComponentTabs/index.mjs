import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ComponentTabsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ComponentTabsIcon.displayName = "ComponentTabs";
var ComponentTabs_default = ComponentTabsIcon;
export {
  ComponentTabs_default as default
};
