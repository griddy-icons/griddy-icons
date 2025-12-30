import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShareWindowsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShareWindowsIcon.displayName = "ShareWindows";
var ShareWindows_default = ShareWindowsIcon;
export {
  ShareWindows_default as default
};
