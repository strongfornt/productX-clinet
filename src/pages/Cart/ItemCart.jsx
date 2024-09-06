/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import { quantityIncDec } from "../../lib/quantityIncDec";
import useContextProvider from "../../useHooks/useContextProvider";

export default function ItemCart({ item }) {
  const { id, picture, quantity, name, current_price } = item || {};
  const { cartItem, setCartItem } = useContextProvider();

  //handle increase quantity =======================
  const handleIncreaseQuantity = (id) => {
    quantityIncDec(id, cartItem, setCartItem, "inc");
  };

  // handle decrease quantity =======================
  const handleDecreaseQuantity = (id) => {
    const isExistCartItem = cartItem.find((item) => item.id === id);
    if(isExistCartItem.quantity > 1){

        quantityIncDec(id, cartItem, setCartItem, "dec");
        return
    }
    toast.error("Quantity can't be less than 1!")
  };

  //handle remove items ============================
  const handleRemoveItems = (id) => {
    quantityIncDec(id, cartItem, setCartItem, "remove");
    toast.success('Item removed from cart!')
  };

  return (
    <>
      <section className="bg-[#FAFAFA]  flex  items-center p-3 border border-[#ECECEC] rounded-lg gap-4">
        {/* quantity div ============= */}
        <div className="min-w-fit hidden md:flex">
          <div className="py-1 px-2 md:px-3 rounded-sm border min-w-fit  text-lg font-semibold ">
            <button
              onClick={() => handleDecreaseQuantity(id)}
              className="text-[#5C5C5C]"
            >
              -
            </button>{" "}
            1{" "}
            <button
              onClick={() => handleIncreaseQuantity(id)}
              className="text-[#5C5C5C]"
            >
              +
            </button>{" "}
          </div>
        </div>
        {/* picture and title div ================= */}

        <div className="flex flex-col md:flex-row  w-full gap-2">
          <div className="relative  ">
            <img
              className="object-cover bg-no-repeat object-center max-w-20 md:min-w-24 rounded-md  bg-[#F2F2F2]"
              src={picture}
              alt=""
            />
            <p className=" absolute -left-[1px] -top-[1px] bg-black  w-3 h-3 flex items-center justify-center text-[8px] text-white  rounded-full ">
              <span> {quantity} </span>
            </p>
            <div className="absolute -right-4 -top-3  md:hidden">
              <button
                onClick={() => handleRemoveItems(id)}
                className="text-[#939393] font-bold "
              >
                X
              </button>
            </div>
          </div>
          <p className="font-bold text-xs md:text-sm min-w-fit  ">{name}</p>
          <div className="min-w-fit md:hidden flex flex-row-reverse items-baseline justify-between ">
            <div className="py-1 px-2 md:px-4 rounded-sm border min-w-fit  text-lg font-semibold ">
              <button className="text-[#5C5C5C]">-</button> 1{" "}
              <button className="text-[#5C5C5C]">+</button>{" "}
            </div>
            <p className="text-[#343434] text-sm md:text-lg font-bold">
              €{current_price}
            </p>
          </div>
          <div className="hidden md:flex justify-end w-full ">
            <div className="flex flex-col justify-between items-end">
              <button
                onClick={() => handleRemoveItems(id)}
                className="text-[#939393] font-bold "
              >
                X
              </button>
              <p className="text-[#343434] text-sm md:text-lg  font-bold">
                €{current_price}
              </p>
            </div>
          </div>
        </div>

        {/* price and remove item div================ */}
        <div></div>
      </section>
    </>
  );
}
