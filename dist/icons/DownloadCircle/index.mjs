import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DownloadCircleIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DownloadCircleIcon.displayName = "DownloadCircle";
var DownloadCircle_default = DownloadCircleIcon;
export {
  DownloadCircle_default as default
};
