import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ColumnsTwoAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ColumnsTwoAltIcon.displayName = "ColumnsTwoAlt";
var ColumnsTwoAlt_default = ColumnsTwoAltIcon;
export {
  ColumnsTwoAlt_default as default
};
