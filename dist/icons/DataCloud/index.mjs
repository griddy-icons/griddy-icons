import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DataCloudIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DataCloudIcon.displayName = "DataCloud";
var DataCloud_default = DataCloudIcon;
export {
  DataCloud_default as default
};
