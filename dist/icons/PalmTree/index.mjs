import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PalmTreeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PalmTreeIcon.displayName = "PalmTree";
var PalmTree_default = PalmTreeIcon;
export {
  PalmTree_default as default
};
