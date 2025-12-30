import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const TrashAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
TrashAltIcon.displayName = "TrashAlt";
var TrashAlt_default = TrashAltIcon;
export {
  TrashAlt_default as default
};
