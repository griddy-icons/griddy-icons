import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BuildingAlt03Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BuildingAlt03Icon.displayName = "BuildingAlt03";
var BuildingAlt03_default = BuildingAlt03Icon;
export {
  BuildingAlt03_default as default
};
