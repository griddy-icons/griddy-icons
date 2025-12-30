import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CloudAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CloudAlt01Icon.displayName = "CloudAlt01";
var CloudAlt01_default = CloudAlt01Icon;
export {
  CloudAlt01_default as default
};
