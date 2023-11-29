import React from "react";

import { Button, Text } from "components";

type PropertyDetailsColumnheadingOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "headingOne"
  | "textOne"
  | "waterfrontlabel"
  | "luxurylabel"
  | "exclusivelabel"
  | "text"
  | "clientname"
  | "text1"
  | "date"
  | "text2"
  | "role"
  | "text3"
  | "websiteurl"
> &
  Partial<{
    headingOne: string;
    textOne: string;
    waterfrontlabel: string;
    luxurylabel: string;
    exclusivelabel: string;
    text: string;
    clientname: string;
    text1: string;
    date: string;
    text2: string;
    role: string;
    text3: string;
    websiteurl: string;
  }>;

const PropertyDetailsColumnheadingOne: React.FC<
  PropertyDetailsColumnheadingOneProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                size="txtRobotoBold32Black900"
              >
                {props?.headingOne}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-lg"
                size="txtRobotoLight18"
              >
                {props?.textOne}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-between w-full">
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[84px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="xs"
                variant="fill"
              >
                {props?.waterfrontlabel}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[59px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="xs"
                variant="fill"
              >
                {props?.luxurylabel}
              </Button>
              <Button
                className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[75px] text-center text-sm"
                shape="square"
                color="gray_100"
                size="xs"
                variant="fill"
              >
                {props?.exclusivelabel}
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-start justify-start w-full">
            <div className="sm:gap-5 gap-8 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.text}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.clientname}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.text1}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.date}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.text2}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.role}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.text3}
                </Text>
                <Text
                  className="text-base text-black-900 underline w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.websiteurl}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsColumnheadingOne.defaultProps = {
  headingOne: "Luxury Condo Project",
  textOne:
    "Experience modern living at its finest in this luxurious waterfront condominium.",
  waterfrontlabel: "Waterfront",
  luxurylabel: "Luxury",
  exclusivelabel: "Exclusive",
  text: "Client",
  clientname: "John Doe",
  text1: "Date",
  date: "April 2023",
  text2: "Role",
  role: "Architect",
  text3: "Website",
  websiteurl: "www.luxurycondos.com",
};

export default PropertyDetailsColumnheadingOne;
