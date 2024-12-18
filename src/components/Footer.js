import React from 'react'

const Footer = () => {
  return (
    <footer className="rounded-lg shadow m-4 bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023 <a className="hover:underline">RUBBEN CHRISTIANO</a>. All Rights Reserved.
            </span>
        </div>
    </footer>
  )
}

export default Footer