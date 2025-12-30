import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const IncognitoIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
IncognitoIcon.displayName = "Incognito";
var Incognito_default = IncognitoIcon;
export {
  Incognito_default as default
};
