import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import IconBase from "../../IconBase";
import regular from "./regular";
import filled from "./filled";
const weights = { regular, filled };
const RoadmapIcon = forwardRef((props, ref) => /* @__PURE__ */ jsx(IconBase, { ref, ...props, weights }));
RoadmapIcon.displayName = "Roadmap";
var Roadmap_default = RoadmapIcon;
export {
  Roadmap_default as default
};
