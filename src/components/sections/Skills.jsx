import skills from "@/data/skills";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section
      id="skills"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-4xl font-bold">
          Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map(([category, items]) => (
            <div
              key={category}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h3 className="mb-4 text-xl font-semibold">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}