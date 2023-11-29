import React from "react";

import { Button, Img, List, Text } from "components";

type HomeLayoutcustom1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "featuredpropertOne"
  | "active"
  | "residentProperty"
  | "commercialProperty"
  | "industrialProperty"
  | "agricultureProperty"
  | "p286162ndaveoaklone"
  | "p3bedroom"
  | "bathcounter"
  | "sqftcounter"
  | "p1bath"
  | "search"
  | "price"
  | "p286162ndaveoaklone1"
  | "p3bedroom1"
  | "bathcounter1"
  | "sqftcounter1"
  | "p1bath1"
  | "search1"
  | "price1"
  | "p286162ndaveoaklone2"
  | "p3bedroom2"
  | "bathcounter2"
  | "sqftcounter2"
  | "p1bath2"
  | "search2"
  | "price2"
> &
  Partial<{
    featuredpropertOne: string;
    active: string;
    residentProperty: string;
    commercialProperty: string;
    industrialProperty: string;
    agricultureProperty: string;
    p286162ndaveoaklone: string;
    p3bedroom: string;
    bathcounter: string;
    sqftcounter: string;
    p1bath: string;
    search: string;
    price: string;
    p286162ndaveoaklone1: string;
    p3bedroom1: string;
    bathcounter1: string;
    sqftcounter1: string;
    p1bath1: string;
    search1: string;
    price1: string;
    p286162ndaveoaklone2: string;
    p3bedroom2: string;
    bathcounter2: string;
    sqftcounter2: string;
    p1bath2: string;
    search2: string;
    price2: string;
  }>;

const HomeLayoutcustom1: React.FC<HomeLayoutcustom1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[21px] items-center justify-between w-full">
          <div className="flex flex-1 flex-col items-start justify-start px-2.5 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
              size="txtRobotoBold32"
            >
              {props?.featuredpropertOne}
            </Text>
          </div>
          <div className="flex flex-row items-start justify-between p-2.5 w-48">
            <Text
              className="text-gray-400 text-lg w-auto"
              size="txtRobotoRegular18"
            >
              {props?.active}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowright.svg"
              alt="arrowleft"
            />
          </div>
        </div>
        <div className="flex sm:flex-col flex-row gap-5 items-start justify-between w-full">
          <Button className="bg-transparent cursor-pointer font-roboto min-w-[143px] text-center text-gray-400 text-lg">
            {props?.residentProperty}
          </Button>
          <Button className="bg-transparent cursor-pointer font-roboto min-w-[170px] text-center text-gray-400 text-lg">
            {props?.commercialProperty}
          </Button>
          <Button className="bg-transparent cursor-pointer font-roboto min-w-[147px] text-center text-gray-400 text-lg">
            {props?.industrialProperty}
          </Button>
          <Button className="bg-transparent cursor-pointer font-roboto min-w-[179px] text-center text-gray-400 text-xl">
            {props?.agricultureProperty}
          </Button>
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 border border-gray-400 border-solid flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_images.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start px-2 py-2.5 w-full">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtRobotoLight20"
              >
                {props?.p286162ndaveoaklone}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-2.5 w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-row gap-10 items-center justify-center w-full">
                  <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_crop.svg"
                      alt="icon"
                    />
                    <Text
                      className="flex-1 text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.p3bedroom}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_offer.svg"
                      alt="television"
                    />
                    <Text
                      className="text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.bathcounter}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-10 items-center justify-center px-[5px] w-full">
                  <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_minimize.svg"
                      alt="microphone"
                    />
                    <Text
                      className="flex-1 text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.sqftcounter}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.p1bath}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start px-2 py-2.5 w-full">
              <div className="flex flex-row gap-[31px] items-center justify-center w-full">
                <Button
                  className="!text-white-A700 cursor-pointer font-roboto min-w-[98px] text-base text-center"
                  shape="round"
                  color="light_blue_500"
                  size="sm"
                  variant="fill"
                >
                  {props?.search}
                </Button>
                <Text
                  className="flex-1 text-black-900 text-center text-xl w-auto"
                  size="txtRobotoRegular20"
                >
                  {props?.price}
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-400 border-solid flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_images.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start px-2 py-2.5 w-full">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtRobotoLight20"
              >
                {props?.p286162ndaveoaklone1}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-2.5 w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-row gap-10 items-center justify-center w-full">
                  <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_crop.svg"
                      alt="icon"
                    />
                    <Text
                      className="flex-1 text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.p3bedroom1}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_offer.svg"
                      alt="television"
                    />
                    <Text
                      className="text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.bathcounter1}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-10 items-center justify-center px-[5px] w-full">
                  <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_minimize.svg"
                      alt="microphone"
                    />
                    <Text
                      className="flex-1 text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.sqftcounter1}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_user_20x20.svg"
                      alt="user"
                    />
                    <Text
                      className="text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.p1bath1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start px-2 py-2.5 w-full">
              <div className="flex flex-row gap-[31px] items-center justify-center w-full">
                <Button
                  className="!text-white-A700 cursor-pointer font-roboto min-w-[98px] text-base text-center"
                  shape="round"
                  color="light_blue_500"
                  size="sm"
                  variant="fill"
                >
                  {props?.search1}
                </Button>
                <Text
                  className="flex-1 text-black-900 text-center text-xl w-auto"
                  size="txtRobotoRegular20"
                >
                  {props?.price1}
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-400 border-solid flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_images.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start px-2 py-2.5 w-full">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtRobotoLight20"
              >
                {props?.p286162ndaveoaklone2}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start px-2 py-2.5 w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="flex flex-row gap-10 items-center justify-center w-full">
                  <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_crop.svg"
                      alt="icon"
                    />
                    <Text
                      className="flex-1 text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.p3bedroom2}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_offer.svg"
                      alt="television"
                    />
                    <Text
                      className="text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.bathcounter2}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row gap-10 items-center justify-center px-[5px] w-full">
                  <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_minimize.svg"
                      alt="microphone"
                    />
                    <Text
                      className="flex-1 text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.sqftcounter2}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_user_1.svg"
                      alt="user"
                    />
                    <Text
                      className="text-base text-gray-400 w-auto"
                      size="txtRobotoRegular16Gray400"
                    >
                      {props?.p1bath2}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start px-2 py-2.5 w-full">
              <div className="flex flex-row gap-[31px] items-center justify-center w-full">
                <Button
                  className="!text-white-A700 cursor-pointer font-roboto min-w-[98px] text-base text-center"
                  shape="round"
                  color="light_blue_500"
                  size="sm"
                  variant="fill"
                >
                  {props?.search2}
                </Button>
                <Text
                  className="flex-1 text-black-900 text-center text-xl w-auto"
                  size="txtRobotoRegular20"
                >
                  {props?.price2}
                </Text>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

HomeLayoutcustom1.defaultProps = {
  featuredpropertOne: "Featured Properties",
  active: "Explore All",
  residentProperty: "Resident Property",
  commercialProperty: "Commercial Property",
  industrialProperty: "Industrial Property",
  agricultureProperty: "Agriculture Property",
  p286162ndaveoaklone: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom: "3 Bed Room3",
  bathcounter: "1 Bath",
  sqftcounter: "1,032 sqft",
  p1bath: "Family",
  search: "Search",
  price: "$649,900",
  p286162ndaveoaklone1: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom1: "3 Bed Room3",
  bathcounter1: "1 Bath",
  sqftcounter1: "1,032 sqft",
  p1bath1: "Family",
  search1: "Search",
  price1: "$649,900",
  p286162ndaveoaklone2: "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom2: "3 Bed Room3",
  bathcounter2: "1 Bath",
  sqftcounter2: "1,032 sqft",
  p1bath2: "Family",
  search2: "Search",
  price2: "$649,900",
};

export default HomeLayoutcustom1;
