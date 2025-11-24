import React from "react";

export type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export type IconContextValue = {
	color?: string;
	size?: number | string;
	weight?: IconWeight;
	mirrored?: boolean;
};

export const IconContext = React.createContext<IconContextValue>({
	color: "currentColor",
	size: 24,
	weight: "regular",
	mirrored: false
});

export const IconContextProvider = IconContext.Provider;

export default IconContext;


