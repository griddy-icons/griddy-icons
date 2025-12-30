import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AddressBookIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AddressBookIcon.displayName = "AddressBook";
var AddressBook_default = AddressBookIcon;
export {
  AddressBook_default as default
};
