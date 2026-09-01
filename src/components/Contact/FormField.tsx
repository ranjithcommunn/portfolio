import { cn } from '@/lib/cn'

interface FormFieldProps {
  label: string
  name: string
  value: string
  onChange: (value: string) => void
  error?: string
  as?: 'input' | 'textarea'
  type?: 'text' | 'email'
  placeholder?: string
  autoComplete?: string
  rows?: number
}

const fieldClasses =
  'w-full rounded-xl border bg-surface-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-faint transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30'

export function FormField({
  label,
  name,
  value,
  onChange,
  error,
  as = 'input',
  type = 'text',
  placeholder,
  autoComplete,
  rows = 5,
}: FormFieldProps) {
  const errorId = `${name}-error`

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(fieldClasses, 'resize-none', error ? 'border-danger' : 'border-border focus:border-accent')}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={cn(fieldClasses, error ? 'border-danger' : 'border-border focus:border-accent')}
        />
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  )
}
