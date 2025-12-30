import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HexagonAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HexagonAltIcon.displayName = "HexagonAlt";
var HexagonAlt_default = HexagonAltIcon;
export {
  HexagonAlt_default as default
};
