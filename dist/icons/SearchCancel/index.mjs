import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SearchCancelIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SearchCancelIcon.displayName = "SearchCancel";
var SearchCancel_default = SearchCancelIcon;
export {
  SearchCancel_default as default
};
