import { Helmet } from "react-helmet-async";
import ProductsCard from "./ProductsCard";
import useContextProvider from "../../useHooks/useContextProvider";
import { useEffect } from "react";

export default function Products() {

 const {getProducts, productsData} = useContextProvider();

 useEffect(()=> {
    getProducts();

 }, []);

 console.log(productsData);
 


  return (
    <>
      <Helmet>
        <title>Products | FurniFlex</title>
      </Helmet>

      <div className="text-transparent flex items-center justify-center py-2">
        *
      </div>

      <main className=" my-16 px-2 md:px-4 lg:px-8 flex gap-4 md:gap-6  lg:gap-10  xl:gap-16 ">
        {/* categories side ================= */}
        <aside className="flex flex-col min-w-fit gap-2 border border-[#E8E8E8] p-3  pl-1 rounded-sm ">
          <button className="px-2 md:px-4 text-start text-sm md:text-lg xl:text-xl  font-semibold border rounded-md py-1 text-[#717171] hover:text-white hover:bg-black duration-300  ">
            Rocking chair
          </button>
          <button className="px-2 md:px-4 text-start text-sm md:text-lg xl:text-xl  font-semibold border rounded-md py-1 text-[#717171] hover:text-white hover:bg-black duration-300  ">
            Side chair
          </button>
          <button className="px-2 md:px-4 text-start text-sm md:text-lg xl:text-xl   font-semibold border rounded-md py-1 text-[#717171] hover:text-white hover:bg-black duration-300  ">
            Lounge chair
          </button>
        </aside>
        {/* categories side ================= */}
        {/* product side ============ */}
        <div className=" grid md:grid-cols-2  lg:grid-cols-3 gap-4">
            {
                productsData?.map((product, idx) => (
                    <ProductsCard  key={idx} product={product}  />
                ) )
            }
         
        </div>
        {/* product side ============ */}
      </main>
    </>
  );
}
