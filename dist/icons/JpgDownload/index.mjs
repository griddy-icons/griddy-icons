import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const JpgDownloadIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
JpgDownloadIcon.displayName = "JpgDownload";
var JpgDownload_default = JpgDownloadIcon;
export {
  JpgDownload_default as default
};
