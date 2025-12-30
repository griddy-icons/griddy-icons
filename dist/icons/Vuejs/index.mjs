import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const VuejsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
VuejsIcon.displayName = "Vuejs";
var Vuejs_default = VuejsIcon;
export {
  Vuejs_default as default
};
