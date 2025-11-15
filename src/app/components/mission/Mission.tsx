import { MISSION_CONTENT } from "@/app/constants/mission";

export default function Mission() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {MISSION_CONTENT.title}
        </h2>

        <p className="text-base md:text-lg text-balance">
          {MISSION_CONTENT.description}
        </p>
      </div>
    </section>
  );
}
