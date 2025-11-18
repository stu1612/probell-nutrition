import About from "./components/about/About";
import Hero from "./components/hero/hero";
import Kettlebell from "./components/kettlebell/Kettlebell";
import Mission from "./components/mission/Mission";
import PromoProducts from "./components/products/PromoProducts";

export default async function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <PromoProducts />
      <Kettlebell />
      <About />
    </main>
  );
}
