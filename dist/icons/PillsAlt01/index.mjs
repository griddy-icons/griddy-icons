import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PillsAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PillsAlt01Icon.displayName = "PillsAlt01";
var PillsAlt01_default = PillsAlt01Icon;
export {
  PillsAlt01_default as default
};
