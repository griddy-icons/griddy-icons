import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UsersEventIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UsersEventIcon.displayName = "UsersEvent";
var UsersEvent_default = UsersEventIcon;
export {
  UsersEvent_default as default
};
