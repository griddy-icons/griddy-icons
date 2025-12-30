import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ComponentCarouselVerticalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ComponentCarouselVerticalIcon.displayName = "ComponentCarouselVertical";
var ComponentCarouselVertical_default = ComponentCarouselVerticalIcon;
export {
  ComponentCarouselVertical_default as default
};
