import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MenuAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MenuAlt01Icon.displayName = "MenuAlt01";
var MenuAlt01_default = MenuAlt01Icon;
export {
  MenuAlt01_default as default
};
