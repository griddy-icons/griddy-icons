import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const GumroadIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
GumroadIcon.displayName = "Gumroad";
var Gumroad_default = GumroadIcon;
export {
  Gumroad_default as default
};
