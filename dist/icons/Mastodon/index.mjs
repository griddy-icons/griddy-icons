import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MastodonIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MastodonIcon.displayName = "Mastodon";
var Mastodon_default = MastodonIcon;
export {
  Mastodon_default as default
};
