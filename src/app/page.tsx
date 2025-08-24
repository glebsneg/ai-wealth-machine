import AsSeenOn from "@/components/as-seen-on/AsSeenOn";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import GetAccessSection from "@/components/get-access/GetAccessSection";
import Header from "@/components/header/Header";
import ShowWhenTimerFinishedWrapper from "@/components/timer/ShowWhenTimerFinishedWrapper";
import Timer from "@/components/timer/Timer";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground flex flex-col items-center justify-center">
      <Header />
      <section className="bg-black"><Timer seconds={3} /></section>
      <Faq />
      <ShowWhenTimerFinishedWrapper>
        <GetAccessSection />
      </ShowWhenTimerFinishedWrapper>
      <AsSeenOn />
      <Footer />
    </main>
  );
}
