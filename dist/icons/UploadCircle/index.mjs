import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UploadCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UploadCircleIcon.displayName = "UploadCircle";
var UploadCircle_default = UploadCircleIcon;
export {
  UploadCircle_default as default
};
