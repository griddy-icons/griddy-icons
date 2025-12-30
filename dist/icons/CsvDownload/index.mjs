import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CsvDownloadIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CsvDownloadIcon.displayName = "CsvDownload";
var CsvDownload_default = CsvDownloadIcon;
export {
  CsvDownload_default as default
};
