import React from "react";

import { Button, Img, Text } from "components";

type PropertiesHeader26Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "searchtext" | "descriptiontext" | "searchbuttontext" | "signupbuttontext"
> &
  Partial<{
    searchtext: string;
    descriptiontext: string;
    searchbuttontext: string;
    signupbuttontext: string;
  }>;

const PropertiesHeader26: React.FC<PropertiesHeader26Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-[38.42px] items-start justify-start w-full">
          <Text
            className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
            size="txtRobotoBold24"
          >
            {props?.searchtext}
          </Text>
          <div className="flex flex-col gap-9 items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="leading-[150.00%] max-w-[555px] md:max-w-full text-base text-black-900 text-center"
                size="txtRobotoLight16"
              >
                {props?.descriptiontext}
              </Text>
            </div>
            <div className="flex flex-row gap-[14.76px] items-center justify-center p-[2.88px] w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto min-w-[92px] rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500"
                size="md"
                variant="fill"
              >
                {props?.searchbuttontext}
              </Button>
              <Button
                className="!text-white-A700 cursor-pointer font-roboto min-w-[89px] rounded-[9px] text-base text-center"
                shape="round"
                color="light_blue_500_72"
                size="xs"
                variant="fill"
              >
                {props?.signupbuttontext}
              </Button>
            </div>
          </div>
        </div>
        <Img
          className="flex-1 h-[480px] md:h-auto object-cover w-full"
          src="images/img_heroanimation_480x555.png"
          alt="heroanimation"
        />
      </div>
    </>
  );
};

PropertiesHeader26.defaultProps = {
  searchtext: "Find the perfect property for your needs today",
  descriptiontext:
    "Discover a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world with our AI-powered platform.",
  searchbuttontext: "Search",
  signupbuttontext: "Sign Up",
};

export default PropertiesHeader26;
