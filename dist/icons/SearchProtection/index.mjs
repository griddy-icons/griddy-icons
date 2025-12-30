import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SearchProtectionIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SearchProtectionIcon.displayName = "SearchProtection";
var SearchProtection_default = SearchProtectionIcon;
export {
  SearchProtection_default as default
};
