import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BluetoothSignalIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BluetoothSignalIcon.displayName = "BluetoothSignal";
var BluetoothSignal_default = BluetoothSignalIcon;
export {
  BluetoothSignal_default as default
};
