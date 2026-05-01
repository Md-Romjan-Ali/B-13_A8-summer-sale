
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/jP04QtS5/baner.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/20 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 ">
          <h1 className="text-4xl bg-gradient-to-r from-purple-600 via-red-600 to-orange-400 bg-clip-text text-transparent md:text-6xl font-extrabold mb-4 max-w-2xl">
            Summer Sale <span className="italic">50% </span>OFF
          </h1>
          <p className="text-3xl font-bold text-center mb-6 max-w-xl text-gray-200 ">
          Hot Deals 🔥
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default Banner;