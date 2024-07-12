



import { CATEGORIES_ITEMS } from "@/app/components/Nav/constant";
import { ArticleCategory } from "@/app/types/article-type";
import Image from "next/image";

export default function CategoryDelailPage(p: {
  params: { category: ArticleCategory; date: string };
  searchParams: { date: string };
}) {
  const categoryItem = CATEGORIES_ITEMS[p.params.category];

  return (
    <div className="flex items-center space-x-4">
      <Image
        src={categoryItem.src}
        alt={categoryItem.alt}
        className="w-10 h-10"
      />
      <h1 className="font-bold capitalize text-3xl">
        {p.params.category} News
      </h1>
    </div>
  );
}
