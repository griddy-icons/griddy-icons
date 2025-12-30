import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PostgresqlIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PostgresqlIcon.displayName = "Postgresql";
var Postgresql_default = PostgresqlIcon;
export {
  Postgresql_default as default
};
