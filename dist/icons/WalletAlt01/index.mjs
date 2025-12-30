import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WalletAlt01Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WalletAlt01Icon.displayName = "WalletAlt01";
var WalletAlt01_default = WalletAlt01Icon;
export {
  WalletAlt01_default as default
};
