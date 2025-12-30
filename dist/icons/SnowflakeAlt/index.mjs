import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SnowflakeAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SnowflakeAltIcon.displayName = "SnowflakeAlt";
var SnowflakeAlt_default = SnowflakeAltIcon;
export {
  SnowflakeAlt_default as default
};
