import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ShareAndroidIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ShareAndroidIcon.displayName = "ShareAndroid";
var ShareAndroid_default = ShareAndroidIcon;
export {
  ShareAndroid_default as default
};
