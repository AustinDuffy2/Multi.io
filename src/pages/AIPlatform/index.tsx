import React from "react";

import {
  Button,
  Img,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import AIPlatformLayout121 from "components/AIPlatformLayout121";
import AIPlatformLayout241 from "components/AIPlatformLayout241";
import AIPlatformLayout25 from "components/AIPlatformLayout25";
import AIPlatformLayout27 from "components/AIPlatformLayout27";
import AIPlatformTestimonial7 from "components/AIPlatformTestimonial7";
import Header1 from "components/Header1";
import HomeFooter3desktop from "components/HomeFooter3desktop";
import PropertiesHeader26 from "components/PropertiesHeader26";
import PropertyDetailsCta7 from "components/PropertyDetailsCta7";

const AIPlatformPage: React.FC = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

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
        <AIPlatformLayout241 className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1140px] mx-auto py-[5px] w-full" />
        <AIPlatformLayout121 className="flex flex-col md:gap-10 gap-[100px] items-start justify-start max-w-[1140px] mx-auto w-full" />
        <AIPlatformLayout25 className="flex md:flex-col flex-row gap-6 items-center justify-start max-w-[1140px] mx-auto w-full" />
        <AIPlatformTestimonial7 className="flex flex-col gap-20 items-center justify-start max-w-[1140px] mx-auto w-full" />
        <AIPlatformLayout27 className="flex flex-col gap-5 items-start justify-start max-w-[1140px] mx-auto w-full" />
        <PropertyDetailsCta7 className="flex md:flex-col flex-row md:gap-5 items-center justify-center max-w-[1140px] mx-auto py-[5px] w-full" />
        <HomeFooter3desktop className="flex flex-col gap-5 items-center justify-start max-w-[1140px] mx-auto pt-5 w-full" />
      </div>
    </>
  );
};

export default AIPlatformPage;
