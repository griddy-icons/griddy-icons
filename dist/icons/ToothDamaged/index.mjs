import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothDamagedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothDamagedIcon.displayName = "ToothDamaged";
var ToothDamaged_default = ToothDamagedIcon;
export {
  ToothDamaged_default as default
};
