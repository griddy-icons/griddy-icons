import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ClubhouseIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ClubhouseIcon.displayName = "Clubhouse";
var Clubhouse_default = ClubhouseIcon;
export {
  Clubhouse_default as default
};
