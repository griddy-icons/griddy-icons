import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HalloweenSpiderIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HalloweenSpiderIcon.displayName = "HalloweenSpider";
var HalloweenSpider_default = HalloweenSpiderIcon;
export {
  HalloweenSpider_default as default
};
