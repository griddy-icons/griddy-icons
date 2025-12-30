import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ComponentCarouselListIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ComponentCarouselListIcon.displayName = "ComponentCarouselList";
var ComponentCarouselList_default = ComponentCarouselListIcon;
export {
  ComponentCarouselList_default as default
};
