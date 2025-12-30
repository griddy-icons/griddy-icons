import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BookmarkCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BookmarkCancelIcon.displayName = "BookmarkCancel";
var BookmarkCancel_default = BookmarkCancelIcon;
export {
  BookmarkCancel_default as default
};
