import AsSeenOn from "@/components/as-seen-on/AsSeenOn";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import GetAccessSection from "@/components/get-access/GetAccessSection";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import ReviewsTiktok from "@/components/reviews-tiktok/ReviewsTiktok";
import Reviews from "@/components/reviews/Reviews";
import ShowWhenTimerFinishedWrapper from "@/components/timer/ShowWhenTimerFinishedWrapper";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground flex flex-col items-center justify-center">
      <Header />
      <Hero />
      <ReviewsTiktok />
      <Reviews />
      <Faq />
      <ShowWhenTimerFinishedWrapper>
        <GetAccessSection />
      </ShowWhenTimerFinishedWrapper>
      <AsSeenOn />
      <Footer />
    </main>
  );
}
