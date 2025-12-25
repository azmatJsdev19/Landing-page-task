import { logo } from "../../assets";

const index = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-15 py-20 bg-gray-50 rounded-2xl ">
        <img src={logo} alt="Log" className="h-20" />

        <h2 className="text-4xl font-bold mt-4">
          Superpowers starting $9.99/month.
          <br /> Free for 7 days.
        </h2>

        <div className="mt-10">
          <button className="cursor-pointer rounded-md bg-black border border-black px-6 py-1.5 hover:bg-white hover:text-dark text-white transition mr-4">
            Get started now
          </button>
          <button className="cursor-pointer rounded-md border border-black px-6 py-1.5 hover:bg-white hover:text-dark transition">
            More about setapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
