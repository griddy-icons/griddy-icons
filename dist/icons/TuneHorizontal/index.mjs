import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TuneHorizontalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TuneHorizontalIcon.displayName = "TuneHorizontal";
var TuneHorizontal_default = TuneHorizontalIcon;
export {
  TuneHorizontal_default as default
};
