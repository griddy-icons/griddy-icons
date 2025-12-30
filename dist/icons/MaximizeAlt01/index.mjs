import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MaximizeAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MaximizeAlt01Icon.displayName = "MaximizeAlt01";
var MaximizeAlt01_default = MaximizeAlt01Icon;
export {
  MaximizeAlt01_default as default
};
