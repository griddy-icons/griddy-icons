import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EftposAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EftposAltIcon.displayName = "EftposAlt";
var EftposAlt_default = EftposAltIcon;
export {
  EftposAlt_default as default
};
