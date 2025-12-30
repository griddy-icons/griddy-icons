import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GenderMaleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GenderMaleIcon.displayName = "GenderMale";
var GenderMale_default = GenderMaleIcon;
export {
  GenderMale_default as default
};
