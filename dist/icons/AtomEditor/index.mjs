import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AtomEditorIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AtomEditorIcon.displayName = "AtomEditor";
var AtomEditor_default = AtomEditorIcon;
export {
  AtomEditor_default as default
};
