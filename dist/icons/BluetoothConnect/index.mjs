import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BluetoothConnectIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BluetoothConnectIcon.displayName = "BluetoothConnect";
var BluetoothConnect_default = BluetoothConnectIcon;
export {
  BluetoothConnect_default as default
};
