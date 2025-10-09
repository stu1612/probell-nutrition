import Image from "next/image";
import { hygraph } from "@/lib/hygraph";
import { PROMO_PRODUCTS } from "@/lib/queries";
import { PromoProductsResult } from "@/types/hygraph";

export const revalidate = 300; // ISR refresh every 5 min

export default async function ProductsPage() {
  const data = await hygraph<PromoProductsResult>({
    query: PROMO_PRODUCTS,
    variables: { limit: 3 },
    next: { revalidate },
  });

  const items = data.productLists[0]?.product ?? [];

  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-2xl font-semibold">Promo Products</h1>
      <section className="grid gap-6 sm:grid-cols-3">
        {items.map((p) => (
          <a
            key={p.id}
            href={`/products/${p.slug}`}
            className="block rounded-2xl border p-3 hover:shadow-sm"
          >
            {p.productImage?.url && (
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={p.productImage.url}
                  alt={p.title}
                  height={200}
                  width={200}
                  className="object-cover"
                />
              </div>
            )}
            <h3 className="mt-3 text-base font-medium">{p.title}</h3>
            {p.excerpt && <p className="text-sm text-white/70">{p.excerpt}</p>}
          </a>
        ))}
      </section>
    </main>
  );
}
