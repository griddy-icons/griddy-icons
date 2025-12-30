import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BandcampIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BandcampIcon.displayName = "Bandcamp";
var Bandcamp_default = BandcampIcon;
export {
  Bandcamp_default as default
};
