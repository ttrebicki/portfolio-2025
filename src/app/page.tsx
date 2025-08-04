import { Navbar } from "@/ui/layout/Navbar";
import { Footer } from "@/ui/layout/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
      <Footer />
    </div>
  );
}
