import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ColumnsThreeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ColumnsThreeIcon.displayName = "ColumnsThree";
var ColumnsThree_default = ColumnsThreeIcon;
export {
  ColumnsThree_default as default
};
