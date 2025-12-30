import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LicenseDraftIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LicenseDraftIcon.displayName = "LicenseDraft";
var LicenseDraft_default = LicenseDraftIcon;
export {
  LicenseDraft_default as default
};
