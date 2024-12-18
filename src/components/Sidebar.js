import Link from "next/link";
import Image from "next/image";
import { getMangaResponse } from "@/libs/api-libs";

const Sidebar = async () => {
    const recommendations = await getMangaResponse("top/manga", "limit=8")

    return (
      <div className="bg-gray-800 bg-opacity-50 p-4">
        <h2 className="text-xl text-white font-bold mb-4">Top Manga</h2>
        <div className="flex flex-col gap-y-2">
          {recommendations.data.map((data) => (
            <Link 
              href={`/manga/${data.mal_id}`} 
              key={data.mal_id} 
              className="hover:opacity-80 transition-opacity grid grid-cols-3"
              width={80}
              height={120}
            >
              <Image 
                src={data.images.webp.image_url} 
                alt={data.title} 
                width={80} 
                height={120} 
                className="rounded-md col-span-1"
              />
              <p className="text-sm text-white font-semibold mt-1 line-clamp-1 col-span-2">{data.title}</p>
            </Link>
          ))}
        </div>
        <Link 
          href="/recommendations" 
          className="block mt-4 text-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          View More Recommendations
        </Link>
      </div>
    );
  }

export default Sidebar;