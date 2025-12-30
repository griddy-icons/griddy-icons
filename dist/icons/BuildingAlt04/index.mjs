import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BuildingAlt04Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BuildingAlt04Icon.displayName = "BuildingAlt04";
var BuildingAlt04_default = BuildingAlt04Icon;
export {
  BuildingAlt04_default as default
};
