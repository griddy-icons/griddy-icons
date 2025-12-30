import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BookmarkAddIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BookmarkAddIcon.displayName = "BookmarkAdd";
var BookmarkAdd_default = BookmarkAddIcon;
export {
  BookmarkAdd_default as default
};
