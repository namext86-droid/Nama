import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export default function SEOHead({
  title,
  description,
  keywords = "name generator, names, baby names, business names, multilingual names, Arabic names, Hindi names, English names",
  ogTitle,
  ogDescription,
  ogImage = "/og-image.png",
  canonical
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Create or update meta tags
    const setMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags (avoid charset/viewport as they should be in index.html)
    setMeta('description', description);
    setMeta('keywords', keywords);

    // Open Graph tags
    setMeta('og:title', ogTitle || title, true);
    setMeta('og:description', ogDescription || description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:image', ogImage, true);
    setMeta('og:site_name', 'NamaX - Universal Name Generator', true);

    // Twitter Card tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', ogTitle || title);
    setMeta('twitter:description', ogDescription || description);
    setMeta('twitter:image', ogImage);

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Language and direction
    const currentLang = document.documentElement.lang || 'en';
    setMeta('language', currentLang);
    
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical]);

  return null; // This component doesn't render anything
}