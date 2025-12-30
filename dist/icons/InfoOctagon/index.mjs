import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const InfoOctagonIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
InfoOctagonIcon.displayName = "InfoOctagon";
var InfoOctagon_default = InfoOctagonIcon;
export {
  InfoOctagon_default as default
};
