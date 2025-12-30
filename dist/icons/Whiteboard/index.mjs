import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const WhiteboardIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
WhiteboardIcon.displayName = "Whiteboard";
var Whiteboard_default = WhiteboardIcon;
export {
  Whiteboard_default as default
};
