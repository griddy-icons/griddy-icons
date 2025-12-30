import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SearchMinusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SearchMinusIcon.displayName = "SearchMinus";
var SearchMinus_default = SearchMinusIcon;
export {
  SearchMinus_default as default
};
