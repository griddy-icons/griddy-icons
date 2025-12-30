import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const InfoCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
InfoCircleIcon.displayName = "InfoCircle";
var InfoCircle_default = InfoCircleIcon;
export {
  InfoCircle_default as default
};
