import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SvgFileIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SvgFileIcon.displayName = "SvgFile";
var SvgFile_default = SvgFileIcon;
export {
  SvgFile_default as default
};
