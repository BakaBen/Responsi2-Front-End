import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MangaList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3">
      {api.data?.map((manga, index) => {
        const uniqueKey = `${manga.mal_id}-${index}`;
        return (
          <div key={uniqueKey} className="max-w-sm h-full bg-gray-800 border-gray-700 rounded-lg shadow  flex flex-col items-center justify-between hover:z-10">
            <Image className="rounded-t-lg" src={manga.images.webp.image_url} alt="" width={350} height={350} />
            <div className="p-4 text-center">
              <h5 className="mb-2 md:text-lg text-base font-bold tracking-tight text-white">
                {manga.title}
              </h5>
              <div className="flex justify-center mt-4">
                <Link
                  href={`/manga/${manga.mal_id}`}
                  className="cursor-pointer inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        );
      })}

    </div>
  );
};

export default MangaList;
