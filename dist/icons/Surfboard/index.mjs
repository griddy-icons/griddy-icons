import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SurfboardIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SurfboardIcon.displayName = "Surfboard";
var Surfboard_default = SurfboardIcon;
export {
  Surfboard_default as default
};
