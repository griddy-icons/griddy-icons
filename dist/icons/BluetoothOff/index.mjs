import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const BluetoothOffIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
BluetoothOffIcon.displayName = "BluetoothOff";
var BluetoothOff_default = BluetoothOffIcon;
export {
  BluetoothOff_default as default
};
