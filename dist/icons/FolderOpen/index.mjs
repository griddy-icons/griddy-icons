import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FolderOpenIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FolderOpenIcon.displayName = "FolderOpen";
var FolderOpen_default = FolderOpenIcon;
export {
  FolderOpen_default as default
};
