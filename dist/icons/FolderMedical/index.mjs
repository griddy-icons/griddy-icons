import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FolderMedicalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FolderMedicalIcon.displayName = "FolderMedical";
var FolderMedical_default = FolderMedicalIcon;
export {
  FolderMedical_default as default
};
