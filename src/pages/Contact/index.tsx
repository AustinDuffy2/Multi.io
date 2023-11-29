import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import AboutUsContact15 from "components/AboutUsContact15";
import ContactContact27 from "components/ContactContact27";
import ContactContact4 from "components/ContactContact4";
import ContactTeam1 from "components/ContactTeam1";
import Header from "components/Header";
import HomeFooter3desktop from "components/HomeFooter3desktop";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-center justify-start mx-auto md:px-10 sm:px-5 px-[150px] py-10 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border border-solid border-white-A700 flex items-center justify-center px-4 md:px-5 py-5 w-full" />
        <ContactContact27 className="flex flex-col gap-5 items-start justify-start max-w-[1140px] mx-auto w-full" />
        <ContactTeam1 className="flex flex-col gap-5 items-center justify-start max-w-[1140px] mx-auto py-2.5 w-full" />
        <AboutUsContact15 className="flex flex-col items-start justify-center max-w-[1140px] mx-auto w-full" />
        <ContactContact4 className="flex flex-col gap-5 items-start justify-start max-w-[1140px] mx-auto py-2.5 w-full" />
        <HomeFooter3desktop className="flex flex-col gap-5 items-center justify-start max-w-[1140px] mx-auto pt-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
