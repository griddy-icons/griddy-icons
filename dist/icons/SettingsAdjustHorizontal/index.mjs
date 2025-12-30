import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SettingsAdjustHorizontalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SettingsAdjustHorizontalIcon.displayName = "SettingsAdjustHorizontal";
var SettingsAdjustHorizontal_default = SettingsAdjustHorizontalIcon;
export {
  SettingsAdjustHorizontal_default as default
};
