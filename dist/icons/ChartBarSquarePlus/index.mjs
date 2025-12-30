import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ChartBarSquarePlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ChartBarSquarePlusIcon.displayName = "ChartBarSquarePlus";
var ChartBarSquarePlus_default = ChartBarSquarePlusIcon;
export {
  ChartBarSquarePlus_default as default
};
