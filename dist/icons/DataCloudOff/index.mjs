import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DataCloudOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DataCloudOffIcon.displayName = "DataCloudOff";
var DataCloudOff_default = DataCloudOffIcon;
export {
  DataCloudOff_default as default
};
