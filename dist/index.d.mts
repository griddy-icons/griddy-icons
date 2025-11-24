import React, { SVGProps } from 'react';

type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
type IconContextValue = {
    color?: string;
    size?: number | string;
    weight?: IconWeight;
    mirrored?: boolean;
};
declare const IconContext: React.Context<IconContextValue>;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "color"> {
    color?: string;
    size?: number | string;
    weight?: IconWeight;
    mirrored?: boolean;
}

declare const AnalyzeVoice: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

declare const ArrowRight: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

declare const Heart: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

export { AnalyzeVoice, ArrowRight, Heart, IconContext, type IconProps, type IconWeight };
