import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HomeAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HomeAlt02Icon.displayName = "HomeAlt02";
var HomeAlt02_default = HomeAlt02Icon;
export {
  HomeAlt02_default as default
};
