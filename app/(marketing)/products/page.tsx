import { allProducts } from "contentlayer/generated";

import { constructMetadata, getBlurDataURL } from "@/lib/utils";
import { ListProducts } from "@/components/content/list-products";

export const metadata = constructMetadata({
  title: "Produtos | Fiscaltech",
});

export default async function BlogPage() {
  const products = await Promise.all(
    allProducts
    //   .filter((product) => product.published)
    //   .sort((a, b) => b.date.localeCompare(a.date))
    //   .map(async (product) => ({
    //     ...product,
    //     // blurDataURL: await getBlurDataURL(product.image),
    //   })),
  );

  return <ListProducts products={allProducts} />;
}
