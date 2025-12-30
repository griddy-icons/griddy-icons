import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MusicOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MusicOffIcon.displayName = "MusicOff";
var MusicOff_default = MusicOffIcon;
export {
  MusicOff_default as default
};
