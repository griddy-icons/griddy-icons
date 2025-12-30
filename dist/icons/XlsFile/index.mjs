import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const XlsFileIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
XlsFileIcon.displayName = "XlsFile";
var XlsFile_default = XlsFileIcon;
export {
  XlsFile_default as default
};
