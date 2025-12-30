import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BookmarkMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BookmarkMinusIcon.displayName = "BookmarkMinus";
var BookmarkMinus_default = BookmarkMinusIcon;
export {
  BookmarkMinus_default as default
};
