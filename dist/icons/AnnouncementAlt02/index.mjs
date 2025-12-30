import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const AnnouncementAlt02Icon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
AnnouncementAlt02Icon.displayName = "AnnouncementAlt02";
var AnnouncementAlt02_default = AnnouncementAlt02Icon;
export {
  AnnouncementAlt02_default as default
};
