import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DeskphoneIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DeskphoneIcon.displayName = "Deskphone";
var Deskphone_default = DeskphoneIcon;
export {
  Deskphone_default as default
};
