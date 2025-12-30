import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BlueskyIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BlueskyIcon.displayName = "Bluesky";
var Bluesky_default = BlueskyIcon;
export {
  Bluesky_default as default
};
