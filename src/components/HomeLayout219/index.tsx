import React from "react";

import { Img, Line, List, Text } from "components";

type HomeLayout219Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "headingtext"
  | "descriptiontext"
  | "headingtext1"
  | "descriptiontext1"
  | "headingtext2"
  | "descriptiontext2"
> &
  Partial<{
    headingtext: string;
    descriptiontext: JSX.Element | string;
    headingtext1: string;
    descriptiontext1: JSX.Element | string;
    headingtext2: string;
    descriptiontext2: JSX.Element | string;
  }>;

const HomeLayout219: React.FC<HomeLayout219Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-full">
          <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
            <div className="flex sm:flex-col flex-row gap-6 items-start justify-start p-2.5 rounded-[20px] w-full">
              <Line className="bg-black-900 sm:h-0.5 h-[235px] w-0.5 sm:w-full" />
              <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
                <Text
                  className="leading-[130.00%] max-w-[514px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtRobotoBold32Black900"
                >
                  {props?.headingtext}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[514px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.descriptiontext}
                </Text>
              </div>
            </div>
            <List
              className="flex flex-col gap-10 items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-start justify-start p-2.5 rounded-[20px] w-full">
                <div className="flex flex-col gap-4 items-start justify-center w-full">
                  <Text
                    className="leading-[130.00%] max-w-[538px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtRobotoBold32Black900"
                  >
                    {props?.headingtext1}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[538px] md:max-w-full text-black-900 text-lg"
                    size="txtRobotoLight18"
                  >
                    {props?.descriptiontext1}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start p-2.5 rounded-[20px] w-full">
                <div className="flex flex-col gap-4 items-start justify-center w-full">
                  <Text
                    className="leading-[130.00%] max-w-[538px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                    size="txtRobotoBold32Black900"
                  >
                    {props?.headingtext2}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[538px] md:max-w-full text-black-900 text-lg"
                    size="txtRobotoLight18"
                  >
                    {props?.descriptiontext2}
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Img
            className="flex-1 h-[500px] md:h-auto max-h-[500px] object-cover sm:w-[] md:w-[]"
            src="images/img_heroanimation_500x558.png"
            alt="heroanimation_One"
          />
        </div>
      </div>
    </>
  );
};

HomeLayout219.defaultProps = {
  headingtext: "Discover Personalized Property Recommendations",
  descriptiontext: (
    <>
      Our AI-powered platform analyzes real estate data to provide you with
      personalized property recommendations based on your preferences and
      requirements. Whether you&#39;re looking for commercial real estate,
      multi-family properties, industrial sites, or rental properties, we&#39;ve
      got you covered.
    </>
  ),
  headingtext1: "Discover Personalized Property Recommendations",
  descriptiontext1: (
    <>
      Our AI-powered platform analyzes real estate data to provide you with
      personalized property recommendations based on your preferences and
      requirements. Whether you&#39;re looking for commercial real estate,
      multi-family properties, industrial sites, or rental properties, we&#39;ve
      got you covered.
    </>
  ),
  headingtext2: "Discover Personalized Property Recommendations",
  descriptiontext2: (
    <>
      Our AI-powered platform analyzes real estate data to provide you with
      personalized property recommendations based on your preferences and
      requirements. Whether you&#39;re looking for commercial real estate,
      multi-family properties, industrial sites, or rental properties, we&#39;ve
      got you covered.
    </>
  ),
};

export default HomeLayout219;
