import { Helmet } from "react-helmet-async";
import ItemCart from "./ItemCart";
import useContextProvider from "../../useHooks/useContextProvider";
import { calculateTotalPrice } from "../../lib/calculateTotalPrice";
import NotFoundData from "../../components/NotFoundData/NotFoundData";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Cart() {
  const { cartItem, setTotalPrice } = useContextProvider();
  const totalPrice = calculateTotalPrice(cartItem);
  setTotalPrice(totalPrice)
  const navigate = useNavigate();

  const handleCheckOut = () => {
    if (totalPrice > 0) {
      navigate("/checkout");
      return;
    }
    toast.error("Cart is empty! Add items before checkout.");
  };

  return (
    <>
      <Helmet>
        <title>CartItem | FurniFlex</title>
      </Helmet>

      <div className="text-transparent flex items-center justify-center py-2">
        *
      </div>

      {/* main section ============= */}
      <main className="my-16 px-2 md:px-4 lg:px-6 flex justify-between gap-4 md:gap-8 lg:gap-16 xl:gap-20 ">
        {/* section 1 ================== */}
        <section className="md:flex-1 w-full">
          <h1 className="text-[#1E1E1E] hidden md:flex font-semibold text-base md:text-lg lg:text-xl xl:text-3xl ">
            An overview of your order
          </h1>
          <h1 className="text-[#1E1E1E] md:hidden font-semibold text-base md:text-lg lg:text-xl xl:text-3xl ">
            Order overview
          </h1>

          {/* cart goes here ==================== */}
          <div className="mt-5">
            {cartItem.length ? (
              cartItem?.map((item, idx) => <ItemCart key={idx} item={item} />)
            ) : (
              <NotFoundData />
            )}
          </div>
        </section>

        {/* section 2 =========== */}
        <section className="text-start w-full md:w-64 ">
          <h1 className="text-[#1E1E1E] font-semibold text-base md:text-lg lg:text-xl xl:text-3xl">
            Order details
          </h1>

          {/* details and button div start here ====================== */}
          <div>
            <div className="bg-[#FAFAFA] mt-5 border space-y-2 border-[#DEDEDE] p-3 rounded-lg">
              {/* subtotal ===== */}
              <div className="text-[#656565]  flex justify-between text-sm  md:text-lg font-normal">
                <span>Subtotal</span>
                <span className="font-medium">€{totalPrice}</span>
              </div>

              {/* shipping ====== */}
              <div className="text-[#656565] flex justify-between text-sm  md:text-lg font-normal">
                <span>Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              {/* Estimate Tax ====== */}
              <div className="text-[#656565] flex justify-between text-sm  md:text-lg font-normal">
                <span>Estimated Tax</span>
                <span className="font-medium">€ -</span>
              </div>
              {/* total count =================== */}
              <div className="text-[#656565] border-t pt-3 flex justify-between text-base  md:text-xl font-semibold">
                <span>Total</span>
                <span className=" text-[#0E0E0E]">€{totalPrice}</span>
              </div>
            </div>

            {/* button goes here =============== */}
            <button
              onClick={handleCheckOut}
              className="text-[#FFFFFF] font-medium text-sm md:text-base bg-[#000000] hover:bg-gray-800 duration-300 w-full rounded-lg py-2 mt-4 "
            >
              GO TO CHECKOUT
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
