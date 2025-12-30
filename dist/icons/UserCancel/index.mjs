import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UserCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UserCancelIcon.displayName = "UserCancel";
var UserCancel_default = UserCancelIcon;
export {
  UserCancel_default as default
};
