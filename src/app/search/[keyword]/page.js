import Header from "@/components/Header";
import MangaList from "@/components/MangaList";
import { getMangaResponse } from "@/libs/api-libs";

const Page = async ({ params }) => {
  const {keyword} = await params
  const decodedKeyword = decodeURIComponent(keyword)
  const searchManga = await getMangaResponse("manga", `q=${keyword}`)

  return (
    <>
      <section>
        <Header title={`Search Result for ${decodedKeyword}`} />
        <MangaList api={searchManga} />
      </section>
    </>
  );
};

export default Page;