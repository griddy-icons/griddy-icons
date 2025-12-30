import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartBarSquareIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartBarSquareIcon.displayName = "ChartBarSquare";
var ChartBarSquare_default = ChartBarSquareIcon;
export {
  ChartBarSquare_default as default
};
