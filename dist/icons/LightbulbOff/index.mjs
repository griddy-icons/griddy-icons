import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LightbulbOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LightbulbOffIcon.displayName = "LightbulbOff";
var LightbulbOff_default = LightbulbOffIcon;
export {
  LightbulbOff_default as default
};
