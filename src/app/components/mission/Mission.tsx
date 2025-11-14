import { hygraph } from "@/lib/hygraph";
import { MissionBlockResult } from "./types";
import { MISSION_BLOCK } from "@/lib/queries/mission";
import { toMissionVM } from "./mappers";
import SectionLayout from "../sectionLayout/sectionLayout";

export default async function Mission() {
  const { missions } = await hygraph<MissionBlockResult>({
    query: MISSION_BLOCK,
    variables: { stage: "PUBLISHED" },
  });

  // properties
  const mission = missions?.[0];
  const layout = mission?.layout;

  // safeguard
  if (!mission || !layout?.isVisible || !mission.heading) return null;

  // ui identifyer
  const vm = toMissionVM(mission);
  return (
    // <section className="mx-auto max-w-6xl px-6 py-24 text-center">
    //   <h2>Our Mission</h2>
    //   <p className="text-lg">
    //     At Probell Nutrition, our mission is to fuel strength and performance
    //     through honesty, quality, and consistency. We pride ourselves on
    //     creating supplements that deliver real results — trusted by athletes,
    //     lifters, and everyday people who demand more from their bodies. Every
    //     product we make is built on the belief that progress comes from
    //     discipline, not shortcuts. That’s why we keep things simple and
    //     transparent — so you always know exactly what you’re taking, why it
    //     matters, and how it helps you reach your goals. Our goal is to make
    //     performance nutrition clear, effective, and accessible for everyone
    //     serious about improvement.
    //   </p>
    // </section>

    <SectionLayout layout={vm.layout}>
      <div className="mx-auto max-w-3xl text-center space-y-4">
        {vm.heading.title && (
          <h2 className="text-2xl md:text-3xl font-semibold">
            {vm.heading.title}
          </h2>
        )}

        {vm.heading.subtitle && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
            {vm.heading.subtitle}
          </p>
        )}

        {vm.heading.description && (
          <p className="text-base md:text-lg text-balance">
            {vm.heading.description}
          </p>
        )}
      </div>
    </SectionLayout>
  );
}
