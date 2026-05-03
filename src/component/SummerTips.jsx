import Image from "next/image";

const brands = [
  {
    name: "SunShade",
    desc: "Premium sunglasses for summer",
    logo: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
  },
  {
    name: "CoolWear",
    desc: "Comfortable summer clothing",
    logo: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
  },
  {
    name: "StyleBee",
    desc: "Trendy women's fashion",
    logo: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
  },
  {
    name: "WalkEasy",
    desc: "Comfortable footwear for travel",
    logo: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
  },
];

const SummerTips = () => {
  return (
     <div className="bg-amber-200">
      <h2 className="text-4xl my-10 font-bold text-center">
        Top Brands 
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {
        brands.map((brand,index)=>
          <div key={index} className="text-center border-t-2 border-red-600 rounded-xl  p-5 bg-gray-200 ">
              <Image 
            width={50}
            height={50}
            src={brand.logo}
              alt={brand.name}
              className=" mx-auto mb-4 pt-5"
            />
<h1 className="text-2xl font-semibold">{brand.name}</h1>
<p className="pt-2">{brand.desc}</p>
          </div>
        )
      }
      </div>
    </div>
  );
};

export default SummerTips;