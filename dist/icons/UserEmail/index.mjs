import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UserEmailIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UserEmailIcon.displayName = "UserEmail";
var UserEmail_default = UserEmailIcon;
export {
  UserEmail_default as default
};
