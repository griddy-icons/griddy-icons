import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FolderLockedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FolderLockedIcon.displayName = "FolderLocked";
var FolderLocked_default = FolderLockedIcon;
export {
  FolderLocked_default as default
};
