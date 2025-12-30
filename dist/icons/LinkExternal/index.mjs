import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const LinkExternalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
LinkExternalIcon.displayName = "LinkExternal";
var LinkExternal_default = LinkExternalIcon;
export {
  LinkExternal_default as default
};
