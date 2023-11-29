import React from "react";

import { Button, Img, Text } from "components";

type AboutUsLayout4Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheading"
  | "heading"
  | "description"
  | "subheadingone"
  | "textone"
  | "subheadingtwo"
  | "texttwo"
  | "learnmore"
  | "login"
> &
  Partial<{
    subheading: string;
    heading: string;
    description: string;
    subheadingone: string;
    textone: string;
    subheadingtwo: string;
    texttwo: string;
    learnmore: string;
    login: string;
  }>;

const AboutUsLayout4: React.FC<AboutUsLayout4Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="text-base text-black-900 text-center w-auto"
                size="txtRobotoSemiBold16"
              >
                {props?.subheading}
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="leading-[130.00%] max-w-[558px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                  size="txtRobotoBold32Black900"
                >
                  {props?.heading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-center text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.description}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-6 items-start justify-center py-2 w-full">
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.subheadingone}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[267px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.textone}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.subheadingtwo}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[267px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.texttwo}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center justify-center pt-4 w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[129px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.learnmore}
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[116px]"
              rightIcon={
                <Img className="h-6 ml-3" src="images/img_map.svg" alt="user" />
              }
              shape="round"
              color="light_blue_500_72"
              size="xs"
              variant="fill"
            >
              <div className="!text-white-A700 font-roboto text-base text-left">
                {props?.login}
              </div>
            </Button>
          </div>
        </div>
        <Img
          className="h-[500px] md:h-auto object-cover w-[558px] sm:w-full"
          src="images/img_heroanimation_1.png"
          alt="heroanimation"
        />
      </div>
    </>
  );
};

AboutUsLayout4.defaultProps = {
  subheading: "Revolutionize",
  heading: "Discover Your Dream Property with Our AI Platform",
  description:
    "Our AI platform utilizes advanced technology to provide users with an effortless way to find the perfect property. With our powerful search capabilities, you can easily explore a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world.",
  subheadingone: "Efficient Search",
  textone:
    "Quickly find the properties that meet your specific criteria and preferences.",
  subheadingtwo: "Smart Recommendations",
  texttwo:
    "Receive personalized property recommendations based on your search history and preferences.",
  learnmore: "Learn More",
  login: "Login",
};

export default AboutUsLayout4;
