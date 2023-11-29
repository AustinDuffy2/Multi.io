import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Search = React.lazy(() => import("pages/Search"));
const Contact = React.lazy(() => import("pages/Contact"));
const AIPlatform = React.lazy(() => import("pages/AIPlatform"));
const Properties = React.lazy(() => import("pages/Properties"));
const PropertyDetails = React.lazy(() => import("pages/PropertyDetails"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/aiplatform" element={<AIPlatform />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
