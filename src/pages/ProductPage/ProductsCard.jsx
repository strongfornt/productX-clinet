import { BsBag } from "react-icons/bs";
import chair1 from "../../assets/additionalPic/chair1.svg";

export default function ProductsCard() {
  return (
    <>
      <div className="max-w-xs p-2 md:p-6 rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
        <img
          src={chair1}
          alt=""
          className="object-contain bg-no-repeat object-center w-full rounded-md  bg-[#F2F2F2]"
        />
        <div className="mt-3 ">
          <h2 className="text-base md:text-lg text-[#343434]  font-semibold tracking-wide">
            Recliner Chair Wood
          </h2>
        </div>
        <div className="my-1 flex gap-2 xl:gap-6">
          <span className="text-[#343434] text-base md:text-lg font-bold ">
            €299
          </span>
          <span className="text-[#ABABAB] text-sm md:text-lg font-medium">
            <del>€75.00</del>
          </span>
          <span className="text-[#B92E2E] font-semibold text-base md:text-lg">
            30% OFF
          </span>
        </div>
        <p className="text-[#838383] font-normal text-sm">
          It has a backrest that can be tilted back, and often a footrest
          extended
        </p>

        <div className="mt-3">
          <button className="bg-[#202020] flex items-center justify-center gap-2 w-full text-white py-1 text-base font-semibold rounded-md hover:bg-gray-800 duration-300 ">
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
