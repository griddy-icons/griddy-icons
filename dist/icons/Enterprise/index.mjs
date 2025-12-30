import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const EnterpriseIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
EnterpriseIcon.displayName = "Enterprise";
var Enterprise_default = EnterpriseIcon;
export {
  Enterprise_default as default
};
