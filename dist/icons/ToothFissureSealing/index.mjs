import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ToothFissureSealingIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ToothFissureSealingIcon.displayName = "ToothFissureSealing";
var ToothFissureSealing_default = ToothFissureSealingIcon;
export {
  ToothFissureSealing_default as default
};
