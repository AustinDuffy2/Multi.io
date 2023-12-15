import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

type HomeFooter3desktopProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "address"
  | "level112sample"
  | "contact"
  | "p18001234567"
  | "email"
  | "userhomelink"
  | "useraboutuslink"
  | "userpropertysearchlink"
  | "userpropertydetaillink"
  | "useraiplatformlink"
  | "usersearchlink"
  | "usercontactuslink"
  | "usersigninlink"
  | "usersignuplink"
  | "usercopyrighttext"
  | "userprivacypolicylink"
  | "usertermsofservicelink"
  | "usercookiessettingslink"
> &
  Partial<{
    address: string;
    level112sample: string;
    contact: string;
    p18001234567: string;
    email: string;
    userhomelink: string;
    useraboutuslink: string;
    userpropertysearchlink: string;
    userpropertydetaillink: string;
    useraiplatformlink: string;
    usersearchlink: string;
    usercontactuslink: string;
    usersigninlink: string;
    usersignuplink: string;
    usercopyrighttext: string;
    userprivacypolicylink: string;
    usertermsofservicelink: string;
    usercookiessettingslink: string;
  }>;

const HomeFooter3desktop: React.FC<HomeFooter3desktopProps> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="border border-black-900 border-solid flex md:flex-col flex-row md:gap-10 gap-[61.47px] items-start justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
          <div className="flex flex-1 flex-col gap-[30.73px] items-start justify-start w-full">
            <Img
              className="h-[25px] w-[60px]"
              src="images/img_logo.svg"
              alt="logo"
            />
            <div className="flex flex-col gap-[23.05px] items-start justify-start w-full">
              <div className="flex flex-col gap-[3.84px] items-start justify-start w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.address}
                </Text>
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoRegular14"
                >
                  {props?.level112sample}
                </Text>
              </div>
              <div className="flex flex-col gap-[3.84px] items-start justify-start w-full">
                <Text
                  className="text-black-900 text-sm w-full"
                  size="txtRobotoSemiBold14"
                >
                  {props?.contact}
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-sm underline w-full"
                    size="txtRobotoRegular14"
                  >
                    {props?.p18001234567}
                  </Text>
                  <Text
                    className="text-black-900 text-sm underline w-full"
                    size="txtRobotoRegular14"
                  >
                    {props?.email}
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[11.52px] items-start justify-start w-auto">
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_iconfacebook.svg"
                  alt="iconfacebook"
                />
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_iconinstagram.svg"
                  alt="iconinstagram"
                />
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_airplane.svg"
                  alt="close"
                />
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_iconlinkedin.svg"
                  alt="iconlinkedin"
                />
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_iconyoutube.svg"
                  alt="iconyoutube"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-1 sm:flex-col flex-row gap-[23.05px] items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-[11.52px] items-start justify-start w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoSemiBold16"
              >
                {props?.userhomelink}
              </Text>
              <Text
                className="common-pointer text-base text-black-900 w-full"
                size="txtRobotoSemiBold16"
                onClick={() => navigate("/aboutus")}
              >
                {props?.useraboutuslink}
              </Text>
              <Text
                className="common-pointer text-base text-black-900 w-full"
                size="txtRobotoSemiBold16"
                onClick={() => navigate("/search")}
              >
                {props?.userpropertysearchlink}
              </Text>
              <Text
                className="common-pointer text-base text-black-900 w-full"
                size="txtRobotoSemiBold16"
                onClick={() => navigate("/propertydetails")}
              >
                {props?.userpropertydetaillink}
              </Text>
              <Text
                className="common-pointer text-base text-black-900 w-full"
                size="txtRobotoSemiBold16"
                onClick={() => navigate("/aiplatform")}
              >
                {props?.useraiplatformlink}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-[11.52px] items-start justify-start w-full">
              <Text
                className="common-pointer text-base text-black-900 w-full"
                size="txtRobotoSemiBold16"
                onClick={() => navigate("/search")}
              >
                {props?.usersearchlink}
              </Text>
              <Text
                className="common-pointer text-base text-black-900 w-full"
                size="txtRobotoSemiBold16"
                onClick={() => navigate("/contact")}
              >
                {props?.usercontactuslink}
              </Text>
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoSemiBold16"
              >
                {props?.usersigninlink}
              </Text>
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoSemiBold16"
              >
                {props?.usersignuplink}
              </Text>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row gap-[15.37px] items-start justify-start w-full">
          <Text
            className="flex-1 text-black-900 text-sm w-auto"
            size="txtRobotoLight14"
          >
            {props?.usercopyrighttext}
          </Text>
          <Text
            className="flex-1 text-black-900 text-sm w-auto"
            size="txtRobotoLight14"
          >
            {props?.userprivacypolicylink}
          </Text>
          <Text
            className="flex-1 text-black-900 text-sm w-auto"
            size="txtRobotoLight14"
          >
            {props?.usertermsofservicelink}
          </Text>
          <Text
            className="flex-1 text-black-900 text-sm w-auto"
            size="txtRobotoLight14"
          >
            {props?.usercookiessettingslink}
          </Text>
        </div>
      </div>
    </>
  );
};

HomeFooter3desktop.defaultProps = {
  address: "Address:",
  level112sample: "Level 1, 12 Sample St, Sydney NSW 2000",
  contact: "Contact:",
  p18001234567: "1800 123 4567",
  email: "info@relume.io",
  userhomelink: "Home",
  useraboutuslink: "About Us",
  userpropertysearchlink: "Property Search",
  userpropertydetaillink: "Property Detail",
  useraiplatformlink: "AI Platform",
  usersearchlink: "Search",
  usercontactuslink: "Contact Us",
  usersigninlink: "Sign In",
  usersignuplink: "Sign Up",
  usercopyrighttext: "© 2023 Relume. All rights reserved.",
  userprivacypolicylink: "Privacy Policy",
  usertermsofservicelink: "Terms of Service",
  usercookiessettingslink: "Cookies Settings",
};

export default HomeFooter3desktop;
