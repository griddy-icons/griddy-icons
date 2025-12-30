import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const JpgFileIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
JpgFileIcon.displayName = "JpgFile";
var JpgFile_default = JpgFileIcon;
export {
  JpgFile_default as default
};
