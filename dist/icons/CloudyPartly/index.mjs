import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CloudyPartlyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CloudyPartlyIcon.displayName = "CloudyPartly";
var CloudyPartly_default = CloudyPartlyIcon;
export {
  CloudyPartly_default as default
};
