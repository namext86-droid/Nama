import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Heart, Copy, Check, HeartOff, RefreshCw } from 'lucide-react';
import { addToFavorites, removeFromFavorites, isNameFavorited } from '@/lib/localStorage';

// todo: remove mock functionality - replace with real featured names with personality data
interface FeaturedName {
  name: string;
  personality: string;
  meaning: string;
  origin: string;
  traits: string[];
}

const featuredNamesData: FeaturedName[] = [
  {
    name: "Aurora",
    personality: "Creative & Inspiring",
    meaning: "Dawn, new beginnings",
    origin: "Latin",
    traits: ["Artistic", "Optimistic", "Visionary"]
  },
  {
    name: "Zara", 
    personality: "Strong & Independent",
    meaning: "Blooming flower, bright",
    origin: "Arabic/Hebrew",
    traits: ["Leadership", "Confident", "Determined"]
  },
  {
    name: "Kai",
    personality: "Peaceful & Wise",
    meaning: "Ocean, forgiveness",
    origin: "Hawaiian/Japanese", 
    traits: ["Calm", "Thoughtful", "Balanced"]
  },
  {
    name: "Phoenix",
    personality: "Resilient & Transformative",
    meaning: "Mythical bird of rebirth",
    origin: "Greek",
    traits: ["Resilient", "Transformative", "Powerful"]
  },
  {
    name: "Sage",
    personality: "Wise & Grounded",
    meaning: "Wise one, herb",
    origin: "Latin",
    traits: ["Intelligent", "Practical", "Intuitive"]
  },
  {
    name: "River",
    personality: "Free-spirited & Flowing",
    meaning: "Flowing water",
    origin: "English",
    traits: ["Adventurous", "Flexible", "Natural"]
  }
];

export default function FeaturedNames() {
  const { t } = useTranslation();
  const [featuredNames, setFeaturedNames] = useState<FeaturedName[]>(featuredNamesData);
  const [favoriteStates, setFavoriteStates] = useState<boolean[]>(
    featuredNamesData.map(name => isNameFavorited(name.name))
  );
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const refreshFeaturedNames = () => {
    // todo: remove mock functionality - fetch new featured names from API
    const shuffled = [...featuredNamesData].sort(() => 0.5 - Math.random());
    setFeaturedNames(shuffled);
    setFavoriteStates(shuffled.map(name => isNameFavorited(name.name)));
    console.log('Featured names refreshed');
  };

  const toggleFavorite = (name: string, index: number) => {
    const isFavorited = favoriteStates[index];
    
    if (isFavorited) {
      removeFromFavorites(name);
      console.log('Removed from favorites:', name);
    } else {
      addToFavorites(name, 'featured');
      console.log('Added to favorites:', name);
    }
    
    const newStates = [...favoriteStates];
    newStates[index] = !isFavorited;
    setFavoriteStates(newStates);
  };

  const copyName = async (name: string, index: number) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedIndex(index);
      console.log('Name copied:', name);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getPersonalityColor = (personality: string) => {
    const colors = {
      "Creative & Inspiring": "bg-secondary text-secondary-foreground",
      "Strong & Independent": "bg-destructive/10 text-destructive", 
      "Peaceful & Wise": "bg-primary/10 text-primary",
      "Resilient & Transformative": "bg-orange-500/10 text-orange-700 dark:text-orange-400",
      "Wise & Grounded": "bg-green-500/10 text-green-700 dark:text-green-400",
      "Free-spirited & Flowing": "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400"
    };
    return colors[personality as keyof typeof colors] || "bg-muted text-muted-foreground";
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between" data-testid="text-featured-title">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                Featured Names with Personality
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={refreshFeaturedNames}
                data-testid="button-refresh-featured"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </CardTitle>
            <CardDescription>
              Discover names that reflect unique personalities and meanings
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNames.map((featuredName, index) => (
            <Card 
              key={`${featuredName.name}-${index}`}
              className="hover-elevate transition-all duration-200 border-2 border-transparent hover:border-primary/20"
              data-testid={`card-featured-${index}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2" data-testid={`text-featured-name-${index}`}>
                      {featuredName.name}
                    </CardTitle>
                    <Badge 
                      className={`text-sm ${getPersonalityColor(featuredName.personality)}`}
                      data-testid={`badge-personality-${index}`}
                    >
                      {featuredName.personality}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleFavorite(featuredName.name, index)}
                      className="text-muted-foreground hover:text-primary p-1"
                      data-testid={`button-favorite-featured-${index}`}
                    >
                      {favoriteStates[index] ? (
                        <Heart className="h-4 w-4 fill-current text-primary" />
                      ) : (
                        <HeartOff className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyName(featuredName.name, index)}
                      className="text-muted-foreground hover:text-primary p-1"
                      data-testid={`button-copy-featured-${index}`}
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Meaning</p>
                  <p className="text-foreground" data-testid={`text-meaning-${index}`}>
                    {featuredName.meaning}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Origin</p>
                  <p className="text-foreground" data-testid={`text-origin-${index}`}>
                    {featuredName.origin}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2">Key Traits</p>
                  <div className="flex flex-wrap gap-1">
                    {featuredName.traits.map((trait, traitIndex) => (
                      <Badge 
                        key={traitIndex}
                        variant="outline" 
                        className="text-xs"
                        data-testid={`badge-trait-${index}-${traitIndex}`}
                      >
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}