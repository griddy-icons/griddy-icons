import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MenuAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MenuAlt02Icon.displayName = "MenuAlt02";
var MenuAlt02_default = MenuAlt02Icon;
export {
  MenuAlt02_default as default
};
