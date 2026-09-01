import { Container } from '@/components/common/Container'
import { portfolio } from '@/data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60">
      <Container className="px-4 py-8 text-center text-xs text-faint sm:px-6 lg:px-10">
        <p>
          © {year} {portfolio.profile.name}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
      </Container>
    </footer>
  )
}
