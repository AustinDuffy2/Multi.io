import React from "react";

import { Button, Img, List, Text } from "components";
import AboutUsContact15 from "components/AboutUsContact15";
import AboutUsLayout4 from "components/AboutUsLayout4";
import AboutUsTeam8 from "components/AboutUsTeam8";
import Header from "components/Header";
import HomeContent from "components/HomeContent";
import HomeFooter3desktop from "components/HomeFooter3desktop";
import HomeListiconrelume from "components/HomeListiconrelume";

const AboutUsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-center justify-start mx-auto md:px-10 sm:px-5 px-[150px] py-10 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border border-solid border-white-A700 flex items-center justify-center px-4 md:px-5 py-5 w-full" />
        <AboutUsLayout4 className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1140px] mx-auto py-[5px] w-full" />
        <Img
          className="h-14 max-w-[1140px] mx-auto w-full"
          src="images/img_logo3.svg"
          alt="logoThree"
        />
        <AboutUsTeam8 className="flex flex-col gap-10 items-center justify-start max-w-[1140px] mx-auto w-full" />
        <HomeListiconrelume className="sm:flex-col flex-row gap-[24.99px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1140px] mx-auto py-[5.21px] w-full" />
        <AboutUsContact15 className="flex flex-col items-start justify-center max-w-[1140px] mx-auto w-full" />
        <HomeContent className="flex flex-col gap-6 items-center justify-start max-w-[1140px] mx-auto py-[5px] w-full" />
        <HomeFooter3desktop className="flex flex-col gap-5 items-center justify-start max-w-[1140px] mx-auto pb-2.5 pt-5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
