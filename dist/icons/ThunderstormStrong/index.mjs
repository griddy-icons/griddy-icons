import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ThunderstormStrongIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ThunderstormStrongIcon.displayName = "ThunderstormStrong";
var ThunderstormStrong_default = ThunderstormStrongIcon;
export {
  ThunderstormStrong_default as default
};
