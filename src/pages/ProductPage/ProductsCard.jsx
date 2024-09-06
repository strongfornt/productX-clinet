/* eslint-disable react/prop-types */
import { BsBag } from "react-icons/bs";


export default function ProductsCard({product, handleCartItem}) {

    const {id,picture, name, current_price, old_price, percent_off, description} = product || {}


  return (
    <>
      <div className="  max-w-xs p-2  md:p-4 xl:p-6 rounded-md shadow-md border border-[#F1F1F1]  text-gray-50 dark:text-gray-900">
        <img
          src={picture}
          alt=""
          className="object-cover bg-no-repeat object-center   md:h-64 w-full rounded-md  bg-[#F2F2F2]"
        />
        <div className="mt-3 ">
          <h2 className="text-base md:text-lg text-[#343434]  font-semibold tracking-wide">
            {name}
          </h2>
        </div>
        <div className="my-1 flex gap-2 xl:gap-6">
          <span className="text-[#343434] text-base md:text-lg font-bold ">
            €{current_price}
          </span>
          <span className="text-[#ABABAB] text-base md:text-lg font-medium">
            <del>€{old_price}</del>
          </span>
          <span className="text-[#B92E2E] font-semibold text-base md:text-lg">
            {percent_off}% OFF
          </span>
        </div>
       <div className="tooltip w-fit tooltip-top" data-tip={description} >
       <p className="text-[#838383] text-start font-normal text-sm">
         {description.slice(0,55)}...
        </p>
       </div>

        <div className="mt-3">
          <button 
            onClick={() => handleCartItem(id) }
          className="bg-[#202020] flex items-center justify-center gap-2 w-full text-white py-1 text-base font-semibold rounded-md hover:bg-gray-800 duration-300 ">
            <span className=" font-bold text-lg ">
              <BsBag />
            </span>{" "}
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </>
  );
}
