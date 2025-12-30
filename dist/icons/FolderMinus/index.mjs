import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FolderMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FolderMinusIcon.displayName = "FolderMinus";
var FolderMinus_default = FolderMinusIcon;
export {
  FolderMinus_default as default
};
