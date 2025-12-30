import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ComponentCarouselHorizontalAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ComponentCarouselHorizontalAltIcon.displayName = "ComponentCarouselHorizontalAlt";
var ComponentCarouselHorizontalAlt_default = ComponentCarouselHorizontalAltIcon;
export {
  ComponentCarouselHorizontalAlt_default as default
};
