import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GenerateFileIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GenerateFileIcon.displayName = "GenerateFile";
var GenerateFile_default = GenerateFileIcon;
export {
  GenerateFile_default as default
};
