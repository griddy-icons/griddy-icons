import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ColumnsFourIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ColumnsFourIcon.displayName = "ColumnsFour";
var ColumnsFour_default = ColumnsFourIcon;
export {
  ColumnsFour_default as default
};
