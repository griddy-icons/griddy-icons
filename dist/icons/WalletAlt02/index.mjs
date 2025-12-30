import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WalletAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WalletAlt02Icon.displayName = "WalletAlt02";
var WalletAlt02_default = WalletAlt02Icon;
export {
  WalletAlt02_default as default
};
