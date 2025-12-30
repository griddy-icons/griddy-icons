import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FolderBlockedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FolderBlockedIcon.displayName = "FolderBlocked";
var FolderBlocked_default = FolderBlockedIcon;
export {
  FolderBlocked_default as default
};
