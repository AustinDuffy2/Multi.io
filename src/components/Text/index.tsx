import React from "react";

const sizeClasses = {
  txtRobotoRegular18Black900: "font-normal font-roboto",
  txtRobotoLight20: "font-light font-roboto",
  txtRobotoMedium20Black900dd: "font-medium font-roboto",
  txtRobotoRegular14Black90099: "font-normal font-roboto",
  txtRobotoRegular16Gray400: "font-normal font-roboto",
  txtRobotoSemiBold20: "font-roboto font-semibold",
  txtRobotoRegular14: "font-normal font-roboto",
  txtRobotoLight18: "font-light font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoCondensedBold48: "font-bold font-robotocondensed",
  txtRobotoRegular18: "font-normal font-roboto",
  txtRobotoMedium20: "font-medium font-roboto",
  txtRobotoLight14: "font-light font-roboto",
  txtRobotoLight16Gray400: "font-light font-roboto",
  txtRobotoLight16: "font-light font-roboto",
  txtRobotoBold24: "font-bold font-roboto",
  txtRobotoBold32Black900: "font-bold font-roboto",
  txtRobotoSemiBold16: "font-roboto font-semibold",
  txtRobotoRegular20: "font-normal font-roboto",
  txtRobotoSemiBold14: "font-roboto font-semibold",
  txtRobotoBold20: "font-bold font-roboto",
  txtRobotoBold32: "font-bold font-roboto",
  txtRobotoRegular16Gray800: "font-normal font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
