import { CryptoApi } from "@/app/api/crypto-api";
import { CryptoNews as CryptonewsClient } from "./CryptoNews.client";
import Skeleton from "react-loading-skeleton";

export async function CryptoNews(p: {}) {
  const crypto = await CryptoApi.fetchBitcoin();
  return (
    <>
      <CryptonewsClient initialData={crypto} />
    </>
  );
}

export const CryptoNewsSkel = () => {
    return (
        <div>
            <Skeleton height={28} width={140} count={1} />
            <Skeleton height={108} width={320} count={1} />
          </div>
    )
}
