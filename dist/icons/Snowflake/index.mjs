import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SnowflakeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SnowflakeIcon.displayName = "Snowflake";
var Snowflake_default = SnowflakeIcon;
export {
  Snowflake_default as default
};
