import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LayoutAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LayoutAlt01Icon.displayName = "LayoutAlt01";
var LayoutAlt01_default = LayoutAlt01Icon;
export {
  LayoutAlt01_default as default
};
