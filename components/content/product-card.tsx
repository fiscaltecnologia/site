import { Product } from "contentlayer/generated";

import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import BlurImage from "../shared/blur-image";
import logoImage4 from "@/public/_static/images/pages/landing/carousel/img-4.jpg";

export function ProductCard({
  data,
  priority,
  horizontale = false,
}: {
  data: Product;
  priority?: boolean;
  horizontale?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative",
        horizontale
          ? "grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6"
          : "flex flex-col space-y-2",
      )}
    >
    <div className="w-full overflow-hidden rounded-xl border">
        <BlurImage
        alt={data.title}
        className={cn(
            "size-full object-cover object-center",
            horizontale ? "lg:h-72" : null,
        )}
        width={800}
        height={400}
        priority={priority}
        placeholder="blur"
        src={logoImage4}
        sizes="(max-width: 768px) 750px, 600px"
        />
    </div>
    
      <div
        className={cn(
          "flex flex-1 flex-col",
          horizontale ? "justify-center" : "justify-between",
        )}
      >
        <div className="w-full">
          <h2 className="my-1.5 line-clamp-2 font-heading text-2xl">
            {data.title}
          </h2>
          {data.description && (
            <p className="line-clamp-2 text-muted-foreground">
              {data.description}
            </p>
          )}
        </div>
        <div className="mt-4 flex items-center space-x-3">
          {/* <Author username={data.authors[0]} imageOnly /> */}

          <div className="flex items-center -space-x-2">
            {/* {data.authors.map((author) => (
              <Author username={author} key={data._id + author} imageOnly /> */}
            {/* ))} */}
          </div>

          {/* {data.date && (
            <p className="text-sm text-muted-foreground">
              {formatDate(data.date)}
            </p>
          )} */}
        </div>
      </div>
      <Link href={data.slug} className="absolute inset-0">
        <span className="sr-only">Ver produto</span>
      </Link>
    </article>
  );
}
