/* eslint-disable react/prop-types */
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

export default function PaginationTwo({currentPage,total,setCurrentPage}) {
  return (
   <div className='max-w-60 mx-auto '>
      <ResponsivePagination
     current={currentPage}
     total={total}
     onPageChange={setCurrentPage}
    />
   </div>
  )
}
