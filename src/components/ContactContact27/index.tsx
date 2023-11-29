import React from "react";

import { Button, Img, List, Text } from "components";

type ContactContact27Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheading"
  | "heading"
  | "language"
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
    subheading: string;
    heading: string;
    language: string;
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

const ContactContact27: React.FC<ContactContact27Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-black-900 text-center text-xl w-auto"
            size="txtRobotoBold20"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
              size="txtRobotoBold32Black900"
            >
              {props?.heading}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoLight18"
            >
              {props?.language}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
          orientation="horizontal"
        >
          <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_heroanimation_3.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start p-4 w-full">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtRobotoRegular20"
              >
                {props?.p286162ndaveoaklone}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                <div className="flex flex-row gap-10 items-center justify-center w-full">
                  <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_crop.svg"
                      alt="icon"
                    />
                    <Text
                      className="flex-1 text-base text-gray-400 w-auto"
                      size="txtRobotoLight16Gray400"
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
                      size="txtRobotoLight16Gray400"
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
                      size="txtRobotoLight16Gray400"
                    >
                      {props?.sqftcounter}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_user_2.svg"
                      alt="user"
                    />
                    <Text
                      className="text-base text-gray-400 w-auto"
                      size="txtRobotoLight16Gray400"
                    >
                      {props?.p1bath}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-[31px] items-center justify-center w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[126px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-3"
                      src="images/img_map.svg"
                      alt="user"
                    />
                  }
                  shape="round"
                  color="light_blue_500"
                  size="sm"
                  variant="fill"
                >
                  <div className="!text-white-A700 font-roboto text-base text-left">
                    {props?.search}
                  </div>
                </Button>
                <Text
                  className="flex-1 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtRobotoBold32Black900"
                >
                  {props?.price}
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_heroanimation_3.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start p-4 w-full">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtRobotoRegular20"
              >
                {props?.p286162ndaveoaklone1}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                <div className="flex flex-row gap-10 items-center justify-center w-full">
                  <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_crop.svg"
                      alt="icon"
                    />
                    <Text
                      className="flex-1 text-base text-gray-400 w-auto"
                      size="txtRobotoLight16Gray400"
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
                      size="txtRobotoLight16Gray400"
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
                      size="txtRobotoLight16Gray400"
                    >
                      {props?.sqftcounter1}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_user_3.svg"
                      alt="user"
                    />
                    <Text
                      className="text-base text-gray-400 w-auto"
                      size="txtRobotoLight16Gray400"
                    >
                      {props?.p1bath1}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-[31px] items-center justify-center w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[126px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-3"
                      src="images/img_map.svg"
                      alt="user"
                    />
                  }
                  shape="round"
                  color="light_blue_500"
                  size="sm"
                  variant="fill"
                >
                  <div className="!text-white-A700 font-roboto text-base text-left">
                    {props?.search1}
                  </div>
                </Button>
                <Text
                  className="flex-1 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtRobotoBold32Black900"
                >
                  {props?.price1}
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_heroanimation_3.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start p-4 w-full">
              <Text
                className="text-black-900 text-xl w-auto"
                size="txtRobotoRegular20"
              >
                {props?.p286162ndaveoaklone2}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                <div className="flex flex-row gap-10 items-center justify-center w-full">
                  <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_crop.svg"
                      alt="icon"
                    />
                    <Text
                      className="flex-1 text-base text-gray-400 w-auto"
                      size="txtRobotoLight16Gray400"
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
                      size="txtRobotoLight16Gray400"
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
                      size="txtRobotoLight16Gray400"
                    >
                      {props?.sqftcounter2}
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row gap-3 items-center justify-end w-full">
                    <Img
                      className="h-5 w-5"
                      src="images/img_user_4.svg"
                      alt="user"
                    />
                    <Text
                      className="text-base text-gray-400 w-auto"
                      size="txtRobotoLight16Gray400"
                    >
                      {props?.p1bath2}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start p-2 w-full">
              <div className="flex flex-row gap-[31px] items-center justify-center w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[126px]"
                  leftIcon={
                    <Img
                      className="h-6 mr-3"
                      src="images/img_map.svg"
                      alt="user"
                    />
                  }
                  shape="round"
                  color="light_blue_500"
                  size="sm"
                  variant="fill"
                >
                  <div className="!text-white-A700 font-roboto text-base text-left">
                    {props?.search2}
                  </div>
                </Button>
                <Text
                  className="flex-1 md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-auto"
                  size="txtRobotoBold32Black900"
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

ContactContact27.defaultProps = {
  subheading: "Tagline",
  heading: "Locations",
  language: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
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

export default ContactContact27;
