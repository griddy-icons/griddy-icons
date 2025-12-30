import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FaceSmileIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FaceSmileIcon.displayName = "FaceSmile";
var FaceSmile_default = FaceSmileIcon;
export {
  FaceSmile_default as default
};
