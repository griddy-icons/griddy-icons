import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LighthouseIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LighthouseIcon.displayName = "Lighthouse";
var Lighthouse_default = LighthouseIcon;
export {
  Lighthouse_default as default
};
