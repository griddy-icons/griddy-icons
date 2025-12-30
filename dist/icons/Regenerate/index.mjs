import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RegenerateIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RegenerateIcon.displayName = "Regenerate";
var Regenerate_default = RegenerateIcon;
export {
  Regenerate_default as default
};
