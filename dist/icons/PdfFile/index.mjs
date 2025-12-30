import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PdfFileIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PdfFileIcon.displayName = "PdfFile";
var PdfFile_default = PdfFileIcon;
export {
  PdfFile_default as default
};
