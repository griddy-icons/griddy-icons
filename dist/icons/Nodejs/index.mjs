import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const NodejsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
NodejsIcon.displayName = "Nodejs";
var Nodejs_default = NodejsIcon;
export {
  Nodejs_default as default
};
