import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ColumnPlusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ColumnPlusIcon.displayName = "ColumnPlus";
var ColumnPlus_default = ColumnPlusIcon;
export {
  ColumnPlus_default as default
};
