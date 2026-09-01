import { About } from '@/components/About/About'
import { Contact } from '@/components/Contact/Contact'
import { Portfolio } from '@/components/Portfolio/Portfolio'
import { Resume } from '@/components/Resume/Resume'
import { Services } from '@/components/Services/Services'
import { Skills } from '@/components/Skills/Skills'
import { MainLayout } from '@/layouts/MainLayout'

export function HomePage() {
  return (
    <MainLayout>
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
    </MainLayout>
  )
}
