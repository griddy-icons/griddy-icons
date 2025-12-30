import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BookOpenIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BookOpenIcon.displayName = "BookOpen";
var BookOpen_default = BookOpenIcon;
export {
  BookOpen_default as default
};
