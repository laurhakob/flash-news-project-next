import {
  LatestNews,
  LatestNewsSkel,
} from "@/app/components/LatestNews/LatestNews";
import { Spinner } from "../components/Spinner/Spinner";
import {
  CryptoNews,
  CryptoNewsSkel,
} from "../components/CryptoNews/CryptoNews.server";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

export default function IndexPage() {
  return (
    <div className="flex justify-between">
      {/* <Spinner /> */}
      <Suspense fallback={<LatestNewsSkel />}>
        <LatestNews />
      </Suspense>

      <Suspense fallback={<CryptoNewsSkel />}>
        <CryptoNews />
      </Suspense>
    </div>
  );
}

// export const dynamic = "force-dynamic"
// export const revalidate = 10

// export default async function IndexPage() {
//   const fetch1 = await (
//     await fetch("http://api.open-notify.org/iss-now.json", {})
//   ).json();

//   const fetch2 = await (
//     await fetch("https://api.chucknorris.io/jokes/random", {})
//   ).json();

//   return (
//     <div>
//       {new Date().toLocaleTimeString()}
//       <br />
//       <br />
//       <br /> {JSON.stringify(fetch1)}
//       <br />
//       <br />
//       <br /> {JSON.stringify(fetch2)}
//     </div>
//   );
// }
