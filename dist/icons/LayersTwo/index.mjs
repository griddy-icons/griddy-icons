import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LayersTwoIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LayersTwoIcon.displayName = "LayersTwo";
var LayersTwo_default = LayersTwoIcon;
export {
  LayersTwo_default as default
};
