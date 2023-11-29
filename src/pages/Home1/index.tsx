import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import HomeContent from "components/HomeContent";
import HomeFooter3desktop from "components/HomeFooter3desktop";
import HomeHerolanding1 from "components/HomeHerolanding1";
import HomeLayout219 from "components/HomeLayout219";
import HomeLayoutcustom1 from "components/HomeLayoutcustom1";
import HomeListframe from "components/HomeListframe";
import HomeListiconrelume from "components/HomeListiconrelume";
import HomeTestimonial4 from "components/HomeTestimonial4";

const Home1Page: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-center justify-start mx-auto md:px-10 sm:px-5 px-[150px] py-10 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border border-solid border-white-A700 flex items-center justify-center px-4 md:px-5 py-5 w-full" />
        <HomeHerolanding1 className="flex md:flex-col flex-row font-robotocondensed gap-5 items-start justify-center max-w-[1140px] mx-auto w-full" />
        <HomeListframe className="md:flex sm:flex-col flex-row font-roboto md:gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-between max-w-[1140px] mx-auto w-full" />
        <Img
          className="h-[53px] max-w-[1140px] mx-auto w-full"
          src="images/img_logo3.svg"
          alt="logoThree"
        />
        <HomeLayoutcustom1 className="flex flex-col font-roboto gap-10 items-center justify-start max-w-[1140px] mx-auto w-full" />
        <HomeLayout219 className="flex flex-col font-roboto gap-6 items-start justify-center max-w-[1140px] mx-auto w-full" />
        <HomeTestimonial4 className="flex flex-col font-roboto gap-5 items-center justify-start max-w-[1140px] mx-auto w-full" />
        <HomeListiconrelume className="sm:flex-col flex-row font-roboto gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1140px] mx-auto py-[5px] w-full" />
        <HomeContent className="flex flex-col font-roboto gap-6 items-center justify-start max-w-[1140px] mx-auto py-[5px] w-full" />
        <HomeFooter3desktop className="flex flex-col font-roboto gap-5 items-center justify-start max-w-[1140px] mx-auto py-2.5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
