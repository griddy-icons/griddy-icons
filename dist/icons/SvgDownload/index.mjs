import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SvgDownloadIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SvgDownloadIcon.displayName = "SvgDownload";
var SvgDownload_default = SvgDownloadIcon;
export {
  SvgDownload_default as default
};
