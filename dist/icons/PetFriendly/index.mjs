import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PetFriendlyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PetFriendlyIcon.displayName = "PetFriendly";
var PetFriendly_default = PetFriendlyIcon;
export {
  PetFriendly_default as default
};
