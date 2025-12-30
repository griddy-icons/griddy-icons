import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const DatabaseAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
DatabaseAltIcon.displayName = "DatabaseAlt";
var DatabaseAlt_default = DatabaseAltIcon;
export {
  DatabaseAlt_default as default
};
