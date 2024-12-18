import React from 'react'
import Link from 'next/link'

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    scrollTo({ behavior: 'smooth', top: 0 })
  }

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1)
    scrollToTop()
  }

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1)
      scrollToTop()
    }
  }

  const handleFirstPage = () => {
    setPage(1)
    scrollToTop()
  }

  const handleLastPage = () => {
    setPage(lastPage)
    scrollToTop()
  }

  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='grid grid-cols-3 gap-4 w-3/5 pb-4 pt-10 px-7'>
          {page > 1 ? (
            <Link 
              href="#" 
              onClick={handlePrevPage} 
              className='container px-5 py-2 rounded-lg text-white bg-blue-500 text-center hover:bg-blue-800 transition-all'
            >
              Previous
            </Link>
          ) : (
            <div className='container px-5 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-800 transition-all text-center cursor-not-allowed'>
              Previous
            </div>
          )}

          <div className='text-white content-center text-center'>
            <p>{ page } of { lastPage }</p>
          </div>
          
          {page < lastPage ? (
          <Link 
            href="#" 
            onClick={handleNextPage} 
            className='container px-5 py-2 rounded-lg text-white bg-blue-500 text-center hover:bg-blue-800 transition-all'
          >
            Next
          </Link>
          ) : (
            <div className='container px-5 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-800 transition-all text-center cursor-not-allowed'>
              Next
            </div>
          )}
        </div>

        <div className='flex flex-col justify-center items-center mt-2'>
          {page > 1 ? (
            <Link 
              href="#" 
              onClick={handleFirstPage} 
              className='container px-5 py-2 rounded-lg text-white hover:text-blue-500 underline text-center'
            >
              return to first page?
            </Link>
          ) : (
            <div className='container px-5 py-2 rounded-lg text-white hover:text-blue-500 underline text-center cursor-not-allowed'>
              return to first page?
            </div>
          )}

          {page < lastPage ? (
            <Link 
              href="#" 
              onClick={handleLastPage} 
              className='container px-5 py-2 rounded-lg text-white hover:text-blue-500 underline text-center'
            >
              go to last page?
            </Link>
          ) : (
            <div className='container px-5 py-2 rounded-lg text-white hover:text-blue-500 underline text-center cursor-not-allowed'>
              go to last page?
            </div>
          )}
        </div>
    </div>
  )
}

export default Pagination