import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DataCloudCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DataCloudCheckIcon.displayName = "DataCloudCheck";
var DataCloudCheck_default = DataCloudCheckIcon;
export {
  DataCloudCheck_default as default
};
