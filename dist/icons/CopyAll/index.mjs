import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CopyAllIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CopyAllIcon.displayName = "CopyAll";
var CopyAll_default = CopyAllIcon;
export {
  CopyAll_default as default
};
