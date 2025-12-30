import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ElectronjsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ElectronjsIcon.displayName = "Electronjs";
var Electronjs_default = ElectronjsIcon;
export {
  Electronjs_default as default
};
