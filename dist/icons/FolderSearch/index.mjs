import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FolderSearchIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FolderSearchIcon.displayName = "FolderSearch";
var FolderSearch_default = FolderSearchIcon;
export {
  FolderSearch_default as default
};
