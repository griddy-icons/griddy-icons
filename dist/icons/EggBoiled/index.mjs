import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EggBoiledIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EggBoiledIcon.displayName = "EggBoiled";
var EggBoiled_default = EggBoiledIcon;
export {
  EggBoiled_default as default
};
