import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BinocularsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BinocularsIcon.displayName = "Binoculars";
var Binoculars_default = BinocularsIcon;
export {
  Binoculars_default as default
};
