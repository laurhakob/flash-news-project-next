import { ArticleApi } from "@/app/api/article-api";
import { ArticleCard } from "../ArticleCard/ArticleCard";
import { ArticleList } from "../ArticleList/ArticleList";
import Image from "next/image";
import topPng from "@/public/top.png";
import Skeleton from "react-loading-skeleton";

export async function LatestNews(p: {}) {
  const articles = await ArticleApi.fetchToday();

  return (
    <>
      <div>
        <div className="flex items-center space-x-4 mb-16 ">
          <Image src={topPng} alt="Latest news icon" className="h-10 w-10" />
          <h1 className="text-4xl font-thin capitalize">Latest news</h1>
        </div>
        <ArticleList articles={articles} />
      </div>
    </>
  );
}

export const LatestNewsSkel = () => {
  return (
    <div>
    <Skeleton height={40} width={218} count={1} className="mb-16" />
    <div className="grid grid-cols-3 gap-x-8 gap-y-20">
      {Array.from({ length: 15 }).map((_, index) => (
        
        <Skeleton key={index} height={344} width={320} />
        
      ))}
    </div>
  </div>
  )
}