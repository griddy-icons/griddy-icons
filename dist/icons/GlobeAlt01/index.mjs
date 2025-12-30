import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GlobeAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GlobeAlt01Icon.displayName = "GlobeAlt01";
var GlobeAlt01_default = GlobeAlt01Icon;
export {
  GlobeAlt01_default as default
};
