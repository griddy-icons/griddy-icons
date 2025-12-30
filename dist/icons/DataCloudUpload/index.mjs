import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DataCloudUploadIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DataCloudUploadIcon.displayName = "DataCloudUpload";
var DataCloudUpload_default = DataCloudUploadIcon;
export {
  DataCloudUpload_default as default
};
