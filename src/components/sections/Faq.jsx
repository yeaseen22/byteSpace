import { useState } from 'react'

import { faqs } from '../../data/content'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

function Item({ question, answer }) {
  const [open, setOpen] = useState(false)
  const id = `faq-${question.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <div className="border-b border-ink-700 last:border-b-0">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-6 py-5 text-left"
        >
          <span className="text-sm font-medium text-ink-100 sm:text-base">{question}</span>
          <span
            aria-hidden="true"
            className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink-600 text-ink-300 transition-transform duration-200 ${
              open ? 'rotate-45' : ''
            }`}
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      {open ? (
        <div id={id} className="pb-5 pr-10">
          <p className="text-sm leading-relaxed text-ink-400">{answer}</p>
        </div>
      ) : null}
    </div>
  )
}

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Can't find what you're looking for? Our team is one email away."
        />

        <div className="mt-14">
          {faqs.map((faq) => (
            <Item key={faq.question} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  )
}
