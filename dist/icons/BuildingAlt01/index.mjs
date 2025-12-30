import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BuildingAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BuildingAlt01Icon.displayName = "BuildingAlt01";
var BuildingAlt01_default = BuildingAlt01Icon;
export {
  BuildingAlt01_default as default
};
