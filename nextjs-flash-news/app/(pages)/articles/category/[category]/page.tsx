import { ArticleApi } from "@/app/api/article-api";
import { ArticleList } from "@/app/components/ArticleList/ArticleList";
import { CATEGORIES_ITEMS, NAV_ITEMS } from "@/app/constant";
// import { NavItem } from "@/app/components/Nav/NavItem";
import { Article, ArticleCategory } from "@/app/types/article-type";
import Image from "next/image";

// export const revalidate = 1000
// export function generateStaticParams() {
//   return NAV_ITEMS.map(NavItem => {
//     return {
//       category: NavItem.category,
//     }
//   })
// }

export const dynamic = "force-dynamic";

export default async function ArticlesByCategoryPage(p: {
  params: { category: ArticleCategory; articles: Article[] };
}) {
  const articles = await ArticleApi.fetchByCategory(p.params.category);
  // const articles = undefined

  return (
    <div>
      <div className="flex items-center space-x-4 mb-16">
        <Image
          src={CATEGORIES_ITEMS[p.params.category].src}
          className="h-10 w-10"
          alt="Latest news icon"
        />
        <h1 className="text-4xl font-bold capitalize">
          {p.params.category} news
        </h1>
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}

// import { CATEGORIES_ITEMS } from "@/app/components/Nav/constant";
// import { ArticleCategory } from "@/app/types/article-type";
// import Image from "next/image";

// export default function CategoryDelailPage(p: {
//   params: { category: ArticleCategory; date: string };
//   searchParams: { date: string };
// }) {
//   const categoryItem = CATEGORIES_ITEMS[p.params.category];

//   return (
//     <div className="flex items-center space-x-4">
//       <Image
//         src={categoryItem.src}
//         alt={categoryItem.alt}
//         className="w-10 h-10"
//       />
//       <h1 className="font-bold capitalize text-3xl">
//         {p.params.category} News
//       </h1>
//     </div>
//   );
// }
