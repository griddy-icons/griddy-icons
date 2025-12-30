import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LinkAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LinkAlt02Icon.displayName = "LinkAlt02";
var LinkAlt02_default = LinkAlt02Icon;
export {
  LinkAlt02_default as default
};
