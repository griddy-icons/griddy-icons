import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FaceHappyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FaceHappyIcon.displayName = "FaceHappy";
var FaceHappy_default = FaceHappyIcon;
export {
  FaceHappy_default as default
};
