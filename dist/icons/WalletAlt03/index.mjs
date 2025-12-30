import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WalletAlt03Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WalletAlt03Icon.displayName = "WalletAlt03";
var WalletAlt03_default = WalletAlt03Icon;
export {
  WalletAlt03_default as default
};
