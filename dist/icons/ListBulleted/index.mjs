import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ListBulletedIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ListBulletedIcon.displayName = "ListBulleted";
var ListBulleted_default = ListBulletedIcon;
export {
  ListBulleted_default as default
};
