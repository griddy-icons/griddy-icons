import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LinkAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LinkAlt01Icon.displayName = "LinkAlt01";
var LinkAlt01_default = LinkAlt01Icon;
export {
  LinkAlt01_default as default
};
