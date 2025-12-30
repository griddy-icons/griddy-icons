import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HalloweenGhostIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HalloweenGhostIcon.displayName = "HalloweenGhost";
var HalloweenGhost_default = HalloweenGhostIcon;
export {
  HalloweenGhost_default as default
};
