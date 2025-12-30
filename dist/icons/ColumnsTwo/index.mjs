import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ColumnsTwoIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ColumnsTwoIcon.displayName = "ColumnsTwo";
var ColumnsTwo_default = ColumnsTwoIcon;
export {
  ColumnsTwo_default as default
};
