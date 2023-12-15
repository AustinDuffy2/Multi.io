import React from "react";

import { Button, Img, List, Text } from "components";

type PropertyDetailsPortfolio8Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheading"
  | "headingfour"
  | "language"
  | "projectnameone"
  | "projecttextone"
  | "tagoneone"
  | "tagtwoone"
  | "tagthreeone"
  | "more"
  | "projectnametwo"
  | "projecttexttwo"
  | "tagonetwo"
  | "tagtwotwo"
  | "tagthreetwo"
  | "more1"
  | "projectnamethree"
  | "projecttextthree"
  | "tagonethree"
  | "tagtwothree"
  | "tagthreethree"
  | "more2"
> &
  Partial<{
    subheading: string;
    headingfour: string;
    language: string;
    projectnameone: string;
    projecttextone: string;
    tagoneone: string;
    tagtwoone: string;
    tagthreeone: string;
    more: string;
    projectnametwo: string;
    projecttexttwo: string;
    tagonetwo: string;
    tagtwotwo: string;
    tagthreetwo: string;
    more1: string;
    projectnamethree: string;
    projecttextthree: string;
    tagonethree: string;
    tagtwothree: string;
    tagthreethree: string;
    more2: string;
  }>;

const PropertyDetailsPortfolio8: React.FC<PropertyDetailsPortfolio8Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-full"
            size="txtRobotoSemiBold16"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
              size="txtRobotoBold32Black900"
            >
              {props?.headingfour}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoLight18"
            >
              {props?.language}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
          orientation="horizontal"
        >
          <div className="flex flex-1 flex-col gap-[30px] items-center justify-start rounded-[20px] w-full">
            <Img
              className="md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_heroanimation_1.png"
              alt="heroanimation"
            />
            <div className="flex flex-col gap-5 h-[264px] md:h-auto items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 h-[90px] md:h-auto items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoBold24"
                >
                  {props?.projectnameone}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[316px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.projecttextone}
                </Text>
              </div>
              <div className="flex flex-row gap-2 h-[29px] md:h-auto items-start justify-start pt-4 w-full">
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] pt-1.5 text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagoneone}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] pt-1.5 text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagtwoone}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-8 pt-1.5 text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagthreeone}
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[113px]"
                rightIcon={
                  <Img
                    className="h-6 ml-3"
                    src="images/img_map.svg"
                    alt="user"
                  />
                }
                shape="round"
                color="light_blue_500"
                size="sm"
                variant="fill"
              >
                <div className="!text-white-A700 font-roboto text-base text-left">
                  {props?.more}
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[30px] h-[794px] md:h-auto items-center justify-start rounded-[20px] w-full">
            <Img
              className="md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_heroanimation_1.png"
              alt="heroanimation"
            />
            <div className="flex flex-col gap-5 h-[264px] md:h-auto items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 h-[90px] md:h-auto items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoBold24"
                >
                  {props?.projectnametwo}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[316px] md:max-w-full text-base text-black-900"
                  size="txtRobotoLight16"
                >
                  {props?.projecttexttwo}
                </Text>
              </div>
              <div className="flex flex-row gap-2 h-[29px] md:h-auto items-start justify-start pt-4 w-full">
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] pt-1.5 text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagonetwo}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] pt-1.5 text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagtwotwo}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-8 pt-1.5 text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagthreetwo}
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[113px]"
                rightIcon={
                  <Img
                    className="h-6 ml-3"
                    src="images/img_map.svg"
                    alt="user"
                  />
                }
                shape="round"
                color="light_blue_500"
                size="sm"
                variant="fill"
              >
                <div className="!text-white-A700 font-roboto text-base text-left">
                  {props?.more1}
                </div>
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[30px] items-center justify-start rounded-[20px] w-full">
            <Img
              className="md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_heroanimation_1.png"
              alt="heroanimation"
            />
            <div className="flex flex-col gap-5 h-[264px] md:h-auto items-start justify-start p-6 sm:px-5 w-full">
              <div className="flex flex-col gap-2 h-[90px] md:h-auto items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoBold24"
                >
                  {props?.projectnamethree}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[316px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.projecttextthree}
                </Text>
              </div>
              <div className="flex flex-row gap-2 h-[29px] md:h-auto items-start justify-start pt-4 w-full">
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] pt-1.5 text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagonethree}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-[35px] pt-1.5 text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagtwothree}
                </Text>
                <Text
                  className="bg-gray-100 flex-1 justify-center pl-2 sm:pr-5 pr-8 pt-1.5 text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.tagthreethree}
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[113px]"
                rightIcon={
                  <Img
                    className="h-6 ml-3"
                    src="images/img_map.svg"
                    alt="user"
                  />
                }
                shape="round"
                color="light_blue_500"
                size="sm"
                variant="fill"
              >
                <div className="!text-white-A700 font-roboto text-base text-left">
                  {props?.more2}
                </div>
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

PropertyDetailsPortfolio8.defaultProps = {
  subheading: "Portfolio",
  headingfour: "Short heading goes here",
  language: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  projectnameone: "Project name here",
  projecttextone:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  tagoneone: "Tag one",
  tagtwoone: "Tag two",
  tagthreeone: "Tag three",
  more: "More",
  projectnametwo: "Project name here",
  projecttexttwo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  tagonetwo: "Tag one",
  tagtwotwo: "Tag two",
  tagthreetwo: "Tag three",
  more1: "More",
  projectnamethree: "Project name here",
  projecttextthree:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  tagonethree: "Tag one",
  tagtwothree: "Tag two",
  tagthreethree: "Tag three",
  more2: "More",
};

export default PropertyDetailsPortfolio8;
