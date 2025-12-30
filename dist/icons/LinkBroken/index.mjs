import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LinkBrokenIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LinkBrokenIcon.displayName = "LinkBroken";
var LinkBroken_default = LinkBrokenIcon;
export {
  LinkBroken_default as default
};
