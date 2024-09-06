import { Helmet } from "react-helmet-async";
import useContextProvider from "../../useHooks/useContextProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function CheckoutPage() {
    const {setCartItem, cartItem,totalPrice} = useContextProvider()
    console.log(cartItem);
    
    const navigate = useNavigate()
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const amount = parseFloat(form.amount.value);
        if(totalPrice !== amount){
            toast.error("Check your amount, it's not matching!");
            return
        }

        toast.success('Success! Payment complete. Shop more now!')
        setCartItem([])
        form.reset();
           
        
    }

    useEffect(() => {
        if (cartItem.length === 0) {
            navigate('/products');
        }
    }, [cartItem,navigate]);

  return (
    <>
       <Helmet>
            <title>Checkout | FurniFlex</title>
        </Helmet> 
        <div className="text-transparent flex items-center justify-center py-8">
        *
      </div>

      {/* main section =========== */}
      <main className="my-10 px-2 md:px-4 lg:px-6 " >

   

        <section className=""  >
        <section className="max-w-4xl p-6 mx-auto bg-[#FAFAFA] rounded-md shadow-md ">
   

    <div className="flex justify-between items-center" >
    <h2 className="text-lg font-semibold  capitalize ">Ready to Checkout?</h2>
        <h5 className="text-lg font-semibold" >
            Total price <span className="font-bold" >€{totalPrice}</span>
        </h5>
    </div>

    <form onSubmit={handleFormSubmit} >
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className=" " >Username</label>
                <input required name="name" id="name" type="text" className="block w-full px-4 py-2 mt-2  border border-[#DEDEDE] rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="" >Email Address</label>
                <input required name="email" id="email" type="email" className="block w-full px-4 py-2 mt-2  border border-[#DEDEDE] rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="" >Address</label>
                <input name="address" required id="address" type="text" className="block w-full px-4 py-2 mt-2  border border-[#DEDEDE] rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="" >Amount</label>
                <input name="amount" required id="amount" type="text" className="block w-full px-4 py-2 mt-2  border border-[#DEDEDE] rounded-md    focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Make Payment</button>
        </div>
    </form>
</section>
        </section>
      </main>
    </>
  )
}
