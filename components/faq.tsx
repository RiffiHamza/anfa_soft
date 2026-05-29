"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="faq__item">
            <button
              type="button"
              className="faq__q"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.question}
              {isOpen ? (
                <Minus size={20} strokeWidth={2} className="faq__icon" />
              ) : (
                <Plus size={20} strokeWidth={2} className="faq__icon" />
              )}
            </button>
            <div className="faq__a" data-open={isOpen || undefined}>
              <div className="faq__a-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
