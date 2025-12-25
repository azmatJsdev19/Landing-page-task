import { Link } from "react-router-dom";

import { flag, logo } from "../../../assets";

export const navigationLinks = [
  { name: "How it works", href: "#" },
  { name: "All Aps", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "For Teams", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Podcast", href: "#" },
];

const index = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Setapp" className="h-8" />
        <p className="font-medium text-white">SETAPP</p>
      </div>
      <div className="flex items-center gap-8 divide-x-2 divide-x-white">
        <div className="flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-white">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="h-full w-0.75 bg-white">0</div>
        <div className="flex items-center gap-8">
          <button className="cursor-pointer text-white">
            <img src={flag} alt="Flag" className="h-8" />
          </button>
          <button className="cursor-pointer text-white">Sign In</button>
          <button className="cursor-pointer text-white rounded-md border border-white px-6 py-1.5 hover:bg-white hover:text-dark transition">
            Try Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
