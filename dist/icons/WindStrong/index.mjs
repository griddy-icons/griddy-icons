import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WindStrongIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WindStrongIcon.displayName = "WindStrong";
var WindStrong_default = WindStrongIcon;
export {
  WindStrong_default as default
};
