import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DribbbleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DribbbleIcon.displayName = "Dribbble";
var Dribbble_default = DribbbleIcon;
export {
  Dribbble_default as default
};
