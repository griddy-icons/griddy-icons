import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ThunderstormIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ThunderstormIcon.displayName = "Thunderstorm";
var Thunderstorm_default = ThunderstormIcon;
export {
  Thunderstorm_default as default
};
