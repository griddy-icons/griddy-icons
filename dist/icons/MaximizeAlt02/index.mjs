import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MaximizeAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MaximizeAlt02Icon.displayName = "MaximizeAlt02";
var MaximizeAlt02_default = MaximizeAlt02Icon;
export {
  MaximizeAlt02_default as default
};
