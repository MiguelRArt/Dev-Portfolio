import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-lg font-bold">
          Lorem Ipsum
        </div>

        <ul className="hidden gap-8 text-sm md:flex">
          <li>
            <Link href="#about" className="hover:text-zinc-300 transition-colors">
              About
            </Link>
          </li>

          <li>
            <Link href="#skills" className="hover:text-zinc-300 transition-colors">
              Skills
            </Link>
          </li>

          <li>
            <Link href="#projects" className="hover:text-zinc-300 transition-colors">
              Projects
            </Link>
          </li>

          <li>
            <Link href="#contact" className="hover:text-zinc-300 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}