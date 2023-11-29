import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import HomeFooter3desktop from "components/HomeFooter3desktop";
import PropertyDetailsColumnheadingOne from "components/PropertyDetailsColumnheadingOne";
import PropertyDetailsContent2 from "components/PropertyDetailsContent2";
import PropertyDetailsCta7 from "components/PropertyDetailsCta7";
import PropertyDetailsFaq1 from "components/PropertyDetailsFaq1";
import PropertyDetailsLayout22 from "components/PropertyDetailsLayout22";
import PropertyDetailsPortfolio8 from "components/PropertyDetailsPortfolio8";

const PropertyDetailsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-center justify-start mx-auto md:px-10 sm:px-5 px-[150px] py-10 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border border-solid border-white-A700 flex items-center justify-center px-4 md:px-5 py-5 w-full" />
        <PropertyDetailsLayout22 className="flex flex-col gap-6 items-start justify-center max-w-[1140px] mx-auto w-full" />
        <Img
          className="h-[164px] max-w-[1140px] mx-auto w-full"
          src="images/img_logo3.svg"
          alt="logoThree"
        />
        <PropertyDetailsColumnheadingOne className="flex flex-col items-start justify-start max-w-[1140px] mx-auto w-full" />
        <PropertyDetailsContent2 className="flex flex-col items-start justify-center max-w-[1140px] mx-auto w-full" />
        <PropertyDetailsCta7 className="flex md:flex-col flex-row md:gap-5 items-center justify-center max-w-[1140px] mx-auto py-[5px] w-full" />
        <PropertyDetailsPortfolio8 className="flex flex-col gap-10 items-start justify-start max-w-[1140px] mx-auto py-2.5 w-full" />
        <PropertyDetailsFaq1 className="flex flex-col gap-10 items-center justify-start max-w-[1140px] mx-auto py-[5px] w-full" />
        <HomeFooter3desktop className="flex flex-col gap-5 items-center justify-start max-w-[1140px] mx-auto pb-2.5 pt-5 w-full" />
      </div>
    </>
  );
};

export default PropertyDetailsPage;
