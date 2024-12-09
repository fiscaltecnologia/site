import { notFound } from "next/navigation";
import { allProducts } from "contentlayer/generated";

import { Mdx } from "@/components/content/mdx-components";
import { constructMetadata, getBlurDataURL } from "@/lib/utils";

import "@/styles/mdx.css";

import { Metadata } from "next";


export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slugAsParams,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const product = allProducts.find((product) => product.slugAsParams === params.slug);
  if (!product) {
    return;
  }

  const { title, description } = product;

  return constructMetadata({
    title: `${title} | Fiscaltech`,
    description: description,
  });
}

export default async function PageProduct({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const product = allProducts.find((product) => product.slugAsParams === params.slug);

  if (!product) {
    notFound();
  }

  const [images] = await Promise.all([
    await Promise.all(
      product.images.map(async (src: string) => ({
        src,
        blurDataURL: await getBlurDataURL(src),
      })),
    ),
  ]);

  return (
    <article className="container max-w-3xl py-6 lg:py-12">
      <div className="space-y-4">
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          {product.title}
        </h1>
        {product.description && (
          <p className="text-xl text-muted-foreground">{product.description}</p>
        )}
      </div>
      <hr className="my-4" />
      <Mdx code={product.body.code} images={images} />
    </article>
  );
}
