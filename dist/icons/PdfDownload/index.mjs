import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PdfDownloadIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PdfDownloadIcon.displayName = "PdfDownload";
var PdfDownload_default = PdfDownloadIcon;
export {
  PdfDownload_default as default
};
