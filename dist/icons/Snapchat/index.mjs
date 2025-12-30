import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SnapchatIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SnapchatIcon.displayName = "Snapchat";
var Snapchat_default = SnapchatIcon;
export {
  Snapchat_default as default
};
