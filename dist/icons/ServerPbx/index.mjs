import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const ServerPbxIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
ServerPbxIcon.displayName = "ServerPbx";
var ServerPbx_default = ServerPbxIcon;
export {
  ServerPbx_default as default
};
