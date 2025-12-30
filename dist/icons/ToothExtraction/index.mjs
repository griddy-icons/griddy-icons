import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothExtractionIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothExtractionIcon.displayName = "ToothExtraction";
var ToothExtraction_default = ToothExtractionIcon;
export {
  ToothExtraction_default as default
};
