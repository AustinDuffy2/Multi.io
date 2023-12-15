import React from "react";

import { Button, Img, Text } from "components";

type PropertyDetailsLayout22Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "heading" | "text" | "learnmorebutton" | "loginbutton"
> &
  Partial<{
    heading: string;
    text: string;
    learnmorebutton: string;
    loginbutton: string;
  }>;

const PropertyDetailsLayout22: React.FC<PropertyDetailsLayout22Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-full">
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                    size="txtRobotoBold32Black900"
                  >
                    {props?.heading}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-lg"
                    size="txtRobotoLight18"
                  >
                    {props?.text}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-center justify-start pt-4 w-full">
                <Button
                  className="!text-white-A700 cursor-pointer font-roboto min-w-[129px] text-base text-center"
                  shape="round"
                  color="light_blue_500"
                  size="sm"
                  variant="fill"
                >
                  {props?.learnmorebutton}
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[116px]"
                  rightIcon={
                    <Img
                      className="h-6 ml-3"
                      src="images/img_map.svg"
                      alt="user"
                    />
                  }
                  shape="round"
                  color="light_blue_500_72"
                  size="xs"
                  variant="fill"
                >
                  <div className="!text-white-A700 font-roboto text-base text-left">
                    {props?.loginbutton}
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <Img
            className="flex-1 h-[500px] sm:h-[] md:h-auto max-h-[500px] sm:max-h-[] object-cover sm:w-[] md:w-[]"
            src="images/img_heroanimation_3.png"
            alt="heroanimation"
          />
        </div>
      </div>
    </>
  );
};

PropertyDetailsLayout22.defaultProps = {
  heading: "Key Features of the Property",
  text: "Discover the amazing amenities, nearby facilities, and investment potential of this property.",
  learnmorebutton: "Learn More",
  loginbutton: "Login",
};

export default PropertyDetailsLayout22;
