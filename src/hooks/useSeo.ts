import { useEffect } from 'react'

import type { SeoConfig } from '@/types/portfolio'

/** Keeps the document title/description in sync with the editable SEO config. */
export function useSeo(seo: SeoConfig) {
  useEffect(() => {
    document.title = seo.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', seo.description)
  }, [seo])
}
