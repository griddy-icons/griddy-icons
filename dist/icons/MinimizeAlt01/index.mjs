import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MinimizeAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MinimizeAlt01Icon.displayName = "MinimizeAlt01";
var MinimizeAlt01_default = MinimizeAlt01Icon;
export {
  MinimizeAlt01_default as default
};
