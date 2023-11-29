import React from "react";

import { Img, Text } from "components";

type PropertyDetailsContent2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headingTwo" | "headingtwo" | "descriptionone" | "descriptiontwo"
> &
  Partial<{
    headingTwo: string;
    headingtwo: string;
    descriptionone: string;
    descriptiontwo: string;
  }>;

const PropertyDetailsContent2: React.FC<PropertyDetailsContent2Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-full">
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
              size="txtRobotoBold32Black900"
            >
              {props?.headingTwo}
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.headingtwo}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.descriptionone}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.descriptiontwo}
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="flex-1 h-[500px] md:h-auto max-h-[500px] object-cover sm:w-[] md:w-[]"
            src="images/img_heroanimation_4.png"
            alt="heroanimation_One"
          />
        </div>
      </div>
    </>
  );
};

PropertyDetailsContent2.defaultProps = {
  headingTwo: "Property Overview",
  headingtwo:
    "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
  descriptionone:
    "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
  descriptiontwo:
    "Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.",
};

export default PropertyDetailsContent2;
