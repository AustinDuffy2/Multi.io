import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AIPlatformLayout121 from "components/AIPlatformLayout121";
import AIPlatformLayout27 from "components/AIPlatformLayout27";
import Header from "components/Header";
import HomeFooter3desktop from "components/HomeFooter3desktop";
import SearchCta45 from "components/SearchCta45";

const SearchPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-center justify-start mx-auto md:px-10 sm:px-5 px-[150px] py-10 w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 border border-solid border-white-A700 flex items-center justify-center px-4 md:px-5 py-5 w-full" />
        <AIPlatformLayout121 className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1140px] mx-auto w-full" />
        <Img
          className="h-14 max-w-[1140px] mx-auto w-full"
          src="images/img_logo3.svg"
          alt="logoThree"
        />
        <AIPlatformLayout27 className="flex flex-col gap-5 items-start justify-start max-w-[1140px] mx-auto w-full" />
        <SearchCta45 className="flex md:flex-col flex-row md:gap-5 items-center justify-center max-w-[1140px] mx-auto w-full" />
        <HomeFooter3desktop className="flex flex-col gap-5 items-center justify-start max-w-[1140px] mx-auto py-2.5 w-full" />
      </div>
    </>
  );
};

export default SearchPage;
