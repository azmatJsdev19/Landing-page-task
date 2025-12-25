import { BrowserRouter } from "react-router-dom";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Hero from "./sections/hero";
import NextStep from "./sections/next-step";
import TestimonialSlider from "./sections/testimonial-slider";
import SocialActivitySlider from "./sections/social-activity-slider";
import GetStart from "./sections/get-started";

const App = () => {
  return (
    <div className="text-dark">
      <BrowserRouter>
        <Header />
        <Hero />
        <NextStep />
        <TestimonialSlider />
        <SocialActivitySlider />
        <GetStart />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
