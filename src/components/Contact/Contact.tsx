import { ContactForm } from '@/components/Contact/ContactForm'
import { ContactInfo } from '@/components/Contact/ContactInfo'
import { Reveal } from '@/components/common/Reveal'
import { Section } from '@/components/common/Section'
import { SectionHeading } from '@/components/common/SectionHeading'

export function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <Reveal>
        <SectionHeading id="contact-heading" eyebrow="Contact" title="Let's build something together" />
      </Reveal>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        Have a project in mind or just want to say hello? My inbox is always open — I try to
        reply to every message within a day or two.
      </p>

      <div className="mt-8">
        <ContactInfo />
      </div>

      <div className="mt-6">
        <ContactForm />
      </div>
    </Section>
  )
}
