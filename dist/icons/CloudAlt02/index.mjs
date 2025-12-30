import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CloudAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CloudAlt02Icon.displayName = "CloudAlt02";
var CloudAlt02_default = CloudAlt02Icon;
export {
  CloudAlt02_default as default
};
