import profile from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-8 text-4xl font-bold">
          Sobre mí
        </h2>

        <p className="max-w-3xl text-lg text-zinc-400">
          {profile.description}
        </p>
      </div>
    </section>
  );
}