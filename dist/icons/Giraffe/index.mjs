import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GiraffeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GiraffeIcon.displayName = "Giraffe";
var Giraffe_default = GiraffeIcon;
export {
  Giraffe_default as default
};
