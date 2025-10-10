import { hygraph } from "@/lib/hygraph";
import { HERO_BLOCK } from "@/lib/queries";
import { HeroBlockResult } from "./types";

export const revalidate = 300; // ISR refresh every 5 min

export default async function Hero() {
  const { heroes } = await hygraph<HeroBlockResult>({
    query: HERO_BLOCK,
    variables: { stage: "PUBLSIHED" },
    next: { revalidate },
  });

  const hero = heroes?.[0];
  console.log(hero);

  const title = hero.display?.heading?.title;

  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
