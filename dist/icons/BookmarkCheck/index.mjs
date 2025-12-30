import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BookmarkCheckIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BookmarkCheckIcon.displayName = "BookmarkCheck";
var BookmarkCheck_default = BookmarkCheckIcon;
export {
  BookmarkCheck_default as default
};
