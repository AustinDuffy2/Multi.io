import React from "react";

import { Button, Img, List, Text } from "components";

type HomeListframeProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "fivehundred"
  | "dailycompleted"
  | "sixhundred"
  | "regularclients"
  | "price"
  | "ownedfromproperties"
> &
  Partial<{
    fivehundred: string;
    dailycompleted: JSX.Element | string;
    sixhundred: string;
    regularclients: string;
    price: string;
    ownedfromproperties: JSX.Element | string;
  }>;

const HomeListframe: React.FC<HomeListframeProps> = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
          <Button
            className="flex h-[60px] items-center justify-center w-[60px]"
            shape="circle"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <Img className="h-8" src="images/img_frame.svg" alt="frame" />
          </Button>
          <div className="flex flex-col gap-3.5 items-center justify-center w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 text-center text-shadow-ts sm:text-xl w-full"
              size="txtRobotoBold24"
            >
              {props?.fivehundred}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[380px] md:max-w-full text-base text-black-900 text-center"
              size="txtRobotoRegular16"
            >
              {props?.dailycompleted}
            </Text>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
          <Button
            className="flex h-[60px] items-center justify-center w-[60px]"
            shape="circle"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <Img
              className="h-8"
              src="images/img_frame_green_a400.svg"
              alt="frame"
            />
          </Button>
          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 text-center text-shadow-ts sm:text-xl w-full"
              size="txtRobotoBold24"
            >
              {props?.sixhundred}
            </Text>
            <Text
              className="text-base text-black-900 text-center w-full"
              size="txtRobotoRegular16"
            >
              {props?.regularclients}
            </Text>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5 items-center justify-start w-full">
          <Button
            className="flex h-[60px] items-center justify-center w-[60px]"
            shape="circle"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <Img
              className="h-8"
              src="images/img_frame_green_a400.svg"
              alt="frame"
            />
          </Button>
          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 text-center text-shadow-ts sm:text-xl w-full"
              size="txtRobotoBold24"
            >
              {props?.price}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[380px] md:max-w-full text-base text-black-900 text-center"
              size="txtRobotoRegular16"
            >
              {props?.ownedfromproperties}
            </Text>
          </div>
        </div>
      </List>
    </>
  );
};

HomeListframe.defaultProps = {
  fivehundred: "500",
  dailycompleted: (
    <>
      Daily completed <br />
      transactions
    </>
  ),
  sixhundred: "600+",
  regularclients: "Reagular Clients",
  price: "$15.4M",
  ownedfromproperties: (
    <>
      Owned from
      <br />
      Properties transactions
    </>
  ),
};

export default HomeListframe;
