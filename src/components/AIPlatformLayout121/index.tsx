import React from "react";

import { Button, Img, Line, List, Text } from "components";

type AIPlatformLayout121Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingtext"
  | "headingtext"
  | "searchbuttontext"
  | "loginbuttontext"
  | "inputcriteriaheadingtext"
  | "inputcriteriatext"
  | "receivesuggestionsheadingtext"
  | "receivesuggestionstext"
  | "exploreoptionsheadingtext"
  | "exploreoptionstext"
  | "makeinformeddecisionsheadingtext"
  | "makeinformeddecisionstext"
> &
  Partial<{
    subheadingtext: string;
    headingtext: string;
    searchbuttontext: string;
    loginbuttontext: string;
    inputcriteriaheadingtext: string;
    inputcriteriatext: JSX.Element | string;
    receivesuggestionsheadingtext: string;
    receivesuggestionstext: string;
    exploreoptionsheadingtext: string;
    exploreoptionstext: string;
    makeinformeddecisionsheadingtext: string;
    makeinformeddecisionstext: string;
  }>;

const AIPlatformLayout121: React.FC<AIPlatformLayout121Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-start justify-start w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-black-900 text-lg w-auto"
              size="txtRobotoLight18"
            >
              {props?.subheadingtext}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoLight18"
            >
              {props?.headingtext}
            </Text>
          </div>
          <div className="flex flex-row gap-6 items-center justify-start pt-4 w-[295px]">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[98px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.searchbuttontext}
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
                {props?.loginbuttontext}
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <List
            className="flex flex-col gap-4 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <Line className="bg-black-900 h-[100px] w-0.5" />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  {props?.inputcriteriaheadingtext}
                </Text>
                <Text
                  className="text-black-900 text-lg w-full"
                  size="txtRobotoLight18"
                >
                  {props?.inputcriteriatext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <Line className="bg-black-900 h-[100px] w-0.5" />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  {props?.receivesuggestionsheadingtext}
                </Text>
                <Text
                  className="text-black-900 text-lg w-full"
                  size="txtRobotoLight18"
                >
                  {props?.receivesuggestionstext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <Line className="bg-black-900 h-[100px] w-0.5" />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  {props?.exploreoptionsheadingtext}
                </Text>
                <Text
                  className="text-black-900 text-lg w-full"
                  size="txtRobotoLight18"
                >
                  {props?.exploreoptionstext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
              <div className="flex flex-col items-center justify-start w-12">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  {props?.makeinformeddecisionsheadingtext}
                </Text>
                <Text
                  className="text-black-900 text-lg w-full"
                  size="txtRobotoLight18"
                >
                  {props?.makeinformeddecisionstext}
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

AIPlatformLayout121.defaultProps = {
  subheadingtext: "Revolutionize",
  headingtext: "Streamline Your Property Search with AI",
  searchbuttontext: "Search",
  loginbuttontext: "Login",
  inputcriteriaheadingtext: "Input Criteria",
  inputcriteriatext: (
    <>
      Tell us what you&#39;re looking for and let our AI platform do the rest.
    </>
  ),
  receivesuggestionsheadingtext: "Receive Suggestions",
  receivesuggestionstext:
    "Get personalized property suggestions based on your criteria and preferences.",
  exploreoptionsheadingtext: "Explore Options",
  exploreoptionstext:
    "Browse through a wide range of properties that match your requirements.",
  makeinformeddecisionsheadingtext: "Make Informed Decisions",
  makeinformeddecisionstext:
    "Access detailed property information and make confident choices for your next investment.",
};

export default AIPlatformLayout121;
