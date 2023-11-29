import React from "react";

import { Button, Text } from "components";

type HomeContentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headingOne" | "textTwo" | "morebutton"
> &
  Partial<{ headingOne: string; textTwo: string; morebutton: string }>;

const HomeContent: React.FC<HomeContentProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-black-900 text-center text-xl w-full"
            size="txtRobotoMedium20"
          >
            {props?.headingOne}
          </Text>
          <Text
            className="text-black-900 text-center text-lg w-full"
            size="txtRobotoLight18"
          >
            {props?.textTwo}
          </Text>
        </div>
        <Button
          className="!text-white-A700 cursor-pointer font-roboto min-w-[85px] text-base text-center"
          shape="round"
          color="light_blue_500"
          size="sm"
          variant="fill"
        >
          {props?.morebutton}
        </Button>
      </div>
    </>
  );
};

HomeContent.defaultProps = {
  headingOne: "Join Us!",
  textTwo: "Exciting opportunities to be part of our team",
  morebutton: "More",
};

export default HomeContent;
