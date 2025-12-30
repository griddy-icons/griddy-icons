import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AngularjsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AngularjsIcon.displayName = "Angularjs";
var Angularjs_default = AngularjsIcon;
export {
  Angularjs_default as default
};
