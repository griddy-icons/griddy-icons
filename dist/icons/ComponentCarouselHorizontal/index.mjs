import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ComponentCarouselHorizontalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ComponentCarouselHorizontalIcon.displayName = "ComponentCarouselHorizontal";
var ComponentCarouselHorizontal_default = ComponentCarouselHorizontalIcon;
export {
  ComponentCarouselHorizontal_default as default
};
