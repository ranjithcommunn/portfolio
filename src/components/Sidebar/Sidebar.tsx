import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'

import { Reveal } from '@/components/common/Reveal'
import { portfolio } from '@/data/portfolio'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { ICONS } from '@/lib/icons'
import { cn } from '@/lib/cn'

export function Sidebar() {
  const { profile, contactDetails } = portfolio
  const [isOpen, setIsOpen] = useState(false)
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const prefersReducedMotion = useReducedMotion()
  const contactsId = useId()

  const showContacts = isDesktop || isOpen

  return (
    <Reveal>
      <aside className="rounded-3xl border border-border bg-surface p-6 text-center shadow-card sm:p-7">
        <div className="mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-2xl bg-surface-secondary sm:h-36 sm:w-36">
          <img
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        <h1 className="mt-5 text-xl font-bold text-foreground sm:text-2xl">{profile.name}</h1>
        <p className="mt-2 inline-flex items-center rounded-full border border-border bg-surface-secondary px-2.5 py-1 text-xs font-medium text-accent">
          {profile.role}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-muted">{profile.tagline}</p>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={showContacts}
          aria-controls={contactsId}
          className="mt-5 flex w-full items-center justify-between rounded-xl border border-border bg-surface-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-border-strong md:hidden"
        >
          {showContacts ? 'Hide Contacts' : 'Show Contacts'}
          <ChevronDown
            size={16}
            className={cn('transition-transform duration-300', showContacts && 'rotate-180')}
          />
        </button>

        <AnimatePresence initial={false}>
          {(showContacts || isDesktop) && (
            <motion.div
              id={contactsId}
              key="contacts"
              initial={isDesktop || prefersReducedMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={isDesktop ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="my-5 h-px bg-border" />

              <ul className="space-y-3 text-left">
                {contactDetails.map((detail) => {
                  const Icon = ICONS[detail.icon]
                  const content = (
                    <>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-secondary text-accent">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-faint">{detail.label}</span>
                        <span className="block truncate text-sm font-medium text-foreground">
                          {detail.value}
                        </span>
                      </span>
                    </>
                  )
                  return (
                    <li key={detail.label}>
                      {detail.href ? (
                        <a href={detail.href} className="flex items-center gap-3 group">
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-3">{content}</div>
                      )}
                    </li>
                  )
                })}
              </ul>

              <div className="my-5 h-px bg-border" />

              <ul className="flex flex-wrap items-center justify-center gap-5" aria-label="Social links">
                {profile.socialLinks.map((social) => {
                  const Icon = ICONS[social.icon]
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={social.label}
                        className="flex items-center justify-center text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
                      >
                        <Icon size={19} aria-hidden="true" />
                      </a>
                    </li>
                  )
                })}
              </ul>

              <a
                href={profile.resumeUrl}
                download
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
              >
                <ICONS.download size={16} aria-hidden="true" />
                Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </Reveal>
  )
}
