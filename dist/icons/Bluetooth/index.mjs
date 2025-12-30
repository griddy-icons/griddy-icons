import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BluetoothIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BluetoothIcon.displayName = "Bluetooth";
var Bluetooth_default = BluetoothIcon;
export {
  Bluetooth_default as default
};
