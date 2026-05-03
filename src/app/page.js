import Banner from "@/component/Baner";
import Product from "@/component/Product";
import TopBrands from "@/component/SummerTips";
import SummerTipsHydration from "@/component/SummerTipsHydration";


export default function Home() {
  return (
    <div className="max-w-300 mx-auto">
   <Banner/>
   <SummerTipsHydration/>
   <Product/>
   <TopBrands/>
    </div>
  );
}
