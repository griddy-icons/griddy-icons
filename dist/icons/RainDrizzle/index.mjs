import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RainDrizzleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RainDrizzleIcon.displayName = "RainDrizzle";
var RainDrizzle_default = RainDrizzleIcon;
export {
  RainDrizzle_default as default
};
