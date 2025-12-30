import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MenuAlt03Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MenuAlt03Icon.displayName = "MenuAlt03";
var MenuAlt03_default = MenuAlt03Icon;
export {
  MenuAlt03_default as default
};
