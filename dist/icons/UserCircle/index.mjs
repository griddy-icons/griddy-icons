import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UserCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UserCircleIcon.displayName = "UserCircle";
var UserCircle_default = UserCircleIcon;
export {
  UserCircle_default as default
};
