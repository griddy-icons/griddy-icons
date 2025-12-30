import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RowsFourIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RowsFourIcon.displayName = "RowsFour";
var RowsFour_default = RowsFourIcon;
export {
  RowsFour_default as default
};
