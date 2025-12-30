import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LinkBrokenAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LinkBrokenAlt01Icon.displayName = "LinkBrokenAlt01";
var LinkBrokenAlt01_default = LinkBrokenAlt01Icon;
export {
  LinkBrokenAlt01_default as default
};
