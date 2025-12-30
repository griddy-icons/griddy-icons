import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const StickyNoteIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
StickyNoteIcon.displayName = "StickyNote";
var StickyNote_default = StickyNoteIcon;
export {
  StickyNote_default as default
};
