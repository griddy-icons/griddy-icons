import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RowsTwoIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RowsTwoIcon.displayName = "RowsTwo";
var RowsTwo_default = RowsTwoIcon;
export {
  RowsTwo_default as default
};
