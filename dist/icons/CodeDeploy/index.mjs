import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const CodeDeployIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
CodeDeployIcon.displayName = "CodeDeploy";
var CodeDeploy_default = CodeDeployIcon;
export {
  CodeDeploy_default as default
};
