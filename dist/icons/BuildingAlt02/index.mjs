import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BuildingAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BuildingAlt02Icon.displayName = "BuildingAlt02";
var BuildingAlt02_default = BuildingAlt02Icon;
export {
  BuildingAlt02_default as default
};
