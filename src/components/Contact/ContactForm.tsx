import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'

import { FormField } from '@/components/Contact/FormField'
import { buttonStyles } from '@/lib/button-styles'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const INITIAL_VALUES: FormValues = { name: '', email: '', subject: '', message: '' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) errors.name = 'Please enter your name.'
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'

  if (!values.email.trim()) errors.email = 'Please enter your email.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.'

  if (!values.subject.trim()) errors.subject = 'Please enter a subject.'
  else if (values.subject.trim().length < 3) errors.subject = 'Subject must be at least 3 characters.'

  if (!values.message.trim()) errors.message = 'Please enter a message.'
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'

  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const setField = (field: keyof FormValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true)
    }
  }

  const handleReset = () => {
    setValues(INITIAL_VALUES)
    setErrors({})
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        role="status"
        className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface-secondary p-10 text-center shadow-card"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 size={28} aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-foreground">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Thanks for reaching out — this is a demo form with no backend connected, but in a live
          deployment your message would be on its way.
        </p>
        <button type="button" onClick={handleReset} className={buttonStyles('secondary', 'sm', 'mt-6')}>
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form
        key="contact-form"
        onSubmit={handleSubmit}
        noValidate
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pt-2"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <FormField
            label="Name"
            name="name"
            value={values.name}
            onChange={setField('name')}
            error={errors.name}
            autoComplete="name"
            placeholder="Jane Doe"
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={setField('email')}
            error={errors.email}
            autoComplete="email"
            placeholder="jane@example.com"
          />
          <div className="sm:col-span-2">
            <FormField
              label="Subject"
              name="subject"
              value={values.subject}
              onChange={setField('subject')}
              error={errors.subject}
              placeholder="Let's work together"
            />
          </div>
          <div className="sm:col-span-2">
            <FormField
              label="Message"
              name="message"
              as="textarea"
              value={values.message}
              onChange={setField('message')}
              error={errors.message}
              placeholder="Tell me a little about your project..."
            />
          </div>
        </div>

        <button type="submit" className={buttonStyles('primary', 'md', 'mt-6 w-full sm:w-auto')}>
          <Send size={16} aria-hidden="true" />
          Send Message
        </button>
      </motion.form>
    </AnimatePresence>
  )
}
