import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FolderDownloadIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FolderDownloadIcon.displayName = "FolderDownload";
var FolderDownload_default = FolderDownloadIcon;
export {
  FolderDownload_default as default
};
