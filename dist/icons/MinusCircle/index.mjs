import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MinusCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MinusCircleIcon.displayName = "MinusCircle";
var MinusCircle_default = MinusCircleIcon;
export {
  MinusCircle_default as default
};
