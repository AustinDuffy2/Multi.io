import React from "react";

import { Button, Img, List, Text } from "components";

type ContactTeam1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingOne"
  | "headingOne"
  | "languageOne"
  | "name"
  | "jobtitle"
  | "text"
  | "name1"
  | "jobtitle1"
  | "loremipsumdolorOne"
  | "name2"
  | "jobtitle2"
  | "text1"
  | "name3"
  | "jobtitle3"
  | "text2"
  | "headingTwo"
  | "languageTwo"
  | "more"
> &
  Partial<{
    subheadingOne: string;
    headingOne: string;
    languageOne: string;
    name: string;
    jobtitle: string;
    text: string;
    name1: string;
    jobtitle1: string;
    loremipsumdolorOne: string;
    name2: string;
    jobtitle2: string;
    text1: string;
    name3: string;
    jobtitle3: string;
    text2: string;
    headingTwo: string;
    languageTwo: string;
    more: string;
  }>;

const ContactTeam1: React.FC<ContactTeam1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-black-900 text-center text-xl w-auto"
            size="txtRobotoBold20"
          >
            {props?.subheadingOne}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
              size="txtRobotoBold32Black900"
            >
              {props?.headingOne}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoLight18"
            >
              {props?.languageOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start sm:ml-[0] w-full">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_placeholderimage.png"
                      alt="placeholderimag"
                    />
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          {props?.name}
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xl w-full"
                          size="txtRobotoBold20"
                        >
                          {props?.jobtitle}
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                        size="txtRobotoLight18"
                      >
                        {props?.text}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_airplane.svg"
                        alt="close"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_icondribble.svg"
                        alt="icondribble"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start sm:ml-[0] w-full">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_placeholderimage.png"
                      alt="placeholderimag"
                    />
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          {props?.name1}
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xl w-full"
                          size="txtRobotoBold20"
                        >
                          {props?.jobtitle1}
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                        size="txtRobotoLight18"
                      >
                        {props?.loremipsumdolorOne}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_airplane.svg"
                        alt="close"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_icondribble.svg"
                        alt="icondribble"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start sm:ml-[0] w-full">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_placeholderimage.png"
                      alt="placeholderimag"
                    />
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          {props?.name2}
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xl w-full"
                          size="txtRobotoBold20"
                        >
                          {props?.jobtitle2}
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                        size="txtRobotoLight18"
                      >
                        {props?.text1}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_airplane.svg"
                        alt="close"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_icondribble.svg"
                        alt="icondribble"
                      />
                    </div>
                  </div>
                </List>
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Img
                    className="h-20 md:h-auto object-cover w-20"
                    src="images/img_placeholderimage.png"
                    alt="placeholderimag"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.name3}
                      </Text>
                      <Text
                        className="text-black-900 text-center text-lg w-full"
                        size="txtRobotoRegular18Black900"
                      >
                        {props?.jobtitle3}
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtRobotoLight18"
                    >
                      {props?.text2}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_airplane.svg"
                      alt="close"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icondribble.svg"
                      alt="icondribble"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtRobotoBold32Black900"
              >
                {props?.headingTwo}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoLight18"
              >
                {props?.languageTwo}
              </Text>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[85px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="sm"
              variant="fill"
            >
              {props?.more}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ContactTeam1.defaultProps = {
  subheadingOne: "Tagline",
  headingOne: "Our team",
  languageOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  name: "Full name",
  jobtitle: "Job title",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name1: "Full name",
  jobtitle1: "Job title",
  loremipsumdolorOne:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name2: "Full name",
  jobtitle2: "Job title",
  text1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name3: "Full name",
  jobtitle3: "Job title",
  text2:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  headingTwo: "We’re hiring!",
  languageTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  more: "More",
};

export default ContactTeam1;
