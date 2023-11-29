import React from "react";

import { Button, Img, List, Text } from "components";
import Header1 from "components/Header1";
import HomeFooter3desktop from "components/HomeFooter3desktop";
import PropertiesCta13 from "components/PropertiesCta13";
import PropertiesHeader26 from "components/PropertiesHeader26";
import PropertiesLayout237 from "components/PropertiesLayout237";
import PropertyDetailsPortfolio8 from "components/PropertyDetailsPortfolio8";

const PropertiesPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-center justify-start mx-auto md:px-10 sm:px-5 px-[150px] py-10 w-auto sm:w-full md:w-full">
        <Header1 className="flex flex-col gap-[30px] items-center justify-center w-full" />
        <PropertiesHeader26 className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1140px] mx-auto w-full" />
        <Img
          className="h-14 max-w-[1140px] mx-auto w-full"
          src="images/img_logo3.svg"
          alt="logoThree"
        />
        <PropertiesLayout237 className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1140px] mx-auto w-full" />
        <PropertyDetailsPortfolio8 className="flex flex-col gap-10 items-start justify-start max-w-[1140px] mx-auto py-2.5 w-full" />
        <PropertiesCta13 className="flex flex-col gap-20 items-start justify-start max-w-[1140px] mx-auto py-[5px] w-full" />
        <HomeFooter3desktop className="flex flex-col gap-5 items-center justify-start max-w-[1140px] mx-auto py-2.5 w-full" />
      </div>
    </>
  );
};

export default PropertiesPage;
