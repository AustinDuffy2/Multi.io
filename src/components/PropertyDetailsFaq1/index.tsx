import React from "react";

import { Button, Text } from "components";

type PropertyDetailsFaq1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "headingtext"
  | "descriptiontext"
  | "questiontext"
  | "answertext"
  | "morebuttontext"
> &
  Partial<{
    headingtext: string;
    descriptiontext: string;
    questiontext: string;
    answertext: string;
    morebuttontext: string;
  }>;

const PropertyDetailsFaq1: React.FC<PropertyDetailsFaq1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
              size="txtRobotoBold32Black900"
            >
              {props?.headingtext}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoLight18"
            >
              {props?.descriptiontext}
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtRobotoBold32Black900"
              >
                {props?.questiontext}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoLight18"
              >
                {props?.answertext}
              </Text>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[85px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.morebuttontext}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsFaq1.defaultProps = {
  headingtext: "FAQs",
  descriptiontext:
    "Find answers to commonly asked questions about the property, including financing options, zoning regulations, and maintenance responsibilities.",
  questiontext: "Still have questions?",
  answertext: "Contact us for more information.",
  morebuttontext: "More",
};

export default PropertyDetailsFaq1;
