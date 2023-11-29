import React from "react";

import { Button, Img, List, Text } from "components";

type HomeListiconrelumeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "headingtext"
  | "descriptiontext"
  | "morebuttontext"
  | "loginbuttontext"
  | "headingtext1"
  | "descriptiontext1"
  | "morebuttontext1"
  | "loginbuttontext1"
  | "headingtext2"
  | "descriptiontext2"
  | "morebuttontext2"
  | "loginbuttontext2"
> &
  Partial<{
    headingtext: string;
    descriptiontext: JSX.Element | string;
    morebuttontext: string;
    loginbuttontext: string;
    headingtext1: string;
    descriptiontext1: JSX.Element | string;
    morebuttontext1: string;
    loginbuttontext1: string;
    headingtext2: string;
    descriptiontext2: JSX.Element | string;
    morebuttontext2: string;
    loginbuttontext2: string;
  }>;

const HomeListiconrelume: React.FC<HomeListiconrelumeProps> = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-1 flex-col gap-[26.58px] items-center justify-center w-full">
          <div className="flex flex-col gap-[20.42px] items-center justify-start w-full">
            <Img
              className="h-10 w-10"
              src="images/img_iconrelume.svg"
              alt="iconrelume"
            />
            <div className="flex flex-col gap-[20.42px] items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtRobotoBold32Black900"
              >
                {props?.headingtext}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                size="txtRobotoLight18"
              >
                {props?.descriptiontext}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[20.42px] items-center justify-center pt-[13.61px] w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[76px] rounded-lg text-base text-center"
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.morebuttontext}
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[102px] rounded-lg"
              rightIcon={
                <Img
                  className="h-5 mb-px ml-2.5"
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
                {props?.loginbuttontext}
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[26.58px] items-center justify-center w-full">
          <div className="flex flex-col gap-[20.42px] items-center justify-start w-full">
            <Img
              className="h-10 w-10"
              src="images/img_iconrelume.svg"
              alt="iconrelume"
            />
            <div className="flex flex-col gap-[20.42px] items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtRobotoBold32Black900"
              >
                {props?.headingtext1}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                size="txtRobotoLight18"
              >
                {props?.descriptiontext1}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[20.42px] items-center justify-center pt-[13.61px] w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[76px] rounded-lg text-base text-center"
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.morebuttontext1}
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[102px] rounded-lg"
              rightIcon={
                <Img
                  className="h-5 mb-px ml-2.5"
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
                {props?.loginbuttontext1}
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[26.58px] items-center justify-center w-full">
          <div className="flex flex-col gap-[20.42px] items-center justify-start w-full">
            <Img
              className="h-10 w-10"
              src="images/img_iconrelume.svg"
              alt="iconrelume"
            />
            <div className="flex flex-col gap-[20.42px] items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtRobotoBold32Black900"
              >
                {props?.headingtext2}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                size="txtRobotoLight18"
              >
                {props?.descriptiontext2}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[20.42px] items-center justify-center pt-[13.61px] w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[76px] rounded-lg text-base text-center"
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.morebuttontext2}
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[102px] rounded-lg"
              rightIcon={
                <Img
                  className="h-5 mb-px ml-2.5"
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
                {props?.loginbuttontext2}
              </div>
            </Button>
          </div>
        </div>
      </List>
    </>
  );
};

HomeListiconrelume.defaultProps = {
  headingtext: "Real Estate Meets AI",
  descriptiontext: (
    <>
      Our AI-powered platform analyzes real estate data to provide you with
      personalized property recommendations based on your preferences and
      requirements. Whether you&#39;re looking for commercial real estate,
      multi-family properties, industrial sites, or rental properties, we&#39;ve
      got you covered.
    </>
  ),
  morebuttontext: "More",
  loginbuttontext: "Login",
  headingtext1: "Real Estate Community",
  descriptiontext1: (
    <>
      Our AI-powered platform analyzes real estate data to provide you with
      personalized property recommendations based on your preferences and
      requirements. Whether you&#39;re looking for commercial real estate,
      multi-family properties, industrial sites, or rental properties, we&#39;ve
      got you covered.
    </>
  ),
  morebuttontext1: "More",
  loginbuttontext1: "Login",
  headingtext2: "Property Search",
  descriptiontext2: (
    <>
      Our AI-powered platform analyzes real estate data to provide you with
      personalized property recommendations based on your preferences and
      requirements. Whether you&#39;re looking for commercial real estate,
      multi-family properties, industrial sites, or rental properties, we&#39;ve
      got you covered.
    </>
  ),
  morebuttontext2: "More",
  loginbuttontext2: "Login",
};

export default HomeListiconrelume;
