import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LinkBrokenAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LinkBrokenAlt02Icon.displayName = "LinkBrokenAlt02";
var LinkBrokenAlt02_default = LinkBrokenAlt02Icon;
export {
  LinkBrokenAlt02_default as default
};
