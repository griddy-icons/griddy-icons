import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HashtagAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HashtagAltIcon.displayName = "HashtagAlt";
var HashtagAlt_default = HashtagAltIcon;
export {
  HashtagAlt_default as default
};
