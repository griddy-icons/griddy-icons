import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GlobeAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GlobeAlt02Icon.displayName = "GlobeAlt02";
var GlobeAlt02_default = GlobeAlt02Icon;
export {
  GlobeAlt02_default as default
};
