import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RestaurantIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RestaurantIcon.displayName = "Restaurant";
var Restaurant_default = RestaurantIcon;
export {
  Restaurant_default as default
};
