import chair from "../../assets/additionalPic/chair1.svg";
export default function ItemCart() {
  return (
    <>
      <section className="bg-[#FAFAFA] mt-5 flex  items-center p-3 border border-[#ECECEC] rounded-lg gap-4">
        {/* quantity div ============= */}
        <div className="min-w-fit hidden md:flex">
          <button className="py-1 px-2 md:px-4 rounded-sm border min-w-fit  text-lg font-semibold ">
            1 <span className="text-[#5C5C5C]">+</span>{" "}
          </button>
        </div>
        {/* picture and title div ================= */}

        <div className="flex flex-col md:flex-row  w-full gap-2">
          <div  className="relative  " >
            <img
              className="object-cover bg-no-repeat object-center max-w-24 rounded-md  bg-[#F2F2F2]"
              src={chair}
              alt=""
            />
             <p className=" absolute -left-[1px] -top-[1px] bg-black  w-3 h-3 flex items-center justify-center text-[8px] text-white  rounded-full " >
          <span> 1 </span>
        </p>
            <div className="absolute -right-4 -top-3  md:hidden" >
            <button className="text-[#939393] font-bold ">X</button>
            </div>
          </div>
          <p className="font-bold text-xs md:text-sm min-w-fit  ">Recliner Chair Steel</p>
          <div className="min-w-fit md:hidden flex flex-row-reverse items-baseline justify-between ">
          <button className="py-1 px-2 md:px-4 rounded-sm border min-w-fit  text-lg font-semibold ">
            1 <span className="text-[#5C5C5C]">+</span>{" "}
          </button>
          <p className="text-[#343434] text-sm md:text-lg font-bold">
                €300
              </p>
        </div>  
          <div className="hidden md:flex justify-end w-full ">
            <div className="flex flex-col justify-between items-end">
              <button className="text-[#939393] font-bold ">X</button>
              <p className="text-[#343434] text-sm md:text-lg font-bold">
                €300
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
