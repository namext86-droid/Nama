import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Copy, Check, Heart, HeartOff } from 'lucide-react';
import { useState, useEffect } from 'react';
import { addToFavorites, removeFromFavorites, isNameFavorited } from '@/lib/localStorage';

interface NameResultsProps {
  names: string[];
  isLoading?: boolean;
  generatorType?: string;
}

export default function NameResults({ names, isLoading, generatorType = 'unknown' }: NameResultsProps) {
  const { t } = useTranslation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [favoriteStates, setFavoriteStates] = useState<boolean[]>([]);

  // Update favorite states when names change
  useEffect(() => {
    const states = names.map(name => isNameFavorited(name));
    setFavoriteStates(states);
  }, [names]);

  const copyToClipboard = async (name: string, index: number) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedIndex(index);
      console.log('Name copied to clipboard:', name);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const toggleFavorite = (name: string, index: number) => {
    const isFavorited = favoriteStates[index];
    
    if (isFavorited) {
      removeFromFavorites(name);
      console.log('Removed from favorites:', name);
    } else {
      addToFavorites(name, generatorType);
      console.log('Added to favorites:', name);
    }
    
    // Update local state
    const newStates = [...favoriteStates];
    newStates[index] = !isFavorited;
    setFavoriteStates(newStates);
  };

  if (isLoading) {
    return (
      <div className="mt-6 space-y-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 bg-muted animate-pulse rounded-md"></div>
        ))}
      </div>
    );
  }

  if (names.length === 0) {
    return (
      <div className="mt-6 text-center text-muted-foreground" data-testid="text-no-results">
        {t('results.noResults')}
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-2">
      {names.map((name, index) => (
        <Card key={index} className="p-4 flex items-center justify-between hover-elevate">
          <span className="text-foreground font-medium" data-testid={`text-result-${index}`}>
            {name}
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleFavorite(name, index)}
              className="text-muted-foreground hover:text-primary"
              data-testid={`button-favorite-${index}`}
            >
              {favoriteStates[index] ? (
                <Heart className="h-4 w-4 fill-current text-primary" />
              ) : (
                <HeartOff className="h-4 w-4" />
              )}
              <span className="sr-only">
                {favoriteStates[index] ? 'Remove from favorites' : 'Add to favorites'}
              </span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(name, index)}
              data-testid={`button-copy-${index}`}
            >
              {copiedIndex === index ? (
                <>
                  <Check className="h-4 w-4 mr-2" />
                  {t('results.copied')}
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  {t('results.copy')}
                </>
              )}
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}