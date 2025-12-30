import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const MicrosoftTeamsIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
MicrosoftTeamsIcon.displayName = "MicrosoftTeams";
var MicrosoftTeams_default = MicrosoftTeamsIcon;
export {
  MicrosoftTeams_default as default
};
