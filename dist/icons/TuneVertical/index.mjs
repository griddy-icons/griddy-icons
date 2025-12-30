import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TuneVerticalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TuneVerticalIcon.displayName = "TuneVertical";
var TuneVertical_default = TuneVerticalIcon;
export {
  TuneVertical_default as default
};
