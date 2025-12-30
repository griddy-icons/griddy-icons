import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ServerPbxAltIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ServerPbxAltIcon.displayName = "ServerPbxAlt";
var ServerPbxAlt_default = ServerPbxAltIcon;
export {
  ServerPbxAlt_default as default
};
