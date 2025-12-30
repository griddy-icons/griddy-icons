import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ComponentAccordionIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ComponentAccordionIcon.displayName = "ComponentAccordion";
var ComponentAccordion_default = ComponentAccordionIcon;
export {
  ComponentAccordion_default as default
};
