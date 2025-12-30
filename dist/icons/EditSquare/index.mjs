import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EditSquareIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EditSquareIcon.displayName = "EditSquare";
var EditSquare_default = EditSquareIcon;
export {
  EditSquare_default as default
};
