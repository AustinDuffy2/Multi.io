import React from "react";

import { Button, Img, List, Text } from "components";

type AIPlatformLayout241Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheading"
  | "userheading"
  | "userdescription"
  | "propertyheading"
  | "propertydescription"
  | "trendsheading"
  | "trendsdescription"
  | "recommendationsheading"
  | "recommendationsdescription"
  | "morebutton"
  | "signupbutton"
> &
  Partial<{
    subheading: string;
    userheading: string;
    userdescription: string;
    propertyheading: string;
    propertydescription: string;
    trendsheading: string;
    trendsdescription: string;
    recommendationsheading: string;
    recommendationsdescription: string;
    morebutton: string;
    signupbutton: string;
  }>;

const AIPlatformLayout241: React.FC<AIPlatformLayout241Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-start justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.userheading}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1140px] md:max-w-full text-black-900 text-lg"
              size="txtRobotoLight18"
            >
              {props?.userdescription}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Img
              className="h-12 w-12"
              src="images/img_iconrelume.svg"
              alt="iconrelume"
            />
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
              size="txtRobotoBold24"
            >
              {props?.propertyheading}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-lg"
              size="txtRobotoLight18"
            >
              {props?.propertydescription}
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Img
              className="h-12 w-12"
              src="images/img_iconrelume.svg"
              alt="iconrelume"
            />
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
              size="txtRobotoBold24"
            >
              {props?.trendsheading}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-lg"
              size="txtRobotoLight18"
            >
              {props?.trendsdescription}
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Img
              className="h-12 w-12"
              src="images/img_iconrelume.svg"
              alt="iconrelume"
            />
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
              size="txtRobotoBold24"
            >
              {props?.recommendationsheading}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-lg"
              size="txtRobotoLight18"
            >
              {props?.recommendationsdescription}
            </Text>
          </div>
        </List>
        <div className="flex flex-row gap-6 items-center justify-center w-full">
          <Button
            className="!text-white-A700 cursor-pointer font-roboto min-w-[85px] text-base text-center"
            shape="round"
            color="light_blue_500"
            size="sm"
            variant="fill"
          >
            {props?.morebutton}
          </Button>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[131px]"
            rightIcon={
              <Img className="h-6 ml-3" src="images/img_map.svg" alt="user" />
            }
            shape="round"
            color="light_blue_500_72"
            size="xs"
            variant="fill"
          >
            <div className="!text-white-A700 font-roboto text-base text-left">
              {props?.signupbutton}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

AIPlatformLayout241.defaultProps = {
  subheading: "Discover",
  userheading: "Unlock the Power of Our AI Platform",
  userdescription:
    "Our AI platform offers advanced property search capabilities, market trends analysis, and personalized recommendations to help you find the perfect real estate investment.",
  propertyheading: "Advanced Property Search",
  propertydescription:
    "Effortlessly search for commercial real estate, multi-family properties, industrial sites, and rental properties around the world.",
  trendsheading: "Market Trends Analysis",
  trendsdescription:
    "Stay ahead of the curve with our AI-powered market trends analysis, providing valuable insights into real estate market dynamics.",
  recommendationsheading: "Personalized Recommendations",
  recommendationsdescription:
    "Receive tailored recommendations based on your preferences, ensuring you find the best investment opportunities.",
  morebutton: "More",
  signupbutton: "Sign Up",
};

export default AIPlatformLayout241;
