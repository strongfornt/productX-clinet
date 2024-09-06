import { Helmet } from "react-helmet-async";
import ProductsCard from "./ProductsCard";
import useContextProvider from "../../useHooks/useContextProvider";
import { useEffect, useState } from "react";
import { cartManage } from "../../lib/cartmanage";
import PaginationTwo from "./PaginationTwo";
import toast from "react-hot-toast";


export default function Products() {
  const { getProducts, productsData, user, cartItem, setCartItem } =
    useContextProvider();
  const [category, setCategory] = useState("Rocking Chair");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //filtered products by category ==========
  const filteredProducts = productsData.filter(
    (product) => product.category === category
  );

  // Calculate pagination indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the current products for the page
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // handle cart item added / remove ==========
  const handleCartItem = (id) => {
    if(!user){
        toast.error('Access Denied! Please log in to add items.')
        return
        
    }
    const isExistCartItem = cartItem.find((item) => item.id === id);
    const wantedItem = productsData.find((item) => item.id === id);
    cartManage(isExistCartItem, cartItem, id, wantedItem, setCartItem)
  };


  return (
    <>
      <Helmet>
        <title>Products | FurniFlex</title>
      </Helmet>

      <div className="text-transparent flex items-center justify-center py-2">
        *
      </div>

      <main className=" mt-16 px-2 md:px-4 lg:px-6 flex justify-between md:justify-normal md:gap-6  lg:gap-10  xl:gap-16 ">
        {/* categories side ================= */}
        <aside className="flex flex-col min-w-fit gap-2 border border-[#E8E8E8] p-3  pl-1 rounded-sm ">
          <button
            onClick={() => setCategory("Rocking Chair")}
            className={`${
              category === "Rocking Chair"
                ? "bg-black text-white"
                : "text-[#717171]"
            } px-2 md:px-4 text-start text-sm md:text-lg xl:text-xl  font-semibold border rounded-md py-1  hover:text-white hover:bg-gray-800 duration-300 `}
          >
            Rocking chair
          </button>
          <button
            onClick={() => setCategory("Side Chair")}
            className={`${
              category === "Side Chair"
                ? "bg-black text-white"
                : "text-[#717171]"
            } px-2 md:px-4 text-start text-sm md:text-lg xl:text-xl  font-semibold border rounded-md py-1 hover:text-white hover:bg-gray-800 duration-300`}
          >
            Side chair
          </button>
          <button
            onClick={() => setCategory("Lounge Chair")}
            className={`${
              category === "Lounge Chair"
                ? "bg-black text-white"
                : "text-[#717171]"
            } px-2 md:px-4 text-start text-sm md:text-lg xl:text-xl  font-semibold border rounded-md py-1  hover:text-white hover:bg-gray-800 duration-300`}
          >
            Lounge chair
          </button>
        </aside>
        {/* categories side ================= */}
        {/* product side ============ */}
        <div>
          <div className=" grid  md:grid-cols-2  lg:grid-cols-3 gap-4">
            {currentProducts?.map((product, idx) => (
              <ProductsCard
                key={idx}
                product={product}
                handleCartItem={handleCartItem}
              />
            ))}
          </div>
          {/* 
          pagination =============== */}
          <div className="mb-10 mt-5">
            {/* <Pagination
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              currentPage={currentPage}
            /> */}
             <PaginationTwo currentPage={currentPage} total={totalPages} setCurrentPage={setCurrentPage} />
          </div>
        </div>
        {/* product side ============ */}
      </main>
     
    </>
  );
}
