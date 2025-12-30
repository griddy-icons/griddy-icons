import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GenerateImageIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GenerateImageIcon.displayName = "GenerateImage";
var GenerateImage_default = GenerateImageIcon;
export {
  GenerateImage_default as default
};
