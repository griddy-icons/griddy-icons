import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HazeNightIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HazeNightIcon.displayName = "HazeNight";
var HazeNight_default = HazeNightIcon;
export {
  HazeNight_default as default
};
