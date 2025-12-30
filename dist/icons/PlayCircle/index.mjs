import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PlayCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PlayCircleIcon.displayName = "PlayCircle";
var PlayCircle_default = PlayCircleIcon;
export {
  PlayCircle_default as default
};
