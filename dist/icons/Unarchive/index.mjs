import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UnarchiveIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UnarchiveIcon.displayName = "Unarchive";
var Unarchive_default = UnarchiveIcon;
export {
  Unarchive_default as default
};
