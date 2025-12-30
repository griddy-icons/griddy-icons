import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FileMedicalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FileMedicalIcon.displayName = "FileMedical";
var FileMedical_default = FileMedicalIcon;
export {
  FileMedical_default as default
};
