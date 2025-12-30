import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TrashCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TrashCancelIcon.displayName = "TrashCancel";
var TrashCancel_default = TrashCancelIcon;
export {
  TrashCancel_default as default
};
