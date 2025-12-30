import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FaceNeutralIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FaceNeutralIcon.displayName = "FaceNeutral";
var FaceNeutral_default = FaceNeutralIcon;
export {
  FaceNeutral_default as default
};
