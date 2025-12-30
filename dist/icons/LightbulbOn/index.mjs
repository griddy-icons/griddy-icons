import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LightbulbOnIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LightbulbOnIcon.displayName = "LightbulbOn";
var LightbulbOn_default = LightbulbOnIcon;
export {
  LightbulbOn_default as default
};
