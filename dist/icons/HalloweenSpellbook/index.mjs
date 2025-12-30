import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const HalloweenSpellbookIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
HalloweenSpellbookIcon.displayName = "HalloweenSpellbook";
var HalloweenSpellbook_default = HalloweenSpellbookIcon;
export {
  HalloweenSpellbook_default as default
};
