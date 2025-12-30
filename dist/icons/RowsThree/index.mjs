import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RowsThreeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RowsThreeIcon.displayName = "RowsThree";
var RowsThree_default = RowsThreeIcon;
export {
  RowsThree_default as default
};
