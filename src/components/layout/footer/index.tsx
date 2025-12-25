import {
  facebookBlack,
  flag,
  instagramBlack,
  logo,
  nextBlack,
  twitterBlack,
  youtubeBlack,
} from "../../../assets";

export const footerLinks = [
  {
    title: "Product",
    links: [
      "Home",
      "How it Works",
      "All Apps",
      "Pricing",
      "Setapp for Teams",
      "Blog",
      "Podcast",
      "Download",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Support",
      "Education Discount",
      "Family Plan",
      "For Developers",
      "Gift Cards",
      "Redeem Card or Code",
      "Affiliate Program",
      "Mac Developer Survey 2023",
    ],
  },
  {
    title: "Help",
    links: [
      "Getting started with Setapp",
      "Remote access to other Mac",
      "Fix macOS Ventura problems",
      "Best productivity apps",
      "Best YouTube downloaders",
      "Uninstall apps",
    ],
  },
];

const index = () => {
  return (
    <footer className="bg-[#2B2F33] text-white z-0">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-2 mb-10">
            <img src={logo} alt="Setapp" className="h-8" />
            <p className="font-medium text-white">SETAPP</p>
          </div>

          <div>
            {" "}
            <p className=" text-white mb-4">
              Updates from our team, written with love 🧡
            </p>
            <div className="flex max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-l-md bg-[#3A3F44] text-sm outline-none placeholder:text-white/50"
              />
              <button className="px-4 bg-white text-black rounded-r-md">
                <img src={nextBlack} alt="Aroow" />
              </button>
            </div>
          </div>
        </div>

        {footerLinks.map((section, idx) => (
          <div key={idx} className="space-y-3  text-white">
            {/* <p className="font-semibold text-white">{section.title}</p> */}

            {section.links.map((link, linkIdx) => (
              <p
                key={linkIdx}
                className="text-white hover:text-white cursor-pointer transition font-normal"
              >
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="container mx-auto p-6 w-full flex items-center justify-between">
        <div className="flex font-medium">
          <div className="bg-white/50 p-1">
            <p>DMCA</p>
          </div>
          <div className="bg-white/10 p-1">
            <p>PROTECTED</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src={flag} alt="Flag" className="h-8" />
          <select className="bg-transparent outline-none">
            <option>English</option>
          </select>
        </div>
      </div>
      <div className="bg-white container mx-auto h-px" />

      <div></div>

      <div>
        <div className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-6 ">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-white">
              © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
              P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
            </p>
            <div className="flex gap-4 mt-1 text-sm text-white/80">
              <p className="hover:text-white cursor-pointer">Terms of Use</p>
              <p className="hover:text-white cursor-pointer">Privacy Policy</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <img src={facebookBlack} className="h-8 cursor-pointer" />
              <img src={twitterBlack} className="h-8 cursor-pointer" />
              <img src={instagramBlack} className="h-8 cursor-pointer" />
              <img src={youtubeBlack} className="h-8 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
