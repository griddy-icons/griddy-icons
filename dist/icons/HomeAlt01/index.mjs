import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HomeAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HomeAlt01Icon.displayName = "HomeAlt01";
var HomeAlt01_default = HomeAlt01Icon;
export {
  HomeAlt01_default as default
};
