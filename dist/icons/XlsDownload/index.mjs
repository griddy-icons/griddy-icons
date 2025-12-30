import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const XlsDownloadIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
XlsDownloadIcon.displayName = "XlsDownload";
var XlsDownload_default = XlsDownloadIcon;
export {
  XlsDownload_default as default
};
