import AsSeenOn from "@/components/as-seen-on/AsSeenOn";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import GetAccess from "@/components/get-access/GetAccess";
import Header from "@/components/header/Header";
import Timer from "@/components/timer/Timer";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground flex flex-col items-center justify-center">
      <Header />
      <Faq />
      <section className="py-9 lg:py-14 px-4 lg:px-20 w-full lg:max-w-fit">
        <GetAccess />
      </section>
      <AsSeenOn />
      <Footer />
    </main>
  );
}
