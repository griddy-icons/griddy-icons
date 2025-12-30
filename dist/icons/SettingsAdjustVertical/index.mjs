import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SettingsAdjustVerticalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SettingsAdjustVerticalIcon.displayName = "SettingsAdjustVertical";
var SettingsAdjustVertical_default = SettingsAdjustVerticalIcon;
export {
  SettingsAdjustVertical_default as default
};
