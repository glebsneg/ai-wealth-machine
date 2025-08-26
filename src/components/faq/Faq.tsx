import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { dataFaq } from "@/components/faq/faq.data"
import CTAButton from "@/components/cta-button/CTAButton"

export default function Faq() {
  return (
    <section className="flex flex-col w-full px-4 lg:px-60 py-12 lg:py-14 bg-[#FAFAFA] font-at-chrome outline-1 justify-center items-center">
      <h2 className="text-[2rem] md:text-[2.75rem]">{dataFaq.title}</h2>
      <Accordion
        type="multiple"
        className="space-y-2 lg:space-y-3 py-6 lg:py-9 lg:pt-9"
      >
        {dataFaq.faqItems.map((item, i) => (
          <AccordionItem value={`item-${i}`} key={item.answer + i} className="outline-1 rounded-[0.75rem] p-6 bg-background">
            <AccordionTrigger className="flex items-center font-medium text-base lg:text-xl hover:no-underline">{item.question}</AccordionTrigger>
            <AccordionContent className="pt-2.5 lg:pt-4 text-base lg:text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <CTAButton className="md:w-100" />
    </section>
  )
}
