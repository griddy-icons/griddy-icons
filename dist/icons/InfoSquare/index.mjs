import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const InfoSquareIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
InfoSquareIcon.displayName = "InfoSquare";
var InfoSquare_default = InfoSquareIcon;
export {
  InfoSquare_default as default
};
