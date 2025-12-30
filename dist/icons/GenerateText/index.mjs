import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GenerateTextIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GenerateTextIcon.displayName = "GenerateText";
var GenerateText_default = GenerateTextIcon;
export {
  GenerateText_default as default
};
