import React from "react";

import { Button, Img, List, Text } from "components";

type AboutUsTeam8Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingOne"
  | "headingOne"
  | "loremipsumdolor"
  | "username1"
  | "userrole1"
  | "userdescription1"
  | "more"
  | "username2"
  | "userrole2"
  | "userdescription2"
  | "more1"
  | "username3"
  | "userrole3"
  | "userdescription3"
  | "more2"
> &
  Partial<{
    subheadingOne: string;
    headingOne: string;
    loremipsumdolor: string;
    username1: string;
    userrole1: string;
    userdescription1: string;
    more: string;
    username2: string;
    userrole2: string;
    userdescription2: string;
    more1: string;
    username3: string;
    userrole3: string;
    userdescription3: string;
    more2: string;
  }>;

const AboutUsTeam8: React.FC<AboutUsTeam8Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingOne}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
              size="txtRobotoBold32Black900"
            >
              {props?.headingOne}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoLight18"
            >
              {props?.loremipsumdolor}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
          orientation="horizontal"
        >
          <div className="border border-gray-400 border-solid flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_images_326x364.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start p-4 w-full">
              <Text
                className="text-black-900_dd text-xl tracking-[0.25px] w-auto"
                size="txtRobotoMedium20Black900dd"
              >
                {props?.username1}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="text-black-900_99 text-sm tracking-[0.10px] w-auto"
                size="txtRobotoRegular14Black90099"
              >
                {props?.userrole1}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="leading-[150.00%] max-w-[332px] md:max-w-full text-base text-black-900"
                size="txtRobotoLight16"
              >
                {props?.userdescription1}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center p-2 w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto min-w-[85px] text-base text-center"
                shape="round"
                color="light_blue_500"
                size="sm"
                variant="fill"
              >
                {props?.more}
              </Button>
            </div>
          </div>
          <div className="border border-gray-400 border-solid flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_images_326x364.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start p-4 w-full">
              <Text
                className="text-black-900_dd text-xl tracking-[0.25px] w-auto"
                size="txtRobotoMedium20Black900dd"
              >
                {props?.username2}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="text-black-900_99 text-sm tracking-[0.10px] w-auto"
                size="txtRobotoRegular14Black90099"
              >
                {props?.userrole2}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="leading-[150.00%] max-w-[332px] md:max-w-full text-base text-black-900"
                size="txtRobotoLight16"
              >
                {props?.userdescription2}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center p-2 w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto min-w-[85px] text-base text-center"
                shape="round"
                color="light_blue_500"
                size="sm"
                variant="fill"
              >
                {props?.more1}
              </Button>
            </div>
          </div>
          <div className="border border-gray-400 border-solid flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_images_326x364.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start p-4 w-full">
              <Text
                className="text-black-900_dd text-xl tracking-[0.25px] w-auto"
                size="txtRobotoMedium20Black900dd"
              >
                {props?.username3}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="text-black-900_99 text-sm tracking-[0.10px] w-auto"
                size="txtRobotoRegular14Black90099"
              >
                {props?.userrole3}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="leading-[150.00%] max-w-[332px] md:max-w-full text-base text-black-900"
                size="txtRobotoLight16"
              >
                {props?.userdescription3}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center p-2 w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto min-w-[85px] text-base text-center"
                shape="round"
                color="light_blue_500"
                size="sm"
                variant="fill"
              >
                {props?.more2}
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

AboutUsTeam8.defaultProps = {
  subheadingOne: "Revolutionizing",
  headingOne: "Meet Our Team",
  loremipsumdolor: "Get to know the talented individuals driving our platform",
  username1: "Austin Duffy Founder",
  userrole1: "CEO",
  userdescription1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  more: "More",
  username2: "Austin Duffy Founder",
  userrole2: "CEO",
  userdescription2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  more1: "More",
  username3: "Austin Duffy Founder",
  userrole3: "CEO",
  userdescription3:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  more2: "More",
};

export default AboutUsTeam8;
