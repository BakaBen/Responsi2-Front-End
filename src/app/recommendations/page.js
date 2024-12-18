import HeaderMenu from '@/components/HeaderMenu'
import MangaList from '@/components/MangaList';
import { getMangaResponse } from '@/libs/api-libs';

const Recommendations = async () => {
    const manga = await getMangaResponse("top/manga", "");   
  
  return (
    <div className='text-white'>
        <HeaderMenu />
        <MangaList api={manga} />
    </div>
  )
}

export default Recommendations