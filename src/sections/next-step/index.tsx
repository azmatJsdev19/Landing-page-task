import React from "react";
import {
  arrowRight,
  nextStepImage1,
  nextStepImage2,
  nextStepImage3,
  nextStepLogo1,
  nextStepLogo2,
  nextStepLogo3,
} from "../../assets";

const index = () => {
  return (
    <div className="bg-dark pt-20 pb-104">
      <div className="container mx-auto px-4 border-y border-white py-20 ">
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-4xl font-bold text-white text-center">
            What you get on Setapp.
          </h2>

          <p className="text-[18px] text-white font-thin leading-relaxed">
            With a single monthly subscription at $9.99, you get 240+ apps for
            your Mac.
          </p>
        </div>

        <div className="bg-[#DF96AE] rounded-3xl px-10 pt-10 mb-8">
          <div className="flex items-center gap-4">
            <img
              src={nextStepLogo1}
              alt="Next Step 1"
              className="h-25 rounded-2xl"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Keep your Mac clean
              </h3>
              <p className="text-[16px] font-thin leading-relaxed">
                Remove junk, scan for malware, wipe email attachments
              </p>
            </div>
          </div>
          <div>
            <img
              src={nextStepImage1}
              alt="Next Step Image 1"
              className="mt-4 rounded-2xl"
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="bg-white rounded-3xl">
            <div>
              <img
                src={nextStepImage2}
                alt="Next Step Image 1"
                className="mt-4 rounded-2xl"
              />
            </div>
            <div className="flex flex-col items-start gap-4 px-12 pb-10">
              <img
                src={nextStepLogo2}
                alt="Next Step 2"
                className="h-25 rounded-2xl"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  Keep your Mac clean
                </h3>
                <p className="text-[16px] font-thin leading-relaxed">
                  Remove junk, scan for malware, wipe email attachments
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#384C75] rounded-3xl ">
            <div className="flex flex-col items-start gap-4 px-15 pt-10">
              <img
                src={nextStepLogo3}
                alt="Next Step 3"
                className="h-25 rounded-2xl"
              />
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  Keep your Mac clean
                </h3>
                <p className="text-[16px] font-thin leading-relaxed">
                  Remove junk, scan for malware, wipe email attachments
                </p>
              </div>
            </div>
            <div>
              <img
                src={nextStepImage3}
                alt="Next Step Image 3"
                className="mt-4 rounded-2xl"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-20">
          <button className="cursor-pointer text-[18px] text-white font-medium leading-relaxed flex items-center gap-2">
            <img src={arrowRight} alt="Arrow Right" className="ml-2 h-5" /> View
            all superpowers
          </button>
        </div>

        <div className="flex items-center justify-between mt-20">
          <h2 className="text-4xl font-bold text-white text-center">
            Your Setapp journey.
          </h2>

          <p className="text-[18px] text-white font-thin leading-relaxed">
            Type in your task into Setapp search and get instant app
            recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};
export default index;
