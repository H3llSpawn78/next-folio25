import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { navItems } from "@/data";
export default function Home() {
  return (
    <main className="relative bg-black-100 overflow-hidden mx-auto flex flex-col items-center justify-center sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        < Hero />
      </div>
    </main>
  );
}
