import { Product } from "@/.contentlayer/generated";
import { ProductCard } from "./product-card";

export function ListProducts({
  products,
}: {
  products: (Product[])
}) {
  return (
    <main className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-10 xl:grid-cols-3">
        {products.map((product, idx) => (
          <ProductCard data={product} key={product._id} priority={idx <= 2} />
        ))}
      </div>
    </main>
  );
}
