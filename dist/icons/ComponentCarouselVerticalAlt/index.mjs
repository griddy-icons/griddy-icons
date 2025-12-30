import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ComponentCarouselVerticalAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ComponentCarouselVerticalAltIcon.displayName = "ComponentCarouselVerticalAlt";
var ComponentCarouselVerticalAlt_default = ComponentCarouselVerticalAltIcon;
export {
  ComponentCarouselVerticalAlt_default as default
};
