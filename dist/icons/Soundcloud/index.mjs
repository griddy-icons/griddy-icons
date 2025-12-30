import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const SoundcloudIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
SoundcloudIcon.displayName = "Soundcloud";
var Soundcloud_default = SoundcloudIcon;
export {
  Soundcloud_default as default
};
