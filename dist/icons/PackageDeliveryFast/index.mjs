import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PackageDeliveryFastIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PackageDeliveryFastIcon.displayName = "PackageDeliveryFast";
var PackageDeliveryFast_default = PackageDeliveryFastIcon;
export {
  PackageDeliveryFast_default as default
};
