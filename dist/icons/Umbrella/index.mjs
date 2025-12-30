import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UmbrellaIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UmbrellaIcon.displayName = "Umbrella";
var Umbrella_default = UmbrellaIcon;
export {
  Umbrella_default as default
};
