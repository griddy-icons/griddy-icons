import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RestaurantMenuIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RestaurantMenuIcon.displayName = "RestaurantMenu";
var RestaurantMenu_default = RestaurantMenuIcon;
export {
  RestaurantMenu_default as default
};
