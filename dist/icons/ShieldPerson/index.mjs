import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShieldPersonIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShieldPersonIcon.displayName = "ShieldPerson";
var ShieldPerson_default = ShieldPersonIcon;
export {
  ShieldPerson_default as default
};
