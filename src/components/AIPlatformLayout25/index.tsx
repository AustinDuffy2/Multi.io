import React from "react";

import { Button, Img, Text } from "components";

type AIPlatformLayout25Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingTwo"
  | "headingTwo"
  | "descriptionTwo"
  | "number"
  | "text"
  | "numberOne"
  | "textOne"
  | "moreOne"
  | "signUpTwo"
> &
  Partial<{
    subheadingTwo: string;
    headingTwo: string;
    descriptionTwo: string;
    number: string;
    text: string;
    numberOne: string;
    textOne: string;
    moreOne: string;
    signUpTwo: string;
  }>;

const AIPlatformLayout25: React.FC<AIPlatformLayout25Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtRobotoSemiBold16"
              >
                {props?.subheadingTwo}
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[558px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtRobotoBold32Black900"
                >
                  {props?.headingTwo}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.descriptionTwo}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 items-start justify-start py-2 w-full">
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                  size="txtRobotoBold32Black900"
                >
                  {props?.number}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[267px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.text}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                  size="txtRobotoBold32Black900"
                >
                  {props?.numberOne}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[267px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.textOne}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center justify-center pt-4 w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[89px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.moreOne}
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
                {props?.signUpTwo}
              </div>
            </Button>
          </div>
        </div>
        <Img
          className="flex-1 h-[500px] md:h-auto object-cover w-full"
          src="images/img_heroanimation_5.png"
          alt="heroanimation_One"
        />
      </div>
    </>
  );
};

AIPlatformLayout25.defaultProps = {
  subheadingTwo: "Revolutionize",
  headingTwo: "AI Platform: Transforming Real Estate Search",
  descriptionTwo:
    "Our AI platform revolutionizes the real estate search process by analyzing millions of data points. Find the perfect property with ease.",
  number: "50%",
  text: "AI-powered technology for accurate property recommendations.",
  numberOne: "50%",
  textOne: "Efficiently search and compare properties worldwide.",
  moreOne: " More",
  signUpTwo: "Sign Up",
};

export default AIPlatformLayout25;
