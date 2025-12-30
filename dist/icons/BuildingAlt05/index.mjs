import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BuildingAlt05Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BuildingAlt05Icon.displayName = "BuildingAlt05";
var BuildingAlt05_default = BuildingAlt05Icon;
export {
  BuildingAlt05_default as default
};
