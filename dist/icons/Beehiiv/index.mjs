import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BeehiivIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BeehiivIcon.displayName = "Beehiiv";
var Beehiiv_default = BeehiivIcon;
export {
  Beehiiv_default as default
};
