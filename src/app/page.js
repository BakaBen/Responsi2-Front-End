"use client"

import Header from "@/components/Header";
import MangaList from "@/components/MangaList";
import Pagination from "@/components/Pagination";
import React, { useEffect, useState } from 'react'
import { getMangaResponse } from "../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1)
  const [manga, setManga] = useState([])

const fetchData = async () => {
  const data = await getMangaResponse("manga", `page=${page}`)
  setManga(data)
}

useEffect(() => {
  fetchData()
}, [page])

  return (
    <>
      <section>
        <Header title="All Manga" />
        <MangaList api={manga} />
        <Pagination page={page} lastPage={manga.pagination?.last_visible_page} setPage={setPage}/>
      </section>
    </>
  );
};

export default Page;