import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const JavascriptIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
JavascriptIcon.displayName = "Javascript";
var Javascript_default = JavascriptIcon;
export {
  Javascript_default as default
};
