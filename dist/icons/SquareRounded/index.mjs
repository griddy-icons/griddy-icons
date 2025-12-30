import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SquareRoundedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SquareRoundedIcon.displayName = "SquareRounded";
var SquareRounded_default = SquareRoundedIcon;
export {
  SquareRounded_default as default
};
