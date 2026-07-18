import Link from "next/link";
import profile from "@/data/profile";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] items-center">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-blue-400">
            Bienvenido a mi portfolio
          </span>

          <h1 className="mt-4 text-5xl font-bold md:text-7xl">
            Hola, soy {profile.name}
          </h1>

          <h2 className="mt-6 text-2xl text-zinc-400 md:text-3xl">
            {profile.role}
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-zinc-500">
            {profile.description}
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="#projects"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              Ver Proyectos
            </Link>

            <Link
              href="#contact"
              className="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}