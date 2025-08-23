import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { dataFaq } from "@/components/faq/faq.data"

export default function Faq() {
  return (
    <section className="flex flex-col w-full px-4 lg:px-60 py-12 lg:py-14 bg-[#FAFAFA] font-at-chrome outline-1">
      <h2 className="text-center font-bold">{dataFaq.title}</h2>
      <Accordion
        type="multiple"
        className="space-y-2 lg:space-y-3 py-6 lg:py-9 lg:pt-9"
      >
        {dataFaq.faqItems.map((item, i) => (
          <AccordionItem value={`item-${i}`} key={item.answer + i} className="outline-1 rounded-[12px] p-6 bg-background">
            <AccordionTrigger className="flex items-center font-medium text-base lg:text-xl">{item.question}</AccordionTrigger>
            <AccordionContent className="pt-[10px] lg:pt-4 text-base lg:text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
