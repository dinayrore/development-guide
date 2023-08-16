import { Colors, FontSize, FontWeight, LineHeight } from "./constants";
import { Fonts, TextProps } from "./types";

export const fonts = (props?: TextProps): Fonts => {
  const fontWeight = props?.fontWeight ?? FontWeight.medium;
  const color = props?.color ?? Colors.black;
  const textDecorationLine = props?.textDecorationLine ?? "none";

  return {
    bodyText: {
      color,
      fontSize: FontSize.bodyText,
      fontWeight,
      letterSpacing: 0,
      lineHeight: LineHeight.bodyText,
      textDecorationLine,
    },
    heading: {
      color,
      fontSize: FontSize.heading,
      fontWeight: "800",
      letterSpacing: 0,
      lineHeight: LineHeight.heading,
    },
    subheading: {
      color,
      fontSize: FontSize.subheading,
      fontWeight: "800",
      letterSpacing: -2,
      lineHeight: LineHeight.subheading,
    },
    caption: {
      color,
      fontSize: FontSize.caption,
      fontWeight,
      letterSpacing: 0,
      lineHeight: LineHeight.caption,
    },
  };
};
