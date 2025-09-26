import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const { t } = useTranslation();

  const scrollToGenerators = () => {
    const element = document.getElementById('generators');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-hero-title">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="text-hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <Button
          size="lg"
          className="text-lg px-8 py-6"
          onClick={scrollToGenerators}
          data-testid="button-hero-cta"
        >
          {t('hero.cta')}
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}