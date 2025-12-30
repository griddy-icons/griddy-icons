import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SearchVirusIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SearchVirusIcon.displayName = "SearchVirus";
var SearchVirus_default = SearchVirusIcon;
export {
  SearchVirus_default as default
};
