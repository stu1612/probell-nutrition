import Link from "next/link";

import Hero from "./components/hero/hero";
import PromoProducts from "./components/promoProducts/PromoProducts";

export default async function Home() {
  return (
    <main>
      <nav>
        <Link href={"/products"}>Products</Link>
        <Link href={"/disclaimer"}>Disclaimer</Link>
      </nav>
      <div>
        <Hero />
        <PromoProducts />
      </div>
    </main>
  );
}
