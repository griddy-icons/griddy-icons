import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FilterAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FilterAltIcon.displayName = "FilterAlt";
var FilterAlt_default = FilterAltIcon;
export {
  FilterAlt_default as default
};
