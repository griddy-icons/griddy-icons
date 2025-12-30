import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const UsersGroupIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
UsersGroupIcon.displayName = "UsersGroup";
var UsersGroup_default = UsersGroupIcon;
export {
  UsersGroup_default as default
};
