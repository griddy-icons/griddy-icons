import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FolderCodeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FolderCodeIcon.displayName = "FolderCode";
var FolderCode_default = FolderCodeIcon;
export {
  FolderCode_default as default
};
