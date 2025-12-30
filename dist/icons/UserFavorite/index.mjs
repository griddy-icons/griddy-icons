import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UserFavoriteIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UserFavoriteIcon.displayName = "UserFavorite";
var UserFavorite_default = UserFavoriteIcon;
export {
  UserFavorite_default as default
};
