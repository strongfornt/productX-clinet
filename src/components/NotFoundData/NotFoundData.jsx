import Lottie from "lottie-react";
import notFound from "./dataNot.json"

export default function NotFoundData() {
  return (
    <>
         <div className=" max-w-sm">
          <Lottie animationData={notFound} />
        </div>
    </>
  )
}
