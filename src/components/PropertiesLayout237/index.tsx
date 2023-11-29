import React from "react";

import { Button, Img, List, Text } from "components";

type PropertiesLayout237Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "tagline"
  | "heading"
  | "description"
  | "locationheading"
  | "locationdescription"
  | "propertyheading"
  | "propertydescription"
  | "sizeheading"
  | "sizedescription"
  | "searchbutton"
  | "loginOne"
> &
  Partial<{
    tagline: string;
    heading: string;
    description: JSX.Element | string;
    locationheading: string;
    locationdescription: string;
    propertyheading: string;
    propertydescription: string;
    sizeheading: string;
    sizedescription: JSX.Element | string;
    searchbutton: string;
    loginOne: string;
  }>;

const PropertiesLayout237: React.FC<PropertiesLayout237Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.tagline}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
              size="txtRobotoBold32Black900"
            >
              {props?.heading}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[1140px] md:max-w-full text-base text-black-900 text-center"
              size="txtRobotoLight16"
            >
              {props?.description}
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center justify-start py-[5px] w-full">
          <List
            className="sm:flex-col flex-row gap-12 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="text-black-900 text-center text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.locationheading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[348px] md:max-w-full text-black-900 text-center text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.locationdescription}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="text-black-900 text-center text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.propertyheading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[348px] md:max-w-full text-black-900 text-center text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.propertydescription}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
              <Img
                className="h-12 w-12"
                src="images/img_iconrelume.svg"
                alt="iconrelume"
              />
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text
                  className="text-black-900 text-center text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.sizeheading}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[348px] md:max-w-full text-black-900 text-center text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.sizedescription}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-row gap-6 items-center justify-center pt-4 w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[98px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.searchbutton}
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
                {props?.loginOne}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

PropertiesLayout237.defaultProps = {
  tagline: "Discover",
  heading: "Find Your Perfect Property with Advanced Search Filters",
  description: (
    <>
      Our platform offers a highly advanced search feature that allows you to
      easily find the perfect property. With filters for location, property
      type, size, and price range, you can quickly narrow down your options and
      find exactly what you&#39;re looking for.
    </>
  ),
  locationheading: "Location-Based Search",
  locationdescription:
    "Easily search for properties based on your desired location.",
  propertyheading: "Property Type Filter",
  propertydescription:
    "Filter properties based on their type, such as commercial real estate, multi-family, or industrial sites.",
  sizeheading: "Size and Price Range Filters",
  sizedescription: (
    <>
      Narrow down your search by specifying the size and price range of the
      properties you&#39;re interested in.
    </>
  ),
  searchbutton: "Search",
  loginOne: "Login",
};

export default PropertiesLayout237;
