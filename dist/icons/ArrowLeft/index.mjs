import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ArrowLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ArrowLeftIcon.displayName = "ArrowLeft";
var ArrowLeft_default = ArrowLeftIcon;
export {
  ArrowLeft_default as default
};
