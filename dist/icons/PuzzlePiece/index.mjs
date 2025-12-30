import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const PuzzlePieceIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
PuzzlePieceIcon.displayName = "PuzzlePiece";
var PuzzlePiece_default = PuzzlePieceIcon;
export {
  PuzzlePiece_default as default
};
