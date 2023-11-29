import React from "react";

import { Button, Text } from "components";

type PropertiesCta13Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headingtext" | "descriptiontext" | "signupbuttonone" | "signupbuttontwo"
> &
  Partial<{
    headingtext: string;
    descriptiontext: string;
    signupbuttonone: string;
    signupbuttontwo: string;
  }>;

const PropertiesCta13: React.FC<PropertiesCta13Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
          <Text
            className="flex-1 md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-auto"
            size="txtRobotoBold32Black900"
          >
            {props?.headingtext}
          </Text>
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Text
              className="leading-[150.00%] max-w-[530px] md:max-w-full text-base text-black-900"
              size="txtRobotoLight16"
            >
              {props?.descriptiontext}
            </Text>
            <div className="flex flex-row gap-4 items-start justify-start pt-4 w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto min-w-[103px] text-base text-center"
                shape="round"
                color="light_blue_500"
                size="sm"
                variant="fill"
              >
                {props?.signupbuttonone}
              </Button>
              <Button
                className="!text-white-A700 cursor-pointer font-roboto min-w-[95px] text-base text-center"
                shape="round"
                color="light_blue_500_72"
                size="sm"
                variant="fill"
              >
                {props?.signupbuttontwo}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertiesCta13.defaultProps = {
  headingtext: "Find Your Dream Property Today",
  descriptiontext:
    "Discover a personalized property search experience and gain access to exclusive listings.",
  signupbuttonone: "Sign Up",
  signupbuttontwo: "Sign Up",
};

export default PropertiesCta13;
