import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const FileCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
FileCancelIcon.displayName = "FileCancel";
var FileCancel_default = FileCancelIcon;
export {
  FileCancel_default as default
};
