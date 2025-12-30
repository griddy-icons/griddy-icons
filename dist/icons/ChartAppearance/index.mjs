import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartAppearanceIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartAppearanceIcon.displayName = "ChartAppearance";
var ChartAppearance_default = ChartAppearanceIcon;
export {
  ChartAppearance_default as default
};
