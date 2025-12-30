import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DataCloudDownloadIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DataCloudDownloadIcon.displayName = "DataCloudDownload";
var DataCloudDownload_default = DataCloudDownloadIcon;
export {
  DataCloudDownload_default as default
};
