import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MaximizeAlt03Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MaximizeAlt03Icon.displayName = "MaximizeAlt03";
var MaximizeAlt03_default = MaximizeAlt03Icon;
export {
  MaximizeAlt03_default as default
};
