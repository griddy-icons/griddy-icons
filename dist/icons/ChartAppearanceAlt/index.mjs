import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartAppearanceAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartAppearanceAltIcon.displayName = "ChartAppearanceAlt";
var ChartAppearanceAlt_default = ChartAppearanceAltIcon;
export {
  ChartAppearanceAlt_default as default
};
