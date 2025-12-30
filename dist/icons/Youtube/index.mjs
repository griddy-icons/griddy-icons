import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const YoutubeIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
YoutubeIcon.displayName = "Youtube";
var Youtube_default = YoutubeIcon;
export {
  Youtube_default as default
};
