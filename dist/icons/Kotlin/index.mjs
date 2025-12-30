import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const KotlinIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
KotlinIcon.displayName = "Kotlin";
var Kotlin_default = KotlinIcon;
export {
  Kotlin_default as default
};
