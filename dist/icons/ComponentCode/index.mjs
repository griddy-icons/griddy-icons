import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ComponentCodeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ComponentCodeIcon.displayName = "ComponentCode";
var ComponentCode_default = ComponentCodeIcon;
export {
  ComponentCode_default as default
};
