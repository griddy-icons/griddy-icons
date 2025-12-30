import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RowsTwoAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RowsTwoAltIcon.displayName = "RowsTwoAlt";
var RowsTwoAlt_default = RowsTwoAltIcon;
export {
  RowsTwoAlt_default as default
};
