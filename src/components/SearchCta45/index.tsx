import React from "react";

import { Button, Text } from "components";

type SearchCta45Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headingTwo" | "textThree" | "loginlabel" | "signuplabel"
> &
  Partial<{
    headingTwo: string;
    textThree: string;
    loginlabel: string;
    signuplabel: string;
  }>;

const SearchCta45: React.FC<SearchCta45Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
          <Text
            className="leading-[130.00%] max-w-[570px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
            size="txtRobotoBold32Black900"
          >
            {props?.headingTwo}
          </Text>
          <Text
            className="text-black-900 text-lg w-full"
            size="txtRobotoLight18"
          >
            {props?.textThree}
          </Text>
        </div>
        <div className="flex flex-1 flex-row gap-4 items-start justify-end w-full">
          <Button
            className="!text-white-A700 cursor-pointer font-roboto min-w-[88px] text-base text-center"
            shape="round"
            color="light_blue_500"
            size="sm"
            variant="fill"
          >
            {props?.loginlabel}
          </Button>
          <Button
            className="!text-white-A700 cursor-pointer font-roboto min-w-[95px] text-base text-center"
            shape="round"
            color="light_blue_500_72"
            size="sm"
            variant="fill"
          >
            {props?.signuplabel}
          </Button>
        </div>
      </div>
    </>
  );
};

SearchCta45.defaultProps = {
  headingTwo: "Unlock Advanced Search Features Today",
  textThree: "Discover the Perfect Property for You",
  loginlabel: "Login",
  signuplabel: "Sign Up",
};

export default SearchCta45;
