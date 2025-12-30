import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UmbrellaAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UmbrellaAlt01Icon.displayName = "UmbrellaAlt01";
var UmbrellaAlt01_default = UmbrellaAlt01Icon;
export {
  UmbrellaAlt01_default as default
};
