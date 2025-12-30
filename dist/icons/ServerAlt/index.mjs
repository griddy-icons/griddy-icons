import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ServerAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ServerAltIcon.displayName = "ServerAlt";
var ServerAlt_default = ServerAltIcon;
export {
  ServerAlt_default as default
};
