import type { ReactNode } from 'react'

import { Container } from '@/components/common/Container'
import { Footer } from '@/components/common/Footer'
import { Nav } from '@/components/Header/Nav'
import { Sidebar } from '@/components/Sidebar/Sidebar'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Container className="px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
        <div className="lg:grid lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start lg:gap-8 xl:grid-cols-[330px_minmax(0,1fr)] xl:gap-12">
          <div className="lg:sticky lg:top-10">
            <Sidebar />
          </div>

          <main className="mt-6 pb-24 lg:mt-0 lg:pb-0">
            <Nav />
            <div className="space-y-6 lg:mt-8 lg:space-y-8">{children}</div>
          </main>
        </div>
      </Container>

      <Footer />
    </div>
  )
}
