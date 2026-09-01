import { portfolio } from '@/data/portfolio'
import { useSeo } from '@/hooks/useSeo'
import { HomePage } from '@/pages/HomePage'

function App() {
  useSeo(portfolio.seo)

  return <HomePage />
}

export default App
