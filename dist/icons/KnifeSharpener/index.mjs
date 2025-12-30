import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const KnifeSharpenerIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
KnifeSharpenerIcon.displayName = "KnifeSharpener";
var KnifeSharpener_default = KnifeSharpenerIcon;
export {
  KnifeSharpener_default as default
};
