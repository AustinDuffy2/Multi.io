import React from "react";

import { Button, Text } from "components";

type PropertyDetailsCta7Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headingThree" | "textTwo" | "signuptext" | "logintext"
> &
  Partial<{
    headingThree: string;
    textTwo: string;
    signuptext: string;
    logintext: string;
  }>;

const PropertyDetailsCta7: React.FC<PropertyDetailsCta7Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
            size="txtRobotoBold32Black900"
          >
            {props?.headingThree}
          </Text>
          <Text
            className="text-black-900 text-lg w-full"
            size="txtRobotoLight18"
          >
            {props?.textTwo}
          </Text>
        </div>
        <div className="flex flex-1 flex-row gap-4 items-start justify-end w-full">
          <Button
            className="!text-white-A700 cursor-pointer font-roboto min-w-[103px] text-base text-center"
            shape="round"
            color="light_blue_500"
            size="sm"
            variant="fill"
          >
            {props?.signuptext}
          </Button>
          <Button
            className="!text-white-A700 cursor-pointer font-roboto min-w-[80px] text-base text-center"
            shape="round"
            color="light_blue_500_72"
            size="sm"
            variant="fill"
          >
            {props?.logintext}
          </Button>
        </div>
      </div>
    </>
  );
};

PropertyDetailsCta7.defaultProps = {
  headingThree: "Unlock the Power of AI",
  textTwo: "Discover the Future of Real Estate with Our AI Platform",
  signuptext: "Sign Up",
  logintext: "Login",
};

export default PropertyDetailsCta7;
