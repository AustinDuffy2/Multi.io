import React from "react";

import { Img, List, Text } from "components";

type AboutUsContact15Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "tagline"
  | "contactus"
  | "contacttext"
  | "heading"
  | "emailaddress"
  | "heading1"
  | "phonenumber"
  | "heading2"
  | "officeaddress"
> &
  Partial<{
    tagline: string;
    contactus: string;
    contacttext: string;
    heading: string;
    emailaddress: string;
    heading1: string;
    phonenumber: string;
    heading2: string;
    officeaddress: string;
  }>;

const AboutUsContact15: React.FC<AboutUsContact15Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-full">
          <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
            <Text
              className="text-black-900 text-center text-xl w-auto"
              size="txtRobotoBold20"
            >
              {props?.tagline}
            </Text>
            <div className="flex flex-col gap-6 items-center justify-center w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtRobotoBold32Black900"
              >
                {props?.contactus}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-center text-lg"
                size="txtRobotoLight18"
              >
                {props?.contacttext}
              </Text>
            </div>
            <List
              className="flex flex-col gap-6 items-center py-2 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconenvelope.svg"
                  alt="iconenvelope"
                />
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.heading}
                  </Text>
                  <Text
                    className="text-base text-black-900 underline w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.emailaddress}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconphone.svg"
                  alt="iconphone"
                />
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.heading1}
                  </Text>
                  <Text
                    className="text-base text-black-900 underline w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.phonenumber}
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconmap.svg"
                  alt="iconmap"
                />
                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.heading2}
                  </Text>
                  <Text
                    className="text-base text-black-900 w-full"
                    size="txtRobotoRegular16"
                  >
                    {props?.officeaddress}
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <Img
            className="sm:flex flex-1 sm:flex-col h-[500px] sm:h-[] md:h-auto max-h-[500px] sm:max-h-[] object-cover rounded-[20px] sm:w-[] md:w-[]"
            src="images/img_heroanimation_2.png"
            alt="heroanimation_One"
          />
        </div>
      </div>
    </>
  );
};

AboutUsContact15.defaultProps = {
  tagline: "Tagline",
  contactus: "Contact us",
  contacttext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  heading: "Email",
  emailaddress: "hello@relume.io",
  heading1: "Phone",
  phonenumber: "+1 (555) 000-0000",
  heading2: "Office",
  officeaddress: "123 Sample St, Sydney NSW 2000 AU",
};

export default AboutUsContact15;
