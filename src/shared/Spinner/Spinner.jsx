import PropagateLoader from "react-spinners/PropagateLoader";

export default function Spinner() {
  return (
    <>
      <div className="flex item-center justify-center ">
      <div className="min-h-[60vh]  flex items-center justify-center" >
      <PropagateLoader color="#66CCCC" />  
     
      </div>
      </div>
    </>
  )
}