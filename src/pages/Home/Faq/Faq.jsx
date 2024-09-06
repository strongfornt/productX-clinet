import Lottie from "lottie-react";

import Faqs from "./Faq2.json";
import useContextProvider from "../../../useHooks/useContextProvider";

export default function Faq() {
  const {theme} = useContextProvider()
  return (
    <>
      <section className="flex gap-2  flex-row-reverse">
        <div className="  lg:flex flex-1 justify-end hidden ">
          <Lottie animationData={Faqs} />
        </div>
        <section className="flex-1 ">
          <div className="container flex flex-col justify-center px-2 py-8 mx-auto ">
            <h2
              className={`text-2xl font-bold sm:text-3xl ${
                theme === "light" && "text-[#4b5664]"
              }`}
            >
              Frequently Asked{" "}
              <span className="underline decoration-[#1E99F5] ">Questions</span>
            </h2>
            <p className={`mt-4 mb-8 ${theme === "light" && "text-[#4b5664]"}`}>
            Explore our frequently asked questions to get quick answers about our products, order tracking, and return policy. We're here to ensure your shopping experience is smooth and enjoyable.
            </p>
            <div className="space-y-4">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                What types of furniture do you offer?
                </summary>
                <p
                  className={`px-4 py-6 pt-0 ml-4 -mt-4 ${
                    theme === "light" && "text-[#4b5664]"
                  }`}
                >
                  We offer a diverse range of furniture, including sofas, chairs, tables, and storage solutions. Our collection features modern, classic, and contemporary styles to suit every taste.
                </p>
              </details>
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                How can I track my order?
                </summary>
                <p
                  className={`px-4 py-6 pt-0 ml-4 -mt-4 ${
                    theme === "light" && "text-[#4b5664]"
                  }`}
                >
                  Once your order is shipped, you&apos;ll receive a tracking number via email. You can use this number to track your shipment&apos;s progress on our website or through the carrier’s tracking system.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6   focus:outline-none focus-visible:dark:ring-violet-600">
                What is your return policy?
                </summary>
                <p
                  className={`px-4 py-6 pt-0 ml-4 -mt-4 ${
                    theme === "light" && "text-[#4b5664]"
                  }`}
                >
                  We offer a 30-day return policy on most items. If you're not satisfied with your purchase, you can return it within 30 days for a full refund or exchange, provided the item is in its original condition.
                </p>
              </details>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}