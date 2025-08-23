import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { dataFaq } from "@/components/faq/faq.data"

export default function Faq() {
  return (
    <Accordion
      type="multiple"
      className="w-full"
    >
      {dataFaq.faqItems.map((item, i) => (
        <AccordionItem value={`item-${i}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              {item.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
