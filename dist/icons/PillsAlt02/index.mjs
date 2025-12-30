import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PillsAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PillsAlt02Icon.displayName = "PillsAlt02";
var PillsAlt02_default = PillsAlt02Icon;
export {
  PillsAlt02_default as default
};
