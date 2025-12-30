import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SearchAlertIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SearchAlertIcon.displayName = "SearchAlert";
var SearchAlert_default = SearchAlertIcon;
export {
  SearchAlert_default as default
};
