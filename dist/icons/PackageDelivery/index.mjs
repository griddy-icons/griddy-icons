import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PackageDeliveryIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PackageDeliveryIcon.displayName = "PackageDelivery";
var PackageDelivery_default = PackageDeliveryIcon;
export {
  PackageDelivery_default as default
};
