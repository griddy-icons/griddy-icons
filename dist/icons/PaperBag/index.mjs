import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PaperBagIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PaperBagIcon.displayName = "PaperBag";
var PaperBag_default = PaperBagIcon;
export {
  PaperBag_default as default
};
