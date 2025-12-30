import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UserSettingsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UserSettingsIcon.displayName = "UserSettings";
var UserSettings_default = UserSettingsIcon;
export {
  UserSettings_default as default
};
