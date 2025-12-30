import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SmokeFreeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SmokeFreeIcon.displayName = "SmokeFree";
var SmokeFree_default = SmokeFreeIcon;
export {
  SmokeFree_default as default
};
