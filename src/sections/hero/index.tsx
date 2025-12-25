import {
  appleIcon,
  googleIcon,
  heroLeftImage,
  heroRightImage,
  logo,
} from "../../assets";

const index = () => {
  return (
    <div className="bg-dark">
      <div className="container mx-auto px-4 py-20 flex items-center justify-between text-center text-white">
        {/* left images */}
        <div className="">
          <img src={heroLeftImage} alt="Hero Left" className="h-[500px]" />
        </div>

        {/* content  */}
        <div className="flex flex-col items-center gap-4 max-w-md space-y-4">
          <div className="bg-black p-3 rounded-4xl h-40 w-40 flex items-center justify-center">
            <img src={logo} alt="Logo" className="h-32" />
          </div>
          <h1 className="text-[50px] font-bold leading-tight">
            Dozens of apps. <br />
            One subscription.
            <br /> $9.99
          </h1>
          <div className="flex gap-4">
            <button className=" bg-white text-dark rounded-md px-6 py-3 font-semibold hover:bg-gray-200 transition">
              Start Free Trial
            </button>
            <button className=" bg-white text-dark rounded-md px-3 py-3 font-semibold hover:bg-gray-200 transition">
              <img src={appleIcon} alt="Apple" className="h-6 inline-block" />
            </button>
            <button className=" bg-white text-dark rounded-md px-3 py-3 font-semibold hover:bg-gray-200 transition">
              <img
                src={googleIcon}
                alt="Google"
                className="h-6 inline-block "
              />
            </button>
          </div>
          <p className="text-[18px] font-thin leading-relaxed">
            Power up your workflow with Setapp, <br />a smart way to get apps.
          </p>
        </div>

        {/* right images */}
        <div className="">
          <img src={heroRightImage} alt="Hero Right" className="h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default index;
