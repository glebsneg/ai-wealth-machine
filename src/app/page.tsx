import AsSeenOn from "@/components/as-seen-on/AsSeenOn";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground flex flex-col items-center justify-center">
      <Header />
      <Faq />
      <AsSeenOn />
      <Footer />
    </main>
  );
}
